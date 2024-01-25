/*
 * --------------------------------------------------
 * MNKR_DP_MapZoomMZ.js
 *   Ver.0.0.5
 * Copyright (c) 2021 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

//=============================================================================
// 商drowsepost Plugins - Map Camera Controller
// DP_MapZoom.js
// Version: 0.87
//
// Copyright (c) 2016 - 2019 canotun
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

var Imported = Imported || {};
Imported.DP_MapZoom = true;

var drowsepost = drowsepost || {};

//=============================================================================

/*:en
 * @target MZ
 * @url https://raw.githubusercontent.com/munokura/MNKR-MZ-plugins/master/MNKR_DP_MapZoomMZ.js
 * @plugindesc Control Map Magnification
 * @author drowsepost (munokura)
 *
 * @help
 * This plugin is translated by Archeia.
 *
 * =========================================================================
 * About
 * =========================================================================
 * Recalculates coordinates based on Zoom.
 * Controls the Zoom Level of a Map.
 * Allows you to point the camera to a different target / event.
 * By default, the player is the camera's target.
 *
 * =========================================================================
 * Knowing issue
 * =========================================================================
 * If you zoom out on a huge map, the game will bug out. They are:
 * 1. In Canvas mode, the plugin will stop functioning.
 * 2. In WebGL, some maps might go missing.
 * The cause is a limitation of the PIXI engine.
 * It is still under investigation.
 *
 * =========================================================================
 * How To Use
 * =========================================================================
 * * Map Notetag Commands:
 *
 * <zoomScale:0.5>
 * Allows you to set a different Zoom for the map that has this tag.
 *
 * <camTarget: 3>
 * Allows you to change the camera target for the map that has this tag.
 *
 * * Plugin Commands
 *
 * (1) Zoom Function
 * dpZoom {Ratio} {Frames} {Target: ID / this / player}
 * Allows you to change zoom while focusing on a specific event.
 * If you don't specify a target, it will instead zoom based on the center.
 * ID = Based on Event ID
 * this = The event that holds the command will be the target.
 * player = The player character.
 *
 * Example:
 * dpZoom 2 360 this
 * This example will zoom the map by x2 at 360 frames (6 seconds) on the
 * event that triggers the zoom.
 *
 * (2) Focus Camera
 * dpFocus {Target: ID / this / player} {Frames}
 * Points the camera to a new target without changing the scale of the map.
 *
 * =========================================================================
 * Settings
 * =========================================================================
 * Base Scale
 * The Zoom level of the map.
 * Insert 0 or more. 1 is the default.
 *
 * Encount Effect
 * Allows the plugin to replace the default encounter transition effect.
 * If you wish to use the original effect, set this to false.
 * If disabled, you will need to adjust each screen manually so the zoom
 * would reflect properly.
 *
 * Camera Control
 * If false, this plugin can target the camera to another event.
 * While zooming, the camera control function will not work.
 * Please use this option when using another plugin to control the camera.
 *
 * Weather Patch
 * True = automatically scales the weather effects based on zoom level.
 * Set to false if you are using another plugin for weather.
 *
 * Zoom Picture Fix
 * True = Specify which pictures are going to be magnified.
 *
 * Old Focus
 * True = use the old camera system from DP_MapZoom.js
 * This focus is based on coordinate shift to the target event.
 * It does not track event movement.
 *
 * Easing Function
 * Allows you to use easing when zooming from 0 to 1.
 * The argument t contains the zoom progress from 0 to 1. JavaScript.
 *
 * =========================================================================
 * Technical information
 * =========================================================================
 * You can zoom the screen by using the script call:
 * $gameScreen.zoomScale()
 * This function exists by default.
 * If the screen is out of alignment, what you can do is:
 * Multiply "screenX" and "screenY" by $gameScreen.zoomScale() respectively.
 *
 * This plugin overrides $gameScreen.
 *
 * The Zoom Setting is retained by: $gameMap._dp_scale
 * The scrolling when leaving the scene is retained by: gameMap._dp_pan
 * Map focus values is retained by: $gameMap._dp_target
 *
 * =========================================================================
 * About this plugin
 * =========================================================================
 *  This is a port of a plugin created for RPG Maker MV to MZ.
 *  For inquiries or questions, please contact the author.
 *
 * =========================================================================
 * Terms of Use
 * =========================================================================
 *  MIT license.
 *  https://licenses.opensource.jp/MIT/MIT.html
 *  Can be modified and redistributed without the permission of the author.
 *  There are no restrictions on using this plugin (commercial use, 18+ NSFW, etc.).
 *
 *
 * @param Base Scale
 * @text Base Scale
 * @desc Set the magnification for the scene. (Insert 0 or more.)
 * Default: 1
 * @default 1
 *
 * @param Encount Effect
 * @text Encounter Effect
 * @desc Allows the plugin to replace the default encounter transition effect.
 * Default: true (ON: true / OFF: false)
 * @default true
 * @type boolean
 *
 * @param Camera Control
 * @text Focus Camera
 * @desc Target the camera to another object during zoom.
 * Default: true (ON: true / OFF: false / Default: minimum)
 * @default true
 * @type select
 * @option ON
 * @value true
 * @option OFF
 * @value false
 * @option Minimum
 * @value minimum
 *
 * @param Weather Patch
 * @text Weather Patch
 * @desc Automatically scales the weather effects based on zoom level.
 * Default: true (ON: true / OFF: false)
 * @default true
 * @type boolean
 *
 * @param Picture Size Fixation
 * @text Zoom Picture Fix
 * @desc Specify which pictures are going to be magnified.
 * Default: ALL (ALL: true / OFF: false / $ / screen_ / fix_)
 * @default true
 * @type select
 * @option OFF
 * @value false
 * @option ALL
 * @value true
 * @option $
 * @value $
 * @option screen_
 * @value screen_
 * @option fix_
 * @value fix_
 *
 * @param Old Focus
 * @text Default Focus
 * @desc Use the old camera system
 * Default: false (ON: true / OFF: false)
 * @default false
 * @type boolean
 *
 * @param Easing Function
 * @text Easing Function
 * @desc Animation easing formula
 * Argument t (0.00 ~ 1.00) return value (0.00 ~ 1.00) Default: t
 * @default t
 * @type string
 *
 *
 * @command dpZoom
 * @text Change Screen Zoom
 * @desc Change the screen magnification while focusing on the specified event.
 *
 * @arg focusScale
 * @text Zoom
 * @desc Screen Zoom
 * @default 1
 *
 * @arg focusFlame
 * @text Wait
 * @desc Wait in frames.
 * @default 1
 *
 * @arg focusTarget
 * @text Zoom Target
 * @desc The Target
 * (Number: Event ID / this: The Event / player:The Player)
 * @type combo
 * @option this
 * @option player
 * @default this
 *
 *
 * @command dpFocus
 * @text Camera Focus
 * @desc Targets an object without changing screen magnification.
 *
 * @arg focusTarget
 * @text Focus Target
 * @desc The Target
 * (Number: Event ID / this: The Event / player:The Player)
 * @type combo
 * @option this
 * @option player
 * @default this
 *
 * @arg focusFlame
 * @text Wait
 * @desc Wait in frames.
 * @default 1
 */

(function () {
    "use strict";
    var user_map_marginright = 0;
    var user_map_marginbottom = 0;

    const pluginName = document.currentScript.src.split("/").pop().replace(/\.js$/, "");
    const parameters = PluginManager.parameters(pluginName);
    var user_scale = Number(parameters['Base Scale'] || 1);
    var user_fix_encount = Boolean(parameters['Encount Effect'] === 'true' || false);
    var user_use_camera = Boolean(parameters['Camera Control'] === 'true' || false);
    var user_use_camera_transfer = Boolean(parameters['Camera Control'] === 'minimum' || false);
    var user_fix_weather = Boolean(parameters['Weather Patch'] === 'true' || false);
    var user_fix_picture = parameters['Picture Size Fixation'];
    var user_use_oldfocus = Boolean(parameters['Old Focus'] === 'true' || false);
    var user_easing_function = parameters['Easing Function'];

    /*
    Main Functions
    =============================================================================
    螳滄圀縺ｮ諡｡螟ｧ蜃ｦ逅�
    */
    var camera = {};

    /*
    dp_renderSize
    繧ｿ繧､繝ｫ諡｡螟ｧ邇�繧剃ｿ晄戟縺翫ｈ縺ｳ莉ｮ諠ｳ逧�縺ｪ繝ｬ繝ｳ繝繝ｪ繝ｳ繧ｰ遽�蝗ｲ繧堤ｮ怜�ｺ縺励∪縺吶�
    */
    var dp_renderSize = {
        _scale: undefined,
        width: undefined,
        height: undefined,

        /**
         * 諡｡螟ｧ邇�縺九ｉ繝ｬ繝ｳ繝繝ｪ繝ｳ繧ｰ縺吶ｋ縺ｹ縺阪が繝悶ず繧ｧ繧ｯ繝医�ｮ繧ｵ繧､繧ｺ繧定ｨｭ螳壹＠縺ｾ縺吶�
         * @param {number} scale
         */
        onChange: (function (_scale) {
            if (!('_scene' in SceneManager)) return;
            if (!('_spriteset' in SceneManager._scene)) return;
            var scale = _scale || this._scale;
            var spriteset = SceneManager._scene._spriteset;

            //繝槭ャ繝励し繧､繧ｺ螟画峩
            spriteset._tilemap.width = Math.ceil(Graphics.width / scale) + spriteset._tilemap._margin * 2;
            spriteset._tilemap.height = Math.ceil(Graphics.height / scale) + spriteset._tilemap._margin * 2;

            //繝代Λ繝ｩ繝�繧ｯ繧ｹ繧ｵ繧､繧ｺ螟画峩
            spriteset._parallax.move(0, 0, Math.round(Graphics.width / scale), Math.round(Graphics.height / scale));

            // Foreground.js蟇ｾ蠢�
            if (spriteset._foreground && spriteset._foreground instanceof TilingSprite) {
                spriteset._foreground.move(0, 0, Math.round(Graphics.width / scale), Math.round(Graphics.height / scale));
            }

            spriteset._tilemap.refresh();
            spriteset._tilemap._needsRepaint = true;
            spriteset._tilemap.updateTransform();
        }),

        /**
         * scale繧偵Μ繧ｻ繝�繝医＠縺ｾ縺�
         */
        reset: (function () {
            this.scale = 1;
        })
    };

    Object.defineProperty(dp_renderSize, 'scale', {
        get: function () {
            return this._scale;
        },
        set: function (val) {
            if (val != this._scale) {
                this._scale = Number(val);
                // this.width = Math.ceil(Graphics.boxWidth / this._scale);
                // this.height = Math.ceil(Graphics.boxHeight / this._scale);
                // 螟ｩ蛟吶�ｮ陦ｨ遉ｺ遽�蝗ｲ繧堤判髱｢繧ｵ繧､繧ｺ縺ｫ
                this.width = Math.ceil(Graphics.width / this._scale);
                this.height = Math.ceil(Graphics.height / this._scale);
                this.onChange();
            }
        }
    });

    /**
     * 繧ｺ繝ｼ繝�縺吶∋縺榊ｺｧ讓吶ｒ邂怜�ｺ
     * @return {object} Point
     */
    var dp_getZoomPos = function () {
        return new Point(
            camera.target.screenX(),
            camera.target.screenY() - ($gameMap.tileHeight() / 2)
        );
    };

    /**
     * 繝槭ャ繝励�ｮ繝ｬ繝ｳ繝繝ｪ繝ｳ繧ｰ蜴溽せ縺ｨ陦ｨ遉ｺ菴咲ｽｮ縺ｮ縺壹ｌ繧貞叙蠕励＠縺ｾ縺吶�
     * @return {object} Point
     */
    var dp_getVisiblePos = function () {
        var scale = $gameScreen.zoomScale();
        return new Point(
            Math.round($gameScreen.zoomX() * (scale - dp_renderSize.scale)),
            Math.round($gameScreen.zoomY() * (scale - dp_renderSize.scale))
        );
    };

    /**
     * 繝輔か繝ｼ繧ｫ繧ｹ縺輔ｌ縺ｦ縺�繧九く繝｣繝ｩ繧ｯ繧ｿ繝ｼ縺九ｉ逕ｻ髱｢縺ｮ荳ｭ蠢�縺後←繧後□縺代★繧後※縺�繧九°蜿門ｾ励＠縺ｾ縺�
     * @return {object} Point
     */
    var dp_getpan = function () {
        var centerPosX = (($gameMap.screenTileX() - 1) / 2);
        var centerPosY = (($gameMap.screenTileY() - 1) / 2);

        var pan_x = ($gameMap.displayX() + centerPosX) - camera.target._realX;
        var pan_y = ($gameMap.displayY() + centerPosY) - camera.target._realY;

        return new Point(
            ($gameMap.screenTileX() >= $dataMap.width) ? 0 : pan_x,
            ($gameMap.screenTileY() >= $dataMap.height) ? 0 : pan_y
        );
    };

    /**
     * 逕ｻ髱｢縺ｮ諡｡螟ｧ邇�繧定ｨｭ螳壹＠縺ｾ縺吶�
     * @param {number} scale
     */
    var dp_setZoom = function (scale) {
        dp_renderSize.scale = scale;
        $gameMap._dp_scale = scale;

        $gameScreen.setZoom(0, 0, scale);
        camera.center();
    };

    /**
     * 謖�螳壹＆繧後◆繧､繝吶Φ繝�ID繧偵う繝吶Φ繝医う繝ｳ繧ｹ繧ｿ繝ｳ繧ｹ縺ｫ縺励※霑泌唆
     * @param {any} event 繧､繝吶Φ繝�ID繧ゅ＠縺上�ｯ繧､繝吶Φ繝医が繝悶ず繧ｧ繧ｯ繝医ｂ縺励￥縺ｯ繝励Ξ繧､繝､繝ｼ
     * @return {object} Game_CharacterBase
     */
    var dp_getEvent = function (event) {
        var _target;
        if (typeof event === 'object') {
            if ('_eventId' in event) _target = $gameMap.event(event._eventId);
        }

        if (typeof event === 'number') {
            _target = $gameMap.event(event);
        }

        if (!(_target instanceof Game_CharacterBase)) {
            _target = $gamePlayer;
        }

        return _target;
    };

    /**
     * 繧ｫ繝｡繝ｩ繧ｿ繝ｼ繧ｲ繝�繝医°繧臥岼讓吶う繝吶Φ繝医∪縺ｧ縺ｮ繝槭ャ繝嶺ｸ翫�ｮ繧ｺ繝ｬ(x,y)繧貞叙蠕�
     * @param {any} event 繧､繝吶Φ繝�ID繧ゅ＠縺上�ｯ繧､繝吶Φ繝医が繝悶ず繧ｧ繧ｯ繝医ｂ縺励￥縺ｯ繝励Ξ繧､繝､繝ｼ
     * @return {object} Point
     */
    var dp_targetPan = function (event) {
        var _target = dp_getEvent(event);

        return new Point(
            _target._realX - camera.target._realX,
            _target._realY - camera.target._realY
        );
    };

    /**
     * 譁�蟄怜�励ｒ繧､繝ｼ繧ｸ繝ｳ繧ｰ逕ｨ髢｢謨ｰ縺ｨ縺励※隧穂ｾ｡縺励◆髢｢謨ｰ繧定ｿ斐＠縺ｾ縺�
     * @param {String|Function} txt_func
     * @return {Function} 繧､繝ｼ繧ｸ繝ｳ繧ｰ逕ｨ髢｢謨ｰ縲∝ｼ墓焚縺ｯ float t
     */
    var dp_txtToEasing = (function (txt_func) {
        var basic_func = (function (t) { return t; });
        if (typeof txt_func === 'function') return txt_func;
        if (typeof txt_func !== 'string') return basic_func;
        if (txt_func == '') return basic_func;

        try {
            return new Function('t', 'return ' + txt_func + ';');
        } catch (e) {
            console.error('DP_MapZoom: Easing Function', e, txt_func);
        }
        return basic_func;
    });

    /**
     * 邱壼ｽ｢陬懷ｮ�
     * @param {Number} p 蜈･蜉幃ｲ謐礼紫
     * @param {Number} from 髢句ｧ区焚蛟､
     * @param {Number} to 逶ｮ讓呎焚蛟､
     * @return {Number} 邨先棡騾ｲ謐礼紫
     */
    var dp_lerp = (function (p, from, to) {
        return from + (to - from) * p;
    });

    /*
    Camera Object
    ===================================================================================
    */

    /**
     * 繧ｫ繝｡繝ｩ縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧貞宛蠕｡縺吶ｋ繧ｪ繝悶ず繧ｧ繧ｯ繝�
     */
    camera.animation = (function () {
        //private
        var _active = false;
        var _count, _duration, _easing;
        var _start_pan, _start_scale, _end_pan, _end_scale;

        //public
        var r = {
            /**
             * 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繧ｹ繧ｿ繝ｼ繝�
             * @param {Number} scale 逶ｮ讓吶→縺吶ｋ諡｡螟ｧ邇�
             * @param {Point} pos 逶ｮ讓吶→縺吶ｋ蠎ｧ讓吶�ｮ繧ｺ繝ｬ
             * @param {Number} duration 螟牙喧縺ｫ縺九￠繧九ヵ繝ｬ繝ｼ繝�
             */
            start: (function (scale, pos, duration) {
                var is_zoomout = ($gameScreen.zoomScale() > scale) ? true : false;

                _count = 0;
                _duration = duration || 0;
                _end_scale = scale || $gameScreen.zoomScale();
                _end_pan = pos || new Point();

                _start_pan = dp_getpan();
                _start_scale = $gameScreen.zoomScale();

                if (is_zoomout) {
                    dp_renderSize.scale = scale;
                    camera.center(_start_pan.x, _start_pan.y);
                }

                _active = true;
            }),
            /**
             * 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繧｢繝�繝励ョ繝ｼ繝�
             * camera.animation.update
             */
            update: (function () {
                if (!_active) return;

                var p = _count / _duration;
                _count++;

                if (p > 1) {
                    r.end();
                    return;
                }

                if (_count % 2 === 0) return;

                var ease = _easing(p);
                var x = dp_lerp(ease, _start_pan.x, _end_pan.x);
                var y = dp_lerp(ease, _start_pan.y, _end_pan.y);
                var z = dp_lerp(ease, _start_scale, _end_scale);

                $gameScreen.setZoom(0, 0, z);
                camera.center(x, y);
            }),
            /**
             * 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ邨ゆｺ�
             */
            end: (function () {
                if (!_active) return;
                _active = false;

                $gameMap._dp_pan = _end_pan;
                dp_setZoom(_end_scale);
            })
        };

        Object.defineProperty(r, 'easing', {
            get: function () {
                return _easing;
            },
            set: function (val) {
                _easing = dp_txtToEasing(val);
            }
        });

        r.easing = user_easing_function;

        return r;
    }());

    /**
     * 繧ｫ繝｡繝ｩ縺ｮ繧ｺ繝ｼ繝�繧帝幕蟋九☆繧矩未謨ｰ
     * @param {number} ratio 諡｡螟ｧ邇�
     * @param {number} duration 螟牙喧縺ｫ縺九￠繧九ヵ繝ｬ繝ｼ繝�
     * @param {any} target 繝輔か繝ｼ繧ｫ繧ｹ縺吶ｋ繧､繝吶Φ繝�ID繧ゅ＠縺上�ｯ繧ｲ繝ｼ繝�繧､繝吶Φ繝医が繝悶ず繧ｧ繧ｯ繝�
     */
    camera.zoom = function (ratio, duration, target) {
        if ((typeof ratio !== 'number') || (ratio < 0)) {
            ratio = dp_renderSize.scale;
        }

        var target_pan = dp_getpan();
        if (typeof target !== 'undefined') {
            if (user_use_oldfocus) {
                target_pan = dp_targetPan(target);
            } else {
                camera.target = target;
                target_pan = new Point();
            }
        }

        if (duration > 0) {
            camera.animation.start(ratio, target_pan, duration);
        } else {
            $gameMap._dp_pan = target_pan;
            dp_setZoom(ratio);
        }
    };

    /**
     * 繝輔か繝ｼ繧ｫ繧ｹ縺励◆繧ｿ繝ｼ繧ｲ繝�繝医ｒ繧ｫ繝｡繝ｩ荳ｭ螟ｮ縺ｫ驟咲ｽｮ
     * @param {number} panX 逕ｻ髱｢繧偵★繧峨☆繝槭せ縺ｮ謨ｰ縲よｨｪ縲�
     * @param {number} panY 逕ｻ髱｢繧偵★繧峨☆繝槭せ縺ｮ謨ｰ縲らｸｦ縲�
     * @param {boolean} force_center 繧ｫ繝｡繝ｩ蛻ｶ蠕｡辟｡蜉ｹ縺ｧ繧ょｮ溯｡�
     */
    camera.center = function (panX, panY, force_center) {
        if ((!user_use_camera) && (!force_center)) return;
        var px = Number(panX || $gameMap._dp_pan.x);
        var py = Number(panY || $gameMap._dp_pan.y);
        camera.target.center(camera.target._realX + px, camera.target._realY + py);
    };

    /**
     * 繧ｫ繝｡繝ｩ縺後ヵ繧ｩ繝ｼ繧ｫ繧ｹ縺吶ｋ蟇ｾ雎｡
     * @param {any} event 繧､繝吶Φ繝�ID繧ゅ＠縺上�ｯ繧ｲ繝ｼ繝�繧､繝吶Φ繝医ｂ縺励￥縺ｯ繝励Ξ繧､繝､繝ｼ
     * @return {object} 繧ｲ繝ｼ繝�繧､繝吶Φ繝医ｂ縺励￥縺ｯ繝励Ξ繧､繝､繝ｼ
     */
    Object.defineProperty(camera, 'target', {
        get: function () {
            if ($gameMap._dp_target === 0) return $gamePlayer;
            return $gameMap.event($gameMap._dp_target);
        },
        set: function (event) {
            var _target = dp_getEvent(event);

            $gameMap._dp_target = 0;
            if (typeof _target === 'object') {
                if ('_eventId' in _target) $gameMap._dp_target = _target._eventId;
            }
        }
    });

    //蜈ｬ髢�
    drowsepost.camera = camera;
    drowsepost.rendersize = dp_renderSize;

    /*
    Command Entry
    ===================================================================================
    @param {array} args 繧ｹ繝壹�ｼ繧ｹ蛹ｺ蛻�繧翫〒謖�螳壹＠縺溘�励Λ繧ｰ繧､繝ｳ繧ｳ繝槭Φ繝峨�ｮ蠑墓焚(array<string>)
    */
    drowsepost.fn = drowsepost.fn || {};

    /**
     * 諡｡螟ｧ邇�繧貞､画峩縺帙★縺ｫ繝輔か繝ｼ繧ｫ繧ｹ螟画峩
     * {target} {frame}
     */
    var _p_dpfocus = ('dpFocus' in drowsepost.fn) ? drowsepost.fn.dpFocus : (function () { });
    drowsepost.fn.dpFocus = (function (_a) {
        _p_dpfocus.call(this, _a);

        var _s = this;
        var _target;

        if (_a.length < 1) _a.push('player');

        // if ((_a[0] === 'this') || (_a[0] === '縺薙�ｮ繧､繝吶Φ繝�')) _target = _s;
        // else if ((_a[0] === 'player') || (_a[0] === '繝励Ξ繧､繝､繝ｼ')) _target = $gamePlayer;
        // else _target = parseInt(_a[0]);

        // munokura
        if ((_a[0] === 'this') || (_a[0] === '縺薙�ｮ繧､繝吶Φ繝�')) {
            _target = _s;
        } else if ((_a[0] === 'player') || (_a[0] === '繝励Ξ繧､繝､繝ｼ')) {
            _target = $gamePlayer;
        } else {
            _target = parseInt(_a[0]);
        }

        camera.zoom(dp_renderSize.scale, parseInt(_a[1]), _target);
    });

    /**
     * 逕ｻ髱｢諡｡螟ｧ邇�繧貞､画峩
     * 隨ｬ荳牙ｼ墓焚縺ｫ繧ｿ繝ｼ繧ｲ繝�繝域欠螳壹〒繝輔か繝ｼ繧ｫ繧ｹ繧ょ､画峩
     * {zoom} {frame} {target}
     */
    var _p_dpzoom = ('dpZoom' in drowsepost.fn) ? drowsepost.fn.dpZoom : (function () { });
    drowsepost.fn.mapSetZoom = drowsepost.fn.dpZoom = (function (_a) {
        _p_dpzoom.call(this, _a);

        var _s = this;
        var _target;

        // if (_a.length > 2) {
        //     if ((_a[2] === 'this') || (_a[2] === '縺薙�ｮ繧､繝吶Φ繝�')) _target = _s;
        //     else if ((_a[2] === 'player') || (_a[2] === '繝励Ξ繧､繝､繝ｼ')) _target = $gamePlayer;
        //     else _target = parseInt(_a[2]);
        // }
        // munokura

        if (_a.length > 2) {
            if ((_a[2] === 'this') || (_a[2] === '縺薙�ｮ繧､繝吶Φ繝�')) {
                _target = _s;
            } else if ((_a[2] === 'player') || (_a[2] === '繝励Ξ繧､繝､繝ｼ')) {
                _target = $gamePlayer;
            } else {
                _target = parseInt(_a[2]);
            }
        }

        camera.zoom(parseFloat(_a[0]), parseInt(_a[1]), _target);
    });

    /*
    Game_Interpreter
    ===================================================================================
    繧ｳ繝槭Φ繝峨ヱ繝ｼ繧ｵ繝ｼ縺ｮ霑ｽ蜉�
    */
    // (function () {
    //     //@override
    //     var _parent_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    //     Game_Interpreter.prototype.pluginCommand = function (command, args) {
    //         _parent_pluginCommand.call(this, command, args);
    //         if ('DP_Basics' in Imported) return;
    //         if (!(command in drowsepost.fn)) return;
    //         if (typeof drowsepost.fn[command] === 'function') {
    //             drowsepost.fn[command].call(this, args);
    //         }
    //     };
    // }());

    /*
    RPG繝�繧ｯ繝ｼ繝ｫMZ逕ｨ縺ｮ繝励Λ繧ｰ繧､繝ｳ繧ｳ繝槭Φ繝峨ｒ霑ｽ蜉�
    */
    PluginManager.registerCommand(pluginName, "dpZoom", function (arr) {
        const command = 'dpZoom';
        const args = Object.entries(arr).map(([key, value]) => `${value}`);
        if ('DP_Basics' in Imported) return;
        if (!(command in drowsepost.fn)) return;
        if (typeof drowsepost.fn[command] === 'function') {
            drowsepost.fn[command].call(this, args);
        }
    });

    PluginManager.registerCommand(pluginName, "dpFocus", function (arr) {
        const command = 'dpFocus';
        const args = Object.entries(arr).map(([key, value]) => `${value}`);
        if ('DP_Basics' in Imported) return;
        if (!(command in drowsepost.fn)) return;
        if (typeof drowsepost.fn[command] === 'function') {
            drowsepost.fn[command].call(this, args);
        }
    });

    /*
    Game Map
    =============================================================================
    諡｡螟ｧ邇�($gameScreen.zoomScale())縺ｮ蜿肴丐
    */
    (function () {
        //@override
        var _parent_initialize = Game_Map.prototype.initialize;
        Game_Map.prototype.initialize = function () {
            _parent_initialize.call(this);

            //菫晏ｭ倡畑螟画焚繧ｨ繝ｳ繝医Μ繝ｼ
            this._dp_scale = user_scale;
            this._dp_pan = new Point();
            this._dp_target = 0;
        };

        //@override
        Game_Map.prototype.screenTileX = function () {
            return (Graphics.width - user_map_marginright) / (this.tileWidth() * $gameScreen.zoomScale());
        };

        //@override
        Game_Map.prototype.screenTileY = function () {
            return (Graphics.height - user_map_marginbottom) / (this.tileHeight() * $gameScreen.zoomScale());
        };

        //@override
        Game_Map.prototype.canvasToMapX = function (x) {
            var tileWidth = this.tileWidth() * $gameScreen.zoomScale();
            var originX = this._displayX * tileWidth;
            var mapX = Math.floor((originX + x) / tileWidth);
            return this.roundX(mapX);
        };

        //@override
        Game_Map.prototype.canvasToMapY = function (y) {
            var tileHeight = this.tileHeight() * $gameScreen.zoomScale();
            var originY = this._displayY * tileHeight;
            var mapY = Math.floor((originY + y) / tileHeight);
            return this.roundY(mapY);
        };

    }());

    /*
    Game Character
    =============================================================================
    Game Character縺ｫ豕ｨ隕悶☆繧句�ｴ蜷医�ｮ蜃ｦ逅�繧定ｿｽ蜉�
    */
    (function () {
        Game_Character.prototype.centerX = function () {
            return ($gameMap.screenTileX() - 1) / 2.0;
        };

        Game_Character.prototype.centerY = function () {
            return ($gameMap.screenTileY() - 1) / 2.0;
        };

        Game_Character.prototype.center = function (x, y) {
            return $gameMap.setDisplayPos(x - this.centerX(), y - this.centerY());
        };

        Game_Character.prototype.updateScroll = function (lastScrolledX, lastScrolledY) {
            var x1 = lastScrolledX;
            var y1 = lastScrolledY;
            var x2 = this.scrolledX();
            var y2 = this.scrolledY();
            if (y2 > y1 && y2 > this.centerY()) {
                $gameMap.scrollDown(y2 - y1);
            }
            if (x2 < x1 && x2 < this.centerX()) {
                $gameMap.scrollLeft(x1 - x2);
            }
            if (x2 > x1 && x2 > this.centerX()) {
                $gameMap.scrollRight(x2 - x1);
            }
            if (y2 < y1 && y2 < this.centerY()) {
                $gameMap.scrollUp(y1 - y2);
            }
        };

    }());

    /*
    Game Player
    =============================================================================
    諡｡螟ｧ邇�縺ｮ蜿肴丐
    */
    (function () {
        //@override
        Game_Player.prototype.centerX = function () {
            return ($gameMap.screenTileX() - 1) / 2.0;
        };

        //@override
        Game_Player.prototype.centerY = function () {
            return ($gameMap.screenTileY() - 1) / 2.0;
        };

        //@override
        var _parent_updateScroll = Game_Player.prototype.updateScroll;
        Game_Player.prototype.updateScroll = function (lastScrolledX, lastScrolledY) {
            if (typeof $gameMap !== 'object') return;
            if ($gameMap._dp_target !== 0) return;
            _parent_updateScroll.call(this, lastScrolledX, lastScrolledY);
        };

    }());

    /*
    Game Event
    =============================================================================
    Game Event縺ｫ豕ｨ隕悶☆繧句�ｴ蜷医�ｮ蜃ｦ逅�繧定ｿｽ蜉�
    */
    (function () {
        //@override
        var _parent_update = Game_Event.prototype.update;
        Game_Event.prototype.update = function () {
            var lastScrolledX = this.scrolledX();
            var lastScrolledY = this.scrolledY();

            _parent_update.call(this);

            this.updateScroll(lastScrolledX, lastScrolledY);
        };

        Game_Event.prototype.updateScroll = function (lastScrolledX, lastScrolledY) {
            if (typeof $gameMap !== 'object') return;
            if ($gameMap._dp_target !== this._eventId) return;
            Game_Character.prototype.updateScroll.call(this, lastScrolledX, lastScrolledY);
        };

    }());

    /*
    Weather
    =============================================================================
    謠冗判蜿肴丐螟画峩讖溯�ｽ縺ｮ霑ｽ蜉�
    */
    (function () {
        //螟ｩ蛟吶せ繝励Λ繧､繝医�ｮ逕滓�千ｯ�蝗ｲ繧竪raphic蝓ｺ貅悶〒縺ｯ縺ｪ縺丞ｮ滄圀縺ｮ謠冗判遽�蝗ｲ縺ｫ蜷医ｏ縺帙ｋ
        if (!user_fix_weather) return;
        //@override
        var _parent_rebornSprite = Weather.prototype._rebornSprite;
        Weather.prototype._rebornSprite = function (sprite) {
            _parent_rebornSprite.call(this, sprite);
            sprite.ax = Math.randomInt(dp_renderSize.width + 100) - 50 + this.origin.x;
            sprite.ay = Math.randomInt(dp_renderSize.height + 200) - 100 + this.origin.y;
            sprite.opacity = 160 + Math.randomInt(60);
        };

    }());

    /*
    Sprite_Picture
    =============================================================================
    繝斐け繝√Εdot by dot驟咲ｽｮ讖溯�ｽ縺ｮ霑ｽ蜉�
    */
    (function () {
        //繝斐け繝√Ε縺ｮ驟咲ｽｮ縺ｨ諡｡螟ｧ邇�繧偵√せ繧ｯ繝ｪ繝ｼ繝ｳ縺ｮ諡｡螟ｧ邇�縺ｧ謇薙■豸医☆
        if (!user_fix_picture) return;
        if (user_fix_picture === 'false') return;

        //@override
        var _parent_loadBitmap = Sprite_Picture.prototype.loadBitmap;
        Sprite_Picture.prototype.loadBitmap = function () {
            _parent_loadBitmap.call(this);

            if (user_fix_picture === 'true') {
                this._dp_fix = true;
            } else if (this._pictureName.indexOf(user_fix_picture) > -1) {
                this._dp_fix = true;
            } else {
                this._dp_fix = false;
            }
        };

        //@override
        var _parent_updateScale = Sprite_Picture.prototype.updateScale;
        Sprite_Picture.prototype.updateScale = function () {
            _parent_updateScale.call(this);
            if (!this._dp_fix) return;

            var picture = this.picture();
            this.scale.x = (1 / $gameScreen.zoomScale()) * (picture.scaleX() / 100);
            this.scale.y = (1 / $gameScreen.zoomScale()) * (picture.scaleY() / 100);
        };

        //@override
        var _parent_updatePosition = Sprite_Picture.prototype.updatePosition;
        Sprite_Picture.prototype.updatePosition = function () {
            _parent_updatePosition.call(this);
            if (!this._dp_fix) return;

            var picture = this.picture();
            var map_s = dp_getVisiblePos();
            this.x = (picture.x() + map_s.x) * (1 / $gameScreen.zoomScale());
            this.y = (picture.y() + map_s.y) * (1 / $gameScreen.zoomScale());
        };
    }());

    /*
    Sprite_Timer
    =============================================================================
    繧ｿ繧､繝槭�ｼ縺ｮ驟咲ｽｮ縺ｨ繧ｵ繧､繧ｺ繧定ｪｿ謨ｴ
    */
    (function () {
        //@override
        var _parent_updatePosition = Sprite_Timer.prototype.updatePosition;
        Sprite_Timer.prototype.updatePosition = function () {
            _parent_updatePosition.call(this);

            var _zoom = (1 / $gameScreen.zoomScale());

            this.x = this.x * _zoom;
            this.y = this.y * _zoom;
            this.scale.x = _zoom;
            this.scale.y = _zoom;
        };
    }());

    /*
    Spriteset_Base
    =============================================================================
    諡｡螟ｧ蠎ｧ讓吶�ｮ隱ｿ謨ｴ
    */
    (function () {
        //@override
        var _parent_updatePosition = Spriteset_Base.prototype.updatePosition;
        Spriteset_Base.prototype.updatePosition = function () {
            _parent_updatePosition.call(this);

            var map_s = dp_getVisiblePos();
            this.x = map_s.x * -1;
            this.y = map_s.y * -1;

            this.x += Math.round($gameScreen.shake());
        };
    }());

    /*
    Scene_Map
    =============================================================================
    諡｡螟ｧ邇�縺ｮ蠑慕ｶ吶℃
    */
    (function () {
        /*
        繝槭ャ繝励す繝ｼ繝ｳ縺ｮ髢句ｧ�
        */
        //@override
        var _parent_start = Scene_Map.prototype.start;
        Scene_Map.prototype.start = function () {
            _parent_start.call(this);

            //遘ｻ蜍募ｾ悟�ｦ逅�
            if (this._transfer) {
                //繝槭ャ繝苓ｨｭ螳壽ュ蝣ｱ縺ｧ諡｡螟ｧ邇�螟画峩
                //繧､繝吶Φ繝医お繝�繧｣繧ｿ縺九ｉ縺ｮ繝�繧ｹ繝亥ｮ溯｡後〒縺ｯ$gameMap.meta縺悟ｮ夂ｾｩ縺輔ｌ縺ｪ縺�縲�
                $gameMap._dp_scale = ('meta' in $dataMap) ?
                    Number($dataMap.meta.zoomScale || $gameMap._dp_scale)
                    : $gameMap._dp_scale;

                //繧ｫ繝｡繝ｩ繧ｿ繝ｼ繧ｲ繝�繝�
                //繧､繝吶Φ繝医お繝�繧｣繧ｿ縺九ｉ縺ｮ繝�繧ｹ繝亥ｮ溯｡後〒縺ｯ$gameMap.meta縺悟ｮ夂ｾｩ縺輔ｌ縺ｪ縺�縲�
                $gameMap._dp_target = ('meta' in $dataMap) ?
                    Number($dataMap.meta.camTarget || 0)
                    : 0;

                //繝代Φ
                $gameMap._dp_pan = new Point();
            }

            //讓呎ｺ悶Ξ繝ｳ繝繝ｪ繝ｳ繧ｰ繧ｵ繧､繧ｺ縺ｫ繝ｪ繧ｻ繝�繝�
            dp_renderSize.reset();

            //繧ｫ繝｡繝ｩ繧ｿ繝ｼ繧ｲ繝�繝郁ｨｭ螳�
            camera.target = $gameMap._dp_target;

            //繝槭ャ繝励す繝ｼ繝ｳ髢句ｧ区凾縺ｫ諡｡螟ｧ邇�螟画峩繧偵ヵ繝�繧ｯ縲�
            dp_setZoom($gameMap._dp_scale);

            //逕ｻ髱｢荳ｭ蠢�繧貞ｼｷ蛻ｶ險ｭ螳壹☆繧�
            if ((!user_use_camera) && user_use_camera_transfer) camera.center(null, null, true);
            this._spriteset.update();
        };

        /*
        繝槭ャ繝励す繝ｼ繝ｳ縺ｮ邨ゆｺ�
        */
        //@override
        var _parent_terminate = Scene_Map.prototype.terminate;
        Scene_Map.prototype.terminate = function () {

            //繝槭ャ繝励す繝ｼ繝ｳ邨ゆｺ�譎ゅ↓諡｡螟ｧ邇�諠�蝣ｱ繧剃ｿ晏ｭ倥�
            camera.animation.end();

            var zoomPos = dp_getZoomPos();
            $gameScreen.setZoom(zoomPos.x, zoomPos.y, dp_renderSize.scale);
            $gameMap._dp_pan = dp_getpan();

            _parent_terminate.call(this);
        };

        /*
        繧ｨ繝ｳ繧ｫ繧ｦ繝ｳ繝医お繝輔ぉ繧ｯ繝�
        */
        if (!user_fix_encount) return;
        //@override
        Scene_Map.prototype.updateEncounterEffect = function () {
            if (this._encounterEffectDuration > 0) {
                this._encounterEffectDuration--;
                var speed = this.encounterEffectSpeed();
                var n = speed - this._encounterEffectDuration;
                var p = n / speed;
                var q = ((p - 1) * 20 * p + 5) * p + 1;
                var zoomPos = dp_getZoomPos();

                if (n === 2) {
                    $gameScreen.setZoom(zoomPos.x, zoomPos.y, dp_renderSize.scale);
                    this.snapForBattleBackground();
                    this.startFlashForEncounter(speed / 2);
                }

                $gameScreen.setZoom(zoomPos.x, zoomPos.y, (q * dp_renderSize.scale));
                if (n === Math.floor(speed / 6)) {
                    this.startFlashForEncounter(speed / 2);
                }
                if (n === Math.floor(speed / 2)) {
                    BattleManager.playBattleBgm();
                    this.startFadeOut(this.fadeSpeed());
                }
            }
        };
        //繧ｨ繝ｳ繧ｫ繧ｦ繝ｳ繝医お繝輔ぉ繧ｯ繝医％縺薙∪縺ｧ
        

    }());

    /*
    Tilemap
    =============================================================================
    Canvas繝｢繝ｼ繝画凾縺ｮ霆ｽ驥丞喧縲∵僑螟ｧ邇�縺ｮ蜿肴丐
    */
    (function () {
        //@override
        var _Tilemap_createLayers = Tilemap.prototype._createLayers;
        Tilemap.prototype._createLayers = function () {
            if (this._lowerLayer instanceof Sprite) {
                this._lowerLayer.destroy();
            }
            if (this._upperLayer instanceof Sprite) {
                this._upperLayer.destroy();
            }

            _Tilemap_createLayers.call(this);
        };
    }());

    /*
    Game_Screen
    =============================================================================
    繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ蜃ｦ逅�縺ｮ繝輔ャ繧ｯ
    */
    (function () {
        //@override
        var _parent_update = Game_Screen.prototype.update;
        Game_Screen.prototype.update = function () {
            _parent_update.call(this);
            camera.animation.update();
        };

        //@override
        // MZ蟇ｾ遲� munokura
        // var _parent_initialize = Game_Screen.prototype.initialize;
        // Game_Screen.prototype.initialize = function () {
        //     _parent_initialize.call(this);
        //     dp_renderSize.reset();
        // };

    }());

}());