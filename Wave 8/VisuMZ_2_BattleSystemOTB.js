//=============================================================================
// VisuStella MZ - Battle System - OTB - Order Turn Battle
// VisuMZ_2_BattleSystemOTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemOTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemOTB = VisuMZ.BattleSystemOTB || {};
VisuMZ.BattleSystemOTB.version = 1.13;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.13] [BattleSystemOTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_OTB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the RPG Maker MZ battle system to "Order Turn Battle",
 * a turn-based battle system where actions are executed immediately and the
 * orders for both the current and next turn are not only visible, but also
 * malleable. New mechanics are introduced where the player can manipulate the
 * turn order of an action's user or action's target in various ways they want.
 * 
 * The two Turn Orders are displayed at the top of the top of the screen to
 * give the player a clear understanding of who's turn it will be when it
 * becomes time to act, making it easier and viable for the player to formulate
 * strategies and adapt to the situation in battle.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "otb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Utilizes the balanced AGI nature of the Default Turn Battle system.
 * * Allows for actions to execute immediately upon selection.
 * * Two Turn Order Displays appear at the top of the screen, giving the player
 *   an idea of who's turn it will be and when, for both the current turn and
 *   the next turn.
 * * Skills and Items can have an "Instant Use" effect, which allows them to
 *   perform an action immediately without using up a turn.
 * * Skills and Items can manipulate the turn order of the action's user or the
 *   action's target(s). This can apply to either the current turn or the next
 *   turn, depending on the notetags and/or action effects used.
 * * The Turn Order Display will give a preview on how turn orders will change
 *   upon specific skills and/or items being used.
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
 * Turn Order Displays
 * 
 * The Two Turn Order Displays will capture the battle's current and next turn
 * orders determined by the BattleManager. This feature does not overwrite any
 * functions, but the Turn Order Displays may or may not conflict with any
 * existing HUD elements that are already positioned on the screen. If so, you
 * can choose to offset the Turn Order Display or move it to a different part
 * of the screen through the plugin parameters.
 * 
 * ---
 * 
 * Agility
 * 
 * Agility behaves slightly different from normal when it comes to the Order
 * Turn Battle system. Aside from the first turn in battle, agility will always
 * calculate the turn order for the "Next Turn" when conducted. This means that
 * any changes to agility values will not have any effect on the next turn's
 * already established turn order.
 * 
 * However, this can be remedied by utilizing the notetags provided by this
 * plugin to alter the Next Turn orders for specific targets. In fact, for
 * skill and item "effects" that add AGI Buffs and/or Debuffs, the target's
 * turn position on the Turn Order Display will be manipulated in accordance.
 * This auto-conversion feature can be disabled in the Plugin Parameters.
 * 
 * ---
 * 
 * Action Speed
 * 
 * Because the Order Turn Battle system already calculates agility speeds
 * before selecting an action to perform, the effects of the actioon speed will
 * not work the same way it did with the default battle system. Instead, the
 * Action Speed will be sent through a formula to determine its effect on the
 * following turn, either pushing the user ahead in next turn's turn order
 * (with a positive speed value) or back (with a negative speed value).
 * 
 * This option can have its formula altered or straight up disabled in the
 * Plugin Parameters.
 * 
 * ---
 * 
 * Infinity Speed and Clamping
 * 
 * Since Action Speeds are decided in such a way, enemies that will survive a
 * stun state past two turns will have "Infinity" speed on the recovery turn,
 * allowing them to act first relative to the rest of the battle participants
 * in order to balance out the turns they've lost.
 * 
 * Enemies with "Infinity" speed cannot be overtaken through turn order
 * manipulation while they are on the "Next Turn" order. If anything, battlers
 * who shift their turn order faster will be just trailing behind them, thus
 * the "clamping" effect. However if this occurs during the "Current Turn"
 * order, all is fair game and any battler can overtake them. Plan out your
 * battle system effects carefully with these rules in mind.
 * 
 * If you do not like the idea of Infinity Speed and/or Clamping, you can turn
 * them off in the Plugin Parameters.
 * 
 * This effect does not affect stun states that last only one turn. The effect
 * will only occur with stun states that last 2 turns or more.
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
 * Force Actions
 * 
 * Due to how OTB behaves, Force Actions have be adjusted to fit the battle
 * system. With other battle systems, force actions are added into a hidden
 * queue that would act upon after the current battler finishes his/her current
 * action. The new changes made with force actions is that they now appear on
 * the queue visibly.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_PartySystem
 * 
 * In battle, the player cannot change entire parties at once from the Party
 * Command Window. The feature will be unaccessible while Order Turn Battle is
 * in play. However, the player can still change party members through the
 * Actor Command Window by having actors replace other actors. Party changing
 * is also available through battle events, Common Events, and script calls.
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
 * === General OTB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <OTB Help>
 *  description
 *  description
 * </OTB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under OTB.
 * - This is primarily used if the skill behaves differently in OTB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to OTB.
 *
 * ---
 * 
 * === OTB Turn Order Display-Related Notetags ===
 * 
 * These notetags affect the OTB Turn Order Display
 * 
 * ---
 *
 * <OTB Turn Order Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <OTB Turn Order Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <OTB Turn Order Face: Monster, 1>
 * 
 * ---
 * 
 * === Instant Use-Related Notetags ===
 * 
 * ---
 *
 * <OTB Instant>
 * <OTB Instant Use>
 * <OTB Instant Cast>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to be used immediately without consuming a turn.
 *
 * ---
 * 
 * === Added Action Notetags ===
 * 
 * ---
 * 
 * <OTB User Add Current Turn Actions: x>
 * <OTB User Add Next Turn Actions: x>
 * 
 * - Used for: Skill, Item Notetags
 * - Adds extra actions for the user to perform during the current/next turn.
 *   - Added actions will go towards the back of the action list.
 *   - Multi-hit skills/items will trigger this effect multiple times.
 * - Replace 'x' with a number representing the amount of actions to add.
 * 
 * ---
 * 
 * <OTB Target Add Current Turn Actions: x>
 * <OTB Target Add Next Turn Actions: x>
 * 
 * - Used for: Skill, Item Notetags
 * - Adds extra actions for the target to perform during the current/next turn.
 *   - Added actions will go towards the back of the action list.
 *   - Multi-hit skills/items will trigger this effect multiple times.
 * - Replace 'x' with a number representing the amount of actions to add.
 * 
 * ---
 * 
 * === Turn Order Manipulation-Related Notetags ===
 * 
 * ---
 *
 * <OTB User Current Turn: +x>
 * <OTB User Next Turn: +x>
 * <OTB User Follow Turn: +x>
 *
 * <OTB User Current Turn: -x>
 * <OTB User Next Turn: -x>
 * <OTB User Follow Turn: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the user's position in the turn order for the current turn, next
 *   turn, or whichever turn is following.
 * - If using the "Follow" variant, if the user has actions left for the
 *   current turn, it will affect the current turn. If not, it affects the
 *   next turn instead.
 * - Replace 'x' with a number representing the number of slots to change.
 *   - Negative numbers move the user closer to the front.
 *   - Positive numbers move the user towards the back.
 * - This effect only occurs once per skill/item use and at the start of the
 *   action when initializing the skill/item.
 *
 * ---
 *
 * <OTB Target Current Turn: +x>
 * <OTB Target Next Turn: +x>
 * <OTB Target Follow Turn: +x>
 *
 * <OTB Target Current Turn: -x>
 * <OTB Target Next Turn: -x>
 * <OTB Target Follow Turn: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the target's position in the turn order for the current turn, next
 *   turn, or whichever turn is following.
 * - If using the "Follow" variant, if the target has actions left for the
 *   current turn, it will affect the current turn. If not, it affects the
 *   next turn instead.
 * - Replace 'x' with a number representing the number of slots to change.
 *   - Negative numbers move the target closer to the front.
 *   - Positive numbers move the target towards the back.
 * - This effect will occur as many times as there are successfully connected
 *   hits for each target, meaning a target can have its turn order shifted
 *   multiple times.
 * - These are best used with single target skills/items as multi-target skills
 *   may shift multiple targets back and forth with each other if they are
 *   adjacent to one another.
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
 * Actor: Change OTB Turn Order Icon
 * - Changes the icons used for the specific actor(s) on the OTB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Actor: Change OTB Turn Order Face
 * - Changes the faces used for the specific actor(s) on the OTB Turn Order.
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
 * Actor: Clear OTB Turn Order Graphic
 * - Clears the OTB Turn Order graphics for the actor(s).
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
 * Enemy: Change OTB Turn Order Icon
 * - Changes the icons used for the specific enemy(ies) on the OTB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change OTB Turn Order Face
 * - Changes the faces used for the specific enemy(ies) on the OTB Turn Order.
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
 * Enemy: Clear OTB Turn Order Graphic
 * - Clears the OTB Turn Order graphics for the enemy(ies).
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
 * System: OTB Turn Order Visibility
 * - Determine the visibility of the OTB Turn Order Display.
 *
 *   Visibility:
 *   - Changes the visibility of the OTB Turn Order Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Conversion Settings
 * ============================================================================
 *
 * Automatically converts specific mechanics to fit OTB.
 *
 * ---
 *
 * Buffs
 * 
 *   AGI Buff => Current:
 *   - Auto-convert AGI Buff effects for Items/Skills to speed up target's
 *     current Turn Order?
 * 
 *   AGI Buff => Next:
 *   - Auto-convert AGI Buff effects for Items/Skills to speed up target's
 *     next Turn Order?
 *
 * ---
 *
 * Debuffs
 * 
 *   AGI Debuff => Current:
 *   - Auto-convert AGI Debuff effects for Items/Skills to speed up target's
 *     current Turn Order?
 * 
 *   AGI Debuff => Next:
 *   - Auto-convert AGI Debuff effects for Items/Skills to speed up target's
 *     next Turn Order?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of Battle System OTB. These range from how Action
 * Times are handled to speed.
 *
 * ---
 *
 * Action Times+
 * 
 *   Enable Action Times?:
 *   - Enable Action Times+ to have an effect on OTB?
 * 
 *     Randomize Order?:
 *     - If enabled, randomize the action order for added actions?
 *
 * ---
 *
 * Speed
 * 
 *   Allow Random Speed?:
 *   - Allow speed to be randomized base off the user's AGI?
 * 
 *   Post-Stun Infinity?:
 *   - After a 2+ turn stun states, battlers have infinity speed for their
 *     recovery turn.
 *   - Once again, this only applies to stun states that last 2+ turns.
 * 
 *     Infinity Clamp?:
 *     - Prevents turn order manipulation from going faster than infinity
 *       speed battlers.
 * 
 *   JS: Initial Speed:
 *   - Code used to calculate initial speed at the start of battle.
 * 
 *   JS: Speed => Order:
 *   - Code used to calculate how action speeds alter next turn's order.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Turn Order Display
 * ============================================================================
 *
 * Turn Order Display settings used for Battle System OTB. These adjust how the
 * two visible turn orders appears in-game.
 *
 * ---
 *
 * General
 * 
 *   Display Position:
 *   - Select where the Turn Order will appear on the screen.
 *     - Top
 *     - Bottom
 * 
 *     Offset X:
 *     - How much to offset the X coordinate by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset the Y coordinate by.
 *     - Negative: up. Positive: down.
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the display when the
 *     help window is open?
 * 
 *     Offset X:
 *     - Reposition the display's X coordinates by this much when the Help
 *       Window is visible.
 * 
 *     Offset Y:
 *     - Reposition the display's Y coordinates by this much when the Help
 *       Window is visible.
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Turn Order.
 *     - Left to Right
 *     - Right to Left
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
 * UI Background
 * 
 *   Background Style:
 *   - Select the style you want for the background.
 *     - fill
 *     - gradient
 *     - image
 *     - transparent
 * 
 *   Image Filename:
 *   - When using the "image" style, select an image from /img/system/ as the
 *     background image.
 * 
 *     Offset X:
 *     - How much do you want to offset the Background Image's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the Background Image's Y position?
 * 
 * ---
 * 
 * UI Text
 * 
 *   Font Size:
 *   - The font size used for parameter values.
 * 
 *   Active Battler Text:
 *   - Text used to display the active battler.
 *   - This text will always be center aligned.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Current Turn Text:
 *   - Text used to display the current turn.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Next Turn Text:
 *   - Text used to display the next turn.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Text Align:
 *   - Text alignment for the Current and Next Turn texts?
 *     - auto
 *     - left
 *     - center
 *     - right
 * 
 * ---
 * 
 * Slots
 * 
 *   Width:
 *   - How many pixels wide should the slots be on the Turn Order display?
 * 
 *   Height:
 *   - How many pixels tall should the slots be on the Turn Order display?
 * 
 *   Preview Scale:
 *   - How much do you want to scale the preview sprites by?
 *   - Use a number between 0 and 1 for the best results.
 * 
 *     Offset X:
 *     - How much do you want to offset the Preview Sprites' X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the Preview Sprites' Y position?
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
 *       Preview Version:
 *       - A different setting is used for the preview version.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
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
 *       Preview Version:
 *       - A different setting is used for the preview version.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
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
 * Version 1.13: January 20, 2023
 * * Bug Fixes!
 * ** Fixed a bug where the Forced Action of a battler is not used properly.
 *    Fix made by Arisu.
 * 
 * Version 1.12: December 15, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the OTB Turn Order faces and icons to not change
 *    properly for actors and enemies.
 * 
 * Version 1.10: July 7, 2022
 * * Feature Update!
 * ** When the "Recover All" event command revives a dead unit, that revived
 *    unit can gain actions back if all other conditions are met. Update made
 *    by Olivia.
 * 
 * Version 1.09: June 2, 2022
 * * Documentation Update!
 * ** Added "Force Actions" to "Major Updates" section.
 * *** Due to how OTB behaves, Force Actions have be adjusted to fit the battle
 *     system. With other battle systems, force actions are added into a hidden
 *     queue that would act upon after the current battler finishes his/her
 *     current action. The new changes made with force actions is that they now
 *     appear on the queue visibly.
 * * Bug Fixes!
 * ** Fixed a bug that caused Forced Actions to not work properly while in OTB.
 *    Changes made to Forced Actions will now insert new actions at the front
 *    of the current action queue. Fix made by Olivia.
 * 
 * Version 1.08: March 10, 2022
 * * Feature Update!
 * ** OTB Instant Actions should now appear in the turn order in a more
 *    sensible fashion. Update made by Olivia.
 * 
 * Version 1.07: February 24, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Olivia:
 * *** <OTB User Add Current Turn Actions: x>
 * *** <OTB User Add Next Turn Actions: x>
 * *** <OTB Target Add Current Turn Actions: x>
 * *** <OTB Target Add Next Turn Actions: x>
 * **** Adds extra actions for the user/target to perform during the
 *      current/next turn.
 * **** Added actions will go towards the back of the action list.
 * **** Multi-hit skills/items will trigger this effect multiple times.
 * 
 * Version 1.05: October 28, 2021
 * * Bug Fixes!
 * ** Turn Order display will no longer appear at differing X and Y positions
 *    when using specific battle layouts. Update made by Olivia.
 * 
 * Version 1.04: August 6, 2021
 * * Bug Fixes!
 * ** Enemies with multiple actions will no longer step forward when it's not
 *    their turn. Fix made by Olivia.
 * 
 * Version 1.03: June 25, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: April 16, 2021
 * * Bug Fixes!
 * ** Post-stun infinity clamping should now be adjusted properly for
 *    previewing turn order changes.
 * 
 * Version 1.01: April 9, 2021
 * * Bug Fixes!
 * ** Subsequent battles will properly reset the turn order. Fix by Olivia.
 * 
 * Version 1.00 Official Release Date: April 26, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderActorIcon
 * @text Actor: Change OTB Turn Order Icon
 * @desc Changes the icons used for the specific actor(s) on the OTB Turn Order.
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
 * @command OtbTurnOrderActorFace
 * @text Actor: Change OTB Turn Order Face
 * @desc Changes the faces used for the specific actor(s) on the OTB Turn Order.
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
 * @command OtbTurnOrderClearActorGraphic
 * @text Actor: Clear OTB Turn Order Graphic
 * @desc Clears the OTB Turn Order graphics for the actor(s).
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
 * @command OtbTurnOrderEnemyIcon
 * @text Enemy: Change OTB Turn Order Icon
 * @desc Changes the icons used for the specific enemy(ies) on the OTB Turn Order.
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
 * @command OtbTurnOrderEnemyFace
 * @text Enemy: Change OTB Turn Order Face
 * @desc Changes the faces used for the specific enemy(ies) on the OTB Turn Order.
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
 * @command OtbTurnOrderClearEnemyGraphic
 * @text Enemy: Clear OTB Turn Order Graphic
 * @desc Clears the OTB Turn Order graphics for the enemy(ies).
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
 * @text System: OTB Turn Order Visibility
 * @desc Determine the visibility of the OTB Turn Order Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the OTB Turn Order Display.
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
 * @param BattleSystemOTB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Conversion:struct
 * @text Conversion Settings
 * @type struct<Conversion>
 * @desc Automatically converts specific mechanics to fit OTB.
 * @default {"Buffs":"","ConvertAgiBuffCurrent:eval":"true","ConvertAgiBuffNext:eval":"true","Debuffs":"","ConvertAgiDebuffCurrent:eval":"true","ConvertAgiDebuffNext:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of Battle System OTB.
 * @default {"Actions":"","EnableActionTimes:eval":"true","RandomizeActionTimesOrder:eval":"true","Speed":"","AllowRandomSpeed:eval":"false","PostStunInfinitySpeed:eval":"true","InfinityClamp:eval":"true","InitialSpeedJS:func":"\"// Declare Constants\\nconst agi = this.subject().agi;\\n\\n// Create Speed\\nlet speed = agi;\\nif (this.allowRandomSpeed()) {\\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\\n}\\n\\n// Return Speed\\nreturn speed;\"","ConvertSpeedJS:func":"\"// Declare Constants\\nconst item = this.item();\\nconst modifier = 50;\\n\\n// Calculate Order Slots Changed\\nlet change = item.speed / (-modifier);\\nchange = (change >= 0) ? Math.ceil(change) : Math.floor(change);\\n\\n// Return Change\\nreturn change || 0;\""}
 *
 * @param TurnOrder:struct
 * @text Turn Order Display
 * @type struct<TurnOrder>
 * @desc Turn Order Display settings used for Battle System OTB.
 * @default {"General":"","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","RepositionTopForHelp:eval":"true","RepositionTopHelpX:num":"+0","RepositionTopHelpY:num":"+96","RepositionLogWindow:eval":"true","LogWindowOffsetY:num":"+0","OrderDirection:eval":"false","SubjectDistance:num":"16","ScreenBuffer:num":"36","UiBackground":"","BgDimStyle:str":"gradient","BgImageFilename:str":"","BgImageOffsetX:num":"+0","BgImageOffsetY:num":"+0","UiText":"","UiFontSize:num":"16","UiSubjectText:str":"★","UiSubjectOffsetX:num":"+0","UiSubjectOffsetY:num":"-6","UiCurrentText:str":"✦CURRENT TURN✦","UiCurrentOffsetX:num":"+6","UiCurrentOffsetY:num":"-6","UiNextText:str":"✧NEXT TURN✧","UiNextOffsetX:num":"+6","UiNextOffsetY:num":"-6","UiAlignment:str":"auto","Slots":"","SpriteThin:num":"72","SpriteLength:num":"72","PreviewScale:num":"0.5","PreviewOffsetX:num":"+0","PreviewOffsetY:num":"+0","UpdateFrames:num":"24","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","PreviewActorBorderColor:str":"0","ActorSystemBorder:str":"","PreviewActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","PreviewEnemyBorderColor:str":"0","EnemySystemBorder:str":"","PreviewEnemySystemBorder:str":"","BorderThickness:num":"2","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"19","PreviewActorBgColor1:str":"19","ActorBgColor2:str":"9","PreviewActorBgColor2:str":"0","ActorSystemBg:str":"","PreviewActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"19","PreviewEnemyBgColor1:str":"19","EnemyBgColor2:str":"18","PreviewEnemyBgColor2:str":"0","EnemySystemBg:str":"","PreviewEnemySystemBg:str":""}
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
 * Conversion Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Conversion:
 * 
 * @param Buffs
 *
 * @param ConvertAgiBuffCurrent:eval
 * @text AGI Buff => Current
 * @parent Buffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Buff effects for Items/Skills to speed up target's current Turn Order?
 * @default true
 *
 * @param ConvertAgiBuffNext:eval
 * @text AGI Buff => Next
 * @parent Buffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Buff effects for Items/Skills to speed up target's next Turn Order?
 * @default true
 * 
 * @param Debuffs
 *
 * @param ConvertAgiDebuffCurrent:eval
 * @text AGI Debuff => Current
 * @parent Debuffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Debuff effects for Items/Skills to speed up target's current Turn Order?
 * @default true
 *
 * @param ConvertAgiDebuffNext:eval
 * @text AGI Debuff => Next
 * @parent Debuffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Debuff effects for Items/Skills to speed up target's next Turn Order?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param Actions
 * @text Action Times+
 *
 * @param EnableActionTimes:eval
 * @text Enable Action Times?
 * @parent Actions
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Action Times+ to have an effect on OTB?
 * @default true
 *
 * @param RandomizeActionTimesOrder:eval
 * @text Randomize Order?
 * @parent EnableActionTimes:eval
 * @type boolean
 * @on Randomize
 * @off Clumped
 * @desc If enabled, randomize the action order for added actions?
 * @default true
 * 
 * @param Speed
 *
 * @param AllowRandomSpeed:eval
 * @text Allow Random Speed?
 * @parent Speed
 * @type boolean
 * @on Allow
 * @off Disable
 * @desc Allow speed to be randomized base off the user's AGI?
 * @default false
 *
 * @param PostStunInfinitySpeed:eval
 * @text Post-Stun Infinity?
 * @parent Speed
 * @type boolean
 * @on Infinity
 * @off Normal
 * @desc After a 2+ turn stun states, battlers have infinity speed for their recovery turn.
 * @default true
 *
 * @param InfinityClamp:eval
 * @text Infinity Clamp?
 * @parent PostStunInfinitySpeed:eval
 * @type boolean
 * @on Enable Clamp
 * @off Disable Clamp
 * @desc Prevents turn order manipulation from going faster than infinity speed battlers.
 * @default true
 *
 * @param InitialSpeedJS:func
 * @text JS: Initial Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate initial speed at the start of battle.
 * @default "// Declare Constants\nconst agi = this.subject().agi;\n\n// Create Speed\nlet speed = agi;\nif (this.allowRandomSpeed()) {\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\n}\n\n// Return Speed\nreturn speed;"
 *
 * @param ConvertSpeedJS:func
 * @text JS: Speed => Order
 * @parent Speed
 * @type note
 * @desc Code used to calculate how action speeds alter next turn's order.
 * @default "// Declare Constants\nconst item = this.item();\nconst modifier = 50;\n\n// Calculate Order Slots Changed\nlet change = item.speed / (-modifier);\nchange = (change >= 0) ? Math.ceil(change) : Math.floor(change);\n\n// Return Change\nreturn change || 0;"
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
 * @param RepositionTopHelpX:num
 * @text Offset X
 * @parent RepositionTopForHelp:eval
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default +0
 *
 * @param RepositionTopHelpY:num
 * @text Offset Y
 * @parent RepositionTopForHelp:eval
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default +96
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
 * @param LogWindowOffsetY:num
 * @text Offset Y
 * @parent RepositionLogWindow:eval
 * @desc How much do you want to offset the Log Window's Y position?
 * @default +0
 *
 * @param OrderDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right
 * @off Right to Left
 * @desc Decide on the direction of the Turn Order.
 * @default false
 *
 * @param SubjectDistance:num
 * @text Subject Distance
 * @parent General
 * @type number
 * @desc How far do you want the currently active battler to
 * distance itself from the rest of the Turn Order?
 * @default 16
 *
 * @param ScreenBuffer:num
 * @text Screen Buffer
 * @parent General
 * @type number
 * @desc What distance do you want the display to be away
 * from the edge of the screen by?
 * @default 36
 *
 * @param UiBackground
 * @text UI Background
 *
 * @param BgDimStyle:str
 * @text Background Style
 * @parent UiBackground
 * @type select
 * @option fill
 * @option gradient
 * @option image
 * @option transparent
 * @desc Select the style you want for the background.
 * @default gradient
 *
 * @param BgImageFilename:str
 * @text Image Filename
 * @parent UiBackground
 * @type file
 * @dir img/system/
 * @desc When using the "image" style, select an image from /img/system/ as the background image.
 * @default 
 *
 * @param BgImageOffsetX:num
 * @text Offset X
 * @parent BgImageFilename:str
 * @desc How much do you want to offset the Background Image's X position?
 * @default +0
 *
 * @param BgImageOffsetY:num
 * @text Offset Y
 * @parent BgImageFilename:str
 * @desc How much do you want to offset the Background Image's Y position?
 * @default +0
 *
 * @param UiText
 * @text UI Text
 *
 * @param UiFontSize:num
 * @text Font Size
 * @parent UiText
 * @desc The font size used for parameter values.
 * @default 16
 *
 * @param UiSubjectText:str
 * @text Active Battler Text
 * @parent UiText
 * @desc Text used to display the active battler.
 * This text will always be center aligned.
 * @default ★
 *
 * @param UiSubjectOffsetX:num
 * @text Offset X
 * @parent UiSubjectText:str
 * @desc How much do you want to offset the text's X position?
 * @default +0
 *
 * @param UiSubjectOffsetY:num
 * @text Offset Y
 * @parent UiSubjectText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiCurrentText:str
 * @text Current Turn Text
 * @parent UiText
 * @desc Text used to display the current turn.
 * @default ✦CURRENT TURN✦
 *
 * @param UiCurrentOffsetX:num
 * @text Offset X
 * @parent UiCurrentText:str
 * @desc How much do you want to offset the text's X position?
 * @default +6
 *
 * @param UiCurrentOffsetY:num
 * @text Offset Y
 * @parent UiCurrentText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiNextText:str
 * @text Next Turn Text
 * @parent UiText
 * @desc Text used to display the next turn.
 * @default ✧NEXT TURN✧
 *
 * @param UiNextOffsetX:num
 * @text Offset X
 * @parent UiNextText:str
 * @desc How much do you want to offset the text's X position?
 * @default +6
 *
 * @param UiNextOffsetY:num
 * @text Offset Y
 * @parent UiNextText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiAlignment:str
 * @text Text Align
 * @parent UiText
 * @type combo
 * @option auto
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Current and Next Turn texts?
 * @default auto
 * 
 * @param Slots
 *
 * @param SpriteThin:num
 * @text Width
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels wide should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param SpriteLength:num
 * @text Height
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels tall should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param PreviewScale:num
 * @text Preview Scale
 * @parent Slots
 * @desc How much do you want to scale the preview sprites by?
 * Use a number between 0 and 1 for the best results.
 * @default 0.5
 *
 * @param PreviewOffsetX:num
 * @text Offset X
 * @parent PreviewScale:num
 * @desc How much do you want to offset the Preview Sprites' X position?
 * @default +0
 *
 * @param PreviewOffsetY:num
 * @text Offset Y
 * @parent PreviewScale:num
 * @desc How much do you want to offset the Preview Sprites' Y position?
 * @default +0
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
 * @param PreviewActorBorderColor:str
 * @text Preview Version
 * @parent ActorBorderColor:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param PreviewActorSystemBorder:str
 * @text Preview Version
 * @parent ActorSystemBorder:str
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
 * @param PreviewEnemyBorderColor:str
 * @text Preview Version
 * @parent EnemyBorderColor:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param PreviewEnemySystemBorder:str
 * @text Preview Version
 * @parent EnemySystemBorder:str
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
 * @param PreviewActorBgColor1:str
 * @text Preview Version
 * @parent ActorBgColor1:str
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
 * @param PreviewActorBgColor2:str
 * @text Preview Version
 * @parent ActorBgColor2:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param PreviewActorSystemBg:str
 * @text Preview Version
 * @parent ActorSystemBg:str
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
 * @param PreviewEnemyBgColor1:str
 * @text Preview Version
 * @parent EnemyBgColor1:str
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
 * @param PreviewEnemyBgColor2:str
 * @text Preview Version
 * @parent EnemyBgColor2:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 * @param PreviewEnemySystemBg:str
 * @text Preview Version
 * @parent EnemySystemBg:str
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 */
//=============================================================================

const _0x351c11=_0x5c20;(function(_0x3ed887,_0x577e60){const _0x46ac0a=_0x5c20,_0x229e4b=_0x3ed887();while(!![]){try{const _0x2db6ff=-parseInt(_0x46ac0a(0x375))/0x1*(-parseInt(_0x46ac0a(0x353))/0x2)+-parseInt(_0x46ac0a(0x36c))/0x3*(-parseInt(_0x46ac0a(0x31e))/0x4)+-parseInt(_0x46ac0a(0x1a4))/0x5*(-parseInt(_0x46ac0a(0x3db))/0x6)+-parseInt(_0x46ac0a(0x244))/0x7+-parseInt(_0x46ac0a(0x3dd))/0x8+parseInt(_0x46ac0a(0x2c7))/0x9*(-parseInt(_0x46ac0a(0x24b))/0xa)+-parseInt(_0x46ac0a(0x2e2))/0xb*(-parseInt(_0x46ac0a(0x2c8))/0xc);if(_0x2db6ff===_0x577e60)break;else _0x229e4b['push'](_0x229e4b['shift']());}catch(_0x1ee83c){_0x229e4b['push'](_0x229e4b['shift']());}}}(_0x46a9,0xe7b22));var label='BattleSystemOTB',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x351c11(0x429)](function(_0x990356){const _0x3e2787=_0x351c11;return _0x990356[_0x3e2787(0x1ba)]&&_0x990356['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x351c11(0x402)]=VisuMZ[label][_0x351c11(0x402)]||{},VisuMZ[_0x351c11(0x2df)]=function(_0x394049,_0x3c53b8){const _0x495283=_0x351c11;for(const _0x5e431b in _0x3c53b8){if(_0x5e431b[_0x495283(0x298)](/(.*):(.*)/i)){const _0x1a6c2b=String(RegExp['$1']),_0x3598ff=String(RegExp['$2'])[_0x495283(0x326)]()[_0x495283(0x40a)]();let _0xd5c44e,_0x16da6b,_0x15613b;switch(_0x3598ff){case'NUM':_0xd5c44e=_0x3c53b8[_0x5e431b]!==''?Number(_0x3c53b8[_0x5e431b]):0x0;break;case'ARRAYNUM':_0x16da6b=_0x3c53b8[_0x5e431b]!==''?JSON[_0x495283(0x25d)](_0x3c53b8[_0x5e431b]):[],_0xd5c44e=_0x16da6b[_0x495283(0x1e2)](_0x388323=>Number(_0x388323));break;case _0x495283(0x38a):_0xd5c44e=_0x3c53b8[_0x5e431b]!==''?eval(_0x3c53b8[_0x5e431b]):null;break;case'ARRAYEVAL':_0x16da6b=_0x3c53b8[_0x5e431b]!==''?JSON['parse'](_0x3c53b8[_0x5e431b]):[],_0xd5c44e=_0x16da6b[_0x495283(0x1e2)](_0x477683=>eval(_0x477683));break;case'JSON':_0xd5c44e=_0x3c53b8[_0x5e431b]!==''?JSON['parse'](_0x3c53b8[_0x5e431b]):'';break;case _0x495283(0x383):_0x16da6b=_0x3c53b8[_0x5e431b]!==''?JSON[_0x495283(0x25d)](_0x3c53b8[_0x5e431b]):[],_0xd5c44e=_0x16da6b[_0x495283(0x1e2)](_0x29816b=>JSON['parse'](_0x29816b));break;case'FUNC':_0xd5c44e=_0x3c53b8[_0x5e431b]!==''?new Function(JSON[_0x495283(0x25d)](_0x3c53b8[_0x5e431b])):new Function(_0x495283(0x2b2));break;case _0x495283(0x334):_0x16da6b=_0x3c53b8[_0x5e431b]!==''?JSON['parse'](_0x3c53b8[_0x5e431b]):[],_0xd5c44e=_0x16da6b[_0x495283(0x1e2)](_0x3ac267=>new Function(JSON['parse'](_0x3ac267)));break;case _0x495283(0x3a6):_0xd5c44e=_0x3c53b8[_0x5e431b]!==''?String(_0x3c53b8[_0x5e431b]):'';break;case _0x495283(0x26a):_0x16da6b=_0x3c53b8[_0x5e431b]!==''?JSON['parse'](_0x3c53b8[_0x5e431b]):[],_0xd5c44e=_0x16da6b[_0x495283(0x1e2)](_0x327e6e=>String(_0x327e6e));break;case _0x495283(0x290):_0x15613b=_0x3c53b8[_0x5e431b]!==''?JSON['parse'](_0x3c53b8[_0x5e431b]):{},_0xd5c44e=VisuMZ[_0x495283(0x2df)]({},_0x15613b);break;case _0x495283(0x3d2):_0x16da6b=_0x3c53b8[_0x5e431b]!==''?JSON[_0x495283(0x25d)](_0x3c53b8[_0x5e431b]):[],_0xd5c44e=_0x16da6b[_0x495283(0x1e2)](_0x25fc41=>VisuMZ[_0x495283(0x2df)]({},JSON[_0x495283(0x25d)](_0x25fc41)));break;default:continue;}_0x394049[_0x1a6c2b]=_0xd5c44e;}}return _0x394049;},(_0x1d4c7a=>{const _0x374cb6=_0x351c11,_0x111578=_0x1d4c7a[_0x374cb6(0x26d)];for(const _0x2fc47c of dependencies){if(!Imported[_0x2fc47c]){alert(_0x374cb6(0x378)[_0x374cb6(0x433)](_0x111578,_0x2fc47c)),SceneManager[_0x374cb6(0x2bd)]();break;}}const _0x28dd68=_0x1d4c7a['description'];if(_0x28dd68[_0x374cb6(0x298)](/\[Version[ ](.*?)\]/i)){if(_0x374cb6(0x2f6)===_0x374cb6(0x3d0)){const _0x2a0a77=_0x18a87f[_0x374cb6(0x21a)][_0x374cb6(0x39e)](_0x3dcab3)+0x1;return _0x2a0a77;}else{const _0x4fb6ba=Number(RegExp['$1']);_0x4fb6ba!==VisuMZ[label][_0x374cb6(0x37c)]&&('HXFxZ'==='Ldyqq'?(_0x1ef29c[_0x374cb6(0x440)](_0x4ff8d0),_0x5b285d&&_0x588c58['addBattlerToTurnOrderAtStart'](_0x500900,_0x4ae3ec)):(alert(_0x374cb6(0x41d)[_0x374cb6(0x433)](_0x111578,_0x4fb6ba)),SceneManager[_0x374cb6(0x2bd)]()));}}if(_0x28dd68[_0x374cb6(0x298)](/\[Tier[ ](\d+)\]/i)){const _0x536225=Number(RegExp['$1']);_0x536225<tier?_0x374cb6(0x336)==='VCtPD'?(alert(_0x374cb6(0x34b)[_0x374cb6(0x433)](_0x111578,_0x536225,tier)),SceneManager[_0x374cb6(0x2bd)]()):(this[_0x374cb6(0x39f)](this[_0x374cb6(0x3f3)]),this[_0x374cb6(0x3f3)]=null):tier=Math[_0x374cb6(0x2d4)](_0x536225,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x374cb6(0x402)],_0x1d4c7a[_0x374cb6(0x3ac)]);})(pluginData),PluginManager[_0x351c11(0x1e5)](pluginData[_0x351c11(0x26d)],'OtbTurnOrderActorIcon',_0x2f0d2a=>{const _0x3558f0=_0x351c11;VisuMZ[_0x3558f0(0x2df)](_0x2f0d2a,_0x2f0d2a);const _0x192bcf=_0x2f0d2a[_0x3558f0(0x439)],_0x1e87de=_0x2f0d2a['IconIndex'];for(const _0x25db2a of _0x192bcf){if(_0x3558f0(0x40f)==='VHEdF'){if(!this['isOTB']())return;const _0x4714d9=_0xd5a636['_scene']['_otbTurnOrderWindow'];if(!_0x4714d9)return;_0x4714d9[_0x3558f0(0x2a7)]();}else{const _0x5a646d=$gameActors[_0x3558f0(0x232)](_0x25db2a);if(!_0x5a646d)continue;_0x5a646d['_otbTurnOrderGraphicType']=_0x3558f0(0x3ad),_0x5a646d['_otbTurnOrderIconIndex']=_0x1e87de;}}}),PluginManager[_0x351c11(0x1e5)](pluginData[_0x351c11(0x26d)],_0x351c11(0x283),_0x4bc2e8=>{const _0x97eebd=_0x351c11;VisuMZ[_0x97eebd(0x2df)](_0x4bc2e8,_0x4bc2e8);const _0x2c4f8a=_0x4bc2e8['Actors'],_0x276a78=_0x4bc2e8[_0x97eebd(0x40e)],_0x1d5267=_0x4bc2e8['FaceIndex'];for(const _0x4eb502 of _0x2c4f8a){const _0x4d33db=$gameActors['actor'](_0x4eb502);if(!_0x4d33db)continue;_0x4d33db['_otbTurnOrderGraphicType']=_0x97eebd(0x1de),_0x4d33db[_0x97eebd(0x33a)]=_0x276a78,_0x4d33db[_0x97eebd(0x231)]=_0x1d5267;}}),PluginManager[_0x351c11(0x1e5)](pluginData[_0x351c11(0x26d)],_0x351c11(0x1d5),_0x2b945e=>{const _0x1ea819=_0x351c11;VisuMZ[_0x1ea819(0x2df)](_0x2b945e,_0x2b945e);const _0x2c5772=_0x2b945e[_0x1ea819(0x439)];for(const _0x5545f6 of _0x2c5772){if(_0x1ea819(0x1e3)!=='qjCQA'){const _0x6a780c=$gameActors['actor'](_0x5545f6);if(!_0x6a780c)continue;_0x6a780c['clearTurnOrderOTBGraphics']();}else _0x2ba80e[_0x1ea819(0x1bd)](),_0x2df993[_0x1ea819(0x3f0)][_0x1ea819(0x335)]['call'](this);}}),PluginManager[_0x351c11(0x1e5)](pluginData[_0x351c11(0x26d)],'OtbTurnOrderEnemyIcon',_0x430ee9=>{const _0x549042=_0x351c11;VisuMZ[_0x549042(0x2df)](_0x430ee9,_0x430ee9);const _0x2ef2db=_0x430ee9[_0x549042(0x1f2)],_0x5770e3=_0x430ee9[_0x549042(0x257)];for(const _0x40e1f5 of _0x2ef2db){const _0x46adbd=$gameTroop[_0x549042(0x217)]()[_0x40e1f5];if(!_0x46adbd)continue;_0x46adbd[_0x549042(0x271)]=_0x549042(0x3ad),_0x46adbd['_otbTurnOrderIconIndex']=_0x5770e3;}}),PluginManager['registerCommand'](pluginData[_0x351c11(0x26d)],_0x351c11(0x2a6),_0x568e74=>{const _0x57162d=_0x351c11;VisuMZ['ConvertParams'](_0x568e74,_0x568e74);const _0x4760ec=_0x568e74[_0x57162d(0x1f2)],_0x215b76=_0x568e74[_0x57162d(0x40e)],_0x4b4ce7=_0x568e74[_0x57162d(0x36a)];for(const _0x48c1f9 of _0x4760ec){const _0x18683b=$gameTroop['members']()[_0x48c1f9];if(!_0x18683b)continue;_0x18683b[_0x57162d(0x271)]='face',_0x18683b[_0x57162d(0x33a)]=_0x215b76,_0x18683b[_0x57162d(0x231)]=_0x4b4ce7;}}),PluginManager['registerCommand'](pluginData[_0x351c11(0x26d)],'OtbTurnOrderClearEnemyGraphic',_0xfcce45=>{const _0x321c9f=_0x351c11;VisuMZ[_0x321c9f(0x2df)](_0xfcce45,_0xfcce45);const _0x4908dd=_0xfcce45[_0x321c9f(0x1f2)];for(const _0x37039f of _0x4908dd){const _0x2e3e50=$gameTroop[_0x321c9f(0x217)]()[_0x37039f];if(!_0x2e3e50)continue;_0x2e3e50['clearTurnOrderOTBGraphics']();}}),PluginManager[_0x351c11(0x1e5)](pluginData[_0x351c11(0x26d)],'SystemTurnOrderVisibility',_0x1e310b=>{const _0x2a9747=_0x351c11;VisuMZ[_0x2a9747(0x2df)](_0x1e310b,_0x1e310b);const _0x13619f=_0x1e310b[_0x2a9747(0x2d8)];$gameSystem[_0x2a9747(0x359)](_0x13619f);}),VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x3d9)]={'Instant':/<OTB (?:INSTANT|INSTANT CAST|INSTANT USE)>/i,'UserFollOrder':/<OTB USER FOLLOW TURN: ([\+\-]\d+)>/i,'UserCurrOrder':/<OTB USER CURRENT TURN: ([\+\-]\d+)>/i,'UserNextOrder':/<OTB USER NEXT TURN: ([\+\-]\d+)>/i,'TargetFollOrder':/<OTB TARGET FOLLOW TURN: ([\+\-]\d+)>/i,'TargetCurrOrder':/<OTB TARGET CURRENT TURN: ([\+\-]\d+)>/i,'TargetNextOrder':/<OTB TARGET NEXT TURN: ([\+\-]\d+)>/i,'UserAddActionCurrent':/<OTB USER ADD CURRENT TURN (?:ACTION|ACTIONS): (\d+)>/i,'UserAddActionNext':/<OTB USER ADD NEXT TURN (?:ACTION|ACTIONS): (\d+)>/i,'TargetAddActionCurrent':/<OTB TARGET ADD CURRENT TURN (?:ACTION|ACTIONS): (\d+)>/i,'TargetAddActionNext':/<OTB TARGET ADD NEXT TURN (?:ACTION|ACTIONS): (\d+)>/i},DataManager['getStateIdWithName']=function(_0xb43322){const _0x2f5d94=_0x351c11;_0xb43322=_0xb43322[_0x2f5d94(0x326)]()[_0x2f5d94(0x40a)](),this[_0x2f5d94(0x295)]=this[_0x2f5d94(0x295)]||{};if(this[_0x2f5d94(0x295)][_0xb43322])return this[_0x2f5d94(0x295)][_0xb43322];for(const _0x5d8811 of $dataStates){if(!_0x5d8811)continue;this[_0x2f5d94(0x295)][_0x5d8811['name'][_0x2f5d94(0x326)]()[_0x2f5d94(0x40a)]()]=_0x5d8811['id'];}return this[_0x2f5d94(0x295)][_0xb43322]||0x0;},ImageManager[_0x351c11(0x1c5)]=ImageManager[_0x351c11(0x1c5)]||0x9,ImageManager[_0x351c11(0x301)]=ImageManager[_0x351c11(0x301)]||0x6,SceneManager[_0x351c11(0x407)]=function(){const _0x16cdc8=_0x351c11;return this['_scene']&&this[_0x16cdc8(0x330)][_0x16cdc8(0x365)]===Scene_Battle;},VisuMZ['BattleSystemOTB'][_0x351c11(0x254)]=BattleManager[_0x351c11(0x382)],BattleManager[_0x351c11(0x382)]=function(_0x1e7c01,_0xcadde4,_0x17f914){const _0x1b6b6b=_0x351c11;VisuMZ[_0x1b6b6b(0x3f0)]['BattleManager_setup'][_0x1b6b6b(0x1e4)](this,_0x1e7c01,_0xcadde4,_0x17f914),this[_0x1b6b6b(0x3e9)]();},BattleManager[_0x351c11(0x3e9)]=function(){const _0x45671f=_0x351c11;if(!this['isOTB']())return;this[_0x45671f(0x370)]=[],this[_0x45671f(0x302)]=![];},VisuMZ['BattleSystemOTB'][_0x351c11(0x34a)]=BattleManager[_0x351c11(0x2fe)],BattleManager['battleSys']=function(){const _0x217f2b=_0x351c11;if(this[_0x217f2b(0x1dc)]())return _0x217f2b(0x289);return VisuMZ[_0x217f2b(0x3f0)][_0x217f2b(0x34a)][_0x217f2b(0x1e4)](this);},BattleManager[_0x351c11(0x1dc)]=function(){const _0x2d1a60=_0x351c11;return $gameSystem[_0x2d1a60(0x241)]()==='OTB';},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x3d5)]=BattleManager[_0x351c11(0x33b)],BattleManager[_0x351c11(0x33b)]=function(){const _0x37deab=_0x351c11;if(this[_0x37deab(0x1dc)]())return![];return VisuMZ[_0x37deab(0x3f0)]['BattleManager_isTpb'][_0x37deab(0x1e4)](this);},VisuMZ['BattleSystemOTB'][_0x351c11(0x3df)]=BattleManager[_0x351c11(0x249)],BattleManager[_0x351c11(0x249)]=function(){const _0x1075d4=_0x351c11;if(this[_0x1075d4(0x1dc)]())return![];return VisuMZ[_0x1075d4(0x3f0)][_0x1075d4(0x3df)]['call'](this);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x30a)]=BattleManager[_0x351c11(0x32b)],BattleManager['isTurnBased']=function(){const _0x4a5f60=_0x351c11;if(this[_0x4a5f60(0x1dc)]())return!![];return VisuMZ[_0x4a5f60(0x3f0)][_0x4a5f60(0x30a)]['call'](this);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1b2)]=BattleManager[_0x351c11(0x264)],BattleManager[_0x351c11(0x264)]=function(){const _0x541502=_0x351c11;VisuMZ[_0x541502(0x3f0)][_0x541502(0x1b2)][_0x541502(0x1e4)](this),this['isOTB']()&&$gameParty['canInput']()&&!this[_0x541502(0x2ca)]&&this[_0x541502(0x358)]();},BattleManager[_0x351c11(0x358)]=function(){const _0x4c01c7=_0x351c11;this[_0x4c01c7(0x3cd)]();},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x32e)]=BattleManager[_0x351c11(0x39a)],BattleManager[_0x351c11(0x39a)]=function(){const _0x3045ae=_0x351c11;this['isOTB']()?_0x3045ae(0x24e)!==_0x3045ae(0x318)?this[_0x3045ae(0x2a8)]():this['createOrderPreview'](_0x5c6da7):VisuMZ[_0x3045ae(0x3f0)][_0x3045ae(0x32e)][_0x3045ae(0x1e4)](this);},BattleManager[_0x351c11(0x2a8)]=function(){const _0x19d961=_0x351c11,_0x41b7c0=this[_0x19d961(0x3f3)];if(_0x41b7c0[_0x19d961(0x33f)]()&&_0x41b7c0['canInput']()){const _0x318046=_0x41b7c0[_0x19d961(0x2f2)]();if(!_0x318046)VisuMZ[_0x19d961(0x3f0)][_0x19d961(0x32e)][_0x19d961(0x1e4)](this);else{if(_0x318046[_0x19d961(0x40c)]){if(_0x19d961(0x1c3)===_0x19d961(0x3c4))return _0x31599a[_0x19d961(0x1dc)]();else VisuMZ[_0x19d961(0x3f0)][_0x19d961(0x32e)][_0x19d961(0x1e4)](this);}else this[_0x19d961(0x24a)]=_0x41b7c0,this[_0x19d961(0x356)]();}}else VisuMZ[_0x19d961(0x3f0)][_0x19d961(0x32e)]['call'](this);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x2e6)]=BattleManager['finishActorInput'],BattleManager[_0x351c11(0x418)]=function(){const _0x504f06=_0x351c11;this['isOTB']()?VisuMZ[_0x504f06(0x3f0)][_0x504f06(0x32e)][_0x504f06(0x1e4)](this):_0x504f06(0x2b7)===_0x504f06(0x279)?this[_0x504f06(0x33d)]=_0x504f06(0x19f):VisuMZ[_0x504f06(0x3f0)][_0x504f06(0x2e6)]['call'](this);},VisuMZ[_0x351c11(0x3f0)]['BattleManager_selectNextActor']=BattleManager[_0x351c11(0x428)],BattleManager['selectNextActor']=function(){const _0x569e18=_0x351c11;this[_0x569e18(0x1dc)]()?this[_0x569e18(0x1e7)]():'OeeEN'===_0x569e18(0x1cb)?this[_0x569e18(0x3cd)]():VisuMZ['BattleSystemOTB'][_0x569e18(0x2f3)][_0x569e18(0x1e4)](this);},BattleManager[_0x351c11(0x1e7)]=function(){const _0x326547=_0x351c11;this[_0x326547(0x24a)]=null,this['_inputting']=![];},VisuMZ['BattleSystemOTB'][_0x351c11(0x3a2)]=BattleManager[_0x351c11(0x3e0)],BattleManager[_0x351c11(0x3e0)]=function(){const _0x2fb70e=_0x351c11;this[_0x2fb70e(0x387)](),VisuMZ[_0x2fb70e(0x3f0)]['BattleManager_endAction'][_0x2fb70e(0x1e4)](this),this['postEndActionOTB']();},BattleManager[_0x351c11(0x387)]=function(){const _0x55cf4c=_0x351c11;if(!this[_0x55cf4c(0x1dc)]())return;this[_0x55cf4c(0x415)]();if(this[_0x55cf4c(0x3f3)]){if('inWFf'===_0x55cf4c(0x34f)){const _0x45dad0=this[_0x55cf4c(0x232)]()[_0x55cf4c(0x27a)];if(_0x45dad0[_0x55cf4c(0x298)](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return _0x1fc542(_0x265a27['$1']);return _0x17243f[_0x55cf4c(0x402)][_0x55cf4c(0x1b3)];}else this[_0x55cf4c(0x3f3)][_0x55cf4c(0x26e)]();}if(this[_0x55cf4c(0x3f3)]&&this[_0x55cf4c(0x3f3)][_0x55cf4c(0x2f8)]()&&this[_0x55cf4c(0x21a)][_0x55cf4c(0x202)](this[_0x55cf4c(0x3f3)])){const _0xbcdc07=this[_0x55cf4c(0x3f3)][_0x55cf4c(0x2e8)][_0x55cf4c(0x429)](_0x31a910=>_0x31a910['_forceAction']);this[_0x55cf4c(0x3f3)][_0x55cf4c(0x3bf)]();if(_0xbcdc07){let _0x3650e1=_0xbcdc07['length'];while(_0x3650e1--){'KGeAY'!==_0x55cf4c(0x40d)?this['_subject'][_0x55cf4c(0x2e8)][_0x55cf4c(0x255)]():this[_0x55cf4c(0x3a5)]();}this[_0x55cf4c(0x3f3)][_0x55cf4c(0x2e8)]=_0xbcdc07[_0x55cf4c(0x3ef)](this[_0x55cf4c(0x3f3)]['_actions']);}}},BattleManager[_0x351c11(0x233)]=function(){const _0x4ff4dd=_0x351c11;if(!this[_0x4ff4dd(0x1dc)]())return;this[_0x4ff4dd(0x415)]();this[_0x4ff4dd(0x3f3)]&&('OTxNW'==='OTxNW'?(this[_0x4ff4dd(0x39f)](this[_0x4ff4dd(0x3f3)]),this[_0x4ff4dd(0x3f3)]=null):this[_0x4ff4dd(0x1dc)]()?this[_0x4ff4dd(0x390)]():_0x493305['BattleSystemOTB'][_0x4ff4dd(0x1ea)][_0x4ff4dd(0x1e4)](this));this[_0x4ff4dd(0x3b2)]['length']>0x0&&('hMYIj'!==_0x4ff4dd(0x274)?this[_0x4ff4dd(0x3f3)]=this[_0x4ff4dd(0x1f9)]():_0x1d67e5[_0x4ff4dd(0x1b7)](_0x4bd1ca,-_0x38152f,!![]));;},BattleManager[_0x351c11(0x3ee)]=VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x402)][_0x351c11(0x3ab)][_0x351c11(0x361)],BattleManager['OTB_ADDED_RANDOMIZE_ADDED_ACTION_ORDER']=VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x402)]['Mechanics']['RandomizeActionTimesOrder'],BattleManager['OTB_STUN_INFINITY_CLAMP']=VisuMZ[_0x351c11(0x3f0)]['Settings'][_0x351c11(0x3ab)][_0x351c11(0x2e4)],VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1ea)]=BattleManager['makeActionOrders'],BattleManager[_0x351c11(0x235)]=function(){const _0x2ecd3f=_0x351c11;this[_0x2ecd3f(0x1dc)]()?this[_0x2ecd3f(0x390)]():VisuMZ['BattleSystemOTB'][_0x2ecd3f(0x1ea)][_0x2ecd3f(0x1e4)](this);},BattleManager['makeActionOrdersOTB']=function(){const _0x4a14b8=_0x351c11;let _0x2731a4=this[_0x4a14b8(0x302)]?0x1:0x2;while(_0x2731a4--){'KtkUD'!==_0x4a14b8(0x3c9)?this[_0x4a14b8(0x30f)]():_0x15a9c3=_0x4a14b8(0x19f);}const _0x498190=!this[_0x4a14b8(0x302)];this[_0x4a14b8(0x302)]=!![];},BattleManager[_0x351c11(0x30f)]=function(){const _0x55c594=_0x351c11;this[_0x55c594(0x21a)]=this['_otb_actionBattlersNext'],this[_0x55c594(0x37b)]();const _0x7c4d33=[];_0x7c4d33[_0x55c594(0x2ad)](...$gameParty[_0x55c594(0x31c)]()),_0x7c4d33[_0x55c594(0x2ad)](...$gameTroop[_0x55c594(0x217)]());for(const _0x1d9976 of _0x7c4d33){_0x1d9976[_0x55c594(0x200)]();}_0x7c4d33['sort']((_0x19722a,_0x213a97)=>_0x213a97[_0x55c594(0x2ea)]()-_0x19722a[_0x55c594(0x2ea)]()),this[_0x55c594(0x370)]=_0x7c4d33,this[_0x55c594(0x201)](),this[_0x55c594(0x415)](),this[_0x55c594(0x33c)]();},BattleManager['otbApplyActionTimes']=function(){const _0x777459=_0x351c11;if(!BattleManager[_0x777459(0x3ee)])return;const _0x96fec8=this[_0x777459(0x370)],_0x29363e=this[_0x777459(0x2c3)]();for(const _0x2bad48 of _0x29363e){if(_0x777459(0x36d)===_0x777459(0x391)){if(!_0x42774['Settings']['ShowMarkerBg'])return;const _0x215203=_0x3e72e5[_0x777459(0x402)],_0x48843a=this[_0x777459(0x1f1)](),_0x460827=_0x777459(0x3e7)[_0x777459(0x433)](_0x48843a),_0x1f634a=new _0x451a90();_0x1f634a[_0x777459(0x306)]['x']=this['anchor']['x'],_0x1f634a[_0x777459(0x306)]['y']=this[_0x777459(0x306)]['y'];if(_0x215203[_0x460827])_0x1f634a[_0x777459(0x1e1)]=_0x13a9fd[_0x777459(0x3e3)](_0x215203[_0x460827]);else{const _0x4a21ca=this[_0x777459(0x256)](),_0x40b9a8=this[_0x777459(0x3f1)]();_0x1f634a[_0x777459(0x1e1)]=new _0x502043(_0x4a21ca,_0x40b9a8);const _0x5ed302=_0x3c398e['getColor'](_0x215203[_0x777459(0x308)['format'](_0x48843a)]),_0x9a3867=_0x3313a9['getColor'](_0x215203[_0x777459(0x432)[_0x777459(0x433)](_0x48843a)]);_0x1f634a[_0x777459(0x1e1)][_0x777459(0x2d3)](0x0,0x0,_0x4a21ca,_0x40b9a8,_0x5ed302,_0x9a3867,!![]);}this[_0x777459(0x3ba)]=_0x1f634a,this['addChild'](this[_0x777459(0x3ba)]),this[_0x777459(0x3fd)]=this['_backgroundSprite']['width'],this[_0x777459(0x3b4)]=this[_0x777459(0x3ba)][_0x777459(0x3b4)];}else{if(!_0x2bad48)continue;if(!_0x2bad48['isAppeared']())continue;if(!_0x2bad48[_0x777459(0x37d)]())continue;if(!_0x96fec8['includes'](_0x2bad48))continue;const _0x441a42=_0x96fec8[_0x777459(0x39e)](_0x2bad48);let _0x2cf17f=_0x2bad48[_0x777459(0x39b)]()-0x1;while(_0x2cf17f--){let _0x54b7fa=_0x441a42;if(BattleManager[_0x777459(0x28e)]){if('FWKIA'==='FWKIA')_0x54b7fa=Math[_0x777459(0x3e1)](_0x96fec8['length']-_0x441a42)+_0x441a42;else{if(!_0x311332[_0x777459(0x407)]())return;if(!_0x303a1a[_0x777459(0x1dc)]())return;if(!this[_0x777459(0x2cc)]())return;if(!_0x5b754d)return;if(!_0x1f9c08[_0x777459(0x224)]())return 0x0;let _0x3ad1db=this[_0x777459(0x39d)](_0x575a40),_0x45d0ad=this[_0x777459(0x27d)](_0x40159a);_0x3ad1db!==0x0&&_0x5295b8['turnOrderChangeOTB'](_0x360781,-_0x3ad1db,![]),_0x45d0ad!==0x0&&_0x25d21b[_0x777459(0x1b7)](_0x17dc3f,-_0x45d0ad,!![]);}}_0x96fec8['splice'](_0x54b7fa,0x0,_0x2bad48);}}}},BattleManager[_0x351c11(0x415)]=function(){const _0x5955a7=_0x351c11;if(!this['isOTB']())return;this[_0x5955a7(0x21a)]=this['_actionBattlers']||[],this[_0x5955a7(0x21a)][_0x5955a7(0x2ac)](null),this[_0x5955a7(0x21a)][_0x5955a7(0x2ac)](undefined),this[_0x5955a7(0x21a)]=this[_0x5955a7(0x21a)][_0x5955a7(0x429)](_0x2dfa4=>_0x2dfa4[_0x5955a7(0x24d)]()),this[_0x5955a7(0x21a)]=this[_0x5955a7(0x21a)][_0x5955a7(0x429)](_0x50e1a0=>VisuMZ[_0x5955a7(0x3f0)]['ActionBattlersFilter'](_0x50e1a0));this[_0x5955a7(0x2ca)]&&('KPCRO'!==_0x5955a7(0x25e)?(_0x328d70[_0x5955a7(0x1bd)](),_0x5033ac[_0x5955a7(0x3f0)][_0x5955a7(0x1d0)][_0x5955a7(0x1e4)](this)):this['_actionBattlers']=this['_actionBattlers']['filter'](_0x5c5f88=>!_0x5c5f88[_0x5955a7(0x33f)]()));if(this[_0x5955a7(0x1b5)]){if(_0x5955a7(0x236)!=='taSVs')this[_0x5955a7(0x21a)]=this[_0x5955a7(0x21a)][_0x5955a7(0x429)](_0x56cc31=>!_0x56cc31[_0x5955a7(0x3fa)]());else{if(!_0x529dae)return;_0xd09686[_0x5955a7(0x396)]&&_0xf2e7cb[_0x5955a7(0x396)][_0x5955a7(0x2ac)](_0x44fd4c);const _0x5e5b92=_0x5b5eea[_0x5955a7(0x402)],_0x235975=0x3e8/0x3c*_0x5e5b92['UpdateFrames']+0x1f4;_0x5c837e['startFade'](0x0),_0xc85c38(this[_0x5955a7(0x3f2)]['bind'](this,_0x12b819),_0x235975);}}this[_0x5955a7(0x370)]=this['_otb_actionBattlersNext']||[],this[_0x5955a7(0x370)][_0x5955a7(0x2ac)](null),this[_0x5955a7(0x370)][_0x5955a7(0x2ac)](undefined),this[_0x5955a7(0x370)]=this[_0x5955a7(0x370)]['filter'](_0x1cd744=>_0x1cd744[_0x5955a7(0x24d)]()),this[_0x5955a7(0x370)]=this[_0x5955a7(0x370)][_0x5955a7(0x429)](_0x74d732=>VisuMZ[_0x5955a7(0x3f0)][_0x5955a7(0x3c2)](_0x74d732)),this[_0x5955a7(0x29b)](),this[_0x5955a7(0x1b9)]();},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x28c)]=function(_0x3c39d6){const _0x1fa1d7=_0x351c11;if(!_0x3c39d6)return![];if(!_0x3c39d6[_0x1fa1d7(0x37d)]())return![];if(!_0x3c39d6[_0x1fa1d7(0x3d1)]())return![];return _0x3c39d6[_0x1fa1d7(0x2f8)]();},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x3c2)]=function(_0x4c0a35){const _0x50ca29=_0x351c11;if(!_0x4c0a35)return![];const _0x4d71c0=JsonEx['makeDeepCopy'](_0x4c0a35);return _0x4d71c0[_0x50ca29(0x3f4)]=!![],_0x4d71c0[_0x50ca29(0x1e9)]=!![],_0x4d71c0['updateStateTurns'](),_0x4d71c0[_0x50ca29(0x362)](0x1),_0x4d71c0[_0x50ca29(0x362)](0x2),_0x4d71c0['refresh'](),VisuMZ[_0x50ca29(0x3f0)][_0x50ca29(0x28c)](_0x4d71c0);},BattleManager[_0x351c11(0x1b7)]=function(_0x1d148d,_0x40f442,_0x4e18e3){const _0x39627a=_0x351c11;if(!_0x40f442)return;const _0xbd33c5=_0x4e18e3?this[_0x39627a(0x370)]:this['_actionBattlers'];if(!_0xbd33c5)return;if(!_0xbd33c5[_0x39627a(0x202)](_0x1d148d))return;const _0x4f5108=VisuMZ['BattleSystemOTB'][_0x39627a(0x2ce)](_0x1d148d,_0xbd33c5),_0x11e721=_0x4e18e3?VisuMZ[_0x39627a(0x3f0)][_0x39627a(0x1c6)](_0xbd33c5):0x0,_0x5b55e2=_0x4f5108['length']-0x1;for(let _0x57d71f=_0x5b55e2;_0x57d71f>=0x0;_0x57d71f--){_0xbd33c5['splice'](_0x4f5108[_0x57d71f],0x1);}for(var _0x776832=0x0;_0x776832<_0x4f5108[_0x39627a(0x234)];_0x776832++){if(_0x39627a(0x347)!==_0x39627a(0x347))return _0x1c1ab9[_0x39627a(0x1dc)]();else{var _0xbbc618=(_0x4f5108[_0x776832]-_0x40f442)[_0x39627a(0x1d2)](_0x11e721,_0xbd33c5[_0x39627a(0x234)]);_0xbd33c5[_0x39627a(0x434)](_0xbbc618,0x0,_0x1d148d);}}this['removeActionBattlersOTB'](),this[_0x39627a(0x1b9)]();},VisuMZ[_0x351c11(0x3f0)]['GetAllIndicies']=function(_0x2f1659,_0x3aea26){const _0x4952b8=_0x351c11,_0x597560=[],_0x5791fd=_0x3aea26[_0x4952b8(0x234)];for(let _0x205dda=0x0;_0x205dda<_0x5791fd;_0x205dda++){if(_0x3aea26[_0x205dda]===_0x2f1659)_0x597560[_0x4952b8(0x2ad)](_0x205dda);}return _0x597560;},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1c6)]=function(_0x2a9d45){const _0x4e8a4c=_0x351c11;if(!BattleManager['OTB_STUN_INFINITY_CLAMP'])return 0x0;if(!_0x2a9d45)return 0x0;let _0x32eb20=0x0;const _0x444c89=_0x2a9d45[_0x4e8a4c(0x234)];for(let _0x203400=0x0;_0x203400<_0x444c89;_0x203400++){if('RohLE'!==_0x4e8a4c(0x1ae))this[_0x4e8a4c(0x1dc)]()?this['processTurnOTB']():_0x1cc4d2['BattleSystemOTB'][_0x4e8a4c(0x32e)][_0x4e8a4c(0x1e4)](this);else{const _0x343daa=_0x2a9d45[_0x203400];if(!_0x343daa)continue;if(_0x343daa['speed']()!==Infinity)return _0x203400;else _0x4e8a4c(0x349)===_0x4e8a4c(0x1ab)?_0x4657db[_0x4e8a4c(0x202)](_0x1d2d49)&&(_0x21d2f2+=_0x1622e0(_0x296b87['$1'])):_0x32eb20++;}}return _0x32eb20;},BattleManager['otbShiftNextTurnSpritesToCurrentTurn']=function(){const _0x501dfe=_0x351c11;if(!this[_0x501dfe(0x1dc)]())return;const _0x4279e2=SceneManager[_0x501dfe(0x330)][_0x501dfe(0x35c)];if(!_0x4279e2)return;_0x4279e2[_0x501dfe(0x22d)]();},BattleManager[_0x351c11(0x33c)]=function(){const _0x4e8849=_0x351c11;if(!this['isOTB']())return;const _0x323419=SceneManager[_0x4e8849(0x330)]['_otbTurnOrderWindow'];if(!_0x323419)return;_0x323419[_0x4e8849(0x400)]();},VisuMZ[_0x351c11(0x3f0)]['BattleManager_getNextSubject']=BattleManager[_0x351c11(0x1f9)],BattleManager['getNextSubject']=function(){const _0x3e9ed0=_0x351c11;return this[_0x3e9ed0(0x3f3)]=VisuMZ[_0x3e9ed0(0x3f0)][_0x3e9ed0(0x260)]['call'](this),this[_0x3e9ed0(0x1dc)]()&&this['_subject']&&this[_0x3e9ed0(0x357)](this[_0x3e9ed0(0x3f3)]),this['_subject'];},BattleManager[_0x351c11(0x357)]=function(_0x510891){const _0x594224=_0x351c11;if(!this[_0x594224(0x1dc)]())return;const _0x15aa8a=SceneManager[_0x594224(0x330)]['_otbTurnOrderWindow'];if(!_0x15aa8a)return;if(!_0x510891)return;_0x15aa8a['shiftTurnOrderForSubject'](_0x510891);},BattleManager[_0x351c11(0x1b9)]=function(){const _0x2d7b00=_0x351c11;if(!this[_0x2d7b00(0x1dc)]())return;const _0x35f4de=SceneManager['_scene'][_0x2d7b00(0x35c)];if(!_0x35f4de)return;_0x35f4de[_0x2d7b00(0x29c)]();},VisuMZ[_0x351c11(0x3f0)]['BattleManager_endTurn']=BattleManager[_0x351c11(0x1e8)],BattleManager[_0x351c11(0x1e8)]=function(){const _0x17daf9=_0x351c11;VisuMZ['BattleSystemOTB'][_0x17daf9(0x31b)][_0x17daf9(0x1e4)](this),this[_0x17daf9(0x1dc)]()&&(_0x17daf9(0x313)===_0x17daf9(0x313)?this[_0x17daf9(0x1e6)]():(_0x3217c4[_0x17daf9(0x250)](_0x5d07d9,_0x302a47,_0x49b331/0x2,_0x25dc18,_0x5a32b1),_0x40d04a[_0x17daf9(0x2d3)](_0x4aaf92+_0x511ce1/0x2,_0x13660d,_0x463bbe/0x2,_0x2d0f86,_0x3396d2,_0x46f973,![]),_0x5c2230['fillRect'](_0x3336b7,_0x100842,_0x11b9f7/0x2,_0x174ef0,_0x34d6d9),_0x893111[_0x17daf9(0x2d3)](_0x12f55e+_0x2cba3a/0x2,_0x56173e,_0x4677b0/0x2,_0x13963c,_0x1f3a6e,_0x545df2,![]),_0x2805ca[_0x17daf9(0x250)](_0x32331f,_0x1e2b2d,_0x27ec37/0x2,_0x59a794,_0x5a6d83),_0x4361c1['gradientFillRect'](_0x6b5842+_0x33e458/0x2,_0x17a5f8,_0x6da860/0x2,_0x32252a,_0x58f46c,_0x4b2467,![])));},BattleManager[_0x351c11(0x1e6)]=function(){const _0x380196=_0x351c11;if(!this[_0x380196(0x1dc)]())return;const _0x26bf30=SceneManager['_scene'][_0x380196(0x35c)];if(!_0x26bf30)return;_0x26bf30[_0x380196(0x2a7)]();},BattleManager[_0x351c11(0x29b)]=function(){const _0x2314be=_0x351c11;if(!this['isOTB']())return;const _0x524361=SceneManager['_scene'][_0x2314be(0x35c)];if(!_0x524361)return;_0x524361[_0x2314be(0x3b7)]();},BattleManager[_0x351c11(0x2fb)]=function(_0xd1b801){const _0x23091f=_0x351c11;if(!_0xd1b801)return;const _0x236b36=_0xd1b801[_0x23091f(0x39b)]();_0xd1b801[_0x23091f(0x3bf)]();if(!this['_actionBattlers'][_0x23091f(0x202)](_0xd1b801)){const _0x553ab1=Math['max'](0x0,_0x236b36-(_0xd1b801[_0x23091f(0x208)]||0x0));this[_0x23091f(0x1d8)](_0xd1b801,_0x553ab1,this[_0x23091f(0x21a)]);}if(!this[_0x23091f(0x370)][_0x23091f(0x202)](_0xd1b801)){if(_0x23091f(0x41c)!==_0x23091f(0x227)){const _0x3426af=_0x236b36;this[_0x23091f(0x1d8)](_0xd1b801,_0x3426af,this[_0x23091f(0x370)]);}else return _0xf0277b(_0x57a6c3['$1']);}},BattleManager[_0x351c11(0x1d8)]=function(_0x16e008,_0x224737,_0x220ddb){const _0x218a65=_0x351c11;if(!this[_0x218a65(0x1dc)]())return;const _0x24bb1a=SceneManager['_scene'][_0x218a65(0x35c)];while(_0x224737--){'lrNcF'===_0x218a65(0x2e9)?(_0x220ddb[_0x218a65(0x2ad)](_0x16e008),_0x24bb1a&&(_0x218a65(0x389)==='tqWUP'?_0x24bb1a[_0x218a65(0x2cf)](_0x16e008,_0x220ddb):this[_0x218a65(0x3e8)]())):_0x4ccc32[_0x218a65(0x1dc)]()?this[_0x218a65(0x416)]():_0x33dab6[_0x218a65(0x3f0)][_0x218a65(0x1dd)][_0x218a65(0x1e4)](this);}},BattleManager['otbUnshiftBattlerToTurnOrders']=function(_0x4d55d1){const _0x45bad9=_0x351c11;if(!_0x4d55d1)return;const _0x365e7c=_0x4d55d1[_0x45bad9(0x39b)]();_0x4d55d1[_0x45bad9(0x3bf)]();if(!this['_actionBattlers']['includes'](_0x4d55d1)){const _0x9d4578=Math['max'](0x0,_0x365e7c-(_0x4d55d1['_otbTimesActedThisTurn']||0x0));this[_0x45bad9(0x350)](_0x4d55d1,_0x9d4578,this['_actionBattlers']);}if(!this[_0x45bad9(0x370)]['includes'](_0x4d55d1)){const _0x1b0a80=_0x365e7c;this[_0x45bad9(0x350)](_0x4d55d1,_0x1b0a80,this[_0x45bad9(0x370)]);}},BattleManager[_0x351c11(0x409)]=function(_0xc95e18,_0x77db1,_0x54e4f6){const _0x1a5e46=_0x351c11;if(!this[_0x1a5e46(0x1dc)]())return;const _0x1aeab3=SceneManager[_0x1a5e46(0x330)][_0x1a5e46(0x35c)];while(_0x77db1--){if('yhfQR'!==_0x1a5e46(0x1a1)){if(this[_0x1a5e46(0x2ea)]()===_0x3c9d2c)return![];return!![];}else _0x54e4f6['unshift'](_0xc95e18),_0x1aeab3&&_0x1aeab3[_0x1a5e46(0x350)](_0xc95e18,_0x54e4f6);}},BattleManager['otbAddForceActionBattler']=function(_0xf16bd4){const _0x46791a=_0x351c11;if(!this[_0x46791a(0x1dc)]())return;const _0x14b1c8=this[_0x46791a(0x21a)],_0x219f74=_0xf16bd4===this[_0x46791a(0x3f3)]?0x0:0x1;let _0x23ccd1=0x0;for(let _0x4c5957=0x0;_0x4c5957<_0x14b1c8[_0x46791a(0x234)];_0x4c5957++){if('dRNGI'!==_0x46791a(0x27b)){const _0x2c8365=_0x14b1c8[_0x4c5957];if(!_0x2c8365)continue;if(!_0x2c8365[_0x46791a(0x2e8)])continue;if(!_0x2c8365['_actions'][_0x219f74])continue;if(!_0x2c8365[_0x46791a(0x2e8)][_0x219f74]['_forceAction'])continue;_0x23ccd1=_0x4c5957;}else this[_0x46791a(0x1ef)](_0x5d4986,_0x231f51);}this[_0x46791a(0x21a)][_0x46791a(0x434)](_0x23ccd1,0x0,_0xf16bd4);const _0x178f83=SceneManager[_0x46791a(0x330)][_0x46791a(0x35c)];_0x178f83&&_0x178f83[_0x46791a(0x288)](_0xf16bd4,_0x23ccd1);},BattleManager[_0x351c11(0x1bd)]=function(){const _0x401089=_0x351c11;if(!this[_0x401089(0x1dc)]())return;const _0x3cf06b=SceneManager[_0x401089(0x330)]['_otbTurnOrderWindow'];if(!_0x3cf06b)return;_0x3cf06b[_0x401089(0x35b)](null);},BattleManager['otbPreviewOrderChange']=function(){const _0x588c4c=_0x351c11;if(!this[_0x588c4c(0x1dc)]())return;const _0x3a813f=SceneManager[_0x588c4c(0x330)][_0x588c4c(0x35c)];if(!_0x3a813f)return;_0x3a813f[_0x588c4c(0x35b)](this[_0x588c4c(0x35a)]());},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x329)]=Game_System[_0x351c11(0x19c)][_0x351c11(0x2c4)],Game_System[_0x351c11(0x19c)][_0x351c11(0x2c4)]=function(){const _0x1356f0=_0x351c11;VisuMZ[_0x1356f0(0x3f0)][_0x1356f0(0x329)][_0x1356f0(0x1e4)](this),this[_0x1356f0(0x2b6)]();},Game_System[_0x351c11(0x19c)]['initBattleSystemOTB']=function(){const _0x21b451=_0x351c11;this[_0x21b451(0x270)]=!![];},Game_System[_0x351c11(0x19c)][_0x351c11(0x1b6)]=function(){const _0x33e065=_0x351c11;return this['_otbTurnOrderVisible']===undefined&&this[_0x33e065(0x2b6)](),this[_0x33e065(0x270)];},Game_System[_0x351c11(0x19c)][_0x351c11(0x359)]=function(_0x1608a6){const _0x1cbceb=_0x351c11;this['_otbTurnOrderVisible']===undefined&&this[_0x1cbceb(0x2b6)](),this[_0x1cbceb(0x270)]=_0x1608a6;},Game_Action[_0x351c11(0x1df)]=VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x402)][_0x351c11(0x3ce)][_0x351c11(0x292)],Game_Action['OTB_CONVERT_AGI_DEBUFF_CURRENT_TURN']=VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x402)]['Conversion'][_0x351c11(0x305)],Game_Action['OTB_CONVERT_AGI_BUFF_NEXT_TURN']=VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x402)][_0x351c11(0x3ce)]['ConvertAgiBuffNext'],Game_Action[_0x351c11(0x343)]=VisuMZ['BattleSystemOTB'][_0x351c11(0x402)][_0x351c11(0x3ce)][_0x351c11(0x3ff)],VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x28f)]=Game_Action[_0x351c11(0x19c)][_0x351c11(0x2ea)],Game_Action['prototype'][_0x351c11(0x2ea)]=function(){const _0x446b5f=_0x351c11;return BattleManager[_0x446b5f(0x1dc)]()?0x0:VisuMZ['BattleSystemOTB'][_0x446b5f(0x28f)][_0x446b5f(0x1e4)](this);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x369)]=Game_Action[_0x351c11(0x19c)]['applyGlobal'],Game_Action[_0x351c11(0x19c)][_0x351c11(0x2aa)]=function(){const _0x4abeff=_0x351c11;VisuMZ['BattleSystemOTB'][_0x4abeff(0x369)][_0x4abeff(0x1e4)](this),this[_0x4abeff(0x342)]();},Game_Action['prototype'][_0x351c11(0x342)]=function(){const _0x18d411=_0x351c11;if(!SceneManager[_0x18d411(0x407)]())return;if(!BattleManager[_0x18d411(0x1dc)]())return;if(!this[_0x18d411(0x2cc)]())return;if(!this[_0x18d411(0x366)]())return;const _0xd791cf=VisuMZ[_0x18d411(0x3f0)]['RegExp'],_0xf509d9=this[_0x18d411(0x2cc)]()[_0x18d411(0x27a)];if(_0xf509d9[_0x18d411(0x298)](_0xd791cf[_0x18d411(0x2dd)])){if(_0x18d411(0x1c4)!==_0x18d411(0x23b))this[_0x18d411(0x366)]()[_0x18d411(0x1c9)](0x1);else{const _0x3232b3=this[_0x18d411(0x1e0)],_0x8b4f8=this[_0x18d411(0x256)](),_0x517995=this[_0x18d411(0x3f1)]();this[_0x18d411(0x223)]['bitmap']=new _0x3e43e5(_0x8b4f8,_0x517995);const _0x4d3a9d=this['_graphicSprite']['bitmap'],_0x3cad6a=_0x2aff8a[_0x18d411(0x3da)],_0x26d7c4=_0x1a1df1[_0x18d411(0x3e6)],_0x4e87dd=_0x5ad655[_0x18d411(0x3cf)](_0x3cad6a,_0x26d7c4,_0x8b4f8,_0x517995),_0x45243f=_0x3232b3%0x10*_0x3cad6a,_0x261540=_0x371ea6[_0x18d411(0x1ac)](_0x3232b3/0x10)*_0x26d7c4,_0x49a3d8=_0x5cc7b2['floor'](_0x5a4dae[_0x18d411(0x2d4)](_0x8b4f8-_0x4e87dd,0x0)/0x2),_0x19a8d3=_0x598001[_0x18d411(0x1ac)](_0x4b2ab4[_0x18d411(0x2d4)](_0x517995-_0x4e87dd,0x0)/0x2);_0x4d3a9d['blt'](_0x4dbe42,_0x45243f,_0x261540,_0x3cad6a,_0x26d7c4,_0x49a3d8,_0x19a8d3,_0x4e87dd,_0x4e87dd);}}let _0x5ac5fa=this[_0x18d411(0x2ae)](),_0x1e66a2=this[_0x18d411(0x1bf)]();_0x5ac5fa!==0x0&&BattleManager[_0x18d411(0x1b7)](this[_0x18d411(0x366)](),-_0x5ac5fa,![]),_0x1e66a2!==0x0&&(_0x18d411(0x38c)!==_0x18d411(0x38c)?this[_0x18d411(0x358)]():BattleManager[_0x18d411(0x1b7)](this[_0x18d411(0x366)](),-_0x1e66a2,!![]));},Game_Action[_0x351c11(0x19c)][_0x351c11(0x2ae)]=function(){const _0x51674f=_0x351c11;if(!SceneManager[_0x51674f(0x407)]())return 0x0;if(!BattleManager[_0x51674f(0x1dc)]())return 0x0;if(!this[_0x51674f(0x2cc)]())return 0x0;if(!this[_0x51674f(0x366)]())return 0x0;if(!this['subject']()[_0x51674f(0x224)]())return 0x0;const _0x1a8dd2=VisuMZ[_0x51674f(0x3f0)]['RegExp'],_0x6726a1=this[_0x51674f(0x2cc)]()[_0x51674f(0x27a)],_0x34bac5=BattleManager['_actionBattlers']||[];let _0x12b63f=0x0;return _0x6726a1[_0x51674f(0x298)](_0x1a8dd2[_0x51674f(0x263)])&&(_0x34bac5[_0x51674f(0x202)](this[_0x51674f(0x366)]())&&(_0x51674f(0x3ca)!==_0x51674f(0x3f5)?_0x12b63f+=Number(RegExp['$1']):(this[_0x51674f(0x2ff)]=_0x5bf7e8[_0x51674f(0x3fd)]-_0x4a28c1[_0x51674f(0x2c5)],this[_0x51674f(0x3b6)]=this[_0x51674f(0x1bc)]+_0x2433d0[_0x51674f(0x22f)],this[_0x51674f(0x435)]=0x0))),_0x6726a1['match'](_0x1a8dd2['UserCurrOrder'])&&(_0x12b63f+=Number(RegExp['$1'])),_0x12b63f;},Game_Action[_0x351c11(0x19c)]['otbCalcUserNextOrderChange']=function(){const _0x3cdca8=_0x351c11;if(!SceneManager[_0x3cdca8(0x407)]())return 0x0;if(!BattleManager[_0x3cdca8(0x1dc)]())return 0x0;if(!this[_0x3cdca8(0x2cc)]())return 0x0;if(!this[_0x3cdca8(0x366)]())return 0x0;if(!this[_0x3cdca8(0x366)]()[_0x3cdca8(0x224)]())return 0x0;const _0x485a9f=VisuMZ[_0x3cdca8(0x3f0)][_0x3cdca8(0x402)]['Mechanics'],_0x82ed64=VisuMZ[_0x3cdca8(0x3f0)][_0x3cdca8(0x3d9)],_0x49c75e=this[_0x3cdca8(0x2cc)]()[_0x3cdca8(0x27a)],_0x520424=BattleManager[_0x3cdca8(0x370)]||[];let _0x3301a8=0x0;_0x485a9f[_0x3cdca8(0x31d)]&&(_0x3301a8+=_0x485a9f[_0x3cdca8(0x31d)][_0x3cdca8(0x1e4)](this));if(_0x49c75e[_0x3cdca8(0x298)](_0x82ed64[_0x3cdca8(0x263)])){if(_0x520424['includes'](this[_0x3cdca8(0x366)]())){if('msNiu'===_0x3cdca8(0x28b)){const _0x448f49=this[_0x3cdca8(0x19f)]()[_0x3cdca8(0x27a)];if(_0x448f49[_0x3cdca8(0x298)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x3a4b2e(_0x4a476f['$1']);return _0x2254da[_0x3cdca8(0x402)][_0x3cdca8(0x1d3)];}else _0x3301a8+=Number(RegExp['$1']);}}return _0x49c75e[_0x3cdca8(0x298)](_0x82ed64[_0x3cdca8(0x1bb)])&&(_0x3301a8+=Number(RegExp['$1'])),_0x3301a8;},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1a2)]=Game_Action[_0x351c11(0x19c)][_0x351c11(0x3ed)],Game_Action[_0x351c11(0x19c)][_0x351c11(0x3ed)]=function(_0x7ab7e2){const _0x1c0827=_0x351c11;VisuMZ[_0x1c0827(0x3f0)]['Game_Action_applyItemUserEffect'][_0x1c0827(0x1e4)](this,_0x7ab7e2),this['applyItemAddedActionOTB'](_0x7ab7e2),this[_0x1c0827(0x413)](_0x7ab7e2);},Game_Action[_0x351c11(0x19c)]['applyItemAddedActionOTB']=function(_0x6dd273){const _0x35445d=_0x351c11;if(!SceneManager[_0x35445d(0x407)]())return;if(!BattleManager[_0x35445d(0x1dc)]())return;if(!this[_0x35445d(0x2cc)]())return;if(!_0x6dd273)return;const _0x4bf9b2=VisuMZ['BattleSystemOTB'][_0x35445d(0x3d9)],_0x487d56=this[_0x35445d(0x2cc)]()[_0x35445d(0x27a)];if(_0x487d56[_0x35445d(0x298)](_0x4bf9b2[_0x35445d(0x253)])){const _0x3101e4=!![],_0x44101d=Number(RegExp['$1'])||0x0;this[_0x35445d(0x366)]()[_0x35445d(0x20f)](_0x44101d,_0x3101e4);}if(_0x487d56[_0x35445d(0x298)](_0x4bf9b2[_0x35445d(0x346)])){if(_0x35445d(0x2fd)===_0x35445d(0x32c))this[_0x35445d(0x3c6)]['x']+=_0x2c5414[_0x35445d(0x2c5)];else{const _0xd27909=![],_0x18275e=Number(RegExp['$1'])||0x0;this[_0x35445d(0x366)]()[_0x35445d(0x20f)](_0x18275e,_0xd27909);}}if(_0x487d56[_0x35445d(0x298)](_0x4bf9b2[_0x35445d(0x214)])){if(_0x35445d(0x245)===_0x35445d(0x245)){const _0xdab380=!![],_0x851cb2=Number(RegExp['$1'])||0x0;_0x6dd273['otbAddActions'](_0x851cb2,_0xdab380);}else{if(_0x3af855['OTB_CONVERT_AGI_BUFF_NEXT_TURN'])_0x1947aa-=0x1;}}if(_0x487d56[_0x35445d(0x298)](_0x4bf9b2[_0x35445d(0x352)])){const _0x3f1edc=![],_0x34ddc7=Number(RegExp['$1'])||0x0;_0x6dd273[_0x35445d(0x20f)](_0x34ddc7,_0x3f1edc);}},Game_Action['prototype'][_0x351c11(0x413)]=function(_0x5255da){const _0x301db0=_0x351c11;if(!SceneManager[_0x301db0(0x407)]())return;if(!BattleManager[_0x301db0(0x1dc)]())return;if(!this['item']())return;if(!_0x5255da)return;if(!_0x5255da[_0x301db0(0x224)]())return 0x0;let _0x4eded2=this[_0x301db0(0x39d)](_0x5255da),_0x2439cb=this['otbCalcTargetNextOrderChange'](_0x5255da);if(_0x4eded2!==0x0){if(_0x301db0(0x325)==='pZpdo')BattleManager['turnOrderChangeOTB'](_0x5255da,-_0x4eded2,![]);else return this[_0x301db0(0x21f)]===_0x23e426?'PreviewActor':'PreviewEnemy';}_0x2439cb!==0x0&&BattleManager[_0x301db0(0x1b7)](_0x5255da,-_0x2439cb,!![]);},Game_Action['prototype'][_0x351c11(0x39d)]=function(_0x14fe64){const _0x1a6d7f=_0x351c11;if(!SceneManager[_0x1a6d7f(0x407)]())return 0x0;if(!BattleManager[_0x1a6d7f(0x1dc)]())return 0x0;if(!this['item']())return 0x0;if(!_0x14fe64)return 0x0;if(!_0x14fe64[_0x1a6d7f(0x224)]())return 0x0;const _0x53b9e3=VisuMZ['BattleSystemOTB'][_0x1a6d7f(0x3d9)],_0xee4e59=this[_0x1a6d7f(0x2cc)]()[_0x1a6d7f(0x27a)],_0xf0d6d=BattleManager[_0x1a6d7f(0x21a)]||[];let _0x2458ec=0x0;if(_0xee4e59[_0x1a6d7f(0x298)](_0x53b9e3[_0x1a6d7f(0x21b)])){if('ZLCrW'!==_0x1a6d7f(0x38b))_0x34e8b2=_0x4c30db[_0x1a6d7f(0x232)](_0xaf152e['index']());else{if(_0xf0d6d[_0x1a6d7f(0x202)](_0x14fe64)){if(_0x1a6d7f(0x1cc)!=='JYqiA'){if(!this['isOTB']())return;const _0x2521ec=_0x412989[_0x1a6d7f(0x330)][_0x1a6d7f(0x35c)];if(!_0x2521ec)return;if(!_0x1a2156)return;_0x2521ec[_0x1a6d7f(0x238)](_0x3ec6d7);}else _0x2458ec+=Number(RegExp['$1']);}}}_0xee4e59['match'](_0x53b9e3[_0x1a6d7f(0x331)])&&(_0x2458ec+=Number(RegExp['$1']));const _0x415368=this[_0x1a6d7f(0x2cc)]()[_0x1a6d7f(0x1f8)];for(const _0x1130b3 of _0x415368){if(!_0x1130b3)continue;if(_0x1130b3[_0x1a6d7f(0x401)]===Game_Action[_0x1a6d7f(0x38d)]&&_0x1130b3[_0x1a6d7f(0x2d1)]===0x6){if(_0x1a6d7f(0x34e)==='NsVmQ')return _0x1a6d7f(0x3ad);else{if(Game_Action['OTB_CONVERT_AGI_BUFF_CURRENT_TURN'])_0x2458ec-=0x1;}}if(_0x1130b3['code']===Game_Action['EFFECT_ADD_DEBUFF']&&_0x1130b3['dataId']===0x6){if(Game_Action['OTB_CONVERT_AGI_DEBUFF_CURRENT_TURN'])_0x2458ec+=0x1;}}return _0x2458ec;},Game_Action['prototype'][_0x351c11(0x27d)]=function(_0x3b541d){const _0x365fb7=_0x351c11;if(!SceneManager['isSceneBattle']())return 0x0;if(!BattleManager[_0x365fb7(0x1dc)]())return 0x0;if(!this[_0x365fb7(0x2cc)]())return 0x0;if(!_0x3b541d)return 0x0;if(!_0x3b541d['canChangeOtbTurnOrder']())return 0x0;const _0x19464c=VisuMZ[_0x365fb7(0x3f0)]['RegExp'],_0x563453=this[_0x365fb7(0x2cc)]()['note'],_0x20dd19=BattleManager[_0x365fb7(0x370)]||[];let _0x148923=0x0;if(_0x563453[_0x365fb7(0x298)](_0x19464c[_0x365fb7(0x21b)])){if('mIKGG'!==_0x365fb7(0x213)){if(!this['isOTB']())return;const _0x2d8941=_0x2fad65[_0x365fb7(0x330)][_0x365fb7(0x35c)];if(!_0x2d8941)return;_0x2d8941['createNewTurnOrderSprites']();}else{if(_0x20dd19['includes'](_0x3b541d)){if(_0x365fb7(0x320)===_0x365fb7(0x2d9)){if(!_0x2377fb)return;const _0x5f0d11=_0x5eb673?this['_otb_actionBattlersNext']:this['_actionBattlers'];if(!_0x5f0d11)return;if(!_0x5f0d11[_0x365fb7(0x202)](_0x5415d3))return;const _0x54ef15=_0x183abb[_0x365fb7(0x3f0)]['GetAllIndicies'](_0x4e8b71,_0x5f0d11),_0x1e0646=_0x266347?_0x30823f[_0x365fb7(0x3f0)]['getInfinityClamp'](_0x5f0d11):0x0,_0x26842d=_0x54ef15[_0x365fb7(0x234)]-0x1;for(let _0x1267bb=_0x26842d;_0x1267bb>=0x0;_0x1267bb--){_0x5f0d11[_0x365fb7(0x434)](_0x54ef15[_0x1267bb],0x1);}for(var _0x2a393a=0x0;_0x2a393a<_0x54ef15[_0x365fb7(0x234)];_0x2a393a++){var _0x2e1e6c=(_0x54ef15[_0x2a393a]-_0x46a474)['clamp'](_0x1e0646,_0x5f0d11[_0x365fb7(0x234)]);_0x5f0d11['splice'](_0x2e1e6c,0x0,_0x3add68);}this[_0x365fb7(0x415)](),this['refreshTurnOrder']();}else _0x148923+=Number(RegExp['$1']);}}}_0x563453['match'](_0x19464c[_0x365fb7(0x1fc)])&&(_0x148923+=Number(RegExp['$1']));const _0x2888c6=this[_0x365fb7(0x2cc)]()[_0x365fb7(0x1f8)];for(const _0x3ae714 of _0x2888c6){if(!_0x3ae714)continue;if(_0x3ae714[_0x365fb7(0x401)]===Game_Action[_0x365fb7(0x38d)]&&_0x3ae714[_0x365fb7(0x2d1)]===0x6){if(Game_Action[_0x365fb7(0x246)])_0x148923-=0x1;}if(_0x3ae714[_0x365fb7(0x401)]===Game_Action[_0x365fb7(0x3c1)]&&_0x3ae714['dataId']===0x6){if(_0x365fb7(0x309)===_0x365fb7(0x3a1))_0x174164[_0x365fb7(0x1d8)](this,_0x5e73f3,_0xffb4b8[_0x365fb7(0x21a)]),_0xb22074[_0x365fb7(0x1d8)](this,_0x4df1a5,_0xf62ed3[_0x365fb7(0x370)]);else{if(Game_Action[_0x365fb7(0x343)])_0x148923+=0x1;}}}return _0x148923;},Game_BattlerBase[_0x351c11(0x19c)][_0x351c11(0x3c5)]=function(){const _0x32f9c5=_0x351c11;delete this[_0x32f9c5(0x271)],delete this['_otbTurnOrderFaceName'],delete this['_otbTurnOrderFaceIndex'],delete this[_0x32f9c5(0x296)];},Game_BattlerBase['prototype'][_0x351c11(0x405)]=function(){const _0x41ba6c=_0x351c11;return this[_0x41ba6c(0x271)]===undefined&&(this[_0x41ba6c(0x271)]=this[_0x41ba6c(0x21c)]()),this[_0x41ba6c(0x271)];},Game_BattlerBase[_0x351c11(0x19c)]['createTurnOrderOTBGraphicType']=function(){return Window_OTB_TurnOrder['Settings']['EnemyBattlerType'];},Game_BattlerBase['prototype'][_0x351c11(0x36f)]=function(){const _0x4080f1=_0x351c11;return this[_0x4080f1(0x33a)]===undefined&&(this[_0x4080f1(0x33a)]=this[_0x4080f1(0x2e3)]()),this[_0x4080f1(0x33a)];},Game_BattlerBase[_0x351c11(0x19c)][_0x351c11(0x2e3)]=function(){const _0x1b25ac=_0x351c11;return Window_OTB_TurnOrder[_0x1b25ac(0x402)][_0x1b25ac(0x1d3)];},Game_BattlerBase['prototype'][_0x351c11(0x287)]=function(){const _0x293e81=_0x351c11;return this[_0x293e81(0x231)]===undefined&&(this[_0x293e81(0x231)]=this['createTurnOrderOTBGraphicFaceIndex']()),this[_0x293e81(0x231)];},Game_BattlerBase[_0x351c11(0x19c)]['createTurnOrderOTBGraphicFaceIndex']=function(){const _0x23dee5=_0x351c11;return Window_OTB_TurnOrder[_0x23dee5(0x402)][_0x23dee5(0x34c)];},Game_BattlerBase[_0x351c11(0x19c)][_0x351c11(0x424)]=function(){const _0x5cc85c=_0x351c11;return this[_0x5cc85c(0x296)]===undefined&&(this['_otbTurnOrderIconIndex']=this[_0x5cc85c(0x384)]()),this[_0x5cc85c(0x296)];},Game_BattlerBase[_0x351c11(0x19c)][_0x351c11(0x384)]=function(){const _0x3f7033=_0x351c11;return Window_OTB_TurnOrder[_0x3f7033(0x402)]['EnemyBattlerIcon'];},Game_BattlerBase[_0x351c11(0x19c)][_0x351c11(0x267)]=function(_0x58cad1){const _0x5cc5e4=_0x351c11;this[_0x5cc5e4(0x296)]=_0x58cad1;},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1b4)]=Game_BattlerBase['prototype'][_0x351c11(0x247)],Game_BattlerBase['prototype']['hide']=function(){const _0x40e3d7=_0x351c11;VisuMZ['BattleSystemOTB'][_0x40e3d7(0x1b4)][_0x40e3d7(0x1e4)](this),BattleManager['removeActionBattlersOTB']();},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x404)]=Game_BattlerBase[_0x351c11(0x19c)][_0x351c11(0x277)],Game_BattlerBase[_0x351c11(0x19c)]['appear']=function(){const _0x4778cd=_0x351c11,_0x51833b=this[_0x4778cd(0x38f)];VisuMZ[_0x4778cd(0x3f0)]['Game_BattlerBase_appear'][_0x4778cd(0x1e4)](this),BattleManager[_0x4778cd(0x1dc)]()&&SceneManager[_0x4778cd(0x407)]()&&_0x51833b&&!this['_hidden']&&BattleManager[_0x4778cd(0x2fb)](this);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1aa)]=Game_Battler['prototype']['performCollapse'],Game_Battler['prototype'][_0x351c11(0x2b9)]=function(){const _0x4e3989=_0x351c11;VisuMZ['BattleSystemOTB']['Game_Battler_performCollapse'][_0x4e3989(0x1e4)](this),BattleManager[_0x4e3989(0x415)]();},Game_Battler[_0x351c11(0x29f)]=VisuMZ['BattleSystemOTB'][_0x351c11(0x402)]['Mechanics'][_0x351c11(0x242)],VisuMZ['BattleSystemOTB'][_0x351c11(0x248)]=Game_Battler['prototype'][_0x351c11(0x286)],Game_Battler[_0x351c11(0x19c)][_0x351c11(0x286)]=function(_0xf8cf83){const _0x192500=_0x351c11;VisuMZ[_0x192500(0x3f0)][_0x192500(0x248)][_0x192500(0x1e4)](this,_0xf8cf83),this['onBattleStartOTB'](_0xf8cf83);},Game_Battler[_0x351c11(0x19c)]['onBattleStartOTB']=function(_0x5e6086){const _0x2ecb78=_0x351c11;if(!BattleManager[_0x2ecb78(0x1dc)]())return;this[_0x2ecb78(0x208)]=0x0;},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1da)]=Game_Battler[_0x351c11(0x19c)][_0x351c11(0x2f5)],Game_Battler[_0x351c11(0x19c)][_0x351c11(0x2f5)]=function(){const _0x3749ff=_0x351c11;VisuMZ[_0x3749ff(0x3f0)][_0x3749ff(0x1da)][_0x3749ff(0x1e4)](this),this[_0x3749ff(0x19d)]();},Game_Battler[_0x351c11(0x19c)][_0x351c11(0x19d)]=function(){const _0x39ada9=_0x351c11;if(!BattleManager['isOTB']())return;this[_0x39ada9(0x208)]=0x0;},Game_Battler[_0x351c11(0x19c)]['performActionEndOTB']=function(){const _0x9f1ac0=_0x351c11;if(!BattleManager['isOTB']())return;this[_0x9f1ac0(0x208)]=this['_otbTimesActedThisTurn']||0x0,this[_0x9f1ac0(0x208)]++;if(this[_0x9f1ac0(0x1c1)]()>0x0&&this===BattleManager[_0x9f1ac0(0x3f3)]){if(_0x9f1ac0(0x3d8)!==_0x9f1ac0(0x3d8)){const _0x432c4c=_0x38ff96['Settings'];this[_0x9f1ac0(0x3bc)]=new _0x2c3ed5(),this[_0x9f1ac0(0x323)](this[_0x9f1ac0(0x3bc)]),this[_0x9f1ac0(0x3f3)]=null,this[_0x9f1ac0(0x1f7)]=[],this[_0x9f1ac0(0x29d)]=[],this['_previewContainer']=new _0x1dcf34(),this['_previewContainer']['x']=_0x432c4c[_0x9f1ac0(0x222)],this[_0x9f1ac0(0x3c6)]['y']=_0x432c4c[_0x9f1ac0(0x19b)],this[_0x9f1ac0(0x3c6)]['x']-=_0x3f5404[_0x9f1ac0(0x421)](_0x432c4c['SpriteThin']*0.5*_0x432c4c[_0x9f1ac0(0x299)]),_0x432c4c['OrderDirection']&&(this['_previewContainer']['x']+=_0x432c4c['SpriteThin']),this['_previewContainer']['y']-=_0x199496[_0x9f1ac0(0x421)](_0x432c4c[_0x9f1ac0(0x3c7)]*0.5*_0x432c4c[_0x9f1ac0(0x299)]),this[_0x9f1ac0(0x323)](this[_0x9f1ac0(0x3c6)]),this[_0x9f1ac0(0x293)]=[],this[_0x9f1ac0(0x1d4)]=[];}else{const _0x194611=BattleManager[_0x9f1ac0(0x3b2)];if(_0x194611[_0x9f1ac0(0x234)]>0x0&&_0x194611[0x0]!==this){if(_0x9f1ac0(0x20b)===_0x9f1ac0(0x20b))return;else{const _0x1162d4=_0x950f28;this[_0x9f1ac0(0x350)](_0x3e0ae8,_0x1162d4,this[_0x9f1ac0(0x370)]);}}const _0x13e7bd=this['battler']();if(_0x13e7bd&&BattleManager[_0x9f1ac0(0x2a3)](this))_0x13e7bd[_0x9f1ac0(0x2a2)]();}}},BattleManager[_0x351c11(0x2a3)]=function(_0x43a232){const _0x22c95a=_0x351c11;if(!_0x43a232)return![];return this[_0x22c95a(0x21a)][0x0]===_0x43a232;},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x24c)]=Game_Battler['prototype'][_0x351c11(0x262)],Game_Battler[_0x351c11(0x19c)][_0x351c11(0x262)]=function(){const _0x33e37d=_0x351c11;VisuMZ['BattleSystemOTB'][_0x33e37d(0x24c)][_0x33e37d(0x1e4)](this),this['onTurnEndOTB']();},Game_Battler[_0x351c11(0x19c)][_0x351c11(0x239)]=function(){const _0x577cd9=_0x351c11;if(!BattleManager[_0x577cd9(0x1dc)]())return;this[_0x577cd9(0x208)]=0x0;},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x3bb)]=Game_Battler[_0x351c11(0x19c)][_0x351c11(0x200)],Game_Battler[_0x351c11(0x19c)]['makeSpeed']=function(){const _0x3a5079=_0x351c11;BattleManager[_0x3a5079(0x1dc)]()?this[_0x3a5079(0x3e4)]():VisuMZ['BattleSystemOTB'][_0x3a5079(0x3bb)]['call'](this);},Game_Battler[_0x351c11(0x19c)][_0x351c11(0x3e4)]=function(){const _0x3635a2=_0x351c11;if(this[_0x3635a2(0x20c)]())_0x3635a2(0x199)!=='RliUk'?(this['createTurnOrderSprites'](_0x451cda[_0x3635a2(0x21a)],!![]),this[_0x3635a2(0x23a)](_0x1c4db7['_otb_actionBattlersNext'],!![]),this[_0x3635a2(0x238)](_0x28aaca['_subject'],!![]),this[_0x3635a2(0x395)]()):this[_0x3635a2(0x32d)]=Infinity;else{const _0x2533a9=this[_0x3635a2(0x2f2)]()||new Game_Action(this);this[_0x3635a2(0x32d)]=VisuMZ[_0x3635a2(0x3f0)][_0x3635a2(0x402)][_0x3635a2(0x3ab)]['InitialSpeedJS']['call'](_0x2533a9);}},Game_Battler[_0x351c11(0x19c)][_0x351c11(0x20c)]=function(){const _0x2dc83a=_0x351c11;if(!Game_Battler['OTB_STUN_INFINITY_SPEED'])return![];if(!this['isAlive']())return![];if(!this[_0x2dc83a(0x3d1)]())return![];if(this[_0x2dc83a(0x2f8)]())return![];const _0x49d75b=JsonEx['makeDeepCopy'](this);return _0x49d75b[_0x2dc83a(0x3f4)]=!![],_0x49d75b[_0x2dc83a(0x1e9)]=!![],_0x49d75b[_0x2dc83a(0x203)](),_0x49d75b[_0x2dc83a(0x362)](0x1),_0x49d75b[_0x2dc83a(0x362)](0x2),_0x49d75b[_0x2dc83a(0x210)](),_0x49d75b[_0x2dc83a(0x2f8)]();},VisuMZ[_0x351c11(0x3f0)]['Game_Action_allowRandomSpeed']=Game_Action[_0x351c11(0x19c)]['allowRandomSpeed'],Game_Action[_0x351c11(0x19c)][_0x351c11(0x3e5)]=function(){const _0x46f7ec=_0x351c11;if(BattleManager[_0x46f7ec(0x1dc)]()){if(_0x46f7ec(0x285)===_0x46f7ec(0x420))_0x4e6dbe[_0x46f7ec(0x3f0)][_0x46f7ec(0x33e)][_0x46f7ec(0x1e4)](this),_0x122e6b[_0x46f7ec(0x1dc)]()&&this[_0x46f7ec(0x3e8)]();else return VisuMZ['BattleSystemOTB']['Settings']['Mechanics'][_0x46f7ec(0x19a)];}else{if('BMLOS'===_0x46f7ec(0x3c3)){const _0x2e9f82=this[_0x46f7ec(0x3b6)]+_0x1784b1[_0x46f7ec(0x2a1)],_0xca543b=_0x2b76cd+_0x1669b6[_0x46f7ec(0x1cf)],_0x1da398=this[_0x46f7ec(0x1bc)];this['drawText'](_0x6726ad[_0x46f7ec(0x364)],_0x2e9f82,_0xca543b,_0x1da398,_0x20e29a);}else return VisuMZ[_0x46f7ec(0x3f0)]['Game_Action_allowRandomSpeed']['call'](this);}},Game_Battler[_0x351c11(0x19c)][_0x351c11(0x1c9)]=function(_0x58bd75){const _0x172ccb=_0x351c11;if(!this[_0x172ccb(0x2f8)]())return;this[_0x172ccb(0x208)]=this[_0x172ccb(0x208)]||0x0,this['_otbTimesActedThisTurn']--,BattleManager[_0x172ccb(0x409)](this,_0x58bd75,BattleManager[_0x172ccb(0x21a)]);},Game_Battler[_0x351c11(0x19c)][_0x351c11(0x20f)]=function(_0x4782fb,_0x316dcd){const _0x5b20b8=_0x351c11;if(!this[_0x5b20b8(0x2f8)]())return;if(_0x316dcd)BattleManager['otbAddBattlerToTurnOrderAtEnd'](this,_0x4782fb,BattleManager[_0x5b20b8(0x21a)]);else{if(_0x5b20b8(0x2fc)===_0x5b20b8(0x2fc))BattleManager[_0x5b20b8(0x1d8)](this,_0x4782fb,BattleManager[_0x5b20b8(0x370)]);else{let _0x586246=_0x184802;_0x538c9c[_0x5b20b8(0x28e)]&&(_0x586246=_0x47d81c['randomInt'](_0x545d30[_0x5b20b8(0x234)]-_0x374af2)+_0x1d984a),_0x21c969[_0x5b20b8(0x434)](_0x586246,0x0,_0x5db217);}}},Game_Battler[_0x351c11(0x19c)][_0x351c11(0x224)]=function(){const _0x2f29d9=_0x351c11;if(this[_0x2f29d9(0x2ea)]()===Infinity)return![];return!![];},Game_Battler['prototype']['otbProcessActionCheck']=function(_0x505c57,_0x2ebc90){const _0x63bd6e=_0x351c11;if(this[_0x63bd6e(0x1e9)]||this[_0x63bd6e(0x3f4)])return;if(!SceneManager[_0x63bd6e(0x407)]())return;if(!BattleManager[_0x63bd6e(0x1dc)]())return;if(_0x505c57&&!this['canMove']())_0x63bd6e(0x1b0)==='ELjcK'?BattleManager[_0x63bd6e(0x415)]():this[_0x63bd6e(0x33a)]=this['createTurnOrderOTBGraphicFaceName']();else!_0x505c57&&this[_0x63bd6e(0x2f8)]()&&BattleManager[_0x63bd6e(0x2fb)](this);if(this[_0x63bd6e(0x2f8)]()){const _0x273a0c=this[_0x63bd6e(0x39b)]()-_0x2ebc90;if(_0x273a0c>0x0){if(_0x63bd6e(0x3b9)!=='FXOCh')BattleManager[_0x63bd6e(0x1d8)](this,_0x273a0c,BattleManager[_0x63bd6e(0x21a)]),BattleManager['otbAddBattlerToTurnOrderAtEnd'](this,_0x273a0c,BattleManager['_otb_actionBattlersNext']);else{if(!this['canMove']())return;this[_0x63bd6e(0x208)]=this[_0x63bd6e(0x208)]||0x0,this[_0x63bd6e(0x208)]--,_0x1c4649[_0x63bd6e(0x409)](this,_0x1d9ece,_0x11b081['_actionBattlers']);}}}},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x2b0)]=Game_Battler[_0x351c11(0x19c)]['addState'],Game_Battler[_0x351c11(0x19c)][_0x351c11(0x284)]=function(_0x5e507d){const _0x5800bf=_0x351c11,_0xefb8b8=this[_0x5800bf(0x2f8)](),_0x2e5b3d=this[_0x5800bf(0x39b)]();VisuMZ[_0x5800bf(0x3f0)][_0x5800bf(0x2b0)]['call'](this,_0x5e507d),this[_0x5800bf(0x2d2)](_0xefb8b8,_0x2e5b3d);},VisuMZ['BattleSystemOTB'][_0x351c11(0x272)]=Game_Battler[_0x351c11(0x19c)][_0x351c11(0x28d)],Game_Battler[_0x351c11(0x19c)][_0x351c11(0x28d)]=function(_0x4b2efb){const _0x49b503=_0x351c11,_0x4b7e84=this[_0x49b503(0x2f8)](),_0x194c7c=this[_0x49b503(0x39b)]();VisuMZ[_0x49b503(0x3f0)][_0x49b503(0x272)]['call'](this,_0x4b2efb),this['otbProcessActionCheck'](_0x4b7e84,_0x194c7c);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x392)]=Game_BattlerBase[_0x351c11(0x19c)][_0x351c11(0x3c0)],Game_BattlerBase[_0x351c11(0x19c)][_0x351c11(0x3c0)]=function(){const _0x427393=_0x351c11;if(BattleManager[_0x427393(0x1dc)]())this['removeState'](this[_0x427393(0x3fb)]());VisuMZ[_0x427393(0x3f0)][_0x427393(0x392)][_0x427393(0x1e4)](this);if(BattleManager[_0x427393(0x1dc)]())this['refresh']();},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1ff)]=Game_Battler['prototype'][_0x351c11(0x1db)],Game_Battler['prototype'][_0x351c11(0x1db)]=function(_0x4fcef2,_0x2bcba6){const _0x5e91fe=_0x351c11;if(BattleManager['isOTB']())this[_0x5e91fe(0x1ef)](_0x4fcef2,_0x2bcba6);else{if(_0x5e91fe(0x311)!==_0x5e91fe(0x237))VisuMZ[_0x5e91fe(0x3f0)][_0x5e91fe(0x1ff)][_0x5e91fe(0x1e4)](this,_0x4fcef2,_0x2bcba6);else{const _0x224833=this[_0x5e91fe(0x19f)]()[_0x5e91fe(0x27a)];if(_0x224833['match'](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x5e91fe(0x1de);else{if(_0x224833['match'](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return _0x5e91fe(0x3ad);}return _0x394893[_0x5e91fe(0x402)][_0x5e91fe(0x197)];}}},Game_Battler[_0x351c11(0x19c)]['forceActionOTB']=function(_0x7978d6,_0x602a80){const _0x5c31fe=_0x351c11,_0x38e0d7=new Game_Action(this,!![]);_0x38e0d7['setSkill'](_0x7978d6),_0x38e0d7[_0x5c31fe(0x40c)]=!![];if(_0x602a80===-0x2)_0x38e0d7[_0x5c31fe(0x379)](this['_lastTargetIndex']);else _0x602a80===-0x1?_0x5c31fe(0x312)!=='GXKXm'?_0x442db9[_0x5c31fe(0x3b0)]=_0xce9219['round']((_0x71ea8d[_0x5c31fe(0x3b4)]-_0x17d58c['min'](_0x2a197c[_0x5c31fe(0x215)],_0x1c59db[_0x5c31fe(0x3b4)]))/0x2):_0x38e0d7['decideRandomTarget']():'sONfE'===_0x5c31fe(0x2d5)?_0x1e233=_0x14c6dd[_0x5c31fe(0x2d4)](0x0,_0x5ee694[_0x5c31fe(0x3f0)]['getInfinityClamp'](_0x34357b)):_0x38e0d7[_0x5c31fe(0x379)](_0x602a80);const _0x1c955e=this[_0x5c31fe(0x2e8)][_0x5c31fe(0x317)](_0x1242d3=>_0x1242d3[_0x5c31fe(0x40c)])+0x1;this[_0x5c31fe(0x2e8)][_0x5c31fe(0x434)](_0x1c955e,0x0,_0x38e0d7);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x22e)]=BattleManager['forceAction'],BattleManager[_0x351c11(0x1db)]=function(_0x53b793){const _0x4752a6=_0x351c11;BattleManager['isOTB']()?this['forceActionOTB'](_0x53b793):VisuMZ[_0x4752a6(0x3f0)]['BattleManager_forceAction'][_0x4752a6(0x1e4)](this,_0x53b793);},BattleManager[_0x351c11(0x1ef)]=function(_0x400294){const _0x1a0879=_0x351c11;BattleManager[_0x1a0879(0x26c)](_0x400294);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x393)]=Game_Actor['prototype'][_0x351c11(0x2b3)],Game_Actor['prototype'][_0x351c11(0x2b3)]=function(){const _0x4d47b4=_0x351c11;if(BattleManager[_0x4d47b4(0x1dc)]()){if(this[_0x4d47b4(0x39c)]())this[_0x4d47b4(0x39c)]()[_0x4d47b4(0x2a2)]();return![];}return VisuMZ[_0x4d47b4(0x3f0)][_0x4d47b4(0x393)]['call'](this);},Game_Actor[_0x351c11(0x19c)][_0x351c11(0x21c)]=function(){const _0x26c20b=_0x351c11,_0x39f1b3=this[_0x26c20b(0x232)]()['note'];if(_0x39f1b3[_0x26c20b(0x298)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)){if(_0x26c20b(0x338)===_0x26c20b(0x282)){const _0xe3186b=this[_0x26c20b(0x2cc)](),_0x42167a=_0x10cb08['inputtingAction']();if(_0x42167a)_0x42167a[_0x26c20b(0x43c)](_0xe3186b?_0xe3186b['id']:null);_0x486077[_0x26c20b(0x19c)]['applyBattleItemWindowOTB'][_0x26c20b(0x1e4)](this);}else return _0x26c20b(0x1de);}else{if(_0x39f1b3[_0x26c20b(0x298)](/<OTB TURN ORDER ICON:[ ](\d+)>/i)){if('SJaeY'!==_0x26c20b(0x2fa))_0x1ceaec['otbAddBattlerToTurnOrderAtEnd'](this,_0x344c2f,_0x5d8eee[_0x26c20b(0x370)]);else return _0x26c20b(0x3ad);}}return Window_OTB_TurnOrder[_0x26c20b(0x402)]['ActorBattlerType'];},Game_Actor[_0x351c11(0x19c)]['createTurnOrderOTBGraphicFaceName']=function(){const _0x560ae0=_0x351c11,_0x117aa7=this[_0x560ae0(0x232)]()[_0x560ae0(0x27a)];if(_0x117aa7[_0x560ae0(0x298)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0x560ae0(0x1a6)]();},Game_Actor[_0x351c11(0x19c)][_0x351c11(0x23e)]=function(){const _0x5be3d5=_0x351c11,_0x244ecc=this['actor']()[_0x5be3d5(0x27a)];if(_0x244ecc[_0x5be3d5(0x298)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x5be3d5(0x3eb)]();},Game_Actor['prototype'][_0x351c11(0x384)]=function(){const _0x3e4cbf=_0x351c11,_0x50fe6d=this[_0x3e4cbf(0x232)]()[_0x3e4cbf(0x27a)];if(_0x50fe6d[_0x3e4cbf(0x298)](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_OTB_TurnOrder[_0x3e4cbf(0x402)][_0x3e4cbf(0x1b3)];},Game_Enemy[_0x351c11(0x19c)]['createTurnOrderOTBGraphicType']=function(){const _0x42569f=_0x351c11,_0x4eba07=this[_0x42569f(0x19f)]()[_0x42569f(0x27a)];if(_0x4eba07[_0x42569f(0x298)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return'face';else{if(_0x4eba07[_0x42569f(0x298)](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return'icon';}return Window_OTB_TurnOrder[_0x42569f(0x402)]['EnemyBattlerType'];},Game_Enemy['prototype'][_0x351c11(0x2e3)]=function(){const _0x3a4cf7=_0x351c11,_0x58f14a=this[_0x3a4cf7(0x19f)]()['note'];if(_0x58f14a[_0x3a4cf7(0x298)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Window_OTB_TurnOrder[_0x3a4cf7(0x402)][_0x3a4cf7(0x1d3)];},Game_Enemy[_0x351c11(0x19c)][_0x351c11(0x23e)]=function(){const _0x193524=_0x351c11,_0x2fca48=this[_0x193524(0x19f)]()['note'];if(_0x2fca48[_0x193524(0x298)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Window_OTB_TurnOrder[_0x193524(0x402)][_0x193524(0x34c)];},Game_Enemy['prototype'][_0x351c11(0x384)]=function(){const _0x2a11e8=_0x351c11,_0x287a3f=this[_0x2a11e8(0x19f)]()['note'];if(_0x287a3f[_0x2a11e8(0x298)](/<OTB TURN ORDER ICON:[ ](\d+)>/i)){if('jxrhn'===_0x2a11e8(0x36b))return Number(RegExp['$1']);else this[_0x2a11e8(0x1ef)](_0x5f2315);}return Window_OTB_TurnOrder[_0x2a11e8(0x402)][_0x2a11e8(0x332)];},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1ec)]=Game_Party[_0x351c11(0x19c)][_0x351c11(0x259)],Game_Party[_0x351c11(0x19c)][_0x351c11(0x259)]=function(_0x49f824){const _0x1e9375=_0x351c11;VisuMZ[_0x1e9375(0x3f0)]['Game_Party_addActor'][_0x1e9375(0x1e4)](this,_0x49f824);if(Imported[_0x1e9375(0x3f8)])return;SceneManager[_0x1e9375(0x407)]()&&BattleManager[_0x1e9375(0x1dc)]()&&(_0x1e9375(0x29a)!==_0x1e9375(0x29a)?(_0x7ba031[_0x1e9375(0x3f0)][_0x1e9375(0x3ae)]['call'](this),this[_0x1e9375(0x3a3)]()):(BattleManager[_0x1e9375(0x415)](),BattleManager[_0x1e9375(0x2fb)]($gameActors[_0x1e9375(0x232)](_0x49f824))));},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x2c2)]=Game_Party[_0x351c11(0x19c)]['removeActor'],Game_Party['prototype'][_0x351c11(0x410)]=function(_0x2a22de){const _0x5f20de=_0x351c11;VisuMZ[_0x5f20de(0x3f0)][_0x5f20de(0x2c2)][_0x5f20de(0x1e4)](this,_0x2a22de),SceneManager[_0x5f20de(0x407)]()&&BattleManager[_0x5f20de(0x1dc)]()&&(_0x5f20de(0x30e)!==_0x5f20de(0x3fc)?BattleManager[_0x5f20de(0x415)]():this['otbShiftTurnOrderForSubject'](this[_0x5f20de(0x3f3)]));},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x33e)]=Scene_Battle['prototype'][_0x351c11(0x354)],Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x354)]=function(){const _0x57a9d9=_0x351c11;VisuMZ[_0x57a9d9(0x3f0)]['Scene_Battle_createActorCommandWindow'][_0x57a9d9(0x1e4)](this),BattleManager[_0x57a9d9(0x1dc)]()&&this[_0x57a9d9(0x3e8)]();},Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x3e8)]=function(){const _0x87bf75=_0x351c11,_0x51e0d7=this[_0x87bf75(0x363)];this[_0x87bf75(0x243)]()&&delete _0x51e0d7[_0x87bf75(0x42a)][_0x87bf75(0x41b)];},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x43e)]=Scene_Battle[_0x351c11(0x19c)]['commandCancel'],Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x3e2)]=function(){const _0x161d62=_0x351c11;if(BattleManager[_0x161d62(0x1dc)]()){if('dktVW'!==_0x161d62(0x345))return this[_0x161d62(0x230)]();else this[_0x161d62(0x3a5)]();}else VisuMZ[_0x161d62(0x3f0)][_0x161d62(0x43e)][_0x161d62(0x1e4)](this);},Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x3a5)]=function(){const _0x34d4f5=_0x351c11;BattleManager[_0x34d4f5(0x1bd)](),this[_0x34d4f5(0x27f)]['setup'](),this['_actorCommandWindow'][_0x34d4f5(0x28a)]();},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1dd)]=Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x27c)],Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x27c)]=function(){const _0x14f373=_0x351c11;BattleManager[_0x14f373(0x1dc)]()?'KXagl'===_0x14f373(0x27e)?this['startActorCommandSelection']():_0x3578a1[_0x14f373(0x1dc)]()?this[_0x14f373(0x1ef)](_0x39883f):_0x15cbf2[_0x14f373(0x3f0)][_0x14f373(0x22e)][_0x14f373(0x1e4)](this,_0x13a72b):VisuMZ[_0x14f373(0x3f0)][_0x14f373(0x1dd)][_0x14f373(0x1e4)](this);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x3ae)]=Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x204)],Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x204)]=function(){const _0x1b0455=_0x351c11;VisuMZ[_0x1b0455(0x3f0)][_0x1b0455(0x3ae)][_0x1b0455(0x1e4)](this),this[_0x1b0455(0x3a3)]();},Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x3a3)]=function(){const _0xef20aa=_0x351c11;if(!BattleManager[_0xef20aa(0x1dc)]())return;this['_otbTurnOrderWindow']=new Window_OTB_TurnOrder();const _0x27138b=this[_0xef20aa(0x333)](this[_0xef20aa(0x303)]);this[_0xef20aa(0x3f6)](this[_0xef20aa(0x35c)],_0x27138b),this[_0xef20aa(0x42b)]();if(SceneManager[_0xef20aa(0x25b)]()){if(_0xef20aa(0x398)===_0xef20aa(0x398))this[_0xef20aa(0x35c)][_0xef20aa(0x3bd)]();else{const _0x2aef9d=_0x244a79[_0xef20aa(0x402)];this[_0xef20aa(0x1c0)]=_0x2aef9d[_0xef20aa(0x22b)],this['_positionTargetX']=_0x468ad4,this[_0xef20aa(0x426)]=_0x3d8ea1;}}},Scene_Battle[_0x351c11(0x19c)]['repositionLogWindowOTB']=function(){const _0x436921=_0x351c11,_0x224792=Window_OTB_TurnOrder[_0x436921(0x402)];if(_0x224792['DisplayPosition']!==_0x436921(0x2ed))return;if(!_0x224792[_0x436921(0x3ec)])return;if(!this['_logWindow'])return;const _0x180c49=this[_0x436921(0x35c)]['y']-Math[_0x436921(0x438)]((Graphics[_0x436921(0x3b4)]-Graphics[_0x436921(0x215)])/0x2),_0x535a6c=_0x180c49+this[_0x436921(0x35c)][_0x436921(0x3b4)];this[_0x436921(0x1f6)]['y']=_0x535a6c+(_0x224792[_0x436921(0x348)]||0x0);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x226)]=Scene_Battle['prototype'][_0x351c11(0x3b8)],Scene_Battle['prototype'][_0x351c11(0x3b8)]=function(){const _0x4726b4=_0x351c11;BattleManager[_0x4726b4(0x1bd)](),VisuMZ['BattleSystemOTB']['Scene_Battle_commandAttack']['call'](this);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x1a7)]=Scene_Battle['prototype'][_0x351c11(0x2d7)],Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x2d7)]=function(){const _0x442eb9=_0x351c11;BattleManager['otbPreviewOrderClear'](),VisuMZ[_0x442eb9(0x3f0)][_0x442eb9(0x1a7)]['call'](this);},VisuMZ['BattleSystemOTB'][_0x351c11(0x2a4)]=Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x37e)],Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x37e)]=function(){const _0x2a53ab=_0x351c11;BattleManager['otbPreviewOrderClear'](),VisuMZ[_0x2a53ab(0x3f0)][_0x2a53ab(0x2a4)][_0x2a53ab(0x1e4)](this);},VisuMZ[_0x351c11(0x3f0)]['Scene_Battle_onActorCancel']=Scene_Battle[_0x351c11(0x19c)]['onActorCancel'],Scene_Battle['prototype'][_0x351c11(0x205)]=function(){const _0x1ebd1e=_0x351c11;BattleManager[_0x1ebd1e(0x1bd)](),VisuMZ['BattleSystemOTB'][_0x1ebd1e(0x1d0)]['call'](this);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x26b)]=Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x2bf)],Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x2bf)]=function(){const _0x50a1ed=_0x351c11;BattleManager[_0x50a1ed(0x1bd)](),VisuMZ[_0x50a1ed(0x3f0)][_0x50a1ed(0x26b)][_0x50a1ed(0x1e4)](this);},VisuMZ[_0x351c11(0x3f0)]['Scene_Battle_onEnemyCancel']=Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x2e5)],Scene_Battle[_0x351c11(0x19c)]['onEnemyCancel']=function(){const _0x1a9d72=_0x351c11;BattleManager['otbPreviewOrderClear'](),VisuMZ['BattleSystemOTB'][_0x1a9d72(0x1fe)][_0x1a9d72(0x1e4)](this);},VisuMZ['BattleSystemOTB']['Scene_Battle_onSkillOk']=Scene_Battle[_0x351c11(0x19c)]['onSkillOk'],Scene_Battle[_0x351c11(0x19c)]['onSkillOk']=function(){const _0x236952=_0x351c11;BattleManager['otbPreviewOrderClear'](),VisuMZ['BattleSystemOTB'][_0x236952(0x397)][_0x236952(0x1e4)](this);},VisuMZ[_0x351c11(0x3f0)]['Scene_Battle_onSkillCancel']=Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x3be)],Scene_Battle[_0x351c11(0x19c)]['onSkillCancel']=function(){const _0x371bd0=_0x351c11;BattleManager[_0x371bd0(0x1bd)](),VisuMZ[_0x371bd0(0x3f0)][_0x371bd0(0x3a8)]['call'](this);},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x385)]=Scene_Battle['prototype']['onItemOk'],Scene_Battle['prototype']['onItemOk']=function(){const _0x45a789=_0x351c11;BattleManager['otbPreviewOrderClear'](),VisuMZ[_0x45a789(0x3f0)][_0x45a789(0x385)]['call'](this);},VisuMZ[_0x351c11(0x3f0)]['Scene_Battle_onItemCancel']=Scene_Battle[_0x351c11(0x19c)][_0x351c11(0x2b8)],Scene_Battle['prototype'][_0x351c11(0x2b8)]=function(){const _0x1a2f90=_0x351c11;BattleManager['otbPreviewOrderClear'](),VisuMZ[_0x1a2f90(0x3f0)][_0x1a2f90(0x335)][_0x1a2f90(0x1e4)](this);},VisuMZ['BattleSystemOTB']['Scene_Battle_actorCommandSingleSkill']=Scene_Battle['prototype'][_0x351c11(0x2bb)],Scene_Battle['prototype'][_0x351c11(0x2bb)]=function(){const _0x25431c=_0x351c11;BattleManager[_0x25431c(0x1bd)](),VisuMZ[_0x25431c(0x3f0)]['Scene_Battle_actorCommandSingleSkill']['call'](this);};function Sprite_OTB_TurnOrder_Battler(){const _0x4cce7e=_0x351c11;this[_0x4cce7e(0x2c4)](...arguments);}Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)]=Object[_0x351c11(0x43f)](Sprite_Clickable[_0x351c11(0x19c)]),Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)]['constructor']=Sprite_OTB_TurnOrder_Battler,Sprite_OTB_TurnOrder_Battler['prototype'][_0x351c11(0x2c4)]=function(_0x2f3db0,_0x324477,_0x35ff95){const _0x4a9902=_0x351c11;this[_0x4a9902(0x316)](_0x2f3db0,_0x324477,_0x35ff95),Sprite_Clickable[_0x4a9902(0x19c)][_0x4a9902(0x2c4)][_0x4a9902(0x1e4)](this),this[_0x4a9902(0x328)]=0x0,this['createChildren'](),this[_0x4a9902(0x340)]();},Sprite_OTB_TurnOrder_Battler['prototype'][_0x351c11(0x316)]=function(_0x3739a2,_0x1160a8,_0x202298){const _0x581210=_0x351c11;this['_unit']=_0x3739a2[_0x581210(0x33f)]()?$gameParty:$gameTroop,this['_index']=_0x3739a2[_0x581210(0x31a)](),this[_0x581210(0x212)]=_0x1160a8,this[_0x581210(0x396)]=_0x202298;const _0xaac433=Window_OTB_TurnOrder[_0x581210(0x402)],_0x5e3c55=this[_0x581210(0x2ef)]();this[_0x581210(0x1c0)]=0x0,this[_0x581210(0x412)]=_0xaac433[_0x581210(0x2c1)]?-_0xaac433[_0x581210(0x2c5)]:this[_0x581210(0x3cb)]()['width'],this['_positionTargetY']=0x0,this['_fadeDuration']=0x0,this[_0x581210(0x2a5)]=0xff,this['_isAlive']=![],this[_0x581210(0x1f3)]=![],this['_containerWidth']=0x0,this['_containerHeight']=0x0;},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x297)]=function(){const _0x58364b=_0x351c11;this[_0x58364b(0x3d7)](),this['createBackgroundSprite'](),this['createGraphicSprite'](),this['createBorderSprite'](),this[_0x58364b(0x3b1)]();},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x3d7)]=function(){const _0x46562a=_0x351c11;this['x']=this[_0x46562a(0x412)],this['y']=this[_0x46562a(0x426)];},Sprite_OTB_TurnOrder_Battler['prototype'][_0x351c11(0x2ef)]=function(){return!![];},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)]['bitmapWidth']=function(){const _0x305ea2=_0x351c11,_0x432b9f=Window_OTB_TurnOrder[_0x305ea2(0x402)];return _0x432b9f['SpriteThin'];},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)]['bitmapHeight']=function(){const _0x2df4ac=_0x351c11,_0x39dc17=Window_OTB_TurnOrder[_0x2df4ac(0x402)];return _0x39dc17[_0x2df4ac(0x3c7)];},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x1f1)]=function(){const _0x288e9c=_0x351c11;return this[_0x288e9c(0x21f)]===$gameParty?'Actor':'Enemy';},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x25c)]=function(){const _0x176421=_0x351c11;if(!Window_OTB_TurnOrder[_0x176421(0x402)]['ShowMarkerBg'])return;const _0x4525de=Window_OTB_TurnOrder['Settings'],_0x737f1=this[_0x176421(0x1f1)](),_0x5b67a2=_0x176421(0x3e7)[_0x176421(0x433)](_0x737f1),_0x3f944c=new Sprite();_0x3f944c[_0x176421(0x306)]['x']=this[_0x176421(0x306)]['x'],_0x3f944c[_0x176421(0x306)]['y']=this[_0x176421(0x306)]['y'];if(_0x4525de[_0x5b67a2]){if(_0x176421(0x225)!==_0x176421(0x225))return 0x0;else _0x3f944c['bitmap']=ImageManager[_0x176421(0x3e3)](_0x4525de[_0x5b67a2]);}else{const _0x3ddbf8=this[_0x176421(0x256)](),_0xd8ea2f=this['bitmapHeight']();_0x3f944c['bitmap']=new Bitmap(_0x3ddbf8,_0xd8ea2f);const _0x2b8da5=ColorManager[_0x176421(0x38e)](_0x4525de['%1BgColor1'['format'](_0x737f1)]),_0x4413d9=ColorManager['getColor'](_0x4525de['%1BgColor2'['format'](_0x737f1)]);_0x3f944c[_0x176421(0x1e1)][_0x176421(0x2d3)](0x0,0x0,_0x3ddbf8,_0xd8ea2f,_0x2b8da5,_0x4413d9,!![]);}this[_0x176421(0x3ba)]=_0x3f944c,this[_0x176421(0x323)](this[_0x176421(0x3ba)]),this[_0x176421(0x3fd)]=this['_backgroundSprite']['width'],this[_0x176421(0x3b4)]=this[_0x176421(0x3ba)]['height'];},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x2af)]=function(){const _0x519ef0=_0x351c11,_0x2e982f=new Sprite();_0x2e982f[_0x519ef0(0x306)]['x']=this['anchor']['x'],_0x2e982f[_0x519ef0(0x306)]['y']=this[_0x519ef0(0x306)]['y'],this[_0x519ef0(0x223)]=_0x2e982f,this[_0x519ef0(0x323)](this[_0x519ef0(0x223)]),this[_0x519ef0(0x230)]();},Sprite_OTB_TurnOrder_Battler['prototype'][_0x351c11(0x3dc)]=function(){const _0x2c3040=_0x351c11;if(!Window_OTB_TurnOrder[_0x2c3040(0x402)][_0x2c3040(0x42c)])return;const _0x4894d8=Window_OTB_TurnOrder[_0x2c3040(0x402)],_0x70d8ac=this[_0x2c3040(0x1f1)](),_0x23418b=_0x2c3040(0x1d7)[_0x2c3040(0x433)](_0x70d8ac),_0x2bd45d=new Sprite();_0x2bd45d[_0x2c3040(0x306)]['x']=this[_0x2c3040(0x306)]['x'],_0x2bd45d[_0x2c3040(0x306)]['y']=this[_0x2c3040(0x306)]['y'];if(_0x4894d8[_0x23418b])_0x2c3040(0x25a)===_0x2c3040(0x23c)?this[_0x2c3040(0x270)]=!![]:_0x2bd45d[_0x2c3040(0x1e1)]=ImageManager[_0x2c3040(0x3e3)](_0x4894d8[_0x23418b]);else{if(_0x2c3040(0x276)===_0x2c3040(0x209)){if(this[_0x2c3040(0x1dc)]())return _0x2c3040(0x289);return _0x561c10[_0x2c3040(0x3f0)][_0x2c3040(0x34a)][_0x2c3040(0x1e4)](this);}else{let _0x262f34=this['bitmapWidth'](),_0x42b29d=this['bitmapHeight'](),_0x64f1d=this[_0x2c3040(0x41e)]();_0x2bd45d[_0x2c3040(0x1e1)]=new Bitmap(_0x262f34,_0x42b29d);const _0x232d2e=_0x2c3040(0x219),_0x227723=ColorManager[_0x2c3040(0x38e)](_0x4894d8[_0x2c3040(0x31f)[_0x2c3040(0x433)](_0x70d8ac)]);_0x2bd45d[_0x2c3040(0x1e1)][_0x2c3040(0x250)](0x0,0x0,_0x262f34,_0x42b29d,_0x232d2e),_0x262f34-=0x2,_0x42b29d-=0x2,_0x2bd45d[_0x2c3040(0x1e1)][_0x2c3040(0x250)](0x1,0x1,_0x262f34,_0x42b29d,_0x227723),_0x262f34-=_0x64f1d*0x2,_0x42b29d-=_0x64f1d*0x2,_0x2bd45d['bitmap'][_0x2c3040(0x250)](0x1+_0x64f1d,0x1+_0x64f1d,_0x262f34,_0x42b29d,_0x232d2e),_0x262f34-=0x2,_0x42b29d-=0x2,_0x64f1d+=0x1,_0x2bd45d['bitmap'][_0x2c3040(0x419)](0x1+_0x64f1d,0x1+_0x64f1d,_0x262f34,_0x42b29d);}}this[_0x2c3040(0x3ba)]=_0x2bd45d,this[_0x2c3040(0x323)](this[_0x2c3040(0x3ba)]);},Sprite_OTB_TurnOrder_Battler['prototype'][_0x351c11(0x41e)]=function(){const _0xec7c60=_0x351c11,_0x1e084d=Window_OTB_TurnOrder[_0xec7c60(0x402)];return _0x1e084d['BorderThickness'];},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x3b1)]=function(){const _0x217bc1=_0x351c11,_0x5cc498=Window_OTB_TurnOrder[_0x217bc1(0x402)];if(!_0x5cc498[_0x217bc1(0x265)])return;if(this['_unit']===$gameParty)return;const _0x50bb89=this[_0x217bc1(0x256)](),_0x4674ce=this[_0x217bc1(0x3f1)](),_0x2befd0=new Sprite();_0x2befd0['anchor']['x']=this[_0x217bc1(0x306)]['x'],_0x2befd0['anchor']['y']=this[_0x217bc1(0x306)]['y'],_0x2befd0[_0x217bc1(0x1e1)]=new Bitmap(_0x50bb89,_0x4674ce),this[_0x217bc1(0x3a4)]=_0x2befd0,this['addChild'](this[_0x217bc1(0x3a4)]);},Sprite_OTB_TurnOrder_Battler['prototype']['battler']=function(){const _0x15ef0e=_0x351c11;return this[_0x15ef0e(0x21f)]?this[_0x15ef0e(0x21f)][_0x15ef0e(0x217)]()[this[_0x15ef0e(0x1ca)]]:null;},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x386)]=function(){const _0x48cf51=_0x351c11;Sprite_Clickable[_0x48cf51(0x19c)][_0x48cf51(0x386)][_0x48cf51(0x1e4)](this),this['updatePosition'](),this[_0x48cf51(0x340)](),this['updateOpacity'](),this[_0x48cf51(0x211)](),this[_0x48cf51(0x1b1)](),this['updateLetter'](),this['updateSelectionEffect']();},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x2cb)]=function(_0x4eda87,_0x2f4cec){const _0x5664b6=_0x351c11,_0x511d53=Window_OTB_TurnOrder[_0x5664b6(0x402)];this[_0x5664b6(0x1c0)]=_0x511d53[_0x5664b6(0x22b)],this[_0x5664b6(0x412)]=_0x4eda87,this['_positionTargetY']=_0x2f4cec;},Sprite_OTB_TurnOrder_Battler['prototype'][_0x351c11(0x2cd)]=function(){const _0x21326b=_0x351c11;if(this[_0x21326b(0x1c0)]>0x0){if('fmpXy'==='fmpXy'){const _0x4a94ac=this[_0x21326b(0x1c0)];this['x']=(this['x']*(_0x4a94ac-0x1)+this[_0x21326b(0x412)])/_0x4a94ac,this['y']=(this['y']*(_0x4a94ac-0x1)+this[_0x21326b(0x426)])/_0x4a94ac,this[_0x21326b(0x1c0)]--;}else{if(_0x20944f[_0x21326b(0x343)])_0x14f794+=0x1;}}if(this[_0x21326b(0x1c0)]<=0x0){this['x']=this['_positionTargetX'],this['y']=this[_0x21326b(0x426)];if(this['opacity']<0xff&&!this[_0x21326b(0x229)]&&this['_fadeDuration']<=0x0){if(_0x21326b(0x337)!==_0x21326b(0x337))return _0x4570f4[_0x21326b(0x402)][_0x21326b(0x332)];else{const _0x229f99=this[_0x21326b(0x39c)]();_0x229f99&&(_0x21326b(0x3de)==='DnfSo'?this[_0x21326b(0x2a5)]=_0x229f99[_0x21326b(0x37d)]()&&_0x229f99[_0x21326b(0x3d1)]()?0xff:0x0:this[_0x21326b(0x3f3)][_0x21326b(0x26e)]());}}}},Sprite_OTB_TurnOrder_Battler['prototype'][_0x351c11(0x376)]=function(){return 0x1;},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x3cb)]=function(){const _0x505936=_0x351c11;return SceneManager[_0x505936(0x330)][_0x505936(0x35c)];},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x30d)]=function(){const _0x3cd7d9=_0x351c11,_0x516d66=this[_0x3cd7d9(0x39c)]();if(!_0x516d66)return this[_0x3cd7d9(0x376)]();if(_0x516d66===BattleManager[_0x3cd7d9(0x3f3)])return 0x0;if(BattleManager['_actionBattlers'][_0x3cd7d9(0x202)](_0x516d66)){const _0x11e2af=BattleManager[_0x3cd7d9(0x21a)][_0x3cd7d9(0x39e)](_0x516d66)+0x1;return _0x11e2af;}return this[_0x3cd7d9(0x376)]();},Sprite_OTB_TurnOrder_Battler['prototype'][_0x351c11(0x1c2)]=function(_0xbe5888){const _0xa33459=_0x351c11,_0x4d77ad=Window_OTB_TurnOrder[_0xa33459(0x402)];this[_0xa33459(0x1b8)]=_0x4d77ad['UpdateFrames'],this['_fadeTarget']=_0xbe5888;},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)]['checkOpacity']=function(){const _0x103bb5=_0x351c11,_0x1d80de=this[_0x103bb5(0x39c)]();if(!_0x1d80de)return;if(this[_0x103bb5(0x198)]===_0x1d80de[_0x103bb5(0x37d)]()&&this[_0x103bb5(0x1f3)]===_0x1d80de[_0x103bb5(0x3d1)]())return;this[_0x103bb5(0x198)]=_0x1d80de[_0x103bb5(0x37d)](),this['_isAppeared']=_0x1d80de[_0x103bb5(0x3d1)]();let _0x25e800=this['_isAlive']&&this[_0x103bb5(0x1f3)]?0xff:0x0;this[_0x103bb5(0x1c2)](_0x25e800);},Sprite_OTB_TurnOrder_Battler['prototype']['updateOpacity']=function(){const _0x5762ac=_0x351c11;if(this[_0x5762ac(0x1b8)]>0x0){const _0xdc027b=this[_0x5762ac(0x1b8)];this[_0x5762ac(0x328)]=(this[_0x5762ac(0x328)]*(_0xdc027b-0x1)+this[_0x5762ac(0x2a5)])/_0xdc027b,this[_0x5762ac(0x1b8)]--;if(this[_0x5762ac(0x1b8)]<=0x0){if(_0x5762ac(0x371)!==_0x5762ac(0x25f))this[_0x5762ac(0x328)]=this['_fadeTarget'];else{if(this['_graphicSv']!==_0x13b4f5[_0x5762ac(0x268)]())return this[_0x5762ac(0x230)]();}}}if(this[_0x5762ac(0x229)])return;BattleManager[_0x5762ac(0x341)]===_0x5762ac(0x258)&&(_0x5762ac(0x1f4)!==_0x5762ac(0x1f4)?this[_0x5762ac(0x1e7)]():(this['_isBattleOver']=!![],this['startFade'](0x0)));},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x211)]=function(){const _0x5a8a2d=_0x351c11,_0x7aeda4=this['battler']();if(!_0x7aeda4)return;const _0x5e53b3=Window_OTB_TurnOrder[_0x5a8a2d(0x402)],_0x16d28b=this[_0x5a8a2d(0x21f)]===$gameParty?'Actor':_0x5a8a2d(0x1a5);let _0x42e1f6=_0x7aeda4[_0x5a8a2d(0x405)]();if(_0x7aeda4['isActor']()&&_0x42e1f6===_0x5a8a2d(0x19f))_0x42e1f6=_0x5a8a2d(0x1de);else _0x7aeda4[_0x5a8a2d(0x3fa)]()&&_0x42e1f6==='svactor'&&(_0x42e1f6=_0x5a8a2d(0x19f));if(this[_0x5a8a2d(0x33d)]!==_0x42e1f6)return this[_0x5a8a2d(0x230)]();switch(this[_0x5a8a2d(0x33d)]){case _0x5a8a2d(0x1de):if(this['_graphicFaceName']!==_0x7aeda4[_0x5a8a2d(0x36f)]())return this[_0x5a8a2d(0x230)]();if(this[_0x5a8a2d(0x43a)]!==_0x7aeda4[_0x5a8a2d(0x287)]())return this[_0x5a8a2d(0x230)]();break;case'icon':if(this[_0x5a8a2d(0x1e0)]!==_0x7aeda4[_0x5a8a2d(0x424)]())return this[_0x5a8a2d(0x230)]();break;case _0x5a8a2d(0x19f):if(_0x7aeda4[_0x5a8a2d(0x2ec)]()){if(this[_0x5a8a2d(0x37a)]!==_0x7aeda4['svBattlerName']()){if('ngBof'===_0x5a8a2d(0x252))_0x2bc54c['_sourceArray']&&_0x303ecc[_0x5a8a2d(0x396)][_0x5a8a2d(0x2ac)](_0x153d32),this[_0x5a8a2d(0x3bc)][_0x5a8a2d(0x2de)](_0x3cbda0),this[_0x5a8a2d(0x3c6)][_0x5a8a2d(0x2de)](_0x5d4898);else return this['processUpdateGraphic']();}}else{if(this['_graphicEnemy']!==_0x7aeda4[_0x5a8a2d(0x268)]()){if(_0x5a8a2d(0x2b5)!==_0x5a8a2d(0x2b5))_0x5bff6b=_0x101564[_0x5a8a2d(0x2c1)]?_0x5a8a2d(0x417):_0x5a8a2d(0x23f);else return this[_0x5a8a2d(0x230)]();}}break;case _0x5a8a2d(0x2b1):if(_0x7aeda4[_0x5a8a2d(0x33f)]()){if(this[_0x5a8a2d(0x37a)]!==_0x7aeda4[_0x5a8a2d(0x268)]())return this[_0x5a8a2d(0x230)]();}else{if(this[_0x5a8a2d(0x42d)]!==_0x7aeda4[_0x5a8a2d(0x268)]())return this[_0x5a8a2d(0x230)]();}break;}},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x230)]=function(){const _0x4ff9e5=_0x351c11,_0x37be9e=this[_0x4ff9e5(0x39c)]();if(!_0x37be9e)return;this[_0x4ff9e5(0x33d)]=_0x37be9e['TurnOrderOTBGraphicType']();if(_0x37be9e[_0x4ff9e5(0x33f)]()&&this[_0x4ff9e5(0x33d)]===_0x4ff9e5(0x19f)){if(_0x4ff9e5(0x43d)===_0x4ff9e5(0x34d)){const _0xbbee09=this[_0x4ff9e5(0x1f7)]['shift']();_0xbbee09[_0x4ff9e5(0x1c2)](0x0);}else this[_0x4ff9e5(0x33d)]=_0x4ff9e5(0x1de);}else _0x37be9e['isEnemy']()&&this[_0x4ff9e5(0x33d)]===_0x4ff9e5(0x2b1)&&(this[_0x4ff9e5(0x33d)]=_0x4ff9e5(0x19f));let _0x1c1ab3;switch(this[_0x4ff9e5(0x33d)]){case _0x4ff9e5(0x1de):this[_0x4ff9e5(0x220)]=_0x37be9e[_0x4ff9e5(0x36f)](),this[_0x4ff9e5(0x43a)]=_0x37be9e[_0x4ff9e5(0x287)](),_0x1c1ab3=ImageManager[_0x4ff9e5(0x21e)](this[_0x4ff9e5(0x220)]),_0x1c1ab3[_0x4ff9e5(0x427)](this[_0x4ff9e5(0x294)]['bind'](this,_0x1c1ab3));break;case _0x4ff9e5(0x3ad):this[_0x4ff9e5(0x1e0)]=_0x37be9e[_0x4ff9e5(0x384)](),_0x1c1ab3=ImageManager[_0x4ff9e5(0x3e3)]('IconSet'),_0x1c1ab3[_0x4ff9e5(0x427)](this[_0x4ff9e5(0x32f)][_0x4ff9e5(0x266)](this,_0x1c1ab3));break;case'enemy':if(_0x37be9e['hasSvBattler']())this[_0x4ff9e5(0x37a)]=_0x37be9e[_0x4ff9e5(0x2f9)](),_0x1c1ab3=ImageManager['loadSvActor'](this[_0x4ff9e5(0x37a)]),_0x1c1ab3[_0x4ff9e5(0x427)](this['changeSvActorGraphicBitmap']['bind'](this,_0x1c1ab3));else $gameSystem['isSideView']()?(this[_0x4ff9e5(0x42d)]=_0x37be9e[_0x4ff9e5(0x268)](),_0x1c1ab3=ImageManager['loadSvEnemy'](this[_0x4ff9e5(0x42d)]),_0x1c1ab3[_0x4ff9e5(0x427)](this[_0x4ff9e5(0x2d0)][_0x4ff9e5(0x266)](this,_0x1c1ab3))):_0x4ff9e5(0x3ea)===_0x4ff9e5(0x3ea)?(this[_0x4ff9e5(0x42d)]=_0x37be9e['battlerName'](),_0x1c1ab3=ImageManager[_0x4ff9e5(0x344)](this['_graphicEnemy']),_0x1c1ab3[_0x4ff9e5(0x427)](this[_0x4ff9e5(0x2d0)][_0x4ff9e5(0x266)](this,_0x1c1ab3))):_0x120040[_0x4ff9e5(0x1dc)]()?this['makeOTBSpeed']():_0xafc759[_0x4ff9e5(0x3f0)]['Game_Battler_makeSpeed'][_0x4ff9e5(0x1e4)](this);break;case _0x4ff9e5(0x2b1):this[_0x4ff9e5(0x37a)]=_0x37be9e['battlerName'](),_0x1c1ab3=ImageManager[_0x4ff9e5(0x319)](this[_0x4ff9e5(0x37a)]),_0x1c1ab3['addLoadListener'](this[_0x4ff9e5(0x2ab)][_0x4ff9e5(0x266)](this,_0x1c1ab3));break;}},Sprite_OTB_TurnOrder_Battler['prototype'][_0x351c11(0x294)]=function(_0x137afa){const _0x481209=_0x351c11,_0x4e5c4e=this[_0x481209(0x43a)],_0x106d5d=this['bitmapWidth'](),_0x148e5d=this['bitmapHeight'](),_0xccffaf=Math['max'](_0x106d5d,_0x148e5d);this[_0x481209(0x223)][_0x481209(0x1e1)]=new Bitmap(_0x106d5d,_0x148e5d);const _0x1a51cf=this[_0x481209(0x223)][_0x481209(0x1e1)],_0x3a5267=ImageManager['faceWidth'],_0x1658fa=ImageManager[_0x481209(0x1a0)],_0x380c5a=_0xccffaf/Math[_0x481209(0x2d4)](_0x3a5267,_0x1658fa),_0x313074=ImageManager[_0x481209(0x3d6)],_0xf832f2=ImageManager['faceHeight'],_0x2f245a=_0x4e5c4e%0x4*_0x3a5267+(_0x3a5267-_0x313074)/0x2,_0xa3dd28=Math[_0x481209(0x1ac)](_0x4e5c4e/0x4)*_0x1658fa+(_0x1658fa-_0xf832f2)/0x2,_0x53cb61=(_0x106d5d-_0x3a5267*_0x380c5a)/0x2,_0x12385f=(_0x148e5d-_0x1658fa*_0x380c5a)/0x2;_0x1a51cf[_0x481209(0x2be)](_0x137afa,_0x2f245a,_0xa3dd28,_0x313074,_0xf832f2,_0x53cb61,_0x12385f,_0xccffaf,_0xccffaf);},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)]['changeIconGraphicBitmap']=function(_0x2f02d0){const _0x3b850a=_0x351c11,_0x200f8d=this[_0x3b850a(0x1e0)],_0x537294=this[_0x3b850a(0x256)](),_0x188160=this[_0x3b850a(0x3f1)]();this[_0x3b850a(0x223)][_0x3b850a(0x1e1)]=new Bitmap(_0x537294,_0x188160);const _0x3b6346=this[_0x3b850a(0x223)]['bitmap'],_0x3965d7=ImageManager[_0x3b850a(0x3da)],_0x278d3f=ImageManager[_0x3b850a(0x3e6)],_0x524dec=Math['min'](_0x3965d7,_0x278d3f,_0x537294,_0x188160),_0x485fa8=_0x200f8d%0x10*_0x3965d7,_0x1a0a47=Math[_0x3b850a(0x1ac)](_0x200f8d/0x10)*_0x278d3f,_0x2840ce=Math['floor'](Math[_0x3b850a(0x2d4)](_0x537294-_0x524dec,0x0)/0x2),_0x40bf96=Math[_0x3b850a(0x1ac)](Math['max'](_0x188160-_0x524dec,0x0)/0x2);_0x3b6346['blt'](_0x2f02d0,_0x485fa8,_0x1a0a47,_0x3965d7,_0x278d3f,_0x2840ce,_0x40bf96,_0x524dec,_0x524dec);},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x2ab)]=function(_0x5afe7f){const _0xab80e9=_0x351c11,_0x5673a5=this[_0xab80e9(0x256)](),_0x5e3c74=this['bitmapHeight'](),_0x40e384=Math['min'](_0x5673a5,_0x5e3c74);this[_0xab80e9(0x223)][_0xab80e9(0x1e1)]=new Bitmap(_0x5673a5,_0x5e3c74);const _0x258b63=this[_0xab80e9(0x223)]['bitmap'],_0x51bd35=this[_0xab80e9(0x37a)]['match'](/\$/i),_0x136902=_0x51bd35?0x1:ImageManager[_0xab80e9(0x1c5)],_0x168506=_0x51bd35?0x1:ImageManager[_0xab80e9(0x301)],_0x1f58a8=_0x5afe7f[_0xab80e9(0x3fd)]/_0x136902,_0x4561f2=_0x5afe7f[_0xab80e9(0x3b4)]/_0x168506,_0x30387c=Math[_0xab80e9(0x3cf)](0x1,_0x40e384/_0x1f58a8,_0x40e384/_0x4561f2),_0x2e238b=_0x1f58a8*_0x30387c,_0x5064b3=_0x4561f2*_0x30387c,_0x219eb2=Math['round']((_0x5673a5-_0x2e238b)/0x2),_0x407704=Math[_0xab80e9(0x438)]((_0x5e3c74-_0x5064b3)/0x2);_0x258b63[_0xab80e9(0x2be)](_0x5afe7f,0x0,0x0,_0x1f58a8,_0x4561f2,_0x219eb2,_0x407704,_0x2e238b,_0x5064b3);},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x2d0)]=function(_0x38b74e){const _0xe9506=_0x351c11,_0x267c75=Window_OTB_TurnOrder[_0xe9506(0x402)],_0x5991e2=this['bitmapWidth'](),_0x414dec=this[_0xe9506(0x3f1)](),_0x529bb2=Math[_0xe9506(0x3cf)](_0x5991e2,_0x414dec);this[_0xe9506(0x223)][_0xe9506(0x1e1)]=new Bitmap(_0x5991e2,_0x414dec);const _0x5e7296=this[_0xe9506(0x223)][_0xe9506(0x1e1)],_0x21009a=Math[_0xe9506(0x3cf)](0x1,_0x529bb2/_0x38b74e[_0xe9506(0x3fd)],_0x529bb2/_0x38b74e[_0xe9506(0x3b4)]),_0x1cdb54=_0x38b74e[_0xe9506(0x3fd)]*_0x21009a,_0x2316a6=_0x38b74e[_0xe9506(0x3b4)]*_0x21009a,_0x549c77=Math[_0xe9506(0x438)]((_0x5991e2-_0x1cdb54)/0x2),_0x943698=Math[_0xe9506(0x438)]((_0x414dec-_0x2316a6)/0x2);_0x5e7296['blt'](_0x38b74e,0x0,0x0,_0x38b74e[_0xe9506(0x3fd)],_0x38b74e[_0xe9506(0x3b4)],_0x549c77,_0x943698,_0x1cdb54,_0x2316a6);},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x1b1)]=function(){const _0x117401=_0x351c11,_0x5e29b4=this[_0x117401(0x39c)]();if(!_0x5e29b4)return;if(!_0x5e29b4[_0x117401(0x3fa)]())return;if(this[_0x117401(0x40b)]===_0x5e29b4[_0x117401(0x20d)]())return;this[_0x117401(0x40b)]=_0x5e29b4[_0x117401(0x20d)](),this[_0x117401(0x223)]['setHue'](_0x5e29b4['hasSvBattler']()?0x0:this['_graphicHue']);},Sprite_OTB_TurnOrder_Battler['prototype'][_0x351c11(0x2b4)]=function(){const _0x35c058=_0x351c11;if(!this[_0x35c058(0x3a4)])return;const _0x3169bb=this[_0x35c058(0x39c)]();if(!_0x3169bb)return;if(this[_0x35c058(0x368)]===_0x3169bb[_0x35c058(0x368)]&&this[_0x35c058(0x3fe)]===_0x3169bb[_0x35c058(0x3fe)])return;this['_letter']=_0x3169bb[_0x35c058(0x368)],this[_0x35c058(0x3fe)]=_0x3169bb['_plural'];const _0x2b6cd0=Window_OTB_TurnOrder[_0x35c058(0x402)],_0x1cce52=this[_0x35c058(0x256)](),_0x1c7e18=this[_0x35c058(0x3f1)](),_0x31d5e2=this[_0x35c058(0x3a4)][_0x35c058(0x1e1)];_0x31d5e2[_0x35c058(0x32a)]();if(!this['_plural'])return;_0x31d5e2['fontFace']=_0x2b6cd0['EnemyBattlerFontFace']||$gameSystem[_0x35c058(0x3f9)](),_0x31d5e2[_0x35c058(0x2c6)]=_0x2b6cd0[_0x35c058(0x3a0)]||0x10;if(_0x2b6cd0[_0x35c058(0x2c1)])_0x31d5e2[_0x35c058(0x218)](this[_0x35c058(0x368)][_0x35c058(0x40a)](),_0x1cce52*0x1/0x8,_0x1c7e18/0x2,_0x1cce52,_0x1c7e18/0x2,_0x35c058(0x23f));else{if('ICGvn'===_0x35c058(0x2e7))_0x31d5e2['drawText'](this[_0x35c058(0x368)][_0x35c058(0x40a)](),0x0,_0x1c7e18/0x2,_0x1cce52*0x7/0x8,_0x1c7e18/0x2,_0x35c058(0x417));else{const _0x2e7b8c=new _0x139e3e();_0x2e7b8c['anchor']['x']=this[_0x35c058(0x306)]['x'],_0x2e7b8c['anchor']['y']=this[_0x35c058(0x306)]['y'],this[_0x35c058(0x223)]=_0x2e7b8c,this[_0x35c058(0x323)](this[_0x35c058(0x223)]),this[_0x35c058(0x230)]();}}},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x2e0)]=function(){const _0x3bf7b7=_0x351c11,_0x55bff8=this[_0x3bf7b7(0x39c)]();if(!_0x55bff8)return;const _0xc37911=_0x55bff8[_0x3bf7b7(0x39c)]();if(!_0xc37911)return;const _0x380a99=_0xc37911[_0x3bf7b7(0x206)]();if(!_0x380a99)return;this['setBlendColor'](_0x380a99[_0x3bf7b7(0x19e)]);},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x436)]=function(){return null;},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x35f)]=function(_0xe1519c){const _0x4b64e8=_0x351c11;this['_sourceArray']=_0xe1519c,this[_0x4b64e8(0x3aa)]();if(this[_0x4b64e8(0x396)]===null){if(_0x4b64e8(0x35d)!==_0x4b64e8(0x399))this[_0x4b64e8(0x212)]=-0x1;else{if(_0x36229d[_0x4b64e8(0x1dc)]())this['removeState'](this[_0x4b64e8(0x3fb)]());_0x40c5c3[_0x4b64e8(0x3f0)][_0x4b64e8(0x392)][_0x4b64e8(0x1e4)](this);if(_0x5ef975[_0x4b64e8(0x1dc)]())this[_0x4b64e8(0x210)]();}}},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x3aa)]=function(){const _0x4a77dc=_0x351c11,_0x227221=this['containerWindow']();if(!_0x227221)return;const _0x54d9f6=Window_OTB_TurnOrder[_0x4a77dc(0x402)],_0x4d25c4=_0x54d9f6[_0x4a77dc(0x2c1)],_0x50811f=this[_0x4a77dc(0x396)]===_0x227221[_0x4a77dc(0x29d)]?!![]:![],_0x237cc0=this[_0x4a77dc(0x212)]===-0x1&&BattleManager[_0x4a77dc(0x3f3)]===this[_0x4a77dc(0x39c)](),_0x2f6809=_0x227221[_0x4a77dc(0x1bc)]-_0x54d9f6[_0x4a77dc(0x2c5)];let _0xd59410=Math['ceil'](_0x2f6809/(this['_sourceArray']['length']-0x1||0x1));_0xd59410=Math[_0x4a77dc(0x3cf)](_0x54d9f6[_0x4a77dc(0x2c5)],_0xd59410);let _0x567be0=0x0,_0x10f1f6=0x0,_0x3f2160=_0x237cc0?-0x1:this[_0x4a77dc(0x396)][_0x4a77dc(0x39e)](this);!_0x237cc0&&(_0x3f2160=this[_0x4a77dc(0x3af)]());if(_0x237cc0)_0x567be0=_0x227221[_0x4a77dc(0x2ff)];else _0x4d25c4?(_0x567be0=(_0x50811f?_0x227221[_0x4a77dc(0x435)]:_0x227221['_currentX'])+_0x2f6809,_0x567be0-=_0x3f2160*_0xd59410):(_0x567be0=_0x50811f?_0x227221['_nextX']:_0x227221[_0x4a77dc(0x3b6)],_0x567be0+=_0x3f2160*_0xd59410);_0x567be0+=this[_0x4a77dc(0x42e)](_0x3f2160,_0x54d9f6[_0x4a77dc(0x2c5)]-_0xd59410),!_0x237cc0&&_0x3f2160<0x0&&(_0x567be0=this['x'],_0x10f1f6=this['y'],this['startFade'](0x0)),this['moveToPosition'](_0x567be0,_0x10f1f6);},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)]['additionalTargetXAdjustments']=function(_0x2d6de6,_0x42d741){return 0x0;},Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)][_0x351c11(0x3af)]=function(){const _0x43a1cd=_0x351c11,_0x2b274e=this[_0x43a1cd(0x3cb)]();if(!_0x2b274e)return 0x0;const _0x3f11a9=this['_sourceArray']===_0x2b274e[_0x43a1cd(0x29d)]?!![]:![],_0x3ae414=_0x3f11a9?BattleManager[_0x43a1cd(0x370)]:BattleManager[_0x43a1cd(0x21a)],_0x586bf6=this[_0x43a1cd(0x39c)](),_0x29a80f=VisuMZ[_0x43a1cd(0x3f0)][_0x43a1cd(0x2ce)](_0x586bf6,_0x3ae414);return _0x29a80f[this[_0x43a1cd(0x212)]]??_0x29a80f[_0x29a80f['length']-0x1]??-0x1;};function _0x46a9(){const _0x1d5a29=['OTB_STUN_INFINITY_SPEED','qvrcR','UiCurrentOffsetX','stepForward','isNextOtbSubject','Scene_Battle_onActorOk','_fadeTarget','OtbTurnOrderEnemyFace','removeCurrentSubject','processTurnOTB','mawgj','applyGlobal','changeSvActorGraphicBitmap','remove','push','otbCalcUserCurrentOrderChange','createGraphicSprite','Game_Battler_addState','svactor','return\x200','selectNextCommand','updateLetter','OHEHm','initBattleSystemOTB','cVvyD','onItemCancel','performCollapse','visible','actorCommandSingleSkill','JlgXi','exit','blt','onEnemyOk','drawDimmedArea','OrderDirection','Game_Party_removeActor','allBattleMembers','initialize','SpriteThin','fontSize','2061JFCuWd','12HjJbto','%1-%2','_surprise','moveToPosition','item','updatePosition','GetAllIndicies','addBattlerToTurnOrderAtEnd','changeEnemyGraphicBitmap','dataId','otbProcessActionCheck','gradientFillRect','max','ULGXM','windowRect','commandGuard','Visible','nNLbf','contentsBack','iKmSr','_targetHomeY','Instant','removeChild','ConvertParams','updateSelectionEffect','drawUiText','17569772wDLjCP','createTurnOrderOTBGraphicFaceName','InfinityClamp','onEnemyCancel','BattleManager_finishActorInput','ICGvn','_actions','lrNcF','speed','PreviewActor','hasSvBattler','top','InYDv','isHorz','needsSelection','active','currentAction','BattleManager_selectNextActor','DisplayPosition','onBattleEnd','rQsbR','auto','canMove','svBattlerName','SJaeY','otbReturnBattlerToTurnOrders','BeSQb','yCgAq','battleSys','_subjectX','contents','svActorVertCells','_otb_createdFirstTurnOrders','_windowLayer','umzkF','ConvertAgiDebuffCurrent','anchor','_fadeSpeed','%1BgColor1','BRtkY','BattleManager_isTurnBased','transparent','bottom','containerPosition','SPapF','makeNextActionOrdersOTB','singleSkill','jhsEy','GXKXm','UKrwl','yPrpl','otbPreviewOrderChange','initMembers','findIndex','jyrKH','loadSvActor','index','BattleManager_endTurn','battleMembers','ConvertSpeedJS','4vyAWEb','%1BorderColor','XEIho','_homeX','clearOrderPreview','addChild','contentsOpacity','pZpdo','toUpperCase','FuGlD','opacity','Game_System_initialize','clear','isTurnBased','oMXUO','_speed','BattleManager_processTurn','changeIconGraphicBitmap','_scene','TargetCurrOrder','EnemyBattlerIcon','getChildIndex','ARRAYFUNC','Scene_Battle_onItemCancel','VCtPD','ikNvT','NPLKj','updateTurnOrders','_otbTurnOrderFaceName','isTpb','otbCreateNewTurnOrderSprites','_graphicType','Scene_Battle_createActorCommandWindow','isActor','checkOpacity','_phase','applyGlobalBattleSystemOTB','OTB_CONVERT_AGI_DEBUFF_NEXT_TURN','loadEnemy','dktVW','UserAddActionNext','OGSSO','LogWindowOffsetY','sxtAt','BattleManager_battleSys','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','EnemyBattlerFaceIndex','slqnv','nSmWB','CxaxR','addBattlerToTurnOrderAtStart','attack','TargetAddActionNext','2YbaXqa','createActorCommandWindow','_homeY','startActorInput','otbShiftTurnOrderForSubject','startInputOTB','setBattleSystemOTBTurnOrderVisible','inputtingAction','previewOrderByAction','_otbTurnOrderWindow','VXKiq','ScreenBuffer','changeSourceArray','StatusWindow','EnableActionTimes','removeStatesAuto','_actorCommandWindow','UiCurrentText','constructor','subject','drawBgImage','_letter','Game_Action_applyGlobal','FaceIndex','jxrhn','4902231BLrRMI','RLAWT','gradient','TurnOrderOTBGraphicFaceName','_otb_actionBattlersNext','rnWjo','LCGqH','_enemyWindow','Shcso','556804nvtfYw','defaultPosition','dimColor1','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','setTarget','_graphicSv','otbShiftNextTurnSpritesToCurrentTurn','version','isAlive','onActorOk','children','addChildToBack','isUsingSideviewUiLayout','setup','ARRAYJSON','createTurnOrderOTBGraphicIconIndex','Scene_Battle_onItemOk','update','preEndActionOTB','BgImageOffsetY','tqWUP','EVAL','ZLCrW','ISbbN','EFFECT_ADD_BUFF','getColor','_hidden','makeActionOrdersOTB','fqJAK','Game_BattlerBase_recoverAll','Game_Actor_selectNextCommand','updatePadding','sortContainer','_sourceArray','Scene_Battle_onSkillOk','JpDvV','AXfrK','processTurn','makeActionTimes','battler','otbCalcTargetCurrentOrderChange','indexOf','endBattlerActions','EnemyBattlerFontSize','UERQy','BattleManager_endAction','createOTBTurnOrderWindow','_letterSprite','commandCancelOTB','STR','_helpWindow','Scene_Battle_onSkillCancel','bdtGF','calculateTargetPositions','Mechanics','parameters','icon','Scene_Battle_createAllWindows','calculateTargetIndex','_ogWindowLayerY','createLetterSprite','_forcedBattlers','sYcFf','height','VisuMZ_3_SideviewBattleUI','_currentX','removeUnableTurnOrderSprites','commandAttack','kICWG','_backgroundSprite','Game_Battler_makeSpeed','_spriteContainer','resumeTurnOrderSprites','onSkillCancel','makeActions','recoverAll','EFFECT_ADD_DEBUFF','ActionBattlersNextFilter','YAYvj','OCyWi','clearTurnOrderOTBGraphics','_previewContainer','SpriteLength','xhsWk','fFZsV','igRts','containerWindow','_targetHomeX','startTurn','Conversion','min','rOnNM','isAppeared','ARRAYSTRUCT','rLGSD','UiSubjectText','BattleManager_isTpb','faceWidth','createInitialPositions','QJBjM','RegExp','iconWidth','84exSOid','createBorderSprite','14811344JUsWNc','DnfSo','BattleManager_isActiveTpb','endAction','randomInt','commandCancel','loadSystem','makeOTBSpeed','allowRandomSpeed','iconHeight','%1SystemBg','createActorCommandWindowOTB','initMembersOTB','kXnke','faceIndex','RepositionLogWindow','applyItemUserEffect','OTB_ADDED_ACTION_TIMES','concat','BattleSystemOTB','bitmapHeight','processSpriteRemoval','_subject','_tempActor','WGoZD','addChildAt','updateVisibility','VisuMZ_2_PartySystem','mainFontFace','isEnemy','deathStateId','EBvNS','width','_plural','ConvertAgiDebuffNext','createNewTurnOrderSprites','code','Settings','RepositionTopHelpY','Game_BattlerBase_appear','TurnOrderOTBGraphicType','scale','isSceneBattle','applyBattleItemWindowOTB','otbAddBattlerToTurnOrderAtStart','trim','_graphicHue','_forceAction','qhXeo','FaceName','GsYKR','removeActor','UiSubjectOffsetX','_positionTargetX','applyItemTargetEffectOTB','createSpriteContainers','removeActionBattlersOTB','startActorCommandSelection','right','finishActorInput','clearRect','QBneq','cancel','USzMQ','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','getBorderThickness','removeSprite','iySBL','ceil','lineHeight','BgDimStyle','TurnOrderOTBGraphicIconIndex','currentSymbol','_positionTargetY','addLoadListener','selectNextActor','filter','_handlers','repositionLogWindowOTB','ShowMarkerBorder','_graphicEnemy','additionalTargetXAdjustments','LfSbZ','_requestTurnOrderUpdate','OkjBE','%1BgColor2','format','splice','_nextX','getStateTooltipBattler','DisplayOffsetX','round','Actors','_graphicFaceIndex','UbdVF','setItem','cVzDu','Scene_Battle_commandCancel','create','unshift','EnemyBattlerType','_isAlive','RliUk','AllowRandomSpeed','PreviewOffsetY','prototype','onBattleEndOTB','_blendColor','enemy','faceHeight','yhfQR','Game_Action_applyItemUserEffect','qlMCg','198645thjsFs','Enemy','faceName','Scene_Battle_commandGuard','isBattleItemWindowOTB','center','Game_Battler_performCollapse','tVTub','floor','wOcAy','RohLE','adjustForPreview','ELjcK','updateGraphicHue','BattleManager_startInput','ActorBattlerIcon','Game_BattlerBase_hide','_preemptive','isBattleSystemOTBTurnOrderVisible','turnOrderChangeOTB','_fadeDuration','refreshTurnOrder','status','UserNextOrder','_spriteGroupWidth','otbPreviewOrderClear','DisplayOffsetY','otbCalcUserNextOrderChange','_positionDuration','numActions','startFade','OQxiJ','QkgRc','svActorHorzCells','getInfinityClamp','guavx','ZmoIO','otbGainInstant','_index','OrydP','JYqiA','createOrderPreviewSprite','_ogWindowLayerX','UiCurrentOffsetY','Scene_Battle_onActorCancel','shift','clamp','EnemyBattlerFaceName','_previewNext','OtbTurnOrderClearActorGraphic','oYhes','%1SystemBorder','otbAddBattlerToTurnOrderAtEnd','ZjgTg','Game_Battler_onBattleEnd','forceAction','isOTB','Scene_Battle_commandFight','face','OTB_CONVERT_AGI_BUFF_CURRENT_TURN','_graphicIconIndex','bitmap','map','OTlcf','call','registerCommand','otbRemoveCurrentSubject','selectNextActorOTB','endTurn','_tempBattler','BattleManager_makeActionOrders','JNnxM','Game_Party_addActor','setSkill','BgImageFilename','forceActionOTB','RepositionTopHelpX','getUnitSideSide','Enemies','_isAppeared','LApCJ','setText','_logWindow','_currentTurn','effects','getNextSubject','_offset','padding','TargetNextOrder','UiNextOffsetX','Scene_Battle_onEnemyCancel','Game_Battler_forceAction','makeSpeed','otbApplyActionTimes','includes','updateStateTurns','createAllWindows','onActorCancel','mainSprite','select','_otbTimesActedThisTurn','swfMI','resetFontSettings','vPWGq','isInfinitySpeedOTB','battlerHue','_homeDuration','otbAddActions','refresh','updateGraphic','_instance','mIKGG','TargetAddActionCurrent','boxHeight','Window_Help_setItem','members','drawText','#000000','_actionBattlers','TargetFollOrder','createTurnOrderOTBGraphicType','_bgImageSprite','loadFace','_unit','_graphicFaceName','OYMNf','PreviewOffsetX','_graphicSprite','canChangeOtbTurnOrder','IxmgU','Scene_Battle_commandAttack','WBdjQ','TurnOrder','_isBattleOver','currentExt','UpdateFrames','nmliB','shiftNextTurnSpritesToCurrentTurn','BattleManager_forceAction','SubjectDistance','processUpdateGraphic','_otbTurnOrderFaceIndex','actor','postEndActionOTB','length','makeActionOrders','PJVhK','ILbDW','shiftTurnOrderForSubject','onTurnEndOTB','createTurnOrderSprites','mQgUn','mOvOF','UiSubjectOffsetY','createTurnOrderOTBGraphicFaceIndex','left','IvtOv','getBattleSystem','PostStunInfinitySpeed','isPartyCommandWindowDisabled','6144138uysSVG','TiRDa','OTB_CONVERT_AGI_BUFF_NEXT_TURN','hide','Game_Battler_onBattleStart','isActiveTpb','_currentActor','29090lgVLWG','Game_Battler_onTurnEnd','isBattleMember','pETUf','_contentsBackSprite','fillRect','BgImageOffsetX','gsUHh','UserAddActionCurrent','BattleManager_setup','pop','bitmapWidth','IconIndex','battleEnd','addActor','QLarM','isPreviousSceneBattleTransitionable','createBackgroundSprite','parse','KPCRO','nqqyN','BattleManager_getNextSubject','UiAlignment','onTurnEnd','UserFollOrder','startInput','EnemyBattlerDrawLetter','bind','setOTBGraphicIconIndex','battlerName','dimColor2','ARRAYSTR','Scene_Battle_onEnemyOk','otbAddForceActionBattler','name','performActionEndOTB','oMnTk','_otbTurnOrderVisible','_otbTurnOrderGraphicType','Game_Battler_removeState','UiNextText','NBSVY','iyVyG','GRQhw','appear','sort','BeERU','note','ogahF','commandFight','otbCalcTargetNextOrderChange','KXagl','_partyCommandWindow','BlqsT','Window_Selectable_select','UpBID','OtbTurnOrderActorFace','addState','heDEy','onBattleStart','TurnOrderOTBGraphicFaceIndex','addForceActionBattler','OTB','close','Wyije','ActionBattlersFilter','removeState','OTB_ADDED_RANDOMIZE_ADDED_ACTION_ORDER','Game_Action_speed','STRUCT','UiNextOffsetY','ConvertAgiBuffCurrent','_previewCurrent','changeFaceGraphicBitmap','_stateIDs','_otbTurnOrderIconIndex','createChildren','match','PreviewScale','ICkyu','otbRemoveUnableTurnOrderSprites','requestUpdateTurnOrders','_nextTurn','SideviewBattleUI'];_0x46a9=function(){return _0x1d5a29;};return _0x46a9();}function _0x5c20(_0x4fe45b,_0x53f992){const _0x46a928=_0x46a9();return _0x5c20=function(_0x5c201a,_0x3ee398){_0x5c201a=_0x5c201a-0x197;let _0x1234a1=_0x46a928[_0x5c201a];return _0x1234a1;},_0x5c20(_0x4fe45b,_0x53f992);}function Sprite_OTB_TurnOrder_Preview(){const _0x556999=_0x351c11;this[_0x556999(0x2c4)](...arguments);}Sprite_OTB_TurnOrder_Preview[_0x351c11(0x19c)]=Object['create'](Sprite_OTB_TurnOrder_Battler[_0x351c11(0x19c)]),Sprite_OTB_TurnOrder_Preview[_0x351c11(0x19c)][_0x351c11(0x365)]=Sprite_OTB_TurnOrder_Preview,Sprite_OTB_TurnOrder_Preview[_0x351c11(0x19c)]['initialize']=function(_0x54bda8,_0x1a3300,_0x4a331e,_0x166e55){const _0xc7c524=_0x351c11;this[_0xc7c524(0x1fa)]=_0x166e55,Sprite_OTB_TurnOrder_Battler[_0xc7c524(0x19c)]['initialize'][_0xc7c524(0x1e4)](this,_0x54bda8,_0x1a3300,_0x4a331e),this[_0xc7c524(0x1af)]();},Sprite_OTB_TurnOrder_Preview['prototype'][_0x351c11(0x1af)]=function(){const _0x29d125=_0x351c11,_0x211d70=Window_OTB_TurnOrder['Settings'];this[_0x29d125(0x406)]['x']=this['scale']['y']=_0x211d70[_0x29d125(0x299)];},Sprite_OTB_TurnOrder_Preview[_0x351c11(0x19c)][_0x351c11(0x1f1)]=function(){const _0x5991c5=_0x351c11;return this['_unit']===$gameParty?_0x5991c5(0x2eb):'PreviewEnemy';},Sprite_OTB_TurnOrder_Preview[_0x351c11(0x19c)]['getBorderThickness']=function(){const _0x1c318a=_0x351c11,_0x45dd42=Window_OTB_TurnOrder[_0x1c318a(0x402)];return Math['ceil'](_0x45dd42['BorderThickness']/(_0x45dd42[_0x1c318a(0x299)]||0.01));},Sprite_OTB_TurnOrder_Preview[_0x351c11(0x19c)][_0x351c11(0x2cb)]=function(_0x358546,_0xc58bbd){const _0x54a9b6=_0x351c11;Sprite_OTB_TurnOrder_Battler['prototype'][_0x54a9b6(0x2cb)][_0x54a9b6(0x1e4)](this,_0x358546,_0xc58bbd),this['x']=this[_0x54a9b6(0x412)],this['y']=this[_0x54a9b6(0x426)];},Sprite_OTB_TurnOrder_Preview[_0x351c11(0x19c)][_0x351c11(0x1c2)]=function(_0x417bd4){const _0x447aa8=_0x351c11;Sprite_OTB_TurnOrder_Battler[_0x447aa8(0x19c)]['startFade'][_0x447aa8(0x1e4)](this,_0x417bd4),_0x417bd4>0x0?_0x447aa8(0x1d9)===_0x447aa8(0x22c)?(this[_0x447aa8(0x270)]===_0x52ff8a&&this[_0x447aa8(0x2b6)](),this[_0x447aa8(0x270)]=_0x2f2f05):this[_0x447aa8(0x1b8)]=0x1:(this[_0x447aa8(0x1b8)]/=0x2,this[_0x447aa8(0x1b8)]=Math[_0x447aa8(0x1ac)](this['_fadeDuration']));},Sprite_OTB_TurnOrder_Preview[_0x351c11(0x19c)][_0x351c11(0x42e)]=function(_0x365f4e,_0x4eca95){const _0x50e156=_0x351c11,_0x35c3b9=Window_OTB_TurnOrder[_0x50e156(0x402)];if(_0x365f4e>0x0){if(this['_offset']>0x0)return _0x50e156(0x1ad)!==_0x50e156(0x26f)?_0x35c3b9[_0x50e156(0x2c1)]?-_0x35c3b9[_0x50e156(0x2c5)]:_0x50e156(0x1a3)===_0x50e156(0x1a3)?_0x35c3b9['SpriteThin']:(this[_0x50e156(0x3f3)]=_0x4f984b[_0x50e156(0x3f0)][_0x50e156(0x260)][_0x50e156(0x1e4)](this),this['isOTB']()&&this[_0x50e156(0x3f3)]&&this[_0x50e156(0x357)](this[_0x50e156(0x3f3)]),this[_0x50e156(0x3f3)]):this[_0x50e156(0x230)]();else{if(this[_0x50e156(0x1fa)]<0x0){if(_0x50e156(0x2a0)===_0x50e156(0x1d6)){_0x51f629[_0x50e156(0x3f0)][_0x50e156(0x1ec)]['call'](this,_0x43914b);if(_0x5d24d0[_0x50e156(0x3f8)])return;_0x71f859['isSceneBattle']()&&_0xefcee5['isOTB']()&&(_0x7db1e0[_0x50e156(0x415)](),_0x86fac4[_0x50e156(0x2fb)](_0x766706[_0x50e156(0x232)](_0x419ac0)));}else return _0x35c3b9['OrderDirection']?-_0x4eca95:_0x4eca95;}}}return 0x0;},Sprite_OTB_TurnOrder_Preview[_0x351c11(0x19c)][_0x351c11(0x3af)]=function(){const _0x50f930=_0x351c11,_0x8ac98=this[_0x50f930(0x3cb)](),_0x4de52b=this[_0x50f930(0x396)]===_0x8ac98[_0x50f930(0x29d)]?!![]:![],_0x17103d=_0x4de52b?BattleManager[_0x50f930(0x370)]:BattleManager['_actionBattlers'];let _0x544680=0x0,_0x377692=_0x17103d[_0x50f930(0x234)]-0x1;if(_0x4de52b){if(_0x50f930(0x431)===_0x50f930(0x327)){const _0x3d6267=this[_0x50f930(0x19f)]()[_0x50f930(0x27a)];if(_0x3d6267['match'](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return _0x557cd5(_0x108d1c['$1']);return _0x5c5048['Settings'][_0x50f930(0x332)];}else _0x544680=Math[_0x50f930(0x2d4)](0x0,VisuMZ['BattleSystemOTB'][_0x50f930(0x1c6)](_0x17103d));}let _0x5c3a36=Sprite_OTB_TurnOrder_Battler['prototype'][_0x50f930(0x3af)][_0x50f930(0x1e4)](this);return _0x5c3a36+=this[_0x50f930(0x1fa)],_0x5c3a36[_0x50f930(0x1d2)](_0x544680,_0x377692);},Sprite_OTB_TurnOrder_Preview['prototype'][_0x351c11(0x2e0)]=function(){},Window_Selectable['prototype'][_0x351c11(0x1a8)]=function(){return![];},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x281)]=Window_Selectable[_0x351c11(0x19c)][_0x351c11(0x207)],Window_Selectable[_0x351c11(0x19c)][_0x351c11(0x207)]=function(_0x25ef2c){const _0x1f8b21=_0x351c11;VisuMZ[_0x1f8b21(0x3f0)][_0x1f8b21(0x281)][_0x1f8b21(0x1e4)](this,_0x25ef2c);if(this[_0x1f8b21(0x1a8)]()&&this['active']){if(_0x1f8b21(0x221)===_0x1f8b21(0x275))return _0x101676[_0x1f8b21(0x3f0)]['Game_Action_allowRandomSpeed'][_0x1f8b21(0x1e4)](this);else this[_0x1f8b21(0x408)]();}},Window_Selectable[_0x351c11(0x19c)][_0x351c11(0x408)]=function(){const _0x5b2a56=_0x351c11;BattleManager[_0x5b2a56(0x315)]();},VisuMZ[_0x351c11(0x3f0)][_0x351c11(0x216)]=Window_Help['prototype'][_0x351c11(0x43c)],Window_Help['prototype'][_0x351c11(0x43c)]=function(_0x4c8ba6){const _0x57a321=_0x351c11;BattleManager['isOTB']()&&_0x4c8ba6&&_0x4c8ba6[_0x57a321(0x27a)]&&_0x4c8ba6['note'][_0x57a321(0x298)](/<(?:OTB) HELP>\s*([\s\S]*)\s*<\/(?:OTB) HELP>/i)?this[_0x57a321(0x1f5)](String(RegExp['$1'])):VisuMZ['BattleSystemOTB'][_0x57a321(0x216)]['call'](this,_0x4c8ba6);},Window_ActorCommand['prototype'][_0x351c11(0x1a8)]=function(){const _0x4ee48c=_0x351c11;return BattleManager[_0x4ee48c(0x1dc)]();},Window_ActorCommand['prototype'][_0x351c11(0x408)]=function(){const _0x3a27bf=_0x351c11,_0x296ed8=BattleManager[_0x3a27bf(0x35a)]();if(_0x296ed8){const _0x2f6fbc=this[_0x3a27bf(0x425)]();switch(_0x2f6fbc){case _0x3a27bf(0x351):_0x296ed8['setAttack']();break;case'guard':_0x296ed8['setGuard']();break;case _0x3a27bf(0x310):_0x296ed8[_0x3a27bf(0x1ed)](this[_0x3a27bf(0x22a)]());break;default:_0x296ed8['setSkill'](null);break;}}Window_Command[_0x3a27bf(0x19c)][_0x3a27bf(0x408)][_0x3a27bf(0x1e4)](this);},Window_BattleSkill[_0x351c11(0x19c)]['isBattleItemWindowOTB']=function(){return BattleManager['isOTB']();},Window_BattleSkill['prototype']['applyBattleItemWindowOTB']=function(){const _0x4fd3bc=_0x351c11,_0x544eda=this[_0x4fd3bc(0x2cc)](),_0x1fbb1b=BattleManager[_0x4fd3bc(0x35a)]();if(_0x1fbb1b)_0x1fbb1b[_0x4fd3bc(0x1ed)](_0x544eda?_0x544eda['id']:null);Window_SkillList[_0x4fd3bc(0x19c)][_0x4fd3bc(0x408)]['call'](this);},Window_BattleItem['prototype']['isBattleItemWindowOTB']=function(){const _0x451553=_0x351c11;return BattleManager[_0x451553(0x1dc)]();},Window_BattleItem[_0x351c11(0x19c)]['applyBattleItemWindowOTB']=function(){const _0x5d4ab1=_0x351c11,_0x22b9b5=this[_0x5d4ab1(0x2cc)](),_0x1bfd89=BattleManager[_0x5d4ab1(0x35a)]();if(_0x1bfd89)_0x1bfd89['setItem'](_0x22b9b5?_0x22b9b5['id']:null);Window_ItemList['prototype'][_0x5d4ab1(0x408)][_0x5d4ab1(0x1e4)](this);},Window_BattleActor[_0x351c11(0x19c)][_0x351c11(0x1a8)]=function(){const _0x193c65=_0x351c11;return BattleManager[_0x193c65(0x1dc)]();},Window_BattleEnemy[_0x351c11(0x19c)]['isBattleItemWindowOTB']=function(){return BattleManager['isOTB']();};function Window_OTB_TurnOrder(){this['initialize'](...arguments);}Window_OTB_TurnOrder[_0x351c11(0x19c)]=Object['create'](Window_Base[_0x351c11(0x19c)]),Window_OTB_TurnOrder['prototype'][_0x351c11(0x365)]=Window_OTB_TurnOrder,Window_OTB_TurnOrder[_0x351c11(0x402)]=VisuMZ['BattleSystemOTB']['Settings'][_0x351c11(0x228)],Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x2c4)]=function(){const _0x2a61c1=_0x351c11,_0x17cfe0=this['windowRect']();this['initHomePositions'](_0x17cfe0),Window_Base[_0x2a61c1(0x19c)]['initialize'][_0x2a61c1(0x1e4)](this,_0x17cfe0),this[_0x2a61c1(0x328)]=0x0,this['drawDimmedArea'](),this[_0x2a61c1(0x2e1)](),this[_0x2a61c1(0x414)](),this[_0x2a61c1(0x3f7)]();},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x2d6)]=function(){const _0x443b3e=_0x351c11,_0x59d17e=Window_OTB_TurnOrder[_0x443b3e(0x402)],_0x2a915e=SceneManager['_scene']['_statusWindow'][_0x443b3e(0x3b4)];let _0xf193be=Graphics['width']-_0x59d17e['ScreenBuffer']*0x2,_0x51a91d=_0x59d17e[_0x443b3e(0x3c7)]+this[_0x443b3e(0x422)](),_0x11291a=_0x59d17e['ScreenBuffer'],_0x6d2099=0x0;switch(_0x59d17e[_0x443b3e(0x2f4)]){case _0x443b3e(0x30c):_0x6d2099=Graphics[_0x443b3e(0x3b4)]-_0x2a915e-_0x59d17e[_0x443b3e(0x35e)]-_0x51a91d;break;default:_0x6d2099=_0x59d17e['ScreenBuffer'];break;}if(Imported[_0x443b3e(0x3b5)]&&BattleManager[_0x443b3e(0x381)]()){if(_0x443b3e(0x3d3)===_0x443b3e(0x3d3)){const _0x2d067d=VisuMZ[_0x443b3e(0x29e)][_0x443b3e(0x402)][_0x443b3e(0x360)];_0xf193be-=_0x2d067d['WidthBase']+_0x2d067d['MoveDistance'],_0xf193be-=_0x59d17e[_0x443b3e(0x35e)];}else this[_0x443b3e(0x316)](_0x17cdc8,_0x5021f9,_0x50899e),_0x2e58fd['prototype'][_0x443b3e(0x2c4)][_0x443b3e(0x1e4)](this),this[_0x443b3e(0x328)]=0x0,this[_0x443b3e(0x297)](),this[_0x443b3e(0x340)]();}return _0x11291a+=_0x59d17e[_0x443b3e(0x437)]||0x0,_0x6d2099+=_0x59d17e[_0x443b3e(0x1be)]||0x0,new Rectangle(_0x11291a,_0x6d2099,_0xf193be,_0x51a91d);},Window_OTB_TurnOrder[_0x351c11(0x19c)]['initHomePositions']=function(_0x923cbe){const _0x10a1b3=_0x351c11;this[_0x10a1b3(0x3cc)]=this[_0x10a1b3(0x321)]=_0x923cbe['x'],this[_0x10a1b3(0x2dc)]=this['_homeY']=_0x923cbe['y'],this[_0x10a1b3(0x20e)]=0x0;const _0x38c941=Window_OTB_TurnOrder['Settings'];this[_0x10a1b3(0x1bc)]=Math[_0x10a1b3(0x421)]((_0x923cbe[_0x10a1b3(0x3fd)]-_0x38c941[_0x10a1b3(0x2c5)]-_0x38c941['SubjectDistance']*0x2)/0x2),_0x38c941[_0x10a1b3(0x2c1)]?(this[_0x10a1b3(0x2ff)]=_0x923cbe[_0x10a1b3(0x3fd)]-_0x38c941[_0x10a1b3(0x2c5)],this['_currentX']=this[_0x10a1b3(0x1bc)]+_0x38c941['SubjectDistance'],this[_0x10a1b3(0x435)]=0x0):(this['_subjectX']=0x0,this[_0x10a1b3(0x3b6)]=_0x38c941['SpriteThin']+_0x38c941[_0x10a1b3(0x22f)],this[_0x10a1b3(0x435)]=this['_currentX']+_0x38c941[_0x10a1b3(0x22f)]+this[_0x10a1b3(0x1bc)]);},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x394)]=function(){const _0x47abe6=_0x351c11;this[_0x47abe6(0x1fb)]=0x0;},Window_OTB_TurnOrder['prototype'][_0x351c11(0x2c0)]=function(){const _0x59d821=_0x351c11,_0xd10da2=Window_OTB_TurnOrder['Settings'];if(_0xd10da2[_0x59d821(0x423)]===_0x59d821(0x30b))return;if(_0xd10da2['BgDimStyle']==='image'&&_0xd10da2[_0x59d821(0x1ee)]!==''){if(_0x59d821(0x304)!==_0x59d821(0x304)){if(!this[_0x59d821(0x1dc)]())return;this['_otb_actionBattlersNext']=[],this[_0x59d821(0x302)]=![];}else{const _0x52c48a=ImageManager['loadSystem'](_0xd10da2[_0x59d821(0x1ee)]);_0x52c48a[_0x59d821(0x427)](this[_0x59d821(0x367)]['bind'](this,_0x52c48a));return;}};const _0x3227a6=this[_0x59d821(0x2da)],_0x3b42c7=ColorManager[_0x59d821(0x377)](),_0x535bdf=ColorManager[_0x59d821(0x269)](),_0x399ceb=this['_subjectX'],_0x5011e6=_0xd10da2['SpriteThin'],_0x3d2cd5=0x0,_0x433ab5=_0xd10da2[_0x59d821(0x3c7)],_0x359d6e=this['_currentX'],_0x4b9ac6=this['_nextX'],_0x182f20=this[_0x59d821(0x1bc)];switch(_0xd10da2[_0x59d821(0x423)]){case _0x59d821(0x36e):_0xd10da2['OrderDirection']?(_0x3227a6[_0x59d821(0x2d3)](_0x399ceb,_0x3d2cd5,_0x5011e6/0x2,_0x433ab5,_0x535bdf,_0x3b42c7,![]),_0x3227a6[_0x59d821(0x250)](_0x399ceb+_0x5011e6/0x2,_0x3d2cd5,_0x5011e6/0x2,_0x433ab5,_0x3b42c7),_0x3227a6[_0x59d821(0x2d3)](_0x359d6e,_0x3d2cd5,_0x182f20/0x2,_0x433ab5,_0x535bdf,_0x3b42c7,![]),_0x3227a6[_0x59d821(0x250)](_0x359d6e+_0x182f20/0x2,_0x3d2cd5,_0x182f20/0x2,_0x433ab5,_0x3b42c7),_0x3227a6['gradientFillRect'](_0x4b9ac6,_0x3d2cd5,_0x182f20/0x2,_0x433ab5,_0x535bdf,_0x3b42c7,![]),_0x3227a6['fillRect'](_0x4b9ac6+_0x182f20/0x2,_0x3d2cd5,_0x182f20/0x2,_0x433ab5,_0x3b42c7)):(_0x3227a6[_0x59d821(0x250)](_0x399ceb,_0x3d2cd5,_0x5011e6/0x2,_0x433ab5,_0x3b42c7),_0x3227a6['gradientFillRect'](_0x399ceb+_0x5011e6/0x2,_0x3d2cd5,_0x5011e6/0x2,_0x433ab5,_0x3b42c7,_0x535bdf,![]),_0x3227a6['fillRect'](_0x359d6e,_0x3d2cd5,_0x182f20/0x2,_0x433ab5,_0x3b42c7),_0x3227a6[_0x59d821(0x2d3)](_0x359d6e+_0x182f20/0x2,_0x3d2cd5,_0x182f20/0x2,_0x433ab5,_0x3b42c7,_0x535bdf,![]),_0x3227a6['fillRect'](_0x4b9ac6,_0x3d2cd5,_0x182f20/0x2,_0x433ab5,_0x3b42c7),_0x3227a6[_0x59d821(0x2d3)](_0x4b9ac6+_0x182f20/0x2,_0x3d2cd5,_0x182f20/0x2,_0x433ab5,_0x3b42c7,_0x535bdf,![]));break;default:_0x3227a6[_0x59d821(0x250)](_0x399ceb,_0x3d2cd5,_0x5011e6,_0x433ab5,_0x3b42c7),_0x3227a6['fillRect'](_0x359d6e,_0x3d2cd5,_0x182f20,_0x433ab5,_0x3b42c7),_0x3227a6[_0x59d821(0x250)](_0x4b9ac6,_0x3d2cd5,_0x182f20,_0x433ab5,_0x3b42c7);break;}},Window_OTB_TurnOrder[_0x351c11(0x19c)]['drawBgImage']=function(_0x2ee693){const _0x2f98e3=_0x351c11;this[_0x2f98e3(0x21d)]=new Sprite(),this[_0x2f98e3(0x21d)]['bitmap']=_0x2ee693,this[_0x2f98e3(0x380)](this[_0x2f98e3(0x21d)]);const _0x207081=Window_OTB_TurnOrder[_0x2f98e3(0x402)];this[_0x2f98e3(0x21d)]['x']=_0x207081[_0x2f98e3(0x251)],this[_0x2f98e3(0x21d)]['y']=_0x207081[_0x2f98e3(0x388)];},Window_OTB_TurnOrder['prototype']['drawUiText']=function(){const _0x11461e=_0x351c11;this[_0x11461e(0x300)]['clear'](),this[_0x11461e(0x20a)]();const _0x297335=Window_OTB_TurnOrder[_0x11461e(0x402)];this[_0x11461e(0x300)]['fontSize']=_0x297335['UiFontSize'];let _0x47cc5c=_0x297335[_0x11461e(0x261)];_0x47cc5c===_0x11461e(0x2f7)&&(_0x47cc5c=_0x297335[_0x11461e(0x2c1)]?'right':'left');let _0x2e0bcc=_0x297335['SpriteLength'];if(_0x297335[_0x11461e(0x3d4)]!==''){const _0x7a3538=this[_0x11461e(0x2ff)]+_0x297335[_0x11461e(0x411)],_0x2eae9e=_0x2e0bcc+_0x297335[_0x11461e(0x23d)],_0x22bd94=_0x297335[_0x11461e(0x2c5)];this[_0x11461e(0x218)](_0x297335['UiSubjectText'],_0x7a3538,_0x2eae9e,_0x22bd94,_0x11461e(0x1a9));}if(_0x297335[_0x11461e(0x364)]!==''){if('euTDo'==='euTDo'){const _0x1e6d71=this[_0x11461e(0x3b6)]+_0x297335['UiCurrentOffsetX'],_0xb0b573=_0x2e0bcc+_0x297335[_0x11461e(0x1cf)],_0x54e622=this[_0x11461e(0x1bc)];this[_0x11461e(0x218)](_0x297335[_0x11461e(0x364)],_0x1e6d71,_0xb0b573,_0x54e622,_0x47cc5c);}else return this[_0x11461e(0x296)]===_0x353218&&(this[_0x11461e(0x296)]=this[_0x11461e(0x384)]()),this[_0x11461e(0x296)];}if(_0x297335[_0x11461e(0x273)]!==''){if(_0x11461e(0x314)===_0x11461e(0x314)){const _0x3fd799=this['_nextX']+_0x297335[_0x11461e(0x1fd)],_0x4f8b99=_0x2e0bcc+_0x297335[_0x11461e(0x291)],_0x393905=this['_spriteGroupWidth'];this[_0x11461e(0x218)](_0x297335[_0x11461e(0x273)],_0x3fd799,_0x4f8b99,_0x393905,_0x47cc5c);}else{const _0x16b223=_0x5d181c[_0x11461e(0x402)];this['_fadeSpeed']=_0x43c06c[_0x11461e(0x421)](0xff/(_0x16b223[_0x11461e(0x22b)]||0x1));}}},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x414)]=function(){const _0x372b1a=_0x351c11,_0x25dbab=Window_OTB_TurnOrder['Settings'];this['_spriteContainer']=new Sprite(),this[_0x372b1a(0x323)](this[_0x372b1a(0x3bc)]),this[_0x372b1a(0x3f3)]=null,this[_0x372b1a(0x1f7)]=[],this['_nextTurn']=[],this['_previewContainer']=new Sprite(),this[_0x372b1a(0x3c6)]['x']=_0x25dbab[_0x372b1a(0x222)],this['_previewContainer']['y']=_0x25dbab['PreviewOffsetY'],this['_previewContainer']['x']-=Math[_0x372b1a(0x421)](_0x25dbab[_0x372b1a(0x2c5)]*0.5*_0x25dbab[_0x372b1a(0x299)]),_0x25dbab[_0x372b1a(0x2c1)]&&(this[_0x372b1a(0x3c6)]['x']+=_0x25dbab[_0x372b1a(0x2c5)]),this[_0x372b1a(0x3c6)]['y']-=Math[_0x372b1a(0x421)](_0x25dbab['SpriteLength']*0.5*_0x25dbab[_0x372b1a(0x299)]),this['addChild'](this['_previewContainer']),this[_0x372b1a(0x293)]=[],this[_0x372b1a(0x1d4)]=[];},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x386)]=function(){const _0x180546=_0x351c11;Window_Base[_0x180546(0x19c)][_0x180546(0x386)][_0x180546(0x1e4)](this),this[_0x180546(0x339)](),this[_0x180546(0x2cd)](),this[_0x180546(0x3f7)](),this[_0x180546(0x395)]();},Window_OTB_TurnOrder['prototype'][_0x351c11(0x29c)]=function(){const _0xf6fc39=_0x351c11;this[_0xf6fc39(0x430)]=!![];},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x339)]=function(){const _0x6bedc7=_0x351c11;if(!this[_0x6bedc7(0x430)])return;this[_0x6bedc7(0x430)]=![];for(const _0x1b881c of this['_currentTurn']){if(_0x6bedc7(0x374)!==_0x6bedc7(0x374))_0x33ffc6[_0x6bedc7(0x1b7)](this[_0x6bedc7(0x366)](),-_0x286d81,![]);else{if(!_0x1b881c)continue;_0x1b881c[_0x6bedc7(0x3aa)]();}}for(const _0x334a20 of this[_0x6bedc7(0x29d)]){if(!_0x334a20)continue;_0x334a20[_0x6bedc7(0x3aa)]();}},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x2cd)]=function(){const _0x550fa9=_0x351c11,_0x554147=Window_OTB_TurnOrder[_0x550fa9(0x402)];if(_0x554147[_0x550fa9(0x2f4)]!==_0x550fa9(0x2ed))return;if(!_0x554147['RepositionTopForHelp'])return;const _0x345eae=SceneManager[_0x550fa9(0x330)][_0x550fa9(0x3a7)];if(!_0x345eae)return;if(_0x345eae[_0x550fa9(0x2ba)]){if(_0x550fa9(0x3c8)!==_0x550fa9(0x3c8))return'face';else this['x']=this[_0x550fa9(0x321)]+(_0x554147[_0x550fa9(0x1f0)]||0x0),this['y']=this['_homeY']+(_0x554147[_0x550fa9(0x403)]||0x0);}else this['x']=this[_0x550fa9(0x321)],this['y']=this[_0x550fa9(0x355)];const _0x2c6568=SceneManager[_0x550fa9(0x330)][_0x550fa9(0x303)];Window_OTB_TurnOrder[_0x550fa9(0x1ce)]===undefined&&(Window_OTB_TurnOrder[_0x550fa9(0x1ce)]=Math[_0x550fa9(0x438)]((Graphics[_0x550fa9(0x3fd)]-Math[_0x550fa9(0x3cf)](Graphics['boxWidth'],_0x2c6568[_0x550fa9(0x3fd)]))/0x2));Window_OTB_TurnOrder[_0x550fa9(0x3b0)]===undefined&&(Window_OTB_TurnOrder['_ogWindowLayerY']=Math[_0x550fa9(0x438)]((Graphics[_0x550fa9(0x3b4)]-Math[_0x550fa9(0x3cf)](Graphics['boxHeight'],_0x2c6568[_0x550fa9(0x3b4)]))/0x2));;this['x']+=_0x2c6568['x']-Window_OTB_TurnOrder[_0x550fa9(0x1ce)],this['y']+=_0x2c6568['y']-Window_OTB_TurnOrder[_0x550fa9(0x3b0)];},Window_OTB_TurnOrder['prototype']['updateVisibility']=function(){const _0x4f3eb6=_0x351c11;this[_0x4f3eb6(0x2ba)]=$gameSystem[_0x4f3eb6(0x1b6)]();if(BattleManager['_phase']===_0x4f3eb6(0x258)){if(_0x4f3eb6(0x2ee)!==_0x4f3eb6(0x2ee))return _0x5e7c49(_0x31e71d['$1']);else{if(!this['_fadeSpeed']){const _0x3cec15=Window_OTB_TurnOrder[_0x4f3eb6(0x402)];this[_0x4f3eb6(0x307)]=Math[_0x4f3eb6(0x421)](0xff/(_0x3cec15[_0x4f3eb6(0x22b)]||0x1));}this['opacity']-=this[_0x4f3eb6(0x307)],this[_0x4f3eb6(0x324)]-=this[_0x4f3eb6(0x307)],this[_0x4f3eb6(0x24f)][_0x4f3eb6(0x328)]-=this['_fadeSpeed'];}}},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x395)]=function(){const _0x3a5ec2=_0x351c11;if(!this[_0x3a5ec2(0x3bc)])return;const _0x5c454a=Window_OTB_TurnOrder[_0x3a5ec2(0x402)],_0x3cf29f=_0x5c454a['OrderDirection'];_0x3cf29f?this[_0x3a5ec2(0x3bc)][_0x3a5ec2(0x37f)]['sort']((_0x557e41,_0x2b7086)=>_0x557e41['x']-_0x2b7086['x']):'ZmoIO'===_0x3a5ec2(0x1c8)?this[_0x3a5ec2(0x3bc)][_0x3a5ec2(0x37f)][_0x3a5ec2(0x278)]((_0x5e1e54,_0x5dc77a)=>_0x5dc77a['x']-_0x5e1e54['x']):(_0x2c108f[_0x3a5ec2(0x2d3)](_0x452a04,_0x14dae9,_0x428b24/0x2,_0x5f0d63,_0x41c259,_0x51f505,![]),_0x58f8b6[_0x3a5ec2(0x250)](_0x2bb040+_0xdf88f4/0x2,_0x42dc14,_0x4d1d2a/0x2,_0x26bdfa,_0x8c2d7a),_0x41ceac[_0x3a5ec2(0x2d3)](_0x419e9a,_0x46d9af,_0x399fce/0x2,_0x30109e,_0x5a7d2e,_0x43ded0,![]),_0x21adfa[_0x3a5ec2(0x250)](_0x451dfd+_0x56c486/0x2,_0x3f50fd,_0x543017/0x2,_0x122de9,_0x34648b),_0x41d4cf[_0x3a5ec2(0x2d3)](_0x5e9f91,_0x5a663e,_0x539408/0x2,_0x2bd097,_0x5a13c9,_0x2a8c12,![]),_0x23c905[_0x3a5ec2(0x250)](_0x2f3c8d+_0x458247/0x2,_0x47962c,_0x18c1fe/0x2,_0x46a25d,_0x17c279));},Window_OTB_TurnOrder[_0x351c11(0x19c)]['removeSprite']=function(_0x497f73){const _0x5d4f59=_0x351c11;if(!_0x497f73)return;if(_0x497f73['_sourceArray']){if('hQorE'==='hQorE')_0x497f73['_sourceArray'][_0x5d4f59(0x2ac)](_0x497f73);else return 0x0;}const _0x4d052f=Window_OTB_TurnOrder[_0x5d4f59(0x402)],_0x9beac2=0x3e8/0x3c*_0x4d052f[_0x5d4f59(0x22b)]+0x1f4;_0x497f73['startFade'](0x0),setTimeout(this[_0x5d4f59(0x3f2)][_0x5d4f59(0x266)](this,_0x497f73),_0x9beac2);},Window_OTB_TurnOrder['prototype']['processSpriteRemoval']=function(_0x171874){const _0xf780de=_0x351c11;_0x171874[_0xf780de(0x396)]&&_0x171874[_0xf780de(0x396)][_0xf780de(0x2ac)](_0x171874),this[_0xf780de(0x3bc)]['removeChild'](_0x171874),this[_0xf780de(0x3c6)]['removeChild'](_0x171874);},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x2a7)]=function(){const _0x2afec8=_0x351c11;if(!this['_subject'])return;this[_0x2afec8(0x41f)](this[_0x2afec8(0x3f3)]);},Window_OTB_TurnOrder['prototype'][_0x351c11(0x22d)]=function(){const _0x2fecf3=_0x351c11;while(this['_currentTurn']['length']){if('tBzPy'===_0x2fecf3(0x41a)){if(!this[_0x2fecf3(0x2f8)]())return;_0x3d7eb3?_0x5e9630[_0x2fecf3(0x1d8)](this,_0x365fcf,_0x56ff52[_0x2fecf3(0x21a)]):_0x4d0c2a[_0x2fecf3(0x1d8)](this,_0x16ccab,_0x2213fa[_0x2fecf3(0x370)]);}else{const _0x1639e5=this[_0x2fecf3(0x1f7)][_0x2fecf3(0x1d1)]();_0x1639e5[_0x2fecf3(0x1c2)](0x0);}}while(this[_0x2fecf3(0x29d)]['length']){if('dPuDZ'==='FwpFl')_0x2b4adb=(_0x41af5c?_0x2c789e[_0x2fecf3(0x435)]:_0xdaaa5f[_0x2fecf3(0x3b6)])+_0x93cfb3,_0x5192fd-=_0xe8e0bd*_0x3420ba;else{const _0x3ae883=this['_nextTurn'][_0x2fecf3(0x1d1)]();if(!_0x3ae883)continue;this['_currentTurn']['push'](_0x3ae883);}}for(const _0x56c9fc of this[_0x2fecf3(0x1f7)]){if(_0x2fecf3(0x43b)===_0x2fecf3(0x240))_0x27e3c3[_0x2fecf3(0x3f0)][_0x2fecf3(0x1ea)][_0x2fecf3(0x1e4)](this);else{if(!_0x56c9fc)continue;_0x56c9fc[_0x2fecf3(0x35f)](this[_0x2fecf3(0x1f7)]);}}},Window_OTB_TurnOrder[_0x351c11(0x19c)]['createTurnOrderSprites']=function(_0x5e18ae,_0x5f5954){const _0x443bc7=_0x351c11,_0x4f6121=_0x5e18ae===BattleManager[_0x443bc7(0x21a)]?this[_0x443bc7(0x1f7)]:this['_nextTurn'],_0x2bf620={};for(const _0x16f6e5 of _0x5e18ae){const _0x768818=_0x443bc7(0x2c9)[_0x443bc7(0x433)](_0x16f6e5[_0x443bc7(0x33f)]()?_0x443bc7(0x232):'enemy',_0x16f6e5['index']());_0x2bf620[_0x768818]=_0x2bf620[_0x768818]||0x0;const _0x47724b=_0x2bf620[_0x768818]++,_0x1109f8=new Sprite_OTB_TurnOrder_Battler(_0x16f6e5,_0x47724b,_0x4f6121);this['_spriteContainer'][_0x443bc7(0x323)](_0x1109f8),_0x4f6121['push'](_0x1109f8);}for(const _0x15596f of _0x4f6121){if(!_0x15596f)continue;_0x15596f[_0x443bc7(0x1c2)](0xff),_0x15596f['calculateTargetPositions'](),_0x5f5954&&(_0x15596f[_0x443bc7(0x328)]=0xff,_0x15596f['x']=_0x15596f[_0x443bc7(0x412)],_0x15596f['_positionDuration']=0x0);}},Window_OTB_TurnOrder['prototype']['createNewTurnOrderSprites']=function(){const _0x4972a6=_0x351c11,_0x5db125=BattleManager[_0x4972a6(0x370)];this['createTurnOrderSprites'](_0x5db125);},Window_OTB_TurnOrder['prototype']['shiftTurnOrderForSubject']=function(_0x331d4b,_0x55109a){const _0x360897=_0x351c11;this[_0x360897(0x2a7)]();for(const _0x9bc27c of this[_0x360897(0x1f7)]){if(_0x360897(0x2bc)==='JlgXi'){if(!_0x9bc27c)continue;_0x9bc27c[_0x360897(0x39c)]()===_0x331d4b&&(_0x360897(0x3b3)===_0x360897(0x1eb)?(_0x1c8c22[_0x360897(0x1bd)](),_0x4cdcf6[_0x360897(0x3f0)][_0x360897(0x2a4)][_0x360897(0x1e4)](this)):(_0x9bc27c['_instance']=_0x9bc27c[_0x360897(0x212)]||0x0,_0x9bc27c[_0x360897(0x212)]--));}else{if(!this['_spriteContainer'])return;const _0xd994d6=_0xcb0547[_0x360897(0x402)],_0x2f744c=_0xd994d6[_0x360897(0x2c1)];_0x2f744c?this[_0x360897(0x3bc)][_0x360897(0x37f)][_0x360897(0x278)]((_0xfc3e9d,_0xc8a650)=>_0xfc3e9d['x']-_0xc8a650['x']):this[_0x360897(0x3bc)][_0x360897(0x37f)][_0x360897(0x278)]((_0x50575c,_0x3dffae)=>_0x3dffae['x']-_0x50575c['x']);}}const _0x53a81d=this[_0x360897(0x1f7)][_0x360897(0x317)](_0x20dc4a=>_0x20dc4a[_0x360897(0x39c)]()===_0x331d4b);if(this[_0x360897(0x1f7)][_0x53a81d])this[_0x360897(0x3f3)]=this[_0x360897(0x1f7)][_0x53a81d],this[_0x360897(0x1f7)][_0x53a81d]['calculateTargetPositions'](),this[_0x360897(0x1f7)][_0x360897(0x434)](_0x53a81d,0x1);else{if(_0x331d4b){if(_0x360897(0x3a9)!==_0x360897(0x3a9))this[_0x360897(0x296)]=this[_0x360897(0x384)]();else{const _0x5dffda=new Sprite_OTB_TurnOrder_Battler(_0x331d4b,-0x1,null);this[_0x360897(0x3bc)]['addChild'](_0x5dffda),this[_0x360897(0x3f3)]=_0x5dffda,_0x5dffda['startFade'](0xff),_0x5dffda[_0x360897(0x1c0)]=0x258,_0x5dffda['x']=this[_0x360897(0x2ff)],_0x5dffda[_0x360897(0x412)]=this[_0x360897(0x2ff)],_0x55109a&&(_0x5dffda[_0x360897(0x328)]=0xff);}}}for(const _0xcf0db8 of this[_0x360897(0x1f7)]){if(!_0xcf0db8)continue;_0xcf0db8[_0x360897(0x3aa)]();}},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x3b7)]=function(){const _0x22a7c6=_0x351c11;for(const _0x4bc511 of this[_0x22a7c6(0x1f7)]){if(!_0x4bc511)continue;const _0x46b0ff=_0x4bc511[_0x22a7c6(0x39c)]();if(BattleManager[_0x22a7c6(0x21a)][_0x22a7c6(0x202)](_0x46b0ff))continue;this[_0x22a7c6(0x41f)](_0x4bc511);}for(const _0x4e3965 of this['_nextTurn']){if(!_0x4e3965)continue;const _0x43c909=_0x4e3965[_0x22a7c6(0x39c)]();if(BattleManager[_0x22a7c6(0x370)]['includes'](_0x43c909))continue;this['removeSprite'](_0x4e3965);}},Window_OTB_TurnOrder['prototype']['addBattlerToTurnOrderAtEnd']=function(_0x3934f9,_0x54fdfe){const _0x3e25ac=_0x351c11,_0x405df7=_0x54fdfe===BattleManager['_actionBattlers']?this['_currentTurn']:this['_nextTurn'];if(!_0x405df7)return;const _0x14102b=VisuMZ['BattleSystemOTB'][_0x3e25ac(0x2ce)](_0x3934f9,_0x54fdfe),_0x299edd=_0x14102b[_0x3e25ac(0x234)]-0x1,_0x1d4570=new Sprite_OTB_TurnOrder_Battler(_0x3934f9,_0x299edd,_0x405df7);this[_0x3e25ac(0x3bc)][_0x3e25ac(0x323)](_0x1d4570),_0x405df7[_0x3e25ac(0x2ad)](_0x1d4570),_0x1d4570['startFade'](0xff),this['requestUpdateTurnOrders']();},Window_OTB_TurnOrder['prototype'][_0x351c11(0x350)]=function(_0x45fb5f,_0x327271){const _0x4cbe94=_0x351c11,_0x28b7c7=_0x327271===BattleManager[_0x4cbe94(0x21a)]?this['_currentTurn']:this['_nextTurn'];if(!_0x28b7c7)return;for(const _0x3dc91f of _0x28b7c7){if(!_0x3dc91f)continue;_0x3dc91f[_0x4cbe94(0x39c)]()===_0x45fb5f&&(_0x3dc91f[_0x4cbe94(0x212)]=_0x3dc91f[_0x4cbe94(0x212)]||0x0,_0x3dc91f[_0x4cbe94(0x212)]++);}const _0x1f7b3b=0x0,_0x358a0e=new Sprite_OTB_TurnOrder_Battler(_0x45fb5f,_0x1f7b3b,_0x28b7c7);this[_0x4cbe94(0x3bc)][_0x4cbe94(0x323)](_0x358a0e),_0x28b7c7[_0x4cbe94(0x440)](_0x358a0e),_0x358a0e[_0x4cbe94(0x1c2)](0xff),_0x358a0e[_0x4cbe94(0x1c0)]=0x258,_0x358a0e['x']=this[_0x4cbe94(0x2ff)],this[_0x4cbe94(0x29c)]();},Window_OTB_TurnOrder['prototype'][_0x351c11(0x288)]=function(_0x4cb5c3,_0x5cecef){const _0x32626c=_0x351c11,_0x1394ab=this[_0x32626c(0x1f7)];if(!_0x1394ab)return;let _0x15dc89=0x0;for(let _0x3f089e=0x0;_0x3f089e<_0x5cecef;_0x3f089e++){const _0x3be9ba=_0x1394ab[_0x3f089e];if(!_0x3be9ba)continue;if(_0x3be9ba['battler']()!==_0x4cb5c3)continue;_0x15dc89=_0x3be9ba[_0x32626c(0x212)]+0x1;}for(let _0x3ef9e1=_0x5cecef;_0x3ef9e1<_0x1394ab[_0x32626c(0x234)];_0x3ef9e1++){if(_0x32626c(0x2db)!==_0x32626c(0x2db)){const _0x29496f=this[_0x32626c(0x3f3)]['_actions'][_0x32626c(0x429)](_0x3b318c=>_0x3b318c['_forceAction']);this[_0x32626c(0x3f3)]['makeActions']();if(_0x29496f){let _0xc17603=_0x29496f['length'];while(_0xc17603--){this[_0x32626c(0x3f3)][_0x32626c(0x2e8)]['pop']();}this[_0x32626c(0x3f3)][_0x32626c(0x2e8)]=_0x29496f[_0x32626c(0x3ef)](this[_0x32626c(0x3f3)][_0x32626c(0x2e8)]);}}else{const _0xa46d31=_0x1394ab[_0x3ef9e1];if(!_0xa46d31)continue;if(_0xa46d31[_0x32626c(0x39c)]()!==_0x4cb5c3)continue;_0xa46d31[_0x32626c(0x212)]=_0xa46d31['_instance']||0x0,_0xa46d31['_instance']++;}}const _0x4351df=new Sprite_OTB_TurnOrder_Battler(_0x4cb5c3,_0x15dc89,_0x1394ab);this[_0x32626c(0x3bc)][_0x32626c(0x323)](_0x4351df),_0x1394ab[_0x32626c(0x434)](_0x5cecef,0x0,_0x4351df),_0x4351df[_0x32626c(0x1c2)](0xff),_0x4351df['_positionDuration']=0x258,_0x4351df['x']=this['_subjectX'],this[_0x32626c(0x29c)]();},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x3bd)]=function(){const _0x1c33c2=_0x351c11;this[_0x1c33c2(0x23a)](BattleManager[_0x1c33c2(0x21a)],!![]),this[_0x1c33c2(0x23a)](BattleManager[_0x1c33c2(0x370)],!![]),this[_0x1c33c2(0x238)](BattleManager['_subject'],!![]),this[_0x1c33c2(0x395)]();},Window_OTB_TurnOrder['prototype'][_0x351c11(0x35b)]=function(_0x66a9d7){const _0x1969c2=_0x351c11;this[_0x1969c2(0x322)](),_0x66a9d7&&_0x66a9d7[_0x1969c2(0x2cc)]()!==null&&this['createOrderPreview'](_0x66a9d7);},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x322)]=function(){const _0x20f936=_0x351c11;for(const _0x52ba54 of this[_0x20f936(0x3c6)][_0x20f936(0x37f)]){if(!_0x52ba54)continue;this[_0x20f936(0x41f)](_0x52ba54);}},Window_OTB_TurnOrder['prototype']['createOrderPreview']=function(_0x418db8){const _0x1aad6e=_0x351c11,_0x3dbacb=_0x418db8[_0x1aad6e(0x366)](),_0x2d5b4b=_0x418db8[_0x1aad6e(0x2ae)](),_0x85a083=_0x418db8[_0x1aad6e(0x1bf)]();if(_0x2d5b4b!==0x0){if('XwEDT'==='XTZNQ'){if(this[_0x1aad6e(0x1dc)]())return![];return _0x2be1d9[_0x1aad6e(0x3f0)]['BattleManager_isTpb'][_0x1aad6e(0x1e4)](this);}else this[_0x1aad6e(0x1cd)](_0x3dbacb,![],_0x2d5b4b);}_0x85a083!==0x0&&(_0x1aad6e(0x1c7)!==_0x1aad6e(0x2a9)?this[_0x1aad6e(0x1cd)](_0x3dbacb,!![],_0x85a083):(_0x1e1af9[_0x1aad6e(0x1bd)](),this[_0x1aad6e(0x27f)][_0x1aad6e(0x382)](),this['_actorCommandWindow']['close']()));if(!_0x418db8[_0x1aad6e(0x2f0)]())return;const _0x1e772b=SceneManager['_scene']['_actorWindow'],_0x1a5e27=SceneManager[_0x1aad6e(0x330)][_0x1aad6e(0x373)];let _0x37d670=null;if(_0x1e772b&&_0x1e772b[_0x1aad6e(0x2f1)])_0x1aad6e(0x280)!==_0x1aad6e(0x42f)?_0x37d670=_0x1e772b[_0x1aad6e(0x232)](_0x1e772b['index']()):this[_0x1aad6e(0x35c)]['resumeTurnOrderSprites']();else _0x1a5e27&&_0x1a5e27[_0x1aad6e(0x2f1)]&&(_0x37d670=_0x1a5e27[_0x1aad6e(0x19f)]());if(!_0x37d670)return;const _0x5e6fe2=_0x418db8['otbCalcTargetCurrentOrderChange'](_0x37d670),_0x3a196e=_0x418db8[_0x1aad6e(0x27d)](_0x37d670);if(_0x5e6fe2!==0x0){if(_0x1aad6e(0x372)!=='ZWsci')this[_0x1aad6e(0x1cd)](_0x37d670,![],_0x5e6fe2);else{const _0xd8885c=this[_0x1aad6e(0x256)](),_0x14656d=this[_0x1aad6e(0x3f1)](),_0x36b7cb=_0xc053f[_0x1aad6e(0x3cf)](_0xd8885c,_0x14656d);this[_0x1aad6e(0x223)][_0x1aad6e(0x1e1)]=new _0x489584(_0xd8885c,_0x14656d);const _0x311e81=this['_graphicSprite'][_0x1aad6e(0x1e1)],_0xd28743=this['_graphicSv'][_0x1aad6e(0x298)](/\$/i),_0x1ebd82=_0xd28743?0x1:_0x1e7d61[_0x1aad6e(0x1c5)],_0x3bf6dc=_0xd28743?0x1:_0x36774c[_0x1aad6e(0x301)],_0x13e5df=_0x3b2212[_0x1aad6e(0x3fd)]/_0x1ebd82,_0x4ecaf=_0x3588a5[_0x1aad6e(0x3b4)]/_0x3bf6dc,_0x4cad1b=_0x115471[_0x1aad6e(0x3cf)](0x1,_0x36b7cb/_0x13e5df,_0x36b7cb/_0x4ecaf),_0x3b589d=_0x13e5df*_0x4cad1b,_0x51f909=_0x4ecaf*_0x4cad1b,_0x4864af=_0x27bfd8['round']((_0xd8885c-_0x3b589d)/0x2),_0x537ec8=_0x5e382c[_0x1aad6e(0x438)]((_0x14656d-_0x51f909)/0x2);_0x311e81[_0x1aad6e(0x2be)](_0x3afeed,0x0,0x0,_0x13e5df,_0x4ecaf,_0x4864af,_0x537ec8,_0x3b589d,_0x51f909);}}_0x3a196e!==0x0&&this[_0x1aad6e(0x1cd)](_0x37d670,!![],_0x3a196e);},Window_OTB_TurnOrder[_0x351c11(0x19c)][_0x351c11(0x1cd)]=function(_0x3e196a,_0x4e7780,_0x55286c){const _0x529dd0=_0x351c11;if(!_0x3e196a)return;if(_0x55286c===0x0)return;const _0x3d2d7c=_0x4e7780?BattleManager[_0x529dd0(0x370)]:BattleManager['_actionBattlers'],_0x17ddb2=VisuMZ[_0x529dd0(0x3f0)]['GetAllIndicies'](_0x3e196a,_0x3d2d7c),_0x4fd325=_0x4e7780?this['_nextTurn']:this[_0x529dd0(0x1f7)],_0x3ae056=_0x4e7780?this['_previewNext']:this[_0x529dd0(0x293)];if(_0x17ddb2[_0x529dd0(0x234)]<=0x0)return;for(let _0x5e3236=0x0;_0x5e3236<_0x17ddb2['length'];_0x5e3236++){const _0x2d70cc=new Sprite_OTB_TurnOrder_Preview(_0x3e196a,_0x5e3236,_0x4fd325,_0x55286c);this['_previewContainer']['addChild'](_0x2d70cc),_0x3ae056[_0x529dd0(0x2ad)](_0x2d70cc),_0x2d70cc[_0x529dd0(0x3aa)](),_0x2d70cc[_0x529dd0(0x1c2)](0xff);}};