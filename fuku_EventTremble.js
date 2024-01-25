// Copyright (c) 2017 fuku
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//

// The latest version is from ↓
// http://www5f.biglobe.ne.jp/~fuku-labo/library/etc/

/*:
 * @plugindesc Event Tremble v1.00
 * @author fuku
 *
 * @help Makes player characters and events quiver.
 * If you make the event tremble, changing maps will cut off the effect.
 *
 * =========================================================================
 *  How To Use
 * =========================================================================
 * 
 * Start Tremble (Specify Event ID)：
 * Fuku_Plugins.EventTremble.start(EventID, Intensity, Speed, Cycle)
 * 
 * If you want the player to tremble, replace EventID with -1.
 * Intensity is the X / Width value of the tremor. Speed can be a decimal.
 * The default cycle is set to 1. 
 * A cycle consists of Left -> Right -> Left -> Base Position.
 * If a Cycle is not set. It will be permanent.
 * Example: Fuku_Plugins.EventTremble.start(-1,8,0.8);
 * 
 * 
 * Stop Trembling (Specify Event ID)：
 * Fuku_Plugins.EventTremble.stop(EventID)
 * 
 * If you want the player to stop trembling, replace EventID with -1.
 * Example: Fuku_Plugins.EventTremble.stop(-1);
 * 
 * 
 * Start Tremble (Specify Event Object)：
 * Fuku_Plugins.EventTremble.startObject(Game_CharacterBase Event, Intensity, Speed, Cycle)
 * Example：Fuku_Plugins.EventTremble.startObject($gamePlayer,8,0.8);
 * 
 * 
 * Stop Trembling (Specify Event Object)：
 * Fuku_Plugins.EventTremble.stopObject(Game_CharacterBase Event)
 * Example：Fuku_Plugins.EventTremble.stopObject($gamePlayer);
*/

var Fuku_Plugins=Fuku_Plugins||{};
Fuku_Plugins.EventTremble={Version:100};

(function(){
'use strict';

var dm_extractSaveContents=DataManager.extractSaveContents;
DataManager.extractSaveContents=function(contents){
	dm_extractSaveContents.apply(this,arguments);
	
	var restore=function(ev){
			if(!ev) {return;}
			if(ev._fuku_trembleinfo){
				var power,speed,stop_cycle;
				power=ev._fuku_trembleinfo.power;
				speed=ev._fuku_trembleinfo.speed;
				stop_cycle=ev._fuku_trembleinfo.stop_cycle;
				ev._fuku_trembleinfo=undefined;
				if(power){
					Fuku_Plugins.EventTremble.startObject(ev,power,speed,stop_cycle);
				}
			}
		};
	restore($gamePlayer);
	$gameMap.events().forEach(restore);
};

var hook_screenX=function(){
	return this._fuku_trembleinfo.screenX.call(this)+this._fuku_trembleinfo.offsetx;
};
var hook_update=function(){
	var trembleinfo=this._fuku_trembleinfo;
	trembleinfo.update.apply(this,arguments);
	if(!trembleinfo.power)return;
	trembleinfo.ang+=trembleinfo.speed;
	trembleinfo.offsetx=Math.round(Math.sin(trembleinfo.ang)*trembleinfo.power);
	if(trembleinfo.stop_ang && (trembleinfo.ang>trembleinfo.stop_ang)){
		Fuku_Plugins.EventTremble.stopObject(this);
	}
};

Fuku_Plugins.EventTremble.startObject=function(event,power,speed,stop_cycle){
	if(!event._fuku_trembleinfo){
		event._fuku_trembleinfo={ang:0.0,offsetx:0,screenX:event.screenX,update:event.update};
		event.screenX=hook_screenX;
		event.update=hook_update;
	}
	event._fuku_trembleinfo.power=power;
	event._fuku_trembleinfo.speed=speed;
	if(stop_cycle){
		event._fuku_trembleinfo.stop_cycle=stop_cycle;
		event._fuku_trembleinfo.stop_ang=event._fuku_trembleinfo.ang+stop_cycle*Math.PI*2;
	}
	else{
		event._fuku_trembleinfo.stop_cycle=null;
		event._fuku_trembleinfo.stop_ang=null;
	}
	return true;
};
Fuku_Plugins.EventTremble.start=function(eventid,power,speed,stop_cycle){
	var event=(eventid<0?$gamePlayer:$gameMap.event(eventid));
	if(!event)return false;
	return Fuku_Plugins.EventTremble.startObject(event,power,speed,stop_cycle);
};
Fuku_Plugins.EventTremble.stopObject=function(event){
	if(!event._fuku_trembleinfo)return false;
	if((event.screenX===hook_screenX)&&(event.update===hook_update)){
		event.screenX=event._fuku_trembleinfo.screenX;
		event.update=event._fuku_trembleinfo.update;
		event._fuku_trembleinfo=undefined;
	}
	else{
		event._fuku_trembleinfo.power=null;
		event._fuku_trembleinfo.ang=0.0;
		event._fuku_trembleinfo.offsetx=0;
	}
	return true;
};
Fuku_Plugins.EventTremble.stop=function(eventid){
	var event=(eventid<0?$gamePlayer:$gameMap.event(eventid));
	if(!event)return false;
	return Fuku_Plugins.EventTremble.stopObject(event);
};
Fuku_Plugins.EventTremble.speed2cycleframe=function(speed){
	return Math.PI*2/speed;
};
})();