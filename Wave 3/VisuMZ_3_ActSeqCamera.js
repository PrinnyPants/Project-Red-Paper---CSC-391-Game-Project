//=============================================================================
// VisuStella MZ - Action Sequence Camera
// VisuMZ_3_ActSeqCamera.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ActSeqCamera = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ActSeqCamera = VisuMZ.ActSeqCamera || {};
VisuMZ.ActSeqCamera.version = 1.11;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.11] [ActSeqCamera]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Action_Sequence_Camera_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds new Action Sequences functions to the VisuStella MZ
 * Battle Core plugin to give you, the game dev, control over the battle camera
 * and zoom functions.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Attach the camera to a specific point on the screen.
 * * Attach the camera to a specific target(s) on the screen.
 * * Pan the camera to be off center using the offset functions.
 * * Remove camera clamping to let the camera go out of bounds.
 * * Set the camera zoom level as you want.
 * * Tilt the camera by adjust the angle.
 * * New Options added to let the player turn on/off the battle camera.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * - VisuMZ_0_CoreEngine
 * - VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Spriteset Position Rewrite
 *
 * - The Spriteset_Battle function for updatePosition needed to be rewritten in
 * order to allow all the new features and functions added by the battle camera
 * and zoom.
 * 
 * - Camera tricks like zooming, panning, and tilting will be reset during the
 * input phase to ensure the player is able to see the whole battlefield.
 * 
 * - The player has the option to turn off the battle camera effects. If they
 * choose to turn it off, then all of this plugin's effects will be disabled
 * until they turn it back on. This is to give players control over how the
 * game visually appears in case they have motion sickness.
 *
 * ---
 *
 * ============================================================================
 * Action Sequence - Plugin Commands
 * ============================================================================
 *
 * The following are Action Sequence Plugin Commands that have been added with
 * this plugin. These are accessible from the Battle Core plugin (not this one)
 * in order to keep all the Action Sequences in place.
 * 
 * Once again, these plugin commands are only accessible through the Battle
 * Core plugin and not this one! Make sure you have the most update to date
 * version of the Battle Core for them.
 *
 * ---
 * 
 * === Action Sequences - Angle (Camera) ===
 * 
 * These action sequences allow you to have control over the camera angle.
 * 
 * ---
 *
 * ANGLE: Change Angle
 * - Changes the camera angle.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Angle:
 *   - Change the camera angle to this many degrees.
 *
 *   Duration:
 *   - Duration in frames to change camera angle.
 *
 *   Angle Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Angle?:
 *   - Wait for angle changes to complete before performing next command?
 *
 * ---
 *
 * ANGLE: Reset Angle
 * - Reset any angle settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset camera angle.
 *
 *   Angle Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Angle?:
 *   - Wait for angle changes to complete before performing next command?
 *
 * ---
 *
 * ANGLE: Wait For Angle
 * - Waits for angle changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * === Action Sequences - Camera Control ===
 *
 * These Action Sequences are battle camera-related.
 *
 * ---
 *
 * CAMERA: Clamp ON/OFF
 * - Turns battle camera clamping on/off.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Setting:
 *   - Turns camera clamping on/off.
 *
 * ---
 *
 * CAMERA: Focus Point
 * - Focus the battle camera on a certain point in the screen.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   X Coordinate:
 *   - Insert the point to focus the camera on.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Insert the point to focus the camera on.
 *   - You may use JavaScript code.
 *
 *   Duration:
 *   - Duration in frames for camera focus change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Focus Target(s)
 * - Focus the battle camera on certain battler target(s).
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Targets:
 *   - Select unit(s) to focus the battle camera on.
 *
 *   Duration:
 *   - Duration in frames for camera focus change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Offset
 * - Offset the battle camera from the focus target.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Offset X:
 *   - How much to offset the camera X by.
 *   - Negative: left. Positive: right.
 *
 *   Offset Y:
 *   - How much to offset the camera Y by.
 *   - Negative: up. Positive: down.
 *
 *   Duration:
 *   - Duration in frames for offset change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Reset
 * - Reset the battle camera settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Reset Focus?:
 *   - Reset the focus point?
 *
 *   Reset Offset?:
 *   - Reset the camera offset?
 *
 *   Duration:
 *   - Duration in frames for reset change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Wait For Camera
 * - Waits for camera changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 * 
 * === Action Sequences - Skew (Camera) ===
 * 
 * These action sequences allow you to have control over the camera skew.
 * 
 * ---
 *
 * SKEW: Change Skew
 * - Changes the camera skew.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Skew X:
 *   - Change the camera skew X to this value.
 *
 *   Skew Y:
 *   - Change the camera skew Y to this value.
 *
 *   Duration:
 *   - Duration in frames to change camera skew.
 *
 *   Skew Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Skew?:
 *   - Wait for skew changes to complete before performing next command?
 *
 * ---
 *
 * SKEW: Reset Skew
 * - Reset any skew settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset camera skew.
 *
 *   Skew Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Skew?:
 *   - Wait for skew changes to complete before performing next command?
 *
 * ---
 *
 * SKEW: Wait For Skew
 * - Waits for skew changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * === Action Sequences - Zoom (Camera) ===
 *
 * These Action Sequences are zoom-related.
 *
 * ---
 *
 * ZOOM: Change Scale
 * - Changes the zoom scale.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Scale:
 *   - The zoom scale to change to.
 *
 *   Duration:
 *   - Duration in frames to reset battle zoom.
 *
 *   Zoom Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Zoom?
 *   - Wait for zoom changes to complete before performing next command?
 *
 * ---
 *
 * ZOOM: Reset Zoom
 * - Reset any zoom settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset battle zoom.
 *
 *   Zoom Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Zoom?
 *   - Wait for zoom changes to complete before performing next command?
 *
 * ---
 *
 * ZOOM: Wait For Zoom
 * - Waits for zoom changes to complete before performing next command.
 * Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Menu Settings
 * ============================================================================
 *
 * These plugin parameters add a new options command in order to let the player
 * decide if they want the battle camera ON or OFF.
 * 
 * The player has the option to turn off the battle camera effects. If they
 * choose to turn it off, then all of this plugin's effects will be disabled
 * until they turn it back on. This is to give players control over how the
 * game visually appears in case they have motion sickness.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the Battle Camera options to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Options Name:
 *   - Command name of the option.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.11: February 16, 2023
 * * Feature Update!
 * ** Added VisuMZ Core Engine version requirements for this plugin. If you are
 *    using an outdated Core Engine by at least 50 versions, this plugin will
 *    not work. Update made by Irina.
 * 
 * Version 1.10: January 20, 2023
 * * Bug Fixes!
 * ** Corrected the battlefield offset when positioned in specific zoom
 *    levels that would otherwise offset the algorithm. Fix made by Olivia.
 * ** Corrected and updated Anti-Tint UI animation offsets for MV animations.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Update made to be more compatibile with MZ v1.6.1's Effekseer version.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.09: September 22, 2022
 * * Bug Fixes!
 * ** Camera shift fixed when moving from a different scene aside from the map
 *    to battle. Fix made by Olivia.
 * 
 * Version 1.08: May 19, 2022
 * * Compatibility Update
 * ** Camera has a different Y buffer when using VisuMZ Sideview Battle UI.
 *    Update made by Olivia.
 * * Feature Update!
 * ** Smoother clamped zooming from 1.0 to 1.999. Update made by Olivia.
 * 
 * Version 1.07: April 21, 2022
 * * Feature Update!
 * ** Rebuild the animation container for Battle Core's Anti-Tint UI so that it
 *    works properly with MV animations and zoom in sideview. Update by Irina.
 * 
 * Version 1.06: April 14, 2022
 * * Compatibility Update!
 * ** Compatibility update with Anti-Tint UI feature in combination with MV-
 *    MV-related animations for non-sideview actors. Update made by Irina.
 * 
 * Version 1.05: April 7, 2022
 * * Compatibility Update!
 * ** Compatibility update with Anti-Tint UI feature in combination with zoom
 *    for MV-related animations. Update made by Irina.
 * 
 * Version 1.04: March 31, 2022
 * * Compatibility Update!
 * ** Compatibility update with Battle Core's new Anti-Tint UI feature for
 *    MV-related animations. Update made by Irina.
 * 
 * Version 1.03: January 6, 2022
 * * Compatibility Update!
 * ** The newly added MV Animation-support should now work properly with the
 *    Action Sequence Camera plugin. Update made by Irina.
 * 
 * Version 1.02: December 4, 2020
 * * Bug Fixes!
 * ** Show Pictures should now appear in the right positions. Fix by Irina.
 * 
 * Version 1.01: October 4, 2020
 * * Bug Fixes!
 * ** Damage offsets are now corrected and in line with the latest Battle Core
 *    version.
 *
 * Version 1.00: September 23, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ActSeqCamera
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Options:struct
 * @text Options Menu
 * @type struct<Options>
 * @desc Settings for the Options Menu
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","OptionsName:str":"Battle Camera"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the Battle Camera options to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionsName:str
 * @text Options Name
 * @parent Options
 * @desc Command name of the option.
 * @default Battle Camera
 *
 */
//=============================================================================

const _0xd9ded1=_0x4f74;function _0xea97(){const _0x294d33=['battleFieldCameraY','battleFieldOffsetY','applyEasing','3977030iUsOQX','updatePositionCoreEngine','initialize','isInputting','angleDuration','BattleManager_setup','call','version','clamp','cameraOffsetDurationWhole','oHQRZ','in\x20order\x20for\x20VisuMZ_3_ActSeqCamera\x20to\x20work.','QRoVf','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','battleCameraData','ARRAYJSON','_animationContainer','_damageContainer','BattleCore','1376620qrCfZT','uslPA','updatePositionCameraRoamNew','skewTargetX','indexOf','includes','Sprite_AnimationMV_updatePosition','skewX','updatePositionZoom','hQHOd','clear','_scene','ANTI_TINT_UI','updateEffectGeometry','setup','Sprite_Battler_damageOffsetY','isUsingSideviewUiLayout','addBattleCameraCommands','ceil','zoomDuration','Scene_Options_maxCommands','cameraOffsetYTarget','ARRAYEVAL','_battleField','qOPCw','Sprite_Animation_updateEffectGeometry','ActSeqCamera','555338qJXoBC','prototype','cameraFocusTargetsX','zoomScaleTarget','zoomWholeDuration','Game_Screen_update','NtOeh','_cameraFocusTargets','height','724212HGjTwf','filter','match','updatePositionAngle','initialBattleCameraSettings','_oldCamera','skewDuration','description','updateBattleSkew','XBcwk','angleWholeDuration','ConvertParams','Linear','cameraOffsetDuration','_battleCamera','cameraOffsetX','FYIwd','isSideView','ARRAYFUNC','return\x200','Spriteset_Battle_createLowerLayer','isSceneBattle','setBattleSkew','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','getBattleAngle','_animation','_battleFieldCameraY','constructor','zoomScale','Window_Options_addGeneralOptions','Options','battleCamera','getBattleZoom','skew','cameraOffsetEasing','_targets','STRUCT','ovqeG','QKOeM','hasTargets','cameraEasing','cameraDuration','applyAnchorsForTiltEffect','_cacheScaleY','Rkuxk','NfhCF','updatePositionCameraRoamOld','_cacheScaleX','updateBattleCamera','battler','parse','HKUTm','updatePositionCamera','cameraFocusTargets','cameraOffsetY','getBattleCameraClamp','addBattleCameraCommand','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','CoreEngine','Settings','ConfigManager_applyData','VisuMZ_3_SideviewBattleUI','boxHeight','Sprite_Battler_damageOffsetX','zGjTE','min','cameraX','boxWidth','654342NmfZXI','setCameraFocusTargets','skewWholeDuration','VisuMZ_0_CoreEngine','angle','length','QgiwN','FuooZ','shake','applyData','angleEasing','kRfhu','updateBattleAngle','6VHuONM','_baseSprite','cameraY','AdjustRect','mooVx','JSON','scale','cameraFocusTarget','ConfigManager_makeData','position','isCenteredAnimation','updatePositionCameraNeutral','1775KKeaBZ','Spriteset_Battle_initialize','cameraYTarget','advanced','3852ZBXoxs','updateBattleCameraOffset','round','cameraDurationWhole','skewTargetY','803tyWUcc','NUM','anchor','addGeneralOptions','updatePositionSkew','36TJDkKT','name','width','Game_Screen_clear','6367170igEKeI','angleTarget','update','InOutSine','ARRAYSTR','max','createLowerLayer','makeData','EVAL','sqrt','cameraOffsetXTarget','cameraFocusTargetsY','screenWidth','updateBattleZoom','skewY','zoomEasing','map','status','bUylU','GKWHC','buFvc','exit','flUyf','updatePositionShake','cameraXTarget','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','clearCameraFocusTargets','OptionsName','windowAreaHeight','skewEasing','updatePosition','88aCJTBo','setBattleCameraTargets','damageOffsetY','battleCameraOption','_spriteset','clearBattleCamera','AddOption','damageOffsetX','ARRAYSTRUCT','format'];_0xea97=function(){return _0x294d33;};return _0xea97();}(function(_0x4172b0,_0x7bf67a){const _0x2e4e15=_0x4f74,_0x236747=_0x4172b0();while(!![]){try{const _0x2faed1=parseInt(_0x2e4e15(0x1c3))/0x1+parseInt(_0x2e4e15(0x238))/0x2*(parseInt(_0x2e4e15(0x22b))/0x3)+-parseInt(_0x2e4e15(0x248))/0x4*(parseInt(_0x2e4e15(0x244))/0x5)+parseInt(_0x2e4e15(0x256))/0x6+-parseInt(_0x2e4e15(0x1de))/0x7*(-parseInt(_0x2e4e15(0x1a3))/0x8)+-parseInt(_0x2e4e15(0x252))/0x9*(-parseInt(_0x2e4e15(0x1b0))/0xa)+-parseInt(_0x2e4e15(0x24d))/0xb*(parseInt(_0x2e4e15(0x1e7))/0xc);if(_0x2faed1===_0x7bf67a)break;else _0x236747['push'](_0x236747['shift']());}catch(_0x4ca46a){_0x236747['push'](_0x236747['shift']());}}}(_0xea97,0xc54db));var label=_0xd9ded1(0x1dd),tier=tier||0x0,dependencies=[_0xd9ded1(0x22e),'VisuMZ_1_BattleCore'],pluginData=$plugins[_0xd9ded1(0x1e8)](function(_0x4f5e1e){const _0x3845cc=_0xd9ded1;return _0x4f5e1e[_0x3845cc(0x195)]&&_0x4f5e1e['description'][_0x3845cc(0x1c8)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0xd9ded1(0x222)]||{},VisuMZ[_0xd9ded1(0x1f2)]=function(_0x307f75,_0x474938){const _0xe9c49e=_0xd9ded1;for(const _0x17424e in _0x474938){if(_0xe9c49e(0x214)!==_0xe9c49e(0x23c)){if(_0x17424e[_0xe9c49e(0x1e9)](/(.*):(.*)/i)){const _0x264f7d=String(RegExp['$1']),_0x239b35=String(RegExp['$2'])['toUpperCase']()['trim']();let _0x53a3da,_0x1b8abb,_0x30472f;switch(_0x239b35){case _0xe9c49e(0x24e):_0x53a3da=_0x474938[_0x17424e]!==''?Number(_0x474938[_0x17424e]):0x0;break;case'ARRAYNUM':_0x1b8abb=_0x474938[_0x17424e]!==''?JSON[_0xe9c49e(0x219)](_0x474938[_0x17424e]):[],_0x53a3da=_0x1b8abb[_0xe9c49e(0x194)](_0xb31a82=>Number(_0xb31a82));break;case _0xe9c49e(0x25e):_0x53a3da=_0x474938[_0x17424e]!==''?eval(_0x474938[_0x17424e]):null;break;case _0xe9c49e(0x1d9):_0x1b8abb=_0x474938[_0x17424e]!==''?JSON[_0xe9c49e(0x219)](_0x474938[_0x17424e]):[],_0x53a3da=_0x1b8abb['map'](_0x3c422b=>eval(_0x3c422b));break;case _0xe9c49e(0x23d):_0x53a3da=_0x474938[_0x17424e]!==''?JSON[_0xe9c49e(0x219)](_0x474938[_0x17424e]):'';break;case _0xe9c49e(0x1bf):_0x1b8abb=_0x474938[_0x17424e]!==''?JSON['parse'](_0x474938[_0x17424e]):[],_0x53a3da=_0x1b8abb[_0xe9c49e(0x194)](_0x3f0c0f=>JSON[_0xe9c49e(0x219)](_0x3f0c0f));break;case'FUNC':_0x53a3da=_0x474938[_0x17424e]!==''?new Function(JSON['parse'](_0x474938[_0x17424e])):new Function(_0xe9c49e(0x1fa));break;case _0xe9c49e(0x1f9):_0x1b8abb=_0x474938[_0x17424e]!==''?JSON[_0xe9c49e(0x219)](_0x474938[_0x17424e]):[],_0x53a3da=_0x1b8abb[_0xe9c49e(0x194)](_0x335394=>new Function(JSON[_0xe9c49e(0x219)](_0x335394)));break;case'STR':_0x53a3da=_0x474938[_0x17424e]!==''?String(_0x474938[_0x17424e]):'';break;case _0xe9c49e(0x25a):_0x1b8abb=_0x474938[_0x17424e]!==''?JSON[_0xe9c49e(0x219)](_0x474938[_0x17424e]):[],_0x53a3da=_0x1b8abb['map'](_0x460ffc=>String(_0x460ffc));break;case _0xe9c49e(0x20b):_0x30472f=_0x474938[_0x17424e]!==''?JSON[_0xe9c49e(0x219)](_0x474938[_0x17424e]):{},_0x53a3da=VisuMZ[_0xe9c49e(0x1f2)]({},_0x30472f);break;case _0xe9c49e(0x1ab):_0x1b8abb=_0x474938[_0x17424e]!==''?JSON[_0xe9c49e(0x219)](_0x474938[_0x17424e]):[],_0x53a3da=_0x1b8abb[_0xe9c49e(0x194)](_0x8a7ddd=>VisuMZ[_0xe9c49e(0x1f2)]({},JSON[_0xe9c49e(0x219)](_0x8a7ddd)));break;default:continue;}_0x307f75[_0x264f7d]=_0x53a3da;}}else _0x212f97[_0xe9c49e(0x1dd)]['Spriteset_Battle_initialize'][_0xe9c49e(0x1b6)](this),this[_0xe9c49e(0x216)]=_0x1ed677,this[_0xe9c49e(0x212)]=_0x521da6;}return _0x307f75;},(_0x3d099c=>{const _0x368b23=_0xd9ded1,_0x479076=_0x3d099c[_0x368b23(0x253)];for(const _0x48cac3 of dependencies){if(!Imported[_0x48cac3]){alert(_0x368b23(0x1bd)[_0x368b23(0x1ac)](_0x479076,_0x48cac3)),SceneManager[_0x368b23(0x199)]();break;}}const _0x9d6f9f=_0x3d099c[_0x368b23(0x1ee)];if(_0x9d6f9f[_0x368b23(0x1e9)](/\[Version[ ](.*?)\]/i)){const _0x2c3edb=Number(RegExp['$1']);_0x2c3edb!==VisuMZ[label][_0x368b23(0x1b7)]&&(alert(_0x368b23(0x19d)[_0x368b23(0x1ac)](_0x479076,_0x2c3edb)),SceneManager[_0x368b23(0x199)]());}if(_0x9d6f9f[_0x368b23(0x1e9)](/\[Tier[ ](\d+)\]/i)){const _0x366d3f=Number(RegExp['$1']);_0x366d3f<tier?(alert(_0x368b23(0x220)[_0x368b23(0x1ac)](_0x479076,_0x366d3f,tier)),SceneManager[_0x368b23(0x199)]()):'uslPA'===_0x368b23(0x1c4)?tier=Math['max'](_0x366d3f,tier):(_0x2151a2[_0x368b23(0x1f6)]=this['applyEasing'](_0x2f0b1f[_0x368b23(0x1f6)],_0x1a3e36['cameraOffsetXTarget'],_0x385543,_0x118dd1,_0x3c0195),_0x4ef6c3[_0x368b23(0x21d)]=this[_0x368b23(0x1af)](_0x288628[_0x368b23(0x21d)],_0x2ae03c[_0x368b23(0x1d8)],_0x245224,_0xd254fb,_0x3dfbd6),_0x5e5b56[_0x368b23(0x1f4)]--);}VisuMZ[_0x368b23(0x1f2)](VisuMZ[label][_0x368b23(0x222)],_0x3d099c['parameters']);})(pluginData);function _0x4f74(_0x4082b2,_0x41301c){const _0xea977f=_0xea97();return _0x4f74=function(_0x4f74d9,_0x5c1637){_0x4f74d9=_0x4f74d9-0x18f;let _0x253468=_0xea977f[_0x4f74d9];return _0x253468;},_0x4f74(_0x4082b2,_0x41301c);}if(VisuMZ[_0xd9ded1(0x221)][_0xd9ded1(0x1b7)]<1.73){let text='';text+=_0xd9ded1(0x1fe),text+=_0xd9ded1(0x1bb),alert(text),SceneManager[_0xd9ded1(0x199)]();}if(VisuMZ[_0xd9ded1(0x1c2)][_0xd9ded1(0x1b7)]<1.73){let text='';text+='VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20',text+=_0xd9ded1(0x1bb),alert(text),SceneManager[_0xd9ded1(0x199)]();}ConfigManager['battleCamera']=!![],VisuMZ[_0xd9ded1(0x1dd)][_0xd9ded1(0x240)]=ConfigManager[_0xd9ded1(0x25d)],ConfigManager[_0xd9ded1(0x25d)]=function(){const _0x2fd667=_0xd9ded1,_0x4e887c=VisuMZ['ActSeqCamera'][_0x2fd667(0x240)][_0x2fd667(0x1b6)](this);return _0x4e887c['battleCamera']=this[_0x2fd667(0x206)],_0x4e887c;},VisuMZ[_0xd9ded1(0x1dd)]['ConfigManager_applyData']=ConfigManager[_0xd9ded1(0x234)],ConfigManager['applyData']=function(_0x4e6e07){const _0x558559=_0xd9ded1;VisuMZ[_0x558559(0x1dd)][_0x558559(0x223)][_0x558559(0x1b6)](this,_0x4e6e07);if(_0x558559(0x206)in _0x4e6e07){if(_0x558559(0x21a)===_0x558559(0x20d)){const _0x3995c2=this[_0x558559(0x1be)]();_0x3995c2['cameraFocusTarget']=![],_0x3995c2[_0x558559(0x19c)]=_0x3e5d88['round'](_0x2e7f2d),_0x3995c2[_0x558559(0x246)]=_0x4a29b8[_0x558559(0x24a)](_0xf33981),_0x3995c2[_0x558559(0x210)]=_0x333164,_0x3995c2[_0x558559(0x24b)]=_0x2a0614,_0x3995c2[_0x558559(0x20f)]=_0x2c9ed7;}else this[_0x558559(0x206)]=_0x4e6e07['battleCamera'];}else{if(_0x558559(0x1f0)===_0x558559(0x1f0))this[_0x558559(0x206)]=!![];else{const _0x58a8ce=_0x585da4[_0x558559(0x1ce)][_0x558559(0x1a0)]();_0x5000dc-=_0x58a8ce/0x2*_0x5d923a[_0x558559(0x228)](0x1,_0x20b147['sqrt'](_0x5d129d-0x1));}}},TextManager[_0xd9ded1(0x1a6)]=VisuMZ['ActSeqCamera'][_0xd9ded1(0x222)][_0xd9ded1(0x205)][_0xd9ded1(0x19f)],VisuMZ['ActSeqCamera']['BattleManager_setup']=BattleManager[_0xd9ded1(0x1d1)],BattleManager[_0xd9ded1(0x1d1)]=function(_0x1d30e5,_0x3d398c,_0xd2db4b){const _0x50d4c6=_0xd9ded1;VisuMZ[_0x50d4c6(0x1dd)][_0x50d4c6(0x1b5)][_0x50d4c6(0x1b6)](this,_0x1d30e5,_0x3d398c,_0xd2db4b),this[_0x50d4c6(0x19e)]();},BattleManager[_0xd9ded1(0x19e)]=function(){const _0x477b7a=_0xd9ded1;this[_0x477b7a(0x1e5)]=[];},BattleManager[_0xd9ded1(0x21c)]=function(){const _0x281011=_0xd9ded1;if(this[_0x281011(0x1e5)]===undefined)this[_0x281011(0x19e)]();return this[_0x281011(0x1e5)];},BattleManager[_0xd9ded1(0x22c)]=function(_0x38287d){const _0x1c6eaf=_0xd9ded1;this[_0x1c6eaf(0x1e5)]=_0x38287d[_0x1c6eaf(0x1e8)]((_0x1ec91b,_0x1d030c,_0x429440)=>_0x429440[_0x1c6eaf(0x1c7)](_0x1ec91b)===_0x1d030c);},BattleManager['cameraFocusTargetsX']=function(){const _0xf82ef6=_0xd9ded1,_0x4799d6=this['cameraFocusTargets']();if(_0x4799d6['length']<=0x0)return Math[_0xf82ef6(0x24a)](Graphics['width']/0x2);let _0x43b698=_0x4799d6['reduce']((_0x2d345a,_0xa45b16)=>_0x2d345a+=_0xa45b16[_0xf82ef6(0x218)]()['x'],0x0)/_0x4799d6[_0xf82ef6(0x230)];return _0x43b698+=Math[_0xf82ef6(0x24a)]((Graphics[_0xf82ef6(0x254)]-Graphics[_0xf82ef6(0x22a)])/0x2),_0x43b698;},BattleManager[_0xd9ded1(0x18f)]=function(){const _0x16177d=_0xd9ded1,_0x3555fe=this['cameraFocusTargets']();if(_0x3555fe[_0x16177d(0x230)]<=0x0)return Math['round'](Graphics[_0x16177d(0x1e6)]/0x2);let _0x269bf8=_0x3555fe['reduce']((_0x2111c9,_0xb63881)=>_0x2111c9+=_0xb63881[_0x16177d(0x218)]()['y']-Math[_0x16177d(0x24a)](_0xb63881[_0x16177d(0x218)]()[_0x16177d(0x1e6)]/0x2),0x0)/_0x3555fe['length'];return _0x269bf8+=Math[_0x16177d(0x24a)]((Graphics['height']-Graphics[_0x16177d(0x225)])/0x2),_0x269bf8;},VisuMZ[_0xd9ded1(0x1dd)][_0xd9ded1(0x255)]=Game_Screen['prototype'][_0xd9ded1(0x1cd)],Game_Screen['prototype'][_0xd9ded1(0x1cd)]=function(){const _0x27f3c8=_0xd9ded1;VisuMZ[_0x27f3c8(0x1dd)][_0x27f3c8(0x255)][_0x27f3c8(0x1b6)](this),this['clearBattleCamera']();},Game_Screen[_0xd9ded1(0x1df)][_0xd9ded1(0x1a8)]=function(){const _0x30cd1c=_0xd9ded1;this[_0x30cd1c(0x1f5)]=this['initialBattleCameraSettings']();},Game_Screen[_0xd9ded1(0x1df)][_0xd9ded1(0x1eb)]=function(){const _0xf2a297=_0xd9ded1,_0x5f4c14=$dataSystem[_0xf2a297(0x247)][_0xf2a297(0x190)],_0x4da67e=$dataSystem[_0xf2a297(0x247)]['screenHeight'];return{'angle':0x0,'angleTarget':0x0,'angleDuration':0x0,'angleWholeDuration':0x0,'angleEasing':_0xf2a297(0x259),'cameraFocusTarget':![],'cameraX':Math[_0xf2a297(0x24a)](_0x5f4c14/0x2),'cameraY':Math['round'](_0x4da67e/0x2),'cameraXTarget':Math[_0xf2a297(0x24a)](_0x5f4c14/0x2),'cameraYTarget':Math['round'](_0x4da67e/0x2),'cameraDuration':0x0,'cameraDurationWhole':0x0,'cameraEasing':_0xf2a297(0x259),'cameraClamp':!![],'cameraOffsetX':0x0,'cameraOffsetY':0x0,'cameraOffsetXTarget':0x0,'cameraOffsetYTarget':0x0,'cameraOffsetDuration':0x0,'cameraOffsetDurationWhole':0x0,'cameraOffsetEasing':_0xf2a297(0x259),'skewX':0x0,'skewTargetX':0x0,'skewY':0x0,'skewTargetY':0x0,'skewDuration':0x0,'skewWholeDuration':0x0,'skewEasing':_0xf2a297(0x259),'zoomScale':0x1,'zoomScaleTarget':0x1,'zoomDuration':0x0,'zoomWholeDuration':0x0,'zoomEasing':_0xf2a297(0x259)};},Game_Screen[_0xd9ded1(0x1df)][_0xd9ded1(0x1be)]=function(){const _0x81a74e=_0xd9ded1;if(this[_0x81a74e(0x1f5)]===undefined)this[_0x81a74e(0x1a8)]();if(!ConfigManager[_0x81a74e(0x206)])return this['initialBattleCameraSettings']();return this['_battleCamera'];},VisuMZ[_0xd9ded1(0x1dd)][_0xd9ded1(0x1e3)]=Game_Screen[_0xd9ded1(0x1df)][_0xd9ded1(0x258)],Game_Screen[_0xd9ded1(0x1df)][_0xd9ded1(0x258)]=function(){const _0x458547=_0xd9ded1;VisuMZ[_0x458547(0x1dd)][_0x458547(0x1e3)][_0x458547(0x1b6)](this),this[_0x458547(0x237)](),this[_0x458547(0x217)](),this[_0x458547(0x249)](),this[_0x458547(0x1ef)](),this[_0x458547(0x191)]();},Game_Screen['prototype']['setBattleAngle']=function(_0x30c778,_0x39d2ad,_0x93c058){const _0x1b820a=_0xd9ded1,_0x30ca5e=this['battleCameraData']();_0x30ca5e[_0x1b820a(0x257)]=-_0x30c778,_0x30ca5e[_0x1b820a(0x1b4)]=_0x39d2ad,_0x30ca5e['angleWholeDuration']=_0x39d2ad,_0x30ca5e[_0x1b820a(0x235)]=_0x93c058;},Game_Screen[_0xd9ded1(0x1df)][_0xd9ded1(0x237)]=function(){const _0x5125fe=_0xd9ded1;if(!SceneManager[_0x5125fe(0x1fc)]())return;const _0x32a948=this[_0x5125fe(0x1be)](),_0x5a9cac=_0x32a948[_0x5125fe(0x1b4)],_0x2d90b2=_0x32a948[_0x5125fe(0x1f1)],_0xb195aa=_0x32a948['angleEasing'];_0x5a9cac>0x0?(_0x32a948[_0x5125fe(0x22f)]=this[_0x5125fe(0x1af)](_0x32a948[_0x5125fe(0x22f)],_0x32a948[_0x5125fe(0x257)],_0x5a9cac,_0x2d90b2,_0xb195aa),_0x32a948[_0x5125fe(0x1b4)]--):_0x32a948[_0x5125fe(0x22f)]=_0x32a948['angleTarget'];},Game_Screen[_0xd9ded1(0x1df)]['setBattleCameraPoint']=function(_0x7e3c50,_0x3f9224,_0xa60b41,_0x322411){const _0x3437f4=_0xd9ded1,_0x389048=this[_0x3437f4(0x1be)]();_0x389048[_0x3437f4(0x23f)]=![],_0x389048['cameraXTarget']=Math[_0x3437f4(0x24a)](_0x7e3c50),_0x389048[_0x3437f4(0x246)]=Math['round'](_0x3f9224),_0x389048['cameraDuration']=_0xa60b41,_0x389048[_0x3437f4(0x24b)]=_0xa60b41,_0x389048[_0x3437f4(0x20f)]=_0x322411;},Game_Screen['prototype'][_0xd9ded1(0x1a4)]=function(_0x189074,_0x3f47a0,_0x1ccbac){const _0x29ae78=_0xd9ded1;if(_0x189074[_0x29ae78(0x230)]<=0x0)return;const _0xa01ba9=this['battleCameraData']();_0xa01ba9[_0x29ae78(0x23f)]=!![],BattleManager[_0x29ae78(0x22c)](_0x189074),_0xa01ba9[_0x29ae78(0x210)]=_0x3f47a0,_0xa01ba9[_0x29ae78(0x24b)]=_0x3f47a0,_0xa01ba9[_0x29ae78(0x20f)]=_0x1ccbac;},Game_Screen[_0xd9ded1(0x1df)][_0xd9ded1(0x217)]=function(){const _0x4d2d3a=_0xd9ded1;if(!SceneManager[_0x4d2d3a(0x1fc)]())return;const _0x200d7d=this[_0x4d2d3a(0x1be)](),_0x324145=_0x200d7d['cameraDuration'],_0x255beb=_0x200d7d[_0x4d2d3a(0x24b)],_0x31c3b5=_0x200d7d[_0x4d2d3a(0x20f)];_0x200d7d[_0x4d2d3a(0x23f)]&&(_0x200d7d[_0x4d2d3a(0x19c)]=BattleManager[_0x4d2d3a(0x1e0)](),_0x200d7d['cameraYTarget']=BattleManager[_0x4d2d3a(0x18f)]());if(_0x324145>0x0)_0x200d7d[_0x4d2d3a(0x229)]=this[_0x4d2d3a(0x1af)](_0x200d7d['cameraX'],_0x200d7d[_0x4d2d3a(0x19c)],_0x324145,_0x255beb,_0x31c3b5),_0x200d7d['cameraY']=this['applyEasing'](_0x200d7d[_0x4d2d3a(0x23a)],_0x200d7d[_0x4d2d3a(0x246)],_0x324145,_0x255beb,_0x31c3b5),_0x200d7d[_0x4d2d3a(0x210)]--;else{if(_0x4d2d3a(0x196)===_0x4d2d3a(0x196))_0x200d7d['cameraX']=_0x200d7d[_0x4d2d3a(0x19c)],_0x200d7d[_0x4d2d3a(0x23a)]=_0x200d7d[_0x4d2d3a(0x246)];else return 0x18;}},Game_Screen[_0xd9ded1(0x1df)]['setBattleCameraOffset']=function(_0x3b6460,_0x5313a7,_0x44c797,_0x3bdb78){const _0x5dfc12=_0xd9ded1,_0x1eb55d=this[_0x5dfc12(0x1be)]();_0x1eb55d[_0x5dfc12(0x260)]=Math[_0x5dfc12(0x24a)](_0x3b6460),_0x1eb55d['cameraOffsetYTarget']=Math[_0x5dfc12(0x24a)](_0x5313a7),_0x1eb55d[_0x5dfc12(0x1f4)]=_0x44c797,_0x1eb55d['cameraOffsetDurationWhole']=_0x44c797,_0x1eb55d[_0x5dfc12(0x209)]=_0x3bdb78;},Game_Screen[_0xd9ded1(0x1df)][_0xd9ded1(0x249)]=function(){const _0x2485b0=_0xd9ded1;if(!SceneManager[_0x2485b0(0x1fc)]())return;const _0x26c6dd=this['battleCameraData'](),_0x1a6428=_0x26c6dd['cameraOffsetDuration'],_0x1c14c4=_0x26c6dd[_0x2485b0(0x1b9)],_0x5ebbd5=_0x26c6dd[_0x2485b0(0x209)];_0x1a6428>0x0?'oHQRZ'===_0x2485b0(0x1ba)?(_0x26c6dd[_0x2485b0(0x1f6)]=this['applyEasing'](_0x26c6dd[_0x2485b0(0x1f6)],_0x26c6dd[_0x2485b0(0x260)],_0x1a6428,_0x1c14c4,_0x5ebbd5),_0x26c6dd[_0x2485b0(0x21d)]=this['applyEasing'](_0x26c6dd[_0x2485b0(0x21d)],_0x26c6dd[_0x2485b0(0x1d8)],_0x1a6428,_0x1c14c4,_0x5ebbd5),_0x26c6dd[_0x2485b0(0x1f4)]--):(_0x3336a5(_0x2485b0(0x19d)[_0x2485b0(0x1ac)](_0x37103a,_0x2c9bbd)),_0x381bb4[_0x2485b0(0x199)]()):(_0x26c6dd['cameraOffsetX']=_0x26c6dd[_0x2485b0(0x260)],_0x26c6dd[_0x2485b0(0x21d)]=_0x26c6dd[_0x2485b0(0x1d8)]);},Game_Screen['prototype'][_0xd9ded1(0x1fd)]=function(_0x438edd,_0xb58c81,_0x12d989,_0x5f587f){const _0x388385=_0xd9ded1,_0x3a9ca4=this[_0x388385(0x1be)]();_0x3a9ca4[_0x388385(0x1c6)]=_0x438edd,_0x3a9ca4[_0x388385(0x24c)]=_0xb58c81,_0x3a9ca4[_0x388385(0x1ed)]=_0x12d989,_0x3a9ca4['skewWholeDuration']=_0x12d989,_0x3a9ca4[_0x388385(0x1a1)]=_0x5f587f;},Game_Screen[_0xd9ded1(0x1df)]['updateBattleSkew']=function(){const _0x56ba08=_0xd9ded1;if(!SceneManager[_0x56ba08(0x1fc)]())return;const _0x2402a8=this['battleCameraData'](),_0x39ccc7=_0x2402a8['skewDuration'],_0x53d19c=_0x2402a8[_0x56ba08(0x22d)],_0x13ed4d=_0x2402a8['skewEasing'];_0x39ccc7>0x0?(_0x2402a8[_0x56ba08(0x1ca)]=this[_0x56ba08(0x1af)](_0x2402a8[_0x56ba08(0x1ca)],_0x2402a8[_0x56ba08(0x1c6)],_0x39ccc7,_0x53d19c,_0x13ed4d),_0x2402a8['skewY']=this[_0x56ba08(0x1af)](_0x2402a8[_0x56ba08(0x192)],_0x2402a8[_0x56ba08(0x24c)],_0x39ccc7,_0x53d19c,_0x13ed4d),_0x2402a8[_0x56ba08(0x1ed)]--):(_0x2402a8[_0x56ba08(0x1ca)]=_0x2402a8[_0x56ba08(0x1c6)],_0x2402a8[_0x56ba08(0x192)]=_0x2402a8[_0x56ba08(0x24c)]);},Game_Screen[_0xd9ded1(0x1df)]['setBattleZoom']=function(_0x3da696,_0x4fbf78,_0x3fba8c){const _0x49ba4b=_0xd9ded1,_0xdab030=this[_0x49ba4b(0x1be)]();_0xdab030['zoomScaleTarget']=_0x3da696,_0xdab030[_0x49ba4b(0x1d6)]=_0x4fbf78,_0xdab030[_0x49ba4b(0x1e2)]=_0x4fbf78,_0xdab030[_0x49ba4b(0x193)]=_0x3fba8c;},Game_Screen[_0xd9ded1(0x1df)][_0xd9ded1(0x191)]=function(){const _0x200de3=_0xd9ded1;if(!SceneManager[_0x200de3(0x1fc)]())return;const _0x109019=this['battleCameraData'](),_0x2ad9f4=_0x109019['zoomDuration'],_0x435237=_0x109019[_0x200de3(0x1e2)],_0x491b6f=_0x109019[_0x200de3(0x193)];_0x2ad9f4>0x0?(_0x109019[_0x200de3(0x203)]=this[_0x200de3(0x1af)](_0x109019[_0x200de3(0x203)],_0x109019['zoomScaleTarget'],_0x2ad9f4,_0x435237,_0x491b6f),_0x109019[_0x200de3(0x1d6)]--):_0x109019[_0x200de3(0x203)]=_0x109019[_0x200de3(0x1e1)];},Game_Screen['prototype'][_0xd9ded1(0x1af)]=function(_0x37364c,_0x3bb949,_0x2be84a,_0x280896,_0x347946){const _0x489180=_0xd9ded1,_0x30ba09=VisuMZ['ApplyEasing']((_0x280896-_0x2be84a)/_0x280896,_0x347946||_0x489180(0x1f3)),_0x15e142=VisuMZ['ApplyEasing']((_0x280896-_0x2be84a+0x1)/_0x280896,_0x347946||_0x489180(0x1f3)),_0xf01e2f=(_0x37364c-_0x3bb949*_0x30ba09)/(0x1-_0x30ba09);return _0xf01e2f+(_0x3bb949-_0xf01e2f)*_0x15e142;},VisuMZ['ActSeqCamera'][_0xd9ded1(0x1d7)]=Scene_Options[_0xd9ded1(0x1df)]['maxCommands'],Scene_Options[_0xd9ded1(0x1df)]['maxCommands']=function(){const _0x1e702e=_0xd9ded1;let _0x594f7b=VisuMZ[_0x1e702e(0x1dd)]['Scene_Options_maxCommands'][_0x1e702e(0x1b6)](this);const _0x1b0949=VisuMZ[_0x1e702e(0x1dd)][_0x1e702e(0x222)];if(_0x1b0949[_0x1e702e(0x205)][_0x1e702e(0x1a9)]&&_0x1b0949['Options'][_0x1e702e(0x23b)])_0x594f7b++;return _0x594f7b;},VisuMZ[_0xd9ded1(0x1dd)][_0xd9ded1(0x226)]=Sprite_Battler[_0xd9ded1(0x1df)][_0xd9ded1(0x1aa)],Sprite_Battler['prototype']['damageOffsetX']=function(){const _0x20ddee=_0xd9ded1;let _0x2cc07e=VisuMZ['ActSeqCamera'][_0x20ddee(0x226)][_0x20ddee(0x1b6)](this);return _0x2cc07e+=Math[_0x20ddee(0x24a)]((Graphics[_0x20ddee(0x254)]-Graphics['boxWidth'])/0x2),_0x2cc07e;},VisuMZ[_0xd9ded1(0x1dd)][_0xd9ded1(0x1d2)]=Sprite_Battler['prototype']['damageOffsetY'],Sprite_Battler[_0xd9ded1(0x1df)][_0xd9ded1(0x1a5)]=function(){const _0x4c6af0=_0xd9ded1;let _0x364e3e=VisuMZ[_0x4c6af0(0x1dd)][_0x4c6af0(0x1d2)]['call'](this);return _0x364e3e+=Math[_0x4c6af0(0x24a)]((Graphics['height']-Graphics[_0x4c6af0(0x225)])/0x2),_0x364e3e;},VisuMZ[_0xd9ded1(0x1dd)][_0xd9ded1(0x1dc)]=Sprite_Animation[_0xd9ded1(0x1df)]['updateEffectGeometry'],Sprite_Animation[_0xd9ded1(0x1df)][_0xd9ded1(0x1d0)]=function(){const _0x752abd=_0xd9ded1,_0x3a21e0=this[_0x752abd(0x200)][_0x752abd(0x23e)];if(SceneManager[_0x752abd(0x1ce)][_0x752abd(0x1a7)]){if(_0x752abd(0x1cc)===_0x752abd(0x1db)){const _0x311fd1=this[_0x752abd(0x20a)][0x0];if(_0x311fd1['constructor']===_0x29ca9a)return![];}else{const _0x9d2fde=SceneManager['_scene'][_0x752abd(0x1a7)];this[_0x752abd(0x200)][_0x752abd(0x23e)]*=_0x9d2fde['scale']['x'];}}VisuMZ['ActSeqCamera'][_0x752abd(0x1dc)][_0x752abd(0x1b6)](this),this[_0x752abd(0x200)][_0x752abd(0x23e)]=_0x3a21e0;},VisuMZ['ActSeqCamera'][_0xd9ded1(0x1c9)]=Sprite_AnimationMV[_0xd9ded1(0x1df)]['updatePosition'],Sprite_AnimationMV[_0xd9ded1(0x1df)][_0xd9ded1(0x1a2)]=function(){const _0x39902c=_0xd9ded1;VisuMZ[_0x39902c(0x1dd)][_0x39902c(0x1c9)]['call'](this);if(!SceneManager['isSceneBattle']())return;Spriteset_Battle[_0x39902c(0x1cf)]?(this['x']-=$spriteset['width']/0x2,this['y']-=$spriteset['height']/0x2):(this['x']+=$spriteset[_0x39902c(0x254)]/0x2,this['y']+=$spriteset[_0x39902c(0x1e6)]/0x2);},Sprite_AnimationMV[_0xd9ded1(0x1df)][_0xd9ded1(0x242)]=function(){const _0x4fc5a4=_0xd9ded1;return this[_0x4fc5a4(0x200)][_0x4fc5a4(0x241)]===0x3;},Sprite_AnimationMV[_0xd9ded1(0x1df)][_0xd9ded1(0x20e)]=function(){const _0x42141c=_0xd9ded1;return this[_0x42141c(0x20a)][_0x42141c(0x230)]>0x0;},Sprite_AnimationMV['prototype']['forSideviewTargets']=function(){const _0x1a9b1d=_0xd9ded1;if(!$gameSystem[_0x1a9b1d(0x1f8)]()){const _0x4cf3e3=this[_0x1a9b1d(0x20a)][0x0];if(_0x4cf3e3[_0x1a9b1d(0x202)]===Sprite_Actor)return![];}return!![];},VisuMZ[_0xd9ded1(0x1dd)]['Spriteset_Battle_initialize']=Spriteset_Battle['prototype']['initialize'],Spriteset_Battle['prototype'][_0xd9ded1(0x1b2)]=function(){const _0x4839cb=_0xd9ded1;VisuMZ[_0x4839cb(0x1dd)][_0x4839cb(0x245)]['call'](this),this[_0x4839cb(0x216)]=undefined,this[_0x4839cb(0x212)]=undefined;},VisuMZ[_0xd9ded1(0x1dd)][_0xd9ded1(0x1fb)]=Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x25c)],Spriteset_Battle[_0xd9ded1(0x1df)]['createLowerLayer']=function(){const _0x56fac7=_0xd9ded1;VisuMZ['ActSeqCamera'][_0x56fac7(0x1fb)][_0x56fac7(0x1b6)](this),this['applyAnchorsForTiltEffect']();},Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x211)]=function(){const _0x29fd90=_0xd9ded1;if(Spriteset_Battle['_oldCamera'])return;const _0x21b229=-Math[_0x29fd90(0x1d5)](Graphics[_0x29fd90(0x254)]/0x2),_0x39e02b=-Math['ceil'](Graphics[_0x29fd90(0x1e6)]/0x2);this[_0x29fd90(0x24f)]['x']=0.5,this[_0x29fd90(0x24f)]['y']=0.5;const _0x45acf6=[this[_0x29fd90(0x239)],this[_0x29fd90(0x1c1)]];_0x45acf6['push'](this[_0x29fd90(0x1c0)]);for(const _0xe9d957 of _0x45acf6){if(_0x29fd90(0x20c)===_0x29fd90(0x20c)){if(!_0xe9d957)continue;_0xe9d957['x']=_0x21b229,_0xe9d957['y']=_0x39e02b;}else _0x28e3d4[_0x29fd90(0x1ca)]=_0x4c7f80['skewTargetX'],_0x721f37[_0x29fd90(0x192)]=_0x303309['skewTargetY'];}},Spriteset_Battle[_0xd9ded1(0x1df)]['updatePosition']=function(){const _0x4269bc=_0xd9ded1;this[_0x4269bc(0x1ea)](),this[_0x4269bc(0x251)](),this[_0x4269bc(0x1cb)](),this[_0x4269bc(0x21b)](),this[_0x4269bc(0x19b)]();},Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x1ea)]=function(){const _0x390c64=_0xd9ded1,_0x1b0925=this['getBattleAngle']();this[_0x390c64(0x22f)]=_0x1b0925;},Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x1ff)]=function(){const _0x14911c=_0xd9ded1;if(!ConfigManager['battleCamera'])return 0x0;if(BattleManager['isInputting']())return 0x0;return $gameScreen[_0x14911c(0x1be)]()['angle'];},Spriteset_Battle[_0xd9ded1(0x1df)]['updatePositionSkew']=function(){const _0x153001=_0xd9ded1;if(BattleManager['isInputting']()||!ConfigManager[_0x153001(0x206)])this[_0x153001(0x208)]['x']=0x0,this['skew']['y']=0x0;else{if('mQabW'===_0x153001(0x1f7)){const _0x70b8e3=_0x4ce190[_0x153001(0x1be)]();this[_0x153001(0x208)]['x']=_0x70b8e3[_0x153001(0x1ca)],this[_0x153001(0x208)]['y']=_0x70b8e3[_0x153001(0x192)];}else{const _0x4d94c3=$gameScreen[_0x153001(0x1be)]();this[_0x153001(0x208)]['x']=_0x4d94c3[_0x153001(0x1ca)],this[_0x153001(0x208)]['y']=_0x4d94c3[_0x153001(0x192)];}}},Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x1cb)]=function(){const _0xc88a9=_0xd9ded1,_0x149b1d=this[_0xc88a9(0x207)]();this[_0xc88a9(0x23e)]['x']=this['scale']['y']=_0x149b1d;},Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x207)]=function(){const _0x58e533=_0xd9ded1;if(!ConfigManager['battleCamera'])return 0x1;if(BattleManager[_0x58e533(0x1b3)]())return 0x1;return $gameScreen['battleCameraData']()[_0x58e533(0x203)];},Spriteset_Battle['prototype'][_0xd9ded1(0x21b)]=function(){const _0x6a9f0b=_0xd9ded1;if(BattleManager['isInputting']()||!ConfigManager[_0x6a9f0b(0x206)])_0x6a9f0b(0x198)!=='fUpOz'?this['updatePositionCameraNeutral']():(_0xe44899['ActSeqCamera'][_0x6a9f0b(0x1b5)][_0x6a9f0b(0x1b6)](this,_0x3aec3d,_0x4231ce,_0x205b05),this['clearCameraFocusTargets']());else{if(Spriteset_Battle[_0x6a9f0b(0x1ec)])this[_0x6a9f0b(0x215)]();else{if('oiLUh'===_0x6a9f0b(0x213))return this[_0x6a9f0b(0x20a)][_0x6a9f0b(0x230)]>0x0;else this[_0x6a9f0b(0x1c5)]();}}},Spriteset_Battle[_0xd9ded1(0x1df)]['battleFieldCameraY']=function(){const _0x3fd006=_0xd9ded1;if(this[_0x3fd006(0x201)]!==undefined)return this[_0x3fd006(0x201)];return this['_battleFieldCameraY']=(Graphics[_0x3fd006(0x1e6)]-Graphics[_0x3fd006(0x225)])/0x2-this[_0x3fd006(0x1ae)](),this[_0x3fd006(0x201)];},Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x243)]=function(){const _0x2d5d7f=_0xd9ded1;if(Spriteset_Battle[_0x2d5d7f(0x1ec)])return;this[_0x2d5d7f(0x1da)]['y']=this[_0x2d5d7f(0x1ad)](),this['x']=Math[_0x2d5d7f(0x24a)](Graphics[_0x2d5d7f(0x254)]/0x2),this['y']=Math[_0x2d5d7f(0x24a)](Graphics[_0x2d5d7f(0x1e6)]/0x2);},Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x215)]=function(){const _0x5707f6=_0xd9ded1,_0x84933=$gameScreen[_0x5707f6(0x1be)](),_0x3cbc5e=this[_0x5707f6(0x21e)](),_0x1273d3=this[_0x5707f6(0x207)]();let _0xf73484=-(_0x84933[_0x5707f6(0x229)]+_0x84933[_0x5707f6(0x1f6)])*_0x1273d3+Graphics[_0x5707f6(0x254)]/0x2,_0x1ccc55=-(_0x84933[_0x5707f6(0x23a)]+_0x84933['cameraOffsetY'])*_0x1273d3+Graphics[_0x5707f6(0x1e6)]/0x2;if(_0x3cbc5e&&_0x1273d3>=0x1){if('rGHkz'!=='hPMdA'){const _0xf8b6d=-Graphics['width']*_0x1273d3+Graphics[_0x5707f6(0x254)]/0x2,_0x3ad9eb=-Graphics[_0x5707f6(0x1e6)]*_0x1273d3+Graphics[_0x5707f6(0x1e6)]/0x2;this['x']=Math[_0x5707f6(0x24a)](_0xf73484['clamp'](_0xf8b6d,0x0)),this['y']=Math[_0x5707f6(0x24a)](_0x1ccc55['clamp'](_0x3ad9eb,0x0));}else{if(!_0x24c4c0['battleCamera'])return 0x0;if(_0xd29227[_0x5707f6(0x1b3)]())return 0x0;return _0x58ed9c[_0x5707f6(0x1be)]()[_0x5707f6(0x22f)];}}else{if(_0x3cbc5e&&_0x1273d3<0x1){if(_0x5707f6(0x236)!==_0x5707f6(0x236)){const _0x13485a=this['battleCameraData']();_0x13485a[_0x5707f6(0x257)]=-_0x4e832c,_0x13485a[_0x5707f6(0x1b4)]=_0x302e51,_0x13485a[_0x5707f6(0x1f1)]=_0x3f66be,_0x13485a['angleEasing']=_0x2178e3;}else this['x']=Math['round']((Graphics[_0x5707f6(0x254)]-Graphics[_0x5707f6(0x254)]*_0x1273d3)/0x2),this['y']=Math[_0x5707f6(0x24a)]((Graphics[_0x5707f6(0x1e6)]-Graphics[_0x5707f6(0x1e6)]*_0x1273d3)/0x2);}else this['x']=Math[_0x5707f6(0x24a)](_0xf73484),this['y']=Math[_0x5707f6(0x24a)](_0x1ccc55);}},Spriteset_Battle[_0xd9ded1(0x1ec)]=![],Spriteset_Battle['prototype'][_0xd9ded1(0x1ae)]=function(){const _0x12a0e3=_0xd9ded1;if(Imported[_0x12a0e3(0x224)]&&BattleManager[_0x12a0e3(0x1d3)]()){if(_0x12a0e3(0x1e4)===_0x12a0e3(0x227)){if(!_0x520002['isSideView']()){const _0x341823=this[_0x12a0e3(0x20a)][0x0];if(_0x341823[_0x12a0e3(0x202)]===_0xf32c36)return![];}return!![];}else return 0x0;}else return 0x18;},Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x1c5)]=function(){const _0x400ad0=_0xd9ded1;let _0x1aecea=this[_0x400ad0(0x21e)](),_0x5c57fa=this[_0x400ad0(0x207)]();const _0x4c3d48=Graphics['width']/0x2,_0x55cd78=Graphics[_0x400ad0(0x1e6)]/0x2;if(_0x1aecea&&_0x5c57fa<=0x1){if(_0x400ad0(0x231)==='QgiwN'){this['x']=Math[_0x400ad0(0x24a)](_0x4c3d48),this['y']=Math['round'](_0x55cd78);return;}else{const _0x22859e=-_0x430c65[_0x400ad0(0x254)]*_0x496c37+_0x199cd9[_0x400ad0(0x254)]/0x2,_0x2ca628=-_0x26bcbf[_0x400ad0(0x1e6)]*_0xeca5a6+_0x3cf975[_0x400ad0(0x1e6)]/0x2;this['x']=_0x306c82[_0x400ad0(0x24a)](_0xc649bc[_0x400ad0(0x1b8)](_0x22859e,0x0)),this['y']=_0x3f0171[_0x400ad0(0x24a)](_0x16cfc5['clamp'](_0x2ca628,0x0));}}const _0x299796=$gameScreen['battleCameraData']();let _0x13a5b3=-(_0x299796[_0x400ad0(0x229)]+_0x299796['cameraOffsetX'])+Graphics[_0x400ad0(0x254)];_0x13a5b3-=(0x1-_0x5c57fa)*(_0x4c3d48-_0x299796['cameraX']-_0x299796[_0x400ad0(0x1f6)]);let _0x5de907=-(_0x299796['cameraY']+_0x299796['cameraOffsetY'])+Graphics[_0x400ad0(0x1e6)];this[_0x400ad0(0x1da)]['y']=this['battleFieldCameraY']();const _0x4e846c=this['_battleField']['y']*0x2-Math[_0x400ad0(0x24a)]((Graphics['height']-Graphics['boxHeight'])/0x2);_0x5de907+=_0x4e846c*(0x1-_0x5c57fa),_0x5de907-=(0x1-_0x5c57fa)*(_0x55cd78-_0x299796[_0x400ad0(0x23a)]-_0x299796[_0x400ad0(0x21d)]);const _0x1b3ff0=Imported[_0x400ad0(0x224)]&&BattleManager[_0x400ad0(0x1d3)]();if(!_0x1b3ff0){if('AvByb'==='aRNNd'){const _0x37ca6c=_0x5445e8[_0x400ad0(0x1a6)],_0x76df85=_0x400ad0(0x206);this['addCommand'](_0x37ca6c,_0x76df85);}else{const _0x3fc13f=SceneManager['_scene']['windowAreaHeight']();_0x5de907-=_0x3fc13f/0x2*Math[_0x400ad0(0x228)](0x1,Math[_0x400ad0(0x25f)](_0x5c57fa-0x1));}}if(_0x1aecea){if('GKWHC'!==_0x400ad0(0x197))_0x34586b[_0x400ad0(0x229)]=_0x11d519['cameraXTarget'],_0x57dd54[_0x400ad0(0x23a)]=_0x1ed633[_0x400ad0(0x246)];else{if(_0x5c57fa>0x1){if(_0x400ad0(0x232)!==_0x400ad0(0x232))this[_0x400ad0(0x206)]=!![];else{const _0x570e46=Graphics['width']-_0x4c3d48*_0x5c57fa,_0x1de6b8=_0x4c3d48*_0x5c57fa;_0x13a5b3=_0x13a5b3[_0x400ad0(0x1b8)](_0x570e46,_0x1de6b8);const _0x4a2170=Graphics['height']-_0x55cd78*_0x5c57fa,_0x178560=_0x55cd78*_0x5c57fa;_0x5de907=_0x5de907['clamp'](_0x4a2170,_0x178560);}}else _0x5c57fa<=0x1&&(_0x400ad0(0x19a)!==_0x400ad0(0x19a)?_0x50e385=_0x26435e[_0x400ad0(0x25b)](_0x41bd27,_0xbb428f):(_0x13a5b3=_0x4c3d48,_0x5de907=_0x55cd78));}}this['x']=Math[_0x400ad0(0x24a)](_0x13a5b3),this['y']=Math[_0x400ad0(0x24a)](_0x5de907);},Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x21e)]=function(){const _0x4bc9c5=_0xd9ded1;if(!ConfigManager['battleCamera'])return!![];if(BattleManager[_0x4bc9c5(0x1b3)]())return!![];return $gameScreen[_0x4bc9c5(0x1be)]()['cameraClamp'];},Spriteset_Battle[_0xd9ded1(0x1df)][_0xd9ded1(0x19b)]=function(){const _0x4dcaab=_0xd9ded1;this['x']+=Math[_0x4dcaab(0x24a)]($gameScreen[_0x4dcaab(0x233)]()),Imported['VisuMZ_0_CoreEngine']&&this[_0x4dcaab(0x1b1)]&&this[_0x4dcaab(0x1b1)]();},VisuMZ['ActSeqCamera'][_0xd9ded1(0x204)]=Window_Options[_0xd9ded1(0x1df)][_0xd9ded1(0x250)],Window_Options['prototype'][_0xd9ded1(0x250)]=function(){const _0x2b6a14=_0xd9ded1;VisuMZ[_0x2b6a14(0x1dd)]['Window_Options_addGeneralOptions'][_0x2b6a14(0x1b6)](this),this[_0x2b6a14(0x1d4)]();},Window_Options[_0xd9ded1(0x1df)][_0xd9ded1(0x1d4)]=function(){const _0x19461e=_0xd9ded1;if(VisuMZ[_0x19461e(0x1dd)]['Settings']['Options']['AddOption']){if(_0x19461e(0x1bc)===_0x19461e(0x1bc))this['addBattleCameraCommand']();else{if(_0x33ea15[_0x19461e(0x1b3)]()||!_0x1ba365[_0x19461e(0x206)])this[_0x19461e(0x208)]['x']=0x0,this[_0x19461e(0x208)]['y']=0x0;else{const _0x5a2001=_0x18160b[_0x19461e(0x1be)]();this['skew']['x']=_0x5a2001[_0x19461e(0x1ca)],this[_0x19461e(0x208)]['y']=_0x5a2001[_0x19461e(0x192)];}}}},Window_Options[_0xd9ded1(0x1df)][_0xd9ded1(0x21f)]=function(){const _0x14ab62=TextManager['battleCameraOption'],_0x4109cb='battleCamera';this['addCommand'](_0x14ab62,_0x4109cb);};