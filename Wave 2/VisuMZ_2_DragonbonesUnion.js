//=============================================================================
// VisuStella MZ - Dragonbones Union
// VisuMZ_2_DragonbonesUnion.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_DragonbonesUnion = true;

var VisuMZ = VisuMZ || {};
VisuMZ.DragonbonesUnion = VisuMZ.DragonbonesUnion || {};
VisuMZ.DragonbonesUnion.version = 1.24;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.24] [DragonbonesUnion]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Dragonbones_Union_VisuStella_MZ
 * @base Public_0_Dragonbones
 * @orderAfter VisuMZ_0_CoreEngine
 * @orderAfter Public_0_Dragonbones
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * DragonBones allows your games to use skeletal animation, a type of computer
 * animation in which a character (or object) is represented by skins/textures
 * and a digital set of interconnected bones (called the skeleton). Using a set
 * of instructions, the game will create animations based off these skins,
 * skeletons, and instructions to create beautifully smooth and light-weight
 * movements.
 *
 * This plugin gives you such control over various facets of your game: the
 * battle system, event pictures, and map sprites for characters. Various
 * plugin commands, notetags, and comment tags are added through this plugin to
 * give you as much control as you need over Dragonbones from the RPG Maker MZ
 * editor itself.
 *
 * The version of Dragonbones used for this plugin is 5.7.002b.
 * More information can be found at http://dragonbones.com/
 *
 * Features include all (but not limited to) the following:
 * 
 * - Adds Dragonbones support to RPG Maker MZ.
 * - Dragonbones armatures can be used as battler sprites.
 * - Dragonbones armatures can be attached to event pictures.
 * - Dragonbones armatures can be inserted into the map as character sprites.
 * - A variety of Plugin Parameters, Notetags, and Plugin Commands to control
 *   the Dragonbones armatures and their animations.
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
 * - Dragonbones*
 *
 * *Note* You can download this library from the below URL or from the
 * Dragonbones Union product page. Install it as a Tier 0 plugin.
 *
 * URL: https://www.npmjs.com/package/pixi5-dragonbones/v/5.7.0-2b
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Dragonbones Naming
 * ============================================================================
 *
 * If you are trying to set up a Dragonbones armature through notetags, Plugin
 * Commands, etc., and are getting the error message "Cannot Read property
 * 'parent' of null", then most likely, the incorrect Dragonbones armature name
 * is being used.
 *
 * ---
 * 
 * To find the Proper Name:
 * 
 * 1. Open up the Dragonbones armature in the Dragonbones editor.
 * 
 * ---
 * 
 * 2. Open the armature's Properties.
 * 
 * ---
 * 
 * 3. Look at what the "Name:" field lists. This is the name to use with the
 *    Dragonbones Union plugin.
 * 
 * ---
 *
 * ============================================================================
 * Dragonbones Armature Behaviors
 * ============================================================================
 *
 * Dragonbones armatures have certain behaviors when used with battlers,
 * pictures, and/or map sprites.
 *
 * ---
 *
 * 1. When a Dragonbones armature is loaded, it will play the 'idle' animation
 *    or whatever is set inside the Plugin Parameters => General Settings =>
 *    Loaded Animation field upon loading. Make your Dragonbones armatures with
 *    this in mind. At other times, the 'idle' animation will be used as a base
 *    defaulting animation.
 *
 * ---
 *
 * 2. The Dragonbones armature will always be anchored at the X, Y coordinates
 *    of the target. This X, Y coordinate point will be where the root/pivot
 *    point of the Dragonbones armature will be located.
 *
 * ---
 *
 * 3. The properties used by a sprite (ie the opacity, scale, rotation, and
 *    tint) will also be shared and/or amplified with the Dragonbones armature.
 *    The exception to this will be Blend Modes aren't supported.
 *
 * ---
 *
 * ============================================================================
 * IMPORTANT!! Dragonbones Armatures as Map Sprites
 * ============================================================================
 *
 * If you plan on using Dragonbones armatures as map sprites, please keep in
 * mind that there will be certain limitations and properties regarding them,
 * which will be listed below:
 *
 * ---
 *
 * 1. Try not to use more than 99 vertices for meshes. The reason behind this
 *    is because the Dragonbones armature is added as a sprite to the game's
 *    Tilemap. Any and all sprites added to the Tilemap have some restrictions
 *    placed on them as per Pixi JS's design. The Dragonbones armatures are no
 *    exception to this.
 *
 *    If the number of vertices exceeds 99, strange things will occur to the
 *    Dragonbones armature that are outside of this plugin's control. While it
 *    won't stop the plugin from functioning properly, expected behaviors may
 *    happen due to the threshold.
 *
 * ---
 *
 * 2. When using Dragonbones armatures that are too tall or wide, they may clip
 *    into the tile layer above or to the side due to how the Tilemap works.
 *    Things that you would see happen would include clipping into the tops of
 *    trees and structures.
 *
 * ---
 *
 * 3. Certain motions will request specific animations from the Dragonbones
 *    armature. If the animations exist, it will play those motions. If they
 *    don't, the motions may request a different animation down the line. The
 *    request orders are as follows:
 *
 *    Jumping:
 *    - jump, walk, idle
 *
 *    Rope (Climbing) (Requires: VisuMZ_1_EventsMoveCore):
 *    - ropeclimb, ladderclimb, walk, ropeidle, ladderidle, idle
 *
 *    Rope (Idle) (Requires: VisuMZ_1_EventsMoveCore):
 *    - ropeidle, ladderidle, idle
 *
 *    Ladder (Climbing):
 *    - ladderclimb, walk, ladderidle, idle
 *
 *    Ladder (Idle):
 *    - ladderidle, idle
 *
 *    Dashing:
 *    - dash, walk, idle
 *
 *    Walking:
 *    - walk, idle
 *
 *    Idle:
 *    - idle
 *
 *    Name the animations for the Dragonbones armature as such to make the most
 *    out of the motion priority lists.
 *
 * ---
 *
 * 4. You can add directional animations for your Dragonbones armature motion
 *    animations. To do so, add a number after the animation's name like such:
 *    walk2, walk4, walk6, walk8. These numbers are based off the NumPad
 *    directions to determine which way to face:
 *
 *    7 8 9
 *    4   6
 *    1 2 3
 *
 *    These numbers are added onto the priority system listed in #3 above, too.
 *    Diagonal directions also become split and added multiple times for better
 *    streamlining, with a priority given to the horizontal direction before
 *    the vertical direction. For example, dashing becomes the following:
 *
 *    Dashing (Upper Left):
 *    - dash7, dash4, dash8, dash,
 *      walk7, walk4, walk8, walk,
 *      idle7, idle4, idle8, idle
 *
 *    Dashing (Right):
 *    - dash6, dash,
 *      walk6, walk,
 *      idle6, idle
 *
 * ---
 *
 * 5. When a Dragonbones armature is moving, it will animate slower or faster
 *    depending on the character's current movement speed. At speed
 *    '4: Normal', it will animation 4x faster than what's seen in Dragonbones.
 *    At speed '6: x4 Faster', it will animate 6x faster while '1: x8 Slower'
 *    will be at x1 speed seen in Dragonbones. In other words, the speed
 *    animated is equal to the number written on the left of the
 *    movement speed.
 *
 *    When dashing, that multiplier increases by 1 in order to match movement
 *    speeds and the Dragonbones armature will do the same to follow.
 *
 * ---
 *
 * You will need to create your Dragonbones armatures with these 5 key rules in
 * mind in order to make the armatures animate smoothly within your game.
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
 * VisuMZ_3_StateTooltips
 *
 * If you are using a Dragonbones Battler and want to apply a state tooltip to
 * it, the access area of the battler will be based on the hitbox size you
 * declare for the Dragonbones Battler with notetags. This is because all
 * Dragonbones battlers do not have innate automatically calculated hitbox
 * sizes as a result of their dynamically animated nature.
 * 
 * Please refer to the notetag section of the Dragonbones Union plugin for
 * Dragonbones Battler hitboxes to learn how to apply hitbox sizes.
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
 * === Dragonbones Battler Notetags ===
 *
 * The following notetags are to be assigned to either actors and/or enemies.
 * An assigned actor/enemy will have their original sprite hidden from view in
 * favor of the Dragonbones armature to be displayed. Use these notetags to
 * declare various settings for your Dragonbones armatures.
 *
 * ---
 *
 * <Dragonbones Battler: filename>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets the DragonBones associated with this actor/enemy to be 'filename'.
 * - The name will be associated with the assets used.
 * - It will be used to check for associated filenames that end with _ske.json,
 *   _tex.json, and _tex.png.
 * - The listed assets must be found in the assigned assets folder.
 *
 * Examples:
 *
 * <Dragonbones Battler: Demon>
 * <Dragonbones Battler: DragonBoy>
 * <Dragonbones Battler: Swordsman>
 * <Dragonbones Battler: Ubbie>
 *
 * ---
 *
 * <Dragonbones Battler Scale: x, y>
 *
 * <Dragonbones Battler Scale X: x>
 * <Dragonbones Battler Scale Y: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets the base scale for the Dragonbones associated with this actor/enemy.
 *   This is for those instances where a Dragonbones armature is too large or
 *   small and needs to be scaled down/up.
 * - This scale will be amplified by the actor/enemy's sprite's scale value.
 * - Use the 1st notetag to assign values to both Scale X and Scale Y.
 * - Use the 2nd/3rd notetags to assign Scale X and Y values separately.
 * - Use negative values to flip the Dragonbones armature around.
 *
 * Examples:
 * 
 * <Dragonbones Battler Scale: -0.3, 0.3>
 *
 * <Dragonbones Battler Scale X: -0.3>
 * <Dragonbones Battler Scale Y: 0.3>
 *
 * ---
 *
 * <Dragonbones Battler Offset: x, y>
 *
 * <Dragonbones Battler Offset X: x>
 * <Dragonbones Battler Offset Y: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - When a Dragonbones armature is attached to an actor/enemy's sprite, it
 *   will always be attached at the root point assigned within the Dragonbones
 *   data. If a Dragonbones armature has a root point that does not fit well
 *   with your battler sprite, you can offset it using these notetags.
 * - Replace 'x' and 'y' with number values representing how many pixels you
 *   want to offset the Dragonbones armature by.
 * - Use the 1st notetag to assign values to both Offset X and Offset Y.
 * - Use the 2nd/3rd notetags to assign Offset X and Y values separately.
 * - Use negative values to offset to the left (X) or up (Y) directions.
 *
 * Examples:
 *
 * <Dragonbones Battler Offset: -10, 5>
 *
 * <Dragonbones Battler Offset X: -10>
 * <Dragonbones Battler Offset Y: 5>
 *
 * ---
 *
 * <Dragonbones Battler Size: width, height>
 *
 * <Dragonbones Battler Width: x>
 * <Dragonbones Battler Height: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Dragonbones armatures have no standard width or height. This makes it
 *   problematic when trying to calculate the sprite's width/height for Action
 *   Sequences and the like. These notetags allow you to assign a width and
 *   height value to the sprite, despite the fact the Dragonbones armatures
 *   have no such thing.
 * - Replace 'width', 'height', or 'x' with number values representing the
 *   dimension values in pixels.
 * - Use the 1st notetag to assign values to both Width and Height.
 * - Use the 2nd/3rd notetags to assign Width and Height values separately.
 * - If these notetags aren't used, then use the values defined by default in
 *   Plugin Parameters => Battler Settings => Default => Width/Height.
 *
 * Examples:
 *
 * <Dragonbones Battler Size: 50, 100>
 *
 * <Dragonbones Battler Width: 50>
 * <Dragonbones Battler Height: 100>
 *
 * ---
 *
 * <Dragonbones Battler Time Scale: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Lets you adjust the time scale for the Dragonbones armature.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 *
 * Example:
 *
 * <Dragonbones Battler Time Scale: 1.5>
 *
 * ---
 *
 * <Dragonbones Battler Motion Walk: animation>
 * <Dragonbones Battler Motion Wait: animation>
 * <Dragonbones Battler Motion Chant: animation>
 * <Dragonbones Battler Motion Guard: animation>
 * <Dragonbones Battler Motion Damage: animation>
 * <Dragonbones Battler Motion Evade: animation>
 * <Dragonbones Battler Motion Thrust: animation>
 * <Dragonbones Battler Motion Swing: animation>
 * <Dragonbones Battler Motion Missile: animation>
 * <Dragonbones Battler Motion Skill: animation>
 * <Dragonbones Battler Motion Spell: animation>
 * <Dragonbones Battler Motion Item: animation>
 * <Dragonbones Battler Motion Escape: animation>
 * <Dragonbones Battler Motion Victory: animation>
 * <Dragonbones Battler Motion Dying: animation>
 * <Dragonbones Battler Motion Abnormal: animation>
 * <Dragonbones Battler Motion Sleep: animation>
 * <Dragonbones Battler Motion Dead: animation>
 *
 * - Used for: Actor, Enemy Notetags
 * - Use these notetags to assign Dragonbones animations to play when the
 *   actor/enemy sprite is supposed to play such a motion.
 * - Replace 'animation' with the name of the Dragonbones animation.
 * - If this notetag is not used, when such a motion is rquested, it will
 *   default to attempting to play the animation name equal to the motion.
 * - Animation names do not need to be case sensitive.
 * - If no animation is found, then no animation will be played.
 *
 * Examples:
 *
 * <Dragonbones Battler Motion Wait: idle>
 * <Dragonbones Battler Motion Swing: attack>
 * <Dragonbones Battler Motion Thrust: attack>
 * <Dragonbones Battler Motion Missle: attack>
 * <Dragonbones Battler Motion Skill: special>
 * <Dragonbones Battler Motion Spell: special>
 * <Dragonbones Battler Motion Dead: defeated>
 *
 * ---
 *
 * <Dragonbones Battler Settings>
 *  Battler: filename
 *  
 *  Scale: x, y
 *
 *  Scale X: x
 *  Scale Y: x
 *
 *  Offset: x, y
 *
 *  Offset X: x
 *  Offset Y: x
 *
 *  Size: width, height
 *
 *  Width: x
 *  Height: x
 *
 *  Time Scale: x
 *
 *  Motion Walk: animation
 *  Motion Wait: animation
 *  Motion Chant: animation
 *  Motion Guard: animation
 *  Motion Damage: animation
 *  Motion Evade: animation
 *  Motion Thrust: animation
 *  Motion Swing: animation
 *  Motion Missile: animation
 *  Motion Skill: animation
 *  Motion Spell: animation
 *  Motion Item: animation
 *  Motion Escape: animation
 *  Motion Victory: animation
 *  Motion Dying: animation
 *  Motion Abnormal: animation
 *  Motion Sleep: animation
 *  Motion Dead: animation
 * </Dragonbones Battler Settings>
 *
 * - Used for: Actor, Enemy Notetags
 * - The above notetag allows to wrap up all the information you'd like to
 *   set for Dragonbones battler armatures needed inside a single notetag
 *   container.
 * - The settings are the same as the notetags listed above it.
 * - You may remove the settings you don't wish to change.
 * - The only necessary data is the 'Battler: filename' line.
 *
 * Example:
 *
 * <Dragonbones Battler Settings>
 *  Battler: Demon
 *  
 *  Scale: 0.3, 0.3
 *
 *  Size: 80, 80
 *
 *  Motion Wait: idle
 *  Motion Damage: hit
 *  Motion Swing: attack
 *  Motion Thrust: attack
 *  Motion Missile: attack
 *  Motion Skill: special
 *  Motion spell: special
 *  Motion Dead: defeated
 * </Dragonbones Battler Settings>
 *
 * ---
 * 
 * <Dragonbones Hue Affected>
 * 
 * - Used for: Enemy Notetags
 * - The above notetag enables hues to affect enemy battlers.
 * - This will bypass the Plugin Parameter default settings.
 * 
 * ---
 * 
 * <Dragonbones No Hue>
 * 
 * - Used for: Enemy Notetags
 * - The above notetag disables hues to affect enemy battlers.
 * - This will bypass the Plugin Parameter default settings.
 * 
 * ---
 *
 * === Dragonbones Map Sprite Notetags & Comment Tags ===
 *
 * You can also use Dragonbones armatures as map sprites. When used, any of the
 * original sprites before will become invisible and will be replaced with the
 * Dragonbones armature.
 *
 * These notetags can be used for actors and events. In the case of events,
 * both notetags and comment tags can be used to determine what settings to use
 * for the Dragonbones armatures.
 *
 * Be cautious when using Comment Tags for event pages since comments contain a
 * maximum line count of 6.
 *
 * ---
 *
 * <Dragonbones Sprite: filename>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Sets the DragonBones associated with this map sprite to be 'filename'.
 * - The name will be associated with the assets used.
 * - It will be used to check for associated filenames that end with _ske.json,
 *   _tex.json, and _tex.png.
 * - The listed assets must be found in the assigned assets folder.
 *
 * Examples:
 *
 * <Dragonbones Sprite: Demon>
 * <Dragonbones Sprite: DragonBoy>
 * <Dragonbones Sprite: Swordsman>
 * <Dragonbones Sprite: Ubbie>
 *
 * ---
 *
 * <Dragonbones Sprite Scale: x, y>
 *
 * <Dragonbones Sprite Scale X: x>
 * <Dragonbones Sprite Scale Y: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Sets the base scale for the Dragonbones associated with this map sprite.
 *   This is for those instances where a Dragonbones armature is too large or
 *   small and needs to be scaled down/up.
 * - This scale will be amplified by the character's sprite's scale value.
 * - Use the 1st notetag to assign values to both Scale X and Scale Y.
 * - Use the 2nd/3rd notetags to assign Scale X and Y values separately.
 * - Use negative values to flip the Dragonbones armature around.
 *
 * Examples:
 * 
 * <Dragonbones Sprite Scale: -0.3, 0.3>
 *
 * <Dragonbones Sprite Scale X: -0.3>
 * <Dragonbones Sprite Scale Y: 0.3>
 *
 * ---
 *
 * <Dragonbones Sprite Offset: x, y>
 *
 * <Dragonbones Sprite Offset X: x>
 * <Dragonbones Sprite Offset Y: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - When a Dragonbones armature is attached to an character's map sprite, it
 *   will always be attached at the root point assigned within the Dragonbones
 *   data. If a Dragonbones armature has a root point that does not fit well
 *   with your battler sprite, you can offset it using these notetags.
 * - Replace 'x' and 'y' with number values representing how many pixels you
 *   want to offset the Dragonbones armature by.
 * - Use the 1st notetag to assign values to both Offset X and Offset Y.
 * - Use the 2nd/3rd notetags to assign Offset X and Y values separately.
 * - Use negative values to offset to the left (X) or up (Y) directions.
 *
 * Examples:
 *
 * <Dragonbones Sprite Offset: -10, 5>
 *
 * <Dragonbones Sprite Offset X: -10>
 * <Dragonbones Sprite Offset Y: 5>
 *
 * ---
 *
 * <Dragonbones Sprite Time Scale: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the time scale for the Dragonbones armature.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 *
 * Example:
 *
 * <Dragonbones Sprite Time Scale: 1.5>
 *
 * ---
 * 
 * <Dragonbones Sprite Walk Rate: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the animation speed for the Dragonbones armature only
 *   when it is walking.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 * - If used with the <Dragonbones Sprite Time Scale: x>, the speed will stack
 *   multiplicatively.
 *
 * Example:
 *
 * <Dragonbones Sprite Walk Rate: 1.5>
 * 
 * ---
 * 
 * <Dragonbones Sprite Dash Rate: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the animation speed for the Dragonbones armature only
 *   when it is dashing.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 * - If used with the <Dragonbones Sprite Time Scale: x>, the speed will stack
 *   multiplicatively.
 *
 * Example:
 *
 * <Dragonbones Sprite Dash Rate: 1.5>
 * 
 * ---
 *
 * <Dragonbones Sprite Size: width, height>
 *
 * <Dragonbones Sprite Width: x>
 * <Dragonbones Sprite Height: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Dragonbones armatures have no standard width or height. This makes it
 *   problematic when trying to calculate the sprite's width/height for various
 *   plugins that use it. These notetags allow you to assign a width and
 *   height value to the sprite, despite the fact the Dragonbones armatures
 *   have no such thing.
 * - Replace 'width', 'height', or 'x' with number values representing the
 *   dimension values in pixels.
 * - Use the 1st notetag to assign values to both Width and Height.
 * - Use the 2nd/3rd notetags to assign Width and Height values separately.
 * - If these notetags aren't used, then use the values defined by default in
 *   the Plugin Parameters.
 *
 * Examples:
 *
 * <Dragonbones Sprite Size: 48, 64>
 *
 * <Dragonbones Sprite Width: 48>
 * <Dragonbones Sprite Height: 64>
 *
 * ---
 *
 * <Dragonbones Sprite Flip Left>
 * <Dragonbones Sprite Flip Right>
 *
 * <Dragonbones Sprite No Flip Left>
 * <Dragonbones Sprite No Flip Right>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets the map sprite know to flip itself when facing either the left/right
 *   directions in order to reuse animations.
 * - The 'No' variants will prevent flipping from occuring.
 * - These notetags will override settings applied in the Plugin Parameters.
 *
 * ---
 *
 * <Dragonbones Sprite Motion Idle: animation>
 * <Dragonbones Sprite Motion Walk: animation>
 * <Dragonbones Sprite Motion Dash: animation>
 * <Dragonbones Sprite Motion Jump: animation>
 * <Dragonbones Sprite Motion LadderIdle: animation>
 * <Dragonbones Sprite Motion LadderClimb: animation>
 * <Dragonbones Sprite Motion RopeIdle: animation>
 * <Dragonbones Sprite Motion RopeClimb: animation>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you set specific animations different from the ones listed in the
 *   Plugin Parameters for specific motions.
 * - Replace 'animation' with the name of the Dragonbones animation.
 * - If this notetag is not used, when such a motion is rquested, it will
 *   default to attempting to play the animation name equal to the motion.
 * - Animation names do not need to be case sensitive.
 * - If no animation is found, then no animation will be played.
 *
 * Example:
 *
 * <Dragonbones Sprite Motion Idle: stand>
 * <Dragonbones Sprite Motion Walk: move>
 * <Dragonbones Sprite Motion Dash: run>
 * <Dragonbones Sprite Motion Jump: hop>
 *
 * ---
 *
 * <Dragonbones Sprite Settings>
 *  Filename: filename
 *
 *  Scale: x, y
 *
 *  Scale X: x
 *  Scale Y: x
 *
 *  Offset: x, y
 *
 *  Offset X: x
 *  Offset Y: x
 *
 *  Time Scale: x
 * 
 *  Walk Rate: x
 *  Dash Rate: x
 *
 *  Width: x
 *  Height: x
 *
 *  Flip Left
 *  Flip Right
 *
 *  No Flip Left
 *  No Flip Right
 *
 *  Motion Idle: animation
 *  Motion Walk: animation
 *  Motion Dash: animation
 *  Motion Jump: animation
 *  Motion LadderIdle: animation
 *  Motion LadderClimb: animation
 *  Motion RopeIdle: animation
 *  Motion RopeClimb: animation
 * </Dragonbones Sprite Settings>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - The above notetag allows to wrap up all the information you'd like to
 *   set for Dragonbones battler armatures needed inside a single notetag
 *   container.
 * - The settings are the same as the notetags listed above it.
 * - You may remove the settings you don't wish to change.
 * - The only necessary data is the 'Filename: filename' line.
 *
 * Example:
 *
 * <Dragonbones Sprite Settings>
 *  Filename: Ubbie
 *
 *  Scale: 0.1, 0.1
 *
 *  Flip Right
 *
 *  Motion Idle: stand
 *  Motion Walk: walk
 * </Dragonbones Sprite Settings>
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
 * === Battler Plugin Commands ===
 * 
 * ---
 *
 * Battler: Actor Change Settings
 * - Change target actor's Dragonbones armature settings for battle.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *     Filename:
 *     - Change the armature's filename.
 *
 *     Offset X:
 *     - Change the armature's Offset X value.
 *
 *     Offset Y:
 *     - Change the armature's Offset Y value.
 *
 *     Scale X:
 *     - Change the armature's Scale X value.
 * 
 *     Scale Y:
 *     - Change the armature's Scale Y value.
 *
 *     Time Scale:
 *     - Change the armature's Time Scale value.
 *
 *     Width:
 *     - Change the battler width size.
 *
 *     Height:
 *     - Change the battler height size.
 *
 *   Motion Settings:
 *
 *     Walk:
 *     Wait:
 *     Chant:
 *     Guard:
 *     Damage:
 *     Evade:
 *     Thrust:
 *     Swing:
 *     Missile:
 *     Skill:
 *     Spell:
 *     Item:
 *     Escape:
 *     Victory:
 *     Dying:
 *     Abnormal:
 *     Sleep:
 *     Dead:
 *     - Change the animation used for this motion.
 *
 * ---
 * 
 * === Map Sprite Plugin Commands ===
 * 
 * ---
 *
 * Map Sprite: Actor Change Settings
 * - Change target actor's Dragonbones armature settings for map sprites.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *     Filename:
 *     - Change the armature's filename.
 *
 *     Offset X:
 *     - Change the armature's Offset X value.
 *
 *     Offset Y:
 *     - Change the armature's Offset Y value.
 *
 *     Scale X:
 *     - Change the armature's Scale X value.
 * 
 *     Scale Y:
 *     - Change the armature's Scale Y value.
 *
 *     Time Scale:
 *     - Change the armature's Time Scale value.
 * 
 *       Walk Rate:
 *       - Change the armature's walk animation rate.
 * 
 *       Dash Rate:
 *       - Change the armature's dash animation rate.
 *
 *     Width:
 *     - Change the battler width size.
 *
 *     Height:
 *     - Change the battler height size.
 *
 *   Flip Settings:
 *
 *     Flip Left?:
 *     Flip Right:
 *     - Flip the scale x value when facing left/right-ward directions?
 *
 *   Motion Settings:
 *
 *     Idle:
 *     Walk:
 *     Dash:
 *     Jump:
 *     Ladder (Idle):
 *     Ladder (Climb):
 *     Rope (Idle):
 *     Rope (Climb):
 *     - Base rope climbing animation name used.
 *
 * ---
 *
 * Map Sprite: Actor Play Animation
 * - Target actor plays a custom Dragonbones animation.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * NOTE: An alternative to this is to put the following code inside of a
 *       Movement Route's script call:
 *
 *       this.dragonbonesAnimation = "AnimationName";
 *
 *       Replace 'AnimationName' (keep the quotes) with the name of the
 *       Dragonbones animation.
 *
 * ---
 *
 * Map Sprite: Actor Stop Animation
 * - Stops a target actor's custom Dragonbones animation.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 * ---
 *
 * Map Sprite: Event Play Animation
 * - Target event plays a custom Dragonbones animation.
 *
 *   Event ID:
 *   - Select which Event ID to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Event Stop Animation
 * - Stops a target event's custom Dragonbones animation.
 *
 *   Event ID:
 *   - Select which Event ID to affect.
 *
 * ---
 *
 * Map Sprite: Follower Play Animation
 * - Target follower plays a custom Dragonbones animation.
 *
 *   Follower Index:
 *   - Select which Follower Index to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Follower Stop Animation
 * - Stops a target follower's custom Dragonbones animation.
 *
 *   Follower ID:
 *   - Select which Follower Index to affect.
 *
 * ---
 *
 * Map Sprite: Player Play Animation
 * - Player plays a custom Dragonbones animation.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Player Stop Animation
 * - Stops player's custom Dragonbones animation.
 *
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 *
 * Picture: Dragonbones Setup
 * - Setup a Dragonbones armature for a picture.
 *
 *   Picture ID:
 *   - Select which Picture ID(s) to give a Dragonbones armature.
 *
 *   Armature Filename:
 *   - What is the armature's filename?
 *
 *   Play Animation:
 *   - Play this animation once it starts.
 *
 *   Offset: X:
 *   - Default X offset value for this Dragonbones armature.
 *
 *   Offset: Y:
 *   - Default Y offset value for this Dragonbones armature.
 *
 *   Scale: X:
 *   - Default X scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Scale: Y:
 *   - Default Y scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Time Scale:
 *   - Default time scale for this Dragonbones armature.
 *   - Higher values play faster. Lower values play slower.
 *
 * ---
 *
 * Picture: Play Dragonbones Animation
 * - Make an existing Dragonbones armature attached to a picture play
 *   an animation.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Play Animation:
 *   - Play this animation.
 * 
 *   Finish: Revert Idle:
 *   - Revert animation to 'idle' animation after finishing?
 *
 * ---
 *
 * Picture: Offset Dragonbones
 * - Offset the X, Y attachment point of the Dragonbones armature.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Offset: X:
 *   - X offset value for this Dragonbones armature.
 *
 *   Offset: Y:
 *   - Y offset value for this Dragonbones armature.
 *
 * ---
 *
 * Picture: Scale Dragonbones
 * - Change the scaling values of the Dragonbones armature.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Scale: X:
 *   - X scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Scale: Y:
 *   - Y scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 * ---
 *
 * Picture: Time Scale Dragonbones
 * - Change the speed at which Dragonbones animations play.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Time Scale:
 *   - Time scale for this Dragonbones armature.
 *   - Higher values play faster. Lower values play slower.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings that apply to all uses of Dragonbones through
 * this plugin. While the majority of these can remain unchanged, for those who
 * wish to customize the nature of the plugin to their liking can do so through
 * these Plugin Parameters.
 *
 * ---
 *
 * Assets Path
 * - The filepath to the directory that houses all the Dragonbone files.
 *
 * ---
 *
 * Defaults
 * 
 *   Loaded Animation:
 *   - The default animation to play once a Dragonbones armature is loaded.
 * 
 *   Looping Animations:
 *   - Force these animations to become looping animations even if they don't
 *     loop in Dragonbones.
 *
 * ---
 *
 * Skeletal Data
 * Texture Data
 * Texture Asset
 * 
 *   Key:
 *   - Key used to determine where needed data is stored.
 * 
 *   Extension:
 *   - Extension used to determine which files contain needed data.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Settings
 * ============================================================================
 *
 * Actor and Enemy sprites can have Dragonbones armatures attached to them as
 * sprites. Use these settings to make the Dragonbones armatures fit your needs
 * in battle.
 *
 * ---
 *
 * Default Settings
 * 
 *   Enemy Hue Affected?:
 *   - Affect hues for enemies with Dragonbones battlers?
 * 
 *   Offset: X:
 *   - Default X offset for battler sprites.
 * 
 *   Offset: Y:
 *   - Default Y offset for battler sprites.
 * 
 *   Scale: X:
 *   - Default scale for X used by Dragonbones battlers.
 * 
 *     Flip for Actors?:
 *     Flip for Enemies?:
 *     - Flip the scale x value into negative automatically for all actors
 *       or enemies?
 * 
 *   Scale: Y:
 *   - Default scale for Y used by Dragonbones battlers.
 * 
 *   Width:
 *   - Treat battler sprites as if they have this width.
 *   - Used for Action Sequences.
 * 
 *   Height:
 *   - Treat battler sprites as if they have this height.
 *   - Used for Action Sequences.
 *
 * ---
 * 
 * Idle Bypass
 * 
 *   List:
 *   - This is a list of animations that will not return back to the idle
 *     animation after completion.
 *   - Remove them if you want them to revert back to the idle animation
 *     after completion.
 *   - Add to the list if you want animations to stay in their final frame.
 * 
 * ---
 *
 * Default Motions
 * 
 *   Walk:
 *   Wait:
 *   Chant:
 *   Guard:
 *   Damage:
 *   Evade:
 *   Thrust:
 *   Swing:
 *   Missile:
 *   Skill:
 *   Spell:
 *   Item:
 *   Escape:
 *   Victory:
 *   Dying:
 *   Abnormal:
 *   Sleep:
 *   Dead:
 *   - Play this Dragonbones animation whenever this motion is requested
 *     by default.
 *   - Used for Action Sequences.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Sprite Settings
 * ============================================================================
 *
 * These Plugin Parameter settings adjust the default configurations for any
 * map sprite that's using a Dragonbones armature. These settings can be
 * overwritten on per a sprite basis using notetags and comment tags, too.
 *
 * ---
 *
 * Defaults
 * 
 *   Offset: X:
 *   - Default X offset for map sprites.
 * 
 *   Offset: Y:
 *   - Default Y offset for map sprites.
 * 
 *   Scale: X:
 *   - Default scale for X used by Dragonbones map sprites.
 * 
 *     Flip Left?:
 *     Flip Right?:
 *     - Flip the scale x value when facing left/right-ward directions?
 * 
 *   Scale: Y:
 *   - Default scale for Y used by Dragonbones map sprites.
 * 
 *   Time Scale:
 *   - The rate at which animations play.
 *   - Higher numbers go faster.
 * 
 *   Width:
 *   - Treat map sprites as if they have this width.
 *   - Used for various plugins.
 * 
 *   Height:
 *   - Treat map sprites as if they have this height.
 *   - Used for various plugins.
 *
 * ---
 *
 * Motion Settings
 * 
 *   Idle:
 *   Walk:
 *   Dash:
 *   Jump:
 *   Ladder (Idle):
 *   Ladder (Climb):
 *   Rope (Idle):
 *   Rope (Climb):
 *   - Base walk animation name used.
 * 
 *   Walk Timer:
 *   - Number of frames to count as walking so that an idle animation isn't
 *     immediately forced upon stopping.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Experimental Settings
 * ============================================================================
 *
 * These settings are experimental and have not been tested extensively yet.
 *
 * ---
 *
 * Experimental Settings
 * 
 *   Enemy Stances:
 *   - Enemies can use stance motions for idling such as chanting,
 *     guarding, etc.
 *   - Requires VisuMZ_1_BattleCore!
 *   - This is not available normally since animations are not available for
 *     enemies with the base RPG Maker MZ core scripts.
 *   - Disable this to use the default animation flow for enemies.
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
 *
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * Special Thanks To
 * 
 * * Green Kel
 * * Ækashics
 * * Swift Illusion
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.24: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that the "Flip Actors" and "Flip Enemies" parameters did not
 *    work properly after using a scale X notetag. Fix made by Olivia.
 * 
 * Version 1.23: January 20, 2023
 * * Feature Update!
 * ** Guard animations should no longer temporarily default to idle stances if
 *    an unnamed animation does not exist if the battler is guarding. Update
 *    made by Irina.
 * 
 * Version 1.22: December 15, 2022
 * * Compatibility Update!
 * ** Should now work with RPG Maker MZ version 1.6.1's updated Pixi JS version
 *    of 5.3.12 from 5.2.4. If ya don't have this plugin updated and you are
 *    using 5.3.12 onward, your battlers won't be loading.
 * 
 * Version 1.21: November 24, 2022
 * * Bug Fixes!
 * ** Custom motions now work better with non-actor participants during actions
 *    involving dragonbones battlers. Fix made by Arisu.
 * 
 * Version 1.20: November 17, 2022
 * * Bug Fixes!
 * ** "Damage" motion wasn't working properly for actors. This should now be
 *    fixed and working properly.
 * * Bug Fixes!
 * ** "Escape" motion should now work properly with Dragonbones actors. Idle
 *    motions will no longer take priority over them.
 * 
 * Version 1.19: November 10, 2022
 * * Bug Fixes!
 * ** Fixed a bug from the v1.18 update that prevented custom motions from
 *    being displayed properly with actors. Fix made by Irina.
 * 
 * Version 1.18: October 13, 2022
 * * Compatibility Update!
 * ** Plugin should be more compatible with VisuMZ_3_VisualStateEffect.
 * 
 * Version 1.17: January 27, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Added Plugin Command Parameter for "Picture: Play Dragonbones Animation":
 * *** Finish: Revert Idle?
 * **** Revert animation to 'idle' animation after finishing?
 * **** Added by Irina
 *
 * Version 1.16: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.15: June 18, 2021
 * * Compatibility Update
 * ** Compatibility update with Elements and Status Menu Core's trait hues.
 *    These will be affected by the notetags and/or Plugin Parameters applied.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Ækashics:
 * *** <Dragonbones Hue Affected>
 * *** <Dragonbones No Hue>
 * **** Determines if this enemy's Dragonbones battler is affected by hues
 *      or not. This will bypass the Plugin Parameter's default value.
 * ** New Plugin Parameter added by Irina and sponsored by Ækashics:
 * *** Plugin Parameters > Battler Settings > Default > Enemy Hue Affected?
 * **** Affect hues for enemies with Dragonbones battlers?
 * **** This will be disabled by default. Enable it or set it to true to make
 *      it work properly.
 * 
 * Version 1.14: April 2, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_3_StateTooltips plugin.
 * 
 * Version 1.13: March 19, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Experimental: Enemy Stances
 * **** Allows enemies to utilize stance motions for idling such as chanting,
 *      guarding, etc.
 * **** Requires VisuMZ_1_BattleCore!
 * **** This is not available normally since animations are not available for
 *      enemies with the base RPG Maker MZ core scripts.
 * **** Disable this to use the default animation flow for enemies.
 * 
 * Version 1.12: February 19, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash upon teleporting with an altering
 *    Dragonbones armature load without a base sprite. Fix made by Irina.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Fixed a bug involving the changing of a Dragonbones battler in-battle to
 *    prevent multiple instances being added at once. Fix made by Irina.
 * 
 * Version 1.10: January 22, 2021
 * * Bug Fixes!
 * ** Upon changing map sprites, Dragonbones characters would become skewed.
 *    This should no longer happen.
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** Map Sprite: Actor Change Settings new Plugin Command parameters
 * *** "Walk Rate" and "Dash Rate" modifiers added.
 * 
 * Version 1.09: November 29, 2020
 * * Bug Fixes!
 * ** Dragonbones height for actors is no longer affected by frame divisibility
 *    for SV Actors to skew the positions of height data. Fix made by Arisu.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** Two new notetags have been added for map sprites by Irina.
 * *** <Dragonbones Sprite Walk Rate: x>
 * *** <Dragonbones Sprite Dash Rate: x>
 * **** These two new notetags allow you to animate specific Dragonbones
 *      animations at a different speed when walking or dashing. These speed
 *      multipliers will stack multiplicatively with the time scale.
 * 
 * Version 1.07: October 25, 2020
 * * Bug Fixes!
 * ** Dead animations for actors no longer keep looping upon motion refreshes.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** New plugin parameter added by Irina.
 * *** Plugin Parameters > Battler Settings > Idle Bypass > List
 * **** This is a list of animations that will not return back to the idle
 *      animation after completion. Remove them if you want them to revert back
 *      to the idle animation after completion. Add to the list if you want
 *      animations to stay in their final frame.
 * 
 * Version 1.06: October 18, 2020
 * * Bug Fixes!
 * ** Enemies with Dragonbones battlers transforming into other enemies with
 *    Dragonbones battlers will now attach the sprites properly. Fix by Yanfly.
 * ** Enemies with Dragonbones battlers transforming into enemies without them
 *    will now remove the non-transformed bitmap.
 * * Documentation Update!
 * ** Added the 'Dragonbones Naming' section.
 * 
 * Version 1.05: October 4, 2020
 * * Bug Fixes!
 * ** Selected Dragonbones battlers will no longer leave behind a residual
 *    blink effect. Fix made by Irina.
 * ** There should be no more crashes from map events that have been previously
 *    deleted but not cleared from the map event list. Fix made by Irina.
 * 
 * Version 1.04: September 20, 2020
 * * Bug Fixes!
 * ** Hidden enemies with Dragonbones should be invisible at the start of
 *    battle. Fix made by Yanfly.
 * 
 * Version 1.03: September 13, 2020
 * * Compatibility Update!
 * ** Added compatibility with the new Battle Core v1.04 features!
 * 
 * Version 1.02: September 6, 2020
 * * Bug Fixes!
 * ** Previously, a Dragonbones battler does not show the blinking indicator if
 *    the battler is a selected target. This is now fixed. Fix made by Yanfly.
 * ** Prevents a crash now if no bitmap is detected for the main sprite.
 * 
 * Version 1.01: August 30, 2020
 * * Bug Fixes!
 * ** Erasing a picture no longer causes a crash when changing scenes. Fix made
 *    by Yanfly.
 * * Compatibility Update
 * ** Added compatibility for VisuStella MZ's Visual State Effects.
 *
 * Version 1.00: August 24, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Battler_ActorChange
 * @text Battler: Actor Change Settings
 * @desc Change target actor's Dragonbones armature settings for battle.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Filename:str
 * @text Filename
 * @parent ActorID:num
 * @desc Change the armature's filename.
 * @default name
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @parent ActorID:num
 * @desc Change the armature's Offset X value.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @parent ActorID:num
 * @desc Change the armature's Offset Y value.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @parent ActorID:num
 * @desc Change the armature's Scale X value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @parent ActorID:num
 * @desc Change the armature's Scale Y value.
 * @default 1.0
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @parent ActorID:num
 * @desc Change the armature's Time Scale value.
 * @default 1.0
 *
 * @arg Width:eval
 * @text Width
 * @parent ActorID:num
 * @desc Change the battler width size.
 * @default 64
 *
 * @arg Height:eval
 * @text Height
 * @parent ActorID:num
 * @desc Change the battler height size.
 * @default 64
 *
 * @arg DefaultMotions
 * @text Motion Settings
 *
 * @arg MotionWalk:str
 * @text Walk
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default walk
 *
 * @arg MotionWait:str
 * @text Wait
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default wait
 *
 * @arg MotionChant:str
 * @text Chant
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default chant
 *
 * @arg MotionGuard:str
 * @text Guard
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default guard
 *
 * @arg MotionDamage:str
 * @text Damage
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default damage
 *
 * @arg MotionEvade:str
 * @text Evade
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default evade
 *
 * @arg MotionThrust:str
 * @text Thrust
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default thrust
 *
 * @arg MotionSwing:str
 * @text Swing
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default swing
 *
 * @arg MotionMissile:str
 * @text Missile
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default missile
 *
 * @arg MotionSkill:str
 * @text Skill
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default skill
 *
 * @arg MotionSpell:str
 * @text Spell
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default spell
 *
 * @arg MotionItem:str
 * @text Item
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default item
 *
 * @arg MotionEscape:str
 * @text Escape
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default escape
 *
 * @arg MotionVictory:str
 * @text Victory
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default victory
 *
 * @arg MotionDying:str
 * @text Dying
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default dying
 *
 * @arg MotionAbnormal:str
 * @text Abnormal
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default abnormal
 *
 * @arg MotionSleep:str
 * @text Sleep
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default sleep
 *
 * @arg MotionDead:str
 * @text Dead
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default dead
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorChange
 * @text Map Sprite: Actor Change Settings
 * @desc Change target actor's Dragonbones armature settings for map sprites.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Filename:str
 * @text Filename
 * @parent ActorID:num
 * @desc Change the armature's filename.
 * @default name
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @parent ActorID:num
 * @desc Change the armature's Offset X value.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @parent ActorID:num
 * @desc Change the armature's Offset Y value.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @parent ActorID:num
 * @desc Change the armature's Scale X value.
 * @default 0.5
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @parent ActorID:num
 * @desc Change the armature's Scale Y value.
 * @default 0.5
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @parent ActorID:num
 * @desc Change the armature's Time Scale value.
 * @default 1.0
 *
 * @arg WalkRate:eval
 * @text Walk Rate
 * @parent TimeScale:eval
 * @desc Change the armature's walk animation rate.
 * @default 1.0
 *
 * @arg DashRate:eval
 * @text Dash Rate
 * @parent TimeScale:eval
 * @desc Change the armature's dash animation rate.
 * @default 1.0
 *
 * @arg Width:eval
 * @text Width
 * @parent ActorID:num
 * @desc Change the armature's width value.
 * @default 48
 *
 * @arg Height:eval
 * @text Height
 * @parent ActorID:num
 * @desc Change the armature's height.
 * @default 48
 *
 * @arg FlipSettings
 * @text Flip Settings
 *
 * @arg FlipLeft:eval
 * @text Flip Left?
 * @parent FlipSettings
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing left-ward directions?
 * @default false
 *
 * @arg FlipRight:eval
 * @text Flip Right?
 * @parent FlipSettings
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing right-ward directions?
 * animation is found?
 * @default false
 *
 * @arg Animations
 * @text Motion Settings
 *
 * @arg Idle:str
 * @text Idle
 * @parent Animations
 * @desc Base idle animation name used.
 * @default idle
 *
 * @arg Walk:str
 * @text Walk
 * @parent Animations
 * @desc Base walk animation name used.
 * @default walk
 *
 * @arg Dash:str
 * @text Dash
 * @parent Animations
 * @desc Base dash animation name used.
 * @default dash
 *
 * @arg Jump:str
 * @text Jump
 * @parent Animations
 * @desc Base jump animation name used.
 * @default jump
 *
 * @arg LadderIdle:str
 * @text Ladder (Idle)
 * @parent Animations
 * @desc Base ladder idle animation name used.
 * @default ladderidle
 *
 * @arg LadderClimb:str
 * @text Ladder (Climb)
 * @parent Animations
 * @desc Base ladder climbing animation name used.
 * @default ladderclimb
 *
 * @arg RopeIdle:str
 * @text Rope (Idle)
 * @parent Animations
 * @desc Base rope idle animation name used.
 * @default ropeidle
 *
 * @arg RopeClimb:str
 * @text Rope (Climb)
 * @parent Animations
 * @desc Base rope climbing animation name used.
 * @default ropecllmb
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorAnimationPlay
 * @text Map Sprite: Actor Play Animation
 * @desc Target actor plays a custom Dragonbones animation.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorAnimationStop
 * @text Map Sprite: Actor Stop Animation
 * @desc Stops a target actor's custom Dragonbones animation.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_EventAnimationPlay
 * @text Map Sprite: Event Play Animation
 * @desc Target event plays a custom Dragonbones animation.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Select which Event ID to affect.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_EventAnimationStop
 * @text Map Sprite: Event Stop Animation
 * @desc Stops a target event's custom Dragonbones animation.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Select which Event ID to affect.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_FollowerAnimationPlay
 * @text Map Sprite: Follower Play Animation
 * @desc Target follower plays a custom Dragonbones animation.
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Select which Follower Index to affect.
 * @default 0
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_FollowerAnimationStop
 * @text Map Sprite: Follower Stop Animation
 * @desc Stops a target follower's custom Dragonbones animation.
 *
 * @arg FollowerIndex:eval
 * @text Follower ID
 * @desc Select which Follower Index to affect.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_PlayerAnimationPlay
 * @text Map Sprite: Player Play Animation
 * @desc Player plays a custom Dragonbones animation.
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_PlayerAnimationStop
 * @text Map Sprite: Player Stop Animation
 * @desc Stops player's custom Dragonbones animation.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_SetupDragonbones
 * @text Picture: Dragonbones Setup
 * @desc Setup a Dragonbones armature for a picture.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID(s) to give a Dragonbones armature.
 * @default 1
 *
 * @arg Filename:str
 * @text Armature Filename
 * @desc What is the armature's filename?
 * @default Untitled
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation once it starts.
 * @default Idle
 *
 * @arg OffsetX:eval
 * @text Offset: X
 * @desc Default X offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset: Y
 * @desc Default Y offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale: X
 * @desc Default X scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale: Y
 * @desc Default Y scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @desc Default time scale for this Dragonbones armature.
 * Higher values play faster. Lower values play slower.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_DragonbonesAnimation
 * @text Picture: Play Dragonbones Animation
 * @desc Make an existing Dragonbones armature attached to a picture play an animation.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @arg IdleFinish:eval
 * @text Finish: Revert Idle?
 * @parent FlipSettings
 * @type boolean
 * @on Revert
 * @off Freeze
 * @desc Revert animation to 'idle' animation after finishing?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_DragonbonesOffset
 * @text Picture: Offset Dragonbones
 * @desc Offset the X, Y attachment point of the Dragonbones armature.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg OffsetX:eval
 * @text Offset: X
 * @desc X offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset: Y
 * @desc Y offset value for this Dragonbones armature.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_ScaleDragonbones
 * @text Picture: Scale Dragonbones
 * @desc Change the scaling values of the Dragonbones armature.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg ScaleX:eval
 * @text Scale: X
 * @desc X scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale: Y
 * @desc Y scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_TimeScaleDragonbones
 * @text Picture: Time Scale Dragonbones
 * @desc Change the speed at which Dragonbones animations play.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @desc Default time scale for this Dragonbones armature.
 * Higher values play faster. Lower values play slower.
 * @default 1.0
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
 * @param DragonbonesUnion
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Main
 * @text Main Settings
 *
 * @param AssetsPath:str
 * @text Assets Path
 * @parent Main
 * @desc The filepath to the directory that houses all the Dragonbone files.
 * @default ./dragonbones_assets/
 *
 * @param General:struct
 * @text General Settings
 * @parent Main
 * @type struct<General>
 * @desc A set of general settings pertaining to all uses of Dragonbones.
 * @default {"Defaults":"","LoadAnimation:str":"idle","LoopingAnimations:arraystr":"[\"idle\",\"walk\",\"wait\",\"chant\",\"guard\",\"dying\",\"abnormal\",\"sleep\",\"dash\",\"ladderidle\",\"ladderclimb\",\"ropeidle\",\"ropeclimb\"]","SkeletalData":"","SkeKey:str":"dbData","SkeExt:str":"_ske.json","TextureData":"","TexKey:str":"texData","TexExt:str":"_tex.json","TextureAsset":"","TxaKey:str":"texAsset","TxaExt:str":"_tex.png"}
 *
 * @param Battler:struct
 * @text Battler Settings
 * @parent Main
 * @type struct<Battler>
 * @desc A set of general settings pertaining to Dragonbones battlers.
 * @default {"Defaults":"","OffsetX:num":"0","OffsetY:num":"0","ScaleX:num":"1.0","FlipActors:eval":"false","FlipEnemies:eval":"false","ScaleY:num":"1.0","TimeScale:num":"1.0","Width:num":"64","Height:num":"64","IdleBypass":"","IdleBypassList:arraystr":"[\"dead\",\"escape\",\"victory\"]","DefaultMotions":"","MotionWalk:str":"walk","MotionWait:str":"wait","MotionChant:str":"chant","MotionGuard:str":"guard","MotionDamage:str":"damage","MotionEvade:str":"evade","MotionThrust:str":"thrust","MotionSwing:str":"swing","MotionMissile:str":"missile","MotionSkill:str":"skill","MotionSpell:str":"spell","MotionItem:str":"item","MotionEscape:str":"escape","MotionVictory:str":"victory","MotionDying:str":"dying","MotionAbnormal:str":"abnormal","MotionSleep:str":"sleep","MotionDead:str":"dead"}
 *
 * @param MapSprite:struct
 * @text Map Sprite Settings
 * @parent Main
 * @type struct<MapSprite>
 * @desc A set of general settings pertaining to Dragonbones map sprites.
 * @default {"Defaults":"","OffsetX:num":"0","OffsetY:num":"0","ScaleX:num":"0.5","FlipLeft:eval":"false","FlipRight:eval":"false","ScaleY:num":"0.5","TimeScale:num":"1.0","Width:num":"48","Height:num":"48","Animations":"","Idle:str":"idle","Walk:str":"walk","WalkTimer:num":"2","Dash:str":"dash","Jump:str":"jump","LadderIdle:str":"ladderidle","LadderClimb:str":"ladderclimb","RopeIdle:str":"ropeidle","RopeClimb:str":"ropecllmb"}
 * 
 * @param Experimental
 * 
 * @param EnemyStances:eval
 * @text Enemy Stances
 * @parent Experimental
 * @type boolean
 * @on Enable Stances
 * @off No Stances
 * @desc Enemies can use stance motions for idling such as
 * chanting, guarding, etc. Requires VisuMZ_1_BattleCore!
 * @default false
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param Defaults
 *
 * @param LoadAnimation:str
 * @text Loaded Animation
 * @parent Defaults
 * @desc The default animation to play once a Dragonbones armature is loaded.
 * @default idle
 *
 * @param LoopingAnimations:arraystr
 * @text Looping Animations
 * @parent Defaults
 * @type string[]
 * @desc Force these animations to become looping animations even if they don't loop in Dragonbones.
 * @default ["idle","walk","wait","chant","guard","dying","abnormal","sleep","dash","ladderidle","ladderclimb","ropeidle","ropeclimb"]
 *
 * @param SkeletalData
 * @text Skeletal Data
 *
 * @param SkeKey:str
 * @text Key
 * @parent SkeletalData
 * @desc Key used to determine where skeletal data is stored.
 * @default dbData
 *
 * @param SkeExt:str
 * @text Extension
 * @parent SkeletalData
 * @desc Extension used to determine which files contain skeletal data.
 * @default _ske.json
 *
 * @param TextureData
 * @text Texture Data
 *
 * @param TexKey:str
 * @text Key
 * @parent TextureData
 * @desc Key used to determine where texture data is stored.
 * @default texData
 *
 * @param TexExt:str
 * @text Extension
 * @parent TextureData
 * @desc Extension used to determine which files contain texture data.
 * @default _tex.json
 *
 * @param TextureAsset
 * @text Texture Asset
 *
 * @param TxaKey:str
 * @text Key
 * @parent TextureAsset
 * @desc Key used to determine where texture assets are stored.
 * @default texAsset
 *
 * @param TxaExt:str
 * @text Extension
 * @parent TextureAsset
 * @desc Extension used to determine which files contain texture assets.
 * @default _tex.png
 *
 */
/* ----------------------------------------------------------------------------
 * Battler Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param HueAffected:eval
 * @text Enemy Hue Affected?
 * @parent Defaults
 * @type boolean
 * @on Affect Hues
 * @off No Hues
 * @desc Affect hues for enemies with Dragonbones battlers?
 * @default false
 *
 * @param OffsetX:num
 * @text Offset: X
 * @parent Defaults
 * @desc Default X offset for battler sprites.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset: Y
 * @parent Defaults
 * @desc Default Y offset for battler sprites.
 * @default 0
 *
 * @param ScaleX:num
 * @text Scale: X
 * @parent Defaults
 * @desc Default scale for X used by Dragonbones battlers.
 * @default 1.0
 *
 * @param FlipActors:eval
 * @text Flip for Actors?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value into negative automatically for all actors?
 * @default false
 *
 * @param FlipEnemies:eval
 * @text Flip for Enemies?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value into negative automatically for all enemies?
 * @default false
 *
 * @param ScaleY:num
 * @text Scale: Y
 * @parent Defaults
 * @desc Default scale for Y used by Dragonbones battlers.
 * @default 1.0
 *
 * @param TimeScale:num
 * @text Time Scale
 * @parent Defaults
 * @desc The rate at which animations play.
 * Higher numbers go faster.
 * @default 1.0
 *
 * @param Width:num
 * @text Width
 * @parent Defaults
 * @desc Treat battler sprites as if they have this width.
 * Used for Action Sequences.
 * @default 64
 *
 * @param Height:num
 * @text Height
 * @parent Defaults
 * @desc Treat battler sprites as if they have this height.
 * Used for Action Sequences.
 * @default 64
 *
 * @param IdleBypass
 * @text Idle Bypass
 *
 * @param IdleBypassList:arraystr
 * @text List
 * @parent IdleBypass
 * @type combo[]
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc This is a list of animations that will not return back to the idle animation after completion.
 * @default ["dead","escape","victory"]
 *
 * @param DefaultMotions
 * @text Default Motions
 *
 * @param MotionWalk:str
 * @text Walk
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default walk
 *
 * @param MotionWait:str
 * @text Wait
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default wait
 *
 * @param MotionChant:str
 * @text Chant
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default chant
 *
 * @param MotionGuard:str
 * @text Guard
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default guard
 *
 * @param MotionDamage:str
 * @text Damage
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default damage
 *
 * @param MotionEvade:str
 * @text Evade
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default evade
 *
 * @param MotionThrust:str
 * @text Thrust
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default thrust
 *
 * @param MotionSwing:str
 * @text Swing
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default swing
 *
 * @param MotionMissile:str
 * @text Missile
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default missile
 *
 * @param MotionSkill:str
 * @text Skill
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default skill
 *
 * @param MotionSpell:str
 * @text Spell
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default spell
 *
 * @param MotionItem:str
 * @text Item
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default item
 *
 * @param MotionEscape:str
 * @text Escape
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default escape
 *
 * @param MotionVictory:str
 * @text Victory
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default victory
 *
 * @param MotionDying:str
 * @text Dying
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default dying
 *
 * @param MotionAbnormal:str
 * @text Abnormal
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default abnormal
 *
 * @param MotionSleep:str
 * @text Sleep
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default sleep
 *
 * @param MotionDead:str
 * @text Dead
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default dead
 *
 */
/* ----------------------------------------------------------------------------
 * Map Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MapSprite:
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param OffsetX:num
 * @text Offset: X
 * @parent Defaults
 * @desc Default X offset for map sprites.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset: Y
 * @parent Defaults
 * @desc Default Y offset for map sprites.
 * @default 0
 *
 * @param ScaleX:num
 * @text Scale: X
 * @parent Defaults
 * @desc Default scale for X used by Dragonbones map sprites.
 * @default 0.5
 *
 * @param FlipLeft:eval
 * @text Flip Left?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing left-ward directions?
 * @default false
 *
 * @param FlipRight:eval
 * @text Flip Right?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing right-ward directions?
 * animation is found?
 * @default false
 *
 * @param ScaleY:num
 * @text Scale: Y
 * @parent Defaults
 * @desc Default scale for Y used by Dragonbones map sprites.
 * @default 0.5
 *
 * @param TimeScale:num
 * @text Time Scale
 * @parent Defaults
 * @desc The rate at which animations play.
 * Higher numbers go faster.
 * @default 1.0
 *
 * @param Width:num
 * @text Width
 * @parent Defaults
 * @desc Treat map sprites as if they have this width.
 * Used for various plugins.
 * @default 48
 *
 * @param Height:num
 * @text Height
 * @parent Defaults
 * @desc Treat map sprites as if they have this height.
 * Used for various plugins.
 * @default 48
 *
 * @param Animations
 * @text Motion Settings
 *
 * @param Idle:str
 * @text Idle
 * @parent Animations
 * @desc Base idle animation name used.
 * @default idle
 *
 * @param Walk:str
 * @text Walk
 * @parent Animations
 * @desc Base walk animation name used.
 * @default walk
 *
 * @param WalkTimer:num
 * @text Walk Timer
 * @parent Walk:str
 * @desc Number of frames to count as walking so that an idle animation isn't immediately forced upon stopping.
 * @default 2
 *
 * @param Dash:str
 * @text Dash
 * @parent Animations
 * @desc Base dash animation name used.
 * @default dash
 *
 * @param Jump:str
 * @text Jump
 * @parent Animations
 * @desc Base jump animation name used.
 * @default jump
 *
 * @param LadderIdle:str
 * @text Ladder (Idle)
 * @parent Animations
 * @desc Base ladder idle animation name used.
 * @default ladderidle
 *
 * @param LadderClimb:str
 * @text Ladder (Climb)
 * @parent Animations
 * @desc Base ladder climbing animation name used.
 * @default ladderclimb
 *
 * @param RopeIdle:str
 * @text Rope (Idle)
 * @parent Animations
 * @desc Base rope idle animation name used.
 * @default ropeidle
 *
 * @param RopeClimb:str
 * @text Rope (Climb)
 * @parent Animations
 * @desc Base rope climbing animation name used.
 * @default ropecllmb
 *
 */
//=============================================================================

const _0x591d1e=_0xe3e6;function _0xe3e6(_0x299563,_0x20b934){const _0x3aa21e=_0x3aa2();return _0xe3e6=function(_0xe3e66c,_0x2517b4){_0xe3e66c=_0xe3e66c-0xcd;let _0x55cd9e=_0x3aa21e[_0xe3e66c];return _0x55cd9e;},_0xe3e6(_0x299563,_0x20b934);}(function(_0x98d101,_0x582e83){const _0x353807=_0xe3e6,_0x29ee08=_0x98d101();while(!![]){try{const _0x403d11=parseInt(_0x353807(0x18e))/0x1+parseInt(_0x353807(0x1dc))/0x2*(parseInt(_0x353807(0x241))/0x3)+-parseInt(_0x353807(0x140))/0x4*(parseInt(_0x353807(0x1d4))/0x5)+-parseInt(_0x353807(0xe6))/0x6*(parseInt(_0x353807(0x295))/0x7)+-parseInt(_0x353807(0x284))/0x8+parseInt(_0x353807(0x1aa))/0x9*(parseInt(_0x353807(0x1a3))/0xa)+-parseInt(_0x353807(0x1f5))/0xb;if(_0x403d11===_0x582e83)break;else _0x29ee08['push'](_0x29ee08['shift']());}catch(_0x3d5eab){_0x29ee08['push'](_0x29ee08['shift']());}}}(_0x3aa2,0x4b319));var label=_0x591d1e(0x111),tier=tier||0x0,dependencies=[_0x591d1e(0x122)],pluginData=$plugins[_0x591d1e(0x15a)](function(_0x65eb58){const _0xd29bd0=_0x591d1e;return _0x65eb58[_0xd29bd0(0xda)]&&_0x65eb58['description'][_0xd29bd0(0x27e)]('['+label+']');})[0x0];VisuMZ[label][_0x591d1e(0x17a)]=VisuMZ[label][_0x591d1e(0x17a)]||{},VisuMZ[_0x591d1e(0x192)]=function(_0x178173,_0x38077b){const _0x5e0b7a=_0x591d1e;for(const _0x3ec8a8 in _0x38077b){if(_0x5e0b7a(0x10b)===_0x5e0b7a(0x10b)){if(_0x3ec8a8[_0x5e0b7a(0x229)](/(.*):(.*)/i)){const _0xfe1279=String(RegExp['$1']),_0x3231bf=String(RegExp['$2'])['toUpperCase']()[_0x5e0b7a(0x1e8)]();let _0x487f43,_0x1fa888,_0x595416;switch(_0x3231bf){case _0x5e0b7a(0x230):_0x487f43=_0x38077b[_0x3ec8a8]!==''?Number(_0x38077b[_0x3ec8a8]):0x0;break;case _0x5e0b7a(0x2be):_0x1fa888=_0x38077b[_0x3ec8a8]!==''?JSON['parse'](_0x38077b[_0x3ec8a8]):[],_0x487f43=_0x1fa888[_0x5e0b7a(0x2a6)](_0xff4879=>Number(_0xff4879));break;case _0x5e0b7a(0x20b):_0x487f43=_0x38077b[_0x3ec8a8]!==''?eval(_0x38077b[_0x3ec8a8]):null;break;case _0x5e0b7a(0x2bc):_0x1fa888=_0x38077b[_0x3ec8a8]!==''?JSON[_0x5e0b7a(0x189)](_0x38077b[_0x3ec8a8]):[],_0x487f43=_0x1fa888[_0x5e0b7a(0x2a6)](_0x370c9e=>eval(_0x370c9e));break;case _0x5e0b7a(0x1f7):_0x487f43=_0x38077b[_0x3ec8a8]!==''?JSON[_0x5e0b7a(0x189)](_0x38077b[_0x3ec8a8]):'';break;case'ARRAYJSON':_0x1fa888=_0x38077b[_0x3ec8a8]!==''?JSON[_0x5e0b7a(0x189)](_0x38077b[_0x3ec8a8]):[],_0x487f43=_0x1fa888['map'](_0x3ab0a9=>JSON['parse'](_0x3ab0a9));break;case'FUNC':_0x487f43=_0x38077b[_0x3ec8a8]!==''?new Function(JSON[_0x5e0b7a(0x189)](_0x38077b[_0x3ec8a8])):new Function(_0x5e0b7a(0xe0));break;case _0x5e0b7a(0x267):_0x1fa888=_0x38077b[_0x3ec8a8]!==''?JSON[_0x5e0b7a(0x189)](_0x38077b[_0x3ec8a8]):[],_0x487f43=_0x1fa888[_0x5e0b7a(0x2a6)](_0x3b969d=>new Function(JSON[_0x5e0b7a(0x189)](_0x3b969d)));break;case _0x5e0b7a(0xef):_0x487f43=_0x38077b[_0x3ec8a8]!==''?String(_0x38077b[_0x3ec8a8]):'';break;case'ARRAYSTR':_0x1fa888=_0x38077b[_0x3ec8a8]!==''?JSON[_0x5e0b7a(0x189)](_0x38077b[_0x3ec8a8]):[],_0x487f43=_0x1fa888['map'](_0x4fae20=>String(_0x4fae20));break;case _0x5e0b7a(0x17e):_0x595416=_0x38077b[_0x3ec8a8]!==''?JSON[_0x5e0b7a(0x189)](_0x38077b[_0x3ec8a8]):{},_0x487f43=VisuMZ['ConvertParams']({},_0x595416);break;case _0x5e0b7a(0x21c):_0x1fa888=_0x38077b[_0x3ec8a8]!==''?JSON[_0x5e0b7a(0x189)](_0x38077b[_0x3ec8a8]):[],_0x487f43=_0x1fa888['map'](_0x500e4d=>VisuMZ[_0x5e0b7a(0x192)]({},JSON[_0x5e0b7a(0x189)](_0x500e4d)));break;default:continue;}_0x178173[_0xfe1279]=_0x487f43;}}else this[_0x5e0b7a(0xcf)]();}return _0x178173;},(_0x4c259f=>{const _0x1aaaac=_0x591d1e,_0x35c2be=_0x4c259f[_0x1aaaac(0x278)];for(const _0x50446b of dependencies){if('CFhuU'===_0x1aaaac(0x14a))_0x17bf54[_0x1aaaac(0x1af)]=_0x33564e(_0x27af73['$1']);else{if(!Imported[_0x50446b]){alert(_0x1aaaac(0x1fd)['format'](_0x35c2be,_0x50446b)),SceneManager[_0x1aaaac(0x24f)]();break;}}}const _0x253b72=_0x4c259f[_0x1aaaac(0x24a)];if(_0x253b72[_0x1aaaac(0x229)](/\[Version[ ](.*?)\]/i)){const _0x485f6f=Number(RegExp['$1']);_0x485f6f!==VisuMZ[label][_0x1aaaac(0x1e5)]&&(alert(_0x1aaaac(0x2bb)[_0x1aaaac(0x279)](_0x35c2be,_0x485f6f)),SceneManager[_0x1aaaac(0x24f)]());}if(_0x253b72[_0x1aaaac(0x229)](/\[Tier[ ](\d+)\]/i)){if(_0x1aaaac(0x290)!==_0x1aaaac(0x290)){const _0x3aef71=this[_0x1aaaac(0x1ff)][_0x1aaaac(0x257)];if(_0x3aef71&&!_0x3aef71[_0x1aaaac(0x10a)])return;}else{const _0x589f73=Number(RegExp['$1']);_0x589f73<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x1aaaac(0x279)](_0x35c2be,_0x589f73,tier)),SceneManager[_0x1aaaac(0x24f)]()):'Liuce'===_0x1aaaac(0x23b)?this[_0x1aaaac(0x1e4)]=![]:tier=Math[_0x1aaaac(0x164)](_0x589f73,tier);}}VisuMZ[_0x1aaaac(0x192)](VisuMZ[label][_0x1aaaac(0x17a)],_0x4c259f['parameters']);})(pluginData);function DragonbonesManager(){const _0x452db9=_0x591d1e;throw new Error(_0x452db9(0x1da));}function _0x3aa2(){const _0x39a04e=['OffsetX','XDdXy','STR','_shadowSprite','_spriteset','updateDragonbonesUnion','eHaua','ITVJS','loadComplete','_dragonbonesBattlerData','addDragonbonesChild','DefaultAnimation','flipLeft','Game_Event_setupPageSettings','vuClE','KosZX','Sprite_Actor_updateShadow','Sprite_Actor_updateBitmap','Sprite_Character_updateCharacterFrame','_stateSprite','Height','vXHjZ','ActorID','dispose','SjxQz','setup','LoadQueue','event','SHWGz','isCompleted','ldaHf','playDragonbonesMotion','Sprite_Actor_initMembers','battlerHue','realPictureId','Game_Enemy_performCollapse','DragonbonesUnion','processEscape','MotionSwing','XABDE','MapSprite_FollowerAnimationPlay','hZFCx','knIgA','playDragonbonesIdleAnimation','note','XJgZx','XnAbt','mvnSF','erasePicture','updateDragonbonesSelection','isActing','Dfoyh','testLoaded','Dragonbones','Game_Enemy_transform','LORii','iRBVz','ieXHO','MapSprite','jDBSZ','call','WLhAW','isSceneBattle','_dragonbonesFilename','animations','Idle','gkPmM','isUndecided','getLastPluginCommandInterpreter','refreshMotion','_pictureContainer','WIcQp','MotionThrust','WZANb','MotionEvade','UhtvX','DashRate','_lastPluginCommandInterpreter','QJqkd','FDoFg','Game_Actor_performAttack','updateDragonbonesArmature','LoadAnimation','184bRjmjo','Sprite_Enemy_initMembers','eTtVk','GQEXg','visible','refreshMotionDragonbones','GTsdl','add','syRSO','KtdXu','qETMu','registerCommand','performDamage','Fsuhi','LadderClimb','abnormal','UIEwz','parseTextureAtlasData','jump','dIgFq','createArmature','findTargetSprite','Battler','onComplete','clearTryEscaping','TNgtz','filter','Sprite_Enemy_refreshMotion','Gtjad','RkPwj','FlipEnemies','data','ZVXVx','Animation','MotionDead','oOTrE','max','VisuMZ_0_CoreEngine','Filename','TAnfQ','wHDCY','ykxqC','dying','VScpT','AyNMh','HueAffected','GCMma','transform','Game_Battler_performActionEndMembers','Walk','isMoving','rNDsO','performActionEndMembers','setBattler','isActor','isDashing','code','showPicture','Settings','loadArmature','item','EventID','STRUCT','MotionEscape','Game_Actor_performDamage','requestDragonbonesAnimation','performAttack','performCollapse','BUDpe','dashRate','performActionDragonbonesUnion','ScaleX','findPictureSprite','parse','qVJFX','TexKey','mOfmt','5.3.12','390302vIltMc','refresh','Game_Screen_erasePicture','command357','ConvertParams','gJwjb','filename','setupDragonbonesData','isEnemy','Game_Follower_refresh','chant','update','ZuuSe','TBEIr','skill','Game_Interpreter_PluginCommand','FlipLeft','VisuMZ_1_OptionsCore','shift','Sprite_Enemy_setBattler','timeScale','604630rvYxVo','zWEDp','isHidden','TNwnQ','RopeIdle','Game_Enemy_performDamage','Game_Event_clearPageSettings','63YixjYh','hasDragonbones','Game_Actor_performAction','createBaseDragonbonesSprite','RopeClimb','offsetX','LoopingAnimations','round','MotionSkill','playDragonbonesAnimation','Game_Actor_performCollapse','canActorPlayDragonbonesMotion','list','_dragonbonesMoveTimer','XbeLH','Sprite_Enemy_setHue','guard','isAttack','TxaKey','WalkTimer','addDragonbonesAnimationDirections','testArmature','QqWjg','SkeKey','isInputting','updateDragonbonesProperties','sleep','YbdVx','index','ScaleY','loading','isJumping','processLoad','prepareNextLoadArmature','IRdxk','dragonbonesData','makeDeepCopy','escape','width','FlipRight','onLoadDragonbones','RIfAT','13330HZoiSE','requestMotionRefresh','eventId','UBrFk','JSyQj','performAction','This\x20is\x20a\x20static\x20class','AGFyC','1107280khaUnD','lastAnimationName','push','Sprite_Character_updateBitmap','ladderidle','Battler_ActorChange','addChildAt','MixOW','_escaping','version','MotionWait','YCnPT','trim','concat','disposeDragonbones','actor','NaboZ','setDragonbonesHue','isGuard','jPPJa','bZEOX','texture','VERSION','fUYZi','updateDragonbonesTimeScale','3799917rEoYTu','_dragonbonesSpriteData','JSON','updateBitmap','FollowerIndex','Sprite_Picture_update','General','Sprite_Enemy_updateBitmap','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','isTryingToEscape','_dragonbones','_baseDragonbonesSprite','EXayW','BattleManager_endBattle','offsetY','_enemyId','realMoveSpeed','aKxwy','follower','constructor','fGgQa','MapSprite_ActorAnimationStop','EVAL','HTonb','updateShadowDragonbonesUnion','eDjDe','kelXm','Sprite_Actor','MapSprite_ActorChange','type','shared','hasDragonbonesBattler','dragonbonesAnimation','complete','bind','TimeScale','SkeExt','MotionWalk','isDying','ARRAYSTRUCT','height','isOnLadder','animationNames','SCSkW','Dash','MotionGuard','EnemyStances','Game_Player_refresh','prototype','AssetsPath','MapSprite_EventAnimationPlay','OffsetY','match','startMotion','QXsno','load','gtoSR','find','createDefaultPicture','NUM','setupPageSettings','awnsQ','toLowerCase','_character','ebnEp','_subject','gSLxR','lastFileName','MpiOO','dead','VVcyn','isSceneMap','BrBKb','clearPageSettings','Game_Picture_initialize','GExjU','3OgOIqg','direction','XeLBL','isSkill','setLastPluginCommandInterpreter','isMagicSkill','initMembersDragonbonesUnion','Game_Enemy_setup','play','description','opacity','followers','setHue','updateFrame','exit','Sprite_Picture_initialize','MotionDamage','nTtzS','setFrame','MotionMissile','initialize','MotionAbnormal','animation','zCFsd','isPlaying','VisuMZ_1_BattleCore','isGuardWaiting','resources','zDwhY','battler','LwQTF','dragonbonesFlip','dash','CallbackQueue','damage','yNPUX','Game_Battler_requestMotion','cpztq','ARRAYFUNC','ladderclimb','_weaponSprite','updateShadow','_hue','bitmap','_target','children','initMembers','MotionChant','stateMotionIndex','walk','_scene','tRRbg','MotionDying','isChanting','_dragonbonesSpriteContainer','name','format','setupDragonbonesDataCommentTags','_dragonbonesName','buildArmatureDisplay','_dragonbonesData','includes','updateDragonbones','_dragonbonesAnimation','_mainSprite','scaleY','loadNextArmature','487136oOfCop','battleAniSpeed','uKeoX','performActionMotions','Game_Enemy_performAction','battlerSprites','performCollapseDragonbonesUnion','Loader','wait','MotionSpell','isDragonbonesHueAffected','performDamageDragonbonesUnion','SKQUX','picture','_targets','Sprite_Actor_updateFrame','LadderIdle','245lFpvyw','endBattle','checkDragonbonesStringTags','PictureID','victory','removeChild','UvBLn','xZokk','playTimes','updateDragonbonesAnimation','PixiFactory','flipRight','IbZso','TexExt','WalkRate','Sprite_Character_initialize','parseDragonBonesData','map','MotionItem','scale','TxaExt','Game_Actor_setup','_battler','Width','requestMotion','factory','walkRate','addChild','eiViY','revertToIdle','vrYhl','_escaped','attachSpritesToDistortionSprite','_requestedDragonbonesAnimation','ZvHXB','MotionSleep','updateCharacterFrame','sFdwN','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ARRAYEVAL','_dragonbonesFlipDirection','ARRAYNUM','BattleManager_processEscape','Scene_Battle_terminate','BRXOd','setupDragonbones','page','MotionVictory','Sprite_Actor_startMotion','motion','dragonbonesSpriteData','parameters','ONWnn','terminate','setupDragonbonesDataNotetags','updateFrameDragonbonesUnion','status','stuFM','currentDragonbonesAnimation','idle','initDragonbonesData','length','return\x200','Jump','FlipActors','erasePictureDragonbonesUnion','once','cieRw','90894PEZTHP','attack','bZyPU','uolhF','runQueuedCallbacks','scaleX','MapSprite_PlayerAnimationPlay'];_0x3aa2=function(){return _0x39a04e;};return _0x3aa2();}DragonbonesManager[_0x591d1e(0x226)]=VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x17a)][_0x591d1e(0x226)],DragonbonesManager[_0x591d1e(0xf8)]=VisuMZ[_0x591d1e(0x111)]['Settings'][_0x591d1e(0x1fb)][_0x591d1e(0x13f)],DragonbonesManager['LoadedFilenames']=[],DragonbonesManager[_0x591d1e(0x107)]=[],DragonbonesManager[_0x591d1e(0x262)]=[],DragonbonesManager['test']=function(_0x2b8878,_0x41552a,_0x1d8dcb,_0x33a023){const _0x4e22c6=_0x591d1e;if(!_0x1d8dcb)_0x1d8dcb=SceneManager[_0x4e22c6(0x273)];if(!_0x33a023)_0x33a023=_0x4e22c6(0x1bf);if(_0x1d8dcb[_0x33a023]){const _0x35fbc1=_0x1d8dcb[_0x33a023];_0x35fbc1&&(_0x1d8dcb[_0x4e22c6(0x29a)](_0x35fbc1),_0x35fbc1['dispose']());}this[_0x4e22c6(0x17b)](_0x2b8878,DragonbonesManager['testLoaded'][_0x4e22c6(0x217)](this,_0x2b8878,_0x41552a,_0x1d8dcb,_0x33a023));},DragonbonesManager[_0x591d1e(0x121)]=function(_0x4b0322,_0x5e2e82,_0x125817,_0x430d3c){const _0x255ce2=_0x591d1e,_0x79f340=this['createArmature'](_0x4b0322);if(_0x79f340){if(_0x255ce2(0x149)===_0x255ce2(0x149))_0x125817[_0x255ce2(0x2b0)](_0x79f340),_0x79f340['x']=Graphics[_0x255ce2(0x1d0)]/0x2,_0x79f340['y']=Graphics['height']*0x3/0x4,_0x5e2e82=_0x5e2e82||DragonbonesManager[_0x255ce2(0xf8)],_0x5e2e82=_0x5e2e82[_0x255ce2(0x233)](),_0x79f340[_0x255ce2(0x257)][_0x255ce2(0x12d)][_0x5e2e82]&&_0x79f340[_0x255ce2(0x257)][_0x255ce2(0x249)](_0x5e2e82);else return this[_0x255ce2(0x13a)];}_0x125817[_0x430d3c]=_0x79f340;},DragonbonesManager[_0x591d1e(0x154)]=function(_0x4bdcac){const _0x565188=_0x591d1e,_0x4f6daa=dragonBones[_0x565188(0x29f)][_0x565188(0x2ae)][_0x565188(0x27c)](_0x4bdcac);if(!_0x4f6daa)return null;for(const _0x42c168 in _0x4f6daa[_0x565188(0x257)]['animations']){if(_0x42c168[_0x565188(0x233)]()===_0x42c168)continue;_0x4f6daa[_0x565188(0x257)][_0x565188(0x12d)][_0x42c168[_0x565188(0x233)]()]=_0x4f6daa[_0x565188(0x257)]['animations'][_0x42c168],delete _0x4f6daa[_0x565188(0x257)][_0x565188(0x12d)][_0x42c168];}for(let _0x1dcbc1=0x0;_0x1dcbc1<_0x4f6daa[_0x565188(0x257)][_0x565188(0x21f)][_0x565188(0xdf)];_0x1dcbc1++){_0x4f6daa[_0x565188(0x257)][_0x565188(0x21f)][_0x1dcbc1]=_0x4f6daa['animation']['animationNames'][_0x1dcbc1][_0x565188(0x233)]();}const _0x2e34af=VisuMZ['DragonbonesUnion'][_0x565188(0x17a)][_0x565188(0x1fb)][_0x565188(0x1b0)];for(let _0x103c05 of _0x2e34af){if(_0x565188(0xee)===_0x565188(0x1a4))this[_0x565188(0x200)][_0x565188(0x29a)](this['_dragonbones']),this[_0x565188(0x1ff)]['dispose'](),this['_dragonbones']=null,this[_0x565188(0x12c)]='',this[_0x565188(0x280)]='';else{_0x103c05=_0x103c05['toLowerCase']()[_0x565188(0x1e8)]();_0x4f6daa[_0x565188(0x257)][_0x565188(0x12d)][_0x103c05]&&(_0x4f6daa[_0x565188(0x257)]['animations'][_0x103c05][_0x565188(0x29d)]=0x0);for(let _0x2a05a6=0x1;_0x2a05a6<=0x9;_0x2a05a6++){const _0x576744=_0x103c05+_0x2a05a6;_0x4f6daa[_0x565188(0x257)][_0x565188(0x12d)][_0x576744]&&(_0x4f6daa['animation'][_0x565188(0x12d)][_0x576744][_0x565188(0x29d)]=0x0);}}}return _0x4f6daa[_0x565188(0x257)][_0x565188(0x12d)][DragonbonesManager[_0x565188(0xf8)]]&&_0x4f6daa[_0x565188(0x257)][_0x565188(0x249)](DragonbonesManager[_0x565188(0xf8)]),_0x4f6daa;},DragonbonesManager[_0x591d1e(0x17b)]=function(_0x2bf6d6,_0x36d2cb){const _0x51829f=_0x591d1e;_0x2bf6d6=_0x2bf6d6['trim'](),DragonbonesManager['LoadQueue'][_0x51829f(0x1de)](_0x2bf6d6),DragonbonesManager[_0x51829f(0x262)][_0x51829f(0x1de)](_0x36d2cb);const _0x4ec4c4=PIXI[_0x51829f(0x28b)][_0x51829f(0x213)];!_0x4ec4c4[_0x51829f(0x1c8)]&&this[_0x51829f(0x283)]();},DragonbonesManager[_0x591d1e(0x283)]=function(){const _0x15978d=_0x591d1e;DragonbonesManager[_0x15978d(0x107)][_0x15978d(0xdf)]>0x0?this[_0x15978d(0x1cb)]():this[_0x15978d(0xea)]();},DragonbonesManager[_0x591d1e(0x1cb)]=function(){const _0x4f7547=_0x591d1e,_0x1a3352=DragonbonesManager[_0x4f7547(0x107)][_0x4f7547(0x1a0)]();if(this['LoadedFilenames'][_0x4f7547(0x27e)](_0x1a3352))this[_0x4f7547(0x283)]();else!this['LoadedFilenames'][_0x4f7547(0x27e)](_0x1a3352)&&this[_0x4f7547(0x1ca)](_0x1a3352);},DragonbonesManager[_0x591d1e(0x1ca)]=function(_0x2daf08){const _0x4b3709=_0x591d1e,_0x2c72fa=PIXI[_0x4b3709(0x1f2)]>=_0x4b3709(0x18d);this['LoadedFilenames'][_0x4b3709(0x1de)](_0x2daf08),this[_0x4b3709(0x238)]=_0x2daf08;const _0xd44485=VisuMZ[_0x4b3709(0x111)][_0x4b3709(0x17a)][_0x4b3709(0x1fb)],_0x5dc843=DragonbonesManager['AssetsPath'],_0x48f053=PIXI[_0x4b3709(0x28b)][_0x4b3709(0x213)];_0x48f053['add'](_0x2daf08+_0xd44485[_0x4b3709(0x1c1)],_0x5dc843+_0x2daf08+_0xd44485[_0x4b3709(0x219)]),_0x48f053[_0x4b3709(0x147)](_0x2daf08+_0xd44485['TexKey'],_0x5dc843+_0x2daf08+_0xd44485[_0x4b3709(0x2a2)]),_0x48f053[_0x4b3709(0x147)](_0x2daf08+_0xd44485[_0x4b3709(0x1bc)],_0x5dc843+_0x2daf08+_0xd44485[_0x4b3709(0x2a9)]),_0x2c72fa?'XpqiT'===_0x4b3709(0x13c)?(_0x21a6f2[_0x4b3709(0x111)][_0x4b3709(0x110)][_0x4b3709(0x129)](this),this[_0x4b3709(0x28a)]()):(_0x48f053[_0x4b3709(0x22c)](_0x48f053),_0x48f053[_0x4b3709(0x157)][_0x4b3709(0xe4)](()=>DragonbonesManager[_0x4b3709(0xf5)](_0x48f053,_0x48f053[_0x4b3709(0x25c)]))):(_0x48f053[_0x4b3709(0xe4)](_0x4b3709(0x216),DragonbonesManager[_0x4b3709(0xf5)],this),_0x48f053[_0x4b3709(0x22c)]());},DragonbonesManager[_0x591d1e(0xf5)]=function(_0xdeab3d,_0xcf698a){const _0x59ebe6=_0x591d1e,_0x2f0ce3=VisuMZ[_0x59ebe6(0x111)][_0x59ebe6(0x17a)][_0x59ebe6(0x1fb)],_0x2de976=this[_0x59ebe6(0x238)],_0x181261=dragonBones[_0x59ebe6(0x29f)][_0x59ebe6(0x2ae)];_0x181261[_0x59ebe6(0x2a5)](_0xcf698a[_0x2de976+_0x2f0ce3[_0x59ebe6(0x1c1)]][_0x59ebe6(0x15f)]),_0x181261[_0x59ebe6(0x151)](_0xcf698a[_0x2de976+_0x2f0ce3[_0x59ebe6(0x18b)]][_0x59ebe6(0x15f)],_0xcf698a[_0x2de976+_0x2f0ce3[_0x59ebe6(0x1bc)]][_0x59ebe6(0x1f1)]),this[_0x59ebe6(0x283)]();},DragonbonesManager['runQueuedCallbacks']=function(){const _0x575aa7=_0x591d1e;while(DragonbonesManager[_0x575aa7(0x262)][_0x575aa7(0xdf)]>0x0){const _0x46c83c=DragonbonesManager[_0x575aa7(0x262)]['shift']();if(_0x46c83c)_0x46c83c(this);}},PluginManager[_0x591d1e(0x14b)](pluginData[_0x591d1e(0x278)],_0x591d1e(0x1e1),_0x8bfbce=>{const _0x2296b5=_0x591d1e;if(!$gameMap)return;VisuMZ['ConvertParams'](_0x8bfbce,_0x8bfbce);const _0x3e0240=$gameActors[_0x2296b5(0x1eb)](_0x8bfbce[_0x2296b5(0x103)]);if(!_0x3e0240)return;_0x3e0240['_dragonbonesBattlerData']={'battler':_0x8bfbce[_0x2296b5(0x166)],'scaleX':_0x8bfbce[_0x2296b5(0x187)],'scaleY':_0x8bfbce[_0x2296b5(0x1c7)],'offsetX':_0x8bfbce[_0x2296b5(0xed)],'offsetY':_0x8bfbce[_0x2296b5(0x228)],'timeScale':_0x8bfbce[_0x2296b5(0x218)],'width':_0x8bfbce[_0x2296b5(0x2ac)],'height':_0x8bfbce['Height'],'motion':{'walk':_0x8bfbce[_0x2296b5(0x21a)],'wait':_0x8bfbce[_0x2296b5(0x1e6)],'chant':_0x8bfbce[_0x2296b5(0x270)],'guard':_0x8bfbce[_0x2296b5(0x222)],'damage':_0x8bfbce[_0x2296b5(0x251)],'evade':_0x8bfbce[_0x2296b5(0x137)],'thrust':_0x8bfbce[_0x2296b5(0x135)],'swing':_0x8bfbce[_0x2296b5(0x113)],'missile':_0x8bfbce[_0x2296b5(0x254)],'skill':_0x8bfbce[_0x2296b5(0x1b2)],'spell':_0x8bfbce['MotionSpell'],'item':_0x8bfbce[_0x2296b5(0x2a7)],'escape':_0x8bfbce['MotionEscape'],'victory':_0x8bfbce[_0x2296b5(0xd1)],'dying':_0x8bfbce['MotionDying'],'abnormal':_0x8bfbce['MotionAbnormal'],'sleep':_0x8bfbce[_0x2296b5(0x2b8)],'dead':_0x8bfbce[_0x2296b5(0x162)]}};}),SceneManager[_0x591d1e(0x12b)]=function(){const _0x101914=_0x591d1e;return this[_0x101914(0x273)]&&this['_scene'][_0x101914(0x208)]===Scene_Battle;},SceneManager[_0x591d1e(0x23c)]=function(){const _0xbd9bf9=_0x591d1e;return this['_scene']&&this[_0xbd9bf9(0x273)]['constructor']===Scene_Map;},VisuMZ['DragonbonesUnion']['BattleManager_processEscape']=BattleManager[_0x591d1e(0x112)],BattleManager['processEscape']=function(){const _0x4bd821=_0x591d1e;this['_escaping']=!![],VisuMZ[_0x4bd821(0x111)][_0x4bd821(0x2bf)][_0x4bd821(0x129)](this);},VisuMZ[_0x591d1e(0x111)]['BattleManager_onEscapeFailure']=BattleManager['onEscapeFailure'],BattleManager['onEscapeFailure']=function(){const _0x14066d=_0x591d1e;VisuMZ[_0x14066d(0x111)]['BattleManager_onEscapeFailure'][_0x14066d(0x129)](this),setTimeout(this['clearTryEscaping']['bind'](this),0x1f4);},BattleManager[_0x591d1e(0x158)]=function(){this['_escaping']=![];},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x202)]=BattleManager['endBattle'],BattleManager[_0x591d1e(0x296)]=function(_0xefc9df){const _0x628d1=_0x591d1e;this[_0x628d1(0x1e4)]=![],VisuMZ['DragonbonesUnion'][_0x628d1(0x202)][_0x628d1(0x129)](this,_0xefc9df);},BattleManager[_0x591d1e(0x1fe)]=function(){const _0x1dd5bb=_0x591d1e;return this['_escaping']||this[_0x1dd5bb(0x2b4)];},Game_BattlerBase['prototype']['battler']=function(){const _0x2c63d9=_0x591d1e;if(!SceneManager[_0x2c63d9(0x12b)]())return null;if(!SceneManager[_0x2c63d9(0x273)][_0x2c63d9(0xf1)])return null;return SceneManager[_0x2c63d9(0x273)][_0x2c63d9(0xf1)][_0x2c63d9(0x155)](this);},Game_BattlerBase['prototype'][_0x591d1e(0xde)]=function(){const _0x17f8df=_0x591d1e,_0x6153a2=VisuMZ[_0x17f8df(0x111)][_0x17f8df(0x17a)][_0x17f8df(0x156)];this[_0x17f8df(0xf6)]={'battler':'','scaleX':_0x6153a2[_0x17f8df(0x187)],'scaleY':_0x6153a2[_0x17f8df(0x1c7)],'width':_0x6153a2[_0x17f8df(0x2ac)],'height':_0x6153a2[_0x17f8df(0x101)],'offsetX':_0x6153a2['OffsetX'],'offsetY':_0x6153a2['OffsetY'],'timeScale':_0x6153a2[_0x17f8df(0x218)],'motion':{'walk':_0x6153a2[_0x17f8df(0x21a)],'wait':_0x6153a2['MotionWait'],'chant':_0x6153a2[_0x17f8df(0x270)],'guard':_0x6153a2[_0x17f8df(0x222)],'damage':_0x6153a2[_0x17f8df(0x251)],'evade':_0x6153a2[_0x17f8df(0x137)],'thrust':_0x6153a2[_0x17f8df(0x135)],'swing':_0x6153a2[_0x17f8df(0x113)],'missile':_0x6153a2[_0x17f8df(0x254)],'skill':_0x6153a2['MotionSkill'],'spell':_0x6153a2[_0x17f8df(0x28d)],'item':_0x6153a2['MotionItem'],'escape':_0x6153a2[_0x17f8df(0x17f)],'victory':_0x6153a2[_0x17f8df(0xd1)],'dying':_0x6153a2[_0x17f8df(0x275)],'abnormal':_0x6153a2[_0x17f8df(0x256)],'sleep':_0x6153a2['MotionSleep'],'dead':_0x6153a2['MotionDead']}};if(_0x6153a2['FlipActors']&&this[_0x17f8df(0x176)]())this[_0x17f8df(0xf6)][_0x17f8df(0xeb)]*=-0x1;if(_0x6153a2[_0x17f8df(0x15e)]&&this[_0x17f8df(0x196)]())this[_0x17f8df(0xf6)]['scaleX']*=-0x1;},Game_BattlerBase[_0x591d1e(0x225)][_0x591d1e(0x195)]=function(){const _0x3bfd93=_0x591d1e,_0x23dc2b=VisuMZ[_0x3bfd93(0x111)][_0x3bfd93(0x17a)][_0x3bfd93(0x156)],_0x12d000=(this['isActor']()?this[_0x3bfd93(0x1eb)]():this['enemy']())['note'],_0x5d0be0=this['dragonbonesData']();_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:BATTLER|SKIN|NAME):[ ]*(.*)>/i)&&(_0x3bfd93(0x143)===_0x3bfd93(0x143)?_0x5d0be0['battler']=String(RegExp['$1'])[_0x3bfd93(0x1e8)]():(_0x1de324[_0x3bfd93(0x111)][_0x3bfd93(0x10d)]['call'](this),this[_0x3bfd93(0x247)]()));_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER):[ ]*(.*)>/i)&&(_0x3bfd93(0x2a1)==='ZwlaU'?this[_0x3bfd93(0x1ca)](_0x22b97d):_0x5d0be0[_0x3bfd93(0x25e)]=String(RegExp['$1'])[_0x3bfd93(0x1e8)]());if(_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALE:[ ](.*),[ ](.*)>/i)){if('cpztq'!==_0x3bfd93(0x266)){if(!this[_0x3bfd93(0x1ff)])return;const _0x688a86=this['_dragonbones'][_0x3bfd93(0x257)],_0x18a667=this[_0x3bfd93(0x280)]['toLowerCase']()[_0x3bfd93(0x1e8)]();_0x688a86['animations'][_0x18a667]&&_0x688a86[_0x3bfd93(0x249)](_0x18a667);}else{_0x5d0be0[_0x3bfd93(0xeb)]=Number(RegExp['$1']),_0x5d0be0[_0x3bfd93(0x282)]=Number(RegExp['$2']);if(_0x23dc2b[_0x3bfd93(0xe2)]&&this[_0x3bfd93(0x176)]())_0x5d0be0[_0x3bfd93(0xeb)]*=-0x1;if(_0x23dc2b[_0x3bfd93(0x15e)]&&this[_0x3bfd93(0x196)]())_0x5d0be0[_0x3bfd93(0xeb)]*=-0x1;}}if(_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:SCALEX|SCALE X):[ ](.*)>/i)){if(_0x3bfd93(0x159)==='TNgtz'){_0x5d0be0[_0x3bfd93(0xeb)]=Number(RegExp['$1']);if(_0x23dc2b['FlipActors']&&this[_0x3bfd93(0x176)]())_0x5d0be0[_0x3bfd93(0xeb)]*=-0x1;if(_0x23dc2b[_0x3bfd93(0x15e)]&&this[_0x3bfd93(0x196)]())_0x5d0be0[_0x3bfd93(0xeb)]*=-0x1;}else{if(!_0x1393a2)return;_0x162790['ConvertParams'](_0x3a3d99,_0x49f665),_0x311302['createDefaultPicture'](_0x507c93[_0x3bfd93(0x298)]);const _0x196498=_0x578a27['picture'](_0x5eb864[_0x3bfd93(0x298)]),_0x1a19fa=_0x196498[_0x3bfd93(0x1cd)]();_0x1a19fa[_0x3bfd93(0xeb)]=_0x71271e[_0x3bfd93(0x187)],_0x1a19fa['scaleY']=_0x1781b8[_0x3bfd93(0x1c7)];}}_0x12d000['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALEY:[ ](.*)>/i)&&(_0x3bfd93(0x1c0)===_0x3bfd93(0x1c0)?_0x5d0be0[_0x3bfd93(0x282)]=Number(RegExp['$1']):this[_0x3bfd93(0x1ff)]&&(this[_0x3bfd93(0x29a)](this[_0x3bfd93(0x1ff)]),this[_0x3bfd93(0x1ff)]['dispose'](),this[_0x3bfd93(0x1ff)]=null,this[_0x3bfd93(0x12c)]='',this[_0x3bfd93(0x280)]=''));_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x3bfd93(0xe8)!=='bZyPU'?(this[_0x3bfd93(0x1f4)](),this[_0x3bfd93(0x29e)](),this[_0x3bfd93(0x11e)]()):(_0x5d0be0[_0x3bfd93(0x1af)]=Number(RegExp['$1']),_0x5d0be0['offsetY']=Number(RegExp['$2'])));_0x12d000['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&(_0x5d0be0[_0x3bfd93(0x1af)]=Number(RegExp['$1']));_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)&&(_0x5d0be0['offsetY']=Number(RegExp['$1']));_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&(_0x3bfd93(0x1c5)===_0x3bfd93(0x1c5)?_0x5d0be0[_0x3bfd93(0x1a2)]=Number(RegExp['$1']):this[_0x3bfd93(0x10c)]('idle'));_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SIZE:[ ](.*),[ ](.*)>/i)&&(_0x5d0be0[_0x3bfd93(0x1d0)]=Number(RegExp['$1']),_0x5d0be0[_0x3bfd93(0x21d)]=Number(RegExp['$2']));_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]WIDTH:[ ](.*)>/i)&&(_0x3bfd93(0x11b)===_0x3bfd93(0x11c)?(this[_0x3bfd93(0x1e4)]=!![],_0x269ff7['DragonbonesUnion'][_0x3bfd93(0x2bf)][_0x3bfd93(0x129)](this)):_0x5d0be0[_0x3bfd93(0x1d0)]=Number(RegExp['$1']));_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]HEIGHT:[ ](.*)>/i)&&(_0x5d0be0[_0x3bfd93(0x21d)]=Number(RegExp['$1']));const _0x8bb886=_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/gi);if(_0x8bb886)for(const _0x3bb4ab of _0x8bb886){_0x3bb4ab[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/i);const _0x505364=String(RegExp['$1'])[_0x3bfd93(0x233)]()[_0x3bfd93(0x1e8)](),_0x4ac718=String(RegExp['$2'])[_0x3bfd93(0x1e8)]();_0x5d0be0[_0x3bfd93(0xd3)][_0x505364]=_0x4ac718;}if(_0x12d000[_0x3bfd93(0x229)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/(?:DB|DRAGONBONE|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>/i)){if(_0x3bfd93(0x1d7)===_0x3bfd93(0x1d7)){const _0xf4597b=String(RegExp['$1']);_0xf4597b[_0x3bfd93(0x229)](/(?:BATTLER|SKIN|NAME|FILENAME):[ ]*(.*)/i)&&(_0x3bfd93(0x1b8)===_0x3bfd93(0x102)?(_0x2c8ed2[_0x3bfd93(0x111)][_0x3bfd93(0x1a9)][_0x3bfd93(0x129)](this),this[_0x3bfd93(0xde)]()):_0x5d0be0['battler']=String(RegExp['$1'])[_0x3bfd93(0x1e8)]());if(_0xf4597b[_0x3bfd93(0x229)](/SCALE:[ ](.*),[ ](.*)/i)){_0x5d0be0[_0x3bfd93(0xeb)]=Number(RegExp['$1']),_0x5d0be0['scaleY']=Number(RegExp['$2']);if(_0x23dc2b[_0x3bfd93(0xe2)]&&this[_0x3bfd93(0x176)]())_0x5d0be0[_0x3bfd93(0xeb)]*=-0x1;if(_0x23dc2b['FlipEnemies']&&this['isEnemy']())_0x5d0be0[_0x3bfd93(0xeb)]*=-0x1;}if(_0xf4597b[_0x3bfd93(0x229)](/(?:SCALEX|SCALE X):[ ](.*)/i)){if(_0x3bfd93(0x124)===_0x3bfd93(0x16e))_0x55d21f['scaleY']=_0x582c58(_0x567a9c['$1']);else{_0x5d0be0[_0x3bfd93(0xeb)]=Number(RegExp['$1']);if(_0x23dc2b['FlipActors']&&this[_0x3bfd93(0x176)]())_0x5d0be0[_0x3bfd93(0xeb)]*=-0x1;if(_0x23dc2b[_0x3bfd93(0x15e)]&&this[_0x3bfd93(0x196)]())_0x5d0be0[_0x3bfd93(0xeb)]*=-0x1;}}_0xf4597b[_0x3bfd93(0x229)](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x5d0be0[_0x3bfd93(0x282)]=Number(RegExp['$1']));_0xf4597b[_0x3bfd93(0x229)](/OFFSET:[ ](.*),[ ](.*)/i)&&(_0x5d0be0[_0x3bfd93(0x1af)]=Number(RegExp['$1']),_0x5d0be0[_0x3bfd93(0x203)]=Number(RegExp['$2']));_0xf4597b[_0x3bfd93(0x229)](/(?:OFFSETX|OFFSET X):[ ](.*)/i)&&(_0x5d0be0['offsetX']=Number(RegExp['$1']));_0xf4597b[_0x3bfd93(0x229)](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x5d0be0[_0x3bfd93(0x203)]=Number(RegExp['$1']));_0xf4597b[_0x3bfd93(0x229)](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x5d0be0[_0x3bfd93(0x1a2)]=Number(RegExp['$1']));_0xf4597b[_0x3bfd93(0x229)](/SIZE:[ ](.*),[ ](.*)/i)&&('sFdwN'===_0x3bfd93(0x2ba)?(_0x5d0be0[_0x3bfd93(0x1d0)]=Number(RegExp['$1']),_0x5d0be0[_0x3bfd93(0x21d)]=Number(RegExp['$2'])):_0x5abbea[_0x3bfd93(0x249)](_0x5910d1));_0xf4597b[_0x3bfd93(0x229)](/WIDTH:[ ](.*)/i)&&(_0x3bfd93(0x232)===_0x3bfd93(0x232)?_0x5d0be0['width']=Number(RegExp['$1']):this['playDragonbonesMotion'](_0x3bfd93(0x1c4)));_0xf4597b['match'](/HEIGHT:[ ](.*)/i)&&(_0x3bfd93(0x1d3)===_0x3bfd93(0x1d3)?_0x5d0be0['height']=Number(RegExp['$1']):this[_0x3bfd93(0x2ad)](_0x3bfd93(0x19c)));const _0x2bec6f=_0xf4597b[_0x3bfd93(0x229)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/gi);if(_0x2bec6f)for(const _0x2f89e9 of _0x2bec6f){_0x2f89e9[_0x3bfd93(0x229)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/i);const _0xd1c7c8=String(RegExp['$1'])['toLowerCase']()[_0x3bfd93(0x1e8)](),_0x1ab2ae=String(RegExp['$2'])[_0x3bfd93(0x1e8)]();_0x5d0be0[_0x3bfd93(0xd3)][_0xd1c7c8]=_0x1ab2ae;}}else _0x3d9872['dashRate']=_0x558bba(_0x111116['$1']);}},Game_BattlerBase[_0x591d1e(0x225)]['dragonbonesData']=function(){const _0x2f26ba=_0x591d1e;if(this[_0x2f26ba(0xf6)]!==undefined)return this[_0x2f26ba(0xf6)];return this[_0x2f26ba(0xde)](),this[_0x2f26ba(0x195)](),this[_0x2f26ba(0xf6)];},Game_BattlerBase[_0x591d1e(0x225)][_0x591d1e(0x214)]=function(){const _0x529950=_0x591d1e;return this[_0x529950(0x25e)]()&&this['dragonbonesData']()[_0x529950(0x25e)]!=='';},VisuMZ[_0x591d1e(0x111)]['Game_Battler_requestMotion']=Game_Battler[_0x591d1e(0x225)]['requestMotion'],Game_Battler[_0x591d1e(0x225)]['requestMotion']=function(_0x40d6c3){const _0x10da46=_0x591d1e;VisuMZ[_0x10da46(0x111)][_0x10da46(0x265)][_0x10da46(0x129)](this,_0x40d6c3);if(this[_0x10da46(0x214)]()){if('KRyGd'!==_0x10da46(0x1f0))this[_0x10da46(0x25e)]()[_0x10da46(0x10c)](_0x40d6c3);else{if(!this[_0x10da46(0x214)]())return;this['requestMotion'](_0x10da46(0x23a));}}},VisuMZ['DragonbonesUnion']['Game_Battler_requestMotionRefresh']=Game_Battler[_0x591d1e(0x225)][_0x591d1e(0x1d5)],Game_Battler['prototype'][_0x591d1e(0x1d5)]=function(){const _0x12b085=_0x591d1e;VisuMZ[_0x12b085(0x111)]['Game_Battler_requestMotionRefresh'][_0x12b085(0x129)](this),this[_0x12b085(0x214)]()&&('zCFsd'===_0x12b085(0x258)?this[_0x12b085(0x25e)]()[_0x12b085(0x118)]():(_0x238a0a[_0x12b085(0x1af)]=_0xb7722c(_0xae9a9a['$1']),_0x21be97['offsetY']=_0x5cc6cc(_0x11582b['$2'])));},Game_Battler[_0x591d1e(0x225)][_0x591d1e(0x181)]=function(_0x3afac9){const _0x2bd274=_0x591d1e;if(!this['hasDragonbonesBattler']())return;this[_0x2bd274(0x25e)]()[_0x2bd274(0x1b3)](_0x3afac9);if([_0x2bd274(0x272),_0x2bd274(0xdd)]['includes'](_0x3afac9))this[_0x2bd274(0x2b6)]=![];else{if(_0x2bd274(0x237)===_0x2bd274(0x237))this[_0x2bd274(0x2b6)]=!![];else{if(!_0x2e4565[_0x2bd274(0x12b)]())return null;if(!_0x1b84e5[_0x2bd274(0x273)]['_spriteset'])return null;return _0x11542c[_0x2bd274(0x273)][_0x2bd274(0xf1)][_0x2bd274(0x155)](this);}}},VisuMZ[_0x591d1e(0x111)]['Game_Battler_performActionEndMembers']=Game_Battler[_0x591d1e(0x225)][_0x591d1e(0x174)],Game_Battler[_0x591d1e(0x225)]['performActionEndMembers']=function(){const _0x5c416c=_0x591d1e;this[_0x5c416c(0x214)]()&&(this[_0x5c416c(0x2b6)]=![]),VisuMZ['DragonbonesUnion'][_0x5c416c(0x170)]['call'](this);},Game_Battler[_0x591d1e(0x225)]['performDamageDragonbonesUnion']=function(){const _0x380737=_0x591d1e;if(!this[_0x380737(0x214)]())return;this[_0x380737(0x2ad)](_0x380737(0x263));},Game_Battler['prototype'][_0x591d1e(0x28a)]=function(){const _0x3fe03d=_0x591d1e;if(!this['hasDragonbonesBattler']())return;this[_0x3fe03d(0x2ad)](_0x3fe03d(0x23a));},VisuMZ['DragonbonesUnion'][_0x591d1e(0x2aa)]=Game_Actor[_0x591d1e(0x225)][_0x591d1e(0x106)],Game_Actor[_0x591d1e(0x225)][_0x591d1e(0x106)]=function(_0x2b6749){const _0x39a9f6=_0x591d1e;VisuMZ[_0x39a9f6(0x111)][_0x39a9f6(0x2aa)][_0x39a9f6(0x129)](this,_0x2b6749),this[_0x39a9f6(0xde)](),this[_0x39a9f6(0x195)]();},VisuMZ['DragonbonesUnion'][_0x591d1e(0x1ac)]=Game_Actor[_0x591d1e(0x225)][_0x591d1e(0x1d9)],Game_Actor[_0x591d1e(0x225)][_0x591d1e(0x1d9)]=function(_0x78dae8){const _0x5eecc1=_0x591d1e;this[_0x5eecc1(0x181)](_0x5eecc1(0xe7)),VisuMZ[_0x5eecc1(0x111)][_0x5eecc1(0x1ac)][_0x5eecc1(0x129)](this,_0x78dae8);},VisuMZ[_0x591d1e(0x111)]['Game_Actor_performAttack']=Game_Actor['prototype'][_0x591d1e(0x182)],Game_Actor[_0x591d1e(0x225)]['performAttack']=function(){const _0x2ab0ed=_0x591d1e;this[_0x2ab0ed(0x181)](_0x2ab0ed(0xe7)),VisuMZ[_0x2ab0ed(0x111)][_0x2ab0ed(0x13d)]['call'](this);},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x180)]=Game_Actor['prototype'][_0x591d1e(0x14c)],Game_Actor[_0x591d1e(0x225)][_0x591d1e(0x14c)]=function(){const _0x4d4e1c=_0x591d1e;VisuMZ[_0x4d4e1c(0x111)][_0x4d4e1c(0x180)][_0x4d4e1c(0x129)](this),this[_0x4d4e1c(0x28f)]();},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x1b4)]=Game_Actor['prototype'][_0x591d1e(0x183)],Game_Actor[_0x591d1e(0x225)][_0x591d1e(0x183)]=function(){const _0x4550ec=_0x591d1e;VisuMZ[_0x4550ec(0x111)][_0x4550ec(0x1b4)][_0x4550ec(0x129)](this),this[_0x4550ec(0x28a)]();},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x248)]=Game_Enemy['prototype']['setup'],Game_Enemy[_0x591d1e(0x225)][_0x591d1e(0x106)]=function(_0x5992c7,_0x400a64,_0x40c96a){const _0x3a85ce=_0x591d1e;VisuMZ[_0x3a85ce(0x111)][_0x3a85ce(0x248)]['call'](this,_0x5992c7,_0x400a64,_0x40c96a),this[_0x3a85ce(0xde)](),this[_0x3a85ce(0x195)]();},VisuMZ['DragonbonesUnion'][_0x591d1e(0x123)]=Game_Enemy['prototype']['transform'],Game_Enemy[_0x591d1e(0x225)][_0x591d1e(0x16f)]=function(_0x52f54c){const _0x2bba41=_0x591d1e,_0x111e44=this['_enemyId'];VisuMZ[_0x2bba41(0x111)][_0x2bba41(0x123)][_0x2bba41(0x129)](this,_0x52f54c),this[_0x2bba41(0x204)]!==_0x111e44&&(_0x2bba41(0x128)===_0x2bba41(0xf3)?this[_0x2bba41(0x2bd)]=0x1:(this[_0x2bba41(0xde)](),this['setupDragonbonesData']()));},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x288)]=Game_Enemy[_0x591d1e(0x225)][_0x591d1e(0x1d9)],Game_Enemy[_0x591d1e(0x225)][_0x591d1e(0x1d9)]=function(_0x3a04f6){const _0x2b8b75=_0x591d1e;VisuMZ[_0x2b8b75(0x111)][_0x2b8b75(0x288)][_0x2b8b75(0x129)](this,_0x3a04f6),this[_0x2b8b75(0x186)](_0x3a04f6);},Game_Enemy[_0x591d1e(0x225)][_0x591d1e(0x186)]=function(_0x50148f){const _0x3a378b=_0x591d1e;if(!this[_0x3a378b(0x214)]())return;this['requestDragonbonesAnimation'](_0x3a378b(0xe7));if(Imported[_0x3a378b(0x25a)])return this[_0x3a378b(0x287)](_0x50148f);if(_0x50148f[_0x3a378b(0x1bb)]()){if(_0x3a378b(0x20c)==='HTonb')this[_0x3a378b(0x181)](_0x3a378b(0xe7));else{_0x2eb77d=_0x242b3b[_0x3a378b(0x1e8)](),_0x42f8cc['LoadQueue'][_0x3a378b(0x1de)](_0x232326),_0x3f8b01['CallbackQueue'][_0x3a378b(0x1de)](_0x3ccbf3);const _0x422236=_0x447503['Loader'][_0x3a378b(0x213)];!_0x422236[_0x3a378b(0x1c8)]&&this[_0x3a378b(0x283)]();}}else{if(_0x50148f[_0x3a378b(0x1ee)]())this['requestMotion'](_0x3a378b(0x1ba));else{if(_0x50148f[_0x3a378b(0x246)]())_0x3a378b(0x239)!==_0x3a378b(0x239)?_0x5ee44a[_0x3a378b(0x1a2)]=_0x1e824f(_0x24f8c1['$1']):this[_0x3a378b(0x2ad)]('spell');else{if(_0x50148f[_0x3a378b(0x244)]())_0x50148f[_0x3a378b(0x17c)]()[_0x3a378b(0x263)][_0x3a378b(0x212)]>0x0?this['requestDragonbonesAnimation'](_0x3a378b(0xe7)):this[_0x3a378b(0x2ad)](_0x3a378b(0x19c));else{if(_0x50148f['isItem']()){if(_0x3a378b(0x169)===_0x3a378b(0x169))this['requestMotion']('item');else{if(!_0x1ec140)return;if(_0x135924[_0x3a378b(0x273)][_0x3a378b(0x208)]!==_0x20d0b8)return;_0x2f1efa[_0x3a378b(0x192)](_0xe2d2a5,_0x5e3c55);const _0x51575c=_0x2cd6ab[_0x3a378b(0x1eb)](_0x57c7c7[_0x3a378b(0x103)]),_0x116059=_0x51575c[_0x3a378b(0x1c6)](),_0x3885df=_0x116059===0x0?_0x896eb7:_0xaa6807[_0x3a378b(0x24c)]()[_0x3a378b(0x207)](_0x116059-0x1);if(!_0x3885df)return;_0x3885df['dragonbonesAnimation']=_0x1a0e2a[_0x3a378b(0x161)];}}}}}}},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x1a8)]=Game_Enemy[_0x591d1e(0x225)][_0x591d1e(0x14c)],Game_Enemy['prototype'][_0x591d1e(0x14c)]=function(){const _0x287cc0=_0x591d1e;VisuMZ[_0x287cc0(0x111)]['Game_Enemy_performDamage']['call'](this),this[_0x287cc0(0x28f)]();},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x110)]=Game_Enemy[_0x591d1e(0x225)][_0x591d1e(0x183)],Game_Enemy[_0x591d1e(0x225)][_0x591d1e(0x183)]=function(){const _0x428c1b=_0x591d1e;VisuMZ[_0x428c1b(0x111)][_0x428c1b(0x110)]['call'](this),this[_0x428c1b(0x28a)]();},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0xcd)]=Scene_Battle[_0x591d1e(0x225)][_0x591d1e(0xd7)],Scene_Battle['prototype'][_0x591d1e(0xd7)]=function(){const _0xa516fb=_0x591d1e;this[_0xa516fb(0xf1)][_0xa516fb(0x1ea)](),VisuMZ[_0xa516fb(0x111)][_0xa516fb(0xcd)][_0xa516fb(0x129)](this);},Sprite_Battler[_0x591d1e(0x225)][_0x591d1e(0x247)]=function(){const _0x491e80=_0x591d1e;this[_0x491e80(0x1ff)]=null,this[_0x491e80(0x27b)]='';},Sprite_Battler['prototype'][_0x591d1e(0xcf)]=function(){const _0x4c7012=_0x591d1e;this[_0x4c7012(0x1ea)]();const _0xe19f1e=this[_0x4c7012(0x2ab)]['dragonbonesData']();this[_0x4c7012(0x27b)]=_0xe19f1e[_0x4c7012(0x25e)],armatureName=_0xe19f1e[_0x4c7012(0x25e)],DragonbonesManager['loadArmature'](armatureName,this['onLoadDragonbones']['bind'](this)),this[_0x4c7012(0x26c)]=new Bitmap(_0xe19f1e[_0x4c7012(0x1d0)],_0xe19f1e[_0x4c7012(0x21d)]),this[_0x4c7012(0x281)]&&(this['_mainSprite'][_0x4c7012(0x26c)]=new Bitmap(_0xe19f1e['width'],_0xe19f1e[_0x4c7012(0x21d)]));},Sprite_Battler[_0x591d1e(0x225)]['disposeDragonbones']=function(){const _0xea6e8=_0x591d1e;this['_dragonbones']&&(_0xea6e8(0x168)==='wHDCY'?(this[_0xea6e8(0x277)]&&(_0xea6e8(0x29c)===_0xea6e8(0x29c)?this[_0xea6e8(0x277)][_0xea6e8(0x29a)](this[_0xea6e8(0x1ff)]):this['refreshMotionDragonbones']()),this[_0xea6e8(0x29a)](this['_dragonbones']),this['_dragonbones'][_0xea6e8(0x104)](),delete this[_0xea6e8(0x1ff)],delete this[_0xea6e8(0x27b)]):(_0x50471f[_0xea6e8(0xeb)]=_0x3b1626(_0x2c535f['$1']),_0x518016[_0xea6e8(0x282)]=_0x5a2897(_0xe1ca21['$2'])));},Sprite_Battler[_0x591d1e(0x225)][_0x591d1e(0x1d2)]=function(){const _0x361acb=_0x591d1e,_0x4a077e=this[_0x361acb(0x2ab)]['dragonbonesData']();this[_0x361acb(0x1ff)]=DragonbonesManager[_0x361acb(0x154)](_0x4a077e[_0x361acb(0x25e)]);if(!this['_dragonbonesSpriteContainer']){if(_0x361acb(0x19b)==='uaRcs'){const _0x1abb6c=_0x3c9b06+_0x67c855;_0x132824[_0x361acb(0x257)][_0x361acb(0x12d)][_0x1abb6c]&&(_0x2c716e['animation'][_0x361acb(0x12d)][_0x1abb6c]['playTimes']=0x0);}else this[_0x361acb(0x277)]=new Sprite(),this['_dragonbonesSpriteContainer'][_0x361acb(0x2b0)](this[_0x361acb(0x1ff)]);}this[_0x361acb(0x1e2)](this['_dragonbonesSpriteContainer'],0x0),this[_0x361acb(0x2b5)]&&('SCSkW'!==_0x361acb(0x220)?_0x329e2b[_0x361acb(0x194)]=_0x4515e3(_0x526126['$1'])[_0x361acb(0x1e8)]():(this[_0x361acb(0x2b5)](),this['_dragonbonesSpriteContainer'][_0x361acb(0x2b0)](this[_0x361acb(0x1ff)]))),this[_0x361acb(0x118)](),this[_0x361acb(0x1ff)]['x']=_0x4a077e['offsetX'],this[_0x361acb(0x1ff)]['y']=_0x4a077e['offsetY'],this[_0x361acb(0x1ff)][_0x361acb(0x2a8)]['x']=_0x4a077e['scaleX'],this[_0x361acb(0x1ff)][_0x361acb(0x2a8)]['y']=_0x4a077e['scaleY'],this[_0x361acb(0x2ab)]&&this['_battler']['isHidden']()&&(this['opacity']=0x0);},Sprite_Battler['prototype'][_0x591d1e(0x10c)]=function(_0x47ab5d){const _0x30c51e=_0x591d1e;if(!this['_dragonbones'])return;if(_0x47ab5d==='idle'){if(this['_battler']['isDying']()){if(_0x30c51e(0x163)===_0x30c51e(0x163))_0x47ab5d=_0x30c51e(0x16a);else{if(!this[_0x30c51e(0x214)]())return;this[_0x30c51e(0x25e)]()[_0x30c51e(0x1b3)](_0x2a9980),[_0x30c51e(0x272),_0x30c51e(0xdd)][_0x30c51e(0x27e)](_0xd0d55c)?this[_0x30c51e(0x2b6)]=![]:this[_0x30c51e(0x2b6)]=!![];}}else this['_battler'][_0x30c51e(0x1ee)]()||this[_0x30c51e(0x2ab)][_0x30c51e(0x25b)]()?_0x47ab5d='guard':_0x30c51e(0x201)!==_0x30c51e(0x201)?(_0x21b063('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x30c51e(0x279)](_0x1c8368,_0x451bed)),_0x14f50c[_0x30c51e(0x24f)]()):_0x47ab5d=_0x30c51e(0x272);}const _0x40112f=this[_0x30c51e(0x2ab)]['dragonbonesData']();if(_0x40112f[_0x30c51e(0xd3)][_0x47ab5d]){const _0x2d3590=_0x40112f[_0x30c51e(0xd3)][_0x47ab5d];this['playDragonbonesAnimation'](_0x2d3590);}},Sprite_Battler[_0x591d1e(0x225)][_0x591d1e(0x1b3)]=function(_0x1de4db){const _0x2be777=_0x591d1e;_0x1de4db=_0x1de4db[_0x2be777(0x233)]();if(!this[_0x2be777(0x1ff)])return;[_0x2be777(0xdd),_0x2be777(0x28c)][_0x2be777(0x27e)](_0x1de4db)&&this[_0x2be777(0x2ab)][_0x2be777(0x1ee)]()&&(_0x2be777(0x1d8)!==_0x2be777(0x150)?_0x1de4db=_0x2be777(0x1ba):_0x27b50d[_0x2be777(0x2af)]=_0x2c8bac(_0x511333['$1']));const _0x52e410=this[_0x2be777(0x1ff)][_0x2be777(0x257)];if(_0x52e410['animations'][_0x1de4db]){if('JcoDM'!=='JcoDM')_0xacb2de['scaleY']=_0x4d7fab(_0x40969c['$1']);else{const _0xaf4442=_0x52e410[_0x2be777(0x1dd)],_0x21193c=[_0x2be777(0xdd),'walk',_0x2be777(0x28c),'chant',_0x2be777(0x1ba),_0x2be777(0x16a),_0x2be777(0x14f),_0x2be777(0x1c4),_0x2be777(0x23a)];if(_0xaf4442===_0x1de4db&&_0x21193c['includes'](_0x1de4db))return;_0x52e410[_0x2be777(0x249)](_0x1de4db);}}},Sprite_Battler[_0x591d1e(0x225)][_0x591d1e(0x27f)]=function(){const _0x274859=_0x591d1e;this['updateDragonbonesTimeScale'](),this[_0x274859(0x29e)](),this[_0x274859(0x11e)]();},Sprite_Battler['prototype']['updateDragonbonesTimeScale']=function(){const _0x208fe0=_0x591d1e;if(!this[_0x208fe0(0x1ff)])return;let _0x3fbc84=this[_0x208fe0(0x2ab)][_0x208fe0(0x1cd)]()[_0x208fe0(0x1a2)];const _0x4ebb74=SceneManager['_scene'];Imported[_0x208fe0(0x165)]&&_0x4ebb74['_playtestF7Looping']&&$gameTemp['_playTestFastMode']&&(_0x208fe0(0x1cc)!==_0x208fe0(0x18c)?_0x3fbc84*=0x2:(this[_0x208fe0(0xd8)](),this[_0x208fe0(0x27a)]())),Imported[_0x208fe0(0x19f)]&&_0x4ebb74['_battleAniSpeedLooping']&&(_0x3fbc84*=(ConfigManager[_0x208fe0(0x285)]||0x0)+0x1),this[_0x208fe0(0x1ff)][_0x208fe0(0x257)][_0x208fe0(0x1a2)]=_0x3fbc84;},Sprite_Battler[_0x591d1e(0x225)][_0x591d1e(0x29e)]=function(){const _0x5338f1=_0x591d1e;if(!this[_0x5338f1(0x1ff)])return;const _0x55323b=this[_0x5338f1(0x1ff)][_0x5338f1(0x257)];if(_0x55323b[_0x5338f1(0x10a)]){if('AGFyC'===_0x5338f1(0x1db)){const _0x34f39e=_0x55323b[_0x5338f1(0x1dd)];let _0x3a35c4=VisuMZ[_0x5338f1(0x111)]['Settings'][_0x5338f1(0x156)]['IdleBypassList'];if(_0x3a35c4===undefined){if(_0x5338f1(0xf4)!==_0x5338f1(0x286))_0x3a35c4=[_0x5338f1(0x23a),_0x5338f1(0x1cf),_0x5338f1(0x299)];else return;}!_0x3a35c4['includes'](_0x34f39e)&&this[_0x5338f1(0x118)]();}else this['removeChild'](this[_0x5338f1(0x1ff)]),this[_0x5338f1(0x1ff)][_0x5338f1(0x104)](),this[_0x5338f1(0x1ff)]=null,this[_0x5338f1(0x12c)]='',this[_0x5338f1(0x280)]='';}},Sprite_Battler['prototype'][_0x591d1e(0x11e)]=function(){return;},Sprite_Battler[_0x591d1e(0x225)]['playDragonbonesIdleAnimation']=function(){const _0x24078c=_0x591d1e;if(!this[_0x24078c(0x1ff)])return;const _0x4853a5=this[_0x24078c(0x2ab)];if(!_0x4853a5)return;if(_0x4853a5[_0x24078c(0x196)]()){const _0x217724=this[_0x24078c(0x1ff)][_0x24078c(0x257)];if(_0x217724&&!_0x217724[_0x24078c(0x10a)])return;}if(this[_0x24078c(0x1b5)]()){const _0x55bacb=this[_0x24078c(0x1ff)][_0x24078c(0x257)];if(_0x55bacb&&!_0x55bacb[_0x24078c(0x10a)])return;}_0x4853a5['isAlive']()&&this[_0x24078c(0x1b3)](_0x24078c(0xdd));const _0x390506=_0x4853a5[_0x24078c(0x271)]();if(_0x4853a5['isInputting']()||_0x4853a5[_0x24078c(0x11f)]()){if(_0x24078c(0x160)!==_0x24078c(0x153))this[_0x24078c(0x10c)]('walk');else{if(!this[_0x24078c(0x1ff)])return;const _0x399743=this[_0x24078c(0x234)][_0x24078c(0xd4)]();this[_0x24078c(0x1ff)]['x']=_0x399743[_0x24078c(0x1af)],this[_0x24078c(0x1ff)]['y']=_0x399743[_0x24078c(0x203)],this[_0x24078c(0x1ff)][_0x24078c(0x2a8)]['x']=_0x399743[_0x24078c(0xeb)]*this[_0x24078c(0x260)](),this[_0x24078c(0x1ff)][_0x24078c(0x2a8)]['y']=_0x399743[_0x24078c(0x282)];}}else{if(_0x390506===0x3)this[_0x24078c(0x10c)](_0x24078c(0x23a));else{if(_0x390506===0x2)this[_0x24078c(0x10c)](_0x24078c(0x1c4));else{if(_0x4853a5[_0x24078c(0x176)]()&&BattleManager['isTryingToEscape']())_0x24078c(0x1f3)===_0x24078c(0x1f3)?this[_0x24078c(0x10c)](_0x24078c(0x1cf)):(this[_0x24078c(0xe3)](_0x2ce5ec),_0x44aa5f[_0x24078c(0x111)]['Game_Screen_erasePicture'][_0x24078c(0x129)](this,_0x1a8c2d));else{if(_0x4853a5[_0x24078c(0x276)]())this['playDragonbonesMotion'](_0x24078c(0x198));else{if(_0x4853a5[_0x24078c(0x1ee)]()||_0x4853a5[_0x24078c(0x25b)]())this[_0x24078c(0x10c)]('guard');else{if(_0x390506===0x1)this[_0x24078c(0x10c)](_0x24078c(0x14f));else{if(_0x4853a5['isDying']())'syRSO'===_0x24078c(0x148)?this['playDragonbonesMotion'](_0x24078c(0xdd)):_0xaf65ea[_0x24078c(0x257)]['play'](_0x186a19[_0x24078c(0xf8)]);else _0x4853a5[_0x24078c(0x130)]()?this['playDragonbonesMotion'](_0x24078c(0xdd)):this['playDragonbonesMotion'](_0x24078c(0xdd));}}}}}}}},Sprite_Battler[_0x591d1e(0x225)][_0x591d1e(0x1b5)]=function(){const _0xf6d821=_0x591d1e;if(!this[_0xf6d821(0x2ab)][_0xf6d821(0x176)]())return![];if(this[_0xf6d821(0x2ab)]===BattleManager['_subject'])return!![];if(this[_0xf6d821(0x2ab)]===BattleManager[_0xf6d821(0x1eb)]()&&this[_0xf6d821(0x2ab)][_0xf6d821(0x1c2)]())return!![];if(this['_battler'][_0xf6d821(0x2b6)])return!![];if(BattleManager[_0xf6d821(0x26d)]===this['_battler'])return!![];if(BattleManager[_0xf6d821(0x292)][_0xf6d821(0x27e)](this[_0xf6d821(0x2ab)]))return!![];return![];},VisuMZ[_0x591d1e(0x111)]['Sprite_Enemy_setHue']=Sprite_Enemy['prototype'][_0x591d1e(0x24d)],Sprite_Enemy[_0x591d1e(0x225)][_0x591d1e(0x24d)]=function(_0x2f3d00){const _0x3a6fea=_0x591d1e;this[_0x3a6fea(0x28e)]()?this[_0x3a6fea(0x1ed)](_0x2f3d00):_0x3a6fea(0x136)===_0x3a6fea(0x167)?_0x46dd62['flipLeft']=!![]:VisuMZ['DragonbonesUnion'][_0x3a6fea(0x1b9)][_0x3a6fea(0x129)](this,_0x2f3d00);},Sprite_Enemy[_0x591d1e(0x225)][_0x591d1e(0x28e)]=function(){const _0x3e2096=_0x591d1e;if(!this[_0x3e2096(0x2ab)])return![];if(!this[_0x3e2096(0x1ff)])return![];const _0x771295=this['_battler']['enemy']()['note']||'';if(_0x771295[_0x3e2096(0x229)](/<DRAGONBONES HUE AFFECTED>/i)){if(_0x3e2096(0x117)!==_0x3e2096(0x138))return!![];else{if(this[_0x3e2096(0x208)]!==_0x46c7a4)return;let _0x158aac=!![];if(this[_0x3e2096(0x2ab)]&&this['_battler'][_0x3e2096(0x214)]())_0x158aac=![];this[_0x3e2096(0x281)][_0x3e2096(0x144)]=_0x158aac,this[_0x3e2096(0x269)][_0x3e2096(0x144)]=_0x158aac,this[_0x3e2096(0x100)][_0x3e2096(0x144)]=_0x158aac;}}else{if(_0x771295[_0x3e2096(0x229)](/<DRAGONBONES NO HUE>/i))return![];}return VisuMZ[_0x3e2096(0x111)]['Settings'][_0x3e2096(0x156)][_0x3e2096(0x16d)];},Sprite_Enemy[_0x591d1e(0x225)][_0x591d1e(0x1ed)]=function(_0x406e44){const _0x80cf65=_0x591d1e;this[_0x80cf65(0x277)][_0x80cf65(0x26b)]!==_0x406e44&&this[_0x80cf65(0x277)][_0x80cf65(0x24d)](_0x406e44);},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x10d)]=Sprite_Actor['prototype'][_0x591d1e(0x26f)],Sprite_Actor[_0x591d1e(0x225)]['initMembers']=function(){const _0x19ac18=_0x591d1e;VisuMZ['DragonbonesUnion'][_0x19ac18(0x10d)]['call'](this),this[_0x19ac18(0x247)]();},VisuMZ[_0x591d1e(0x111)]['Sprite_Actor_updateBitmap']=Sprite_Actor[_0x591d1e(0x225)][_0x591d1e(0x1f8)],Sprite_Actor[_0x591d1e(0x225)]['updateBitmap']=function(){const _0x2404d7=_0x591d1e,_0x346162=this[_0x2404d7(0x2ab)];_0x346162['hasDragonbonesBattler']()?_0x2404d7(0x2b1)!=='eiViY'?_0x5f12e7[_0x2404d7(0x21d)]=_0x23922d(_0x58e474['$1']):(Sprite_Battler[_0x2404d7(0x225)][_0x2404d7(0x1f8)][_0x2404d7(0x129)](this),this['_dragonbonesName']!==_0x346162[_0x2404d7(0x1cd)]()['battler']&&this[_0x2404d7(0xcf)](),this[_0x2404d7(0x27f)]()):_0x2404d7(0x120)==='Dfoyh'?(VisuMZ[_0x2404d7(0x111)][_0x2404d7(0xfe)][_0x2404d7(0x129)](this),this[_0x2404d7(0x29a)](this[_0x2404d7(0x1ff)])):this[_0x2404d7(0x181)](_0x2404d7(0xe7));},VisuMZ[_0x591d1e(0x111)]['Sprite_Actor_startMotion']=Sprite_Actor[_0x591d1e(0x225)][_0x591d1e(0x22a)],Sprite_Actor[_0x591d1e(0x225)][_0x591d1e(0x22a)]=function(_0x2f3e49){const _0x2fb134=_0x591d1e;VisuMZ[_0x2fb134(0x111)][_0x2fb134(0xd2)][_0x2fb134(0x129)](this,_0x2f3e49),this[_0x2fb134(0x208)][_0x2fb134(0x278)]===_0x2fb134(0x210)&&(_0x2fb134(0xdb)!==_0x2fb134(0x116)?this[_0x2fb134(0x10c)](_0x2f3e49):(this[_0x2fb134(0x277)]=new _0x512ede(),this[_0x2fb134(0x277)][_0x2fb134(0x2b0)](this[_0x2fb134(0x1ff)])));},VisuMZ[_0x591d1e(0x111)]['Sprite_Actor_updateShadow']=Sprite_Actor[_0x591d1e(0x225)][_0x591d1e(0x26a)],Sprite_Actor[_0x591d1e(0x225)]['updateShadow']=function(){const _0x597b2e=_0x591d1e;this[_0x597b2e(0x20d)](),VisuMZ[_0x597b2e(0x111)][_0x597b2e(0xfd)][_0x597b2e(0x129)](this);if(this[_0x597b2e(0x2ab)]&&this[_0x597b2e(0x2ab)][_0x597b2e(0x214)]()){if(_0x597b2e(0x126)!==_0x597b2e(0x126)){const _0x4692d3=this['_character'][_0x597b2e(0xd4)]();this[_0x597b2e(0x2bd)]=this[_0x597b2e(0x2bd)]||0x1;if(_0x4692d3[_0x597b2e(0xf9)]&&[0x1,0x4,0x7]['includes'](this[_0x597b2e(0x234)][_0x597b2e(0x242)]()))this['_dragonbonesFlipDirection']=-0x1;else{if(_0x4692d3[_0x597b2e(0x2a0)]&&[0x9,0x6,0x3][_0x597b2e(0x27e)](this[_0x597b2e(0x234)][_0x597b2e(0x242)]()))this[_0x597b2e(0x2bd)]=-0x1;else![0x8,0x2][_0x597b2e(0x27e)](this[_0x597b2e(0x234)][_0x597b2e(0x242)]())&&(this[_0x597b2e(0x2bd)]=0x1);}return this['_dragonbonesFlipDirection'];}else this[_0x597b2e(0xf0)][_0x597b2e(0x144)]=![];}},Sprite_Actor[_0x591d1e(0x225)][_0x591d1e(0x20d)]=function(){const _0x5466b3=_0x591d1e;if(this[_0x5466b3(0x208)]!==Sprite_Actor)return;let _0x462821=!![];if(this[_0x5466b3(0x2ab)]&&this[_0x5466b3(0x2ab)][_0x5466b3(0x214)]())_0x462821=![];this[_0x5466b3(0x281)][_0x5466b3(0x144)]=_0x462821,this[_0x5466b3(0x269)][_0x5466b3(0x144)]=_0x462821,this['_stateSprite'][_0x5466b3(0x144)]=_0x462821;},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x293)]=Sprite_Actor[_0x591d1e(0x225)][_0x591d1e(0x24e)],Sprite_Actor[_0x591d1e(0x225)][_0x591d1e(0x24e)]=function(){const _0x3609b2=_0x591d1e;if(this[_0x3609b2(0x2ab)]&&this[_0x3609b2(0x2ab)]['hasDragonbonesBattler']())this[_0x3609b2(0xd9)]();else{if(_0x3609b2(0x274)!==_0x3609b2(0x1ef))VisuMZ['DragonbonesUnion'][_0x3609b2(0x293)][_0x3609b2(0x129)](this);else{_0x3848ca['DragonbonesUnion'][_0x3609b2(0x15b)][_0x3609b2(0x129)](this);if(!_0x49184e[_0x3609b2(0x111)][_0x3609b2(0x17a)]['EnemyStances'])return;const _0x2d6332=this['_battler'];_0x2d6332&&_0x2d6332[_0x3609b2(0x214)]()&&this[_0x3609b2(0x145)]();}}},Sprite_Actor['prototype'][_0x591d1e(0xd9)]=function(){const _0x5520c7=_0x591d1e,_0x29632f=this['_mainSprite'][_0x5520c7(0x26c)];if(_0x29632f){const _0x57937e=_0x29632f[_0x5520c7(0x1d0)],_0x123b93=_0x29632f[_0x5520c7(0x21d)];this[_0x5520c7(0x281)][_0x5520c7(0x253)](0x0,0x0,_0x57937e,_0x123b93),this['setFrame'](0x0,0x0,_0x57937e,_0x123b93);}},VisuMZ[_0x591d1e(0x111)]['Sprite_Enemy_initMembers']=Sprite_Enemy['prototype'][_0x591d1e(0x26f)],Sprite_Enemy[_0x591d1e(0x225)]['initMembers']=function(){const _0xd59188=_0x591d1e;VisuMZ[_0xd59188(0x111)][_0xd59188(0x141)][_0xd59188(0x129)](this),this[_0xd59188(0x247)]();},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x1a1)]=Sprite_Enemy[_0x591d1e(0x225)][_0x591d1e(0x175)],Sprite_Enemy['prototype'][_0x591d1e(0x175)]=function(_0x5a76d4){const _0x3eb60b=_0x591d1e;this[_0x3eb60b(0x1ea)](),VisuMZ[_0x3eb60b(0x111)]['Sprite_Enemy_setBattler'][_0x3eb60b(0x129)](this,_0x5a76d4);if(_0x5a76d4[_0x3eb60b(0x1a5)]())this[_0x3eb60b(0x24b)]=0x0;},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x1fc)]=Sprite_Enemy[_0x591d1e(0x225)][_0x591d1e(0x1f8)],Sprite_Enemy['prototype']['updateBitmap']=function(){const _0x53faec=_0x591d1e,_0xb103d6=this[_0x53faec(0x2ab)];_0xb103d6[_0x53faec(0x214)]()?(Sprite_Battler[_0x53faec(0x225)][_0x53faec(0x1f8)][_0x53faec(0x129)](this),this[_0x53faec(0x27b)]!==_0xb103d6[_0x53faec(0x1cd)]()[_0x53faec(0x25e)]&&this[_0x53faec(0xcf)](),this['updateDragonbones'](),this[_0x53faec(0x24d)](this['_enemy'][_0x53faec(0x10e)]())):'MixOW'===_0x53faec(0x1e3)?(VisuMZ[_0x53faec(0x111)][_0x53faec(0x1fc)][_0x53faec(0x129)](this),this[_0x53faec(0x29a)](this[_0x53faec(0x1ff)])):_0x346315[_0x53faec(0x203)]=_0xe0e0f4(_0x2bfb4a['$1']);},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x15b)]=Sprite_Enemy[_0x591d1e(0x225)][_0x591d1e(0x132)],Sprite_Enemy[_0x591d1e(0x225)]['refreshMotion']=function(){const _0x2903e2=_0x591d1e;VisuMZ['DragonbonesUnion'][_0x2903e2(0x15b)][_0x2903e2(0x129)](this);if(!VisuMZ[_0x2903e2(0x111)]['Settings'][_0x2903e2(0x223)])return;const _0x458eb7=this[_0x2903e2(0x2ab)];_0x458eb7&&_0x458eb7[_0x2903e2(0x214)]()&&('VScpT'!==_0x2903e2(0x16b)?_0xb0a69a[_0x2903e2(0x25e)]=_0x5a751d(_0x53d00c['$1'])['trim']():this[_0x2903e2(0x145)]());},Sprite_Enemy['prototype'][_0x591d1e(0x145)]=function(){const _0x13d64e=_0x591d1e,_0x5ea2a8=this[_0x13d64e(0x2ab)];if(_0x5ea2a8){if(_0x13d64e(0x29b)===_0x13d64e(0xce))this['_dragonbonesMoveTimer']=_0x50cdcb[_0x13d64e(0x111)][_0x13d64e(0x17a)][_0x13d64e(0x127)]['WalkTimer'];else{const _0x32c2d3=_0x5ea2a8['stateMotionIndex']();if(_0x5ea2a8[_0x13d64e(0x1c2)]()||_0x5ea2a8['isActing']())this[_0x13d64e(0x10c)](_0x13d64e(0x272));else{if(_0x32c2d3===0x3)this['playDragonbonesMotion'](_0x13d64e(0x23a));else{if(_0x32c2d3===0x2)_0x13d64e(0x15d)===_0x13d64e(0x184)?_0x2d9d43['flipLeft']=![]:this['playDragonbonesMotion'](_0x13d64e(0x1c4));else{if(_0x5ea2a8[_0x13d64e(0x276)]())this[_0x13d64e(0x10c)](_0x13d64e(0x198));else{if(_0x5ea2a8[_0x13d64e(0x1ee)]()||_0x5ea2a8[_0x13d64e(0x25b)]())this[_0x13d64e(0x10c)](_0x13d64e(0x1ba));else{if(_0x32c2d3===0x1){if('cieRw'===_0x13d64e(0xe5))this['playDragonbonesMotion'](_0x13d64e(0x14f));else{const _0x161a1c=this[_0x13d64e(0x291)]()[_0x13d64e(0x1cd)]();if(this[_0x13d64e(0x12c)]===_0x161a1c['filename'])return;this[_0x13d64e(0x1ea)](),this[_0x13d64e(0x12c)]=_0x161a1c[_0x13d64e(0x194)],_0x1546d5[_0x13d64e(0x17b)](_0x161a1c[_0x13d64e(0x194)],this[_0x13d64e(0x1d2)]['bind'](this));}}else{if(_0x5ea2a8[_0x13d64e(0x21b)]()){if('yNPUX'===_0x13d64e(0x264))this[_0x13d64e(0x10c)](_0x13d64e(0xdd));else{_0x5b6f9d=_0x36f9c7[_0x13d64e(0x233)]()['trim']();_0x3e9bed[_0x13d64e(0x257)][_0x13d64e(0x12d)][_0x4c56b9]&&(_0x2883f5[_0x13d64e(0x257)][_0x13d64e(0x12d)][_0xf15d9a][_0x13d64e(0x29d)]=0x0);for(let _0x173535=0x1;_0x173535<=0x9;_0x173535++){const _0x19b417=_0xdf1b02+_0x173535;_0x583272[_0x13d64e(0x257)]['animations'][_0x19b417]&&(_0x4120b8[_0x13d64e(0x257)][_0x13d64e(0x12d)][_0x19b417][_0x13d64e(0x29d)]=0x0);}}}else _0x5ea2a8[_0x13d64e(0x130)]()?this['playDragonbonesMotion'](_0x13d64e(0xdd)):_0x13d64e(0x142)===_0x13d64e(0x142)?this[_0x13d64e(0x10c)]('idle'):(this[_0x13d64e(0x280)]=_0x3db217[_0x13d64e(0x257)],this['playDragonbonesAnimation']());}}}}}}}}},Spriteset_Battle[_0x591d1e(0x225)]['disposeDragonbones']=function(){const _0xcc8415=_0x591d1e;for(const _0x2c0db3 of this[_0xcc8415(0x289)]()){if(!_0x2c0db3)continue;_0x2c0db3['disposeDragonbones']();}},PluginManager[_0x591d1e(0x14b)](pluginData[_0x591d1e(0x278)],'Picture_SetupDragonbones',_0x2367b6=>{const _0x56fa98=_0x591d1e;if(!$gameScreen)return;VisuMZ[_0x56fa98(0x192)](_0x2367b6,_0x2367b6),$gameScreen[_0x56fa98(0x22f)](_0x2367b6[_0x56fa98(0x298)]);const _0xd27020=$gameScreen[_0x56fa98(0x291)](_0x2367b6[_0x56fa98(0x298)]),_0x528949=_0xd27020[_0x56fa98(0x1cd)]();_0x528949[_0x56fa98(0x194)]=_0x2367b6[_0x56fa98(0x166)],_0x528949[_0x56fa98(0x257)]=_0x2367b6['Animation'],_0x528949[_0x56fa98(0x1af)]=_0x2367b6[_0x56fa98(0xed)],_0x528949[_0x56fa98(0x203)]=_0x2367b6[_0x56fa98(0x228)],_0x528949[_0x56fa98(0xeb)]=_0x2367b6[_0x56fa98(0x187)],_0x528949[_0x56fa98(0x282)]=_0x2367b6[_0x56fa98(0x1c7)],_0x528949[_0x56fa98(0x1a2)]=_0x2367b6['TimeScale'];}),PluginManager['registerCommand'](pluginData[_0x591d1e(0x278)],'Picture_DragonbonesAnimation',_0x590316=>{const _0x2ed95b=_0x591d1e;if(!$gameScreen)return;VisuMZ[_0x2ed95b(0x192)](_0x590316,_0x590316),$gameScreen['createDefaultPicture'](_0x590316['PictureID']);const _0x21dce2=$gameScreen['picture'](_0x590316[_0x2ed95b(0x298)]),_0x3b7b50=_0x21dce2[_0x2ed95b(0x1cd)](),_0x188a16=_0x590316['IdleFinish']||![];_0x3b7b50[_0x2ed95b(0x257)]=_0x590316[_0x2ed95b(0x161)],_0x3b7b50[_0x2ed95b(0x2b2)]=_0x188a16;}),PluginManager[_0x591d1e(0x14b)](pluginData['name'],'Picture_DragonbonesOffset',_0x40ca85=>{const _0x15c90f=_0x591d1e;if(!$gameScreen)return;VisuMZ[_0x15c90f(0x192)](_0x40ca85,_0x40ca85),$gameScreen[_0x15c90f(0x22f)](_0x40ca85[_0x15c90f(0x298)]);const _0x4a4024=$gameScreen[_0x15c90f(0x291)](_0x40ca85[_0x15c90f(0x298)]),_0x3036db=_0x4a4024[_0x15c90f(0x1cd)]();_0x3036db[_0x15c90f(0x1af)]=_0x40ca85[_0x15c90f(0xed)],_0x3036db['offsetY']=_0x40ca85['OffsetY'];}),PluginManager[_0x591d1e(0x14b)](pluginData[_0x591d1e(0x278)],'Picture_ScaleDragonbones',_0x409f8f=>{const _0x557656=_0x591d1e;if(!$gameScreen)return;VisuMZ['ConvertParams'](_0x409f8f,_0x409f8f),$gameScreen[_0x557656(0x22f)](_0x409f8f[_0x557656(0x298)]);const _0x48adcb=$gameScreen[_0x557656(0x291)](_0x409f8f['PictureID']),_0x4f339a=_0x48adcb[_0x557656(0x1cd)]();_0x4f339a['scaleX']=_0x409f8f[_0x557656(0x187)],_0x4f339a[_0x557656(0x282)]=_0x409f8f[_0x557656(0x1c7)];}),PluginManager[_0x591d1e(0x14b)](pluginData[_0x591d1e(0x278)],'Picture_TimeScaleDragonbones',_0x3247bd=>{const _0xdbd670=_0x591d1e;if(!$gameScreen)return;VisuMZ[_0xdbd670(0x192)](_0x3247bd,_0x3247bd),$gameScreen['createDefaultPicture'](_0x3247bd['PictureID']);const _0x1d1abe=$gameScreen[_0xdbd670(0x291)](_0x3247bd[_0xdbd670(0x298)]),_0x1caa37=_0x1d1abe['dragonbonesData']();_0x1caa37[_0xdbd670(0x1a2)]=_0x3247bd[_0xdbd670(0x218)];}),Game_Screen[_0x591d1e(0x225)][_0x591d1e(0x22f)]=function(_0x19e674){const _0x5bf5c4=_0x591d1e;if(this[_0x5bf5c4(0x291)](_0x19e674))return;this[_0x5bf5c4(0x179)](_0x19e674,'',0x0,Math['round'](Graphics[_0x5bf5c4(0x1d0)]/0x2),Math[_0x5bf5c4(0x1b1)](Graphics[_0x5bf5c4(0x21d)]/0x2),0x64,0x64,0xff,0x0);},VisuMZ['DragonbonesUnion']['Game_Screen_erasePicture']=Game_Screen[_0x591d1e(0x225)][_0x591d1e(0x11d)],Game_Screen['prototype']['erasePicture']=function(_0x39224b){const _0x4c244a=_0x591d1e;this[_0x4c244a(0xe3)](_0x39224b),VisuMZ['DragonbonesUnion'][_0x4c244a(0x190)]['call'](this,_0x39224b);},Game_Screen[_0x591d1e(0x225)][_0x591d1e(0xe3)]=function(_0x6dc8f9){const _0xe7e188=_0x591d1e,_0x1ae620=this[_0xe7e188(0x10f)](_0x6dc8f9),_0x5431f4=this['_pictures'][_0x1ae620];if(!_0x5431f4)return;_0x5431f4[_0xe7e188(0xde)](),_0x5431f4[_0xe7e188(0x1ea)]();},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x23f)]=Game_Picture[_0x591d1e(0x225)][_0x591d1e(0x255)],Game_Picture[_0x591d1e(0x225)][_0x591d1e(0x255)]=function(){const _0x17e9bc=_0x591d1e;VisuMZ['DragonbonesUnion']['Game_Picture_initialize'][_0x17e9bc(0x129)](this),this[_0x17e9bc(0xde)]();},Game_Picture[_0x591d1e(0x225)][_0x591d1e(0xde)]=function(){const _0xa72d28=_0x591d1e;this[_0xa72d28(0x27d)]={'filename':'','animation':DragonbonesManager[_0xa72d28(0xf8)],'scaleX':0x1,'scaleY':0x1,'offsetX':0x0,'offsetY':0x0,'timeScale':0x1,'revertToIdle':![]};},Game_Picture[_0x591d1e(0x225)][_0x591d1e(0x1cd)]=function(){const _0x5a5b28=_0x591d1e;if(this[_0x5a5b28(0x27d)]!==undefined)return this['_dragonbonesData'];return this[_0x5a5b28(0xde)](),this[_0x5a5b28(0x27d)];},Game_Picture[_0x591d1e(0x225)][_0x591d1e(0x1ab)]=function(){const _0x298420=_0x591d1e;return this[_0x298420(0x1cd)]()[_0x298420(0x194)]!=='';},Game_Picture[_0x591d1e(0x225)]['disposeDragonbones']=function(){const _0xa1fe3=_0x591d1e;if(!SceneManager[_0xa1fe3(0x273)])return;if(!SceneManager[_0xa1fe3(0x273)]['_spriteset'])return;const _0x2f15ec=SceneManager[_0xa1fe3(0x273)][_0xa1fe3(0xf1)][_0xa1fe3(0x188)](this);if(_0x2f15ec)_0x2f15ec[_0xa1fe3(0x1ea)]();},Spriteset_Base[_0x591d1e(0x225)][_0x591d1e(0x188)]=function(_0x535ba7){const _0x6b28aa=_0x591d1e;return this[_0x6b28aa(0x133)][_0x6b28aa(0x26e)][_0x6b28aa(0x22e)](_0x3bb3d8=>_0x3bb3d8&&_0x3bb3d8[_0x6b28aa(0x291)]()===_0x535ba7);},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x250)]=Sprite_Picture['prototype'][_0x591d1e(0x255)],Sprite_Picture[_0x591d1e(0x225)][_0x591d1e(0x255)]=function(_0x5c55f3){const _0x9b52b5=_0x591d1e;this[_0x9b52b5(0xde)](),VisuMZ['DragonbonesUnion'][_0x9b52b5(0x250)][_0x9b52b5(0x129)](this,_0x5c55f3);},Sprite_Picture[_0x591d1e(0x225)][_0x591d1e(0xde)]=function(_0x3ae9f4){const _0x3c1f6c=_0x591d1e;this[_0x3c1f6c(0x1ff)]=null,this['_dragonbonesFilename']='',this[_0x3c1f6c(0x280)]='';},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x1fa)]=Sprite_Picture[_0x591d1e(0x225)][_0x591d1e(0x199)],Sprite_Picture['prototype']['update']=function(){const _0x55e13a=_0x591d1e;VisuMZ[_0x55e13a(0x111)][_0x55e13a(0x1fa)][_0x55e13a(0x129)](this),this[_0x55e13a(0x27f)]();},Sprite_Picture['prototype']['disposeDragonbones']=function(){const _0x101d5e=_0x591d1e;this[_0x101d5e(0x1ff)]&&(_0x101d5e(0x20e)===_0x101d5e(0x1a6)?(_0x460da3[_0x101d5e(0x1af)]=_0x5d2a24(_0x522986['$1']),_0x4763f4['offsetY']=_0x5769f8(_0x5607f3['$2'])):(this['removeChild'](this['_dragonbones']),this['_dragonbones'][_0x101d5e(0x104)](),this[_0x101d5e(0x1ff)]=null,this[_0x101d5e(0x12c)]='',this[_0x101d5e(0x280)]=''));},Sprite_Picture[_0x591d1e(0x225)][_0x591d1e(0x27f)]=function(){const _0x2afd33=_0x591d1e,_0x33613a=this[_0x2afd33(0x291)]();if(!_0x33613a)return this['disposeDragonbones']();if(!_0x33613a['hasDragonbones']())return this['disposeDragonbones']();this[_0x2afd33(0x13e)]();if(!this['_dragonbones'])return;this[_0x2afd33(0x29e)](),this[_0x2afd33(0x1c3)](),this['updateDragonbonesTimeScale']();},Sprite_Picture[_0x591d1e(0x225)][_0x591d1e(0x13e)]=function(){const _0x1aadb9=_0x591d1e,_0x1b6724=this[_0x1aadb9(0x291)]()[_0x1aadb9(0x1cd)]();if(this['_dragonbonesFilename']===_0x1b6724[_0x1aadb9(0x194)])return;this[_0x1aadb9(0x1ea)](),this[_0x1aadb9(0x12c)]=_0x1b6724['filename'],DragonbonesManager['loadArmature'](_0x1b6724['filename'],this['onLoadDragonbones'][_0x1aadb9(0x217)](this));},Sprite_Picture[_0x591d1e(0x225)][_0x591d1e(0x1d2)]=function(){const _0x20a95c=_0x591d1e,_0x2dd626=this[_0x20a95c(0x291)]()[_0x20a95c(0x1cd)]();this[_0x20a95c(0x1ff)]=DragonbonesManager['createArmature'](_0x2dd626[_0x20a95c(0x194)]),this[_0x20a95c(0x1e2)](this[_0x20a95c(0x1ff)],0x0),this[_0x20a95c(0x29e)]();},Sprite_Picture['prototype']['updateDragonbonesAnimation']=function(){const _0x32acce=_0x591d1e;if(!this[_0x32acce(0x1ff)])return;const _0xb6330f=this[_0x32acce(0x291)]()['dragonbonesData']();this[_0x32acce(0x280)]!==_0xb6330f[_0x32acce(0x257)]&&(this[_0x32acce(0x280)]=_0xb6330f[_0x32acce(0x257)],this[_0x32acce(0x1b3)]());},Sprite_Picture[_0x591d1e(0x225)][_0x591d1e(0x1b3)]=function(){const _0x477819=_0x591d1e;if(!this[_0x477819(0x1ff)])return;const _0x277083=this[_0x477819(0x1ff)][_0x477819(0x257)],_0x1d6c70=this[_0x477819(0x280)][_0x477819(0x233)]()[_0x477819(0x1e8)]();_0x277083[_0x477819(0x12d)][_0x1d6c70]&&_0x277083[_0x477819(0x249)](_0x1d6c70);},Sprite_Picture['prototype'][_0x591d1e(0x1c3)]=function(){const _0x225211=_0x591d1e;if(!this[_0x225211(0x1ff)])return;const _0x5341a4=this['picture']()[_0x225211(0x1cd)]();this[_0x225211(0x1ff)]['x']=_0x5341a4[_0x225211(0x1af)],this['_dragonbones']['y']=_0x5341a4[_0x225211(0x203)],this[_0x225211(0x1ff)][_0x225211(0x2a8)]['x']=_0x5341a4[_0x225211(0xeb)],this[_0x225211(0x1ff)][_0x225211(0x2a8)]['y']=_0x5341a4['scaleY'],this[_0x225211(0x1ff)]['animation'][_0x225211(0x259)]===![]&&_0x5341a4[_0x225211(0x2b2)]&&(_0x225211(0x240)==='GExjU'?_0x5341a4[_0x225211(0x257)]=_0x225211(0xdd):(_0x5083e6[_0x225211(0x111)][_0x225211(0x1df)][_0x225211(0x129)](this),this[_0x225211(0x27f)]()));},Sprite_Picture[_0x591d1e(0x225)][_0x591d1e(0x1f4)]=function(){const _0x3682d3=_0x591d1e;if(!this[_0x3682d3(0x1ff)])return;const _0x1566fd=this[_0x3682d3(0x291)]()[_0x3682d3(0x1cd)]();let _0x20d4f3=_0x1566fd[_0x3682d3(0x1a2)];this[_0x3682d3(0x1ff)][_0x3682d3(0x257)][_0x3682d3(0x1a2)]=_0x20d4f3;},PluginManager['registerCommand'](pluginData['name'],_0x591d1e(0x211),_0x24f61a=>{const _0x5281b0=_0x591d1e;if(!$gameMap)return;VisuMZ[_0x5281b0(0x192)](_0x24f61a,_0x24f61a);const _0x4aa21a=$gameActors['actor'](_0x24f61a[_0x5281b0(0x103)]);if(!_0x4aa21a)return;const _0xfa03b7=JsonEx[_0x5281b0(0x1ce)](_0x4aa21a[_0x5281b0(0x1f6)]);_0x4aa21a['_dragonbonesSpriteData']={'filename':_0x24f61a['Filename'],'animation':'','scaleX':_0x24f61a[_0x5281b0(0x187)],'scaleY':_0x24f61a[_0x5281b0(0x1c7)],'offsetX':_0x24f61a[_0x5281b0(0xed)],'offsetY':_0x24f61a[_0x5281b0(0x228)],'timeScale':_0x24f61a['TimeScale'],'walkRate':_0x24f61a[_0x5281b0(0x2a3)]??0x1,'dashRate':_0x24f61a[_0x5281b0(0x139)]??0x1,'width':_0x24f61a[_0x5281b0(0x2ac)],'height':_0x24f61a[_0x5281b0(0x101)],'flipLeft':_0x24f61a[_0x5281b0(0x19e)],'flipRight':_0x24f61a[_0x5281b0(0x1d1)],'animationNames':{'idle':_0x24f61a[_0x5281b0(0x12e)],'walk':_0x24f61a[_0x5281b0(0x171)],'dash':_0x24f61a[_0x5281b0(0x221)],'jump':_0x24f61a['Jump'],'ladderidle':_0x24f61a[_0x5281b0(0x294)],'ladderclimb':_0x24f61a['LadderClimb'],'ropeidle':_0x24f61a['RopeIdle'],'ropeclimb':_0x24f61a['RopeClimb']}},$gamePlayer['refresh']();}),PluginManager[_0x591d1e(0x14b)](pluginData['name'],'MapSprite_ActorAnimationPlay',_0x2efb2d=>{const _0x286b2f=_0x591d1e;if(!$gameMap)return;if(SceneManager['_scene']['constructor']!==Scene_Map)return;VisuMZ['ConvertParams'](_0x2efb2d,_0x2efb2d);const _0x58960a=$gameActors['actor'](_0x2efb2d['ActorID']),_0x141577=_0x58960a[_0x286b2f(0x1c6)](),_0x37308f=_0x141577===0x0?$gamePlayer:$gamePlayer[_0x286b2f(0x24c)]()[_0x286b2f(0x207)](_0x141577-0x1);if(!_0x37308f)return;_0x37308f[_0x286b2f(0x215)]=_0x2efb2d[_0x286b2f(0x161)];}),PluginManager[_0x591d1e(0x14b)](pluginData[_0x591d1e(0x278)],_0x591d1e(0x20a),_0x5516e3=>{const _0x1df380=_0x591d1e;if(!$gameMap)return;if(SceneManager[_0x1df380(0x273)][_0x1df380(0x208)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0x5516e3,_0x5516e3);const _0x5dfdc7=$gameActors[_0x1df380(0x1eb)](_0x5516e3[_0x1df380(0x103)]),_0xedb535=_0x5dfdc7[_0x1df380(0x1c6)](),_0x12d637=_0xedb535===0x0?$gamePlayer:$gamePlayer[_0x1df380(0x24c)]()[_0x1df380(0x207)](_0xedb535-0x1);if(!_0x12d637)return;_0x12d637[_0x1df380(0x215)]='';}),PluginManager['registerCommand'](pluginData[_0x591d1e(0x278)],_0x591d1e(0x227),_0x419a1d=>{const _0x56dbca=_0x591d1e;if(!$gameMap)return;if(SceneManager[_0x56dbca(0x273)][_0x56dbca(0x208)]!==Scene_Map)return;VisuMZ[_0x56dbca(0x192)](_0x419a1d,_0x419a1d);const _0x448db2=$gameTemp[_0x56dbca(0x131)](),_0x21b06b=$gameMap['event'](_0x419a1d['EventID']||_0x448db2[_0x56dbca(0x1d6)]());if(!_0x21b06b)return;_0x21b06b[_0x56dbca(0x215)]=_0x419a1d[_0x56dbca(0x161)];}),PluginManager['registerCommand'](pluginData['name'],'MapSprite_EventAnimationStop',_0x138352=>{const _0x5bd6a9=_0x591d1e;if(!$gameMap)return;if(SceneManager[_0x5bd6a9(0x273)]['constructor']!==Scene_Map)return;VisuMZ[_0x5bd6a9(0x192)](_0x138352,_0x138352);const _0x1d0fae=$gameTemp[_0x5bd6a9(0x131)](),_0xfa303b=$gameMap[_0x5bd6a9(0x108)](_0x138352[_0x5bd6a9(0x17d)]||_0x1d0fae[_0x5bd6a9(0x1d6)]());if(!_0xfa303b)return;_0xfa303b[_0x5bd6a9(0x215)]='';}),PluginManager['registerCommand'](pluginData['name'],_0x591d1e(0x115),_0xa9ec58=>{const _0x4365e3=_0x591d1e;if(!$gameMap)return;if(SceneManager[_0x4365e3(0x273)]['constructor']!==Scene_Map)return;VisuMZ[_0x4365e3(0x192)](_0xa9ec58,_0xa9ec58);const _0x144f99=$gamePlayer[_0x4365e3(0x24c)]()[_0x4365e3(0x207)](_0xa9ec58[_0x4365e3(0x1f9)]);if(!_0x144f99)return;_0x144f99[_0x4365e3(0x215)]=_0xa9ec58[_0x4365e3(0x161)];}),PluginManager[_0x591d1e(0x14b)](pluginData[_0x591d1e(0x278)],'MapSprite_FollowerAnimationStop',_0x2b656e=>{const _0x4fb1e3=_0x591d1e;if(!$gameMap)return;if(SceneManager[_0x4fb1e3(0x273)][_0x4fb1e3(0x208)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0x2b656e,_0x2b656e);const _0x5aba88=$gamePlayer[_0x4fb1e3(0x24c)]()[_0x4fb1e3(0x207)](_0x2b656e['FollowerIndex']);if(!_0x5aba88)return;_0x5aba88[_0x4fb1e3(0x215)]='';}),PluginManager[_0x591d1e(0x14b)](pluginData[_0x591d1e(0x278)],_0x591d1e(0xec),_0x3c9782=>{const _0x107668=_0x591d1e;if(!$gameMap)return;if(SceneManager[_0x107668(0x273)][_0x107668(0x208)]!==Scene_Map)return;VisuMZ[_0x107668(0x192)](_0x3c9782,_0x3c9782),$gamePlayer[_0x107668(0x215)]=_0x3c9782[_0x107668(0x161)];}),PluginManager['registerCommand'](pluginData[_0x591d1e(0x278)],'MapSprite_PlayerAnimationStop',_0x411790=>{const _0x610dfb=_0x591d1e;if(!$gameMap)return;if(SceneManager[_0x610dfb(0x273)]['constructor']!==Scene_Map)return;$gamePlayer[_0x610dfb(0x215)]='';}),Game_Temp[_0x591d1e(0x225)]['setLastPluginCommandInterpreter']=function(_0x1e33c7){const _0x252aae=_0x591d1e;this[_0x252aae(0x13a)]=_0x1e33c7;},Game_Temp[_0x591d1e(0x225)][_0x591d1e(0x131)]=function(){const _0x5377c3=_0x591d1e;return this[_0x5377c3(0x13a)];},Object['defineProperty'](Game_CharacterBase[_0x591d1e(0x225)],_0x591d1e(0x215),{'get':function(){const _0x3b3fe5=_0x591d1e;return this['dragonbonesSpriteData']()[_0x3b3fe5(0x257)];},'set':function(_0x1abe0a){const _0x211765=_0x591d1e;this[_0x211765(0xd4)]()['animation']=_0x1abe0a;},'configurable':!![]}),Game_CharacterBase['prototype']['initDragonbonesData']=function(){const _0x3b4063=_0x591d1e,_0x54f0a6=VisuMZ[_0x3b4063(0x111)]['Settings'][_0x3b4063(0x127)];this[_0x3b4063(0x1f6)]={'filename':'','animation':'','scaleX':_0x54f0a6[_0x3b4063(0x187)],'scaleY':_0x54f0a6['ScaleY'],'offsetX':_0x54f0a6['OffsetX'],'offsetY':_0x54f0a6['OffsetY'],'timeScale':_0x54f0a6['TimeScale'],'walkRate':0x1,'dashRate':0x1,'width':_0x54f0a6[_0x3b4063(0x2ac)],'height':_0x54f0a6['Height'],'flipLeft':_0x54f0a6[_0x3b4063(0x19e)],'flipRight':_0x54f0a6['FlipRight'],'animationNames':{'idle':_0x54f0a6[_0x3b4063(0x12e)],'walk':_0x54f0a6[_0x3b4063(0x171)],'dash':_0x54f0a6['Dash'],'jump':_0x54f0a6[_0x3b4063(0xe1)],'ladderidle':_0x54f0a6[_0x3b4063(0x294)],'ladderclimb':_0x54f0a6[_0x3b4063(0x14e)],'ropeidle':_0x54f0a6[_0x3b4063(0x1a7)],'ropeclimb':_0x54f0a6[_0x3b4063(0x1ae)]}};if(this['_dragonbonesMoveTimer']===undefined){if('gtoSR'!==_0x3b4063(0x22d)){const _0x4c4585=_0x4a02f2[_0x3b4063(0x111)][_0x3b4063(0x17a)][_0x3b4063(0x1fb)],_0x5c657a=this[_0x3b4063(0x238)],_0x4a23b3=_0xce1c02[_0x3b4063(0x29f)]['factory'];_0x4a23b3[_0x3b4063(0x2a5)](_0x34c21d[_0x5c657a+_0x4c4585['SkeKey']]['data']),_0x4a23b3['parseTextureAtlasData'](_0x15d197[_0x5c657a+_0x4c4585['TexKey']][_0x3b4063(0x15f)],_0x1d3747[_0x5c657a+_0x4c4585[_0x3b4063(0x1bc)]][_0x3b4063(0x1f1)]),this[_0x3b4063(0x283)]();}else this[_0x3b4063(0x1b7)]=0x0;}},Game_CharacterBase[_0x591d1e(0x225)][_0x591d1e(0x195)]=function(){},Game_CharacterBase[_0x591d1e(0x225)][_0x591d1e(0x297)]=function(_0x56ce49){const _0x48a629=_0x591d1e,_0x247167=this['dragonbonesSpriteData']();_0x56ce49['match'](/<DRAGONBONES SPRITE:[ ]*(.*)>/i)&&(_0x247167[_0x48a629(0x194)]=String(RegExp['$1'])['trim']());_0x56ce49['match'](/<DRAGONBONES SPRITE (?:SKIN|NAME|FILENAME):[ ]*(.*)>/i)&&(_0x247167[_0x48a629(0x194)]=String(RegExp['$1'])[_0x48a629(0x1e8)]());_0x56ce49['match'](/<DRAGONBONES SPRITE[ ]SCALE:[ ](.*),[ ](.*)>/i)&&(_0x247167[_0x48a629(0xeb)]=Number(RegExp['$1']),_0x247167[_0x48a629(0x282)]=Number(RegExp['$2']));_0x56ce49['match'](/<DRAGONBONES SPRITE[ ](?:SCALEX|SCALE X):[ ](.*)>/i)&&(_0x247167[_0x48a629(0xeb)]=Number(RegExp['$1']));_0x56ce49['match'](/<DRAGONBONES SPRITE[ ](?:SCALEY|SCALE Y):[ ](.*)>/i)&&(_0x48a629(0x14d)!==_0x48a629(0x14d)?_0x4aa78d[_0x48a629(0x1a2)]=_0xcb9d7a(_0x43d182['$1']):_0x247167[_0x48a629(0x282)]=Number(RegExp['$1']));_0x56ce49[_0x48a629(0x229)](/<DRAGONBONES SPRITE[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x247167[_0x48a629(0x1af)]=Number(RegExp['$1']),_0x247167[_0x48a629(0x203)]=Number(RegExp['$2']));_0x56ce49[_0x48a629(0x229)](/<DRAGONBONES SPRITE[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&('YxHja'===_0x48a629(0xfb)?this[_0x48a629(0x10c)]('escape'):_0x247167['offsetX']=Number(RegExp['$1']));_0x56ce49['match'](/<DRAGONBONES SPRITE[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)&&(_0x247167['offsetY']=Number(RegExp['$1']));_0x56ce49[_0x48a629(0x229)](/<DRAGONBONES SPRITE[ ]SIZE:[ ](.*),[ ](.*)>/i)&&(_0x247167['width']=Number(RegExp['$1']),_0x247167['height']=Number(RegExp['$2']));_0x56ce49['match'](/<DRAGONBONES SPRITE[ ]WIDTH:[ ](.*)>/i)&&('GTsdl'!==_0x48a629(0x146)?_0x2b8260['item']()[_0x48a629(0x263)]['type']>0x0?this[_0x48a629(0x181)](_0x48a629(0xe7)):this[_0x48a629(0x2ad)](_0x48a629(0x19c)):_0x247167[_0x48a629(0x1d0)]=Number(RegExp['$1']));_0x56ce49['match'](/<DRAGONBONES SPRITE[ ]HEIGHT:[ ](.*)>/i)&&(_0x247167[_0x48a629(0x21d)]=Number(RegExp['$1']));_0x56ce49['match'](/<DRAGONBONES SPRITE[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&(_0x247167[_0x48a629(0x1a2)]=Number(RegExp['$1']));_0x56ce49[_0x48a629(0x229)](/<DRAGONBONES SPRITE[ ](?:WALK RATE|WALKING RATE):[ ](.*)>/i)&&(_0x247167[_0x48a629(0x2af)]=Number(RegExp['$1']));_0x56ce49[_0x48a629(0x229)](/<DRAGONBONES SPRITE[ ](?:DASH RATE|DASHING RATE):[ ](.*)>/i)&&(_0x247167[_0x48a629(0x185)]=Number(RegExp['$1']));_0x56ce49[_0x48a629(0x229)](/<DRAGONBONES SPRITE FLIP LEFT>/i)&&(_0x247167[_0x48a629(0xf9)]=!![]);if(_0x56ce49['match'](/<DRAGONBONES SPRITE NO FLIP LEFT>/i)){if(_0x48a629(0x206)===_0x48a629(0x206))_0x247167[_0x48a629(0xf9)]=![];else{if(!this[_0x48a629(0x108)]())return;if(!this[_0x48a629(0xd0)]())return;const _0x5efa96=this[_0x48a629(0x1b6)]();let _0x42e57a='';for(const _0x358712 of _0x5efa96){if([0x6c,0x198][_0x48a629(0x27e)](_0x358712[_0x48a629(0x178)])){if(_0x42e57a!=='')_0x42e57a+='\x0a';_0x42e57a+=_0x358712[_0x48a629(0xd5)][0x0];}}this[_0x48a629(0x297)](_0x42e57a);}}_0x56ce49[_0x48a629(0x229)](/<DRAGONBONES SPRITE FLIP RIGHT>/i)&&(_0x247167[_0x48a629(0x2a0)]=!![]);if(_0x56ce49[_0x48a629(0x229)](/<DRAGONBONES SPRITE NO FLIP RIGHT>/i)){if(_0x48a629(0x2b7)===_0x48a629(0x2b7))_0x247167[_0x48a629(0x2a0)]=![];else{if(!this[_0x48a629(0x214)]())return;this[_0x48a629(0x2ad)](_0x48a629(0x263));}}const _0x426450=_0x56ce49[_0x48a629(0x229)](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/gi);if(_0x426450){if(_0x48a629(0x15c)!==_0x48a629(0x15c)){if(!this[_0x48a629(0x2ab)][_0x48a629(0x176)]())return![];if(this[_0x48a629(0x2ab)]===_0x515cce[_0x48a629(0x236)])return!![];if(this[_0x48a629(0x2ab)]===_0x5f5761['actor']()&&this['_battler']['isInputting']())return!![];if(this[_0x48a629(0x2ab)]['_requestedDragonbonesAnimation'])return!![];if(_0xe30701['_target']===this[_0x48a629(0x2ab)])return!![];if(_0x3bb688[_0x48a629(0x292)]['includes'](this[_0x48a629(0x2ab)]))return!![];return![];}else for(const _0x166f01 of _0x426450){_0x166f01[_0x48a629(0x229)](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/i);const _0x59ab43=String(RegExp['$1'])[_0x48a629(0x233)]()[_0x48a629(0x1e8)](),_0x37583d=String(RegExp['$2'])[_0x48a629(0x233)]()[_0x48a629(0x1e8)]();_0x247167['animationNames'][_0x59ab43]=_0x37583d;}}if(_0x56ce49[_0x48a629(0x229)](/<DRAGONBONES SPRITE (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/DRAGONBONES SPRITE (?:SETTINGS|SETTING)>/i)){if(_0x48a629(0x1ec)!==_0x48a629(0x1ec))_0x31b023[_0x48a629(0x282)]=_0x1eb63c(_0xcec0ef['$1']);else{const _0x366e6a=String(RegExp['$1']);_0x366e6a['match'](/(?:SKIN|NAME|FILENAME):[ ]*(.*)/i)&&(_0x247167['filename']=String(RegExp['$1'])[_0x48a629(0x1e8)]());_0x366e6a[_0x48a629(0x229)](/SCALE:[ ](.*),[ ](.*)/i)&&(_0x48a629(0x235)!==_0x48a629(0x235)?this[_0x48a629(0x10c)](_0x48a629(0x272)):(_0x247167[_0x48a629(0xeb)]=Number(RegExp['$1']),_0x247167[_0x48a629(0x282)]=Number(RegExp['$2'])));_0x366e6a['match'](/(?:SCALEX|SCALE X):[ ](.*)/i)&&(_0x247167[_0x48a629(0xeb)]=Number(RegExp['$1']));_0x366e6a[_0x48a629(0x229)](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x48a629(0x193)===_0x48a629(0x193)?_0x247167[_0x48a629(0x282)]=Number(RegExp['$1']):_0x24d27b[_0x48a629(0x203)]=_0x321af9(_0x2d0d16['$1']));_0x366e6a[_0x48a629(0x229)](/OFFSET:[ ](.*),[ ](.*)/i)&&(_0x247167['offsetX']=Number(RegExp['$1']),_0x247167['offsetY']=Number(RegExp['$2']));_0x366e6a['match'](/(?:OFFSETX|OFFSET X):[ ](.*)/i)&&(_0x247167[_0x48a629(0x1af)]=Number(RegExp['$1']));_0x366e6a[_0x48a629(0x229)](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x247167[_0x48a629(0x203)]=Number(RegExp['$1']));_0x366e6a[_0x48a629(0x229)](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x48a629(0xfc)===_0x48a629(0x12f)?_0x36a21a=_0x48a629(0x1ba):_0x247167[_0x48a629(0x1a2)]=Number(RegExp['$1']));_0x366e6a[_0x48a629(0x229)](/(?:WALK RATE|WALKING RATE):[ ](.*)/i)&&(_0x247167['walkRate']=Number(RegExp['$1']));_0x366e6a[_0x48a629(0x229)](/(?:DASH RATE|DASHING RATE):[ ](.*)/i)&&('SjxQz'!==_0x48a629(0x105)?(_0x29784e['DragonbonesUnion'][_0x48a629(0x2aa)]['call'](this,_0x1db2f),this[_0x48a629(0xde)](),this['setupDragonbonesData']()):_0x247167[_0x48a629(0x185)]=Number(RegExp['$1']));_0x366e6a[_0x48a629(0x229)](/SIZE:[ ](.*),[ ](.*)/i)&&(_0x247167[_0x48a629(0x1d0)]=Number(RegExp['$1']),_0x247167[_0x48a629(0x21d)]=Number(RegExp['$2']));_0x366e6a['match'](/WIDTH:[ ](.*)/i)&&(_0x247167[_0x48a629(0x1d0)]=Number(RegExp['$1']));_0x366e6a[_0x48a629(0x229)](/HEIGHT:[ ](.*)/i)&&(_0x247167['height']=Number(RegExp['$1']));_0x366e6a[_0x48a629(0x229)](/NO FLIP LEFT/i)&&(_0x247167[_0x48a629(0xf9)]=![]);_0x366e6a['match'](/FLIP LEFT/i)&&(_0x247167[_0x48a629(0xf9)]=!![]);_0x366e6a[_0x48a629(0x229)](/NO FLIP RIGHT/i)&&(_0x247167[_0x48a629(0x2a0)]=![]);_0x366e6a['match'](/FLIP RIGHT/i)&&(_0x247167[_0x48a629(0x2a0)]=!![]);const _0x184755=_0x56ce49['match'](/(?:ANI|MOTION) (.*):[ ](.*)/gi);if(_0x184755)for(const _0x57dc4e of _0x184755){if(_0x48a629(0x25f)!==_0x48a629(0x25f))return this['_pictureContainer'][_0x48a629(0x26e)][_0x48a629(0x22e)](_0x5075a3=>_0x5075a3&&_0x5075a3['picture']()===_0x38c2d8);else{_0x57dc4e['match'](/(?:ANI|MOTION) (.*):[ ](.*)/i);const _0x2512ec=String(RegExp['$1'])[_0x48a629(0x233)]()[_0x48a629(0x1e8)](),_0x382773=String(RegExp['$2'])[_0x48a629(0x233)]()['trim']();_0x247167[_0x48a629(0x21f)][_0x2512ec]=_0x382773;}}}}},Game_CharacterBase[_0x591d1e(0x225)]['dragonbonesSpriteData']=function(){const _0x4b4bcd=_0x591d1e;if(this[_0x4b4bcd(0x1f6)]!==undefined)return this['_dragonbonesSpriteData'];return this[_0x4b4bcd(0xde)](),this[_0x4b4bcd(0x195)](),this[_0x4b4bcd(0x1f6)];},Game_CharacterBase[_0x591d1e(0x225)][_0x591d1e(0x1ab)]=function(){const _0x2ce337=_0x591d1e;return this[_0x2ce337(0xd4)]()['filename']!=='';},Game_CharacterBase[_0x591d1e(0x225)][_0x591d1e(0xdc)]=function(_0x4b1e83){const _0x355078=_0x591d1e,_0x38cd4f=this[_0x355078(0xd4)]();if(!_0x4b1e83)return _0x38cd4f[_0x355078(0x21f)][_0x355078(0xdd)];_0x38cd4f[_0x355078(0x257)]=_0x38cd4f[_0x355078(0x257)][_0x355078(0x233)]()[_0x355078(0x1e8)]();if(_0x38cd4f[_0x355078(0x257)]!==''&&_0x4b1e83[_0x355078(0x257)]['animations'][_0x38cd4f[_0x355078(0x257)]])return _0x38cd4f['animation'];let _0x235f78=[];if(this[_0x355078(0x1c9)]())_0x355078(0x19a)==='ZuuSe'?(_0x235f78=_0x235f78['concat'](this[_0x355078(0x1be)](_0x38cd4f['animationNames'][_0x355078(0x152)])),_0x235f78=_0x235f78[_0x355078(0x1e9)](this['addDragonbonesAnimationDirections'](_0x38cd4f[_0x355078(0x21f)]['walk']))):_0x403f68['flipRight']=![];else{if(this[_0x355078(0x21e)]()&&!this[_0x355078(0x1c9)]()){if(Imported['VisuMZ_1_EventsMoveCore']&&this['isOnRope']()){if(_0x355078(0x134)===_0x355078(0x173)){if(!this[_0x355078(0x1ab)]())return;this[_0x355078(0x172)]()?this[_0x355078(0x1b7)]=_0x1952b2[_0x355078(0x111)][_0x355078(0x17a)]['MapSprite'][_0x355078(0x1bd)]:this[_0x355078(0x1b7)]--;}else this[_0x355078(0x1b7)]>0x0&&('XetMT'===_0x355078(0x25d)?(this[_0x355078(0x234)][_0x355078(0x215)]='',this[_0x355078(0x280)]='',_0x312508[_0x355078(0x1dd)]=''):(_0x235f78[_0x355078(0x1de)](_0x38cd4f['animationNames']['ropeclimb']),_0x235f78[_0x355078(0x1de)](_0x38cd4f['animationNames'][_0x355078(0x268)]),_0x235f78=_0x235f78['concat'](this[_0x355078(0x1be)](_0x38cd4f[_0x355078(0x21f)][_0x355078(0x272)])))),_0x235f78['push'](_0x38cd4f[_0x355078(0x21f)]['ropeidle']),_0x235f78[_0x355078(0x1de)](_0x38cd4f[_0x355078(0x21f)]['ladderidle']);}else this[_0x355078(0x1b7)]>0x0&&(_0x235f78[_0x355078(0x1de)](_0x38cd4f[_0x355078(0x21f)][_0x355078(0x268)]),_0x235f78=_0x235f78[_0x355078(0x1e9)](this[_0x355078(0x1be)](_0x38cd4f[_0x355078(0x21f)]['walk']))),_0x235f78[_0x355078(0x1de)](_0x38cd4f[_0x355078(0x21f)][_0x355078(0x1e0)]);}else this[_0x355078(0x1b7)]>0x0&&(this[_0x355078(0x177)]()&&(_0x355078(0x1e7)===_0x355078(0x1e7)?_0x235f78=_0x235f78['concat'](this[_0x355078(0x1be)](_0x38cd4f[_0x355078(0x21f)][_0x355078(0x261)])):(_0x31040e[_0x355078(0xeb)]=_0x11f1f0(_0x562247['$1']),_0x780d64[_0x355078(0x282)]=_0x2637be(_0xbf143c['$2']))),_0x235f78=_0x235f78[_0x355078(0x1e9)](this[_0x355078(0x1be)](_0x38cd4f[_0x355078(0x21f)][_0x355078(0x272)])));}_0x235f78=_0x235f78[_0x355078(0x1e9)](this[_0x355078(0x1be)](_0x38cd4f['animationNames'][_0x355078(0xdd)]));for(const _0x8aa529 of _0x235f78){if('MxQtY'!==_0x355078(0x11a)){if(_0x4b1e83[_0x355078(0x257)][_0x355078(0x12d)][_0x8aa529])return _0x8aa529;}else{if(!this[_0x355078(0x1ff)])return;if(!this[_0x355078(0x200)])return;this['_baseDragonbonesSprite'][_0x355078(0x1e2)](this[_0x355078(0x1ff)],0x0);}}return _0x38cd4f['animationNames'][_0x355078(0xdd)];},Game_CharacterBase[_0x591d1e(0x225)][_0x591d1e(0x1be)]=function(_0x4faea6){const _0x2d868e=_0x591d1e,_0x4e7778=this['dragonbonesSpriteData'](),_0x1af0ca=this[_0x2d868e(0x242)]();let _0x34f4dc=[];_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+_0x1af0ca);if(_0x1af0ca===0x1){_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x4);if(_0x4e7778[_0x2d868e(0xf9)])_0x34f4dc['push'](_0x4faea6+0x6);_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x2);}if(_0x1af0ca===0x3){_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x6);if(_0x4e7778[_0x2d868e(0x2a0)])_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x4);_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x2);}if(_0x1af0ca===0x7){_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x4);if(_0x4e7778[_0x2d868e(0xf9)])_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x6);_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x8);}if(_0x1af0ca===0x9){if('QXsno'!==_0x2d868e(0x22b))_0x311849*=(_0x541e82[_0x2d868e(0x285)]||0x0)+0x1;else{_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x6);if(_0x4e7778['flipRight'])_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x4);_0x34f4dc[_0x2d868e(0x1de)](_0x4faea6+0x8);}}return _0x34f4dc[_0x2d868e(0x1de)](_0x4faea6),_0x34f4dc;},VisuMZ[_0x591d1e(0x111)]['Game_CharacterBase_update']=Game_CharacterBase['prototype'][_0x591d1e(0x199)],Game_CharacterBase[_0x591d1e(0x225)]['update']=function(){const _0x57ff02=_0x591d1e;VisuMZ[_0x57ff02(0x111)]['Game_CharacterBase_update'][_0x57ff02(0x129)](this),this[_0x57ff02(0xf2)]();},Game_CharacterBase[_0x591d1e(0x225)][_0x591d1e(0xf2)]=function(){const _0x4713b4=_0x591d1e;if(!this[_0x4713b4(0x1ab)]())return;this[_0x4713b4(0x172)]()?this[_0x4713b4(0x1b7)]=VisuMZ[_0x4713b4(0x111)][_0x4713b4(0x17a)][_0x4713b4(0x127)][_0x4713b4(0x1bd)]:_0x4713b4(0x18a)!==_0x4713b4(0x18a)?_0x2f87d8[_0x4713b4(0x21d)]=_0x1d1f81(_0x4d93c5['$1']):this[_0x4713b4(0x1b7)]--;},VisuMZ['DragonbonesUnion'][_0x591d1e(0x224)]=Game_Player['prototype']['refresh'],Game_Player['prototype'][_0x591d1e(0x18f)]=function(){const _0x215dc1=_0x591d1e;VisuMZ['DragonbonesUnion'][_0x215dc1(0x224)][_0x215dc1(0x129)](this),this[_0x215dc1(0x195)]();},Game_Player[_0x591d1e(0x225)][_0x591d1e(0x195)]=function(){const _0x142754=_0x591d1e,_0x314b6b=$gameParty['leader']();if(!_0x314b6b)this[_0x142754(0xde)]();else{if(_0x142754(0x16c)!==_0x142754(0x12a))this[_0x142754(0x1f6)]=_0x314b6b[_0x142754(0xd4)]();else{if(!_0x7ee8d3)_0x320d1a=_0x297435[_0x142754(0x273)];if(!_0x1ac200)_0x3d1893='testArmature';if(_0x42d24e[_0x1b3966]){const _0x34eeaf=_0x4f9607[_0x58ce59];_0x34eeaf&&(_0x2d1359[_0x142754(0x29a)](_0x34eeaf),_0x34eeaf['dispose']());}this[_0x142754(0x17b)](_0x4ff640,_0x27bd1e[_0x142754(0x121)][_0x142754(0x217)](this,_0x1f30e6,_0x33d7e9,_0x2b226b,_0x234d2b));}}},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x197)]=Game_Follower['prototype'][_0x591d1e(0x18f)],Game_Follower[_0x591d1e(0x225)]['refresh']=function(){const _0x4bf69f=_0x591d1e;VisuMZ[_0x4bf69f(0x111)][_0x4bf69f(0x197)][_0x4bf69f(0x129)](this),this['setupDragonbonesData']();},Game_Follower[_0x591d1e(0x225)][_0x591d1e(0x195)]=function(){const _0x2eaca9=_0x591d1e,_0x5abe56=this['actor']();!_0x5abe56?this[_0x2eaca9(0xde)]():this['_dragonbonesSpriteData']=_0x5abe56['dragonbonesSpriteData']();},Game_Actor[_0x591d1e(0x225)][_0x591d1e(0xde)]=function(){const _0x46f2dc=_0x591d1e;Game_BattlerBase['prototype'][_0x46f2dc(0xde)][_0x46f2dc(0x129)](this),Game_CharacterBase['prototype'][_0x46f2dc(0xde)]['call'](this);},Game_Actor[_0x591d1e(0x225)][_0x591d1e(0x195)]=function(){const _0x2d43cb=_0x591d1e;Game_BattlerBase['prototype'][_0x2d43cb(0x195)]['call'](this);const _0x41083b=this[_0x2d43cb(0x1eb)]()[_0x2d43cb(0x119)];Game_CharacterBase[_0x2d43cb(0x225)]['checkDragonbonesStringTags'][_0x2d43cb(0x129)](this,_0x41083b);},Game_Actor[_0x591d1e(0x225)]['dragonbonesSpriteData']=function(){const _0x3c0672=_0x591d1e;if(this['_dragonbonesSpriteData']!==undefined)return this[_0x3c0672(0x1f6)];return this['initDragonbonesData'](),this[_0x3c0672(0x195)](),this['_dragonbonesSpriteData'];},VisuMZ[_0x591d1e(0x111)]['Game_Event_clearPageSettings']=Game_Event['prototype'][_0x591d1e(0x23e)],Game_Event[_0x591d1e(0x225)][_0x591d1e(0x23e)]=function(){const _0xf32ca6=_0x591d1e;VisuMZ[_0xf32ca6(0x111)][_0xf32ca6(0x1a9)]['call'](this),this['initDragonbonesData']();},VisuMZ['DragonbonesUnion']['Game_Event_setupPageSettings']=Game_Event[_0x591d1e(0x225)][_0x591d1e(0x231)],Game_Event[_0x591d1e(0x225)][_0x591d1e(0x231)]=function(){const _0x41a97b=_0x591d1e;VisuMZ[_0x41a97b(0x111)][_0x41a97b(0xfa)][_0x41a97b(0x129)](this),this[_0x41a97b(0xde)](),this[_0x41a97b(0x195)]();},Game_Event[_0x591d1e(0x225)]['setupDragonbonesData']=function(){const _0x315792=_0x591d1e;this['setupDragonbonesDataNotetags'](),this[_0x315792(0x27a)]();},Game_Event['prototype'][_0x591d1e(0xd8)]=function(){const _0x201843=_0x591d1e;if(!this[_0x201843(0x108)]())return;const _0x1226c7=this[_0x201843(0x108)]()[_0x201843(0x119)];if(_0x1226c7==='')return;this[_0x201843(0x297)](_0x1226c7);},Game_Event[_0x591d1e(0x225)]['setupDragonbonesDataCommentTags']=function(){const _0x160b4e=_0x591d1e;if(!this['event']())return;if(!this[_0x160b4e(0xd0)]())return;const _0x237494=this[_0x160b4e(0x1b6)]();let _0x248686='';for(const _0x5066bb of _0x237494){if([0x6c,0x198]['includes'](_0x5066bb[_0x160b4e(0x178)])){if(_0x248686!=='')_0x248686+='\x0a';_0x248686+=_0x5066bb[_0x160b4e(0xd5)][0x0];}}this['checkDragonbonesStringTags'](_0x248686);},VisuMZ['DragonbonesUnion'][_0x591d1e(0x19d)]=Game_Interpreter['prototype'][_0x591d1e(0x191)],Game_Interpreter[_0x591d1e(0x225)][_0x591d1e(0x191)]=function(_0x41c2ca){const _0x3a9143=_0x591d1e;return $gameTemp[_0x3a9143(0x245)](this),VisuMZ['DragonbonesUnion'][_0x3a9143(0x19d)][_0x3a9143(0x129)](this,_0x41c2ca);},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0x2a4)]=Sprite_Character[_0x591d1e(0x225)][_0x591d1e(0x255)],Sprite_Character[_0x591d1e(0x225)][_0x591d1e(0x255)]=function(_0x285bf5){const _0x473aca=_0x591d1e;this[_0x473aca(0xde)](),VisuMZ['DragonbonesUnion'][_0x473aca(0x2a4)]['call'](this,_0x285bf5),this['createBaseDragonbonesSprite']();},Sprite_Character[_0x591d1e(0x225)][_0x591d1e(0xde)]=function(){const _0x358e63=_0x591d1e;this[_0x358e63(0x1ff)]=null,this[_0x358e63(0x12c)]='',this[_0x358e63(0x280)]='';},Sprite_Character[_0x591d1e(0x225)][_0x591d1e(0x1ad)]=function(){const _0x477f25=_0x591d1e;this[_0x477f25(0x200)]=new Sprite(),this[_0x477f25(0x2b0)](this[_0x477f25(0x200)]);},VisuMZ[_0x591d1e(0x111)]['Sprite_Character_updateBitmap']=Sprite_Character[_0x591d1e(0x225)][_0x591d1e(0x1f8)],Sprite_Character['prototype']['updateBitmap']=function(){const _0x44fced=_0x591d1e;VisuMZ['DragonbonesUnion'][_0x44fced(0x1df)]['call'](this),this[_0x44fced(0x27f)]();},Sprite_Character[_0x591d1e(0x225)][_0x591d1e(0x1ea)]=function(){const _0x4f74a3=_0x591d1e;if(this[_0x4f74a3(0x1ff)]){if(_0x4f74a3(0x13b)!==_0x4f74a3(0x252))this[_0x4f74a3(0x200)][_0x4f74a3(0x29a)](this['_dragonbones']),this['_dragonbones']['dispose'](),this['_dragonbones']=null,this[_0x4f74a3(0x12c)]='',this[_0x4f74a3(0x280)]='';else{const _0x1913f7=this[_0x4f74a3(0x234)][_0x4f74a3(0xd4)]();this[_0x4f74a3(0x1ff)]=_0x501487[_0x4f74a3(0x154)](_0x1913f7[_0x4f74a3(0x194)]),this[_0x4f74a3(0x29e)](),_0x386309(this[_0x4f74a3(0xf7)][_0x4f74a3(0x217)](this),0x0);}}},Sprite_Character[_0x591d1e(0x225)]['updateDragonbones']=function(){const _0xaea983=_0x591d1e;if(!this[_0xaea983(0x234)])return this[_0xaea983(0x1ea)]();if(!this[_0xaea983(0x234)][_0xaea983(0x1ab)]())return this['disposeDragonbones']();this['updateDragonbonesArmature']();if(!this[_0xaea983(0x1ff)])return;this[_0xaea983(0x29e)](),this['updateDragonbonesProperties'](),this['updateDragonbonesTimeScale']();},Sprite_Character['prototype'][_0x591d1e(0x13e)]=function(){const _0x34585c=_0x591d1e,_0x1c84c0=this[_0x34585c(0x234)][_0x34585c(0xd4)]();if(this[_0x34585c(0x12c)]===_0x1c84c0['filename'])return;this[_0x34585c(0x1ea)](),this[_0x34585c(0x12c)]=_0x1c84c0[_0x34585c(0x194)],DragonbonesManager['loadArmature'](_0x1c84c0[_0x34585c(0x194)],this[_0x34585c(0x1d2)][_0x34585c(0x217)](this));},Sprite_Character[_0x591d1e(0x225)]['onLoadDragonbones']=function(){const _0x79eb53=_0x591d1e,_0x4bf8e8=this[_0x79eb53(0x234)][_0x79eb53(0xd4)]();this[_0x79eb53(0x1ff)]=DragonbonesManager[_0x79eb53(0x154)](_0x4bf8e8[_0x79eb53(0x194)]),this[_0x79eb53(0x29e)](),setTimeout(this[_0x79eb53(0xf7)][_0x79eb53(0x217)](this),0x0);},Sprite_Character[_0x591d1e(0x225)][_0x591d1e(0xf7)]=function(){const _0x4abb15=_0x591d1e;if(!this[_0x4abb15(0x1ff)])return;if(!this[_0x4abb15(0x200)])return;this[_0x4abb15(0x200)][_0x4abb15(0x1e2)](this[_0x4abb15(0x1ff)],0x0);},Sprite_Character[_0x591d1e(0x225)]['updateDragonbonesAnimation']=function(){const _0xe128e9=_0x591d1e;if(!this[_0xe128e9(0x1ff)])return;const _0x69fd2e=this[_0xe128e9(0x234)][_0xe128e9(0xd4)](),_0x29e1df=this[_0xe128e9(0x1ff)][_0xe128e9(0x257)];if(_0x29e1df['isCompleted']){if(_0xe128e9(0x2b3)!==_0xe128e9(0xd6))this[_0xe128e9(0x234)]['dragonbonesAnimation']='',this[_0xe128e9(0x280)]='',_0x29e1df[_0xe128e9(0x1dd)]='';else{_0x1d938f[_0xe128e9(0x229)](/(?:ANI|MOTION) (.*):[ ](.*)/i);const _0x4c6516=_0x13b9f0(_0x3413f5['$1'])['toLowerCase']()[_0xe128e9(0x1e8)](),_0x3ac906=_0x4935b0(_0x167483['$2'])[_0xe128e9(0x233)]()[_0xe128e9(0x1e8)]();_0x15fad3[_0xe128e9(0x21f)][_0x4c6516]=_0x3ac906;}}const _0x40a93b=this[_0xe128e9(0x234)][_0xe128e9(0xdc)](this['_dragonbones']);this[_0xe128e9(0x280)]!==_0x40a93b&&(this[_0xe128e9(0x280)]=_0x40a93b,this[_0xe128e9(0x1b3)]());},Sprite_Character['prototype'][_0x591d1e(0x1b3)]=function(){const _0xbdf7bf=_0x591d1e;if(!this[_0xbdf7bf(0x1ff)])return;const _0x1cc878=this[_0xbdf7bf(0x1ff)]['animation'],_0x2bc885=this[_0xbdf7bf(0x280)][_0xbdf7bf(0x233)]()['trim']();if(_0x1cc878['animations'][_0x2bc885]){if(_0x1cc878[_0xbdf7bf(0x1dd)]===_0x2bc885&&_0x1cc878[_0xbdf7bf(0x12d)][_0x2bc885]['playTimes']<=0x0)return;_0x1cc878[_0xbdf7bf(0x249)](_0x2bc885);}},Sprite_Character['prototype'][_0x591d1e(0x1c3)]=function(){const _0x539806=_0x591d1e;if(!this[_0x539806(0x1ff)])return;const _0x165000=this['_character'][_0x539806(0xd4)]();this['_dragonbones']['x']=_0x165000[_0x539806(0x1af)],this[_0x539806(0x1ff)]['y']=_0x165000[_0x539806(0x203)],this['_dragonbones'][_0x539806(0x2a8)]['x']=_0x165000[_0x539806(0xeb)]*this[_0x539806(0x260)](),this[_0x539806(0x1ff)]['scale']['y']=_0x165000[_0x539806(0x282)];},Sprite_Character[_0x591d1e(0x225)][_0x591d1e(0x260)]=function(){const _0x4dcec9=_0x591d1e,_0x42ebbc=this[_0x4dcec9(0x234)][_0x4dcec9(0xd4)]();this[_0x4dcec9(0x2bd)]=this[_0x4dcec9(0x2bd)]||0x1;if(_0x42ebbc[_0x4dcec9(0xf9)]&&[0x1,0x4,0x7]['includes'](this[_0x4dcec9(0x234)][_0x4dcec9(0x242)]()))this[_0x4dcec9(0x2bd)]=-0x1;else{if(_0x42ebbc['flipRight']&&[0x9,0x6,0x3][_0x4dcec9(0x27e)](this[_0x4dcec9(0x234)]['direction']())){if(_0x4dcec9(0x243)===_0x4dcec9(0x125)){if(this['_dragonbonesSpriteData']!==_0x1ee76b)return this[_0x4dcec9(0x1f6)];return this[_0x4dcec9(0xde)](),this[_0x4dcec9(0x195)](),this['_dragonbonesSpriteData'];}else this['_dragonbonesFlipDirection']=-0x1;}else![0x8,0x2][_0x4dcec9(0x27e)](this['_character'][_0x4dcec9(0x242)]())&&(_0x4dcec9(0x114)===_0x4dcec9(0x209)?this[_0x4dcec9(0x10c)]('guard'):this[_0x4dcec9(0x2bd)]=0x1);}return this[_0x4dcec9(0x2bd)];},Sprite_Character[_0x591d1e(0x225)][_0x591d1e(0x1f4)]=function(){const _0x1d3bca=_0x591d1e;if(!this[_0x1d3bca(0x1ff)])return;const _0x40d393=this[_0x1d3bca(0x234)][_0x1d3bca(0xd4)]();let _0x224ecd=_0x40d393[_0x1d3bca(0x1a2)];if(this[_0x1d3bca(0x234)][_0x1d3bca(0x172)]()){if(_0x1d3bca(0x20f)!==_0x1d3bca(0x109))_0x224ecd*=this[_0x1d3bca(0x234)][_0x1d3bca(0x205)](),this[_0x1d3bca(0x234)]['isDashing']()?_0x224ecd*=_0x40d393[_0x1d3bca(0x185)]:_0x224ecd*=_0x40d393[_0x1d3bca(0x2af)];else{const _0x2bad4c=this[_0x1d3bca(0x154)](_0x5c0c39);_0x2bad4c&&(_0x2042bb[_0x1d3bca(0x2b0)](_0x2bad4c),_0x2bad4c['x']=_0x601be3[_0x1d3bca(0x1d0)]/0x2,_0x2bad4c['y']=_0x378062['height']*0x3/0x4,_0x4dbe83=_0x4d7580||_0x3405f2[_0x1d3bca(0xf8)],_0x5a7ec4=_0x45e332[_0x1d3bca(0x233)](),_0x2bad4c[_0x1d3bca(0x257)][_0x1d3bca(0x12d)][_0xdd609d]&&_0x2bad4c['animation'][_0x1d3bca(0x249)](_0x5a00f6)),_0x227cd5[_0x10c97d]=_0x2bad4c;}}this['_dragonbones'][_0x1d3bca(0x257)]['timeScale']=_0x224ecd;},VisuMZ[_0x591d1e(0x111)][_0x591d1e(0xff)]=Sprite_Character[_0x591d1e(0x225)]['updateCharacterFrame'],Sprite_Character[_0x591d1e(0x225)][_0x591d1e(0x2b9)]=function(){const _0x5af543=_0x591d1e;this['_character']&&this[_0x5af543(0x234)][_0x5af543(0x1ab)]()?_0x5af543(0xe9)!==_0x5af543(0x23d)?this['updateCharacterFrameDragonbonesUnion']():_0x27bc68[_0x5af543(0xf9)]=!![]:VisuMZ[_0x5af543(0x111)][_0x5af543(0xff)][_0x5af543(0x129)](this);},Sprite_Character['prototype']['updateCharacterFrameDragonbonesUnion']=function(){const _0xa92097=_0x591d1e,_0x3e791e=this['_character'][_0xa92097(0xd4)](),_0xb93a48=_0x3e791e[_0xa92097(0x21d)];this[_0xa92097(0x253)](0x0,0x0,0x0,_0xb93a48);};