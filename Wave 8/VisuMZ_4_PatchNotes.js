//=============================================================================
// VisuStella MZ - Patch Notes
// VisuMZ_4_PatchNotes.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_PatchNotes = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PatchNotes = VisuMZ.PatchNotes || {};
VisuMZ.PatchNotes.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.01] [PatchNotes]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Main_Page
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin grants your players the ability to access Patch Notes from the
 * game itself. Being able to tell your players what you've changed from inside
 * the game can make all the difference in the player experience. This plugin
 * lets players access Patch Notes from the title screen, the main menu, or
 * from a Plugin Command ran inside the game.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Adds "Patch Notes" to the Title and/or Main Menu command windows.
 * * Create any number of patch notes listings to display various patches in.
 * * Patch Note listings can use text codes to allow for lots of customization.
 * * Normal scrolling and fast scrolling can be done with the keyboard.
 * * Mouse scrolling is also possible via touch controls.
 * * Access the "Patch Notes" page from the game via Plugin Command.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Scene Plugin Commands ===
 * 
 * ---
 *
 * Scene: Open Patch Notes
 * - Opens Patch Notes.
 * - CANNOT be used inside of battle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Patch Notes in Menu?
 * - Enables/disables Patch Notes inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables Patch Notes inside the main menu.
 *
 * ---
 *
 * System: Show Patch Notes in Menu?
 * - Shows/hides Patch Notes inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Patch Notes inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Patch notes displayed in the menu.
 *
 * ---
 *
 * Patch Notes
 * 
 *   Title:
 *   - The name of this patch note listed.
 *   - Text codes allowed.
 * 
 *   Credits Text:
 *   - Text displayed for this patch note listing.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Set up the main menu defaults.
 *
 * ---
 *
 * Main Menu Settings
 * 
 *   Command Name:
 *   - Name of the 'Patch Notes' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Patch Notes' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Patch Notes' option to the Main Menu by default?
 * 
 *   Show in Title Command?:
 *   - Add 'Patch Notes' the Title Command Window?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_PatchNotes.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * Button Assist Window
 * 
 *   Slow Scroll:
 *   - Text used for slow scrolling.
 * 
 *   Fast Scroll:
 *   - Text used for fast scrolling.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * These settings let you adjust the windows displayed for this plugin.
 *
 * ---
 *
 * List Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Display Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *     Buffers > Top Buffer:
 *     Buffers > Bottom Buffer:
 *     - How many lines should the top/bottom be buffered from?
 * 
 *   Center Width:
 *   - What's the center width for the text?
 *   - Use 0 for the full window width.
 * 
 *     Scrolling > Slow > Scroll Speed:
 *     - What speed will Up/Down scroll the window at?
 *     - Lower is slower. Higher is faster.
 * 
 *     Scrolling > Slow > Sound Frequency:
 *     - How frequent will Up/Down scrolling make sounds?
 *     - Lower is quicker. Higher is later.
 * 
 *     Scrolling > Fast > Scroll Speed:
 *     - What speed will PageUp/PageDn scroll the window at?
 *     - Lower is slower. Higher is faster.
 * 
 *     Scrolling > Fast > Sound Frequency:
 *     - How frequent will PageUp/PageDn scrolling make sounds?
 *     - Lower is quicker. Higher is later.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
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
 * Version 1.01: February 16, 2023
 * * Feature Update!
 * ** Added arrows to the windows to indicate scrollability. Update by Irina.
 *
 * Version 1.00 Official Release Date: December 21, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneOpenPatchNotes
 * @text Scene: Open Patch Notes
 * @desc Opens Patch Notes.
 * CANNOT be used inside of battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnablePatchNotesMenu
 * @text System: Enable PatchNotes in Menu?
 * @desc Enables/disables PatchNotes menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables PatchNotes menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowPatchNotesMenu
 * @text System: Show PatchNotes in Menu?
 * @desc Shows/hides PatchNotes menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides PatchNotes menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param PatchNotes
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param PatchNotes:arraystruct
 * @text Patch Notes
 * @type struct<PatchNote>[]
 * @desc Patch notes displayed in the menu.
 * @default ["{\"Title:str\":\"\\\\I[164]【2023.01.01】 Happy New Year\",\"Text:json\":\"\\\"\\\\\\\\{Happy New Year Update\\\\\\\\}\\\\n\\\\n\\\\\\\\c[5]Gameplay Changes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[6]Balance Changes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[24]Buffs\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[2]Nerfs\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[27]Bug Fixes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[4]Additional Notes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\"\"}","{\"Title:str\":\"\\\\I[163]【2022.12.31】 New Year's Eve\",\"Text:json\":\"\\\"\\\\\\\\{New Year's Eve Update\\\\\\\\}\\\\n\\\\n\\\\\\\\c[5]Gameplay Changes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[6]Balance Changes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[24]Buffs\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[2]Nerfs\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[27]Bug Fixes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[4]Additional Notes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\"\"}","{\"Title:str\":\"\\\\I[162]【2022.12.01】 Sample Patch Notes\",\"Text:json\":\"\\\"\\\\\\\\{Sample Patch Notes Update\\\\\\\\}\\\\n\\\\n\\\\\\\\c[5]Gameplay Changes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[6]Balance Changes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[24]Buffs\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[2]Nerfs\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[27]Bug Fixes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n\\\\n\\\\\\\\c[4]Additional Notes\\\\\\\\c[0]\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\\n•Insert text here\\\"\"}"]
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @type struct<MainMenu>
 * @desc Main Menu settings for Patch Notes.
 * @default {"Name:str":"Patch Notes","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true","ShowTitleCommand:eval":"true"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_Patch Notes.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"ButtonAssist":"","SlowScroll:str":"Scroll","FastScroll:str":"Fast Scroll"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"CommandWindow":"","CommandWindow_BgType:num":"0","CommandWindow_RectJS:func":"\"const fw = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\n\\nconst ww = Math.max(fw - 300, 480);\\nconst wh = this.calcWindowHeight(10, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = Math.floor((Graphics.boxHeight - wh) / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","DisplayWindow":"","DisplayWindow_BgType:num":"0","DisplayWindow_Buffers":"","DisplayWindow_BufferTop:num":"1","DisplayWindow_BufferBottom:num":"1","DisplayWindow_CenterWidth:num":"816","Scrolling":"","Slow":"","SlowScrollSpeed:num":"8","SlowSoundFreq:num":"8","Fast":"","FastScrollSpeed:num":"32","FastSoundFreq:num":"4","DisplayWindow_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.mainAreaHeight();\\nconst wx = 0;\\nconst wy = this.mainAreaTop();\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * PatchNote Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PatchNote:
 *
 * @param Title:str
 * @text Patch Note Title
 * @desc The name of this patch note listed.
 * Text codes allowed.
 * @default \I[83]【YYYY.MM.DD】 Patch Notes
 *
 * @param Text:json
 * @text Credits Text
 * @type note
 * @desc Text displayed for this patch note listing.
 * Text codes allowed.
 * @default "\\c[5]Gameplay Changes\\c[0]\n\n\\c[5]Gameplay Changes\\c[0]\n•Insert text here\n•Insert text here\n•Insert text here\n•Insert text here\n\n\\c[6]Balance Changes\\c[0]\n•Insert text here\n•Insert text here\n•Insert text here\n•Insert text here\n\n\\c[24]Buffs\\c[0]\n•Insert text here\n•Insert text here\n•Insert text here\n•Insert text here\n\n\\c[2]Nerfs\\c[0]\n•Insert text here\n•Insert text here\n•Insert text here\n•Insert text here\n\n\\c[27]Bug Fixes\\c[0]\n•Insert text here\n•Insert text here\n•Insert text here\n•Insert text here\n\n\\c[4]Additional Notes\\c[0]\n•Insert text here\n•Insert text here\n•Insert text here\n•Insert text here"
 *
 */
/* ----------------------------------------------------------------------------
 * MainMenu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param Name:str
 * @text Command Name
 * @parent Options
 * @desc Name of the 'Patch Notes' option in the Main Menu.
 * @default Patch Notes
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Patch Notes' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Patch Notes' option to the Main Menu by default?
 * @default true
 *
 * @param ShowTitleCommand:eval
 * @text Show in Title Command?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Patch Notes' the Title Command Window?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param SlowScroll:str
 * @text Slow Scroll
 * @parent ButtonAssist
 * @desc Text used for slow scrolling.
 * @default Scroll
 *
 * @param FastScroll:str
 * @text Fast Scroll
 * @parent ButtonAssist
 * @desc Text used for fast scrolling.
 * @default Fast Scroll
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param CommandWindow
 * @text List Window
 *
 * @param CommandWindow_BgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const fw = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\n\nconst ww = Math.max(fw - 300, 480);\nconst wh = this.calcWindowHeight(10, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = Math.floor((Graphics.boxHeight - wh) / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param DisplayWindow
 * @text Display Window
 *
 * @param DisplayWindow_BgType:num
 * @text Background Type
 * @parent DisplayWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 * 
 * @param DisplayWindow_Buffers
 * @text Buffers
 * @parent DisplayWindow
 *
 * @param DisplayWindow_BufferTop:num
 * @text Top Buffer
 * @parent DisplayWindow_Buffers
 * @type number
 * @desc How many lines should the top be buffered from?
 * @default 1
 *
 * @param DisplayWindow_BufferBottom:num
 * @text Bottom Buffer
 * @parent DisplayWindow_Buffers
 * @type number
 * @desc How many lines should the bottom be buffered from?
 * @default 1
 *
 * @param DisplayWindow_CenterWidth:num
 * @text Center Width
 * @parent DisplayWindow
 * @type number
 * @desc What's the center width for the text?
 * Use 0 for the full window width.
 * @default 816
 *
 * @param Scrolling
 * @parent DisplayWindow
 *
 * @param Slow
 * @parent Scrolling
 *
 * @param SlowScrollSpeed:num
 * @text Scroll Speed
 * @parent Slow
 * @type number
 * @min 1
 * @desc What speed will Up/Down scroll the window at?
 * Lower is slower. Higher is faster.
 * @default 8
 *
 * @param SlowSoundFreq:num
 * @text Sound Frequency
 * @parent Slow
 * @type number
 * @min 1
 * @desc How frequent will Up/Down scrolling make sounds?
 * Lower is quicker. Higher is later.
 * @default 8
 *
 * @param Fast
 * @parent Scrolling
 *
 * @param FastScrollSpeed:num
 * @text Scroll Speed
 * @parent Fast
 * @type number
 * @min 1
 * @desc What speed will PageUp/PageDn scroll the window at?
 * Lower is slower. Higher is faster.
 * @default 32
 *
 * @param FastSoundFreq:num
 * @text Sound Frequency
 * @parent Fast
 * @type number
 * @min 1
 * @desc How frequent will PageUp/PageDn scrolling make sounds?
 * Lower is quicker. Higher is later.
 * @default 4
 *
 * @param DisplayWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent DisplayWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.mainAreaHeight();\nconst wx = 0;\nconst wy = this.mainAreaTop();\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0xabaa75=_0x5893;(function(_0x32477e,_0x3c2750){const _0x16db39=_0x5893,_0x5089d0=_0x32477e();while(!![]){try{const _0x10f599=parseInt(_0x16db39(0x11a))/0x1*(-parseInt(_0x16db39(0xa2))/0x2)+parseInt(_0x16db39(0xf0))/0x3+parseInt(_0x16db39(0x136))/0x4*(parseInt(_0x16db39(0xb9))/0x5)+parseInt(_0x16db39(0xc6))/0x6*(parseInt(_0x16db39(0xaf))/0x7)+parseInt(_0x16db39(0xc8))/0x8*(parseInt(_0x16db39(0xf4))/0x9)+-parseInt(_0x16db39(0x11b))/0xa+parseInt(_0x16db39(0x14e))/0xb;if(_0x10f599===_0x3c2750)break;else _0x5089d0['push'](_0x5089d0['shift']());}catch(_0x52215b){_0x5089d0['push'](_0x5089d0['shift']());}}}(_0xba0f,0x26c63));var label=_0xabaa75(0x9f),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x2ab845){const _0x533bf6=_0xabaa75;return _0x2ab845['status']&&_0x2ab845[_0x533bf6(0xbf)][_0x533bf6(0x107)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0xabaa75(0x12b)]||{},VisuMZ['ConvertParams']=function(_0x2c282d,_0x48bb89){const _0x117314=_0xabaa75;for(const _0x331b6e in _0x48bb89){if(_0x331b6e[_0x117314(0x133)](/(.*):(.*)/i)){const _0x402647=String(RegExp['$1']),_0x2df6d1=String(RegExp['$2'])[_0x117314(0x146)]()[_0x117314(0x11e)]();let _0x3e2b36,_0x43f446,_0x157e31;switch(_0x2df6d1){case _0x117314(0x97):_0x3e2b36=_0x48bb89[_0x331b6e]!==''?Number(_0x48bb89[_0x331b6e]):0x0;break;case'ARRAYNUM':_0x43f446=_0x48bb89[_0x331b6e]!==''?JSON[_0x117314(0x110)](_0x48bb89[_0x331b6e]):[],_0x3e2b36=_0x43f446[_0x117314(0x102)](_0x47dad7=>Number(_0x47dad7));break;case _0x117314(0xd2):_0x3e2b36=_0x48bb89[_0x331b6e]!==''?eval(_0x48bb89[_0x331b6e]):null;break;case _0x117314(0x121):_0x43f446=_0x48bb89[_0x331b6e]!==''?JSON[_0x117314(0x110)](_0x48bb89[_0x331b6e]):[],_0x3e2b36=_0x43f446['map'](_0x328dc3=>eval(_0x328dc3));break;case _0x117314(0xa1):_0x3e2b36=_0x48bb89[_0x331b6e]!==''?JSON[_0x117314(0x110)](_0x48bb89[_0x331b6e]):'';break;case _0x117314(0xc1):_0x43f446=_0x48bb89[_0x331b6e]!==''?JSON[_0x117314(0x110)](_0x48bb89[_0x331b6e]):[],_0x3e2b36=_0x43f446[_0x117314(0x102)](_0x33f7ba=>JSON[_0x117314(0x110)](_0x33f7ba));break;case _0x117314(0x15d):_0x3e2b36=_0x48bb89[_0x331b6e]!==''?new Function(JSON['parse'](_0x48bb89[_0x331b6e])):new Function(_0x117314(0xa7));break;case _0x117314(0xd6):_0x43f446=_0x48bb89[_0x331b6e]!==''?JSON['parse'](_0x48bb89[_0x331b6e]):[],_0x3e2b36=_0x43f446['map'](_0x496676=>new Function(JSON[_0x117314(0x110)](_0x496676)));break;case'STR':_0x3e2b36=_0x48bb89[_0x331b6e]!==''?String(_0x48bb89[_0x331b6e]):'';break;case'ARRAYSTR':_0x43f446=_0x48bb89[_0x331b6e]!==''?JSON[_0x117314(0x110)](_0x48bb89[_0x331b6e]):[],_0x3e2b36=_0x43f446['map'](_0x4c0501=>String(_0x4c0501));break;case _0x117314(0x127):_0x157e31=_0x48bb89[_0x331b6e]!==''?JSON['parse'](_0x48bb89[_0x331b6e]):{},_0x3e2b36=VisuMZ[_0x117314(0xff)]({},_0x157e31);break;case'ARRAYSTRUCT':_0x43f446=_0x48bb89[_0x331b6e]!==''?JSON[_0x117314(0x110)](_0x48bb89[_0x331b6e]):[],_0x3e2b36=_0x43f446['map'](_0x30c462=>VisuMZ[_0x117314(0xff)]({},JSON[_0x117314(0x110)](_0x30c462)));break;default:continue;}_0x2c282d[_0x402647]=_0x3e2b36;}}return _0x2c282d;},(_0x98bce3=>{const _0x57863b=_0xabaa75,_0xbc20ac=_0x98bce3[_0x57863b(0x109)];for(const _0x2144a9 of dependencies){if(_0x57863b(0x10c)==='JsRcU'){if(!Imported[_0x2144a9]){if(_0x57863b(0xa9)!==_0x57863b(0xb8)){alert(_0x57863b(0xd3)['format'](_0xbc20ac,_0x2144a9)),SceneManager[_0x57863b(0xfa)]();break;}else return this[_0x57863b(0xe4)]&&this['_displayWindow']['active']?'':_0x1b18bf[_0x57863b(0x10a)][_0x57863b(0xd1)][_0x57863b(0xfd)](this);}}else _0x3b9265[_0x57863b(0xff)](_0x55b23e,_0xef30d7),_0x4e4f08[_0x57863b(0xc9)](_0x49c996[_0x57863b(0xc2)]);}const _0x53f4e2=_0x98bce3[_0x57863b(0xbf)];if(_0x53f4e2[_0x57863b(0x133)](/\[Version[ ](.*?)\]/i)){if(_0x57863b(0x14c)!==_0x57863b(0x14f)){const _0x35a418=Number(RegExp['$1']);_0x35a418!==VisuMZ[label][_0x57863b(0xae)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x57863b(0xa6)](_0xbc20ac,_0x35a418)),SceneManager['exit']());}else{const _0x12d405=this[_0x57863b(0x131)];this[_0x57863b(0x153)]=0x0,this[_0x57863b(0x153)]=this[_0x57863b(0xe5)](_0x12d405)[_0x57863b(0x10d)];const _0x1f6558=this['lineHeight'](),_0x5556bb=_0x3704a3[_0x57863b(0x151)]*_0x1f6558,_0x42bbd4=_0x26f67e[_0x57863b(0xd0)]*_0x1f6558;this['_allTextHeight']+=_0x5556bb+_0x42bbd4;}}if(_0x53f4e2[_0x57863b(0x133)](/\[Tier[ ](\d+)\]/i)){if('LtFSs'===_0x57863b(0x143)){let _0x4ac6fa=this[_0x57863b(0xf2)]['y'];this[_0x57863b(0xf2)]['y']+=(_0x5e6e5f?0x1:-0x1)*_0x5dbeb7[_0x57863b(0xcb)];let _0x413644=_0xff44ff['max'](0x0,this[_0x57863b(0x153)]-this[_0x57863b(0xcf)]);this[_0x57863b(0xf2)]['y']=this[_0x57863b(0xf2)]['y'][_0x57863b(0x150)](0x0,_0x413644);if(_0x4ac6fa!==this[_0x57863b(0xf2)]['y']&&_0xb037e0[_0x57863b(0xa5)]%_0x38dcc1[_0x57863b(0xd5)]===0x0)this[_0x57863b(0xfb)]();}else{const _0x181764=Number(RegExp['$1']);if(_0x181764<tier){if(_0x57863b(0x129)!==_0x57863b(0x129)){let _0x1c6000=this['origin']['y'],_0x21ea71=_0x37186d[_0x57863b(0x9b)](0x0,this['_allTextHeight']-this[_0x57863b(0xcf)]);this['origin']['y']=_0x21ea71;if(_0x52aa8d&&_0x1c6000!==this[_0x57863b(0xf2)]['y'])this['playCursorSound']();}else alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x57863b(0xa6)](_0xbc20ac,_0x181764,tier)),SceneManager[_0x57863b(0xfa)]();}else tier=Math['max'](_0x181764,tier);}}VisuMZ[_0x57863b(0xff)](VisuMZ[label]['Settings'],_0x98bce3[_0x57863b(0x13e)]);})(pluginData),PluginManager[_0xabaa75(0x135)](pluginData[_0xabaa75(0x109)],'SceneOpenPatchNotes',_0x2ce0ac=>{const _0x579941=_0xabaa75;if(SceneManager['isSceneBattle']())return;SceneManager[_0x579941(0x142)](Scene_PatchNotes);}),PluginManager[_0xabaa75(0x135)](pluginData['name'],_0xabaa75(0x15a),_0x45155e=>{const _0x65cf18=_0xabaa75;VisuMZ[_0x65cf18(0xff)](_0x45155e,_0x45155e),$gameSystem['setMainMenuPatchNotesEnabled'](_0x45155e['Enable']);}),PluginManager[_0xabaa75(0x135)](pluginData[_0xabaa75(0x109)],_0xabaa75(0xf1),_0x4c16c1=>{const _0x4eb461=_0xabaa75;VisuMZ[_0x4eb461(0xff)](_0x4c16c1,_0x4c16c1),$gameSystem[_0x4eb461(0xbe)](_0x4c16c1[_0x4eb461(0x159)]);}),TextManager[_0xabaa75(0x161)]=VisuMZ[_0xabaa75(0x9f)]['Settings'][_0xabaa75(0xc3)][_0xabaa75(0x12d)],TextManager[_0xabaa75(0x149)]=VisuMZ['PatchNotes']['Settings']['Vocab'][_0xabaa75(0xf5)],TextManager[_0xabaa75(0xf8)]=VisuMZ['PatchNotes'][_0xabaa75(0x12b)]['Vocab'][_0xabaa75(0x96)],SceneManager[_0xabaa75(0x12e)]=function(){const _0x4d8b27=_0xabaa75;return this[_0x4d8b27(0xb3)]&&this[_0x4d8b27(0xb3)][_0x4d8b27(0xeb)]===Scene_Battle;},VisuMZ[_0xabaa75(0x9f)][_0xabaa75(0x14a)]=Game_System['prototype'][_0xabaa75(0xf3)],Game_System[_0xabaa75(0x10a)][_0xabaa75(0xf3)]=function(){const _0x4b98e1=_0xabaa75;VisuMZ['PatchNotes'][_0x4b98e1(0x14a)][_0x4b98e1(0xfd)](this),this[_0x4b98e1(0x101)]();},Game_System['prototype']['initPatchNotesMainMenu']=function(){const _0x3b878a=_0xabaa75;this['_PatchNotes_MainMenu']={'shown':VisuMZ['PatchNotes'][_0x3b878a(0x12b)]['MainMenu'][_0x3b878a(0x114)],'enabled':VisuMZ[_0x3b878a(0x9f)][_0x3b878a(0x12b)][_0x3b878a(0xc3)][_0x3b878a(0xab)]};},Game_System['prototype'][_0xabaa75(0x12f)]=function(){const _0x4e19b1=_0xabaa75;if(this[_0x4e19b1(0x13d)]===undefined)this['initPatchNotesMainMenu']();return this[_0x4e19b1(0x13d)][_0x4e19b1(0x11c)];},Game_System[_0xabaa75(0x10a)][_0xabaa75(0xbe)]=function(_0x3189ac){const _0x4984e0=_0xabaa75;if(this[_0x4984e0(0x13d)]===undefined)this[_0x4984e0(0x101)]();this['_PatchNotes_MainMenu'][_0x4984e0(0x11c)]=_0x3189ac;},Game_System[_0xabaa75(0x10a)][_0xabaa75(0xda)]=function(){const _0x405a77=_0xabaa75;if(this['_PatchNotes_MainMenu']===undefined)this[_0x405a77(0x101)]();return this['_PatchNotes_MainMenu'][_0x405a77(0x132)];},Game_System[_0xabaa75(0x10a)][_0xabaa75(0xc9)]=function(_0x2d271c){const _0x805319=_0xabaa75;if(this[_0x805319(0x13d)]===undefined)this[_0x805319(0x101)]();this['_PatchNotes_MainMenu'][_0x805319(0x132)]=_0x2d271c;},VisuMZ[_0xabaa75(0x9f)][_0xabaa75(0xec)]=Scene_Title[_0xabaa75(0x10a)][_0xabaa75(0xdb)],Scene_Title[_0xabaa75(0x10a)][_0xabaa75(0xdb)]=function(){const _0x97f647=_0xabaa75;VisuMZ[_0x97f647(0x9f)][_0x97f647(0xec)][_0x97f647(0xfd)](this),this[_0x97f647(0xb1)][_0x97f647(0xb7)](_0x97f647(0x14b),this[_0x97f647(0x125)][_0x97f647(0x138)](this));},Scene_Title['prototype'][_0xabaa75(0x125)]=function(){const _0x513c79=_0xabaa75;this[_0x513c79(0xb1)][_0x513c79(0xce)](),SceneManager[_0x513c79(0x142)](Scene_PatchNotes);},VisuMZ['PatchNotes']['Scene_Menu_createCommandWindow']=Scene_Menu[_0xabaa75(0x10a)]['createCommandWindow'],Scene_Menu[_0xabaa75(0x10a)][_0xabaa75(0xdb)]=function(){const _0x3c5f55=_0xabaa75;VisuMZ['PatchNotes']['Scene_Menu_createCommandWindow']['call'](this);const _0x4650de=this[_0x3c5f55(0xb1)];_0x4650de['setHandler'](_0x3c5f55(0x14b),this[_0x3c5f55(0x125)][_0x3c5f55(0x138)](this));},Scene_Menu[_0xabaa75(0x10a)][_0xabaa75(0x125)]=function(){SceneManager['push'](Scene_PatchNotes);};function Scene_PatchNotes(){const _0x5b4967=_0xabaa75;this[_0x5b4967(0xf3)](...arguments);}Scene_PatchNotes[_0xabaa75(0x10a)]=Object['create'](Scene_MenuBase[_0xabaa75(0x10a)]),Scene_PatchNotes['prototype'][_0xabaa75(0xeb)]=Scene_PatchNotes,Scene_PatchNotes['prototype'][_0xabaa75(0xf3)]=function(){const _0x37b1e3=_0xabaa75;Scene_MenuBase['prototype'][_0x37b1e3(0xf3)][_0x37b1e3(0xfd)](this);},Scene_PatchNotes['prototype']['helpAreaHeight']=function(){return 0x0;},Scene_PatchNotes[_0xabaa75(0x10a)]['create']=function(){const _0x243cf5=_0xabaa75;Scene_MenuBase[_0x243cf5(0x10a)]['create'][_0x243cf5(0xfd)](this),this[_0x243cf5(0xdb)](),this[_0x243cf5(0x120)]();},Scene_PatchNotes[_0xabaa75(0x10a)][_0xabaa75(0xdb)]=function(){const _0x20062c=_0xabaa75,_0x28af35=this[_0x20062c(0xac)](),_0x4c9baf=new Window_PatchNotesList(_0x28af35);_0x4c9baf[_0x20062c(0xb7)](_0x20062c(0x14b),this[_0x20062c(0x134)][_0x20062c(0x138)](this)),_0x4c9baf[_0x20062c(0xb7)](_0x20062c(0x117),this[_0x20062c(0x119)][_0x20062c(0x138)](this)),this['addWindow'](_0x4c9baf),this[_0x20062c(0xb1)]=_0x4c9baf,_0x4c9baf[_0x20062c(0xa4)](Window_PatchNotesList[_0x20062c(0x15e)]);},Scene_PatchNotes[_0xabaa75(0x10a)][_0xabaa75(0xac)]=function(){const _0x23e753=_0xabaa75;if(VisuMZ[_0x23e753(0x9f)][_0x23e753(0x12b)][_0x23e753(0xed)][_0x23e753(0x9a)])return VisuMZ[_0x23e753(0x9f)][_0x23e753(0x12b)]['Window'][_0x23e753(0x9a)][_0x23e753(0xfd)](this);const _0x3d089=Math[_0x23e753(0x9b)](0x2d0,Math[_0x23e753(0x12c)](Graphics[_0x23e753(0xd8)]*0.75)),_0x4051d5=Math['max'](_0x3d089-0x12c,0x1e0),_0x3e4544=this[_0x23e753(0x144)](0xa,!![]),_0xbe4155=Math[_0x23e753(0x12c)]((Graphics[_0x23e753(0xd8)]-_0x4051d5)/0x2),_0x4a54a0=Math['floor']((Graphics['boxHeight']-_0x3e4544)/0x2);return new Rectangle(_0xbe4155,_0x4a54a0,_0x4051d5,_0x3e4544);},Scene_PatchNotes[_0xabaa75(0x10a)][_0xabaa75(0x120)]=function(){const _0x4ac072=_0xabaa75,_0x5e495e=this[_0x4ac072(0xb2)](),_0xfbad88=new Window_PatchNotesDisplay(_0x5e495e);_0xfbad88[_0x4ac072(0x13f)](),_0xfbad88[_0x4ac072(0x137)](),_0xfbad88['setHandler'](_0x4ac072(0x117),this['onDisplayCancel'][_0x4ac072(0x138)](this)),this[_0x4ac072(0x9e)](_0xfbad88),this[_0x4ac072(0xe4)]=_0xfbad88,_0xfbad88[_0x4ac072(0xa4)](Window_PatchNotesDisplay[_0x4ac072(0x15e)]);},Scene_PatchNotes[_0xabaa75(0x10a)]['displayWindowRect']=function(){const _0x588d49=_0xabaa75;if(VisuMZ['PatchNotes'][_0x588d49(0x12b)][_0x588d49(0xed)]['DisplayWindow_RectJS'])return VisuMZ['PatchNotes'][_0x588d49(0x12b)][_0x588d49(0xed)]['DisplayWindow_RectJS'][_0x588d49(0xfd)](this);const _0x258e82=Graphics[_0x588d49(0xd8)],_0x1b0582=this['mainAreaHeight'](),_0x555e70=0x0,_0x93f663=this['mainAreaTop']();return new Rectangle(_0x555e70,_0x93f663,_0x258e82,_0x1b0582);},Scene_PatchNotes[_0xabaa75(0x10a)]['onCommandPatchNotes']=function(){const _0x5268c3=_0xabaa75,_0x46152f=this[_0x5268c3(0xb1)][_0x5268c3(0x157)]();this[_0x5268c3(0xe4)][_0x5268c3(0xbd)](_0x46152f),this['_commandWindow'][_0x5268c3(0x13f)](),this['_commandWindow'][_0x5268c3(0x137)](),this[_0x5268c3(0xe4)][_0x5268c3(0xe9)](),this['_displayWindow'][_0x5268c3(0x11f)]();},Scene_PatchNotes[_0xabaa75(0x10a)]['onDisplayCancel']=function(){const _0x291c5b=_0xabaa75;this[_0x291c5b(0xb1)]['show'](),this[_0x291c5b(0xb1)]['activate'](),this[_0x291c5b(0xe4)][_0x291c5b(0x13f)](),this[_0x291c5b(0xe4)][_0x291c5b(0x137)]();},Scene_PatchNotes[_0xabaa75(0x10a)]['buttonAssistKey1']=function(){const _0x3ccf5b=_0xabaa75;if(this[_0x3ccf5b(0xe4)]&&this[_0x3ccf5b(0xe4)][_0x3ccf5b(0x10f)]){if('fkLRw'===_0x3ccf5b(0xfc))return TextManager[_0x3ccf5b(0x145)]('pageup',_0x3ccf5b(0xb4));else{let _0x1eb7b6=this['origin']['y'];this[_0x3ccf5b(0xf2)]['y']+=(_0x5add0d?0x1:-0x1)*_0x2d34d1[_0x3ccf5b(0xe8)];let _0x3450f6=_0x3d36a3[_0x3ccf5b(0x9b)](0x0,this['_allTextHeight']-this[_0x3ccf5b(0xcf)]);this['origin']['y']=this[_0x3ccf5b(0xf2)]['y'][_0x3ccf5b(0x150)](0x0,_0x3450f6);if(_0x1eb7b6!==this[_0x3ccf5b(0xf2)]['y']&&_0x4eb5fa[_0x3ccf5b(0xa5)]%_0x5d471f[_0x3ccf5b(0x12a)]===0x0)this['playCursorSound']();}}else{if(_0x3ccf5b(0x148)===_0x3ccf5b(0x148))return'';else _0x50e8f3['prototype']['initialize'][_0x3ccf5b(0xfd)](this);}},Scene_PatchNotes[_0xabaa75(0x10a)][_0xabaa75(0xee)]=function(){const _0x551ee7=_0xabaa75;return this[_0x551ee7(0xe4)]&&this[_0x551ee7(0xe4)]['active']?TextManager['getInputMultiButtonStrings']('up',_0x551ee7(0xcc)):'';},Scene_PatchNotes[_0xabaa75(0x10a)][_0xabaa75(0xd1)]=function(){const _0x5883db=_0xabaa75;return this[_0x5883db(0xe4)]&&this['_displayWindow']['active']?'':_0x5883db(0xc4)!==_0x5883db(0xc4)?this[_0x5883db(0xb3)]&&this[_0x5883db(0xb3)][_0x5883db(0xeb)]===_0x58a6ae:Scene_MenuBase[_0x5883db(0x10a)][_0x5883db(0xd1)][_0x5883db(0xfd)](this);},Scene_PatchNotes[_0xabaa75(0x10a)]['buttonAssistText1']=function(){const _0x4febdb=_0xabaa75;return TextManager[_0x4febdb(0xf8)];},Scene_PatchNotes[_0xabaa75(0x10a)][_0xabaa75(0xfe)]=function(){const _0x6116f6=_0xabaa75;return TextManager[_0x6116f6(0x149)];},Scene_PatchNotes[_0xabaa75(0x10a)][_0xabaa75(0xdd)]=function(){const _0x3b7eea=_0xabaa75;Scene_MenuBase['prototype'][_0x3b7eea(0xdd)][_0x3b7eea(0xfd)](this),this[_0x3b7eea(0xb6)](this[_0x3b7eea(0xf6)]()),this['createCustomBackgroundImages']();},Scene_PatchNotes[_0xabaa75(0x10a)]['getBackgroundOpacity']=function(){const _0x4a4ecc=_0xabaa75;return VisuMZ[_0x4a4ecc(0x9f)][_0x4a4ecc(0x12b)][_0x4a4ecc(0xbb)][_0x4a4ecc(0x13b)];},Scene_PatchNotes['prototype'][_0xabaa75(0x14d)]=function(){const _0x4cd59a=_0xabaa75,_0x3284b4=VisuMZ[_0x4cd59a(0x9f)][_0x4cd59a(0x12b)]['BgSettings'];_0x3284b4&&(_0x3284b4['BgFilename1']!==''||_0x3284b4[_0x4cd59a(0x13a)]!=='')&&(this['_backSprite1']=new Sprite(ImageManager['loadTitle1'](_0x3284b4[_0x4cd59a(0x118)])),this[_0x4cd59a(0x15f)]=new Sprite(ImageManager[_0x4cd59a(0xcd)](_0x3284b4[_0x4cd59a(0x13a)])),this[_0x4cd59a(0x108)](this[_0x4cd59a(0x152)]),this['addChild'](this['_backSprite2']),this[_0x4cd59a(0x152)][_0x4cd59a(0xe3)][_0x4cd59a(0xf7)](this[_0x4cd59a(0x123)][_0x4cd59a(0x138)](this,this[_0x4cd59a(0x152)])),this[_0x4cd59a(0x15f)][_0x4cd59a(0xe3)][_0x4cd59a(0xf7)](this[_0x4cd59a(0x123)]['bind'](this,this[_0x4cd59a(0x15f)])));},Scene_PatchNotes[_0xabaa75(0x10a)][_0xabaa75(0x123)]=function(_0x26124e){this['scaleSprite'](_0x26124e),this['centerSprite'](_0x26124e);},VisuMZ[_0xabaa75(0x9f)][_0xabaa75(0x99)]=Window_MenuCommand[_0xabaa75(0x10a)][_0xabaa75(0x105)],Window_MenuCommand[_0xabaa75(0x10a)]['addOriginalCommands']=function(){const _0x1f1c53=_0xabaa75;VisuMZ['PatchNotes']['Window_MenuCommand_addOriginalCommands']['call'](this),this[_0x1f1c53(0x128)]();},Window_MenuCommand[_0xabaa75(0x10a)][_0xabaa75(0x128)]=function(){const _0x46499d=_0xabaa75;if(!this['addPatchNotesCommandAutomatically']())return;if(!this[_0x46499d(0x141)]())return;const _0xed5975=TextManager[_0x46499d(0x161)],_0x24054c=this[_0x46499d(0x154)]();this[_0x46499d(0x158)](_0xed5975,_0x46499d(0x14b),_0x24054c);},Window_MenuCommand[_0xabaa75(0x10a)][_0xabaa75(0xc5)]=function(){const _0x517a68=_0xabaa75;return Imported[_0x517a68(0xd4)]?![]:!![];},Window_MenuCommand[_0xabaa75(0x10a)][_0xabaa75(0x141)]=function(){const _0xb91e27=_0xabaa75;return $gameSystem[_0xb91e27(0x12f)]();},Window_MenuCommand[_0xabaa75(0x10a)][_0xabaa75(0x154)]=function(){const _0x34a660=_0xabaa75;return $gameSystem[_0x34a660(0xda)]();},Window_TitleCommand[_0xabaa75(0x15c)]=VisuMZ[_0xabaa75(0x9f)][_0xabaa75(0x12b)][_0xabaa75(0xc3)]['ShowTitleCommand'],VisuMZ['PatchNotes'][_0xabaa75(0xc0)]=Window_TitleCommand[_0xabaa75(0x10a)][_0xabaa75(0xef)],Window_TitleCommand[_0xabaa75(0x10a)][_0xabaa75(0xef)]=function(){const _0x17d2e2=_0xabaa75;VisuMZ[_0x17d2e2(0x9f)][_0x17d2e2(0xc0)]['call'](this),this[_0x17d2e2(0x128)]();},Window_TitleCommand[_0xabaa75(0x10a)][_0xabaa75(0x128)]=function(){const _0x1e4da8=_0xabaa75;if(!Window_TitleCommand[_0x1e4da8(0x15c)])return;if(this[_0x1e4da8(0x9c)]('patchNotes')>=0x0)return;const _0x448f6c=TextManager['PatchNotesMenuCommand'],_0x25cf7d=!![];this[_0x1e4da8(0x158)](_0x448f6c,'patchNotes',_0x25cf7d);const _0x37c6b9=this['findSymbol'](_0x1e4da8(0x103));if(_0x37c6b9>0x0){if(_0x1e4da8(0xb5)!=='DAMTk'){if(_0xc88c32['PatchNotes']['Settings'][_0x1e4da8(0xed)]['DisplayWindow_RectJS'])return _0x466de4[_0x1e4da8(0x9f)][_0x1e4da8(0x12b)][_0x1e4da8(0xed)][_0x1e4da8(0xbc)][_0x1e4da8(0xfd)](this);const _0x1af144=_0x2ff3bd['boxWidth'],_0x34bd01=this['mainAreaHeight'](),_0x59a395=0x0,_0x1c3833=this[_0x1e4da8(0xe6)]();return new _0x381051(_0x59a395,_0x1c3833,_0x1af144,_0x34bd01);}else{const _0x4a32b3=this[_0x1e4da8(0x15b)]['pop']();this[_0x1e4da8(0x15b)][_0x1e4da8(0x160)](_0x37c6b9,0x0,_0x4a32b3);}}};function Window_PatchNotesList(){const _0x3d95ac=_0xabaa75;this[_0x3d95ac(0xf3)](...arguments);}Window_PatchNotesList[_0xabaa75(0x10a)]=Object[_0xabaa75(0x98)](Window_Command[_0xabaa75(0x10a)]),Window_PatchNotesList[_0xabaa75(0x10a)]['constructor']=Window_PatchNotesList,Window_PatchNotesList[_0xabaa75(0x15e)]=VisuMZ['PatchNotes'][_0xabaa75(0x12b)][_0xabaa75(0xed)][_0xabaa75(0x122)],Window_PatchNotesList[_0xabaa75(0x113)]=VisuMZ[_0xabaa75(0x9f)][_0xabaa75(0x12b)][_0xabaa75(0x9f)],Window_PatchNotesList[_0xabaa75(0x10a)][_0xabaa75(0xf3)]=function(_0x5942e6){const _0x4d1d00=_0xabaa75;Window_Command[_0x4d1d00(0x10a)][_0x4d1d00(0xf3)][_0x4d1d00(0xfd)](this,_0x5942e6);},Window_PatchNotesList[_0xabaa75(0x10a)][_0xabaa75(0xe2)]=function(){return![];},Window_PatchNotesList[_0xabaa75(0x10a)]['useDigitGroupingEx']=function(){return![];},Window_PatchNotesList[_0xabaa75(0x10a)][_0xabaa75(0xef)]=function(){const _0x1790ee=_0xabaa75;for(const _0x2fd5ef of Window_PatchNotesList[_0x1790ee(0x113)]){const _0x3e0337=_0x2fd5ef[_0x1790ee(0xe1)]||'',_0x297e8e=_0x2fd5ef['Text']||'';this[_0x1790ee(0x158)](_0x3e0337,'patchNotes',!![],_0x297e8e);}},Window_PatchNotesList[_0xabaa75(0x10a)][_0xabaa75(0x124)]=function(_0x36c8de){const _0x575ca2=_0xabaa75,_0x158749=this[_0x575ca2(0x93)](_0x36c8de);this[_0x575ca2(0x126)](),this[_0x575ca2(0xaa)](this[_0x575ca2(0xd7)](_0x36c8de)),this[_0x575ca2(0x10b)](this[_0x575ca2(0xba)](_0x36c8de),_0x158749['x'],_0x158749['y'],_0x158749['width']);};function Window_PatchNotesDisplay(){this['initialize'](...arguments);}function _0x5893(_0xe804d1,_0x2412d9){const _0xba0fa1=_0xba0f();return _0x5893=function(_0x58933e,_0xb8844f){_0x58933e=_0x58933e-0x93;let _0x2e3744=_0xba0fa1[_0x58933e];return _0x2e3744;},_0x5893(_0xe804d1,_0x2412d9);}function _0xba0f(){const _0xf39c7e=['frameCount','format','return\x200','contentsHeight','JcgxM','changePaintOpacity','EnableMainMenu','commandWindowRect','scrollToTop','version','714bXUJGM','end','_commandWindow','displayWindowRect','_scene','pagedown','DAMTk','setBackgroundOpacity','setHandler','fPzdW','72995qwWVIu','commandName','BgSettings','DisplayWindow_RectJS','setText','setMainMenuPatchNotesVisible','description','Window_TitleCommand_makeCommandList','ARRAYJSON','Enable','MainMenu','ypPKV','addPatchNotesCommandAutomatically','13008dgLbPe','innerWidth','8wXiugh','setMainMenuPatchNotesEnabled','VisuMZ_1_MessageCore','SLOW_SCROLL_SPEED','down','loadTitle2','close','innerHeight','BOTTOM_LINE_BUFFER','buttonAssistKey4','EVAL','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','VisuMZ_1_MainMenuCore','SLOW_SOUND_FREQUENCY','ARRAYFUNC','isCommandEnabled','boxWidth','min','isMainMenuPatchNotesEnabled','createCommandWindow','processFastScroll','createBackground','PPDME','drawMessageText','FastScrollSpeed','Title','useDigitGrouping','bitmap','_displayWindow','textSizeEx','mainAreaTop','isPressed','FAST_SCROLL_SPEED','show','pageup','constructor','Scene_Title_createCommandWindow','Window','buttonAssistKey3','makeCommandList','781764rBgofa','SystemShowPatchNotesMenu','origin','initialize','852444MbDgQd','SlowScroll','getBackgroundOpacity','addLoadListener','PatchNotesFastScroll','updateArrows','exit','playCursorSound','fkLRw','call','buttonAssistText3','ConvertParams','downArrowVisible','initPatchNotesMainMenu','map','options','drawAllText','addOriginalCommands','calculateTextHeight','includes','addChild','name','prototype','drawTextEx','JsRcU','height','pViNL','active','parse','updateOrigin','lineHeight','LIST','ShowMainMenu','DisplayWindow_BgType','resetWordWrap','cancel','BgFilename1','popScene','5ExerKE','2181810GolUtp','shown','SlowSoundFreq','trim','activate','createDisplayWindow','ARRAYEVAL','CommandWindow_BgType','adjustSprite','drawItem','commandPatchNotes','resetTextColor','STRUCT','addPatchNotesCommand','vlYzz','FAST_SOUND_FREQUENCY','Settings','floor','Name','isSceneBattle','isMainMenuPatchNotesVisible','processSlowScroll','_text','enabled','match','onCommandPatchNotes','registerCommand','4ozJcnV','deactivate','bind','refresh','BgFilename2','SnapshotOpacity','DisplayWindow_BufferTop','_PatchNotes_MainMenu','parameters','hide','smoothScrollBy','isPatchNotesCommandVisible','push','eJXfn','calcWindowHeight','getInputMultiButtonStrings','toUpperCase','processCursorMove','CgPdn','PatchNotesScroll','Game_System_initialize','patchNotes','YyTdW','createCustomBackgroundImages','446226qZxwTw','swBBe','clamp','TOP_LINE_BUFFER','_backSprite1','_allTextHeight','isPatchNotesCommandEnabled','resetFontSettings','scrollToBottom','currentExt','addCommand','Show','SystemEnablePatchNotesMenu','_list','PATCHNOTES_ADD_COMMAND','FUNC','BG_TYPE','_backSprite2','splice','PatchNotesMenuCommand','itemLineRect','DisplayWindow_BufferBottom','SlowScrollSpeed','FastScroll','NUM','create','Window_MenuCommand_addOriginalCommands','CommandWindow_RectJS','max','findSymbol','CENTER_WIDTH','addWindow','PatchNotes','isTriggered','JSON','101842kysOnB','FastSoundFreq','setBackgroundType'];_0xba0f=function(){return _0xf39c7e;};return _0xba0f();}Window_PatchNotesDisplay[_0xabaa75(0x10a)]=Object[_0xabaa75(0x98)](Window_Selectable[_0xabaa75(0x10a)]),Window_PatchNotesDisplay[_0xabaa75(0x10a)]['constructor']=Window_PatchNotesDisplay,Window_PatchNotesDisplay[_0xabaa75(0x15e)]=VisuMZ[_0xabaa75(0x9f)]['Settings'][_0xabaa75(0xed)][_0xabaa75(0x115)],Window_PatchNotesDisplay['TOP_LINE_BUFFER']=VisuMZ['PatchNotes']['Settings']['Window'][_0xabaa75(0x13c)]??0x1,Window_PatchNotesDisplay['BOTTOM_LINE_BUFFER']=VisuMZ[_0xabaa75(0x9f)][_0xabaa75(0x12b)]['Window'][_0xabaa75(0x94)]??0x1,Window_PatchNotesDisplay[_0xabaa75(0x9d)]=VisuMZ['PatchNotes'][_0xabaa75(0x12b)][_0xabaa75(0xed)]['DisplayWindow_CenterWidth']??0x1,Window_PatchNotesDisplay[_0xabaa75(0xcb)]=VisuMZ['PatchNotes'][_0xabaa75(0x12b)][_0xabaa75(0xed)][_0xabaa75(0x95)]||0x1,Window_PatchNotesDisplay['FAST_SCROLL_SPEED']=VisuMZ['PatchNotes']['Settings'][_0xabaa75(0xed)][_0xabaa75(0xe0)]||0x1,Window_PatchNotesDisplay['SLOW_SOUND_FREQUENCY']=VisuMZ[_0xabaa75(0x9f)]['Settings']['Window'][_0xabaa75(0x11d)]||0x1,Window_PatchNotesDisplay['FAST_SOUND_FREQUENCY']=VisuMZ['PatchNotes'][_0xabaa75(0x12b)][_0xabaa75(0xed)][_0xabaa75(0xa3)]||0x1,Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0xf3)]=function(_0x13747d){const _0x343c63=_0xabaa75;this[_0x343c63(0x131)]='',Window_Selectable[_0x343c63(0x10a)][_0x343c63(0xf3)]['call'](this,_0x13747d),this[_0x343c63(0x153)]=0x0,this[_0x343c63(0x139)](),this[_0x343c63(0x11f)]();},Window_PatchNotesDisplay[_0xabaa75(0x10a)]['isAutoColorAffected']=function(){return!![];},Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0x139)]=function(){const _0x27825b=_0xabaa75;this[_0x27825b(0x106)](),this['createContents'](),this[_0x27825b(0x104)]();},Window_PatchNotesDisplay[_0xabaa75(0x10a)]['calculateTextHeight']=function(){const _0x1ecc7f=_0xabaa75,_0x3d77b6=this[_0x1ecc7f(0x131)];this[_0x1ecc7f(0x153)]=0x0,this['_allTextHeight']=this[_0x1ecc7f(0xe5)](_0x3d77b6)['height'];const _0x3592ed=this[_0x1ecc7f(0x112)](),_0x1936f0=Window_PatchNotesDisplay[_0x1ecc7f(0x151)]*_0x3592ed,_0x89c0a7=Window_PatchNotesDisplay[_0x1ecc7f(0xd0)]*_0x3592ed;this['_allTextHeight']+=_0x1936f0+_0x89c0a7;},Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0xa8)]=function(){const _0x5cf0dc=_0xabaa75;return Math[_0x5cf0dc(0x9b)](this[_0x5cf0dc(0x153)],0x1);},Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0xbd)]=function(_0x2d42ed){const _0x316c14=_0xabaa75;if(_0x2d42ed===this[_0x316c14(0x131)])return;this[_0x316c14(0x131)]=_0x2d42ed,this['refresh']();},Window_PatchNotesDisplay[_0xabaa75(0x10a)]['drawAllText']=function(){const _0x463c6b=_0xabaa75,_0x528268=this[_0x463c6b(0x131)];this[_0x463c6b(0x155)](),this[_0x463c6b(0xdf)](_0x528268);if(Imported[_0x463c6b(0xca)])this[_0x463c6b(0x116)]();this[_0x463c6b(0xad)]();},Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0xdf)]=function(_0x394d33){const _0x5043e4=_0xabaa75,_0xa4a6c7=Math[_0x5043e4(0xd9)](this['innerWidth'],Window_PatchNotesDisplay[_0x5043e4(0x9d)]||this[_0x5043e4(0xc7)]),_0xe8ac3b=Math[_0x5043e4(0x12c)]((this[_0x5043e4(0xc7)]-_0xa4a6c7)/0x2),_0x1f576d=this[_0x5043e4(0x112)]()*Window_PatchNotesDisplay['TOP_LINE_BUFFER'];this[_0x5043e4(0x10b)](_0x394d33,_0xe8ac3b,_0x1f576d,_0xa4a6c7);},Window_PatchNotesDisplay['prototype'][_0xabaa75(0x111)]=function(){},Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0x147)]=function(){const _0x1c9783=_0xabaa75;if(!this[_0x1c9783(0x10f)])return;if(Input['isPressed'](_0x1c9783(0xcc)))this['processSlowScroll'](!![]);else{if(Input['isPressed']('up')){if(_0x1c9783(0x10e)!==_0x1c9783(0xde))this[_0x1c9783(0x130)](![]);else{const _0x3c3cec=this[_0x1c9783(0xb1)][_0x1c9783(0x157)]();this[_0x1c9783(0xe4)]['setText'](_0x3c3cec),this[_0x1c9783(0xb1)][_0x1c9783(0x13f)](),this[_0x1c9783(0xb1)][_0x1c9783(0x137)](),this['_displayWindow']['show'](),this[_0x1c9783(0xe4)][_0x1c9783(0x11f)]();}}else{if(Input[_0x1c9783(0xe7)](_0x1c9783(0xb4)))this[_0x1c9783(0xdc)](!![]);else{if(Input['isPressed'](_0x1c9783(0xea)))this[_0x1c9783(0xdc)](![]);else{if(Input[_0x1c9783(0xa0)]('home'))this[_0x1c9783(0xad)](!![]);else Input[_0x1c9783(0xa0)](_0x1c9783(0xb0))&&this[_0x1c9783(0x156)](!![]);}}}}},Window_PatchNotesDisplay['prototype']['processSlowScroll']=function(_0x4facaf){const _0x4bcac4=_0xabaa75;let _0x13790b=this[_0x4bcac4(0xf2)]['y'];this['origin']['y']+=(_0x4facaf?0x1:-0x1)*Window_PatchNotesDisplay[_0x4bcac4(0xcb)];let _0x29fd62=Math['max'](0x0,this[_0x4bcac4(0x153)]-this[_0x4bcac4(0xcf)]);this['origin']['y']=this[_0x4bcac4(0xf2)]['y']['clamp'](0x0,_0x29fd62);if(_0x13790b!==this[_0x4bcac4(0xf2)]['y']&&Graphics[_0x4bcac4(0xa5)]%Window_PatchNotesDisplay[_0x4bcac4(0xd5)]===0x0)this[_0x4bcac4(0xfb)]();},Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0xdc)]=function(_0x337b8f){const _0x278be6=_0xabaa75;let _0xd1bcd8=this[_0x278be6(0xf2)]['y'];this[_0x278be6(0xf2)]['y']+=(_0x337b8f?0x1:-0x1)*Window_PatchNotesDisplay['FAST_SCROLL_SPEED'];let _0x567589=Math[_0x278be6(0x9b)](0x0,this[_0x278be6(0x153)]-this[_0x278be6(0xcf)]);this[_0x278be6(0xf2)]['y']=this['origin']['y'][_0x278be6(0x150)](0x0,_0x567589);if(_0xd1bcd8!==this['origin']['y']&&Graphics['frameCount']%Window_PatchNotesDisplay[_0x278be6(0x12a)]===0x0)this[_0x278be6(0xfb)]();},Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0xad)]=function(_0x5eab09){const _0x4be15a=_0xabaa75;let _0x166e4c=this[_0x4be15a(0xf2)]['y'];this[_0x4be15a(0xf2)]['y']=0x0;if(_0x5eab09&&_0x166e4c!==this[_0x4be15a(0xf2)]['y'])this['playCursorSound']();},Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0x156)]=function(_0x2c8fce){const _0x4cb342=_0xabaa75;let _0x107585=this[_0x4cb342(0xf2)]['y'],_0x5b5f24=Math[_0x4cb342(0x9b)](0x0,this[_0x4cb342(0x153)]-this[_0x4cb342(0xcf)]);this[_0x4cb342(0xf2)]['y']=_0x5b5f24;if(_0x2c8fce&&_0x107585!==this['origin']['y'])this[_0x4cb342(0xfb)]();},Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0xf9)]=function(){const _0x45fb9f=_0xabaa75;this[_0x45fb9f(0x100)]=this['origin']['y']<this[_0x45fb9f(0x153)]-this[_0x45fb9f(0xcf)],this['upArrowVisible']=this[_0x45fb9f(0xf2)]['y']>0x0;},Window_PatchNotesDisplay[_0xabaa75(0x10a)][_0xabaa75(0x140)]=function(_0x312601,_0x25dc5e){const _0x5b05d7=_0xabaa75;this[_0x5b05d7(0xf2)]['y']+=_0x25dc5e;let _0x23b17e=Math[_0x5b05d7(0x9b)](0x0,this[_0x5b05d7(0x153)]-this[_0x5b05d7(0xcf)]);this['origin']['y']=this[_0x5b05d7(0xf2)]['y']['clamp'](0x0,_0x23b17e);},Window_PatchNotesDisplay[_0xabaa75(0x10a)]['setScrollAccel']=function(_0x383311,_0x5ab2ab){const _0x443d98=_0xabaa75;this[_0x443d98(0xf2)]['y']+=_0x5ab2ab;let _0x5a91b7=Math['max'](0x0,this[_0x443d98(0x153)]-this[_0x443d98(0xcf)]);this[_0x443d98(0xf2)]['y']=this[_0x443d98(0xf2)]['y'][_0x443d98(0x150)](0x0,_0x5a91b7);};