//=============================================================================
// VisuStella MZ - Sideview Battle UI
// VisuMZ_3_SideviewBattleUI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_SideviewBattleUI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SideviewBattleUI = VisuMZ.SideviewBattleUI || {};
VisuMZ.SideviewBattleUI.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.06] [SideviewBattleUI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Sideview_Battle_UI_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the RPG Maker MZ Battle UI for Sideview Battle Systems
 * into something more minimalistic. The menus are placed towards the player's
 * party to let the player focus their attention to the center of the screen
 * instead of to the lower ledges of the screen. The input command windows show
 * up near the inputting actor to give the player a clear understanding of who
 * is performing what action.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Sideview Battle UI" or "sideview_ui".
 *
 * Features include all (but not limited to) the following:
 * 
 * * This plugin changes the UI for the RPG Maker MZ Sideview Battle System.
 * * Status windows appear on the side of the screen for each actor in battle.
 * * The appearance is more compact for both the status windows and input
 *   command windows.
 * * More of the battlefield can be seen with this kind of layout.
 * * Lots of customization options to adjust the status windows.
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
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
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
 * Sideview Only
 * 
 * This plugin only works for the sideview battle system. If this layout is
 * selected in the Battle Core, the battle system will automatically shift to
 * sideview regardless of the settings.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Sideview Battle UI" or "sideview_ui".
 *
 * ---
 * 
 * Window Properties
 * 
 * With how the battle layout works, many of the command windows used in the
 * battle system will have preset and hardcoded properties to them in order to
 * maintain a specific aesthetic. These include columns, padding, and scaling
 * types to name a few.
 * 
 * Therefore, any plugins that may alter these effects may not have any effect
 * at all provided that this plugin is in a higher tier than those modifying
 * it. This is an intended change to maintain the aesthetic and is not a bug.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_2_AggroControlSystem
 * VisuMZ_2_BattleSystemBTB
 * VisuMZ_3_BoostAction
 * VisuMZ_3_StateTooltips
 * VisuMZ_4_BreakShields
 *
 * There are features provided in this plugin for the above plugins. Their UI
 * elements can be shown with this plugin's status windows.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Offset Settings
 * ============================================================================
 *
 * Settings for battler sprite offsets when using the Sideview Battle UI.
 * Since there's more room on the screen, placing them lower will help adjust
 * for the player's visual comfort.
 *
 * ---
 *
 * Settings
 * 
 *   Perform Offset?:
 *   - Offsets the battler sprite positions when using Sideview Battle UI.
 * 
 *   Offset X:
 *   - How much to offset the sprite positions by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the sprite positions by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Window Settings
 * ============================================================================
 *
 * Settings for general windows when using the Sideview Battle UI. These
 * settings are made for the windows that aren't the status windows but are
 * affected by this plugin.
 *
 * ---
 *
 * Global
 * 
 *   UI Scale:
 *   - What is the scaling rate for battle windows?
 *   - Use a number between 0 and 1 for the best results.
 *
 * ---
 *
 * Help Window
 * 
 *   Fade BG Style?:
 *   - Fade the Help Window background with this UI?
 *
 * ---
 *
 * Actor Command Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the actor command window with
 *     this UI?
 *
 * ---
 *
 * Party Command Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the party command window with
 *     this UI?
 *
 * ---
 *
 * Item Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the item window with this UI?
 * 
 *   Width:
 *   - What is the width item window with this UI?
 *   - This is the width BEFORE scaling.
 * 
 *   Offset X:
 *   - How much to offset the window X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the window Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Skill Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the skill window with this UI?
 * 
 *   Width:
 *   - What is the width skill window with this UI?
 *   - This is the width BEFORE scaling.
 * 
 *   Offset X:
 *   - How much to offset the window X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the window Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Window Settings
 * ============================================================================
 *
 * Settings for the status window when using the Sideview Battle UI. Each of
 * these plugin parameters allow you to adjust many of the various elements
 * found inside of this window.
 *
 * ---
 *
 * Dimensions
 * 
 *   Width Base:
 *   - How width is each actor's status window?
 *   - This is the width AFTER scaling.
 * 
 *   Height Base:
 *   - How tall do you want the status window to be?
 *   - 'auto' for automatic calculations.
 *   - This is the height BEFORE scaling.
 * 
 *     Height Buffer:
 *     - How much space do you want there to be vertically from window
 *       to window?
 *     - This is the height BEFORE scaling.
 * 
 *   Move Distance:
 *   - How far will the status window move when the actor is selected
 *     or active?
 * 
 *     Move Speed:
 *     - How many pixels with the status window move per frame?
 *
 * ---
 * 
 * Standard UI > BG
 * 
 *   Background Dim?:
 *   - Show the dimmed background?
 * 
 * ---
 *
 * Standard UI > Name
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > States
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Ignore Scale?:
 *   - Ignore scaling to show icons at their real size?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > TPB/ATB Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > HP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > MP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > TP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Aggro Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_2_AggroControlSystem!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Boost Points
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_3_BoostAction!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Brave Points
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_2_BattleSystemBTB!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Break Shield
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_4_BreakShields!
 * 
 *   Ignore Scale?:
 *   - Ignore scaling to show icons at their real size?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > State Tooltips
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_3_StateTooltips!
 *
 * ---
 * 
 * JS
 * 
 *   JS: Custom UI:
 *   - JavaScript used to add custom elements to each status window.
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
 * Version 1.06: January 20, 2023
 * * Bug Fixes!
 * ** Skill and Item Windows should no longer disappear completely when used
 *    together with the Battle Core's "Middle Layout" for skill and item
 *    windows. Instead the intended setting will be set with the Sideview UI
 *    layout as if it's "false". Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: June 9, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused some windows to not appear correctly when cancel
 *    is pressed upon certain conditions. Fix made by Olivia.
 * 
 * Version 1.04: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Status Window Settings > Background Dim?
 * **** Show the dimmed background?
 * 
 * Version 1.03: July 30, 2021
 * * Bug Fixes!
 * ** Plugin Parameters for adjusting row quantity should now work properly.
 *    Fix made by Olivia.
 * 
 * Version 1.02: June 18, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.01: April 23, 2021
 * * Bug Fixes!
 * ** Item window during battle should now align properly. Fix made by Olivia.
 *
 * Version 1.00 Official Release Date: May 12, 2021
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
 * @param SideviewBattleUI
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Battler:struct
 * @text Battler Offset Settings
 * @type struct<Battler>
 * @desc Settings for battler sprite offsets when using the Sideview Battle UI.
 * @default {"Enable:eval":"true","OffsetX:num":"+0","OffsetY:num":"+128"}
 *
 * @param GeneralWindow:struct
 * @text General Window Settings
 * @type struct<GeneralWindow>
 * @desc Settings for general windows when using the Sideview Battle UI.
 * @default {"Global":"","UiScale:num":"0.80","HelpWindow":"","HelpFadeStyle:eval":"true","ActorCommandWindow":"","ActorCommandWindowMaxRows:num":"8","PartyCommandWindow":"","PartyCommandWindowMaxRows:num":"8","ItemWindow":"","ItemWindowMaxRows:num":"8","ItemWindowWidth:num":"400","ItemWindowOffsetX:num":"+16","ItemWindowOffsetY:num":"+16","SkillWindow":"","SkillWindowMaxRows:num":"8","SkillWindowWidth:num":"400","SkillWindowOffsetX:num":"+16","SkillWindowOffsetY:num":"+16"}
 *
 * @param StatusWindow:struct
 * @text Status Window Settings
 * @type struct<StatusWindow>
 * @desc Settings for the status window when using the Sideview Battle UI.
 * @default {"Dimensions":"","WidthBase:num":"200","HeightBase:str":"auto","HeightBuffer:num":"4","MoveDistance:num":"48","MoveSpeed:num":"4","Standard":"","Name":"","NameShow:eval":"true","NameOffsetX:num":"+48","NameOffsetY:num":"+0","States":"","StatesShow:eval":"true","StatesIgnoreScale:eval":"true","StatesOffsetX:num":"+20","StatesOffsetY:num":"+20","Tpb":"","TpbShow:eval":"true","TpbOffsetX:num":"+44","TpbOffsetY:num":"+0","Hp":"","HpShow:eval":"true","HpOffsetX:num":"+60","HpOffsetY:num":"+0","Mp":"","MpShow:eval":"true","MpOffsetX:num":"+68","MpOffsetY:num":"+0","Tp":"","TpShow:eval":"true","TpOffsetX:num":"+74","TpOffsetY:num":"+0","Compatibility":"","Aggro":"","AggroShow:eval":"true","AggroOffsetX:num":"+44","AggroOffsetY:num":"+0","Boost":"","BoostShow:eval":"true","BoostOffsetX:num":"+52","BoostOffsetY:num":"+2","Brave":"","BraveShow:eval":"true","BraveOffsetX:num":"+52","BraveOffsetY:num":"-6","BreakShield":"","BreakShieldShow:eval":"true","BreakShieldIgnoreScale:eval":"true","BreakShieldOffsetX:num":"+20","BreakShieldOffsetY:num":"+20","StateTooltips":"","StateTooltipsShow:eval":"true","JS":"","CustomUi:func":"\"// Declare Variables\\nconst actor = arguments[0];\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\n\\n// Draw Custom Elements\\n// Put in code you want here used for windows classes\""}
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
 * Battler Offset Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Enable:eval
 * @text Perform Offset?
 * @type boolean
 * @on Do Offset
 * @off Don't Offset
 * @desc Offsets the battler sprite positions when using Sideview Battle UI.
 * @default true
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the sprite positions by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the sprite positions by?
 * Negative goes up. Positive goes down.
 * @default +128
 *
 */
/* ----------------------------------------------------------------------------
 * GeneralWindow Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GeneralWindow:
 *
 * @param Global
 *
 * @param UiScale:num
 * @text UI Scale
 * @parent Global
 * @desc What is the scaling rate for battle windows?
 * Use a number between 0 and 1 for the best results.
 * @default 0.80
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpFadeStyle:eval
 * @text Fade BG Style?
 * @parent HelpWindow
 * @type boolean
 * @on Fade Background
 * @off Default Background
 * @desc Fade the Help Window background with this UI?
 * @default true
 *
 * @param ActorCommandWindow
 * @text Actor Command Window
 *
 * @param ActorCommandWindowMaxRows:num
 * @text Max Rows
 * @parent ActorCommandWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the actor command window with this UI?
 * @default 8
 *
 * @param PartyCommandWindow
 * @text Party Command Window
 *
 * @param PartyCommandWindowMaxRows:num
 * @text Max Rows
 * @parent PartyCommandWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the party command window with this UI?
 * @default 8
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemWindowMaxRows:num
 * @text Max Rows
 * @parent ItemWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the item window with this UI?
 * @default 8
 *
 * @param ItemWindowWidth:num
 * @text Width
 * @parent ItemWindow
 * @type number
 * @min 1
 * @desc What is the width item window with this UI?
 * This is the width BEFORE scaling.
 * @default 400
 *
 * @param ItemWindowOffsetX:num
 * @text Offset X
 * @parent ItemWindow
 * @desc How much to offset the window X position by?
 * Negative goes left. Positive goes right.
 * @default +16
 *
 * @param ItemWindowOffsetY:num
 * @text Offset Y
 * @parent ItemWindow
 * @desc How much to offset the window Y position by?
 * Negative goes up. Positive goes down.
 * @default +16
 *
 * @param SkillWindow
 * @text Skill Window
 *
 * @param SkillWindowMaxRows:num
 * @text Max Rows
 * @parent SkillWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the skill window with this UI?
 * @default 8
 *
 * @param SkillWindowWidth:num
 * @text Width
 * @parent SkillWindow
 * @type number
 * @min 1
 * @desc What is the width skill window with this UI?
 * This is the width BEFORE scaling.
 * @default 400
 *
 * @param SkillWindowOffsetX:num
 * @text Offset X
 * @parent SkillWindow
 * @desc How much to offset the window X position by?
 * Negative goes left. Positive goes right.
 * @default +16
 *
 * @param SkillWindowOffsetY:num
 * @text Offset Y
 * @parent SkillWindow
 * @desc How much to offset the window Y position by?
 * Negative goes up. Positive goes down.
 * @default +16
 *
 */
/* ----------------------------------------------------------------------------
 * Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param Dimensions
 *
 * @param WidthBase:num
 * @text Width Base
 * @parent Dimensions
 * @type number
 * @desc How width is each actor's status window?
 * This is the width AFTER scaling.
 * @default 200
 *
 * @param HeightBase:str
 * @text Height Base
 * @parent Dimensions
 * @type number
 * @desc How tall do you want the status window to be?
 * 'auto' for automatic calculations. Value is BEFORE scaling.
 * @default auto
 *
 * @param HeightBuffer:num
 * @text Height Buffer
 * @parent HeightBase:str
 * @type number
 * @desc How much space do you want there to be vertically from window to window?
 * @default 4
 *
 * @param MoveDistance:num
 * @text Move Distance
 * @parent Dimensions
 * @type number
 * @desc How far will the status window move when
 * the actor is selected or active?
 * @default 48
 *
 * @param MoveSpeed:num
 * @text Move Speed
 * @parent MoveDistance:num
 * @type number
 * @desc How many pixels with the status window move per frame?
 * @default 4
 *
 * @param Standard
 * @text Standard UI
 *
 * @param BgShow:eval
 * @text Background Dim?
 * @parent Standard
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the dimmed background?
 * @default true
 * 
 * @param Name
 * @parent Standard
 *
 * @param NameShow:eval
 * @text Show?
 * @parent Name
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param NameOffsetX:num
 * @text Offset X
 * @parent Name
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +48
 *
 * @param NameOffsetY:num
 * @text Offset Y
 * @parent Name
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param States
 * @parent Standard
 *
 * @param StatesShow:eval
 * @text Show?
 * @parent States
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param StatesIgnoreScale:eval
 * @text Ignore Scale?
 * @parent States
 * @type boolean
 * @on Ignore Scaling
 * @off Use Scaling
 * @desc Ignore scaling to show icons at their real size?
 * @default true
 *
 * @param StatesOffsetX:num
 * @text Offset X
 * @parent States
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +20
 *
 * @param StatesOffsetY:num
 * @text Offset Y
 * @parent States
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +20
 * 
 * @param Tpb
 * @text TPB/ATB Gauge
 * @parent Standard
 *
 * @param TpbShow:eval
 * @text Show?
 * @parent Tpb
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param TpbOffsetX:num
 * @text Offset X
 * @parent Tpb
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +44
 *
 * @param TpbOffsetY:num
 * @text Offset Y
 * @parent Tpb
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Hp
 * @text HP Gauge
 * @parent Standard
 *
 * @param HpShow:eval
 * @text Show?
 * @parent Hp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param HpOffsetX:num
 * @text Offset X
 * @parent Hp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +60
 *
 * @param HpOffsetY:num
 * @text Offset Y
 * @parent Hp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Mp
 * @text MP Gauge
 * @parent Standard
 *
 * @param MpShow:eval
 * @text Show?
 * @parent Mp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param MpOffsetX:num
 * @text Offset X
 * @parent Mp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +68
 *
 * @param MpOffsetY:num
 * @text Offset Y
 * @parent Mp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Tp
 * @text TP Gauge
 * @parent Standard
 *
 * @param TpShow:eval
 * @text Show?
 * @parent Tp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param TpOffsetX:num
 * @text Offset X
 * @parent Tp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +74
 *
 * @param TpOffsetY:num
 * @text Offset Y
 * @parent Tp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 *
 * @param Compatibility
 * @text Compatibility UI
 * 
 * @param Aggro
 * @text Aggro Gauge
 * @parent Compatibility
 * @default VisuMZ_2_AggroControlSystem
 *
 * @param AggroShow:eval
 * @text Show?
 * @parent Aggro
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_2_AggroControlSystem!
 * @default true
 *
 * @param AggroOffsetX:num
 * @text Offset X
 * @parent Aggro
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +44
 *
 * @param AggroOffsetY:num
 * @text Offset Y
 * @parent Aggro
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Boost
 * @text Boost Points
 * @parent Compatibility
 * @default VisuMZ_3_BoostAction
 *
 * @param BoostShow:eval
 * @text Show?
 * @parent Boost
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_3_BoostAction!
 * @default true
 *
 * @param BoostOffsetX:num
 * @text Offset X
 * @parent Boost
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +52
 *
 * @param BoostOffsetY:num
 * @text Offset Y
 * @parent Boost
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +2
 * 
 * @param Brave
 * @text Brave Points
 * @parent Compatibility
 * @default VisuMZ_2_BattleSystemBTB
 *
 * @param BraveShow:eval
 * @text Show?
 * @parent Brave
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_2_BattleSystemBTB!
 * @default true
 *
 * @param BraveOffsetX:num
 * @text Offset X
 * @parent Brave
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +52
 *
 * @param BraveOffsetY:num
 * @text Offset Y
 * @parent Brave
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default -6
 * 
 * @param BreakShield
 * @text Break Shield
 * @parent Compatibility
 * @default VisuMZ_4_BreakShields
 *
 * @param BreakShieldShow:eval
 * @text Show?
 * @parent BreakShield
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_4_BreakShields!
 * @default true
 *
 * @param BreakShieldIgnoreScale:eval
 * @text Ignore Scale?
 * @parent BreakShield
 * @type boolean
 * @on Ignore Scaling
 * @off Use Scaling
 * @desc Ignore scaling to show icons at their real size?
 * @default true
 *
 * @param BreakShieldOffsetX:num
 * @text Offset X
 * @parent BreakShield
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +20
 *
 * @param BreakShieldOffsetY:num
 * @text Offset Y
 * @parent BreakShield
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +20
 * 
 * @param StateTooltips
 * @text State Tooltips
 * @parent Compatibility
 * @default VisuMZ_3_StateTooltips
 *
 * @param StateTooltipsShow:eval
 * @text Show?
 * @parent StateTooltips
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_3_StateTooltips!
 * @default true
 *
 * @param JS
 *
 * @param CustomUi:func
 * @text JS: Custom UI
 * @parent JS
 * @type note
 * @desc JavaScript used to add custom elements to each status window.
 * @default "// Declare Variables\nconst actor = arguments[0];\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\n\n// Draw Custom Elements\n// Put in code you want here used for windows classes"
 *
 */
//=============================================================================

function _0x3df3(_0x4f5424,_0x3793f1){const _0x4000c4=_0x4000();return _0x3df3=function(_0x3df3ca,_0x204dab){_0x3df3ca=_0x3df3ca-0x1ba;let _0x192c5a=_0x4000c4[_0x3df3ca];return _0x192c5a;},_0x3df3(_0x4f5424,_0x3793f1);}const _0x53fe9d=_0x3df3;(function(_0x3f632a,_0x4420c0){const _0x13bd2a=_0x3df3,_0xf65a1f=_0x3f632a();while(!![]){try{const _0x1ad95b=-parseInt(_0x13bd2a(0x1ba))/0x1*(-parseInt(_0x13bd2a(0x30e))/0x2)+-parseInt(_0x13bd2a(0x2a7))/0x3*(-parseInt(_0x13bd2a(0x25d))/0x4)+-parseInt(_0x13bd2a(0x26a))/0x5+-parseInt(_0x13bd2a(0x229))/0x6+parseInt(_0x13bd2a(0x2e1))/0x7*(parseInt(_0x13bd2a(0x1f0))/0x8)+-parseInt(_0x13bd2a(0x1da))/0x9+parseInt(_0x13bd2a(0x2d7))/0xa*(parseInt(_0x13bd2a(0x2e6))/0xb);if(_0x1ad95b===_0x4420c0)break;else _0xf65a1f['push'](_0xf65a1f['shift']());}catch(_0x2bf5b9){_0xf65a1f['push'](_0xf65a1f['shift']());}}}(_0x4000,0x5e60c));function _0x4000(){const _0x5e8dd1=['BattleLayout','GeneralWindow','isAdjustBravePoints','_battleField','VisuMZ_2_AggroControlSystem','SkillWindowMaxRows','472947zgQvpU','VisuMZ_4_BreakShields','Game_System_isSideView','allowBoostAction','drawAllItems','isStateTooltipEnabled','actor%1-stateIcon','refreshDimmerBitmap','initMembersSideviewUi','setBackgroundType','StatusWindow','skill','BOOST_OFFSET_X','createContents','eawiO','isTpb','_actorCommandWindow','ActorCommandWindowMaxRows','sideviewUiTargetActor','Window_SkillList_maxCols','item','push','PIcQt','iCjOr','maxCols','fillRect','ylROF','SIDEVIEW_BATTLE_UI_SCALE','NUM','SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_X','VisuMZ_1_BattleCore','_battler','dimColor1','pzSKn','VisuMZ_3_BoostAction','Window_Help_initialize','SNyLK','AggroOffsetY','BREAK_SHIELD_SHOWN','HP_GAUGE_OFFSET_Y','_partyIndex','GStim','addWindow','hiodP','rnhDL','_list','_scene','mGahs','90PKuOwM','Scene_Battle_onEnemyCancel','ARRAYFUNC','round','Window_BattleStatus_updateRefresh','HEIGHT_BUFFER','oEeVm','PartyCommandWindowMaxRows','BraveOffsetY','aggroGauge','64673MkKuBU','setFrame','dimColor2','aliveMembers','Window_ActorCommand_makeCommandList','317141dyOAwk','STATES_OFFSET_Y','MoveDistance','visible','Window_ItemList_initialize','STATE_TOOLTIPS_SHOWN','autoRowCount','placeGauge','ARRAYEVAL','TPB_OFFSET_X','placeAggroGauge','_actorWindow','HpOffsetX','STATES_SHOWN','Scene_Battle_createStatusWindow','MpOffsetX','Aggro','lineHeight','_requestRefresh','show','toUpperCase','_skillWindow','placeActorName','VisuMZ_2_BattleSystemBTB','isCTB','LPyYA','BreakShieldOffsetX','min','MoveSpeed','makeItemList','format','hide','WidthBase','updateRefresh','_currentActor','name','clearBattleRefreshRequest','qIOdz','JqBMW','_activeX','1478DOsByt','updateSideviewBattleUIPositions','NameOffsetX','_actor','Scene_Battle_onActorCancel','BOOST_SHOWN','StatesShow','createWindowRect','TPB_SHOWN','WIDTH_BASE','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','HeightBuffer','call','_spriteset','SIDEVIEW_BATTLE_UI_FADE_STYLE','adjustSideviewUiHeight','579EwAXem','VisuMZ_2_BattleGridSystem','includes','NSRCh','bitmap','StateTooltipsShow','_targetX','AggroOffsetX','BoostOffsetY','OffsetX','Window_ItemList_makeItemList','maxSideviewUiRows','OffsetY','dataSideviewUiLength','BG_SHOW','isSceneBattle','actor%1-breakShieldIcon','updateRefreshSideviewUi','updateSideviewUiPosition','addChildToBack','Window_ActorCommand_initialize','FUNC','KRMtJ','Window_PartyCommand_initialize','makeCommandList','actorWindowRect','isUsingGridSystem','isShowAggro','MP_GAUGE_OFFSET_Y','fittingHeight','AGGRO_OFFSET_X','BjExf','1739826yulmLT','gJOQC','PGbhZ','ItemWindowMaxRows','actorId','statusWindowRect','BattleCore','STATES_OFFSET_X','contains','SkillItemMiddleLayout','TpbOffsetX','HEIGHT_BASE','BREAK_SHIELD_REVERSE_SCALE','updateBattler','GvQPE','createSideviewUiDimmerSprite','FnldY','HpOffsetY','CustomUi','FRGaa','BRAVE_OFFSET_X','ItemWindowWidth','40WkpMiI','isAdjustBoostPoints','updatePosition','SIDEVIEW_BATTLE_UI_WINDOW_WIDTH','onEnemyCancel','WIDTH_MOVE','STATES_REVERSE_SCALE','AGGRO_OFFSET_Y','drawCustomJS','max','isSelected','Window_SkillList_makeItemList','isActivePosition','isShowTpbGauge','refreshSideviewUiBattleStatusWindows','SideviewBattleUI','Scene_Battle_createCancelButton','updateSideviewUiFadeIn','auto','iconHeight','BreakShieldShow','placeStateIcon','drawActorBravePoints','Window_PartyCommand_makeCommandList','ICON_SIZE_RATE','raiIC','TpbOffsetY','boxHeight','sideview_ui','drawBasicStatus','TpShow','HnvJj','MP_GAUGE_SHOWN','_itemWindow','MP_GAUGE_OFFSET_X','isBattleRefreshRequested','Scene_Battle_statusWindowRect','isSkillItemWindowsMiddle','STR','wKSgQ','NAME_SHOWN','active','HelpFadeStyle','createStatusWindow','_dimmerSprite','_enemyWindow','activate','Window_SkillList_initialize','Sprite_Battler_setHome','vCPir','returnSideviewCommandWindows','XkouE','trim','_sideviewUiBattleStatusWindows','gradientFillRect','SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS','gaugeLineHeight','3276270DpdOGH','sideviewUiPositionOffsetY','BraveShow','description','TP_GAUGE_SHOWN','NAME_OFFSET_Y','ItemWindowOffsetX','placeBreakShieldIcon','width','AggroControlSystem','TXGbj','battler','BoostOffsetX','setHome','filter','clamp','_data','opacity','maxBattleMembers','actor','boxWidth','floor','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','resize','Window_SkillList_colSpacing','battleLayoutStyle','prototype','TPB_OFFSET_Y','TP_GAUGE_OFFSET_X','adjustSideviewUiWidth','fTHGG','HP_GAUGE_SHOWN','height','ARRAYJSON','Settings','isStateTooltipTouched','getStateTooltipBattler','UiScale','ARRAYSTRUCT','shouldAdjustForSideviewUiLayout','version','isSideView','BRAVE_SHOWN','onActorCancel','RUqeK','BreakShieldIgnoreScale','left','Battler','_homeX','BOOST_OFFSET_Y','_additionalSprites','updateSideviewUiFadeOut','16yPRRun','status','NLbKy','sideviewUiPositionOffsetX','StatesOffsetY','uRVsm','DqcAJ','Window_ItemList_maxCols','BREAK_SHIELD_OFFSET_Y','IQAEL','Scene_Battle_actorWindowRect','SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y','SkillWindowWidth','1191100oUlWjB','BREAK_SHIELD_OFFSET_X','STRUCT','TP_GAUGE_OFFSET_Y','MpShow','parameters','exit','placeBoostPoints','Scene_Base_isWindowMaskingEnabled','ARRAYSTR','jgCEc','dbJqP','sideviewUiWidth','createCancelButton','hideAdditionalSprites','BRAVE_OFFSET_Y','MpOffsetY','nNKOa','_partyCommandWindow','AggroShow','VPznu','ConvertParams','isUsingSideviewUiLayout','VisuMZ_2_BattleSystemCTB','ceil','VisuMZ_0_CoreEngine','ZGisL','padding','HP_GAUGE_OFFSET_X','initialize','parse','createSideviewUiBattleStatusWindows','NameOffsetY','AGGRO_SHOWN','StatesOffsetX','SIDEVIEW_BATTLE_UI_MOVE_BATTLERS','BgShow','create','ItemWindowOffsetY','SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X','match','refresh','colSpacing','MOVE_SPEED','SkillWindowOffsetX','Window_ItemList_colSpacing','isInputting','Scene_Battle_updateStatusWindowPosition','length','StatusGauge','map','TpOffsetX','_subject','scale','mOPHO'];_0x4000=function(){return _0x5e8dd1;};return _0x4000();}var label=_0x53fe9d(0x1ff),tier=tier||0x0,dependencies=[_0x53fe9d(0x283),_0x53fe9d(0x2c5)],pluginData=$plugins[_0x53fe9d(0x237)](function(_0x2af47f){const _0x17b418=_0x53fe9d;return _0x2af47f[_0x17b418(0x25e)]&&_0x2af47f['description'][_0x17b418(0x1bc)]('['+label+']');})[0x0];VisuMZ[label][_0x53fe9d(0x24b)]=VisuMZ[label][_0x53fe9d(0x24b)]||{},VisuMZ['ConvertParams']=function(_0x402151,_0x20e5dc){const _0x301100=_0x53fe9d;for(const _0x381f47 in _0x20e5dc){if(_0x381f47[_0x301100(0x292)](/(.*):(.*)/i)){if(_0x301100(0x2d2)===_0x301100(0x2d2)){const _0xaaa358=String(RegExp['$1']),_0x5dcd0b=String(RegExp['$2'])[_0x301100(0x2fa)]()[_0x301100(0x224)]();let _0x2ea76e,_0x4202be,_0x20b58b;switch(_0x5dcd0b){case _0x301100(0x2c3):_0x2ea76e=_0x20e5dc[_0x381f47]!==''?Number(_0x20e5dc[_0x381f47]):0x0;break;case'ARRAYNUM':_0x4202be=_0x20e5dc[_0x381f47]!==''?JSON['parse'](_0x20e5dc[_0x381f47]):[],_0x2ea76e=_0x4202be['map'](_0x5074bf=>Number(_0x5074bf));break;case'EVAL':_0x2ea76e=_0x20e5dc[_0x381f47]!==''?eval(_0x20e5dc[_0x381f47]):null;break;case _0x301100(0x2ee):_0x4202be=_0x20e5dc[_0x381f47]!==''?JSON[_0x301100(0x288)](_0x20e5dc[_0x381f47]):[],_0x2ea76e=_0x4202be[_0x301100(0x29c)](_0x586160=>eval(_0x586160));break;case'JSON':_0x2ea76e=_0x20e5dc[_0x381f47]!==''?JSON[_0x301100(0x288)](_0x20e5dc[_0x381f47]):'';break;case _0x301100(0x24a):_0x4202be=_0x20e5dc[_0x381f47]!==''?JSON[_0x301100(0x288)](_0x20e5dc[_0x381f47]):[],_0x2ea76e=_0x4202be['map'](_0x34aa94=>JSON[_0x301100(0x288)](_0x34aa94));break;case _0x301100(0x1cf):_0x2ea76e=_0x20e5dc[_0x381f47]!==''?new Function(JSON['parse'](_0x20e5dc[_0x381f47])):new Function('return\x200');break;case _0x301100(0x2d9):_0x4202be=_0x20e5dc[_0x381f47]!==''?JSON[_0x301100(0x288)](_0x20e5dc[_0x381f47]):[],_0x2ea76e=_0x4202be[_0x301100(0x29c)](_0x38ec4a=>new Function(JSON[_0x301100(0x288)](_0x38ec4a)));break;case _0x301100(0x216):_0x2ea76e=_0x20e5dc[_0x381f47]!==''?String(_0x20e5dc[_0x381f47]):'';break;case _0x301100(0x273):_0x4202be=_0x20e5dc[_0x381f47]!==''?JSON[_0x301100(0x288)](_0x20e5dc[_0x381f47]):[],_0x2ea76e=_0x4202be[_0x301100(0x29c)](_0x290d48=>String(_0x290d48));break;case _0x301100(0x26c):_0x20b58b=_0x20e5dc[_0x381f47]!==''?JSON[_0x301100(0x288)](_0x20e5dc[_0x381f47]):{},_0x2ea76e=VisuMZ[_0x301100(0x27f)]({},_0x20b58b);break;case _0x301100(0x24f):_0x4202be=_0x20e5dc[_0x381f47]!==''?JSON[_0x301100(0x288)](_0x20e5dc[_0x381f47]):[],_0x2ea76e=_0x4202be[_0x301100(0x29c)](_0x495746=>VisuMZ[_0x301100(0x27f)]({},JSON[_0x301100(0x288)](_0x495746)));break;default:continue;}_0x402151[_0xaaa358]=_0x2ea76e;}else this[_0x301100(0x2f8)]=![],_0x14d1cb[_0x301100(0x30a)](),_0x2e5ca4['_scene'][_0x301100(0x1fe)]();}}return _0x402151;},(_0x502a29=>{const _0x42d903=_0x53fe9d,_0x19a70d=_0x502a29[_0x42d903(0x309)];for(const _0x95860d of dependencies){if('IQAEL'!==_0x42d903(0x266))return _0x5e3b49['battleMembers']()[this[_0x42d903(0x2cf)]];else{if(!Imported[_0x95860d]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x42d903(0x304)](_0x19a70d,_0x95860d)),SceneManager['exit']();break;}}}const _0x226af1=_0x502a29[_0x42d903(0x22c)];if(_0x226af1[_0x42d903(0x292)](/\[Version[ ](.*?)\]/i)){const _0x1d477f=Number(RegExp['$1']);_0x1d477f!==VisuMZ[label][_0x42d903(0x251)]&&(alert(_0x42d903(0x318)[_0x42d903(0x304)](_0x19a70d,_0x1d477f)),SceneManager['exit']());}if(_0x226af1['match'](/\[Tier[ ](\d+)\]/i)){const _0x2d8383=Number(RegExp['$1']);if(_0x2d8383<tier){if(_0x42d903(0x2be)!=='iCjOr'){if(_0x5c5030[_0x42d903(0x213)]())this[_0x42d903(0x2f8)]=![],_0x27a9cb[_0x42d903(0x30a)](),_0x559468[_0x42d903(0x2d5)][_0x42d903(0x1fe)]();else this[_0x42d903(0x2f8)]&&(this[_0x42d903(0x2f8)]=![],_0x4588d3[_0x42d903(0x2d5)][_0x42d903(0x1fe)]());}else alert(_0x42d903(0x23f)[_0x42d903(0x304)](_0x19a70d,_0x2d8383,tier)),SceneManager['exit']();}else{if(_0x42d903(0x217)===_0x42d903(0x2d0))return this['_battler'];else tier=Math['max'](_0x2d8383,tier);}}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x502a29[_0x42d903(0x26f)]);})(pluginData),BattleManager['isUsingSideviewUiLayout']=function(){const _0x302f73=_0x53fe9d;return SceneManager[_0x302f73(0x1c9)]()&&SceneManager[_0x302f73(0x2d5)][_0x302f73(0x242)]()===_0x302f73(0x20c);},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x2a9)]=Game_System[_0x53fe9d(0x243)][_0x53fe9d(0x252)],Game_System[_0x53fe9d(0x243)]['isSideView']=function(){const _0x16abc8=_0x53fe9d;if(BattleManager[_0x16abc8(0x280)]())return!![];return VisuMZ[_0x16abc8(0x1ff)][_0x16abc8(0x2a9)][_0x16abc8(0x31a)](this);},VisuMZ['SideviewBattleUI'][_0x53fe9d(0x272)]=Scene_Base[_0x53fe9d(0x243)]['isWindowMaskingEnabled'],Scene_Base['prototype']['isWindowMaskingEnabled']=function(){const _0x2a9a14=_0x53fe9d;if(BattleManager[_0x2a9a14(0x280)]()){if(_0x2a9a14(0x284)===_0x2a9a14(0x1e8))this['_actorCommandWindow'][_0x2a9a14(0x25c)](),this['_skillWindow'][_0x2a9a14(0x25c)](),this[_0x2a9a14(0x211)][_0x2a9a14(0x25c)]();else return![];}else return VisuMZ[_0x2a9a14(0x1ff)]['Scene_Base_isWindowMaskingEnabled'][_0x2a9a14(0x31a)](this);},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x214)]=Scene_Battle[_0x53fe9d(0x243)]['statusWindowRect'],Scene_Battle[_0x53fe9d(0x243)][_0x53fe9d(0x1df)]=function(){const _0x14871f=_0x53fe9d,_0x76fcfc=VisuMZ[_0x14871f(0x1ff)][_0x14871f(0x214)]['call'](this);return BattleManager[_0x14871f(0x280)]()&&(_0x76fcfc['y']=Graphics['height']*0xa,_0x76fcfc[_0x14871f(0x249)]=0x0),_0x76fcfc;},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x267)]=Scene_Battle[_0x53fe9d(0x243)]['actorWindowRect'],Scene_Battle['prototype'][_0x53fe9d(0x1d3)]=function(){const _0x287f33=_0x53fe9d,_0x308b69=VisuMZ[_0x287f33(0x1ff)]['Scene_Battle_actorWindowRect'][_0x287f33(0x31a)](this);return BattleManager[_0x287f33(0x280)]()&&(_0x308b69['y']=Graphics[_0x287f33(0x249)]*0xa,_0x308b69[_0x287f33(0x249)]=0x0),_0x308b69;},VisuMZ[_0x53fe9d(0x1ff)]['Scene_Battle_updateStatusWindowPosition']=Scene_Battle['prototype']['updateStatusWindowPosition'],Scene_Battle[_0x53fe9d(0x243)]['updateStatusWindowPosition']=function(){const _0x1bb45a=_0x53fe9d;VisuMZ[_0x1bb45a(0x1ff)][_0x1bb45a(0x299)][_0x1bb45a(0x31a)](this),this[_0x1bb45a(0x30f)]();},Scene_Battle[_0x53fe9d(0x243)][_0x53fe9d(0x30f)]=function(){const _0xae664a=_0x53fe9d;if(!BattleManager[_0xae664a(0x298)]())return;if(!BattleManager['isUsingSideviewUiLayout']())return;this[_0xae664a(0x27c)][_0xae664a(0x219)]&&this[_0xae664a(0x27c)][_0xae664a(0x1cc)]();this[_0xae664a(0x2b7)][_0xae664a(0x219)]&&this[_0xae664a(0x2b7)][_0xae664a(0x1cc)]();this[_0xae664a(0x2fb)][_0xae664a(0x219)]&&(this[_0xae664a(0x2b7)][_0xae664a(0x1cc)](),this['_skillWindow'][_0xae664a(0x1cc)]());if(this[_0xae664a(0x211)][_0xae664a(0x219)]){if(_0xae664a(0x233)===_0xae664a(0x20f))return _0x520065[_0xae664a(0x227)];else this[_0xae664a(0x2b7)][_0xae664a(0x1cc)](),this[_0xae664a(0x211)][_0xae664a(0x1cc)]();}this[_0xae664a(0x2f1)]['active']&&(this['_actorCommandWindow']['updateSideviewUiFadeOut'](),this[_0xae664a(0x2fb)][_0xae664a(0x25c)](),this[_0xae664a(0x211)][_0xae664a(0x25c)]()),this['_enemyWindow'][_0xae664a(0x219)]&&(this[_0xae664a(0x2b7)]['updateSideviewUiFadeOut'](),this[_0xae664a(0x2fb)][_0xae664a(0x25c)](),this[_0xae664a(0x211)][_0xae664a(0x25c)]());},Scene_Battle['prototype'][_0x53fe9d(0x215)]=function(){const _0x4def35=_0x53fe9d;if(BattleManager[_0x4def35(0x280)]())return![];return VisuMZ[_0x4def35(0x1e0)][_0x4def35(0x24b)][_0x4def35(0x2a1)][_0x4def35(0x1e3)];},VisuMZ['SideviewBattleUI']['Scene_Battle_createStatusWindow']=Scene_Battle[_0x53fe9d(0x243)]['createStatusWindow'],Scene_Battle[_0x53fe9d(0x243)][_0x53fe9d(0x21b)]=function(){const _0x53c980=_0x53fe9d;VisuMZ[_0x53c980(0x1ff)][_0x53c980(0x2f4)]['call'](this),this[_0x53c980(0x289)]();},Scene_Battle[_0x53fe9d(0x243)]['createSideviewUiBattleStatusWindows']=function(){const _0x2cb9ce=_0x53fe9d;if(!BattleManager[_0x2cb9ce(0x280)]())return;this['_sideviewUiBattleStatusWindows']=[];const _0x3169b6=$gameParty[_0x2cb9ce(0x23b)]();for(let _0x1d9821=0x0;_0x1d9821<_0x3169b6;_0x1d9821++){if(_0x2cb9ce(0x2bd)===_0x2cb9ce(0x262))return 0x0;else{const _0x295ec3=new Window_SideviewUiBattleStatus(_0x1d9821);this[_0x2cb9ce(0x2d1)](_0x295ec3),this['_sideviewUiBattleStatusWindows'][_0x2cb9ce(0x2bc)](_0x295ec3);}}},Scene_Battle[_0x53fe9d(0x243)][_0x53fe9d(0x1fe)]=function(){const _0x3917=_0x53fe9d;if(!this['_sideviewUiBattleStatusWindows'])return;for(const _0x30c869 of this[_0x3917(0x225)]){if(!_0x30c869)continue;_0x30c869['refresh']();}},VisuMZ['SideviewBattleUI'][_0x53fe9d(0x200)]=Scene_Battle[_0x53fe9d(0x243)][_0x53fe9d(0x277)],Scene_Battle['prototype'][_0x53fe9d(0x277)]=function(){const _0x3be37a=_0x53fe9d;if(BattleManager[_0x3be37a(0x280)]())return;VisuMZ['SideviewBattleUI'][_0x3be37a(0x200)][_0x3be37a(0x31a)](this);},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x312)]=Scene_Battle[_0x53fe9d(0x243)][_0x53fe9d(0x254)],Scene_Battle[_0x53fe9d(0x243)]['onActorCancel']=function(){const _0xd03ff0=_0x53fe9d;if(BattleManager['isUsingSideviewUiLayout']()){if(_0xd03ff0(0x1dc)!=='PGbhZ')return _0x43827f[_0xd03ff0(0x1ff)][_0xd03ff0(0x272)][_0xd03ff0(0x31a)](this);else this[_0xd03ff0(0x2f1)][_0xd03ff0(0x305)](),this[_0xd03ff0(0x222)]();}else VisuMZ['SideviewBattleUI'][_0xd03ff0(0x312)]['call'](this);},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x2d8)]=Scene_Battle[_0x53fe9d(0x243)][_0x53fe9d(0x1f4)],Scene_Battle[_0x53fe9d(0x243)][_0x53fe9d(0x1f4)]=function(){const _0x3ed457=_0x53fe9d;BattleManager[_0x3ed457(0x280)]()?(this[_0x3ed457(0x21d)][_0x3ed457(0x305)](),this[_0x3ed457(0x222)]()):VisuMZ[_0x3ed457(0x1ff)][_0x3ed457(0x2d8)]['call'](this);},Scene_Battle[_0x53fe9d(0x243)][_0x53fe9d(0x222)]=function(){const _0x1d9b34=_0x53fe9d;this[_0x1d9b34(0x2b7)]['show']();switch(this[_0x1d9b34(0x2b7)]['currentSymbol']()){case _0x1d9b34(0x2b2):this['_skillWindow'][_0x1d9b34(0x2f9)](),this['_skillWindow'][_0x1d9b34(0x21e)]();break;case _0x1d9b34(0x2bb):this[_0x1d9b34(0x211)]['show'](),this[_0x1d9b34(0x211)][_0x1d9b34(0x21e)]();break;}},Sprite_Battler[_0x53fe9d(0x28d)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x258)]['Enable']??!![],Sprite_Battler[_0x53fe9d(0x2c4)]=VisuMZ[_0x53fe9d(0x1ff)]['Settings']['Battler'][_0x53fe9d(0x1c3)]??0x0,Sprite_Battler['SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_Y']=VisuMZ[_0x53fe9d(0x1ff)]['Settings'][_0x53fe9d(0x258)][_0x53fe9d(0x1c6)]??0x80,VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x220)]=Sprite_Battler['prototype'][_0x53fe9d(0x236)],Sprite_Battler['prototype']['setHome']=function(_0x48923e,_0x7780d7){const _0x2f826d=_0x53fe9d;this['shouldAdjustForSideviewUiLayout']()&&(_0x48923e+=Sprite_Battler[_0x2f826d(0x2c4)],_0x7780d7+=Sprite_Battler['SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_Y']),VisuMZ[_0x2f826d(0x1ff)]['Sprite_Battler_setHome'][_0x2f826d(0x31a)](this,_0x48923e,_0x7780d7);},Sprite_Battler[_0x53fe9d(0x243)][_0x53fe9d(0x250)]=function(){const _0x21cf54=_0x53fe9d;if(!BattleManager[_0x21cf54(0x280)]())return![];if(Imported[_0x21cf54(0x1bb)]&&BattleManager[_0x21cf54(0x1d4)]()){if(_0x21cf54(0x1bd)===_0x21cf54(0x1bd))return![];else this[_0x21cf54(0x2b0)](0x2);}return Sprite_Battler[_0x21cf54(0x28d)];},Window_Base['SIDEVIEW_BATTLE_UI_SCALE']=VisuMZ[_0x53fe9d(0x1ff)]['Settings'][_0x53fe9d(0x2a2)][_0x53fe9d(0x24e)]??0.8,Window_Base['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X']=0x0,Window_Base[_0x53fe9d(0x268)]=0x0,Window_Base[_0x53fe9d(0x243)]['initMembersSideviewUi']=function(){const _0x2925ea=_0x53fe9d;if(!this[_0x2925ea(0x280)]())return;const _0x5e1ac5=Window_Base['SIDEVIEW_BATTLE_UI_SCALE'];this['scale']['x']=this['scale']['y']=_0x5e1ac5;},Window_Base[_0x53fe9d(0x243)]['isUsingSideviewUiLayout']=function(){const _0x504629=_0x53fe9d;return BattleManager[_0x504629(0x280)]();},Window_Base[_0x53fe9d(0x243)]['clampSideviewUiPlacementPosition']=function(){const _0x2b7993=_0x53fe9d;if(!this[_0x2b7993(0x280)]())return;const _0x5631fa=this[_0x2b7993(0x29f)]['x'],_0x44be40=-(Math[_0x2b7993(0x23e)](Graphics['width']-Graphics[_0x2b7993(0x23d)])/0x2),_0x3ae0f8=_0x44be40+Graphics['width']-Math[_0x2b7993(0x282)](this[_0x2b7993(0x231)]*_0x5631fa),_0x51728c=-(Math[_0x2b7993(0x23e)](Graphics[_0x2b7993(0x249)]-Graphics['boxHeight'])/0x2),_0x1c6185=_0x51728c+Graphics['height']-Math[_0x2b7993(0x282)](this[_0x2b7993(0x249)]*_0x5631fa);this['x']=this['x'][_0x2b7993(0x238)](_0x44be40,_0x3ae0f8),this['y']=this['y'][_0x2b7993(0x238)](_0x51728c,_0x1c6185);},Window_Base[_0x53fe9d(0x243)][_0x53fe9d(0x2b9)]=function(){const _0x4b720f=_0x53fe9d;return BattleManager[_0x4b720f(0x308)]||$gameParty['aliveMembers']()[0x0];},Window_Base[_0x53fe9d(0x243)][_0x53fe9d(0x1cc)]=function(){const _0x5d6a45=_0x53fe9d;if(!this[_0x5d6a45(0x280)]())return;const _0x243672=this['sideviewUiTargetActor']();if(!_0x243672)return;const _0x6f903b=_0x243672[_0x5d6a45(0x234)]();this['x']=_0x6f903b['x']+Math['round'](_0x6f903b[_0x5d6a45(0x231)]/0x2),this['x']-=Math[_0x5d6a45(0x2da)]((Graphics[_0x5d6a45(0x231)]-Graphics[_0x5d6a45(0x23d)])/0x2),this['x']+=SceneManager['_scene'][_0x5d6a45(0x31b)][_0x5d6a45(0x2a4)]['x'],this['x']+=this[_0x5d6a45(0x260)](),this['y']=_0x6f903b['y']-_0x6f903b[_0x5d6a45(0x249)],this['y']-=Math[_0x5d6a45(0x2da)]((Graphics['height']-Graphics[_0x5d6a45(0x20b)])/0x2),this['y']+=SceneManager['_scene'][_0x5d6a45(0x31b)][_0x5d6a45(0x2a4)]['y'],this['y']+=this[_0x5d6a45(0x22a)](),this['clampSideviewUiPlacementPosition'](),this[_0x5d6a45(0x201)]();},Window_Base[_0x53fe9d(0x243)]['sideviewUiPositionOffsetX']=function(){const _0x42f35b=_0x53fe9d;return Window_Base[_0x42f35b(0x291)];},Window_Base[_0x53fe9d(0x243)][_0x53fe9d(0x22a)]=function(){const _0xd99aa4=_0x53fe9d;return Window_Base[_0xd99aa4(0x268)];},Window_Base['prototype'][_0x53fe9d(0x246)]=function(){const _0x4a85f2=_0x53fe9d;if(!this['isUsingSideviewUiLayout']())return;const _0x4f6f63=this[_0x4a85f2(0x231)];this['width']=this['sideviewUiWidth'](),_0x4f6f63!==this[_0x4a85f2(0x231)]&&('cSuqL'!==_0x4a85f2(0x263)?this['createContents']():(this['_enemyWindow'][_0x4a85f2(0x305)](),this[_0x4a85f2(0x222)]()));},Window_Base[_0x53fe9d(0x243)]['sideviewUiWidth']=function(){const _0x5c0e36=_0x53fe9d;return VisuMZ['BattleCore'][_0x5c0e36(0x24b)][_0x5c0e36(0x2a1)]['CommandWidth']||0xc0;},Window_Base[_0x53fe9d(0x243)][_0x53fe9d(0x31d)]=function(){const _0x60a52c=_0x53fe9d;if(!this[_0x60a52c(0x280)]())return;const _0x18c2b5=this[_0x60a52c(0x249)],_0xb767ef=this[_0x60a52c(0x1c7)](),_0x46436c=this[_0x60a52c(0x1d7)](_0xb767ef),_0xa91320=this[_0x60a52c(0x1d7)](this[_0x60a52c(0x1c5)]());this['height']=Math[_0x60a52c(0x301)](_0x46436c,_0xa91320);if(_0x18c2b5!==this[_0x60a52c(0x249)]){if('RxEtw'==='ctFNf'){if(_0x21ba1c['isUsingSideviewUiLayout']())return!![];return _0x5988fe[_0x60a52c(0x1ff)][_0x60a52c(0x2a9)]['call'](this);}else this[_0x60a52c(0x2b4)]();}},Window_Base[_0x53fe9d(0x243)][_0x53fe9d(0x1c7)]=function(){const _0x3b1909=_0x53fe9d;if(this[_0x3b1909(0x239)])return this[_0x3b1909(0x239)]['length'];if(this[_0x3b1909(0x2d4)])return this[_0x3b1909(0x2d4)][_0x3b1909(0x29a)];return 0x4;},Window_Base[_0x53fe9d(0x243)][_0x53fe9d(0x1c5)]=function(){return 0x8;},Window_Base['prototype'][_0x53fe9d(0x201)]=function(){const _0x6aa50a=_0x53fe9d;if(this[_0x6aa50a(0x21e)]&&!this[_0x6aa50a(0x219)])return;this[_0x6aa50a(0x2e9)]=!![];},Window_Base[_0x53fe9d(0x243)][_0x53fe9d(0x25c)]=function(){const _0x1352b6=_0x53fe9d;this[_0x1352b6(0x2e9)]=![];},Window_Help[_0x53fe9d(0x31c)]=VisuMZ[_0x53fe9d(0x1ff)]['Settings']['GeneralWindow'][_0x53fe9d(0x21a)]??!![],VisuMZ[_0x53fe9d(0x1ff)]['Window_Help_initialize']=Window_Help[_0x53fe9d(0x243)][_0x53fe9d(0x287)],Window_Help[_0x53fe9d(0x243)][_0x53fe9d(0x287)]=function(_0x35df0c){const _0x500364=_0x53fe9d;VisuMZ[_0x500364(0x1ff)][_0x500364(0x2ca)][_0x500364(0x31a)](this,_0x35df0c),this['createSideviewUiDimmerSprite']();},Window_Help[_0x53fe9d(0x243)][_0x53fe9d(0x1e9)]=function(){const _0x1b1382=_0x53fe9d;if(!this[_0x1b1382(0x280)]())return;if(!Window_Help['SIDEVIEW_BATTLE_UI_FADE_STYLE'])return;this['opacity']=0x0;if(!this[_0x1b1382(0x21c)]){if(_0x1b1382(0x2dd)==='RsoiP'){if(!this[_0x1b1382(0x280)]())return;const _0x48a25d=this['sideviewUiTargetActor']();if(!_0x48a25d)return;const _0x58226f=_0x48a25d[_0x1b1382(0x234)]();this['x']=_0x58226f['x']+_0x491840[_0x1b1382(0x2da)](_0x58226f[_0x1b1382(0x231)]/0x2),this['x']-=_0x32a082['round']((_0x14ac4c[_0x1b1382(0x231)]-_0x4cdb8a[_0x1b1382(0x23d)])/0x2),this['x']+=_0x37108a[_0x1b1382(0x2d5)][_0x1b1382(0x31b)][_0x1b1382(0x2a4)]['x'],this['x']+=this[_0x1b1382(0x260)](),this['y']=_0x58226f['y']-_0x58226f[_0x1b1382(0x249)],this['y']-=_0xa4c2f[_0x1b1382(0x2da)]((_0x3effe4['height']-_0x3224d1[_0x1b1382(0x20b)])/0x2),this['y']+=_0x21d7cc[_0x1b1382(0x2d5)][_0x1b1382(0x31b)][_0x1b1382(0x2a4)]['y'],this['y']+=this[_0x1b1382(0x22a)](),this['clampSideviewUiPlacementPosition'](),this[_0x1b1382(0x201)]();}else this['_dimmerSprite']=new Sprite(),this[_0x1b1382(0x1cd)](this[_0x1b1382(0x21c)]);}const _0x2694ba=this[_0x1b1382(0x231)]-Window_SideviewUiBattleStatus[_0x1b1382(0x317)],_0x2ec3a3=this['lineHeight']()*0x2;this['_dimmerSprite'][_0x1b1382(0x1be)]=new Bitmap(_0x2694ba,_0x2ec3a3),this[_0x1b1382(0x21c)]['x']=-0x4,this[_0x1b1382(0x21c)]['y']=this[_0x1b1382(0x285)];const _0x5a72ef=this[_0x1b1382(0x21c)][_0x1b1382(0x1be)],_0x5cfeae=ColorManager[_0x1b1382(0x2c7)](),_0x206561=ColorManager['dimColor2']();_0x5a72ef[_0x1b1382(0x2c0)](0x0,0x0,Math[_0x1b1382(0x2da)](_0x2694ba/0x2),_0x2ec3a3,_0x5cfeae),_0x5a72ef[_0x1b1382(0x226)](Math['round'](_0x2694ba/0x2),0x0,Math['round'](_0x2694ba/0x2),_0x2ec3a3,_0x5cfeae,_0x206561);},Window_ItemList['SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS']=VisuMZ[_0x53fe9d(0x1ff)]['Settings'][_0x53fe9d(0x2a2)][_0x53fe9d(0x1dd)]??0x8,Window_ItemList['SIDEVIEW_BATTLE_UI_WINDOW_WIDTH']=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2a2)][_0x53fe9d(0x1ef)]??0x190,Window_ItemList[_0x53fe9d(0x291)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2a2)][_0x53fe9d(0x22f)]??0x10,Window_ItemList['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y']=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2a2)][_0x53fe9d(0x290)]??0x10,VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x2ea)]=Window_ItemList['prototype']['initialize'],Window_ItemList[_0x53fe9d(0x243)][_0x53fe9d(0x287)]=function(_0x251469){const _0x427991=_0x53fe9d;VisuMZ[_0x427991(0x1ff)][_0x427991(0x2ea)][_0x427991(0x31a)](this,_0x251469),this[_0x427991(0x2af)]();},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x264)]=Window_ItemList['prototype'][_0x53fe9d(0x2bf)],Window_ItemList[_0x53fe9d(0x243)][_0x53fe9d(0x2bf)]=function(){const _0x3d8b17=_0x53fe9d;return this['isUsingSideviewUiLayout']()?0x1:VisuMZ[_0x3d8b17(0x1ff)][_0x3d8b17(0x264)][_0x3d8b17(0x31a)](this);},VisuMZ['SideviewBattleUI'][_0x53fe9d(0x297)]=Window_ItemList[_0x53fe9d(0x243)][_0x53fe9d(0x294)],Window_ItemList[_0x53fe9d(0x243)]['colSpacing']=function(){const _0x3ca087=_0x53fe9d;return this[_0x3ca087(0x280)]()?0x0:VisuMZ[_0x3ca087(0x1ff)][_0x3ca087(0x297)]['call'](this);},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x1c4)]=Window_ItemList['prototype'][_0x53fe9d(0x303)],Window_ItemList['prototype'][_0x53fe9d(0x303)]=function(){const _0x2bb7d2=_0x53fe9d;VisuMZ[_0x2bb7d2(0x1ff)][_0x2bb7d2(0x1c4)][_0x2bb7d2(0x31a)](this),this[_0x2bb7d2(0x246)](),this[_0x2bb7d2(0x31d)](),this['updateSideviewUiPosition']();},Window_ItemList[_0x53fe9d(0x243)][_0x53fe9d(0x2b9)]=function(){const _0x490f1d=_0x53fe9d;return this[_0x490f1d(0x311)]||Window_Base[_0x490f1d(0x243)][_0x490f1d(0x2b9)][_0x490f1d(0x31a)](this);},Window_ItemList[_0x53fe9d(0x243)][_0x53fe9d(0x276)]=function(){const _0x356ec8=_0x53fe9d;return Window_ItemList[_0x356ec8(0x1f3)]||0xc0;},Window_ItemList[_0x53fe9d(0x243)][_0x53fe9d(0x260)]=function(){const _0x7df79d=_0x53fe9d;let _0x578a59=Window_Selectable[_0x7df79d(0x243)][_0x7df79d(0x260)][_0x7df79d(0x31a)](this);return _0x578a59+Window_ItemList[_0x7df79d(0x291)];},Window_ItemList[_0x53fe9d(0x243)][_0x53fe9d(0x22a)]=function(){const _0x5dabff=_0x53fe9d;let _0x4420ca=Window_Selectable['prototype'][_0x5dabff(0x22a)][_0x5dabff(0x31a)](this);return _0x4420ca+Window_ItemList[_0x5dabff(0x268)];},Window_SkillList[_0x53fe9d(0x227)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)]['GeneralWindow'][_0x53fe9d(0x2a6)]??0x8,Window_SkillList[_0x53fe9d(0x1f3)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2a2)][_0x53fe9d(0x269)]??0x190,Window_SkillList['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X']=VisuMZ['SideviewBattleUI'][_0x53fe9d(0x24b)]['GeneralWindow'][_0x53fe9d(0x296)]??0x10,Window_SkillList[_0x53fe9d(0x268)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2a2)]['SkillWindowOffsetY']??0x10,VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x21f)]=Window_SkillList[_0x53fe9d(0x243)][_0x53fe9d(0x287)],Window_SkillList[_0x53fe9d(0x243)][_0x53fe9d(0x287)]=function(_0x376da8){const _0x1d6efb=_0x53fe9d;VisuMZ['SideviewBattleUI'][_0x1d6efb(0x21f)][_0x1d6efb(0x31a)](this,_0x376da8),this[_0x1d6efb(0x2af)]();},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x2ba)]=Window_SkillList['prototype']['maxCols'],Window_SkillList[_0x53fe9d(0x243)][_0x53fe9d(0x2bf)]=function(){const _0x78792c=_0x53fe9d;if(this[_0x78792c(0x280)]())return 0x1;else{if(_0x78792c(0x27b)!==_0x78792c(0x2ff))return VisuMZ[_0x78792c(0x1ff)][_0x78792c(0x2ba)][_0x78792c(0x31a)](this);else _0x3bbcbd['SideviewBattleUI'][_0x78792c(0x2ca)][_0x78792c(0x31a)](this,_0x15c3d4),this['createSideviewUiDimmerSprite']();}},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x241)]=Window_SkillList[_0x53fe9d(0x243)]['colSpacing'],Window_SkillList[_0x53fe9d(0x243)]['colSpacing']=function(){const _0x4c9e20=_0x53fe9d;if(this[_0x4c9e20(0x280)]())return _0x4c9e20(0x1db)===_0x4c9e20(0x274)?_0x58b641[_0x4c9e20(0x268)]:0x0;else{if(_0x4c9e20(0x247)!==_0x4c9e20(0x247)){const _0x2ecdca=_0x4c9e20(0x1ca)[_0x4c9e20(0x304)](_0x597cb9[_0x4c9e20(0x1de)]()),_0x572d76=this['_additionalSprites'];if(_0x572d76[_0x2ecdca]){const _0x31e556=_0x572d76[_0x2ecdca];_0x31e556[_0x4c9e20(0x29f)]['x']=_0x31e556[_0x4c9e20(0x29f)]['y']=0x1/this[_0x4c9e20(0x29f)]['y'];};}else return VisuMZ[_0x4c9e20(0x1ff)][_0x4c9e20(0x241)][_0x4c9e20(0x31a)](this);}},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x1fb)]=Window_SkillList[_0x53fe9d(0x243)]['makeItemList'],Window_SkillList[_0x53fe9d(0x243)][_0x53fe9d(0x303)]=function(){const _0x3f8751=_0x53fe9d;VisuMZ[_0x3f8751(0x1ff)][_0x3f8751(0x1fb)][_0x3f8751(0x31a)](this),this['adjustSideviewUiWidth'](),this[_0x3f8751(0x31d)](),this[_0x3f8751(0x1cc)]();},Window_SkillList[_0x53fe9d(0x243)][_0x53fe9d(0x2b9)]=function(){const _0x2f75b5=_0x53fe9d;return this[_0x2f75b5(0x311)]||Window_Base['prototype']['sideviewUiTargetActor'][_0x2f75b5(0x31a)](this);},Window_SkillList[_0x53fe9d(0x243)][_0x53fe9d(0x276)]=function(){const _0x257447=_0x53fe9d;return Window_SkillList[_0x257447(0x1f3)]||0xc0;},Window_SkillList[_0x53fe9d(0x243)][_0x53fe9d(0x260)]=function(){const _0x835b7e=_0x53fe9d;let _0x34e37e=Window_Selectable[_0x835b7e(0x243)]['sideviewUiPositionOffsetX']['call'](this);return _0x34e37e+Window_SkillList['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X'];},Window_SkillList['prototype'][_0x53fe9d(0x22a)]=function(){const _0x5f395a=_0x53fe9d;let _0x434117=Window_Selectable[_0x5f395a(0x243)][_0x5f395a(0x22a)][_0x5f395a(0x31a)](this);return _0x434117+Window_SkillList[_0x5f395a(0x268)];},Window_BattleSkill[_0x53fe9d(0x243)][_0x53fe9d(0x1c5)]=function(){const _0x44b216=_0x53fe9d;return Window_SkillList[_0x44b216(0x227)];},Window_BattleItem[_0x53fe9d(0x243)][_0x53fe9d(0x1c5)]=function(){const _0x212681=_0x53fe9d;return Window_ItemList[_0x212681(0x227)];},Window_PartyCommand['SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS']=VisuMZ[_0x53fe9d(0x1ff)]['Settings'][_0x53fe9d(0x2a2)][_0x53fe9d(0x2de)]??0x8,VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x1d1)]=Window_PartyCommand[_0x53fe9d(0x243)][_0x53fe9d(0x287)],Window_PartyCommand[_0x53fe9d(0x243)][_0x53fe9d(0x287)]=function(_0x5764a4){const _0x59c80b=_0x53fe9d;VisuMZ[_0x59c80b(0x1ff)][_0x59c80b(0x1d1)][_0x59c80b(0x31a)](this,_0x5764a4),this[_0x59c80b(0x2af)]();},VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x207)]=Window_PartyCommand[_0x53fe9d(0x243)][_0x53fe9d(0x1d2)],Window_PartyCommand[_0x53fe9d(0x243)]['makeCommandList']=function(){const _0x1f1e65=_0x53fe9d;VisuMZ[_0x1f1e65(0x1ff)][_0x1f1e65(0x207)]['call'](this),this[_0x1f1e65(0x246)](),this[_0x1f1e65(0x31d)]();},Window_PartyCommand[_0x53fe9d(0x243)][_0x53fe9d(0x2b9)]=function(){const _0xac87ce=_0x53fe9d;return $gameParty[_0xac87ce(0x2e4)]()[0x0];},Window_PartyCommand[_0x53fe9d(0x243)][_0x53fe9d(0x1c5)]=function(){const _0xbf89a9=_0x53fe9d;return Window_PartyCommand[_0xbf89a9(0x227)];},Window_ActorCommand[_0x53fe9d(0x227)]=VisuMZ[_0x53fe9d(0x1ff)]['Settings'][_0x53fe9d(0x2a2)][_0x53fe9d(0x2b8)]??0x8,VisuMZ['SideviewBattleUI']['Window_ActorCommand_initialize']=Window_ActorCommand[_0x53fe9d(0x243)][_0x53fe9d(0x287)],Window_ActorCommand['prototype'][_0x53fe9d(0x287)]=function(_0x24a0aa){const _0x1b96f6=_0x53fe9d;VisuMZ['SideviewBattleUI'][_0x1b96f6(0x1ce)][_0x1b96f6(0x31a)](this,_0x24a0aa),this[_0x1b96f6(0x2af)]();},VisuMZ['SideviewBattleUI'][_0x53fe9d(0x2e5)]=Window_ActorCommand[_0x53fe9d(0x243)][_0x53fe9d(0x1d2)],Window_ActorCommand[_0x53fe9d(0x243)][_0x53fe9d(0x1d2)]=function(){const _0x2b831d=_0x53fe9d;VisuMZ[_0x2b831d(0x1ff)][_0x2b831d(0x2e5)][_0x2b831d(0x31a)](this),this['adjustSideviewUiWidth'](),this['adjustSideviewUiHeight'](),this[_0x2b831d(0x1cc)]();},Window_ActorCommand[_0x53fe9d(0x243)][_0x53fe9d(0x2b9)]=function(){const _0x16f25f=_0x53fe9d;return this['_actor']||Window_Base['prototype'][_0x16f25f(0x2b9)][_0x16f25f(0x31a)](this);},Window_ActorCommand[_0x53fe9d(0x243)]['maxSideviewUiRows']=function(){const _0x3b1d9a=_0x53fe9d;return Window_ActorCommand[_0x3b1d9a(0x227)];},VisuMZ['SideviewBattleUI']['Window_BattleStatus_updateRefresh']=Window_BattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x307)],Window_BattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x307)]=function(){const _0xe11d4d=_0x53fe9d;if(this[_0xe11d4d(0x280)]()){if('KbdsH'!==_0xe11d4d(0x30c))this[_0xe11d4d(0x1cb)]();else{if(this['_battler']===this[_0xe11d4d(0x234)]())return;this['_battler']=this[_0xe11d4d(0x234)](),this[_0xe11d4d(0x293)](),this['_battler']?this['setBackgroundType'](0x1):this[_0xe11d4d(0x2b0)](0x2);}}else VisuMZ[_0xe11d4d(0x1ff)][_0xe11d4d(0x2db)][_0xe11d4d(0x31a)](this);},Window_BattleStatus['prototype']['updateRefreshSideviewUi']=function(){const _0x132304=_0x53fe9d;if($gameTemp[_0x132304(0x213)]())this[_0x132304(0x2f8)]=![],$gameTemp[_0x132304(0x30a)](),SceneManager[_0x132304(0x2d5)][_0x132304(0x1fe)]();else this['_requestRefresh']&&(this['_requestRefresh']=![],SceneManager[_0x132304(0x2d5)][_0x132304(0x1fe)]());};function Window_SideviewUiBattleStatus(){const _0x129a00=_0x53fe9d;this[_0x129a00(0x287)](...arguments);}Window_SideviewUiBattleStatus[_0x53fe9d(0x243)]=Object[_0x53fe9d(0x28f)](Window_StatusBase[_0x53fe9d(0x243)]),Window_SideviewUiBattleStatus[_0x53fe9d(0x243)]['constructor']=Window_SideviewUiBattleStatus,Window_SideviewUiBattleStatus[_0x53fe9d(0x317)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x306)]??0xc8,Window_SideviewUiBattleStatus[_0x53fe9d(0x1e5)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)]['HeightBase']??_0x53fe9d(0x202),Window_SideviewUiBattleStatus[_0x53fe9d(0x2dc)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)]['StatusWindow'][_0x53fe9d(0x319)]??0x4,Window_SideviewUiBattleStatus[_0x53fe9d(0x1f5)]=VisuMZ['SideviewBattleUI']['Settings'][_0x53fe9d(0x2b1)][_0x53fe9d(0x2e8)]??0x30,Window_SideviewUiBattleStatus[_0x53fe9d(0x295)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)]['StatusWindow'][_0x53fe9d(0x302)]??0x4,Window_SideviewUiBattleStatus[_0x53fe9d(0x1c8)]=VisuMZ[_0x53fe9d(0x1ff)]['Settings'][_0x53fe9d(0x2b1)][_0x53fe9d(0x28e)]??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x218)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)]['StatusWindow']['NameShow']??!![],Window_SideviewUiBattleStatus['NAME_OFFSET_X']=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x310)]??0x30,Window_SideviewUiBattleStatus[_0x53fe9d(0x22e)]=VisuMZ[_0x53fe9d(0x1ff)]['Settings'][_0x53fe9d(0x2b1)][_0x53fe9d(0x28a)]??0x0,Window_SideviewUiBattleStatus[_0x53fe9d(0x2f3)]=VisuMZ['SideviewBattleUI'][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x314)]??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x1f6)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)]['StatesIgnoreScale']??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x1e1)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x28c)]??0x14,Window_SideviewUiBattleStatus[_0x53fe9d(0x2e7)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x261)]??0x14,Window_SideviewUiBattleStatus[_0x53fe9d(0x316)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)]['TpbShow']??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x2ef)]=VisuMZ['SideviewBattleUI'][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x1e4)]??0x2c,Window_SideviewUiBattleStatus[_0x53fe9d(0x244)]=VisuMZ[_0x53fe9d(0x1ff)]['Settings']['StatusWindow'][_0x53fe9d(0x20a)]??0x0,Window_SideviewUiBattleStatus['HP_GAUGE_SHOWN']=VisuMZ['SideviewBattleUI'][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)]['HpShow']??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x286)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x2f2)]??0x3c,Window_SideviewUiBattleStatus[_0x53fe9d(0x2ce)]=VisuMZ[_0x53fe9d(0x1ff)]['Settings'][_0x53fe9d(0x2b1)][_0x53fe9d(0x1eb)]??0x0,Window_SideviewUiBattleStatus[_0x53fe9d(0x210)]=VisuMZ['SideviewBattleUI'][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x26e)]??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x212)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x2f5)]??0x44,Window_SideviewUiBattleStatus[_0x53fe9d(0x1d6)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x27a)]??0x0,Window_SideviewUiBattleStatus['TP_GAUGE_SHOWN']=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x20e)]??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x245)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x29d)]??0x4a,Window_SideviewUiBattleStatus[_0x53fe9d(0x26d)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)]['TpOffsetY']??0x0,Window_SideviewUiBattleStatus[_0x53fe9d(0x28b)]=VisuMZ[_0x53fe9d(0x1ff)]['Settings']['StatusWindow'][_0x53fe9d(0x27d)]??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x1d8)]=VisuMZ['SideviewBattleUI'][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x1c1)]??0x2c,Window_SideviewUiBattleStatus[_0x53fe9d(0x1f7)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x2cc)]??0x0,Window_SideviewUiBattleStatus[_0x53fe9d(0x313)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)]['StatusWindow']['BoostShow']??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x2b3)]=VisuMZ['SideviewBattleUI'][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x235)]??0x34,Window_SideviewUiBattleStatus[_0x53fe9d(0x25a)]=VisuMZ['SideviewBattleUI'][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x1c2)]??0x2,Window_SideviewUiBattleStatus[_0x53fe9d(0x253)]=VisuMZ[_0x53fe9d(0x1ff)]['Settings']['StatusWindow'][_0x53fe9d(0x22b)]??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x1ee)]=VisuMZ[_0x53fe9d(0x1ff)]['Settings'][_0x53fe9d(0x2b1)]['BraveOffsetX']??0x34,Window_SideviewUiBattleStatus[_0x53fe9d(0x279)]=VisuMZ['SideviewBattleUI']['Settings']['StatusWindow'][_0x53fe9d(0x2df)]??-0x6,Window_SideviewUiBattleStatus[_0x53fe9d(0x2cd)]=VisuMZ['SideviewBattleUI'][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x204)]??!![],Window_SideviewUiBattleStatus['BREAK_SHIELD_REVERSE_SCALE']=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x256)]??!![],Window_SideviewUiBattleStatus['BREAK_SHIELD_OFFSET_X']=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)]['StatusWindow'][_0x53fe9d(0x300)]??0x14,Window_SideviewUiBattleStatus[_0x53fe9d(0x265)]=VisuMZ[_0x53fe9d(0x1ff)][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)]['BreakShieldOffsetY']??0x14,Window_SideviewUiBattleStatus[_0x53fe9d(0x2eb)]=VisuMZ['SideviewBattleUI'][_0x53fe9d(0x24b)][_0x53fe9d(0x2b1)][_0x53fe9d(0x1bf)]??!![],Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x287)]=function(_0xf5eec6){const _0x315e49=_0x53fe9d;this[_0x315e49(0x2cf)]=_0xf5eec6;const _0x5f37e4=this[_0x315e49(0x315)]();Window_StatusBase[_0x315e49(0x243)][_0x315e49(0x287)][_0x315e49(0x31a)](this,_0x5f37e4),this['initMembersSideviewUi'](),this[_0x315e49(0x2b0)](0x2);},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)]['createWindowRect']=function(){const _0x1b8218=_0x53fe9d,_0x8bfd54=Window_Base[_0x1b8218(0x2c2)];let _0x5ae9c2=Window_SideviewUiBattleStatus[_0x1b8218(0x317)],_0xf9bac0=Graphics[_0x1b8218(0x23d)]-_0x5ae9c2;_0xf9bac0+=Math['ceil']((Graphics[_0x1b8218(0x231)]-Graphics['boxWidth'])/0x2),_0x5ae9c2/=_0x8bfd54,_0x5ae9c2=Math[_0x1b8218(0x282)](_0x5ae9c2),_0x5ae9c2+=Math[_0x1b8218(0x282)](Window_SideviewUiBattleStatus['WIDTH_MOVE']*0x4/_0x8bfd54);let _0x1ca5ab=Window_SideviewUiBattleStatus[_0x1b8218(0x1e5)];if(_0x1ca5ab===_0x1b8218(0x202)){if('Bfyde'!=='Bfyde'){if(!this[_0x1b8218(0x280)]())return;const _0x46bcea=this[_0x1b8218(0x231)];this[_0x1b8218(0x231)]=this[_0x1b8218(0x276)](),_0x46bcea!==this[_0x1b8218(0x231)]&&this[_0x1b8218(0x2b4)]();}else _0x1ca5ab=Window_SideviewUiBattleStatus[_0x1b8218(0x2dc)]*0x2,_0x1ca5ab+=this[_0x1b8218(0x228)]()*this['autoRowCount'](),_0x1ca5ab=Math[_0x1b8218(0x282)](_0x1ca5ab*_0x8bfd54),_0x1ca5ab/=_0x8bfd54;}else{if(_0x1b8218(0x2c8)!==_0x1b8218(0x1d9))_0x1ca5ab=eval(_0x1ca5ab)||0x0;else{if(!this[_0x1b8218(0x280)]())return;if(!_0x7fc208[_0x1b8218(0x31c)])return;this[_0x1b8218(0x23a)]=0x0;!this[_0x1b8218(0x21c)]&&(this[_0x1b8218(0x21c)]=new _0x1735ce(),this['addChildToBack'](this[_0x1b8218(0x21c)]));const _0x5a3d03=this[_0x1b8218(0x231)]-_0x40c933[_0x1b8218(0x317)],_0x4aaf2f=this[_0x1b8218(0x2f7)]()*0x2;this[_0x1b8218(0x21c)][_0x1b8218(0x1be)]=new _0x131226(_0x5a3d03,_0x4aaf2f),this[_0x1b8218(0x21c)]['x']=-0x4,this[_0x1b8218(0x21c)]['y']=this['padding'];const _0x23a93f=this[_0x1b8218(0x21c)][_0x1b8218(0x1be)],_0x277a3c=_0x30fcb2['dimColor1'](),_0x2c36fd=_0x1894a1[_0x1b8218(0x2e3)]();_0x23a93f[_0x1b8218(0x2c0)](0x0,0x0,_0x2e4013['round'](_0x5a3d03/0x2),_0x4aaf2f,_0x277a3c),_0x23a93f['gradientFillRect'](_0x2f5304[_0x1b8218(0x2da)](_0x5a3d03/0x2),0x0,_0x45e567[_0x1b8218(0x2da)](_0x5a3d03/0x2),_0x4aaf2f,_0x277a3c,_0x2c36fd);}}let _0x450a0c=Math[_0x1b8218(0x282)](_0x1ca5ab*_0x8bfd54)*this[_0x1b8218(0x2cf)];return _0x450a0c-=Math[_0x1b8218(0x282)]((Graphics['height']-Graphics[_0x1b8218(0x20b)])/0x2),this[_0x1b8218(0x259)]=_0xf9bac0,this[_0x1b8218(0x30d)]=this[_0x1b8218(0x259)]-Math[_0x1b8218(0x282)](Window_SideviewUiBattleStatus[_0x1b8218(0x1f5)]/_0x8bfd54),this['_targetX']=this[_0x1b8218(0x259)],new Rectangle(_0xf9bac0,_0x450a0c,_0x5ae9c2,_0x1ca5ab);},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)]['autoRowCount']=function(){const _0x3c0fee=_0x53fe9d;let _0x277a82=0x0;if(Window_SideviewUiBattleStatus[_0x3c0fee(0x218)])_0x277a82+=0x1;if(Window_SideviewUiBattleStatus['HP_GAUGE_SHOWN'])_0x277a82+=0x1;if(Window_SideviewUiBattleStatus['MP_GAUGE_SHOWN'])_0x277a82+=0x1;if(Window_SideviewUiBattleStatus[_0x3c0fee(0x22d)])_0x277a82+=0x1;if(this[_0x3c0fee(0x1f1)]())_0x277a82+=0x1;if(this['isAdjustBravePoints']())_0x277a82+=0x1;return _0x277a82||0x1;},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)]['updatePadding']=function(){this['padding']=0x0;},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x2ae)]=function(){const _0x233944=_0x53fe9d;if(!this[_0x233944(0x21c)])return;if(!Window_SideviewUiBattleStatus[_0x233944(0x1c8)])return;const _0x24734a=this[_0x233944(0x21c)]['bitmap'];var _0x249619=ColorManager['dimColor1'](),_0x2b35ca=ColorManager[_0x233944(0x2e3)](),_0x40d523=Math[_0x233944(0x282)](this['width']/0x4),_0x3b846a=this[_0x233944(0x231)]-_0x40d523,_0x2c8124=this[_0x233944(0x249)];_0x24734a[_0x233944(0x240)](this[_0x233944(0x231)],_0x2c8124),_0x24734a[_0x233944(0x226)](0x0,0x0,_0x40d523,_0x2c8124,_0x2b35ca,_0x249619),_0x24734a[_0x233944(0x2c0)](_0x40d523,0x0,_0x3b846a,_0x2c8124,_0x249619),this[_0x233944(0x21c)]['setFrame'](0x0,0x0,_0x3b846a,_0x2c8124);},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)]['update']=function(){const _0x3bf670=_0x53fe9d;Window_StatusBase[_0x3bf670(0x243)]['update'][_0x3bf670(0x31a)](this),this['updateBattler'](),this[_0x3bf670(0x1f2)]();},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x234)]=function(){return $gameParty['battleMembers']()[this['_partyIndex']];},Window_SideviewUiBattleStatus['prototype'][_0x53fe9d(0x1e7)]=function(){const _0x56ddba=_0x53fe9d;if(this['_battler']===this['battler']())return;this[_0x56ddba(0x2c6)]=this['battler'](),this['refresh']();if(this[_0x56ddba(0x2c6)]){if(_0x56ddba(0x1d0)===_0x56ddba(0x1d0))this[_0x56ddba(0x2b0)](0x1);else{if(!this[_0x56ddba(0x2c6)])return;this[_0x56ddba(0x1c0)]=this[_0x56ddba(0x1fc)]()?this[_0x56ddba(0x30d)]:this['_homeX'];const _0xb05191=_0x4c44e8[_0x56ddba(0x295)];if(this['_targetX']>this['x'])this['x']=_0x4bb233[_0x56ddba(0x301)](this['x']+_0xb05191,this[_0x56ddba(0x1c0)]);else this[_0x56ddba(0x1c0)]<this['x']&&(this['x']=_0x17e0a5['max'](this['x']-_0xb05191,this[_0x56ddba(0x1c0)]));}}else{if(_0x56ddba(0x209)!=='raiIC'){const _0x4c6ff8=_0x176ef7['ceil'](_0x200898[_0x56ddba(0x203)]*_0x422b76[_0x56ddba(0x208)]);let _0x47bb6d=_0x9d2a47+_0x3ee813['BOOST_OFFSET_X'],_0x37d5f5=_0x7e8eeb+_0x2370ec[_0x56ddba(0x25a)];_0x37d5f5+=_0x51d7af[_0x56ddba(0x1f9)](0x0,_0x3dd613['round']((this[_0x56ddba(0x228)]()-_0x4c6ff8)/0x2)),this['placeBoostPoints'](_0x557dcf,_0x47bb6d,_0x37d5f5),_0x53063f+=this['gaugeLineHeight']();}else this['setBackgroundType'](0x2);}},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x1f2)]=function(){const _0x184c78=_0x53fe9d;if(!this['_battler'])return;this[_0x184c78(0x1c0)]=this['isActivePosition']()?this['_activeX']:this['_homeX'];const _0x18db66=Window_SideviewUiBattleStatus[_0x184c78(0x295)];if(this[_0x184c78(0x1c0)]>this['x'])this['x']=Math[_0x184c78(0x301)](this['x']+_0x18db66,this[_0x184c78(0x1c0)]);else{if(this[_0x184c78(0x1c0)]<this['x']){if('FRGaa'===_0x184c78(0x1ed))this['x']=Math[_0x184c78(0x1f9)](this['x']-_0x18db66,this[_0x184c78(0x1c0)]);else return _0x4202ce['STATE_TOOLTIPS_SHOWN'];}}},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)]['isActivePosition']=function(){const _0x24fd2d=_0x53fe9d;if(this[_0x24fd2d(0x2c6)]===BattleManager[_0x24fd2d(0x23c)]())return!![];if(this['_battler']===BattleManager[_0x24fd2d(0x29e)])return!![];if(this[_0x24fd2d(0x2c6)][_0x24fd2d(0x1fa)]())return!![];return![];},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x2ac)]=function(){return Window_SideviewUiBattleStatus['STATE_TOOLTIPS_SHOWN'];},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x24d)]=function(){const _0x96543d=_0x53fe9d;return this[_0x96543d(0x2c6)];},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x24c)]=function(){const _0x3f27dd=_0x53fe9d,_0x1495e7=new Point(TouchInput['x'],TouchInput['y']),_0x12ab3e=this['worldTransform']['applyInverse'](_0x1495e7);return this['innerRect'][_0x3f27dd(0x1e2)](_0x12ab3e['x'],_0x12ab3e['y']);},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x2ab)]=function(){const _0x519122=_0x53fe9d;this[_0x519122(0x278)]();if(!this['_battler'])return;this['drawBasicStatus'](),this[_0x519122(0x1f8)]();},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x20d)]=function(){const _0x3b8e21=_0x53fe9d,_0x7630be=this[_0x3b8e21(0x2c6)];let _0x311939=0x4,_0x243716=Window_SideviewUiBattleStatus[_0x3b8e21(0x2dc)];if(Imported[_0x3b8e21(0x2a8)]&&Window_SideviewUiBattleStatus[_0x3b8e21(0x2cd)]){if('dqGjf'===_0x3b8e21(0x255)){const _0x31c631=_0x3feca1(_0x20d144['$1']);_0x31c631<_0x54f6af?(_0x484cbe(_0x3b8e21(0x23f)[_0x3b8e21(0x304)](_0x304845,_0x31c631,_0x510e4b)),_0x358e36[_0x3b8e21(0x270)]()):_0xeb3c2b=_0x4019f0[_0x3b8e21(0x1f9)](_0x31c631,_0x3dbe88);}else{let _0x15c65a=_0x311939+Window_SideviewUiBattleStatus[_0x3b8e21(0x26b)],_0x26a7a6=_0x243716+Window_SideviewUiBattleStatus['BREAK_SHIELD_OFFSET_Y'];this[_0x3b8e21(0x230)](_0x7630be,_0x15c65a,_0x26a7a6);if(Window_SideviewUiBattleStatus[_0x3b8e21(0x1f6)]){if(_0x3b8e21(0x2c1)===_0x3b8e21(0x2c1)){const _0x39e745=_0x3b8e21(0x1ca)[_0x3b8e21(0x304)](_0x7630be[_0x3b8e21(0x1de)]()),_0x5405d0=this[_0x3b8e21(0x25b)];if(_0x5405d0[_0x39e745]){if('VPznu'===_0x3b8e21(0x27e)){const _0x293bd3=_0x5405d0[_0x39e745];_0x293bd3[_0x3b8e21(0x29f)]['x']=_0x293bd3['scale']['y']=0x1/this[_0x3b8e21(0x29f)]['y'];}else this['x']=_0xe6e696[_0x3b8e21(0x1f9)](this['x']-_0xab4f77,this[_0x3b8e21(0x1c0)]);};}else this['_actorWindow'][_0x3b8e21(0x305)](),this[_0x3b8e21(0x222)]();}}}if(Window_SideviewUiBattleStatus['STATES_SHOWN']){let _0x30e454=_0x311939+Window_SideviewUiBattleStatus[_0x3b8e21(0x1e1)],_0x4ad887=_0x243716+Window_SideviewUiBattleStatus[_0x3b8e21(0x2e7)];if(Imported['VisuMZ_4_BreakShields']&&Window_SideviewUiBattleStatus[_0x3b8e21(0x2cd)]){if(Window_SideviewUiBattleStatus[_0x3b8e21(0x1e6)])_0x4ad887+=Math['ceil'](ImageManager[_0x3b8e21(0x203)]/this[_0x3b8e21(0x29f)]['y']);else{if(_0x3b8e21(0x275)===_0x3b8e21(0x2d6)){if(!_0x5090b3[_0x3b8e21(0x280)]())return;this[_0x3b8e21(0x225)]=[];const _0x39b96b=_0x30b526[_0x3b8e21(0x23b)]();for(let _0x46cbb5=0x0;_0x46cbb5<_0x39b96b;_0x46cbb5++){const _0x848d9d=new _0x537b9a(_0x46cbb5);this[_0x3b8e21(0x2d1)](_0x848d9d),this[_0x3b8e21(0x225)][_0x3b8e21(0x2bc)](_0x848d9d);}}else _0x4ad887+=ImageManager[_0x3b8e21(0x203)];}_0x4ad887+=0x4;}this[_0x3b8e21(0x205)](_0x7630be,_0x30e454,_0x4ad887);if(Window_SideviewUiBattleStatus[_0x3b8e21(0x1f6)]){if(_0x3b8e21(0x2b5)===_0x3b8e21(0x2a0))return _0x3c155c[_0x3b8e21(0x1ff)][_0x3b8e21(0x241)][_0x3b8e21(0x31a)](this);else{const _0x47a865=_0x3b8e21(0x2ad)[_0x3b8e21(0x304)](_0x7630be[_0x3b8e21(0x1de)]()),_0x54391a=this[_0x3b8e21(0x25b)];if(_0x54391a[_0x47a865]){if('NLbKy'===_0x3b8e21(0x25f)){const _0x5981f9=_0x54391a[_0x47a865];_0x5981f9['scale']['x']=_0x5981f9[_0x3b8e21(0x29f)]['y']=0x1/this[_0x3b8e21(0x29f)]['y'];}else{let _0x102a01=_0x550a57[_0x3b8e21(0x243)][_0x3b8e21(0x260)]['call'](this);return _0x102a01+_0x2b2be1[_0x3b8e21(0x291)];}};}}}if(this[_0x3b8e21(0x1fd)]()){let _0x4edce7=_0x311939+Window_SideviewUiBattleStatus[_0x3b8e21(0x2ef)],_0x5e0f13=_0x243716+Window_SideviewUiBattleStatus['TPB_OFFSET_Y'];this['placeTimeGauge'](_0x7630be,_0x4edce7,_0x5e0f13);}if(this['isShowAggro']()){let _0x2b01f7=_0x311939+Window_SideviewUiBattleStatus['AGGRO_OFFSET_X'],_0xb06d72=_0x243716+Window_SideviewUiBattleStatus[_0x3b8e21(0x1f7)];if(this['isShowTpbGauge']()){if(_0x3b8e21(0x221)!=='vCPir'){let _0x47036a=_0x55b51e+_0x32f2be[_0x3b8e21(0x286)],_0x55ce92=_0xc863e0+_0x3a248b[_0x3b8e21(0x2ce)];this['placeGauge'](_0x331b0c,'hp',_0x47036a,_0x55ce92),_0x2cde82+=this['gaugeLineHeight']();}else _0xb06d72-=Sprite_Gauge[_0x3b8e21(0x243)]['gaugeHeight']()-0x1;}this[_0x3b8e21(0x2f0)](_0x7630be,_0x2b01f7,_0xb06d72);}if(Window_SideviewUiBattleStatus[_0x3b8e21(0x218)]){if(_0x3b8e21(0x2d3)!==_0x3b8e21(0x223)){let _0x1aa889=_0x311939+Window_SideviewUiBattleStatus['NAME_OFFSET_X'],_0x36bc6b=_0x243716+Window_SideviewUiBattleStatus['NAME_OFFSET_Y'];this[_0x3b8e21(0x2fc)](_0x7630be,_0x1aa889,_0x36bc6b);}else{if(!this['_dimmerSprite'])return;if(!_0x53e277['BG_SHOW'])return;const _0x43ad4f=this[_0x3b8e21(0x21c)][_0x3b8e21(0x1be)];var _0x5cfd81=_0xb4bb1a[_0x3b8e21(0x2c7)](),_0x1e3bb6=_0x5d0de2[_0x3b8e21(0x2e3)](),_0x5e74ee=_0x13ee65['ceil'](this[_0x3b8e21(0x231)]/0x4),_0x3a1a75=this[_0x3b8e21(0x231)]-_0x5e74ee,_0x4ac80b=this[_0x3b8e21(0x249)];_0x43ad4f[_0x3b8e21(0x240)](this['width'],_0x4ac80b),_0x43ad4f[_0x3b8e21(0x226)](0x0,0x0,_0x5e74ee,_0x4ac80b,_0x1e3bb6,_0x5cfd81),_0x43ad4f[_0x3b8e21(0x2c0)](_0x5e74ee,0x0,_0x3a1a75,_0x4ac80b,_0x5cfd81),this[_0x3b8e21(0x21c)][_0x3b8e21(0x2e2)](0x0,0x0,_0x3a1a75,_0x4ac80b);}}(Window_SideviewUiBattleStatus[_0x3b8e21(0x218)]||this[_0x3b8e21(0x1fd)]()||this[_0x3b8e21(0x1d5)]())&&(_0x243716+=this['gaugeLineHeight']());if(this['isAdjustBoostPoints']()){const _0x43e8e3=Math['ceil'](ImageManager['iconHeight']*Sprite_BoostContainer['ICON_SIZE_RATE']);let _0x140b0b=_0x311939+Window_SideviewUiBattleStatus[_0x3b8e21(0x2b3)],_0x472f3c=_0x243716+Window_SideviewUiBattleStatus[_0x3b8e21(0x25a)];_0x472f3c+=Math[_0x3b8e21(0x1f9)](0x0,Math['round']((this[_0x3b8e21(0x228)]()-_0x43e8e3)/0x2)),this[_0x3b8e21(0x271)](_0x7630be,_0x140b0b,_0x472f3c),_0x243716+=this[_0x3b8e21(0x228)]();}if(this[_0x3b8e21(0x2a3)]()){if(_0x3b8e21(0x1ea)==='FnldY'){let _0x30504c=_0x311939+Window_SideviewUiBattleStatus[_0x3b8e21(0x1ee)],_0x1b09e5=_0x243716+Window_SideviewUiBattleStatus[_0x3b8e21(0x279)],_0x16ccb9=Math[_0x3b8e21(0x282)](Window_SideviewUiBattleStatus[_0x3b8e21(0x317)]/this[_0x3b8e21(0x29f)]['x']);this[_0x3b8e21(0x206)](_0x7630be,_0x30504c,_0x1b09e5,_0x16ccb9,_0x3b8e21(0x257)),_0x243716+=this[_0x3b8e21(0x228)]();}else _0x4dcf31=_0x43cf7c[_0x3b8e21(0x2dc)]*0x2,_0x54dfd1+=this['gaugeLineHeight']()*this[_0x3b8e21(0x2ec)](),_0xa21966=_0x1c55a2['ceil'](_0x1910e2*_0x10610d),_0x31c333/=_0x3501ab;}if(Window_SideviewUiBattleStatus[_0x3b8e21(0x248)]){let _0x34c185=_0x311939+Window_SideviewUiBattleStatus[_0x3b8e21(0x286)],_0x197fd3=_0x243716+Window_SideviewUiBattleStatus['HP_GAUGE_OFFSET_Y'];this[_0x3b8e21(0x2ed)](_0x7630be,'hp',_0x34c185,_0x197fd3),_0x243716+=this[_0x3b8e21(0x228)]();}if(Window_SideviewUiBattleStatus[_0x3b8e21(0x210)]){if(_0x3b8e21(0x30b)==='qIOdz'){let _0x25c857=_0x311939+Window_SideviewUiBattleStatus[_0x3b8e21(0x212)],_0x53f227=_0x243716+Window_SideviewUiBattleStatus['MP_GAUGE_OFFSET_Y'];this['placeGauge'](_0x7630be,'mp',_0x25c857,_0x53f227),_0x243716+=this[_0x3b8e21(0x228)]();}else return _0x4c55ea[_0x3b8e21(0x2c9)]&&_0x2dfea0['BOOST_SHOWN']&&_0x499194[_0x3b8e21(0x2aa)]();}if(Window_SideviewUiBattleStatus[_0x3b8e21(0x22d)]){let _0x6d1457=_0x311939+Window_SideviewUiBattleStatus[_0x3b8e21(0x245)],_0x2a9260=_0x243716+Window_SideviewUiBattleStatus[_0x3b8e21(0x26d)];this[_0x3b8e21(0x2ed)](_0x7630be,'tp',_0x6d1457,_0x2a9260),_0x243716+=this[_0x3b8e21(0x228)]();}},Window_SideviewUiBattleStatus['prototype']['isShowTpbGauge']=function(){const _0x23f1c9=_0x53fe9d;if(Imported[_0x23f1c9(0x281)]&&BattleManager[_0x23f1c9(0x2fe)]()){if('SNyLK'!==_0x23f1c9(0x2cb))_0x4bb0a0=_0x22820b['max'](_0x5e7090,_0x48ab24);else return![];}return BattleManager[_0x23f1c9(0x2b6)]()&&Window_SideviewUiBattleStatus[_0x23f1c9(0x218)]&&Window_SideviewUiBattleStatus[_0x23f1c9(0x316)];},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x1d5)]=function(){const _0x1b60a8=_0x53fe9d;return Window_SideviewUiBattleStatus[_0x1b60a8(0x218)]&&Window_SideviewUiBattleStatus[_0x1b60a8(0x28b)]&&Imported[_0x1b60a8(0x2a5)]&&ConfigManager[_0x1b60a8(0x2e0)]&&VisuMZ[_0x1b60a8(0x232)][_0x1b60a8(0x24b)][_0x1b60a8(0x2f6)][_0x1b60a8(0x29b)];},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)]['isAdjustBoostPoints']=function(){const _0xa6248d=_0x53fe9d;return Imported['VisuMZ_3_BoostAction']&&Window_SideviewUiBattleStatus['BOOST_SHOWN']&&BattleManager[_0xa6248d(0x2aa)]();},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x2a3)]=function(){const _0x50ded2=_0x53fe9d;return Imported[_0x50ded2(0x2fd)]&&Window_SideviewUiBattleStatus[_0x50ded2(0x253)]&&BattleManager['isBTB']();},Window_SideviewUiBattleStatus[_0x53fe9d(0x243)][_0x53fe9d(0x1f8)]=function(){const _0x4cd014=_0x53fe9d;VisuMZ['SideviewBattleUI'][_0x4cd014(0x24b)]['StatusWindow'][_0x4cd014(0x1ec)]&&VisuMZ[_0x4cd014(0x1ff)][_0x4cd014(0x24b)][_0x4cd014(0x2b1)]['CustomUi'][_0x4cd014(0x31a)](this,this['_battler']);};