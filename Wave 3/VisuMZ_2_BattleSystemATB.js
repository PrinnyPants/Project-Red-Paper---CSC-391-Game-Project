//=============================================================================
// VisuStella MZ - Battle System ATB - Active Turn Battle
// VisuMZ_2_BattleSystemATB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemATB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemATB = VisuMZ.BattleSystemATB || {};
VisuMZ.BattleSystemATB.version = 1.25;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.25] [BattleSystemATB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_ATB_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The RPG Maker MZ Time Progress Battle (TPB) system is only a few steps away
 * from the acclaimed Active Turn Battle (ATB) system. This plugin will grant
 * it the various features needed to turn it from TPB into ATB.
 * 
 * This plugin will grant control over how the various mechanics work, ranging
 * from penalties to calculations, to actions that can manipulate the ATB gauge
 * of battlers. Battlers that are in the middle of casting a spell can also be
 * interrupted with specific notetag traits.
 * 
 * ATB Gauges can also be displayed on enemies and/or allies, giving the player
 * full access to the current battle state. The ATB Gauges are also improved,
 * showing different colors for different states and showing a new gauge for
 * the casting state.
 * 
 * *NOTE* You will need to set the game project to run in either TPB mode,
 * Time Progress (Active) or Time Progress (Wait), for these new ATB effects
 * to work. You can find this setting in Database > System 1.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Full control over the TPB/ATB mechanics such as speed, calculations, etc.
 * * Notetags that give skills and items access to ATB Gauge manipulation, by
 *   altering how filled they are.
 * * Interrupts can be used on battlers in the middle of casting a skill.
 * * Visual ATB Gauges can be displayed over battlers' heads.
 * * ATB Gauges have extra coloring options added to them to let the player
 *   quickly know the current speed state of the ATB Gauge.
 * * A field-wide ATB Gauge that positions actor and enemy markers on it to
 *   show how far along actors and enemies are relative to each other's turns.
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
 * - VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 * 
 * *NOTE* You will need to set the game project to run in either TPB mode,
 * Time Progress (Active) or Time Progress (Wait), for these new ATB effects
 * to work. You can find this setting in Database > System 1.
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
 * ATB Gauges
 * 
 * The gauges are now revamped to show different colors to depict the various
 * ATB states a battler can be in. These various states include the following:
 * 
 * - When a battler's speed is fully stopped.
 * - When a battler's speed is slower/faster past a specific rating.
 * - When a battler is ready for an action.
 * - When a battler is casting an action (those with negative speed values).
 * 
 * The colors used for these states can be found and altered in the Plugin
 * Parameters under Gauge Color Settings.
 *
 * ---
 * 
 * Skill & Item Speeds
 * 
 * With TPB, skills and items with negative speed values will cause the battler
 * to enter a "casting" state, meaning they have to wait extra time before the
 * action takes off. With this delayed action execution, one might assume that
 * if there is a positive speed value, the battler would require less time for
 * their next turn.
 * 
 * However, this isn't the case with RPG Maker MZ's TPB. By changing it to ATB,
 * skills and items with positive speed values will have an impact on how full
 * their ATB Gauges will be in the following turn. A value of 2000 will put the
 * gauge at 50% full, 1000 will put the gauge at 25% full, 500 will put it at
 * 12.5% full, and so on. Notetags can also be used to influence this.
 * 
 * ---
 * 
 * JS Calculation Mechanics
 * 
 * While the calculation mechanics aren't changed from their original RPG Maker
 * MZ formulas, the functions for them have been overwritten to allow you, the
 * game developer, to alter them as you see fit.
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
 * VisuMZ_0_CoreEngine
 *
 * - ATB Interrupts can have animations played when they trigger if the
 * VisuStella Core Engine is installed.
 *
 * ---
 * 
 * VisuMZ_1_OptionsCore
 * 
 * - Having the VisuStella Options Core available will allow you to adjust the
 * speed at which the ATB gauges fill up.
 * 
 * - The VisuStella Options Core also gives the player the option to toggle
 * between Active and Wait-based ATB.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * === General ATB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 *
 * ---
 * 
 * <ATB Help>
 *  description
 *  description
 * </ATB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under TPB/ATB.
 * - This is primarily used if the skill behaves differently in TPB/ATB versus
 *   any other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to TPB/ATB.
 * 
 * ---
 *
 * <Hide ATB Gauge>
 *
 * - Used for: Enemy Notetags
 * - If you don't want an enemy to show their ATB Gauge, use this notetag.
 * 
 * ---
 * 
 * === ATB Field Gauge-Related Notetags ===
 * 
 * These notetags only work if the ATB Field Gauge is enabled.
 * 
 * ---
 *
 * <ATB Field Gauge Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the marker graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <ATB Field Gauge Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the marker graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <ATB Field Gauge Face: Monster, 1>
 * 
 * ---
 * 
 * === ATB Gauge Manipulation-Related Notetags ===
 * 
 * These notetags are used for ATB Gauge manipulation purposes.
 * 
 * ---
 *
 * <ATB After Gauge: x%>
 *
 * - Used for: Skill, Item Notetags
 * - After using the skill/item, the user's ATB Gauge will be set to x%.
 * - Replace 'x' with a percentile value representing the amount you want the
 *   ATB Gauge to reset to after the skill/item's usage.
 * 
 * ---
 * 
 * <ATB Charge Gauge: x%>
 * <ATB Charge Gauge: +x%>
 * <ATB Charge Gauge: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a charging state, change the target's gauge amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the ATB
 *   Gauge you wish to alter it to/by.
 * - This only affects targets who are in a charging state.
 * 
 * ---
 * 
 * <ATB Cast Gauge: x%>
 * <ATB Cast Gauge: +x%>
 * <ATB Cast Gauge: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a casting state, change the target's gauge amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the ATB
 *   Gauge you wish to alter it to/by.
 * - This only affects targets who are in a casting state.
 * 
 * ---
 *
 * <ATB Interrupt>
 *
 * - Used for: Skill, Item Notetags
 * - If this skill/item hits a target who is in a casting state, interrupt that
 *   action to cancel it and reset the target's ATB Gauge to 0%.
 * 
 * ---
 *
 * <ATB Cannot Be Interrupted>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the skill/item immune to ATB Interruptions.
 * 
 * ---
 * 
 * <ATB Battle Start Gauge: +x%>
 * <ATB Battle Start Gauge: -x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Determine how much extra or less ATB Gauge the battler will start with if
 *   associated with one of these database objects.
 * - Replace 'x' with a percentile value determining how much extra or less ATB
 *   Gauge value the battler will start battle with.
 * - These values are additive when stacked.
 *
 * ---
 * 
 * <ATB After Gauge: +x%>
 * <ATB After Gauge: -x%>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - Determine how much influence there is on the ATB Gauge after finishing a
 *   skill/item. Increase or decrease the amount after each action.
 * - Replace 'x' with a percentile value determining how much influence there
 *   is on the ATB Gauge after the skill/item has finished performing.
 * - These values are additive when stacked.
 *
 * ---
 * 
 * === JavaScript Notetags: ATB Gauge Manipulation ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * give more control over conditional ATB Gauge Manipulation.
 * 
 * ---
 * 
 * <JS ATB Charge Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB Charge Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to if the target is in a charging state.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current ATB Gauge rate
 *   if the target is in a charging state.
 * 
 * ---
 * 
 * <JS ATB Cast Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB Cast Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to if the target is in a casting state.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current ATB Gauge rate
 *   if the target is in a casting state.
 * 
 * ---
 * 
 * <JS ATB After Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB After Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to after performing this skill/item action.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to 0.
 * 
 * ---
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Field Gauge Icon
 * - Changes the icons used for the specific actor(s) on the ATB Field Gauge.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 * 
 * Actor: Change Field Gauge Face
 * - Changes the faces used for the specific actor(s) on the ATB Field Gauge.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Face Name:
 *   - This is the filename for the target face graphic.
 * 
 *   Face Index:
 *   - This is the index for the target face graphic.
 * 
 * ---
 *
 * Actor: Clear Field Gauge Graphic
 * - Clears the ATB Field Gauge graphics for the actor(s).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Field Gauge Icon
 * - Changes the icons used for the specific enemy(ies) on the ATB Field Gauge.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change Field Gauge Face
 * - Changes the faces used for the specific enemy(ies) on the ATB Field Gauge.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Enemy: Clear Field Gauge Graphic
 * - Clears the ATB Field Gauge graphics for the enemy(ies).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 * 
 * System: ATB Field Gauge Visibility
 * - Determine the visibility of the ATB Field Gauge.
 * 
 *   Visibility:
 *   - Changes the visibility of the ATB Field Gauge.
 * 
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Mechanics settings used for Battle System ATB. The majority of these are
 * JavaScript-based and will require knowledge of JavaScript to fully utilize
 * the plugin parameters.
 *
 * ---
 *
 * Mechanics
 * 
 *   Escape Fail Penalty:
 *   - Gauge penalty if an escape attempt fails.
 * 
 *   Stuns Reset Gauge?:
 *   - Should stuns reset the ATB Gauge?
 * 
 *   JS: Initial Gauge:
 *   - JavaScript code to determine how much ATB gauge to give each battler at
 *     the start of battle.
 * 
 *   JS: Speed:
 *   - JavaScript code to determine how much speed a battler has.
 * 
 *   JS: Base Speed:
 *   - JavaScript code to determine how much base speed a battler has.
 * 
 *   JS: Relative Speed:
 *   - JavaScript code to determine what is the relative speed of a battler.
 * 
 *   JS: Acceleration:
 *   - JavaScript code to determine how much gauges accelerate by relative to
 *     reference time.
 * 
 *   JS: Cast Time:
 *   - JavaScript code to determine how much cast time is used for skills/items
 *     with negative speed modifiers.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Interrupt Settings
 * ============================================================================
 *
 * Interrupt settings used for Battle System ATB.
 *
 * ---
 *
 * Interrupt
 * 
 *   Animation ID:
 *   - Play this animation when a unit is interrupted.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mirror Animation:
 *     - Mirror the interrupt animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mute Animation:
 *     - Mute the interrupt animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *   Text Popup:
 *   - Text used for popup when interrupts happen.
 *   - Leave empty for no popup.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *     Flash Color:
 *     - Adjust the popup's flash color.
 *     - Format: [red, green, blue, alpha]
 * 
 *     Flash Duration:
 *     - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Gauge Settings
 * ============================================================================
 *
 * General gauge settings used for ATB Gauges.
 *
 * ---
 *
 * General
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Where do you want the ATB Gauge sprite's anchor X/Y to be?
 *   - Use values between 0 and 1 to be safe.
 * 
 *   Scale:
 *   - How large/small do you want the ATB Gauge to be scaled?
 * 
 *   Offset X:
 *   Offset Y:
 *   - How many pixels to offset the ATB Gauge's X/Y by?
 *
 * ---
 *
 * AGI Gauge Rates
 * 
 *   Slow Rate:
 *   - How much should the AGI rate be at to be considered slow?
 * 
 *   Fast Rate:
 *   - How much should the AGI rate be at to be considered fast?
 *
 * ---
 *
 * Actors
 * 
 *   Show Sprite Gauges:
 *   - Show ATB Gauges over the actor sprites' heads?
 *   - Requires SV Actors to be visible.
 * 
 *   Show Status Gauges:
 *   - Show ATB Gauges in the status window?
 *   - Applies only to sideview.
 *
 * ---
 *
 * Enemies
 * 
 *   Show Sprite Gauges:
 *   - Show ATB Gauges over the enemy sprites' heads?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Field Gauge Settings
 * ============================================================================
 * 
 * The ATB Field Gauge is a large gauge placed on the screen with all of the
 * current battle's active participants shown on it. The participants are
 * represented by a marker. Each marker's position on the gauge indicates its
 * battler's ATB progress towards a turn.
 * 
 * In order for this feature to work, enable "Use Field Gauge?" in the
 * Plugin Parameters.
 *
 * ---
 *
 * General
 * 
 *   Use Field Gauge?:
 *   - This value must be set to true in order for the ATB Field Gauge
 *     to appear.
 *   - This needs to be on in order for this feature to work.
 * 
 *   Display Position:
 *   - Select where the Field Gauge will appear on the screen.
 *   - Top
 *   - Bottom
 *   - Left
 *   - Right
 * 
 *   Offset X:
 *   Offset Y:
 *   - How much to offset the X/Y coordinates by.
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the gauge when the
 *     help window is open?
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Field Gauge.
 *   - Settings may vary depending on position.
 *   - Left to Right
 *   - Right to Left
 *   - Up to Down
 *   - Down to Up
 *
 * ---
 *
 * Field Gauge Settings
 * 
 *   Gauge Skin:
 *   - Optional. Select an image to place behind the gauge.
 *   - This will be centered on the Field Gauge's position.
 * 
 *   Show Gauge?:
 *   - Decide if you want the gauge to be shown.
 * 
 *   Horizontal Length:
 *   - The length of the Field Gauge if placed horizontally.
 * 
 *   Vertical Length:
 *   - The length of the Field Gauge if placed vertically.
 * 
 *   Thickness:
 *   - The thickness of the Field Gauge for either direction.
 * 
 *   Split Location:
 *   - Determine where the gauge should split.
 *   - Use 0.00 for the start. Use 1.00 for the end.
 *
 * ---
 *
 * Marker Sprites
 * 
 *   Actor Marker Side:
 *   - Which side do you want the actor markers to appear?
 * 
 *   Enemy Marker Side:
 *   - Which side do you want the enemy markers to appear?
 * 
 *   Marker Offset:
 *   - How many pixels do you want to offset the markers by?
 * 
 *   Marker Size:
 *   - How pixels wide and tall do you want the markers to be?
 * 
 *   Marker Speed:
 *   - How many pixels maximum can a marker travel in one frame?
 * 
 *   Opacity Rate:
 *   - If a marker has to change opacity, how fast should it change by?
 *
 * ---
 *
 * Marker Border
 * 
 *   Show Border?:
 *   - Show borders for the marker sprites?
 * 
 *   Border Thickness:
 *   - How many pixels thick should the colored portion of the border be?
 * 
 *   Actors
 *   Enemies
 * 
 *     Border Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 *
 * ---
 *
 * Marker Sprites
 * 
 *   Actors
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the actor graphic.
 *     - Face Graphic - Show the actor's face.
 *     - Icon - Show a specified icon.
 *     - Sideview Actor - Show the actor's sideview battler.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for actors by default?
 * 
 *   Enemies
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the enemy graphic.
 *     - Face Graphic - Show a specified face graphic.
 *     - Icon - Show a specified icon.
 *     - Enemy - Show the enemy's graphic or sideview battler.
 * 
 *     Default Face Name:
 *     - Use this default face graphic if there is no specified face.
 * 
 *     Default Face Index:
 *     - Use this default face index if there is no specified index.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for enemies by default?
 * 
 *     Match Hue?:
 *     - Match the hue for enemy battlers?
 *     - Does not apply if there's a sideview battler.
 *
 * ---
 *
 * Marker Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the marker sprite?
 * 
 *   Font Name:
 *   - The font name used for the text of the Letter.
 *   - Leave empty to use the default game's font.
 * 
 *   Font Size:
 *   - The font size used for the text of the Letter.
 *
 * ---
 *
 * Marker Background
 * 
 *   Show Background?:
 *   - Show the background on the marker sprite?
 * 
 *   Actors
 *   Enemies
 * 
 *     Background Color 1:
 *     Background Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
 *
 * ---
 *
 * Marker Arrow
 * 
 *   Show Arrow?:
 *   - Show the arrow sprite pointing towards the Field Gauge?
 * 
 *   Arrow Skin:
 *   - Pick a window skin to draw arrows from.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gauge Color Settings
 * ============================================================================
 *
 * Gauge color settings used for ATB Gauges.
 *
 * ---
 *
 * Colors
 * 
 *   Default Color 1:
 *   Default Color 2:
 *   Full Color 1:
 *   Full Color 2:
 *   Cast Color 1:
 *   Cast Color 2:
 *   Fast Color 1:
 *   Fast Color 2:
 *   Slow Color 1:
 *   Slow Color 2:
 *   Stop Color 1:
 *   Stop Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * Options settings used for Battle System ATB.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Show ATB Gauges' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
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
 * Version 1.25: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented initial ATB Gauge settings and features from
 *    working properly. Fix made by Irina.
 * 
 * Version 1.24: December 15, 2022
 * * Bug Fixes!
 * ** The Battle Core's <JS Pre-Start Turn> and <JS Post-Start Turn> notetags
 *    were previously disabled by this plugin. They should now be working again
 *    without problems. Fix made by Olivia.
 * 
 * Version 1.23: November 10, 2022
 * * Bug Fixes!
 * ** ATB Gauges will now display for ANIMATED sideview enemies depending on
 *    the Show Enemy Gauge setting. Fix made by Olivia.
 * 
 * Version 1.22: September 29, 2022
 * * Bug Fixes!
 * ** After enemies recover from a stun, enemies no longer take an immediate
 *    action regardless of their time gauge state. Fix made by Olivia.
 * 
 * Version 1.21: August 25, 2022
 * * Bug Fixes!
 * ** Restricted enemies will no longer be action-locked after removing the
 *    restriction state. Fix made by Olivia.
 * 
 * Version 1.20: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the ATB Field Gauge faces and icons to not change
 *    properly for actors and enemies. Fix made by Olivia.
 * 
 * Version 1.19: July 21, 2022
 * * Bug Fixes!
 * ** Battlers under a "Cannot Move" state will no longer reset their ATB gauge
 *    after their "turn" comes up to update it. Fix made by Olivia.
 * 
 * Version 1.18: June 2, 2022
 * * Bug Fixes!
 * ** Notetag effect for <ATB After Gauge: x%> should now be working properly.
 *    Fix made by Olivia.
 * ** Notetag effect for <JS ATB After Gauge> should now be working properly.
 *    Fix made by Olivia.
 * 
 * Version 1.17: February 17, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.16: August 13, 2021
 * * Bug Fixes!
 * ** Crash prevented with certain Plugin Parameter combinations enabled when
 *    the ATB Gauge is filled up. Fix made by Irina.
 * 
 * Version 1.15: July 23, 2021
 * * Bug Fixes!
 * ** When enemies appear out from a troop event, Visual ATB Gauges above their
 *    heads should now appear properly for SV Enemies, too. Fix made by Irina.
 * 
 * Version 1.14: July 16, 2021
 * * Bug Fixes!
 * ** When enemies appear out from a troop event, Visual ATB Gauges above their
 *    heads should now appear properly. Fix made by Olivia.
 * 
 * Version 1.13: May 21, 2021
 * * Bug Fixes!
 * ** When slip damage is allowed to kill, dying actors will have their TPB
 *    state reset to charging in order to prevent lock-ups. Fix by Olivia.
 * 
 * Version 1.12: May 7, 2021
 * * Feature Update!
 * ** Actions with 0 or positive speed will now act immediately without
 *    allowing a single gauge tick pass through. Update made by Olivia.
 * 
 * Version 1.11: April 16, 2021
 * * Bug Fixes!
 * ** ATB Gauge visibility is now properly updated across various events such
 *    as party removal and other obstruction effects. Fix made by Olivia.
 * 
 * Version 1.10: March 12, 2021
 * * Hot Fix!
 * ** Fixed calculation errors due to field gauge. Fix made by Olivia.
 * * Feature Update!
 * ** Slight change to the way calculations are made for the bottom aligned
 *    field gauge position. Update made by Olivia.
 * 
 * Version 1.09: January 1, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.08: November 22, 2020
 * * Feature Update!
 * ** ATB Interrupts will not clear all actions (including queued ones) for
 *    mechanical compatibility. Change made by Yanfly.
 * 
 * Version 1.07: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: November 1, 2020
 * * Documentation Update!
 * ** Help file updated with new features.
 * * New Features!
 * ** New Plugin Command by Irina!
 * *** Actor: Change Field Gauge Face
 * **** Changes the faces used for the specific actor(s) on the ATB
 *      Field Gauge.
 * 
 * Version 1.05: October 25, 2020
 * * Bug Fixes!
 * ** Plugin should now be compatible with older saves when changing to a save
 *    that didn't use a Field Gauge to one that does. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated with new features.
 * * Feature Update!
 * ** <ATB Field Gauge Face: filename, index> notetag now works with actors.
 *    Update made by Irina.
 *
 * Version 1.04: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.03: October 11, 2020
 * * Documentation Update
 * ** Help file updated with new features.
 * * Feature Update!
 * ** Enemy letters are no longer drawn on the Field Gauge unless there are
 *    multiple enemies of the same type. Added by Arisu.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and Yanfly.
 * *** Plugin Parameters > Field Gauge > Offset X and Y
 * **** How much to offset the X/Y coordinates of the Field Gauge by.
 * 
 * Version 1.02: October 4, 2020
 * * New Features!
 * ** New Plugin Command added "System: ATB Field Gauge Visibility" to let you
 *    show or hide the Field Gauge during battle. Added by Arisu.
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** ATB Cast and Charge notetags no longer cause crashes. Fix made by Olivia.
 * * New Features!
 * ** New plugin parameter added by Olivia.
 * *** Plugin Parameters > Mechanics > Stuns Reset Gauge?
 * **** Should stuns reset the ATB Gauge?
 *
 * Version 1.00: September 21, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeActorIcon
 * @text Actor: Change Field Gauge Icon
 * @desc Changes the icons used for the specific actor(s) on the ATB Field Gauge.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 84
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeActorFace
 * @text Actor: Change Field Gauge Face
 * @desc Changes the faces used for the specific actor(s) on the ATB Field Gauge.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeClearActorGraphic
 * @text Actor: Clear Field Gauge Graphic
 * @desc Clears the ATB Field Gauge graphics for the actor(s).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeEnemyIcon
 * @text Enemy: Change Field Gauge Icon
 * @desc Changes the icons used for the specific enemy(ies) on the ATB Field Gauge.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 298
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeEnemyFace
 * @text Enemy: Change Field Gauge Face
 * @desc Changes the faces used for the specific enemy(ies) on the ATB Field Gauge.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Monster
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeClearEnemyGraphic
 * @text Enemy: Clear Field Gauge Graphic
 * @desc Clears the ATB Field Gauge graphics for the enemy(ies).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemFieldGaugeVisibility
 * @text System: ATB Field Gauge Visibility
 * @desc Determine the visibility of the ATB Field Gauge.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the ATB Field Gauge.
 * @default true
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
 * @param BattleSystemATB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Mechanics settings used for Battle System ATB.
 * @default {"General":"","EscapeFailPenalty:num":"-1.00","StunsResetGauge:eval":"false","JavaScript":"","InitialGaugeJS:str":"Math.random() * 0.5","TpbSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\n\\n// Process Calculation\\nlet speed = Math.sqrt(user.agi) + 1;\\n\\n// Return Value\\nreturn speed;\"","TpbBaseSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\nconst baseAgility = user.paramBasePlus(6);\\n\\n// Process Calculation\\nlet speed = Math.sqrt(baseAgility) + 1;\\n\\n// Return Value\\nreturn speed;\"","BattlerRelativeSpeedJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbSpeed()\\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\\n\\n// Process Calculation\\nlet relativeSpeed = speed / partyBaseSpeed;\\n\\n// Return Value\\nreturn relativeSpeed;\"","TpbAccelerationJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbRelativeSpeed();\\nconst referenceTime = $gameParty.tpbReferenceTime();\\n\\n// Process Calculation\\nlet acceleration = speed / referenceTime;\\n\\n// Return Value\\nreturn acceleration;\"","TpbCastTimeJS:func":"\"// Declare Constants\\nconst user = this;\\nconst actions = user._actions.filter(action => action.isValid());\\nconst items = actions.map(action => action.item());\\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\\n\\n// Process Calculation\\nlet time = Math.sqrt(delay) / user.tpbSpeed();\\n\\n// Return Value\\nreturn time;\""}
 *
 * @param Interrupt:struct
 * @text Interrupt Settings
 * @type struct<Interrupt>
 * @desc Interrupt settings used for Battle System ATB.
 * @default {"Interrupt":"","InterruptAnimationID:num":"11","InterruptMirror:eval":"false","InterruptMute:eval":"false","InterruptText:str":"INTERRUPTED!","InterruptTextColor:str":"0","InterruptFlashColor:eval":"[255, 0, 0, 160]","InterruptFlashDuration:num":"60"}
 *
 * @param Gauge:struct
 * @text General Gauge Settings
 * @type struct<Gauge>
 * @desc General gauge settings used for ATB Gauges.
 * @default {"General":"","AnchorX:num":"0.5","AnchorY:num":"1.0","Scale:num":"0.5","OffsetX:num":"0","OffsetY:num":"2","AGIGaugeRates":"","SlowRate:num":"0.60","FastRate:num":"1.40","Actors":"","ShowActorGauge:eval":"true","ShowStatusGauge:eval":"false","Enemies":"","ShowEnemyGauge:eval":"true"}
 *
 * @param FieldGauge:struct
 * @text Field Gauge Settings
 * @type struct<FieldGauge>
 * @desc Make a field-wide ATB gauge for all the battlers.
 * @default {"General":"","UseFieldGauge:eval":"false","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","RepositionTopForHelp:eval":"true","GaugeDirection:eval":"true","Gauge":"","GaugeSystemSkin:str":"","DrawGauge:eval":"true","GaugeLengthHorz:num":"600","GaugeLengthVert:num":"400","GaugeThick:num":"16","GaugeSplit:num":"0.70","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"48","Markers":"","ActorSide:eval":"true","EnemySide:eval":"false","MarkerOffset:num":"28","MarkerSize:num":"32","MarkerSpeed:num":"36","OpacityRate:num":"4","BorderThickness:num":"2","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","ActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","EnemySystemBorder:str":"","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"1","ActorBgColor2:str":"9","ActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"10","EnemyBgColor2:str":"18","EnemySystemBg:str":"","Arrow":"","ShowMarkerArrow:eval":"true","MarkerArrowWindowSkin:str":"Window"}
 *
 * @param Color:struct
 * @text Gauge Color Settings
 * @type struct<Color>
 * @desc Gauge color settings used for ATB Gauges.
 * @default {"default1:str":"26","default2:str":"27","full1:str":"14","full2:str":"6","cast1:str":"2","cast2:str":"10","fast1:str":"27","fast2:str":"18","slow1:str":"22","slow2:str":"23","stop1:str":"7","stop2:str":"8"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options settings used for Battle System ATB.
 * @default {"Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Show ATB Gauges"}
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
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param General
 * 
 * @param EscapeFailPenalty:num
 * @text Escape Fail Penalty
 * @parent General
 * @desc Gauge penalty if an escape attempt fails.
 * @default -1.00
 *
 * @param StunsResetGauge:eval
 * @text Stuns Reset Gauge?
 * @parent General
 * @type boolean
 * @on Reset Gauge
 * @off Don't Reset
 * @desc Should stuns reset the ATB Gauge?
 * @default false
 *
 * @param JavaScript
 *
 * @param InitialGaugeJS:str
 * @text JS: Initial Gauge
 * @parent JavaScript
 * @desc JavaScript code to determine how much ATB gauge to give
 * each battler at the start of battle.
 * @default Math.random() * 0.5
 *
 * @param TpbSpeedCalcJS:func
 * @text JS: Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much speed a battler has.
 * @default "// Declare Constants\nconst user = this;\n\n// Process Calculation\nlet speed = Math.sqrt(user.agi) + 1;\n\n// Return Value\nreturn speed;"
 * 
 * @param TpbBaseSpeedCalcJS:func
 * @text JS: Base Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much base speed a battler has.
 * @default "// Declare Constants\nconst user = this;\nconst baseAgility = user.paramBasePlus(6);\n\n// Process Calculation\nlet speed = Math.sqrt(baseAgility) + 1;\n\n// Return Value\nreturn speed;"
 * 
 * @param BattlerRelativeSpeedJS:func
 * @text JS: Relative Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine what is the relative speed of a battler.
 * @default "// Declare Constants\nconst user = this;\nconst speed = user.tpbSpeed()\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\n\n// Process Calculation\nlet relativeSpeed = speed / partyBaseSpeed;\n\n// Return Value\nreturn relativeSpeed;"
 * 
 * @param TpbAccelerationJS:func
 * @text JS: Acceleration
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much gauges accelerate by relative to reference time.
 * @default "// Declare Constants\nconst user = this;\nconst speed = user.tpbRelativeSpeed();\nconst referenceTime = $gameParty.tpbReferenceTime();\n\n// Process Calculation\nlet acceleration = speed / referenceTime;\n\n// Return Value\nreturn acceleration;"
 * 
 * @param TpbCastTimeJS:func
 * @text JS: Cast Time
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much cast time is used for skills/items with negative speed modifiers.
 * @default "// Declare Constants\nconst user = this;\nconst actions = user._actions.filter(action => action.isValid());\nconst items = actions.map(action => action.item());\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\n\n// Process Calculation\nlet time = Math.sqrt(delay) / user.tpbSpeed();\n\n// Return Value\nreturn time;"
 * 
 */
/* ----------------------------------------------------------------------------
 * Interrupt Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Interrupt:
 *
 * @param Interrupt
 *
 * @param InterruptAnimationID:num
 * @text Animation ID
 * @parent Interrupt
 * @type animation
 * @desc Play this animation when a unit is interrupted.
 * Requires VisuMZ_0_CoreEngine.
 * @default 11
 *
 * @param InterruptMirror:eval
 * @text Mirror Animation
 * @parent InterruptAnimationID:num
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the interrupt animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param InterruptMute:eval
 * @text Mute Animation
 * @parent InterruptAnimationID:num
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the interrupt animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param InterruptText:str
 * @text Text Popup
 * @parent Interrupt
 * @desc Text used for popup when interrupts happen.
 * Leave empty for no popup.
 * @default INTERRUPTED!
 *
 * @param InterruptTextColor:str
 * @text Text Color
 * @parent InterruptText:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param InterruptFlashColor:eval
 * @text Flash Color
 * @parent InterruptText:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param InterruptFlashDuration:num
 * @text Flash Duration
 * @parent InterruptText:str
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gauge:
 *
 * @param General
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent General
 * @desc Where do you want the ATB Gauge sprite's anchor X to be?
 * Use values between 0 and 1 to be safe.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent General
 * @desc Where do you want the ATB Gauge sprite's anchor Y to be?
 * Use values between 0 and 1 to be safe.
 * @default 1.0
 *
 * @param Scale:num
 * @text Scale
 * @parent General
 * @desc How large/small do you want the ATB Gauge to be scaled?
 * @default 0.5
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent General
 * @desc How many pixels to offset the ATB Gauge's X by?
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent General
 * @desc How many pixels to offset the ATB Gauge's Y by?
 * @default 2
 *
 * @param AGIGaugeRates
 * @text AGI Gauge Rates
 *
 * @param SlowRate:num
 * @text Slow Rate
 * @parent AGIGaugeRates
 * @desc How much should the AGI rate be at to be considered slow?
 * @default 0.60
 *
 * @param FastRate:num
 * @text Fast Rate
 * @parent AGIGaugeRates
 * @desc How much should the AGI rate be at to be considered fast?
 * @default 1.40
 *
 * @param Actors
 *
 * @param ShowActorGauge:eval
 * @text Show Sprite Gauges
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges over the actor sprites' heads?
 * Requires SV Actors to be visible.
 * @default true
 *
 * @param ShowStatusGauge:eval
 * @text Show Status Gauges
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges in the status window?
 * Applies only to sideview.
 * @default false
 *
 * @param Enemies
 *
 * @param ShowEnemyGauge:eval
 * @text Show Sprite Gauges
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges over the enemy sprites' heads?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param default1:str
 * @text Default Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param default2:str
 * @text Default Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param full1:str
 * @text Full Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param full2:str
 * @text Full Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param cast1:str
 * @text Cast Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param cast2:str
 * @text Cast Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 10
 *
 * @param fast1:str
 * @text Fast Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param fast2:str
 * @text Fast Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param slow1:str
 * @text Slow Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param slow2:str
 * @text Slow Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param stop1:str
 * @text Stop Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param stop2:str
 * @text Stop Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 8
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show ATB Gauges' option to the Options menu?
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
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show ATB Gauges
 *
 */
/* ----------------------------------------------------------------------------
 * Field Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FieldGauge:
 *
 * @param General
 *
 * @param UseFieldGauge:eval
 * @text Use Field Gauge?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc This value must be set to true in order for the ATB Field Gauge to appear.
 * @default false
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @option left
 * @option right
 * @desc Select where the Field Gauge will appear on the screen.
 * @default top
 * 
 * @param DisplayOffsetX:num
 * @text Offset X
 * @parent DisplayPosition:str
 * @desc How much to offset the X coordinate by.
 * Negative: left. Positive: right.
 * @default 0
 * 
 * @param DisplayOffsetY:num
 * @text Offset Y
 * @parent DisplayPosition:str
 * @desc How much to offset the Y coordinate by.
 * Negative: up. Positive: down.
 * @default 0
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * gauge when the help window is open?
 * @default true
 *
 * @param GaugeDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right / Up to Down
 * @off Right to Left / Down to Up
 * @desc Decide on the direction of the Field Gauge.
 * Settings may vary depending on position.
 * @default true
 *
 * @param Gauge
 * @text Field Gauge Settings
 *
 * @param GaugeSystemSkin:str
 * @text Gauge Skin
 * @parent Gauge
 * @type file
 * @dir img/system/
 * @desc Optional. Select an image to place behind the gauge.
 * This will be centered on the Field Gauge's position.
 * @default 
 *
 * @param DrawGauge:eval
 * @text Show Gauge?
 * @parent Gauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Decide if you want the gauge to be shown.
 * @default true
 *
 * @param GaugeLengthHorz:num
 * @text Horizontal Length
 * @parent Gauge
 * @type number
 * @min 10
 * @desc The length of the Field Gauge if placed horizontally.
 * @default 600
 *
 * @param GaugeLengthVert:num
 * @text Vertical Length
 * @parent Gauge
 * @type number
 * @min 10
 * @desc The length of the Field Gauge if placed vertically.
 * @default 400
 *
 * @param GaugeThick:num
 * @text Thickness
 * @parent Gauge
 * @type number
 * @min 3
 * @desc The thickness of the Field Gauge for either direction.
 * @default 16
 *
 * @param GaugeSplit:num
 * @text Split Location
 * @parent Gauge
 * @desc Determine where the gauge should split.
 * Use 0.00 for the start. Use 1.00 for the end.
 * @default 0.70
 * 
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the gauge's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the gauge's Y coordinates by this much when
 * the Help Window is visible.
 * @default 48
 *
 * @param Markers
 * @text Marker Sprites
 *
 * @param ActorSide:eval
 * @text Actor Marker Side
 * @parent Markers
 * @type boolean
 * @on Top / Right
 * @off Bottom / Left
 * @desc Which side do you want the actor markers to appear?
 * @default true
 *
 * @param EnemySide:eval
 * @text Enemy Marker Side
 * @parent Markers
 * @type boolean
 * @on Top / Right
 * @off Bottom / Left
 * @desc Which side do you want the enemy markers to appear?
 * @default false
 *
 * @param MarkerOffset:num
 * @text Marker Offset
 * @parent Markers
 * @desc How many pixels do you want to offset the markers by?
 * @default 28
 *
 * @param MarkerSize:num
 * @text Marker Size
 * @parent Markers
 * @type number
 * @min 10
 * @desc How pixels wide and tall do you want the markers to be?
 * @default 32
 *
 * @param MarkerSpeed:num
 * @text Marker Speed
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels maximum can a marker travel in one frame?
 * @default 36
 *
 * @param OpacityRate:num
 * @text Opacity Rate
 * @parent Markers
 * @type number
 * @min 1
 * @desc If a marker has to change opacity, how fast should it change by?
 * @default 4
 *
 * @param Border
 * @text Marker Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the marker sprites?
 * @default true
 *
 * @param BorderThickness:num
 * @text Border Thickness
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels thick should the colored portion of the border be?
 * @default 2
 *
 * @param BorderActor
 * @text Actors
 * @parent Border
 *
 * @param ActorBorderColor:str
 * @text Border Color
 * @parent BorderActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param BorderEnemy
 * @text Enemies
 * @parent Border
 *
 * @param EnemyBorderColor:str
 * @text Border Color
 * @parent BorderEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param Sprite
 * @text Marker Sprites
 *
 * @param ActorSprite
 * @text Actors
 * @parent Sprite
 *
 * @param ActorBattlerType:str
 * @text Sprite Type
 * @parent ActorSprite
 * @type select
 * @option Face Graphic - Show the actor's face.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Sideview Actor - Show the actor's sideview battler.
 * @value svactor
 * @desc Select the type of sprite used for the actor graphic.
 * @default face
 *
 * @param ActorBattlerIcon:num
 * @text Default Icon
 * @parent ActorSprite
 * @desc Which icon do you want to use for actors by default?
 * @default 84
 *
 * @param EnemySprite
 * @text Enemies
 * @parent Sprite
 *
 * @param EnemyBattlerType:str
 * @text Sprite Type
 * @parent EnemySprite
 * @type select
 * @option Face Graphic - Show a specified face graphic.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Enemy - Show the enemy's graphic or sideview battler.
 * @value enemy
 * @desc Select the type of sprite used for the enemy graphic.
 * @default enemy
 *
 * @param EnemyBattlerFaceName:str
 * @text Default Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc Use this default face graphic if there is no specified face.
 * @default Monster
 *
 * @param EnemyBattlerFaceIndex:num
 * @text Default Face Index
 * @parent EnemySprite
 * @type number
 * @desc Use this default face index if there is no specified index.
 * @default 1
 *
 * @param EnemyBattlerIcon:num
 * @text Default Icon
 * @parent EnemySprite
 * @desc Which icon do you want to use for enemies by default?
 * @default 298
 *
 * @param EnemyBattlerMatchHue:eval
 * @text Match Hue?
 * @parent EnemySprite
 * @type boolean
 * @on Match
 * @off Don't Match
 * @desc Match the hue for enemy battlers?
 * Does not apply if there's a sideview battler.
 * @default true
 *
 * @param Letter
 * @text Marker Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the marker sprite?
 * @default true
 *
 * @param EnemyBattlerFontFace:str
 * @text Font Name
 * @parent Letter
 * @desc The font name used for the text of the Letter.
 * Leave empty to use the default game's font.
 * @default 
 *
 * @param EnemyBattlerFontSize:num
 * @text Font Size
 * @parent Letter
 * @min 1
 * @desc The font size used for the text of the Letter.
 * @default 16
 *
 * @param Background
 * @text Marker Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the marker sprite?
 * @default true
 *
 * @param BackgroundActor
 * @text Actors
 * @parent Background
 *
 * @param ActorBgColor1:str
 * @text Background Color 1
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 1
 *
 * @param ActorBgColor2:str
 * @text Background Color 2
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 9
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param BackgroundEnemy
 * @text Enemies
 * @parent Background
 *
 * @param EnemyBgColor1:str
 * @text Background Color 1
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 10
 *
 * @param EnemyBgColor2:str
 * @text Background Color 2
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 * @param Arrow
 * @text Marker Arrow
 *
 * @param ShowMarkerArrow:eval
 * @text Show Arrow?
 * @parent Arrow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the arrow sprite pointing towards the Field Gauge?
 * @default true
 *
 * @param MarkerArrowWindowSkin:str
 * @text Arrow Skin
 * @parent Arrow
 * @type file
 * @dir img/system/
 * @desc Pick a window skin to draw arrows from.
 * @default Window
 *
 */
//=============================================================================

const _0x3db51b=_0x20f9;function _0x20f9(_0x3362ab,_0x377cdc){const _0x372ab8=_0x372a();return _0x20f9=function(_0x20f952,_0x3fd4fe){_0x20f952=_0x20f952-0xfe;let _0x3a752e=_0x372ab8[_0x20f952];return _0x3a752e;},_0x20f9(_0x3362ab,_0x377cdc);}(function(_0x93c9c6,_0x2f0e13){const _0xc0a7e1=_0x20f9,_0x33f853=_0x93c9c6();while(!![]){try{const _0x27b519=parseInt(_0xc0a7e1(0x10b))/0x1*(parseInt(_0xc0a7e1(0x2ca))/0x2)+parseInt(_0xc0a7e1(0x126))/0x3+parseInt(_0xc0a7e1(0x249))/0x4*(parseInt(_0xc0a7e1(0x187))/0x5)+-parseInt(_0xc0a7e1(0x299))/0x6*(parseInt(_0xc0a7e1(0x220))/0x7)+-parseInt(_0xc0a7e1(0x17e))/0x8*(parseInt(_0xc0a7e1(0x211))/0x9)+parseInt(_0xc0a7e1(0x20c))/0xa*(parseInt(_0xc0a7e1(0x29d))/0xb)+-parseInt(_0xc0a7e1(0x1f7))/0xc;if(_0x27b519===_0x2f0e13)break;else _0x33f853['push'](_0x33f853['shift']());}catch(_0x300daf){_0x33f853['push'](_0x33f853['shift']());}}}(_0x372a,0x592e1));var label=_0x3db51b(0x135),tier=tier||0x0,dependencies=[_0x3db51b(0x2d6)],pluginData=$plugins[_0x3db51b(0x1d3)](function(_0x5dd8c4){const _0x11befb=_0x3db51b;return _0x5dd8c4['status']&&_0x5dd8c4[_0x11befb(0x198)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x3db51b(0x24c)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x3db51b(0x132)]=function(_0x251a3c,_0x1c87e4){const _0x2627b6=_0x3db51b;for(const _0x38fba8 in _0x1c87e4){if(_0x38fba8[_0x2627b6(0x259)](/(.*):(.*)/i)){const _0x54bdbc=String(RegExp['$1']),_0x38d189=String(RegExp['$2'])[_0x2627b6(0x168)]()['trim']();let _0x45a3ff,_0x2b2b2a,_0x49e53b;switch(_0x38d189){case _0x2627b6(0x1cc):_0x45a3ff=_0x1c87e4[_0x38fba8]!==''?Number(_0x1c87e4[_0x38fba8]):0x0;break;case _0x2627b6(0x2c6):_0x2b2b2a=_0x1c87e4[_0x38fba8]!==''?JSON[_0x2627b6(0x24d)](_0x1c87e4[_0x38fba8]):[],_0x45a3ff=_0x2b2b2a[_0x2627b6(0x1ff)](_0xfc59cb=>Number(_0xfc59cb));break;case'EVAL':_0x45a3ff=_0x1c87e4[_0x38fba8]!==''?eval(_0x1c87e4[_0x38fba8]):null;break;case _0x2627b6(0x179):_0x2b2b2a=_0x1c87e4[_0x38fba8]!==''?JSON[_0x2627b6(0x24d)](_0x1c87e4[_0x38fba8]):[],_0x45a3ff=_0x2b2b2a[_0x2627b6(0x1ff)](_0x3b983c=>eval(_0x3b983c));break;case _0x2627b6(0x2af):_0x45a3ff=_0x1c87e4[_0x38fba8]!==''?JSON[_0x2627b6(0x24d)](_0x1c87e4[_0x38fba8]):'';break;case'ARRAYJSON':_0x2b2b2a=_0x1c87e4[_0x38fba8]!==''?JSON['parse'](_0x1c87e4[_0x38fba8]):[],_0x45a3ff=_0x2b2b2a[_0x2627b6(0x1ff)](_0xc0db5b=>JSON['parse'](_0xc0db5b));break;case'FUNC':_0x45a3ff=_0x1c87e4[_0x38fba8]!==''?new Function(JSON['parse'](_0x1c87e4[_0x38fba8])):new Function(_0x2627b6(0x1f3));break;case'ARRAYFUNC':_0x2b2b2a=_0x1c87e4[_0x38fba8]!==''?JSON[_0x2627b6(0x24d)](_0x1c87e4[_0x38fba8]):[],_0x45a3ff=_0x2b2b2a[_0x2627b6(0x1ff)](_0x398f76=>new Function(JSON[_0x2627b6(0x24d)](_0x398f76)));break;case'STR':_0x45a3ff=_0x1c87e4[_0x38fba8]!==''?String(_0x1c87e4[_0x38fba8]):'';break;case'ARRAYSTR':_0x2b2b2a=_0x1c87e4[_0x38fba8]!==''?JSON[_0x2627b6(0x24d)](_0x1c87e4[_0x38fba8]):[],_0x45a3ff=_0x2b2b2a[_0x2627b6(0x1ff)](_0x1e5b75=>String(_0x1e5b75));break;case _0x2627b6(0x20b):_0x49e53b=_0x1c87e4[_0x38fba8]!==''?JSON[_0x2627b6(0x24d)](_0x1c87e4[_0x38fba8]):{},_0x45a3ff=VisuMZ[_0x2627b6(0x132)]({},_0x49e53b);break;case _0x2627b6(0x14b):_0x2b2b2a=_0x1c87e4[_0x38fba8]!==''?JSON[_0x2627b6(0x24d)](_0x1c87e4[_0x38fba8]):[],_0x45a3ff=_0x2b2b2a[_0x2627b6(0x1ff)](_0x4ae7d9=>VisuMZ[_0x2627b6(0x132)]({},JSON[_0x2627b6(0x24d)](_0x4ae7d9)));break;default:continue;}_0x251a3c[_0x54bdbc]=_0x45a3ff;}}return _0x251a3c;},(_0x111c8a=>{const _0x4db398=_0x3db51b,_0x328bba=_0x111c8a[_0x4db398(0x1f9)];for(const _0x217194 of dependencies){if(!Imported[_0x217194]){alert(_0x4db398(0x271)['format'](_0x328bba,_0x217194)),SceneManager[_0x4db398(0x13f)]();break;}}const _0x3d9bce=_0x111c8a[_0x4db398(0x198)];if(_0x3d9bce['match'](/\[Version[ ](.*?)\]/i)){const _0x5564dd=Number(RegExp['$1']);_0x5564dd!==VisuMZ[label][_0x4db398(0x221)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x4db398(0x14f)](_0x328bba,_0x5564dd)),SceneManager['exit']());}if(_0x3d9bce[_0x4db398(0x259)](/\[Tier[ ](\d+)\]/i)){const _0x2d673c=Number(RegExp['$1']);_0x2d673c<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x328bba,_0x2d673c,tier)),SceneManager[_0x4db398(0x13f)]()):tier=Math[_0x4db398(0x275)](_0x2d673c,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x4db398(0x24c)],_0x111c8a[_0x4db398(0x188)]);})(pluginData),PluginManager[_0x3db51b(0x1bd)](pluginData['name'],'FieldGaugeActorIcon',_0x1f2000=>{const _0x231d7a=_0x3db51b;VisuMZ[_0x231d7a(0x132)](_0x1f2000,_0x1f2000);const _0x4c02b5=_0x1f2000[_0x231d7a(0x296)],_0x53e8f3=_0x1f2000[_0x231d7a(0x100)];for(const _0x3d8ee2 of _0x4c02b5){const _0x1470e7=$gameActors['actor'](_0x3d8ee2);if(!_0x1470e7)continue;_0x1470e7['_fieldAtbGaugeGraphicType']=_0x231d7a(0xfe),_0x1470e7[_0x231d7a(0x1e2)]=_0x53e8f3;}}),PluginManager[_0x3db51b(0x1bd)](pluginData[_0x3db51b(0x1f9)],_0x3db51b(0x2cc),_0x5d0e6c=>{const _0x326329=_0x3db51b;VisuMZ['ConvertParams'](_0x5d0e6c,_0x5d0e6c);const _0xf91dac=_0x5d0e6c[_0x326329(0x296)],_0x3125c2=_0x5d0e6c[_0x326329(0x2b7)],_0x491bd5=_0x5d0e6c[_0x326329(0x1b3)];for(const _0x51988b of _0xf91dac){const _0x30ba21=$gameActors[_0x326329(0x1ed)](_0x51988b);if(!_0x30ba21)continue;_0x30ba21[_0x326329(0x1f8)]=_0x326329(0x12c),_0x30ba21[_0x326329(0x1ac)]=_0x3125c2,_0x30ba21[_0x326329(0x105)]=_0x491bd5;}}),PluginManager['registerCommand'](pluginData[_0x3db51b(0x1f9)],_0x3db51b(0x2cd),_0x2563e2=>{const _0x79cb2f=_0x3db51b;VisuMZ[_0x79cb2f(0x132)](_0x2563e2,_0x2563e2);const _0x17a0d0=_0x2563e2[_0x79cb2f(0x296)];for(const _0x4dd4ea of _0x17a0d0){const _0x4e5bc1=$gameActors['actor'](_0x4dd4ea);if(!_0x4e5bc1)continue;_0x4e5bc1[_0x79cb2f(0x1de)]();}}),PluginManager[_0x3db51b(0x1bd)](pluginData[_0x3db51b(0x1f9)],'FieldGaugeEnemyIcon',_0x8f2dd8=>{const _0x159555=_0x3db51b;VisuMZ[_0x159555(0x132)](_0x8f2dd8,_0x8f2dd8);const _0x5225ac=_0x8f2dd8[_0x159555(0x250)],_0x212b00=_0x8f2dd8['IconIndex'];for(const _0x4ad0dd of _0x5225ac){const _0x464a4e=$gameTroop[_0x159555(0x227)]()[_0x4ad0dd];if(!_0x464a4e)continue;_0x464a4e[_0x159555(0x1f8)]='icon',_0x464a4e['_fieldAtbGaugeIconIndex']=_0x212b00;}}),PluginManager['registerCommand'](pluginData['name'],_0x3db51b(0x171),_0x42de29=>{const _0x2c8534=_0x3db51b;VisuMZ[_0x2c8534(0x132)](_0x42de29,_0x42de29);const _0x166ac6=_0x42de29[_0x2c8534(0x250)],_0x45cc47=_0x42de29['FaceName'],_0x7ba1b3=_0x42de29['FaceIndex'];for(const _0x312fd6 of _0x166ac6){const _0x742d80=$gameTroop['members']()[_0x312fd6];if(!_0x742d80)continue;_0x742d80[_0x2c8534(0x1f8)]=_0x2c8534(0x12c),_0x742d80['_fieldAtbGaugeFaceName']=_0x45cc47,_0x742d80[_0x2c8534(0x105)]=_0x7ba1b3;}}),PluginManager[_0x3db51b(0x1bd)](pluginData[_0x3db51b(0x1f9)],_0x3db51b(0x286),_0x456221=>{const _0x4e3dc5=_0x3db51b;VisuMZ[_0x4e3dc5(0x132)](_0x456221,_0x456221);const _0x16024d=_0x456221['Enemies'];for(const _0x51ff0c of _0x16024d){const _0x1c675d=$gameTroop[_0x4e3dc5(0x227)]()[_0x51ff0c];if(!_0x1c675d)continue;_0x1c675d[_0x4e3dc5(0x1de)]();}}),PluginManager[_0x3db51b(0x1bd)](pluginData[_0x3db51b(0x1f9)],'SystemFieldGaugeVisibility',_0x4d8cb9=>{const _0x29f5db=_0x3db51b;VisuMZ[_0x29f5db(0x132)](_0x4d8cb9,_0x4d8cb9);const _0x5a9eae=_0x4d8cb9[_0x29f5db(0x2ac)];$gameSystem[_0x29f5db(0x115)](_0x5a9eae);}),VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x131)]=Scene_Boot[_0x3db51b(0x143)][_0x3db51b(0x25e)],Scene_Boot['prototype'][_0x3db51b(0x25e)]=function(){const _0x54ec92=_0x3db51b;this['process_VisuMZ_BattleSystemATB_CreateRegExp'](),VisuMZ[_0x54ec92(0x135)][_0x54ec92(0x131)]['call'](this),this[_0x54ec92(0x114)]();},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x255)]={},Scene_Boot[_0x3db51b(0x143)][_0x3db51b(0x24e)]=function(){const _0x519a36=_0x3db51b,_0x1c66a8=VisuMZ[_0x519a36(0x159)][_0x519a36(0x255)],_0xaf0456=_0x519a36(0x27c),_0x46514f=[_0x519a36(0x27b),_0x519a36(0x110),_0x519a36(0x2c3)];for(const _0x4c1e9e of _0x46514f){const _0x6eb68a=_0xaf0456[_0x519a36(0x14f)](_0x4c1e9e[_0x519a36(0x168)]()[_0x519a36(0x1b9)](),'(?:ATB|TPB)',_0x519a36(0x11e)),_0x529a67=new RegExp(_0x6eb68a,'i');VisuMZ['BattleSystemATB'][_0x519a36(0x255)][_0x4c1e9e]=_0x529a67;}},Scene_Boot[_0x3db51b(0x143)][_0x3db51b(0x114)]=function(){const _0x37743c=_0x3db51b;if(VisuMZ[_0x37743c(0x258)])return;const _0x23b5fc=$dataSkills[_0x37743c(0x190)]($dataItems);for(const _0x69a298 of _0x23b5fc){if(!_0x69a298)continue;VisuMZ[_0x37743c(0x135)]['Parse_Notetags_CreateJS'](_0x69a298);}},VisuMZ[_0x3db51b(0x135)]['ParseSkillNotetags']=VisuMZ[_0x3db51b(0x2c8)],VisuMZ[_0x3db51b(0x2c8)]=function(_0x3e5ec4){const _0x2a3609=_0x3db51b;VisuMZ[_0x2a3609(0x135)][_0x2a3609(0x2c8)]['call'](this,_0x3e5ec4),VisuMZ[_0x2a3609(0x135)][_0x2a3609(0x1b5)](_0x3e5ec4);},VisuMZ[_0x3db51b(0x135)]['ParseItemNotetags']=VisuMZ[_0x3db51b(0x125)],VisuMZ[_0x3db51b(0x125)]=function(_0x684d2f){const _0x1f07a2=_0x3db51b;VisuMZ[_0x1f07a2(0x135)][_0x1f07a2(0x125)][_0x1f07a2(0x2c1)](this,_0x684d2f),VisuMZ[_0x1f07a2(0x135)]['Parse_Notetags_CreateJS'](_0x684d2f);},VisuMZ['BattleSystemATB'][_0x3db51b(0x1b5)]=function(_0x8ee431){const _0x27aac7=_0x3db51b,_0x9baf4e=[_0x27aac7(0x27b),_0x27aac7(0x110),_0x27aac7(0x2c3)];for(const _0x1cbe76 of _0x9baf4e){VisuMZ['BattleSystemATB']['createJS'](_0x8ee431,_0x1cbe76);}},VisuMZ[_0x3db51b(0x135)]['JS']={},VisuMZ[_0x3db51b(0x135)]['createJS']=function(_0x2e930c,_0xdf0826){const _0x2bbb95=_0x3db51b,_0x436c1f=_0x2e930c['note'];if(_0x436c1f[_0x2bbb95(0x259)](VisuMZ[_0x2bbb95(0x135)]['RegExp'][_0xdf0826])){const _0x211e96=String(RegExp['$1']),_0x2fd0a7=_0x2bbb95(0x139)[_0x2bbb95(0x14f)](_0x211e96,_0xdf0826),_0xee93bb=VisuMZ['BattleSystemATB'][_0x2bbb95(0x223)](_0x2e930c,_0xdf0826);VisuMZ[_0x2bbb95(0x135)]['JS'][_0xee93bb]=new Function(_0x2fd0a7);}},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x223)]=function(_0x1a855c,_0x4b78b1){const _0x405a8c=_0x3db51b;if(VisuMZ['createKeyJS'])return VisuMZ[_0x405a8c(0x223)](_0x1a855c,_0x4b78b1);let _0x3bef50='';if($dataActors['includes'](_0x1a855c))_0x3bef50='Actor-%1-%2'[_0x405a8c(0x14f)](_0x1a855c['id'],_0x4b78b1);if($dataClasses[_0x405a8c(0x281)](_0x1a855c))_0x3bef50=_0x405a8c(0x17b)[_0x405a8c(0x14f)](_0x1a855c['id'],_0x4b78b1);if($dataSkills[_0x405a8c(0x281)](_0x1a855c))_0x3bef50=_0x405a8c(0x191)['format'](_0x1a855c['id'],_0x4b78b1);if($dataItems[_0x405a8c(0x281)](_0x1a855c))_0x3bef50=_0x405a8c(0x2d4)['format'](_0x1a855c['id'],_0x4b78b1);if($dataWeapons['includes'](_0x1a855c))_0x3bef50='Weapon-%1-%2'[_0x405a8c(0x14f)](_0x1a855c['id'],_0x4b78b1);if($dataArmors[_0x405a8c(0x281)](_0x1a855c))_0x3bef50=_0x405a8c(0x222)[_0x405a8c(0x14f)](_0x1a855c['id'],_0x4b78b1);if($dataEnemies[_0x405a8c(0x281)](_0x1a855c))_0x3bef50=_0x405a8c(0x19b)[_0x405a8c(0x14f)](_0x1a855c['id'],_0x4b78b1);if($dataStates[_0x405a8c(0x281)](_0x1a855c))_0x3bef50='State-%1-%2'['format'](_0x1a855c['id'],_0x4b78b1);return _0x3bef50;},ConfigManager['visualAtbGauge']=!![],VisuMZ['BattleSystemATB'][_0x3db51b(0x1bb)]=ConfigManager[_0x3db51b(0x200)],ConfigManager[_0x3db51b(0x200)]=function(){const _0x141070=_0x3db51b,_0x23025d=VisuMZ[_0x141070(0x135)][_0x141070(0x1bb)][_0x141070(0x2c1)](this);return _0x23025d[_0x141070(0x182)]=this[_0x141070(0x182)],_0x23025d;},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x2c7)]=ConfigManager[_0x3db51b(0x26c)],ConfigManager[_0x3db51b(0x26c)]=function(_0x2c203d){const _0x2cd90d=_0x3db51b;VisuMZ[_0x2cd90d(0x135)]['ConfigManager_applyData'][_0x2cd90d(0x2c1)](this,_0x2c203d),_0x2cd90d(0x182)in _0x2c203d?this[_0x2cd90d(0x182)]=_0x2c203d[_0x2cd90d(0x182)]:this[_0x2cd90d(0x182)]=!![];},ImageManager['svActorHorzCells']=ImageManager[_0x3db51b(0x280)]||0x9,ImageManager[_0x3db51b(0x111)]=ImageManager[_0x3db51b(0x111)]||0x6,TextManager[_0x3db51b(0x182)]=VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x24c)]['Options']['Name'],VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x2ab)]=ColorManager['loadWindowskin'],ColorManager[_0x3db51b(0x1bc)]=function(){const _0x2bf771=_0x3db51b;VisuMZ[_0x2bf771(0x135)][_0x2bf771(0x2ab)]['call'](this),this[_0x2bf771(0x1e6)][_0x2bf771(0x297)](this[_0x2bf771(0x2b3)]['bind'](this));},ColorManager[_0x3db51b(0x29c)]=function(_0x169b38){const _0x3b6636=_0x3db51b;return _0x169b38=String(_0x169b38),_0x169b38[_0x3b6636(0x259)](/#(.*)/i)?'#%1'[_0x3b6636(0x14f)](String(RegExp['$1'])):this[_0x3b6636(0x16e)](Number(_0x169b38));},ColorManager[_0x3db51b(0x2b3)]=function(){const _0x529005=_0x3db51b,_0x33dd47=[_0x529005(0x14d),_0x529005(0x13e),_0x529005(0x1c4),_0x529005(0x27a),_0x529005(0x24f),_0x529005(0x193)],_0x2cdef6=VisuMZ[_0x529005(0x135)][_0x529005(0x24c)][_0x529005(0x22c)];this['_atbColors']={};for(const _0x1cc836 of _0x33dd47){for(let _0x17a2d9=0x1;_0x17a2d9<=0x2;_0x17a2d9++){const _0x5834bd=_0x1cc836+_0x17a2d9;this[_0x529005(0x1f5)][_0x5834bd]=this['getColor'](_0x2cdef6[_0x5834bd]);}}},ColorManager[_0x3db51b(0x2d2)]=function(_0x9b4007){const _0x17f88f=_0x3db51b;if(this[_0x17f88f(0x1f5)]===undefined)this['setupBattleSystemATBColors']();return this['_atbColors'][_0x9b4007]||_0x17f88f(0x27f);},SceneManager[_0x3db51b(0x10c)]=function(){const _0x11e115=_0x3db51b;return this['_scene']&&this['_scene'][_0x11e115(0x106)]===Scene_Battle;},BattleManager['isATB']=function(){const _0x24826d=_0x3db51b;if(Imported[_0x24826d(0x2b5)]&&this[_0x24826d(0x1a9)]())return![];return this[_0x24826d(0x176)]();},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x1f1)]=BattleManager[_0x3db51b(0x25b)],BattleManager[_0x3db51b(0x25b)]=function(){const _0x92136=_0x3db51b;if(!this[_0x92136(0x176)]())return![];else return ConfigManager&&ConfigManager[_0x92136(0x264)]!==undefined?ConfigManager[_0x92136(0x264)]:VisuMZ[_0x92136(0x135)]['BattleManager_isActiveTpb']['call'](this);},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x2ae)]=Game_System['prototype'][_0x3db51b(0x241)],Game_System['prototype'][_0x3db51b(0x241)]=function(){const _0x1be321=_0x3db51b;VisuMZ[_0x1be321(0x135)][_0x1be321(0x2ae)]['call'](this),this[_0x1be321(0x172)]();},Game_System[_0x3db51b(0x143)][_0x3db51b(0x172)]=function(){const _0x449ee1=_0x3db51b;this[_0x449ee1(0x142)]=!![];},Game_System[_0x3db51b(0x143)][_0x3db51b(0x216)]=function(){const _0x598d16=_0x3db51b;return this['_atbFieldGaugeVisible']===undefined&&this[_0x598d16(0x172)](),this[_0x598d16(0x142)];},Game_System[_0x3db51b(0x143)]['setBattleSystemATBFieldGaugeVisible']=function(_0x35f51d){const _0x1267a7=_0x3db51b;this[_0x1267a7(0x142)]===undefined&&this[_0x1267a7(0x172)](),this[_0x1267a7(0x142)]=_0x35f51d;},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x287)]=Game_Action['prototype'][_0x3db51b(0x19e)],Game_Action['prototype'][_0x3db51b(0x19e)]=function(_0x1935de){const _0x3b6ab5=_0x3db51b;VisuMZ[_0x3b6ab5(0x135)][_0x3b6ab5(0x287)][_0x3b6ab5(0x2c1)](this,_0x1935de),this[_0x3b6ab5(0x244)](_0x1935de);},Game_Action['prototype'][_0x3db51b(0x244)]=function(_0x3bed1c){const _0x2340e9=_0x3db51b;if(!SceneManager[_0x2340e9(0x10c)]())return;if(!BattleManager[_0x2340e9(0x117)]())return;if(this['item']())this[_0x2340e9(0x2b4)](_0x3bed1c);},Game_Action[_0x3db51b(0x143)]['applyItemBattleSystemATBUserEffect']=function(_0x512702){const _0xf927b0=_0x3db51b,_0x54ed8f=this['item']()[_0xf927b0(0x1e9)];if(_0x512702[_0xf927b0(0x169)]()){const _0x2e8f57=VisuMZ['BattleSystemATB'][_0xf927b0(0x223)](this['item'](),_0xf927b0(0x27b));if(VisuMZ['BattleSystemATB']['JS'][_0x2e8f57]){const _0x355182=VisuMZ['BattleSystemATB']['JS'][_0x2e8f57][_0xf927b0(0x2c1)](this,this[_0xf927b0(0x13c)](),_0x512702);_0x512702['setAtbChargeTime'](_0x355182);}_0x54ed8f[_0xf927b0(0x259)](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0x512702['setAtbChargeTime'](Number(RegExp['$1'])*0.01),_0x54ed8f[_0xf927b0(0x259)](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x512702[_0xf927b0(0x2a2)](Number(RegExp['$1'])*0.01);}else{if(_0x512702[_0xf927b0(0x12d)]()){const _0x5db59d=VisuMZ[_0xf927b0(0x135)]['createKeyJS'](this[_0xf927b0(0x251)](),'Cast');if(VisuMZ[_0xf927b0(0x135)]['JS'][_0x5db59d]){const _0x47b21c=VisuMZ['BattleSystemATB']['JS'][_0x5db59d][_0xf927b0(0x2c1)](this,this[_0xf927b0(0x13c)](),_0x512702);_0x512702[_0xf927b0(0x265)](_0x47b21c);}_0x54ed8f[_0xf927b0(0x259)](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0x512702[_0xf927b0(0x265)](Number(RegExp['$1'])*0.01),_0x54ed8f[_0xf927b0(0x259)](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x512702['changeAtbCastTime'](Number(RegExp['$1'])*0.01),_0x54ed8f[_0xf927b0(0x259)](/<(?:ATB|TPB) INTERRUPT>/i)&&_0x512702[_0xf927b0(0x11d)]();}}},VisuMZ['BattleSystemATB'][_0x3db51b(0x270)]=Game_Action[_0x3db51b(0x143)]['applyGlobal'],Game_Action['prototype'][_0x3db51b(0x1dd)]=function(){const _0x520fb1=_0x3db51b;VisuMZ[_0x520fb1(0x135)][_0x520fb1(0x270)][_0x520fb1(0x2c1)](this),this['applyGlobalBattleSystemATBEffects']();},Game_Action['prototype']['applyGlobalBattleSystemATBEffects']=function(){const _0x44475d=_0x3db51b;if(!this[_0x44475d(0x251)]())return;if(!BattleManager[_0x44475d(0x117)]())return;const _0x4f319a=this[_0x44475d(0x251)]()['note'];let _0x363ef7=0x0;this[_0x44475d(0x1e0)]&&(_0x363ef7=this[_0x44475d(0x13c)]()[_0x44475d(0x239)]);const _0x4927c9=VisuMZ['BattleSystemATB'][_0x44475d(0x223)](this[_0x44475d(0x251)](),_0x44475d(0x2c3));VisuMZ[_0x44475d(0x135)]['JS'][_0x4927c9]&&(_0x363ef7=VisuMZ[_0x44475d(0x135)]['JS'][_0x4927c9][_0x44475d(0x2c1)](this,this[_0x44475d(0x13c)](),this[_0x44475d(0x13c)]()));let _0x3650e6=this[_0x44475d(0x251)]()[_0x44475d(0x2b6)]>0x0?this[_0x44475d(0x251)]()[_0x44475d(0x2b6)]:0x0;if(this[_0x44475d(0x1ce)]())_0x3650e6+=this[_0x44475d(0x13c)]()[_0x44475d(0x121)]();_0x363ef7+=(_0x3650e6/0xfa0)[_0x44475d(0x2bb)](0x0,0x1);this[_0x44475d(0x251)]()[_0x44475d(0x1e9)]['match'](/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&(_0x363ef7=Number(RegExp['$1'])*0.01);const _0x24bee0=this[_0x44475d(0x13c)]()[_0x44475d(0x167)]()[_0x44475d(0x190)](this[_0x44475d(0x13c)]()[_0x44475d(0x1a2)]()),_0x329ce1=/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i,_0x16b443=_0x24bee0[_0x44475d(0x1ff)](_0x3413f6=>_0x3413f6&&_0x3413f6['note'][_0x44475d(0x259)](_0x329ce1)?Number(RegExp['$1'])*0.01:0x0);_0x363ef7=_0x16b443['reduce']((_0x34b3ed,_0x102f5a)=>_0x34b3ed+_0x102f5a,_0x363ef7),this[_0x44475d(0x251)]()['note'][_0x44475d(0x259)](/<(?:ATB|TPB) INSTANT>/i)&&(_0x363ef7=0xa),this['subject']()[_0x44475d(0x20f)](_0x363ef7);},Game_BattlerBase['prototype'][_0x3db51b(0x149)]=function(_0x210326){const _0x5b60ee=_0x3db51b;this['_tpbChargeTime']=_0x210326[_0x5b60ee(0x2bb)](0x0,0x1);},Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x2a2)]=function(_0x2056d8){const _0x24ff5a=_0x3db51b;this[_0x24ff5a(0x149)](this[_0x24ff5a(0x239)]+_0x2056d8);},Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x265)]=function(_0x43eb51){const _0xc0b403=_0x3db51b,_0x3f7a9b=this[_0xc0b403(0x194)]();this['_tpbCastTime']=(_0x3f7a9b*_0x43eb51)['clamp'](0x0,_0x3f7a9b);},Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x119)]=function(_0x53ece9){const _0x12fc64=_0x3db51b,_0xfb3a30=this[_0x12fc64(0x194)](),_0x236c99=_0xfb3a30*_0x53ece9;this[_0x12fc64(0x120)]=(this[_0x12fc64(0x120)]+_0x236c99)[_0x12fc64(0x2bb)](0x0,_0xfb3a30);},VisuMZ[_0x3db51b(0x135)]['Game_BattlerBase_die']=Game_BattlerBase[_0x3db51b(0x143)]['die'],Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x212)]=function(){const _0x21a501=_0x3db51b;VisuMZ['BattleSystemATB']['Game_BattlerBase_die']['call'](this),BattleManager[_0x21a501(0x176)]()&&this[_0x21a501(0x2a0)]();},VisuMZ[_0x3db51b(0x135)]['Game_BattlerBase_revive']=Game_BattlerBase[_0x3db51b(0x143)]['revive'],Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x2b9)]=function(){const _0x1dbe60=_0x3db51b;VisuMZ[_0x1dbe60(0x135)][_0x1dbe60(0x26b)]['call'](this),BattleManager[_0x1dbe60(0x176)]()&&this[_0x1dbe60(0x2a0)]();},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x2cf)]=Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x148)],Game_Battler['prototype']['initTpbChargeTime']=function(_0x1b768e){const _0x1814ee=_0x3db51b;BattleManager[_0x1814ee(0x117)]()?this[_0x1814ee(0x2a7)](_0x1b768e):VisuMZ[_0x1814ee(0x135)][_0x1814ee(0x2cf)]['call'](this,_0x1b768e);},Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x2a7)]=function(_0x1b5cb2){const _0x1909ed=_0x3db51b,_0x56a215=VisuMZ[_0x1909ed(0x135)][_0x1909ed(0x24c)][_0x1909ed(0x1ef)];let _0x12b20b=this[_0x1909ed(0x154)]()*eval(_0x56a215['InitialGaugeJS']);const _0x1cdc33=this[_0x1909ed(0x167)]()[_0x1909ed(0x190)](this[_0x1909ed(0x1a2)]()),_0x208b84=/<(?:ATB|TPB) (?:BATTLE START|START) (?:GAUGE|TIME|SPEED): ([\+\-]\d+)([%％])>/i,_0x6816aa=_0x1cdc33[_0x1909ed(0x1ff)](_0x2ff74d=>_0x2ff74d&&_0x2ff74d[_0x1909ed(0x1e9)][_0x1909ed(0x259)](_0x208b84)?Number(RegExp['$1'])*0.01:0x0);_0x12b20b=_0x6816aa[_0x1909ed(0x14e)]((_0x4bba36,_0x3b9c45)=>_0x4bba36+_0x3b9c45,_0x12b20b),this[_0x1909ed(0x2bf)]=_0x1909ed(0xff),this['_tpbChargeTime']=(_0x1b5cb2?0x1:_0x12b20b)[_0x1909ed(0x2bb)](0x0,0x1),this[_0x1909ed(0x290)]()&&(this['_tpbChargeTime']=0x0);},Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x169)]=function(){const _0x3f95b2=_0x3db51b;return this[_0x3f95b2(0x2bf)]==='charging';},Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x12d)]=function(){const _0x767e45=_0x3db51b;return this[_0x767e45(0x2bf)]==='casting'&&this[_0x767e45(0x1c8)]()&&this[_0x767e45(0x1c8)]()[_0x767e45(0x251)]()&&this[_0x767e45(0x1c8)]()['item']()['speed']<0x0;},Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x16b)]=function(){const _0x5017da=_0x3db51b;return this['isAtbCastingState']()?this[_0x5017da(0x120)]/this[_0x5017da(0x194)]():0x0;},Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x262)]=function(){const _0x16f974=_0x3db51b;return!this[_0x16f974(0x108)]();},Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x20f)]=function(_0x42e876){const _0x22836f=_0x3db51b;this[_0x22836f(0x28b)]=_0x42e876;},VisuMZ['BattleSystemATB'][_0x3db51b(0x27e)]=BattleManager[_0x3db51b(0x28a)],BattleManager[_0x3db51b(0x28a)]=function(_0x319223){const _0x373410=_0x3db51b;this[_0x373410(0x176)]()&&!_0x319223[_0x373410(0x108)]()&&(_0x319223[_0x373410(0x112)]=!![]),VisuMZ['BattleSystemATB'][_0x373410(0x27e)][_0x373410(0x2c1)](this,_0x319223),this['isTpb']()&&!_0x319223[_0x373410(0x108)]()&&(_0x319223[_0x373410(0x112)]=![]);},VisuMZ[_0x3db51b(0x135)]['Game_Battler_clearTpbChargeTime']=Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x2a0)],Game_Battler[_0x3db51b(0x143)]['clearTpbChargeTime']=function(){const _0x1176b5=_0x3db51b;if(this[_0x1176b5(0x112)])return;VisuMZ[_0x1176b5(0x135)]['Game_Battler_clearTpbChargeTime'][_0x1176b5(0x2c1)](this),this['_tpbChargeTime']+=this[_0x1176b5(0x28b)]||0x0;},Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x11d)]=function(){const _0x3e6557=_0x3db51b;if(!this[_0x3e6557(0x12d)]())return;if(!this[_0x3e6557(0x1c8)]())return;if(!this[_0x3e6557(0x1c8)]()[_0x3e6557(0x251)]())return;if(this[_0x3e6557(0x1c8)]()[_0x3e6557(0x251)]()['note']['match'](/<(?:ATB|TPB) CANNOT (?:BE INTERRUPTED|INTERRUPT)>/i))return;this[_0x3e6557(0x27d)](),this[_0x3e6557(0x2a0)](),this[_0x3e6557(0x120)]=0x0,this[_0x3e6557(0x16a)]();},Game_Battler[_0x3db51b(0x143)]['onAtbInterrupt']=function(){const _0x7406fa=_0x3db51b,_0x1c2590=VisuMZ['BattleSystemATB'][_0x7406fa(0x24c)][_0x7406fa(0x161)];if(Imported[_0x7406fa(0x1b2)]){const _0x4a3acb=_0x1c2590[_0x7406fa(0x20a)],_0x11c2d0=_0x1c2590['InterruptMirror'],_0x5203d2=_0x1c2590[_0x7406fa(0x21e)];$gameTemp[_0x7406fa(0x15a)]([this],_0x4a3acb,_0x11c2d0,_0x5203d2);}if(this[_0x7406fa(0x1e3)]()&&_0x1c2590[_0x7406fa(0x1a6)][_0x7406fa(0x109)]>0x0){const _0x46cd1e=_0x1c2590[_0x7406fa(0x1a6)],_0x240bb4={'textColor':ColorManager[_0x7406fa(0x29c)](_0x1c2590[_0x7406fa(0x247)]),'flashColor':_0x1c2590['InterruptFlashColor'],'flashDuration':_0x1c2590[_0x7406fa(0x101)]};this[_0x7406fa(0x107)](_0x46cd1e,_0x240bb4);}},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x206)]=Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x267)],Game_Battler['prototype'][_0x3db51b(0x267)]=function(){const _0x40cf12=_0x3db51b;VisuMZ[_0x40cf12(0x135)][_0x40cf12(0x206)][_0x40cf12(0x2c1)](this),BattleManager[_0x40cf12(0x117)]()&&(this[_0x40cf12(0x120)]>=this[_0x40cf12(0x194)]()&&(this[_0x40cf12(0x2bf)]=_0x40cf12(0x18b)));},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x236)]=Game_Unit[_0x3db51b(0x143)][_0x3db51b(0x1bf)],Game_Unit[_0x3db51b(0x143)]['updateTpb']=function(){const _0x108203=_0x3db51b;if(BattleManager[_0x108203(0x117)]()){if(BattleManager[_0x108203(0x1ae)]()[_0x108203(0x12e)](_0x15f3cf=>_0x15f3cf&&_0x15f3cf['isAlive']()&&_0x15f3cf[_0x108203(0x274)]()&&_0x15f3cf[_0x108203(0x2bf)]===_0x108203(0x18b)))return;}VisuMZ['BattleSystemATB'][_0x108203(0x236)][_0x108203(0x2c1)](this);},VisuMZ[_0x3db51b(0x135)]['Game_Battler_onRestrict']=Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x23c)],Game_Battler[_0x3db51b(0x143)]['onRestrict']=function(){const _0xdd2373=_0x3db51b;!VisuMZ[_0xdd2373(0x135)][_0xdd2373(0x24c)]['Mechanics'][_0xdd2373(0x20d)]&&(this['_onRestrictBypassAtbReset']=BattleManager['isATB']()),VisuMZ[_0xdd2373(0x135)][_0xdd2373(0x174)]['call'](this),this[_0xdd2373(0x112)]=undefined;},VisuMZ['BattleSystemATB'][_0x3db51b(0x1fd)]=Game_Actor[_0x3db51b(0x143)]['clearActions'],Game_Actor[_0x3db51b(0x143)][_0x3db51b(0x27d)]=function(){const _0x253209=_0x3db51b;if(this[_0x253209(0x112)]){if(!this[_0x253209(0x12d)]())return;}VisuMZ[_0x253209(0x135)][_0x253209(0x1fd)]['call'](this);},VisuMZ[_0x3db51b(0x135)]['Game_Battler_removeState']=Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x204)],Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x204)]=function(_0x1f67ce){const _0x559a77=_0x3db51b,_0x412c57=!this['canMove']()&&BattleManager[_0x559a77(0x176)]();VisuMZ[_0x559a77(0x135)]['Game_Battler_removeState'][_0x559a77(0x2c1)](this,_0x1f67ce);if(this['isEnemy']())this[_0x559a77(0x229)](_0x559a77(0x1c2));else _0x412c57&&this[_0x559a77(0x108)]()&&this[_0x559a77(0x2d3)]()<=0x0&&(this[_0x559a77(0x19c)](),this[_0x559a77(0x2bf)]=_0x559a77(0xff),this[_0x559a77(0x112)]=undefined);},Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x1e5)]=function(){const _0x254570=_0x3db51b;this[_0x254570(0x285)](_0x254570(0x21a)),this['_tpbTurnEnd']=![],this[_0x254570(0x29a)]++,this['_tpbIdleTime']=0x0,this[_0x254570(0x28d)]()&&this[_0x254570(0x123)](),this[_0x254570(0x285)](_0x254570(0x163));},Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x28d)]=function(){const _0x3ed003=_0x3db51b;if(this[_0x3ed003(0x2d3)]()!==0x0)return![];if(BattleManager['isATB']()){if(this[_0x3ed003(0x26f)]()){if(!this[_0x3ed003(0x28e)]())return![];}}return!![];},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x170)]=Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x224)],Game_Battler[_0x3db51b(0x143)]['applyTpbPenalty']=function(){const _0x4563d7=_0x3db51b;BattleManager[_0x4563d7(0x117)]()?this[_0x4563d7(0x1ca)]():VisuMZ[_0x4563d7(0x135)][_0x4563d7(0x170)][_0x4563d7(0x2c1)](this);},Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x1ca)]=function(){const _0x126d60=_0x3db51b;this[_0x126d60(0x2bf)]=_0x126d60(0xff),this['_tpbChargeTime']+=VisuMZ[_0x126d60(0x135)][_0x126d60(0x24c)][_0x126d60(0x1ef)][_0x126d60(0x1c9)]||0x0;},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x234)]=Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x15b)],Game_Battler[_0x3db51b(0x143)]['tpbSpeed']=function(){const _0x1a2c78=_0x3db51b;return BattleManager[_0x1a2c78(0x117)]()?VisuMZ[_0x1a2c78(0x135)][_0x1a2c78(0x24c)][_0x1a2c78(0x1ef)][_0x1a2c78(0x213)][_0x1a2c78(0x2c1)](this,this):VisuMZ['BattleSystemATB']['Game_Battler_tpbSpeed'][_0x1a2c78(0x2c1)](this);},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x231)]=Game_Battler['prototype'][_0x3db51b(0x1f4)],Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x1f4)]=function(){const _0x12fb67=_0x3db51b;return BattleManager[_0x12fb67(0x117)]()?VisuMZ['BattleSystemATB']['Settings'][_0x12fb67(0x1ef)][_0x12fb67(0x1ec)][_0x12fb67(0x2c1)](this,this):VisuMZ[_0x12fb67(0x135)][_0x12fb67(0x231)][_0x12fb67(0x2c1)](this);},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x195)]=Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x154)],Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x154)]=function(){const _0x1875ae=_0x3db51b;return BattleManager[_0x1875ae(0x117)]()?VisuMZ[_0x1875ae(0x135)]['Settings'][_0x1875ae(0x1ef)][_0x1875ae(0x156)][_0x1875ae(0x2c1)](this,this):VisuMZ[_0x1875ae(0x135)][_0x1875ae(0x195)][_0x1875ae(0x2c1)](this);},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x18a)]=Game_Battler['prototype'][_0x3db51b(0x13d)],Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x13d)]=function(){const _0x1c5658=_0x3db51b;return BattleManager[_0x1c5658(0x117)]()?this[_0x1c5658(0x155)]():VisuMZ[_0x1c5658(0x135)][_0x1c5658(0x18a)]['call'](this);},Game_Battler[_0x3db51b(0x143)]['atbAcceleration']=function(){const _0x49b81d=_0x3db51b;let _0x3c4302=VisuMZ['BattleSystemATB'][_0x49b81d(0x24c)]['Mechanics'][_0x49b81d(0x19d)][_0x49b81d(0x2c1)](this,this);if(ConfigManager&&ConfigManager[_0x49b81d(0x2a5)]!==undefined){const _0x12fcff=ConfigManager[_0x49b81d(0x2a5)]-0x3;if(_0x12fcff>0x0)return _0x3c4302*(_0x12fcff*0x2);else{if(_0x12fcff<0x0)return _0x3c4302*(0x1/(_0x12fcff*-0x2));}}return _0x3c4302;},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x1d4)]=Game_Battler[_0x3db51b(0x143)][_0x3db51b(0x194)],Game_Battler[_0x3db51b(0x143)]['tpbRequiredCastTime']=function(){const _0x327d0d=_0x3db51b;return BattleManager[_0x327d0d(0x117)]()?VisuMZ['BattleSystemATB']['Settings'][_0x327d0d(0x1ef)][_0x327d0d(0x1a3)][_0x327d0d(0x2c1)](this,this):VisuMZ[_0x327d0d(0x135)][_0x327d0d(0x1d4)]['call'](this);},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x2c0)]=Scene_Options[_0x3db51b(0x143)][_0x3db51b(0x256)],Scene_Options[_0x3db51b(0x143)][_0x3db51b(0x256)]=function(){const _0x23fd90=_0x3db51b;let _0x563fce=VisuMZ[_0x23fd90(0x135)][_0x23fd90(0x2c0)][_0x23fd90(0x2c1)](this);const _0x430c5c=VisuMZ[_0x23fd90(0x135)][_0x23fd90(0x24c)];if(_0x430c5c['Options'][_0x23fd90(0x130)]&&_0x430c5c[_0x23fd90(0x245)][_0x23fd90(0x10a)]&&BattleManager[_0x23fd90(0x117)]())_0x563fce++;return _0x563fce;},Sprite_Battler[_0x3db51b(0x143)][_0x3db51b(0x269)]=function(){const _0x53902e=_0x3db51b;if(!BattleManager[_0x53902e(0x117)]())return;if(!ConfigManager[_0x53902e(0x182)])return;const _0x2fa484=VisuMZ[_0x53902e(0x135)]['Settings'][_0x53902e(0x1aa)],_0x560f92=new Sprite_Gauge();_0x560f92['anchor']['x']=_0x2fa484[_0x53902e(0x2ce)],_0x560f92[_0x53902e(0x13a)]['y']=_0x2fa484[_0x53902e(0x1f2)],_0x560f92['scale']['x']=_0x560f92['scale']['y']=_0x2fa484['Scale'],this['_atbGaugeSprite']=_0x560f92,this[_0x53902e(0x214)](this['_atbGaugeSprite']);},VisuMZ['BattleSystemATB'][_0x3db51b(0x127)]=Sprite_Battler[_0x3db51b(0x143)][_0x3db51b(0x165)],Sprite_Battler[_0x3db51b(0x143)]['setBattler']=function(_0x2791dd){const _0x56e93b=_0x3db51b;VisuMZ[_0x56e93b(0x135)][_0x56e93b(0x127)]['call'](this,_0x2791dd),this['setupAtbGaugeSprite'](_0x2791dd),this[_0x56e93b(0x24a)]();},Sprite_Battler['prototype'][_0x3db51b(0x23b)]=function(_0x5d5d81){const _0x4e35e0=_0x3db51b;if(!_0x5d5d81)return;if(!this[_0x4e35e0(0x276)])return;if(_0x5d5d81['isActor']()){}else{if(_0x5d5d81[_0x4e35e0(0x26f)]()){if(this['constructor']===Sprite_Enemy&&_0x5d5d81[_0x4e35e0(0x279)]())return;if(this['constructor']===Sprite_SvEnemy&&!_0x5d5d81['hasSvBattler']())return;}}this[_0x4e35e0(0x276)][_0x4e35e0(0x1c5)](_0x5d5d81,_0x4e35e0(0x2c9));},Sprite_Battler['prototype']['updateAtbGaugeSpriteVisibility']=function(){const _0x3e27ce=_0x3db51b;if(!this[_0x3e27ce(0x276)])return;const _0x4c4990=this['_battler']&&this['_battler'][_0x3e27ce(0x274)]()&&!this[_0x3e27ce(0x288)][_0x3e27ce(0x1ee)]();this['_atbGaugeSprite'][_0x3e27ce(0x207)]=_0x4c4990,this[_0x3e27ce(0x10e)]&&this[_0x3e27ce(0x10e)][_0x3e27ce(0x276)]&&(this[_0x3e27ce(0x10e)][_0x3e27ce(0x276)][_0x3e27ce(0x207)]=_0x4c4990);},VisuMZ['BattleSystemATB']['Sprite_Battler_updateMain']=Sprite_Battler[_0x3db51b(0x143)]['updateMain'],Sprite_Battler['prototype']['updateMain']=function(){const _0x2c352d=_0x3db51b;VisuMZ[_0x2c352d(0x135)][_0x2c352d(0x178)][_0x2c352d(0x2c1)](this),this[_0x2c352d(0x12b)]();},Sprite_Battler[_0x3db51b(0x143)]['updateAtbGaugeSpritePosition']=function(){const _0x2895c7=_0x3db51b;if(!this['_battler'])return;if(!this['_atbGaugeSprite'])return;const _0x3115b5=VisuMZ[_0x2895c7(0x135)]['Settings'][_0x2895c7(0x1aa)],_0x1010dc=this[_0x2895c7(0x276)];let _0x399361=_0x3115b5[_0x2895c7(0x1d1)];this[_0x2895c7(0x288)]['battleUIOffsetX']&&(_0x399361+=this[_0x2895c7(0x288)][_0x2895c7(0x2b0)]());let _0x45d501=_0x3115b5[_0x2895c7(0x1d7)];this['_battler'][_0x2895c7(0x201)]&&(_0x45d501+=this[_0x2895c7(0x288)][_0x2895c7(0x201)]()),_0x1010dc['x']=_0x399361,_0x1010dc['y']=-this[_0x2895c7(0x203)]+_0x45d501,this[_0x2895c7(0x288)][_0x2895c7(0x26f)]()&&(this['_battler']['enemy']()['note'][_0x2895c7(0x259)](/<HIDE (?:ATB|TPB) GAUGE>/i)&&(_0x1010dc['visible']=![])),this['checkAggroControlSystemOffsetYAdjustment']()&&(_0x1010dc['y']+=_0x1010dc[_0x2895c7(0x12a)]()*_0x3115b5['Scale']-0x1),this[_0x2895c7(0x2c2)]['x']<0x0&&(_0x1010dc['scale']['x']=-Math[_0x2895c7(0x11b)](_0x1010dc[_0x2895c7(0x2c2)]['x']));},Sprite_Battler[_0x3db51b(0x143)]['checkAggroControlSystemOffsetYAdjustment']=function(){const _0x4f4361=_0x3db51b;if(!Imported[_0x4f4361(0x1ab)])return![];if(this[_0x4f4361(0x288)]&&this['_battler'][_0x4f4361(0x26f)]())return![];const _0x31109b=VisuMZ[_0x4f4361(0x246)][_0x4f4361(0x24c)][_0x4f4361(0x146)];if(!_0x31109b[_0x4f4361(0x29b)])return![];if(!ConfigManager[_0x4f4361(0x25f)])return![];const _0xda2f8=VisuMZ['BattleSystemATB'][_0x4f4361(0x24c)]['Gauge'];return _0x31109b[_0x4f4361(0x23d)]===_0xda2f8['Scale']&&_0x31109b[_0x4f4361(0x2ce)]===_0xda2f8[_0x4f4361(0x2ce)]&&_0x31109b[_0x4f4361(0x1f2)]===_0xda2f8['AnchorY']&&_0x31109b['OffsetX']===_0xda2f8['OffsetX']&&_0x31109b[_0x4f4361(0x1d7)]===_0xda2f8['OffsetY']&&!![];},VisuMZ['BattleSystemATB']['Sprite_Battler_update']=Sprite_Battler[_0x3db51b(0x143)]['update'],Sprite_Battler['prototype']['update']=function(){const _0x5af27f=_0x3db51b;VisuMZ[_0x5af27f(0x135)]['Sprite_Battler_update'][_0x5af27f(0x2c1)](this),!this[_0x5af27f(0x288)]&&this['_atbGaugeSprite']&&(this[_0x5af27f(0x276)][_0x5af27f(0x207)]=![],this[_0x5af27f(0x10e)]&&(this[_0x5af27f(0x10e)]['_atbGaugeSprite'][_0x5af27f(0x207)]=![]));},VisuMZ[_0x3db51b(0x135)]['Sprite_Actor_createStateSprite']=Sprite_Actor[_0x3db51b(0x143)][_0x3db51b(0x11f)],Sprite_Actor[_0x3db51b(0x143)][_0x3db51b(0x11f)]=function(){const _0x5f1e73=_0x3db51b;VisuMZ[_0x5f1e73(0x135)][_0x5f1e73(0x25a)][_0x5f1e73(0x2c1)](this),this[_0x5f1e73(0x293)]()&&this['createAtbGaugeSprite']();},Sprite_Actor[_0x3db51b(0x143)][_0x3db51b(0x293)]=function(){const _0x11abf2=_0x3db51b;return VisuMZ[_0x11abf2(0x135)][_0x11abf2(0x24c)][_0x11abf2(0x1aa)][_0x11abf2(0x136)];},Sprite_SvEnemy['prototype'][_0x3db51b(0x293)]=function(){const _0x490419=_0x3db51b;return VisuMZ[_0x490419(0x135)][_0x490419(0x24c)][_0x490419(0x1aa)][_0x490419(0x295)];},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x1eb)]=Sprite_Enemy[_0x3db51b(0x143)][_0x3db51b(0x205)],Sprite_Enemy[_0x3db51b(0x143)][_0x3db51b(0x205)]=function(){const _0x51c6f6=_0x3db51b;VisuMZ['BattleSystemATB']['Settings']['Gauge']['ShowEnemyGauge']&&this[_0x51c6f6(0x269)](),VisuMZ[_0x51c6f6(0x135)][_0x51c6f6(0x1eb)]['call'](this);},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x2d1)]=Sprite_Enemy[_0x3db51b(0x143)][_0x3db51b(0x2cb)],Sprite_Enemy[_0x3db51b(0x143)]['startEffect']=function(_0x1f34d1){const _0x79afd8=_0x3db51b;VisuMZ[_0x79afd8(0x135)]['Sprite_Enemy_startEffect']['call'](this,_0x1f34d1),(_0x1f34d1==='appear'||_0x79afd8(0x25c))&&this[_0x79afd8(0x24a)]();},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x242)]=Game_BattlerBase[_0x3db51b(0x143)]['appear'],Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x180)]=function(){const _0x4dfb37=_0x3db51b;VisuMZ[_0x4dfb37(0x135)][_0x4dfb37(0x242)][_0x4dfb37(0x2c1)](this),this[_0x4dfb37(0x26f)]()&&BattleManager[_0x4dfb37(0x117)]()&&this[_0x4dfb37(0x1e3)]()&&(this[_0x4dfb37(0x1e3)]()[_0x4dfb37(0x192)]=!![],this[_0x4dfb37(0x1e3)]()[_0x4dfb37(0x24a)]());},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x141)]=Sprite_Gauge[_0x3db51b(0x143)][_0x3db51b(0x1fc)],Sprite_Gauge[_0x3db51b(0x143)]['gaugeColor1']=function(){const _0xd0e245=_0x3db51b;if(this[_0xd0e245(0x233)]===_0xd0e245(0x2c9))return this[_0xd0e245(0x1d8)](0x1);return VisuMZ['BattleSystemATB'][_0xd0e245(0x141)][_0xd0e245(0x2c1)](this);},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x1d6)]=Sprite_Gauge['prototype'][_0x3db51b(0x145)],Sprite_Gauge[_0x3db51b(0x143)]['gaugeColor2']=function(){const _0x1b9223=_0x3db51b;if(this['_statusType']===_0x1b9223(0x2c9))return this[_0x1b9223(0x1d8)](0x2);return VisuMZ[_0x1b9223(0x135)][_0x1b9223(0x1d6)][_0x1b9223(0x2c1)](this);},Sprite_Gauge[_0x3db51b(0x143)][_0x3db51b(0x1d8)]=function(_0x37a7d0){const _0x2ba146=_0x3db51b;if(!this[_0x2ba146(0x288)])return ColorManager['atbColor'](_0x2ba146(0x225)[_0x2ba146(0x14f)](_0x37a7d0));if(this[_0x2ba146(0x288)][_0x2ba146(0x262)]())return ColorManager['atbColor']('stop%1'[_0x2ba146(0x14f)](_0x37a7d0));if(this['_battler'][_0x2ba146(0x12d)]())return ColorManager['atbColor'](_0x2ba146(0x18f)[_0x2ba146(0x14f)](_0x37a7d0));if(this['gaugeRate']()>=0x1)return ColorManager[_0x2ba146(0x2d2)](_0x2ba146(0x21f)[_0x2ba146(0x14f)](_0x37a7d0));const _0x386a96=VisuMZ['BattleSystemATB'][_0x2ba146(0x24c)][_0x2ba146(0x1aa)],_0x57a5db=this[_0x2ba146(0x288)]['paramRate'](0x6)*this[_0x2ba146(0x288)][_0x2ba146(0x230)](0x6);if(_0x57a5db<=_0x386a96[_0x2ba146(0x2d0)])return ColorManager[_0x2ba146(0x2d2)](_0x2ba146(0x11c)['format'](_0x37a7d0));if(_0x57a5db>=_0x386a96[_0x2ba146(0x17d)])return ColorManager[_0x2ba146(0x2d2)](_0x2ba146(0x243)[_0x2ba146(0x14f)](_0x37a7d0));return ColorManager[_0x2ba146(0x2d2)](_0x2ba146(0x225)[_0x2ba146(0x14f)](_0x37a7d0));},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x2ba)]=Sprite_Gauge[_0x3db51b(0x143)][_0x3db51b(0x152)],Sprite_Gauge[_0x3db51b(0x143)][_0x3db51b(0x152)]=function(){const _0x5ab2ed=_0x3db51b;if(this[_0x5ab2ed(0x288)]&&this[_0x5ab2ed(0x233)]===_0x5ab2ed(0x2c9))return this[_0x5ab2ed(0x23f)]();return VisuMZ['BattleSystemATB'][_0x5ab2ed(0x2ba)][_0x5ab2ed(0x2c1)](this);},Sprite_Gauge[_0x3db51b(0x143)][_0x3db51b(0x23f)]=function(){const _0x48b8f6=_0x3db51b;return this[_0x48b8f6(0x288)]['isAtbCastingState']()?Math[_0x48b8f6(0x275)](this[_0x48b8f6(0x288)][_0x48b8f6(0x120)],0x0):VisuMZ[_0x48b8f6(0x135)][_0x48b8f6(0x2ba)][_0x48b8f6(0x2c1)](this);},VisuMZ[_0x3db51b(0x135)]['Sprite_Gauge_currentMaxValue']=Sprite_Gauge['prototype'][_0x3db51b(0x1dc)],Sprite_Gauge[_0x3db51b(0x143)]['currentMaxValue']=function(){const _0x1ec174=_0x3db51b;if(this[_0x1ec174(0x288)]&&this[_0x1ec174(0x233)]==='time')return this[_0x1ec174(0x1e1)]();return VisuMZ[_0x1ec174(0x135)][_0x1ec174(0x237)]['call'](this);},Sprite_Gauge['prototype'][_0x3db51b(0x1e1)]=function(){const _0x36c5cc=_0x3db51b;return this[_0x36c5cc(0x288)][_0x36c5cc(0x12d)]()?Math['max'](this[_0x36c5cc(0x288)][_0x36c5cc(0x194)](),0x1):VisuMZ['BattleSystemATB'][_0x36c5cc(0x237)][_0x36c5cc(0x2c1)](this);},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x1d9)]=Window_Help[_0x3db51b(0x143)]['setItem'],Window_Help['prototype']['setItem']=function(_0x54e199){const _0x1e45ee=_0x3db51b;BattleManager[_0x1e45ee(0x117)]()&&_0x54e199&&_0x54e199['note']&&_0x54e199['note'][_0x1e45ee(0x259)](/<(?:ATB|TPB) HELP>\s*([\s\S]*)\s*<\/(?:ATB|TPB) HELP>/i)?this[_0x1e45ee(0x116)](String(RegExp['$1'])):VisuMZ[_0x1e45ee(0x135)]['Window_Help_setItem'][_0x1e45ee(0x2c1)](this,_0x54e199);},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x28c)]=Window_StatusBase[_0x3db51b(0x143)]['placeGauge'],Window_StatusBase['prototype'][_0x3db51b(0x1b4)]=function(_0x567d2f,_0x3f2141,_0x1720b6,_0x431422){const _0x3a11da=_0x3db51b;if(!this['showVisualAtbGauge'](_0x3f2141))return;VisuMZ[_0x3a11da(0x135)][_0x3a11da(0x28c)][_0x3a11da(0x2c1)](this,_0x567d2f,_0x3f2141,_0x1720b6,_0x431422);},Window_StatusBase[_0x3db51b(0x143)][_0x3db51b(0x17c)]=function(_0xc243b8){const _0x4d74fd=_0x3db51b;if(_0xc243b8!=='time')return!![];if(!['Window_BattleStatus','Window_SideviewUiBattleStatus'][_0x4d74fd(0x281)](this[_0x4d74fd(0x106)][_0x4d74fd(0x1f9)]))return![];if(!BattleManager[_0x4d74fd(0x117)]())return![];if(!ConfigManager[_0x4d74fd(0x182)])return![];return VisuMZ['BattleSystemATB'][_0x4d74fd(0x24c)]['Gauge']['ShowStatusGauge'];},VisuMZ[_0x3db51b(0x135)][_0x3db51b(0x1d2)]=Window_Options[_0x3db51b(0x143)][_0x3db51b(0x196)],Window_Options[_0x3db51b(0x143)]['addGeneralOptions']=function(){const _0x195fa0=_0x3db51b;VisuMZ[_0x195fa0(0x135)][_0x195fa0(0x1d2)]['call'](this),this[_0x195fa0(0x140)]();},Window_Options['prototype'][_0x3db51b(0x140)]=function(){const _0x5be60b=_0x3db51b;if(!BattleManager[_0x5be60b(0x117)]())return;VisuMZ['BattleSystemATB'][_0x5be60b(0x24c)]['Options'][_0x5be60b(0x130)]&&this['addBattleSystemATBShowGaugeCommand']();},Window_Options[_0x3db51b(0x143)][_0x3db51b(0x26e)]=function(){const _0xae0349=_0x3db51b,_0x4a707d=TextManager[_0xae0349(0x182)],_0x37aefe=_0xae0349(0x182);this['addCommand'](_0x4a707d,_0x37aefe);},Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x1de)]=function(){const _0x19f3c6=_0x3db51b;delete this[_0x19f3c6(0x1f8)],delete this['_fieldAtbGaugeFaceName'],delete this[_0x19f3c6(0x105)],delete this[_0x19f3c6(0x1e2)];},Game_BattlerBase[_0x3db51b(0x143)]['fieldAtbGraphicType']=function(){const _0x53d199=_0x3db51b;return this[_0x53d199(0x1f8)]===undefined&&(this[_0x53d199(0x1f8)]=this[_0x53d199(0x20e)]()),this[_0x53d199(0x1f8)];},Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x20e)]=function(){const _0x58f637=_0x3db51b;return Sprite_FieldGaugeATB[_0x58f637(0x24c)][_0x58f637(0x15d)];},Game_BattlerBase[_0x3db51b(0x143)]['fieldAtbGraphicFaceName']=function(){const _0x49c631=_0x3db51b;return this['_fieldAtbGaugeFaceName']===undefined&&(this[_0x49c631(0x1ac)]=this[_0x49c631(0x19f)]()),this[_0x49c631(0x1ac)];},Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x19f)]=function(){const _0x9e1d89=_0x3db51b;return Sprite_FieldGaugeATB[_0x9e1d89(0x24c)]['EnemyBattlerFaceName'];},Game_BattlerBase['prototype'][_0x3db51b(0x2a4)]=function(){const _0x5ef4b5=_0x3db51b;return this[_0x5ef4b5(0x105)]===undefined&&(this[_0x5ef4b5(0x105)]=this[_0x5ef4b5(0x1b1)]()),this[_0x5ef4b5(0x105)];},Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x1b1)]=function(){const _0x2e2914=_0x3db51b;return Sprite_FieldGaugeATB[_0x2e2914(0x24c)][_0x2e2914(0x18d)];},Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x1e4)]=function(){const _0x270266=_0x3db51b;return this[_0x270266(0x1e2)]===undefined&&(this[_0x270266(0x1e2)]=this[_0x270266(0x18e)]()),this['_fieldAtbGaugeIconIndex'];},Game_BattlerBase['prototype'][_0x3db51b(0x18e)]=function(){const _0x158333=_0x3db51b;return Sprite_FieldGaugeATB[_0x158333(0x24c)]['EnemyBattlerIcon'];},Game_BattlerBase[_0x3db51b(0x143)][_0x3db51b(0x1b8)]=function(_0x3fcaa4){const _0x228e36=_0x3db51b;this[_0x228e36(0x1e2)]=_0x3fcaa4;},Game_Actor[_0x3db51b(0x143)][_0x3db51b(0x20e)]=function(){const _0x5368ea=_0x3db51b,_0x21bf9e=this[_0x5368ea(0x1ed)]()[_0x5368ea(0x1e9)];if(_0x21bf9e[_0x5368ea(0x259)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x5368ea(0x12c);else{if(_0x21bf9e['match'](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return'icon';}return Sprite_FieldGaugeATB['Settings']['ActorBattlerType'];},Game_Actor[_0x3db51b(0x143)][_0x3db51b(0x19f)]=function(){const _0x1c3f8e=_0x3db51b,_0x1cef1c=this['actor']()[_0x1c3f8e(0x1e9)];if(_0x1cef1c[_0x1c3f8e(0x259)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0x1c3f8e(0x1cb)]();},Game_Actor[_0x3db51b(0x143)][_0x3db51b(0x1b1)]=function(){const _0x451c08=_0x3db51b,_0x2070be=this[_0x451c08(0x1ed)]()['note'];if(_0x2070be['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x451c08(0x164)]();},Game_Actor[_0x3db51b(0x143)][_0x3db51b(0x18e)]=function(){const _0x3c1974=_0x3db51b,_0x157d92=this['actor']()['note'];if(_0x157d92[_0x3c1974(0x259)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Sprite_FieldGaugeATB[_0x3c1974(0x24c)][_0x3c1974(0x197)];},Game_Enemy[_0x3db51b(0x143)][_0x3db51b(0x20e)]=function(){const _0x164a2c=_0x3db51b,_0x2e6df4=this['enemy']()[_0x164a2c(0x1e9)];if(_0x2e6df4[_0x164a2c(0x259)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x164a2c(0x12c);else{if(_0x2e6df4['match'](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x164a2c(0xfe);}return Sprite_FieldGaugeATB[_0x164a2c(0x24c)][_0x164a2c(0x15d)];},Game_Enemy[_0x3db51b(0x143)][_0x3db51b(0x19f)]=function(){const _0x445eab=_0x3db51b,_0x1682bd=this[_0x445eab(0x232)]()[_0x445eab(0x1e9)];if(_0x1682bd[_0x445eab(0x259)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Sprite_FieldGaugeATB[_0x445eab(0x24c)][_0x445eab(0x104)];},Game_Enemy['prototype'][_0x3db51b(0x1b1)]=function(){const _0x211c3b=_0x3db51b,_0x2b2a66=this['enemy']()[_0x211c3b(0x1e9)];if(_0x2b2a66[_0x211c3b(0x259)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Sprite_FieldGaugeATB['Settings'][_0x211c3b(0x18d)];},Game_Enemy[_0x3db51b(0x143)][_0x3db51b(0x18e)]=function(){const _0x14e5bf=_0x3db51b,_0x5da738=this[_0x14e5bf(0x232)]()[_0x14e5bf(0x1e9)];if(_0x5da738[_0x14e5bf(0x259)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Sprite_FieldGaugeATB['Settings']['EnemyBattlerIcon'];},VisuMZ['BattleSystemATB'][_0x3db51b(0x12f)]=Scene_Battle[_0x3db51b(0x143)][_0x3db51b(0x1c0)],Scene_Battle[_0x3db51b(0x143)][_0x3db51b(0x1c0)]=function(){const _0x4e3bce=_0x3db51b;this[_0x4e3bce(0x2b2)](),VisuMZ['BattleSystemATB'][_0x4e3bce(0x12f)][_0x4e3bce(0x2c1)](this),this[_0x4e3bce(0x1c7)]();},Scene_Battle[_0x3db51b(0x143)][_0x3db51b(0x2b2)]=function(){const _0x27d164=_0x3db51b;if(!BattleManager['isATB']())return;if(!Sprite_FieldGaugeATB[_0x27d164(0x24c)][_0x27d164(0x22a)])return;if(!ConfigManager[_0x27d164(0x182)])return;this[_0x27d164(0x186)]=new Window_Base(new Rectangle(0x0,0x0,0x0,0x0));const _0x4605d0=this[_0x27d164(0x2bd)](this['_windowLayer']);this[_0x27d164(0x268)](this['_fieldGaugeATB_Container'],_0x4605d0);},Scene_Battle[_0x3db51b(0x143)][_0x3db51b(0x1c7)]=function(){const _0x58bb85=_0x3db51b;if(!BattleManager[_0x58bb85(0x117)]())return;if(!Sprite_FieldGaugeATB[_0x58bb85(0x24c)][_0x58bb85(0x22a)])return;if(!ConfigManager['visualAtbGauge'])return;this['_fieldGaugeATB']=new Sprite_FieldGaugeATB(),this[_0x58bb85(0x186)][_0x58bb85(0x214)](this[_0x58bb85(0x1b6)]);};function Sprite_FieldGaugeATB(){const _0x433858=_0x3db51b;this[_0x433858(0x241)](...arguments);}Sprite_FieldGaugeATB[_0x3db51b(0x143)]=Object[_0x3db51b(0x253)](Sprite[_0x3db51b(0x143)]),Sprite_FieldGaugeATB[_0x3db51b(0x143)][_0x3db51b(0x106)]=Sprite_FieldGaugeATB,Sprite_FieldGaugeATB[_0x3db51b(0x24c)]=JsonEx['makeDeepCopy'](VisuMZ['BattleSystemATB']['Settings'][_0x3db51b(0x1cd)]),Sprite_FieldGaugeATB[_0x3db51b(0x143)]['initialize']=function(){const _0x51d702=_0x3db51b;Sprite[_0x51d702(0x143)][_0x51d702(0x241)][_0x51d702(0x2c1)](this),this[_0x51d702(0x202)](),this['setHomeLocation'](),this['createChildren']();},Sprite_FieldGaugeATB['prototype'][_0x3db51b(0x202)]=function(){const _0xac8fc8=_0x3db51b;this[_0xac8fc8(0x13a)]['x']=0.5,this['anchor']['y']=0.5;},Sprite_FieldGaugeATB[_0x3db51b(0x143)][_0x3db51b(0x1ea)]=function(){const _0x127af0=_0x3db51b;if(this['_horz']!==undefined)return this[_0x127af0(0x1f0)];const _0x1bae4a=Sprite_FieldGaugeATB[_0x127af0(0x24c)]['DisplayPosition'];return this[_0x127af0(0x1f0)]=['top',_0x127af0(0x158)][_0x127af0(0x281)](_0x1bae4a),this[_0x127af0(0x1f0)];},Sprite_FieldGaugeATB['prototype'][_0x3db51b(0x10d)]=function(){const _0x4d8182=_0x3db51b,_0x4c7fc7=Sprite_FieldGaugeATB[_0x4d8182(0x24c)]['DisplayPosition'][_0x4d8182(0x240)]()['trim'](),_0x26a7e6=Window_Base[_0x4d8182(0x143)][_0x4d8182(0x2ad)](),_0x4e8d02=SceneManager['_scene'][_0x4d8182(0x16d)][_0x4d8182(0x203)]+Math['round'](_0x26a7e6*0.5);this[_0x4d8182(0x248)]=0x0,this[_0x4d8182(0x1af)]=0x0;switch(_0x4c7fc7){case'top':this[_0x4d8182(0x248)]=Math[_0x4d8182(0x2bc)](Graphics[_0x4d8182(0x1c3)]*0.5),this[_0x4d8182(0x1af)]=0x60;break;case'bottom':this[_0x4d8182(0x248)]=Math['round'](Graphics[_0x4d8182(0x1c3)]*0.5),this[_0x4d8182(0x1af)]=Graphics[_0x4d8182(0x1ad)]-_0x4e8d02;break;case'left':this['_homeX']=0x50,this['_homeY']=Math[_0x4d8182(0x2bc)]((Graphics['boxHeight']-_0x4e8d02)/0x2);break;case'right':this['_homeX']=Graphics[_0x4d8182(0x1c3)]-0x50,this[_0x4d8182(0x1af)]=Math[_0x4d8182(0x2bc)]((Graphics['boxHeight']-_0x4e8d02)/0x2);break;}this[_0x4d8182(0x248)]+=Sprite_FieldGaugeATB[_0x4d8182(0x24c)][_0x4d8182(0x15e)]||0x0,this[_0x4d8182(0x1af)]+=Sprite_FieldGaugeATB['Settings']['DisplayOffsetY']||0x0,this['x']=this['_homeX'],this['y']=this[_0x4d8182(0x1af)];},Sprite_FieldGaugeATB[_0x3db51b(0x143)][_0x3db51b(0x14a)]=function(){const _0x4d3ebe=_0x3db51b;this[_0x4d3ebe(0x294)](),this['createGaugeSprite'](),this[_0x4d3ebe(0x2aa)]();},Sprite_FieldGaugeATB[_0x3db51b(0x143)][_0x3db51b(0x294)]=function(){const _0x3bc33b=_0x3db51b;this[_0x3bc33b(0x21d)]=new Sprite(),this['_skinSprite'][_0x3bc33b(0x13a)]['x']=0.5,this[_0x3bc33b(0x21d)]['anchor']['y']=0.5,this[_0x3bc33b(0x214)](this[_0x3bc33b(0x21d)]);const _0x47ac8e=Sprite_FieldGaugeATB[_0x3bc33b(0x24c)][_0x3bc33b(0x1fb)];if(_0x47ac8e)this['_skinSprite'][_0x3bc33b(0x252)]=ImageManager[_0x3bc33b(0x1b7)](_0x47ac8e);},Sprite_FieldGaugeATB['prototype'][_0x3db51b(0x282)]=function(){const _0x14b51d=_0x3db51b;this['_gaugeSprite']=new Sprite(),this[_0x14b51d(0x214)](this[_0x14b51d(0x209)]),this[_0x14b51d(0x147)]();},Sprite_FieldGaugeATB['prototype'][_0x3db51b(0x147)]=function(){const _0x245d57=_0x3db51b,_0x49c526=Sprite_FieldGaugeATB[_0x245d57(0x24c)],_0x420b08=this[_0x245d57(0x1ea)](),_0x3b255b=_0x420b08?_0x49c526[_0x245d57(0x2d5)]:_0x49c526[_0x245d57(0x102)],_0x1c93a3=_0x420b08?_0x49c526['GaugeThick']:_0x49c526['GaugeLengthVert'];this[_0x245d57(0x209)][_0x245d57(0x252)]=new Bitmap(_0x3b255b,_0x1c93a3),this[_0x245d57(0x157)](),this['_gaugeSprite']['x']=Math[_0x245d57(0x160)](_0x3b255b/-0x2),this[_0x245d57(0x209)]['y']=Math['ceil'](_0x1c93a3/-0x2);},Sprite_FieldGaugeATB['prototype'][_0x3db51b(0x157)]=function(){const _0x572fcb=_0x3db51b;if(!Sprite_FieldGaugeATB[_0x572fcb(0x24c)]['DrawGauge'])return;const _0x2aeb47=Sprite_FieldGaugeATB[_0x572fcb(0x24c)],_0x199d1b=this[_0x572fcb(0x209)]['bitmap'],_0x477a23=_0x199d1b[_0x572fcb(0x1a8)],_0x424fef=_0x199d1b[_0x572fcb(0x203)],_0x1a64e8=ColorManager['gaugeBackColor'](),_0x2026d1=ColorManager[_0x572fcb(0x1c6)](),_0x20c7d9=ColorManager[_0x572fcb(0x2a6)](),_0x3d26dc=ColorManager[_0x572fcb(0x2d2)](_0x572fcb(0x181)),_0x3268e4=ColorManager[_0x572fcb(0x2d2)]('cast2'),_0x285347=this[_0x572fcb(0x1ea)](),_0x221901=_0x2aeb47['GaugeDirection'],_0x578321=_0x2aeb47['GaugeSplit'][_0x572fcb(0x2bb)](0x0,0x1),_0xce20b8=Math[_0x572fcb(0x160)](((_0x285347?_0x477a23:_0x424fef)-0x2)*_0x578321);_0x199d1b['fillRect'](0x0,0x0,_0x477a23,_0x424fef,_0x1a64e8);let _0x3baaf1=0x0,_0x1b225b=0x0,_0x780ad2=0x0,_0x2ecaed=0x0;if(_0x285347&&_0x221901)_0x3baaf1=_0xce20b8-0x1,_0x780ad2=_0x477a23-0x3-_0x3baaf1,_0x199d1b[_0x572fcb(0x15f)](0x1,0x1,_0x3baaf1,_0x424fef-0x2,_0x2026d1,_0x20c7d9,![]),_0x199d1b[_0x572fcb(0x15f)](0x2+_0x3baaf1,0x1,_0x780ad2,_0x424fef-0x2,_0x3d26dc,_0x3268e4,![]);else{if(_0x285347&&!_0x221901)_0x3baaf1=_0xce20b8-0x1,_0x780ad2=_0x477a23-0x3-_0x3baaf1,_0x199d1b[_0x572fcb(0x15f)](0x2+_0x780ad2,0x1,_0x3baaf1,_0x424fef-0x2,_0x2026d1,_0x20c7d9,![]),_0x199d1b[_0x572fcb(0x15f)](0x1,0x1,_0x780ad2,_0x424fef-0x2,_0x3d26dc,_0x3268e4,![]);else{if(!_0x285347&&_0x221901)_0x1b225b=_0xce20b8-0x1,_0x2ecaed=_0x424fef-0x3-_0x1b225b,_0x199d1b[_0x572fcb(0x15f)](0x1,0x1,_0x477a23-0x2,_0x1b225b,_0x2026d1,_0x20c7d9,!![]),_0x199d1b[_0x572fcb(0x15f)](0x1,0x2+_0x1b225b,_0x477a23-0x2,_0x2ecaed,_0x3d26dc,_0x3268e4,!![]);else!_0x285347&&!_0x221901&&(_0x1b225b=_0xce20b8-0x1,_0x2ecaed=_0x424fef-0x3-_0x1b225b,_0x199d1b[_0x572fcb(0x15f)](0x1,0x2+_0x2ecaed,_0x477a23-0x2,_0x1b225b,_0x2026d1,_0x20c7d9,!![]),_0x199d1b['gradientFillRect'](0x1,0x1,_0x477a23-0x2,_0x2ecaed,_0x3d26dc,_0x3268e4,!![]));}}},Sprite_FieldGaugeATB['prototype']['createBattlerContainer']=function(){const _0x257873=_0x3db51b;this[_0x257873(0x17f)]&&this[_0x257873(0x209)]['removeChild'](this['_battlerContainer']),this[_0x257873(0x17f)]=new Sprite(),this['_gaugeSprite'][_0x257873(0x214)](this[_0x257873(0x17f)]),this[_0x257873(0x2c4)]();},Sprite_FieldGaugeATB[_0x3db51b(0x143)]['createBattlerSprites']=function(){const _0x346571=_0x3db51b;this['createEnemySprites'](),this[_0x346571(0x289)]();},Sprite_FieldGaugeATB[_0x3db51b(0x143)][_0x3db51b(0x2a1)]=function(){const _0x412311=_0x3db51b,_0x22fb36=$gameTroop[_0x412311(0x227)](),_0x2c0c23=_0x22fb36[_0x412311(0x109)];for(let _0x5be0a=0x0;_0x5be0a<_0x2c0c23;_0x5be0a++){this[_0x412311(0x1a5)](_0x5be0a,$gameTroop);}},Sprite_FieldGaugeATB['prototype'][_0x3db51b(0x289)]=function(){const _0x50a0a8=$gameParty['maxBattleMembers']();for(let _0x2451b6=0x0;_0x2451b6<_0x50a0a8;_0x2451b6++){this['createBattlerSprite'](_0x2451b6,$gameParty);}},Sprite_FieldGaugeATB[_0x3db51b(0x143)][_0x3db51b(0x1a5)]=function(_0x552499,_0x5920e6){const _0x47a9a2=_0x3db51b,_0x2cee59=new Sprite_FieldMarkerATB(_0x552499,_0x5920e6,this['_gaugeSprite']);this['_battlerContainer'][_0x47a9a2(0x214)](_0x2cee59);},Sprite_FieldGaugeATB[_0x3db51b(0x143)][_0x3db51b(0x273)]=function(){const _0x59a20c=_0x3db51b;Sprite[_0x59a20c(0x143)]['update'][_0x59a20c(0x2c1)](this),this[_0x59a20c(0x235)](),this[_0x59a20c(0x26d)](),this['updateVisibility']();},Sprite_FieldGaugeATB[_0x3db51b(0x143)][_0x3db51b(0x235)]=function(){const _0x12d261=_0x3db51b,_0x45f1a9=Sprite_FieldGaugeATB['Settings'];if(_0x45f1a9[_0x12d261(0x173)]!==_0x12d261(0x122))return;if(!_0x45f1a9[_0x12d261(0x162)])return;const _0x4e4986=SceneManager['_scene'][_0x12d261(0x1a4)];if(!_0x4e4986)return;_0x4e4986[_0x12d261(0x207)]?(this['x']=this[_0x12d261(0x248)]+(_0x45f1a9[_0x12d261(0x26a)]||0x0),this['y']=this['_homeY']+(_0x45f1a9[_0x12d261(0x144)]||0x0)):(this['x']=this['_homeX'],this['y']=this[_0x12d261(0x1af)]);const _0x51d638=SceneManager[_0x12d261(0x1be)][_0x12d261(0x29f)];this['x']+=_0x51d638['x'],this['y']+=_0x51d638['y'];},Sprite_FieldGaugeATB[_0x3db51b(0x143)][_0x3db51b(0x26d)]=function(){const _0x4b5051=_0x3db51b;if(!this[_0x4b5051(0x17f)])return;const _0x558846=this['_battlerContainer'][_0x4b5051(0x292)];if(!_0x558846)return;_0x558846[_0x4b5051(0x29e)](this[_0x4b5051(0x23a)]['bind'](this));},Sprite_FieldGaugeATB['prototype']['compareBattlerSprites']=function(_0x2bb464,_0x1e724a){const _0x301011=_0x3db51b,_0x23ea14=this['isGaugeHorizontal'](),_0xae4be6=Sprite_FieldGaugeATB['Settings'][_0x301011(0x18c)];if(_0x23ea14&&_0xae4be6)return _0x2bb464['x']-_0x1e724a['x'];else{if(_0x23ea14&&!_0xae4be6)return _0x1e724a['x']-_0x2bb464['x'];else{if(!_0x23ea14&&_0xae4be6)return _0x2bb464['y']-_0x1e724a['y'];else{if(!_0x23ea14&&!_0xae4be6)return _0x1e724a['y']-_0x2bb464['y'];}}}},Sprite_FieldGaugeATB['prototype'][_0x3db51b(0x1cf)]=function(){const _0x5db646=_0x3db51b;this[_0x5db646(0x207)]=$gameSystem[_0x5db646(0x216)]();};function Sprite_FieldMarkerATB(){const _0x29ca05=_0x3db51b;this[_0x29ca05(0x241)](...arguments);}Sprite_FieldMarkerATB['prototype']=Object[_0x3db51b(0x253)](Sprite_Clickable['prototype']),Sprite_FieldMarkerATB[_0x3db51b(0x143)]['constructor']=Sprite_FieldMarkerATB,Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x241)]=function(_0xe9b7c6,_0x483df8,_0x371f90){const _0x582118=_0x3db51b;this[_0x582118(0x11a)]=_0xe9b7c6,this[_0x582118(0x21c)]=_0x483df8,this[_0x582118(0x209)]=_0x371f90,Sprite_Clickable[_0x582118(0x143)][_0x582118(0x241)][_0x582118(0x2c1)](this),this[_0x582118(0x202)](),this[_0x582118(0x14a)](),this['opacity']=this[_0x582118(0x10f)]();},Sprite_FieldMarkerATB['prototype']['initMembers']=function(){const _0x42c7fc=_0x3db51b;this[_0x42c7fc(0x13a)]['x']=0.5,this['anchor']['y']=0.5;},Sprite_FieldMarkerATB[_0x3db51b(0x143)]['createChildren']=function(){const _0x262b53=_0x3db51b;this[_0x262b53(0x138)](),this['createGraphicSprite'](),this[_0x262b53(0x1ba)](),this[_0x262b53(0x19a)](),this[_0x262b53(0x208)](),this['updatePositionOnGauge'](!![]);},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x138)]=function(){const _0x28585c=_0x3db51b;if(!Sprite_FieldGaugeATB[_0x28585c(0x24c)]['ShowMarkerBg'])return;const _0x537ac0=Sprite_FieldGaugeATB[_0x28585c(0x24c)],_0x77a98b=this[_0x28585c(0x21c)]===$gameParty?'Actor':_0x28585c(0x177),_0x4d221b=_0x28585c(0x150)[_0x28585c(0x14f)](_0x77a98b),_0x2f3116=new Sprite();_0x2f3116[_0x28585c(0x13a)]['x']=this[_0x28585c(0x13a)]['x'],_0x2f3116['anchor']['y']=this[_0x28585c(0x13a)]['y'];if(_0x537ac0[_0x4d221b])_0x2f3116['bitmap']=ImageManager[_0x28585c(0x1b7)](_0x537ac0[_0x4d221b]);else{const _0x4c5c7e=_0x537ac0['MarkerSize'];_0x2f3116[_0x28585c(0x252)]=new Bitmap(_0x4c5c7e,_0x4c5c7e);const _0x1abcd0=ColorManager['getColor'](_0x537ac0[_0x28585c(0x1e8)[_0x28585c(0x14f)](_0x77a98b)]),_0x37d137=ColorManager[_0x28585c(0x29c)](_0x537ac0[_0x28585c(0x1b0)[_0x28585c(0x14f)](_0x77a98b)]);_0x2f3116[_0x28585c(0x252)][_0x28585c(0x15f)](0x0,0x0,_0x4c5c7e,_0x4c5c7e,_0x1abcd0,_0x37d137,!![]);}this['_backgroundSprite']=_0x2f3116,this[_0x28585c(0x214)](this['_backgroundSprite']),this[_0x28585c(0x1a8)]=this[_0x28585c(0x16c)][_0x28585c(0x1a8)],this[_0x28585c(0x203)]=this['_backgroundSprite']['height'];},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x238)]=function(){const _0x5eba20=_0x3db51b,_0x13e706=new Sprite();_0x13e706[_0x5eba20(0x13a)]['x']=this[_0x5eba20(0x13a)]['x'],_0x13e706['anchor']['y']=this[_0x5eba20(0x13a)]['y'],this[_0x5eba20(0x257)]=_0x13e706,this[_0x5eba20(0x214)](this['_graphicSprite']),this[_0x5eba20(0x1fe)]();},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x1ba)]=function(){const _0x8681b4=_0x3db51b;if(!Sprite_FieldGaugeATB['Settings'][_0x8681b4(0x103)])return;const _0x5712af=Sprite_FieldGaugeATB[_0x8681b4(0x24c)],_0x454d5c=this[_0x8681b4(0x21c)]===$gameParty?'Actor':_0x8681b4(0x177),_0x50d42f=_0x8681b4(0x21b)['format'](_0x454d5c),_0x4ca606=new Sprite();_0x4ca606[_0x8681b4(0x13a)]['x']=this['anchor']['x'],_0x4ca606[_0x8681b4(0x13a)]['y']=this[_0x8681b4(0x13a)]['y'];if(_0x5712af[_0x50d42f])_0x4ca606[_0x8681b4(0x252)]=ImageManager[_0x8681b4(0x1b7)](_0x5712af[_0x50d42f]);else{let _0x251f09=_0x5712af[_0x8681b4(0x298)],_0x45d80b=_0x5712af[_0x8681b4(0x254)];_0x4ca606[_0x8681b4(0x252)]=new Bitmap(_0x251f09,_0x251f09);const _0x27eed7=_0x8681b4(0x27f),_0x30f21e=ColorManager[_0x8681b4(0x29c)](_0x5712af[_0x8681b4(0x133)[_0x8681b4(0x14f)](_0x454d5c)]);_0x4ca606[_0x8681b4(0x252)][_0x8681b4(0x189)](0x0,0x0,_0x251f09,_0x251f09,_0x27eed7),_0x251f09-=0x2,_0x4ca606[_0x8681b4(0x252)][_0x8681b4(0x189)](0x1,0x1,_0x251f09,_0x251f09,_0x30f21e),_0x251f09-=_0x45d80b*0x2,_0x4ca606[_0x8681b4(0x252)][_0x8681b4(0x189)](0x1+_0x45d80b,0x1+_0x45d80b,_0x251f09,_0x251f09,_0x27eed7),_0x251f09-=0x2,_0x45d80b+=0x1,_0x4ca606[_0x8681b4(0x252)]['clearRect'](0x1+_0x45d80b,0x1+_0x45d80b,_0x251f09,_0x251f09);}this[_0x8681b4(0x16c)]=_0x4ca606,this['addChild'](this['_backgroundSprite']);},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x19a)]=function(){const _0x5c3f73=_0x3db51b,_0x1b5c7f=Sprite_FieldGaugeATB[_0x5c3f73(0x24c)];if(!_0x1b5c7f['EnemyBattlerDrawLetter'])return;if(this[_0x5c3f73(0x21c)]===$gameParty)return;const _0x2f12d7=_0x1b5c7f[_0x5c3f73(0x298)],_0x3e632=new Sprite();_0x3e632[_0x5c3f73(0x13a)]['x']=this[_0x5c3f73(0x13a)]['x'],_0x3e632[_0x5c3f73(0x13a)]['y']=this[_0x5c3f73(0x13a)]['y'],_0x3e632[_0x5c3f73(0x252)]=new Bitmap(_0x2f12d7,_0x2f12d7),this[_0x5c3f73(0x226)]=_0x3e632,this['addChild'](this[_0x5c3f73(0x226)]);},Sprite_FieldMarkerATB['prototype'][_0x3db51b(0x208)]=function(){const _0x4f69d5=_0x3db51b,_0x5118d7=Sprite_FieldGaugeATB['Settings'];if(!_0x5118d7[_0x4f69d5(0x1d5)])return;const _0x3303fe=new Sprite();_0x3303fe[_0x4f69d5(0x13a)]['x']=this['anchor']['x'],_0x3303fe[_0x4f69d5(0x13a)]['y']=this['anchor']['y'],this['setupArrowSprite'](_0x3303fe),this[_0x4f69d5(0x219)]=_0x3303fe,this[_0x4f69d5(0x214)](this[_0x4f69d5(0x219)]);},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x137)]=function(_0x40fae7){const _0x5794b8=_0x3db51b,_0x30c8be=Sprite_FieldGaugeATB[_0x5794b8(0x24c)],_0x288271=_0x30c8be['MarkerSize'],_0x4e3717=Math[_0x5794b8(0x2bc)](_0x288271/0x2),_0xe85f9e=this['isGaugeHorizontal'](),_0x5bfdaf=this[_0x5794b8(0x21c)]===$gameParty?_0x5794b8(0x199):'Enemy',_0x1606ad=_0x30c8be[_0x5794b8(0x1d0)[_0x5794b8(0x14f)](_0x5bfdaf)];_0x40fae7[_0x5794b8(0x252)]=ImageManager['loadSystem'](_0x30c8be[_0x5794b8(0x210)]);const _0x434721=0x18,_0x36a498=_0x434721/0x2,_0x309cc6=0x60+_0x434721,_0x17def2=0x0+_0x434721;if(_0xe85f9e&&_0x1606ad)_0x40fae7[_0x5794b8(0x1e7)](_0x309cc6+_0x36a498,_0x17def2+_0x36a498+_0x434721,_0x434721,_0x36a498),_0x40fae7['y']+=_0x4e3717,_0x40fae7['anchor']['y']=0x0;else{if(_0xe85f9e&&!_0x1606ad)_0x40fae7[_0x5794b8(0x1e7)](_0x309cc6+_0x36a498,_0x17def2,_0x434721,_0x36a498),_0x40fae7['y']-=_0x4e3717,_0x40fae7[_0x5794b8(0x13a)]['y']=0x1;else{if(!_0xe85f9e&&_0x1606ad)_0x40fae7[_0x5794b8(0x1e7)](_0x309cc6,_0x17def2+_0x36a498,_0x36a498,_0x434721),_0x40fae7['x']-=Math['ceil'](_0x4e3717*1.75),_0x40fae7[_0x5794b8(0x13a)]['x']=0x0;else!_0xe85f9e&&!_0x1606ad&&(_0x40fae7[_0x5794b8(0x1e7)](_0x309cc6+_0x434721+_0x36a498,_0x17def2+_0x36a498,_0x36a498,_0x434721),_0x40fae7['x']+=Math['ceil'](_0x4e3717*1.75),_0x40fae7[_0x5794b8(0x13a)]['x']=0x1);}}},Sprite_FieldMarkerATB['prototype'][_0x3db51b(0x1e3)]=function(){const _0x323aca=_0x3db51b;return this[_0x323aca(0x21c)]===$gameParty?$gameParty['battleMembers']()[this['_index']]:$gameTroop[_0x323aca(0x227)]()[this['_index']];},Sprite_FieldMarkerATB['prototype'][_0x3db51b(0x273)]=function(){const _0x5c5549=_0x3db51b;Sprite_Clickable['prototype']['update'][_0x5c5549(0x2c1)](this),this[_0x5c5549(0x124)](),this[_0x5c5549(0x22e)](),this[_0x5c5549(0x218)](),this[_0x5c5549(0x1f6)](),this['updateGraphicHue'](),this[_0x5c5549(0x1db)](),this['updateSelectionEffect']();},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x124)]=function(){const _0x197b2b=_0x3db51b,_0x4b6497=this[_0x197b2b(0x10f)](),_0x43282e=Sprite_FieldGaugeATB['Settings'][_0x197b2b(0x261)];if(this['opacity']>_0x4b6497)this[_0x197b2b(0x266)]=Math[_0x197b2b(0x275)](_0x4b6497,this['opacity']-_0x43282e);else this[_0x197b2b(0x266)]<_0x4b6497&&(this[_0x197b2b(0x266)]=Math['min'](_0x4b6497,this['opacity']+_0x43282e));},Sprite_FieldMarkerATB['prototype'][_0x3db51b(0x10f)]=function(){const _0x55aee5=_0x3db51b,_0x3f3e7d=this[_0x55aee5(0x1e3)]();if(!_0x3f3e7d)return 0x0;if(_0x3f3e7d[_0x55aee5(0x1ee)]())return 0x0;if(_0x3f3e7d[_0x55aee5(0x183)]())return 0x0;return 0xff;},Sprite_FieldMarkerATB[_0x3db51b(0x143)]['isGaugeHorizontal']=function(){const _0x205567=_0x3db51b;if(this[_0x205567(0x1f0)]!==undefined)return this[_0x205567(0x1f0)];const _0x179be4=Sprite_FieldGaugeATB[_0x205567(0x24c)][_0x205567(0x173)];return this['_horz']=[_0x205567(0x122),_0x205567(0x158)]['includes'](_0x179be4),this['_horz'];},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x22e)]=function(){const _0x5634e9=_0x3db51b,_0x4c00e4=Sprite_FieldGaugeATB['Settings'],_0x42f7db=this[_0x5634e9(0x1ea)](),_0x169bbf=this[_0x5634e9(0x21c)]===$gameParty?_0x5634e9(0x199):'Enemy',_0x181d0c=_0x4c00e4['MarkerOffset'],_0x5e4109=_0x4c00e4['%1Side'[_0x5634e9(0x14f)](_0x169bbf)];_0x42f7db?(this['y']=_0x4c00e4['GaugeThick']/0x2,this['y']+=_0x5e4109?-_0x181d0c:_0x181d0c):(this['x']=_0x4c00e4[_0x5634e9(0x102)]/0x2,this['x']+=_0x5e4109?_0x181d0c:-_0x181d0c);},Sprite_FieldMarkerATB['prototype'][_0x3db51b(0x218)]=function(_0x83f9d6){const _0x11beaf=_0x3db51b,_0x5271fd=this['battler']();if(!_0x5271fd)return;const _0x4d455f=Sprite_FieldGaugeATB[_0x11beaf(0x24c)],_0x361ed0=this['isGaugeHorizontal'](),_0x5b9602=this['targetPositionOnGauge'](),_0x26b1fc=_0x83f9d6?Infinity:_0x4d455f[_0x11beaf(0x278)];if(_0x361ed0&&this['x']!==_0x5b9602){if(this['x']>_0x5b9602)this['x']=Math[_0x11beaf(0x275)](_0x5b9602,this['x']-_0x26b1fc);if(this['x']<_0x5b9602)this['x']=Math[_0x11beaf(0x215)](_0x5b9602,this['x']+_0x26b1fc);}else{if(!_0x361ed0&&this['x']!==_0x5b9602){if(this['y']>_0x5b9602)this['y']=Math['max'](_0x5b9602,this['y']-_0x26b1fc);if(this['y']<_0x5b9602)this['y']=Math['min'](_0x5b9602,this['y']+_0x26b1fc);}}},Sprite_FieldMarkerATB['prototype'][_0x3db51b(0x283)]=function(){const _0x4f82fe=_0x3db51b,_0x413e31=Sprite_FieldGaugeATB['Settings'],_0x686119=this['battler'](),_0x156c2b=this[_0x4f82fe(0x1ea)](),_0x1d9f50=this['_gaugeSprite'][_0x4f82fe(0x252)][_0x4f82fe(0x1a8)],_0x2f169c=this[_0x4f82fe(0x209)]['bitmap'][_0x4f82fe(0x203)],_0x1f1b4a=_0x413e31[_0x4f82fe(0x291)][_0x4f82fe(0x2bb)](0x0,0x1),_0xb502f3=_0x413e31[_0x4f82fe(0x18c)];let _0x35a0d2=_0x686119[_0x4f82fe(0x1df)]()*_0x1f1b4a;_0x35a0d2+=(0x1-_0x1f1b4a)*_0x686119['getAtbCastTimeRate']();if(_0x686119===BattleManager[_0x4f82fe(0x272)])_0x35a0d2=0x1;if(!_0xb502f3)_0x35a0d2=0x1-_0x35a0d2;let _0x4aa1d6=0x0;if(_0x156c2b)_0x4aa1d6=_0x35a0d2*_0x1d9f50;else!_0x156c2b&&(_0x4aa1d6=_0x35a0d2*_0x2f169c);return Math[_0x4f82fe(0x2bc)](_0x4aa1d6);},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x1f6)]=function(){const _0x232f83=_0x3db51b,_0x299e0e=this[_0x232f83(0x1e3)]();if(!_0x299e0e)return;const _0x4fd55=Sprite_FieldGaugeATB[_0x232f83(0x24c)],_0x1eeff6=this[_0x232f83(0x21c)]===$gameParty?_0x232f83(0x199):'Enemy';let _0x5b365e=_0x299e0e[_0x232f83(0x151)]();if(_0x299e0e['isActor']()&&_0x5b365e===_0x232f83(0x232))_0x5b365e=_0x232f83(0x12c);else _0x299e0e[_0x232f83(0x26f)]()&&_0x5b365e===_0x232f83(0x2be)&&(_0x5b365e=_0x232f83(0x232));if(this[_0x232f83(0x2a3)]!==_0x5b365e)return this['processUpdateGraphic']();switch(this[_0x232f83(0x2a3)]){case _0x232f83(0x12c):if(this[_0x232f83(0x17a)]!==_0x299e0e[_0x232f83(0x24b)]())return this[_0x232f83(0x1fe)]();if(this[_0x232f83(0x22b)]!==_0x299e0e[_0x232f83(0x2a4)]())return this[_0x232f83(0x1fe)]();break;case _0x232f83(0xfe):if(this[_0x232f83(0x175)]!==_0x299e0e[_0x232f83(0x1e4)]())return this[_0x232f83(0x1fe)]();break;case _0x232f83(0x232):if(_0x299e0e['hasSvBattler']()){if(this[_0x232f83(0x23e)]!==_0x299e0e[_0x232f83(0x1da)]())return this[_0x232f83(0x1fe)]();}else{if(this[_0x232f83(0x22f)]!==_0x299e0e[_0x232f83(0x166)]())return this[_0x232f83(0x1fe)]();}break;case _0x232f83(0x2be):if(_0x299e0e['isActor']()){if(this['_graphicSv']!==_0x299e0e[_0x232f83(0x166)]())return this[_0x232f83(0x1fe)]();}else{if(this['_graphicEnemy']!==_0x299e0e['battlerName']())return this[_0x232f83(0x1fe)]();}break;}},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x1fe)]=function(){const _0x57b2f2=_0x3db51b,_0x5e79b3=this['battler']();if(!_0x5e79b3)return;this['_graphicType']=_0x5e79b3[_0x57b2f2(0x151)]();if(_0x5e79b3['isActor']()&&this[_0x57b2f2(0x2a3)]===_0x57b2f2(0x232))this[_0x57b2f2(0x2a3)]=_0x57b2f2(0x12c);else _0x5e79b3[_0x57b2f2(0x26f)]()&&this[_0x57b2f2(0x2a3)]===_0x57b2f2(0x2be)&&(this[_0x57b2f2(0x2a3)]=_0x57b2f2(0x232));let _0x342cd6;switch(this['_graphicType']){case _0x57b2f2(0x12c):this['_graphicFaceName']=_0x5e79b3[_0x57b2f2(0x24b)](),this[_0x57b2f2(0x22b)]=_0x5e79b3['fieldAtbGraphicFaceIndex'](),_0x342cd6=ImageManager['loadFace'](this[_0x57b2f2(0x17a)]),_0x342cd6[_0x57b2f2(0x297)](this['changeFaceGraphicBitmap'][_0x57b2f2(0x1a7)](this,_0x342cd6));break;case _0x57b2f2(0xfe):this['_graphicIconIndex']=_0x5e79b3[_0x57b2f2(0x1e4)](),_0x342cd6=ImageManager[_0x57b2f2(0x1b7)](_0x57b2f2(0x118)),_0x342cd6['addLoadListener'](this['changeIconGraphicBitmap'][_0x57b2f2(0x1a7)](this,_0x342cd6));break;case _0x57b2f2(0x232):if(_0x5e79b3['hasSvBattler']())this[_0x57b2f2(0x23e)]=_0x5e79b3[_0x57b2f2(0x1da)](),_0x342cd6=ImageManager[_0x57b2f2(0x25d)](this[_0x57b2f2(0x23e)]),_0x342cd6[_0x57b2f2(0x297)](this['changeSvActorGraphicBitmap'][_0x57b2f2(0x1a7)](this,_0x342cd6));else $gameSystem[_0x57b2f2(0x2b1)]()?(this['_graphicEnemy']=_0x5e79b3[_0x57b2f2(0x166)](),_0x342cd6=ImageManager['loadSvEnemy'](this[_0x57b2f2(0x22f)]),_0x342cd6[_0x57b2f2(0x297)](this['changeEnemyGraphicBitmap'][_0x57b2f2(0x1a7)](this,_0x342cd6))):(this[_0x57b2f2(0x22f)]=_0x5e79b3[_0x57b2f2(0x166)](),_0x342cd6=ImageManager[_0x57b2f2(0x129)](this[_0x57b2f2(0x22f)]),_0x342cd6[_0x57b2f2(0x297)](this[_0x57b2f2(0x1a1)][_0x57b2f2(0x1a7)](this,_0x342cd6)));break;case _0x57b2f2(0x2be):this['_graphicSv']=_0x5e79b3[_0x57b2f2(0x166)](),_0x342cd6=ImageManager[_0x57b2f2(0x25d)](this[_0x57b2f2(0x23e)]),_0x342cd6[_0x57b2f2(0x297)](this[_0x57b2f2(0x28f)]['bind'](this,_0x342cd6));break;}},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x1c1)]=function(_0x56b06b){const _0x9c5419=_0x3db51b,_0x19e570=Sprite_FieldGaugeATB[_0x9c5419(0x24c)],_0x240fb3=_0x19e570['MarkerSize'],_0x3be776=this[_0x9c5419(0x22b)];this[_0x9c5419(0x257)][_0x9c5419(0x252)]=new Bitmap(_0x240fb3,_0x240fb3);const _0x2d324c=this[_0x9c5419(0x257)][_0x9c5419(0x252)],_0x44b535=ImageManager['faceWidth'],_0x24e941=ImageManager[_0x9c5419(0x2b8)],_0xe9083f=ImageManager[_0x9c5419(0x185)],_0x6efd6f=ImageManager[_0x9c5419(0x2b8)],_0x5ad8eb=_0x3be776%0x4*_0x44b535+(_0x44b535-_0xe9083f)/0x2,_0x570133=Math[_0x9c5419(0x277)](_0x3be776/0x4)*_0x24e941+(_0x24e941-_0x6efd6f)/0x2;_0x2d324c[_0x9c5419(0x14c)](_0x56b06b,_0x5ad8eb,_0x570133,_0xe9083f,_0x6efd6f,0x0,0x0,_0x240fb3,_0x240fb3);},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x16f)]=function(_0x3d4869){const _0x88c3c=_0x3db51b,_0x137e25=Sprite_FieldGaugeATB['Settings'],_0x52a877=_0x137e25[_0x88c3c(0x298)],_0x37ff35=this['_graphicIconIndex'];this[_0x88c3c(0x257)][_0x88c3c(0x252)]=new Bitmap(_0x52a877,_0x52a877);const _0x3caa00=this[_0x88c3c(0x257)][_0x88c3c(0x252)],_0x34f3c6=ImageManager[_0x88c3c(0x263)],_0x127d84=ImageManager[_0x88c3c(0x228)],_0x53fdaf=_0x37ff35%0x10*_0x34f3c6,_0x18464d=Math['floor'](_0x37ff35/0x10)*_0x127d84;_0x3caa00[_0x88c3c(0x14c)](_0x3d4869,_0x53fdaf,_0x18464d,_0x34f3c6,_0x127d84,0x0,0x0,_0x52a877,_0x52a877);},Sprite_FieldMarkerATB['prototype'][_0x3db51b(0x28f)]=function(_0x2a49bf){const _0x429142=_0x3db51b,_0x5d3b64=Sprite_FieldGaugeATB[_0x429142(0x24c)],_0x5b3afd=_0x5d3b64[_0x429142(0x298)];this[_0x429142(0x257)][_0x429142(0x252)]=new Bitmap(_0x5b3afd,_0x5b3afd);const _0x500eaf=this[_0x429142(0x257)][_0x429142(0x252)],_0x31f6a9=this[_0x429142(0x23e)][_0x429142(0x259)](/\$/i),_0x330f53=_0x31f6a9?0x1:ImageManager[_0x429142(0x280)],_0x442d7a=_0x31f6a9?0x1:ImageManager[_0x429142(0x111)],_0x297c40=_0x2a49bf[_0x429142(0x1a8)]/_0x330f53,_0x448c8b=_0x2a49bf[_0x429142(0x203)]/_0x442d7a,_0x1d9241=Math[_0x429142(0x215)](0x1,_0x5b3afd/_0x297c40,_0x5b3afd/_0x448c8b),_0x294cce=_0x297c40*_0x1d9241,_0x2152a4=_0x448c8b*_0x1d9241,_0x80e7ee=Math[_0x429142(0x2bc)]((_0x5b3afd-_0x294cce)/0x2),_0x122a6f=Math[_0x429142(0x2bc)]((_0x5b3afd-_0x2152a4)/0x2);_0x500eaf[_0x429142(0x14c)](_0x2a49bf,0x0,0x0,_0x297c40,_0x448c8b,_0x80e7ee,_0x122a6f,_0x294cce,_0x2152a4);},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x1a1)]=function(_0x346d01){const _0x51f4e5=_0x3db51b,_0x150053=Sprite_FieldGaugeATB[_0x51f4e5(0x24c)],_0xa859ad=_0x150053[_0x51f4e5(0x298)];this[_0x51f4e5(0x257)]['bitmap']=new Bitmap(_0xa859ad,_0xa859ad);const _0x49bdad=this['_graphicSprite'][_0x51f4e5(0x252)],_0x39ed60=Math['min'](0x1,_0xa859ad/_0x346d01[_0x51f4e5(0x1a8)],_0xa859ad/_0x346d01[_0x51f4e5(0x203)]),_0x21ba25=_0x346d01['width']*_0x39ed60,_0xbf54e9=_0x346d01[_0x51f4e5(0x203)]*_0x39ed60,_0x282865=Math[_0x51f4e5(0x2bc)]((_0xa859ad-_0x21ba25)/0x2),_0x2176c=Math['round']((_0xa859ad-_0xbf54e9)/0x2);_0x49bdad[_0x51f4e5(0x14c)](_0x346d01,0x0,0x0,_0x346d01[_0x51f4e5(0x1a8)],_0x346d01[_0x51f4e5(0x203)],_0x282865,_0x2176c,_0x21ba25,_0xbf54e9);},Sprite_FieldMarkerATB['prototype'][_0x3db51b(0x1fa)]=function(){const _0x4fdf0c=_0x3db51b,_0x5998af=this[_0x4fdf0c(0x1e3)]();if(!_0x5998af)return;if(!_0x5998af[_0x4fdf0c(0x26f)]())return;if(this[_0x4fdf0c(0x134)]===_0x5998af[_0x4fdf0c(0x2c5)]())return;this[_0x4fdf0c(0x134)]=_0x5998af[_0x4fdf0c(0x2c5)](),this[_0x4fdf0c(0x257)][_0x4fdf0c(0x184)](_0x5998af[_0x4fdf0c(0x279)]()?0x0:this[_0x4fdf0c(0x134)]);},Sprite_FieldMarkerATB['prototype']['updateLetter']=function(){const _0x52419e=_0x3db51b;if(!this[_0x52419e(0x226)])return;const _0x556bfa=this[_0x52419e(0x1e3)]();if(!_0x556bfa)return;if(this[_0x52419e(0x13b)]===_0x556bfa[_0x52419e(0x13b)]&&this[_0x52419e(0x15c)]===_0x556bfa['_plural'])return;this[_0x52419e(0x13b)]=_0x556bfa[_0x52419e(0x13b)],this[_0x52419e(0x15c)]=_0x556bfa[_0x52419e(0x15c)];const _0x18dfa1=Sprite_FieldGaugeATB[_0x52419e(0x24c)],_0x30853a=_0x18dfa1[_0x52419e(0x298)],_0x2941f1=Math[_0x52419e(0x277)](_0x30853a/0x2),_0x3e5a4b=this[_0x52419e(0x226)][_0x52419e(0x252)];_0x3e5a4b[_0x52419e(0x153)]();if(!this[_0x52419e(0x15c)])return;_0x3e5a4b['fontFace']=_0x18dfa1[_0x52419e(0x2a8)]||$gameSystem[_0x52419e(0x22d)](),_0x3e5a4b[_0x52419e(0x284)]=_0x18dfa1[_0x52419e(0x1a0)]||0x10,_0x3e5a4b[_0x52419e(0x113)](this[_0x52419e(0x13b)],0x2,_0x2941f1,_0x30853a-0x4,_0x2941f1-0x2,'right');},Sprite_FieldMarkerATB['prototype'][_0x3db51b(0x2a9)]=function(){const _0x409453=_0x3db51b,_0x415f77=this['battler']();if(!_0x415f77)return;const _0x521579=_0x415f77[_0x409453(0x1e3)]();if(!_0x521579)return;const _0x3f7e59=_0x521579[_0x409453(0x128)]();if(!_0x3f7e59)return;this[_0x409453(0x260)](_0x3f7e59['_blendColor']);},Sprite_FieldMarkerATB[_0x3db51b(0x143)][_0x3db51b(0x217)]=function(){return this['battler']();};function _0x372a(){const _0x4c68e6=['atbColor','numActions','Item-%1-%2','GaugeLengthHorz','VisuMZ_1_BattleCore','icon','charging','IconIndex','InterruptFlashDuration','GaugeThick','ShowMarkerBorder','EnemyBattlerFaceName','_fieldAtbGaugeFaceIndex','constructor','setupTextPopup','canMove','length','AdjustRect','97ttnXrK','isSceneBattle','setHomeLocation','_svBattlerSprite','targetOpacity','Cast','svActorVertCells','_onRestrictBypassAtbReset','drawText','process_VisuMZ_BattleSystemATB_JS_Notetags','setBattleSystemATBFieldGaugeVisible','setText','isATB','IconSet','changeAtbCastTime','_index','abs','slow%1','atbInterrupt','(?:GAUGE|TIME|SPEED)','createStateSprite','_tpbCastTime','attackSpeed','top','makeTpbActions','updateOpacity','ParseItemNotetags','1672452EMUHbU','Sprite_Battler_setBattler','mainSprite','loadEnemy','gaugeHeight','updateAtbGaugeSpritePosition','face','isAtbCastingState','some','Scene_Battle_createAllWindows','AddOption','Scene_Boot_onDatabaseLoaded','ConvertParams','%1BorderColor','_graphicHue','BattleSystemATB','ShowActorGauge','setupArrowSprite','createBackgroundSprite','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20keyType\x20=\x20\x27%2\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20rate\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(keyType\x20===\x20\x27Charge\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbChargeTime;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(keyType\x20===\x20\x27Cast\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbCastTime\x20/\x20Math.max(target.tpbRequiredCastTime(),\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20originalValue\x20=\x20rate;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20NaN\x20Check\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(isNaN(rate)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27NaN\x20rate\x20created\x20by\x20%2\x27.format(\x27\x27,obj.name));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27Restoring\x20rate\x20to\x20%2\x27.format(\x27\x27,originalValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20originalValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rate;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','anchor','_letter','subject','tpbAcceleration','full','exit','addBattleSystemATBCommands','Sprite_Gauge_gaugeColor1','_atbFieldGaugeVisible','prototype','RepositionTopHelpY','gaugeColor2','Aggro','createGaugeBitmap','initTpbChargeTime','setAtbChargeTime','createChildren','ARRAYSTRUCT','blt','default','reduce','format','%1SystemBg','fieldAtbGraphicType','currentValue','clear','tpbRelativeSpeed','atbAcceleration','BattlerRelativeSpeedJS','drawGaugeBitmap','bottom','BattleCore','requestFauxAnimation','tpbSpeed','_plural','EnemyBattlerType','DisplayOffsetX','gradientFillRect','ceil','Interrupt','RepositionTopForHelp','PostStartTurnJS','faceIndex','setBattler','battlerName','traitObjects','toUpperCase','isAtbChargingState','onAtbInterrupt','getAtbCastTimeRate','_backgroundSprite','_statusWindow','textColor','changeIconGraphicBitmap','Game_Battler_applyTpbPenalty','FieldGaugeEnemyFace','initBattleSystemATB','DisplayPosition','Game_Battler_onRestrict','_graphicIconIndex','isTpb','Enemy','Sprite_Battler_updateMain','ARRAYEVAL','_graphicFaceName','Class-%1-%2','showVisualAtbGauge','FastRate','328iRLmzo','_battlerContainer','appear','cast1','visualAtbGauge','isDead','setHue','faceWidth','_fieldGaugeATB_Container','235WjPrJJ','parameters','fillRect','Game_Battler_tpbAcceleration','ready','GaugeDirection','EnemyBattlerFaceIndex','createFieldAtbGraphicIconIndex','cast%1','concat','Skill-%1-%2','_fnord','stop','tpbRequiredCastTime','Game_Battler_tpbRelativeSpeed','addGeneralOptions','ActorBattlerIcon','description','Actor','createLetterSprite','Enemy-%1-%2','makeActions','TpbAccelerationJS','applyItemUserEffect','createFieldAtbGraphicFaceName','EnemyBattlerFontSize','changeEnemyGraphicBitmap','skills','TpbCastTimeJS','_helpWindow','createBattlerSprite','InterruptText','bind','width','isCTB','Gauge','VisuMZ_2_AggroControlSystem','_fieldAtbGaugeFaceName','boxHeight','allBattleMembers','_homeY','%1BgColor2','createFieldAtbGraphicFaceIndex','VisuMZ_0_CoreEngine','FaceIndex','placeGauge','Parse_Notetags_CreateJS','_fieldGaugeATB','loadSystem','setAtbGraphicIconIndex','trim','createBorderSprite','ConfigManager_makeData','loadWindowskin','registerCommand','_scene','updateTpb','createAllWindows','changeFaceGraphicBitmap','undecided','boxWidth','cast','setup','ctGaugeColor1','createFieldGaugeSpriteATB','currentAction','EscapeFailPenalty','applyATBPenalty','faceName','NUM','FieldGauge','isAttack','updateVisibility','%1Side','OffsetX','Window_Options_addGeneralOptions','filter','Game_Battler_tpbRequiredCastTime','ShowMarkerArrow','Sprite_Gauge_gaugeColor2','OffsetY','atbGaugeColor','Window_Help_setItem','svBattlerName','updateLetter','currentMaxValue','applyGlobal','clearFieldAtbGraphics','tpbChargeTime','_forcing','atbCurrentMaxValue','_fieldAtbGaugeIconIndex','battler','fieldAtbGraphicIconIndex','startTpbTurn','_windowskin','setFrame','%1BgColor1','note','isGaugeHorizontal','Sprite_Enemy_createStateIconSprite','TpbBaseSpeedCalcJS','actor','isHidden','Mechanics','_horz','BattleManager_isActiveTpb','AnchorY','return\x200','tpbBaseSpeed','_atbColors','updateGraphic','11249868WOuaeN','_fieldAtbGaugeGraphicType','name','updateGraphicHue','GaugeSystemSkin','gaugeColor1','Game_Actor_clearActions','processUpdateGraphic','map','makeData','battleUIOffsetY','initMembers','height','removeState','createStateIconSprite','Game_Battler_startTpbCasting','visible','createArrowSprite','_gaugeSprite','InterruptAnimationID','STRUCT','5237820JFUzmA','StunsResetGauge','createFieldAtbGraphicType','setAtbAfterSpeed','MarkerArrowWindowSkin','10422sYAApH','die','TpbSpeedCalcJS','addChild','min','isBattleSystemATBFieldGaugeVisible','getStateTooltipBattler','updatePositionOnGauge','_arrowSprite','PreStartTurnJS','%1SystemBorder','_unit','_skinSprite','InterruptMute','full%1','392fUzkHP','version','Armor-%1-%2','createKeyJS','applyTpbPenalty','default%1','_letterSprite','members','iconHeight','setActionState','UseFieldGauge','_graphicFaceIndex','Color','mainFontFace','updatePositionOffset','_graphicEnemy','paramBuffRate','Game_Battler_tpbBaseSpeed','enemy','_statusType','Game_Battler_tpbSpeed','updatePosition','Game_Unit_updateTpb','Sprite_Gauge_currentMaxValue','createGraphicSprite','_tpbChargeTime','compareBattlerSprites','setupAtbGaugeSprite','onRestrict','Scale','_graphicSv','atbCurrentValue','toLowerCase','initialize','Game_BattlerBase_appear','fast%1','applyBattleSystemATBUserEffect','Options','AggroControlSystem','InterruptTextColor','_homeX','28900wbjutb','updateAtbGaugeSpriteVisibility','fieldAtbGraphicFaceName','Settings','parse','process_VisuMZ_BattleSystemATB_CreateRegExp','slow','Enemies','item','bitmap','create','BorderThickness','RegExp','maxCommands','_graphicSprite','ParseAllNotetags','match','Sprite_Actor_createStateSprite','isActiveTpb','disappear','loadSvActor','onDatabaseLoaded','aggroGauge','setBlendColor','OpacityRate','atbStopped','iconWidth','atbActive','setAtbCastTime','opacity','startTpbCasting','addChildAt','createAtbGaugeSprite','RepositionTopHelpX','Game_BattlerBase_revive','applyData','updateBattleContainerOrder','addBattleSystemATBShowGaugeCommand','isEnemy','Game_Action_applyGlobal','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_subject','update','isAppeared','max','_atbGaugeSprite','floor','MarkerSpeed','hasSvBattler','fast','Charge','<JS\x20%2\x20%1\x20%3>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/JS\x20%2\x20%1\x20%3>','clearActions','BattleManager_endBattlerActions','#000000','svActorHorzCells','includes','createGaugeSprite','targetPositionOnGauge','fontSize','processBattleCoreJS','FieldGaugeClearEnemyGraphic','Game_Action_applyItemUserEffect','_battler','createActorSprites','endBattlerActions','_atbAfterSpeed','Window_StatusBase_placeGauge','canMakeTpbActionsAtStartTpbTurn','isTpbCharged','changeSvActorGraphicBitmap','isRestricted','GaugeSplit','children','isShowAtbGauge','createFieldGaugeSkin','ShowEnemyGauge','Actors','addLoadListener','MarkerSize','69162TWptpp','_tpbTurnCount','VisibleGauge','getColor','11LINXxa','sort','_windowLayer','clearTpbChargeTime','createEnemySprites','changeAtbChargeTime','_graphicType','fieldAtbGraphicFaceIndex','atbSpeed','ctGaugeColor2','initTpbChargeTimeATB','EnemyBattlerFontFace','updateSelectionEffect','createBattlerContainer','ColorManager_loadWindowskin','Visible','lineHeight','Game_System_initialize','JSON','battleUIOffsetX','isSideView','createFieldGaugeContainerATB','setupBattleSystemATBColors','applyItemBattleSystemATBUserEffect','VisuMZ_2_BattleSystemCTB','speed','FaceName','faceHeight','revive','Sprite_Gauge_currentValue','clamp','round','getChildIndex','svactor','_tpbState','Scene_Options_maxCommands','call','scale','After','createBattlerSprites','battlerHue','ARRAYNUM','ConfigManager_applyData','ParseSkillNotetags','time','11854UIlSUK','startEffect','FieldGaugeActorFace','FieldGaugeClearActorGraphic','AnchorX','Game_Battler_initTpbChargeTime','SlowRate','Sprite_Enemy_startEffect'];_0x372a=function(){return _0x4c68e6;};return _0x372a();}