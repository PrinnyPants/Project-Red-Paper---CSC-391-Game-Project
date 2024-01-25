//=============================================================================
// VisuStella MZ - Aggro Control System
// VisuMZ_2_AggroControlSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_AggroControlSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.AggroControlSystem = VisuMZ.AggroControlSystem || {};
VisuMZ.AggroControlSystem.version = 1.13;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.13] [AggroControlSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Aggro_Control_System_VisuStella_MZ
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * A common mechanic found in many RPG's nowadays is the ability to steer the
 * way enemies target party members. This can be in the form of provocations, 
 * taunts, and aggro.
 *
 * Provocations come in the form of states, where when a unit applies a provoke
 * state on a target, the target must attack the provoker when using single
 * target skills. This plugin provides support for multiple provocations and
 * such provocations will be given focus based on the state's priority value.
 *
 * Taunts are a third way to steer an opponent to focus on a party member. The
 * taunt effects can be split up into global, physical, magical, or certain hit
 * only taunts and these can be applied to almost any trait object.
 *
 * Aggro is a numeric value that determines the likelihood and/or priority
 * level of how often a target party member is to be attacked by an enemy unit.
 * The higher the aggro value, the more likely the chances of being targeted.
 * A option can be turned on (or through notetags) to set enemies to always
 * target the party member with the highest aggro.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Three different ways to influencing which targets enemies should attack:
 *   Provoke, taunt, and aggro.
 * * Provoke and taunt effects work both ways for actors and enemies.
 * * Aggro effects accumulate through battle and can be manipulated through
 *   notetag values, Plugin Commands, and/or Plugin Parameters.
 * * Provoked battlers can have provoke lines displayed to indicate which
 *   unit has provoked them.
 * * Taunting units can have animations played on them repeatedly to quickly
 *   relay information to the player about their taunt properties.
 * * Gauges that can be displayed over the heads of actor sprites to display
 *   how much aggro that actor holds in comparison to the other actors.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
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
 * VisuMZ_1_BattleCore
 *
 * - Provoke Priority Lines and Taunt animations become available if these
 *   plugins are installed.
 *
 * ---
 *
 * ============================================================================
 * How Aggro, Provoke, and Taunts Work
 * ============================================================================
 *
 * This section will explain how aggro, provoke, and taunts work.
 *
 * ---
 *
 * Provoke
 *
 * - Provocations come in the form of states, where when a unit applies a
 * provoke state on a target, the target must attack the provoker when using
 * single target skills. This plugin provides support for multiple provocations
 * and such provocations will be given focus based on the state's database
 * priority value.
 *
 * - The provoke will last only as long as the duration of the state itself. If
 * the state's duration is refreshed by reapplying the Provoke state, then the
 * provoker of that state will then switch over to the one applying the newly
 * added state.
 *
 * - When an actor selects a target for an action and the actor is provoked by
 * an enemy on the other team, the player's choice selection becomes limited to
 * only the provoker.
 *
 * - Provoke can be bypassed through the <Bypass Provoke> notetag.
 *
 * ---
 *
 * Taunts
 *
 * - Taunts are a third way to steer an opponent to focus on a party member.
 * The taunt effects can be split up into global, physical, magical, or certain
 * hit only taunts and these can be applied to almost any trait object.
 *
 * - When an actor selects a target and the enemy team has a taunting unit,
 * the player's choice selection becomes limited to only the targets with the
 * associated taunt type.
 *
 * - Taunts can be bypassed through the <Bypass Taunt> notetag.
 *
 * ---
 *
 * Aggro
 *
 * - Aggro is a numeric value that determines the likelihood and/or priority
 * level of how often a target party member is to be attacked by an enemy unit.
 * The higher the aggro value, the more likely the chances of being targeted.
 * A option can be turned on (or through notetags) to set enemies to always
 * target the party member with the highest aggro.
 *
 * - Skills and items can raise its user's aggro value through notetags and/or
 * how much damage they've dealt or healed. Skills and items can also change a
 * target's aggro value through notetags, too.
 *
 * - Through the Plugin Parameters, you can set Aggro to automatically raised
 * based on how much damage or healing dealt by a user.
 *
 * - Some enemies can be bypass forced aggro target through the <Bypass Aggro>
 * notetag while other enemies can be forced to target the highest aggro target
 * through the <Target Highest Aggro> notetag;
 *
 * ---
 *
 * Priorities
 *
 * - Priority will be given in the order of provokes, taunts, and then aggro.
 * This means if an enemy is provoked, the opposing side has a taunt, and there
 * is a member with high aggro, then the enemy will always attack the provoker
 * first before targeting a taunting unit before targeting the unit with high
 * aggro values.
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
 * === Provoke-Related Notetags ===
 *
 * The following notetags enable you to utilize the Provoke effects added by
 * this plugin. Provoked targets can only attack the provoking unit for single
 * target actions.
 *
 * ---
 *
 * <Provoke>
 *
 * - Used for: State Notetags
 * - Causes the state affected unit to be able to only attack the caster of the
 *   provoke state for single target actions.
 * - If multiple provoke states are applied, then the provoker is the one who
 *   applied the highest priority provoke state.
 *
 * ---
 *
 * <Bypass Provoke>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Makes the affected unit to ignore any and all provoke effects applied by
 *   any provoke states, allowing them to target foes as if they are unaffected
 *   by provoke states altogether.
 *
 * ---
 * 
 * <Bypass Provoke>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass provoke effects applied by any provoke states,
 *   allowing this action to target foes as if the user is unaffected by any
 *   provoke effects altogether.
 * 
 * ---
 * 
 * <Provoke Height Origin: x%>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Sets the provoke height origin point to x% of the sprite's height.
 * - This is the landing point for the provoke trails.
 * - Replace 'x' with a number presenting what rate of the sprite's height to
 *   set as the provoke height origin point.
 * 
 * ---
 *
 * === Taunt-Related Notetags ===
 *
 * ---
 *
 * <Taunt>
 * <All Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the taunting unit to become the target of the opposing team's
 *   single target actions for physical, magical, and certain hit actions.
 * - If multiple taunters exist, then the opposing team can select between any
 *   of the taunters for targets.
 *
 * ---
 *
 * <Physical Taunt>
 * <Magical Taunt>
 * <Certain Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the taunting unit to become the target of the opposing team's
 *   single target actions for physical, magical, and certain hit actions
 *   respectively.
 * - Add/remove any combination of the above to cause the affected unit to
 *   become the target of those types of actions.
 * - If multiple taunters exist, then the opposing team can select between any
 *   of the taunters for targets.
 *
 * ---
 *
 * <Bypass Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The affected unit will ignore any and all taunt effects created by the
 *   opposing team, allowing them to use single target actions as if no
 *   taunters exist on the opposing team.
 *
 * ---
 * 
 * <Bypass Taunt>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass taunt effects created by the opposing team,
 *   allowing the user to use single target actions as if no taunters exist on
 *   the opposing team.
 * 
 * ---
 *
 * === Aggro-Related Notetags ===
 *
 * ---
 *
 * <User Aggro: +x>
 * <User Aggro: -x>
 *
 * - Used for: Skill, Item
 * - Upon using this action, raise the user's battle aggro value by 'x'.
 * - Replace 'x' with the amount of battle aggro to increase/decrease by.
 * - This effect will only apply once per usage regardless of the number of
 *   successful hits landed by the action.
 *
 * ---
 *
 * <Target Aggro: +x>
 * <Target Aggro: -x>
 *
 * - Used for: Skill, Item
 * - Upon using this action, raise the target's battle aggro value by 'x'.
 * - Replace 'x' with the amount of battle aggro to increase/decrease by.
 * - This effect will apply multiple times based on the number of successful
 *   hits landed by the action.
 *
 * ---
 *
 * <Aggro: +x>
 * <Aggro: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected unit to passively have increased/decreased aggro
 *   values independent of the amount of aggro it earns in battle.
 * - Replace 'x' with the amount of aggro this object increases/decreases by.
 *
 * ---
 *
 * <Aggro Multiplier: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected unit to increase the amount of perceived aggro it has
 *   by the aggro multiplier.
 * - Replace 'x' with a number representing the percentage to increase/decrease
 *   the perceived aggro by.
 * - If multiple of these traits exist across different trait objects, the
 *   effects are increased multiplicatively.
 *
 * ---
 *
 * <Bypass Highest Aggro>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - If used on skills or items, the action will decide targets by aggro weight
 *   instead of always picking the highest aggro unit(s).
 * - If used on trait objects, the affected unit will decide targets by aggro
 *   weight instead of always picking the highest aggro unit(s).
 * - This is used for enemy A.I. or Actor auto battle A.I.
 *
 * ---
 * 
 * <Bypass Highest Aggro>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass highest aggro effects and instead focuses on
 *   targets by aggro weight instead.
 * - This is used for enemy A.I. or Actor auto battle A.I.
 * 
 * ---
 *
 * <Target Highest Aggro>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - If used on skills or items, the action will always decide its targets by
 *   the highest aggro value.
 * - If used on trait objects, the affected unit will always decide on targets
 *   by the highest aggro value.
 * - If the <Bypass Highest Aggro> notetag exists, this effect is ignored.
 * - This is used for enemy A.I. or Actor auto battle A.I.
 *
 * ---
 *
 * === JavaScript Notetags: Aggro-Related ===
 *
 * ---
 *
 * <JS User Aggro>
 *  code
 *  code
 *  value = code
 * </JS User Aggro>
 *
 * - Used for: Skill, Item
 * - Replace 'code' with JavaScript code to determine the final 'value' to
 *   change the user's battle aggro to upon using this skill.
 * - The 'user' variable represents the one using the skill/item.
 * - The 'target' variable represents the one receiving the skill/item hit.
 * - This effect will only apply once per usage regardless of the number of
 *   successful hits landed by the action.
 *
 * ---
 *
 * <JS Target Aggro>
 *  code
 *  code
 *  value = code
 * </JS Target Aggro>
 *
 * - Used for: Skill, Item
 * - Replace 'code' with JavaScript code to determine the final 'value' to
 *   change target's battle aggro to upon using this skill.
 * - The 'user' variable represents the one using the skill/item.
 * - The 'target' variable represents the one receiving the skill/item hit.
 * - This effect will apply multiple times based on the number of successful
 *   hits landed by the action.
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
 * Actor: Change Aggro
 * - Changes target actor's aggro value.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Change Aggro By:
 *   - Change aggro by this amount.
 *   - Use negative numbers to reduce aggro.
 *
 * ---
 *
 * Actor: Set Aggro
 * - Set target actor's aggro value.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Set Aggro To:
 *   - Sets target's aggro to this amount.
 *   - Aggro must be at least a value of 1.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Aggro
 * - Changes target enemy's aggro value.
 *
 *   Enemy Index:
 *   - Select which Enemy Index to affect.
 *
 *   Change Aggro By:
 *   - Change aggro by this amount.
 *   - Use negative numbers to reduce aggro.
 *
 * ---
 *
 * Enemy: Set Aggro
 * - Set target enemy's aggro value.
 *
 *   Enemy Index:
 *   - Select which Enemy Index to affect.
 *
 *   Set Aggro To:
 *   - Sets target's aggro to this amount.
 *   - Aggro must be at least a value of 1.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Provoke Settings
 * ============================================================================
 *
 * The Provoke Settings Plugin Parameters adjust the visual aspects related to
 * the provoke effect. These settings will require VisuMZ_1_BattleCore to be
 * installed in order for them to work due to dependencies. 
 *
 * ---
 *
 * VisuMZ_1_BattleCore
 * 
 *   Show Priority Lines?:
 *   - Show priority target lines for this plugin?
 *   - Requires VisuMZ_1_BattleCore.
 *
 * ---
 *
 * Line Settings
 * 
 *   Arc Height:
 *   - How tall should the line arc in pixels?
 * 
 *   Blend Mode:
 *   - The blend mode used for the sprite.
 * 
 *   Height Origin:
 *   - The rate from the battler's sprite base to determine where the line
 *     starts from.
 * 
 *   Line Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Opacity:
 *   - The highest possible opacity for active provoke lines.
 * 
 *   Opacity Speed:
 *   - The speed at which opacity fluctuates for the line sprite.
 * 
 *   Parts:
 *   - The number of joint parts to split up the sprite as.
 * 
 *   Parts Size:
 *   - The number in pixels for the diameter of each part.
 *
 * ---
 * 
 * Options
 * 
 *   Add Provoke Option?
 *   - Add the 'Show Provoke Origin' option to the Options menu?
 * 
 *   Adjust Window Height
 *   - Automatically adjust the options window height?
 * 
 *   Option Name
 *   - Command name of the option.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Taunt Settings
 * ============================================================================
 *
 * Battlers with specific taunt types can have animations playing on them over
 * and over to relay information to the player. These settings require you to
 * have both VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore installed in your
 * project's plugin list in order to use.
 *
 * ---
 *
 * VisuMZ_0_CoreEngine & VisuMZ_1_BattleCore
 * 
 *   Show Animations?:
 *   - Show animations for each of the taunt effects?
 *   - Requires VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore.
 *
 * ---
 *
 * Animation ID's
 * 
 *   Physical Taunt:
 *   - The animation ID used for physical taunts.
 *   - Use 0 or 'None' to bypass this type.
 * 
 *   Magical Taunt:
 *   - The animation ID used for magical taunts.
 *   - Use 0 or 'None' to bypass this type.
 * 
 *   Certain Hit Taunt:
 *   - The animation ID used for certain hit taunts.
 *   - Use 0 or 'None' to bypass this type.
 *
 * ---
 *
 * Animation Settings
 * 
 *   Cycle Time:
 *   - The amount of frames to wait before each animation cycle.
 *   - WARNING: Lower numbers can jeopardize game performance.
 * 
 *   Mirror Actor Ani?:
 *   - Mirror animations played on actors?
 * 
 *   Mute Animation SFX?:
 *   - Mute sounds played by animations?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Aggro Settings
 * ============================================================================
 *
 * This lets you adjust the settings for this plugin's Aggro mechanics. Most of
 * these settings focus on the visual gauge display of the Aggro gauge, but you
 * can also change up the settings for how aggro is utilized.
 *
 * ---
 *
 * General
 * 
 *   Priority: Highest TGR:
 *   - When enemies target actors for an single target attack, always target
 *     the highest members or make it weighted?
 *
 *   Aggro Per Damage:
 *   - The amount of aggro generated per point of HP damage dealt to an enemy.
 *
 *   Aggro Per Heal:
 *   - The amount of aggro generated per point of HP recovered to an ally.
 *
 * ---
 *
 * Gauge
 * 
 *   Visible Battler Gauge:
 *   - Display an aggro gauge over an SV actor's head to show current aggro
 *     level compared to other party members.
 * 
 *   Visible Status Gauge:
 *   - Display an aggro gauge in the Battle Status Window to show the current
 *     aggro level compared to others.
 * 
 *   Gauge Color 1:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Gauge Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Gauge Width:
 *   - Width in pixels you want the gauge to be.
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Where do you want the Aggro Gauge sprite's anchor X/Y to be?
 *   - Use values between 0 and 1 to be safe.
 * 
 *   Scale:
 *   - How large/small do you want the Aggro Gauge to be scaled?
 * 
 *   Battler Gauge
 * 
 *     Offset X:
 *     Offset Y:
 *     - How many pixels to offset the Aggro Gauge's X/Y by?
 * 
 *   Battle Status Gauge
 * 
 *     Offset X:
 *     Offset Y:
 *     - How many pixels to offset the Aggro Gauge's X/Y by?
 *
 * ---
 * 
 * Options
 * 
 *   Add Provoke Option?
 *   - Add the 'Show Aggro Gauge' option to the Options menu?
 * 
 *   Adjust Window Height
 *   - Automatically adjust the options window height?
 * 
 *   Option Name
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
 * Version 1.13: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a problem that would cause a crash when exiting the Options menu in
 *    battle when used with specific battle systems. Fix made by Irina.
 * 
 * Version 1.12: January 20, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.73
 *    new features.
 * 
 * Version 1.11: November 17, 2022
 * * Bug Fixes!
 * ** <JS User Aggro> and <JS Target Aggro> should now work properly.
 *    Fix made by Arisu.
 * 
 * Version 1.10: August 25, 2022
 * * Documentation Update!
 * ** Added note to the <Provoke> notetag:
 * *** States with <Provoke> on them will automatically remove themselves if
 *     the provoker dies. Update made by Arisu.
 * * Feature Update!
 * ** States with <Provoke> on them will automatically remove themselves if the
 *    provoker dies. Update made by Arisu.
 * 
 * Version 1.09: June 2, 2022
 * * Bug Fixes!
 * ** Filename has been shortened from VisuMZ_2_AggroControlSystem.js to
 *    VisuMZ_2_AggroControlSys.js due to deployment reasons. For some mobile
 *    devices, keeping the name as long as VisuMZ_2_AggroControlSystem.js
 *    causes problems, but VisuMZ_2_AggroControlSys.js is fine. Take note of
 *    this while you are updating.
 * ** 'user' and 'target' now works properly with the JS notetags.
 *    Fix made by Irina.
 * 
 * Version 1.08: April 16, 2021
 * * Feature Update!
 * ** Highest and lowest TGR members are now cached on an action by action
 *    basis for reduce needed computations. Update made by Irina.
 * 
 * Version 1.07: April 9, 2021
 * * Bug Fixes!
 * ** Provoke effect now takes into consideration when Provoke is applied by
 *    a weapon effect that comes off a counter attack from an actor. Fix made
 *    by Olivia.
 * 
 * Version 1.06: March 12, 2021
 * * Bug Fixes!
 * ** Subsequent battles or changing scenes should no longer clear the custom
 *    rendered bitmap used for the provoke trail. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for the Skill and Item versions of the following
 *    notetags into the help file and wiki:
 * *** <Bypass Provoke>
 * *** <Bypass Taunt>
 * *** <Bypass Highest Aggro>
 * 
 * Version 1.05: March 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Aggro Settings > Battle Status Gauge
 * **** These settings allow you to offset the Aggro Gauge in the Battle Status
 *      Window from its original position.
 * 
 * Version 1.04: February 26, 2021
 * * Bug Fixes!
 * ** Fixed positioning of gauge for List Style battle layouts without faces.
 *    Fix made by Olivia.
 * 
 * Version 1.03: February 5, 2021
 * * Feature Update!
 * ** Aggro is now cleared at the end of each battle in addition to the start
 *    of each battle. Update made by Olivia.
 *
 * Version 1.02: November 1, 2020
 * * Compatibility Update!
 * ** Plugin is made more compatible with other plugins.
 * 
 * Version 1.01: October 4, 2020
 * * Bug Fixes!
 * ** Provoke lines should now be placed correctly if the UI area is smaller
 *    than the resolution area.
 * ** The Plugin Commands should no longer cause crashes. Fix made by Irina.
 *
 * Version 1.00: September 28, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeAggro
 * @text Actor: Change Aggro
 * @desc Changes target actor's aggro value.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Aggro:num
 * @text Change Aggro By
 * @desc Change aggro by this amount.
 * Use negative numbers to reduce aggro.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorSetAggro
 * @text Actor: Set Aggro
 * @desc Set target actor's aggro value.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Aggro:num
 * @text Set Aggro To
 * @desc Sets target's aggro to this amount.
 * Aggro must be at least a value of 1.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyChangeAggro
 * @text Enemy: Change Aggro
 * @desc Changes target enemy's aggro value.
 *
 * @arg EnemyIndex:num
 * @text Enemy Index
 * @type actor
 * @desc Select which Enemy Index to affect.
 * @default 0
 *
 * @arg Aggro:num
 * @text Change Aggro By
 * @desc Change aggro by this amount.
 * Use negative numbers to reduce aggro.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemySetAggro
 * @text Enemy: Set Aggro
 * @desc Set target enemy's aggro value.
 *
 * @arg EnemyIndex:num
 * @text Enemy Index
 * @type actor
 * @desc Select which Enemy Index to affect.
 * @default 0
 *
 * @arg Aggro:num
 * @text Set Aggro To
 * @desc Sets target's aggro to this amount.
 * Aggro must be at least a value of 1.
 * @default 1
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
 * @param AggroControl
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Provoke:struct
 * @text Provoke Settings
 * @type struct<Provoke>
 * @desc Settings related to the Provoke mechanic.
 * These settings require VisuMZ_1_BattleCore.
 * @default {"VisuMZ_1_BattleCore":"","ShowLines:eval":"true","LineSettings":"","ArcHeight:num":"125","BlendMode:num":"1","HeightOrigin:num":"0.8","LineColor:str":"#ff0000","Opacity:num":"255","OpacitySpeed:num":"4","Parts:num":"256","PartsSize:num":"5","Options":"","AddOption:eval":"true","AdjustOptionsRect:eval":"true","OptionName:str":"Show Provoke Origin"}
 *
 * @param Taunt:struct
 * @text Taunt Settings
 * @type struct<Taunt>
 * @desc Settings related to the Taunt mechanic.
 * @default {"Dependency":"VisuMZ_1_BattleCore","ShowAnimation:eval":"true","AnimationID":"","AniPhysical:num":"1","AniMagical:num":"2","AniCertain:num":"3","AnimationSettings":"","CycleTime:num":"60","MirrorActorAni:eval":"true","MuteAnimations:eval":"true"}
 *
 * @param Aggro:struct
 * @text Aggro Settings
 * @type struct<Aggro>
 * @desc Settings related to the Aggro mechanic.
 * @default {"General":"","PriorityHighest:eval":"true","AggroPerDmg:num":"0.1","AggroPerHeal:num":"0.5","Gauge":"","VisibleGauge:eval":"false","StatusGauge:eval":"true","GaugeColor1:str":"#959595","GaugeColor2:str":"#ffffff","AnchorX:num":"0.5","AnchorY:num":"1.0","Scale:num":"0.5","OffsetX:num":"+0","OffsetY:num":"+2","Options":"","AddOption:eval":"true","AdjustOptionsRect:eval":"true","OptionName:str":"Show Aggro Gauge"}
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
 * Provoke Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Provoke:
 *
 * @param VisuMZ_1_BattleCore
 *
 * @param ShowLines:eval
 * @text Show Priority Lines?
 * @parent VisuMZ_1_BattleCore
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show priority target lines for this plugin?
 * Requires VisuMZ_1_BattleCore.
 * @default true
 *
 * @param LineSettings
 * @text Line Settings
 *
 * @param ArcHeight:num
 * @text Arc Height
 * @parent LineSettings
 * @type number
 * @desc How tall should the line arc in pixels?
 * @default 125
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent LineSettings
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @param HeightOrigin:num
 * @text Height Origin
 * @parent LineSettings
 * @desc The rate from the battler's sprite base to determine where the line starts from.
 * @default 0.8
 *
 * @param LineColor:str
 * @text Line Color
 * @parent LineSettings
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ff0000
 *
 * @param Opacity:num
 * @text Opacity
 * @parent LineSettings
 * @type number
 * @min 1
 * @max 255
 * @desc The highest possible opacity for active provoke lines.
 * @default 255
 *
 * @param OpacitySpeed:num
 * @text Opacity Speed
 * @parent Opacity:num
 * @type number
 * @min 1
 * @desc The speed at which opacity fluctuates for the line sprite.
 * @default 4
 *
 * @param Parts:num
 * @text Parts
 * @parent LineSettings
 * @type number
 * @min 1
 * @desc The number of joint parts to split up the sprite as.
 * @default 256
 *
 * @param PartsSize:num
 * @text Parts Size
 * @parent Parts:num
 * @type number
 * @min 1
 * @desc The number in pixels for the diameter of each part.
 * @default 5
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Provoke Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show Provoke Origin' option to the Options menu?
 * @default true
 *
 * @param AdjustOptionsRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionName:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show Provoke Origin
 *
 */
/* ----------------------------------------------------------------------------
 * Taunt Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Taunt:
 *
 * @param Dependency
 * @text VisuMZ_0_CoreEngine
 * @default VisuMZ_1_BattleCore
 *
 * @param ShowAnimation:eval
 * @text Show Animations?
 * @parent Dependency
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show animations for each of the taunt effects?
 * Requires VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore.
 * @default true
 *
 * @param AnimationID
 * @text Animation ID's
 *
 * @param AniPhysical:num
 * @text Physical Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for physical taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 13
 *
 * @param AniMagical:num
 * @text Magical Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for magical taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 14
 *
 * @param AniCertain:num
 * @text Certain Hit Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for certain hit taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 15
 *
 * @param AnimationSettings
 * @text Animation Settings
 *
 * @param CycleTime:num
 * @text Cycle Time
 * @parent AnimationSettings
 * @type number
 * @min 1
 * @desc The amount of frames to wait before each animation cycle.
 * WARNING: Lower numbers can jeopardize game performance.
 * @default 60
 *
 * @param MirrorActorAni:eval
 * @text Mirror Actor Ani?
 * @parent AnimationSettings
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror animations played on actors?
 * @default true
 *
 * @param MuteAnimations:eval
 * @text Mute Animation SFX?
 * @parent AnimationSettings
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute sounds played by animations?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Aggro Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Aggro:
 *
 * @param General
 *
 * @param PriorityHighest:eval
 * @text Priority: Highest TGR
 * @parent General
 * @type boolean
 * @on Always
 * @off Weighted
 * @desc When enemies target actors for an single target attack,
 * always target the highest members or make it weighted?
 * @default true
 *
 * @param AggroPerDmg:num
 * @text Aggro Per Damage
 * @parent General
 * @desc The amount of aggro generated per point of HP damage dealt to an enemy.
 * @default 0.1
 *
 * @param AggroPerHeal:num
 * @text Aggro Per Heal
 * @parent General
 * @desc The amount of aggro generated per point of HP recovered to an ally.
 * @default 0.5
 *
 * @param Gauge
 *
 * @param VisibleGauge:eval
 * @text Visible Battler Gauge
 * @parent Gauge
 * @type boolean
 * @on Visible
 * @off None
 * @desc Display an aggro gauge over an SV actor's head to show
 * current aggro level compared to other party members.
 * @default false
 *
 * @param StatusGauge:eval
 * @text Visible Status Gauge
 * @parent Gauge
 * @type boolean
 * @on Visible
 * @off None
 * @desc Display an aggro gauge in the Battle Status Window
 * to show the current aggro level compared to others.
 * @default true
 *
 * @param GaugeColor1:str
 * @text Gauge Color 1
 * @parent Gauge
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #959595
 *
 * @param GaugeColor2:str
 * @text Gauge Color 2
 * @parent Gauge
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent Gauge
 * @desc Where do you want the Aggro Gauge sprite's anchor X to be?
 * Use values between 0 and 1 to be safe.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent Gauge
 * @desc Where do you want the Aggro Gauge sprite's anchor Y to be?
 * Use values between 0 and 1 to be safe.
 * @default 1.0
 *
 * @param Scale:num
 * @text Scale
 * @parent Gauge
 * @desc How large/small do you want the Aggro Gauge to be scaled?
 * @default 0.5
 * 
 * @param BattlerGauge
 * @text Battler Gauge
 * @parent Gauge
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent BattlerGauge
 * @desc How many pixels to offset the Aggro Gauge's X by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent BattlerGauge
 * @desc How many pixels to offset the Aggro Gauge's Y by?
 * Negative goes up. Positive goes down.
 * @default +2
 * 
 * @param BattleStatus
 * @text Battle Status Gauge
 * @parent Gauge
 *
 * @param BattleStatusOffsetX:num
 * @text Offset X
 * @parent BattleStatus
 * @desc How many pixels to offset the Aggro Gauge's X by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param BattleStatusOffsetY:num
 * @text Offset Y
 * @parent BattleStatus
 * @desc How many pixels to offset the Aggro Gauge's Y by?
 * Negative goes up. Positive goes down.
 * @default +0
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
 * @desc Add the 'Show Aggro Gauge' option to the Options menu?
 * @default true
 *
 * @param AdjustOptionsRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionName:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show Aggro Gauge
 *
 */
//=============================================================================

function _0x290a(_0x5a7d26,_0x446d13){const _0x1013c8=_0x1013();return _0x290a=function(_0x290a19,_0x4ec21e){_0x290a19=_0x290a19-0x1ba;let _0x2b9391=_0x1013c8[_0x290a19];return _0x2b9391;},_0x290a(_0x5a7d26,_0x446d13);}const _0xfa7ab2=_0x290a;(function(_0x5470fa,_0x3fa54f){const _0x25e286=_0x290a,_0x12a8dc=_0x5470fa();while(!![]){try{const _0x86a75b=-parseInt(_0x25e286(0x24e))/0x1*(parseInt(_0x25e286(0x21b))/0x2)+parseInt(_0x25e286(0x359))/0x3+-parseInt(_0x25e286(0x2b7))/0x4*(parseInt(_0x25e286(0x340))/0x5)+parseInt(_0x25e286(0x1bd))/0x6+-parseInt(_0x25e286(0x33d))/0x7+parseInt(_0x25e286(0x2e3))/0x8+-parseInt(_0x25e286(0x2df))/0x9;if(_0x86a75b===_0x3fa54f)break;else _0x12a8dc['push'](_0x12a8dc['shift']());}catch(_0x318881){_0x12a8dc['push'](_0x12a8dc['shift']());}}}(_0x1013,0xac07d));var label=_0xfa7ab2(0x268),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0xfa7ab2(0x1db)](function(_0x5a3302){const _0x3adcc7=_0xfa7ab2;return _0x5a3302[_0x3adcc7(0x2e1)]&&_0x5a3302[_0x3adcc7(0x1df)][_0x3adcc7(0x256)]('['+label+']');})[0x0];VisuMZ[label][_0xfa7ab2(0x2d9)]=VisuMZ[label][_0xfa7ab2(0x2d9)]||{},VisuMZ[_0xfa7ab2(0x317)]=function(_0x3125dc,_0x14ff8c){const _0x376d25=_0xfa7ab2;for(const _0x422216 in _0x14ff8c){if(_0x422216[_0x376d25(0x2dc)](/(.*):(.*)/i)){if(_0x376d25(0x2af)!==_0x376d25(0x29a)){const _0x5f009e=String(RegExp['$1']),_0x51128b=String(RegExp['$2'])[_0x376d25(0x287)]()['trim']();let _0x362649,_0x5f0f5b,_0x4bee00;switch(_0x51128b){case _0x376d25(0x1f5):_0x362649=_0x14ff8c[_0x422216]!==''?Number(_0x14ff8c[_0x422216]):0x0;break;case'ARRAYNUM':_0x5f0f5b=_0x14ff8c[_0x422216]!==''?JSON[_0x376d25(0x229)](_0x14ff8c[_0x422216]):[],_0x362649=_0x5f0f5b[_0x376d25(0x22a)](_0x1aae9c=>Number(_0x1aae9c));break;case _0x376d25(0x2a1):_0x362649=_0x14ff8c[_0x422216]!==''?eval(_0x14ff8c[_0x422216]):null;break;case _0x376d25(0x271):_0x5f0f5b=_0x14ff8c[_0x422216]!==''?JSON[_0x376d25(0x229)](_0x14ff8c[_0x422216]):[],_0x362649=_0x5f0f5b[_0x376d25(0x22a)](_0x11b13b=>eval(_0x11b13b));break;case _0x376d25(0x322):_0x362649=_0x14ff8c[_0x422216]!==''?JSON[_0x376d25(0x229)](_0x14ff8c[_0x422216]):'';break;case _0x376d25(0x1c7):_0x5f0f5b=_0x14ff8c[_0x422216]!==''?JSON[_0x376d25(0x229)](_0x14ff8c[_0x422216]):[],_0x362649=_0x5f0f5b[_0x376d25(0x22a)](_0x338a6b=>JSON['parse'](_0x338a6b));break;case _0x376d25(0x2c5):_0x362649=_0x14ff8c[_0x422216]!==''?new Function(JSON[_0x376d25(0x229)](_0x14ff8c[_0x422216])):new Function('return\x200');break;case _0x376d25(0x275):_0x5f0f5b=_0x14ff8c[_0x422216]!==''?JSON[_0x376d25(0x229)](_0x14ff8c[_0x422216]):[],_0x362649=_0x5f0f5b['map'](_0x49ced8=>new Function(JSON[_0x376d25(0x229)](_0x49ced8)));break;case'STR':_0x362649=_0x14ff8c[_0x422216]!==''?String(_0x14ff8c[_0x422216]):'';break;case _0x376d25(0x30c):_0x5f0f5b=_0x14ff8c[_0x422216]!==''?JSON[_0x376d25(0x229)](_0x14ff8c[_0x422216]):[],_0x362649=_0x5f0f5b[_0x376d25(0x22a)](_0x4e47ed=>String(_0x4e47ed));break;case _0x376d25(0x214):_0x4bee00=_0x14ff8c[_0x422216]!==''?JSON[_0x376d25(0x229)](_0x14ff8c[_0x422216]):{},_0x362649=VisuMZ[_0x376d25(0x317)]({},_0x4bee00);break;case _0x376d25(0x2c8):_0x5f0f5b=_0x14ff8c[_0x422216]!==''?JSON['parse'](_0x14ff8c[_0x422216]):[],_0x362649=_0x5f0f5b[_0x376d25(0x22a)](_0x294bb9=>VisuMZ[_0x376d25(0x317)]({},JSON[_0x376d25(0x229)](_0x294bb9)));break;default:continue;}_0x3125dc[_0x5f009e]=_0x362649;}else _0x48e34f[_0x376d25(0x261)]['x']=-_0x474a1f['abs'](_0xe03a14[_0x376d25(0x261)]['x']);}}return _0x3125dc;},(_0x164f6e=>{const _0x502952=_0xfa7ab2,_0xd0cca4=_0x164f6e[_0x502952(0x276)];for(const _0x30eb46 of dependencies){if(_0x502952(0x2ec)!=='cUfGt'){if(!Imported[_0x30eb46]){if(_0x502952(0x352)===_0x502952(0x352)){alert(_0x502952(0x266)[_0x502952(0x30e)](_0xd0cca4,_0x30eb46)),SceneManager[_0x502952(0x2a5)]();break;}else return _0x502952(0x2fe)[_0x502952(0x30e)](_0x58ef38(_0x1be2e2['$1']));}}else{if(!_0x3bcc52[_0x502952(0x1e6)]())return;this[_0x502952(0x225)]=new _0xe0322c(this),this['_provokeSprite'][_0x502952(0x282)]()[_0x502952(0x1e7)](this[_0x502952(0x225)]);}}const _0x2ac1a5=_0x164f6e[_0x502952(0x1df)];if(_0x2ac1a5['match'](/\[Version[ ](.*?)\]/i)){const _0x53c886=Number(RegExp['$1']);_0x53c886!==VisuMZ[label][_0x502952(0x264)]&&(_0x502952(0x1c2)!==_0x502952(0x1c2)?this[_0x502952(0x2f3)]=_0x3a0693[_0x502952(0x2f3)]:(alert(_0x502952(0x1c6)['format'](_0xd0cca4,_0x53c886)),SceneManager[_0x502952(0x2a5)]()));}if(_0x2ac1a5[_0x502952(0x2dc)](/\[Tier[ ](\d+)\]/i)){const _0x15949e=Number(RegExp['$1']);if(_0x15949e<tier){if(_0x502952(0x300)===_0x502952(0x300))alert(_0x502952(0x216)[_0x502952(0x30e)](_0xd0cca4,_0x15949e,tier)),SceneManager['exit']();else{const _0x2d23a6=_0x502952(0x1bc);this[_0x502952(0x244)]=this[_0x502952(0x244)]||{};if(this[_0x502952(0x244)][_0x2d23a6])return this[_0x502952(0x244)][_0x2d23a6];const _0xa032a8=_0x12824f[_0x502952(0x268)]['Settings'][_0x502952(0x24a)]['GaugeColor1'];return this[_0x502952(0x330)](_0x2d23a6,_0xa032a8);}}else{if('OIjHY'!=='wgWtF')tier=Math[_0x502952(0x2f0)](_0x15949e,tier);else return 0x0;}}VisuMZ[_0x502952(0x317)](VisuMZ[label][_0x502952(0x2d9)],_0x164f6e[_0x502952(0x1fb)]);})(pluginData),PluginManager[_0xfa7ab2(0x232)](pluginData[_0xfa7ab2(0x276)],'ActorChangeAggro',_0xc7839e=>{const _0x9ae6b9=_0xfa7ab2;if(!$gameParty[_0x9ae6b9(0x2b8)]())return;VisuMZ[_0x9ae6b9(0x317)](_0xc7839e,_0xc7839e);const _0xfc6453=$gameActors[_0x9ae6b9(0x350)](_0xc7839e[_0x9ae6b9(0x20f)]),_0x1bef36=_0xc7839e['Aggro'];if(_0xfc6453)_0xfc6453[_0x9ae6b9(0x239)](_0x1bef36);}),PluginManager['registerCommand'](pluginData[_0xfa7ab2(0x276)],_0xfa7ab2(0x2d0),_0x31a0dc=>{const _0x2851c1=_0xfa7ab2;if(!$gameParty[_0x2851c1(0x2b8)]())return;VisuMZ[_0x2851c1(0x317)](_0x31a0dc,_0x31a0dc);const _0x3333c4=$gameActors[_0x2851c1(0x350)](_0x31a0dc[_0x2851c1(0x20f)]),_0x21cb77=_0x31a0dc[_0x2851c1(0x24a)];if(_0x3333c4)_0x3333c4[_0x2851c1(0x1bf)](_0x21cb77);}),PluginManager[_0xfa7ab2(0x232)](pluginData['name'],'EnemyChangeAggro',_0x385238=>{const _0x1a145e=_0xfa7ab2;if(!$gameParty[_0x1a145e(0x2b8)]())return;VisuMZ['ConvertParams'](_0x385238,_0x385238);const _0x200542=$gameTroop['members']()[_0x385238[_0x1a145e(0x312)]],_0x46f67c=_0x385238[_0x1a145e(0x24a)];if(_0x200542)_0x200542[_0x1a145e(0x239)](_0x46f67c);}),PluginManager[_0xfa7ab2(0x232)](pluginData['name'],_0xfa7ab2(0x34f),_0x8cb19=>{const _0x246777=_0xfa7ab2;if(!$gameParty[_0x246777(0x2b8)]())return;VisuMZ[_0x246777(0x317)](_0x8cb19,_0x8cb19);const _0x201ef9=$gameTroop[_0x246777(0x348)]()[_0x8cb19[_0x246777(0x312)]],_0xe77f04=_0x8cb19[_0x246777(0x24a)];if(_0x201ef9)_0x201ef9['setAggro'](_0xe77f04);}),DataManager[_0xfa7ab2(0x270)]=function(_0x269578){const _0x4e8661=_0xfa7ab2;if(!_0x269578)return![];return _0x269578['note'][_0x4e8661(0x2dc)](/<PROVOKE>/i);},DataManager[_0xfa7ab2(0x299)]=function(_0x247056){const _0x11bc52=_0xfa7ab2;if(!_0x247056)return![];return _0x247056[_0x11bc52(0x31e)][_0x11bc52(0x2dc)](/<BYPASS PROVOKE>/i);},DataManager[_0xfa7ab2(0x278)]=function(_0xba811c){const _0x595c43=_0xfa7ab2;if(!_0xba811c)return![];return _0xba811c[_0x595c43(0x31e)][_0x595c43(0x2dc)](/<BYPASS TAUNT>/i);},DataManager[_0xfa7ab2(0x20c)]=function(_0x1edab3){const _0x56ebe8=_0xfa7ab2;if(!_0x1edab3)return![];return _0x1edab3[_0x56ebe8(0x31e)]['match'](/<BYPASS HIGHEST (?:AGGRO|ENMITY|THREAT)>/i);},DataManager[_0xfa7ab2(0x289)]=function(_0x3611ad){const _0x21a1e9=_0xfa7ab2;if(!_0x3611ad)return![];return _0x3611ad['note'][_0x21a1e9(0x2dc)](/<TARGET HIGHEST (?:AGGRO|ENMITY|THREAT)>/i);},ImageManager[_0xfa7ab2(0x248)]=function(){const _0x4c54d4=_0xfa7ab2;if(this['_provokeBitmap'])return this['_provokeBitmap'];return this[_0x4c54d4(0x26c)]=new Bitmap(0x64,0x64),this[_0x4c54d4(0x26c)][_0x4c54d4(0x306)](0x32,0x32,0x32,ColorManager[_0x4c54d4(0x21a)]()),this['_provokeBitmap'][_0x4c54d4(0x200)]=![],this[_0x4c54d4(0x26c)];},ConfigManager[_0xfa7ab2(0x26e)]=!![],ConfigManager[_0xfa7ab2(0x2f3)]=!![],VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x23b)]=ConfigManager['makeData'],ConfigManager[_0xfa7ab2(0x2b3)]=function(){const _0x2738d6=_0xfa7ab2,_0x14d956=VisuMZ[_0x2738d6(0x268)][_0x2738d6(0x23b)]['call'](this);return _0x14d956[_0x2738d6(0x26e)]=this[_0x2738d6(0x26e)],_0x14d956['provokeOrigin']=this[_0x2738d6(0x2f3)],_0x14d956;},VisuMZ[_0xfa7ab2(0x268)]['ConfigManager_applyData']=ConfigManager[_0xfa7ab2(0x2c3)],ConfigManager[_0xfa7ab2(0x2c3)]=function(_0x459177){const _0x16b58c=_0xfa7ab2;VisuMZ[_0x16b58c(0x268)][_0x16b58c(0x237)][_0x16b58c(0x337)](this,_0x459177);_0x16b58c(0x26e)in _0x459177?this[_0x16b58c(0x26e)]=_0x459177[_0x16b58c(0x26e)]:_0x16b58c(0x21e)!=='eJzoS'?(this[_0x16b58c(0x31a)](),this[_0x16b58c(0x250)]()):this[_0x16b58c(0x26e)]=!![];if(_0x16b58c(0x2f3)in _0x459177){if(_0x16b58c(0x2db)!==_0x16b58c(0x2db))return this[_0x16b58c(0x1e4)]()?_0x1619f3[_0x16b58c(0x334)]():_0x12d2fc[_0x16b58c(0x268)][_0x16b58c(0x22e)]['call'](this);else this['provokeOrigin']=_0x459177[_0x16b58c(0x2f3)];}else _0x16b58c(0x262)!=='VxnbF'?(_0x523d6c['AggroControlSystem'][_0x16b58c(0x217)][_0x16b58c(0x337)](this),this[_0x16b58c(0x2b1)]()):this[_0x16b58c(0x2f3)]=!![];},TextManager['aggroGauge']=VisuMZ[_0xfa7ab2(0x268)]['Settings'][_0xfa7ab2(0x24a)][_0xfa7ab2(0x293)],TextManager[_0xfa7ab2(0x2f3)]=VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x2d9)][_0xfa7ab2(0x2d2)][_0xfa7ab2(0x293)],ColorManager['getColorDataFromPluginParameters']=function(_0x5bed5d,_0x94b09e){const _0x56666c=_0xfa7ab2;return _0x94b09e=String(_0x94b09e),this[_0x56666c(0x244)]=this[_0x56666c(0x244)]||{},_0x94b09e[_0x56666c(0x2dc)](/#(.*)/i)?this[_0x56666c(0x244)][_0x5bed5d]=_0x56666c(0x2fe)[_0x56666c(0x30e)](String(RegExp['$1'])):this[_0x56666c(0x244)][_0x5bed5d]=this[_0x56666c(0x32b)](Number(_0x94b09e)),this[_0x56666c(0x244)][_0x5bed5d];},ColorManager[_0xfa7ab2(0x247)]=function(_0xc62f29){const _0x56cc75=_0xfa7ab2;return _0xc62f29=String(_0xc62f29),_0xc62f29[_0x56cc75(0x2dc)](/#(.*)/i)?_0x56cc75(0x2fe)['format'](String(RegExp['$1'])):this['textColor'](Number(_0xc62f29));},ColorManager[_0xfa7ab2(0x21a)]=function(){const _0x30d257=_0xfa7ab2,_0x1e33a3='provoke-line-color';this[_0x30d257(0x244)]=this[_0x30d257(0x244)]||{};if(this['_colorCache'][_0x1e33a3])return this[_0x30d257(0x244)][_0x1e33a3];const _0x105f61=VisuMZ['AggroControlSystem'][_0x30d257(0x2d9)][_0x30d257(0x2d2)][_0x30d257(0x2aa)];return this[_0x30d257(0x330)](_0x1e33a3,_0x105f61);},ColorManager['aggroGaugeColor1']=function(){const _0x305f92=_0xfa7ab2,_0x19dd4b=_0x305f92(0x1bc);this[_0x305f92(0x244)]=this[_0x305f92(0x244)]||{};if(this[_0x305f92(0x244)][_0x19dd4b])return this[_0x305f92(0x244)][_0x19dd4b];const _0x5b8c16=VisuMZ[_0x305f92(0x268)][_0x305f92(0x2d9)][_0x305f92(0x24a)][_0x305f92(0x21c)];return this[_0x305f92(0x330)](_0x19dd4b,_0x5b8c16);},ColorManager[_0xfa7ab2(0x345)]=function(){const _0x45d76c=_0xfa7ab2,_0x1128c8=_0x45d76c(0x219);this[_0x45d76c(0x244)]=this[_0x45d76c(0x244)]||{};if(this[_0x45d76c(0x244)][_0x1128c8])return this[_0x45d76c(0x244)][_0x1128c8];const _0x549c92=VisuMZ[_0x45d76c(0x268)][_0x45d76c(0x2d9)]['Aggro'][_0x45d76c(0x1e5)];return this['getColorDataFromPluginParameters'](_0x1128c8,_0x549c92);},SceneManager[_0xfa7ab2(0x1e6)]=function(){const _0x4d04bb=_0xfa7ab2;return this[_0x4d04bb(0x24c)]&&this[_0x4d04bb(0x24c)][_0x4d04bb(0x1be)]===Scene_Battle;},BattleManager[_0xfa7ab2(0x2a6)]=function(_0x3fa802){const _0x523e0a=_0xfa7ab2;let _0x281a49=this[_0x523e0a(0x2ce)];if(this[_0x523e0a(0x1c0)]){if(_0x523e0a(0x2ff)!==_0x523e0a(0x2ff)){if(this[_0x523e0a(0x1f2)][_0x523e0a(0x343)]())return 0x0;if(this[_0x523e0a(0x1f2)][_0x523e0a(0x2cb)]()&&this['_battler']['friendsUnit']()[_0x523e0a(0x32c)]()[_0x523e0a(0x28b)]===0x1)return 0x1;}else _0x281a49=this['_counterAttackingTarget'];}if(!_0x281a49)return null;if(_0x281a49[_0x523e0a(0x303)]()&&_0x3fa802[_0x523e0a(0x2d3)]()){if(_0x523e0a(0x2ab)!==_0x523e0a(0x2ab)){if(_0x159734['isPlaytest']())_0x2d0637['log'](_0x4cfdb4);}else return _0x523e0a(0x233)[_0x523e0a(0x30e)](_0x281a49[_0x523e0a(0x2b2)]());}else{if(_0x281a49[_0x523e0a(0x2d3)]()&&_0x3fa802[_0x523e0a(0x303)]())return _0x523e0a(0x1d9)['format'](_0x281a49[_0x523e0a(0x310)]());}return null;},BattleManager[_0xfa7ab2(0x20e)]=function(_0x2be8d3){const _0x27d66d=_0xfa7ab2;if(!_0x2be8d3)return null;if(_0x2be8d3['match'](/BATTLE ACTOR (\d+)/i))return $gameActors[_0x27d66d(0x350)](Number(RegExp['$1']));else{if(_0x2be8d3[_0x27d66d(0x2dc)](/BATTLE ENEMY (\d+)/i))return $gameTroop[_0x27d66d(0x348)]()[Number(RegExp['$1'])];}return null;},BattleManager[_0xfa7ab2(0x30b)]=function(){const _0x2fc4ef=_0xfa7ab2;return VisuMZ[_0x2fc4ef(0x268)][_0x2fc4ef(0x2d9)][_0x2fc4ef(0x24a)][_0x2fc4ef(0x240)];},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x1f1)]=Game_Action[_0xfa7ab2(0x234)]['getSpecificBattlerKeyTarget'],Game_Action[_0xfa7ab2(0x234)]['getSpecificBattlerKeyTarget']=function(){const _0x226c2b=_0xfa7ab2;let _0x814c02=VisuMZ[_0x226c2b(0x268)][_0x226c2b(0x1f1)][_0x226c2b(0x337)](this);if(_0x814c02&&_0x814c02['isActor']()!==this[_0x226c2b(0x23f)]()[_0x226c2b(0x303)]()){if('ttzGb'==='kovGE'){if(this[_0x226c2b(0x1be)]!==_0x49076d)return;if(!this[_0x226c2b(0x32f)]())return;if(!_0x215ea8[_0x226c2b(0x1e6)]())return;const _0x21c318=_0x5d409b['AggroControlSystem'][_0x226c2b(0x2d9)][_0x226c2b(0x24a)],_0x1a9c3f=new _0x28af3c();_0x1a9c3f[_0x226c2b(0x1d1)]['x']=_0x21c318[_0x226c2b(0x1cd)],_0x1a9c3f['anchor']['y']=_0x21c318[_0x226c2b(0x29c)];const _0x576cc4=_0x32d8df['prototype']['bitmapWidth']();_0x1a9c3f[_0x226c2b(0x261)]['x']=_0x1a9c3f[_0x226c2b(0x261)]['y']=_0x21c318['Scale'],this[_0x226c2b(0x27e)]=_0x1a9c3f,this['addChild'](_0x1a9c3f);}else{this[_0x226c2b(0x249)]=-0x1;if(this[_0x226c2b(0x26f)]())return this[_0x226c2b(0x23f)]()['provoker']();else{if(this['isTauntAffected']()){const _0xbb321d=this['item']()[_0x226c2b(0x2e2)],_0x3cea84=this[_0x226c2b(0x323)]()[_0x226c2b(0x206)](_0xbb321d);if(!_0x3cea84[_0x226c2b(0x256)](_0x814c02))return _0x3cea84[Math[_0x226c2b(0x1f3)](_0x3cea84[_0x226c2b(0x28b)])];}else{if(this[_0x226c2b(0x355)]())return this['opponentsUnit']()['highestTgrMember']();}}}}return _0x814c02;},VisuMZ['AggroControlSystem'][_0xfa7ab2(0x1e0)]=Game_Action['prototype'][_0xfa7ab2(0x2fa)],Game_Action['prototype'][_0xfa7ab2(0x2fa)]=function(_0x2a4907){const _0x5abe7f=_0xfa7ab2;if(this[_0x5abe7f(0x26f)]()){if(_0x5abe7f(0x35d)!==_0x5abe7f(0x35d))_0x35a96[_0x5abe7f(0x268)][_0x5abe7f(0x328)]['call'](this,_0x463a81,_0x12a129),this['executeHpDamageAggroControl'](_0x17db71,_0x5499ab);else return this['makeProvokeTarget']();}else{if(this['isTauntAffected']())return _0x5abe7f(0x338)===_0x5abe7f(0x1c9)?this[_0x5abe7f(0x32c)]()[_0x5abe7f(0x1db)](_0x3fb088=>_0x3fb088&&_0x3fb088[_0x5abe7f(0x2cd)]()):this[_0x5abe7f(0x2be)](_0x2a4907);else{if(this['isAggroAffected']())return[_0x2a4907[_0x5abe7f(0x32d)]()];else{if(_0x5abe7f(0x342)!==_0x5abe7f(0x342)){_0x2eb1cd['AggroControlSystem'][_0x5abe7f(0x27c)][_0x5abe7f(0x337)](this,_0x548290);if(this['_aggroGaugeSprite'])this[_0x5abe7f(0x27e)][_0x5abe7f(0x1f2)]=_0x457bd8;}else return VisuMZ['AggroControlSystem'][_0x5abe7f(0x1e0)]['call'](this,_0x2a4907);}}}},Game_Action[_0xfa7ab2(0x234)][_0xfa7ab2(0x26f)]=function(){const _0x386207=_0xfa7ab2;if(!$gameParty[_0x386207(0x2b8)]())return![];if(!this[_0x386207(0x24f)]())return![];if(!this['needsSelection']())return![];if(DataManager[_0x386207(0x299)](this[_0x386207(0x24f)]()))return![];if(this[_0x386207(0x23f)]()[_0x386207(0x2fc)]())return![];if(!this[_0x386207(0x23f)]()[_0x386207(0x26f)]())return![];const _0x394fba=this['subject']()[_0x386207(0x357)]();if(_0x394fba[_0x386207(0x343)]())return![];return!![];},Game_Action[_0xfa7ab2(0x234)][_0xfa7ab2(0x1ef)]=function(){const _0x459bb5=_0xfa7ab2;return[this[_0x459bb5(0x23f)]()[_0x459bb5(0x357)]()];},Game_Action[_0xfa7ab2(0x234)]['isTauntAffected']=function(){const _0x47cd46=_0xfa7ab2;if(!$gameParty[_0x47cd46(0x2b8)]())return![];if(!this['item']())return![];if(!this[_0x47cd46(0x346)]())return![];if(DataManager[_0x47cd46(0x278)](this[_0x47cd46(0x24f)]()))return![];if(this[_0x47cd46(0x23f)]()[_0x47cd46(0x27f)]())return![];const _0x27862b=this[_0x47cd46(0x323)]();let _0x2e7e06=![];if(this['isPhysical']()&&_0x27862b[_0x47cd46(0x1f0)]()[_0x47cd46(0x28b)]>0x0)_0x2e7e06=!![];if(this[_0x47cd46(0x29e)]()&&_0x27862b[_0x47cd46(0x226)]()['length']>0x0)_0x2e7e06=!![];if(this[_0x47cd46(0x222)]()&&_0x27862b[_0x47cd46(0x25a)]()[_0x47cd46(0x28b)]>0x0)_0x2e7e06=!![];return _0x2e7e06;},Game_Action[_0xfa7ab2(0x234)][_0xfa7ab2(0x2be)]=function(_0x55deb9){const _0x1ed595=_0xfa7ab2;if(this[_0x1ed595(0x249)]<0x0)return[_0x55deb9['randomTauntTarget'](this['item']()['hitType'])];else{const _0xef7480=_0x55deb9[_0x1ed595(0x30f)](this['_targetIndex']);return _0xef7480['matchTauntType'](this[_0x1ed595(0x24f)]()['hitType'])?[_0xef7480]:[_0x55deb9[_0x1ed595(0x1e8)]()];}},Game_Action['prototype'][_0xfa7ab2(0x355)]=function(){const _0x3d6108=_0xfa7ab2;if(!$gameParty['inBattle']())return![];if(this[_0x3d6108(0x24f)]()['scope']!==0x1)return![];if(this['_targetIndex']>=0x0)return![];if(DataManager[_0x3d6108(0x20c)](this[_0x3d6108(0x24f)]()))return![];if(this[_0x3d6108(0x23f)]()['bypassHighestAggro']())return![];if(DataManager[_0x3d6108(0x289)](this[_0x3d6108(0x24f)]()))return!![];if(this['subject']()[_0x3d6108(0x289)]())return!![];return BattleManager[_0x3d6108(0x30b)]();},VisuMZ[_0xfa7ab2(0x268)]['Game_Action_applyGlobal']=Game_Action[_0xfa7ab2(0x234)][_0xfa7ab2(0x331)],Game_Action[_0xfa7ab2(0x234)]['applyGlobal']=function(){const _0xbc78ec=_0xfa7ab2;VisuMZ['AggroControlSystem'][_0xbc78ec(0x31b)][_0xbc78ec(0x337)](this),this[_0xbc78ec(0x1ee)]();},Game_Action['prototype'][_0xfa7ab2(0x1ee)]=function(){const _0x26aee0=_0xfa7ab2,_0x3d4f3d=this[_0x26aee0(0x24f)]()[_0x26aee0(0x31e)];if(_0x3d4f3d[_0x26aee0(0x2dc)](/<(?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT): ([\+\-]\d+)>/i)){if('safsX'==='safsX'){const _0x421fb6=Number(RegExp['$1']);this[_0x26aee0(0x23f)]()[_0x26aee0(0x239)](_0x421fb6);}else delete this[_0x26aee0(0x1f8)][_0x1ddff0];}if(_0x3d4f3d[_0x26aee0(0x2dc)](/<JS (?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT)>\s*([\s\S]*)\s*<\/JS (?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT)>/i)){const _0x39d4af=String(RegExp['$1']);window[_0x26aee0(0x2b5)]=this[_0x26aee0(0x23f)](),window[_0x26aee0(0x24f)]=this[_0x26aee0(0x24f)](),window['a']=this[_0x26aee0(0x23f)](),window['b']=a,window[_0x26aee0(0x2b0)]=user[_0x26aee0(0x2ad)]();try{eval(_0x39d4af);}catch(_0x1480f7){if(_0x26aee0(0x26a)!=='MclCj'){if($gameTemp[_0x26aee0(0x294)]())console['log'](_0x1480f7);}else{const _0x24a6a4=new _0xe62d7f();_0x24a6a4['bitmap']=_0x35f833[_0x26aee0(0x248)](),_0x24a6a4[_0x26aee0(0x1d1)]['x']=0.5,_0x24a6a4[_0x26aee0(0x1d1)]['y']=0.5,_0x24a6a4[_0x26aee0(0x261)]['x']=_0x24a6a4['scale']['y']=this['partsSize'](),_0x24a6a4[_0x26aee0(0x2e6)]=_0x393c6f,_0x24a6a4['blendMode']=this[_0x26aee0(0x236)],this['addChild'](_0x24a6a4),this[_0x26aee0(0x301)][_0x26aee0(0x2e7)](_0x24a6a4),_0x33f900+=this[_0x26aee0(0x2e0)];if(_0x1a637c>=0xff)_0x5859d4=0x0;}}user['setAggro'](window[_0x26aee0(0x2b0)]),window[_0x26aee0(0x2b5)]=undefined,window[_0x26aee0(0x1fa)]=undefined,window['item']=undefined,window['a']=undefined,window['b']=undefined,window['value']=undefined;}},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x1d2)]=Game_Action[_0xfa7ab2(0x234)][_0xfa7ab2(0x2dd)],Game_Action[_0xfa7ab2(0x234)][_0xfa7ab2(0x2dd)]=function(_0x5875f0){const _0x3f7eba=_0xfa7ab2;VisuMZ[_0x3f7eba(0x268)][_0x3f7eba(0x1d2)]['call'](this,_0x5875f0),this[_0x3f7eba(0x2b4)](_0x5875f0);},Game_Action[_0xfa7ab2(0x234)][_0xfa7ab2(0x2b4)]=function(_0x4dbcc2){const _0x1957da=_0xfa7ab2;if(!this[_0x1957da(0x24f)]())return;if(!SceneManager[_0x1957da(0x1e6)]())return;const _0x21da7b=this[_0x1957da(0x24f)]()[_0x1957da(0x31e)];if(_0x21da7b[_0x1957da(0x2dc)](/<TARGET (?:AGGRO|ENMITY|THREAT): ([\+\-]\d+)>/i)){const _0x107af6=Number(RegExp['$1']);_0x4dbcc2[_0x1957da(0x239)](_0x107af6);}if(_0x21da7b[_0x1957da(0x2dc)](/<JS TARGET (?:AGGRO|ENMITY|THREAT)>\s*([\s\S]*)\s*<\/JS TARGET (?:AGGRO|ENMITY|THREAT)>/i)){const _0x64add4=String(RegExp['$1']);window[_0x1957da(0x2b5)]=this[_0x1957da(0x23f)](),window[_0x1957da(0x1fa)]=_0x4dbcc2,window[_0x1957da(0x24f)]=this[_0x1957da(0x24f)](),window['a']=this['subject'](),window['b']=_0x4dbcc2,window[_0x1957da(0x2b0)]=_0x4dbcc2[_0x1957da(0x2ad)]();try{'GkFzK'!==_0x1957da(0x1f4)?eval(_0x64add4):this['addAggroControlSystemAggroCommand']();}catch(_0x2befb4){if($gameTemp[_0x1957da(0x294)]())console[_0x1957da(0x28c)](_0x2befb4);}_0x4dbcc2[_0x1957da(0x1bf)](window[_0x1957da(0x2b0)]),window['user']=undefined,window['target']=undefined,window['item']=undefined,window['a']=undefined,window['b']=undefined,window[_0x1957da(0x2b0)]=undefined;}},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x328)]=Game_Action[_0xfa7ab2(0x234)][_0xfa7ab2(0x1ff)],Game_Action['prototype'][_0xfa7ab2(0x1ff)]=function(_0x2a58f2,_0x27d0db){const _0x58b807=_0xfa7ab2;VisuMZ[_0x58b807(0x268)][_0x58b807(0x328)][_0x58b807(0x337)](this,_0x2a58f2,_0x27d0db),this[_0x58b807(0x251)](_0x2a58f2,_0x27d0db);},Game_Action[_0xfa7ab2(0x234)]['executeHpDamageAggroControl']=function(_0x55e4ee,_0x4cd544){const _0x230fd6=_0xfa7ab2,_0x49a5c7=VisuMZ[_0x230fd6(0x268)]['Settings'][_0x230fd6(0x24a)];if(_0x4cd544>0x0&&_0x55e4ee[_0x230fd6(0x303)]()!==this[_0x230fd6(0x23f)]()[_0x230fd6(0x303)]()){const _0x54af51=_0x49a5c7[_0x230fd6(0x284)];this[_0x230fd6(0x23f)]()[_0x230fd6(0x239)](_0x54af51*_0x4cd544);}if(_0x4cd544<0x0&&_0x55e4ee['isActor']()===this['subject']()[_0x230fd6(0x303)]()){const _0x298b74=_0x49a5c7[_0x230fd6(0x29f)];this[_0x230fd6(0x23f)]()[_0x230fd6(0x239)](_0x298b74*Math[_0x230fd6(0x2fd)](_0x4cd544));}},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x329)]=Game_BattlerBase['prototype'][_0xfa7ab2(0x2d4)],Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x2d4)]=function(){const _0x848523=_0xfa7ab2;this[_0x848523(0x2b6)]={},VisuMZ['AggroControlSystem'][_0x848523(0x329)][_0x848523(0x337)](this),this[_0x848523(0x2c2)]();},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x2c2)]=function(){const _0x8f57f0=_0xfa7ab2;this['clearProvokers'](),this[_0x8f57f0(0x250)]();},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x31a)]=function(){const _0x40d988=_0xfa7ab2;this[_0x40d988(0x1f8)]={};},VisuMZ[_0xfa7ab2(0x268)]['Game_BattlerBase_refresh']=Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x2d5)],Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x2d5)]=function(){const _0x4beafb=_0xfa7ab2;this[_0x4beafb(0x2b6)]={},VisuMZ[_0x4beafb(0x268)][_0x4beafb(0x32e)][_0x4beafb(0x337)](this),this['removeDeadProvokerStates']();},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x27a)]=function(_0x47bc56){const _0xe7c515=_0xfa7ab2;return this[_0xe7c515(0x2b6)]=this[_0xe7c515(0x2b6)]||{},this[_0xe7c515(0x2b6)][_0x47bc56]!==undefined;},Game_BattlerBase[_0xfa7ab2(0x234)]['provoker']=function(){const _0x286312=_0xfa7ab2;for(const _0x1bdb18 of this[_0x286312(0x34a)]()){if(DataManager[_0x286312(0x270)](_0x1bdb18)){if(this[_0x286312(0x1f8)]===undefined)this[_0x286312(0x31a)]();const _0x21cb2c=this[_0x286312(0x1f8)][_0x1bdb18['id']],_0x771e44=BattleManager[_0x286312(0x20e)](_0x21cb2c);if(_0x771e44&&_0x771e44[_0x286312(0x2cb)]())return _0x771e44;}}return null;},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x26f)]=function(){const _0x10262e=_0xfa7ab2;return!!this[_0x10262e(0x357)]();},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x2fc)]=function(){const _0x18610a=_0xfa7ab2;return this[_0x18610a(0x265)]()[_0x18610a(0x2f4)](_0x13a166=>_0x13a166&&_0x13a166[_0x18610a(0x31e)]['match'](/<BYPASS PROVOKE>/i));},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x204)]=function(){const _0x41b547=_0xfa7ab2;let _0x84ac92='provokeHeightOrigin';if(this['checkCacheKey'](_0x84ac92))return this['_cache'][_0x84ac92];return this['_cache'][_0x84ac92]=this[_0x41b547(0x2f2)](),this['_cache'][_0x84ac92];},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x2f2)]=function(){const _0x540876=_0xfa7ab2,_0x160b28=this['isActor']()?this[_0x540876(0x350)]()[_0x540876(0x31e)]:this[_0x540876(0x2d3)]()?this[_0x540876(0x2f1)]()['note']:'';if(_0x160b28[_0x540876(0x2dc)](/<PROVOKE HEIGHT ORIGIN: (\d+)([%％])>/i))return Number(RegExp['$1'])*0.01;return VisuMZ[_0x540876(0x268)][_0x540876(0x2d9)][_0x540876(0x2d2)][_0x540876(0x245)];},Game_BattlerBase['prototype'][_0xfa7ab2(0x1c4)]=function(){const _0x5d9989=_0xfa7ab2;for(const _0xc98358 of this[_0x5d9989(0x34a)]()){if(DataManager[_0x5d9989(0x270)](_0xc98358)){if(this[_0x5d9989(0x1f8)]===undefined)this['clearProvokers']();const _0x255fce=this[_0x5d9989(0x1f8)][_0xc98358['id']],_0x3a4124=BattleManager[_0x5d9989(0x20e)](_0x255fce);_0x3a4124&&_0x3a4124[_0x5d9989(0x343)]()&&this[_0x5d9989(0x235)](_0xc98358['id']);}}},Game_BattlerBase['prototype'][_0xfa7ab2(0x263)]=function(_0x220add){const _0x3ed521=_0xfa7ab2;switch(_0x220add){case Game_Action[_0x3ed521(0x243)]:return this[_0x3ed521(0x24b)]();break;case Game_Action[_0x3ed521(0x2f6)]:return this[_0x3ed521(0x2cd)]();break;case Game_Action[_0x3ed521(0x32a)]:return this[_0x3ed521(0x1d7)]();break;}},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x1c5)]=function(){const _0x5941e1=_0xfa7ab2;return this[_0x5941e1(0x24b)]()||this[_0x5941e1(0x2cd)]()||this[_0x5941e1(0x1d7)]();},Game_BattlerBase['prototype'][_0xfa7ab2(0x24b)]=function(){const _0x1133ac=_0xfa7ab2;return this[_0x1133ac(0x265)]()['some'](_0x31625c=>_0x31625c&&_0x31625c[_0x1133ac(0x31e)][_0x1133ac(0x2dc)](/<(?:TAUNT|PHYSICAL TAUNT|ALL TAUNT)>/i));},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x2cd)]=function(){const _0x543f7f=_0xfa7ab2;return this[_0x543f7f(0x265)]()[_0x543f7f(0x2f4)](_0x228866=>_0x228866&&_0x228866[_0x543f7f(0x31e)]['match'](/<(?:TAUNT|MAGICAL TAUNT|ALL TAUNT)>/i));},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x1d7)]=function(){const _0x3c8ea3=_0xfa7ab2;return this[_0x3c8ea3(0x265)]()[_0x3c8ea3(0x2f4)](_0x2be055=>_0x2be055&&_0x2be055[_0x3c8ea3(0x31e)][_0x3c8ea3(0x2dc)](/<(?:TAUNT|CERTAIN TAUNT|CERTAIN HIT TAUNT|ALL TAUNT)>/i));},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x27f)]=function(){const _0x5cf5ca=_0xfa7ab2;return this['traitObjects']()[_0x5cf5ca(0x2f4)](_0x80939a=>_0x80939a&&_0x80939a[_0x5cf5ca(0x31e)][_0x5cf5ca(0x2dc)](/<BYPASS TAUNT>/i));},Game_BattlerBase['prototype'][_0xfa7ab2(0x250)]=function(){const _0x30ccce=_0xfa7ab2;this[_0x30ccce(0x2cc)]=0x1;},VisuMZ[_0xfa7ab2(0x268)]['Game_BattlerBase_sparam']=Game_BattlerBase['prototype'][_0xfa7ab2(0x246)],Game_BattlerBase['prototype'][_0xfa7ab2(0x246)]=function(_0x3d74ab){const _0x4239f3=_0xfa7ab2;let _0x367d20=VisuMZ['AggroControlSystem'][_0x4239f3(0x252)][_0x4239f3(0x337)](this,_0x3d74ab);if(_0x3d74ab===0x0){if(this['_aggro']===undefined)this['clearAggro']();_0x367d20*=this[_0x4239f3(0x255)]();}return _0x367d20;},Game_BattlerBase['prototype'][_0xfa7ab2(0x1bf)]=function(_0x4ddb70){const _0x578534=_0xfa7ab2;if(this[_0x578534(0x2cc)]===undefined)this[_0x578534(0x250)]();this[_0x578534(0x2cc)]=Math[_0x578534(0x2f0)](0x1,Math['round'](this[_0x578534(0x2cc)]));},Game_BattlerBase['prototype'][_0xfa7ab2(0x239)]=function(_0x5b1ade){const _0x2351b8=_0xfa7ab2;if(this[_0x2351b8(0x2cc)]===undefined)this[_0x2351b8(0x250)]();this['_aggro']=Math['max'](0x1,this['_aggro']+Math[_0x2351b8(0x324)](_0x5b1ade));},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x1fc)]=function(_0x10f963){const _0x336b2a=_0xfa7ab2;this[_0x336b2a(0x239)](-_0x10f963);},Game_BattlerBase[_0xfa7ab2(0x234)]['aggro']=function(){const _0x3bc22d=_0xfa7ab2;if(this[_0x3bc22d(0x343)]())return 0x0;return this[_0x3bc22d(0x2d8)]()*this[_0x3bc22d(0x203)]();},Game_BattlerBase['prototype'][_0xfa7ab2(0x2ad)]=function(){const _0x3f49d1=_0xfa7ab2;if(this[_0x3f49d1(0x2cc)]===undefined){if(_0x3f49d1(0x2c0)!=='Xgpvv'){const _0x38d083=_0xac0b62[_0x3f49d1(0x284)];this[_0x3f49d1(0x23f)]()['gainAggro'](_0x38d083*_0x342d32);}else this[_0x3f49d1(0x250)]();}return this[_0x3f49d1(0x2cc)];},Game_BattlerBase[_0xfa7ab2(0x234)]['baseAggro']=function(){const _0x5e6458=_0xfa7ab2;return this['traitObjects']()[_0x5e6458(0x1da)]((_0x5801a1,_0x5dc34b)=>{const _0x432481=_0x5e6458;return _0x5dc34b&&_0x5dc34b[_0x432481(0x31e)][_0x432481(0x2dc)](/<(?:AGGRO|ENMITY|THREAT): ([\+\-]\d+)>/i)?_0x5801a1+Number(RegExp['$1'])/0x64:_0x5801a1;},this[_0x5e6458(0x2ad)]());},Game_BattlerBase[_0xfa7ab2(0x234)]['aggroMultiplier']=function(){const _0x3a1c73=_0xfa7ab2;return this['traitObjects']()[_0x3a1c73(0x1da)]((_0x3dc081,_0x1564f0)=>{const _0x58b614=_0x3a1c73;return _0x1564f0&&_0x1564f0[_0x58b614(0x31e)][_0x58b614(0x2dc)](/<(?:AGGRO|ENMITY|THREAT) MULTIPLIER: (\d+)%>/i)?_0x3dc081+Number(RegExp['$1'])/0x64:_0x3dc081;},0x1);},Game_BattlerBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x1e9)]=function(){const _0x3e809f=_0xfa7ab2;return this[_0x3e809f(0x265)]()[_0x3e809f(0x2f4)](_0x2df6e9=>_0x2df6e9&&_0x2df6e9[_0x3e809f(0x31e)][_0x3e809f(0x2dc)](/<BYPASS HIGHEST (?:AGGRO|ENMITY|THREAT)>/i));},Game_BattlerBase['prototype'][_0xfa7ab2(0x289)]=function(){const _0x4d5fc4=_0xfa7ab2;return this[_0x4d5fc4(0x265)]()[_0x4d5fc4(0x2f4)](_0x1aa568=>_0x1aa568&&_0x1aa568['note']['match'](/<TARGET HIGHEST (?:AGGRO|ENMITY|THREAT)>/i));},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x213)]=Game_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x1cf)],Game_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x1cf)]=function(_0x28d252){const _0x349f3a=_0xfa7ab2;VisuMZ[_0x349f3a(0x268)][_0x349f3a(0x213)][_0x349f3a(0x337)](this,_0x28d252),this[_0x349f3a(0x250)]();},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x20b)]=Game_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x326)],Game_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x326)]=function(){const _0x74dc7f=_0xfa7ab2;VisuMZ['AggroControlSystem'][_0x74dc7f(0x20b)]['call'](this),this[_0x74dc7f(0x250)]();},VisuMZ[_0xfa7ab2(0x268)]['Game_Battler_addState']=Game_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x267)],Game_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x267)]=function(_0x42d300){const _0x4a1631=_0xfa7ab2;VisuMZ['AggroControlSystem']['Game_Battler_addState'][_0x4a1631(0x337)](this,_0x42d300),this['applyProvokeEffect'](_0x42d300);},Game_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x2d1)]=function(_0x56d2be){const _0x2ba3b3=_0xfa7ab2;if(this[_0x2ba3b3(0x1ea)](_0x56d2be)){if(this[_0x2ba3b3(0x1f8)]===undefined)this['clearProvokers']();const _0x3baf0f=BattleManager[_0x2ba3b3(0x2a6)](this);this[_0x2ba3b3(0x1f8)][_0x56d2be]=_0x3baf0f,!this['_provoker'][_0x56d2be]&&delete this[_0x2ba3b3(0x1f8)][_0x56d2be];}},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x339)]=BattleManager[_0xfa7ab2(0x218)],BattleManager['invokeCounterAttack']=function(_0x4286cd,_0x5d0bf9){const _0x103752=_0xfa7ab2;this[_0x103752(0x1c0)]=_0x5d0bf9,VisuMZ['AggroControlSystem'][_0x103752(0x339)]['call'](this,_0x4286cd,_0x5d0bf9),this['_counterAttackingTarget']=undefined;},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x2de)]=BattleManager[_0xfa7ab2(0x20d)],BattleManager['invokeMagicReflection']=function(_0x392309,_0x3bf223){const _0x26060c=_0xfa7ab2;this['_counterAttackingTarget']=_0x3bf223,VisuMZ['AggroControlSystem']['BattleManager_invokeMagicReflection'][_0x26060c(0x337)](this,_0x392309,_0x3bf223),this[_0x26060c(0x1c0)]=undefined;},Game_Unit[_0xfa7ab2(0x234)]['physicalTauntMembers']=function(){const _0x3c95ae=_0xfa7ab2;return this[_0x3c95ae(0x32c)]()[_0x3c95ae(0x1db)](_0x594753=>_0x594753&&_0x594753['physicalTaunt']());},Game_Unit[_0xfa7ab2(0x234)]['magicalTauntMembers']=function(){const _0x37760b=_0xfa7ab2;return this[_0x37760b(0x32c)]()[_0x37760b(0x1db)](_0x43157d=>_0x43157d&&_0x43157d[_0x37760b(0x2cd)]());},Game_Unit['prototype']['certainHitTauntMembers']=function(){const _0x1ea2a1=_0xfa7ab2;return this[_0x1ea2a1(0x32c)]()[_0x1ea2a1(0x1db)](_0x59e6c2=>_0x59e6c2&&_0x59e6c2[_0x1ea2a1(0x1d7)]());},Game_Unit[_0xfa7ab2(0x234)]['getTauntMembers']=function(_0x580cc6){const _0x3d0cd8=_0xfa7ab2;switch(_0x580cc6){case Game_Action[_0x3d0cd8(0x243)]:return this[_0x3d0cd8(0x1f0)]();break;case Game_Action[_0x3d0cd8(0x2f6)]:return this[_0x3d0cd8(0x226)]();break;case Game_Action[_0x3d0cd8(0x32a)]:return this[_0x3d0cd8(0x25a)]();break;}return[];},Game_Unit[_0xfa7ab2(0x234)][_0xfa7ab2(0x1e8)]=function(_0x2aa103){const _0x5d5ae3=_0xfa7ab2;let _0x2f27da=[];switch(_0x2aa103){case Game_Action[_0x5d5ae3(0x243)]:_0x2f27da=this[_0x5d5ae3(0x1f0)]();break;case Game_Action[_0x5d5ae3(0x2f6)]:_0x2f27da=this['magicalTauntMembers']();break;case Game_Action[_0x5d5ae3(0x32a)]:_0x2f27da=this[_0x5d5ae3(0x25a)]();break;}let _0x17e4da=Math[_0x5d5ae3(0x1dd)]()*this['tgrSumFromGroup'](_0x2f27da),_0x40b7d1=null;if(BattleManager[_0x5d5ae3(0x30b)]()){const _0x43a66d=!![];return this[_0x5d5ae3(0x295)](_0x2f27da,_0x43a66d);}else{if(_0x5d5ae3(0x269)===_0x5d5ae3(0x253)){const _0x47359c=_0x23b1ef[_0x5d5ae3(0x32c)]();this[_0x5d5ae3(0x259)]=this[_0x5d5ae3(0x259)][_0x5d5ae3(0x335)](_0x47359c),_0x1d64d8[_0x5d5ae3(0x2c9)]&&_0x16d461['canSingleOrMultipleSelect']()&&_0x47359c[_0x5d5ae3(0x28b)]>0x1&&this[_0x5d5ae3(0x315)](_0x5d5ae3(0x302),this[_0x5d5ae3(0x30a)][_0x5d5ae3(0x35a)](this));}else{for(const _0x59a58b of _0x2f27da){_0x17e4da-=_0x59a58b[_0x5d5ae3(0x2ef)],_0x17e4da<=0x0&&!_0x40b7d1&&(_0x40b7d1=_0x59a58b);}return _0x40b7d1||this['randomTarget']();}}},Game_Unit[_0xfa7ab2(0x234)][_0xfa7ab2(0x344)]=function(_0x52b17a){const _0x4e115a=_0xfa7ab2;return _0x52b17a[_0x4e115a(0x1da)]((_0x4349d3,_0x3b2f0a)=>_0x4349d3+_0x3b2f0a['tgr'],0x0);},Game_Unit[_0xfa7ab2(0x234)]['tgrMax']=function(){const _0x944523=_0xfa7ab2,_0x593b89=this['aliveMembers']()['map'](_0x3489b0=>_0x3489b0['tgr']);return Math[_0x944523(0x2f0)](..._0x593b89);},Game_Unit[_0xfa7ab2(0x234)][_0xfa7ab2(0x2bb)]=function(){const _0x4f400a=_0xfa7ab2,_0x5b03a8=this[_0x4f400a(0x32c)]()[_0x4f400a(0x22a)](_0x31e504=>_0x31e504['tgr']);return Math[_0x4f400a(0x304)](..._0x5b03a8);},Game_Unit[_0xfa7ab2(0x234)][_0xfa7ab2(0x1f9)]=function(){const _0x100274=_0xfa7ab2;this['_highestTgrMember']=undefined,this[_0x100274(0x26d)]=undefined;},Game_Unit[_0xfa7ab2(0x234)][_0xfa7ab2(0x32d)]=function(){const _0x2a33ec=_0xfa7ab2;if(!this[_0x2a33ec(0x296)]){if(_0x2a33ec(0x290)===_0x2a33ec(0x208))this[_0x2a33ec(0x35c)]();else{const _0x14814f=this[_0x2a33ec(0x34b)](),_0x3192a4=this[_0x2a33ec(0x32c)]()['filter'](_0xe111d1=>_0xe111d1[_0x2a33ec(0x2ef)]===_0x14814f);this['_highestTgrMember']=_0x3192a4[Math['randomInt'](_0x3192a4[_0x2a33ec(0x28b)])]||this[_0x2a33ec(0x273)]();}}return this[_0x2a33ec(0x296)];},Game_Unit['prototype'][_0xfa7ab2(0x28a)]=function(){const _0x1062a=_0xfa7ab2;if(!this[_0x1062a(0x26d)]){const _0x47d7f4=this[_0x1062a(0x2bb)](),_0x59a037=this[_0x1062a(0x32c)]()[_0x1062a(0x1db)](_0x1a57fc=>_0x1a57fc[_0x1062a(0x2ef)]===_0x47d7f4);this[_0x1062a(0x26d)]=_0x59a037[Math[_0x1062a(0x1f3)](_0x59a037[_0x1062a(0x28b)])]||this[_0x1062a(0x273)]();}return this[_0x1062a(0x26d)];},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x230)]=BattleManager['endAction'],BattleManager[_0xfa7ab2(0x224)]=function(){const _0x40b23b=_0xfa7ab2;VisuMZ[_0x40b23b(0x268)][_0x40b23b(0x230)]['call'](this),$gameParty[_0x40b23b(0x1f9)](),$gameTroop[_0x40b23b(0x1f9)]();},Game_Unit[_0xfa7ab2(0x234)]['findTgrMember']=function(_0x4648bb,_0x12cebb){const _0x4a6d49=_0xfa7ab2,_0x469428=_0x4648bb[_0x4a6d49(0x22a)](_0x53900b=>_0x53900b['tgr']),_0x224836=_0x12cebb?Math[_0x4a6d49(0x2f0)](..._0x469428):Math[_0x4a6d49(0x304)](..._0x469428),_0x6354a5=_0x4648bb[_0x4a6d49(0x1db)](_0x2db42f=>_0x2db42f[_0x4a6d49(0x2ef)]===_0x224836);return _0x6354a5[Math[_0x4a6d49(0x1f3)](_0x6354a5['length'])]||this[_0x4a6d49(0x273)]();},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x2e9)]=Scene_Options[_0xfa7ab2(0x234)][_0xfa7ab2(0x25e)],Scene_Options['prototype']['maxCommands']=function(){const _0x5a260e=_0xfa7ab2;let _0x1391c4=VisuMZ[_0x5a260e(0x268)][_0x5a260e(0x2e9)][_0x5a260e(0x337)](this);const _0x58f09e=VisuMZ[_0x5a260e(0x268)]['Settings'];if(_0x58f09e[_0x5a260e(0x2d2)]['AddOption']&&_0x58f09e['Provoke'][_0x5a260e(0x1c3)])_0x1391c4++;if(_0x58f09e[_0x5a260e(0x24a)][_0x5a260e(0x297)]&&_0x58f09e['Aggro'][_0x5a260e(0x1c3)])_0x1391c4++;return _0x1391c4;},Sprite_Battler[_0xfa7ab2(0x1dc)]=VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x2d9)][_0xfa7ab2(0x33b)][_0xfa7ab2(0x212)],Sprite_Battler[_0xfa7ab2(0x28f)]=VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x2d9)]['Taunt'][_0xfa7ab2(0x31d)],Sprite_Battler[_0xfa7ab2(0x227)]=VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x2d9)][_0xfa7ab2(0x33b)][_0xfa7ab2(0x23e)],Sprite_Battler[_0xfa7ab2(0x336)]=VisuMZ[_0xfa7ab2(0x268)]['Settings'][_0xfa7ab2(0x33b)]['AniCertain'],Sprite_Battler['_mirrorActorTauntAnimations']=VisuMZ['AggroControlSystem']['Settings'][_0xfa7ab2(0x33b)][_0xfa7ab2(0x2f7)],Sprite_Battler['_muteTauntAnimations']=VisuMZ[_0xfa7ab2(0x268)]['Settings'][_0xfa7ab2(0x33b)][_0xfa7ab2(0x1cc)],VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x220)]=Sprite_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x2c6)],Sprite_Battler['prototype'][_0xfa7ab2(0x2c6)]=function(_0x2dc422){const _0x47d06e=_0xfa7ab2;VisuMZ[_0x47d06e(0x268)][_0x47d06e(0x220)][_0x47d06e(0x337)](this,_0x2dc422),this['isShowPriorityLines']()&&setTimeout(this[_0x47d06e(0x31f)][_0x47d06e(0x35a)](this),0x3e8);},VisuMZ['AggroControlSystem'][_0xfa7ab2(0x2a9)]=Sprite_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x2d4)],Sprite_Battler['prototype'][_0xfa7ab2(0x2d4)]=function(){const _0x4828f6=_0xfa7ab2;VisuMZ[_0x4828f6(0x268)][_0x4828f6(0x2a9)][_0x4828f6(0x337)](this),this['initTauntAnimations']();},Sprite_Battler['prototype'][_0xfa7ab2(0x2c1)]=function(){const _0x24ed21=_0xfa7ab2;this[_0x24ed21(0x333)]=VisuMZ[_0x24ed21(0x268)][_0x24ed21(0x2d9)]['Taunt'][_0x24ed21(0x212)],this[_0x24ed21(0x215)]=[_0x24ed21(0x356),_0x24ed21(0x25d),'certainHit'];},Sprite_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x274)]=function(){const _0x39bd4b=_0xfa7ab2;if(!Imported[_0x39bd4b(0x2da)])return![];if(![Sprite_Actor,Sprite_Enemy][_0x39bd4b(0x256)](this[_0x39bd4b(0x1be)]))return![];return ConfigManager['provokeOrigin']&&VisuMZ['AggroControlSystem'][_0x39bd4b(0x2d9)][_0x39bd4b(0x2d2)][_0x39bd4b(0x1d3)];},Sprite_Battler['prototype'][_0xfa7ab2(0x31f)]=function(){const _0x19a3e3=_0xfa7ab2;if(!SceneManager[_0x19a3e3(0x1e6)]())return;this['_provokeSprite']=new Sprite_ProvokeTrail(this),this[_0x19a3e3(0x225)][_0x19a3e3(0x282)]()[_0x19a3e3(0x1e7)](this['_provokeSprite']);},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x27c)]=Sprite_Battler[_0xfa7ab2(0x234)]['setBattler'],Sprite_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x2f9)]=function(_0x2a4ff4){const _0x3a1e71=_0xfa7ab2;VisuMZ[_0x3a1e71(0x268)][_0x3a1e71(0x27c)][_0x3a1e71(0x337)](this,_0x2a4ff4);if(this[_0x3a1e71(0x27e)])this[_0x3a1e71(0x27e)][_0x3a1e71(0x1f2)]=_0x2a4ff4;},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x217)]=Sprite_Battler[_0xfa7ab2(0x234)]['update'],Sprite_Battler[_0xfa7ab2(0x234)]['update']=function(){const _0x5c5a7f=_0xfa7ab2;VisuMZ[_0x5c5a7f(0x268)]['Sprite_Battler_update'][_0x5c5a7f(0x337)](this),this[_0x5c5a7f(0x2b1)]();},Sprite_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x2b1)]=function(){const _0x29853f=_0xfa7ab2;if(!Imported[_0x29853f(0x1e1)])return;if(!Imported[_0x29853f(0x2da)])return;if(!VisuMZ[_0x29853f(0x268)][_0x29853f(0x2d9)][_0x29853f(0x33b)][_0x29853f(0x319)])return;if(!this[_0x29853f(0x1f2)])return;this[_0x29853f(0x333)]--,this[_0x29853f(0x333)]<=0x0&&(_0x29853f(0x34e)!==_0x29853f(0x2c4)?this[_0x29853f(0x2ea)]():this[_0x29853f(0x2e6)]=0xff);},Sprite_Battler[_0xfa7ab2(0x234)]['startNewTauntAnimation']=function(){const _0x59f206=_0xfa7ab2;this[_0x59f206(0x333)]=Sprite_Battler['_animationCycleTime'];if(!this[_0x59f206(0x1f2)])return;if(!this[_0x59f206(0x1f2)][_0x59f206(0x1c5)]())return;const _0x2d9894=[this['_battler']],_0x31254d=this[_0x59f206(0x288)](),_0x4b517a=this['_battler'][_0x59f206(0x303)]()&&Sprite_Battler['_mirrorActorTauntAnimations'],_0x55cd01=Sprite_Battler[_0x59f206(0x1fd)];$gameTemp['requestFauxAnimation'](_0x2d9894,_0x31254d,_0x4b517a,_0x55cd01);},Sprite_Battler[_0xfa7ab2(0x234)][_0xfa7ab2(0x288)]=function(){const _0x1c3856=_0xfa7ab2;let _0x103c8b=this[_0x1c3856(0x215)][_0x1c3856(0x28b)];while(_0x103c8b){const _0x32d50a=this['_tauntAnimationCycle'][_0x1c3856(0x242)]();this[_0x1c3856(0x215)][_0x1c3856(0x2e7)](_0x32d50a);const _0x34bfe6=_0x1c3856(0x2eb)[_0x1c3856(0x30e)](_0x32d50a);if(this[_0x1c3856(0x1f2)][_0x34bfe6]()){const _0x97100b=_0x1c3856(0x2c7)[_0x1c3856(0x30e)](_0x32d50a),_0x31439f=Sprite_Battler[_0x97100b];if(_0x31439f)return _0x31439f;}_0x103c8b--;}return Sprite_Battler[_0x1c3856(0x336)];},VisuMZ['AggroControlSystem'][_0xfa7ab2(0x1d6)]=Sprite_Actor[_0xfa7ab2(0x234)][_0xfa7ab2(0x316)],Sprite_Actor[_0xfa7ab2(0x234)][_0xfa7ab2(0x316)]=function(){const _0x209fd0=_0xfa7ab2;VisuMZ['AggroControlSystem'][_0x209fd0(0x1d6)][_0x209fd0(0x337)](this),this[_0x209fd0(0x285)]();},Sprite_Actor['prototype']['createAggroGauge']=function(){const _0x793ee0=_0xfa7ab2;if(this['constructor']!==Sprite_Actor)return;if(!this[_0x793ee0(0x32f)]())return;if(!SceneManager[_0x793ee0(0x1e6)]())return;const _0x2b6dbb=VisuMZ[_0x793ee0(0x268)][_0x793ee0(0x2d9)][_0x793ee0(0x24a)],_0xa9a1c8=new Sprite_Gauge();_0xa9a1c8[_0x793ee0(0x1d1)]['x']=_0x2b6dbb[_0x793ee0(0x1cd)],_0xa9a1c8[_0x793ee0(0x1d1)]['y']=_0x2b6dbb[_0x793ee0(0x29c)];const _0x411ddd=Sprite_Gauge[_0x793ee0(0x234)][_0x793ee0(0x2ac)]();_0xa9a1c8[_0x793ee0(0x261)]['x']=_0xa9a1c8[_0x793ee0(0x261)]['y']=_0x2b6dbb[_0x793ee0(0x25f)],this[_0x793ee0(0x27e)]=_0xa9a1c8,this[_0x793ee0(0x1e7)](_0xa9a1c8);},Sprite_Actor['prototype'][_0xfa7ab2(0x32f)]=function(){const _0x460d52=_0xfa7ab2;if(Imported[_0x460d52(0x2da)]&&this[_0x460d52(0x1be)]===Sprite_SvEnemy)return![];return ConfigManager[_0x460d52(0x26e)]&&VisuMZ[_0x460d52(0x268)][_0x460d52(0x2d9)][_0x460d52(0x24a)][_0x460d52(0x272)];},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x25b)]=Sprite_Actor['prototype'][_0xfa7ab2(0x22b)],Sprite_Actor[_0xfa7ab2(0x234)][_0xfa7ab2(0x22b)]=function(){const _0x2d2456=_0xfa7ab2;VisuMZ['AggroControlSystem'][_0x2d2456(0x25b)]['call'](this),this['updateAggroGaugeSprite']();},Sprite_Actor[_0xfa7ab2(0x234)][_0xfa7ab2(0x35b)]=function(){const _0x3b5584=_0xfa7ab2;if(!this[_0x3b5584(0x1f2)])return;if(!this[_0x3b5584(0x27e)])return;const _0x4a5caf=VisuMZ[_0x3b5584(0x268)][_0x3b5584(0x2d9)][_0x3b5584(0x24a)],_0x77fedf=this[_0x3b5584(0x27e)];let _0x1db2b2=_0x4a5caf[_0x3b5584(0x318)];if(this[_0x3b5584(0x1f2)][_0x3b5584(0x211)]){if(_0x3b5584(0x2bf)!==_0x3b5584(0x2bf)){if(!_0xa49e76['inBattle']())return;_0x127320[_0x3b5584(0x317)](_0x21268e,_0x57a975);const _0x5b34f8=_0x2279df[_0x3b5584(0x350)](_0x376bb0[_0x3b5584(0x20f)]),_0x3511dd=_0x5732fc[_0x3b5584(0x24a)];if(_0x5b34f8)_0x5b34f8[_0x3b5584(0x1bf)](_0x3511dd);}else _0x1db2b2+=this[_0x3b5584(0x1f2)][_0x3b5584(0x211)]();}let _0xfec149=_0x4a5caf['OffsetY'];this['_battler'][_0x3b5584(0x2f8)]&&(_0xfec149+=this['_battler']['battleUIOffsetY']()),_0x77fedf['x']=_0x1db2b2,_0x77fedf['y']=-this[_0x3b5584(0x351)]+_0xfec149,this[_0x3b5584(0x1f2)]&&_0x77fedf[_0x3b5584(0x305)]!==_0x3b5584(0x255)&&(_0x77fedf[_0x3b5584(0x280)]=!![],_0x77fedf[_0x3b5584(0x21f)](this[_0x3b5584(0x1f2)],'aggro')),this['scale']['x']<0x0&&(_0x3b5584(0x2cf)==='OObNM'?_0x77fedf[_0x3b5584(0x261)]['x']=-Math['abs'](_0x77fedf['scale']['x']):(_0xca4065['AggroControlSystem'][_0x3b5584(0x213)][_0x3b5584(0x337)](this,_0x293c8b),this[_0x3b5584(0x250)]()));},Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x1e4)]=function(){const _0x5215b2=_0xfa7ab2;return this[_0x5215b2(0x1f2)]&&this['_statusType']===_0x5215b2(0x255);},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x22d)]=Sprite_Gauge['prototype'][_0xfa7ab2(0x314)],Sprite_Gauge[_0xfa7ab2(0x234)]['gaugeX']=function(){const _0x20f61e=_0xfa7ab2;return this[_0x20f61e(0x1e4)]()?0x0:VisuMZ[_0x20f61e(0x268)][_0x20f61e(0x22d)][_0x20f61e(0x337)](this);},VisuMZ['AggroControlSystem'][_0xfa7ab2(0x34c)]=Sprite_Gauge['prototype']['gaugeRate'],Sprite_Gauge['prototype'][_0xfa7ab2(0x1d0)]=function(){const _0x411d0b=_0xfa7ab2;let _0x3f91df=VisuMZ['AggroControlSystem'][_0x411d0b(0x34c)][_0x411d0b(0x337)](this);if(this['isAggroType']()&&this[_0x411d0b(0x1f2)]){if('wSfuH'!=='wSfuH'){if(!_0x3193ba[_0x411d0b(0x2da)])return;const _0x559364=this['_battleField']['x'],_0x16800d=this[_0x411d0b(0x1ca)]['y'],_0xcfc367=this['_battleField'][_0x411d0b(0x277)],_0x5be665=this[_0x411d0b(0x1ca)]['height'];this[_0x411d0b(0x292)]=new _0x103da(),this[_0x411d0b(0x292)]['setFrame'](0x0,0x0,_0xcfc367,_0x5be665),this[_0x411d0b(0x292)]['x']=_0x559364,this[_0x411d0b(0x292)]['y']=_0x16800d;if(_0x509f87['VisuMZ_1_BattleCore']){const _0xe55273=this[_0x411d0b(0x2bd)]['indexOf'](this['_damageContainer']);this[_0x411d0b(0x254)](this[_0x411d0b(0x292)],_0xe55273);}else this[_0x411d0b(0x1e7)](this[_0x411d0b(0x292)]);}else{if(this[_0x411d0b(0x1f2)][_0x411d0b(0x343)]())return 0x0;if(this[_0x411d0b(0x1f2)][_0x411d0b(0x2cb)]()&&this[_0x411d0b(0x1f2)]['friendsUnit']()[_0x411d0b(0x32c)]()[_0x411d0b(0x28b)]===0x1)return 0x1;}}return _0x3f91df[_0x411d0b(0x2a0)](0x0,0x1);},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x22c)]=Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x347)],Sprite_Gauge['prototype'][_0xfa7ab2(0x347)]=function(){const _0xa1edda=_0xfa7ab2;if(this['isAggroType']())return this[_0xa1edda(0x2a7)]();else{if(_0xa1edda(0x2a3)!==_0xa1edda(0x2a3)){let _0x4a268c=this['_tauntAnimationCycle'][_0xa1edda(0x28b)];while(_0x4a268c){const _0x944856=this['_tauntAnimationCycle'][_0xa1edda(0x242)]();this['_tauntAnimationCycle'][_0xa1edda(0x2e7)](_0x944856);const _0x24bde2=_0xa1edda(0x2eb)[_0xa1edda(0x30e)](_0x944856);if(this[_0xa1edda(0x1f2)][_0x24bde2]()){const _0x15a723=_0xa1edda(0x2c7)[_0xa1edda(0x30e)](_0x944856),_0x331939=_0x31fd39[_0x15a723];if(_0x331939)return _0x331939;}_0x4a268c--;}return _0x446399[_0xa1edda(0x336)];}else return VisuMZ[_0xa1edda(0x268)][_0xa1edda(0x22c)][_0xa1edda(0x337)](this);}},Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x2a7)]=function(){const _0x341681=_0xfa7ab2,_0x6f64c3=this['_battler'][_0x341681(0x2ba)](),_0x1a77f2=this[_0x341681(0x1f2)][_0x341681(0x2ef)]-_0x6f64c3[_0x341681(0x2bb)](),_0x40b8eb=_0x6f64c3['tgrMax']()-_0x6f64c3[_0x341681(0x2bb)]();if(_0x1a77f2>=_0x40b8eb)return 0x64;return _0x1a77f2/Math[_0x341681(0x2f0)](_0x40b8eb,0x1)*0x64;},VisuMZ['AggroControlSystem'][_0xfa7ab2(0x1f6)]=Sprite_Gauge[_0xfa7ab2(0x234)]['currentMaxValue'],Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x207)]=function(){const _0x5b8160=_0xfa7ab2;if(this[_0x5b8160(0x1e4)]()){if('dpMMU'!==_0x5b8160(0x257))this[_0x5b8160(0x2e6)]=0xff;else return this[_0x5b8160(0x25c)]();}else return VisuMZ[_0x5b8160(0x268)][_0x5b8160(0x1f6)][_0x5b8160(0x337)](this);},Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x25c)]=function(){return 0x64;},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x22e)]=Sprite_Gauge[_0xfa7ab2(0x234)]['gaugeColor1'],Sprite_Gauge['prototype']['gaugeColor1']=function(){const _0x135b58=_0xfa7ab2;if(this['isAggroType']())return ColorManager[_0x135b58(0x334)]();else{if('GdnHn'!=='fCENW')return VisuMZ['AggroControlSystem'][_0x135b58(0x22e)][_0x135b58(0x337)](this);else this[_0x135b58(0x2b6)]={},_0x4958a3[_0x135b58(0x268)][_0x135b58(0x329)][_0x135b58(0x337)](this),this[_0x135b58(0x2c2)]();}},VisuMZ[_0xfa7ab2(0x268)]['Sprite_Gauge_gaugeColor2']=Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x30d)],Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x30d)]=function(){const _0x30728e=_0xfa7ab2;return this[_0x30728e(0x1e4)]()?ColorManager[_0x30728e(0x345)]():VisuMZ[_0x30728e(0x268)][_0x30728e(0x1e2)][_0x30728e(0x337)](this);},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x1bb)]=Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x22b)],Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x22b)]=function(){const _0x56b6c2=_0xfa7ab2;VisuMZ['AggroControlSystem'][_0x56b6c2(0x1bb)][_0x56b6c2(0x337)](this),this['updateOpacityAggroControl']();},Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x2a2)]=function(){const _0x3be1a7=_0xfa7ab2;if(!this[_0x3be1a7(0x1e4)]())return;if(!Imported['VisuMZ_1_BattleCore'])return;const _0x2bb83c=this['_battler'][_0x3be1a7(0x298)]();if(this['_menuAggroType']){if(_0x3be1a7(0x321)===_0x3be1a7(0x321))this[_0x3be1a7(0x2e6)]=0xff;else{if(!_0x1572d9)return![];return _0x105bc7[_0x3be1a7(0x31e)][_0x3be1a7(0x2dc)](/<BYPASS PROVOKE>/i);}}else _0x2bb83c&&_0x2bb83c[_0x3be1a7(0x2e6)]>0x0?this[_0x3be1a7(0x2e6)]=0xff:this[_0x3be1a7(0x2e6)]=0x0;},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x2ed)]=Sprite_Gauge[_0xfa7ab2(0x234)]['drawValue'],Sprite_Gauge[_0xfa7ab2(0x234)][_0xfa7ab2(0x311)]=function(){const _0xac2efc=_0xfa7ab2;if(this[_0xac2efc(0x1e4)]())return;VisuMZ['AggroControlSystem'][_0xac2efc(0x2ed)][_0xac2efc(0x337)](this);};function Sprite_ProvokeTrail(){this['initialize'](...arguments);}function _0x1013(){const _0x5135ab=['AggroControlSystem','wiyuE','NycgC','addAggroControlSystemCommands','_provokeBitmap','_lowestTgrMember','aggroGauge','isProvokeAffected','stateHasProvoke','ARRAYEVAL','VisibleGauge','randomTarget','isShowPriorityLines','ARRAYFUNC','name','width','isBypassTaunt','create','checkCacheKey','updateChildrenOpacity','Sprite_Battler_setBattler','_statusWindow','_aggroGaugeSprite','bypassTaunt','visible','izzGB','parentContainer','addAggroControlSystemAggroCommand','AggroPerDmg','createAggroGauge','_targetY','toUpperCase','getNextTauntAnimation','alwaysTargetHighestAggro','lowestTgrMember','length','log','itemRectWithPadding','isForAnyone','_physicalTauntAnimation','JDPnR','ArcHeight','_provokeContainer','OptionName','isPlaytest','findTgrMember','_highestTgrMember','AddOption','battler','isBypassProvoke','Hdvzq','BattleStatusOffsetX','AnchorY','boxHeight','isMagical','AggroPerHeal','clamp','EVAL','updateOpacityAggroControl','YFjGz','isTauntAffected','exit','convertBattleTargetToString','currentValueAggroControl','createBattleField','Sprite_Battler_initMembers','LineColor','LVzyY','bitmapWidth','battleAggro','drawAggroGauge','RNXCS','value','updateTauntAnimations','actorId','makeData','applyItemUserEffectAggroControl','user','_cache','2864DqCEwi','inBattle','time','friendsUnit','tgrMin','applyProvokeFilters','children','tauntTargetsForAlive','frPVx','Xgpvv','initTauntAnimations','initAggroControl','applyData','AFREf','FUNC','initialize','_%1TauntAnimation','ARRAYSTRUCT','canSingleOrMultipleSelect','fyELD','isAlive','_aggro','magicalTaunt','_subject','OObNM','ActorSetAggro','applyProvokeEffect','Provoke','isEnemy','initMembers','refresh','Window_Options_addGeneralOptions','createChildSprites','baseAggro','Settings','VisuMZ_1_BattleCore','dfgyI','match','applyItemUserEffect','BattleManager_invokeMagicReflection','9027927WseeuQ','_opacitySpeed','status','hitType','7494152wZmFzj','isTpb','leftwardAnimation','opacity','push','OpacitySpeed','Scene_Options_maxCommands','startNewTauntAnimation','%1Taunt','ucmJZ','Sprite_Gauge_drawValue','list','tgr','max','enemy','createProvokeHeightOrigin','provokeOrigin','some','isPhysical','HITTYPE_MAGICAL','MirrorActorAni','battleUIOffsetY','setBattler','targetsForAlive','tpWVG','bypassProvoke','abs','#%1','UWnYv','VvtiS','_sprites','pagedown','isActor','min','_statusType','drawCircle','jMnCb','isAtbGaugeVisible','nameY','selectAllActors','isTargetHighestTGR','ARRAYSTR','gaugeColor2','format','smoothTarget','index','drawValue','EnemyIndex','fRsEg','gaugeX','setHandler','createStateSprite','ConvertParams','OffsetX','ShowAnimation','clearProvokers','Game_Action_applyGlobal','NMHTn','AniPhysical','note','createProvokeSprite','VisuMZ_2_BattleSystemATB','MaFRM','JSON','opponentsUnit','round','dFucH','onBattleEnd','indexOf','Game_Action_executeHpDamage','Game_BattlerBase_initMembers','HITTYPE_CERTAIN','textColor','aliveMembers','highestTgrMember','Game_BattlerBase_refresh','isAggroGaugeVisible','getColorDataFromPluginParameters','applyGlobal','faceWidth','_tauntAnimationTimer','aggroGaugeColor1','concat','_certainHitTauntAnimation','call','EixIO','BattleManager_invokeCounterAttack','itemRect','Taunt','Parts','111916JyRPnq','placeGauge','pow','255AoJjuX','Spriteset_Battle_createBattleField','wqEwz','isDead','tgrSumFromGroup','aggroGaugeColor2','needsSelection','currentValue','members','updateSubPositions','states','tgrMax','Sprite_Gauge_gaugeRate','zVBTK','JRxJc','EnemySetAggro','actor','height','nCzwk','PartsSize','yrDCb','isAggroAffected','physical','provoker','boxWidth','475668ahSvGx','bind','updateAggroGaugeSprite','sortEnemies','IoNki','placeAggroGauge','_damageContainer','updateAggroControl','Sprite_Gauge_update','aggro-gauge-color-1','6068502RAlwQi','constructor','setAggro','_counterAttackingTarget','addGeneralOptions','qlsPn','AdjustOptionsRect','removeDeadProvokerStates','taunting','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ARRAYJSON','Window_BattleEnemy_refresh','mgFoL','_battleField','aggroGaugeY','MuteAnimations','AnchorX','bitmap','onBattleStart','gaugeRate','anchor','Game_Action_applyItemUserEffect','ShowLines','addCommand','nfjXr','Sprite_Actor_createStateSprite','certainHitTaunt','BattleCore','Battle\x20Enemy\x20%1','reduce','filter','_animationCycleTime','random','battleLayoutStyle','description','Game_Action_targetsForAlive','VisuMZ_0_CoreEngine','Sprite_Gauge_gaugeColor2','GRWLz','isAggroType','GaugeColor2','isSceneBattle','addChild','randomTauntTarget','bypassHighestAggro','isStateAffected','placeActorName','isAggroGaugeShown','maxOpacity','applySubjectAggro','makeProvokeTarget','physicalTauntMembers','Game_Action_getSpecificBattlerKeyTarget','_battler','randomInt','AjPbP','NUM','Sprite_Gauge_currentMaxValue','ShowFacesListStyle','_provoker','clearTgrCache','target','parameters','loseAggro','_muteTauntAnimations','addAggroControlSystemProvokeCommand','executeHpDamage','_customModified','applyTauntFilters','_spriteset','aggroMultiplier','provokeHeightOrigin','MyrxI','getTauntMembers','currentMaxValue','IcDXw','BattleStatusOffsetY','arcHeight','Game_Battler_onBattleEnd','isBypassHighestAggro','invokeMagicReflection','convertStringToBattleTarget','ActorID','heightOrigin','battleUIOffsetX','CycleTime','Game_Battler_onBattleStart','STRUCT','_tauntAnimationCycle','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Sprite_Battler_update','invokeCounterAttack','aggro-gauge-color-2','provokeLineColor','4sPIeyJ','GaugeColor1','iconWidth','eJzoS','setup','Sprite_Battler_initialize','_homeY','isCertainHit','maxSprites','endAction','_provokeSprite','magicalTauntMembers','_magicalTauntAnimation','optDisplayTp','parse','map','update','Sprite_Gauge_currentValue','Sprite_Gauge_gaugeX','Sprite_Gauge_gaugeColor1','_mainSprite','BattleManager_endAction','nameX','registerCommand','Battle\x20Actor\x20%1','prototype','removeState','blendMode','ConfigManager_applyData','actor%1-gauge-aggro','gainAggro','okYSF','ConfigManager_makeData','_homeX','_targetX','AniMagical','subject','PriorityHighest','kOxvV','shift','HITTYPE_PHYSICAL','_colorCache','HeightOrigin','sparam','getColor','provokeBitmap','_targetIndex','Aggro','physicalTaunt','_scene','aggroGaugeX','173249eGtpsg','item','clearAggro','executeHpDamageAggroControl','Game_BattlerBase_sparam','ZgxbI','addChildAt','aggro','includes','dpMMU','partsSize','_enemies','certainHitTauntMembers','Sprite_Actor_update','currentMaxValueAggroControl','magical','maxCommands','Scale','gaugeHeight','scale','VxnbF','matchTauntType','version','traitObjects','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','addState'];_0x1013=function(){return _0x5135ab;};return _0x1013();}Sprite_ProvokeTrail[_0xfa7ab2(0x234)]=Object[_0xfa7ab2(0x279)](Sprite[_0xfa7ab2(0x234)]),Sprite_ProvokeTrail[_0xfa7ab2(0x234)][_0xfa7ab2(0x1be)]=Sprite_ProvokeTrail,Sprite_ProvokeTrail[_0xfa7ab2(0x234)]['initialize']=function(_0x7402e2){const _0x129175=_0xfa7ab2;this['_mainSprite']=_0x7402e2,Sprite[_0x129175(0x234)][_0x129175(0x2c6)]['call'](this),this[_0x129175(0x2d4)](),this[_0x129175(0x2d7)]();},Sprite_ProvokeTrail['prototype'][_0xfa7ab2(0x2d4)]=function(){const _0xe41347=_0xfa7ab2,_0x3bd0c7=VisuMZ['AggroControlSystem'][_0xe41347(0x2d9)][_0xe41347(0x2d2)];this[_0xe41347(0x1d1)]['x']=0.5,this[_0xe41347(0x1d1)]['y']=0.5,this[_0xe41347(0x23c)]=0x0,this[_0xe41347(0x221)]=0x0,this[_0xe41347(0x23d)]=0x0,this[_0xe41347(0x286)]=0x0,this[_0xe41347(0x2e6)]=0x0,this[_0xe41347(0x2e0)]=_0x3bd0c7[_0xe41347(0x2e8)],this[_0xe41347(0x236)]=_0x3bd0c7['BlendMode'];},Sprite_ProvokeTrail[_0xfa7ab2(0x234)][_0xfa7ab2(0x223)]=function(){const _0x44586e=_0xfa7ab2;return VisuMZ[_0x44586e(0x268)]['Settings'][_0x44586e(0x2d2)][_0x44586e(0x33c)];},Sprite_ProvokeTrail[_0xfa7ab2(0x234)][_0xfa7ab2(0x258)]=function(){const _0x142413=_0xfa7ab2;return VisuMZ['AggroControlSystem']['Settings'][_0x142413(0x2d2)][_0x142413(0x353)]/0x64;},Sprite_ProvokeTrail[_0xfa7ab2(0x234)][_0xfa7ab2(0x2d7)]=function(){const _0x24e51d=_0xfa7ab2;this[_0x24e51d(0x301)]=[];let _0x4aef15=0x0;for(let _0x1934a4=0x0;_0x1934a4<=this['maxSprites']();_0x1934a4++){const _0x16699a=new Sprite();_0x16699a[_0x24e51d(0x1ce)]=ImageManager[_0x24e51d(0x248)](),_0x16699a['anchor']['x']=0.5,_0x16699a['anchor']['y']=0.5,_0x16699a[_0x24e51d(0x261)]['x']=_0x16699a['scale']['y']=this[_0x24e51d(0x258)](),_0x16699a[_0x24e51d(0x2e6)]=_0x4aef15,_0x16699a[_0x24e51d(0x236)]=this[_0x24e51d(0x236)],this[_0x24e51d(0x1e7)](_0x16699a),this[_0x24e51d(0x301)][_0x24e51d(0x2e7)](_0x16699a),_0x4aef15+=this[_0x24e51d(0x2e0)];if(_0x4aef15>=0xff)_0x4aef15=0x0;}},Sprite_ProvokeTrail[_0xfa7ab2(0x234)][_0xfa7ab2(0x2e5)]=function(){const _0x414a80=_0xfa7ab2;return this[_0x414a80(0x22f)]['constructor']===Sprite_Actor;},Sprite_ProvokeTrail[_0xfa7ab2(0x234)]['parentContainer']=function(){const _0x3b625c=_0xfa7ab2;return SceneManager[_0x3b625c(0x24c)][_0x3b625c(0x202)][_0x3b625c(0x292)];},Sprite_ProvokeTrail[_0xfa7ab2(0x234)][_0xfa7ab2(0x22b)]=function(){const _0x4d86e2=_0xfa7ab2;Sprite[_0x4d86e2(0x234)][_0x4d86e2(0x22b)][_0x4d86e2(0x337)](this),this['updateBattlerPositions'](),this[_0x4d86e2(0x349)](),this['updateOpacity'](),this[_0x4d86e2(0x27b)]();},Sprite_ProvokeTrail[_0xfa7ab2(0x234)][_0xfa7ab2(0x210)]=function(){const _0x5bd3ac=_0xfa7ab2;return VisuMZ[_0x5bd3ac(0x268)][_0x5bd3ac(0x2d9)][_0x5bd3ac(0x2d2)][_0x5bd3ac(0x245)];},Sprite_ProvokeTrail[_0xfa7ab2(0x234)]['updateBattlerPositions']=function(){const _0x57a150=_0xfa7ab2;if(!this[_0x57a150(0x22f)]['_battler'])return;if(!this[_0x57a150(0x22f)][_0x57a150(0x1f2)]['provoker']())return;const _0x2a02cf=this[_0x57a150(0x22f)][_0x57a150(0x1f2)][_0x57a150(0x357)]()[_0x57a150(0x298)]();if(!_0x2a02cf)return;const _0x546c7d=this[_0x57a150(0x22f)]['_battler'][_0x57a150(0x204)](),_0x185240=this['_mainSprite']['_battler'][_0x57a150(0x357)]()['provokeHeightOrigin']();this[_0x57a150(0x23c)]=this[_0x57a150(0x22f)]['x'],this['_homeY']=this[_0x57a150(0x22f)]['y']-this[_0x57a150(0x22f)]['height']*_0x546c7d,this['_targetX']=_0x2a02cf['x'],this['_targetY']=_0x2a02cf['y']-_0x2a02cf['height']*_0x185240,this[_0x57a150(0x23c)]+=Math[_0x57a150(0x324)]((Graphics[_0x57a150(0x277)]-Graphics['boxWidth'])/0x2),this[_0x57a150(0x221)]+=Math[_0x57a150(0x324)]((Graphics['height']-Graphics[_0x57a150(0x29d)])/0x2),this[_0x57a150(0x23d)]+=Math['round']((Graphics['width']-Graphics[_0x57a150(0x358)])/0x2),this[_0x57a150(0x286)]+=Math['round']((Graphics['height']-Graphics['boxHeight'])/0x2);if(!$gameSystem['isSideView']()){if(_0x57a150(0x307)!==_0x57a150(0x2fb)){if(_0x2a02cf[_0x57a150(0x1f2)][_0x57a150(0x303)]())visible=!![],this[_0x57a150(0x23d)]+=SceneManager['_scene']['_statusWindow']['x'],this['_targetY']+=SceneManager['_scene']['_statusWindow']['y'];else _0x2a02cf[_0x57a150(0x1f2)]['isEnemy']()&&(visible=!![],this[_0x57a150(0x23c)]+=SceneManager[_0x57a150(0x24c)][_0x57a150(0x27d)]['x'],this[_0x57a150(0x221)]+=SceneManager[_0x57a150(0x24c)]['_statusWindow']['y']);}else return this[_0x57a150(0x2a7)]();}},Sprite_ProvokeTrail[_0xfa7ab2(0x234)][_0xfa7ab2(0x20a)]=function(){const _0x441ab1=_0xfa7ab2;return VisuMZ['AggroControlSystem']['Settings'][_0x441ab1(0x2d2)][_0x441ab1(0x291)];},Sprite_ProvokeTrail[_0xfa7ab2(0x234)][_0xfa7ab2(0x349)]=function(){const _0x38490f=_0xfa7ab2;if(!this[_0x38490f(0x22f)][_0x38490f(0x1f2)])return;if(!this['_mainSprite'][_0x38490f(0x1f2)]['provoker']())return;if(!this[_0x38490f(0x301)])return;if(this['_sprites'][_0x38490f(0x28b)]<=0x0)return;const _0x10be9c=(this[_0x38490f(0x23d)]-this['_homeX'])/this['maxSprites'](),_0x501395=(this[_0x38490f(0x286)]-this[_0x38490f(0x221)])/this[_0x38490f(0x223)]();for(let _0x30b2dd=0x0;_0x30b2dd<=this[_0x38490f(0x223)]();_0x30b2dd++){const _0x3774bc=this[_0x38490f(0x301)][_0x30b2dd];if(!_0x3774bc)continue;_0x3774bc['x']=this['_homeX']+_0x10be9c*_0x30b2dd;const _0x56c938=this[_0x38490f(0x223)]()-_0x30b2dd,_0x5a104f=this[_0x38490f(0x223)]()/0x2,_0x30716b=this[_0x38490f(0x20a)](),_0x26030f=-_0x30716b/Math[_0x38490f(0x33f)](_0x5a104f,0x2),_0xd7ed17=_0x26030f*Math[_0x38490f(0x33f)](_0x56c938-_0x5a104f,0x2)+_0x30716b;_0x3774bc['y']=this[_0x38490f(0x221)]+_0x501395*_0x30b2dd-_0xd7ed17;}},Sprite_ProvokeTrail[_0xfa7ab2(0x234)][_0xfa7ab2(0x1ed)]=function(){const _0x27b6d8=_0xfa7ab2;return VisuMZ['AggroControlSystem'][_0x27b6d8(0x2d9)]['Provoke']['Opacity'];},Sprite_ProvokeTrail[_0xfa7ab2(0x234)]['updateOpacity']=function(){const _0x1f144b=_0xfa7ab2,_0x33fd21=this[_0x1f144b(0x22f)][_0x1f144b(0x1f2)];if(!_0x33fd21){if('HZKHl'!=='HZKHl')return _0x2fd46a[_0x1f144b(0x350)](_0x2a898d(_0x4cfa37['$1']));else this[_0x1f144b(0x2e6)]=0x0;}else _0x33fd21[_0x1f144b(0x2cb)]()&&_0x33fd21[_0x1f144b(0x357)]()?this['opacity']=0xff:this['opacity']=0x0;},Sprite_ProvokeTrail['prototype'][_0xfa7ab2(0x27b)]=function(){const _0x264953=_0xfa7ab2;if(!this['_mainSprite'][_0x264953(0x1f2)])return;if(!this[_0x264953(0x22f)][_0x264953(0x1f2)][_0x264953(0x357)]())return;if(!this[_0x264953(0x301)])return;if(this[_0x264953(0x301)][_0x264953(0x28b)]<=0x0)return;for(let _0x3fc35d=0x0;_0x3fc35d<=this[_0x264953(0x223)]();_0x3fc35d++){const _0x1a5d77=this[_0x264953(0x301)][this[_0x264953(0x2e5)]()?this[_0x264953(0x223)]()-_0x3fc35d:_0x3fc35d];if(!_0x1a5d77)continue;_0x1a5d77[_0x264953(0x2e6)]-=this[_0x264953(0x2e0)];if(_0x1a5d77[_0x264953(0x2e6)]<=0x0)_0x1a5d77[_0x264953(0x2e6)]=0xff;}},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x341)]=Spriteset_Battle[_0xfa7ab2(0x234)][_0xfa7ab2(0x2a8)],Spriteset_Battle[_0xfa7ab2(0x234)][_0xfa7ab2(0x2a8)]=function(){const _0x2d0f3d=_0xfa7ab2;VisuMZ[_0x2d0f3d(0x268)][_0x2d0f3d(0x341)][_0x2d0f3d(0x337)](this),this['createBattleFieldAggroControl']();},Spriteset_Battle[_0xfa7ab2(0x234)]['createBattleFieldAggroControl']=function(){const _0x133df3=_0xfa7ab2;if(!Imported[_0x133df3(0x2da)])return;const _0x246d68=this[_0x133df3(0x1ca)]['x'],_0x5e4c6c=this['_battleField']['y'],_0x2eaccd=this['_battleField'][_0x133df3(0x277)],_0x48f7aa=this[_0x133df3(0x1ca)]['height'];this[_0x133df3(0x292)]=new Sprite(),this[_0x133df3(0x292)]['setFrame'](0x0,0x0,_0x2eaccd,_0x48f7aa),this[_0x133df3(0x292)]['x']=_0x246d68,this[_0x133df3(0x292)]['y']=_0x5e4c6c;if(Imported[_0x133df3(0x2da)]){const _0x3d082d=this[_0x133df3(0x2bd)][_0x133df3(0x327)](this['_damageContainer']);this[_0x133df3(0x254)](this[_0x133df3(0x292)],_0x3d082d);}else'NMHTn'===_0x133df3(0x31c)?this[_0x133df3(0x1e7)](this[_0x133df3(0x292)]):(_0x11157a[_0x133df3(0x268)][_0x133df3(0x20b)]['call'](this),this[_0x133df3(0x250)]());},VisuMZ[_0xfa7ab2(0x268)]['Spriteset_Battle_update']=Spriteset_Battle[_0xfa7ab2(0x234)]['update'],Spriteset_Battle[_0xfa7ab2(0x234)][_0xfa7ab2(0x22b)]=function(){const _0x5bbedf=_0xfa7ab2;VisuMZ[_0x5bbedf(0x268)]['Spriteset_Battle_update'][_0x5bbedf(0x337)](this),this[_0x5bbedf(0x1ba)]();},Spriteset_Battle[_0xfa7ab2(0x234)]['updateAggroControl']=function(){const _0xc7d6e7=_0xfa7ab2;if(!this[_0xc7d6e7(0x292)])return;if(!this[_0xc7d6e7(0x35f)])return;this[_0xc7d6e7(0x292)]['x']=this[_0xc7d6e7(0x35f)]['x'],this[_0xc7d6e7(0x292)]['y']=this[_0xc7d6e7(0x35f)]['y'];},VisuMZ[_0xfa7ab2(0x268)][_0xfa7ab2(0x1c8)]=Window_BattleEnemy[_0xfa7ab2(0x234)]['refresh'],Window_BattleEnemy[_0xfa7ab2(0x234)][_0xfa7ab2(0x2d5)]=function(){const _0x39ee1b=_0xfa7ab2;if(this[_0x39ee1b(0x2bc)]())Imported['VisuMZ_1_BattleCore']&&this[_0x39ee1b(0x35c)](),Window_Selectable[_0x39ee1b(0x234)][_0x39ee1b(0x2d5)][_0x39ee1b(0x337)](this);else{if(this[_0x39ee1b(0x201)]())Imported[_0x39ee1b(0x2da)]&&this[_0x39ee1b(0x35c)](),Window_Selectable['prototype'][_0x39ee1b(0x2d5)][_0x39ee1b(0x337)](this);else{if('eAxFF'===_0x39ee1b(0x34d)){if(!this[_0x39ee1b(0x22f)][_0x39ee1b(0x1f2)])return;if(!this[_0x39ee1b(0x22f)][_0x39ee1b(0x1f2)][_0x39ee1b(0x357)]())return;const _0x33cf0e=this[_0x39ee1b(0x22f)]['_battler']['provoker']()['battler']();if(!_0x33cf0e)return;const _0x42c0c7=this['_mainSprite'][_0x39ee1b(0x1f2)][_0x39ee1b(0x204)](),_0x175f74=this[_0x39ee1b(0x22f)][_0x39ee1b(0x1f2)][_0x39ee1b(0x357)]()[_0x39ee1b(0x204)]();this[_0x39ee1b(0x23c)]=this[_0x39ee1b(0x22f)]['x'],this[_0x39ee1b(0x221)]=this[_0x39ee1b(0x22f)]['y']-this[_0x39ee1b(0x22f)]['height']*_0x42c0c7,this[_0x39ee1b(0x23d)]=_0x33cf0e['x'],this[_0x39ee1b(0x286)]=_0x33cf0e['y']-_0x33cf0e[_0x39ee1b(0x351)]*_0x175f74,this['_homeX']+=_0x18ff5b[_0x39ee1b(0x324)]((_0x52d849[_0x39ee1b(0x277)]-_0x4538cc[_0x39ee1b(0x358)])/0x2),this['_homeY']+=_0x1be8ad[_0x39ee1b(0x324)]((_0x2f4e43[_0x39ee1b(0x351)]-_0x5c45f2[_0x39ee1b(0x29d)])/0x2),this['_targetX']+=_0x33c289[_0x39ee1b(0x324)]((_0x1ae3bb[_0x39ee1b(0x277)]-_0x63a675['boxWidth'])/0x2),this[_0x39ee1b(0x286)]+=_0x281afc[_0x39ee1b(0x324)]((_0x477eed[_0x39ee1b(0x351)]-_0x515c19[_0x39ee1b(0x29d)])/0x2);if(!_0x376ff6['isSideView']()){if(_0x33cf0e[_0x39ee1b(0x1f2)][_0x39ee1b(0x303)]())_0x19968e=!![],this['_targetX']+=_0x2c6999[_0x39ee1b(0x24c)][_0x39ee1b(0x27d)]['x'],this[_0x39ee1b(0x286)]+=_0x1a26c9[_0x39ee1b(0x24c)]['_statusWindow']['y'];else _0x33cf0e[_0x39ee1b(0x1f2)][_0x39ee1b(0x2d3)]()&&(_0x2e655e=!![],this['_homeX']+=_0x58d8a5[_0x39ee1b(0x24c)][_0x39ee1b(0x27d)]['x'],this[_0x39ee1b(0x221)]+=_0x489ad1[_0x39ee1b(0x24c)][_0x39ee1b(0x27d)]['y']);}}else VisuMZ[_0x39ee1b(0x268)]['Window_BattleEnemy_refresh'][_0x39ee1b(0x337)](this);}}},Window_BattleEnemy[_0xfa7ab2(0x234)][_0xfa7ab2(0x2bc)]=function(){const _0x490f32=_0xfa7ab2,_0x553ac1=BattleManager['inputtingAction'](),_0x5229d1=BattleManager[_0x490f32(0x350)]();if(!_0x553ac1)return![];if(!_0x5229d1)return![];if(DataManager[_0x490f32(0x299)](_0x553ac1['item']()))return![];if(_0x5229d1[_0x490f32(0x2fc)]())return![];if(!_0x553ac1[_0x490f32(0x26f)]())return![];if(_0x5229d1[_0x490f32(0x26f)]()){this[_0x490f32(0x259)]=[_0x5229d1[_0x490f32(0x357)]()];if(_0x553ac1['isForAnyone']&&_0x553ac1[_0x490f32(0x28e)]()){const _0x50e32c=$gameParty[_0x490f32(0x32c)]();this['_enemies']=this[_0x490f32(0x259)][_0x490f32(0x335)](_0x50e32c),_0x553ac1[_0x490f32(0x2c9)]&&_0x553ac1[_0x490f32(0x2c9)]()&&_0x50e32c[_0x490f32(0x28b)]>0x1&&this[_0x490f32(0x315)](_0x490f32(0x302),this['selectAllActors'][_0x490f32(0x35a)](this));}return!![];}else return![];},Window_BattleEnemy[_0xfa7ab2(0x234)]['applyTauntFilters']=function(){const _0x350666=_0xfa7ab2,_0x40f6fd=BattleManager['inputtingAction'](),_0x15b389=BattleManager['actor'](),_0x243e9d=$gameTroop;if(!_0x40f6fd)return![];if(!_0x15b389)return![];if(!_0x40f6fd['item']())return![];if(DataManager[_0x350666(0x278)](_0x40f6fd[_0x350666(0x24f)]()))return![];if(_0x15b389[_0x350666(0x27f)]())return![];if(!_0x40f6fd[_0x350666(0x2a4)]())return![];if(_0x40f6fd[_0x350666(0x2f5)]()&&_0x243e9d[_0x350666(0x1f0)]()[_0x350666(0x28b)]>0x0)this[_0x350666(0x259)]=_0x243e9d['physicalTauntMembers']();else{if(_0x40f6fd[_0x350666(0x29e)]()&&_0x243e9d[_0x350666(0x226)]()[_0x350666(0x28b)]>0x0){if(_0x350666(0x2ca)!==_0x350666(0x325))this[_0x350666(0x259)]=_0x243e9d[_0x350666(0x226)]();else{if(this['_provoker']===_0x4483ce)this[_0x350666(0x31a)]();const _0x1944f9=this[_0x350666(0x1f8)][_0x2bafc0['id']],_0x3de55d=_0x10f64c[_0x350666(0x20e)](_0x1944f9);_0x3de55d&&_0x3de55d[_0x350666(0x343)]()&&this[_0x350666(0x235)](_0x2ed74e['id']);}}else{if(_0x40f6fd['isCertainHit']()&&_0x243e9d['certainHitTauntMembers']()['length']>0x0){if(_0x350666(0x205)===_0x350666(0x205))this[_0x350666(0x259)]=_0x243e9d[_0x350666(0x25a)]();else return[_0x27b695[_0x350666(0x1e8)]()];}else return![];}}if(_0x40f6fd[_0x350666(0x28e)]&&_0x40f6fd[_0x350666(0x28e)]()){if(_0x350666(0x23a)!==_0x350666(0x23a))_0x4e1bfd[_0x350666(0x268)]['Game_Action_applyItemUserEffect']['call'](this,_0xaef9d8),this[_0x350666(0x2b4)](_0x3d6062);else{const _0x1ddffa=$gameParty[_0x350666(0x32c)]();this[_0x350666(0x259)]=this[_0x350666(0x259)]['concat'](_0x1ddffa);if(_0x40f6fd[_0x350666(0x2c9)]&&_0x40f6fd[_0x350666(0x2c9)]()&&_0x1ddffa[_0x350666(0x28b)]>0x1){if(_0x350666(0x1e3)===_0x350666(0x313)){if(!this[_0x350666(0x292)])return;if(!this[_0x350666(0x35f)])return;this[_0x350666(0x292)]['x']=this['_damageContainer']['x'],this[_0x350666(0x292)]['y']=this[_0x350666(0x35f)]['y'];}else this[_0x350666(0x315)](_0x350666(0x302),this[_0x350666(0x30a)]['bind'](this));}}}return!![];},VisuMZ[_0xfa7ab2(0x268)]['Window_Options_addGeneralOptions']=Window_Options[_0xfa7ab2(0x234)][_0xfa7ab2(0x1c1)],Window_Options[_0xfa7ab2(0x234)][_0xfa7ab2(0x1c1)]=function(){const _0x37fdd5=_0xfa7ab2;VisuMZ['AggroControlSystem'][_0x37fdd5(0x2d6)][_0x37fdd5(0x337)](this),this[_0x37fdd5(0x26b)]();},Window_Options[_0xfa7ab2(0x234)][_0xfa7ab2(0x26b)]=function(){const _0x3793df=_0xfa7ab2;if(VisuMZ['AggroControlSystem'][_0x3793df(0x2d9)][_0x3793df(0x2d2)][_0x3793df(0x297)]){if('YMCsj'==='tGNGo'){if(!_0x60e083)return![];return _0x148f13[_0x3793df(0x31e)][_0x3793df(0x2dc)](/<BYPASS HIGHEST (?:AGGRO|ENMITY|THREAT)>/i);}else this[_0x3793df(0x1fe)]();}VisuMZ[_0x3793df(0x268)][_0x3793df(0x2d9)][_0x3793df(0x24a)][_0x3793df(0x297)]&&this[_0x3793df(0x283)]();},Window_Options[_0xfa7ab2(0x234)][_0xfa7ab2(0x1fe)]=function(){const _0x35af17=_0xfa7ab2,_0x2610e6=TextManager[_0x35af17(0x2f3)],_0x3483d1=_0x35af17(0x2f3);this[_0x35af17(0x1d4)](_0x2610e6,_0x3483d1);},Window_Options[_0xfa7ab2(0x234)][_0xfa7ab2(0x283)]=function(){const _0x6d003c=_0xfa7ab2,_0x585741=TextManager['aggroGauge'],_0x41a4e4=_0x6d003c(0x26e);this[_0x6d003c(0x1d4)](_0x585741,_0x41a4e4);},VisuMZ['AggroControlSystem']['Window_StatusBase_placeActorName']=Window_StatusBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x1eb)],Window_StatusBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x1eb)]=function(_0x21407e,_0x2baf0c,_0x3253b0){const _0x35d63f=_0xfa7ab2;if(this[_0x35d63f(0x1ec)]())this[_0x35d63f(0x2ae)](_0x21407e[_0x35d63f(0x310)]());VisuMZ[_0x35d63f(0x268)]['Window_StatusBase_placeActorName'][_0x35d63f(0x337)](this,_0x21407e,_0x2baf0c,_0x3253b0);},Window_StatusBase['prototype'][_0xfa7ab2(0x1ec)]=function(){const _0x4dee8c=_0xfa7ab2;if(![Window_BattleActor,Window_BattleStatus][_0x4dee8c(0x256)](this[_0x4dee8c(0x1be)]))return![];if(!SceneManager['isSceneBattle']())return![];return ConfigManager[_0x4dee8c(0x26e)]&&VisuMZ[_0x4dee8c(0x268)][_0x4dee8c(0x2d9)][_0x4dee8c(0x24a)]['StatusGauge'];},Window_StatusBase[_0xfa7ab2(0x234)][_0xfa7ab2(0x35e)]=function(_0x314c77,_0x3faf52,_0x27e69b){const _0x4bc2a4=_0xfa7ab2;this[_0x4bc2a4(0x33e)](_0x314c77,_0x4bc2a4(0x255),_0x3faf52,_0x27e69b);},Window_BattleStatus[_0xfa7ab2(0x234)][_0xfa7ab2(0x2ae)]=function(_0x485e67){const _0x1429d1=_0xfa7ab2,_0x482361=this[_0x1429d1(0x350)](_0x485e67),_0xf6cd71=this[_0x1429d1(0x24d)](_0x485e67),_0x2b2f61=this[_0x1429d1(0x1cb)](_0x485e67),_0x2c2882=_0x1429d1(0x238)[_0x1429d1(0x30e)](_0x482361[_0x1429d1(0x2b2)]()),_0x393416=this['createInnerSprite'](_0x2c2882,Sprite_Gauge),_0x120bcd=VisuMZ[_0x1429d1(0x268)][_0x1429d1(0x2d9)][_0x1429d1(0x24a)];_0x393416['x']=_0xf6cd71+(_0x120bcd[_0x1429d1(0x29b)]||0x0),_0x393416['y']=_0x2b2f61+(_0x120bcd[_0x1429d1(0x209)]||0x0),_0x393416['_menuAggroType']=!![],_0x393416[_0x1429d1(0x21f)](_0x482361,_0x1429d1(0x255)),_0x393416[_0x1429d1(0x280)]=!![];},Window_BattleStatus['prototype'][_0xfa7ab2(0x24d)]=function(_0x1dfd69){const _0x5109de=_0xfa7ab2;let _0x9c45c3=this[_0x5109de(0x28d)](_0x1dfd69),_0xd8adb9=this[_0x5109de(0x231)](_0x9c45c3);if(Imported[_0x5109de(0x2da)]){if('yrDCb'===_0x5109de(0x354)){let _0x9d60b2=this[_0x5109de(0x33a)](_0x1dfd69);if(this[_0x5109de(0x1de)]()===_0x5109de(0x2ee)){const _0x506547=$dataSystem[_0x5109de(0x228)]?0x4:0x3,_0x3a0862=_0x506547*0x80+(_0x506547-0x1)*0x8+0x4,_0x4d17ae=this['actor'](_0x1dfd69);let _0x29035e=_0x9d60b2['x']+this['padding'];VisuMZ[_0x5109de(0x1d8)][_0x5109de(0x2d9)]['BattleLayout'][_0x5109de(0x1f7)]?_0x5109de(0x241)!==_0x5109de(0x1d5)?_0x29035e=_0x9d60b2['x']+ImageManager[_0x5109de(0x332)]+0x8:(_0x37604d['AggroControlSystem']['Window_Options_addGeneralOptions'][_0x5109de(0x337)](this),this[_0x5109de(0x26b)]()):_0x5109de(0x281)!=='bPvFj'?_0x29035e+=ImageManager[_0x5109de(0x21d)]:this['_colorCache'][_0x5dc502]=this[_0x5109de(0x32b)](_0x3a8ceb(_0x3e5970)),_0xd8adb9=Math[_0x5109de(0x324)](Math['min'](_0x9d60b2['x']+_0x9d60b2[_0x5109de(0x277)]-_0x3a0862,_0x29035e)),_0xd8adb9-=0x4;}else _0xd8adb9=Math['round'](_0x9d60b2['x']+(_0x9d60b2[_0x5109de(0x277)]-0x80)/0x2);}else return this[_0x5109de(0x265)]()[_0x5109de(0x2f4)](_0x22931f=>_0x22931f&&_0x22931f[_0x5109de(0x31e)]['match'](/<BYPASS HIGHEST (?:AGGRO|ENMITY|THREAT)>/i));}return _0xd8adb9;},Window_BattleStatus[_0xfa7ab2(0x234)][_0xfa7ab2(0x1cb)]=function(_0x1c25f6){const _0x2e3134=_0xfa7ab2,_0x5aa3c2=this[_0x2e3134(0x33a)](_0x1c25f6);let _0x2abf99=this[_0x2e3134(0x309)](_0x5aa3c2);if(Imported[_0x2e3134(0x2da)]){if(this[_0x2e3134(0x1de)]()===_0x2e3134(0x2ee)){let _0x56b65a=this[_0x2e3134(0x33a)](_0x1c25f6);_0x2abf99=Math[_0x2e3134(0x324)](_0x56b65a['y']+(_0x56b65a[_0x2e3134(0x351)]-Sprite_Name[_0x2e3134(0x234)]['bitmapHeight']())/0x2);}}if(this[_0x2e3134(0x308)]())_0x2abf99-=Sprite_Gauge[_0x2e3134(0x234)][_0x2e3134(0x260)]()-0x1;return _0x2abf99;},Window_BattleStatus[_0xfa7ab2(0x234)]['isAtbGaugeVisible']=function(){const _0x19077b=_0xfa7ab2;if(!BattleManager[_0x19077b(0x2e4)]())return![];if(Imported[_0x19077b(0x320)])return this['showVisualAtbGauge'](_0x19077b(0x2b9));return!![];};