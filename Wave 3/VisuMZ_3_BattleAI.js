//=============================================================================
// VisuStella MZ - Battle A.I.
// VisuMZ_3_BattleAI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_BattleAI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleAI = VisuMZ.BattleAI || {};
VisuMZ.BattleAI.version = 1.20;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.20] [BattleAI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_AI_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This Battle A.I. plugin changes up how enemies and any Auto Battle actors
 * behave by implementing many new key components to their decision making
 * process in battle. These new compotents are: A.I. Styles, A.I. Levels, 
 * Rating Variance, A.I. Conditions, and Influencing TGR Weight.
 *
 * With these new key components put together, you can transform RPG Maker MZ's
 * highly primitive A.I. into something more intelligent. Auto Battle actors
 * can also base their A.I. patterns off an enemy's A.I. in order to behave in
 * more desirable ways during battle as well.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Different A.I. Styles to allow for various ways to setup enemy A.I.
 * * Set A.I. Levels for enemies and Auto Battle actors.
 * * A.I. Levels can be set on a global scale or individual scale.
 * * Set rating variance levels to prioritize actions or randomize them.
 * * These include notetags to change them on a per individual basis.
 * * Create action conditions to make certain skills usable by the A.I. under
 *   specific circumstances.
 * * Action conditions are split between 'ALL' and 'ANY' types which require
 *   either all conditions to be met or at least one condition to be met.
 * * A large selection of condition notetags to use to help customize the best
 *   case situations on when to use a skill and which target to pick.
 * * Default condition settings can be made in the Plugin Parameters to make an
 *   entire database of skills become conditional for A.I. usage.
 * * Influence TGR weight to make certain targets more desirable for specific
 *   types of actions.
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
 * Auto Battle A.I. for Actors
 *
 * - With this plugin, there is an option to let certain classes reference
 * specific enemy A.I. patterns to decide which skills to use during battle.
 * If the reference option is not used, the actor will use default Auto Battle
 * evaluations to determine which skills to use instead.
 *
 * ---
 * 
 * A.I. Styles
 * 
 * - There are currently four different A.I. Styles. Actors and enemies can
 * default to a different one globally, or changed individually using notetags.
 * Read more about them in the A.I. Styles section.
 * 
 * ---
 *
 * A.I. Levels
 *
 * - Enemies and actors can be given different A.I. Levels. The higher one's
 * A.I. Level, the more they are to follow conditions. With Level 100 A.I.
 * Level, an A.I. will never disobey a condition. On the other hand, lower
 * A.I. Levels may possibly ignore certain conditions and act as if they are
 * fulfilled.
 *
 * ---
 *
 * A.I. Rating Variance
 *
 * - In the RPG Maker database editor, when deciding an enemy's Action Patterns
 * you can decide on the action's "rating". The rating is a value from 1 to 9
 * where 9 gets the highest priority and 1 gets the lowest. RPG Maker, by
 * default, will sometimes dip the rating a few levels lower to allow lower
 * ratings and bypass the priority system.
 *
 * - This plugin allows you to set the variance level through Plugin Parameters
 * on a global scale or notetags on an individual basis to allow for larger,
 * smaller, or no variance on ratings at all.
 *
 * ---
 *
 * A.I. Conditions for Skill Usage
 *
 * - Enemies and any actors that use Auto Battle A.I. with a reference can only
 * use certain skills as long as specific conditions have been met. These
 * conditions are split between 'ALL' condition sets and 'ANY' condition sets.
 *
 * - 'ALL' condition sets require all of the set's conditions to be met in
 * order for the skill to be used by the A.I.
 *
 * - 'ANY' condition sets require at least one of the set's conditions to be
 * met in order for the skill to be used by the A.I.
 *
 * - A variety of conditions can be inserted into each condition set to make
 * for some very specific usage conditions. These will also help filter out
 * which targets to pick from, too.
 *
 * ---
 *
 * TGR Weight on A.I. Target Selection
 *
 * - TGR is a special parameter in RPG Maker MZ that represents "Target Rate".
 * The higher one's TGR, the more likely they are to become the target of an
 * attack. This plugin allows various things to influence the TGR weight to
 * make certain targets more likely to be targets for attack.
 *
 * - Elemental influence rates on the TGR weight mean that if a target receives
 * more damage from an elemental attack, the TGR weight becomes higher for that
 * skill when determining a target. The higher the elemental damage received,
 * the more the TGR weight shifts upward.
 *
 * - Evasion and Magic Evasion rates do the opposite. The higher a potential
 * target's evasion and magic evasion rate is (for physical and magical skills)
 * the lower the TGR weight becomes for that potential target.
 *
 * - By default Plugin Parameter settings, TGR weight shifting requires the
 * enemy troop to have "knowledge" on the party's element rates, evasion, and
 * magic evasion properties. Enemy troops would have to hit actors with element
 * based attacks to learn the actor's resistance levels, physical attacks to
 * learn the actor's evasion, and magical attacks to learn the actor's magic
 * evasion levels.
 *
 * ---
 *
 * ============================================================================
 * A.I. Styles
 * ============================================================================
 * 
 * There are currently four different A.I. Styles. These determine how the
 * A.I. acts and behaves. You can change the A.I. Style used globally through
 * the Plugin Parameters or individually for classes and enemies through the
 * usage of notetags.
 * 
 * Read below to understand each style and its rules:
 * 
 * ---
 * 
 * Classic Style
 * 
 * "Classic" style is the traditional and default RPG Maker MZ A.I. style.
 * It puts emphasis on the Rating system, where skills with higher ratings are
 * given more priority than skills with lower ratings within variance.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions with higher Ratings.
 * - Rating variance will be determined by Plugin Parameters and/or notetags.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - After applying Ratings, Rating Variances, and A.I. Conditions, if there
 *   are still multiple actions to choose from, pick from the remaining actions
 *   randomly.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Gambit Style
 * 
 * - "Gambit" style is the style from Yanfly Engine Plugin's Battle A.I. Core.
 * It goes down the list of skills and uses them in order as long as they meet
 * the Action Pattern conditions and A.I. conditions. Ratings will be ignored.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions located higher on the list.
 * - Actions towards the bottom of the list will have lower priority.
 * - Ratings and Rating Variance has no bearing on whether or not an action
 *   will be picked.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Casual Style
 * 
 * - "Casual" style takes a lighter approach to A.I. It ignores the Ratings
 * system and doesn't care about the order of actions either. Instead, the
 * only thing this A.I. Style cares about are the A.I. Conditions. All valid
 * actions after that are randomly picked from.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Random Style
 * 
 * - "Random" style simply does not care about ratings or order. It only cares
 * if the skill's can be used (can pay for the cost) and Action Pattern
 * conditions. It does not care about A.I. Conditions, Ratings, or Order.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions are ignored.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
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
 * === General A.I. Settings Notetags ===
 *
 * These notetags set the general A.I. related settings for enemies and any
 * actors that use A.I. (requires Auto Battle and has a reference A.I.).
 *
 * ---
 * 
 * <AI Style: x>
 * 
 * - Used for: Class, Enemy Notetags
 * - Replace 'x' with 'Classic', 'Gambit', 'Casual', or 'Random' without the
 *   quotes. Example: <AI Style: Gambit>
 * - Determines the A.I. style used. Refer to the A.I. Styles section on the
 *   various types of styles.
 * - For actors, place this inside the associated class's notebox instead.
 * - For actors, this does not apply if there is no referenced enemy A.I. list.
 * - Setup the reference enemy through either the Plugin Parameters or by using
 *   the <Reference AI: Enemy id> notetag found below.
 * 
 * ---
 *
 * <AI Level: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Designates the unit's A.I. level if A.I. is to be used.
 * - Replace 'x' with a number from 0 to 100.
 * - Units with higher A.I. Levels will be more strict about conditions.
 * - Units with lower A.I. Levels will be more lax about conditions.
 *
 * ---
 *
 * <AI Rating Variance: x>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Sets the variance amount when determining A.I. actions by rating.
 * - Replace 'x' with a number between 0 and 9.
 * - 0 for no variance.
 * - Lower numbers for less variance.
 * - Higher numbers for more variance.
 *
 * ---
 *
 * <Reference AI: Enemy id>
 * <Reference AI: name>
 *
 * - Used for: Class Notetags
 * - Causes any actor using this class that has the Auto Battle trait to use
 *   a specific enemy's attack pattern (ratings, conditions, etc.) to determine
 *   which skill to use in battle.
 * - Replace 'id' with a number representing the enemy's ID to reference.
 * - Replace 'name' with the name the enemy to reference.
 * - Actors are only able to use skills they would normally have access to.
 *   - Actors need to have LEARNED the skill.
 *   - Actors need to be able to access the skill's SKILL TYPE.
 *   - Actors need to have the RESOURCES to pay for the skill.
 * - If you cannot figure out why an auto battle actor cannot use a specific
 *   skill, turn OFF auto battle and see if you can use the skill normally.
 *
 * ---
 *
 * <No Reference AI>
 *
 * - Used for: Class Notetags
 * - Prevents the class from using any enemies as their reference A.I. pattern
 *   (including the one set in the Plugin Parameters).
 *
 * ---
 *
 * === Skill A.I. Condition Notetags ===
 *
 * Insert these notetags into the noteboxes of skills that you'd like to give
 * custom A.I. conditions for. The 'All' version of the notetags require every
 * condition to be met while the 'Any' version of the notetags require only one
 * of the conditions to be met. 
 *
 * If both are used together, then the 'All' conditions must be completely
 * fulfilled while the 'Any' conditions need only one to be fulfilled.
 *
 * ---
 *
 * <All AI Conditions>
 *  condition
 *  condition
 *  condition
 * </All AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - All conditions must be met in order for this to become a valid skill for
 *   the AI to use.
 * - This can be used together with <Any AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'All' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <Any AI Conditions>
 *  condition
 *  condition
 *  condition
 * </Any AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - As long as one condition is met, this becomes a valid skill for the AI
 *   to use. If none of them are met, this skill becomes invalid for AI use.
 * - This can be used together with <All AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'Any' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <No AI Conditions>
 * 
 * - Used for: Skill
 * - Removes any default 'All' and 'Any' conditions for this skill.
 * 
 * ---
 *
 * -=-=- Condition List -=-=-
 *
 * Replace 'condition' in the notetags in the above section with any of the
 * following to make conditions. These conditions are also used in the Plugin
 * Parameters for the default conditions, too.
 *
 * ---
 *
 * x >= y
 * x > y
 * x === y
 * x !== y
 * x < y
 * x <= y
 *
 * - Replace 'x' and 'y' with any of the following:
 *
 * - A numeric value representing a hard number.
 * - '50%' or any other percentile number to represent a rate.
 * - '0.5' or any other float number to represent a rate.
 *
 * - 'Variable x' (replace 'x' with a number) for variable x's current value.
 *
 * - 'HP%', 'MP%', 'TP%' for HP, MP, and TP rates respectively.
 * - 'MaxHP', 'MaxMP', 'MaxTP' for the potential target's respective values.
 * - 'Level' for the potential target's level. Requires VisuMZ_0_CoreEngine for
 *   this to affect enemies.
 * - 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK' for the potential target's total
 *   parameter value.
 *
 * - 'param Buff Stacks' for the potential target's current Buff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 * - 'param Debuff Stacks' for the potential target's current Debuff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * - 'param Buff Turns' for potential target's current buff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that buff.
 * - 'param Debuff Turns' for potential target's current debuff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that debuff.
 *
 * - 'State id Turns' or 'State name Turns' for potential target's current turn
 *   duration on that particular state.
 *   - Replace 'id' with a number representing the ID of the state.
 *   - Replace 'name' with the state's name.
 *   - Returns 0 if the potential target is not affected by that state.
 *   - Returns the max safe number value if the potential target is has that
 *     state as a passive state.
 *
 * - 'Element id Rate', 'Element name Rate', 'name Element Rate'
 *   - Returns a (float) value of the potential target's element's rate.
 *   - Replace 'id' with the ID of the element whose rate is to be checked.
 *   - Replace 'name' with the name of the element whose rate is to be checked.
 *     - Ignore any text codes in the element name.
 *
 * - 'Team Alive Members'
 *   - Returns a number value indicating how many alive members there are on
 *     the potential target's team.
 *
 * - 'Team Dead Members'
 *   - Returns a number value indicating how many dead members there are on
 *     the potential target's team.
 * 
 * - When no keyword matches are found, the comparison value will be
 *   interpreted as JavaScript code. If the JavaScript code fails, it will
 *   default to a 0 value.
 * 
 *   *NOTE* JavaScript cannot be used without comparison operators to reduce
 *   error. This means if you want to check if a switch is on or not, don't
 *   simply use "$gameSwitches.value(42)" as it does not have any comparison
 *   operators. Instead, use "$gameSwitches.value(42) === true" to check.
 *
 *   *NOTE* To make any of these conditions base off of the user instead, add
 *   the word 'user' before the condition as such:
 *
 *   user hp% >= 0.50
 *   user atk buff stacks === 2
 *   user team alive members < 3
 *
 * ---
 *
 * Always
 *
 * - Going to be valid no matter what.
 *
 * ---
 *
 * x% Chance
 * 
 * - Replace 'x' with a number value representing the percent chance this skill
 *   would pass as valid.
 *
 * ---
 *
 * Switch x On
 * Switch x Off
 *
 * - Replace 'x' with the ID of the switch to check as ON/OFF.
 *
 * ---
 *
 * User is Actor
 * User is Enemy
 * Target is Actor
 * Target is Enemy
 *
 * - Requires the user or potential target to be an actor/enemy.
 *
 * ---
 *
 * User Has State id
 * User Has State name
 * Target Has State id
 * Target Has State name
 *
 * - Replace 'id' with the ID of the state the user or potential target needs
 *   to have.
 * - Replace 'name' with the name of the state the target needs to have.
 *
 * ---
 *
 * User Not State id
 * User Not State name
 * Target Not State id
 * Target Not State name
 *
 * - Replace 'id' with the ID of the state the user or potential target
 *   cannot have.
 * - Replace 'name' with the name of the state the target cannot have.
 *
 * ---
 *
 * User Has param Buff 
 * User Has param Debuff 
 * Target Has param Buff 
 * Target Has param Debuff 
 *
 * - Requires user or potential target to have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Has param Max Buff 
 * User Has param Max Debuff
 * Target Has param Max Buff 
 * Target Has param Max Debuff
 *
 * - Requires potential user or target to have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Buff 
 * User Not param Debuff 
 * Target Not param Buff 
 * Target Not param Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Max Buff 
 * User Not param Max Debuff 
 * Target Not param Max Buff 
 * Target Not param Max Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * === A.I. => TGR Weight Notetags ===
 *
 * You can set how much influence on TGR weights actors and enemies will place
 * when determining valid targets for their actions.
 *
 * ---
 *
 * <AI Element Rate Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the element rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI Element Rate Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in element rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI EVA Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the EVA rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI EVA Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in EVA rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI MEV Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the MEV rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI MEV Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in MEV rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 * 
 * === Specific A.I. Targeting Notetags ===
 * 
 * Specific A.I. targeting means the user will ignore any TGR influences when
 * it comes to pick out of a group of valid candidates to come down to one
 * target. This only affects skills where the user must select a specific
 * target, meaning it will ignore the effects of random and AoE scopes.
 * 
 * ---
 *
 * <AI Target: type>
 *
 * - Used for: Skill Notetags
 * - Bypasses TGR influence in favor of picking a specific target out of a
 *   group of valid targets (does not pick from outside the valid target group)
 *   for a skill target.
 * - Replace 'type' with any of the following:
 * 
 *   ----------------------------   -------------------------------------------
 *   Type                           Description
 *   ----------------------------   -------------------------------------------
 *   User                           Always picks the user if available
 *   First                          Always picks the first valid candidate
 *   Last                           Always picks the last valid candidate
 *   ----------------------------   -------------------------------------------
 *   Highest Level                  Picks candidate with highest level
 *   ----------------------------   -------------------------------------------
 *   Highest MaxHP                  Picks candidate with highest MaxHP
 *   Highest HP                     Picks candidate with highest current HP
 *   Highest HP%                    Picks candidate with highest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxMP                  Picks candidate with highest MaxMP
 *   Highest MP                     Picks candidate with highest current MP
 *   Highest MP%                    Picks candidate with highest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxTP                  Picks candidate with highest MaxTP
 *   Highest TP                     Picks candidate with highest current TP
 *   Highest TP%                    Picks candidate with highest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest ATK                    Picks candidate with highest ATK parameter
 *   Highest DEF                    Picks candidate with highest DEF parameter
 *   Highest MAT                    Picks candidate with highest MAT parameter
 *   Highest MDF                    Picks candidate with highest MDF parameter
 *   Highest AGI                    Picks candidate with highest AGI parameter
 *   Highest LUK                    Picks candidate with highest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Highest HIT                    Picks candidate with highest HIT parameter
 *   Highest EVA                    Picks candidate with highest EVA parameter
 *   Highest CRI                    Picks candidate with highest CRI parameter
 *   Highest CEV                    Picks candidate with highest CEV parameter
 *   Highest MEV                    Picks candidate with highest MEV parameter
 *   Highest MRF                    Picks candidate with highest MRF parameter
 *   Highest CNT                    Picks candidate with highest CNT parameter
 *   Highest HRG                    Picks candidate with highest HRG parameter
 *   Highest MRG                    Picks candidate with highest MRG parameter
 *   Highest TRG                    Picks candidate with highest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Highest TGR                    Picks candidate with highest TGR parameter
 *   Highest GRD                    Picks candidate with highest GRD parameter
 *   Highest REC                    Picks candidate with highest REC parameter
 *   Highest PHA                    Picks candidate with highest PHA parameter
 *   Highest MCR                    Picks candidate with highest MCR parameter
 *   Highest TCR                    Picks candidate with highest TCR parameter
 *   Highest PDR                    Picks candidate with highest PDR parameter
 *   Highest MDR                    Picks candidate with highest MDR parameter
 *   Highest FDR                    Picks candidate with highest FDR parameter
 *   Highest EXR                    Picks candidate with highest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Highest State Count            Picks candidate with most states (any)
 *   Highest Positive State Count   Picks candidate with most positive states
 *   Highest Negative State Count   Picks candidate with most negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 *   Lowest Level                   Picks candidate with lowest level
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxHP                   Picks candidate with lowest MaxHP
 *   Lowest HP                      Picks candidate with lowest current HP
 *   Lowest HP%                     Picks candidate with lowest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxMP                   Picks candidate with lowest MaxMP
 *   Lowest MP                      Picks candidate with lowest current MP
 *   Lowest MP%                     Picks candidate with lowest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxTP                   Picks candidate with lowest MaxTP
 *   Lowest TP                      Picks candidate with lowest current TP
 *   Lowest TP%                     Picks candidate with lowest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest ATK                     Picks candidate with lowest ATK parameter
 *   Lowest DEF                     Picks candidate with lowest DEF parameter
 *   Lowest MAT                     Picks candidate with lowest MAT parameter
 *   Lowest MDF                     Picks candidate with lowest MDF parameter
 *   Lowest AGI                     Picks candidate with lowest AGI parameter
 *   Lowest LUK                     Picks candidate with lowest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest HIT                     Picks candidate with lowest HIT parameter
 *   Lowest EVA                     Picks candidate with lowest EVA parameter
 *   Lowest CRI                     Picks candidate with lowest CRI parameter
 *   Lowest CEV                     Picks candidate with lowest CEV parameter
 *   Lowest MEV                     Picks candidate with lowest MEV parameter
 *   Lowest MRF                     Picks candidate with lowest MRF parameter
 *   Lowest CNT                     Picks candidate with lowest CNT parameter
 *   Lowest HRG                     Picks candidate with lowest HRG parameter
 *   Lowest MRG                     Picks candidate with lowest MRG parameter
 *   Lowest TRG                     Picks candidate with lowest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest TGR                     Picks candidate with lowest TGR parameter
 *   Lowest GRD                     Picks candidate with lowest GRD parameter
 *   Lowest REC                     Picks candidate with lowest REC parameter
 *   Lowest PHA                     Picks candidate with lowest PHA parameter
 *   Lowest MCR                     Picks candidate with lowest MCR parameter
 *   Lowest TCR                     Picks candidate with lowest TCR parameter
 *   Lowest PDR                     Picks candidate with lowest PDR parameter
 *   Lowest MDR                     Picks candidate with lowest MDR parameter
 *   Lowest FDR                     Picks candidate with lowest FDR parameter
 *   Lowest EXR                     Picks candidate with lowest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest State Count             Picks candidate with least states (any)
 *   Lowest Positive State Count    Picks candidate with least positive states
 *   Lowest Negative State Count    Picks candidate with least negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 * 
 * ---
 *
 * ============================================================================
 * Regarding $gameTroop.turnCount() for A.I. Conditions
 * ============================================================================
 * 
 * ---
 * 
 * Short Answer:
 *
 * Battle A.I. conditions do NOT support the conditions $gameTroop.turnCount()
 * or user.turnCount() or target.turnCount() for A.I. Conditions.
 * 
 * Instead, use RPG Maker MZ's built-in action editor's turn requirement to
 * make do with the same effect.
 *
 * ---
 * 
 * Long Answer:
 * 
 * The turnCount() functions are not valid for A.I. Conditions and disabled due
 * to all the problems they cause. The reason being is because actions are
 * determined before the turn count increases. This is how RPG Maker MZ handles
 * it by default.
 * 
 * The reason why this does not work is due to the following code found in
 * RPG Maker MZ's core scripts:
 * 
 *   Game_Battler.prototype.turnCount = function() {
 *       if (BattleManager.isTpb()) {
 *           return this._tpbTurnCount;
 *       } else {
 *           return $gameTroop.turnCount() + 1;
 *       }
 *   };
 * 
 * What that means the turn count will always be off by 1. So upon determining
 * the action initially, the match would come off as correct. However, as the
 * turn actually starts and reaches the enemy or actor's turn, the turn count
 * check would read differently and return incorrect information, causing the
 * battler to forfeit their actions.
 * 
 * This facet of RPG Maker MZ can be updated and changed, but it is better that
 * it doesn't in order to maintain compatibility with the rest of the plugins
 * available that utilize the turn counter.
 * 
 * The work around to this problem is, instead, to use the enemy database tab's
 * action editor and apply a Turn Condition to match the required turn instead.
 * You know, the thing with Skill and Rating, where you select which skill for
 * the enemy to use instead.
 * 
 * HOWEVER!
 * 
 * If you are willing to use an "Experimental" feature, aka one that is not
 * heavily tested and may potentially result in unintended side effects, go to:
 * 
 *  Plugin Parameters > A.I. General Settings > Experimental > On-The-Spot A.I.
 * 
 * And set that to "true" without the quotes. This will forcefully remove the
 * +1 towards the count and forcefully make enemies re-evaluate actions upon
 * the start of the string of their actions. This comes with some side effects
 * that will potentially give A.I. advantages or disadvantages depending on the
 * battle system type. Action Speed becomes something that can be abused as it
 * is normally something that is determined based on the queued actions. A.I.
 * can pick a high speed weak action and then switch it for a slow speed strong
 * action. There is no proper fix to this due to how on-the-spot A.I. works as
 * it is ill-fitted for speed-relative battle systems. You have been warned.
 * 
 * In the event that this Plugin Parameter IS enabled, then using the turnCount
 * JavaScript code should work again due to the normalization of how the turn
 * property is calculated.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. General Settings
 * ============================================================================
 *
 * These settings determine the global settings for general Battle A.I. usage.
 *
 * ---
 * 
 * A.I. Style
 * 
 *   Actor Style:
 *   - Which A.I. style do you want for referenced actors to use?
 *   - This does not apply to non-referenced actors.
 * 
 *   Enemy Style:
 *   - Which A.I. style do you want for enemies to use?
 * 
 *   Refer to the A.I. Styles list for a list of valid styles.
 * 
 * ---
 *
 * A.I. Level
 * 
 *   Actor A.I. Level:
 *   - Default A.I. level used for actor A.I.
 *   - Levels: 0-100. Higher is stricter.
 * 
 *   Enemy A.I. Level:
 *   - Default A.I. level used for enemy A.I.
 *   - Levels: 0-100. Higher is stricter.
 *
 * ---
 *
 * A.I. Ratings
 * 
 *   Actor Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 * 
 *   Enemy Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 *
 * ---
 *
 * Reference
 * 
 *   Actor => AI Reference:
 *   - Which enemy A.I. should the actor reference by default?
 *   - Use 0 for no references.
 *
 * ---
 *
 * Knowledge
 * 
 *   Learn Knowledge:
 *   - Requires enemies/actors to test the knowledge of the opponents before
 *     using specific conditions.
 * 
 *   Unknown Element Rate:
 *   - What should A.I. treat unknown element rates as?
 *
 * ---
 * 
 * Experimental
 * 
 *   On-The-Spot A.I.:
 *   - A.I. enemies/actors determine actions on the spot when it's their turn.
 * 
 *     No Idle Chant:
 *     - Requires On-The-Spot A.I. enabled.
 *     - For A.I. Battlers, disables idle chant motions due to inconsistency.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. Default Conditions
 * ============================================================================
 *
 * You can set certain conditions to be used as defaults for all skills that
 * lack the <All AI Conditions> and <Any AI Conditions>. If either of those
 * notetags exist, none of these defaults will be used for those skills. These
 * settings will allow you to set both 'All' and 'Any' conditions for defaults.
 *
 * ---
 *
 * Enable?
 * 
 *   All Conditions:
 *   - Create default 'ALL' conditions for all skills without any AI notetags?
 * 
 *   Any Conditions:
 *   - Create default 'ANY' conditions for all skills without any AI notetags?
 *
 * ---
 *
 * HP Damage
 * MP Damage
 * HP Recover
 * MP Recover
 * HP Drain
 * MP Drain
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *
 * ---
 *
 * Add State
 * Remove State
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * Add Buff
 * Remove Buff
 * Add Debuff
 * Remove Debuff
 * 
 *   All Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie param's).
 * 
 *   Any Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. => TGR Weight Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you to set whether or not you'd like for 
 * weight influence when deciding targets for actions and how much to influence
 * the TGR weight by.
 *
 * ---
 *
 * Weight
 * 
 *   Element Rate => TGR:
 *   - Makes all A.I. consider elemental rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence elemental rates have on
 *       TGR weight.
 * 
 *   EVA Rate => TGR:
 *   - Makes all A.I. consider EVA rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence EVA rates have on
 *       TGR weight.
 * 
 *   MEV Rate => TGR:
 *   - Makes all A.I. consider MEV rates when considering TGR weight
 *     by default?
 * 
 *   Influence Rate:
 *   - This determines the default level of influence MEV rates have on
 *     TGR weight.
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
 * Version 1.20: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.74
 *    new features.
 * 
 * Version 1.19: January 20, 2023
 * * Bug Fixes!
 * ** On-The-Spot A.I. no longer overwrites Forced Actions. Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.73
 *    new features.
 * 
 * Version 1.18: May 19, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** General Settings > Experimental > On-The-Spot A.I. > No Idle Chant
 * **** Requires On-The-Spot A.I. enabled.
 * **** For A.I. Battlers, disables idle chant motions due to inconsistency.
 * 
 * Version 1.17: May 12, 2022
 * * Feature Update!
 * ** Better RNG calculation when using the x% Chance conditional. Update made
 *    by Arisu.
 * 
 * Version 1.16: February 24, 2022
 * * Feature Update!
 * ** Randomization between zero variance A.I. is now better.
 * ** A.I. will no longer keep unusable skills in a skill queue and replace
 *    them with new ones.
 * 
 * Version 1.15: December 2, 2021
 * * Compatibility Update!
 * ** AI for skills and items should now work if their scope is
 *    <Target: All Allies But User>. Update made by Irina.
 * 
 * Version 1.14: October 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Notetag section "Condition List" updated with the following:
 * *** *NOTE* JavaScript cannot be used without comparison operators to reduce
 *     error. This means if you want to check if a switch is on or not, don't
 *     simply use "$gameSwitches.value(42)" as it does not have any comparison
 *     operators. Instead, use "$gameSwitches.value(42) === true" to check.
 * ** Updated section "Regarding $gameTroop.turnCount() for A.I. Conditions"
 * * New Experimental Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** A.I. General Settings > Experimental > On-The-Spot A.I.
 * **** A.I. enemies/actors determine actions on the spot when it's their turn.
 * **** Functions akin to YEP's Battle A.I. Core where enemies determine new
 *      actions on the spot. Doing so will forcefully change the way the Turn
 *      Count is handled for Game_Battler to not utilize the +1.
 * **** This will forcefully remove the +1 towards the count and forcefully
 *      make enemies re-evaluate actions upon the start of the string of their
 *      actions. This comes with some side effects that will potentially give
 *      A.I. advantages or disadvantages depending on the battle system type.
 *      Action Speed becomes something that can be abused as it is normally
 *      something that is determined based on the queued actions. A.I. can pick
 *      a high speed weak action and then switch it for a slow speed strong
 *      action. There is no proper fix to this due to how on-the-spot A.I.
 *      works as it is ill-fitted for speed-relative battle systems. You have
 *      been warned.
 * **** In the event that this Plugin Parameter IS enabled, then using the
 *      turnCount JavaScript code should work again due to the normalization of
 *      how the turn property is calculated.
 * * Optimization Update!
 * ** Updated last version's newest change to be more optimized and occur upon
 *    each iteration of a new subject being determined to account for better
 *    check timing. Update made by Yanfly.
 * 
 * Version 1.13: October 13, 2021
 * * Feature Update!
 * ** A.I. Battlers with no currently determined actions, upon the start of the
 *    time frame for what would be their action, will have one more chance of
 *    determining a new action to use as to not waste their turns.
 * ** This does NOT mean that the A.I. Battlers will adjust their actions for
 *    one with a higher rating. The readjustment will only occur if there are
 *    no actions determined for that instance and only a one time window upon
 *    the start of the time frame for what would be their action.
 * ** Update made by Arisu.
 * 
 * Version 1.12: October 7, 2021
 * * Documentation Update!
 * ** Added section "Regarding $gameTroop.turnCount() for A.I. Conditions".
 * * Feature Update!
 * ** Any A.I. Conditions found with "turnCount()" will be automatically
 *    disabled in order to reduce confusion. This is due to how turnCount()
 *    functions do not accurately depict the current Turn Count depending on
 *    when the function runs. Update made by Olivia.
 * 
 * Version 1.11: September 30, 2021
 * * Bug Fixes!
 * ** Patched up a rare occurance of predetermined actions still having
 *    priority despite having no valid targets. Fix made by Olivia.
 * 
 * Version 1.10: September 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that caused "highest" and "lowest" target schemes to be
 *    inverted. Fix made by Olivia.
 * 
 * Version 1.09: July 9, 2021
 * * Bug Fixes!
 * ** Fixed a bug that caused "highest" and "lowest" target schemes to be
 *    inverted. Fix made by Arisu.
 * 
 * Version 1.08: April 16, 2021
 * * Feature Update!
 * ** Cached randomization seeds should no longer conflict with certain scope
 *    types. Update made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: January 22, 2021
 * * Bug Fixes!
 * ** <AI Target: x> notetags should no longer crashes. Fix made by Irina.
 * 
 * Version 1.06: January 8, 2021
 * * Feature Update!
 * ** For those using classic mode with a variance level of 0, action lists
 *    will be better shuffled to provide more variation between selected
 *    skills. Update made by Irina.
 * 
 * Version 1.05: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly!
 * *** <AI Target: type>
 * **** Bypasses TGR influence in favor of picking a specific target out of a
 *      group of valid targets (does not pick from outside the valid target
 *      group) for a skill target. Read documentation to see targeting types.
 * 
 * Version 1.04: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for notetag <Reference AI: Enemy id>
 * *** - Actors are only able to use skills they would normally have access to.
 *       - Actors need to have LEARNED the skill.
 *       - Actors need to be able to access the skill's SKILL TYPE.
 *       - Actors need to have the RESOURCES to pay for the skill.
 *     - If you cannot figure out why an auto battle actor cannot use a
 *       specific skill, turn OFF auto battle and see if you can use the skill
 *       normally.
 * 
 * Version 1.03: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.02: November 1, 2020
 * * Bug Fixes!
 * ** Charmed battlers will no longer vanish when attack one another. Fix made
 *    by Yanfly.
 * 
 * Version 1.01: October 18, 2020
 * * Bug Fixes!
 * ** <All AI Conditiosn> and <Any AI Conditions> notetags are now fixed and
 *    should work properly. Fix made by Yanfly.
 *
 * Version 1.00: September 30, 2020
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
 * @param BattleAI
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text A.I. General Settings
 * @type struct<General>
 * @desc General settings pertaining to A.I.
 * @default {"AIStyle":"","ActorStyleAI:str":"classic","EnemyStyleAI:str":"classic","AILevel":"","ActorAILevel:num":"100","EnemyAILevel:num":"100","AIRating":"","ActorRatingVariance:num":"1","EnemyRatingVariance:num":"3","Reference":"","ActorAIReference:num":"0","Knowledge":"","LearnKnowledge:eval":"true","UnknownElementRate:num":"1.00"}
 *
 * @param Default:struct
 * @text A.I. Default Conditions
 * @type struct<Default>
 * @desc Give certain types of skills default conditions.
 * @default {"Enable?":"","EnableAllCon:eval":"true","EnableAnyCon:eval":"true","HpDamage":"","HpDamageAll:json":"\"\"","HpDamageAny:json":"\"Always\"","MpDamage":"","MpDamageAll:json":"\"Target MP > 0\"","MpDamageAny:json":"\"\"","HpRecover":"","HpRecoverAll:json":"\"\"","HpRecoverAny:json":"\"Target HP < Target MaxHP\"","MpRecover":"","MpRecoverAll:json":"\"\"","MpRecoverAny:json":"\"Target MP < Target MaxMP\"","HpDrain":"","HpDrainAll:json":"\"\"","HpDrainAny:json":"\"User HP < User MaxHP\"","MpDrain":"","MpDrainAll:json":"\"Target MP > 0\"","MpDrainAny:json":"\"\"","AddState":"","AddStateAll:json":"\"\"","AddStateAny:json":"\"Target Not State %1\\nTarget State %1 Turns <= 1\"","RemoveState":"","RemoveStateAll:json":"\"\"","RemoveStateAny:json":"\"Target Has State %1\"","AddBuff":"","AddBuffAll:json":"\"\"","AddBuffAny:json":"\"Target Not %1 Max Buff\\nTarget %1 Buff Turns <= 1\"","RemoveBuff":"","RemoveBuffAll:json":"\"\"","RemoveBuffAny:json":"\"Target Has %1 Buff\"","AddDebuff":"","AddDebuffAll:json":"\"\"","AddDebuffAny:json":"\"Target Not %1 Max Debuff\\nTarget %1 Debuff Turns <= 1\"","RemoveDebuff":"","RemoveDebuffAll:json":"\"\"","RemoveDebuffAny:json":"\"Target Has %1 Debuff\""}
 *
 * @param Weight:struct
 * @text A.I. => TGR Weight
 * @type struct<Weight>
 * @desc How do certain properties translate to TGR weight?
 * @default {"ElementTgr:eval":"true","ElementTgrRate:num":"1.25","EvaTgr:eval":"true","EvaTgrRate:num":"1.50","MevTgr:eval":"true","MevTgrRate:num":"2.00"}
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
 * A.I. General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param AIStyle
 * @text A.I. Style
 *
 * @param ActorStyleAI:str
 * @text Actor Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for referenced actors to use?
 * This does not apply to non-referenced actors.
 * @default classic
 *
 * @param EnemyStyleAI:str
 * @text Enemy Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for enemies to use?
 * @default classic
 *
 * @param AILevel
 * @text A.I. Level
 *
 * @param ActorAILevel:num
 * @text Actor A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for actor A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param EnemyAILevel:num
 * @text Enemy A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for enemy A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param AIRating
 * @text A.I. Ratings
 *
 * @param ActorRatingVariance:num
 * @text Actor Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 1
 *
 * @param EnemyRatingVariance:num
 * @text Enemy Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 3
 *
 * @param Reference
 *
 * @param ActorAIReference:num
 * @text Actor => AI Reference
 * @parent Reference
 * @type enemy
 * @desc Which enemy A.I. should the actor reference by default?
 * Use 0 for no references.
 * @default 0
 *
 * @param Knowledge
 *
 * @param LearnKnowledge:eval
 * @text Learn Knowledge
 * @parent Knowledge
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Requires enemies/actors to test the knowledge of
 * the opponents before using specific conditions.
 * @default true
 *
 * @param UnknownElementRate:num
 * @text Unknown Element Rate
 * @parent LearnKnowledge:eval
 * @desc What should A.I. treat unknown element rates as?
 * @default 1.00
 * 
 * @param Experimental
 * 
 * @param OnSpotAI:eval
 * @text On-The-Spot A.I.
 * @parent Experimental
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc A.I. enemies/actors determine actions on the
 * spot when it's their turn.
 * @default false
 * 
 * @param SpotRemoveMotions:eval
 * @text No Idle Chant
 * @parent OnSpotAI:eval
 * @type boolean
 * @on Remove Idle Chanting
 * @off Allow Idle Chanting
 * @desc Requires On-The-Spot A.I. enabled. For A.I. Battlers,
 * disables idle chant motions due to inconsistency.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. Default Conditions
 * ----------------------------------------------------------------------------
 */
/*~struct~Default:
 *
 * @param Enable?
 *
 * @param EnableAllCon:eval
 * @text All Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ALL' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param EnableAnyCon:eval
 * @text Any Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ANY' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param HpDamage
 * @text HP Damage
 * 
 * @param HpDamageAll:json
 * @text All Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ALL' conditions used for HP damage skills.
 * @default ""
 * 
 * @param HpDamageAny:json
 * @text Any Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ANY' conditions used for HP damage skills.
 * @default "Always"
 *
 * @param MpDamage
 * @text MP Damage
 * 
 * @param MpDamageAll:json
 * @text All Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ALL' conditions used for MP damage skills.
 * @default "Target MP > 0"
 *
 * @param MpDamageAny:json
 * @text Any Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ANY' conditions used for MP damage skills.
 * @default ""
 *
 * @param HpRecover
 * @text HP Recover
 * 
 * @param HpRecoverAll:json
 * @text All Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ALL' conditions used for HP recovery skills.
 * @default ""
 *
 * @param HpRecoverAny:json
 * @text Any Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ANY' conditions used for HP recovery skills.
 * @default "Target HP < Target MaxHP"
 *
 * @param MpRecover
 * @text MP Recover
 * 
 * @param MpRecoverAll:json
 * @text All Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ALL' conditions used for MP recovery skills.
 * @default ""
 *
 * @param MpRecoverAny:json
 * @text Any Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ANY' conditions used for MP recovery skills.
 * @default "Target MP < Target MaxMP"
 *
 * @param HpDrain
 * @text HP Drain
 * 
 * @param HpDrainAll:json
 * @text All Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ALL' conditions used for HP drain skills.
 * @default ""
 *
 * @param HpDrainAny:json
 * @text Any Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ANY' conditions used for HP drain skills.
 * @default "User HP < User MaxHP"
 *
 * @param MpDrain
 * @text MP Drain
 * 
 * @param MpDrainAll:json
 * @text All Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ALL' conditions used for MP drain skills.
 * @default "Target MP > 0"
 *
 * @param MpDrainAny:json
 * @text Any Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ANY' conditions used for MP drain skills.
 * @default ""
 *
 * @param AddState
 * @text Add State
 * 
 * @param AddStateAll:json
 * @text All Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ALL' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddStateAny:json
 * @text Any Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ANY' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not State %1\nTarget State %1 Turns <= 1"
 *
 * @param RemoveState
 * @text Remove State
 * 
 * @param RemoveStateAll:json
 * @text All Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ALL' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveStateAny:json
 * @text Any Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ANY' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has State %1"
 *
 * @param AddBuff
 * @text Add Buff
 * 
 * @param AddBuffAll:json
 * @text All Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ALL' conditions used for adding buffs.
 * %1 - Dynamic values (ie param names).
 * @default ""
 *
 * @param AddBuffAny:json
 * @text Any Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ANY' conditions used for adding buffs.
 * %1 - Dynamic values (ie param's).
 * @default "Target Not %1 Max Buff\nTarget %1 Buff Turns <= 1"
 *
 * @param RemoveBuff
 * @text Remove Buff
 * 
 * @param RemoveBuffAll:json
 * @text All Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ALL' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveBuffAny:json
 * @text Any Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ANY' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Buff"
 *
 * @param AddDebuff
 * @text Add Debuff
 * 
 * @param AddDebuffAll:json
 * @text All Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ALL' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddDebuffAny:json
 * @text Any Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ANY' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not %1 Max Debuff\nTarget %1 Debuff Turns <= 1"
 *
 * @param RemoveDebuff
 * @text Remove Debuff
 * 
 * @param RemoveDebuffAll:json
 * @text All Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ALL' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveDebuffAny:json
 * @text Any Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ANY' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Debuff"
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. => TGR Weight Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Weight:
 *
 * @param ElementTgr:eval
 * @text Element Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider elemental rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param ElementTgrRate:num
 * @text Influence Rate
 * @parent ElementTgr:eval
 * @desc This determines the default level of influence elemental
 * rates have on TGR weight.
 * @default 1.25
 *
 * @param EvaTgr:eval
 * @text EVA Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider EVA rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param EvaTgrRate:num
 * @text Influence Rate
 * @parent EvaTgr:eval
 * @desc This determines the default level of influence EVA
 * rates have on TGR weight.
 * @default 1.50
 *
 * @param MevTgr:eval
 * @text MEV Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider MEV rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param MevTgrRate:num
 * @text Influence Rate
 * @parent MevTgr:eval
 * @desc This determines the default level of influence MEV
 * rates have on TGR weight.
 * @default 2.00
 *
 */
//=============================================================================

function _0x40db(_0x14d773,_0x29a966){const _0x359aef=_0x359a();return _0x40db=function(_0x40db75,_0x38621a){_0x40db75=_0x40db75-0x1af;let _0x46fdcc=_0x359aef[_0x40db75];return _0x46fdcc;},_0x40db(_0x14d773,_0x29a966);}function _0x359a(){const _0x276104=['ShuffleArray','Game_Unit_initialize','determineTargetActionByAIisStillValid','MzSIO','FPGBN','push','meetsCondition','utgYP','TOMxi','scope','action','addAIKnowledge','makeDefaultConditions','forceValidTargets','_stateTurns','%1\x20%2\x20%3','classic','YcwTM','autoRemovalTiming','JrTid','aiMevTgr','makeAutoBattleActionsWithEnemyAI','SkjLd','MpDamage%1','getEnemyIdWithName','For\x20more\x20information,\x20view\x20the\x20help\x20file.','BattleAI','getAllConditions','JGoxW','_elementIDs','The\x20following\x20line\x20is\x20not\x20supported\x20by\x20Battle\x20A.I.:\x0a\x0a','VBGke','TGkRG','isPlaytest','evaRates','elementRate','AddBuff%1','isSkill','_stateIDs','EnemyStyleAI','MpDrain%1','eWueT','toLowerCase','mevRates','AddState%1','ZdDnc','clamp','JkVNV','aiLevel','ujMtj','isActionValid','gainq','Weight','UvpVD','vWJuU','clearAiTgrInfluence','GdJtj','isForOpponent','STR','skillId','length','EXR','EFFECT_REMOVE_BUFF','max','states','IDMmX','determineActionByAIisStillValid','ujtyB','isEnemy','doesAIApplyElementalTgrInfluence','makeTargets','DQSnS','referenceEnemyForAI','isForAnyoneFocusFriends','type','LAST','toUpperCase','6595bmDorY','format','clearForcedTargets','filter','elementRates','MAXMP','oUXnr','mmp','VisuMZ_1_ElementStatusCore','createFilterTarget','isForDeadFriend','qutfg','MpRecover%1','ConvertParams','Game_Action_apply','enemy','MAX_SAFE_INTEGER','aiKnowledge','status','isAggroAffected','HP%','68061DwLueX','passesAILevel','parse','Default','rating','RemoveState%1','VisuMZ_2_AggroControlSystem','Game_BattlerBase_sparam','numActions','isActor','SOJJT','isConfused','Game_Troop_setup','currentAction','SpotRemoveMotions','xparam','value2','EFFECT_ADD_DEBUFF','wOxfH','LEVEL','sPmxy','determineLineValue','WmlxN','LeFfL','selectAllActionsRandom','qQByv','guBUZ','actorId','tpRate','BattleManager_startAction','mhp','The\x20reason\x20is\x20due\x20to\x20the\x20turnCount()\x20function.\x0a','BattleManager_endAction','is%1Affected','endAction','aiRatingVariance','isForAnyone','startAction','KKqRV','HpRecover%1','doesTargetMeetAllConditions','note','initialize','hasElementAIKnowledge','addElementAIKnowledge','VmSct','setSkill','RemoveDebuff%1','SPUcT','Game_Battler_turnCount','CRI','dataId','evaInfluenceRate','AI\x20Manager\x20condition\x20cannot\x20be\x20met:\x20%1','BattleManager_getNextSubject','map','AhbAa','deadMembers','EFFECT_ADD_BUFF','opponentsUnit','CNT','aiElementTgr','isMax%1Affected','xcpCH','gdCoq','24103773XCGOzq','_buffTurns','elements','ajICI','isTpb','_rngChance','selectAllActionsClassic','prototype','ARRAYEVAL','aiApplyMevTgrInfluenceRate','getAnyConditions','makeActions','fwwJK','BCtHT','doesTargetMeetAnyConditions','aZdpE','Xvnwe','HIT','indexOf','applyBattleAI','1750920IwIWYk','ebeCi','ALWAYS','buff','bypassElementTgr','mevInfluenceRate','MAT','pWJQx','elementKnowledgeRate','meetsPartyLevelCondition','doesAIApplyEvaTgrInfluence','jToDh','AGI','ActorAIReference','isChanting','SCpEd','_aiTgrInfluence','EVA','elementId','makeDeepCopy','ElementTgrRate','_forceValidTargets','ElementTgr','UvXmd','ZuNoZ','isBuffAffected','split','isConditionalAI','bAEIs','canUse','hasValidTargets','PDR','Game_Unit_randomTarget','ATK','NEGATIVE\x20STATE\x20COUNT','damage','isForNotUser','hcBOs','DNPpV','randomInt','user','statesByCategory','trim','ssmil','_aiKnowledge','subject','JSON','xpcqw','actions','getDefaultAllConditions','ysiCS','jzrVq','parameters','isMagical','TP%','randomTarget','62oVqPcw','setEnemyAction','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','attackSkillId','meetsStateCondition','lVYbD','EnableAnyCon','effects','OpLzY','eva','selectAction','ActorAILevel','MERyz','agGJN','_alertTurnCount','debuff','Game_Enemy_isActionValid','EnemyAILevel','STRUCT','hasForcedTargets','HpDamage%1','aiEvaTgr','exit','WpPZD','drmfr','clearActions','POSITIVE\x20STATE\x20COUNT','itemTargetCandidates','initBattleAI','highestTgrMember','reduce','2839458cvveGT','replace','selectAllActionsGambit','aEeUS','turnCount','LrMNe','doesAIApplyMevTgrInfluence','CVUem','fBwEM','level','9930688YQxThe','mev','isForFriend','guardSkillId','attackElements','OkrGa','checkSkillTargets','_forceAction','EdgwR','EvaTgr','QFxVK','GLgjZ','uyxQr','isAutoBattle','EFFECT_RECOVER_HP','fXbQx','match','DEF','value','aiTarget','log','makeAutoBattleActions','TRG','needsSelection','isStateAffected','elementInfluence','canAttack','param','enemyId','cqyth','TootQ','TGR','iDClO','HIGHEST','desie','USER','4660pOOOqV','JKQuV','yIhzj','includes','random','wtqLa','This\x20is\x20a\x20static\x20class','canGuard','Lpobc','NEGATIVE','irOMJ','Game_Battler_isChanting','UnknownElementRate','_regexp','EFFECT_REMOVE_STATE','meetsTurnCondition','MRG','hpRate','tPHnN','REC','10877832QrMnYn','selectAllActions','pFkrl','VisuMZ_4_AggroControl','XyRVF','aiApplyElementalTgrInfluenceRate','apply','MMdPQ','ZhYCd','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','uspxi','Game_Action_itemTargetCandidates','bypassMevTgr','doesTargetMeetAIConditions','aiApplyEvaTgrInfluenceRate','VyNyR','jBqhC','noCondition','qVwth','MDF','IuSBQ','clearAIKnowledge','AI\x20Manager\x20could\x20not\x20determine\x20this\x20value:\x20%1','forcedTargets','FUNC','IrJgI','elementIds','All','aliveMembers','HZykU','currentClass','meetsSwitchCondition','ARRAYJSON','Game_Temp_initialize','isPhysical','sparam','charAt','Game_Actor_makeAutoBattleActions','EnemyRatingVariance','elementInfluenceRate','name','getNextSubject','zGMSB','ARRAYFUNC','EnableAllCon','CTOMD','GRD','VVZZB','sLHsB','addXParamAIKnowledge','call','aiTgrInfluence','MCR','xDAlx','allCondition','filterForcedTargeting','ActorStyleAI','uUBGM','doesTargetMeetCondition','ZQenQ','RemoveBuff%1','ftxJW','_applyAIForcedTargetFilters','setAiTgrInfluences','item','OnSpotAI','friendsUnit','VisuMZ_1_SkillsStatesCore','LBIra','_subject','value1','ActorRatingVariance','PHA','slice','applyBattleAiTgrInfluences','aiStyle','MAXHP','setup','tGBfF','mpRate','EvaTgrRate','Game_Unit_aliveMembers','makeValidTargets','ARRAYSTRUCT','Settings','description','GjHlP','mvVwr','determineNewValidAIAction','LUK','fgNVD','bypassEvaTgr','sjTkw','ARRAYSTR','gCqJa','gambit','maxTp','getElementIdWithName','getDefaultAnyConditions','fwBCZ','ErFiV','getStateIdWithName','AddDebuff%1','tNJlb','isDetermineActionByAI','code','remove','_bypassAiValidCheck','usableSkills','LQUSE','MDR','General','return\x200','actor','FfDkO','kDyOj','hLQFu','casual','concat','meetsMpCondition','hasXParamAIKnowledge','STATE\x20COUNT'];_0x359a=function(){return _0x276104;};return _0x359a();}const _0x18d82e=_0x40db;(function(_0xf93918,_0x281b45){const _0x51ed43=_0x40db,_0x1cf100=_0xf93918();while(!![]){try{const _0x46b3bc=-parseInt(_0x51ed43(0x35b))/0x1+-parseInt(_0x51ed43(0x1c9))/0x2*(-parseInt(_0x51ed43(0x306))/0x3)+-parseInt(_0x51ed43(0x216))/0x4*(parseInt(_0x51ed43(0x2f1))/0x5)+parseInt(_0x51ed43(0x1e8))/0x6+parseInt(_0x51ed43(0x22a))/0x7+-parseInt(_0x51ed43(0x1f2))/0x8+parseInt(_0x51ed43(0x347))/0x9;if(_0x46b3bc===_0x281b45)break;else _0x1cf100['push'](_0x1cf100['shift']());}catch(_0x5c8c37){_0x1cf100['push'](_0x1cf100['shift']());}}}(_0x359a,0xd6cce));var label=_0x18d82e(0x2be),tier=tier||0x0,dependencies=['VisuMZ_1_BattleCore'],pluginData=$plugins[_0x18d82e(0x2f4)](function(_0x234576){const _0xda2534=_0x18d82e;return _0x234576[_0xda2534(0x303)]&&_0x234576[_0xda2534(0x27f)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x18d82e(0x27e)]=VisuMZ[label][_0x18d82e(0x27e)]||{},VisuMZ['ConvertParams']=function(_0x4351a6,_0x15201e){const _0x2219bf=_0x18d82e;for(const _0x1435d0 in _0x15201e){if(_0x1435d0[_0x2219bf(0x202)](/(.*):(.*)/i)){const _0x3e3b96=String(RegExp['$1']),_0xd6eb81=String(RegExp['$2'])[_0x2219bf(0x2f0)]()[_0x2219bf(0x1bb)]();let _0xddb73b,_0xdba721,_0x59972d;switch(_0xd6eb81){case'NUM':_0xddb73b=_0x15201e[_0x1435d0]!==''?Number(_0x15201e[_0x1435d0]):0x0;break;case'ARRAYNUM':_0xdba721=_0x15201e[_0x1435d0]!==''?JSON['parse'](_0x15201e[_0x1435d0]):[],_0xddb73b=_0xdba721['map'](_0x5afc2c=>Number(_0x5afc2c));break;case'EVAL':_0xddb73b=_0x15201e[_0x1435d0]!==''?eval(_0x15201e[_0x1435d0]):null;break;case _0x2219bf(0x34f):_0xdba721=_0x15201e[_0x1435d0]!==''?JSON[_0x2219bf(0x308)](_0x15201e[_0x1435d0]):[],_0xddb73b=_0xdba721[_0x2219bf(0x33d)](_0x5f29d3=>eval(_0x5f29d3));break;case _0x2219bf(0x1bf):_0xddb73b=_0x15201e[_0x1435d0]!==''?JSON['parse'](_0x15201e[_0x1435d0]):'';break;case _0x2219bf(0x24a):_0xdba721=_0x15201e[_0x1435d0]!==''?JSON[_0x2219bf(0x308)](_0x15201e[_0x1435d0]):[],_0xddb73b=_0xdba721[_0x2219bf(0x33d)](_0x368f15=>JSON[_0x2219bf(0x308)](_0x368f15));break;case _0x2219bf(0x242):_0xddb73b=_0x15201e[_0x1435d0]!==''?new Function(JSON[_0x2219bf(0x308)](_0x15201e[_0x1435d0])):new Function(_0x2219bf(0x29a));break;case _0x2219bf(0x255):_0xdba721=_0x15201e[_0x1435d0]!==''?JSON[_0x2219bf(0x308)](_0x15201e[_0x1435d0]):[],_0xddb73b=_0xdba721[_0x2219bf(0x33d)](_0x4620da=>new Function(JSON[_0x2219bf(0x308)](_0x4620da)));break;case _0x2219bf(0x2de):_0xddb73b=_0x15201e[_0x1435d0]!==''?String(_0x15201e[_0x1435d0]):'';break;case _0x2219bf(0x287):_0xdba721=_0x15201e[_0x1435d0]!==''?JSON[_0x2219bf(0x308)](_0x15201e[_0x1435d0]):[],_0xddb73b=_0xdba721[_0x2219bf(0x33d)](_0x3b48c0=>String(_0x3b48c0));break;case _0x2219bf(0x1db):_0x59972d=_0x15201e[_0x1435d0]!==''?JSON[_0x2219bf(0x308)](_0x15201e[_0x1435d0]):{},_0xddb73b=VisuMZ[_0x2219bf(0x2fe)]({},_0x59972d);break;case _0x2219bf(0x27d):_0xdba721=_0x15201e[_0x1435d0]!==''?JSON[_0x2219bf(0x308)](_0x15201e[_0x1435d0]):[],_0xddb73b=_0xdba721['map'](_0x184025=>VisuMZ['ConvertParams']({},JSON[_0x2219bf(0x308)](_0x184025)));break;default:continue;}_0x4351a6[_0x3e3b96]=_0xddb73b;}}return _0x4351a6;},(_0x359018=>{const _0x38a1e0=_0x18d82e,_0x2483e3=_0x359018['name'];for(const _0x2b4e90 of dependencies){if(!Imported[_0x2b4e90]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x2483e3,_0x2b4e90)),SceneManager[_0x38a1e0(0x1df)]();break;}}const _0x22f025=_0x359018[_0x38a1e0(0x27f)];if(_0x22f025['match'](/\[Version[ ](.*?)\]/i)){if(_0x38a1e0(0x2d9)!==_0x38a1e0(0x2d9)){if(_0x3ae42d&&_0x949f47[_0x38a1e0(0x28a)]()>_0x1a5c4b[_0x38a1e0(0x28a)]())_0x1b02f1=_0x3a612a;if(_0x1bb063&&_0x149be8[_0x38a1e0(0x28a)]()<_0x2a0774[_0x38a1e0(0x28a)]())_0x5d549f=_0x57d329;}else{const _0x70b9b8=Number(RegExp['$1']);if(_0x70b9b8!==VisuMZ[label]['version']){if(_0x38a1e0(0x2f7)===_0x38a1e0(0x2f7))alert(_0x38a1e0(0x233)[_0x38a1e0(0x2f2)](_0x2483e3,_0x70b9b8)),SceneManager[_0x38a1e0(0x1df)]();else{if(_0x57e160&&_0x23e2fa['mp']>_0x82fcb0['mp'])_0x13678c=_0x4f8815;if(_0x143a63&&_0x356a14['mp']<_0x3dfcb9['mp'])_0x2e23fb=_0x2cb6a2;}}}}if(_0x22f025[_0x38a1e0(0x202)](/\[Tier[ ](\d+)\]/i)){const _0x2ef04f=Number(RegExp['$1']);if(_0x2ef04f<tier){if(_0x38a1e0(0x25a)!==_0x38a1e0(0x2fc))alert(_0x38a1e0(0x1cb)[_0x38a1e0(0x2f2)](_0x2483e3,_0x2ef04f,tier)),SceneManager['exit']();else{const _0x3f73fd=_0x3658fc(_0x44aa0d['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x2f2893:_0x5ef2b4;return _0x3f73fd[_0x38a1e0(0x30f)]();}}else tier=Math['max'](_0x2ef04f,tier);}VisuMZ[_0x38a1e0(0x2fe)](VisuMZ[label][_0x38a1e0(0x27e)],_0x359018[_0x38a1e0(0x1c5)]);})(pluginData);function AIManager(){const _0xda2454=_0x18d82e;throw new Error(_0xda2454(0x21c));}AIManager[_0x18d82e(0x223)]={'noCondition':/<NO AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'allCondition':/<ALL AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ALL AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'anyCondition':/<ANY AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ANY AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'bypassElementTgr':/<(?:NO|BYPASS) AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE>/i,'bypassEvaTgr':/<(?:NO|BYPASS) AI (?:EVA|EVASION) INFLUENCE>/i,'bypassMevTgr':/<(?:NO|BYPASS) AI (?:MEV|MAGIC EVASION) INFLUENCE>/i,'aiElementTgr':/<AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE: (.*)>/i,'aiEvaTgr':/<AI (?:EVA|EVASION) INFLUENCE: (.*)>/i,'aiMevTgr':/<AI (?:MEV|MAGIC EVASION) INFLUENCE: (.*)>/i,'aiLevel':/<AI LEVEL: (\d+)>/i,'aiRatingVariance':/<AI RATING VARIANCE: (\d+)>/i,'aiTarget':/<AI (?:TARGET|TARGETS):[ ](.*)>/i,'aiStyle':/<AI STYLE:[ ](.*)>/i},AIManager['isConditionalAI']=function(_0x30170d){const _0x178680=_0x18d82e;if(!_0x30170d)return![];return this['getAllConditions'](_0x30170d)['length']>0x0||this[_0x178680(0x351)](_0x30170d)['length']>0x0;},AIManager[_0x18d82e(0x2bf)]=function(_0x498dde){const _0x1189f6=_0x18d82e;if(_0x498dde[_0x1189f6(0x32f)][_0x1189f6(0x202)](AIManager['_regexp'][_0x1189f6(0x23b)]))return[];else return _0x498dde[_0x1189f6(0x32f)][_0x1189f6(0x202)](AIManager['_regexp']['allCondition'])?String(RegExp['$1'])[_0x1189f6(0x375)](/[\r\n]+/)[_0x1189f6(0x294)](''):this[_0x1189f6(0x1c2)](_0x498dde);},AIManager[_0x18d82e(0x351)]=function(_0x1dad17){const _0x42a64a=_0x18d82e;if(_0x1dad17[_0x42a64a(0x32f)][_0x42a64a(0x202)](AIManager[_0x42a64a(0x223)][_0x42a64a(0x23b)]))return[];else{if(_0x1dad17[_0x42a64a(0x32f)][_0x42a64a(0x202)](AIManager['_regexp']['anyCondition'])){if(_0x42a64a(0x1bc)===_0x42a64a(0x1bc))return String(RegExp['$1'])[_0x42a64a(0x375)](/[\r\n]+/)[_0x42a64a(0x294)]('');else{const _0x10a010=[_0x3c2337(_0x4608ae['$1']),_0x308659(_0xad558a['$2']),_0x2e9201(_0xf15b4f['$3'])],_0x48879e=this['determineLineValue'](_0x26e05f,_0x3f3884,_0x5da334,_0x10a010[0x0]),_0x5561f=_0x10a010[0x1],_0x3f9776=this[_0x42a64a(0x31b)](_0x133057,_0x238a4a,_0x33f533,_0x10a010[0x2]);_0x51f872[_0x42a64a(0x1b9)]=_0x2bbcc5['a']=_0x35d2e9['b']=_0x58faa8;const _0x1e68ff='%1\x20%2\x20%3'[_0x42a64a(0x2f2)](_0x48879e,_0x5561f,_0x3f9776);try{return _0x8825a9(_0x1e68ff);}catch(_0x8815c0){return _0x15d111[_0x42a64a(0x2c5)]()&&(_0x11cca1[_0x42a64a(0x206)](_0x42a64a(0x33b)[_0x42a64a(0x2f2)](_0x3bfbd2)),_0x3ac918['log'](_0x8815c0)),!![];}}}else return this[_0x42a64a(0x28c)](_0x1dad17);}},AIManager['getDefaultAllConditions']=function(_0x2ae944){const _0x417e9a=_0x18d82e;if(!VisuMZ['BattleAI']['Settings']['Default'][_0x417e9a(0x256)])return[];if(_0x2ae944[_0x417e9a(0x32f)][_0x417e9a(0x202)](AIManager[_0x417e9a(0x223)]['anyCondition']))return[];return this['makeDefaultConditions'](_0x2ae944,_0x417e9a(0x245));},AIManager[_0x18d82e(0x28c)]=function(_0x54003e){const _0x18c9f5=_0x18d82e;if(!VisuMZ[_0x18c9f5(0x2be)][_0x18c9f5(0x27e)][_0x18c9f5(0x309)][_0x18c9f5(0x1cf)])return[];if(_0x54003e['note'][_0x18c9f5(0x202)](AIManager['_regexp'][_0x18c9f5(0x260)]))return[];return this[_0x18c9f5(0x2b0)](_0x54003e,'Any');},AIManager[_0x18d82e(0x2b0)]=function(_0x33dd94,_0x1a6560){const _0x131c16=_0x18d82e;if(!_0x33dd94)return[];const _0x156a64=VisuMZ[_0x131c16(0x2be)][_0x131c16(0x27e)][_0x131c16(0x309)],_0x1c5bad=[_0x131c16(0x276),_0x131c16(0x2f6),_0x131c16(0x1b2),_0x131c16(0x203),'MAT',_0x131c16(0x23d),'AGI',_0x131c16(0x283)],_0x175ca2=_0x33dd94['damage'][_0x131c16(0x2ee)],_0x59865f=_0x33dd94[_0x131c16(0x1d0)];let _0x2eff95=[],_0x244344='',_0xe7280b='';switch(_0x175ca2){case 0x1:_0x244344=_0x131c16(0x1dd)[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344],_0x2eff95=_0x2eff95['concat'](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)](''));break;case 0x2:_0x244344=_0x131c16(0x2bb)[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344],_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)](''));break;case 0x3:_0x244344=_0x131c16(0x32d)[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344],_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)](''));break;case 0x4:_0x244344=_0x131c16(0x2fd)[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344],_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)](''));break;case 0x5:_0x244344='HpDrain%1'[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344],_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b['split'](/[\r\n]+/)[_0x131c16(0x294)](''));break;case 0x6:_0x244344=_0x131c16(0x2cc)['format'](_0x1a6560),_0xe7280b=_0x156a64[_0x244344],_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b['split'](/[\r\n]+/)['remove'](''));break;}for(const _0x21b741 of _0x59865f){if(!_0x21b741)continue;switch(_0x21b741[_0x131c16(0x293)]){case Game_Action[_0x131c16(0x200)]:if(_0x21b741['value1']>0x0||_0x21b741[_0x131c16(0x316)]>0x0)_0x244344='HpRecover%1'[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344],_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b['split'](/[\r\n]+/)['remove'](''));else(_0x21b741['value1']<0x0||_0x21b741[_0x131c16(0x316)]<0x0)&&(_0x244344='HpDamage%1'[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344],_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)]('')));break;case Game_Action['EFFECT_RECOVER_MP']:if(_0x21b741[_0x131c16(0x270)]>0x0||_0x21b741[_0x131c16(0x316)]>0x0){if('bAEIs'===_0x131c16(0x377))_0x244344='MpRecover%1'[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344],_0x2eff95=_0x2eff95['concat'](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)](''));else return _0x239886[_0x131c16(0x271)][_0x131c16(0x2d2)](0x0,0x9);}else(_0x21b741[_0x131c16(0x270)]<0x0||_0x21b741[_0x131c16(0x316)]<0x0)&&(_0x244344=_0x131c16(0x2bb)[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344],_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)]('')));break;case Game_Action['EFFECT_ADD_STATE']:if(_0x21b741['dataId']===0x0)continue;_0x244344=_0x131c16(0x2d0)['format'](_0x1a6560),_0xe7280b=_0x156a64[_0x244344][_0x131c16(0x2f2)](_0x21b741['dataId']),_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)](''));break;case Game_Action[_0x131c16(0x224)]:_0x244344=_0x131c16(0x30b)[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344][_0x131c16(0x2f2)](_0x21b741[_0x131c16(0x339)]),_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)](''));break;case Game_Action[_0x131c16(0x340)]:_0x244344=_0x131c16(0x2c8)[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344][_0x131c16(0x2f2)](_0x1c5bad[_0x21b741[_0x131c16(0x339)]]),_0x2eff95=_0x2eff95['concat'](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)['remove'](''));break;case Game_Action[_0x131c16(0x317)]:_0x244344=_0x131c16(0x290)[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344][_0x131c16(0x2f2)](_0x1c5bad[_0x21b741[_0x131c16(0x339)]]),_0x2eff95=_0x2eff95['concat'](_0xe7280b['split'](/[\r\n]+/)[_0x131c16(0x294)](''));break;case Game_Action[_0x131c16(0x2e2)]:_0x244344=_0x131c16(0x266)['format'](_0x1a6560),_0xe7280b=_0x156a64[_0x244344][_0x131c16(0x2f2)](_0x1c5bad[_0x21b741[_0x131c16(0x339)]]),_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)](''));break;case Game_Action['EFFECT_REMOVE_DEBUFF']:_0x244344=_0x131c16(0x335)[_0x131c16(0x2f2)](_0x1a6560),_0xe7280b=_0x156a64[_0x244344][_0x131c16(0x2f2)](_0x1c5bad[_0x21b741[_0x131c16(0x339)]]),_0x2eff95=_0x2eff95[_0x131c16(0x2a0)](_0xe7280b[_0x131c16(0x375)](/[\r\n]+/)[_0x131c16(0x294)](''));break;}}return _0x2eff95;},AIManager[_0x18d82e(0x2b1)]=function(_0xfff1f6,_0x2a806a){const _0x51fd23=_0x18d82e;this[_0x51fd23(0x370)]=this[_0x51fd23(0x27c)](_0xfff1f6,_0x2a806a);},AIManager['clearForcedTargets']=function(){const _0x4c5296=_0x18d82e;this[_0x4c5296(0x370)]=[];},AIManager[_0x18d82e(0x241)]=function(){const _0x29d00b=_0x18d82e;return this[_0x29d00b(0x370)]=this[_0x29d00b(0x370)]||[],this['_forceValidTargets'];},AIManager[_0x18d82e(0x1dc)]=function(){const _0x5309dc=_0x18d82e;return this[_0x5309dc(0x241)]()[_0x5309dc(0x2e0)]>0x0;},AIManager['hasValidTargets']=function(_0x511c66,_0x40c560){const _0x3f6f19=_0x18d82e;if(!_0x511c66)return![];if(!_0x40c560)return![];if(!DataManager[_0x3f6f19(0x2c9)](_0x40c560))return;if(this[_0x3f6f19(0x376)](_0x40c560)){if(_0x3f6f19(0x333)===_0x3f6f19(0x333))return this[_0x3f6f19(0x27c)](_0x511c66,_0x40c560)['length']>=0x1;else _0x24902c=_0x19a4d4[_0x3f6f19(0x26c)]()[_0x3f6f19(0x246)]();}else{if(_0x3f6f19(0x2c4)!==_0x3f6f19(0x2c4)){this[_0x3f6f19(0x302)]()[_0x37bbd9]=this[_0x3f6f19(0x302)]()[_0x22e717]||[];const _0x29a189=_0x561e2e[_0x3f6f19(0x30f)]()?_0x57a73b[_0x3f6f19(0x321)]():_0xd9dc53[_0x3f6f19(0x20e)]();!this[_0x3f6f19(0x302)]()[_0x2ca04c][_0x3f6f19(0x219)](_0x29a189)&&this[_0x3f6f19(0x302)]()[_0x41d6ac][_0x3f6f19(0x2a9)](_0x29a189);}else return!![];}},AIManager[_0x18d82e(0x27c)]=function(_0x5ebc07,_0x10a940){const _0x5e2890=_0x18d82e;let _0x9fa7ed=[];if(this['isConditionalAI'](_0x10a940)){if(_0x5e2890(0x220)!=='Fqsrh'){const _0x4a3b94=this['getAllConditions'](_0x10a940),_0x370cd0=this['getAnyConditions'](_0x10a940),_0x18090c=new Game_Action(_0x5ebc07);_0x18090c[_0x5e2890(0x334)](_0x10a940['id']);let _0x3f772e=AIManager[_0x5e2890(0x1f8)](_0x5ebc07,_0x18090c);this['_rngChance']=Math['random'](),_0x9fa7ed=_0x3f772e['filter'](_0x581b9f=>this[_0x5e2890(0x237)](_0x5ebc07,_0x581b9f,_0x10a940,_0x4a3b94,_0x370cd0));}else{if(_0x2deaa2&&_0x57039f['sparam'](_0x3fcfe8)>_0x368f1c['sparam'](_0x1f36fb))_0x132b89=_0x5943ad;if(_0x1d8eb7&&_0x166a3f[_0x5e2890(0x24d)](_0x49148f)<_0x30008b[_0x5e2890(0x24d)](_0xe29c09))_0x37c090=_0x899022;}}return _0x9fa7ed;},AIManager[_0x18d82e(0x1f8)]=function(_0x502766,_0x1d12e1){const _0xbd817c=_0x18d82e;let _0x37aab3=[];if(Imported[_0xbd817c(0x30c)]&&_0x1d12e1[_0xbd817c(0x304)]()){const _0x232f15=_0x1d12e1['isForOpponent']()?_0x502766[_0xbd817c(0x341)]():_0x502766[_0xbd817c(0x26c)]();_0x37aab3=[_0x232f15[_0xbd817c(0x1e6)]()];}else{if(_0x1d12e1['isForEveryone']()){if(_0xbd817c(0x1ef)!==_0xbd817c(0x356))_0x37aab3=$gameParty[_0xbd817c(0x246)]()[_0xbd817c(0x2a0)]($gameTroop[_0xbd817c(0x246)]());else return _0x179260[_0xbd817c(0x2b2)][_0x2cf70a]||0x0;}else{if(_0x1d12e1['isForAnyone']&&_0x1d12e1[_0xbd817c(0x32a)]()){if(_0xbd817c(0x2cd)==='eWueT'){const _0x2db114=_0x1d12e1['item']()[_0xbd817c(0x2ad)];if(_0x1d12e1['isForAnyoneFocusOpponents']())_0xbd817c(0x336)!==_0xbd817c(0x21e)?_0x37aab3=_0x502766[_0xbd817c(0x341)]()['aliveMembers']():(_0x2adc28['BattleAI'][_0xbd817c(0x2a5)][_0xbd817c(0x25c)](this),this[_0xbd817c(0x1e5)]());else _0x1d12e1[_0xbd817c(0x2ed)]()&&(_0x37aab3=_0x502766[_0xbd817c(0x26c)]()['aliveMembers']());}else{const _0x1c201b=_0x33fbcd(_0x5a176d['$1'])[_0xbd817c(0x202)](/(?:USER|SUBJECT)/i)?_0x535ecf:_0x4ecef0;return _0x1c201b[_0xbd817c(0x2e8)]();}}else{if(_0x1d12e1[_0xbd817c(0x2dd)]())_0x37aab3=_0x502766[_0xbd817c(0x341)]()[_0xbd817c(0x246)]();else{if(_0x1d12e1[_0xbd817c(0x2fb)]())_0x37aab3=_0x502766[_0xbd817c(0x26c)]()['deadMembers']();else _0x1d12e1[_0xbd817c(0x1f4)]()&&!_0x1d12e1[_0xbd817c(0x2fb)]()&&(_0x37aab3=_0x502766['friendsUnit']()[_0xbd817c(0x246)]());}}}}return _0x1d12e1[_0xbd817c(0x1b5)]&&_0x1d12e1[_0xbd817c(0x1b5)]()&&_0x37aab3[_0xbd817c(0x294)](_0x502766),_0x37aab3;},AIManager['doesTargetMeetAIConditions']=function(_0x6427e4,_0x384414,_0x46f8ac,_0x5e9ba9,_0x5d0a0f){const _0x10bb64=_0x18d82e;return this[_0x10bb64(0x32e)](_0x6427e4,_0x384414,_0x46f8ac,_0x5e9ba9)&&this[_0x10bb64(0x355)](_0x6427e4,_0x384414,_0x46f8ac,_0x5d0a0f);},AIManager[_0x18d82e(0x32e)]=function(_0x274996,_0x32e764,_0x6e55f9,_0xe61b65){const _0x3ceeea=_0x18d82e;if(_0xe61b65['length']<=0x0)return!![];for(const _0x1cbfc3 of _0xe61b65){if(!_0x1cbfc3)continue;if(_0x1cbfc3['length']<=0x0)continue;if(!this[_0x3ceeea(0x307)](_0x274996))return!![];if(!this[_0x3ceeea(0x264)](_0x274996,_0x32e764,_0x6e55f9,_0x1cbfc3))return![];}return!![];},AIManager[_0x18d82e(0x355)]=function(_0xc27408,_0x58ffc2,_0x415aef,_0x3cc24e){const _0x5f426b=_0x18d82e;if(_0x3cc24e[_0x5f426b(0x2e0)]<=0x0)return!![];for(const _0x429695 of _0x3cc24e){if(!_0x429695)continue;if(_0x429695[_0x5f426b(0x2e0)]<=0x0)continue;if(!this[_0x5f426b(0x307)](_0xc27408))return!![];if(this[_0x5f426b(0x264)](_0xc27408,_0x58ffc2,_0x415aef,_0x429695))return!![];}return![];},AIManager[_0x18d82e(0x307)]=function(_0x59235b){const _0x55166c=_0x18d82e,_0x36914f=_0x59235b[_0x55166c(0x2d4)]();return Math['randomInt'](0x64)<_0x36914f;},AIManager['doesTargetMeetCondition']=function(_0x26e988,_0xbaa1c2,_0x506fec,_0x590e6e){const _0x29ea48=_0x18d82e,_0x2bfa10=[_0x29ea48(0x276),_0x29ea48(0x2f6),_0x29ea48(0x1b2),_0x29ea48(0x203),_0x29ea48(0x361),'MDF',_0x29ea48(0x367),'LUK'];if(_0x590e6e[_0x29ea48(0x2f0)]()[_0x29ea48(0x1bb)]()===_0x29ea48(0x35d))return!![];const _0x55ad42=_0x26e988;if(!VisuMZ[_0x29ea48(0x2be)][_0x29ea48(0x27e)][_0x29ea48(0x299)][_0x29ea48(0x26b)]){if(_0x590e6e['match'](/turnCount\(\)/i)){if($gameTemp['isPlaytest']()&&!this[_0x29ea48(0x1d7)]){if(_0x29ea48(0x1b6)===_0x29ea48(0x25f)){if(this[_0x29ea48(0x370)][_0x29ea48(0x219)](_0x200de2))return _0x4bd29a;}else{let _0x1a6e38=_0x29ea48(0x2c2);_0x1a6e38+=_0x590e6e+'\x0a\x0a',_0x1a6e38+=_0x29ea48(0x325),_0x1a6e38+=_0x29ea48(0x2bd),alert(_0x1a6e38),this[_0x29ea48(0x1d7)]=!![];}}return![];}}if(_0x590e6e[_0x29ea48(0x202)](/(.*) (\>=|\>|===|!==|\<|\<=) (.*)/i)){if(_0x29ea48(0x372)!==_0x29ea48(0x372)){_0xb554ab[_0x29ea48(0x1dc)]()&&(this[_0x29ea48(0x268)]=!![]);const _0x57640e=_0x49cebe['BattleAI'][_0x29ea48(0x1b1)]['call'](this);return this['_applyAIForcedTargetFilters']=![],_0x57640e;}else{const _0x353db8=[String(RegExp['$1']),String(RegExp['$2']),String(RegExp['$3'])],_0x554580=this[_0x29ea48(0x31b)](_0x26e988,_0xbaa1c2,_0x506fec,_0x353db8[0x0]),_0x24e752=_0x353db8[0x1],_0x48258d=this[_0x29ea48(0x31b)](_0x26e988,_0xbaa1c2,_0x506fec,_0x353db8[0x2]);window[_0x29ea48(0x1b9)]=window['a']=window['b']=undefined;const _0x38676a=_0x29ea48(0x2b3)[_0x29ea48(0x2f2)](_0x554580,_0x24e752,_0x48258d);try{if(_0x29ea48(0x354)===_0x29ea48(0x354))return eval(_0x38676a);else{const _0x1e4df8=_0x12127d['indexOf'](_0x45e310(_0x3c76f3['$1'])[_0x29ea48(0x2f0)]()['trim']()),_0x19b095=_0x381ee9(_0x5ddbb3['$2'])['toLowerCase']()[_0x29ea48(0x1bb)]();if(_0x19b095==='buff'&&_0x3b0b21[_0x29ea48(0x374)](_0x1e4df8))return _0x4ae7be['_buffTurns'][_0x1e4df8];else{if(_0x19b095===_0x29ea48(0x1d8)&&_0x17f017['isDebuffAffected'](_0x1e4df8))return _0x33c2fb[_0x29ea48(0x348)][_0x1e4df8];}return 0x0;}}catch(_0x2fc111){if('fwBCZ'!==_0x29ea48(0x28d)){const _0xde66a1=_0x8e93cb[_0x29ea48(0x2e3)](..._0x27bf3e[_0x29ea48(0x33d)](_0x58f632=>_0x58f632[_0x29ea48(0x30a)])),_0x33af3a=_0xde66a1-this[_0x29ea48(0x329)](),_0x29b97c=this[_0x29ea48(0x30e)]();_0x1e7b5b=_0xf38af4[_0x29ea48(0x2f4)](_0xf079b1=>_0xf079b1[_0x29ea48(0x30a)]>=_0x33af3a);for(let _0x147b6b=0x0;_0x147b6b<_0x29b97c;_0x147b6b++){_0x272d82=_0xbdd97f['BattleAI'][_0x29ea48(0x2a4)](_0x4d7498);const _0x4353fd=this[_0x29ea48(0x1d3)](_0x540615,_0x33af3a);this[_0x29ea48(0x2ae)](_0x147b6b)[_0x29ea48(0x1ca)](_0x4353fd);}}else{if($gameTemp['isPlaytest']()){if('kgdEJ'!==_0x29ea48(0x247))console[_0x29ea48(0x206)]('AI\x20Manager\x20condition\x20cannot\x20be\x20met:\x20%1'[_0x29ea48(0x2f2)](_0x590e6e)),console['log'](_0x2fc111);else{if(_0x3af554[_0x29ea48(0x2c5)]()&&!this[_0x29ea48(0x1d7)]){let _0x52c1a0=_0x29ea48(0x2c2);_0x52c1a0+=_0x59c42f+'\x0a\x0a',_0x52c1a0+=_0x29ea48(0x325),_0x52c1a0+='For\x20more\x20information,\x20view\x20the\x20help\x20file.',_0x3c5e73(_0x52c1a0),this[_0x29ea48(0x1d7)]=!![];}return![];}}return!![];}}}}else{if(_0x590e6e[_0x29ea48(0x202)](/(\d+\.?\d*)([%％]) CHANCE/i)){const _0x530de6=Number(RegExp['$1'])*0.01;return this[_0x29ea48(0x34c)]<_0x530de6;}else{if(_0x590e6e[_0x29ea48(0x202)](/SWITCH (\d+) (ON|OFF|TRUE|FALSE)/i)){const _0x5c6679=Number(RegExp['$1']),_0x323b6c=String(RegExp['$2'])[_0x29ea48(0x2ce)](),_0x4c73aa=_0x323b6c[_0x29ea48(0x202)](/ON|TRUE/i);return $gameSwitches[_0x29ea48(0x204)](_0x5c6679)===_0x4c73aa;}else{if(_0x590e6e[_0x29ea48(0x202)](/(.*) IS ACTOR/i)){const _0xabf970=String(RegExp['$1'])[_0x29ea48(0x202)](/(?:USER|SUBJECT)/i)?_0x55ad42:_0xbaa1c2;return _0xabf970[_0x29ea48(0x30f)]();}else{if(_0x590e6e['match'](/(.*) IS ENEMY/i)){const _0x27e8dd=String(RegExp['$1'])[_0x29ea48(0x202)](/(?:USER|SUBJECT)/i)?_0x55ad42:_0xbaa1c2;return _0x27e8dd[_0x29ea48(0x2e8)]();}else{if(_0x590e6e['match'](/(.*) HAS STATE (\d+)/i)){if('ebeCi'!==_0x29ea48(0x35c)){if(_0x47d8d4&&(_0x5a7e92[_0x29ea48(0x1f1)]||0x0)>(_0x17443b[_0x29ea48(0x1f1)]||0x0))_0x16a914=_0x1a9e5d;if(_0x22a75b&&(_0x3e771c[_0x29ea48(0x1f1)]||0x0)<(_0x4176c0[_0x29ea48(0x1f1)]||0x0))_0xf22344=_0x47804b;}else{const _0x44ac1a=$dataStates[Number(RegExp['$2'])],_0x20a870=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x55ad42:_0xbaa1c2;return _0x20a870[_0x29ea48(0x2e4)]()['includes'](_0x44ac1a);}}else{if(_0x590e6e[_0x29ea48(0x202)](/(.*) HAS STATE (.*)/i)){if(_0x29ea48(0x2b5)!==_0x29ea48(0x1d5)){const _0x314b1d=$dataStates[DataManager[_0x29ea48(0x28f)](RegExp['$2'])],_0x46c4c7=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x55ad42:_0xbaa1c2;return _0x46c4c7[_0x29ea48(0x2e4)]()['includes'](_0x314b1d);}else{const _0x402dd3=_0x11b64b[_0x3719ec[_0x29ea48(0x28f)](_0x241226['$2'])],_0x5f3ab9=_0x57a49a(_0x460126['$1'])[_0x29ea48(0x202)](/(?:USER|SUBJECT)/i)?_0x16876e:_0x2c31e8;return!_0x5f3ab9[_0x29ea48(0x2e4)]()[_0x29ea48(0x219)](_0x402dd3);}}else{if(_0x590e6e[_0x29ea48(0x202)](/(.*) NOT STATE (\d+)/i)){const _0x18abc1=$dataStates[Number(RegExp['$2'])],_0x1daa63=String(RegExp['$1'])[_0x29ea48(0x202)](/(?:USER|SUBJECT)/i)?_0x55ad42:_0xbaa1c2;return!_0x1daa63[_0x29ea48(0x2e4)]()['includes'](_0x18abc1);}else{if(_0x590e6e[_0x29ea48(0x202)](/(.*) NOT STATE (.*)/i)){const _0x49257c=$dataStates[DataManager['getStateIdWithName'](RegExp['$2'])],_0x570d34=String(RegExp['$1'])[_0x29ea48(0x202)](/(?:USER|SUBJECT)/i)?_0x55ad42:_0xbaa1c2;return!_0x570d34[_0x29ea48(0x2e4)]()[_0x29ea48(0x219)](_0x49257c);}else{if(_0x590e6e[_0x29ea48(0x202)](/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)){const _0x106df0=_0x2bfa10['indexOf'](String(RegExp['$2'])[_0x29ea48(0x2f0)]()['trim']()),_0x1f087b=String(RegExp['$3'])[_0x29ea48(0x2ce)]()[_0x29ea48(0x1bb)](),_0x5dde38=String(RegExp['$1'])[_0x29ea48(0x202)](/(?:USER|SUBJECT)/i)?_0x55ad42:_0xbaa1c2,_0x10d70e=_0x29ea48(0x327)['format'](_0x1f087b[_0x29ea48(0x24e)](0x0)[_0x29ea48(0x2f0)]()+_0x1f087b['slice'](0x1));return _0x5dde38[_0x10d70e](_0x106df0);}else{if(_0x590e6e[_0x29ea48(0x202)](/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)){if('peZsh'!==_0x29ea48(0x2a7)){const _0x24e9b1=_0x2bfa10[_0x29ea48(0x359)](String(RegExp['$2'])[_0x29ea48(0x2f0)]()[_0x29ea48(0x1bb)]()),_0x4fc343=String(RegExp['$3'])[_0x29ea48(0x2ce)]()[_0x29ea48(0x1bb)](),_0x854ece=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x55ad42:_0xbaa1c2,_0x582999=_0x29ea48(0x344)[_0x29ea48(0x2f2)](_0x4fc343[_0x29ea48(0x24e)](0x0)['toUpperCase']()+_0x4fc343[_0x29ea48(0x273)](0x1));return _0x854ece[_0x582999](_0x24e9b1);}else _0x2d2f7f[_0x29ea48(0x244)][_0x29ea48(0x2a9)](_0x18a568['item']()[_0x29ea48(0x1b4)][_0x29ea48(0x36d)]);}else{if(_0x590e6e[_0x29ea48(0x202)](/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)){if(_0x29ea48(0x23c)===_0x29ea48(0x2b7))return _0xc351f2(_0x534895['$1']);else{const _0x12dde4=_0x2bfa10[_0x29ea48(0x359)](String(RegExp['$2'])[_0x29ea48(0x2f0)]()[_0x29ea48(0x1bb)]()),_0x59f95a=String(RegExp['$3'])[_0x29ea48(0x2ce)]()[_0x29ea48(0x1bb)](),_0x597019=String(RegExp['$1'])[_0x29ea48(0x202)](/(?:USER|SUBJECT)/i)?_0x55ad42:_0xbaa1c2,_0x1e64a5='is%1Affected'[_0x29ea48(0x2f2)](_0x59f95a[_0x29ea48(0x24e)](0x0)[_0x29ea48(0x2f0)]()+_0x59f95a[_0x29ea48(0x273)](0x1));return!_0x597019[_0x1e64a5](_0x12dde4);}}else{if(_0x590e6e[_0x29ea48(0x202)](/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)){if('DHpUE'===_0x29ea48(0x32c)){if(_0x1dacc1&&_0x54703d['hp']>_0x143ed1['hp'])_0x10b5ba=_0xc3ccd8;if(_0x37bc12&&_0x374b00['hp']<_0x2eae50['hp'])_0x3edb2f=_0x150a85;}else{const _0x3f1486=_0x2bfa10[_0x29ea48(0x359)](String(RegExp['$2'])['toUpperCase']()[_0x29ea48(0x1bb)]()),_0x35ad12=String(RegExp['$3'])['toLowerCase']()[_0x29ea48(0x1bb)](),_0x14ade5=String(RegExp['$1'])[_0x29ea48(0x202)](/(?:USER|SUBJECT)/i)?_0x55ad42:_0xbaa1c2,_0x440c8f=_0x29ea48(0x344)[_0x29ea48(0x2f2)](_0x35ad12[_0x29ea48(0x24e)](0x0)[_0x29ea48(0x2f0)]()+_0x35ad12[_0x29ea48(0x273)](0x1));return!_0x14ade5[_0x440c8f](_0x3f1486);}}}}}}}}}}}}}}return!![];},AIManager[_0x18d82e(0x31b)]=function(_0x17d7ca,_0x47ca98,_0x35ca6e,_0x3ddb79){const _0xbe3b65=_0x18d82e,_0x3ad8f8=[_0xbe3b65(0x276),_0xbe3b65(0x2f6),_0xbe3b65(0x1b2),_0xbe3b65(0x203),_0xbe3b65(0x361),_0xbe3b65(0x23d),'AGI',_0xbe3b65(0x283)];window['user']=_0x17d7ca,window['a']=user,window['b']=_0x47ca98;const _0x53009a=_0x3ddb79,_0x190ea8=user[_0xbe3b65(0x341)]();let _0x2627b6=_0x3ddb79['match'](/(?:USER|SUBJECT)/i)?user:_0x47ca98;_0x3ddb79=_0x3ddb79[_0xbe3b65(0x1e9)](/\b(\d+)([%％])/gi,(_0x71ac39,_0x730f95)=>Number(_0x730f95)*0.01);if(_0x3ddb79[_0xbe3b65(0x202)](/(?:VAR|VARIABLE) (\d+)/i))return $gameVariables[_0xbe3b65(0x204)](Number(RegExp['$1']));if(_0x3ddb79[_0xbe3b65(0x202)](/TEAM ALIVE MEMBERS/i))return _0x2627b6['friendsUnit']()[_0xbe3b65(0x246)]()[_0xbe3b65(0x2e0)];if(_0x3ddb79[_0xbe3b65(0x202)](/TEAM DEAD MEMBERS/i))return _0x2627b6['friendsUnit']()[_0xbe3b65(0x33f)]()['length'];if(_0x3ddb79[_0xbe3b65(0x202)](/ELEMENT (\d+) RATE/i)){if(_0xbe3b65(0x281)!==_0xbe3b65(0x281)){if(_0x2f7980&&_0x34ec45['tp']>_0x3f69da['tp'])_0x55f420=_0x28a93e;if(_0x35ef79&&_0x204055['tp']<_0x446fc8['tp'])_0x236931=_0x376f58;}else{const _0x154d08=Number(RegExp['$1']);return this['elementKnowledgeRate'](_0x17d7ca,_0x47ca98,_0x2627b6,_0x154d08);}}else{if(_0x3ddb79['match'](/ELEMENT (.*) RATE/i)){if(_0xbe3b65(0x1d6)!==_0xbe3b65(0x1d6))return _0x239923(_0x550b3f['$1'])[_0xbe3b65(0x375)](/[\r\n]+/)[_0xbe3b65(0x294)]('');else{const _0x409d1d=DataManager[_0xbe3b65(0x28b)](String(RegExp['$1']));return this[_0xbe3b65(0x363)](_0x17d7ca,_0x47ca98,_0x2627b6,_0x409d1d);}}else{if(_0x3ddb79['match'](/(.*) ELEMENT RATE/i)){const _0x2819d1=DataManager['getElementIdWithName'](String(RegExp['$1']));return this[_0xbe3b65(0x363)](_0x17d7ca,_0x47ca98,_0x2627b6,_0x2819d1);}}}if(_0x3ddb79[_0xbe3b65(0x202)](/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:LEVEL|STACK|STACKS)/i)){const _0x454f93=_0x3ad8f8[_0xbe3b65(0x359)](String(RegExp['$1'])[_0xbe3b65(0x2f0)]()['trim']()),_0x51facb=String(RegExp['$2'])[_0xbe3b65(0x2ce)]()[_0xbe3b65(0x1bb)]();return _0x2627b6['buff'](_0x454f93)*(_0x51facb===_0xbe3b65(0x35e)?0x1:-0x1);}if(_0x3ddb79['match'](/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:TURN|TURNS)/i)){const _0x525325=_0x3ad8f8[_0xbe3b65(0x359)](String(RegExp['$1'])[_0xbe3b65(0x2f0)]()[_0xbe3b65(0x1bb)]()),_0x14a42f=String(RegExp['$2'])[_0xbe3b65(0x2ce)]()[_0xbe3b65(0x1bb)]();if(_0x14a42f===_0xbe3b65(0x35e)&&_0x2627b6[_0xbe3b65(0x374)](_0x525325)){if('sPmxy'!==_0xbe3b65(0x31a)){const _0x446a8=_0x17a4fe['indexOf'](_0x112c31(_0x14e23c['$2'])[_0xbe3b65(0x2f0)]()[_0xbe3b65(0x1bb)]()),_0x114e44=_0x4b6cb5(_0x12a5a9['$3'])[_0xbe3b65(0x2ce)]()[_0xbe3b65(0x1bb)](),_0x379c43=_0x58c7e4(_0x2376cb['$1'])[_0xbe3b65(0x202)](/(?:USER|SUBJECT)/i)?_0x3e105e:_0x302cc5,_0x5279bc=_0xbe3b65(0x344)[_0xbe3b65(0x2f2)](_0x114e44[_0xbe3b65(0x24e)](0x0)['toUpperCase']()+_0x114e44['slice'](0x1));return _0x379c43[_0x5279bc](_0x446a8);}else return _0x2627b6[_0xbe3b65(0x348)][_0x525325];}else{if(_0x14a42f===_0xbe3b65(0x1d8)&&_0x2627b6['isDebuffAffected'](_0x525325)){if(_0xbe3b65(0x265)===_0xbe3b65(0x1c4)){if(_0x2ee725['match'](/turnCount\(\)/i)){if(_0x2c1598[_0xbe3b65(0x2c5)]()&&!this['_alertTurnCount']){let _0x3b17bc=_0xbe3b65(0x2c2);_0x3b17bc+=_0x55c03a+'\x0a\x0a',_0x3b17bc+='The\x20reason\x20is\x20due\x20to\x20the\x20turnCount()\x20function.\x0a',_0x3b17bc+=_0xbe3b65(0x2bd),_0xf8d693(_0x3b17bc),this[_0xbe3b65(0x1d7)]=!![];}return![];}}else return _0x2627b6[_0xbe3b65(0x348)][_0x525325];}}return 0x0;}if(_0x3ddb79['match'](/STATE (\d+) (?:TURN|TURNS)/i)){const _0x1b6743=Number(RegExp['$1']);if(_0x2627b6[_0xbe3b65(0x20a)](_0x1b6743)){if(_0xbe3b65(0x1c0)===_0xbe3b65(0x1c0)){const _0x42add4=$dataStates[_0x1b6743];if(_0x42add4&&_0x42add4[_0xbe3b65(0x2b6)]===0x0)return Number['MAX_SAFE_INTEGER'];else{if(_0xbe3b65(0x2d7)===_0xbe3b65(0x2d3)){const _0x27173d=_0x105113(_0x3f700c['$1']);_0x27173d<_0xf21622?(_0x5d669a('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0xbe3b65(0x2f2)](_0x5316b2,_0x27173d,_0x4bf8f3)),_0x117c6a[_0xbe3b65(0x1df)]()):_0x10b4b2=_0x5bf1d8[_0xbe3b65(0x2e3)](_0x27173d,_0x56eb7a);}else return _0x2627b6[_0xbe3b65(0x2b2)][_0x1b6743]||0x0;}}else return _0x1a286c[_0xbe3b65(0x2c7)](_0x342bba);}else return _0x2627b6[_0xbe3b65(0x2e4)]()['includes']($dataStates[_0x1b6743])?Number[_0xbe3b65(0x301)]:0x0;}else{if(_0x3ddb79[_0xbe3b65(0x202)](/STATE (.*) (?:TURN|TURNS)/i)){if(_0xbe3b65(0x23e)!==_0xbe3b65(0x23e)){if(_0x7e4015[_0xbe3b65(0x32f)]['match'](_0x146d44['_regexp'][_0xbe3b65(0x23b)]))return[];else return _0x1648ba[_0xbe3b65(0x32f)][_0xbe3b65(0x202)](_0x35f81d[_0xbe3b65(0x223)]['anyCondition'])?_0x4f0083(_0x2128ba['$1'])[_0xbe3b65(0x375)](/[\r\n]+/)[_0xbe3b65(0x294)](''):this[_0xbe3b65(0x28c)](_0x42b79a);}else{const _0xe1391e=DataManager[_0xbe3b65(0x28f)](RegExp['$1']);if(_0x2627b6[_0xbe3b65(0x20a)](_0xe1391e)){const _0x2ebbec=$dataStates[_0xe1391e];return _0x2ebbec&&_0x2ebbec[_0xbe3b65(0x2b6)]===0x0?Number[_0xbe3b65(0x301)]:_0x2627b6['_stateTurns'][_0xe1391e]||0x0;}else{if(_0x2627b6[_0xbe3b65(0x2e4)]()[_0xbe3b65(0x219)]($dataStates[_0xe1391e]))return Number['MAX_SAFE_INTEGER'];else{if('LrMNe'===_0xbe3b65(0x1ed))return 0x0;else{if(this[_0xbe3b65(0x30f)]()||this[_0xbe3b65(0x2e8)]()){const _0x1755b3=this[_0xbe3b65(0x30f)]()?this[_0xbe3b65(0x29b)]()[_0xbe3b65(0x32f)]:this[_0xbe3b65(0x300)]()[_0xbe3b65(0x32f)];if(_0x1755b3[_0xbe3b65(0x202)](_0x3201bd[_0xbe3b65(0x223)]['aiElementTgr']))return _0x262a4e(_0x4bbc4e['$1']);}return _0x30d569[_0xbe3b65(0x2be)]['Settings']['Weight']['ElementTgrRate'];}}}}}}if(_0x3ddb79[_0xbe3b65(0x202)](/\bHP([%％])/i))return _0x2627b6[_0xbe3b65(0x227)]();else{if(_0x3ddb79[_0xbe3b65(0x202)](/\bMP([%％])/i))return _0x2627b6[_0xbe3b65(0x279)]();else{if(_0x3ddb79[_0xbe3b65(0x202)](/\bTP([%％])/i))return _0xbe3b65(0x29c)!==_0xbe3b65(0x29c)?_0x3b1aff(_0x3d40c9['$1']):_0x2627b6[_0xbe3b65(0x322)]();else{if(_0x3ddb79[_0xbe3b65(0x202)](/\b(?:MAXHP|MAX HP|MHP)\b/i)){if(_0xbe3b65(0x231)!==_0xbe3b65(0x231))_0x42c75d*=0x1-this[_0xbe3b65(0x1f3)]*_0x2e18fd[_0xbe3b65(0x360)];else return _0x2627b6[_0xbe3b65(0x324)];}else{if(_0x3ddb79['match'](/\b(?:MAXMP|MAX MP|MMP)\b/i))return _0x2627b6[_0xbe3b65(0x2f8)];else{if(_0x3ddb79[_0xbe3b65(0x202)](/\b(?:MAXTP|MAX TP|MTP)\b/i))return _0x2627b6['maxTp']();}}}}}if(_0x3ddb79[_0xbe3b65(0x202)](/\b(LEVEL|HP|MP|TP|ATK|DEF|MAT|MDF|AGI|LUK)\b/i)){if(_0xbe3b65(0x288)!==_0xbe3b65(0x1fa))return _0x2627b6[String(RegExp['$1'])[_0xbe3b65(0x2ce)]()[_0xbe3b65(0x1bb)]()];else _0x565c3c=[this['item']()['damage'][_0xbe3b65(0x36d)]];}try{return eval(_0x3ddb79);}catch(_0x391451){if($gameTemp[_0xbe3b65(0x2c5)]()){if(_0xbe3b65(0x232)!==_0xbe3b65(0x232)){if(this[_0xbe3b65(0x30e)]()>0x0){const _0xa940f2=this[_0xbe3b65(0x296)]();if(this['canAttack']())_0xa940f2[_0xbe3b65(0x2a9)](_0xeac903[this['attackSkillId']()]);if(this[_0xbe3b65(0x21d)]())_0xa940f2[_0xbe3b65(0x2a9)](_0x554a79[this[_0xbe3b65(0x1f5)]()]);const _0xfb92a5=this['referenceEnemyForAI'](),_0x44e167=_0x18502e[_0xbe3b65(0x36e)](_0xfb92a5[_0xbe3b65(0x1c1)]);for(const _0x431b8c of _0x44e167){if(_0x431b8c[_0xbe3b65(0x2df)]===0x1)_0x431b8c[_0xbe3b65(0x2df)]=this[_0xbe3b65(0x1cc)]();if(_0x431b8c[_0xbe3b65(0x2df)]===0x2)_0x431b8c[_0xbe3b65(0x2df)]=this[_0xbe3b65(0x1f5)]();}const _0x400dc=_0x44e167[_0xbe3b65(0x2f4)](_0x29bc6f=>this[_0xbe3b65(0x2d6)](_0x29bc6f)&&_0xa940f2[_0xbe3b65(0x219)](_0x2c33b2[_0x29bc6f[_0xbe3b65(0x2df)]]));if(_0x400dc[_0xbe3b65(0x2e0)]>0x0){this[_0xbe3b65(0x22b)](_0x400dc);return;}}_0x469177[_0xbe3b65(0x2be)][_0xbe3b65(0x24f)][_0xbe3b65(0x25c)](this);}else console[_0xbe3b65(0x206)]('AI\x20Manager\x20could\x20not\x20determine\x20this\x20value:\x20%1'['format'](_0x53009a)),console['log'](_0x391451);}return 0x0;}},AIManager[_0x18d82e(0x363)]=function(_0x4b4b0e,_0x385ede,_0x925ba5,_0x18735d){const _0x4eb674=_0x18d82e;if(_0x4b4b0e[_0x4eb674(0x30f)]()===_0x925ba5[_0x4eb674(0x30f)]())return _0x925ba5[_0x4eb674(0x2c7)](_0x18735d);else return _0x925ba5[_0x4eb674(0x341)]()[_0x4eb674(0x331)](_0x18735d,_0x925ba5)?_0x925ba5[_0x4eb674(0x2c7)](_0x18735d):VisuMZ[_0x4eb674(0x2be)][_0x4eb674(0x27e)][_0x4eb674(0x299)][_0x4eb674(0x222)];},AIManager['filterForcedTargeting']=function(_0x10cddd,_0x2cfce7){const _0x7a943f=_0x18d82e;if(!_0x2cfce7)return;if(!_0x2cfce7[_0x7a943f(0x32f)]['match'](AIManager[_0x7a943f(0x223)][_0x7a943f(0x205)]))return;const _0x36589d=String(RegExp['$1'])[_0x7a943f(0x2f0)]()['trim']();let _0x32a670=this[_0x7a943f(0x2fa)](_0x10cddd,_0x36589d);_0x32a670&&(this['_forceValidTargets']=[_0x32a670]);},AIManager[_0x18d82e(0x2fa)]=function(_0x5e6461,_0x4d853f){const _0x17a8b2=_0x18d82e,_0x5aeda0=['MAXHP','MAXMP',_0x17a8b2(0x1b2),_0x17a8b2(0x203),_0x17a8b2(0x361),_0x17a8b2(0x23d),_0x17a8b2(0x367),_0x17a8b2(0x283)],_0x3f74e4=[_0x17a8b2(0x358),_0x17a8b2(0x36c),_0x17a8b2(0x338),'CEV','MEV','MRF',_0x17a8b2(0x342),'HRG',_0x17a8b2(0x226),_0x17a8b2(0x208)],_0x1cfe24=[_0x17a8b2(0x211),_0x17a8b2(0x258),_0x17a8b2(0x229),_0x17a8b2(0x272),_0x17a8b2(0x25e),'TCR',_0x17a8b2(0x1b0),_0x17a8b2(0x298),'FDR',_0x17a8b2(0x2e1)];let _0x36f8e9=null;if(_0x4d853f===_0x17a8b2(0x215)){if(this[_0x17a8b2(0x370)]['includes'](_0x5e6461))return _0x5e6461;}else{if(_0x4d853f==='FIRST'){if(_0x17a8b2(0x210)===_0x17a8b2(0x1e0)){if(!_0x24bdc5)return;if(_0x4cc038['aiStyle']()===_0x17a8b2(0x21a))return;if(!_0xe7932e[_0x17a8b2(0x292)]())return;const _0x2a29ee=_0xe12648[_0x17a8b2(0x313)]();if(!_0x2a29ee)return;if(_0x2a29ee[_0x17a8b2(0x1f9)])return;const _0x5c14c7=_0x2a29ee['item']();if(_0x8da907[_0x17a8b2(0x295)])return;if(_0xdf93d[_0x17a8b2(0x1af)](_0x47c52c,_0x5c14c7)&&_0x474fee[_0x17a8b2(0x378)](_0x5c14c7))return;_0x46f06d[_0x17a8b2(0x282)]();}else return this[_0x17a8b2(0x370)][0x0];}else{if(_0x4d853f===_0x17a8b2(0x2ef))return this[_0x17a8b2(0x370)][this[_0x17a8b2(0x370)]['length']-0x1];else{if(_0x4d853f[_0x17a8b2(0x202)](/(HIGHEST|LOWEST)[ ](.*)/i)){const _0xcc27f8=String(RegExp['$1'])[_0x17a8b2(0x2f0)]()['trim']()===_0x17a8b2(0x213),_0x4a6e2a=!_0xcc27f8,_0x48f81d=String(RegExp['$2'])[_0x17a8b2(0x2f0)]()['trim']();if(_0x5aeda0[_0x17a8b2(0x219)](_0x48f81d)){const _0x4c6891=_0x5aeda0['indexOf'](_0x48f81d);_0x36f8e9=this['_forceValidTargets'][0x0];for(const _0xa1bcb5 of this[_0x17a8b2(0x370)]){if(_0xcc27f8&&_0xa1bcb5[_0x17a8b2(0x20d)](_0x4c6891)>_0x36f8e9[_0x17a8b2(0x20d)](_0x4c6891))_0x36f8e9=_0xa1bcb5;if(_0x4a6e2a&&_0xa1bcb5[_0x17a8b2(0x20d)](_0x4c6891)<_0x36f8e9[_0x17a8b2(0x20d)](_0x4c6891))_0x36f8e9=_0xa1bcb5;}return _0x36f8e9;}if(_0x3f74e4[_0x17a8b2(0x219)](_0x48f81d)){const _0x16353a=_0x3f74e4[_0x17a8b2(0x359)](_0x48f81d);_0x36f8e9=this[_0x17a8b2(0x370)][0x0];for(const _0x3048b4 of this[_0x17a8b2(0x370)]){if(_0xcc27f8&&_0x3048b4['xparam'](_0x16353a)>_0x36f8e9[_0x17a8b2(0x315)](_0x16353a))_0x36f8e9=_0x3048b4;if(_0x4a6e2a&&_0x3048b4[_0x17a8b2(0x315)](_0x16353a)<_0x36f8e9[_0x17a8b2(0x315)](_0x16353a))_0x36f8e9=_0x3048b4;}return _0x36f8e9;}if(_0x1cfe24[_0x17a8b2(0x219)](_0x48f81d)){if('ogrns'!=='VYSTy'){const _0x5d5426=_0x1cfe24[_0x17a8b2(0x359)](_0x48f81d);_0x36f8e9=this[_0x17a8b2(0x370)][0x0];for(const _0x3dca3d of this[_0x17a8b2(0x370)]){if(_0x17a8b2(0x2ba)!==_0x17a8b2(0x284)){if(_0xcc27f8&&_0x3dca3d['sparam'](_0x5d5426)>_0x36f8e9[_0x17a8b2(0x24d)](_0x5d5426))_0x36f8e9=_0x3dca3d;if(_0x4a6e2a&&_0x3dca3d[_0x17a8b2(0x24d)](_0x5d5426)<_0x36f8e9[_0x17a8b2(0x24d)](_0x5d5426))_0x36f8e9=_0x3dca3d;}else _0x2a0d00['filterForcedTargeting'](this[_0x17a8b2(0x1be)](),this[_0x17a8b2(0x26a)]());}return _0x36f8e9;}else{const _0x5c3411=this[_0x17a8b2(0x1be)](),_0x22daf6=this[_0x17a8b2(0x26a)]();let _0x25e9b8=_0x259853[_0x17a8b2(0x2be)][_0x17a8b2(0x235)][_0x17a8b2(0x25c)](this);if(_0x5c3411[_0x17a8b2(0x292)]()&&_0x330b04[_0x17a8b2(0x1af)](_0x5c3411,_0x22daf6)){let _0x1e22d1=_0x3a9800[_0x17a8b2(0x27c)](_0x5c3411,_0x22daf6);_0x25e9b8=_0x25e9b8['filter'](_0x3b5b7e=>_0x1e22d1[_0x17a8b2(0x219)](_0x3b5b7e));}return _0x25e9b8;}}if(_0x48f81d==='HP'){_0x36f8e9=this[_0x17a8b2(0x370)][0x0];for(const _0x246cc4 of this['_forceValidTargets']){if(_0xcc27f8&&_0x246cc4['hp']>_0x36f8e9['hp'])_0x36f8e9=_0x246cc4;if(_0x4a6e2a&&_0x246cc4['hp']<_0x36f8e9['hp'])_0x36f8e9=_0x246cc4;}return _0x36f8e9;}if(_0x48f81d===_0x17a8b2(0x305)){if(_0x17a8b2(0x366)!==_0x17a8b2(0x366))this[_0x17a8b2(0x2a6)](this[_0x17a8b2(0x26f)]);else{_0x36f8e9=this[_0x17a8b2(0x370)][0x0];for(const _0x15c18b of this[_0x17a8b2(0x370)]){if(_0x17a8b2(0x286)!==_0x17a8b2(0x26e)){if(_0xcc27f8&&_0x15c18b[_0x17a8b2(0x227)]()>_0x36f8e9[_0x17a8b2(0x227)]())_0x36f8e9=_0x15c18b;if(_0x4a6e2a&&_0x15c18b['hpRate']()<_0x36f8e9[_0x17a8b2(0x227)]())_0x36f8e9=_0x15c18b;}else{const _0x3e1cd5=_0x25c512[_0x387e8f(_0xa2a633['$2'])],_0xe87c4d=_0x520a4b(_0xe2894a['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x29c857:_0x50acdc;return _0xe87c4d[_0x17a8b2(0x2e4)]()['includes'](_0x3e1cd5);}}return _0x36f8e9;}}if(_0x48f81d==='MP'){_0x36f8e9=this[_0x17a8b2(0x370)][0x0];for(const _0x4acdff of this[_0x17a8b2(0x370)]){if(_0xcc27f8&&_0x4acdff['mp']>_0x36f8e9['mp'])_0x36f8e9=_0x4acdff;if(_0x4a6e2a&&_0x4acdff['mp']<_0x36f8e9['mp'])_0x36f8e9=_0x4acdff;}return _0x36f8e9;}if(_0x48f81d==='MP%'){if('WmlxN'!==_0x17a8b2(0x31c)){if(!_0x33f53b)return;if(!_0x558390[_0x17a8b2(0x32f)]['match'](_0x1a5727[_0x17a8b2(0x223)][_0x17a8b2(0x205)]))return;const _0x4720ab=_0x3476fd(_0x5940ee['$1'])[_0x17a8b2(0x2f0)]()[_0x17a8b2(0x1bb)]();let _0x2fc29f=this[_0x17a8b2(0x2fa)](_0x22811f,_0x4720ab);_0x2fc29f&&(this[_0x17a8b2(0x370)]=[_0x2fc29f]);}else{_0x36f8e9=this[_0x17a8b2(0x370)][0x0];for(const _0x12038c of this['_forceValidTargets']){if('tNJlb'!==_0x17a8b2(0x291))return _0x4b0c69[_0x17a8b2(0x324)];else{if(_0xcc27f8&&_0x12038c[_0x17a8b2(0x279)]()>_0x36f8e9['mpRate']())_0x36f8e9=_0x12038c;if(_0x4a6e2a&&_0x12038c[_0x17a8b2(0x279)]()<_0x36f8e9[_0x17a8b2(0x279)]())_0x36f8e9=_0x12038c;}}return _0x36f8e9;}}if(_0x48f81d==='TP'){if(_0x17a8b2(0x2eb)===_0x17a8b2(0x280))return _0x3bd540['prototype']['meetsTurnCondition']['call'](this,_0x464700,_0x38f01e);else{_0x36f8e9=this['_forceValidTargets'][0x0];for(const _0x7d3b94 of this[_0x17a8b2(0x370)]){if(_0x17a8b2(0x259)===_0x17a8b2(0x259)){if(_0xcc27f8&&_0x7d3b94['tp']>_0x36f8e9['tp'])_0x36f8e9=_0x7d3b94;if(_0x4a6e2a&&_0x7d3b94['tp']<_0x36f8e9['tp'])_0x36f8e9=_0x7d3b94;}else{let _0x15861c=_0x9d156e['randomInt'](_0x5dd2e5);for(const _0x29f1d9 of _0x289d31){_0x15861c-=_0x29f1d9[_0x17a8b2(0x30a)]-_0x288f4b;if(_0x15861c<=0x0)return _0x29f1d9;}}}return _0x36f8e9;}}if(_0x48f81d===_0x17a8b2(0x1c7)){if(_0x17a8b2(0x243)===_0x17a8b2(0x2c3))_0x2b30a3[_0x17a8b2(0x331)](_0x4bca28,this)&&(_0x5bd0c6*=this[_0x17a8b2(0x2c7)](_0x2b9fcb)*_0x3d4423[_0x17a8b2(0x251)]);else{_0x36f8e9=this[_0x17a8b2(0x370)][0x0];for(const _0x146ce1 of this['_forceValidTargets']){if(_0x17a8b2(0x1fe)!=='KXGjC'){if(_0xcc27f8&&_0x146ce1['tpRate']()>_0x36f8e9[_0x17a8b2(0x322)]())_0x36f8e9=_0x146ce1;if(_0x4a6e2a&&_0x146ce1[_0x17a8b2(0x322)]()<_0x36f8e9[_0x17a8b2(0x322)]())_0x36f8e9=_0x146ce1;}else{let _0x46c1e0=_0x45d8ec[_0x17a8b2(0x2be)][_0x17a8b2(0x27b)][_0x17a8b2(0x25c)](this);if(this['_applyAIForcedTargetFilters']){const _0x312822=_0x252ea5[_0x17a8b2(0x241)]();_0x46c1e0=_0x46c1e0['filter'](_0x1246e7=>_0x312822[_0x17a8b2(0x219)](_0x1246e7));}return _0x46c1e0;}}return _0x36f8e9;}}if(_0x48f81d==='MAXTP'){_0x36f8e9=this['_forceValidTargets'][0x0];for(const _0x160e21 of this['_forceValidTargets']){if(_0xcc27f8&&_0x160e21[_0x17a8b2(0x28a)]()>_0x36f8e9[_0x17a8b2(0x28a)]())_0x36f8e9=_0x160e21;if(_0x4a6e2a&&_0x160e21[_0x17a8b2(0x28a)]()<_0x36f8e9[_0x17a8b2(0x28a)]())_0x36f8e9=_0x160e21;}return _0x36f8e9;}if(_0x48f81d===_0x17a8b2(0x319)){if(_0x17a8b2(0x23a)!=='jBqhC'){const _0xb12674=_0x102855[_0x1e7d25[_0x17a8b2(0x28f)](_0x2fb326['$2'])],_0x27cfe7=_0xba51e8(_0x4a97c6['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x521e3b:_0x3009a0;return _0x27cfe7[_0x17a8b2(0x2e4)]()[_0x17a8b2(0x219)](_0xb12674);}else{_0x36f8e9=this[_0x17a8b2(0x370)][0x0];for(const _0x267b39 of this[_0x17a8b2(0x370)]){if(_0xcc27f8&&(_0x267b39[_0x17a8b2(0x1f1)]||0x0)>(_0x36f8e9[_0x17a8b2(0x1f1)]||0x0))_0x36f8e9=_0x267b39;if(_0x4a6e2a&&(_0x267b39[_0x17a8b2(0x1f1)]||0x0)<(_0x36f8e9['level']||0x0))_0x36f8e9=_0x267b39;}return _0x36f8e9;}}if(_0x48f81d===_0x17a8b2(0x2a3)&&Imported[_0x17a8b2(0x26d)]){_0x36f8e9=this[_0x17a8b2(0x370)][0x0];for(const _0x96609 of this[_0x17a8b2(0x370)]){if(_0x17a8b2(0x2c0)==='JGoxW'){if(_0xcc27f8&&_0x96609['states']()[_0x17a8b2(0x2e0)]>_0x36f8e9[_0x17a8b2(0x2e4)]()[_0x17a8b2(0x2e0)])_0x36f8e9=_0x96609;if(_0x4a6e2a&&_0x96609[_0x17a8b2(0x2e4)]()[_0x17a8b2(0x2e0)]<_0x36f8e9[_0x17a8b2(0x2e4)]()['length'])_0x36f8e9=_0x96609;}else _0x420503(_0x17a8b2(0x1cb)['format'](_0x18ca06,_0x52bb5f,_0x1be1c8)),_0x143dfe[_0x17a8b2(0x1df)]();}return _0x36f8e9;}if(_0x48f81d===_0x17a8b2(0x1e3)&&Imported[_0x17a8b2(0x26d)]){if(_0x17a8b2(0x1d1)!==_0x17a8b2(0x239)){_0x36f8e9=this[_0x17a8b2(0x370)][0x0];const _0x35738b='POSITIVE';for(const _0x1dfa2d of this[_0x17a8b2(0x370)]){if(_0xcc27f8&&_0x1dfa2d[_0x17a8b2(0x1ba)](_0x35738b)[_0x17a8b2(0x2e0)]>_0x36f8e9['statesByCategory'](_0x35738b)[_0x17a8b2(0x2e0)])_0x36f8e9=_0x1dfa2d;if(_0x4a6e2a&&_0x1dfa2d[_0x17a8b2(0x1ba)](_0x35738b)['length']<_0x36f8e9[_0x17a8b2(0x1ba)](_0x35738b)[_0x17a8b2(0x2e0)])_0x36f8e9=_0x1dfa2d;}return _0x36f8e9;}else{_0x3c5c57=this[_0x17a8b2(0x370)][0x0];for(const _0x4fa91e of this['_forceValidTargets']){if(_0x54fe49&&_0x4fa91e['mp']>_0x592397['mp'])_0x20005a=_0x4fa91e;if(_0x554827&&_0x4fa91e['mp']<_0x33e66a['mp'])_0x667882=_0x4fa91e;}return _0x3fd125;}}if(_0x48f81d===_0x17a8b2(0x1b3)&&Imported[_0x17a8b2(0x26d)]){_0x36f8e9=this[_0x17a8b2(0x370)][0x0];const _0x25e679=_0x17a8b2(0x21f);for(const _0x3121ab of this['_forceValidTargets']){if(_0x17a8b2(0x22e)==='dUQIm'){if(this['_aiTgrInfluence']===_0x4b5c44)this[_0x17a8b2(0x2db)]();return this[_0x17a8b2(0x36b)];}else{if(_0xcc27f8&&_0x3121ab['statesByCategory'](_0x25e679)['length']>_0x36f8e9[_0x17a8b2(0x1ba)](_0x25e679)[_0x17a8b2(0x2e0)])_0x36f8e9=_0x3121ab;if(_0x4a6e2a&&_0x3121ab[_0x17a8b2(0x1ba)](_0x25e679)[_0x17a8b2(0x2e0)]<_0x36f8e9[_0x17a8b2(0x1ba)](_0x25e679)[_0x17a8b2(0x2e0)])_0x36f8e9=_0x3121ab;}}return _0x36f8e9;}}}}}return null;},DataManager['getElementIdWithName']=function(_0x36c9a6){const _0x3a71f4=_0x18d82e;_0x36c9a6=_0x36c9a6[_0x3a71f4(0x2f0)]()['trim'](),this[_0x3a71f4(0x2c1)]=this[_0x3a71f4(0x2c1)]||{};if(this[_0x3a71f4(0x2c1)][_0x36c9a6])return this[_0x3a71f4(0x2c1)][_0x36c9a6];let _0x4dba94=0x1;for(const _0x503559 of $dataSystem[_0x3a71f4(0x349)]){if(_0x3a71f4(0x2a8)===_0x3a71f4(0x214)){const _0x595063=this[_0x3a71f4(0x300)]()[_0x3a71f4(0x1c1)][_0x3a71f4(0x2f4)](_0x5f336a=>this[_0x3a71f4(0x2d6)](_0x5f336a));_0x595063['length']>0x0?this[_0x3a71f4(0x22b)](_0x595063):this[_0x3a71f4(0x1e2)]();}else{if(!_0x503559)continue;let _0x5655cb=_0x503559[_0x3a71f4(0x2f0)]();_0x5655cb=_0x5655cb[_0x3a71f4(0x1e9)](/\x1I\[(\d+)\]/gi,''),_0x5655cb=_0x5655cb['replace'](/\\I\[(\d+)\]/gi,''),this['_elementIDs'][_0x5655cb]=_0x4dba94,_0x4dba94++;}}return this[_0x3a71f4(0x2c1)][_0x36c9a6]||0x0;},DataManager['getStateIdWithName']=function(_0x374453){const _0x186e04=_0x18d82e;_0x374453=_0x374453[_0x186e04(0x2f0)]()[_0x186e04(0x1bb)](),this[_0x186e04(0x2ca)]=this[_0x186e04(0x2ca)]||{};if(this[_0x186e04(0x2ca)][_0x374453])return this[_0x186e04(0x2ca)][_0x374453];for(const _0x376e15 of $dataStates){if(!_0x376e15)continue;this[_0x186e04(0x2ca)][_0x376e15[_0x186e04(0x252)]['toUpperCase']()[_0x186e04(0x1bb)]()]=_0x376e15['id'];}return this['_stateIDs'][_0x374453]||0x0;},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x33c)]=BattleManager[_0x18d82e(0x253)],BattleManager['getNextSubject']=function(){const _0x5681a0=_0x18d82e,_0x287910=VisuMZ['BattleAI'][_0x5681a0(0x33c)][_0x5681a0(0x25c)](this);if(_0x287910&&_0x287910['isDetermineActionByAI']()){if(_0x5681a0(0x2d5)!==_0x5681a0(0x21b)){const _0x491cd9=_0x287910[_0x5681a0(0x313)]();if(!_0x491cd9||_0x491cd9&&!_0x491cd9[_0x5681a0(0x26a)]())_0x287910[_0x5681a0(0x352)]();else{if(VisuMZ[_0x5681a0(0x2be)][_0x5681a0(0x27e)][_0x5681a0(0x299)]['OnSpotAI']){if(_0x491cd9&&_0x491cd9[_0x5681a0(0x1f9)])return _0x287910;_0x287910[_0x5681a0(0x352)]();}}}else this[_0x5681a0(0x1ea)](_0x1a4d04);}return _0x287910;},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x323)]=BattleManager[_0x18d82e(0x32b)],BattleManager[_0x18d82e(0x32b)]=function(){const _0x3f5bb3=_0x18d82e;this[_0x3f5bb3(0x2e6)](),this['_subject'][_0x3f5bb3(0x313)]()?_0x3f5bb3(0x33e)!==_0x3f5bb3(0x33e)?_0x2e41f5=_0x3f2731[_0x3f5bb3(0x26c)]()[_0x3f5bb3(0x33f)]():VisuMZ['BattleAI']['BattleManager_startAction'][_0x3f5bb3(0x25c)](this):this[_0x3f5bb3(0x328)]();},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x326)]=BattleManager['endAction'],BattleManager[_0x18d82e(0x328)]=function(){const _0x18fe42=_0x18d82e;this[_0x18fe42(0x2e6)](),VisuMZ['BattleAI'][_0x18fe42(0x326)]['call'](this);},BattleManager[_0x18d82e(0x2e6)]=function(){const _0x3f4d03=_0x18d82e;this[_0x3f4d03(0x2a6)](this[_0x3f4d03(0x26f)]);},BattleManager['determineTargetActionByAIisStillValid']=function(_0xa4f82){const _0x4a98d1=_0x18d82e;if(!_0xa4f82)return;if(_0xa4f82[_0x4a98d1(0x275)]()===_0x4a98d1(0x21a))return;if(!_0xa4f82[_0x4a98d1(0x292)]())return;const _0x4c662e=_0xa4f82['currentAction']();if(!_0x4c662e)return;if(_0x4c662e[_0x4a98d1(0x1f9)])return;const _0x503ee4=_0x4c662e[_0x4a98d1(0x26a)]();if(_0xa4f82['_bypassAiValidCheck'])return;if(AIManager[_0x4a98d1(0x1af)](_0xa4f82,_0x503ee4)&&_0xa4f82[_0x4a98d1(0x378)](_0x503ee4))return;_0xa4f82['determineNewValidAIAction']();},VisuMZ[_0x18d82e(0x2be)]['Game_Temp_initialize']=Game_Temp[_0x18d82e(0x34e)][_0x18d82e(0x330)],Game_Temp[_0x18d82e(0x34e)][_0x18d82e(0x330)]=function(){const _0x3f8546=_0x18d82e;VisuMZ[_0x3f8546(0x2be)][_0x3f8546(0x24b)][_0x3f8546(0x25c)](this),this['clearAiTgrInfluence']();},Game_Temp[_0x18d82e(0x34e)][_0x18d82e(0x2db)]=function(){this['_aiTgrInfluence']={'action':null,'elementInfluence':![],'elementInfluenceRate':0x0,'elementIds':[],'evaInfluenceRate':0x0,'mevInfluenceRate':0x0};},Game_Temp['prototype'][_0x18d82e(0x25d)]=function(){const _0x15b86c=_0x18d82e;if(this[_0x15b86c(0x36b)]===undefined)this[_0x15b86c(0x2db)]();return this[_0x15b86c(0x36b)];},Game_Temp[_0x18d82e(0x34e)][_0x18d82e(0x269)]=function(_0x4ef562,_0x427dd8){const _0x2d7fa1=_0x18d82e;this[_0x2d7fa1(0x2db)]();const _0x12c278=this[_0x2d7fa1(0x25d)]();_0x12c278[_0x2d7fa1(0x2ae)]=_0x427dd8;if(_0x4ef562[_0x2d7fa1(0x2e9)]()){if(_0x2d7fa1(0x2e5)===_0x2d7fa1(0x2e5)){_0x12c278[_0x2d7fa1(0x20b)]=!![],_0x12c278['elementInfluenceRate']=_0x4ef562[_0x2d7fa1(0x22f)](),_0x12c278[_0x2d7fa1(0x244)]=[];if(Imported[_0x2d7fa1(0x2f9)]){if('SFJjd'==='Vvjzl'){const _0x5b5b95=_0x1def8f(this[_0x2d7fa1(0x275)]())[_0x2d7fa1(0x2ce)]()['trim']();if([_0x2d7fa1(0x21a),_0x2d7fa1(0x29f)][_0x2d7fa1(0x219)](_0x5b5b95))this[_0x2d7fa1(0x31e)](_0x5446e0);else _0x5b5b95===_0x2d7fa1(0x289)?this[_0x2d7fa1(0x1ea)](_0x480fe6):this[_0x2d7fa1(0x34d)](_0x3f2d46);}else _0x12c278[_0x2d7fa1(0x244)]=_0x12c278['elementIds'][_0x2d7fa1(0x2a0)](_0x427dd8['elements']());}else{if(_0x427dd8[_0x2d7fa1(0x26a)]()[_0x2d7fa1(0x1b4)][_0x2d7fa1(0x36d)]<0x0)_0x2d7fa1(0x320)===_0x2d7fa1(0x320)?_0x12c278[_0x2d7fa1(0x244)]=_0x12c278['elementIds'][_0x2d7fa1(0x2a0)](_0x4ef562[_0x2d7fa1(0x1f6)]()):(this[_0x2d7fa1(0x2e6)](),_0x598cc4[_0x2d7fa1(0x2be)]['BattleManager_endAction'][_0x2d7fa1(0x25c)](this));else{if('nGnLq'!==_0x2d7fa1(0x1eb))_0x12c278[_0x2d7fa1(0x244)][_0x2d7fa1(0x2a9)](_0x427dd8[_0x2d7fa1(0x26a)]()[_0x2d7fa1(0x1b4)]['elementId']);else{_0x1447e5=this['_forceValidTargets'][0x0];const _0x5c708a='NEGATIVE';for(const _0x3dfbf2 of this[_0x2d7fa1(0x370)]){if(_0x1cda42&&_0x3dfbf2['statesByCategory'](_0x5c708a)['length']>_0x2fec5c['statesByCategory'](_0x5c708a)[_0x2d7fa1(0x2e0)])_0xf83a32=_0x3dfbf2;if(_0x56acbc&&_0x3dfbf2[_0x2d7fa1(0x1ba)](_0x5c708a)[_0x2d7fa1(0x2e0)]<_0x2a9917[_0x2d7fa1(0x1ba)](_0x5c708a)[_0x2d7fa1(0x2e0)])_0x1b6865=_0x3dfbf2;}return _0x1de493;}}}}else{const _0x4bd2ad=this[_0x2d7fa1(0x30f)]()?this['actor']()[_0x2d7fa1(0x32f)]:this[_0x2d7fa1(0x300)]()[_0x2d7fa1(0x32f)];if(_0x4bd2ad[_0x2d7fa1(0x202)](_0x46ac86['_regexp'][_0x2d7fa1(0x285)]))return![];else{if(_0x4bd2ad[_0x2d7fa1(0x202)](_0x5a0c10[_0x2d7fa1(0x223)][_0x2d7fa1(0x1de)]))return this[_0x2d7fa1(0x238)]()>0x0;}}}if(_0x427dd8[_0x2d7fa1(0x24c)]()&&_0x4ef562[_0x2d7fa1(0x365)]()){if(_0x2d7fa1(0x1ce)===_0x2d7fa1(0x1ce))_0x12c278[_0x2d7fa1(0x33a)]=_0x4ef562[_0x2d7fa1(0x238)]();else return!![];}if(_0x427dd8[_0x2d7fa1(0x1c6)]()&&_0x4ef562[_0x2d7fa1(0x1ee)]()){if(_0x2d7fa1(0x2ac)===_0x2d7fa1(0x212)){if(_0x8a2520&&_0x45ec4b['states']()[_0x2d7fa1(0x2e0)]>_0x1512d1[_0x2d7fa1(0x2e4)]()['length'])_0x32d32d=_0x2ac291;if(_0x4d2ddd&&_0x35b303[_0x2d7fa1(0x2e4)]()[_0x2d7fa1(0x2e0)]<_0x26c2c9[_0x2d7fa1(0x2e4)]()['length'])_0x270c57=_0x1d17f8;}else _0x12c278[_0x2d7fa1(0x360)]=_0x4ef562[_0x2d7fa1(0x350)]();}},VisuMZ[_0x18d82e(0x2be)]['Game_Action_makeTargets']=Game_Action[_0x18d82e(0x34e)][_0x18d82e(0x2ea)],Game_Action[_0x18d82e(0x34e)][_0x18d82e(0x2ea)]=function(){const _0x5b2dd8=_0x18d82e;this[_0x5b2dd8(0x2c9)]()&&this['subject']()[_0x5b2dd8(0x292)]()&&(AIManager[_0x5b2dd8(0x2b1)](this['subject'](),this['item']()),this[_0x5b2dd8(0x209)]()&&AIManager['filterForcedTargeting'](this['subject'](),this[_0x5b2dd8(0x26a)]()));$gameTemp[_0x5b2dd8(0x269)](this['subject'](),this);const _0x409901=VisuMZ[_0x5b2dd8(0x2be)]['Game_Action_makeTargets']['call'](this);return $gameTemp['clearAiTgrInfluence'](),AIManager[_0x5b2dd8(0x2f3)](),_0x409901;},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x235)]=Game_Action[_0x18d82e(0x34e)]['itemTargetCandidates'],Game_Action[_0x18d82e(0x34e)][_0x18d82e(0x1e4)]=function(){const _0x44dccb=_0x18d82e,_0x4dcc7d=this['subject'](),_0x4d80ed=this['item']();let _0x143ee2=VisuMZ[_0x44dccb(0x2be)][_0x44dccb(0x235)][_0x44dccb(0x25c)](this);if(_0x4dcc7d[_0x44dccb(0x292)]()&&AIManager[_0x44dccb(0x1af)](_0x4dcc7d,_0x4d80ed)){if(_0x44dccb(0x263)===_0x44dccb(0x263)){let _0x2cc0f0=AIManager[_0x44dccb(0x27c)](_0x4dcc7d,_0x4d80ed);_0x143ee2=_0x143ee2['filter'](_0x5555a5=>_0x2cc0f0[_0x44dccb(0x219)](_0x5555a5));}else _0x22535b=_0x3607c2['opponentsUnit']()[_0x44dccb(0x246)]();}return _0x143ee2;},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x2ff)]=Game_Action[_0x18d82e(0x34e)][_0x18d82e(0x230)],Game_Action[_0x18d82e(0x34e)][_0x18d82e(0x230)]=function(_0x15825e){const _0x4a6575=_0x18d82e;VisuMZ[_0x4a6575(0x2be)][_0x4a6575(0x2ff)][_0x4a6575(0x25c)](this,_0x15825e),this[_0x4a6575(0x35a)](_0x15825e);},Game_Action[_0x18d82e(0x34e)]['applyBattleAI']=function(_0x59ae53){const _0x15e508=_0x18d82e;if(!_0x59ae53)return;if(this[_0x15e508(0x1be)]()[_0x15e508(0x30f)]()===_0x59ae53[_0x15e508(0x30f)]())return;let _0x4d2ac1=[];if(Imported[_0x15e508(0x2f9)])_0x4d2ac1=this['elements']();else{if(this[_0x15e508(0x26a)]()[_0x15e508(0x1b4)][_0x15e508(0x36d)]<0x0){if(_0x15e508(0x228)===_0x15e508(0x228))_0x4d2ac1=this[_0x15e508(0x1be)]()[_0x15e508(0x1f6)]();else{const _0x146ebb=_0x33de9f[_0x15e508(0x359)](_0x362679);_0x1deb84=this[_0x15e508(0x370)][0x0];for(const _0x3ba7c4 of this[_0x15e508(0x370)]){if(_0x1cbe51&&_0x3ba7c4['sparam'](_0x146ebb)>_0xf3af1d[_0x15e508(0x24d)](_0x146ebb))_0x8a7a52=_0x3ba7c4;if(_0x4041ba&&_0x3ba7c4['sparam'](_0x146ebb)<_0x48bf67[_0x15e508(0x24d)](_0x146ebb))_0x3460aa=_0x3ba7c4;}return _0x11cb29;}}else _0x4d2ac1=[this[_0x15e508(0x26a)]()[_0x15e508(0x1b4)]['elementId']];}_0x59ae53[_0x15e508(0x2af)](_0x4d2ac1,this[_0x15e508(0x24c)](),this[_0x15e508(0x1c6)]());},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x30d)]=Game_BattlerBase[_0x18d82e(0x34e)][_0x18d82e(0x24d)],Game_BattlerBase[_0x18d82e(0x34e)][_0x18d82e(0x24d)]=function(_0x4f3c07){const _0x4a3a59=_0x18d82e;let _0x136d60=VisuMZ[_0x4a3a59(0x2be)][_0x4a3a59(0x30d)]['call'](this,_0x4f3c07);if(_0x4f3c07===0x0){if('CGNLb'===_0x4a3a59(0x310)){const _0x427261=this[_0x4a3a59(0x248)]()[_0x4a3a59(0x32f)];if(_0x427261[_0x4a3a59(0x202)](/<NO REFERENCE AI>/i))return null;else{if(_0x427261['match'](/<REFERENCE AI: ENEMY (\d+)>/i))return _0x54335d[_0x30a111(_0x4e8cdf['$1'])];else{if(_0x427261['match'](/<REFERENCE AI: (.*)>/i))return _0x32da1c[_0x3e6566[_0x4a3a59(0x2bc)](_0x5b652f(_0x374225['$1']))];}}return _0x323c55[_0x575c1f[_0x4a3a59(0x2be)][_0x4a3a59(0x27e)][_0x4a3a59(0x299)][_0x4a3a59(0x368)]];}else _0x136d60*=this[_0x4a3a59(0x274)]();}return _0x136d60;},Game_BattlerBase[_0x18d82e(0x34e)][_0x18d82e(0x274)]=function(){const _0x31d55a=_0x18d82e,_0xe7f45f=$gameTemp[_0x31d55a(0x25d)](),_0xd5049c=this[_0x31d55a(0x341)]();if(Imported[_0x31d55a(0x22d)]){if(_0xe7f45f['action']&&_0xe7f45f[_0x31d55a(0x2ae)][_0x31d55a(0x304)]())return 0x1;}let _0x19c2ab=0x1;if(_0xe7f45f[_0x31d55a(0x20b)]){if(_0x31d55a(0x29e)===_0x31d55a(0x1f7)){if(_0x2c47e1&&_0x5f00cc[_0x31d55a(0x227)]()>_0x54afc1['hpRate']())_0x369bc3=_0x56471c;if(_0x22cbee&&_0x13faab['hpRate']()<_0x2614fd['hpRate']())_0x581515=_0x388a95;}else for(const _0x4eafef of _0xe7f45f[_0x31d55a(0x244)]){_0xd5049c['hasElementAIKnowledge'](_0x4eafef,this)&&(_0x19c2ab*=this['elementRate'](_0x4eafef)*_0xe7f45f[_0x31d55a(0x251)]);}}if(_0xd5049c[_0x31d55a(0x2a2)](_0x31d55a(0x1d2),this)){if(_0x31d55a(0x217)===_0x31d55a(0x373)){if(this[_0x31d55a(0x30f)]()||this['isEnemy']()){const _0x2f48a6=this[_0x31d55a(0x30f)]()?this['actor']()[_0x31d55a(0x32f)]:this[_0x31d55a(0x300)]()[_0x31d55a(0x32f)];if(_0x2f48a6['match'](_0xa77962[_0x31d55a(0x223)]['bypassElementTgr']))return![];else{if(_0x2f48a6['match'](_0x530333[_0x31d55a(0x223)][_0x31d55a(0x343)]))return this[_0x31d55a(0x22f)]()>0x0;}}return _0x347483['BattleAI'][_0x31d55a(0x27e)][_0x31d55a(0x2d8)]['ElementTgr'];}else _0x19c2ab*=0x1-this[_0x31d55a(0x1d2)]*_0xe7f45f['evaInfluenceRate'];}if(_0xd5049c['hasXParamAIKnowledge'](_0x31d55a(0x1f3),this)){if(_0x31d55a(0x20f)!==_0x31d55a(0x36a))_0x19c2ab*=0x1-this[_0x31d55a(0x1f3)]*_0xe7f45f[_0x31d55a(0x360)];else{if(_0xeed0b7[_0x31d55a(0x30f)]()===_0x3543a4['isActor']())return _0x57da8f[_0x31d55a(0x2c7)](_0x43b514);else return _0x3c6091[_0x31d55a(0x341)]()[_0x31d55a(0x331)](_0x27e264,_0x21dc02)?_0x4de276['elementRate'](_0x374b67):_0x2c215b['BattleAI'][_0x31d55a(0x27e)][_0x31d55a(0x299)][_0x31d55a(0x222)];}}return _0x19c2ab[_0x31d55a(0x2d2)](0.001,0x3e8);},Game_BattlerBase[_0x18d82e(0x34e)][_0x18d82e(0x275)]=function(){const _0x50385e=_0x18d82e;return _0x50385e(0x2b4);},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x221)]=Game_Battler[_0x18d82e(0x34e)]['isChanting'],Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x369)]=function(){const _0x5af641=_0x18d82e;if(this[_0x5af641(0x292)]()){if('tvwkA'==='tvwkA'){const _0x36a89c=VisuMZ[_0x5af641(0x2be)][_0x5af641(0x27e)][_0x5af641(0x299)];if(_0x36a89c[_0x5af641(0x26b)]&&_0x36a89c[_0x5af641(0x314)])return![];}else{let _0x53bc3f='The\x20following\x20line\x20is\x20not\x20supported\x20by\x20Battle\x20A.I.:\x0a\x0a';_0x53bc3f+=_0x5ab2c9+'\x0a\x0a',_0x53bc3f+='The\x20reason\x20is\x20due\x20to\x20the\x20turnCount()\x20function.\x0a',_0x53bc3f+='For\x20more\x20information,\x20view\x20the\x20help\x20file.',_0x552f31(_0x53bc3f),this[_0x5af641(0x1d7)]=!![];}}return VisuMZ[_0x5af641(0x2be)][_0x5af641(0x221)]['call'](this);},Game_Battler[_0x18d82e(0x34e)]['isDetermineActionByAI']=function(){const _0x5519d2=_0x18d82e;if(this[_0x5519d2(0x311)]())return![];return!![];},Game_Battler['prototype']['determineNewValidAIAction']=function(){},Game_Battler['prototype'][_0x18d82e(0x2e9)]=function(){const _0xe78781=_0x18d82e;if(this['isActor']()||this[_0xe78781(0x2e8)]()){const _0x381a78=this[_0xe78781(0x30f)]()?this[_0xe78781(0x29b)]()[_0xe78781(0x32f)]:this[_0xe78781(0x300)]()['note'];if(_0x381a78[_0xe78781(0x202)](AIManager[_0xe78781(0x223)][_0xe78781(0x35f)])){if(_0xe78781(0x201)===_0xe78781(0x201))return![];else this[_0xe78781(0x370)]=[];}else{if(_0x381a78[_0xe78781(0x202)](AIManager[_0xe78781(0x223)][_0xe78781(0x343)]))return this[_0xe78781(0x22f)]()>0x0;}}return VisuMZ['BattleAI']['Settings'][_0xe78781(0x2d8)][_0xe78781(0x371)];},Game_Battler[_0x18d82e(0x34e)]['aiApplyElementalTgrInfluenceRate']=function(){const _0x2d89fc=_0x18d82e;if(this[_0x2d89fc(0x30f)]()||this[_0x2d89fc(0x2e8)]()){const _0x164a3c=this[_0x2d89fc(0x30f)]()?this[_0x2d89fc(0x29b)]()[_0x2d89fc(0x32f)]:this[_0x2d89fc(0x300)]()[_0x2d89fc(0x32f)];if(_0x164a3c[_0x2d89fc(0x202)](AIManager[_0x2d89fc(0x223)]['aiElementTgr'])){if('zGMSB'===_0x2d89fc(0x254))return eval(RegExp['$1']);else{const _0x164f2f=_0x319553['forcedTargets']();_0x120329=_0x368e39[_0x2d89fc(0x2f4)](_0x510ee1=>_0x164f2f[_0x2d89fc(0x219)](_0x510ee1));}}}return VisuMZ[_0x2d89fc(0x2be)][_0x2d89fc(0x27e)][_0x2d89fc(0x2d8)][_0x2d89fc(0x36f)];},Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x365)]=function(){const _0x2c203a=_0x18d82e;if(this[_0x2c203a(0x30f)]()||this[_0x2c203a(0x2e8)]()){const _0x2db1cc=this[_0x2c203a(0x30f)]()?this[_0x2c203a(0x29b)]()['note']:this[_0x2c203a(0x300)]()['note'];if(_0x2db1cc[_0x2c203a(0x202)](AIManager[_0x2c203a(0x223)][_0x2c203a(0x285)]))return![];else{if(_0x2db1cc['match'](AIManager['_regexp'][_0x2c203a(0x1de)]))return this['aiApplyEvaTgrInfluenceRate']()>0x0;}}return VisuMZ[_0x2c203a(0x2be)][_0x2c203a(0x27e)][_0x2c203a(0x2d8)][_0x2c203a(0x1fb)];},Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x238)]=function(){const _0x7c08d0=_0x18d82e;if(this[_0x7c08d0(0x30f)]()||this[_0x7c08d0(0x2e8)]()){if(_0x7c08d0(0x1fc)!==_0x7c08d0(0x1fd)){const _0x543eaa=this['isActor']()?this[_0x7c08d0(0x29b)]()[_0x7c08d0(0x32f)]:this[_0x7c08d0(0x300)]()['note'];if(_0x543eaa[_0x7c08d0(0x202)](AIManager['_regexp'][_0x7c08d0(0x1de)])){if(_0x7c08d0(0x1c3)===_0x7c08d0(0x1c3))return eval(RegExp['$1']);else{if(_0x3c4329&&_0x4f8b04[_0x7c08d0(0x20d)](_0x14eb5c)>_0x43bb79[_0x7c08d0(0x20d)](_0x3914b7))_0x1b8033=_0x1f3125;if(_0xd3d7a2&&_0xf18ac4[_0x7c08d0(0x20d)](_0x59801e)<_0x16c8c4[_0x7c08d0(0x20d)](_0x3e9442))_0x23e275=_0xd3f6f9;}}}else _0x2fcfff='HpRecover%1'['format'](_0x4f6e56),_0x3b09ce=_0x3328c6[_0x1b9b22],_0x4d186f=_0x4e12d6[_0x7c08d0(0x2a0)](_0x109e6b[_0x7c08d0(0x375)](/[\r\n]+/)[_0x7c08d0(0x294)](''));}return VisuMZ['BattleAI']['Settings'][_0x7c08d0(0x2d8)]['EvaTgrRate'];},Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x1ee)]=function(){const _0x4bd250=_0x18d82e;if(this[_0x4bd250(0x30f)]()||this[_0x4bd250(0x2e8)]()){const _0x3f89b6=this[_0x4bd250(0x30f)]()?this['actor']()[_0x4bd250(0x32f)]:this['enemy']()['note'];if(_0x3f89b6[_0x4bd250(0x202)](AIManager[_0x4bd250(0x223)][_0x4bd250(0x236)]))return![];else{if(_0x3f89b6[_0x4bd250(0x202)](AIManager[_0x4bd250(0x223)][_0x4bd250(0x2b8)])){if(_0x4bd250(0x345)==='xcpCH')return this[_0x4bd250(0x350)]()>0x0;else{if(_0x321f9d&&_0x341557['mpRate']()>_0x4a2080['mpRate']())_0x544c4f=_0x282394;if(_0x4592d2&&_0x33b167[_0x4bd250(0x279)]()<_0x135624[_0x4bd250(0x279)]())_0x7bef10=_0x15b06a;}}}}return VisuMZ['BattleAI'][_0x4bd250(0x27e)][_0x4bd250(0x2d8)][_0x4bd250(0x1fb)];},Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x350)]=function(){const _0x417288=_0x18d82e;if(this[_0x417288(0x30f)]()||this[_0x417288(0x2e8)]()){const _0x412948=this[_0x417288(0x30f)]()?this[_0x417288(0x29b)]()[_0x417288(0x32f)]:this['enemy']()[_0x417288(0x32f)];if(_0x412948[_0x417288(0x202)](AIManager[_0x417288(0x223)][_0x417288(0x2b8)])){if(_0x417288(0x1f0)===_0x417288(0x2d1)){const _0x259d07=this[_0x417288(0x30f)]()?this[_0x417288(0x29b)]()[_0x417288(0x32f)]:this[_0x417288(0x300)]()[_0x417288(0x32f)];if(_0x259d07[_0x417288(0x202)](_0xd7ab88[_0x417288(0x223)]['aiRatingVariance']))return _0xfbe507(_0x438aad['$1'])[_0x417288(0x2d2)](0x0,0x9);else{if(this['isActor']())return _0xa18ee6['ActorRatingVariance'][_0x417288(0x2d2)](0x0,0x9);else{if(this[_0x417288(0x2e8)]())return _0x2ce5af['EnemyRatingVariance'][_0x417288(0x2d2)](0x0,0x9);}}}else return eval(RegExp['$1']);}}return VisuMZ[_0x417288(0x2be)][_0x417288(0x27e)][_0x417288(0x2d8)][_0x417288(0x27a)];},Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x2d4)]=function(){const _0x15d5d0=_0x18d82e,_0x41a13a=VisuMZ['BattleAI']['Settings']['General'];if(this[_0x15d5d0(0x30f)]()||this['isEnemy']()){const _0x1e9634=this[_0x15d5d0(0x30f)]()?this['actor']()[_0x15d5d0(0x32f)]:this[_0x15d5d0(0x300)]()['note'];if(_0x1e9634[_0x15d5d0(0x202)](AIManager[_0x15d5d0(0x223)][_0x15d5d0(0x2d4)]))return Number(RegExp['$1'])['clamp'](0x0,0x64);else{if(this[_0x15d5d0(0x30f)]())return _0x41a13a[_0x15d5d0(0x1d4)];else{if(this[_0x15d5d0(0x2e8)]())return _0x41a13a['EnemyAILevel'];}}}return _0x41a13a[_0x15d5d0(0x1da)];},Game_Battler[_0x18d82e(0x34e)]['addAIKnowledge']=function(_0x518eb4,_0x277544,_0x2e25d7){const _0x896880=_0x18d82e,_0x3e8a02=this[_0x896880(0x341)]();if(_0x518eb4&&_0x518eb4[_0x896880(0x2e0)]>0x0){if('DovvT'!=='DovvT'){if(!_0x38e4ed)return![];if(!_0x440d94)return![];if(!_0x1d3beb[_0x896880(0x2c9)](_0x2a6711))return;return this[_0x896880(0x376)](_0x2c2736)?this[_0x896880(0x27c)](_0x5bbde8,_0x408392)[_0x896880(0x2e0)]>=0x1:!![];}else for(const _0xdec4c6 of _0x518eb4){if(_0x896880(0x2ab)==='utgYP')_0x3e8a02['addElementAIKnowledge'](_0xdec4c6,this);else return _0x47ce07[_0x36105d(_0x5b82ba['$1'])];}}_0x277544&&_0x3e8a02['addXParamAIKnowledge'](_0x896880(0x2c6),this);if(_0x2e25d7){if(_0x896880(0x257)===_0x896880(0x257))_0x3e8a02[_0x896880(0x25b)]('mevRates',this);else{if(_0x5284f1&&_0x3c31fb['statesByCategory'](_0x224459)['length']>_0x44b747[_0x896880(0x1ba)](_0x51ab9c)[_0x896880(0x2e0)])_0x3f565a=_0x4315af;if(_0x123e75&&_0x5d8192['statesByCategory'](_0x4f3af8)['length']<_0x4af3ac[_0x896880(0x1ba)](_0x5e8922)[_0x896880(0x2e0)])_0x329cbb=_0x3af5f0;}}},Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x2a2)]=function(_0x511d8e){const _0x541e92=_0x18d82e,_0x5eba0c=this[_0x541e92(0x341)]();return _0x5eba0c['hasXParamAIKnowledge'](_0x511d8e,this);},Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x329)]=function(){const _0x2896fd=_0x18d82e,_0xd2c808=VisuMZ[_0x2896fd(0x2be)][_0x2896fd(0x27e)][_0x2896fd(0x299)];if(this[_0x2896fd(0x30f)]()||this[_0x2896fd(0x2e8)]()){const _0x214e27=this[_0x2896fd(0x30f)]()?this[_0x2896fd(0x29b)]()[_0x2896fd(0x32f)]:this[_0x2896fd(0x300)]()[_0x2896fd(0x32f)];if(_0x214e27[_0x2896fd(0x202)](AIManager[_0x2896fd(0x223)][_0x2896fd(0x329)]))return Number(RegExp['$1'])[_0x2896fd(0x2d2)](0x0,0x9);else{if(this[_0x2896fd(0x30f)]())return _0xd2c808[_0x2896fd(0x271)][_0x2896fd(0x2d2)](0x0,0x9);else{if(this[_0x2896fd(0x2e8)]()){if(_0x2896fd(0x278)===_0x2896fd(0x278))return _0xd2c808[_0x2896fd(0x250)][_0x2896fd(0x2d2)](0x0,0x9);else{const _0x189626=this[_0x2896fd(0x30f)]()?this['actor']()[_0x2896fd(0x32f)]:this[_0x2896fd(0x300)]()[_0x2896fd(0x32f)];if(_0x189626[_0x2896fd(0x202)](_0x7727ba[_0x2896fd(0x223)]['aiMevTgr']))return _0x448f2f(_0x59a5f4['$1']);}}}}}return _0xd2c808['EnemyRatingVariance']['clamp'](0x0,0x9);},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x337)]=Game_Battler['prototype']['turnCount'],Game_Battler['prototype'][_0x18d82e(0x1ec)]=function(){const _0x535270=_0x18d82e;if(VisuMZ['BattleAI'][_0x535270(0x27e)]['General'][_0x535270(0x26b)]&&!BattleManager[_0x535270(0x34b)]())return _0x535270(0x31d)!==_0x535270(0x29d)?$gameTroop['turnCount']():_0x365f0a[_0x535270(0x250)][_0x535270(0x2d2)](0x0,0x9);else{if(_0x535270(0x28e)!==_0x535270(0x1b7))return VisuMZ[_0x535270(0x2be)][_0x535270(0x337)][_0x535270(0x25c)](this);else _0x1414da['prototype'][_0x535270(0x22b)][_0x535270(0x25c)](this,_0x3da8fa);}},Game_Actor['prototype'][_0x18d82e(0x292)]=function(){const _0x56e159=_0x18d82e;if(this[_0x56e159(0x311)]())return![];return this[_0x56e159(0x1ff)]()&&this[_0x56e159(0x2ec)]();},Game_Actor[_0x18d82e(0x34e)]['referenceEnemyForAI']=function(){const _0x25f21c=_0x18d82e,_0x13790c=this[_0x25f21c(0x248)]()[_0x25f21c(0x32f)];if(_0x13790c['match'](/<NO REFERENCE AI>/i))return null;else{if(_0x13790c[_0x25f21c(0x202)](/<REFERENCE AI: ENEMY (\d+)>/i))return _0x25f21c(0x346)===_0x25f21c(0x2dc)?![]:$dataEnemies[Number(RegExp['$1'])];else{if(_0x13790c[_0x25f21c(0x202)](/<REFERENCE AI: (.*)>/i))return $dataEnemies[DataManager['getEnemyIdWithName'](String(RegExp['$1']))];}}return $dataEnemies[VisuMZ['BattleAI'][_0x25f21c(0x27e)]['General'][_0x25f21c(0x368)]];},Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x275)]=function(){const _0x29586f=_0x18d82e,_0x297756=this[_0x29586f(0x248)]()[_0x29586f(0x32f)];if(_0x297756[_0x29586f(0x202)](AIManager[_0x29586f(0x223)][_0x29586f(0x275)]))return'mRPtp'!==_0x29586f(0x318)?String(RegExp['$1'])[_0x29586f(0x2ce)]()[_0x29586f(0x1bb)]():_0x48ac24[_0xcbc7ac(_0x36cc56['$1'])[_0x29586f(0x2ce)]()[_0x29586f(0x1bb)]()];return VisuMZ['BattleAI']['Settings'][_0x29586f(0x299)][_0x29586f(0x262)];},Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x282)]=function(){const _0x59f336=_0x18d82e;Game_Battler[_0x59f336(0x34e)][_0x59f336(0x282)]['call'](this),this[_0x59f336(0x207)]();},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x24f)]=Game_Actor['prototype'][_0x18d82e(0x207)],Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x207)]=function(){const _0x2d8202=_0x18d82e;this[_0x2d8202(0x292)]()?_0x2d8202(0x297)!==_0x2d8202(0x22c)?this[_0x2d8202(0x2b9)]():(_0x4ae14d[_0x2d8202(0x206)](_0x2d8202(0x33b)[_0x2d8202(0x2f2)](_0x1a1e14)),_0x301682[_0x2d8202(0x206)](_0x4c1d58)):VisuMZ[_0x2d8202(0x2be)][_0x2d8202(0x24f)]['call'](this);},Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x2b9)]=function(){const _0x3d0e72=_0x18d82e;if(this[_0x3d0e72(0x30e)]()>0x0){const _0x301e51=this[_0x3d0e72(0x296)]();if(this[_0x3d0e72(0x20c)]())_0x301e51[_0x3d0e72(0x2a9)]($dataSkills[this[_0x3d0e72(0x1cc)]()]);if(this['canGuard']())_0x301e51[_0x3d0e72(0x2a9)]($dataSkills[this[_0x3d0e72(0x1f5)]()]);const _0x5c9fd1=this[_0x3d0e72(0x2ec)](),_0x1b4180=JsonEx[_0x3d0e72(0x36e)](_0x5c9fd1[_0x3d0e72(0x1c1)]);for(const _0x432a5c of _0x1b4180){if('dnPIi'===_0x3d0e72(0x2da)){if(!_0x23e0c1)return![];return this[_0x3d0e72(0x2bf)](_0x414065)[_0x3d0e72(0x2e0)]>0x0||this[_0x3d0e72(0x351)](_0x174019)[_0x3d0e72(0x2e0)]>0x0;}else{if(_0x432a5c[_0x3d0e72(0x2df)]===0x1)_0x432a5c[_0x3d0e72(0x2df)]=this[_0x3d0e72(0x1cc)]();if(_0x432a5c['skillId']===0x2)_0x432a5c[_0x3d0e72(0x2df)]=this[_0x3d0e72(0x1f5)]();}}const _0x40fdcb=_0x1b4180[_0x3d0e72(0x2f4)](_0x1800ad=>this[_0x3d0e72(0x2d6)](_0x1800ad)&&_0x301e51[_0x3d0e72(0x219)]($dataSkills[_0x1800ad['skillId']]));if(_0x40fdcb[_0x3d0e72(0x2e0)]>0x0){this[_0x3d0e72(0x22b)](_0x40fdcb);return;}}VisuMZ[_0x3d0e72(0x2be)][_0x3d0e72(0x24f)][_0x3d0e72(0x25c)](this);},Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x2aa)]=function(_0x22b65d){const _0x15ab79=_0x18d82e;return Game_Enemy[_0x15ab79(0x34e)][_0x15ab79(0x2aa)][_0x15ab79(0x25c)](this,_0x22b65d);},Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x225)]=function(_0x55dc67,_0xbdc532){const _0x1a4219=_0x18d82e;return Game_Enemy[_0x1a4219(0x34e)][_0x1a4219(0x225)][_0x1a4219(0x25c)](this,_0x55dc67,_0xbdc532);},Game_Actor['prototype']['meetsHpCondition']=function(_0x18f96a,_0x5d0254){const _0x5be3f3=_0x18d82e;return Game_Enemy[_0x5be3f3(0x34e)]['meetsHpCondition']['call'](this,_0x18f96a,_0x5d0254);},Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x2a1)]=function(_0x206381,_0x150f11){const _0x48ea7d=_0x18d82e;return Game_Enemy[_0x48ea7d(0x34e)][_0x48ea7d(0x2a1)][_0x48ea7d(0x25c)](this,_0x206381,_0x150f11);},Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x1cd)]=function(_0x2b2886){const _0x20d396=_0x18d82e;return Game_Enemy[_0x20d396(0x34e)][_0x20d396(0x1cd)][_0x20d396(0x25c)](this,_0x2b2886);},Game_Actor['prototype']['meetsPartyLevelCondition']=function(_0x158f92){const _0x4dad74=_0x18d82e;return Game_Enemy[_0x4dad74(0x34e)][_0x4dad74(0x364)][_0x4dad74(0x25c)](this,_0x158f92);},Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x249)]=function(_0x5ce48f){const _0x1f2116=_0x18d82e;return Game_Enemy[_0x1f2116(0x34e)][_0x1f2116(0x249)][_0x1f2116(0x25c)](this,_0x5ce48f);},Game_Enemy[_0x18d82e(0x34e)]['aiStyle']=function(){const _0xa65b63=_0x18d82e,_0x1463a6=this[_0xa65b63(0x300)]()[_0xa65b63(0x32f)];if(_0x1463a6[_0xa65b63(0x202)](AIManager[_0xa65b63(0x223)][_0xa65b63(0x275)]))return _0xa65b63(0x31f)!==_0xa65b63(0x31f)?0x0:String(RegExp['$1'])[_0xa65b63(0x2ce)]()[_0xa65b63(0x1bb)]();return VisuMZ[_0xa65b63(0x2be)][_0xa65b63(0x27e)][_0xa65b63(0x299)][_0xa65b63(0x2cb)];},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x1d9)]=Game_Enemy[_0x18d82e(0x34e)][_0x18d82e(0x2d6)],Game_Enemy[_0x18d82e(0x34e)][_0x18d82e(0x2d6)]=function(_0x49844a){const _0x2c1010=_0x18d82e;if(!VisuMZ['BattleAI'][_0x2c1010(0x1d9)][_0x2c1010(0x25c)](this,_0x49844a))return![];if(this[_0x2c1010(0x275)]()==='random')return!![];return AIManager['hasValidTargets'](this,$dataSkills[_0x49844a['skillId']]);},Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x2d6)]=function(_0xcd2890){const _0xb0a318=_0x18d82e;return Game_Enemy['prototype'][_0xb0a318(0x2d6)][_0xb0a318(0x25c)](this,_0xcd2890);},Game_Enemy[_0x18d82e(0x34e)][_0x18d82e(0x1d3)]=function(_0x159fe7,_0x473d1f){const _0xd45dfd=_0x18d82e,_0x342acd=_0x159fe7[_0xd45dfd(0x1e7)]((_0x2fe54c,_0x312212)=>_0x2fe54c+_0x312212[_0xd45dfd(0x30a)]-_0x473d1f,0x0);if(_0x342acd>=0x0){let _0x3330a9=Math['randomInt'](_0x342acd);for(const _0x401f2a of _0x159fe7){_0x3330a9-=_0x401f2a[_0xd45dfd(0x30a)]-_0x473d1f;if(_0x3330a9<=0x0){if(_0xd45dfd(0x362)===_0xd45dfd(0x362))return _0x401f2a;else for(const _0x156e76 of _0x2b7cd5[_0xd45dfd(0x244)]){_0x48c195[_0xd45dfd(0x331)](_0x156e76,this)&&(_0x5c55bf*=this[_0xd45dfd(0x2c7)](_0x156e76)*_0x369c3c['elementInfluenceRate']);}}}}else{if(_0xd45dfd(0x234)!==_0xd45dfd(0x267))return null;else _0x5d6fe2[_0xd45dfd(0x206)](_0xd45dfd(0x240)[_0xd45dfd(0x2f2)](_0x1b7e30)),_0x3d5252[_0xd45dfd(0x206)](_0x58caf7);}},Game_Actor[_0x18d82e(0x34e)][_0x18d82e(0x1d3)]=function(_0x450af3,_0x224bf4){const _0x3827b4=_0x18d82e;return Game_Enemy[_0x3827b4(0x34e)]['selectAction'][_0x3827b4(0x25c)](this,_0x450af3,_0x224bf4);},Game_Enemy[_0x18d82e(0x34e)][_0x18d82e(0x22b)]=function(_0x58e46f){const _0x1e755f=_0x18d82e,_0xbbc218=String(this[_0x1e755f(0x275)]())[_0x1e755f(0x2ce)]()['trim']();if([_0x1e755f(0x21a),_0x1e755f(0x29f)][_0x1e755f(0x219)](_0xbbc218))this[_0x1e755f(0x31e)](_0x58e46f);else _0xbbc218===_0x1e755f(0x289)?_0x1e755f(0x34a)===_0x1e755f(0x218)?(_0x20c487[_0x1e755f(0x2b1)](this[_0x1e755f(0x1be)](),this[_0x1e755f(0x26a)]()),this[_0x1e755f(0x209)]()&&_0x4f4883[_0x1e755f(0x261)](this['subject'](),this[_0x1e755f(0x26a)]())):this[_0x1e755f(0x1ea)](_0x58e46f):this['selectAllActionsClassic'](_0x58e46f);},Game_Actor[_0x18d82e(0x34e)]['selectAllActions']=function(_0x5a162d){const _0x3fb5f9=_0x18d82e;Game_Enemy[_0x3fb5f9(0x34e)]['selectAllActions'][_0x3fb5f9(0x25c)](this,_0x5a162d);},Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x34d)]=function(_0x4d48fc){const _0x1d637e=_0x18d82e,_0x222c1a=Math[_0x1d637e(0x2e3)](..._0x4d48fc['map'](_0xc43e45=>_0xc43e45[_0x1d637e(0x30a)])),_0x4808af=_0x222c1a-this[_0x1d637e(0x329)](),_0xb872ea=this[_0x1d637e(0x30e)]();_0x4d48fc=_0x4d48fc[_0x1d637e(0x2f4)](_0x1646fb=>_0x1646fb[_0x1d637e(0x30a)]>=_0x4808af);for(let _0xd7a402=0x0;_0xd7a402<_0xb872ea;_0xd7a402++){_0x4d48fc=VisuMZ[_0x1d637e(0x2be)][_0x1d637e(0x2a4)](_0x4d48fc);const _0xa7eaba=this['selectAction'](_0x4d48fc,_0x4808af);this[_0x1d637e(0x2ae)](_0xd7a402)[_0x1d637e(0x1ca)](_0xa7eaba);}},VisuMZ[_0x18d82e(0x2be)]['ShuffleArray']=function(_0x1a11f4){const _0x4ef03e=_0x18d82e;var _0x443979,_0x280a76,_0x5ad352;for(_0x5ad352=_0x1a11f4[_0x4ef03e(0x2e0)]-0x1;_0x5ad352>0x0;_0x5ad352--){if('ujtyB'!==_0x4ef03e(0x2e7)){const _0x504bc1=this[_0x4ef03e(0x300)]()[_0x4ef03e(0x32f)];if(_0x504bc1[_0x4ef03e(0x202)](_0xffb353['_regexp'][_0x4ef03e(0x275)]))return _0x45aeb3(_0x9a4949['$1'])[_0x4ef03e(0x2ce)]()[_0x4ef03e(0x1bb)]();return _0x240761[_0x4ef03e(0x2be)][_0x4ef03e(0x27e)]['General'][_0x4ef03e(0x2cb)];}else _0x443979=Math['floor'](Math[_0x4ef03e(0x21a)]()*(_0x5ad352+0x1)),_0x280a76=_0x1a11f4[_0x5ad352],_0x1a11f4[_0x5ad352]=_0x1a11f4[_0x443979],_0x1a11f4[_0x443979]=_0x280a76;}return _0x1a11f4;},Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x1ea)]=function(_0xeb41c9){const _0xa34e9b=_0x18d82e;for(let _0x14501a=0x0;_0x14501a<this[_0xa34e9b(0x30e)]();_0x14501a++){const _0x25cd2b=_0xeb41c9[0x0];this[_0xa34e9b(0x2ae)](_0x14501a)[_0xa34e9b(0x1ca)](_0x25cd2b);}},Game_Battler[_0x18d82e(0x34e)][_0x18d82e(0x31e)]=function(_0x5d564e){const _0x2411c5=_0x18d82e;for(let _0x2562fc=0x0;_0x2562fc<this[_0x2411c5(0x30e)]();_0x2562fc++){if('zGZLt'===_0x2411c5(0x1e1))_0x5854dd('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x2411c5(0x2f2)](_0x4fdd00,_0x424c15)),_0x5346c5[_0x2411c5(0x1df)]();else{const _0x16bd82=_0x5d564e[Math[_0x2411c5(0x1b8)](_0x5d564e['length'])];this['action'](_0x2562fc)[_0x2411c5(0x1ca)](_0x16bd82);}}},Game_Enemy['prototype']['determineNewValidAIAction']=function(){const _0x22680c=_0x18d82e;Game_Battler[_0x22680c(0x34e)]['determineNewValidAIAction'][_0x22680c(0x25c)](this);if(this['numActions']()>0x0){const _0x423feb=this[_0x22680c(0x300)]()[_0x22680c(0x1c1)][_0x22680c(0x2f4)](_0x5bf737=>this[_0x22680c(0x2d6)](_0x5bf737));if(_0x423feb['length']>0x0)this['selectAllActions'](_0x423feb);else{if(_0x22680c(0x353)===_0x22680c(0x353))this[_0x22680c(0x1e2)]();else{const _0x31a280=_0x210050(_0x2ad015['$1']),_0x42bb7b=_0x3047c3(_0x2c693b['$2'])['toLowerCase'](),_0x21366d=_0x42bb7b[_0x22680c(0x202)](/ON|TRUE/i);return _0x5e7457['value'](_0x31a280)===_0x21366d;}}}},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x2a5)]=Game_Unit['prototype'][_0x18d82e(0x330)],Game_Unit[_0x18d82e(0x34e)]['initialize']=function(){const _0x507bb2=_0x18d82e;VisuMZ['BattleAI']['Game_Unit_initialize']['call'](this),this[_0x507bb2(0x1e5)]();},Game_Unit['prototype'][_0x18d82e(0x1e5)]=function(){this['_applyAIForcedTargetFilters']=![],this['clearAIKnowledge']();},VisuMZ[_0x18d82e(0x2be)][_0x18d82e(0x27b)]=Game_Unit[_0x18d82e(0x34e)]['aliveMembers'],Game_Unit[_0x18d82e(0x34e)][_0x18d82e(0x246)]=function(){const _0x1beabe=_0x18d82e;let _0x32cc5a=VisuMZ['BattleAI'][_0x1beabe(0x27b)][_0x1beabe(0x25c)](this);if(this[_0x1beabe(0x268)]){const _0x35d314=AIManager[_0x1beabe(0x241)]();_0x32cc5a=_0x32cc5a['filter'](_0x2a3e1e=>_0x35d314[_0x1beabe(0x219)](_0x2a3e1e));}return _0x32cc5a;},VisuMZ[_0x18d82e(0x2be)]['Game_Unit_randomTarget']=Game_Unit[_0x18d82e(0x34e)]['randomTarget'],Game_Unit[_0x18d82e(0x34e)][_0x18d82e(0x1c8)]=function(){const _0x25a26d=_0x18d82e;if(AIManager[_0x25a26d(0x1dc)]()){if('Xvnwe'!==_0x25a26d(0x357)){const _0xad7512=_0x3152a2[_0x25a26d(0x28b)](_0x191561(_0x38e8fc['$1']));return this[_0x25a26d(0x363)](_0x810a63,_0x4fb534,_0x4e2cef,_0xad7512);}else this['_applyAIForcedTargetFilters']=!![];}const _0x14bf05=VisuMZ[_0x25a26d(0x2be)][_0x25a26d(0x1b1)]['call'](this);return this[_0x25a26d(0x268)]=![],_0x14bf05;},Game_Unit[_0x18d82e(0x34e)][_0x18d82e(0x23f)]=function(){this['_aiKnowledge']={'evaRates':[],'mevRates':[],'elementRates':{}};},Game_Unit['prototype'][_0x18d82e(0x302)]=function(){const _0x4b42cd=_0x18d82e;if(this[_0x4b42cd(0x1bd)]===undefined)this[_0x4b42cd(0x23f)]();return this[_0x4b42cd(0x1bd)];},Game_Unit[_0x18d82e(0x34e)][_0x18d82e(0x25b)]=function(_0xfbf329,_0x6ca477){const _0x3f679b=_0x18d82e;this[_0x3f679b(0x302)]()[_0xfbf329]=this[_0x3f679b(0x302)]()[_0xfbf329]||[];const _0x3f9232=_0x6ca477[_0x3f679b(0x30f)]()?_0x6ca477[_0x3f679b(0x321)]():_0x6ca477[_0x3f679b(0x20e)]();!this[_0x3f679b(0x302)]()[_0xfbf329][_0x3f679b(0x219)](_0x3f9232)&&this[_0x3f679b(0x302)]()[_0xfbf329][_0x3f679b(0x2a9)](_0x3f9232);},Game_Unit[_0x18d82e(0x34e)]['hasXParamAIKnowledge']=function(_0x4ff588,_0x167cc4){const _0x678963=_0x18d82e;if(!VisuMZ[_0x678963(0x2be)][_0x678963(0x27e)][_0x678963(0x299)]['LearnKnowledge'])return!![];const _0x5b8bd6=_0x4ff588[_0x678963(0x202)](/EVA/i)?'evaRates':_0x678963(0x2cf);this[_0x678963(0x302)]()[_0x5b8bd6]=this['aiKnowledge']()[_0x5b8bd6]||[];const _0xa84de=_0x167cc4[_0x678963(0x30f)]()?_0x167cc4[_0x678963(0x321)]():_0x167cc4[_0x678963(0x20e)]();return this[_0x678963(0x302)]()[_0x5b8bd6][_0x678963(0x219)](_0xa84de);},Game_Unit[_0x18d82e(0x34e)][_0x18d82e(0x332)]=function(_0x5e2ffd,_0x2e744e){const _0x474ee1=_0x18d82e;this['aiKnowledge']()[_0x474ee1(0x2f5)]=this[_0x474ee1(0x302)]()[_0x474ee1(0x2f5)]||{};const _0x510f71=this[_0x474ee1(0x302)]()[_0x474ee1(0x2f5)];_0x510f71[_0x5e2ffd]=_0x510f71[_0x5e2ffd]||[];const _0x1d00cf=_0x2e744e[_0x474ee1(0x30f)]()?_0x2e744e['actorId']():_0x2e744e[_0x474ee1(0x20e)]();!_0x510f71[_0x5e2ffd][_0x474ee1(0x219)](_0x1d00cf)&&_0x510f71[_0x5e2ffd][_0x474ee1(0x2a9)](_0x1d00cf);},Game_Unit[_0x18d82e(0x34e)][_0x18d82e(0x331)]=function(_0x24b09d,_0x330df8){const _0x1860bf=_0x18d82e;if(!VisuMZ[_0x1860bf(0x2be)]['Settings'][_0x1860bf(0x299)]['LearnKnowledge'])return!![];this[_0x1860bf(0x302)]()['elementRates']=this[_0x1860bf(0x302)]()[_0x1860bf(0x2f5)]||{};const _0xee400e=this[_0x1860bf(0x302)]()['elementRates'];_0xee400e[_0x24b09d]=_0xee400e[_0x24b09d]||[];const _0x507f19=_0x330df8[_0x1860bf(0x30f)]()?_0x330df8['actorId']():_0x330df8[_0x1860bf(0x20e)]();return _0xee400e[_0x24b09d][_0x1860bf(0x219)](_0x507f19);},VisuMZ[_0x18d82e(0x2be)]['Game_Troop_setup']=Game_Troop[_0x18d82e(0x34e)]['setup'],Game_Troop[_0x18d82e(0x34e)][_0x18d82e(0x277)]=function(_0x3484e4){const _0x27b8dc=_0x18d82e;VisuMZ[_0x27b8dc(0x2be)][_0x27b8dc(0x312)][_0x27b8dc(0x25c)](this,_0x3484e4),this[_0x27b8dc(0x23f)]();};