//=============================================================================
// VisuStella MZ - Battle System - STB - Standard Turn Battle
// VisuMZ_2_BattleSystemSTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemSTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemSTB = VisuMZ.BattleSystemSTB || {};
VisuMZ.BattleSystemSTB.version = 1.19;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.19] [BattleSystemSTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_STB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Standard Turn Battle (STB) system uses RPG Maker MZ's default non-TPB
 * battle system as a base. Action orders are determined by the battler's AGI
 * values and they go from highest to lowest. However, actions are not selected
 * at the start of the turn. Instead, as the turn progresses, actions are then
 * picked as each battler's turn comes up and is executed immediately.
 * 
 * Optional to the battle system but fine tuned to it is the Exploit System.
 * When landing an elemental weakness or critical hit against a foe, the
 * battler can gain bonuses as well as an extra turn while the foe will become
 * stunned or gain any desired state(s). When all enemies are exploited in a
 * single turn, a common event can also be played, too.
 * 
 * A Turn Order Display will also appear on the screen to show the order the
 * battlers will take their turns in. This lets the player plan in advance on
 * how to go about the rest of the turn.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "stb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Utilizes the balanced AGI nature of the Default Turn Battle system.
 * * Allows for actions to execute immediately upon selection.
 * * A Turn Order Display to show the player when each battler will have its
 *   turn to perform an action.
 * * Skills and Items can have an "Instant Use" effect, which allows them to
 *   perform an action immediately without using up a turn.
 * * An optional Exploit System that can be disabled if desired, but otherwise,
 *   fine tuned to make use of STB's highly compatible nature.
 * * Landing an elemental weakness or critical hit can allow the active battler
 *   to gain bonuses, ranging from states to extra actions to custom effects
 *   that can be added on through JavaScript plugin parameters.
 * * An exploited enemy can suffer from states and/or custom effects added
 *   through JavaScript plugin parameters.
 * * If all enemies are exploited, a common event can run to allow for a custom
 *   follow up action.
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
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
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
 * Turn Order Display
 * 
 * The Turn Order Display will capture the battle's currently active battler
 * and any battlers found in the active battlers array for the BattleManager.
 * This does not overwrite any functions, but the Turn Order Display may or may
 * not conflict with any existing HUD elements that are already positioned on
 * the screen. If so, you can choose to offset the Turn Order Display or move
 * it to a different part of the screen through the plugin parameters.
 * 
 * ---
 *
 * Action Speed
 * 
 * For skills and items, action speeds now behave differently now. Because
 * actions are now decided after a turn starts, positioning will no longer be
 * decided from the selected skill/item's action speed for the current turn.
 * 
 * Instead, the action speed used by a skill or item will determine the bonus
 * speed (or speed penalty if negative) for the following turn. Using a Guard
 * action with a +2000 Action Speed will raise the following turn's speed by
 * +2000, whereas what is originally a long charge time skill with -1000 speed
 * will decrease the following action's speed by -1000.
 * 
 * You can also customize how speed is calculated through JS Plugin Parameters
 * found in the Mechanics Settings.
 *
 * ---
 * 
 * Instant Use
 * 
 * Skills and Items can have an "Instant Use" property which allows them to be
 * used immediately without consuming a turn. This can be used for actions that
 * otherwise do not warrant a whole turn. These can be used for minor buffs,
 * debuffs, toggles, etc.
 * 
 * ---
 * 
 * Exploit System
 * 
 * This is an optional system. If you wish to turn it off, you can do so in the
 * plugin parameters.
 * 
 * There are two main ways that battlers can be exploited. One is by receiving
 * damage that strikes an elemental weakness. The other is by receiving damage
 * from a Critical Hit. Exploited battlers can receive penalty states. These
 * states can be adjusted in the plugin parameters. The default penalty state
 * is the Stunned state.
 * 
 * The battler doing the exploiting can receive bonuses instead. This is to
 * reward a power play. These bonuses can range from added states to receiving
 * an extra action and allowing the active battler to immediately attack again.
 * 
 * Each battler can only be exploited once per turn. This means if an enemy
 * would receive multiple attacks to its elemental weakness(es), the exploited
 * effect will only occur once per turn, meaning the penalty states won't stack
 * multiple times over. This limitation is for the sake of game balance, but if
 * you so wish, you can turn off this limitation in the plugin parameters.
 * 
 * Each action can also exploit only once per use and against an unexploited
 * target. This means battlers cannot use the same elemental attacks against
 * the same foes over and over to stack up an infinite amount of turns. If the
 * player wants to gain more bonuses, the player would have to strike against
 * unexploited foes. This limitation is for the sake of game balance, but if
 * you so wish, you can turn off this limitation in the plugin parameters.
 * 
 * When all members of a party/troop are exploited, a common event can be
 * triggered to run, allowing for potential follow up actions. How you wish to
 * make these common events is up to you.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins. Here is a list
 * of the ones this plugin is not compatible with.
 *
 * ---
 * 
 * VisuMZ_2_PartySystem
 * 
 * In battle, the player cannot change entire parties at once from the Party
 * Command Window. The feature will be unaccessible while Standard Turn Battle
 * is in play. However, the player can still change party members through the
 * Actor Command Window by having actors replace other actors. Party changing
 * is also available through battle events, Common Events, and script calls.
 * 
 * ---
 *
 * VisuMZ_4_BreakShields
 * 
 * The Break Shields plugin can be used together with Battle System - STB.
 * However, it cannot be used together with the STB Exploit system. This is
 * because both Break Shields and the Exploit system function under similar
 * mechanics and will conflict. However, if STB's Exploit system is turned off,
 * then you can use all of the Break Shield plugin's features fully.
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
 * ---
 * 
 * === General STB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <STB Help>
 *  description
 *  description
 * </STB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under STB.
 * - This is primarily used if the skill behaves differently in STB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to STB.
 *
 * ---
 * 
 * === STB Turn Order Display-Related Notetags ===
 * 
 * These notetags affect the STB Turn Order Display
 * 
 * ---
 *
 * <STB Turn Order Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <STB Turn Order Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <STB Turn Order Face: Monster, 1>
 * 
 * ---
 * 
 * === Instant Use-Related Notetags ===
 * 
 * ---
 *
 * <STB Instant>
 * <STB Instant Use>
 * <STB Instant Cast>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to be used immediately without consuming a turn.
 *
 * ---
 * 
 * === Exploit-Related Notetags ===
 * 
 * ---
 *
 * <STB Exploited Gain State: id>
 * <STB Exploited Gain State: id, id, id>
 * 
 * <STB Exploited Gain State: name>
 * <STB Exploited Gain State: name, name, name>
 *
 * - Used for: Class, Enemy Notetags
 * - If an actor (with the specified class) or enemy is exploited via elemental
 *   weaknesses or critical hits, apply the listed penalty state(s).
 * - Replace 'id' with a number representing the penalty state ID's you wish
 *   to apply to the exploited battler.
 * - Insert multiple 'id' values to apply multiple penalty states at once.
 * - Replace 'name' with the name of the penalty state you wish to apply to the
 *   exploited battler.
 * - Insert multiple 'name' entries to apply multiple penalty states at once.
 *
 * ---
 *
 * <STB Cannot Be Exploited>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - This prevents the affected battler from being exploited via elemental
 *   weaknesses or critical hits.
 *
 * ---
 *
 * <STB Exploiter Gain State: id>
 * <STB Exploiter Gain State: id, id, id>
 * 
 * <STB Exploiter Gain State: name>
 * <STB Exploiter Gain State: name, name, name>
 *
 * - Used for: Class, Enemy Notetags
 * - If an actor (with the specified class) or enemy exploits an opponent with
 *   an elemental weakness or critical hit, apply the listed bonus state(s).
 * - Replace 'id' with a number representing the bonus state ID's you wish
 *   to apply to the exploited battler.
 * - Insert multiple 'id' values to apply multiple bonus states at once.
 * - Replace 'name' with the name of the bonus state you wish to apply to the
 *   exploited battler.
 * - Insert multiple 'name' entries to apply multiple bonus states at once.
 *
 * ---
 *
 * <STB Cannot Be Exploiter>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - This prevents the affected battler from exploiting any opponents via
 *   elemental weaknesses or critical hits.
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
 * Actor: Change STB Turn Order Icon
 * - Changes the icons used for the specific actor(s) on the STB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Actor: Change STB Turn Order Face
 * - Changes the faces used for the specific actor(s) on the STB Turn Order.
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
 * Actor: Clear STB Turn Order Graphic
 * - Clears the STB Turn Order graphics for the actor(s).
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
 * Enemy: Change STB Turn Order Icon
 * - Changes the icons used for the specific enemy(ies) on the STB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change STB Turn Order Face
 * - Changes the faces used for the specific enemy(ies) on the STB Turn Order.
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
 * Enemy: Clear STB Turn Order Graphic
 * - Clears the STB Turn Order graphics for the enemy(ies).
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
 * System: STB Turn Order Visibility
 * - Determine the visibility of the STB Turn Order Display.
 *
 *   Visibility:
 *   - Changes the visibility of the STB Turn Order Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of the STB Battle System.
 *
 * ---
 *
 * Speed
 * 
 *   JS: Finalized Speed:
 *   - Code used to calculate the finalized speed at the start of each turn.
 * 
 *   JS: Next Turn Speed:
 *   - Code used to calculate speed for a following turn.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Exploit System Settings
 * ============================================================================
 *
 * Here, you can adjust the main settings for the Exploit System, including
 * where you can turn it on/off. The Exploited and Exploiter settings are
 * extensions of the Exploit System and are better off with their own sections.
 *
 * ---
 *
 * Settings
 * 
 *   Enable System?:
 *   - Enable the exploit system? 
 *   - If disabled, ignore all the  mechanics regarding the Exploit System.
 * 
 *   Critical Hits:
 *   - Do critical hits exploit the opponent?
 * 
 *   Elemental Weakness:
 *   - Do elemental weaknesses exploit the opponent?
 * 
 *     Minimum Rate:
 *     - What's the minimum rate needed to count as an elemental weakness?
 * 
 *   Forced Actions:
 *   - Apply exploit system to Forced Actions?
 *   - We added this function because forced actions can disrupt player
 *     strategies when used with the exploit system.
 * 
 *   Reset Each Turn:
 *   - Reset exploits at the end of each turn?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Exploited Effects Settings
 * ============================================================================
 *
 * These are effects for the exploited battlers (the receiving end). Change how
 * you want exploited battlers to behave here.
 *
 * ---
 *
 * Mechanics
 * 
 *   Added States:
 *   - A list of the states that are added when a target is exploited.
 * 
 *   Full Exploit Events:
 *   vs Actors Event:
 *   vs Enemies Event:
 *   - If all actors/enemies have been fully exploited, run this common event.
 *   - Does not work with unlimited exploits.
 * 
 *   Unlimited Exploits:
 *   - Can battlers be exploited endlessly?
 * 
 *   JS: On Exploited:
 *   - Code used when the target has been exploited.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Exploiter Effects Settings
 * ============================================================================
 *
 * These are effects for the battlers doing the exploiting. Change how you want
 * exploiter battlers to behave here.
 *
 * ---
 *
 * Mechanics
 * 
 *   Added States:
 *   - A list of the states that are added when a user exploits a foe.
 * 
 *   Extra Actions:
 *   - Successfully exploiting an enemy will grant the user this many
 *     extra actions.
 * 
 *   Multiple Exploits:
 *   - Can battlers exploit opponents multiple times with one action?
 * 
 *   JS: On Exploiting:
 *   - Code used when the user is exploiting a foe's weakness.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Turn Order Settings
 * ============================================================================
 *
 * Turn Order Display settings used for Battle System STB. These adjust how the
 * visible turn order appears in-game.
 *
 * ---
 *
 * General
 * 
 *   Display Position:
 *   - Select where the Turn Order will appear on the screen.
 * 
 *     Offset X:
 *     - How much to offset the X coordinate by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset the Y coordinate by.
 *     - Negative: up. Positive: down.
 * 
 *   Center Horizontal?:
 *   - Reposition the Turn Order Display to always be centered if it is a
 *     'top' or 'bottom' position?
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the display when the
 *     help window is open?
 * 
 *   Reposition Log?:
 *   - If the display position is at the top, reposition the Battle Log Window
 *     to be lower?
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Turn Order.
 *   - Settings may vary depending on position.
 *   - Left to Right / Down to Up
 *   - Right to Left / Up to Down
 * 
 *   Subject Distance:
 *   - How far do you want the currently active battler to distance itself from
 *     the rest of the Turn Order?
 * 
 *   Screen Buffer:
 *   - What distance do you want the display to be away from the edge of the
 *     screen by?
 *
 * ---
 *
 * Reposition For Help
 * 
 *   Repostion X By:
 *   Repostion Y By:
 *   - Reposition the display's coordinates by this much when the Help Window
 *     is visible.
 *
 * ---
 *
 * Slots
 * 
 *   Max Horizontal:
 *   - Maximum slots you want to display for top and bottom Turn Order Display
 *     positions?
 * 
 *   Max Vertical:
 *   - Maximum slots you want to display for left and right Turn Order Display
 *     positions?
 * 
 *   Length:
 *   - How many pixels long should the slots be on the Turn Order display?
 * 
 *   Thin:
 *   - How many pixels thin should the slots be on the Turn Order display?
 * 
 *   Update Frames:
 *   - How many frames should it take for the slots to update their
 *     positions by?
 *
 * ---
 *
 * Slot Border
 * 
 *   Show Border?:
 *   - Show borders for the slot sprites?
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
 * Slot Sprites
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
 * Slot Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the slot sprite?
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
 * Slot Background
 * 
 *   Show Background?:
 *   - Show the background on the slot sprite?
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
 * Version 1.19: January 20, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.18: December 15, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.17: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the STB Turn Order faces and icons to not change
 *    properly for actors and enemies. Fix made by Olivia.
 * 
 * Version 1.16: July 7, 2022
 * * Compatibility Update!
 * ** Plugin is now updated to support larger than 8 troop sizes.
 * 
 * Version 1.15: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Exploit System Settings > Forced Actions
 * **** Apply exploit system to Forced Actions?
 * **** We added this function because forced actions can disrupt player
 *      strategies when used with the exploit system.
 * 
 * Version 1.14: March 3, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.13: November 11, 2021
 * * Bug Fixes!
 * ** Critical hits for enemies with only one action per turn should now
 *    properly allow for the exploited effect to occur. Fix made by Olivia.
 * 
 * Version 1.12: October 28, 2021
 * * Bug Fixes!
 * ** Turn Order display will no longer appear at differing X and Y positions
 *    when using specific battle layouts. Update made by Olivia.
 * 
 * Version 1.11: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that altered the current action choice when enemies are using
 *    a skill that utilizes instants when there is only enough MP left for one
 *    of those actions. Fix made by Olivia.
 * 
 * Version 1.10: July 2, 2021
 * * Bug Fixes!
 * ** Dead battlers will no longer reappear in the turn order on subsequent
 *    turns. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** "Mechanics Settings" Plugin Parameters has been updated into
 *    "Speed Mechanics" with updated formulas that will now correlate any
 *    adjusted AGI changes made to battlers to alter the following turn
 *    properly. Update made by Olivia.
 * 
 * Version 1.09: March 26, 2021
 * * Bug Fixes!
 * ** Enemy exploit actions should now associate A.I. properly. Fix by Yanfly.
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.08: March 19, 2021
 * * Feature Update!
 * ** Turn Order Window calculations slightly tweaked for times when the window
 *    layer is bigger than it should be. Update made by Olivia.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: January 22, 2021
 * * Feature Update!
 * ** A different kind of end battle check is now made to determine hiding the
 *    turn order display. Update made by Olivia.
 * 
 * Version 1.06: January 1, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: December 25, 2020
 * * Bug Fixes!
 * ** Starting battle from a surprise attack will no longer skip turn 1. And
 *    starting battle without any inputtable actors will no longer skip turn 1.
 *    Fix made by Yanfly.
 * 
 * Version 1.04: December 18, 2020
 * * Feature Update!
 * ** Enemies can now benefit from <STB Instant> skills. Update made by Olivia.
 * ** Action End States updating are now handled by Skills and States Core
 *    v1.07+ for proper intended usage. Change from Battle System - STB v1.02
 *    is reverted here to prevent triggering the update twice.
 * 
 * Version 1.03: December 4, 2020
 * * Bug Fixes!
 * ** Select Next Command no longer returns undefined. Fix made by Olivia.
 * 
 * Version 1.02: November 22, 2020
 * * Bug Fixes!
 * ** Action End States now update at the end of each individual action.
 *    Fix made by Yanfly.
 * 
 * Version 1.01: November 15, 2020
 * * Bug Fixes!
 * ** Now compatible with Party Command Window Disable from the Battle Core.
 *    Fix made by Yanfly.
 *
 * Version 1.00 Official Release Date: November 23, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StbTurnOrderActorIcon
 * @text Actor: Change STB Turn Order Icon
 * @desc Changes the icons used for the specific actor(s) on the STB Turn Order.
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
 * @command StbTurnOrderActorFace
 * @text Actor: Change STB Turn Order Face
 * @desc Changes the faces used for the specific actor(s) on the STB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StbTurnOrderClearActorGraphic
 * @text Actor: Clear STB Turn Order Graphic
 * @desc Clears the STB Turn Order graphics for the actor(s).
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
 * @command StbTurnOrderEnemyIcon
 * @text Enemy: Change STB Turn Order Icon
 * @desc Changes the icons used for the specific enemy(ies) on the STB Turn Order.
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
 * @command StbTurnOrderEnemyFace
 * @text Enemy: Change STB Turn Order Face
 * @desc Changes the faces used for the specific enemy(ies) on the STB Turn Order.
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
 * @command StbTurnOrderClearEnemyGraphic
 * @text Enemy: Clear STB Turn Order Graphic
 * @desc Clears the STB Turn Order graphics for the enemy(ies).
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
 * @command SystemTurnOrderVisibility
 * @text System: STB Turn Order Visibility
 * @desc Determine the visibility of the STB Turn Order Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the STB Turn Order Display.
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
 * @param BattleSystemSTB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Speed:struct
 * @text Speed Mechanics
 * @type struct<Speed>
 * @desc Determines the mechanics of the STB Battle System.
 * @default {"Speed":"","InitialSpeedJS:func":"\"// Declare Constants\\nconst user = this;\\nconst agi = user.agi;\\n\\n// Create Base Speed\\nlet speed = agi;\\n\\n// Random Speed Check\\nif (user.allowRandomSpeed()) {\\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\\n}\\n\\n// Add Saved Speed Modifiers from Previous Round\\nspeed += user.getSTBNextTurnSpeed();\\n\\n// Return Speed\\nreturn speed;\"","NextTurnSavedSpeedJS:func":"\"// Create Speed\\nconst action = this;\\nlet speed = 0;\\n\\n// Check Object\\nif (action.item()) {\\n    speed += action.item().speed;\\n}\\n\\n// Check Attack\\nif (action.isAttack()) {\\n    speed += action.subject().attackSpeed();\\n}\\n\\n// Return Speed\\nreturn speed;\""}
 *
 * @param Exploit:struct
 * @text Exploit System
 * @type struct<Exploit>
 * @desc Settings for the STB's Exploit System.
 * @default {"EnableExploit:eval":"true","ExploitCritical:eval":"true","ExploitEleWeakness:eval":"true","ExploitEleRate:num":"1.05","TurnResetExploits:eval":"true"}
 *
 * @param Exploited:struct
 * @text Exploited Effects
 * @parent Exploit:struct
 * @type struct<Exploited>
 * @desc Settings for targets being Exploited.
 * @default {"Mechanics":"","AddedStates:arraynum":"[\"13\"]","FullExploitEvents":"","vsActorsFullExploit:num":"0","vsEnemiesFullExploit:num":"0","UnlimitedExploits:eval":"false","CustomJS:func":"\"// Declare Constants\\nconst target = this;\\nconst user = arguments[0];\\nconst action = arguments[1];\\n\\n// Perform Actions\\n\"","Animation":"","AnimationID:num":"0","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"","TextColor:str":"0","FlashColor:eval":"[255, 255, 255, 160]","FlashDuration:num":"60"}
 *
 * @param Exploiter:struct
 * @text Exploiter Effects
 * @parent Exploit:struct
 * @type struct<Exploiter>
 * @desc Settings for users doing the Exploiting.
 * @default {"Mechanics":"","AddedStates:arraynum":"[]","ExtraActions:num":"1","MultipleExploits:eval":"false","CustomJS:func":"\"// Declare Constants\\nconst user = this;\\nconst target = arguments[0];\\nconst action = arguments[1];\\n\\n// Perform Actions\\n\"","Animation":"","AnimationID:num":"12","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"ONE MORE!","TextColor:str":"0","FlashColor:eval":"[255, 255, 128, 160]","FlashDuration:num":"60"}
 *
 * @param TurnOrder:struct
 * @text Turn Order Display
 * @type struct<TurnOrder>
 * @desc Turn Order Display settings used for Battle System STB.
 * @default {"General":"","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","CenterHorz:eval":"true","RepositionTopForHelp:eval":"true","RepositionLogWindow:eval":"true","OrderDirection:eval":"true","SubjectDistance:num":"8","ScreenBuffer:num":"20","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"96","Slots":"","MaxHorzSprites:num":"16","MaxVertSprites:num":"10","SpriteLength:num":"72","SpriteThin:num":"36","UpdateFrames:num":"24","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","ActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","EnemySystemBorder:str":"","BorderThickness:num":"2","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"19","ActorBgColor2:str":"9","ActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"19","EnemyBgColor2:str":"18","EnemySystemBg:str":""}
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
 * Speed Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Speed:
 *
 * @param Speed
 *
 * @param InitialSpeedJS:func
 * @text JS: Finalized Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate initial speed at the start of battle.
 * @default "// Declare Constants\nconst user = this;\nconst agi = user.agi;\n\n// Create Base Speed\nlet speed = agi;\n\n// Random Speed Check\nif (user.allowRandomSpeed()) {\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\n}\n\n// Add Saved Speed Modifiers from Previous Round\nspeed += user.getSTBNextTurnSpeed();\n\n// Return Speed\nreturn speed;"
 *
 * @param NextTurnSavedSpeedJS:func
 * @text JS: Next Turn Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate speed for a following turn.
 * @default "// Create Speed\nconst action = this;\nlet speed = 0;\n\n// Check Object\nif (action.item()) {\n    speed += action.item().speed;\n}\n\n// Check Attack\nif (action.isAttack()) {\n    speed += action.subject().attackSpeed();\n}\n\n// Return Speed\nreturn speed;"
 * 
 */
/* ----------------------------------------------------------------------------
 * Exploit System Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exploit:
 *
 * @param EnableExploit:eval
 * @text Enable System?
 * @parent Exploit
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the exploit system? If disabled, ignore all the 
 * mechanics regarding the Exploit System.
 * @default true
 *
 * @param ExploitCritical:eval
 * @text Critical Hits
 * @parent Exploit
 * @type boolean
 * @on Exploit
 * @off Don't Exploit
 * @desc Do critical hits exploit the opponent?
 * @default true
 *
 * @param ExploitEleWeakness:eval
 * @text Elemental Weakness
 * @parent Exploit
 * @type boolean
 * @on Exploit
 * @off Don't Exploit
 * @desc Do elemental weaknesses exploit the opponent?
 * @default true
 *
 * @param ExploitEleRate:num
 * @text Minimum Rate
 * @parent ExploitEleWeakness:eval
 * @desc What's the minimum rate needed to count as an elemental weakness?
 * @default 1.05
 *
 * @param ForcedActions:eval
 * @text Forced Actions
 * @parent Exploit
 * @type boolean
 * @on Apply
 * @off Don't Apply
 * @desc Apply exploit system to Forced Actions?
 * @default false
 *
 * @param TurnResetExploits:eval
 * @text Reset Each Turn
 * @parent Exploit
 * @type boolean
 * @on Reset Exploits
 * @off Don't Reset
 * @desc Reset exploits at the end of each turn?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Exploited Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exploited:
 *
 * @param Mechanics
 * 
 * @param AddedStates:arraynum
 * @text Added States
 * @parent Mechanics
 * @type state[]
 * @desc A list of the states that are added when a target is exploited.
 * @default ["13"]
 * 
 * @param FullExploitEvents
 * @text Full Exploit Events
 * @parent Mechanics
 * 
 * @param vsActorsFullExploit:num
 * @text vs Actors Event
 * @parent FullExploitEvents
 * @type common_event
 * @desc If all actors have been fully exploited, run this common
 * event. Does not work with unlimited exploits.
 * @default 0
 * 
 * @param vsEnemiesFullExploit:num
 * @text vs Enemies Event
 * @parent FullExploitEvents
 * @type common_event
 * @desc If all enemies have been fully exploited, run this common
 * event. Does not work with unlimited exploits.
 * @default 0
 *
 * @param UnlimitedExploits:eval
 * @text Unlimited Exploits
 * @parent Mechanics
 * @type boolean
 * @on Unlimited
 * @off Once Per Turn
 * @desc Can battlers be exploited endlessly?
 * @default false
 *
 * @param CustomJS:func
 * @text JS: On Exploited
 * @parent Mechanics
 * @type note
 * @desc Code used when the target has been exploited.
 * @default "// Declare Constants\nconst target = this;\nconst user = arguments[0];\nconst action = arguments[1];\n\n// Perform Actions\n"
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 0
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * @default 
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 255, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Exploiter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exploiter:
 *
 * @param Mechanics
 * 
 * @param AddedStates:arraynum
 * @text Added States
 * @parent Mechanics
 * @type state[]
 * @desc A list of the states that are added when a user exploits a foe.
 * @default []
 * 
 * @param ExtraActions:num
 * @text Extra Actions
 * @parent Mechanics
 * @type number
 * @desc Successfully exploiting an enemy will grant the user this many extra actions.
 * @default 1
 *
 * @param MultipleExploits:eval
 * @text Multiple Exploits
 * @parent Mechanics
 * @type boolean
 * @on Multiple
 * @off Once Per Action
 * @desc Can battlers exploit opponents multiple times with one action?
 * @default false
 *
 * @param CustomJS:func
 * @text JS: On Exploiting
 * @parent Mechanics
 * @type note
 * @desc Code used when the user is exploiting a foe's weakness.
 * @default ""
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 12
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * @default ONE MORE!
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 128, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Turn Order Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TurnOrder:
 *
 * @param General
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @option left
 * @option right
 * @desc Select where the Turn Order will appear on the screen.
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
 * @param CenterHorz:eval
 * @text Center Horizontal?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Center
 * @off Stay
 * @desc Reposition the Turn Order Display to always be centered
 * if it is a 'top' or 'bottom' position?
 * @default true
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * display when the help window is open?
 * @default true
 *
 * @param RepositionLogWindow:eval
 * @text Reposition Log?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * Battle Log Window to be lower?
 * @default true
 *
 * @param OrderDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right / Down to Up
 * @off Right to Left / Up to Down
 * @desc Decide on the direction of the Turn Order.
 * Settings may vary depending on position.
 * @default true
 *
 * @param SubjectDistance:num
 * @text Subject Distance
 * @parent General
 * @type number
 * @desc How far do you want the currently active battler to
 * distance itself from the rest of the Turn Order?
 * @default 8
 *
 * @param ScreenBuffer:num
 * @text Screen Buffer
 * @parent General
 * @type number
 * @desc What distance do you want the display to be away
 * from the edge of the screen by?
 * @default 20
 * 
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default 96
 * 
 * @param Slots
 *
 * @param MaxHorzSprites:num
 * @text Max Horizontal
 * @parent Slots
 * @type number
 * @min 1
 * @desc Maximum slots you want to display for top and
 * bottom Turn Order Display positions?
 * @default 16
 *
 * @param MaxVertSprites:num
 * @text Max Vertical
 * @parent Slots
 * @type number
 * @min 1
 * @desc Maximum slots you want to display for left and
 * right Turn Order Display positions?
 * @default 10
 *
 * @param SpriteLength:num
 * @text Length
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels long should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param SpriteThin:num
 * @text Thin
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels thin should the slots be on the
 * Turn Order display?
 * @default 36
 *
 * @param UpdateFrames:num
 * @text Update Frames
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many frames should it take for the slots to
 * update their positions by?
 * @default 24
 *
 * @param Border
 * @text Slot Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the slot sprites?
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
 * @text Slot Sprites
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
 * @text Slot Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the slot sprite?
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
 * @text Slot Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the slot sprite?
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
 * @default 19
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
 * @default 19
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
 */
//=============================================================================

function _0x3a36(){const _0x54bcd2=['windowRect','kJiaF','STR','_statusWindow','ExploitEleWeakness','BdSVV','clearSTBExploit','unshift','CannotBeExploited','BattleManager_finishActorInput','Game_BattlerBase_appear','_speed','updatePadding','split','uzbMd','RepositionTopForHelp','isSTBExploited','%1BgColor1','XAfgI','createTurnOrderSTBGraphicFaceIndex','createLetterSprite','changeFaceGraphicBitmap','TurnOrderSTBGraphicFaceIndex','clearTurnOrderSTBGraphics','_letterSprite','Scene_Battle_createAllWindows','_backgroundSprite','note','STB','_graphicType','Enemy','createTurnOrderSTBGraphicFaceName','traitObjects','IPYTu','filter','_stbTurnOrderFaceName','remove','Game_BattlerBase_initMembers','FaceName','isHorz','nICrY','gradientFillRect','BattleManager_isTpb','_actorCommandWindow','2911140noTsNn','stbExploitedStates','battlerName','_actions','Visible','_graphicEnemy','TurnResetExploits','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','height','301302RdHVCI','_stbTurnOrderVisible','stepForward','Window_Help_setItem','addSTBNextTurnSpeed','lXcua','RWTKl','makeSpeed','drawText','BattleManager_endAction','ECtkS','mGznz','jjIVl','faceWidth','292VVlehu','actions','JSON','ExploiterStates','getStateTooltipBattler','selectAllActions','containerPosition','vsEnemiesFullExploit','createTestBitmap','1447672QUyurt','Game_Action_clear','Mute','endActionSTB','CustomJS','gSeOD','commandCancelSTB','IduQZ','BattleManager_makeActionOrders','Game_System_initialize','iconWidth','MtmRJ','parse','getSTBNextTurnSpeed','requestFauxAnimation','_phase','indexOf','mainSprite','IsSvG','maxBattleMembers','ceil','%1SystemBg','OrderDirection','OlByk','stbCannotBeExploited','applyGlobalBattleSystemSTB','Idmrt','BattleManager_battleSys','_letter','Actor','_homeX','_scene','exit','BattleSystemSTB','AShAM','onTurnEnd','_stbNextTurnSpeed','createBackgroundSprite','executeDamage','20epfvoo','_actionBattlers','battleEnd','repositionLogWindowSTB','constructor','close','_positionTargetX','isActiveTpb','initBattleSystemSTB','Actors','cancel','ARRAYEVAL','xeZtZ','_stateIDs','ARRAYFUNC','fontFace','fXweL','changeSvActorGraphicBitmap','currentAction','_ogWindowLayerX','updateSidePosition','selectNextActor','boOUJ','_forcedBattlers','getChildIndex','Game_Action_applyGlobal','containerWindow','_stbTurnOrderIconIndex','clearNextTurnSpeedSTB','max','_forcing','top','NAGdf','_turnOrderContainer','applyGlobal','StbTurnOrderEnemyFace','addChild','friendsUnit','children','map','UccGI','boxWidth','ARRAYJSON','BattleManager_isTurnBased','TurnOrderSTBGraphicType','updateHomePosition','zrAFx','addInnerChild','createActorCommandWindow','includes','isSideView','opacity','Mechanics','setSTBExploitedFlag','FSffE','ForcedActions','bind','changeIconGraphicBitmap','addState','length','6DCvIgp','_graphicIconIndex','_fadeDuration','_isAppeared','_graphicFaceName','width','IjJnX','_partyCommandWindow','TkQgE','actor','_stbTurnOrderWindow','executeDamageSTB','BattleManager_startInput','35mhjmxA','bottom','Exploiter','DisplayPosition','WNQKI','faceIndex','version','icYcQ','MaxHorzSprites','setItem','setup','startInput','Game_Action_speed','EnemyBattlerFontSize','getBattleSystem','allBattleMembers','isActionValid','_plural','subject','dYlQl','setBlendColor','ScreenBuffer','EnemyBattlerType','updateVisibility','DLlBI','chCTg','onBattleStartSTB','checkOpacity','makeSTBSpeed','Game_Actor_selectNextCommand','_ogWindowLayerY','blt','_homeDuration','_surprise','appear','updateTurnOrderSTB','QPVwf','call','iconHeight','Exploited','TurnOrder','_forceAction','RcQyo','checkPosition','SpriteLength','AnimationID','EnemyBattlerIcon','_blendColor','calcElementRate','createTurnOrderSTBGraphicIconIndex','vZRYx','glkpc','round','_currentActor','update','aliveMembers','sort','battlerHue','ARRAYSTRUCT','_graphicHue','match','updateLetter','getStateIdWithName','CannotBeExploiter','EnemyBattlerDrawLetter','enemy','_unit','members','REvJZ','svactor','getColor','recalculateHome','_windowLayer','updatePosition','ExploitCritical','EudNh','fvVVg','onBattleStart','Enemies','areAllActorsExploited','Game_Party_removeActor','hdPHO','isSTBExploitSystemEnabled','_fadeTarget','return\x200','processTurn','format','loadFace','defaultPosition','FlashDuration','setSTBNextTurnSpeed','Game_BattlerBase_hide','min','canInput','performActionEndSTB','UpdateFrames','processTurnSTB','createBattlerSprites','initMembers','left','anchor','_subject','_turnOrderInnerSprite','createSTBTurnOrderWindow','calculateTargetPositions','boxHeight','create','Scene_Battle_createActorCommandWindow','Exploit','#000000','emIgg','STRUCT','checkTargetPositions','right','bitmapWidth','BorderThickness','_graphicSv','center','RegExp','updateGraphicHue','RBgEK','DsnPR','description','SpriteThin','faceHeight','89454KnFJZv','updateOpacity','VrIUm','mRXFt','BattleManager_isActiveTpb','name','NUM','isEnemy','HycNa','clearSTB','IVLJw','BattleManager_processTurn','bGqBw','Settings','DBezp','_position','commandCancel','TDFMA','_targetHomeX','ShowMarkerBorder','startInputSTB','speed','LRZut','loadSvEnemy','loadSystem','hasSvBattler','setupTextPopup','rLRri','_stbExploited','Speed','battleSys','mRsZn','isAppeared','createActorCommandWindowSTB','DisplayOffsetX','compareBattlerSprites','padding','InitialSpeedJS','_stbTurnOrderFaceIndex','_positionDuration','isActor','TurnOrderSTBGraphicFaceName','Scene_Battle_commandFight','StbTurnOrderActorIcon','bitmap','Game_Battler_performActionEnd','mainFontFace','Game_Battler_onTurnEnd','areAllEnemiesExploited','CRVlY','selectNextCommand','isAlive','_positionTargetY','bitmapHeight','hide','addChildAt','prototype','numActions','17890TfPmPh','Game_Action_executeDamage','face','startFade','SystemTurnOrderVisibility','loadEnemy','svActorHorzCells','createTurnOrderSTBGraphicType','iPthQ','_fullHeight','PopupText','StbTurnOrderClearActorGraphic','stbCannotBeExploiter','EVAL','gPMvf','VVKXF','_containerWidth','cIBlO','ExploitedStates','createInitialPositions','hasSTBExploited','EnableExploit','isSceneBattle','createBattlerRect','isTpb','_targetHomeY','FlashColor','startTurn','RepositionTopHelpX','AddedStates','ejQuw','_containerHeight','_homeY','155021nZBnCb','fillRect','initialize','GOEqe','MaxVertSprites','loadSvActor','stbGainInstant','removeActionBattlersSTB','status','TurnOrderSTBGraphicIconIndex','Game_Battler_onBattleStart','RepositionTopHelpY','hwsMJ','updateSelectionEffect','becomeSTBExploited','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','push','_helpWindow','displayExploitedEffects','clearSTBNextTurnSpeed','_stbTurnOrderGraphicType','Instant','initMembersBattleSystemSTB','ARRAYSTR','registerCommand','commandFight','XiIRo','ParseStateData','setHue','_index','ARRAYNUM','selectNextActorSTB','_graphicSprite','isSTB','stbExploiterStates','_isAlive','NextTurnSavedSpeedJS','getNextSubject','result','currentClass','_graphicFaceIndex','SubjectDistance','floor','updateBattleContainerOrder','StbTurnOrderEnemyIcon','performCollapse','svActorVertCells','critical','icon','ciMgP','isBattleSystemSTBTurnOrderVisible','ExploitEleRate','setSTBExploited','removeActor','EnemyBattlerFaceName','4186226xYsKEV','Game_Battler_makeSpeed','_isBattleOver','TextColor','createAllWindows','TJBKi','Game_Battler_performCollapse','test','setBattleSystemSTBTurnOrderVisible','clear','battler','AllowRandomSpeed','ExtraActions','addLoadListener','changeEnemyGraphicBitmap','performSTBExploiter','createBorderSprite','MNvij','createChildren','makeActionOrders','BattleManager_selectNextActor','ConvertParams','reserveCommonEvent','item','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','visible','canMove','trim','%1\x20%2\x20%3','jKxnz','IconIndex','isTurnBased','BattleCore','_stbExploitAdvantageFlag','createGraphicSprite','isImmortal','some','EnemyBattlerFaceIndex','updateTurnOrder','processUpdateGraphic'];_0x3a36=function(){return _0x54bcd2;};return _0x3a36();}const _0x4715fe=_0x2463;(function(_0x142745,_0x4b9270){const _0x256c44=_0x2463,_0x221cf5=_0x142745();while(!![]){try{const _0x4efca0=parseInt(_0x256c44(0x177))/0x1+parseInt(_0x256c44(0x285))/0x2*(parseInt(_0x256c44(0x20b))/0x3)+parseInt(_0x256c44(0x219))/0x4*(parseInt(_0x256c44(0x156))/0x5)+parseInt(_0x256c44(0x11c))/0x6*(parseInt(_0x256c44(0x292))/0x7)+-parseInt(_0x256c44(0x222))/0x8+parseInt(_0x256c44(0x202))/0x9+parseInt(_0x256c44(0x249))/0xa*(-parseInt(_0x256c44(0x1ae))/0xb);if(_0x4efca0===_0x4b9270)break;else _0x221cf5['push'](_0x221cf5['shift']());}catch(_0x213cbb){_0x221cf5['push'](_0x221cf5['shift']());}}}(_0x3a36,0x2a577));var label=_0x4715fe(0x243),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x4715fe(0x1f8)](function(_0xca009c){const _0x10e183=_0x4715fe;return _0xca009c[_0x10e183(0x17f)]&&_0xca009c[_0x10e183(0x119)][_0x10e183(0x27a)]('['+label+']');})[0x0];VisuMZ[label][_0x4715fe(0x129)]=VisuMZ[label][_0x4715fe(0x129)]||{},VisuMZ[_0x4715fe(0x1c3)]=function(_0x3cdf4b,_0x5485ef){const _0x10bccc=_0x4715fe;for(const _0x3e6d4b in _0x5485ef){if(_0x10bccc(0x13b)!==_0x10bccc(0x1e8)){if(_0x3e6d4b[_0x10bccc(0xdb)](/(.*):(.*)/i)){const _0x5625dc=String(RegExp['$1']),_0x54778a=String(RegExp['$2'])['toUpperCase']()[_0x10bccc(0x1c9)]();let _0x20eb95,_0x42c160,_0x22cc7a;switch(_0x54778a){case _0x10bccc(0x122):_0x20eb95=_0x5485ef[_0x3e6d4b]!==''?Number(_0x5485ef[_0x3e6d4b]):0x0;break;case _0x10bccc(0x195):_0x42c160=_0x5485ef[_0x3e6d4b]!==''?JSON['parse'](_0x5485ef[_0x3e6d4b]):[],_0x20eb95=_0x42c160[_0x10bccc(0x270)](_0x380e05=>Number(_0x380e05));break;case _0x10bccc(0x163):_0x20eb95=_0x5485ef[_0x3e6d4b]!==''?eval(_0x5485ef[_0x3e6d4b]):null;break;case _0x10bccc(0x254):_0x42c160=_0x5485ef[_0x3e6d4b]!==''?JSON['parse'](_0x5485ef[_0x3e6d4b]):[],_0x20eb95=_0x42c160[_0x10bccc(0x270)](_0xc92885=>eval(_0xc92885));break;case _0x10bccc(0x21b):_0x20eb95=_0x5485ef[_0x3e6d4b]!==''?JSON['parse'](_0x5485ef[_0x3e6d4b]):'';break;case _0x10bccc(0x273):_0x42c160=_0x5485ef[_0x3e6d4b]!==''?JSON[_0x10bccc(0x22e)](_0x5485ef[_0x3e6d4b]):[],_0x20eb95=_0x42c160[_0x10bccc(0x270)](_0x345465=>JSON['parse'](_0x345465));break;case'FUNC':_0x20eb95=_0x5485ef[_0x3e6d4b]!==''?new Function(JSON['parse'](_0x5485ef[_0x3e6d4b])):new Function(_0x10bccc(0xf3));break;case _0x10bccc(0x257):_0x42c160=_0x5485ef[_0x3e6d4b]!==''?JSON[_0x10bccc(0x22e)](_0x5485ef[_0x3e6d4b]):[],_0x20eb95=_0x42c160['map'](_0x6c72cf=>new Function(JSON[_0x10bccc(0x22e)](_0x6c72cf)));break;case _0x10bccc(0x1d8):_0x20eb95=_0x5485ef[_0x3e6d4b]!==''?String(_0x5485ef[_0x3e6d4b]):'';break;case _0x10bccc(0x18e):_0x42c160=_0x5485ef[_0x3e6d4b]!==''?JSON['parse'](_0x5485ef[_0x3e6d4b]):[],_0x20eb95=_0x42c160[_0x10bccc(0x270)](_0x5b4bbc=>String(_0x5b4bbc));break;case _0x10bccc(0x10e):_0x22cc7a=_0x5485ef[_0x3e6d4b]!==''?JSON['parse'](_0x5485ef[_0x3e6d4b]):{},_0x20eb95=VisuMZ[_0x10bccc(0x1c3)]({},_0x22cc7a);break;case _0x10bccc(0xd9):_0x42c160=_0x5485ef[_0x3e6d4b]!==''?JSON['parse'](_0x5485ef[_0x3e6d4b]):[],_0x20eb95=_0x42c160[_0x10bccc(0x270)](_0x5d92c3=>VisuMZ[_0x10bccc(0x1c3)]({},JSON[_0x10bccc(0x22e)](_0x5d92c3)));break;default:continue;}_0x3cdf4b[_0x5625dc]=_0x20eb95;}}else this[_0x10bccc(0x1f3)]=_0x10bccc(0xe0);}return _0x3cdf4b;},(_0x35b171=>{const _0xc69c18=_0x4715fe,_0x12fdd7=_0x35b171[_0xc69c18(0x121)];for(const _0x3698a2 of dependencies){if(!Imported[_0x3698a2]){alert(_0xc69c18(0x186)[_0xc69c18(0xf5)](_0x12fdd7,_0x3698a2)),SceneManager[_0xc69c18(0x242)]();break;}}const _0xf05f2d=_0x35b171['description'];if(_0xf05f2d[_0xc69c18(0xdb)](/\[Version[ ](.*?)\]/i)){const _0x43ad99=Number(RegExp['$1']);_0x43ad99!==VisuMZ[label][_0xc69c18(0x298)]&&(alert(_0xc69c18(0x1c6)[_0xc69c18(0xf5)](_0x12fdd7,_0x43ad99)),SceneManager['exit']());}if(_0xf05f2d[_0xc69c18(0xdb)](/\[Tier[ ](\d+)\]/i)){const _0x11e094=Number(RegExp['$1']);_0x11e094<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x12fdd7,_0x11e094,tier)),SceneManager[_0xc69c18(0x242)]()):tier=Math[_0xc69c18(0x266)](_0x11e094,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0xc69c18(0x129)],_0x35b171['parameters']);})(pluginData),PluginManager['registerCommand'](pluginData[_0x4715fe(0x121)],_0x4715fe(0x147),_0x2fdb61=>{const _0x448eff=_0x4715fe;VisuMZ[_0x448eff(0x1c3)](_0x2fdb61,_0x2fdb61);const _0x592e4b=_0x2fdb61[_0x448eff(0x252)],_0x35b1fa=_0x2fdb61['IconIndex'];for(const _0x395dad of _0x592e4b){const _0x29e27a=$gameActors[_0x448eff(0x28e)](_0x395dad);if(!_0x29e27a)continue;_0x29e27a[_0x448eff(0x18b)]=_0x448eff(0x1a7),_0x29e27a[_0x448eff(0x264)]=_0x35b1fa;}}),PluginManager[_0x4715fe(0x18f)](pluginData[_0x4715fe(0x121)],'StbTurnOrderActorFace',_0x179c2f=>{const _0x5b4ad3=_0x4715fe;VisuMZ[_0x5b4ad3(0x1c3)](_0x179c2f,_0x179c2f);const _0x276e4d=_0x179c2f[_0x5b4ad3(0x252)],_0x38770f=_0x179c2f[_0x5b4ad3(0x1fc)],_0x1431a0=_0x179c2f['FaceIndex'];for(const _0x52cd24 of _0x276e4d){const _0x51612a=$gameActors[_0x5b4ad3(0x28e)](_0x52cd24);if(!_0x51612a)continue;_0x51612a[_0x5b4ad3(0x18b)]='face',_0x51612a[_0x5b4ad3(0x1f9)]=_0x38770f,_0x51612a['_stbTurnOrderFaceIndex']=_0x1431a0;}}),PluginManager[_0x4715fe(0x18f)](pluginData[_0x4715fe(0x121)],_0x4715fe(0x161),_0x418fa3=>{const _0x4d5a42=_0x4715fe;VisuMZ[_0x4d5a42(0x1c3)](_0x418fa3,_0x418fa3);const _0x30809e=_0x418fa3[_0x4d5a42(0x252)];for(const _0x4089fe of _0x30809e){const _0x1e51bf=$gameActors['actor'](_0x4089fe);if(!_0x1e51bf)continue;_0x1e51bf[_0x4d5a42(0x1ed)]();}}),PluginManager[_0x4715fe(0x18f)](pluginData['name'],_0x4715fe(0x1a3),_0x3608e7=>{const _0x46223e=_0x4715fe;VisuMZ[_0x46223e(0x1c3)](_0x3608e7,_0x3608e7);const _0x58d0fd=_0x3608e7[_0x46223e(0xed)],_0x57064a=_0x3608e7[_0x46223e(0x1cc)];for(const _0x4f33e8 of _0x58d0fd){const _0x4598b9=$gameTroop['members']()[_0x4f33e8];if(!_0x4598b9)continue;_0x4598b9[_0x46223e(0x18b)]=_0x46223e(0x1a7),_0x4598b9[_0x46223e(0x264)]=_0x57064a;}}),PluginManager[_0x4715fe(0x18f)](pluginData[_0x4715fe(0x121)],_0x4715fe(0x26c),_0x10ccb8=>{const _0x4a9243=_0x4715fe;VisuMZ[_0x4a9243(0x1c3)](_0x10ccb8,_0x10ccb8);const _0x56d979=_0x10ccb8[_0x4a9243(0xed)],_0x34f0f1=_0x10ccb8[_0x4a9243(0x1fc)],_0x58acaf=_0x10ccb8['FaceIndex'];for(const _0x53b0e1 of _0x56d979){const _0x4a6a12=$gameTroop[_0x4a9243(0xe2)]()[_0x53b0e1];if(!_0x4a6a12)continue;_0x4a6a12[_0x4a9243(0x18b)]=_0x4a9243(0x158),_0x4a6a12[_0x4a9243(0x1f9)]=_0x34f0f1,_0x4a6a12[_0x4a9243(0x142)]=_0x58acaf;}}),PluginManager[_0x4715fe(0x18f)](pluginData[_0x4715fe(0x121)],'StbTurnOrderClearEnemyGraphic',_0x1dcb0a=>{const _0x2f171c=_0x4715fe;VisuMZ[_0x2f171c(0x1c3)](_0x1dcb0a,_0x1dcb0a);const _0x15dccc=_0x1dcb0a[_0x2f171c(0xed)];for(const _0x1f62e8 of _0x15dccc){const _0x3b55b7=$gameTroop[_0x2f171c(0xe2)]()[_0x1f62e8];if(!_0x3b55b7)continue;_0x3b55b7['clearTurnOrderSTBGraphics']();}}),PluginManager[_0x4715fe(0x18f)](pluginData['name'],_0x4715fe(0x15a),_0x3a71d6=>{const _0x29499a=_0x4715fe;VisuMZ[_0x29499a(0x1c3)](_0x3a71d6,_0x3a71d6);const _0x3f7cd7=_0x3a71d6[_0x29499a(0x206)];$gameSystem[_0x29499a(0x1b6)](_0x3f7cd7);}),VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x115)]={'Instant':/<STB (?:INSTANT|INSTANT CAST|Instant Use)>/i,'CannotBeExploited':/<STB CANNOT BE EXPLOITED>/i,'CannotBeExploiter':/<STB CANNOT BE EXPLOITER>/i,'ExploitedStates':/<STB EXPLOITED GAIN (?:STATE|STATES):[ ](.*)>/i,'ExploiterStates':/<STB EXPLOITER GAIN (?:STATE|STATES):[ ](.*)>/i},DataManager['getStateIdWithName']=function(_0x5e341b){const _0x2f8954=_0x4715fe;_0x5e341b=_0x5e341b['toUpperCase']()[_0x2f8954(0x1c9)](),this[_0x2f8954(0x256)]=this[_0x2f8954(0x256)]||{};if(this['_stateIDs'][_0x5e341b])return this[_0x2f8954(0x256)][_0x5e341b];for(const _0x339147 of $dataStates){if(!_0x339147)continue;this[_0x2f8954(0x256)][_0x339147['name']['toUpperCase']()['trim']()]=_0x339147['id'];}return this[_0x2f8954(0x256)][_0x5e341b]||0x0;},ImageManager[_0x4715fe(0x15c)]=ImageManager[_0x4715fe(0x15c)]||0x9,ImageManager['svActorVertCells']=ImageManager['svActorVertCells']||0x6,SceneManager[_0x4715fe(0x16c)]=function(){const _0x158b00=_0x4715fe;return this[_0x158b00(0x241)]&&this['_scene'][_0x158b00(0x24d)]===Scene_Battle;},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x23d)]=BattleManager[_0x4715fe(0x13a)],BattleManager[_0x4715fe(0x13a)]=function(){const _0x2fecea=_0x4715fe;if(this['isSTB']())return _0x2fecea(0x1f2);return VisuMZ[_0x2fecea(0x243)][_0x2fecea(0x23d)]['call'](this);},BattleManager[_0x4715fe(0x198)]=function(){const _0x6df350=_0x4715fe;return $gameSystem[_0x6df350(0x2a0)]()===_0x6df350(0x1f2);},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x200)]=BattleManager[_0x4715fe(0x16e)],BattleManager[_0x4715fe(0x16e)]=function(){const _0x412287=_0x4715fe;if(this['isSTB']())return![];return VisuMZ[_0x412287(0x243)][_0x412287(0x200)][_0x412287(0x2b7)](this);},VisuMZ[_0x4715fe(0x243)]['BattleManager_isActiveTpb']=BattleManager[_0x4715fe(0x250)],BattleManager['isActiveTpb']=function(){const _0x392121=_0x4715fe;if(this[_0x392121(0x198)]())return![];return VisuMZ['BattleSystemSTB'][_0x392121(0x120)]['call'](this);},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x274)]=BattleManager['isTurnBased'],BattleManager[_0x4715fe(0x1cd)]=function(){const _0x509daa=_0x4715fe;if(this['isSTB']())return!![];return VisuMZ[_0x509daa(0x243)][_0x509daa(0x274)][_0x509daa(0x2b7)](this);},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x291)]=BattleManager[_0x4715fe(0x29d)],BattleManager[_0x4715fe(0x29d)]=function(){const _0x592f04=_0x4715fe;VisuMZ['BattleSystemSTB'][_0x592f04(0x291)]['call'](this);if(this[_0x592f04(0x198)]()&&$gameParty[_0x592f04(0xfc)]()&&!this[_0x592f04(0x2b3)])this['startInputSTB']();},BattleManager[_0x4715fe(0x130)]=function(){const _0x1a6d6d=_0x4715fe;this[_0x1a6d6d(0x171)]();},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x127)]=BattleManager[_0x4715fe(0xf4)],BattleManager[_0x4715fe(0xf4)]=function(){const _0xce7cc2=_0x4715fe;if(this[_0xce7cc2(0x198)]())this['processTurnSTB']();else{if(_0xce7cc2(0x165)===_0xce7cc2(0x165))VisuMZ[_0xce7cc2(0x243)][_0xce7cc2(0x127)][_0xce7cc2(0x2b7)](this);else return _0x3bbcc2(_0x1a9019['$2']);}},BattleManager[_0x4715fe(0xff)]=function(){const _0x356b9d=_0x4715fe,_0x94cdbe=this['_subject'];if(_0x94cdbe[_0x356b9d(0x144)]()&&_0x94cdbe['canInput']()){if(_0x356b9d(0x124)!==_0x356b9d(0x271)){const _0x337980=_0x94cdbe[_0x356b9d(0x25b)]();if(!_0x337980)VisuMZ[_0x356b9d(0x243)][_0x356b9d(0x127)][_0x356b9d(0x2b7)](this);else _0x337980[_0x356b9d(0x2bb)]?VisuMZ[_0x356b9d(0x243)][_0x356b9d(0x127)][_0x356b9d(0x2b7)](this):(this[_0x356b9d(0xd4)]=_0x94cdbe,this['startActorInput']());}else this[_0x356b9d(0x24f)]+=_0x424d9b?_0x119e56:0x0,this[_0x356b9d(0x150)]+=_0x392a5c?0x0:_0x21faaa;}else VisuMZ[_0x356b9d(0x243)][_0x356b9d(0x127)]['call'](this);},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x1df)]=BattleManager['finishActorInput'],BattleManager['finishActorInput']=function(){const _0x2a6376=_0x4715fe;this[_0x2a6376(0x198)]()?VisuMZ[_0x2a6376(0x243)][_0x2a6376(0x127)][_0x2a6376(0x2b7)](this):VisuMZ[_0x2a6376(0x243)][_0x2a6376(0x1df)]['call'](this);},VisuMZ[_0x4715fe(0x243)]['BattleManager_selectNextActor']=BattleManager['selectNextActor'],BattleManager[_0x4715fe(0x25e)]=function(){const _0x640ef4=_0x4715fe;if(this[_0x640ef4(0x198)]())_0x640ef4(0x174)===_0x640ef4(0x255)?_0x15dda1=_0x5f03dc[_0x640ef4(0x266)](_0x46cd64,_0x2d6cf6):this['selectNextActorSTB']();else{if(_0x640ef4(0xe3)!=='REvJZ'){this['x']=this[_0x640ef4(0x24f)],this['y']=this['_positionTargetY'];if(this[_0x640ef4(0x27c)]<0xff&&!this[_0x640ef4(0x1b0)]&&this[_0x640ef4(0x287)]<=0x0){const _0x507a4e=this['battler']();_0x507a4e&&(this[_0x640ef4(0xf2)]=_0x507a4e[_0x640ef4(0x14f)]()&&_0x507a4e[_0x640ef4(0x13c)]()?0xff:0x0);}}else VisuMZ[_0x640ef4(0x243)][_0x640ef4(0x1c2)][_0x640ef4(0x2b7)](this);}},BattleManager[_0x4715fe(0x196)]=function(){const _0x243e98=_0x4715fe;this[_0x243e98(0xd4)]=null,this['_inputting']=![];},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x214)]=BattleManager['endAction'],BattleManager['endAction']=function(){const _0x404de9=_0x4715fe;VisuMZ['BattleSystemSTB'][_0x404de9(0x214)][_0x404de9(0x2b7)](this),this[_0x404de9(0x225)]();},BattleManager[_0x4715fe(0x225)]=function(){const _0x376f63=_0x4715fe;if(!this[_0x376f63(0x198)]())return;this[_0x376f63(0x17e)]();if(this[_0x376f63(0x260)][_0x376f63(0x284)]>0x0){if(_0x376f63(0x183)==='izHik'){if(!_0x22fc9d['isSTB']())return;this[_0x376f63(0x1dc)]();const _0x1e4ac8=new _0x4e1ebe(this);this[_0x376f63(0xf9)](0x0);}else{if(this[_0x376f63(0x104)]){if('kFyFa'!=='tFUpo')!this[_0x376f63(0x24a)][_0x376f63(0x27a)](this[_0x376f63(0x104)])&&(_0x376f63(0x1b3)===_0x376f63(0x1b3)?this[_0x376f63(0x24a)][_0x376f63(0x1dd)](this[_0x376f63(0x104)]):(this[_0x376f63(0x1b0)]=!![],this[_0x376f63(0x159)](0x0)));else{const _0x12a059=new _0x4e4c55(_0x4a6b19,_0x5efa44);this[_0x376f63(0x105)][_0x376f63(0x26d)](_0x12a059),this[_0x376f63(0x26a)][_0x376f63(0x187)](_0x12a059);}}this['_subject']=this[_0x376f63(0x19c)]();}};},BattleManager[_0x4715fe(0xf1)]=function(){const _0x31cdd6=_0x4715fe;return VisuMZ[_0x31cdd6(0x243)][_0x31cdd6(0x129)][_0x31cdd6(0x10b)][_0x31cdd6(0x16b)];},BattleManager[_0x4715fe(0xee)]=function(){const _0x582571=_0x4715fe,_0xa8af48=$gameParty[_0x582571(0xd6)]()[_0x582571(0x1f8)](_0x3e13b1=>_0x3e13b1[_0x582571(0x13c)]()),_0x12e29d=_0xa8af48['filter'](_0x96b740=>_0x96b740[_0x582571(0x1e6)]());return _0xa8af48[_0x582571(0x284)]===_0x12e29d['length'];},BattleManager[_0x4715fe(0x14c)]=function(){const _0xa45f2d=_0x4715fe,_0x470081=$gameTroop['aliveMembers']()[_0xa45f2d(0x1f8)](_0x3402aa=>_0x3402aa['isAppeared']()),_0x277d9a=_0x470081[_0xa45f2d(0x1f8)](_0x192270=>_0x192270[_0xa45f2d(0x1e6)]());return _0x470081[_0xa45f2d(0x284)]===_0x277d9a[_0xa45f2d(0x284)];},VisuMZ['BattleSystemSTB'][_0x4715fe(0x22a)]=BattleManager['makeActionOrders'],BattleManager[_0x4715fe(0x1c1)]=function(){const _0x4ab041=_0x4715fe;VisuMZ['BattleSystemSTB']['BattleManager_makeActionOrders'][_0x4ab041(0x2b7)](this),this[_0x4ab041(0x198)]()&&(_0x4ab041(0x164)===_0x4ab041(0x164)?(this[_0x4ab041(0x17e)](),this[_0x4ab041(0x2b5)](),this[_0x4ab041(0x265)]()):(this[_0x4ab041(0x138)]===_0x40a573&&this['initMembersBattleSystemSTB'](),this[_0x4ab041(0x138)]=_0x22c213));},BattleManager[_0x4715fe(0x17e)]=function(){const _0x43db9e=_0x4715fe;if(!this[_0x43db9e(0x198)]())return;this[_0x43db9e(0x24a)]=this[_0x43db9e(0x24a)]||[],this['_actionBattlers']=this[_0x43db9e(0x24a)][_0x43db9e(0x1f8)](_0x6c0d3e=>_0x6c0d3e&&_0x6c0d3e[_0x43db9e(0x13c)]()&&_0x6c0d3e[_0x43db9e(0x14f)]()),this[_0x43db9e(0x2b5)]();},BattleManager[_0x4715fe(0x2b5)]=function(_0x44b1c1){const _0x1d736c=_0x4715fe;if(!this[_0x1d736c(0x198)]())return;const _0x2247e9=SceneManager[_0x1d736c(0x241)][_0x1d736c(0x28f)];if(!_0x2247e9)return;_0x2247e9[_0x1d736c(0x1d4)](_0x44b1c1);},BattleManager[_0x4715fe(0x265)]=function(){const _0x2ebe51=_0x4715fe;for(const _0x5f162a of this[_0x2ebe51(0x2a1)]()){if(_0x2ebe51(0x117)==='TQxtC')return this[_0x2ebe51(0x1d5)]();else{if(!_0x5f162a)continue;_0x5f162a['setSTBNextTurnSpeed'](0x0);}}},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x22b)]=Game_System['prototype'][_0x4715fe(0x179)],Game_System[_0x4715fe(0x154)]['initialize']=function(){const _0xe5f918=_0x4715fe;VisuMZ[_0xe5f918(0x243)]['Game_System_initialize'][_0xe5f918(0x2b7)](this),this['initBattleSystemSTB']();},Game_System[_0x4715fe(0x154)][_0x4715fe(0x251)]=function(){const _0x2f5385=_0x4715fe;this[_0x2f5385(0x20c)]=!![];},Game_System[_0x4715fe(0x154)][_0x4715fe(0x1a9)]=function(){const _0x2793eb=_0x4715fe;return this[_0x2793eb(0x20c)]===undefined&&this[_0x2793eb(0x251)](),this['_stbTurnOrderVisible'];},Game_System[_0x4715fe(0x154)]['setBattleSystemSTBTurnOrderVisible']=function(_0x38b19a){const _0x42e75a=_0x4715fe;this['_stbTurnOrderVisible']===undefined&&this[_0x42e75a(0x251)](),this[_0x42e75a(0x20c)]=_0x38b19a;},VisuMZ[_0x4715fe(0x243)]['Game_Action_speed']=Game_Action[_0x4715fe(0x154)][_0x4715fe(0x131)],Game_Action[_0x4715fe(0x154)][_0x4715fe(0x131)]=function(){const _0x36aa02=_0x4715fe;if(BattleManager[_0x36aa02(0x198)]()){if(_0x36aa02(0x1fe)!==_0x36aa02(0x1fe)){if(this['isSTB']())return![];return _0x41be1e['BattleSystemSTB'][_0x36aa02(0x200)][_0x36aa02(0x2b7)](this);}else return 0x0;}else return VisuMZ[_0x36aa02(0x243)][_0x36aa02(0x29e)]['call'](this);},VisuMZ[_0x4715fe(0x243)]['Game_Action_applyGlobal']=Game_Action[_0x4715fe(0x154)][_0x4715fe(0x26b)],Game_Action[_0x4715fe(0x154)]['applyGlobal']=function(){const _0x3c0bed=_0x4715fe;VisuMZ[_0x3c0bed(0x243)]['Game_Action_applyGlobal'][_0x3c0bed(0x2b7)](this),this[_0x3c0bed(0x23b)]();},Game_Action['prototype']['applyGlobalBattleSystemSTB']=function(){const _0x5af105=_0x4715fe;if(!SceneManager[_0x5af105(0x16c)]())return;if(!BattleManager[_0x5af105(0x198)]())return;const _0x3c9d82=this[_0x5af105(0x1c5)](),_0x479624=VisuMZ[_0x5af105(0x243)][_0x5af105(0x115)],_0x33c89f=VisuMZ['BattleSystemSTB'][_0x5af105(0x129)]['Speed'];_0x3c9d82&&_0x3c9d82[_0x5af105(0x1f1)][_0x5af105(0xdb)](_0x479624[_0x5af105(0x18c)])&&this['subject']()[_0x5af105(0x17d)](0x1);const _0x540b7c=_0x33c89f[_0x5af105(0x19b)][_0x5af105(0x2b7)](this);this[_0x5af105(0x2a4)]()['addSTBNextTurnSpeed'](_0x540b7c);},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x223)]=Game_Action[_0x4715fe(0x154)][_0x4715fe(0x1b7)],Game_Action[_0x4715fe(0x154)][_0x4715fe(0x1b7)]=function(){const _0x49102e=_0x4715fe;VisuMZ['BattleSystemSTB'][_0x49102e(0x223)][_0x49102e(0x2b7)](this),this[_0x49102e(0x125)]();},Game_Action[_0x4715fe(0x154)][_0x4715fe(0x125)]=function(){const _0x181370=_0x4715fe;this[_0x181370(0x1cf)]=![];},Game_Action['prototype'][_0x4715fe(0x16a)]=function(){const _0x4d98a6=_0x4715fe;return this[_0x4d98a6(0x1cf)]===undefined&&this[_0x4d98a6(0x125)](),this[_0x4d98a6(0x1cf)];},Game_Action[_0x4715fe(0x154)][_0x4715fe(0x27e)]=function(_0x26cac7){const _0x5ac5ae=_0x4715fe;this['_stbExploitAdvantageFlag']===undefined&&(_0x5ac5ae(0x28d)!==_0x5ac5ae(0x22d)?this[_0x5ac5ae(0x125)]():(this['x']=this[_0x5ac5ae(0x240)],this['y']=this['_homeY'])),this['_stbExploitAdvantageFlag']=_0x26cac7;},VisuMZ['BattleSystemSTB']['Game_Action_executeDamage']=Game_Action['prototype'][_0x4715fe(0x248)],Game_Action[_0x4715fe(0x154)][_0x4715fe(0x248)]=function(_0x448d1d,_0x3ce86a){const _0x5a8246=_0x4715fe;VisuMZ[_0x5a8246(0x243)][_0x5a8246(0x157)][_0x5a8246(0x2b7)](this,_0x448d1d,_0x3ce86a),this[_0x5a8246(0x290)](_0x448d1d);},Game_Action[_0x4715fe(0x154)][_0x4715fe(0x290)]=function(_0x1c4054){const _0x2645a3=_0x4715fe;if(!SceneManager['isSceneBattle']())return;if(!BattleManager[_0x2645a3(0x198)]())return;if(!BattleManager[_0x2645a3(0xf1)]())return;if(_0x1c4054[_0x2645a3(0x26e)]()===this[_0x2645a3(0x2a4)]()[_0x2645a3(0x26e)]())return;const _0x5d7829=VisuMZ[_0x2645a3(0x243)]['Settings']['Exploit'],_0x5726ad=_0x1c4054['result']();if(!_0x5d7829[_0x2645a3(0x280)]&&this[_0x2645a3(0x267)])return;_0x5d7829['ExploitCritical']&&_0x5726ad[_0x2645a3(0x1a6)]&&(_0x2645a3(0x277)!=='hHLfl'?(this[_0x2645a3(0x2a4)]()[_0x2645a3(0x1bd)](_0x1c4054,this),_0x1c4054[_0x2645a3(0x185)](this[_0x2645a3(0x2a4)](),this)):this[_0x2645a3(0x2a4)]()['stbGainInstant'](0x1));if(_0x5d7829['ExploitEleWeakness']){if(_0x2645a3(0x2bc)!==_0x2645a3(0x2bc))_0x5d0986[_0x2645a3(0x243)]['Scene_Battle_commandCancel']['call'](this);else{const _0x5a2fa7=this[_0x2645a3(0x2c2)](_0x1c4054);_0x5a2fa7>=_0x5d7829['ExploitEleRate']&&(this[_0x2645a3(0x2a4)]()['performSTBExploiter'](_0x1c4054,this),_0x1c4054['becomeSTBExploited'](this[_0x2645a3(0x2a4)](),this));}}},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x1fb)]=Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x101)],Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x101)]=function(){const _0x1efdab=_0x4715fe;VisuMZ[_0x1efdab(0x243)]['Game_BattlerBase_initMembers'][_0x1efdab(0x2b7)](this),this[_0x1efdab(0x18d)]();},Game_BattlerBase[_0x4715fe(0x154)]['initMembersBattleSystemSTB']=function(){const _0x54024b=_0x4715fe;this[_0x54024b(0x18a)](),this[_0x54024b(0x1dc)]();},Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x18a)]=function(){this['_stbNextTurnSpeed']=0x0;},Game_BattlerBase['prototype'][_0x4715fe(0x22f)]=function(){const _0x268ee6=_0x4715fe;return this[_0x268ee6(0x246)]===undefined&&(_0x268ee6(0x1cb)!==_0x268ee6(0x10d)?this[_0x268ee6(0x18d)]():(this[_0x268ee6(0x101)](_0x41e709,_0x1b326a),_0x2a5c0d[_0x268ee6(0x154)]['initialize']['call'](this),this[_0x268ee6(0x27c)]=0x0,this[_0x268ee6(0x1c0)](),this[_0x268ee6(0x2ad)]())),this[_0x268ee6(0x246)];},Game_BattlerBase[_0x4715fe(0x154)]['setSTBNextTurnSpeed']=function(_0x7e0bb){const _0x1f53dc=_0x4715fe;this[_0x1f53dc(0x246)]===undefined&&this['initMembersBattleSystemSTB'](),this[_0x1f53dc(0x246)]=_0x7e0bb;},Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x20f)]=function(_0x501300){const _0x22f617=_0x4715fe;this[_0x22f617(0x246)]===undefined&&this[_0x22f617(0x18d)](),_0x501300+=this[_0x22f617(0x22f)](),this['setSTBNextTurnSpeed'](_0x501300);},Game_BattlerBase['prototype'][_0x4715fe(0x1dc)]=function(){this['_stbExploited']=![];},Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x1e6)]=function(){const _0x412f35=_0x4715fe;return this['_stbExploited']===undefined&&this[_0x412f35(0x18d)](),this['_stbExploited'];},Game_BattlerBase[_0x4715fe(0x154)]['setSTBExploited']=function(_0x397242){const _0x401c53=_0x4715fe;this[_0x401c53(0x138)]===undefined&&this[_0x401c53(0x18d)](),this[_0x401c53(0x138)]=_0x397242;},Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x23a)]=function(){const _0x16462e=_0x4715fe,_0x99f36=VisuMZ[_0x16462e(0x243)][_0x16462e(0x115)][_0x16462e(0x1de)];return this[_0x16462e(0x1f6)]()[_0x16462e(0x1d2)](_0x22c8df=>_0x22c8df[_0x16462e(0x1f1)]['match'](_0x99f36));},Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x162)]=function(){const _0x1bda57=_0x4715fe,_0x2def2d=VisuMZ[_0x1bda57(0x243)][_0x1bda57(0x115)][_0x1bda57(0xde)];return this[_0x1bda57(0x1f6)]()[_0x1bda57(0x1d2)](_0x13307a=>_0x13307a[_0x1bda57(0x1f1)]['match'](_0x2def2d));},Game_BattlerBase['prototype'][_0x4715fe(0x1ed)]=function(){const _0xd4de2b=_0x4715fe;delete this[_0xd4de2b(0x18b)],delete this['_stbTurnOrderFaceName'],delete this[_0xd4de2b(0x142)],delete this[_0xd4de2b(0x264)];},Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x275)]=function(){const _0x464ede=_0x4715fe;return this[_0x464ede(0x18b)]===undefined&&(this[_0x464ede(0x18b)]=this[_0x464ede(0x15d)]()),this['_stbTurnOrderGraphicType'];},Game_BattlerBase[_0x4715fe(0x154)]['createTurnOrderSTBGraphicType']=function(){const _0x24e067=_0x4715fe;return Window_STB_TurnOrder['Settings'][_0x24e067(0x2a8)];},Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x145)]=function(){const _0x2ebd7d=_0x4715fe;return this['_stbTurnOrderFaceName']===undefined&&(this[_0x2ebd7d(0x1f9)]=this['createTurnOrderSTBGraphicFaceName']()),this['_stbTurnOrderFaceName'];},Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x1f5)]=function(){const _0x422af4=_0x4715fe;return Window_STB_TurnOrder[_0x422af4(0x129)][_0x422af4(0x1ad)];},Game_BattlerBase['prototype'][_0x4715fe(0x1ec)]=function(){const _0x49d632=_0x4715fe;return this[_0x49d632(0x142)]===undefined&&(_0x49d632(0x126)===_0x49d632(0x126)?this['_stbTurnOrderFaceIndex']=this['createTurnOrderSTBGraphicFaceIndex']():(this[_0x49d632(0x104)]&&(!this[_0x49d632(0x24a)][_0x49d632(0x27a)](this[_0x49d632(0x104)])&&this['_actionBattlers']['unshift'](this[_0x49d632(0x104)])),this[_0x49d632(0x104)]=this['getNextSubject']())),this[_0x49d632(0x142)];},Game_BattlerBase['prototype'][_0x4715fe(0x1e9)]=function(){const _0x2eff74=_0x4715fe;return Window_STB_TurnOrder[_0x2eff74(0x129)][_0x2eff74(0x1d3)];},Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x180)]=function(){const _0x4f2a68=_0x4715fe;return this[_0x4f2a68(0x264)]===undefined&&(_0x4f2a68(0x1d7)!=='kJiaF'?_0x2996cd[_0x4f2a68(0x213)](this[_0x4f2a68(0x23e)][_0x4f2a68(0x1c9)](),0x0,_0x5a7db0/0x2,_0x362a52,_0x206b56/0x2,_0x4f2a68(0x114)):this[_0x4f2a68(0x264)]=this['createTurnOrderSTBGraphicIconIndex']()),this['_stbTurnOrderIconIndex'];},Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x2c3)]=function(){const _0x5597b9=_0x4715fe;return Window_STB_TurnOrder['Settings'][_0x5597b9(0x2c0)];},Game_BattlerBase['prototype']['setSTBGraphicIconIndex']=function(_0x47f7b5){const _0x3db816=_0x4715fe;this[_0x3db816(0x264)]=_0x47f7b5;},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0xfa)]=Game_BattlerBase['prototype'][_0x4715fe(0x152)],Game_BattlerBase[_0x4715fe(0x154)]['hide']=function(){const _0x57f254=_0x4715fe;VisuMZ[_0x57f254(0x243)][_0x57f254(0xfa)][_0x57f254(0x2b7)](this),BattleManager[_0x57f254(0x17e)]();},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x1e0)]=Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x2b4)],Game_BattlerBase[_0x4715fe(0x154)][_0x4715fe(0x2b4)]=function(){const _0x284dfb=_0x4715fe;VisuMZ[_0x284dfb(0x243)][_0x284dfb(0x1e0)][_0x284dfb(0x2b7)](this),BattleManager[_0x284dfb(0x17e)]();},VisuMZ[_0x4715fe(0x243)]['Game_Battler_performCollapse']=Game_Battler[_0x4715fe(0x154)]['performCollapse'],Game_Battler[_0x4715fe(0x154)][_0x4715fe(0x1a4)]=function(){const _0xf46af2=_0x4715fe;VisuMZ[_0xf46af2(0x243)][_0xf46af2(0x1b4)][_0xf46af2(0x2b7)](this),BattleManager[_0xf46af2(0x17e)]();},VisuMZ[_0x4715fe(0x243)]['Game_Battler_onBattleStart']=Game_Battler[_0x4715fe(0x154)]['onBattleStart'],Game_Battler[_0x4715fe(0x154)][_0x4715fe(0xec)]=function(_0x62dcd0){const _0xeacd08=_0x4715fe;VisuMZ[_0xeacd08(0x243)][_0xeacd08(0x181)][_0xeacd08(0x2b7)](this,_0x62dcd0),this[_0xeacd08(0x2ac)](_0x62dcd0);},Game_Battler['prototype'][_0x4715fe(0x2ac)]=function(_0x5cc9a2){const _0x5e93e9=_0x4715fe;if(!BattleManager['isSTB']())return;this[_0x5e93e9(0x1dc)]();const _0x3d5591=new Game_Action(this);this[_0x5e93e9(0xf9)](0x0);},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x14b)]=Game_Battler['prototype'][_0x4715fe(0x245)],Game_Battler[_0x4715fe(0x154)][_0x4715fe(0x245)]=function(){const _0x5def58=_0x4715fe;VisuMZ[_0x5def58(0x243)]['Game_Battler_onTurnEnd'][_0x5def58(0x2b7)](this),BattleManager[_0x5def58(0x198)]()&&VisuMZ[_0x5def58(0x243)][_0x5def58(0x129)][_0x5def58(0x10b)][_0x5def58(0x208)]&&this['clearSTBExploit']();},VisuMZ[_0x4715fe(0x243)]['Game_Battler_performActionEnd']=Game_Battler[_0x4715fe(0x154)]['performActionEnd'],Game_Battler[_0x4715fe(0x154)]['performActionEnd']=function(){const _0x3d6bd3=_0x4715fe;VisuMZ['BattleSystemSTB'][_0x3d6bd3(0x149)][_0x3d6bd3(0x2b7)](this),BattleManager[_0x3d6bd3(0x198)]()&&('RWTKl'!==_0x3d6bd3(0x211)?(_0x39cc33[_0x3d6bd3(0x243)]['Game_BattlerBase_initMembers'][_0x3d6bd3(0x2b7)](this),this['initMembersBattleSystemSTB']()):this['performActionEndSTB']());},Game_Battler[_0x4715fe(0x154)][_0x4715fe(0xfd)]=function(){const _0xd5425d=_0x4715fe;if(this[_0xd5425d(0x155)]()>0x0&&this===BattleManager[_0xd5425d(0x104)]){if('VrIUm'===_0xd5425d(0x11e)){const _0x4b5652=BattleManager[_0xd5425d(0x260)];if(_0x4b5652[_0xd5425d(0x284)]>0x0&&_0x4b5652[0x0]!==this)return;const _0x5e4600=this[_0xd5425d(0x1b8)]();if(_0x5e4600)_0x5e4600[_0xd5425d(0x20d)]();}else{const _0xf24ceb=_0x1d12f7[_0xd5425d(0x129)];if(!_0xf24ceb[_0xd5425d(0xdf)])return;if(this[_0xd5425d(0xe1)]===_0x3d2766)return;const _0x26eaa2=this[_0xd5425d(0x111)](),_0x462b6d=this[_0xd5425d(0x151)](),_0x1217b2=new _0x112e45();_0x1217b2['anchor']['x']=this[_0xd5425d(0x103)]['x'],_0x1217b2[_0xd5425d(0x103)]['y']=this['anchor']['y'],_0x1217b2['bitmap']=new _0x5357ed(_0x26eaa2,_0x462b6d),this[_0xd5425d(0x1ee)]=_0x1217b2,this['addChild'](this[_0xd5425d(0x1ee)]);}}},Game_Battler[_0x4715fe(0x154)]['allowRandomSpeed']=function(){const _0x5c4684=_0x4715fe;return VisuMZ[_0x5c4684(0x1ce)][_0x5c4684(0x129)][_0x5c4684(0x27d)][_0x5c4684(0x1b9)];},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x1af)]=Game_Battler[_0x4715fe(0x154)]['makeSpeed'],Game_Battler[_0x4715fe(0x154)][_0x4715fe(0x212)]=function(){const _0x36a5f8=_0x4715fe;BattleManager[_0x36a5f8(0x198)]()?_0x36a5f8(0x23c)===_0x36a5f8(0x296)?(this[_0x36a5f8(0x169)](),this[_0x36a5f8(0x247)](),this[_0x36a5f8(0x1d0)](),this[_0x36a5f8(0x1be)](),this[_0x36a5f8(0x1ea)]()):this[_0x36a5f8(0x2ae)]():VisuMZ[_0x36a5f8(0x243)]['Game_Battler_makeSpeed'][_0x36a5f8(0x2b7)](this);},Game_Battler[_0x4715fe(0x154)][_0x4715fe(0x2ae)]=function(){const _0x366d19=_0x4715fe;this[_0x366d19(0x1e1)]=VisuMZ['BattleSystemSTB'][_0x366d19(0x129)][_0x366d19(0x139)][_0x366d19(0x141)][_0x366d19(0x2b7)](this);},Game_Battler[_0x4715fe(0x154)][_0x4715fe(0x203)]=function(){const _0x52c59c=_0x4715fe,_0x2c2b4b=this[_0x52c59c(0x144)]()?this['currentClass']()['note']:this[_0x52c59c(0xe0)]()[_0x52c59c(0x1f1)];if(_0x2c2b4b[_0x52c59c(0xdb)](VisuMZ[_0x52c59c(0x243)]['RegExp'][_0x52c59c(0x168)]))return VisuMZ[_0x52c59c(0x243)]['ParseStateData'](RegExp['$1']);return VisuMZ[_0x52c59c(0x243)]['Settings'][_0x52c59c(0x2b9)][_0x52c59c(0x173)]||[];},Game_Battler[_0x4715fe(0x154)][_0x4715fe(0x199)]=function(){const _0x58b5e3=_0x4715fe,_0x28d9ba=this[_0x58b5e3(0x144)]()?this[_0x58b5e3(0x19e)]()[_0x58b5e3(0x1f1)]:this[_0x58b5e3(0xe0)]()[_0x58b5e3(0x1f1)];if(_0x28d9ba[_0x58b5e3(0xdb)](VisuMZ['BattleSystemSTB'][_0x58b5e3(0x115)][_0x58b5e3(0x21c)])){if('azhPm'==='azhPm')return VisuMZ[_0x58b5e3(0x243)][_0x58b5e3(0x192)](RegExp['$1']);else this[_0x58b5e3(0x207)]=_0x1ebf99[_0x58b5e3(0x204)](),_0x394f78=_0x42d46e['loadSvEnemy'](this[_0x58b5e3(0x207)]),_0x25521b[_0x58b5e3(0x1bb)](this[_0x58b5e3(0x1bc)]['bind'](this,_0x1c9d76));}return VisuMZ[_0x58b5e3(0x243)][_0x58b5e3(0x129)][_0x58b5e3(0x294)][_0x58b5e3(0x173)]||[];},VisuMZ['BattleSystemSTB'][_0x4715fe(0x192)]=function(_0x3a805d){const _0x2c5fd8=_0x4715fe,_0x4213a9=_0x3a805d[_0x2c5fd8(0x1e3)](','),_0x5660d3=[];for(let _0x365d96 of _0x4213a9){if(_0x2c5fd8(0x1f7)!=='IPYTu')_0x3620ea['push'](_0x592538['getStateIdWithName'](_0x5d3639));else{_0x365d96=(String(_0x365d96)||'')['trim']();const _0x187e5e=/^\d+$/[_0x2c5fd8(0x1b5)](_0x365d96);if(_0x187e5e){if('BfswC'==='MtThL'){const _0x261082=this['enemy']()[_0x2c5fd8(0x1f1)];if(_0x261082[_0x2c5fd8(0xdb)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x2c5fd8(0x158);else{if(_0x261082['match'](/<STB TURN ORDER ICON:[ ](\d+)>/i))return _0x2c5fd8(0x1a7);}return _0x4036aa['Settings'][_0x2c5fd8(0x2a8)];}else _0x5660d3['push'](Number(_0x365d96));}else _0x5660d3[_0x2c5fd8(0x187)](DataManager[_0x2c5fd8(0xdd)](_0x365d96));}}return _0x5660d3;},Game_Battler[_0x4715fe(0x154)][_0x4715fe(0x185)]=function(_0x35cdc7,_0x1a257e){const _0x411038=_0x4715fe;if(!BattleManager['isSTB']())return;if(!BattleManager[_0x411038(0xf1)]())return;if(this[_0x411038(0x1e6)]())return;const _0x288613=VisuMZ[_0x411038(0x243)][_0x411038(0x129)][_0x411038(0x2b9)];if(!_0x288613['UnlimitedExploits']){if('KZUWR'!==_0x411038(0xf0))this[_0x411038(0x1ab)](!![]);else{if(this[_0x411038(0x198)]())return![];return _0x3a04fb[_0x411038(0x243)][_0x411038(0x120)][_0x411038(0x2b7)](this);}}if(this[_0x411038(0x23a)]())return;if(this['hp']<=0x0)return;this[_0x411038(0x189)](_0x288613);if(this['hp']>0x0||!this[_0x411038(0x1d1)]())for(const _0xdfb0ec of this[_0x411038(0x203)]()){if(!$dataStates[_0xdfb0ec])continue;this['addState'](_0xdfb0ec);}_0x288613[_0x411038(0x226)]&&_0x288613[_0x411038(0x226)][_0x411038(0x2b7)](this,_0x35cdc7,_0x1a257e);if(this[_0x411038(0x144)]()&&BattleManager['areAllActorsExploited']()){const _0x12b13b=_0x288613['vsActorsFullExploit'];if(_0x12b13b>0x0&&$dataCommonEvents[_0x12b13b]){if(_0x411038(0x118)!==_0x411038(0xea))$gameTemp[_0x411038(0x1c4)](_0x12b13b);else{const _0x402ef4=_0x17264e['Settings'],_0x18671d=this[_0x411038(0x111)](),_0x3e2bfc=this[_0x411038(0x151)](),_0x164b7e=_0x57dded[_0x411038(0xfb)](_0x18671d,_0x3e2bfc);this[_0x411038(0x197)][_0x411038(0x148)]=new _0x196441(_0x18671d,_0x3e2bfc);const _0x327af3=this[_0x411038(0x197)]['bitmap'],_0x33d51d=_0x13b0e5['min'](0x1,_0x164b7e/_0x531874[_0x411038(0x28a)],_0x164b7e/_0x5731d9[_0x411038(0x20a)]),_0x55c541=_0x573722[_0x411038(0x28a)]*_0x33d51d,_0x504207=_0x127d79[_0x411038(0x20a)]*_0x33d51d,_0x246af3=_0x383b4f[_0x411038(0xd3)]((_0x18671d-_0x55c541)/0x2),_0x2bbf0e=_0x18bb63[_0x411038(0xd3)]((_0x3e2bfc-_0x504207)/0x2);_0x327af3[_0x411038(0x2b1)](_0x137dad,0x0,0x0,_0x39ba69['width'],_0x2d2c46[_0x411038(0x20a)],_0x246af3,_0x2bbf0e,_0x55c541,_0x504207);}}}else{if(this[_0x411038(0x123)]()&&BattleManager[_0x411038(0x14c)]()){const _0x4fb0df=_0x288613[_0x411038(0x220)];if(_0x4fb0df>0x0&&$dataCommonEvents[_0x4fb0df]){if(_0x411038(0x11f)!==_0x411038(0x2ab))$gameTemp[_0x411038(0x1c4)](_0x4fb0df);else{const _0x39d917=_0x3f4c54[_0x411038(0x243)][_0x411038(0x115)]['CannotBeExploiter'];return this['traitObjects']()['some'](_0xd83577=>_0xd83577[_0x411038(0x1f1)][_0x411038(0xdb)](_0x39d917));}}}}},Game_Battler[_0x4715fe(0x154)][_0x4715fe(0x1bd)]=function(_0x56447f,_0x27602b){const _0x57f148=_0x4715fe;if(!BattleManager['isSTB']())return;if(!BattleManager[_0x57f148(0xf1)]())return;if(_0x27602b['hasSTBExploited']())return;if(_0x56447f[_0x57f148(0x1e6)]())return;const _0x431041=VisuMZ[_0x57f148(0x243)]['Settings'][_0x57f148(0x294)];if(!_0x431041['MultipleExploits']){if(_0x57f148(0x25f)!=='kBQCT')_0x27602b[_0x57f148(0x27e)](!![]);else{const _0x4899c9=_0x23f2bc[_0x57f148(0x160)],_0x199890={'textColor':_0x18acf9[_0x57f148(0xe5)](_0x5440fc['TextColor']),'flashColor':_0x4affcd['FlashColor'],'flashDuration':_0x191ce0[_0x57f148(0xf8)]};this[_0x57f148(0x136)](_0x4899c9,_0x199890);}}if(this['stbCannotBeExploiter']())return;this['displayExploitedEffects'](_0x431041);_0x431041['ExtraActions']>0x0&&this[_0x57f148(0x17d)](_0x431041[_0x57f148(0x1ba)]);for(const _0x5bcf3e of this[_0x57f148(0x199)]()){if(_0x57f148(0x12d)!==_0x57f148(0x12d))_0x3e3c99[_0x57f148(0x243)][_0x57f148(0x1af)][_0x57f148(0x2b7)](this);else{if(!$dataStates[_0x5bcf3e])continue;this[_0x57f148(0x283)](_0x5bcf3e);}}_0x431041['CustomJS']&&_0x431041[_0x57f148(0x226)][_0x57f148(0x2b7)](this,_0x56447f,_0x27602b);},Game_Battler[_0x4715fe(0x154)][_0x4715fe(0x189)]=function(_0x3d81e1){const _0x20a7d1=_0x4715fe;if(!_0x3d81e1)return;if(_0x3d81e1[_0x20a7d1(0x2bf)]){const _0x5f1aa1=_0x3d81e1['AnimationID'],_0x276672=_0x3d81e1['Mirror'],_0x5863f0=_0x3d81e1[_0x20a7d1(0x224)];$gameTemp[_0x20a7d1(0x230)]([this],_0x5f1aa1,_0x276672,_0x5863f0);}if(this[_0x20a7d1(0x1b8)]()&&_0x3d81e1[_0x20a7d1(0x160)]['length']>0x0){const _0x4d72c5=_0x3d81e1[_0x20a7d1(0x160)],_0x17a0e4={'textColor':ColorManager['getColor'](_0x3d81e1[_0x20a7d1(0x1b1)]),'flashColor':_0x3d81e1[_0x20a7d1(0x170)],'flashDuration':_0x3d81e1['FlashDuration']};this[_0x20a7d1(0x136)](_0x4d72c5,_0x17a0e4);}},Game_Battler['prototype'][_0x4715fe(0x17d)]=function(_0x29e96a){const _0x3d558b=_0x4715fe;this['_actions']=this['_actions']||[];const _0xa74a7c=this['_actions'][_0x3d558b(0x284)]<=0x0;if(this[_0x3d558b(0x1c8)]()){for(let _0x6ee1ca=0x0;_0x6ee1ca<_0x29e96a;_0x6ee1ca++){this[_0x3d558b(0x205)]['push'](new Game_Action(this));}if(this[_0x3d558b(0x123)]()){if(_0x3d558b(0x2a5)===_0x3d558b(0x132))this[_0x3d558b(0x1f3)]='face';else{const _0x24b38c=this[_0x3d558b(0xe0)]()[_0x3d558b(0x21a)][_0x3d558b(0x1f8)](_0x429b13=>this[_0x3d558b(0x2a2)](_0x429b13));if(_0x24b38c[_0x3d558b(0x284)]>0x0){if('OfGod'==='OfGod'){let _0x14bdd2;!_0xa74a7c&&(_0x14bdd2=this[_0x3d558b(0x205)]['shift']()),this[_0x3d558b(0x21e)](_0x24b38c),!_0xa74a7c&&this['_actions']['unshift'](_0x14bdd2);}else _0xe10c5b(_0x3d558b(0x209)[_0x3d558b(0xf5)](_0x5bd807,_0x48dbfd,_0x393fe9)),_0xac6ed3[_0x3d558b(0x242)]();}}}}},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x2af)]=Game_Actor[_0x4715fe(0x154)][_0x4715fe(0x14e)],Game_Actor[_0x4715fe(0x154)][_0x4715fe(0x14e)]=function(){const _0x47589d=_0x4715fe;if(BattleManager['isSTB']()){if(this[_0x47589d(0x1b8)]())this['battler']()[_0x47589d(0x20d)]();return![];}return VisuMZ['BattleSystemSTB'][_0x47589d(0x2af)][_0x47589d(0x2b7)](this);},Game_Actor[_0x4715fe(0x154)]['createTurnOrderSTBGraphicType']=function(){const _0x11bdbf=_0x4715fe,_0x199f17=this[_0x11bdbf(0x28e)]()[_0x11bdbf(0x1f1)];if(_0x199f17[_0x11bdbf(0xdb)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return'face';else{if(_0x199f17[_0x11bdbf(0xdb)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return _0x11bdbf(0x1a7);}return Window_STB_TurnOrder['Settings']['ActorBattlerType'];},Game_Actor[_0x4715fe(0x154)][_0x4715fe(0x1f5)]=function(){const _0x5ab96c=_0x4715fe,_0x113940=this[_0x5ab96c(0x28e)]()[_0x5ab96c(0x1f1)];if(_0x113940[_0x5ab96c(0xdb)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)){if('fvVVg'!==_0x5ab96c(0xeb))this['commandCancelSTB']();else return String(RegExp['$1']);}return this['faceName']();},Game_Actor[_0x4715fe(0x154)][_0x4715fe(0x1e9)]=function(){const _0x3a0223=_0x4715fe,_0x571c17=this[_0x3a0223(0x28e)]()[_0x3a0223(0x1f1)];if(_0x571c17['match'](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x3a0223(0x297)]();},Game_Actor[_0x4715fe(0x154)][_0x4715fe(0x2c3)]=function(){const _0x586dbb=_0x4715fe,_0x10e951=this[_0x586dbb(0x28e)]()[_0x586dbb(0x1f1)];if(_0x10e951[_0x586dbb(0xdb)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_STB_TurnOrder[_0x586dbb(0x129)]['ActorBattlerIcon'];},Game_Enemy['prototype'][_0x4715fe(0x15d)]=function(){const _0x43530b=_0x4715fe,_0x5ec5e7=this['enemy']()[_0x43530b(0x1f1)];if(_0x5ec5e7[_0x43530b(0xdb)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return'nzRlr'==='BZEeF'?this['processUpdateGraphic']():_0x43530b(0x158);else{if(_0x5ec5e7[_0x43530b(0xdb)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return _0x43530b(0x1a7);}return Window_STB_TurnOrder['Settings']['EnemyBattlerType'];},Game_Enemy[_0x4715fe(0x154)][_0x4715fe(0x1f5)]=function(){const _0x56b230=_0x4715fe,_0xff1339=this[_0x56b230(0xe0)]()[_0x56b230(0x1f1)];if(_0xff1339[_0x56b230(0xdb)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Window_STB_TurnOrder[_0x56b230(0x129)][_0x56b230(0x1ad)];},Game_Enemy[_0x4715fe(0x154)]['createTurnOrderSTBGraphicFaceIndex']=function(){const _0x21335a=_0x4715fe,_0x558362=this[_0x21335a(0xe0)]()['note'];if(_0x558362['match'](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Window_STB_TurnOrder[_0x21335a(0x129)]['EnemyBattlerFaceIndex'];},Game_Enemy[_0x4715fe(0x154)][_0x4715fe(0x2c3)]=function(){const _0x2b014c=_0x4715fe,_0x55734a=this[_0x2b014c(0xe0)]()[_0x2b014c(0x1f1)];if(_0x55734a[_0x2b014c(0xdb)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_STB_TurnOrder['Settings'][_0x2b014c(0x2c0)];},VisuMZ[_0x4715fe(0x243)][_0x4715fe(0xef)]=Game_Party['prototype'][_0x4715fe(0x1ac)],Game_Party['prototype'][_0x4715fe(0x1ac)]=function(_0x1b9198){const _0x438c49=_0x4715fe;VisuMZ[_0x438c49(0x243)][_0x438c49(0xef)][_0x438c49(0x2b7)](this,_0x1b9198),SceneManager[_0x438c49(0x16c)]()&&BattleManager['isSTB']()&&BattleManager[_0x438c49(0x24a)][_0x438c49(0x1fa)]($gameActors[_0x438c49(0x28e)](_0x1b9198));},VisuMZ['BattleSystemSTB'][_0x4715fe(0x10a)]=Scene_Battle[_0x4715fe(0x154)][_0x4715fe(0x279)],Scene_Battle[_0x4715fe(0x154)]['createActorCommandWindow']=function(){const _0x4f897e=_0x4715fe;VisuMZ[_0x4f897e(0x243)][_0x4f897e(0x10a)][_0x4f897e(0x2b7)](this),BattleManager[_0x4f897e(0x198)]()&&this['createActorCommandWindowSTB']();},Scene_Battle['prototype']['createActorCommandWindowSTB']=function(){const _0x31bff6=_0x4715fe,_0x4083d1=this[_0x31bff6(0x201)];this['isPartyCommandWindowDisabled']()&&(_0x31bff6(0x244)!==_0x31bff6(0x244)?_0x131b05[_0x31bff6(0x1c4)](_0x489d5c):delete _0x4083d1['_handlers'][_0x31bff6(0x253)]);},VisuMZ[_0x4715fe(0x243)]['Scene_Battle_commandCancel']=Scene_Battle[_0x4715fe(0x154)][_0x4715fe(0x12c)],Scene_Battle[_0x4715fe(0x154)][_0x4715fe(0x12c)]=function(){const _0x29847f=_0x4715fe;BattleManager[_0x29847f(0x198)]()?this[_0x29847f(0x228)]():VisuMZ['BattleSystemSTB']['Scene_Battle_commandCancel'][_0x29847f(0x2b7)](this);},Scene_Battle[_0x4715fe(0x154)]['commandCancelSTB']=function(){const _0x2d3e08=_0x4715fe;this[_0x2d3e08(0x28c)][_0x2d3e08(0x29c)](),this[_0x2d3e08(0x201)][_0x2d3e08(0x24e)]();},VisuMZ['BattleSystemSTB'][_0x4715fe(0x146)]=Scene_Battle[_0x4715fe(0x154)][_0x4715fe(0x190)],Scene_Battle['prototype'][_0x4715fe(0x190)]=function(){const _0x1ae26f=_0x4715fe;BattleManager[_0x1ae26f(0x198)]()?_0x1ae26f(0x2b6)!==_0x1ae26f(0x128)?this['startActorCommandSelection']():_0x7726f5-=_0x63e20d*_0x4f038[_0x1ae26f(0x11a)]:'DBezp'!==_0x1ae26f(0x12a)?(this[_0x1ae26f(0x2bd)](),this['_positionDuration']=0x0,this[_0x1ae26f(0xe8)](),this[_0x1ae26f(0x27c)]=this['_fadeTarget']):VisuMZ[_0x1ae26f(0x243)][_0x1ae26f(0x146)]['call'](this);},VisuMZ['BattleSystemSTB'][_0x4715fe(0x1ef)]=Scene_Battle['prototype'][_0x4715fe(0x1b2)],Scene_Battle['prototype'][_0x4715fe(0x1b2)]=function(){const _0x2655fc=_0x4715fe;VisuMZ[_0x2655fc(0x243)][_0x2655fc(0x1ef)][_0x2655fc(0x2b7)](this),this[_0x2655fc(0x106)]();},Scene_Battle[_0x4715fe(0x154)]['createSTBTurnOrderWindow']=function(){const _0x74cb88=_0x4715fe;if(!BattleManager[_0x74cb88(0x198)]())return;this['_stbTurnOrderWindow']=new Window_STB_TurnOrder();const _0x237b88=this[_0x74cb88(0x261)](this[_0x74cb88(0xe7)]);this[_0x74cb88(0x153)](this[_0x74cb88(0x28f)],_0x237b88),this[_0x74cb88(0x24c)](),BattleManager[_0x74cb88(0x2b5)](!![]);},Scene_Battle[_0x4715fe(0x154)][_0x4715fe(0x24c)]=function(){const _0x3891b6=_0x4715fe,_0x35a345=Window_STB_TurnOrder[_0x3891b6(0x129)];if(_0x35a345['DisplayPosition']!==_0x3891b6(0x268))return;if(!_0x35a345['RepositionLogWindow'])return;if(!this['_logWindow'])return;const _0x353804=this['_stbTurnOrderWindow']['y']-Math[_0x3891b6(0xd3)]((Graphics['height']-Graphics[_0x3891b6(0x108)])/0x2),_0x47ab9d=_0x353804+this['_stbTurnOrderWindow'][_0x3891b6(0x20a)];this['_logWindow']['y']=_0x47ab9d+_0x35a345[_0x3891b6(0x2a7)];};function Sprite_STB_TurnOrder_Battler(){this['initialize'](...arguments);}Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)]=Object['create'](Sprite_Clickable[_0x4715fe(0x154)]),Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x24d)]=Sprite_STB_TurnOrder_Battler,Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x179)]=function(_0x147edf,_0x3f5fb8){const _0x261a33=_0x4715fe;this[_0x261a33(0x101)](_0x147edf,_0x3f5fb8),Sprite_Clickable[_0x261a33(0x154)][_0x261a33(0x179)][_0x261a33(0x2b7)](this),this[_0x261a33(0x27c)]=0x0,this[_0x261a33(0x1c0)](),this[_0x261a33(0x2ad)]();},Sprite_STB_TurnOrder_Battler['prototype'][_0x4715fe(0x101)]=function(_0x247d15,_0x1134dd){const _0x4a0364=_0x4715fe;this[_0x4a0364(0xe1)]=_0x247d15,this[_0x4a0364(0x194)]=_0x1134dd;const _0x231945=Window_STB_TurnOrder[_0x4a0364(0x129)],_0x4278b2=this[_0x4a0364(0x1fd)](),_0x19e4db=this[_0x4a0364(0xf7)]();this[_0x4a0364(0x143)]=0x0,this[_0x4a0364(0x24f)]=_0x4278b2?_0x231945[_0x4a0364(0x11a)]*_0x19e4db:0x0,this['_positionTargetY']=_0x4278b2?0x0:_0x231945['SpriteThin']*_0x19e4db,this['_fadeDuration']=0x0,this[_0x4a0364(0xf2)]=0xff,this['_isAlive']=![],this[_0x4a0364(0x288)]=![],this[_0x4a0364(0x166)]=0x0,this[_0x4a0364(0x175)]=0x0;},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x1c0)]=function(){const _0x5916c0=_0x4715fe;this[_0x5916c0(0x169)](),this[_0x5916c0(0x247)](),this[_0x5916c0(0x1d0)](),this[_0x5916c0(0x1be)](),this['createLetterSprite']();},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x169)]=function(){const _0xa906dc=_0x4715fe;this['x']=this[_0xa906dc(0x24f)],this['y']=this[_0xa906dc(0x150)];},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x1fd)]=function(){const _0x124a7b=_0x4715fe,_0x54d07c=Window_STB_TurnOrder[_0x124a7b(0x129)],_0x3612ae=[_0x124a7b(0x268),_0x124a7b(0x293)][_0x124a7b(0x27a)](_0x54d07c[_0x124a7b(0x295)]);return _0x3612ae;},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x111)]=function(){const _0x23a552=_0x4715fe,_0x3be5bc=Window_STB_TurnOrder[_0x23a552(0x129)];return this[_0x23a552(0x1fd)]()?_0x3be5bc[_0x23a552(0x11a)]:_0x3be5bc[_0x23a552(0x2be)];},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x151)]=function(){const _0x19d625=_0x4715fe,_0x349694=Window_STB_TurnOrder[_0x19d625(0x129)];return this[_0x19d625(0x1fd)]()?_0x349694[_0x19d625(0x2be)]:_0x349694[_0x19d625(0x11a)];},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x221)]=function(){const _0x5003fd=_0x4715fe;this[_0x5003fd(0x148)]=new Bitmap(0x48,0x24);const _0x38cbd0=this[_0x5003fd(0x1b8)]()?this[_0x5003fd(0x1b8)]()[_0x5003fd(0x121)]():_0x5003fd(0x1ca)['format'](this[_0x5003fd(0xe1)],this[_0x5003fd(0x194)]);this[_0x5003fd(0x148)][_0x5003fd(0x213)](_0x38cbd0,0x0,0x0,0x48,0x24,_0x5003fd(0x114));},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x247)]=function(){const _0xd1f0d3=_0x4715fe;if(!Window_STB_TurnOrder[_0xd1f0d3(0x129)]['ShowMarkerBg'])return;const _0x1f8e87=Window_STB_TurnOrder[_0xd1f0d3(0x129)],_0x1c42b2=this['_unit']===$gameParty?_0xd1f0d3(0x23f):'Enemy',_0x3b1cc6=_0xd1f0d3(0x237)[_0xd1f0d3(0xf5)](_0x1c42b2),_0x485d06=new Sprite();_0x485d06['anchor']['x']=this['anchor']['x'],_0x485d06[_0xd1f0d3(0x103)]['y']=this[_0xd1f0d3(0x103)]['y'];if(_0x1f8e87[_0x3b1cc6])'fXweL'===_0xd1f0d3(0x259)?_0x485d06[_0xd1f0d3(0x148)]=ImageManager['loadSystem'](_0x1f8e87[_0x3b1cc6]):_0x34b323['BattleSystemSTB'][_0xd1f0d3(0x20e)][_0xd1f0d3(0x2b7)](this,_0x5039a);else{if(_0xd1f0d3(0x167)!==_0xd1f0d3(0x167))_0x5057cb['BattleSystemSTB'][_0xd1f0d3(0x127)][_0xd1f0d3(0x2b7)](this);else{const _0xe8338d=this[_0xd1f0d3(0x111)](),_0x11ace4=this['bitmapHeight']();_0x485d06['bitmap']=new Bitmap(_0xe8338d,_0x11ace4);const _0x18b462=ColorManager[_0xd1f0d3(0xe5)](_0x1f8e87[_0xd1f0d3(0x1e7)[_0xd1f0d3(0xf5)](_0x1c42b2)]),_0x43f5cc=ColorManager[_0xd1f0d3(0xe5)](_0x1f8e87['%1BgColor2'[_0xd1f0d3(0xf5)](_0x1c42b2)]);_0x485d06[_0xd1f0d3(0x148)]['gradientFillRect'](0x0,0x0,_0xe8338d,_0x11ace4,_0x18b462,_0x43f5cc,!![]);}}this[_0xd1f0d3(0x1f0)]=_0x485d06,this['addChild'](this[_0xd1f0d3(0x1f0)]),this[_0xd1f0d3(0x28a)]=this[_0xd1f0d3(0x1f0)][_0xd1f0d3(0x28a)],this[_0xd1f0d3(0x20a)]=this['_backgroundSprite']['height'];},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x1d0)]=function(){const _0x418503=_0x4715fe,_0x2a17c7=new Sprite();_0x2a17c7[_0x418503(0x103)]['x']=this[_0x418503(0x103)]['x'],_0x2a17c7[_0x418503(0x103)]['y']=this['anchor']['y'],this[_0x418503(0x197)]=_0x2a17c7,this[_0x418503(0x26d)](this[_0x418503(0x197)]),this[_0x418503(0x1d5)]();},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x1be)]=function(){const _0x2c3bf9=_0x4715fe;if(!Window_STB_TurnOrder[_0x2c3bf9(0x129)][_0x2c3bf9(0x12f)])return;const _0x3d06a9=Window_STB_TurnOrder[_0x2c3bf9(0x129)],_0x1c2ed3=this['_unit']===$gameParty?_0x2c3bf9(0x23f):'Enemy',_0x1817dc='%1SystemBorder'['format'](_0x1c2ed3),_0x41aa50=new Sprite();_0x41aa50[_0x2c3bf9(0x103)]['x']=this['anchor']['x'],_0x41aa50[_0x2c3bf9(0x103)]['y']=this['anchor']['y'];if(_0x3d06a9[_0x1817dc]){if(_0x2c3bf9(0x137)===_0x2c3bf9(0x17a)){const _0x55f40f=this[_0x2c3bf9(0x111)](),_0x74bf58=this[_0x2c3bf9(0x151)]();_0x4db030[_0x2c3bf9(0x148)]=new _0x53d1aa(_0x55f40f,_0x74bf58);const _0x2a3991=_0x191581[_0x2c3bf9(0xe5)](_0x5561cc[_0x2c3bf9(0x1e7)[_0x2c3bf9(0xf5)](_0x59fe6d)]),_0x9379e0=_0x340c85[_0x2c3bf9(0xe5)](_0xa27660['%1BgColor2'[_0x2c3bf9(0xf5)](_0x1f18e6)]);_0x1a12e6[_0x2c3bf9(0x148)][_0x2c3bf9(0x1ff)](0x0,0x0,_0x55f40f,_0x74bf58,_0x2a3991,_0x9379e0,!![]);}else _0x41aa50[_0x2c3bf9(0x148)]=ImageManager[_0x2c3bf9(0x134)](_0x3d06a9[_0x1817dc]);}else{let _0x5af80a=this['bitmapWidth'](),_0x5de3f2=this[_0x2c3bf9(0x151)](),_0x1e91d5=_0x3d06a9[_0x2c3bf9(0x112)];_0x41aa50[_0x2c3bf9(0x148)]=new Bitmap(_0x5af80a,_0x5de3f2);const _0x48a3cd=_0x2c3bf9(0x10c),_0x432dcd=ColorManager[_0x2c3bf9(0xe5)](_0x3d06a9['%1BorderColor'[_0x2c3bf9(0xf5)](_0x1c2ed3)]);_0x41aa50[_0x2c3bf9(0x148)][_0x2c3bf9(0x178)](0x0,0x0,_0x5af80a,_0x5de3f2,_0x48a3cd),_0x5af80a-=0x2,_0x5de3f2-=0x2,_0x41aa50[_0x2c3bf9(0x148)][_0x2c3bf9(0x178)](0x1,0x1,_0x5af80a,_0x5de3f2,_0x432dcd),_0x5af80a-=_0x1e91d5*0x2,_0x5de3f2-=_0x1e91d5*0x2,_0x41aa50[_0x2c3bf9(0x148)]['fillRect'](0x1+_0x1e91d5,0x1+_0x1e91d5,_0x5af80a,_0x5de3f2,_0x48a3cd),_0x5af80a-=0x2,_0x5de3f2-=0x2,_0x1e91d5+=0x1,_0x41aa50[_0x2c3bf9(0x148)]['clearRect'](0x1+_0x1e91d5,0x1+_0x1e91d5,_0x5af80a,_0x5de3f2);}this[_0x2c3bf9(0x1f0)]=_0x41aa50,this[_0x2c3bf9(0x26d)](this[_0x2c3bf9(0x1f0)]);},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x1ea)]=function(){const _0x111ffc=_0x4715fe,_0x2a341b=Window_STB_TurnOrder['Settings'];if(!_0x2a341b[_0x111ffc(0xdf)])return;if(this[_0x111ffc(0xe1)]===$gameParty)return;const _0xce5849=this[_0x111ffc(0x111)](),_0x5def0c=this[_0x111ffc(0x151)](),_0x546850=new Sprite();_0x546850[_0x111ffc(0x103)]['x']=this[_0x111ffc(0x103)]['x'],_0x546850[_0x111ffc(0x103)]['y']=this[_0x111ffc(0x103)]['y'],_0x546850[_0x111ffc(0x148)]=new Bitmap(_0xce5849,_0x5def0c),this['_letterSprite']=_0x546850,this['addChild'](this[_0x111ffc(0x1ee)]);},Sprite_STB_TurnOrder_Battler['prototype'][_0x4715fe(0x1b8)]=function(){const _0x3e749f=_0x4715fe;return this[_0x3e749f(0xe1)]?this[_0x3e749f(0xe1)]['members']()[this[_0x3e749f(0x194)]]:null;},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0xd5)]=function(){const _0x132fef=_0x4715fe;Sprite_Clickable[_0x132fef(0x154)][_0x132fef(0xd5)][_0x132fef(0x2b7)](this),this['checkPosition'](),this[_0x132fef(0xe8)](),this[_0x132fef(0x2ad)](),this[_0x132fef(0x11d)](),this['updateGraphic'](),this[_0x132fef(0x116)](),this[_0x132fef(0xdc)](),this[_0x132fef(0x184)]();},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x2bd)]=function(){const _0x2f97e2=_0x4715fe,_0x17574a=this[_0x2f97e2(0x21f)]();if(this['_position']===_0x17574a)return;this[_0x2f97e2(0x12b)]=_0x17574a;this[_0x2f97e2(0x27c)]<0xff&&this['battler']()&&_0x17574a!==this[_0x2f97e2(0xf7)]()&&this[_0x2f97e2(0x159)](0xff);if(_0x17574a===this[_0x2f97e2(0xf7)]()&&this[_0x2f97e2(0x287)]<=0x0&&this[_0x2f97e2(0x27c)]>0x0)this[_0x2f97e2(0x159)](0x0);else this['_fadeDuration']<=0x0&&this['opacity']<0xff&&(_0x2f97e2(0x216)===_0x2f97e2(0x227)?_0xb34767='enemy':this[_0x2f97e2(0x2ad)]());this[_0x2f97e2(0x107)]();},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x10f)]=function(){const _0x201fe0=_0x4715fe,_0x53866a=this[_0x201fe0(0x263)]();if(!_0x53866a)return;let _0x1afbbb=![];if(this[_0x201fe0(0x166)]!==_0x53866a['width']){if('ZWmmJ'!==_0x201fe0(0x239))_0x1afbbb=!![];else{const _0x371e28=_0x3dcf4d[_0x201fe0(0x129)];if([_0x201fe0(0x268)]['includes'](_0x371e28[_0x201fe0(0x295)]))return;this['x']=this[_0x201fe0(0x240)],this['y']=this[_0x201fe0(0x176)];const _0xc2916f=_0x70bf71[_0x201fe0(0x241)][_0x201fe0(0xe7)];this['x']+=_0xc2916f['x'],this['y']+=_0xc2916f['y'];}}else this[_0x201fe0(0x175)]!==_0x53866a[_0x201fe0(0x20a)]&&('DLlBI'!==_0x201fe0(0x2aa)?(_0x50f498['BattleSystemSTB'][_0x201fe0(0x262)]['call'](this),this[_0x201fe0(0x23b)]()):_0x1afbbb=!![]);if(_0x1afbbb){if(_0x201fe0(0x14d)===_0x201fe0(0x1db)){const _0x3f78f6=_0x439e2d[_0x201fe0(0x129)],_0x391f9b=this[_0x201fe0(0x1fd)](),_0x954028=_0x3f78f6[_0x201fe0(0x238)],_0x4e6a01=_0x3f78f6[_0x201fe0(0x1a0)],_0x1798f2=_0x403948[_0x201fe0(0x241)][_0x201fe0(0x28f)];if(!_0x1798f2)return;const _0x2e82d6=this[_0x201fe0(0x21f)]();this['_positionDuration']=_0x3f78f6[_0x201fe0(0xfe)],this[_0x201fe0(0x24f)]=_0x391f9b?_0x3f78f6['SpriteThin']*_0x2e82d6:0x0,this[_0x201fe0(0x150)]=_0x391f9b?0x0:_0x3f78f6[_0x201fe0(0x11a)]*_0x2e82d6,_0x2e82d6>0x0&&(this[_0x201fe0(0x24f)]+=_0x391f9b?_0x4e6a01:0x0,this[_0x201fe0(0x150)]+=_0x391f9b?0x0:_0x4e6a01),_0x954028?this[_0x201fe0(0x24f)]=_0x391f9b?_0x1798f2[_0x201fe0(0x28a)]-this[_0x201fe0(0x24f)]-_0x3f78f6[_0x201fe0(0x11a)]:0x0:this[_0x201fe0(0x150)]=_0x391f9b?0x0:_0x1798f2[_0x201fe0(0x20a)]-this[_0x201fe0(0x150)]-_0x3f78f6[_0x201fe0(0x11a)];}else this[_0x201fe0(0x107)]();}},Sprite_STB_TurnOrder_Battler['prototype']['calculateTargetPositions']=function(){const _0x4218f7=_0x4715fe,_0xcc242b=Window_STB_TurnOrder[_0x4218f7(0x129)],_0x376bad=this['isHorz'](),_0x212121=_0xcc242b[_0x4218f7(0x238)],_0x35c693=_0xcc242b[_0x4218f7(0x1a0)],_0x2624dc=SceneManager['_scene']['_stbTurnOrderWindow'];if(!_0x2624dc)return;const _0x52dbd2=this[_0x4218f7(0x21f)]();this[_0x4218f7(0x143)]=_0xcc242b[_0x4218f7(0xfe)],this[_0x4218f7(0x24f)]=_0x376bad?_0xcc242b[_0x4218f7(0x11a)]*_0x52dbd2:0x0,this[_0x4218f7(0x150)]=_0x376bad?0x0:_0xcc242b[_0x4218f7(0x11a)]*_0x52dbd2,_0x52dbd2>0x0&&(this['_positionTargetX']+=_0x376bad?_0x35c693:0x0,this[_0x4218f7(0x150)]+=_0x376bad?0x0:_0x35c693),_0x212121?_0x4218f7(0x217)===_0x4218f7(0x210)?_0x4993e8[_0x4218f7(0x243)][_0x4218f7(0x127)][_0x4218f7(0x2b7)](this):this['_positionTargetX']=_0x376bad?_0x2624dc[_0x4218f7(0x28a)]-this[_0x4218f7(0x24f)]-_0xcc242b['SpriteThin']:0x0:this[_0x4218f7(0x150)]=_0x376bad?0x0:_0x2624dc[_0x4218f7(0x20a)]-this[_0x4218f7(0x150)]-_0xcc242b['SpriteThin'];},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0xe8)]=function(){const _0x4afb11=_0x4715fe;if(this[_0x4afb11(0x287)]>0x0)return;if(this[_0x4afb11(0x143)]>0x0){const _0x4ee2c5=this[_0x4afb11(0x143)];this['x']=(this['x']*(_0x4ee2c5-0x1)+this['_positionTargetX'])/_0x4ee2c5,this['y']=(this['y']*(_0x4ee2c5-0x1)+this['_positionTargetY'])/_0x4ee2c5,this[_0x4afb11(0x143)]--;}if(this[_0x4afb11(0x143)]<=0x0){if('MNvij'!==_0x4afb11(0x1bf)){const _0x521997=_0x3d2b68[_0x4afb11(0x129)];if(_0x521997['DisplayPosition']!=='top')return;if(!_0x521997[_0x4afb11(0x1e5)])return;const _0x388bcf=_0x535375[_0x4afb11(0x241)][_0x4afb11(0x188)];if(!_0x388bcf)return;_0x388bcf[_0x4afb11(0x1c7)]?(this['x']=this[_0x4afb11(0x240)]+(_0x521997['RepositionTopHelpX']||0x0),this['y']=this[_0x4afb11(0x176)]+(_0x521997[_0x4afb11(0x182)]||0x0)):(this['x']=this[_0x4afb11(0x240)],this['y']=this[_0x4afb11(0x176)]);const _0x639767=_0x5b57d9[_0x4afb11(0x241)]['_windowLayer'];_0x4cff29[_0x4afb11(0x25c)]===_0x4f5d42&&(_0xe17a70[_0x4afb11(0x25c)]=_0x8f7f9d[_0x4afb11(0xd3)]((_0x4fa223[_0x4afb11(0x28a)]-_0x2f2262['min'](_0x3f980c[_0x4afb11(0x272)],_0x639767[_0x4afb11(0x28a)]))/0x2),_0x1d0ffb[_0x4afb11(0x2b0)]=_0x17280e[_0x4afb11(0xd3)]((_0x5e2e77[_0x4afb11(0x20a)]-_0x353c5f[_0x4afb11(0xfb)](_0x5290a9['boxHeight'],_0x639767[_0x4afb11(0x20a)]))/0x2)),this['x']+=_0x639767['x']-_0x4779a5[_0x4afb11(0x25c)],this['y']+=_0x639767['y']-_0x56a0d2['_ogWindowLayerY'];}else{this['x']=this[_0x4afb11(0x24f)],this['y']=this[_0x4afb11(0x150)];if(this[_0x4afb11(0x27c)]<0xff&&!this[_0x4afb11(0x1b0)]&&this[_0x4afb11(0x287)]<=0x0){const _0x5b02fd=this[_0x4afb11(0x1b8)]();_0x5b02fd&&(this[_0x4afb11(0xf2)]=_0x5b02fd[_0x4afb11(0x14f)]()&&_0x5b02fd['isAppeared']()?0xff:0x0);}}}},Sprite_STB_TurnOrder_Battler['prototype'][_0x4715fe(0xf7)]=function(){const _0x42dcdf=_0x4715fe,_0x12ba8a=Window_STB_TurnOrder[_0x42dcdf(0x129)],_0x18b9a2=this['isHorz']()?_0x12ba8a[_0x42dcdf(0x29a)]:_0x12ba8a[_0x42dcdf(0x17b)];return _0x18b9a2+0x1;},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x263)]=function(){return SceneManager['_scene']['_stbTurnOrderWindow'];},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)]['containerPosition']=function(){const _0x5f29f2=_0x4715fe,_0x34747d=this[_0x5f29f2(0x1b8)]();if(!_0x34747d)return this['defaultPosition']();if(_0x34747d===BattleManager[_0x5f29f2(0x104)])return 0x0;if(BattleManager['_actionBattlers']['includes'](_0x34747d)){const _0x163115=BattleManager[_0x5f29f2(0x24a)][_0x5f29f2(0x232)](_0x34747d)+0x1;return _0x163115;}return this[_0x5f29f2(0xf7)]();},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x159)]=function(_0x485dbc){const _0x2f03cc=_0x4715fe,_0x58f0cb=Window_STB_TurnOrder['Settings'];this[_0x2f03cc(0x287)]=_0x58f0cb[_0x2f03cc(0xfe)],this[_0x2f03cc(0xf2)]=_0x485dbc;},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x2ad)]=function(){const _0x3b7270=_0x4715fe,_0x2f8e96=this['battler']();if(!_0x2f8e96)return;if(this[_0x3b7270(0x19a)]===_0x2f8e96[_0x3b7270(0x14f)]()&&this[_0x3b7270(0x288)]===_0x2f8e96['isAppeared']())return;this[_0x3b7270(0x19a)]=_0x2f8e96[_0x3b7270(0x14f)](),this[_0x3b7270(0x288)]=_0x2f8e96[_0x3b7270(0x13c)]();let _0x4b5fec=this[_0x3b7270(0x19a)]&&this[_0x3b7270(0x288)]?0xff:0x0;this[_0x3b7270(0x159)](_0x4b5fec);},Sprite_STB_TurnOrder_Battler['prototype'][_0x4715fe(0x11d)]=function(){const _0x33c94b=_0x4715fe;if(this[_0x33c94b(0x287)]>0x0){if(_0x33c94b(0xd2)!==_0x33c94b(0xd2))return this['_stbTurnOrderGraphicType']===_0xfad382&&(this[_0x33c94b(0x18b)]=this['createTurnOrderSTBGraphicType']()),this['_stbTurnOrderGraphicType'];else{const _0x3e65ae=this[_0x33c94b(0x287)];this['opacity']=(this[_0x33c94b(0x27c)]*(_0x3e65ae-0x1)+this[_0x33c94b(0xf2)])/_0x3e65ae,this['_fadeDuration']--,this['_fadeDuration']<=0x0&&(this['checkPosition'](),this[_0x33c94b(0x143)]=0x0,this[_0x33c94b(0xe8)](),this['opacity']=this['_fadeTarget']);}}if(this[_0x33c94b(0x1b0)])return;BattleManager[_0x33c94b(0x231)]===_0x33c94b(0x24b)&&(_0x33c94b(0x28b)!=='IjJnX'?this['_stbTurnOrderIconIndex']=_0x2c6664:(this['_isBattleOver']=!![],this[_0x33c94b(0x159)](0x0)));},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)]['updateGraphic']=function(){const _0x486bdb=_0x4715fe,_0x4cd6b4=this[_0x486bdb(0x1b8)]();if(!_0x4cd6b4)return;const _0x4610df=Window_STB_TurnOrder[_0x486bdb(0x129)],_0x1f79ac=this[_0x486bdb(0xe1)]===$gameParty?'Actor':_0x486bdb(0x1f4);let _0x3817cd=_0x4cd6b4[_0x486bdb(0x275)]();if(_0x4cd6b4['isActor']()&&_0x3817cd===_0x486bdb(0xe0))_0x3817cd=_0x486bdb(0x158);else _0x4cd6b4[_0x486bdb(0x123)]()&&_0x3817cd===_0x486bdb(0xe4)&&(_0x3817cd='enemy');if(this[_0x486bdb(0x1f3)]!==_0x3817cd){if('DbIyl'===_0x486bdb(0x15e)){const _0x532d36=this[_0x486bdb(0x144)]()?this['currentClass']()[_0x486bdb(0x1f1)]:this['enemy']()[_0x486bdb(0x1f1)];if(_0x532d36[_0x486bdb(0xdb)](_0x5ed8bc['BattleSystemSTB'][_0x486bdb(0x115)][_0x486bdb(0x21c)]))return _0x46bb60[_0x486bdb(0x243)]['ParseStateData'](_0xfd930c['$1']);return _0x4401c1[_0x486bdb(0x243)][_0x486bdb(0x129)][_0x486bdb(0x294)][_0x486bdb(0x173)]||[];}else return this[_0x486bdb(0x1d5)]();}switch(this[_0x486bdb(0x1f3)]){case _0x486bdb(0x158):if(this[_0x486bdb(0x289)]!==_0x4cd6b4[_0x486bdb(0x145)]())return this[_0x486bdb(0x1d5)]();if(this[_0x486bdb(0x19f)]!==_0x4cd6b4[_0x486bdb(0x1ec)]())return _0x486bdb(0x191)===_0x486bdb(0x191)?this[_0x486bdb(0x1d5)]():this['processUpdateGraphic']();break;case _0x486bdb(0x1a7):if(this['_graphicIconIndex']!==_0x4cd6b4[_0x486bdb(0x180)]())return this['processUpdateGraphic']();break;case _0x486bdb(0xe0):if(_0x4cd6b4[_0x486bdb(0x135)]()){if(_0x486bdb(0x299)===_0x486bdb(0x299)){if(this[_0x486bdb(0x113)]!==_0x4cd6b4['svBattlerName']())return this['processUpdateGraphic']();}else this[_0x486bdb(0x13d)]();}else{if(this[_0x486bdb(0x207)]!==_0x4cd6b4['battlerName']()){if('xihst'!==_0x486bdb(0x27f))return this[_0x486bdb(0x1d5)]();else this[_0x486bdb(0x18d)]();}}break;case'svactor':if(_0x4cd6b4[_0x486bdb(0x144)]()){if(this[_0x486bdb(0x113)]!==_0x4cd6b4[_0x486bdb(0x204)]())return this['processUpdateGraphic']();}else{if(this[_0x486bdb(0x207)]!==_0x4cd6b4[_0x486bdb(0x204)]())return this[_0x486bdb(0x1d5)]();}break;}},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x1d5)]=function(){const _0x136f9a=_0x4715fe,_0xc8a67=this[_0x136f9a(0x1b8)]();if(!_0xc8a67)return;this['_graphicType']=_0xc8a67[_0x136f9a(0x275)]();if(_0xc8a67[_0x136f9a(0x144)]()&&this['_graphicType']===_0x136f9a(0xe0))this[_0x136f9a(0x1f3)]=_0x136f9a(0x158);else _0xc8a67['isEnemy']()&&this[_0x136f9a(0x1f3)]===_0x136f9a(0xe4)&&(this[_0x136f9a(0x1f3)]='enemy');let _0xdc6b28;switch(this[_0x136f9a(0x1f3)]){case _0x136f9a(0x158):this[_0x136f9a(0x289)]=_0xc8a67[_0x136f9a(0x145)](),this['_graphicFaceIndex']=_0xc8a67[_0x136f9a(0x1ec)](),_0xdc6b28=ImageManager[_0x136f9a(0xf6)](this['_graphicFaceName']),_0xdc6b28[_0x136f9a(0x1bb)](this[_0x136f9a(0x1eb)]['bind'](this,_0xdc6b28));break;case _0x136f9a(0x1a7):this[_0x136f9a(0x286)]=_0xc8a67[_0x136f9a(0x2c3)](),_0xdc6b28=ImageManager[_0x136f9a(0x134)]('IconSet'),_0xdc6b28['addLoadListener'](this[_0x136f9a(0x282)][_0x136f9a(0x281)](this,_0xdc6b28));break;case _0x136f9a(0xe0):if(_0xc8a67[_0x136f9a(0x135)]()){if(_0x136f9a(0x229)!==_0x136f9a(0x229)){if(this[_0x136f9a(0x113)]!==_0x5e8918['battlerName']())return this['processUpdateGraphic']();}else this[_0x136f9a(0x113)]=_0xc8a67['svBattlerName'](),_0xdc6b28=ImageManager[_0x136f9a(0x17c)](this['_graphicSv']),_0xdc6b28[_0x136f9a(0x1bb)](this[_0x136f9a(0x25a)][_0x136f9a(0x281)](this,_0xdc6b28));}else $gameSystem[_0x136f9a(0x27b)]()?(this['_graphicEnemy']=_0xc8a67[_0x136f9a(0x204)](),_0xdc6b28=ImageManager[_0x136f9a(0x133)](this['_graphicEnemy']),_0xdc6b28['addLoadListener'](this[_0x136f9a(0x1bc)]['bind'](this,_0xdc6b28))):(this[_0x136f9a(0x207)]=_0xc8a67['battlerName'](),_0xdc6b28=ImageManager[_0x136f9a(0x15b)](this[_0x136f9a(0x207)]),_0xdc6b28[_0x136f9a(0x1bb)](this[_0x136f9a(0x1bc)]['bind'](this,_0xdc6b28)));break;case _0x136f9a(0xe4):this[_0x136f9a(0x113)]=_0xc8a67['battlerName'](),_0xdc6b28=ImageManager[_0x136f9a(0x17c)](this['_graphicSv']),_0xdc6b28[_0x136f9a(0x1bb)](this[_0x136f9a(0x25a)][_0x136f9a(0x281)](this,_0xdc6b28));break;}},Sprite_STB_TurnOrder_Battler['prototype'][_0x4715fe(0x1eb)]=function(_0x5ceccb){const _0x55b81f=_0x4715fe,_0x458503=this['_graphicFaceIndex'],_0x40572d=this[_0x55b81f(0x111)](),_0x5e93ef=this[_0x55b81f(0x151)](),_0x159c8f=Math[_0x55b81f(0x266)](_0x40572d,_0x5e93ef);this[_0x55b81f(0x197)][_0x55b81f(0x148)]=new Bitmap(_0x40572d,_0x5e93ef);const _0x2d60cc=this[_0x55b81f(0x197)]['bitmap'],_0x228253=ImageManager[_0x55b81f(0x218)],_0x1ebfd0=ImageManager['faceHeight'],_0xacd467=_0x159c8f/Math['max'](_0x228253,_0x1ebfd0),_0x408371=ImageManager['faceWidth'],_0x1abb9e=ImageManager[_0x55b81f(0x11b)],_0x3e07c9=_0x458503%0x4*_0x228253+(_0x228253-_0x408371)/0x2,_0x2c012d=Math['floor'](_0x458503/0x4)*_0x1ebfd0+(_0x1ebfd0-_0x1abb9e)/0x2,_0x1537f9=(_0x40572d-_0x228253*_0xacd467)/0x2,_0x3d830f=(_0x5e93ef-_0x1ebfd0*_0xacd467)/0x2;_0x2d60cc[_0x55b81f(0x2b1)](_0x5ceccb,_0x3e07c9,_0x2c012d,_0x408371,_0x1abb9e,_0x1537f9,_0x3d830f,_0x159c8f,_0x159c8f);},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x282)]=function(_0xc7f689){const _0x29aec7=_0x4715fe,_0x4374ce=this[_0x29aec7(0x286)],_0x132bc1=this[_0x29aec7(0x111)](),_0x240414=this[_0x29aec7(0x151)]();this['_graphicSprite']['bitmap']=new Bitmap(_0x132bc1,_0x240414);const _0x5e42a5=this['_graphicSprite'][_0x29aec7(0x148)],_0x3cc825=ImageManager[_0x29aec7(0x22c)],_0x59f8cf=ImageManager[_0x29aec7(0x2b8)],_0x12a4fa=Math[_0x29aec7(0xfb)](_0x3cc825,_0x59f8cf,_0x132bc1,_0x240414),_0x3a13c9=_0x4374ce%0x10*_0x3cc825,_0x3ef9cd=Math[_0x29aec7(0x1a1)](_0x4374ce/0x10)*_0x59f8cf,_0x23d7d9=Math[_0x29aec7(0x1a1)](Math['max'](_0x132bc1-_0x12a4fa,0x0)/0x2),_0x151313=Math[_0x29aec7(0x1a1)](Math[_0x29aec7(0x266)](_0x240414-_0x12a4fa,0x0)/0x2);_0x5e42a5[_0x29aec7(0x2b1)](_0xc7f689,_0x3a13c9,_0x3ef9cd,_0x3cc825,_0x59f8cf,_0x23d7d9,_0x151313,_0x12a4fa,_0x12a4fa);},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x25a)]=function(_0x176749){const _0x5c9491=_0x4715fe,_0x4fab91=this[_0x5c9491(0x111)](),_0x211355=this['bitmapHeight'](),_0x4d8e2a=Math[_0x5c9491(0xfb)](_0x4fab91,_0x211355);this['_graphicSprite'][_0x5c9491(0x148)]=new Bitmap(_0x4fab91,_0x211355);const _0x9cd0b8=this[_0x5c9491(0x197)][_0x5c9491(0x148)],_0x29f76c=this[_0x5c9491(0x113)]['match'](/\$/i),_0x20b7a3=_0x29f76c?0x1:ImageManager[_0x5c9491(0x15c)],_0x813da5=_0x29f76c?0x1:ImageManager[_0x5c9491(0x1a5)],_0x29a033=_0x176749[_0x5c9491(0x28a)]/_0x20b7a3,_0x39267d=_0x176749['height']/_0x813da5,_0x23aaea=Math[_0x5c9491(0xfb)](0x1,_0x4d8e2a/_0x29a033,_0x4d8e2a/_0x39267d),_0xcb5892=_0x29a033*_0x23aaea,_0x2d48e0=_0x39267d*_0x23aaea,_0xa792b6=Math['round']((_0x4fab91-_0xcb5892)/0x2),_0x275b8d=Math[_0x5c9491(0xd3)]((_0x211355-_0x2d48e0)/0x2);_0x9cd0b8[_0x5c9491(0x2b1)](_0x176749,0x0,0x0,_0x29a033,_0x39267d,_0xa792b6,_0x275b8d,_0xcb5892,_0x2d48e0);},Sprite_STB_TurnOrder_Battler['prototype'][_0x4715fe(0x1bc)]=function(_0x3bf05d){const _0x22e821=_0x4715fe,_0x2dad9c=Window_STB_TurnOrder['Settings'],_0x20004e=this['bitmapWidth'](),_0x306711=this[_0x22e821(0x151)](),_0xeb33a2=Math[_0x22e821(0xfb)](_0x20004e,_0x306711);this[_0x22e821(0x197)]['bitmap']=new Bitmap(_0x20004e,_0x306711);const _0x5b724d=this[_0x22e821(0x197)][_0x22e821(0x148)],_0xf8662d=Math[_0x22e821(0xfb)](0x1,_0xeb33a2/_0x3bf05d[_0x22e821(0x28a)],_0xeb33a2/_0x3bf05d[_0x22e821(0x20a)]),_0xca29d2=_0x3bf05d[_0x22e821(0x28a)]*_0xf8662d,_0x16ff27=_0x3bf05d[_0x22e821(0x20a)]*_0xf8662d,_0x3817bc=Math[_0x22e821(0xd3)]((_0x20004e-_0xca29d2)/0x2),_0x147253=Math[_0x22e821(0xd3)]((_0x306711-_0x16ff27)/0x2);_0x5b724d[_0x22e821(0x2b1)](_0x3bf05d,0x0,0x0,_0x3bf05d[_0x22e821(0x28a)],_0x3bf05d[_0x22e821(0x20a)],_0x3817bc,_0x147253,_0xca29d2,_0x16ff27);},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0x116)]=function(){const _0x48933b=_0x4715fe,_0x10352b=this[_0x48933b(0x1b8)]();if(!_0x10352b)return;if(!_0x10352b[_0x48933b(0x123)]())return;if(this['_graphicHue']===_0x10352b[_0x48933b(0xd8)]())return;this[_0x48933b(0xda)]=_0x10352b[_0x48933b(0xd8)](),this[_0x48933b(0x197)][_0x48933b(0x193)](_0x10352b[_0x48933b(0x135)]()?0x0:this[_0x48933b(0xda)]);},Sprite_STB_TurnOrder_Battler[_0x4715fe(0x154)][_0x4715fe(0xdc)]=function(){const _0x378c8b=_0x4715fe;if(!this[_0x378c8b(0x1ee)])return;const _0x9a9354=this[_0x378c8b(0x1b8)]();if(!_0x9a9354)return;if(this['_letter']===_0x9a9354[_0x378c8b(0x23e)]&&this[_0x378c8b(0x2a3)]===_0x9a9354[_0x378c8b(0x2a3)])return;this[_0x378c8b(0x23e)]=_0x9a9354[_0x378c8b(0x23e)],this[_0x378c8b(0x2a3)]=_0x9a9354[_0x378c8b(0x2a3)];const _0x3c25b1=Window_STB_TurnOrder[_0x378c8b(0x129)],_0x48ae4e=this['isHorz'](),_0x3de00b=this[_0x378c8b(0x111)](),_0x36b874=this[_0x378c8b(0x151)](),_0x52c97d=this[_0x378c8b(0x1ee)][_0x378c8b(0x148)];_0x52c97d[_0x378c8b(0x1b7)]();if(!this[_0x378c8b(0x2a3)])return;_0x52c97d[_0x378c8b(0x258)]=_0x3c25b1['EnemyBattlerFontFace']||$gameSystem[_0x378c8b(0x14a)](),_0x52c97d['fontSize']=_0x3c25b1[_0x378c8b(0x29f)]||0x10,_0x48ae4e?_0x52c97d[_0x378c8b(0x213)](this[_0x378c8b(0x23e)][_0x378c8b(0x1c9)](),0x0,_0x36b874/0x2,_0x3de00b,_0x36b874/0x2,'center'):_0x52c97d[_0x378c8b(0x213)](this[_0x378c8b(0x23e)][_0x378c8b(0x1c9)](),0x0,0x2,_0x3de00b-0x8,_0x36b874-0x4,_0x378c8b(0x110));},Sprite_STB_TurnOrder_Battler['prototype'][_0x4715fe(0x184)]=function(){const _0x3d3f77=_0x4715fe,_0x1d682d=this[_0x3d3f77(0x1b8)]();if(!_0x1d682d)return;const _0x53f488=_0x1d682d['battler']();if(!_0x53f488)return;const _0x33cf31=_0x53f488[_0x3d3f77(0x233)]();if(!_0x33cf31)return;this[_0x3d3f77(0x2a6)](_0x33cf31[_0x3d3f77(0x2c1)]);},Sprite_STB_TurnOrder_Battler['prototype'][_0x4715fe(0x21d)]=function(){const _0x105cb0=_0x4715fe;return this[_0x105cb0(0x1b8)]();},VisuMZ[_0x4715fe(0x243)]['Window_Help_setItem']=Window_Help['prototype'][_0x4715fe(0x29b)],Window_Help[_0x4715fe(0x154)][_0x4715fe(0x29b)]=function(_0x447ee2){const _0x2be2b4=_0x4715fe;if(BattleManager[_0x2be2b4(0x198)]()&&_0x447ee2&&_0x447ee2[_0x2be2b4(0x1f1)]&&_0x447ee2['note']['match'](/<(?:STB) HELP>\s*([\s\S]*)\s*<\/(?:STB) HELP>/i))this['setText'](String(RegExp['$1']));else{if(_0x2be2b4(0x269)===_0x2be2b4(0x269))VisuMZ[_0x2be2b4(0x243)][_0x2be2b4(0x20e)][_0x2be2b4(0x2b7)](this,_0x447ee2);else{if(!_0x3e6d7c[_0x2be2b4(0x198)]())return;this[_0x2be2b4(0x28f)]=new _0x28b943();const _0x31ce15=this[_0x2be2b4(0x261)](this['_windowLayer']);this[_0x2be2b4(0x153)](this[_0x2be2b4(0x28f)],_0x31ce15),this[_0x2be2b4(0x24c)](),_0x479762[_0x2be2b4(0x2b5)](!![]);}}};function _0x2463(_0x13755f,_0x358170){const _0x3a36d2=_0x3a36();return _0x2463=function(_0x2463b7,_0x291bde){_0x2463b7=_0x2463b7-0xd1;let _0x4db2ad=_0x3a36d2[_0x2463b7];return _0x4db2ad;},_0x2463(_0x13755f,_0x358170);}function Window_STB_TurnOrder(){this['initialize'](...arguments);}Window_STB_TurnOrder[_0x4715fe(0x154)]=Object[_0x4715fe(0x109)](Window_Base[_0x4715fe(0x154)]),Window_STB_TurnOrder['prototype'][_0x4715fe(0x24d)]=Window_STB_TurnOrder,Window_STB_TurnOrder[_0x4715fe(0x129)]=VisuMZ[_0x4715fe(0x243)][_0x4715fe(0x129)][_0x4715fe(0x2ba)],Window_STB_TurnOrder['prototype'][_0x4715fe(0x179)]=function(){const _0x2e58d=_0x4715fe,_0xffd2bb=this[_0x2e58d(0x1d6)]();this['initHomePositions'](_0xffd2bb),Window_Base[_0x2e58d(0x154)]['initialize']['call'](this,_0xffd2bb),this['createBattlerSprites'](),this['updateVisibility'](),this[_0x2e58d(0x27c)]=0x0;},Window_STB_TurnOrder['prototype'][_0x4715fe(0x1d6)]=function(){const _0x4ddfb2=_0x4715fe;return this[_0x4ddfb2(0x16d)]($gameParty[_0x4ddfb2(0x235)](),0x9,!![]);},Window_STB_TurnOrder['prototype']['initHomePositions']=function(_0x11a08f){const _0x609f51=_0x4715fe;this['_targetHomeX']=this[_0x609f51(0x240)]=_0x11a08f['x'],this[_0x609f51(0x16f)]=this[_0x609f51(0x176)]=_0x11a08f['y'],this['_fullWidth']=_0x11a08f[_0x609f51(0x28a)],this[_0x609f51(0x15f)]=_0x11a08f['height'],this[_0x609f51(0x2b2)]=0x0;},Window_STB_TurnOrder[_0x4715fe(0x154)][_0x4715fe(0x16d)]=function(_0x58dd93,_0x2a2c2a,_0x30f803){const _0x3534b5=_0x4715fe,_0x32003f=Window_STB_TurnOrder['Settings'],_0x3d14d9=this[_0x3534b5(0x1fd)]()?_0x32003f[_0x3534b5(0x29a)]:_0x32003f[_0x3534b5(0x17b)],_0x1cdb26=Math['min'](_0x3d14d9,_0x58dd93+_0x2a2c2a),_0x42bc3d=SceneManager[_0x3534b5(0x241)][_0x3534b5(0x1d9)][_0x3534b5(0x20a)],_0x3f5e0c=SceneManager['_scene'][_0x3534b5(0x188)][_0x3534b5(0x20a)],_0x1da4ef=_0x32003f[_0x3534b5(0x1a0)],_0xef382=Graphics[_0x3534b5(0x20a)]-_0x42bc3d-_0x3f5e0c;let _0x3abfc5=0x0,_0x4df4ab=0x0,_0x572af4=0x0,_0x4e1d61=0x0;switch(_0x32003f[_0x3534b5(0x295)]){case _0x3534b5(0x268):_0x3abfc5=_0x32003f[_0x3534b5(0x11a)]*_0x1cdb26+_0x1da4ef,_0x4df4ab=_0x32003f['SpriteLength'],_0x572af4=Math[_0x3534b5(0x236)]((Graphics[_0x3534b5(0x28a)]-_0x3abfc5)/0x2),_0x4e1d61=_0x32003f['ScreenBuffer'];break;case _0x3534b5(0x293):_0x3abfc5=_0x32003f[_0x3534b5(0x11a)]*_0x1cdb26+_0x1da4ef,_0x4df4ab=_0x32003f[_0x3534b5(0x2be)],_0x572af4=Math[_0x3534b5(0x236)]((Graphics[_0x3534b5(0x28a)]-_0x3abfc5)/0x2),_0x4e1d61=Graphics[_0x3534b5(0x20a)]-_0x42bc3d-_0x4df4ab-_0x32003f[_0x3534b5(0x2a7)];break;case _0x3534b5(0x102):_0x3abfc5=_0x32003f[_0x3534b5(0x2be)],_0x4df4ab=_0x32003f['SpriteThin']*_0x1cdb26+_0x1da4ef,_0x572af4=_0x32003f[_0x3534b5(0x2a7)],_0x4e1d61=Math[_0x3534b5(0x236)]((_0xef382-_0x4df4ab)/0x2),_0x4e1d61+=_0x3f5e0c;break;case _0x3534b5(0x110):_0x3abfc5=_0x32003f['SpriteLength'],_0x4df4ab=_0x32003f[_0x3534b5(0x11a)]*_0x1cdb26+_0x1da4ef,_0x572af4=Graphics[_0x3534b5(0x28a)]-_0x3abfc5-_0x32003f[_0x3534b5(0x2a7)],_0x4e1d61=Math['ceil']((_0xef382-_0x4df4ab)/0x2),_0x4e1d61+=_0x3f5e0c;break;}if(!_0x30f803){const _0x3db608=Window_STB_TurnOrder[_0x3534b5(0x129)][_0x3534b5(0x238)];let _0x4f3f6b=Math['min'](_0x3d14d9,Math[_0x3534b5(0xfb)]($gameParty[_0x3534b5(0x235)]()+0x8)-_0x1cdb26);switch(_0x32003f[_0x3534b5(0x295)]){case _0x3534b5(0x268):case _0x3534b5(0x293):_0x3db608&&(_0x572af4-=_0x4f3f6b*_0x32003f['SpriteThin']);break;}}return _0x572af4+=_0x32003f[_0x3534b5(0x13e)],_0x4e1d61+=_0x32003f['DisplayOffsetY'],new Rectangle(_0x572af4,_0x4e1d61,_0x3abfc5,_0x4df4ab);},Window_STB_TurnOrder[_0x4715fe(0x154)][_0x4715fe(0x1e2)]=function(){const _0x32db98=_0x4715fe;this[_0x32db98(0x140)]=0x0;},Window_STB_TurnOrder['prototype'][_0x4715fe(0x1fd)]=function(){const _0x305a89=_0x4715fe,_0x3684b7=Window_STB_TurnOrder['Settings'],_0x106221=[_0x305a89(0x268),'bottom'][_0x305a89(0x27a)](_0x3684b7['DisplayPosition']);return _0x106221;},Window_STB_TurnOrder['prototype'][_0x4715fe(0x100)]=function(){const _0x501b3f=_0x4715fe;this[_0x501b3f(0x105)]=new Sprite(),this[_0x501b3f(0x278)](this[_0x501b3f(0x105)]),this[_0x501b3f(0x26a)]=[];for(let _0xfa9cfa=0x0;_0xfa9cfa<$gameParty[_0x501b3f(0x235)]();_0xfa9cfa++){if('iEbyU'==='iEbyU'){const _0x393efd=new Sprite_STB_TurnOrder_Battler($gameParty,_0xfa9cfa);this[_0x501b3f(0x105)][_0x501b3f(0x26d)](_0x393efd),this[_0x501b3f(0x26a)][_0x501b3f(0x187)](_0x393efd);}else{const _0x17c7b3=new _0x1fe08e();_0x17c7b3['anchor']['x']=this[_0x501b3f(0x103)]['x'],_0x17c7b3[_0x501b3f(0x103)]['y']=this['anchor']['y'],this[_0x501b3f(0x197)]=_0x17c7b3,this['addChild'](this[_0x501b3f(0x197)]),this['processUpdateGraphic']();}}for(let _0x2fb3f3=0x0;_0x2fb3f3<$gameTroop[_0x501b3f(0xe2)]()['length'];_0x2fb3f3++){if(_0x501b3f(0xd1)===_0x501b3f(0xd1)){const _0x5ab34e=new Sprite_STB_TurnOrder_Battler($gameTroop,_0x2fb3f3);this[_0x501b3f(0x105)][_0x501b3f(0x26d)](_0x5ab34e),this[_0x501b3f(0x26a)][_0x501b3f(0x187)](_0x5ab34e);}else{if(!_0x2fda36[_0x501b3f(0x16c)]())return;if(!_0x7db1a2[_0x501b3f(0x198)]())return;if(!_0x85f2cd[_0x501b3f(0xf1)]())return;if(_0x8c2c52['friendsUnit']()===this[_0x501b3f(0x2a4)]()[_0x501b3f(0x26e)]())return;const _0x29cbfc=_0x35421a[_0x501b3f(0x243)][_0x501b3f(0x129)][_0x501b3f(0x10b)],_0x1a8e2=_0x275980[_0x501b3f(0x19d)]();if(!_0x29cbfc[_0x501b3f(0x280)]&&this[_0x501b3f(0x267)])return;_0x29cbfc[_0x501b3f(0xe9)]&&_0x1a8e2[_0x501b3f(0x1a6)]&&(this['subject']()['performSTBExploiter'](_0x898d7e,this),_0x2e8029[_0x501b3f(0x185)](this[_0x501b3f(0x2a4)](),this));if(_0x29cbfc[_0x501b3f(0x1da)]){const _0x524ecd=this[_0x501b3f(0x2c2)](_0x2002e6);_0x524ecd>=_0x29cbfc[_0x501b3f(0x1aa)]&&(this['subject']()['performSTBExploiter'](_0x5835b1,this),_0x431dd2[_0x501b3f(0x185)](this[_0x501b3f(0x2a4)](),this));}}}},Window_STB_TurnOrder['prototype']['update']=function(){const _0x4f3676=_0x4715fe;Window_Base[_0x4f3676(0x154)][_0x4f3676(0xd5)]['call'](this),this[_0x4f3676(0x276)](),this['updatePosition'](),this[_0x4f3676(0x25d)](),this[_0x4f3676(0x1a2)](),this[_0x4f3676(0x2a9)]();},Window_STB_TurnOrder['prototype']['updateHomePosition']=function(){const _0x5e9f5e=_0x4715fe;if(this[_0x5e9f5e(0x2b2)]>0x0){const _0x202a63=this['_homeDuration'];this[_0x5e9f5e(0x240)]=(this['_homeX']*(_0x202a63-0x1)+this[_0x5e9f5e(0x12e)])/_0x202a63,this[_0x5e9f5e(0x176)]=(this[_0x5e9f5e(0x176)]*(_0x202a63-0x1)+this['_targetHomeY'])/_0x202a63,this[_0x5e9f5e(0x2b2)]--;if(this[_0x5e9f5e(0x2b2)]<=0x0){if('ciMgP'===_0x5e9f5e(0x1a8))this[_0x5e9f5e(0x240)]=this[_0x5e9f5e(0x12e)],this[_0x5e9f5e(0x176)]=this['_targetHomeY'];else return _0xb2a818[_0x5e9f5e(0x243)][_0x5e9f5e(0x192)](_0x218513['$1']);}}},Window_STB_TurnOrder[_0x4715fe(0x154)][_0x4715fe(0xe8)]=function(){const _0x490174=_0x4715fe,_0x17624b=Window_STB_TurnOrder['Settings'];if(_0x17624b[_0x490174(0x295)]!=='top')return;if(!_0x17624b[_0x490174(0x1e5)])return;const _0x6353e9=SceneManager[_0x490174(0x241)]['_helpWindow'];if(!_0x6353e9)return;if(_0x6353e9['visible']){if('pDbdF'===_0x490174(0x234))return this[_0x490174(0x142)]===_0x4fcde3&&(this[_0x490174(0x142)]=this[_0x490174(0x1e9)]()),this['_stbTurnOrderFaceIndex'];else this['x']=this[_0x490174(0x240)]+(_0x17624b[_0x490174(0x172)]||0x0),this['y']=this[_0x490174(0x176)]+(_0x17624b['RepositionTopHelpY']||0x0);}else this['x']=this['_homeX'],this['y']=this[_0x490174(0x176)];const _0x5e4e66=SceneManager[_0x490174(0x241)][_0x490174(0xe7)];if(Window_STB_TurnOrder[_0x490174(0x25c)]===undefined){if('vOouI'!==_0x490174(0x1e4))Window_STB_TurnOrder[_0x490174(0x25c)]=Math[_0x490174(0xd3)]((Graphics[_0x490174(0x28a)]-Math[_0x490174(0xfb)](Graphics[_0x490174(0x272)],_0x5e4e66[_0x490174(0x28a)]))/0x2),Window_STB_TurnOrder[_0x490174(0x2b0)]=Math['round']((Graphics[_0x490174(0x20a)]-Math['min'](Graphics['boxHeight'],_0x5e4e66[_0x490174(0x20a)]))/0x2);else return this['processUpdateGraphic']();}this['x']+=_0x5e4e66['x']-Window_STB_TurnOrder[_0x490174(0x25c)],this['y']+=_0x5e4e66['y']-Window_STB_TurnOrder[_0x490174(0x2b0)];},Window_STB_TurnOrder['prototype'][_0x4715fe(0x25d)]=function(){const _0x2586c0=_0x4715fe,_0xb776cc=Window_STB_TurnOrder[_0x2586c0(0x129)];if([_0x2586c0(0x268)][_0x2586c0(0x27a)](_0xb776cc[_0x2586c0(0x295)]))return;this['x']=this[_0x2586c0(0x240)],this['y']=this['_homeY'];const _0x494cdb=SceneManager[_0x2586c0(0x241)][_0x2586c0(0xe7)];this['x']+=_0x494cdb['x'],this['y']+=_0x494cdb['y'];},Window_STB_TurnOrder[_0x4715fe(0x154)]['updateBattleContainerOrder']=function(){const _0x2be9a6=_0x4715fe;if(!this['_turnOrderInnerSprite'])return;const _0x11815b=this['_turnOrderInnerSprite'][_0x2be9a6(0x26f)];if(!_0x11815b)return;_0x11815b[_0x2be9a6(0xd7)](this[_0x2be9a6(0x13f)]['bind'](this));},Window_STB_TurnOrder[_0x4715fe(0x154)][_0x4715fe(0x13f)]=function(_0x5fbef9,_0x43afab){const _0x26c627=_0x4715fe,_0x2a1e87=this[_0x26c627(0x1fd)](),_0x21f56e=Window_STB_TurnOrder['Settings'][_0x26c627(0x238)];if(_0x2a1e87&&!_0x21f56e)return _0x5fbef9['x']-_0x43afab['x'];else{if(_0x2a1e87&&_0x21f56e)return _0x43afab['x']-_0x5fbef9['x'];else{if(!_0x2a1e87&&_0x21f56e)return _0x5fbef9['y']-_0x43afab['y'];else{if(!_0x2a1e87&&!_0x21f56e)return _0x43afab['y']-_0x5fbef9['y'];}}}},Window_STB_TurnOrder[_0x4715fe(0x154)][_0x4715fe(0x2a9)]=function(){const _0x15d872=_0x4715fe;this[_0x15d872(0x1c7)]=$gameSystem[_0x15d872(0x1a9)]();},Window_STB_TurnOrder['prototype'][_0x4715fe(0x1d4)]=function(_0xde6d5b){const _0x2c9e44=_0x4715fe;this[_0x2c9e44(0x26a)][_0x2c9e44(0xd7)]((_0x3d21aa,_0x323eaf)=>{const _0x392d3a=_0x2c9e44;return _0x3d21aa[_0x392d3a(0x21f)]()-_0x323eaf[_0x392d3a(0x21f)]();}),this[_0x2c9e44(0xe6)]();if(!_0xde6d5b)return;for(const _0x3c2fb3 of this[_0x2c9e44(0x26a)]){if(!_0x3c2fb3)continue;_0x3c2fb3['update'](),_0x3c2fb3[_0x2c9e44(0x143)]=0x0;}},Window_STB_TurnOrder['prototype'][_0x4715fe(0xe6)]=function(){const _0x352b2b=_0x4715fe;if(!this[_0x352b2b(0x1fd)]())return;const _0x44119c=VisuMZ[_0x352b2b(0x243)][_0x352b2b(0x129)][_0x352b2b(0x2ba)];if(!_0x44119c['CenterHorz'])return;const _0x379dbc=$gameParty[_0x352b2b(0xe2)]()['filter'](_0x513ac0=>_0x513ac0&&_0x513ac0[_0x352b2b(0x14f)]()&&_0x513ac0[_0x352b2b(0x13c)]())[_0x352b2b(0x284)],_0x1f2f82=$gameTroop[_0x352b2b(0xe2)]()[_0x352b2b(0x1f8)](_0x37cb1b=>_0x37cb1b&&_0x37cb1b[_0x352b2b(0x14f)]()&&_0x37cb1b[_0x352b2b(0x13c)]())[_0x352b2b(0x284)],_0x336e61=this[_0x352b2b(0x16d)](_0x379dbc,_0x1f2f82);this[_0x352b2b(0x12e)]=_0x336e61['x'],this[_0x352b2b(0x16f)]=_0x336e61['y'];if(this['_targetHomeX']!==this['_homeX']||this['_targetHomeY']!==this[_0x352b2b(0x176)]){if(_0x352b2b(0x215)===_0x352b2b(0x215))this[_0x352b2b(0x2b2)]=_0x44119c[_0x352b2b(0xfe)];else{const _0x266e33=this[_0x352b2b(0x144)]()?this[_0x352b2b(0x19e)]()['note']:this[_0x352b2b(0xe0)]()[_0x352b2b(0x1f1)];if(_0x266e33[_0x352b2b(0xdb)](_0x271b1d[_0x352b2b(0x243)][_0x352b2b(0x115)]['ExploitedStates']))return _0x1bc4af[_0x352b2b(0x243)][_0x352b2b(0x192)](_0xb2193c['$1']);return _0x5e7443[_0x352b2b(0x243)]['Settings'][_0x352b2b(0x2b9)]['AddedStates']||[];}}};