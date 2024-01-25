//=============================================================================
// VisuStella MZ - Movement Effects
// VisuMZ_2_MovementEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_MovementEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MovementEffects = VisuMZ.MovementEffects || {};
VisuMZ.MovementEffects.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.02] [MovementEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Movement_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Movement in RPG Maker MZ can be kind of dull. There's next to no way of
 * interacting with the map. This plugin adds various means of doing so to add
 * more life to the environment. Dust Clouds can kick up when running around.
 * Footprints can be left in the sand. Footsteps can be heard making different
 * sounds based on the flooring. Added movement abilities like Smart Blink,
 * Smart Jump, and Smart Rush allow players more fun traversal options. And to
 * top it off, a smooth scrolling camera will ease in the screen to focus on
 * the player character instead of being locked-on firmly. Motion blurs and
 * motion trails are also made available to further emphasize movement.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Dust Clouds can kick up off the ground whenever characters run, giving the
 *   player a better understanding of what's going on.
 * * Dust Clouds can be customized, using images or generated with different
 *   colors. These settings can be altered mid-game as well.
 * * Footprints can appear when stepping over specific tiles marked by declared
 *   terrain tags or regions. This can be used over imprintable terrain like
 *   dirt, sand, or snow.
 * * Footprints can be modified in how they appear with custom images or with
 *   generated images. These modifications will be based on the sprite sheet
 *   frame used to generate them for accuracy.
 * * Footstep sounds can be added to give player feedback whenever the player
 *   character or events move on the screen.
 * * Apply different footstep sounds to different tiles on the map marked by
 *   either regions or terrain tags.
 * * Footsteps coming from events can have a distance factor applied to them,
 *   making them sound softer the further away they are and playing on specific
 *   sides of a stereo speaker.
 * * Motion Blur effects can be used to create more impactful scenes. Apply
 *   them to any character on the map screen be it the player character,
 *   followers, or events via Plugin Command!
 * * Motion Trails can added to emphasize movement. These are also inherently a
 *   part of the new movement abilities.
 * * Newly added movement abilities that pay attention to the terrain and any
 *   implemented restrictions. These abilities include Smart Blink, Smart Jump,
 *   and Smart Rush.
 * * Directional Movement Speed Modifiers can be adjusted globally to make
 *   characters move faster or slower in certain directions. This can be used
 *   to create an illusion that it's harder to move against the wind in a storm
 *   than with.
 * * Smart Blink is a new movement ability that can be activated via Plugin
 *   Command! The player teleports forward a set distance, ignoring any walls
 *   and/or obstacles in between unless restrictions prohibit the player from
 *   doing so.
 * * Smart Jump is a new movement ability that can be activated via Plugin
 *   Command! The player jumps forward a distance as long as it does not
 *   interfere with obstacles. It can scale past pits and small gaps in height.
 *   Height maps can also be declared for some verticality on the map.
 * * Smart Rush is a new movement ability that can be activated via Plugin
 *   Command! The player charges forward extremely fast, possibly colliding
 *   with events, and possibly creating new interactions with its switch
 *   toggling nature.
 * * Smooth Camera is an added feature to smoothly adjust the camera as the
 *   player traverses across the game's maps. The scrolling speed goes slower
 *   or faster depending if the player is walking or dashing.
 * * Plugin Commands allow you to adjust Smooth Camera settings midway through
 *   the game.
 * * Map notetags can forcefully enable or disable Smooth Camera.
 * * Players that find certain effects added through this plugin annoying (such
 *   as footprints, footsteps, smooth camera, etc) can have them turned off via
 *   the Options menu.
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
 * * VisuMZ_1_EventsMoveCore
 * * Pixi JS Filters*
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
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
 * === Dust Cloud-Related Notetags ===
 * 
 * ---
 * 
 * <Force Dust Cloud>
 * 
 * - Used for: Map Notetags
 * - Forces Dust Clouds to be kicked up whenever characters are dashing
 *   regardless of whatever settings are found in the Plugin Parameters for
 *   this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * - However, if the player turns off Dust Clouds in the options menu, then
 *   this setting will be turned off.
 * 
 * ---
 *
 * <No Dust Cloud>
 *
 * - Used for: Map Notetags
 * - This disables Dust Clouds from being kicked up whenever characters are
 *   dashing regardless of whatever settings are found in the Plugin Parameters
 *   for this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 *
 * ---
 * 
 * === Footprints-Related Notetags ===
 * 
 * ---
 * 
 * <Footprint Region: x>
 * <Footprint Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which regions will have visible footprints when characters
 *   walk over those areas.
 * - Replace 'x' with a number (0 to 255) representing the region used to mark
 *   tiles that can have footprints.
 * - Insert multiple 'x' values to add multiple regions.
 * - If this notetag is used, ignore the default settings found in the
 *   Plugin Parameters.
 * 
 * ---
 * 
 * <No Footprint Region: x>
 * <No Footprint Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which regions CANNOT have footprints when characters walk
 *   over those areas.
 * - This is primarily used to offset the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 255) representing the region used to mark
 *   tiles that CANNOT have footprints.
 * - Insert multiple 'x' values to add multiple regions.
 * 
 * ---
 * 
 * <Region x Footprint Opacity: y>
 * 
 * - Used for: Map Notetags
 * - This changes the opacity of the footprints that spawn in region 'x' to
 *   have an opacity value of 'y' instead of the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 255) to indicate which region is being
 *   modified.
 * - Replace 'y' with a number (0 to 255) to represent the starting opacity
 *   value of the footprints made in that region.
 * 
 * ---
 * 
 * <Region x Footprint Duration: y>
 * 
 * - Used for: Map Notetags
 * - This changes the duration of the footprints that spawn in region 'x' to
 *   have a duration time of 'y' instead of the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 255) to indicate which region is being
 *   modified.
 * - Replace 'y' with a number in frames to represent the starting duration
 *   time of the footprints made in that region.
 * 
 * ---
 * 
 * <Footprint Terrain Tag: x>
 * <Footprint Terrain Tags: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which terrain tag marked tiles will have visible footprints
 *   when characters walk over those areas.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag used to
 *   mark tiles that can have footprints.
 * - Insert multiple 'x' values to add multiple terrain tags.
 * - If this notetag is used, ignore the default settings found in the
 *   Plugin Parameters.
 * 
 * ---
 * 
 * <No Footprint Terrain Tag: x>
 * <No Footprint Terrain Tags: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which terrain tag marked tiles CANNOT have footprints when
 *   characters walk over those areas.
 * - This is primarily used to offset the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag used to
 *   mark tiles that CANNOT have footprints.
 * - Insert multiple 'x' values to add multiple terrain tags.
 * 
 * ---
 * 
 * <Terrain Tag x Footprint Opacity: y>
 * 
 * - Used for: Map Notetags
 * - This changes the opacity of the footprints that spawn in tiles with
 *   terrain tag 'x' to have an opacity value of 'y' instead of the default
 *   settings found in the Plugin Parameters.
 * - Replace 'x' with a number (0 to 7) to indicate which terrain tag is being
 *   modified.
 * - Replace 'y' with a number (0 to 255) to represent the starting opacity
 *   value of the footprints made in that tile.
 * 
 * ---
 * 
 * <Terrain Tag x Footprint Duration: y>
 * 
 * - Used for: Map Notetags
 * - This changes the duration of the footprints that spawn in tiles with
 *   terrain tag 'x' to have a duration time of 'y' instead of the default
 *   settings found in the Plugin Parameters.
 * - Replace 'x' with a number (0 to 7) to indicate which terrain tag is being
 *   modified.
 * - Replace 'y' with a number in frames to represent the starting duration
 *   time of the footprints made in that tile.
 * 
 * ---
 * 
 * <Disable Footprints>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Prevents the character from being able to leave behind footprints.
 * 
 * ---
 * 
 * <Footprint d Pattern p Filename: filename>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Allows you to set a specific image to be used in place of a generated
 *   footprint for 'd' direction 'p' pattern.
 * - Using this will bypass any settings made for generated footprints.
 * - Replace 'd' with text representing the direction the setting is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 * - Examples:
 *   - <Footprint Down Pattern 0 Filename: FootprintDownA>
 *   - <Footprint Left Pattern 2 Filename: FootprintLeftB>
 *   - <Footprint Right Pattern 0 Filename: FootprintRightA>
 * 
 * ---
 * 
 * <Footprint d Pattern p Width: x>
 * <Footprint d Pattern p Height: y>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - For non-image generated footprints, these notetags let you set the width
 *   and/or height of the footprint for 'd' direction and 'p' pattern.
 * - Replace 'd' with text representing the direction the setting is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'x' with a number representing the width of footprint in pixels.
 * - Replace 'y' with a number representing the height of footprint in pixels.
 * - Examples:
 *   - <Footprint Down Pattern 0 Width: 6>
 *   - <Footprint Left Pattern 2 Height: 4>
 * 
 * ---
 * 
 * <Footprint d Pattern p Offset: +x, +x>
 * <Footprint d Pattern p Offset: -x, -x>
 * <Footprint d Pattern p Offset: +x, -x>
 * <Footprint d Pattern p Offset: -x, +x>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - For non-image generated footprints, these notetags let you set the offsets
 *   X and Y of the footprint for 'd' direction and 'p' pattern.
 * - Replace 'd' with text representing the direction the setting is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the footprint's x and y coordinates by.
 * - Examples:
 *   - <Footprint Up Pattern 0 Width: +4, +2>
 *   - <Footprint Right Pattern 2 Height: -6, -4>
 * 
 * ---
 * 
 * === Footsteps-Related Notetags ===
 * 
 * ---
 * 
 * <Force Footsteps>
 *
 * - Used for: Map Notetags
 * - Forces footstep sounds to be played whenever characters are walking on the
 *   screen, regardless of the settings found in the Plugin Parameters for the
 *   particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * - However, if the player turns off Footstep Sounds in the options menu, then
 *   this setting will be turned off.
 * 
 * ---
 * 
 * <No Footsteps>
 *
 * - Used for: Map Notetags
 * - Prevents footstep sounds from being played whenever characters are walking
 *   on the screen, regardless of the settings found in the Plugin Parameters
 *   for the particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * 
 * ---
 * 
 * <Region x Footstep Sound: filename>
 * <Region x Footstep Sound: filename, volume>
 * <Region x Footstep Sound: filename, volume, pitch>
 * <Region x Footstep Sound: filename, volume, pitch, pan>
 * 
 * - Used for: Map Notetags
 * - Causes a different sound effect to be played in place of the default
 *   footstep sound if a character walks on a map tile marked by region 'x'.
 * - Replace 'x' with a number (0-255) representing the region.
 * - Replace 'volume' with a number (0 to 100) representing the volume.
 * - Replace 'pitch' with a number (50 to 150) representing the pitch.
 * - Replace 'pan' with a number (-100 to 100) representing the pan.
 * - If 'volume', 'pitch', or 'pan' aren't present, then the values used for
 *   them will be based off the default settings in the Plugin Parameters.
 * - This will take priority over any terrain tags with unique footstep sounds.
 * 
 * ---
 * 
 * <No Region x Footsteps>
 * 
 * - Used for: Map Notetags
 * - No sound effects will be played when a character walks over a map tile
 *   marked by region 'x'.
 * - Replace 'x' with a number (0-255) representing the region.
 * 
 * ---
 * 
 * <Terrain Tag x Footsteps: filename>
 * <Terrain Tag x Footsteps: filename, volume>
 * <Terrain Tag x Footsteps: filename, volume, pitch>
 * <Terrain Tag x Footsteps: filename, volume, pitch, pan>
 * 
 * - Used for: Tileset Notetags
 * - Causes a different sound effect to be played in place of the default
 *   footstep sound if a character walks on a map tile with terrain tag 'x'.
 * - Replace 'x' with a number (0-7) representing the terrain tag.
 * - Replace 'volume' with a number (0 to 100) representing the volume.
 * - Replace 'pitch' with a number (50 to 150) representing the pitch.
 * - Replace 'pan' with a number (-100 to 100) representing the pan.
 * - If 'volume', 'pitch', or 'pan' aren't present, then the values used for
 *   them will be based off the default settings in the Plugin Parameters.
 * - This will have LESS priority than any regions with unique footstep sounds.
 * 
 * ---
 * 
 * <No Terrain Tag x Footsteps>
 * 
 * - Used for: Tileset Notetags
 * - No sound effects will be played when a character walks over a map tile
 *   marked by terrain tag 'x'.
 * - Replace 'x' with a number (0-7) representing the terrain tag.
 * 
 * ---
 * 
 * <Enable Footsteps>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - If actor or event footstep sounds are normally disabled, this will enable
 *   them when moving.
 * - Footstep sounds coming from actors will be given priority to the party
 *   leader first before anyone else.
 * 
 * ---
 * 
 * <Disable Footsteps>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - If actor or event footstep sounds are normally enabled, this will disable
 *   them when moving.
 * 
 * ---
 * 
 * <Footsteps Volume: x%>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Changes the volume for any footstep sounds made by this actor/event.
 * - Replace 'x' with a number (0 to 100) representing the percentile modifier,
 *   a multiplicative rate from the usual footstep volume.
 * 
 * ---
 * 
 * <Footsteps Pitch: x%>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Changes the pitch for any footstep sounds made by this actor/event.
 * - Replace 'x' with a number (0 to 100) representing the percentile modifier,
 *   a multiplicative rate from the usual footstep pitch.
 * 
 * ---
 * 
 * <Footsteps Frame: x>
 * <Footsteps Frames: x, x, x>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - For those using the "Sound by Frame?" Plugin Parameter, this will cause
 *   the footstep sounds to trigger whenever the sprite changes to the listed
 *   frame(s) in order to match up the sound with the image of the sprite
 *   stepping on the ground.
 * - This will override the setting found in the Plugin Parameters for this
 *   specific actor or event.
 * - Replace 'x' with a number representing the frame. Frames start at 0 and
 *   increase by 1 going left to right.
 * 
 * ---
 * 
 * === Smart Blink-Related Notetags ===
 * 
 * ---
 * 
 * <No Smart Blink>
 * 
 * - Used for: Map Notetags
 * - Prevents Smart Blink from being used at all on this map.
 * 
 * ---
 * 
 * <Smart Blink Non-Land Region: x>
 * <Smart Blink Non-Land Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can blink onto.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Blink Non-Land Terrain Tags: x>
 * <Smart Blink Non-Land Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can blink onto.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Blink Non-Pass Region: x>
 * <Smart Blink Non-Pass Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot pass.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to teleport past it or on it.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Blink Non-Pass Terrain Tags: x>
 * <Smart Blink Non-Pass Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot land.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to teleport past it or on it.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * === Smart Jump-Related Notetags ===
 * 
 * ---
 * 
 * <No Smart Jump>
 * 
 * - Used for: Map Notetags
 * - Prevents Smart Jump from being used at all on this map.
 * 
 * ---
 * 
 * <Smart Jump Non-Land Region: x>
 * <Smart Jump Non-Land Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can jump onto.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Non-Land Terrain Tags: x>
 * <Smart Jump Non-Land Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can jump onto.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Non-Pass Region: x>
 * <Smart Jump Non-Pass Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot pass.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to leap past it or on it.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Non-Pass Terrain Tags: x>
 * <Smart Jump Non-Pass Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot land.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to leap past it or on it.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Height-Based Regions: x, x>
 * <Smart Jump Height-Based Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Allows you to assign certain tiles to be marked as a specific height for
 *   Smart Jump to interact with.
 * - Replace 'x' with a number (0 to 255) representing the region ID to use as
 *   a height marker.
 *   - Insert multiple numbers to mark more regions.
 * - Height-Based Region interactions work as follows:
 *   - Players can jump from a height-based region to another height-based
 *     region of the same or lower value as long as that region is listed, too.
 *     - Regions listed: 10, 13, 15.
 *     - ie. The player can jump from Region 15 to 15.
 *     - ie. The player can jump from Region 15 to 13.
 *     - ie. The player can jump from Region 15 to 10.
 *     - ie. The player CANNOT jump from Region 13 to 15.
 *     - ie. The player CANNOT jump from Region 10 to 13.
 *     - ie. The player CANNOT jump from Region 10 to 15.
 *   - The lowest value number in the list is considered a "ledge" and the
 *     lowest possible level.
 *   - Players can jump in and out of the lowest level regions into non-height
 *     marked regions.
 *   - If the player is jumping towards the up, left, right directions, they
 *     cannot jump directly into a "ledge" region unless they are adjacent to
 *     the marked tile. A distance greater than 1 tile apart cannot be and the
 *     jump will be cut short.
 *   - If the player is jumping upward towards a "ledge", the player will jump
 *     directly onto the next available tile.
 *   - If the player is jumping towards the left or right directions into a
 *     "ledge" region, the player will "fall" a tile distance equal to the
 *     difference from the region height they're jumping from.
 *     - Regions listed: 10, 13, 15.
 *     - If the player is on Region 15 and jumps into a ledge (10), the player
 *       will drop 5 tiles downward.
 *     - If the player is on Region 13 and jumps into a ledge (10), the player
 *       will drop 3 tiles downward.
 *   - If the player is jumping downward towards a "ledge", the player will
 *     jump the full distance.
 *   - Examples:
 *     - <Smart Jump Height-Based Regions: 10, 13, 15>
 *       - Region 10 will be considered the "ledge" region.
 * 
 * Keep in mind that despite the fact that there is Height-Based Region support
 * for Smart Jump, maps in RPG Maker MZ are still inherently 2D. Therefore, not
 * everything will look correct for every jump-related scenario involving
 * region heights. You may need to make adjustments to maps that work best for
 * the limited 2D nature of mapping in order to adhere to what Height-Based
 * Region support can handle.
 * 
 * ---
 * 
 * <Smart Jump Non-Land>
 * 
 * - Used for: Event Notetags or Event Page Comment Tags
 * - Prevents the player from being able to land on this event.
 * 
 * ---
 * 
 * <Smart Jump Non-Pass>
 * <Illegal Jump>
 * 
 * - Used for: Event Notetags or Event Page Comment Tags
 * - Prevents the player from being able to leap past this event or on it.
 * 
 * ---
 * 
 * === Smart Rush-Related Notetags ===
 * 
 * ---
 * 
 * <No Smart Rush>
 * 
 * - Used for: Map Notetags
 * - Prevents Smart Rush from being used at all on this map.
 * 
 * ---
 * 
 * <Smart Rush Non-Crash Region: x>
 * <Smart Rush Non-Crash Region: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Prevents a screen shake crash effect when crashing into tiles marked by
 *   'x' region(s) after using a Smart Rush.
 * - This is primarily used for tiles such as water tiles so that it doesn't
 *   look like there's an invisible wall where the player is crashing into.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-crashable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 * 
 * ---
 * 
 * <Smart Rush Non-Crash Terrain Tag: x>
 * <Smart Rush Non-Crash Terrain Tag: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Prevents a screen shake crash effect when crashing into tiles marked by
 *   'x' terrain tag(s) after using a Smart Rush.
 * - This is primarily used for tiles such as water tiles so that it doesn't
 *   look like there's an invisible wall where the player is crashing into.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-crashable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific tileset.
 * 
 * ---
 * 
 * === Smooth Camera-Related Notetags ===
 * 
 * ---
 *
 * <Force Smooth Camera>
 *
 * - Used for: Map Notetags
 * - This forcefully enables Smooth Camera scrolling regardless of whatever
 *   settings are found in the Plugin Parameters for this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * - However, if the player turns off Smooth Camera scrolling in the options
 *   menu, then this setting will be turned off.
 *
 * ---
 *
 * <No Smooth Camera>
 *
 * - Used for: Map Notetags
 * - This disables Smooth Camera scrolling regardless of whatever settings are
 *   found in the Plugin Parameters for this particular map.
 * - Plugin Command changes won't bypass this notetag either.
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
 * === Dust Clouds Plugin Commands ===
 * 
 * ---
 * 
 * DUST CLOUDS: Enable/Disable
 * - Enable or Disable the Dust Clouds from spawning when dashing.
 * 
 *   Enable/Disable?:
 *   - Enables or Disables Dust Clouds.
 * 
 * ---
 * 
 * DUST CLOUDS: Change Settings
 * - Alter the existing Dust Clouds settings.
 * 
 *   Appearance:
 * 
 *     Filename:
 *     - Filename of the Dust Cloud. Leave empty if using none.
 * 
 *     Color:
 *     - Color of the dust cloud in #rrggbb format.
 *     - For generated dust clouds only.
 *     - Ignore if using image.
 * 
 *     Radius:
 *     - What is the max radius of this dust cloud?
 *     - For generated dust clouds only.
 *     - Ignore if using image.
 * 
 *     Fullness:
 *     - What is the fullness level (0.0 to 1.0)?
 *     - For generated dust clouds only.
 *     - Ignore if using image.
 * 
 *   Animation:
 * 
 *     Duration:
 *     - How many frames will a dust cloud remain on screen?
 * 
 *     Starting Opacity:
 *     - What is the starting opacity (0-255)?
 *     - Dust cloud opacity will gradually go to 0.
 * 
 *     Starting Scale:
 *     - What is the starting scale (0.0 to 1.0)?
 *     - Dust cloud scale will gradually go to 1.0.
 * 
 * ---
 * 
 * === Footprints and Footsteps Plugin Commands ===
 * 
 * ---
 * 
 * FOOTPRINTS: Enable/Disable
 * - Enable or Disable footprint marks from being made.
 * 
 *   Enable/Disable?:
 *   - Enables or Disables footprint marks.
 * 
 * ---
 * 
 * FOOTSTEPS: Enable/Disable
 * - Enable or Disable footstep sounds from being played.
 * 
 *   Enable/Disable?:
 *   - Enables or Disables footstep sounds.
 * 
 * ---
 * 
 * === Motion Blur Plugin Commands ===
 * 
 * ---
 * 
 * MOTION BLUR: Player
 * - Plays a Motion Blur on the player sprite.
 * - Requires Pixi JS Filters!
 * 
 *   Apply to Followers?:
 *   - Apply this motion blur effect to followers, too?
 * 
 *   Duration:
 *   - Play the Motion Blur effect for how many frames?
 *   - You may use JavaScript code.
 * 
 *   Angle Offset:
 *   - Offset the motion blur angle by this many degrees.
 *   - Original angle is based on facing direction.
 * 
 * ---
 * 
 * MOTION BLUR: Follower(s)
 * - Plays a Motion Blur on the follower sprite(s).
 * - Requires Pixi JS Filters!
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 *   Duration:
 *   - Play the Motion Blur effect for how many frames?
 *   - You may use JavaScript code.
 * 
 *   Angle Offset:
 *   - Offset the motion blur angle by this many degrees.
 *   - Original angle is based on facing direction.
 * 
 * ---
 * 
 * MOTION BLUR: Event(s)
 * - Plays a Motion Blur on event sprite(s).
 * - Requires Pixi JS Filters!
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Index values start at 0.
 * 
 *   Duration:
 *   - Play the Motion Blur effect for how many frames?
 *   - You may use JavaScript code.
 * 
 *   Angle Offset:
 *   - Offset the motion blur angle by this many degrees.
 *   - Original angle is based on facing direction.
 * 
 * ---
 * 
 * === Motion Trail Plugin Commands ===
 * 
 * ---
 * 
 * MOTION TRAIL: Change Settings For Player?
 * - Change Motion Trail settings for the player.
 * - This does NOT enable them. You must do that separately.
 * 
 *   Apply to Followers?:
 *   - Apply this change to followers, too?
 * 
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less after images there are.
 * 
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 * 
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 * 
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 * 
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * MOTION TRAIL: Change Settings For Follower(s)?
 * - Change Motion Trail settings for the follower(s).
 * - This does NOT enable them. You must do that separately.
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less after images there are.
 * 
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 * 
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 * 
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 * 
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * MOTION TRAIL: Change Settings For Event(s)?
 * - Change Motion Trail settings for the event(s).
 * - This does NOT enable them. You must do that separately.
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Use "0" for "this event".
 * 
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less after images there are.
 * 
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 * 
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 * 
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 * 
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * MOTION TRAIL: Create For Player
 * - Immediately create a motion trail sprite for the player in the player's
 *   current position.
 * 
 *   Apply to Followers?:
 *   - Apply this effect to followers, too?
 * 
 * ---
 * 
 * MOTION TRAIL: Create For Follower(s)
 * - Immediately create a motion trail sprite for the follower(s) in the
 *   follower(s)'s current position.
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 * ---
 * 
 * MOTION TRAIL: Create For Event(s)
 * - Immediately create a motion trail sprite for the event(s) in the
 *   event(s)'s current position.
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Use "0" for "this event".
 * 
 * ---
 * 
 * MOTION TRAIL: Enable For Player?
 * - Enables/disables Motion Trails for player sprite.
 * 
 *   Apply to Followers?:
 *   - Apply this change to followers, too?
 * 
 *   Enable/Disable?
 *   - Enables or Disables Motion Trails.
 * 
 *   Immediately Create?
 *   - Immediately create a motion trail?
 *   - Requires "Enabled" setting to also be true.
 * 
 * ---
 * 
 * MOTION TRAIL: Enable For Follower(s)?
 * - Enables/disables Motion Trails for follower sprite(s).
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 *   Enable/Disable?
 *   - Enables or Disables Motion Trails.
 * 
 *   Immediately Create?
 *   - Immediately create a motion trail?
 *   - Requires "Enabled" setting to also be true.
 * 
 * ---
 * 
 * MOTION TRAIL: Enable For Event(s)?
 * - Enables/disables Motion Trails for event sprite(s).
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Use "0" for "this event".
 * 
 *   Enable/Disable?
 *   - Enables or Disables Motion Trails.
 * 
 *   Immediately Create?
 *   - Immediately create a motion trail?
 *   - Requires "Enabled" setting to also be true.
 * 
 * ---
 * 
 * === Smart Movement Plugin Commands ===
 * 
 * ---
 * 
 * SMART: Directional Move Speed Modifier
 * - Global!
 * - These settings allow you to adjust the movement speed modifiers when
 *   characters are facing certain directions.
 * - This can be used to help give a better illusion that in a storm (or such),
 *   it is harder to move against the wind than with.
 * 
 *   Standard Directions:
 * 
 *     Down Speed:
 *     Left Speed:
 *     Right Speed:
 *     Up Speed:
 *     - What is the movement speed modifier for this direction?
 *     - These affect all characters, from players to followers to events.
 *     - Moving slower goes down 1 speed level.
 *     - Moving faster goes up 1 speed level.
 * 
 *   Diagonal Directions:
 * 
 *     Lower Left:
 *     Lower Right:
 *     Upper Left:
 *     Upper Right:
 *     - What is the movement speed modifier for this direction?
 *     - These affect all characters, from players to followers to events.
 *     - Moving slower goes down 1 speed level.
 *     - Moving faster goes up 1 speed level.
 * 
 * ---
 * 
 * SMART: Smart Blink X Tiles
 * - Player uses "Smart Blink" to teleport forward a distance.
 * - If this is last listed command, this can collide with events.
 * 
 *   Mechanics:
 * 
 *     Distance:
 *     - How many tiles will the player teleport forward?
 *     - You may use JavaScript code.
 * 
 *     Cooldown:
 *     - How many frames must the player wait before reuse?
 *     - You may use JavaScript code.
 * 
 *     Common Event ID:
 *     - If the Smash Blink is successful, play this Common Event as a
 *       Once Parallel.
 *     - Use 0 for none.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *   Restrictions:
 * 
 *     Non-Land Regions:
 *     - Which regions forbid Smart Blink from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Land Terrain Tags:
 *     - Which tags forbid Smart Blink from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Regions:
 *     - Which regions will block Smart Blink from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Terrain Tags:
 *     - Which tags will block Smart Blink from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *   Visuals:
 * 
 *     Animation ID:
 *     - What animation do you wish to play on the player if the player can
 *       Smart Blink?
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Motion Trail Settings:
 *     - Adjust the motion trail settings for this Smart Movement.
 *     - For more details, look in the sub section below.
 * 
 *   Sound Effect:
 * 
 *     Filename:
 *     - Filename of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Volume:
 *     - Volume of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Pan:
 *     - Pan of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 * ---
 * 
 * SMART: Smart Jump X Tiles
 * - Player uses "Smart Jump" to leap forward a distance.
 * - If this is last listed command, this can collide with events.
 * 
 *   Mechanics:
 * 
 *     Distance:
 *     - How many tiles will the player jump forward?
 *     - You may use JavaScript code.
 * 
 *     Cooldown:
 *     - How many frames must the player wait before reuse?
 *     - You may use JavaScript code.
 * 
 *     Common Event ID:
 *     - If the Smash Jump is successful, play this Common Event as a
 *       Once Parallel.
 *     - Use 0 for none.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *   Restrictions:
 * 
 *     Non-Land Regions:
 *     - Which regions forbid Smart Jump from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Land Terrain Tags:
 *     - Which tags forbid Smart Jump from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Regions:
 *     - Which regions will block Smart Jump from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Terrain Tags:
 *     - Which tags will block Smart Jump from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *   Visuals:
 * 
 *     Animation ID:
 *     - What animation do you wish to play on the player if the player can
 *       Smart Jump?
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Motion Trail Settings:
 *     - Adjust the motion trail settings for this Smart Movement.
 *     - For more details, look in the sub section below.
 * 
 *   Sound Effect:
 * 
 *     Filename:
 *     - Filename of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Volume:
 *     - Volume of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Pan:
 *     - Pan of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 * ---
 * 
 * SMART: Smart Rush X Tiles
 * - Player uses "Smart Rush" to rush forward a distance.
 * - If this is last listed command, this can collide with events.
 * 
 *   Mechanics:
 * 
 *     Distance:
 *     - How many tiles will player charge forward?
 *     - You may use JavaScript code.
 * 
 *     Cooldown:
 *     - How many frames must the player wait before reuse?
 *     - You may use JavaScript code.
 * 
 *     Common Event ID:
 *     - If the Smash Rush is successful, play this Common Event as a
 *       Once Parallel.
 *     - Use 0 for none.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Switch(es):
 *     - Which Switch(es) will turn ON during Smart Rush?
 *     - This Switch(es) will also turn OFF after.
 * 
 *   Visuals:
 * 
 *     Animation ID:
 *     - What animation do you wish to play on the player if the player can
 *       Smart Rush?
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Motion Trail Settings:
 *     - Adjust the motion trail settings for this Smart Movement.
 *     - For more details, look in the sub section below.
 * 
 *     Speed Rate:
 *     - How much faster is "Smart Rush" compared to Dashing?
 *     - You may use JavaScript code.
 * 
 *   Sound Effect:
 * 
 *     Filename:
 *     - Filename of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Volume:
 *     - Volume of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Pan:
 *     - Pan of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 * ---
 * 
 * Motion Trail Settings
 * - These are sub-settings found for Smart Blink, Smart Jump, and Smart Rush.
 * 
 *   General:
 * 
 *     Override?:
 *     - Override Motion Trail settings temporarily?
 *     - Otherwise, use current player Motion Trail settings.
 * 
 *   Settings:
 * 
 *     Delay:
 *     - How many frames to delay by when creating a motion trail?
 *     - The higher the delay, the less after images there are.
 * 
 *     Duration:
 *     - How many frames should the motion trail last?
 *     - What do you want to be its duration?
 * 
 *     Hue:
 *     - What do you want to be the hue for the motion trail?
 * 
 *     Starting Opacity:
 *     - What starting opacity value do you want for the motion trail?
 *     - Opacity values decrease over time.
 * 
 *     Tone:
 *     - What tone do you want for the motion trail?
 *     - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * SMART: Wait for Smart Blink
 * - Waits for player to finish Smart Blinking before continuing.
 * 
 * ---
 * 
 * SMART: Wait for Smart Jump
 * - Waits for player to finish Smart Jumping before continuing.
 * 
 * ---
 * 
 * SMART: Wait for Smart Rush
 * - Waits for player to finish Smart Rushing before continuing.
 * 
 * ---
 * 
 * === Smooth Camera Plugin Commands ===
 * 
 * ---
 *
 * SMOOTH CAMERA: Enable/Disable
 * - Enable or Disable the Smooth Camera.
 *
 *   Enable/Disable?:
 *   - Enables or Disables Smooth Camera.
 *
 * ---
 *
 * SMOOTH CAMERA: Speed Change
 * - Change the scrolling speed for the Smooth Camera.
 *
 *   Walk Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *   Dash Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Dust Cloud Settings
 * ============================================================================
 *
 * Dust Clouds can appear when the player (or any character) is dashing. The
 * spawned dust clouds have some randomness to them so not all of them are the
 * same size and scale. You can use images for custom dust clouds or use plugin
 * generated dust clouds for those who don't have custom images to use.
 *
 * ---
 *
 * Default
 * 
 *   Default Enabled?:
 *   - Are Dust Clouds enabled by default?
 * 
 * ---
 * 
 * Appearance:
 * 
 *   Filename:
 *   - Filename of the Dust Cloud. Leave empty if using none.
 * 
 *   Color:
 *   - Color of the dust cloud in #rrggbb format.
 *   - For generated dust clouds only.
 *   - Ignore if using image.
 * 
 *   Radius:
 *   - What is the max radius of this dust cloud?
 *   - For generated dust clouds only.
 *   - Ignore if using image.
 * 
 *   Fullness:
 *   - What is the fullness level (0.0 to 1.0)?
 *   - For generated dust clouds only.
 *   - Ignore if using image.
 * 
 * ---
 * 
 * Animation:
 * 
 *   Duration:
 *   - How many frames will a dust cloud remain on screen?
 * 
 *   Starting Opacity:
 *   - What is the starting opacity (0-255)?
 *   - Dust cloud opacity will gradually go to 0.
 * 
 *   Starting Scale:
 *   - What is the starting scale (0.0 to 1.0)?
 *   - Dust cloud scale will gradually go to 1.0.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Footprint Mark Settings
 * ============================================================================
 *
 * Footprint marks can appear on certain tiles probably marked by specific
 * regions and/or terrain tags. They will not appear normally unless you change
 * up the settings.
 *
 * ---
 *
 * General
 * 
 *   Default Enabled?:
 *   - Are footprint marks enabled by default?
 *
 * ---
 *
 * Appearance
 * 
 *   Opacity:
 *   - What is the starting opacity of the footprint?
 * 
 *   Duration:
 *   - How many frames will footprints remain on the screen
 *     before disappearing?
 * 
 *   Follower Variance:
 *   - What variance should followers have for their footprints?
 *   - This is to avoid them all stepping in the same place.
 *
 * ---
 *
 * Map Defaults
 * 
 *   Regions:
 *   - Which Regions will have footprints appear by default?
 * 
 *   Terrain Tags:
 *   - Which terrain tags will have footprints appear by default?
 *
 * ---
 *
 * Standard Directions
 * 
 *   Down:
 *   Left:
 *   Right:
 *   Up:
 *   - Settings used for footprints when facing moving direction.
 *   - For normal sprite sheets: 0 is left, 1 is center, 2 is right.
 *
 * ---
 *
 * Diagonal Directions
 * 
 *   Lower Left:
 *   Lower Right:
 *   Upper Left:
 *   Upper Right:
 *   - Settings used for footprints when facing moving direction.
 *   - For normal sprite sheets: 0 is left, 1 is center, 2 is right.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Footstep Sounds Settings
 * ============================================================================
 *
 * The following plugin parameters are used to modify the footstep sounds that
 * are played whenever characters move.
 *
 * ---
 *
 * General
 * 
 *   Default Enabled?:
 *   - Are footstep sounds enabled by default?
 * 
 *   Sound by Frame?:
 *   - Play footstep sounds at certain sprite frames or with each tile step?
 *   - For those who want the Yanfly Engine Plugins timing, set this to false.
 *   - On the flipside, setting it to true will cause footstep sounds to occur
 *     whenever the sprite sets its foot down (assuming you setup the frames
 *     correctly with the plugin parameter below).
 * 
 *     Audible Frame(s):
 *     - Which sprite sheet "frames" will play a sound?
 *     - Sprite sheet Frames start at 0.
 * 
 *   Walk Animation Modifier:
 *   - What is the rate at which animations play for walking?
 *   - This is to ensure the sound effects synch up.
 * 
 *   Dash Animation Modifier:
 *   - What is the rate at which animations play for dashing?
 *   - This is to ensure the sound effects synch up.
 *
 * ---
 *
 * Default Sound
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * Distance
 * 
 *   Volume Modifier:
 *   - Modifier per tile distance away from the player.
 *   - Use a decimal value.
 * 
 *   Pitch Modifier:
 *   - Modifier per tile distance away from the player.
 *   - Use a decimal value.
 * 
 *   Pan Modifier:
 *   - Modifier per tile distance away from the player.
 *   - Use an integer value.
 *
 * ---
 *
 * Actor Modifiers
 * 
 *   Enabled for Actors?:
 *   - Are footstep sounds enabled for actors by default?
 * 
 *   Volume Modifier:
 *   - Volume modifier rate for actors.
 *   - Use a decimal value.
 * 
 *   Pitch Modifier:
 *   - Pitch modifier rate for actors.
 *   - Use a decimal value.
 *
 * ---
 *
 * Event Modifiers
 * 
 *   Enabled for Events?:
 *   - Are footstep sounds enabled for events by default?
 * 
 *   Volume Modifier:
 *   - Volume modifier rate for events.
 *   - Use a decimal value.
 * 
 *   Pitch Modifier:
 *   - Pitch modifier rate for events.
 *   - Use a decimal value.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smart Blink Settings
 * ============================================================================
 *
 * Smart Blink is a Plugin Command launched action. The action will cause the
 * player to teleport forward (up to) a measured distance, bypassing any
 * obstacles and/or walls inbetween. If the Plugin Command is placed at the end
 * of the event list, then the player is able to trigger any other events on
 * the tile that the player has landed on.
 * 
 * Smart Blinking can be customized to not ignore all obstacles and/or walls.
 * In fact, through clever usage of Regions and/or Terrain Tags, game devs can
 * create areas that the player cannot teleport past (resulting in a barrier)
 * or a place that players cannot land on top of (such as rooftops). These
 * restrictions can be made on a global scale, on a map-basis, tileset-basis,
 * or even by Plugin Command-basis.
 * 
 * The Plugin Command best works when paired with a plugin like VisuStella MZ's
 * Button Common Events.
 * 
 * The Plugin Parameters below are the settings that are always static
 * throughout all Smart Blinks.
 *
 * ---
 * 
 * Mechanics
 * 
 *   Allow Diagonal Blink?:
 *   - Allow diagonal Smart Blinking?
 *   - VS8 Sprites only.
 *   - Does NOT work with standard RTP.
 *   - This is disabled by default due to how much distance a diagonal
 *     Smart Blink is able to cover.
 * 
 * ---
 *
 * Visual
 * 
 *   Blur Duration:
 *   - Requires PixiJS Filters!
 *   - How long will the motion blur last?
 * 
 *   Blur Angle Offset:
 *   - Requires PixiJS Filters!
 *   - Offset the motion blur angle by this many degrees.
 *   - Otherwise, the motion blur angle is equal to the direction the player is
 *     facing while blinking.
 *
 * ---
 *
 * Restrictions
 * 
 *   Non-Land Regions:
 *   - Which regions forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Land Terrain Tags:
 *   - Which tags forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Regions:
 *   - Which regions will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Terrain Tags:
 *   - Which tags will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smart Jump Settings
 * ============================================================================
 *
 * Smart Jump is a Plugin Command launched action. The action will cause the
 * player to jump forward (up to) a measured distance, bypassing any obstacles
 * and/or walls inbetween. If the Plugin Command is placed at the end of the
 * event list, then the player is able to trigger any other events on the tile
 * that the player has landed on.
 * 
 * Smart Jumping can be customized to not ignore all obstacles and/or walls.
 * In fact, through clever usage of Regions and/or Terrain Tags, game devs can
 * create areas that the player cannot jump past (resulting in a barrier)
 * or a place that players cannot land on top of (such as rooftops). These
 * restrictions can be made on a global scale, on a map-basis, tileset-basis,
 * or even by Plugin Command-basis.
 * 
 * Smart Jump also has height based interactions, allowing the player to jump
 * from equal height "regions" to another, such as scaling a cliff. Players can
 * also jump from higher regions to lower regions (as long as both are marked
 * as Height-Based Regions). Here are how Height-Based Regions interact:
 * 
 *   - Players can jump from a height-based region to another height-based
 *     region of the same or lower value as long as that region is listed, too.
 *     - Regions listed: 10, 13, 15.
 *     - ie. The player can jump from Region 15 to 15.
 *     - ie. The player can jump from Region 15 to 13.
 *     - ie. The player can jump from Region 15 to 10.
 *     - ie. The player CANNOT jump from Region 13 to 15.
 *     - ie. The player CANNOT jump from Region 10 to 13.
 *     - ie. The player CANNOT jump from Region 10 to 15.
 * 
 *   - The lowest value number in the list is considered a "ledge" and the
 *     lowest possible level.
 * 
 *   - Players can jump in and out of the lowest level regions into non-height
 *     marked regions.
 * 
 *   - If the player is jumping towards the up, left, right directions, they
 *     cannot jump directly into a "ledge" region unless they are adjacent to
 *     the marked tile. A distance greater than 1 tile apart cannot be and the
 *     jump will be cut short.
 * 
 *   - If the player is jumping upward towards a "ledge", the player will jump
 *     directly onto the next available tile.
 * 
 *   - If the player is jumping towards the left or right directions into a
 *     "ledge" region, the player will "fall" a tile distance equal to the
 *     difference from the region height they're jumping from.
 *     - Regions listed: 10, 13, 15.
 *     - If the player is on Region 15 and jumps into a ledge (10), the player
 *       will drop 5 tiles downward.
 *     - If the player is on Region 13 and jumps into a ledge (10), the player
 *       will drop 3 tiles downward.
 * 
 *   - If the player is jumping downward towards a "ledge", the player will
 *     jump the full distance.
 * 
 * Keep in mind that despite the fact that there is Height-Based Region support
 * for Smart Jump, maps in RPG Maker MZ are still inherently 2D. Therefore, not
 * everything will look correct for every jump-related scenario involving
 * region heights. You may need to make adjustments to maps that work best for
 * the limited 2D nature of mapping in order to adhere to what Height-Based
 * Region support can handle.
 * 
 * The Plugin Command best works when paired with a plugin like VisuStella MZ's
 * Button Common Events.
 * 
 * The Plugin Parameters below are the settings that are always static
 * throughout all Smart Blinks.
 *
 * ---
 * 
 * Mechanics
 * 
 *   Allow Diagonal Jump?:
 *   - Allow diagonal Smart Jumping?
 *   - VS8 Sprites only.
 *   - Does NOT work with standard RTP.
 *   - This is disabled by default due to how much distance a diagonal
 *     Smart Jump is able to cover.
 * 
 *   Height-Based Regions:
 *   - Determine which regions are height-based.
 *   - The lowest value region will be a "ledge".
 * 
 * ---
 *
 * Restrictions
 * 
 *   Non-Land Regions:
 *   - Which regions forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Land Terrain Tags:
 *   - Which tags forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Regions:
 *   - Which regions will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Terrain Tags:
 *   - Which tags will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smart Rush Settings
 * ============================================================================
 *
 * Smart Rush is a Plugin Command launched action. The action will cause the
 * player to rush forward at faster (normally) than dash speed. If the Plugin
 * Command is placed at the end of the event list, then the player is able to
 * collide with other events, possibly triggering them.
 * 
 * While rushing forward, any switches listed in the Plugin Command will be
 * turned to the ON position, then OFF position once the rushing is finished.
 * This means that any events that the player collides with can have a unique
 * interaction from being rushed into. Examples include making objects fall
 * from trees, breaking down locked doors, or smashing apart rubble.
 * 
 * The Plugin Command best works when paired with a plugin like VisuStella MZ's
 * Button Common Events.
 * 
 * The Plugin Parameters below are the settings that are always static
 * throughout all Smart Rushes.
 *
 * ---
 * 
 * Mechanics
 * 
 *   Allow Diagonal Rush?:
 *   - Allow diagonal Smart Rushing?
 *   - VS8 Sprites only.
 *   - Does NOT work with standard RTP.
 *   - This is disabled by default due to how much distance a diagonal
 *     Smart Rush is able to cover.
 *
 * Visual
 * 
 *   Blur Duration:
 *   - Requires PixiJS Filters!
 *   - How long will the motion blur last?
 * 
 *   Blur Angle Offset:
 *   - Requires PixiJS Filters!
 *   - Offset the motion blur angle by this many degrees.
 *   - Otherwise, the motion blur angle is equal to the direction the player is
 *     rushing at.
 *
 * ---
 *
 * Crash Shake
 * 
 *   Enable Crash Shake?:
 *   - Cause the screen to shake after crashing into an entity?
 *   - Entities can be walls or events.
 * 
 *   Power Rate:
 *   - The power modifier for the screen shake upon crashing into something.
 * 
 *   Speed Rate:
 *   - The speed modifier for the screen shake upon crashing into something.
 * 
 *   Shaking Duration:
 *   - How many frames will the screen shake last after crashing into
 *     something?
 *
 * ---
 * 
 * Non-Crash
 * 
 *   Regions:
 *   - When crashing into these region-marked tiles, do not shake the screen.
 *   - This is primarily used for tiles such as water tiles so that it doesn't
 *     look like there's an invisible wall where the player is crashing into.
 * 
 *   Terrain Tags:
 *   - When crashing into these terrain tagged tiles, do not shake the screen.
 *   - This is primarily used for tiles such as water tiles so that it doesn't
 *     look like there's an invisible wall where the player is crashing into.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smooth Camera Scrolling Settings
 * ============================================================================
 *
 * Adjust the settings for smooth camera scrolling while the player moves.
 *
 * ---
 *
 * Default
 * 
 *   Default Enabled?:
 *   - Is the Smooth Camera enabled by default?
 *
 *   Walk Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *   Dash Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters control the settings you see in the Options menu.
 * These are for players who might be bothered by some of the various features
 * found in the plugin and will grant them the ability to turn them on/off.
 *
 * ---
 *
 * Default
 * 
 *   Default Enabled?:
 *   - Is the Smooth Camera enabled by default?
 * 
 * ---
 *
 * Dust Cloud:
 * 
 *   Add Option?:
 *   - Add the 'Dust Clouds' option to the Options menu?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 * ---
 *
 * Smooth Camera:
 * 
 *   Add Option?:
 *   - Add the 'Smooth Scroll' option to the Options menu?
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
 * * Arisu
 * * Olivia
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: June 23, 2022
 * * Feature Update!
 * ** Smart Jump, Smart Rush, and Smart Blink are now temporarily disabled
 *    while followers are in the middle of gathering to reduce errors. Update
 *    made by Olivia.
 * 
 * Version 1.01: March 31, 2022
 * * Bug Fixes!
 * ** <Terrain Tag x Footsteps: filename> notetag should now work properly.
 *    Fix made by Arisu.
 * 
 * Version 1.00 Official Release Date: April 4, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DustCloud
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_DustCloud
 * @text Category - Dust Clouds
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DustCloudEnableDisable
 * @text DUST CLOUDS: Enable/Disable
 * @desc Enable or Disable the Dust Clouds from spawning when dashing.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Dust Clouds ON
 * @off Dust Clouds OFF
 * @desc Enables or Disables Dust Clouds.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DustCloudChangeSettings
 * @text DUST CLOUDS: Change Settings
 * @desc Alter the existing Dust Clouds settings.
 * 
 * @arg Appearance
 * 
 * @arg filename:str
 * @text Filename
 * @parent Appearance
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the Dust Cloud. Leave empty if using none.
 * @default 
 *
 * @arg color:str
 * @text Color
 * @parent Appearance
 * @desc Color of the dust cloud in #rrggbb format.
 * For generated dust clouds only. Ignore if using image.
 * @default #ffffff
 *
 * @arg radius:num
 * @text Radius
 * @parent Appearance
 * @type number
 * @min 1
 * @desc What is the max radius of this dust cloud?
 * For generated dust clouds only. Ignore if using image.
 * @default 24
 *
 * @arg fullness:num
 * @text Fullness
 * @parent Appearance
 * @desc What is the fullness level (0.0 to 1.0)?
 * For generated dust clouds only. Ignore if using image.
 * @default 0.20
 * 
 * @arg Animation
 *
 * @arg wholeDuration:num
 * @text Duration
 * @parent Animation
 * @type number
 * @min 1
 * @desc How many frames will a dust cloud remain on screen?
 * @default 20
 *
 * @arg startOpacity:num
 * @text Starting Opacity
 * @parent Animation
 * @type number
 * @min 1
 * @max 255
 * @desc What is the starting opacity (0-255)?
 * Dust cloud opacity will gradually go to 0.
 * @default 192
 *
 * @arg startScale:num
 * @text Starting Scale
 * @parent Animation
 * @desc What is the starting scale (0.0 to 1.0)?
 * Dust cloud scale will gradually go to 1.0.
 * @default 0.2
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Footprints
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Footprints
 * @text Category - Footprints & Footsteps
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FootprintsEnableDisable
 * @text FOOTPRINTS: Enable/Disable
 * @desc Enable or Disable footprint marks from being made.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Footprint Marks ON
 * @off Footprint Marks OFF
 * @desc Enables or Disables footprint marks.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FootstepsEnableDisable
 * @text FOOTSTEPS: Enable/Disable
 * @desc Enable or Disable footstep sounds from being played.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Enables or Disables footstep sounds.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MotionBlur
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_MotionBlur
 * @text Category - Motion Blur
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionBlurPlayer
 * @text MOTION BLUR: Player
 * @desc Plays a Motion Blur on the player sprite.
 * Requires Pixi JS Filters!
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this motion blur effect to followers, too?
 * @default true
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc Play the Motion Blur effect for how many frames?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg AngleOffset:eval
 * @text Angle Offset
 * @desc Offset the motion blur angle by this many degrees.
 * Original angle is based on facing direction.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionBlurFollower
 * @text MOTION BLUR: Follower(s)
 * @desc Plays a Motion Blur on the follower sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc Play the Motion Blur effect for how many frames?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg AngleOffset:eval
 * @text Angle Offset
 * @desc Offset the motion blur angle by this many degrees.
 * Original angle is based on facing direction.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionBlurEvent
 * @text MOTION BLUR: Event(s)
 * @desc Plays a Motion Blur on event sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to affect.
 * Use "0" for "this event".
 * @default ["0"]
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc Play the Motion Blur effect for how many frames?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg AngleOffset:eval
 * @text Angle Offset
 * @desc Offset the motion blur angle by this many degrees.
 * Original angle is based on facing direction.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MotionTrails
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_MotionTrails
 * @text Category - Motion Trails
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailSettingsChangePlayer
 * @text MOTION TRAIL: Change Settings For Player?
 * @desc Change Motion Trail settings for the player.
 * This does NOT enable them. You must do that separately.
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this change to followers, too?
 * @default true
 *
 * @arg delay:num
 * @text Delay
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @arg duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @arg hue:num
 * @text Hue
 * @type number
 * @min 0
 * @max 255
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @arg opacityStart:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @arg tone:eval
 * @text Tone
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailSettingsChangeFollower
 * @text MOTION TRAIL: Change Settings For Follower(s)?
 * @desc Change Motion Trail settings for follower(s).
 * This does NOT enable them. You must do that separately.
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg delay:num
 * @text Delay
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @arg duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @arg hue:num
 * @text Hue
 * @type number
 * @min 0
 * @max 255
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @arg opacityStart:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @arg tone:eval
 * @text Tone
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailSettingsChangeEvent
 * @text MOTION TRAIL: Change Settings For Event(s)?
 * @desc Change Motion Trail settings for event(s).
 * This does NOT enable them. You must do that separately.
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to affect.
 * Use "0" for "this event".
 * @default ["0"]
 *
 * @arg delay:num
 * @text Delay
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @arg duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @arg hue:num
 * @text Hue
 * @type number
 * @min 0
 * @max 255
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @arg opacityStart:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @arg tone:eval
 * @text Tone
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailCreateForPlayer
 * @text MOTION TRAIL: Create For Player
 * @desc Immediately create a motion trail sprite for the player
 * in the player's current position.
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this effect to followers, too?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailCreateForFollower
 * @text MOTION TRAIL: Create For Follower(s)
 * @desc Immediately create a motion trail sprite for the follower(s)
 * in the follower(s)'s current position.
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to target.
 * Index values start at 0.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailCreateForEvent
 * @text MOTION TRAIL: Create For Event(s)
 * @desc Immediately create a motion trail sprite for the event(s)
 * in the event(s)'s current position.
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to target.
 * Use "0" for "this event".
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailEnablePlayer
 * @text MOTION TRAIL: Enable For Player?
 * @desc Enables/disables Motion Trails for player sprite.
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this change to followers, too?
 * @default true
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Motion Trails ON
 * @off Motion Trails OFF
 * @desc Enables or Disables Motion Trails.
 * @default true
 *
 * @arg ImmediateCreate:eval
 * @text Immediately Create?
 * @type boolean
 * @on Create
 * @off Ignore
 * @desc Immediately create a motion trail?
 * Requires "Enabled" setting to also be true.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailEnableFollower
 * @text MOTION TRAIL: Enable For Follower(s)?
 * @desc Plays a Motion Blur on the follower sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Motion Trails ON
 * @off Motion Trails OFF
 * @desc Enables or Disables Motion Trails.
 * @default true
 *
 * @arg ImmediateCreate:eval
 * @text Immediately Create?
 * @type boolean
 * @on Create
 * @off Ignore
 * @desc Immediately create a motion trail?
 * Requires "Enabled" setting to also be true.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailEnableEvent
 * @text MOTION TRAIL: Enable For Event(s)?
 * @desc Plays a Motion Blur on event sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to affect.
 * Use "0" for "this event".
 * @default ["0"]
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Motion Trails ON
 * @off Motion Trails OFF
 * @desc Enables or Disables Motion Trails.
 * @default true
 *
 * @arg ImmediateCreate:eval
 * @text Immediately Create?
 * @type boolean
 * @on Create
 * @off Ignore
 * @desc Immediately create a motion trail?
 * Requires "Enabled" setting to also be true.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SmartMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_SmartMove
 * @text Category - Smart Movements
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartDirMoveSpeedMod
 * @text SMART: Directional Move Speed Modifier
 * @desc Global! These settings allow you to adjust the movement speed
 * modifiers when characters are facing certain directions.
 * 
 * @arg Standard
 * @text Standard Directions
 *
 * @arg dir2:str
 * @text Down Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir4:str
 * @text Left Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir6:str
 * @text Right Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir8:str
 * @text Up Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 * 
 * @arg Diagonal
 * @text Diagonal Directions
 *
 * @arg dir1:str
 * @text Lower Left Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir3:str
 * @text Lower Right Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir7:str
 * @text Upper Left Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir9:str
 * @text Upper Right Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartBlinkDistance
 * @text SMART: Smart Blink X Tiles
 * @desc Player uses "Smart Blink" to teleport forward a distance.
 * If this is last listed command, this can collide with events.
 * 
 * @arg Mechanics
 *
 * @arg Distance:eval
 * @text Distance
 * @parent Mechanics
 * @desc How many tiles will the player teleport forward?
 * You may use JavaScript code.
 * @default 5
 *
 * @arg Cooldown:eval
 * @text Cooldown
 * @parent Mechanics
 * @desc How many frames must the player wait before reuse?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg OnSuccessCommonEventID:eval
 * @text Common Event ID
 * @parent Mechanics
 * @type common_event
 * @desc If the Smash Blink is successful, play this Common Event
 * as a Once Parallel. Use 0 for none.
 * @default 0
 * 
 * @arg Restrict
 * @text Restrictions
 *
 * @arg NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Blink from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Blink from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Blink from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Blink from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 * 
 * @arg Visual
 * @text Visuals
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Visual
 * @type animation
 * @desc What animation do you wish to play on the player
 * if the player can Smart Blink?
 * @default 0
 *
 * @arg MotionTrail:struct
 * @text Motion Trail Settings
 * @parent Visual
 * @type struct<MotionTrail>
 * @desc Adjust the motion trail settings for this Smart Movement.
 * @default {"General":"","enabled:eval":"true","Settings":"","delay:num":"4","duration:num":"60","hue:num":"0","opacityStart:num":"255","tone:eval":"[0, 192, 192, 128]"}
 * 
 * @arg SoundEffect
 * @text Sound Effect
 *
 * @arg sfxName:str
 * @text Filename
 * @parent SoundEffect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played for a successful Smart Blink.
 * @default Flash2
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent SoundEffect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played for a successful Smart Blink.
 * @default 50
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent SoundEffect
 * @type number
 * @desc Pitch of the sound effect played for a successful Smart Blink.
 * @default 120
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent SoundEffect
 * @desc Pan of the sound effect played for a successful Smart Blink.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartJumpDistance
 * @text SMART: Smart Jump X Tiles
 * @desc Player uses "Smart Jump" to leap forward a distance.
 * If this is last listed command, this can collide with events.
 * 
 * @arg Mechanics
 *
 * @arg Distance:eval
 * @text Distance
 * @parent Mechanics
 * @desc How many tiles will the player jump forward?
 * You may use JavaScript code.
 * @default 2
 *
 * @arg Cooldown:eval
 * @text Cooldown
 * @parent Mechanics
 * @desc How many frames must the player wait before reuse?
 * You may use JavaScript code.
 * @default 5
 *
 * @arg OnSuccessCommonEventID:eval
 * @text Common Event ID
 * @parent Mechanics
 * @type common_event
 * @desc If the Smash Jump is successful, play this Common Event
 * as a Once Parallel. Use 0 for none.
 * @default 0
 * 
 * @arg Restrict
 * @text Restrictions
 *
 * @arg NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Jump from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Jump from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Jump from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Jump from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 * 
 * @arg Visual
 * @text Visuals
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Visual
 * @type animation
 * @desc What animation do you wish to play on the player
 * if the player can Smart Jump?
 * @default 0
 *
 * @arg MotionTrail:struct
 * @text Motion Trail Settings
 * @parent Visual
 * @type struct<MotionTrail>
 * @desc Adjust the motion trail settings for this Smart Movement.
 * @default {"General":"","enabled:eval":"true","Settings":"","delay:num":"4","duration:num":"30","hue:num":"0","opacityStart:num":"128","tone:eval":"[0, 0, 0, 0]"}
 * 
 * @arg SoundEffect
 * @text Sound Effect
 *
 * @arg sfxName:str
 * @text Filename
 * @parent SoundEffect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played for a successful Smart Jump.
 * @default Jump1
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent SoundEffect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played for a successful Smart Jump.
 * @default 50
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent SoundEffect
 * @type number
 * @desc Pitch of the sound effect played for a successful Smart Jump.
 * @default 120
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent SoundEffect
 * @desc Pan of the sound effect played for a successful Smart Jump.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartRushDistance
 * @text SMART: Smart Rush X Tiles
 * @desc Player uses "Smart Rush" to rush forward a distance.
 * If this is last listed command, this can collide with events.
 * 
 * @arg Mechanics
 *
 * @arg Distance:eval
 * @text Distance
 * @parent Mechanics
 * @desc How many tiles will player charge forward?
 * You may use JavaScript code.
 * @default 5
 *
 * @arg Cooldown:eval
 * @text Cooldown
 * @parent Mechanics
 * @desc How many frames must the player wait before reuse?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg OnSuccessCommonEventID:eval
 * @text Common Event ID
 * @parent Mechanics
 * @type common_event
 * @desc If the Smash Rush is successful, play this Common Event
 * as a Once Parallel. Use 0 for none.
 * @default 0
 *
 * @arg Switches:arraynum
 * @text Switch(es)
 * @parent Mechanics
 * @type switch[]
 * @desc Which Switch(es) will turn ON during Smart Rush?
 * This Switch(es) will also turn OFF after.
 * @default []
 * 
 * @arg Visual
 * @text Visuals
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Visual
 * @type animation
 * @desc What animation do you wish to play on the player
 * if the player can Smart Rush?
 * @default 0
 *
 * @arg MotionTrail:struct
 * @text Motion Trail Settings
 * @parent Visual
 * @type struct<MotionTrail>
 * @desc Adjust the motion trail settings for this Smart Movement.
 * @default {"General":"","enabled:eval":"true","Settings":"","delay:num":"1","duration:num":"30","hue:num":"0","opacityStart:num":"128","tone:eval":"[192, 0, 192, 128]"}
 *
 * @arg SpeedRate:eval
 * @text Speed Rate
 * @parent Visual
 * @desc How much faster is "Smart Rush" compared to Dashing?
 * You may use JavaScript code.
 * @default 1.50
 * 
 * @arg SoundEffect
 * @text Sound Effect
 *
 * @arg sfxName:str
 * @text Filename
 * @parent SoundEffect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played for a successful Smart Rush.
 * @default Wind1
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent SoundEffect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played for a successful Smart Rush.
 * @default 50
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent SoundEffect
 * @type number
 * @desc Pitch of the sound effect played for a successful Smart Rush.
 * @default 120
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent SoundEffect
 * @desc Pan of the sound effect played for a successful Smart Rush.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartMoveWaitForSmartBlink
 * @text SMART: Wait for Smart Blink
 * @desc Waits for player to finish Smart Blinking before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartMoveWaitForSmartJump
 * @text SMART: Wait for Smart Jump
 * @desc Waits for player to finish Smart Jumping before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartMoveWaitForSmartRush
 * @text SMART: Wait for Smart Rush
 * @desc Waits for player to finish Smart Rushing before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SmoothCamera
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_SmoothCamera
 * @text Category - Smooth Camera
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmoothCameraEnableDisable
 * @text SMOOTH CAMERA: Enable/Disable
 * @desc Enable or Disable the Smooth Camera.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Smooth Camera ON
 * @off Smooth Camera OFF
 * @desc Enables or Disables Smooth Camera.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmoothCameraSpeedChange
 * @text SMOOTH CAMERA: Speed Change
 * @desc Change the scrolling speed for the Smooth Camera.
 *
 * @arg WalkSpeed
 * @text Walking Speed
 *
 * @arg HorzWalk:num
 * @text Horizontal Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @arg VertWalk:num
 * @text Vertical Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @arg DashSpeed
 * @text Dashing Speed
 *
 * @arg HorzDash:num
 * @text Horizontal Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
 *
 * @arg VertDash:num
 * @text Vertical Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
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
 * @param MovementEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DustCloud:struct
 * @text Dust Cloud Settings
 * @type struct<DustCloud>
 * @desc Adjust the settings for kicked up dust clouds whenever a character is dashing.
 * @default {"Default":"","Enabled:eval":"true","Appearance":"","filename:str":"","color:str":"#ffffff","radius:num":"24","fullness:num":"0.20","Animation":"","wholeDuration:num":"20","startOpacity:num":"192","startScale:num":"0.2"}
 *
 * @param Footprints:struct
 * @text Footprint Marks Settings
 * @type struct<Footprints>
 * @desc Adjust the settings for footprint marks whenever characters walk on the map.
 * @default {"General":"","Enabled:eval":"true","Appearance":"","startOpacity:num":"64","wholeDuration:num":"600","followerVariance:num":"4","MapDefaults":"","DefaultRegions:arraynum":"[]","DefaultTerrainTags:arraynum":"[]","StandardDirections":"","dir2:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-4\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+4\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir4:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-6\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-6\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir6:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+6\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+6\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir8:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+4\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-4\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","DiagonalDirections":"","dir1:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir3:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir7:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir9:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}"}
 *
 * @param Footsteps:struct
 * @text Footstep Sounds Settings
 * @type struct<Footsteps>
 * @desc Adjust the settings for the sounds footsteps make whenever characters walk on the map.
 * @default {"General":"","Enabled:eval":"true","SoundByFrame:eval":"true","Frames:arraynum":"[\"0\",\"2\"]","FrameDashModifier:num":"1.5","Default":"","name:str":"Blow2","volume:num":"10","pitch:num":"120","pan:num":"0","Distance":"","distanceVolumeModifier:num":"-0.50","distancePitchModifier:num":"-0.00","distancePanModifier:num":"5","Actor":"","actorEnabled:eval":"true","actorVolumeModifier:num":"1.00","actorPitchModifier:num":"1.00","Event":"","eventEnabled:eval":"true","eventVolumeModifier:num":"1.00","eventPitchModifier:num":"1.00"}
 *
 * @param SmartBlink:struct
 * @text Smart Blink Settings
 * @type struct<SmartBlink>
 * @desc Settings involving the Smart Blink movement ability.
 * @default {"Mechanics":"","allowDiagonal:eval":"false","Visual":"","BlurDuration:num":"30","AngleOffset:num":"-15","Restrict":"","NonLandableRegions:arraynum":"[]","NonLandableTerrainTags:arraynum":"[]","NonPassableRegions:arraynum":"[]","NonPassableTerrainTags:arraynum":"[]"}
 *
 * @param SmartJump:struct
 * @text Smart Jump Settings
 * @type struct<SmartJump>
 * @desc Settings involving the Smart Jump movement ability.
 * @default {"Mechanics":"","allowDiagonal:eval":"false","HeightBasedRegions:arraynum":"[]","Restrict":"","NonLandableRegions:arraynum":"[]","NonLandableTerrainTags:arraynum":"[]","NonPassableRegions:arraynum":"[]","NonPassableTerrainTags:arraynum":"[]"}
 *
 * @param SmartRush:struct
 * @text Smart Rush Settings
 * @type struct<SmartRush>
 * @desc Settings involving the Smart Rush movement ability.
 * @default {"Mechanics":"","allowDiagonal:eval":"false","Visual":"","BlurDuration:num":"30","AngleOffset:num":"15","Shake":"","Enable:eval":"true","ShakePowerRate:num":"3.0","ShakeSpeedRate:num":"3.0","ShakeDuration:num":"20","NonCrash":"","NonCrashRegions:arraynum":"[]","NonCrashTerrainTags:arraynum":"[]"}
 *
 * @param SmoothCamera:struct
 * @text Smooth Camera Scrolling
 * @type struct<SmoothCamera>
 * @desc Adjust the settings for smooth camera scrolling while the player moves.
 * @default {"Default":"","Enabled:eval":"true","WalkSpeed":"","HorzWalk:num":"24","VertWalk:num":"24","DashSpeed":"","HorzDash:num":"16","VertDash:num":"16"}
 *
 * @param Options:struct
 * @text Options Menu Settings
 * @type struct<Options>
 * @desc Options settings for this plugin's various features.
 * @default {"Options":"","AdjustRect:eval":"true","DustCloud":"","AddDustCloud:eval":"true","DustCloudName:str":"Dust Clouds","Footprints":"","AddFootprints:eval":"true","FootprintsName:str":"Footprint Marks","Footsteps":"","AddFootsteps:eval":"true","FootstepsName:str":"Footstep Sounds","SmoothCamera":"","AddSmoothCamera:eval":"true","SmoothCameraName:str":"Smooth Scroll"}
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
 * Dust Cloud Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~DustCloud:
 *
 * @param Default
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent Default
 * @type boolean
 * @on Dust Clouds ON
 * @off Dust Clouds OFF
 * @desc Are Dust Clouds enabled by default?
 * @default true
 * 
 * @param Appearance
 * 
 * @param filename:str
 * @text Filename
 * @parent Appearance
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the Dust Cloud. Leave empty if using none.
 * @default 
 *
 * @param color:str
 * @text Color
 * @parent Appearance
 * @desc Color of the dust cloud in #rrggbb format.
 * For generated dust clouds only. Ignore if using image.
 * @default #ffffff
 *
 * @param radius:num
 * @text Radius
 * @parent Appearance
 * @type number
 * @min 1
 * @desc What is the max radius of this dust cloud?
 * For generated dust clouds only. Ignore if using image.
 * @default 24
 *
 * @param fullness:num
 * @text Fullness
 * @parent Appearance
 * @desc What is the fullness level (0.0 to 1.0)?
 * For generated dust clouds only. Ignore if using image.
 * @default 0.20
 * 
 * @param Animation
 *
 * @param wholeDuration:num
 * @text Duration
 * @parent Animation
 * @type number
 * @min 1
 * @desc How many frames will a dust cloud remain on screen?
 * @default 20
 *
 * @param startOpacity:num
 * @text Starting Opacity
 * @parent Animation
 * @type number
 * @min 1
 * @max 255
 * @desc What is the starting opacity (0-255)?
 * Dust cloud opacity will gradually go to 0.
 * @default 192
 *
 * @param startScale:num
 * @text Starting Scale
 * @parent Animation
 * @desc What is the starting scale (0.0 to 1.0)?
 * Dust cloud scale will gradually go to 1.0.
 * @default 0.2
 *
 */
/* ----------------------------------------------------------------------------
 * Footprints Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Footprints:
 *
 * @param General
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent General
 * @type boolean
 * @on Footprint Marks ON
 * @off Footprint Marks OFF
 * @desc Are footprint marks enabled by default?
 * @default true
 *
 * @param Appearance
 *
 * @param startOpacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 1
 * @max 255
 * @desc What is the starting opacity of the footprint?
 * @default 64
 *
 * @param wholeDuration:num
 * @text Duration
 * @parent Appearance
 * @type number
 * @desc How many frames will footprints remain on the screen before disappearing?
 * @default 600
 *
 * @param followerVariance:num
 * @text Follower Variance
 * @parent Appearance
 * @type number
 * @desc What variance should followers have for their footprints?
 * This is to avoid them all stepping in the same place.
 * @default 4
 * 
 * @param MapDefaults
 * @text Map Defaults
 *
 * @param DefaultRegions:arraynum
 * @text Regions
 * @parent MapDefaults
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which Regions will have footprints appear by default?
 * @default []
 *
 * @param DefaultTerrainTags:arraynum
 * @text Terrain Tags
 * @parent MapDefaults
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which terrain tags will have footprints appear by default?
 * @default []
 * 
 * @param StandardDirections
 * @text Standard Directions
 * 
 * @param dir2:struct
 * @text Down
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"-4\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"+4\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir4:struct
 * @text Left
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"-6\",\"offsetY:num\":\"-4\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"-6\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir6:struct
 * @text Right
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"+6\",\"offsetY:num\":\"-4\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"+6\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir8:struct
 * @text Up
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"+4\",\"offsetY:num\":\"-4\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"-4\",\"offsetY:num\":\"-4\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param DiagonalDirections
 * @text Diagonal Directions
 * 
 * @param dir1:struct
 * @text Lower Left
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir3:struct
 * @text Lower Right
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir7:struct
 * @text Upper Left
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir9:struct
 * @text Upper Right
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 *
 */
/* ----------------------------------------------------------------------------
 * Footprint Pattern Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FootprintPattern:
 * 
 * @param pattern0:struct
 * @text Pattern 0 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern1:struct
 * @text Pattern 1 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern2:struct
 * @text Pattern 2 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern3:struct
 * @text Pattern 3 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern4:struct
 * @text Pattern 4 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern5:struct
 * @text Pattern 5 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern6:struct
 * @text Pattern 6 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern7:struct
 * @text Pattern 7 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern8:struct
 * @text Pattern 8 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern9:struct
 * @text Pattern 9 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern10:struct
 * @text Pattern 10 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 */
/* ----------------------------------------------------------------------------
 * Footprint Pattern Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FootprintPatternData:
 *
 * @param Appearance
 *
 * @param filename:str
 * @text Filename
 * @parent Appearance
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for a footprint for this data.
 * If used, ignore generated footprint settings.
 * @default 
 *
 * @param Generated
 *
 * @param width:num
 * @text Width
 * @parent Generated
 * @type number
 * @desc What is the width of this footprint?
 * Ignore if using an image.
 * @default 0
 *
 * @param height:num
 * @text Height
 * @parent Generated
 * @type number
 * @desc What is the height of this footprint?
 * Ignore if using an image.
 * @default 0
 *
 * @param Offsets
 *
 * @param offsetX:num
 * @text Offset X
 * @parent Offsets
 * @desc Offset the X position of this footprint.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y
 * @parent Offsets
 * @desc Offset the Y position of this footprint.
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Footsteps Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Footsteps:
 *
 * @param General
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent General
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Are footstep sounds enabled by default?
 * @default true
 *
 * @param SoundByFrame:eval
 * @text Sound by Frame?
 * @parent General
 * @type boolean
 * @on Sounds by Frames
 * @off Sounds by Steps
 * @desc Play footstep sounds at certain sprite frames or with each tile step?
 * @default true
 *
 * @param Frames:arraynum
 * @text Audible Frame(s)
 * @parent SoundByFrame:eval
 * @type number[]
 * @desc Which sprite sheet "frames" will play a sound?
 * Sprite sheet Frames start at 0.
 * @default ["0","2"]
 *
 * @param FrameWalkModifier:num
 * @text Walk Ani Modifier
 * @parent General
 * @desc What is the rate at which animations play for walking?
 * This is to ensure the sound effects synch up.
 * @default 1.0
 *
 * @param FrameDashModifier:num
 * @text Dash Ani Modifier
 * @parent General
 * @desc What is the rate at which animations play for dashing?
 * This is to ensure the sound effects synch up.
 * @default 1.5
 *
 * @param Default
 * @text Default Sound
 * 
 * @param name:str
 * @text Filename
 * @parent Default
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Blow2
 *
 * @param volume:num
 * @text Volume
 * @parent Default
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 10
 *
 * @param pitch:num
 * @text Pitch
 * @parent Default
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param pan:num
 * @text Pan
 * @parent Default
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Distance
 *
 * @param distanceVolumeModifier:num
 * @text Volume Modifier
 * @parent Distance
 * @desc Modifier per tile distance away from the player.
 * Use a decimal value.
 * @default -0.50
 *
 * @param distancePitchModifier:num
 * @text Pitch Modifier
 * @parent Distance
 * @desc Modifier per tile distance away from the player.
 * Use a decimal value.
 * @default -0.00
 *
 * @param distancePanModifier:num
 * @text Pan Modifier
 * @parent Distance
 * @desc Modifier per tile distance away from the player.
 * Use an integer value.
 * @default 5
 *
 * @param Actor
 * @text Actor Modifiers
 *
 * @param actorEnabled:eval
 * @text Enabled for Actors?
 * @parent Actor
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Are footstep sounds enabled for actors by default?
 * @default true
 *
 * @param actorVolumeModifier:num
 * @text Volume Modifier
 * @parent Actor
 * @desc Volume modifier rate for actors.
 * Use a decimal value.
 * @default 1.00
 *
 * @param actorPitchModifier:num
 * @text Pitch Modifier
 * @parent Actor
 * @desc Pitch modifier rate for actors.
 * Use a decimal value.
 * @default 1.00
 *
 * @param Event
 * @text Event Modifiers
 *
 * @param eventEnabled:eval
 * @text Enabled for Events?
 * @parent Event
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Are footstep sounds enabled for events by default?
 * @default true
 *
 * @param eventVolumeModifier:num
 * @text Volume Modifier
 * @parent Event
 * @desc Volume modifier rate for events.
 * Use a decimal value.
 * @default 1.00
 *
 * @param eventPitchModifier:num
 * @text Pitch Modifier
 * @parent Event
 * @desc Pitch modifier rate for events.
 * Use a decimal value.
 * @default 1.00
 *
 */
/* ----------------------------------------------------------------------------
 * Smart Blink Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmartBlink:
 *
 * @param Mechanics
 *
 * @param allowDiagonal:eval
 * @text Allow Diagonal Blink?
 * @parent Mechanics
 * @type boolean
 * @on Allow for VS8-Only
 * @off Forbidden
 * @desc Allow diagonal Smart Blinking?
 * VS8 Sprites only. Does NOT work with standard RTP.
 * @default false
 * 
 * @param Visual
 *
 * @param BlurDuration:num
 * @text Blur Duration
 * @parent Visual
 * @type number
 * @min 1
 * @desc Requires PixiJS Filters! How long will the motion blur last?
 * @default 30
 *
 * @param AngleOffset:num
 * @text Blur Angle Offset
 * @parent Visual
 * @desc Requires PixiJS Filters! Offset the motion blur angle by this many degrees.
 * @default -15
 * 
 * @param Restrict
 * @text Restrictions
 *
 * @param NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Blink from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Blink from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Blink from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Blink from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Smart Jump Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmartJump:
 *
 * @param Mechanics
 *
 * @param allowDiagonal:eval
 * @text Allow Diagonal Jump?
 * @parent Mechanics
 * @type boolean
 * @on Allow for VS8-Only
 * @off Forbidden
 * @desc Allow diagonal Smart Jumping?
 * VS8 Sprites only. Does NOT work with standard RTP.
 * @default false
 *
 * @param HeightBasedRegions:arraynum
 * @text Height-Based Regions
 * @parent Mechanics
 * @type number[]
 * @min 0
 * @max 255
 * @desc Determine which regions are height-based.
 * The lowest value region will be a "ledge".
 * @default []
 * 
 * @param Restrict
 * @text Restrictions
 *
 * @param NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Jump from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Jump from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Jump from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Jump from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Smart Rush Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmartRush:
 *
 * @param Mechanics
 *
 * @param allowDiagonal:eval
 * @text Allow Diagonal Rush?
 * @parent Mechanics
 * @type boolean
 * @on Allow for VS8-Only
 * @off Forbidden
 * @desc Allow diagonal Smart Rush?
 * VS8 Sprites only. Does NOT work with standard RTP.
 * @default false
 *
 * @param Visual
 *
 * @param BlurDuration:num
 * @text Blur Duration
 * @parent Visual
 * @type number
 * @min 1
 * @desc Requires PixiJS Filters! How long will the motion blur last?
 * @default 30
 *
 * @param AngleOffset:num
 * @text Blur Angle Offset
 * @parent Visual
 * @desc Requires PixiJS Filters! Offset the motion blur angle by this many degrees.
 * @default 15
 *
 * @param Shake
 * @text Crash Shake
 *
 * @param Enable:eval
 * @text Enable Crash Shake?
 * @parent Shake
 * @type boolean
 * @on Enable Crash Shake
 * @off Disable Crash Shake
 * @desc Cause the screen to shake after crashing into an entity?
 * @default true
 *
 * @param ShakePowerRate:num
 * @text Power Rate
 * @parent Shake
 * @desc The power modifier for the screen shake upon crashing into something.
 * @default 3.0
 *
 * @param ShakeSpeedRate:num
 * @text Speed Rate
 * @parent Shake
 * @desc The speed modifier for the screen shake upon crashing into something.
 * @default 3.0
 *
 * @param ShakeDuration:num
 * @text Shaking Duration
 * @parent Shake
 * @type number
 * @min 1
 * @desc How many frames will the screen shake last after crashing into something?
 * @default 20
 *
 * @param NonCrash
 * @text Non-Crash
 *
 * @param NonCrashRegions:arraynum
 * @text Regions
 * @parent NonCrash
 * @type number[]
 * @min 1
 * @max 255
 * @desc When crashing into these region-marked tiles, do not shake the screen.
 * @default []
 *
 * @param NonCrashTerrainTags:arraynum
 * @text Terrain Tags
 * @parent NonCrash
 * @type number[]
 * @min 1
 * @max 7
 * @desc When crashing into these terrain tagged tiles, do not shake the screen.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Smooth Camera Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmoothCamera:
 *
 * @param Default
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent Default
 * @type boolean
 * @on Smooth Camera ON
 * @off Smooth Camera OFF
 * @desc Is the Smooth Camera enabled by default?
 * @default true
 *
 * @param WalkSpeed
 * @text Walking Speed
 *
 * @param HorzWalk:num
 * @text Horizontal Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @param VertWalk:num
 * @text Vertical Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @param DashSpeed
 * @text Dashing Speed
 *
 * @param HorzDash:num
 * @text Horizontal Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
 *
 * @param VertDash:num
 * @text Vertical Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
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
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param DustCloud
 * @text Dust Cloud
 *
 * @param AddDustCloud:eval
 * @text Add Option?
 * @parent DustCloud
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Dust Clouds' option to the Options menu?
 * @default true
 *
 * @param DustCloudName:str
 * @text Option Name
 * @parent DustCloud
 * @desc Command name of the option.
 * @default Dust Clouds
 *
 * @param Footprints
 * @text Footprint Marks
 *
 * @param AddFootprints:eval
 * @text Add Option?
 * @parent Footprints
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Footprint Marks' option to the Options menu?
 * @default true
 *
 * @param FootprintsName:str
 * @text Option Name
 * @parent Footprints
 * @desc Command name of the option.
 * @default Footprint Marks
 *
 * @param Footsteps
 * @text Footstep Sounds
 *
 * @param AddFootsteps:eval
 * @text Add Option?
 * @parent Footsteps
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Footstep Sounds' option to the Options menu?
 * @default true
 *
 * @param FootstepsName:str
 * @text Option Name
 * @parent Footsteps
 * @desc Command name of the option.
 * @default Footstep Sounds
 *
 * @param SmoothCamera
 * @text Smooth Camera
 *
 * @param AddSmoothCamera:eval
 * @text Add Option?
 * @parent SmoothCamera
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Smooth Scroll' option to the Options menu?
 * @default true
 *
 * @param SmoothCameraName:str
 * @text Option Name
 * @parent SmoothCamera
 * @desc Command name of the option.
 * @default Smooth Scroll
 *
 */
/* ----------------------------------------------------------------------------
 * Motion Trail Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MotionTrail:
 *
 * @param General
 *
 * @param enabled:eval
 * @text Override?
 * @parent General
 * @type boolean
 * @on Override Settings
 * @off Don't Override Settings
 * @desc Override Motion Trail settings temporarily?
 * @default true
 *
 * @param Settings
 *
 * @param delay:num
 * @text Delay
 * @parent Settings
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @param duration:num
 * @text Duration
 * @parent Settings
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @param hue:num
 * @text Hue
 * @parent Settings
 * @type number
 * @min 0
 * @max 255
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @param opacityStart:num
 * @text Starting Opacity
 * @parent Settings
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @param tone:eval
 * @text Tone
 * @parent Settings
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 */
//=============================================================================

const _0x344336=_0x2371;function _0x2371(_0x3b4f75,_0x60f9){const _0x58e03f=_0x58e0();return _0x2371=function(_0x237104,_0x251ba3){_0x237104=_0x237104-0x1c8;let _0x258ad5=_0x58e03f[_0x237104];return _0x258ad5;},_0x2371(_0x3b4f75,_0x60f9);}(function(_0x34503e,_0x2fef1c){const _0x4ab30d=_0x2371,_0x13cc55=_0x34503e();while(!![]){try{const _0x59e9f9=-parseInt(_0x4ab30d(0x389))/0x1+-parseInt(_0x4ab30d(0x38f))/0x2*(-parseInt(_0x4ab30d(0x231))/0x3)+parseInt(_0x4ab30d(0x2e8))/0x4+-parseInt(_0x4ab30d(0x437))/0x5*(-parseInt(_0x4ab30d(0x1ee))/0x6)+parseInt(_0x4ab30d(0x383))/0x7*(parseInt(_0x4ab30d(0x3fb))/0x8)+-parseInt(_0x4ab30d(0x3b8))/0x9+-parseInt(_0x4ab30d(0x3e3))/0xa;if(_0x59e9f9===_0x2fef1c)break;else _0x13cc55['push'](_0x13cc55['shift']());}catch(_0x5253dc){_0x13cc55['push'](_0x13cc55['shift']());}}}(_0x58e0,0xac3fa));var label='MovementEffects',tier=tier||0x0,dependencies=['VisuMZ_0_CoreEngine','VisuMZ_1_EventsMoveCore'],pluginData=$plugins['filter'](function(_0x3a2493){const _0x509639=_0x2371;return _0x3a2493[_0x509639(0x1d1)]&&_0x3a2493[_0x509639(0x1de)][_0x509639(0x318)]('['+label+']');})[0x0];VisuMZ[label][_0x344336(0x2a0)]=VisuMZ[label][_0x344336(0x2a0)]||{},VisuMZ[_0x344336(0x35a)]=function(_0x1ed1ca,_0xa29f1a){const _0x37bd26=_0x344336;for(const _0x314cbf in _0xa29f1a){if(_0x314cbf['match'](/(.*):(.*)/i)){const _0x4d4a13=String(RegExp['$1']),_0x4465b1=String(RegExp['$2'])[_0x37bd26(0x390)]()[_0x37bd26(0x3bf)]();let _0x58db43,_0x4ac658,_0x3f7531;switch(_0x4465b1){case _0x37bd26(0x31b):_0x58db43=_0xa29f1a[_0x314cbf]!==''?Number(_0xa29f1a[_0x314cbf]):0x0;break;case _0x37bd26(0x3ae):_0x4ac658=_0xa29f1a[_0x314cbf]!==''?JSON[_0x37bd26(0x378)](_0xa29f1a[_0x314cbf]):[],_0x58db43=_0x4ac658[_0x37bd26(0x269)](_0x5650de=>Number(_0x5650de));break;case _0x37bd26(0x344):_0x58db43=_0xa29f1a[_0x314cbf]!==''?eval(_0xa29f1a[_0x314cbf]):null;break;case _0x37bd26(0x42f):_0x4ac658=_0xa29f1a[_0x314cbf]!==''?JSON[_0x37bd26(0x378)](_0xa29f1a[_0x314cbf]):[],_0x58db43=_0x4ac658[_0x37bd26(0x269)](_0x5ddef4=>eval(_0x5ddef4));break;case _0x37bd26(0x306):_0x58db43=_0xa29f1a[_0x314cbf]!==''?JSON[_0x37bd26(0x378)](_0xa29f1a[_0x314cbf]):'';break;case _0x37bd26(0x39d):_0x4ac658=_0xa29f1a[_0x314cbf]!==''?JSON[_0x37bd26(0x378)](_0xa29f1a[_0x314cbf]):[],_0x58db43=_0x4ac658[_0x37bd26(0x269)](_0x58a84b=>JSON[_0x37bd26(0x378)](_0x58a84b));break;case _0x37bd26(0x2f0):_0x58db43=_0xa29f1a[_0x314cbf]!==''?new Function(JSON[_0x37bd26(0x378)](_0xa29f1a[_0x314cbf])):new Function('return\x200');break;case _0x37bd26(0x28e):_0x4ac658=_0xa29f1a[_0x314cbf]!==''?JSON[_0x37bd26(0x378)](_0xa29f1a[_0x314cbf]):[],_0x58db43=_0x4ac658[_0x37bd26(0x269)](_0x1583a8=>new Function(JSON['parse'](_0x1583a8)));break;case _0x37bd26(0x432):_0x58db43=_0xa29f1a[_0x314cbf]!==''?String(_0xa29f1a[_0x314cbf]):'';break;case _0x37bd26(0x223):_0x4ac658=_0xa29f1a[_0x314cbf]!==''?JSON[_0x37bd26(0x378)](_0xa29f1a[_0x314cbf]):[],_0x58db43=_0x4ac658['map'](_0x333701=>String(_0x333701));break;case _0x37bd26(0x3ce):_0x3f7531=_0xa29f1a[_0x314cbf]!==''?JSON[_0x37bd26(0x378)](_0xa29f1a[_0x314cbf]):{},_0x58db43=VisuMZ['ConvertParams']({},_0x3f7531);break;case _0x37bd26(0x32a):_0x4ac658=_0xa29f1a[_0x314cbf]!==''?JSON['parse'](_0xa29f1a[_0x314cbf]):[],_0x58db43=_0x4ac658[_0x37bd26(0x269)](_0x5d6515=>VisuMZ[_0x37bd26(0x35a)]({},JSON[_0x37bd26(0x378)](_0x5d6515)));break;default:continue;}_0x1ed1ca[_0x4d4a13]=_0x58db43;}}return _0x1ed1ca;},(_0x13b63e=>{const _0x15e062=_0x344336,_0x30b113=_0x13b63e['name'];for(const _0x1dda27 of dependencies){if(!Imported[_0x1dda27]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x15e062(0x2bd)](_0x30b113,_0x1dda27)),SceneManager[_0x15e062(0x3be)]();break;}}const _0x7758ea=_0x13b63e[_0x15e062(0x1de)];if(_0x7758ea['match'](/\[Version[ ](.*?)\]/i)){const _0x17e830=Number(RegExp['$1']);_0x17e830!==VisuMZ[label][_0x15e062(0x37b)]&&(alert(_0x15e062(0x2e2)[_0x15e062(0x2bd)](_0x30b113,_0x17e830)),SceneManager[_0x15e062(0x3be)]());}if(_0x7758ea[_0x15e062(0x42b)](/\[Tier[ ](\d+)\]/i)){const _0x4b614f=Number(RegExp['$1']);_0x4b614f<tier?(alert(_0x15e062(0x32f)[_0x15e062(0x2bd)](_0x30b113,_0x4b614f,tier)),SceneManager[_0x15e062(0x3be)]()):tier=Math[_0x15e062(0x3ab)](_0x4b614f,tier);}VisuMZ[_0x15e062(0x35a)](VisuMZ[label][_0x15e062(0x2a0)],_0x13b63e[_0x15e062(0x1f8)]);})(pluginData),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x31a),_0x467a4c=>{const _0x274c89=_0x344336;VisuMZ[_0x274c89(0x35a)](_0x467a4c,_0x467a4c);const _0xeb67da=_0x467a4c[_0x274c89(0x2e4)];$gameSystem[_0x274c89(0x2ca)]()['enabled']=_0xeb67da;}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x3a5),_0x18c1a9=>{const _0x38d99e=_0x344336;VisuMZ[_0x38d99e(0x35a)](_0x18c1a9,_0x18c1a9);const _0x2343e7=JsonEx[_0x38d99e(0x388)](_0x18c1a9);_0x2343e7['enabled']=$gameSystem[_0x38d99e(0x22e)](),$gameSystem[_0x38d99e(0x25f)](_0x2343e7);}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x330),_0x227cbe=>{const _0x2d254f=_0x344336;VisuMZ['ConvertParams'](_0x227cbe,_0x227cbe);const _0x2a1e67=_0x227cbe['Enable'];$gameSystem[_0x2d254f(0x33b)](_0x2a1e67);}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x298),_0xdf1115=>{const _0x546e0f=_0x344336;VisuMZ['ConvertParams'](_0xdf1115,_0xdf1115);const _0x22a78f=_0xdf1115['Enable'];$gameSystem[_0x546e0f(0x2a3)](_0x22a78f);}),PluginManager[_0x344336(0x397)](pluginData['name'],_0x344336(0x1f2),_0x4b343=>{const _0xcd460e=_0x344336;if(!SceneManager[_0xcd460e(0x202)]())return;const _0xe52de6=SceneManager[_0xcd460e(0x352)][_0xcd460e(0x403)];if(!_0xe52de6)return;VisuMZ[_0xcd460e(0x35a)](_0x4b343,_0x4b343);const _0x3aefab=_0x4b343[_0xcd460e(0x394)]||0x1,_0x5c04e9=_0x4b343[_0xcd460e(0x2c2)]||0x0;let _0x56842a=[$gamePlayer];_0x4b343['ApplyFollowers']&&(_0x56842a=_0x56842a[_0xcd460e(0x279)]($gamePlayer['followers']()[_0xcd460e(0x2e3)]()));for(const _0x18e28e of _0x56842a){if(!_0x18e28e)continue;const _0x506f18=_0xe52de6[_0xcd460e(0x35d)](_0x18e28e);_0x506f18&&_0x506f18[_0xcd460e(0x3a2)](_0x3aefab,_0x5c04e9);}}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x3eb),_0x352ef4=>{const _0x581a15=_0x344336;if(!SceneManager['isSceneMap']())return;const _0x383492=SceneManager['_scene'][_0x581a15(0x403)];if(!_0x383492)return;VisuMZ['ConvertParams'](_0x352ef4,_0x352ef4);const _0x2ce7bc=_0x352ef4[_0x581a15(0x394)]||0x1,_0x3d3dcd=_0x352ef4[_0x581a15(0x2c2)]||0x0,_0x54c451=_0x352ef4[_0x581a15(0x23c)];let _0x393003=_0x54c451[_0x581a15(0x269)](_0x596107=>$gamePlayer[_0x581a15(0x2fa)]()[_0x581a15(0x275)](_0x596107));for(const _0xbf8814 of _0x393003){if(!_0xbf8814)continue;const _0x5eb4d5=_0x383492['findTargetSprite'](_0xbf8814);_0x5eb4d5&&_0x5eb4d5[_0x581a15(0x3a2)](_0x2ce7bc,_0x3d3dcd);}}),PluginManager[_0x344336(0x397)](pluginData['name'],_0x344336(0x1eb),_0x1874c7=>{const _0x26724b=_0x344336;if(!SceneManager[_0x26724b(0x202)]())return;const _0x7b9134=SceneManager[_0x26724b(0x352)][_0x26724b(0x403)];if(!_0x7b9134)return;VisuMZ[_0x26724b(0x35a)](_0x1874c7,_0x1874c7);const _0x126f97=_0x1874c7[_0x26724b(0x394)]||0x1,_0x1397cc=_0x1874c7[_0x26724b(0x2c2)]||0x0,_0xf8d095=_0x1874c7[_0x26724b(0x372)],_0x32a56f=$gameTemp[_0x26724b(0x225)]();let _0xec2f8c=_0xf8d095['map'](_0x8b09e7=>$gameMap[_0x26724b(0x208)](_0x8b09e7||_0x32a56f[_0x26724b(0x3a7)]()));for(const _0x5afcde of _0xec2f8c){if(!_0x5afcde)continue;const _0xa40906=_0x7b9134[_0x26724b(0x35d)](_0x5afcde);_0xa40906&&_0xa40906[_0x26724b(0x3a2)](_0x126f97,_0x1397cc);}}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x336),_0xdd9799=>{const _0x25f719=_0x344336;if(!SceneManager[_0x25f719(0x202)]())return;const _0x497c77=SceneManager[_0x25f719(0x352)]['_spriteset'];if(!_0x497c77)return;VisuMZ[_0x25f719(0x35a)](_0xdd9799,_0xdd9799);let _0x1e5508=[$gamePlayer];_0xdd9799[_0x25f719(0x371)]&&(_0x1e5508=_0x1e5508[_0x25f719(0x279)]($gamePlayer[_0x25f719(0x2fa)]()['data']()));for(const _0x550972 of _0x1e5508){if(!_0x550972)continue;const _0x45caf7=_0x497c77['findTargetSprite'](_0x550972);_0x45caf7&&_0x45caf7[_0x25f719(0x2f5)]();}}),PluginManager[_0x344336(0x397)](pluginData['name'],_0x344336(0x436),_0x2d619b=>{const _0x12b748=_0x344336;if(!SceneManager['isSceneMap']())return;const _0x1632f5=SceneManager[_0x12b748(0x352)][_0x12b748(0x403)];if(!_0x1632f5)return;VisuMZ[_0x12b748(0x35a)](_0x2d619b,_0x2d619b);const _0x13f1db=_0x2d619b[_0x12b748(0x23c)];let _0x2b3b29=_0x13f1db[_0x12b748(0x269)](_0x8407=>$gamePlayer['followers']()[_0x12b748(0x275)](_0x8407));for(const _0x5920fe of _0x2b3b29){if(!_0x5920fe)continue;const _0x12e3af=_0x1632f5[_0x12b748(0x35d)](_0x5920fe);_0x12e3af&&_0x12e3af[_0x12b748(0x2f5)]();}}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x1ec),_0x3667bc=>{const _0x43119e=_0x344336;if(!SceneManager[_0x43119e(0x202)]())return;const _0xd23ba1=SceneManager[_0x43119e(0x352)]['_spriteset'];if(!_0xd23ba1)return;VisuMZ[_0x43119e(0x35a)](_0x3667bc,_0x3667bc);const _0x17b7d9=_0x3667bc[_0x43119e(0x372)],_0x4e2d1f=$gameTemp[_0x43119e(0x225)]();let _0x45a9bc=_0x17b7d9['map'](_0x36eabf=>$gameMap[_0x43119e(0x208)](_0x36eabf||_0x4e2d1f[_0x43119e(0x3a7)]()));for(const _0x320dc2 of _0x45a9bc){if(!_0x320dc2)continue;const _0x45a640=_0xd23ba1[_0x43119e(0x35d)](_0x320dc2);_0x45a640&&_0x45a640[_0x43119e(0x2f5)]();}}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x294),_0x146a38=>{const _0x3f6c6c=_0x344336;if(!SceneManager[_0x3f6c6c(0x202)]())return;VisuMZ[_0x3f6c6c(0x35a)](_0x146a38,_0x146a38);const _0x28539a=_0x146a38[_0x3f6c6c(0x2e4)],_0x53d53f=_0x146a38[_0x3f6c6c(0x3aa)];let _0x14f9d8=[$gamePlayer];_0x146a38[_0x3f6c6c(0x371)]&&(_0x14f9d8=_0x14f9d8['concat']($gamePlayer[_0x3f6c6c(0x2fa)]()[_0x3f6c6c(0x2e3)]()));for(const _0x4b81ed of _0x14f9d8){if(!_0x4b81ed)continue;_0x4b81ed[_0x3f6c6c(0x203)](_0x28539a,_0x53d53f);}}),PluginManager['registerCommand'](pluginData['name'],_0x344336(0x1f0),_0x31aea7=>{const _0x3180c7=_0x344336;if(!SceneManager[_0x3180c7(0x202)]())return;VisuMZ[_0x3180c7(0x35a)](_0x31aea7,_0x31aea7);const _0xf8886a=_0x31aea7['Enable'],_0x266aa6=_0x31aea7[_0x3180c7(0x3aa)],_0x8a44fc=_0x31aea7['Index'];let _0x54d652=_0x8a44fc[_0x3180c7(0x269)](_0x598c59=>$gamePlayer[_0x3180c7(0x2fa)]()['follower'](_0x598c59));for(const _0x5550df of _0x54d652){if(!_0x5550df)continue;_0x5550df[_0x3180c7(0x203)](_0xf8886a,_0x266aa6);}}),PluginManager['registerCommand'](pluginData['name'],_0x344336(0x20e),_0x926be9=>{const _0x282a5b=_0x344336;if(!SceneManager[_0x282a5b(0x202)]())return;VisuMZ[_0x282a5b(0x35a)](_0x926be9,_0x926be9);const _0x1ee3b4=_0x926be9[_0x282a5b(0x2e4)],_0x2e7c3d=_0x926be9[_0x282a5b(0x3aa)],_0x23d22c=_0x926be9[_0x282a5b(0x372)],_0x450ecb=$gameTemp[_0x282a5b(0x225)]();let _0x57aa40=_0x23d22c[_0x282a5b(0x269)](_0x246b74=>$gameMap[_0x282a5b(0x208)](_0x246b74||_0x450ecb['eventId']()));for(const _0x39d7d0 of _0x57aa40){if(!_0x39d7d0)continue;_0x39d7d0[_0x282a5b(0x203)](_0x1ee3b4,_0x2e7c3d);}}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],'MotionTrailSettingsChangePlayer',_0x375eea=>{const _0x2615ac=_0x344336;if(!SceneManager[_0x2615ac(0x202)]())return;VisuMZ[_0x2615ac(0x35a)](_0x375eea,_0x375eea);const _0x2c3ef2={'enabled':![],'delay':_0x375eea[_0x2615ac(0x1e3)]||0x1,'duration':_0x375eea['duration']||0x1,'hue':_0x375eea[_0x2615ac(0x221)]||0x0,'opacityStart':_0x375eea[_0x2615ac(0x29f)]||0x0,'tone':_0x375eea['tone']||[0x0,0x0,0x0,0x0]};let _0x242e97=[$gamePlayer];_0x375eea[_0x2615ac(0x371)]&&(_0x242e97=_0x242e97['concat']($gamePlayer[_0x2615ac(0x2fa)]()[_0x2615ac(0x2e3)]()));for(const _0x42075b of _0x242e97){if(!_0x42075b)continue;_0x42075b['setMotionTrailSettings'](_0x2c3ef2);}}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x26a),_0x41bb7a=>{const _0x102052=_0x344336;if(!SceneManager[_0x102052(0x202)]())return;VisuMZ['ConvertParams'](_0x41bb7a,_0x41bb7a);const _0x4dbf95={'enabled':![],'delay':_0x41bb7a[_0x102052(0x1e3)]||0x1,'duration':_0x41bb7a[_0x102052(0x3c1)]||0x1,'hue':_0x41bb7a['hue']||0x0,'opacityStart':_0x41bb7a[_0x102052(0x29f)]||0x0,'tone':_0x41bb7a[_0x102052(0x265)]||[0x0,0x0,0x0,0x0]},_0x20acca=_0x41bb7a[_0x102052(0x23c)];let _0x45c739=_0x20acca[_0x102052(0x269)](_0xd3a14d=>$gamePlayer[_0x102052(0x2fa)]()[_0x102052(0x275)](_0xd3a14d));for(const _0x404688 of _0x45c739){if(!_0x404688)continue;_0x404688[_0x102052(0x280)](_0x4dbf95);}}),PluginManager[_0x344336(0x397)](pluginData['name'],_0x344336(0x3fc),_0x3a5c58=>{const _0x52f27a=_0x344336;if(!SceneManager[_0x52f27a(0x202)]())return;VisuMZ[_0x52f27a(0x35a)](_0x3a5c58,_0x3a5c58);const _0x41e6bc={'enabled':![],'delay':_0x3a5c58[_0x52f27a(0x1e3)]||0x1,'duration':_0x3a5c58['duration']||0x1,'hue':_0x3a5c58[_0x52f27a(0x221)]||0x0,'opacityStart':_0x3a5c58[_0x52f27a(0x29f)]||0x0,'tone':_0x3a5c58[_0x52f27a(0x265)]||[0x0,0x0,0x0,0x0]},_0x27a2fc=_0x3a5c58[_0x52f27a(0x372)],_0x58a389=$gameTemp['getLastPluginCommandInterpreter']();let _0x29db3d=_0x27a2fc['map'](_0x24433b=>$gameMap[_0x52f27a(0x208)](_0x24433b||_0x58a389[_0x52f27a(0x3a7)]()));for(const _0xe7484d of _0x29db3d){if(!_0xe7484d)continue;_0xe7484d[_0x52f27a(0x280)](_0x41e6bc);}}),PluginManager[_0x344336(0x397)](pluginData['name'],_0x344336(0x339),_0x1eafb1=>{const _0x3dafa5=_0x344336;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x3dafa5(0x35a)](_0x1eafb1,_0x1eafb1);const _0xbf755f={'slower':-0x1,'normal':0x0,'faster':0x1};for(let _0x4e20b1=0x1;_0x4e20b1<0xa;_0x4e20b1++){if(_0x4e20b1===0x5)continue;const _0x27bd5d=_0x3dafa5(0x219)[_0x3dafa5(0x2bd)](_0x4e20b1),_0x250526=(_0x1eafb1[_0x27bd5d]||_0x3dafa5(0x2c1))[_0x3dafa5(0x293)]()[_0x3dafa5(0x3bf)](),_0x48b186=_0xbf755f[_0x250526]||0x0;$gameSystem[_0x3dafa5(0x24e)](_0x4e20b1,_0x48b186);}}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x3a9),_0x1f8453=>{const _0x22ed0f=_0x344336;if(!SceneManager[_0x22ed0f(0x202)]())return;VisuMZ['ConvertParams'](_0x1f8453,_0x1f8453);const _0x10e90f=_0x1f8453[_0x22ed0f(0x2d1)]||0x1,_0x5df4f8=_0x1f8453[_0x22ed0f(0x365)]||0x1,_0x1d2d3f=_0x1f8453[_0x22ed0f(0x3dd)]||0x0,_0x4f90bc={'NonLandableRegions':_0x1f8453[_0x22ed0f(0x368)][_0x22ed0f(0x23d)](),'NonLandableTerrainTags':_0x1f8453[_0x22ed0f(0x364)][_0x22ed0f(0x23d)](),'NonPassableRegions':_0x1f8453['NonPassableRegions'][_0x22ed0f(0x23d)](),'NonPassableTerrainTags':_0x1f8453['NonPassableTerrainTags'][_0x22ed0f(0x23d)]()},_0x3708f3=_0x1f8453[_0x22ed0f(0x2cf)]||0x0,_0x23476b=_0x1f8453[_0x22ed0f(0x32d)]||{'enabled':![]},_0x9980f4={'name':_0x1f8453[_0x22ed0f(0x335)]||'','volume':_0x1f8453[_0x22ed0f(0x2fb)]||0x0,'pitch':_0x1f8453[_0x22ed0f(0x3b9)]||0x0,'pan':_0x1f8453['sfxPan']||0x0};$gamePlayer[_0x22ed0f(0x411)](_0x10e90f,_0x5df4f8,_0x4f90bc,_0x23476b)&&(_0x9980f4[_0x22ed0f(0x251)]!==''&&AudioManager['playSe'](_0x9980f4),_0x3708f3>0x0&&$gameTemp[_0x22ed0f(0x427)]([$gamePlayer],_0x3708f3),_0x1d2d3f>0x0&&SceneManager[_0x22ed0f(0x352)][_0x22ed0f(0x2c9)](_0x1d2d3f));}),PluginManager[_0x344336(0x397)](pluginData['name'],_0x344336(0x224),_0x14c1ad=>{const _0x59242e=_0x344336;if(!SceneManager[_0x59242e(0x202)]())return;VisuMZ['ConvertParams'](_0x14c1ad,_0x14c1ad);const _0x24326f=_0x14c1ad['Distance']||0x1,_0x345619=_0x14c1ad[_0x59242e(0x365)]||0x1,_0x3cdc8b=_0x14c1ad[_0x59242e(0x3dd)]||0x0,_0x3ed800={'NonLandableRegions':_0x14c1ad[_0x59242e(0x368)][_0x59242e(0x23d)](),'NonLandableTerrainTags':_0x14c1ad[_0x59242e(0x364)][_0x59242e(0x23d)](),'NonPassableRegions':_0x14c1ad['NonPassableRegions']['clone'](),'NonPassableTerrainTags':_0x14c1ad['NonPassableTerrainTags']['clone']()},_0x57c980=_0x14c1ad[_0x59242e(0x2cf)]||0x0,_0x527414=_0x14c1ad[_0x59242e(0x32d)]||{'enabled':![]},_0x1b787e={'name':_0x14c1ad['sfxName']||'','volume':_0x14c1ad[_0x59242e(0x2fb)]||0x0,'pitch':_0x14c1ad[_0x59242e(0x3b9)]||0x0,'pan':_0x14c1ad['sfxPan']||0x0};$gamePlayer[_0x59242e(0x343)](_0x24326f,_0x345619,_0x3ed800,_0x527414)&&(_0x1b787e['name']!==''&&AudioManager[_0x59242e(0x37d)](_0x1b787e),_0x57c980>0x0&&$gameTemp[_0x59242e(0x427)]([$gamePlayer],_0x57c980),_0x3cdc8b>0x0&&SceneManager[_0x59242e(0x352)][_0x59242e(0x2c9)](_0x3cdc8b));}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],'SmartRushDistance',_0x4030ef=>{const _0x563b5e=_0x344336;if(!SceneManager[_0x563b5e(0x202)]())return;VisuMZ[_0x563b5e(0x35a)](_0x4030ef,_0x4030ef);const _0x43868a=_0x4030ef['Distance']||0x1,_0x5c3afd=_0x4030ef[_0x563b5e(0x365)]||0x1,_0x318938=_0x4030ef['OnSuccessCommonEventID']||0x0,_0x221de3=_0x4030ef['Switches']||[],_0x457e49=_0x4030ef[_0x563b5e(0x40b)]||0x1,_0x286090=_0x4030ef[_0x563b5e(0x2cf)]||0x0,_0x210df3=_0x4030ef[_0x563b5e(0x32d)]||{'enabled':![]},_0x519fad={'name':_0x4030ef['sfxName']||'','volume':_0x4030ef['sfxVolume']||0x0,'pitch':_0x4030ef[_0x563b5e(0x3b9)]||0x0,'pan':_0x4030ef[_0x563b5e(0x36d)]||0x0};$gamePlayer[_0x563b5e(0x3ee)](_0x43868a,_0x5c3afd,_0x221de3,_0x457e49,_0x210df3)&&(_0x519fad[_0x563b5e(0x251)]!==''&&AudioManager[_0x563b5e(0x37d)](_0x519fad),_0x286090>0x0&&$gameTemp[_0x563b5e(0x427)]([$gamePlayer],_0x286090),_0x318938>0x0&&SceneManager['_scene'][_0x563b5e(0x2c9)](_0x318938));}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x374),_0x3a79e2=>{const _0x3c2da4=_0x344336;if(!SceneManager['isSceneMap']())return;const _0x449baa=$gameTemp['getLastPluginCommandInterpreter']();_0x449baa[_0x3c2da4(0x297)](_0x3c2da4(0x411));}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x324),_0x311356=>{const _0x5cb862=_0x344336;if(!SceneManager['isSceneMap']())return;const _0x2a3bd5=$gameTemp[_0x5cb862(0x225)]();_0x2a3bd5[_0x5cb862(0x297)](_0x5cb862(0x343));}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x29a),_0x413592=>{const _0xd9fec4=_0x344336;if(!SceneManager[_0xd9fec4(0x202)]())return;const _0x189c4e=$gameTemp[_0xd9fec4(0x225)]();_0x189c4e['setWaitMode'](_0xd9fec4(0x3ee));}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],_0x344336(0x2b5),_0x189c40=>{const _0x2ff506=_0x344336;VisuMZ['ConvertParams'](_0x189c40,_0x189c40);const _0x2490ea=_0x189c40[_0x2ff506(0x2e4)];$gameSystem['setSmoothCameraEnabled'](_0x2490ea);}),PluginManager[_0x344336(0x397)](pluginData[_0x344336(0x251)],'SmoothCameraSpeedChange',_0x529089=>{const _0x308535=_0x344336;VisuMZ[_0x308535(0x35a)](_0x529089,_0x529089),$gameSystem[_0x308535(0x3bb)](_0x529089['HorzWalk'],![],![]),$gameSystem[_0x308535(0x3bb)](_0x529089[_0x308535(0x27a)],!![],![]),$gameSystem[_0x308535(0x3bb)](_0x529089[_0x308535(0x2b8)],![],!![]),$gameSystem[_0x308535(0x3bb)](_0x529089[_0x308535(0x292)],!![],!![]);}),VisuMZ[_0x344336(0x39f)]['RegExp']={'CatchAll':/(?:SMOOTH|DASH|FOOT|REGION|TERRAIN|SMART|JUMP)>/i,'ForceSmooth':/<FORCE SMOOTH (?:CAMERA|SCROLL)>/i,'NoSmooth':/<NO SMOOTH (?:CAMERA|SCROLL)>/i,'ForceDustCloud':/<FORCE (?:DASH|DUST) (?:CLOUD|CLOUDS)>/i,'NoDustCloud':/<NO (?:DASH|DUST) (?:CLOUD|CLOUDS)>/i,'ForceFootsteps':/<FORCE (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'NoFootsteps':/<NO (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'RegionFootstepSfx':/<REGION (\d+) FOOTSTEP SOUND:[ ](.*)>/gi,'NoRegionFootstepSfx':/<NO REGION (\d+) FOOTSTEP SOUND>/gi,'FootprintRegions':/<FOOTPRINT (?:REGION|REGIONS):[ ](.*?)>/i,'NonFootprintRegions':/<NO FOOTPRINT (?:REGION|REGIONS):[ ](.*?)>/i,'RegionFootprintOpacity':/<REGION (\d+) FOOTPRINT OPACITY:[ ](\d+)>/gi,'RegionFootprintDuration':/<REGION (\d+) FOOTPRINT DURATION:[ ](\d+)>/gi,'NoSmartRush':/<NO SMART RUSH>/i,'SmartRushAntiCrashRegions':/<SMART RUSH NON-CRASH (?:REGION|REGIONS):[ ](.*?)>/i,'NoSmartBlink':/<NO SMART BLINK>/i,'SmartBlinkNonLandRegions':/<SMART BLINK NON-LAND (?:REGION|REGIONS):[ ](.*?)>/i,'SmartBlinkNonPassRegions':/<SMART BLINK NON-PASS (?:REGION|REGIONS):[ ](.*?)>/i,'NoSmartJump':/<NO SMART JUMP>/i,'SmartJumpNonLandRegions':/<SMART JUMP NON-LAND (?:REGION|REGIONS):[ ](.*?)>/i,'SmartJumpNonPassRegions':/<SMART JUMP NON-PASS (?:REGION|REGIONS):[ ](.*?)>/i,'SmartJumpHeightBasedRegions':/<SMART JUMP HEIGHT-BASED (?:REGION|REGIONS):[ ](.*?)>/i,'TerrainTagFootstepSfx':/<TERRAIN TAG (\d+) (?:FOOTSTEP SOUND|FOOTSTEPS):[ ](.*)>/gi,'NoTerrainTagFootstepSfx':/<NO TERRAIN TAG (\d+) (?:FOOTSTEP SOUND|FOOTSTEPS)>/gi,'FootprintTerrainTags':/<FOOTPRINT TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'NonFootprintTerrainTags':/<NO FOOTPRINT TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'TerrainTagFootprintOpacity':/<TERRAIN TAG (\d+) FOOTPRINT OPACITY:[ ](\d+)>/gi,'TerrainTagFootprintDuration':/<TERRAIN TAG (\d+) FOOTPRINT DURATION:[ ](\d+)>/gi,'SmartRushAntiCrashTerrainTags':/<SMART RUSH NON-CRASH TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartBlinkNonLandTerrainTags':/<SMART BLINK NON-LAND TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartBlinkNonPassTerrainTags':/<SMART BLINK NON-PASS TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartJumpNonLandTerrainTags':/<SMART JUMP NON-LAND TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartJumpNonPassTerrainTags':/<SMART JUMP NON-PASS TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'YesFootstepsEvent':/<(?:ALLOW|ENABLE) (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'NoFootstepsEvent':/<(?:NO|DISABLE) (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'FootstepsVolRate':/<(?:FOOTSTEPS|FOOTSTEP SOUNDS) VOLUME:[ ](\d+)([%％])>/i,'FootstepsPitchRate':/<(?:FOOTSTEPS|FOOTSTEP SOUNDS) PITCH:[ ](\d+)([%％])>/i,'FootstepsFrames':/<(?:FOOTSTEPS|FOOTSTEP SOUNDS) (?:FRAME|FRAMES):[ ](.*?)>/i,'YesFootprintsEvent':/<(?:ALLOW|ENABLE) FOOTPRINTS>/i,'NoFootprintsEvent':/<(?:NO|DISABLE) FOOTPRINTS>/i,'FootprintsFilename':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) FILENAME:[ ](.*?)>/gi,'FootprintsWidth':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) WIDTH:[ ](\d+)>/gi,'FootprintsHeight':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) HEIGHT:[ ](\d+)>/gi,'FootprintsOffset':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) OFFSET:[ ](.*?)>/gi,'SmartJumpNonLandEvent':/<(?:SMART JUMP NON-LAND|ILLEGAL JUMP)>/i,'SmartJumpNonPassEvent':/<(?:SMART JUMP NON-PASS|ILLEGAL JUMP)>/i},VisuMZ[_0x344336(0x39f)][_0x344336(0x1e0)]=[_0x344336(0x387),_0x344336(0x246),'footsteps',_0x344336(0x2e9)],((()=>{for(const _0x5772fa of VisuMZ['MovementEffects']['ConfigKeys']){ConfigManager[_0x5772fa]=!![];}})()),VisuMZ[_0x344336(0x39f)][_0x344336(0x211)]=ConfigManager[_0x344336(0x3e7)],ConfigManager['makeData']=function(){const _0x2800a1=_0x344336,_0x71137f=VisuMZ['MovementEffects']['ConfigManager_makeData']['call'](this);for(const _0x1057d2 of VisuMZ['MovementEffects'][_0x2800a1(0x1e0)]){_0x71137f[_0x1057d2]=this[_0x1057d2];}return _0x71137f;},VisuMZ[_0x344336(0x39f)][_0x344336(0x2df)]=ConfigManager['applyData'],ConfigManager[_0x344336(0x3d5)]=function(_0x2d9d5c){const _0x25bc49=_0x344336;VisuMZ[_0x25bc49(0x39f)][_0x25bc49(0x2df)][_0x25bc49(0x2bb)](this,_0x2d9d5c);for(const _0x592c3e of VisuMZ[_0x25bc49(0x39f)][_0x25bc49(0x1e0)]){this[_0x25bc49(0x350)](_0x2d9d5c,_0x592c3e,!![]);}},TextManager['MovementEffectsOptions']={'DustCloud':VisuMZ[_0x344336(0x39f)]['Settings'][_0x344336(0x38c)][_0x344336(0x3c8)],'Footprints':VisuMZ['MovementEffects']['Settings']['Options'][_0x344336(0x1e1)],'Footsteps':VisuMZ[_0x344336(0x39f)][_0x344336(0x2a0)][_0x344336(0x38c)]['FootstepsName'],'SmoothCamera':VisuMZ['MovementEffects'][_0x344336(0x2a0)][_0x344336(0x38c)][_0x344336(0x23e)]},VisuMZ[_0x344336(0x39f)][_0x344336(0x3bc)]=Scene_Options[_0x344336(0x2c5)][_0x344336(0x2d7)],Scene_Options[_0x344336(0x2c5)][_0x344336(0x2d7)]=function(){const _0x4a0e15=_0x344336;let _0x5a8740=VisuMZ['MovementEffects'][_0x4a0e15(0x3bc)][_0x4a0e15(0x2bb)](this);const _0x32a15f=VisuMZ['MovementEffects']['Settings'][_0x4a0e15(0x38c)];if(_0x32a15f[_0x4a0e15(0x40f)]&&_0x32a15f[_0x4a0e15(0x41c)])_0x5a8740++;if(_0x32a15f[_0x4a0e15(0x40f)]&&_0x32a15f[_0x4a0e15(0x26b)])_0x5a8740++;if(_0x32a15f[_0x4a0e15(0x40f)]&&_0x32a15f['AddFootsteps'])_0x5a8740++;if(_0x32a15f[_0x4a0e15(0x40f)]&&_0x32a15f[_0x4a0e15(0x3d8)])_0x5a8740++;return _0x5a8740;},VisuMZ[_0x344336(0x39f)][_0x344336(0x2d5)]=Window_Options['prototype']['addGeneralOptions'],Window_Options[_0x344336(0x2c5)][_0x344336(0x238)]=function(){const _0x3b6eca=_0x344336;VisuMZ['MovementEffects']['Window_Options_addGeneralOptions'][_0x3b6eca(0x2bb)](this),this['addMovementEffectsOptionCommands']();},Window_Options[_0x344336(0x2c5)][_0x344336(0x32c)]=function(){const _0x213100=_0x344336;VisuMZ[_0x213100(0x39f)][_0x213100(0x2a0)]['Options'][_0x213100(0x41c)]&&this[_0x213100(0x28f)](),VisuMZ[_0x213100(0x39f)][_0x213100(0x2a0)][_0x213100(0x38c)][_0x213100(0x26b)]&&this[_0x213100(0x22d)](),VisuMZ[_0x213100(0x39f)]['Settings'][_0x213100(0x38c)][_0x213100(0x2bc)]&&this[_0x213100(0x228)](),VisuMZ[_0x213100(0x39f)][_0x213100(0x2a0)][_0x213100(0x38c)][_0x213100(0x3d8)]&&this[_0x213100(0x382)]();},Window_Options['prototype'][_0x344336(0x28f)]=function(){const _0x5f3f34=_0x344336,_0x46e943=TextManager[_0x5f3f34(0x1f3)][_0x5f3f34(0x2d2)],_0x52817c='dustCloud';this['addCommand'](_0x46e943,_0x52817c);},Window_Options['prototype'][_0x344336(0x22d)]=function(){const _0x5c8e0e=_0x344336,_0x83dd47=TextManager[_0x5c8e0e(0x1f3)][_0x5c8e0e(0x3b2)],_0x52a7bb=_0x5c8e0e(0x246);this[_0x5c8e0e(0x38d)](_0x83dd47,_0x52a7bb);},Window_Options[_0x344336(0x2c5)][_0x344336(0x228)]=function(){const _0x20b7d3=_0x344336,_0x10bf12=TextManager[_0x20b7d3(0x1f3)]['Footsteps'],_0x2d50bb=_0x20b7d3(0x272);this[_0x20b7d3(0x38d)](_0x10bf12,_0x2d50bb);},Window_Options[_0x344336(0x2c5)][_0x344336(0x382)]=function(){const _0x3a577b=_0x344336,_0x558550=TextManager[_0x3a577b(0x1f3)][_0x3a577b(0x3f9)],_0x20e8e4='smoothCamera';this[_0x3a577b(0x38d)](_0x558550,_0x20e8e4);},ImageManager['generatedFootprintBitmap']=function(){const _0x4cf2a1=_0x344336;if(this[_0x4cf2a1(0x431)])return this[_0x4cf2a1(0x431)];const _0x55a187=0x64,_0xf608b9=0x64,_0x40dbff=new Bitmap(_0x55a187,_0xf608b9);return _0x40dbff[_0x4cf2a1(0x428)]=0xff,_0x40dbff[_0x4cf2a1(0x304)](0x32,0x32,0x32,_0x4cf2a1(0x347)),_0x40dbff['_customModified']=![],this[_0x4cf2a1(0x431)]=_0x40dbff,this[_0x4cf2a1(0x431)];},SoundManager[_0x344336(0x226)]=function(_0x2472a1){const _0x537241=_0x344336,_0x31d4a6=VisuMZ[_0x537241(0x39f)]['Settings'][_0x537241(0x26d)],_0x2c9bb7={'name':_0x31d4a6[_0x537241(0x251)]??_0x537241(0x35b),'volume':_0x31d4a6[_0x537241(0x242)]??0xa,'pitch':_0x31d4a6['pitch']??0x78,'pan':_0x31d4a6['pan']??0x0};$gameMap[_0x537241(0x2ce)](_0x2c9bb7,_0x2472a1);if(_0x2c9bb7==='')return;VisuMZ[_0x537241(0x39f)][_0x537241(0x3af)](_0x2c9bb7,_0x2472a1),AudioManager[_0x537241(0x37d)](_0x2c9bb7);},VisuMZ[_0x344336(0x39f)][_0x344336(0x3af)]=function(_0x3818fa,_0x5720dd){const _0xbc57dc=_0x344336;if(!_0x3818fa)return;if(!_0x5720dd)return;if(_0x5720dd['constructor']===Game_Event){const _0x196f82=VisuMZ['MovementEffects'][_0xbc57dc(0x2a0)][_0xbc57dc(0x26d)],_0x2fa816=$gamePlayer[_0xbc57dc(0x260)](_0x5720dd['x']),_0xac18eb=$gamePlayer[_0xbc57dc(0x363)](_0x5720dd['y']),_0x2782e2=Math[_0xbc57dc(0x1f4)](_0x2fa816)+Math[_0xbc57dc(0x1f4)](_0xac18eb);_0x2782e2>0x0&&(_0x3818fa[_0xbc57dc(0x242)]+=_0x2782e2*_0x196f82[_0xbc57dc(0x281)],_0x3818fa['pitch']+=_0x2782e2*_0x196f82[_0xbc57dc(0x338)]),_0x2fa816!==0x0&&(_0x3818fa[_0xbc57dc(0x39a)]-=_0x2fa816*_0x196f82['distancePanModifier']);}const _0x1dec42=_0x5720dd['footstepsData']();_0x1dec42&&(_0x3818fa['volume']*=_0x1dec42[_0xbc57dc(0x2a9)]??0x1,_0x3818fa[_0xbc57dc(0x204)]*=_0x1dec42[_0xbc57dc(0x214)]??0x1),_0x3818fa['volume']=Math[_0xbc57dc(0x3ab)](0x0,_0x3818fa[_0xbc57dc(0x242)]),_0x3818fa[_0xbc57dc(0x204)]=Math[_0xbc57dc(0x3ab)](0x0,_0x3818fa['pitch']),_0x3818fa[_0xbc57dc(0x39a)]=_0x3818fa[_0xbc57dc(0x39a)][_0xbc57dc(0x29e)](-0x64,0x64);},TextManager[_0x344336(0x2b7)]=function(_0x221ad3){const _0xe2dcc7=_0x344336;_0x221ad3=_0x221ad3[_0xe2dcc7(0x293)]()[_0xe2dcc7(0x3bf)]();switch(_0x221ad3){case _0xe2dcc7(0x2a1):return 0x2;case _0xe2dcc7(0x332):return 0x4;case _0xe2dcc7(0x2e1):return 0x6;case'up':return 0x8;case _0xe2dcc7(0x3a1):return 0x1;case'lower\x20right':return 0x3;case _0xe2dcc7(0x342):return 0x7;case _0xe2dcc7(0x349):return 0x9;}return Number(_0x221ad3)||0x0;},VisuMZ[_0x344336(0x39f)][_0x344336(0x430)]=BattleManager['startBattle'],BattleManager[_0x344336(0x2e0)]=function(){const _0x5396dc=_0x344336;VisuMZ[_0x5396dc(0x39f)][_0x5396dc(0x430)][_0x5396dc(0x2bb)](this),$gamePlayer&&$gamePlayer[_0x5396dc(0x416)]();},VisuMZ[_0x344336(0x39f)][_0x344336(0x353)]=Game_System[_0x344336(0x2c5)]['initialize'],Game_System[_0x344336(0x2c5)][_0x344336(0x253)]=function(){const _0x69e37a=_0x344336;VisuMZ[_0x69e37a(0x39f)]['Game_System_initialize'][_0x69e37a(0x2bb)](this),this[_0x69e37a(0x1e4)](),this[_0x69e37a(0x2c4)](),this[_0x69e37a(0x2ac)](),this[_0x69e37a(0x1d3)](),this['initMovementEffectsDirMoveSpeedMod']();},Game_System[_0x344336(0x2c5)][_0x344336(0x1e4)]=function(){const _0x3750f0=_0x344336,_0x192b19=VisuMZ['MovementEffects']['Settings'][_0x3750f0(0x3f9)];this[_0x3750f0(0x36c)]={'enabled':_0x192b19[_0x3750f0(0x395)],'horzWalk':_0x192b19['HorzWalk'][_0x3750f0(0x29e)](0x1,0x30),'vertWalk':_0x192b19[_0x3750f0(0x27a)][_0x3750f0(0x29e)](0x1,0x30),'horzDash':_0x192b19[_0x3750f0(0x2b8)][_0x3750f0(0x29e)](0x1,0x30),'vertDash':_0x192b19[_0x3750f0(0x292)][_0x3750f0(0x29e)](0x1,0x30)};},Game_System[_0x344336(0x2c5)][_0x344336(0x312)]=function(){const _0x50b0bd=_0x344336;if(this['_smoothCamera']===undefined)this[_0x50b0bd(0x1e4)]();return this['_smoothCamera'][_0x50b0bd(0x2da)];},Game_System[_0x344336(0x2c5)][_0x344336(0x213)]=function(_0x2ef243){const _0x53fcac=_0x344336;if(this[_0x53fcac(0x36c)]===undefined)this[_0x53fcac(0x1e4)]();this[_0x53fcac(0x36c)][_0x53fcac(0x2da)]=_0x2ef243;},Game_System[_0x344336(0x2c5)][_0x344336(0x24c)]=function(_0x20e3d8,_0x5c74cb){const _0x5289e1=_0x344336;if(this[_0x5289e1(0x36c)]===undefined)this[_0x5289e1(0x1e4)]();const _0x5896e7=(_0x20e3d8?_0x5289e1(0x327):_0x5289e1(0x266))+(_0x5c74cb?'Dash':_0x5289e1(0x2f9));return this[_0x5289e1(0x36c)][_0x5896e7][_0x5289e1(0x29e)](0x1,0x30);},Game_System['prototype'][_0x344336(0x3bb)]=function(_0x3c181e,_0x25e0ce,_0x24428f){const _0x363740=_0x344336;if(this[_0x363740(0x36c)]===undefined)this['initMovementEffectsSmoothCamera']();const _0x5d2148=(_0x25e0ce?_0x363740(0x327):_0x363740(0x266))+(_0x24428f?_0x363740(0x299):_0x363740(0x2f9));this[_0x363740(0x36c)][_0x5d2148]=_0x3c181e[_0x363740(0x29e)](0x1,0x30);},Game_System[_0x344336(0x2c5)]['initMovementEffectsDustCloud']=function(){const _0x51ae9a=_0x344336,_0x34181d=VisuMZ[_0x51ae9a(0x39f)][_0x51ae9a(0x2a0)][_0x51ae9a(0x2d2)];this[_0x51ae9a(0x3ed)]={'enabled':_0x34181d[_0x51ae9a(0x395)],'filename':_0x34181d['filename']||'','color':_0x34181d[_0x51ae9a(0x1ff)]||_0x51ae9a(0x345),'radius':_0x34181d[_0x51ae9a(0x303)]||0x18,'fullness':_0x34181d[_0x51ae9a(0x287)]||0x0,'wholeDuration':_0x34181d[_0x51ae9a(0x2d9)]||0x14,'startOpacity':_0x34181d[_0x51ae9a(0x366)]||0xc0,'startScale':_0x34181d[_0x51ae9a(0x360)]||0.2};},Game_System['prototype'][_0x344336(0x2ca)]=function(){const _0x23193b=_0x344336;if(this['_dustCloud']===undefined)this['initMovementEffectsDustCloud']();return this[_0x23193b(0x3ed)];},Game_System[_0x344336(0x2c5)][_0x344336(0x25f)]=function(_0x1f7c93){const _0x206e48=_0x344336;if(this['_dustCloud']===undefined)this[_0x206e48(0x2c4)]();this['_dustCloud']=JsonEx[_0x206e48(0x388)](_0x1f7c93);},Game_System[_0x344336(0x2c5)][_0x344336(0x22e)]=function(){const _0x2e727d=_0x344336;return this[_0x2e727d(0x2ca)]()['enabled'];},Game_System[_0x344336(0x2c5)][_0x344336(0x2ac)]=function(){const _0x3df70b=_0x344336;this['_footstepSoundsEnabled']=VisuMZ[_0x3df70b(0x39f)][_0x3df70b(0x2a0)][_0x3df70b(0x26d)]['Enabled'];},Game_System[_0x344336(0x2c5)][_0x344336(0x1cc)]=function(){const _0xea6226=_0x344336;if(this[_0xea6226(0x381)]===undefined)this[_0xea6226(0x2ac)]();return this[_0xea6226(0x381)];},Game_System['prototype']['setFootstepSoundsEnabled']=function(_0xad2b37){const _0x1854dd=_0x344336;if(this[_0x1854dd(0x381)]===undefined)this['initMovementEffectsFootstepSounds']();this[_0x1854dd(0x381)]=_0xad2b37;},Game_System[_0x344336(0x2c5)][_0x344336(0x1d3)]=function(){const _0x1540da=_0x344336;this[_0x1540da(0x359)]=VisuMZ[_0x1540da(0x39f)][_0x1540da(0x2a0)][_0x1540da(0x3b2)]['Enabled'];},Game_System[_0x344336(0x2c5)]['canMakeFootprints']=function(){const _0x489ba1=_0x344336;if(this[_0x489ba1(0x359)]===undefined)this[_0x489ba1(0x1d3)]();return this['_footprintMarksEnabled'];},Game_System['prototype'][_0x344336(0x33b)]=function(_0xec44ee){const _0x46b46c=_0x344336;if(this['_footprintMarksEnabled']===undefined)this[_0x46b46c(0x1d3)]();this['_footprintMarksEnabled']=_0xec44ee;},Game_System[_0x344336(0x2c5)][_0x344336(0x30b)]=function(){const _0xc9c7ae=_0x344336;this[_0xc9c7ae(0x2c0)]={'dir1':0x0,'dir2':0x0,'dir3':0x0,'dir4':0x0,'dir6':0x0,'dir7':0x0,'dir8':0x0,'dir9':0x0};},Game_System['prototype'][_0x344336(0x426)]=function(_0x418699){const _0x53b394=_0x344336;if(this[_0x53b394(0x2c0)]===undefined)this[_0x53b394(0x30b)]();const _0x323215='dir%1'[_0x53b394(0x2bd)](_0x418699);return this[_0x53b394(0x2c0)][_0x323215]||0x0;},Game_System[_0x344336(0x2c5)][_0x344336(0x24e)]=function(_0x1a9a68,_0x339e23){const _0x5640e1=_0x344336;if(this[_0x5640e1(0x2c0)]===undefined)this[_0x5640e1(0x30b)]();const _0x5c8584=_0x5640e1(0x219)[_0x5640e1(0x2bd)](_0x1a9a68);this[_0x5640e1(0x2c0)][_0x5c8584]=_0x339e23||0x0;},VisuMZ[_0x344336(0x39f)]['Game_Picture_isMapScrollLinked']=Game_Picture[_0x344336(0x2c5)]['isMapScrollLinked'],Game_Picture[_0x344336(0x2c5)]['isMapScrollLinked']=function(){return![];},Game_Picture[_0x344336(0x2c5)][_0x344336(0x3ff)]=function(){const _0x3c9769=_0x344336;return VisuMZ[_0x3c9769(0x39f)]['Game_Picture_isMapScrollLinked'][_0x3c9769(0x2bb)](this);},Game_Actor['prototype'][_0x344336(0x1e7)]=function(){const _0x419a7d=_0x344336;if(this['_footsteps']===undefined)this[_0x419a7d(0x209)]();return this[_0x419a7d(0x301)];},Game_Actor['prototype'][_0x344336(0x209)]=function(){const _0x466736=_0x344336;this[_0x466736(0x419)]();const _0x42ed68=this[_0x466736(0x3e5)]()[_0x466736(0x414)]||'';Game_Event[_0x466736(0x2c5)][_0x466736(0x2ed)][_0x466736(0x2bb)](this,_0x42ed68);},Game_Actor[_0x344336(0x2c5)][_0x344336(0x419)]=function(){const _0xdbcc84=_0x344336;{const _0x16324a=VisuMZ[_0xdbcc84(0x39f)][_0xdbcc84(0x2a0)][_0xdbcc84(0x26d)];this[_0xdbcc84(0x301)]={'enabled':_0x16324a[_0xdbcc84(0x31c)],'volumeRate':_0x16324a['actorVolumeModifier'],'pitchRate':_0x16324a[_0xdbcc84(0x321)],'soundFrames':_0x16324a[_0xdbcc84(0x402)][_0xdbcc84(0x23d)]()};}{const _0x5017bd=VisuMZ[_0xdbcc84(0x39f)][_0xdbcc84(0x2a0)][_0xdbcc84(0x3b2)];this[_0xdbcc84(0x271)]={'enabled':!![],'dir1':JSON[_0xdbcc84(0x378)](JSON[_0xdbcc84(0x35f)](_0x5017bd[_0xdbcc84(0x38e)])),'dir2':JSON[_0xdbcc84(0x378)](JSON[_0xdbcc84(0x35f)](_0x5017bd[_0xdbcc84(0x3ac)])),'dir3':JSON[_0xdbcc84(0x378)](JSON[_0xdbcc84(0x35f)](_0x5017bd[_0xdbcc84(0x322)])),'dir4':JSON[_0xdbcc84(0x378)](JSON[_0xdbcc84(0x35f)](_0x5017bd[_0xdbcc84(0x237)])),'dir6':JSON[_0xdbcc84(0x378)](JSON[_0xdbcc84(0x35f)](_0x5017bd[_0xdbcc84(0x230)])),'dir7':JSON[_0xdbcc84(0x378)](JSON[_0xdbcc84(0x35f)](_0x5017bd[_0xdbcc84(0x39c)])),'dir8':JSON['parse'](JSON['stringify'](_0x5017bd[_0xdbcc84(0x240)])),'dir9':JSON[_0xdbcc84(0x378)](JSON[_0xdbcc84(0x35f)](_0x5017bd[_0xdbcc84(0x25e)]))};}},Game_Actor[_0x344336(0x2c5)][_0x344336(0x3d7)]=function(){const _0x1dfa03=_0x344336;if(this['_footprintsData']===undefined)this[_0x1dfa03(0x209)]();return this[_0x1dfa03(0x271)];},VisuMZ[_0x344336(0x39f)][_0x344336(0x385)]=Game_Map[_0x344336(0x2c5)][_0x344336(0x1ea)],Game_Map[_0x344336(0x2c5)][_0x344336(0x1ea)]=function(_0x50512e){const _0x11b0e3=_0x344336;VisuMZ['MovementEffects'][_0x11b0e3(0x385)]['call'](this,_0x50512e),this[_0x11b0e3(0x326)](),this[_0x11b0e3(0x398)](),this[_0x11b0e3(0x3f5)](),this[_0x11b0e3(0x236)]();},VisuMZ['MovementEffects'][_0x344336(0x3da)]=Game_Map['prototype'][_0x344336(0x3ba)],Game_Map['prototype'][_0x344336(0x3ba)]=function(_0x2bfe09){const _0x524a3d=_0x344336;VisuMZ[_0x524a3d(0x39f)]['Game_Map_changeTileset'][_0x524a3d(0x2bb)](this,_0x2bfe09),this[_0x524a3d(0x326)](),this[_0x524a3d(0x398)](),this['setupRegionTerrainTagSmartRush'](),this[_0x524a3d(0x236)]();},Game_Map['prototype']['isUsingSmoothCamera']=function(){const _0x389a80=_0x344336;if(!ConfigManager[_0x389a80(0x2e9)])return![];if($dataMap){const _0x403c13=VisuMZ[_0x389a80(0x39f)][_0x389a80(0x307)],_0x17532c=$dataMap[_0x389a80(0x414)]||'';if(_0x17532c[_0x389a80(0x42b)](_0x403c13[_0x389a80(0x258)]))return!![];else{if(_0x17532c[_0x389a80(0x42b)](_0x403c13[_0x389a80(0x2e5)]))return![];}}return $gameSystem[_0x389a80(0x312)]();},Game_Map['prototype'][_0x344336(0x22e)]=function(){const _0x54bd1f=_0x344336;if(!ConfigManager[_0x54bd1f(0x387)])return![];if($dataMap){const _0x5d3c68=VisuMZ[_0x54bd1f(0x39f)][_0x54bd1f(0x307)],_0xfda03d=$dataMap[_0x54bd1f(0x414)]||'';if(_0xfda03d['match'](_0x5d3c68['ForceDustCloud']))return!![];else{if(_0xfda03d[_0x54bd1f(0x42b)](_0x5d3c68['NoDustCloud']))return![];}}return $gameSystem[_0x54bd1f(0x22e)]();},Game_Map[_0x344336(0x2c5)][_0x344336(0x1cc)]=function(){const _0x114f7c=_0x344336;if(!ConfigManager[_0x114f7c(0x272)])return![];if($dataMap){const _0x5f5710=VisuMZ[_0x114f7c(0x39f)][_0x114f7c(0x307)],_0x34e10d=$dataMap[_0x114f7c(0x414)]||'';if(_0x34e10d[_0x114f7c(0x42b)](_0x5f5710[_0x114f7c(0x2e6)]))return!![];else{if(_0x34e10d[_0x114f7c(0x42b)](_0x5f5710[_0x114f7c(0x2d8)]))return![];}}return $gameSystem[_0x114f7c(0x1cc)]();},Game_Map[_0x344336(0x2c5)][_0x344336(0x326)]=function(){const _0x250df5=_0x344336;this[_0x250df5(0x358)](),this[_0x250df5(0x3cd)](),this[_0x250df5(0x3b1)]();},Game_Map[_0x344336(0x2c5)][_0x344336(0x358)]=function(){const _0x4f0771=_0x344336;this[_0x4f0771(0x249)]={},this[_0x4f0771(0x412)]={};},Game_Map[_0x344336(0x2c5)][_0x344336(0x3cd)]=function(){const _0x3df524=_0x344336;if(!$dataMap)return;const _0x5dd415=VisuMZ['MovementEffects'][_0x3df524(0x2a0)]['Footsteps'],_0x3e6030=VisuMZ[_0x3df524(0x39f)][_0x3df524(0x307)],_0x9ad959=$dataMap['note']||'',_0x39c639=_0x9ad959[_0x3df524(0x42b)](_0x3e6030[_0x3df524(0x227)]);if(_0x39c639)for(const _0xb98757 of _0x39c639){_0xb98757[_0x3df524(0x42b)](_0x3e6030[_0x3df524(0x227)]);const _0x34a9ff=Number(RegExp['$1'])[_0x3df524(0x29e)](0x0,0xff),_0x128671=String(RegExp['$2'])[_0x3df524(0x2a2)](',')[_0x3df524(0x269)](_0x39a17f=>_0x39a17f[_0x3df524(0x3bf)]());this[_0x3df524(0x249)][_0x34a9ff]={'name':_0x128671[0x0]||'','volume':Number(_0x128671[0x1]??_0x5dd415['volume']),'pitch':Number(_0x128671[0x2]??_0x5dd415['pitch']),'pan':Number(_0x128671[0x3]??_0x5dd415['pan'])};}const _0x2bf7d2=_0x9ad959[_0x3df524(0x42b)](_0x3e6030['NoRegionFootstepSfx']);if(_0x2bf7d2)for(const _0x4cb66a of _0x2bf7d2){_0x4cb66a[_0x3df524(0x42b)](_0x3e6030[_0x3df524(0x207)]);const _0x22cd63=Number(RegExp['$1'])[_0x3df524(0x29e)](0x0,0xff);this[_0x3df524(0x249)][_0x22cd63]={'name':'','volume':0x0,'pitch':0x0,'pan':0x0};}},Game_Map[_0x344336(0x2c5)]['parseTerrainTagBasedFootstepSounds']=function(){const _0x3a5e59=_0x344336;if(!this[_0x3a5e59(0x3f3)]())return;const _0x3cf636=VisuMZ[_0x3a5e59(0x39f)]['Settings']['Footsteps'],_0x4eb84f=VisuMZ['MovementEffects'][_0x3a5e59(0x307)],_0x5aa30e=this[_0x3a5e59(0x3f3)]()[_0x3a5e59(0x414)]||'',_0x25f29b=_0x5aa30e[_0x3a5e59(0x42b)](_0x4eb84f['TerrainTagFootstepSfx']);if(_0x25f29b)for(const _0x2584de of _0x25f29b){_0x2584de[_0x3a5e59(0x42b)](_0x4eb84f['TerrainTagFootstepSfx']);const _0x48ff4b=Number(RegExp['$1'])['clamp'](0x0,0xff),_0x4d3fd0=String(RegExp['$2'])[_0x3a5e59(0x2a2)](',')[_0x3a5e59(0x269)](_0x35d5f0=>_0x35d5f0[_0x3a5e59(0x3bf)]());this[_0x3a5e59(0x412)][_0x48ff4b]={'name':_0x4d3fd0[0x0]||'','volume':Number(_0x4d3fd0[0x1]??_0x3cf636[_0x3a5e59(0x242)]),'pitch':Number(_0x4d3fd0[0x2]??_0x3cf636[_0x3a5e59(0x204)]),'pan':Number(_0x4d3fd0[0x3]??_0x3cf636[_0x3a5e59(0x39a)])};}const _0x592a0d=_0x5aa30e[_0x3a5e59(0x42b)](_0x4eb84f['NoTerrainTagFootstepSfx']);if(_0x592a0d)for(const _0x14e0f8 of _0x592a0d){_0x14e0f8[_0x3a5e59(0x42b)](_0x4eb84f['NoTerrainTagFootstepSfx']);const _0x1b1c97=Number(RegExp['$1'])[_0x3a5e59(0x29e)](0x0,0x7);this['_terrainTagFootstepSounds'][_0x1b1c97]={'name':'','volume':0x0,'pitch':0x0,'pan':0x0};}},Game_Map['prototype'][_0x344336(0x2ce)]=function(_0x5318f2,_0x4891c2){const _0xf6d5ed=_0x344336;if(!_0x5318f2)return;if(!_0x4891c2)return;(this[_0xf6d5ed(0x249)]===undefined||this['_terrainTagFootstepSounds']===undefined)&&this['setupRegionTerrainTagFootstepSounds']();const _0x19a13a=_0x4891c2['x'],_0x40e875=_0x4891c2['y'],_0x2f0ae7=this[_0xf6d5ed(0x1d9)](_0x19a13a,_0x40e875),_0x2c8ab0=this[_0xf6d5ed(0x21d)](_0x19a13a,_0x40e875),_0x5536b2=[_0xf6d5ed(0x251),'volume',_0xf6d5ed(0x204),_0xf6d5ed(0x39a)];if(this[_0xf6d5ed(0x412)][_0x2c8ab0]){const _0x300db0=this[_0xf6d5ed(0x412)][_0x2c8ab0];for(const _0x803b88 of _0x5536b2){_0x5318f2[_0x803b88]=_0x300db0[_0x803b88];}}if(this[_0xf6d5ed(0x249)][_0x2f0ae7]){const _0xf85e89=this[_0xf6d5ed(0x249)][_0x2f0ae7];for(const _0x31faa2 of _0x5536b2){_0x5318f2[_0x31faa2]=_0xf85e89[_0x31faa2];}}},Game_Map[_0x344336(0x2c5)][_0x344336(0x423)]=function(_0xeb18e0,_0x52fd63){const _0x8b06dd=_0x344336;if(!ConfigManager['footprints'])return![];if(!$gameSystem['canMakeFootprints']())return![];if(this['_footprints']===undefined)this[_0x8b06dd(0x398)]();const _0xcb40ce=this[_0x8b06dd(0x1d9)](_0xeb18e0,_0x52fd63),_0x231464=this[_0x8b06dd(0x21d)](_0xeb18e0,_0x52fd63);if(this['_footprints'][_0x8b06dd(0x248)][_0x8b06dd(0x2db)]['includes'](_0xcb40ce))return![];if(this[_0x8b06dd(0x2ec)]['forbidden'][_0x8b06dd(0x37c)][_0x8b06dd(0x318)](_0x231464))return![];if(this[_0x8b06dd(0x2ec)]['allowed'][_0x8b06dd(0x2db)][_0x8b06dd(0x318)](_0xcb40ce))return!![];if(this[_0x8b06dd(0x2ec)][_0x8b06dd(0x302)][_0x8b06dd(0x37c)][_0x8b06dd(0x318)](_0x231464))return!![];return![];},Game_Map[_0x344336(0x2c5)]['setupRegionTerrainTagFootprints']=function(){const _0x4ef45f=_0x344336;this['initRegionTerrainTagFootprints'](),this[_0x4ef45f(0x37e)](),this[_0x4ef45f(0x3cb)]();},Game_Map[_0x344336(0x2c5)][_0x344336(0x401)]=function(){const _0x56a343=_0x344336,_0x3acdbd=VisuMZ[_0x56a343(0x39f)][_0x56a343(0x2a0)][_0x56a343(0x3b2)];this[_0x56a343(0x2ec)]={'allowed':{'regions':_0x3acdbd[_0x56a343(0x3f7)][_0x56a343(0x23d)](),'terrainTags':_0x3acdbd[_0x56a343(0x393)][_0x56a343(0x23d)]()},'forbidden':{'regions':[],'terrainTags':[]},'opacity':{'regions':{},'terrainTags':{}},'duration':{'regions':{},'terrainTags':{}}};},Game_Map['prototype'][_0x344336(0x37e)]=function(){const _0x238c6b=_0x344336;if(!$dataMap)return;if(this[_0x238c6b(0x2ec)]===undefined)this[_0x238c6b(0x398)]();const _0x426474=VisuMZ[_0x238c6b(0x39f)][_0x238c6b(0x307)],_0x3e5084=$dataMap[_0x238c6b(0x414)]||'';_0x3e5084['match'](_0x426474[_0x238c6b(0x410)])&&(this[_0x238c6b(0x2ec)]['allowed'][_0x238c6b(0x2db)]=RegExp['$1']['split'](',')[_0x238c6b(0x269)](_0x98622b=>(Number(_0x98622b)||0x0)['clamp'](0x0,0xff)));_0x3e5084[_0x238c6b(0x42b)](_0x426474[_0x238c6b(0x268)])&&(this['_footprints']['forbidden'][_0x238c6b(0x2db)]=RegExp['$1'][_0x238c6b(0x2a2)](',')[_0x238c6b(0x269)](_0x4d5d3a=>(Number(_0x4d5d3a)||0x0)[_0x238c6b(0x29e)](0x0,0xff)));const _0x2990c8=_0x3e5084['match'](_0x426474[_0x238c6b(0x290)]);if(_0x2990c8)for(const _0x3e10d7 of _0x2990c8){_0x3e10d7[_0x238c6b(0x42b)](_0x426474['RegionFootprintOpacity']);const _0xd3b282=Number(RegExp['$1'])[_0x238c6b(0x29e)](0x0,0xff),_0x2e0aae=Number(RegExp['$2'])[_0x238c6b(0x29e)](0x0,0xff);this[_0x238c6b(0x2ec)][_0x238c6b(0x36b)][_0x238c6b(0x2db)][_0xd3b282]=_0x2e0aae;}const _0x2075e4=_0x3e5084[_0x238c6b(0x42b)](_0x426474[_0x238c6b(0x3cf)]);if(_0x2075e4)for(const _0x2cb6cd of _0x2075e4){_0x2cb6cd[_0x238c6b(0x42b)](_0x426474[_0x238c6b(0x3cf)]);const _0x27efe4=Number(RegExp['$1'])[_0x238c6b(0x29e)](0x0,0xff),_0x19b4c2=Math[_0x238c6b(0x3ab)](0x1,Number(RegExp['$2']));this[_0x238c6b(0x2ec)]['duration'][_0x238c6b(0x2db)][_0x27efe4]=_0x19b4c2;}},Game_Map['prototype']['parseTerrainTagBasedFootprints']=function(){const _0x3f364d=_0x344336;if(!this['tileset']())return;if(this['_footprints']===undefined)this[_0x3f364d(0x398)]();const _0x20d928=VisuMZ['MovementEffects']['RegExp'],_0x42e55a=this[_0x3f364d(0x3f3)]()[_0x3f364d(0x414)]||'';_0x42e55a[_0x3f364d(0x42b)](_0x20d928[_0x3f364d(0x23b)])&&(this[_0x3f364d(0x2ec)][_0x3f364d(0x302)]['terrainTags']=RegExp['$1'][_0x3f364d(0x2a2)](',')[_0x3f364d(0x269)](_0x4654b0=>(Number(_0x4654b0)||0x0)[_0x3f364d(0x29e)](0x0,0x7)));_0x42e55a['match'](_0x20d928[_0x3f364d(0x1e9)])&&(this[_0x3f364d(0x2ec)][_0x3f364d(0x248)][_0x3f364d(0x37c)]=RegExp['$1'][_0x3f364d(0x2a2)](',')['map'](_0x37b6f2=>(Number(_0x37b6f2)||0x0)[_0x3f364d(0x29e)](0x0,0x7)));const _0x31f4ac=_0x42e55a['match'](_0x20d928[_0x3f364d(0x3d6)]);if(_0x31f4ac)for(const _0x3492d9 of _0x31f4ac){_0x3492d9[_0x3f364d(0x42b)](_0x20d928['TerrainTagFootprintOpacity']);const _0x19cb1a=Number(RegExp['$1'])[_0x3f364d(0x29e)](0x0,0xff),_0x131042=Number(RegExp['$2'])['clamp'](0x0,0xff);this['_footprints']['opacity'][_0x3f364d(0x37c)][_0x19cb1a]=_0x131042;}const _0x2e56d9=_0x42e55a[_0x3f364d(0x42b)](_0x20d928['TerrainTagFootprintDuration']);if(_0x2e56d9)for(const _0x14b65d of _0x2e56d9){_0x14b65d[_0x3f364d(0x42b)](_0x20d928[_0x3f364d(0x3d4)]);const _0x401251=Number(RegExp['$1'])[_0x3f364d(0x29e)](0x0,0xff),_0x1884f5=Math['max'](0x1,Number(RegExp['$2']));this[_0x3f364d(0x2ec)][_0x3f364d(0x3c1)][_0x3f364d(0x37c)][_0x401251]=_0x1884f5;}},Game_Map['prototype'][_0x344336(0x35e)]=function(_0x1b2f24,_0x21e7a5){const _0x596c71=_0x344336;if(this[_0x596c71(0x2ec)]===undefined)this[_0x596c71(0x398)]();const _0x3d9059=VisuMZ[_0x596c71(0x39f)][_0x596c71(0x2a0)][_0x596c71(0x3b2)],_0x193795=this[_0x596c71(0x1d9)](_0x1b2f24,_0x21e7a5),_0x540f25=this[_0x596c71(0x21d)](_0x1b2f24,_0x21e7a5);if(this['_footprints']['opacity'][_0x596c71(0x2db)][_0x193795]!==undefined)return this[_0x596c71(0x2ec)][_0x596c71(0x36b)][_0x596c71(0x2db)][_0x193795];else{if(this[_0x596c71(0x2ec)][_0x596c71(0x36b)]['terrainTags'][_0x540f25]!==undefined)return this[_0x596c71(0x2ec)]['opacity'][_0x596c71(0x37c)][_0x540f25];}return _0x3d9059['startOpacity'];},Game_Map[_0x344336(0x2c5)][_0x344336(0x285)]=function(_0x2a472f,_0xf10da6){const _0x56a491=_0x344336;if(this['_footprints']===undefined)this['setupRegionTerrainTagFootprints']();const _0x1a4d01=VisuMZ['MovementEffects'][_0x56a491(0x2a0)][_0x56a491(0x3b2)],_0x368ab9=this['regionId'](_0x2a472f,_0xf10da6),_0x4082f4=this[_0x56a491(0x21d)](_0x2a472f,_0xf10da6);if(this[_0x56a491(0x2ec)][_0x56a491(0x3c1)][_0x56a491(0x2db)][_0x368ab9]!==undefined)return this[_0x56a491(0x2ec)][_0x56a491(0x3c1)][_0x56a491(0x2db)][_0x368ab9];else{if(this[_0x56a491(0x2ec)]['duration'][_0x56a491(0x37c)][_0x4082f4]!==undefined)return this[_0x56a491(0x2ec)]['duration'][_0x56a491(0x37c)][_0x4082f4];}return _0x1a4d01[_0x56a491(0x2d9)];},Game_Map[_0x344336(0x2c5)]['setupRegionTerrainTagSmartRush']=function(){const _0x35500f=_0x344336;this[_0x35500f(0x291)](),this[_0x35500f(0x42d)](),this['parseTerrainTagBasedSmartRush']();},Game_Map['prototype'][_0x344336(0x291)]=function(){const _0x106ced=_0x344336,_0x17bb93=VisuMZ[_0x106ced(0x39f)][_0x106ced(0x2a0)]['SmartRush'];this[_0x106ced(0x1db)]={'enabled':!![],'NonCrashRegions':(_0x17bb93[_0x106ced(0x255)]||[])[_0x106ced(0x23d)](),'NonCrashTerrainTags':(_0x17bb93[_0x106ced(0x263)]||[])[_0x106ced(0x23d)]()};},Game_Map[_0x344336(0x2c5)]['parseRegionBasedSmartRush']=function(){const _0x4eafb2=_0x344336,_0x54046a=VisuMZ[_0x4eafb2(0x39f)][_0x4eafb2(0x307)],_0x2988ab=$dataMap[_0x4eafb2(0x414)]||'';_0x2988ab[_0x4eafb2(0x42b)](_0x54046a[_0x4eafb2(0x3d0)])&&(this[_0x4eafb2(0x1db)]['enabled']=![]),_0x2988ab[_0x4eafb2(0x42b)](_0x54046a[_0x4eafb2(0x404)])&&(this[_0x4eafb2(0x1db)][_0x4eafb2(0x255)]=RegExp['$1']['split'](',')['map'](_0x4962a5=>(Number(_0x4962a5)||0x0)[_0x4eafb2(0x29e)](0x0,0xff)));},Game_Map['prototype'][_0x344336(0x2aa)]=function(){const _0x386b53=_0x344336,_0x2d81e9=VisuMZ[_0x386b53(0x39f)][_0x386b53(0x307)];if(!this[_0x386b53(0x3f3)]())return;const _0xf94419=this[_0x386b53(0x3f3)]()[_0x386b53(0x414)]||'';_0xf94419[_0x386b53(0x42b)](_0x2d81e9[_0x386b53(0x311)])&&(this[_0x386b53(0x1db)][_0x386b53(0x263)]=RegExp['$1'][_0x386b53(0x2a2)](',')[_0x386b53(0x269)](_0x3afe04=>(Number(_0x3afe04)||0x0)[_0x386b53(0x29e)](0x0,0x7)));},Game_Map['prototype']['isSmartRushEnabled']=function(){const _0x27527f=_0x344336;if(this['_smartRush']===undefined)this[_0x27527f(0x3f5)]();return this[_0x27527f(0x1db)]['enabled'];},Game_Map['prototype'][_0x344336(0x241)]=function(_0x859215,_0x26924f,_0x271589){const _0x4f0eeb=_0x344336,_0x34c403=this[_0x4f0eeb(0x36e)](_0x859215,_0x271589),_0x504723=this[_0x4f0eeb(0x24f)](_0x26924f,_0x271589);if(_0x34c403<0x0||_0x34c403>=this[_0x4f0eeb(0x2f7)]())return![];if(_0x504723<0x0||_0x504723>=this['height']())return![];const _0x2e80e1=this[_0x4f0eeb(0x1d9)](_0x34c403,_0x504723);if(this['_smartRush'][_0x4f0eeb(0x255)][_0x4f0eeb(0x318)](_0x2e80e1))return![];const _0x36a017=this[_0x4f0eeb(0x21d)](_0x34c403,_0x504723);if(this['_smartRush'][_0x4f0eeb(0x263)][_0x4f0eeb(0x318)](_0x36a017))return![];return Game_Player[_0x4f0eeb(0x1e5)];},Game_Map[_0x344336(0x2c5)][_0x344336(0x236)]=function(){const _0xd307e1=_0x344336;this[_0xd307e1(0x1ce)](),this[_0xd307e1(0x2bf)](),this[_0xd307e1(0x33e)]();},Game_Map[_0x344336(0x2c5)][_0x344336(0x1ce)]=function(){const _0x54fd2a=_0x344336,_0x31ee84=VisuMZ[_0x54fd2a(0x39f)][_0x54fd2a(0x2a0)][_0x54fd2a(0x333)];this[_0x54fd2a(0x247)]={'enabled':!![],'NonLandableRegions':(_0x31ee84['NonLandableRegions']||[])[_0x54fd2a(0x23d)](),'NonLandableTerrainTags':(_0x31ee84[_0x54fd2a(0x364)]||[])['clone'](),'NonPassableRegions':(_0x31ee84[_0x54fd2a(0x3b6)]||[])['clone'](),'NonPassableTerrainTags':(_0x31ee84[_0x54fd2a(0x257)]||[])[_0x54fd2a(0x23d)]()};},Game_Map[_0x344336(0x2c5)]['parseRegionBasedSmartBlink']=function(){const _0x30d1fb=_0x344336,_0x59d116=VisuMZ[_0x30d1fb(0x39f)]['RegExp'],_0x5e0ac2=$dataMap[_0x30d1fb(0x414)]||'';_0x5e0ac2['match'](_0x59d116[_0x30d1fb(0x205)])&&(this[_0x30d1fb(0x247)][_0x30d1fb(0x2da)]=![]),_0x5e0ac2[_0x30d1fb(0x42b)](_0x59d116[_0x30d1fb(0x210)])&&(this[_0x30d1fb(0x247)]['NonLandableRegions']=RegExp['$1'][_0x30d1fb(0x2a2)](',')['map'](_0x270579=>(Number(_0x270579)||0x0)[_0x30d1fb(0x29e)](0x0,0xff))),_0x5e0ac2['match'](_0x59d116[_0x30d1fb(0x354)])&&(this[_0x30d1fb(0x247)][_0x30d1fb(0x3b6)]=RegExp['$1'][_0x30d1fb(0x2a2)](',')[_0x30d1fb(0x269)](_0x31b66a=>(Number(_0x31b66a)||0x0)['clamp'](0x0,0xff)));},Game_Map[_0x344336(0x2c5)][_0x344336(0x33e)]=function(){const _0xffe97a=_0x344336,_0x4cb109=VisuMZ[_0xffe97a(0x39f)][_0xffe97a(0x307)];if(!this[_0xffe97a(0x3f3)]())return;const _0x452112=this[_0xffe97a(0x3f3)]()[_0xffe97a(0x414)]||'';_0x452112[_0xffe97a(0x42b)](_0x4cb109[_0xffe97a(0x243)])&&(this[_0xffe97a(0x247)][_0xffe97a(0x364)]=RegExp['$1']['split'](',')[_0xffe97a(0x269)](_0x1d4af9=>(Number(_0x1d4af9)||0x0)[_0xffe97a(0x29e)](0x0,0x7))),_0x452112['match'](_0x4cb109[_0xffe97a(0x27f)])&&(this[_0xffe97a(0x247)][_0xffe97a(0x257)]=RegExp['$1'][_0xffe97a(0x2a2)](',')['map'](_0x4dc668=>(Number(_0x4dc668)||0x0)[_0xffe97a(0x29e)](0x0,0x7)));},Game_Map[_0x344336(0x2c5)][_0x344336(0x21f)]=function(){const _0x189ed9=_0x344336;if(this[_0x189ed9(0x247)]===undefined)this[_0x189ed9(0x236)]();return this[_0x189ed9(0x247)]['enabled'];},Game_Map[_0x344336(0x2c5)][_0x344336(0x2b9)]=function(_0x340ce5,_0xe7368){const _0x20c42d=_0x344336,_0x2ab923=this[_0x20c42d(0x1d9)](_0x340ce5,_0xe7368),_0x2bc0ad=this['terrainTag'](_0x340ce5,_0xe7368);if(this[_0x20c42d(0x247)]===undefined)this[_0x20c42d(0x236)]();if(this[_0x20c42d(0x247)][_0x20c42d(0x3b6)]['includes'](_0x2ab923))return!![];if(this[_0x20c42d(0x247)]['NonPassableTerrainTags'][_0x20c42d(0x318)](_0x2bc0ad))return!![];return![];},Game_Map[_0x344336(0x2c5)][_0x344336(0x3c2)]=function(_0x529364,_0x3e51fd){const _0x1b4e60=_0x344336,_0x19bae9=this['regionId'](_0x529364,_0x3e51fd),_0x13e4e1=this['terrainTag'](_0x529364,_0x3e51fd);if(this['_smartBlink']===undefined)this[_0x1b4e60(0x236)]();if(this[_0x1b4e60(0x247)][_0x1b4e60(0x368)]['includes'](_0x19bae9))return!![];if(this[_0x1b4e60(0x247)][_0x1b4e60(0x364)][_0x1b4e60(0x318)](_0x13e4e1))return!![];return![];},Game_Map[_0x344336(0x2c5)][_0x344336(0x1d8)]=function(){const _0xe0f47f=_0x344336;this[_0xe0f47f(0x373)](),this[_0xe0f47f(0x2fd)](),this[_0xe0f47f(0x2a4)]();},Game_Map['prototype'][_0x344336(0x373)]=function(){const _0x1a030c=_0x344336,_0x32e7f5=VisuMZ[_0x1a030c(0x39f)]['Settings'][_0x1a030c(0x3ec)];this['_smartJump']={'enabled':!![],'HeightBasedRegions':(_0x32e7f5['HeightBasedRegions']||[])['clone'](),'NonLandableRegions':(_0x32e7f5['NonLandableRegions']||[])[_0x1a030c(0x23d)](),'NonLandableTerrainTags':(_0x32e7f5[_0x1a030c(0x364)]||[])['clone'](),'NonPassableRegions':(_0x32e7f5['NonPassableRegions']||[])[_0x1a030c(0x23d)](),'NonPassableTerrainTags':(_0x32e7f5[_0x1a030c(0x257)]||[])[_0x1a030c(0x23d)]()};},Game_Map['prototype']['parseRegionBasedSmartJump']=function(){const _0x3bd92e=_0x344336,_0x4a172e=VisuMZ['MovementEffects']['RegExp'],_0x4d848f=$dataMap[_0x3bd92e(0x414)]||'';_0x4d848f[_0x3bd92e(0x42b)](_0x4a172e[_0x3bd92e(0x392)])&&(this[_0x3bd92e(0x370)][_0x3bd92e(0x2da)]=![]),_0x4d848f[_0x3bd92e(0x42b)](_0x4a172e[_0x3bd92e(0x235)])&&(this[_0x3bd92e(0x370)]['LedgeJumpRegion']=Number(RegExp['$1'])[_0x3bd92e(0x29e)](0x0,0xff)),_0x4d848f[_0x3bd92e(0x42b)](_0x4a172e[_0x3bd92e(0x229)])&&(this[_0x3bd92e(0x370)][_0x3bd92e(0x314)]=RegExp['$1'][_0x3bd92e(0x2a2)](',')[_0x3bd92e(0x269)](_0x7afa71=>(Number(_0x7afa71)||0x0)[_0x3bd92e(0x29e)](0x0,0xff)),this[_0x3bd92e(0x370)]['HeightBasedRegions']['sort']()),_0x4d848f['match'](_0x4a172e['SmartJumpNonLandRegions'])&&(this[_0x3bd92e(0x370)][_0x3bd92e(0x368)]=RegExp['$1'][_0x3bd92e(0x2a2)](',')[_0x3bd92e(0x269)](_0x47f5ad=>(Number(_0x47f5ad)||0x0)[_0x3bd92e(0x29e)](0x0,0xff))),_0x4d848f['match'](_0x4a172e[_0x3bd92e(0x36f)])&&(this['_smartJump']['NonPassableRegions']=RegExp['$1'][_0x3bd92e(0x2a2)](',')[_0x3bd92e(0x269)](_0x10bfef=>(Number(_0x10bfef)||0x0)['clamp'](0x0,0xff)));},Game_Map[_0x344336(0x2c5)][_0x344336(0x2a4)]=function(){const _0x402ec8=_0x344336,_0x1b1fbc=VisuMZ[_0x402ec8(0x39f)][_0x402ec8(0x307)];if(!this['tileset']())return;const _0x282e1=this[_0x402ec8(0x3f3)]()[_0x402ec8(0x414)]||'';_0x282e1[_0x402ec8(0x42b)](_0x1b1fbc['SmartJumpNonLandTerrainTags'])&&(this['_smartJump'][_0x402ec8(0x364)]=RegExp['$1']['split'](',')[_0x402ec8(0x269)](_0x54d431=>(Number(_0x54d431)||0x0)['clamp'](0x0,0x7))),_0x282e1[_0x402ec8(0x42b)](_0x1b1fbc['SmartJumpNonPassTerrainTags'])&&(this['_smartJump'][_0x402ec8(0x257)]=RegExp['$1'][_0x402ec8(0x2a2)](',')[_0x402ec8(0x269)](_0x2ad710=>(Number(_0x2ad710)||0x0)[_0x402ec8(0x29e)](0x0,0x7)));},Game_Map[_0x344336(0x2c5)][_0x344336(0x200)]=function(){const _0x378bee=_0x344336;if(this[_0x378bee(0x370)]===undefined)this['setupRegionTerrainTagSmartJump']();return this['_smartJump'][_0x378bee(0x2da)];},Game_Map[_0x344336(0x2c5)]['isTileSmartHeightJumpRegion']=function(_0x25cece,_0x48c564){const _0xb96ff6=_0x344336;if(this['_smartJump']===undefined)this[_0xb96ff6(0x1d8)]();const _0x87e74e=this['regionId'](_0x25cece,_0x48c564);return this[_0xb96ff6(0x3a6)](_0x87e74e);;},Game_Map[_0x344336(0x2c5)][_0x344336(0x325)]=function(_0xa62a5c){const _0x5e4d16=_0x344336;if(this['_smartJump']===undefined)this[_0x5e4d16(0x1d8)]();const _0x4ca700=this[_0x5e4d16(0x370)][_0x5e4d16(0x314)]['indexOf'](_0xa62a5c);return _0x4ca700===0x0;},Game_Map[_0x344336(0x2c5)]['isHeightBasedRegion']=function(_0x5c8543){const _0x4ef10a=_0x344336;if(this[_0x4ef10a(0x370)]===undefined)this[_0x4ef10a(0x1d8)]();return this[_0x4ef10a(0x370)]['HeightBasedRegions'][_0x4ef10a(0x318)](_0x5c8543);},Game_Map[_0x344336(0x2c5)]['meetsSmartJumpHeightConditions']=function(_0x5ea1f3,_0x3786ef,_0x1f5758){const _0x1b2d32=_0x344336,_0x511d35=$gamePlayer[_0x1b2d32(0x1d9)](),_0x1dcba3=this[_0x1b2d32(0x1d9)](_0x5ea1f3,_0x3786ef);if(this['isHeightBasedRegion'](_0x511d35)){const _0x20a8a0=$gamePlayer[_0x1b2d32(0x1d6)]();if(this[_0x1b2d32(0x325)](_0x511d35)&&this[_0x1b2d32(0x325)](_0x1dcba3))return!![];if(_0x20a8a0!==0x2&&this[_0x1b2d32(0x325)](_0x1dcba3)){if(_0x1f5758>=0x1)return![];}if(this[_0x1b2d32(0x3a6)](_0x1dcba3))return _0x511d35>=_0x1dcba3;else{const _0x517bf5=this[_0x1b2d32(0x370)][_0x1b2d32(0x314)][_0x1b2d32(0x26e)](_0x511d35);return _0x517bf5<=0x0;}}if(this[_0x1b2d32(0x3a6)](_0x1dcba3)){const _0x5af039=this['_smartJump'][_0x1b2d32(0x314)][_0x1b2d32(0x26e)](_0x1dcba3);return _0x5af039<=0x0;}else return!![];},Game_Map[_0x344336(0x2c5)][_0x344336(0x295)]=function(_0x3a6e77,_0x1b9d28){const _0x5132fd=_0x344336,_0x410d2d=this['regionId'](_0x3a6e77,_0x1b9d28),_0x42ce7d=this[_0x5132fd(0x21d)](_0x3a6e77,_0x1b9d28);if(this[_0x5132fd(0x370)]===undefined)this[_0x5132fd(0x1d8)]();if(this['_smartJump']['NonPassableRegions']['includes'](_0x410d2d))return!![];if(this['_smartJump'][_0x5132fd(0x257)][_0x5132fd(0x318)](_0x42ce7d))return!![];const _0x102ec1=this[_0x5132fd(0x33c)](_0x3a6e77,_0x1b9d28);for(const _0x33436a of _0x102ec1){if(!_0x33436a)continue;if(_0x33436a[_0x5132fd(0x21e)])continue;if(_0x33436a[_0x5132fd(0x3d1)]())return!![];}return![];},Game_Map[_0x344336(0x2c5)]['isTileSmartJumpNonLandable']=function(_0x5e2e33,_0x4850ca){const _0x26623d=_0x344336,_0x49393c=this[_0x26623d(0x1d9)](_0x5e2e33,_0x4850ca),_0x24b5d1=this[_0x26623d(0x21d)](_0x5e2e33,_0x4850ca);if(this[_0x26623d(0x370)]===undefined)this[_0x26623d(0x1d8)]();if(this['_smartJump'][_0x26623d(0x368)][_0x26623d(0x318)](_0x49393c))return!![];if(this[_0x26623d(0x370)][_0x26623d(0x364)][_0x26623d(0x318)](_0x24b5d1))return!![];const _0x2aea67=this[_0x26623d(0x33c)](_0x5e2e33,_0x4850ca);for(const _0x3dbb2a of _0x2aea67){if(!_0x3dbb2a)continue;if(_0x3dbb2a[_0x26623d(0x21e)])continue;if(_0x3dbb2a['notSmartJumpLandable']())return!![];}return![];},VisuMZ[_0x344336(0x39f)][_0x344336(0x21c)]=Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x218)],Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x218)]=function(){const _0x288755=_0x344336;VisuMZ[_0x288755(0x39f)][_0x288755(0x21c)][_0x288755(0x2bb)](this),this[_0x288755(0x1c8)]();},VisuMZ[_0x344336(0x39f)][_0x344336(0x3ef)]=Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x391)],Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x391)]=function(){const _0x50832e=_0x344336;VisuMZ['MovementEffects'][_0x50832e(0x3ef)]['call'](this);if(this['canCreateDustCloud']())this[_0x50832e(0x29c)]();!this[_0x50832e(0x3e0)]()&&this[_0x50832e(0x1cc)]()&&this['playFootstepSound']();},VisuMZ[_0x344336(0x39f)]['Game_CharacterBase_updatePattern']=Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x2b4)],Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x2b4)]=function(){const _0x1b1cc0=_0x344336;VisuMZ[_0x1b1cc0(0x39f)][_0x1b1cc0(0x3ca)][_0x1b1cc0(0x2bb)](this),this['meetFootprintFrames']()&&this['canMakeFootprints']()&&this[_0x1b1cc0(0x289)](),this[_0x1b1cc0(0x2b1)]()&&this['canMakeFootstepSounds']()&&this[_0x1b1cc0(0x2fc)]();},Game_CharacterBase[_0x344336(0x2c5)]['canCreateDustCloud']=function(){const _0x25f8e5=_0x344336;if(this['constructor']===Game_Follower&&!this['isVisible']())return![];if(this['constructor']===Game_Player&&this[_0x25f8e5(0x1f9)]())return![];if(!this[_0x25f8e5(0x270)]())return![];if(this[_0x25f8e5(0x319)]())return![];return $gameMap[_0x25f8e5(0x22e)]();},Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x29c)]=function(){const _0x55fa3f=_0x344336,_0x2c4673=SceneManager[_0x55fa3f(0x352)][_0x55fa3f(0x403)];if(_0x2c4673)_0x2c4673['createDustCloudForTarget'](this);},Game_CharacterBase['prototype'][_0x344336(0x3e0)]=function(){const _0x5f3c37=_0x344336;return VisuMZ[_0x5f3c37(0x39f)]['Settings'][_0x5f3c37(0x26d)][_0x5f3c37(0x3c3)];},VisuMZ[_0x344336(0x39f)]['Game_CharacterBase_animationWait']=Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x23f)],Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x23f)]=function(){const _0x9b6537=_0x344336;let _0x4c4be7=VisuMZ[_0x9b6537(0x39f)]['Game_CharacterBase_animationWait'][_0x9b6537(0x2bb)](this);if(this['isMoving']()){const _0x4ab48d=VisuMZ[_0x9b6537(0x39f)][_0x9b6537(0x2a0)]['Footsteps'][_0x9b6537(0x278)]??1.5;_0x4c4be7=Math['ceil'](_0x4c4be7/Math[_0x9b6537(0x3ab)](_0x4ab48d,0x1));if(this[_0x9b6537(0x270)]()){const _0x3d664e=VisuMZ[_0x9b6537(0x39f)][_0x9b6537(0x2a0)][_0x9b6537(0x26d)][_0x9b6537(0x254)]??1.5;_0x4c4be7=Math[_0x9b6537(0x320)](_0x4c4be7/Math[_0x9b6537(0x3ab)](_0x3d664e,0x1));}}return _0x4c4be7;},Game_CharacterBase[_0x344336(0x2c5)]['meetFootstepFrames']=function(){const _0x31894b=_0x344336;if(!this[_0x31894b(0x3e0)]())return![];if(this['hasStepAnime']()&&!this[_0x31894b(0x283)]())return![];if(this['isJumping']())return![];if(this[_0x31894b(0x435)]())return![];const _0x3f2bb9=this[_0x31894b(0x1e7)]()[_0x31894b(0x31d)]??[];if(_0x3f2bb9[_0x31894b(0x288)]<=0x0)return!![];return _0x3f2bb9[_0x31894b(0x318)](this['pattern']());},Game_CharacterBase[_0x344336(0x2c5)]['canMakeFootstepSounds']=function(){const _0x3f3e45=_0x344336;if(this[_0x3f3e45(0x24a)]===Game_Follower&&!this[_0x3f3e45(0x1cd)]())return![];if(this['constructor']===Game_Player&&this[_0x3f3e45(0x1f9)]())return![];if(this[_0x3f3e45(0x319)]())return![];return this['footstepsData']()[_0x3f3e45(0x2da)]&&$gameMap[_0x3f3e45(0x1cc)]();},Game_CharacterBase['prototype'][_0x344336(0x2fc)]=function(){const _0x281333=_0x344336;SoundManager[_0x281333(0x226)](this);},Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x1e7)]=function(){return{'enabled':!![],'volumeRate':0x1,'pitchRate':0x1};},Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x244)]=function(){const _0x8caf5f=_0x344336;if(this[_0x8caf5f(0x1f6)]()&&!this[_0x8caf5f(0x283)]())return![];if(this['isJumping']())return![];if(this[_0x8caf5f(0x435)]())return![];const _0x3d219f='dir%1'[_0x8caf5f(0x2bd)](this[_0x8caf5f(0x3f8)]),_0x4ee006='pattern%1'[_0x8caf5f(0x2bd)](this[_0x8caf5f(0x259)]()),_0x34bbb6=this[_0x8caf5f(0x3d7)]();if(_0x34bbb6[_0x3d219f]){if(_0x34bbb6[_0x3d219f][_0x4ee006]){if(_0x34bbb6[_0x3d219f][_0x4ee006][_0x8caf5f(0x41b)]!=='')return!![];if(_0x34bbb6[_0x3d219f][_0x4ee006][_0x8caf5f(0x2f7)]>0x0)return!![];if(_0x34bbb6[_0x3d219f][_0x4ee006][_0x8caf5f(0x3dc)]>0x0)return!![];}}return![];},Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x423)]=function(){const _0x5d38a5=_0x344336;if(this[_0x5d38a5(0x24a)]===Game_Follower&&!this[_0x5d38a5(0x1cd)]())return![];if(this[_0x5d38a5(0x24a)]===Game_Player&&this[_0x5d38a5(0x1f9)]())return![];if(this[_0x5d38a5(0x319)]())return![];const _0x1c7e2b=this['x'],_0x504036=this['y'];return this['footprintsData']()['enabled']&&$gameMap[_0x5d38a5(0x423)](_0x1c7e2b,_0x504036);},Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x3d7)]=function(){const _0x1116c2=_0x344336,_0x3ddf60=VisuMZ[_0x1116c2(0x39f)][_0x1116c2(0x2a0)][_0x1116c2(0x3b2)];return{'enabled':!![],'dir1':_0x3ddf60[_0x1116c2(0x38e)],'dir2':_0x3ddf60[_0x1116c2(0x3ac)],'dir3':_0x3ddf60[_0x1116c2(0x322)],'dir4':_0x3ddf60[_0x1116c2(0x237)],'dir6':_0x3ddf60['dir6'],'dir7':_0x3ddf60[_0x1116c2(0x39c)],'dir8':_0x3ddf60[_0x1116c2(0x240)],'dir9':_0x3ddf60['dir9']};},Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x289)]=function(){const _0x425a50=_0x344336,_0x297dc5=SceneManager[_0x425a50(0x352)][_0x425a50(0x403)];if(_0x297dc5)_0x297dc5[_0x425a50(0x2c7)](this);},Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x1c8)]=function(){this['_motionTrailSettings']={'enabled':![],'delay':0x4,'duration':0x1e,'hue':0x0,'opacityStart':0x80,'tone':[0x0,0x0,0x0,0x0]};},Game_CharacterBase[_0x344336(0x2c5)]['motionTrailData']=function(){const _0x3c8417=_0x344336;if(this[_0x3c8417(0x3e8)]===undefined)this[_0x3c8417(0x1c8)]();return this[_0x3c8417(0x3e8)];},Game_CharacterBase['prototype'][_0x344336(0x203)]=function(_0x389364,_0x9445a2){const _0x29a79b=_0x344336;this['motionTrailData']()[_0x29a79b(0x2da)]=_0x389364;if(!SceneManager['isSceneMap']())return;if(!_0x389364)return;if(!_0x9445a2)return;const _0x3a4294=SceneManager[_0x29a79b(0x352)][_0x29a79b(0x403)];if(_0x3a4294){const _0x5bdfa4=_0x3a4294['findTargetSprite'](this);_0x5bdfa4&&_0x5bdfa4[_0x29a79b(0x2f5)]();}},Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x280)]=function(_0x5e5267,_0x260d6b){const _0x87cf0=_0x344336,_0x238caf=this[_0x87cf0(0x2f8)]()[_0x87cf0(0x2da)];this[_0x87cf0(0x3e8)]=JsonEx['makeDeepCopy'](_0x5e5267);if(_0x260d6b)return;this[_0x87cf0(0x3e8)][_0x87cf0(0x2da)]=_0x238caf;},VisuMZ[_0x344336(0x39f)]['Game_Player_moveByInput']=Game_Player['prototype']['moveByInput'],Game_Player['prototype'][_0x344336(0x34e)]=function(){const _0x196d83=_0x344336;if(this[_0x196d83(0x27e)]())this['moveBySmartRush']();else this['isSmartJumping']()?this[_0x196d83(0x328)]():(VisuMZ[_0x196d83(0x39f)][_0x196d83(0x348)][_0x196d83(0x2bb)](this),this[_0x196d83(0x21a)]());},Game_Player[_0x344336(0x2c5)][_0x344336(0x21a)]=function(){const _0x39e9cc=_0x344336;this[_0x39e9cc(0x1e6)](),this[_0x39e9cc(0x22a)](),this[_0x39e9cc(0x379)]();},VisuMZ[_0x344336(0x39f)][_0x344336(0x2d0)]=Game_Player[_0x344336(0x2c5)][_0x344336(0x2ee)],Game_Player[_0x344336(0x2c5)][_0x344336(0x2ee)]=function(_0x481e0e,_0x43603d){const _0x5a685b=_0x344336;this[_0x5a685b(0x41d)]()?this[_0x5a685b(0x31f)](_0x481e0e,_0x43603d):VisuMZ[_0x5a685b(0x39f)]['Game_Player_updateScroll'][_0x5a685b(0x2bb)](this,_0x481e0e,_0x43603d);},Game_Player['prototype'][_0x344336(0x41d)]=function(){const _0x1fa04f=_0x344336;if(!$gameMap['isUsingSmoothCamera']())return![];if($gameMap['isScrolling']())return this[_0x1fa04f(0x267)]=!![],this[_0x1fa04f(0x1ca)]=this[_0x1fa04f(0x2dd)],this[_0x1fa04f(0x1cb)]=this[_0x1fa04f(0x415)],![];if(this[_0x1fa04f(0x267)])return(this[_0x1fa04f(0x1ca)]!==this['_realX']||this[_0x1fa04f(0x1cb)]!==this[_0x1fa04f(0x415)])&&(this['_wasEventScrolling']=![],this['_lastSmoothScrollX']=this[_0x1fa04f(0x2dd)],this[_0x1fa04f(0x1cb)]=this[_0x1fa04f(0x415)]),!this[_0x1fa04f(0x267)];return!![];},Game_Player[_0x344336(0x2c5)]['updateScrollSmoothCamera']=function(_0x3dc523,_0x21c6b6){const _0x507a7a=_0x344336,_0x230873=this['centerX'](),_0x13cc27=this[_0x507a7a(0x40d)](),_0x3e6016=this[_0x507a7a(0x1e8)](),_0x1aee96=this[_0x507a7a(0x408)](),_0x3701da=this[_0x507a7a(0x270)]()||this['isInAirship'](),_0x7a782d=$gameSystem[_0x507a7a(0x24c)](![],_0x3701da),_0x38b0b4=$gameSystem[_0x507a7a(0x24c)](!![],_0x3701da),_0x3e672f=VisuMZ['MovementEffects'][_0x507a7a(0x2d3)]();if(_0x3e6016<_0x230873){const _0xa04064=_0x230873-_0x3e6016,_0x5dce2b=_0x7a782d*_0x3e672f,_0x3356d1=_0xa04064/(_0x5dce2b||0.01);$gameMap['scrollLeft'](_0x3356d1);}if(_0x3e6016>_0x230873){const _0x50f9c1=_0x3e6016-_0x230873,_0x1473a0=_0x7a782d*_0x3e672f,_0x304375=_0x50f9c1/(_0x1473a0||0.01);$gameMap[_0x507a7a(0x2af)](_0x304375);}if(_0x1aee96>_0x13cc27){const _0x567723=_0x1aee96-_0x13cc27,_0x5c294b=_0x38b0b4*_0x3e672f,_0x293305=_0x567723/(_0x5c294b||0.01);$gameMap[_0x507a7a(0x2ab)](_0x293305);}if(_0x1aee96<_0x13cc27){const _0x2da648=_0x13cc27-_0x1aee96,_0x33efc8=_0x38b0b4*_0x3e672f,_0x228137=_0x2da648/(_0x33efc8||0.01);$gameMap[_0x507a7a(0x377)](_0x228137);}},VisuMZ['MovementEffects'][_0x344336(0x2d3)]=function(){return 1.0017453;},VisuMZ[_0x344336(0x39f)][_0x344336(0x331)]=Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x42a)],Game_CharacterBase[_0x344336(0x2c5)]['updateAnimationCount']=function(){const _0xe3cfa9=_0x344336;VisuMZ['MovementEffects']['Game_CharacterBase_updateAnimationCount']['call'](this),this[_0xe3cfa9(0x3a3)]&&this['_footstepCooldownDuration']--;},Game_Player[_0x344336(0x2c5)][_0x344336(0x2fc)]=function(){const _0x4cbfd2=_0x344336;Game_Character['prototype'][_0x4cbfd2(0x2fc)][_0x4cbfd2(0x2bb)](this),this[_0x4cbfd2(0x3a3)]=0x3c;},Game_Player[_0x344336(0x2c5)][_0x344336(0x1e7)]=function(){const _0x14a0b4=_0x344336;return $gameParty[_0x14a0b4(0x2f1)]()?$gameParty['leader']()[_0x14a0b4(0x1e7)]():Game_Character[_0x14a0b4(0x2c5)]['footstepsData'][_0x14a0b4(0x2bb)](this);},Game_Player[_0x344336(0x2c5)]['footprintsData']=function(){const _0x213148=_0x344336;return $gameParty['leader']()?$gameParty[_0x213148(0x2f1)]()[_0x213148(0x3d7)]():Game_Character[_0x213148(0x2c5)][_0x213148(0x3d7)][_0x213148(0x2bb)](this);},Game_Player[_0x344336(0x2c5)][_0x344336(0x1d0)]=function(){const _0x120d9a=_0x344336;return this[_0x120d9a(0x27e)]()||this[_0x120d9a(0x1fa)]();},Game_Player[_0x344336(0x2c5)][_0x344336(0x418)]=function(){const _0x4ef587=_0x344336;if(this[_0x4ef587(0x3de)]())return!![];if(this[_0x4ef587(0x1f9)]())return!![];if(this['isOnLadder']())return!![];return![];},Game_Player[_0x344336(0x2c5)][_0x344336(0x25c)]=function(_0x3b90ea){const _0x1654a1=_0x344336;if(!_0x3b90ea)return;if(_0x3b90ea[_0x1654a1(0x424)])return;const _0x248093=this[_0x1654a1(0x1ef)](_0x3b90ea);this[_0x1654a1(0x32e)](_0x248093);},Game_Player[_0x344336(0x2c5)][_0x344336(0x1ef)]=function(_0x58e196){const _0x35b4d5=_0x344336;if(!_0x58e196)return this['direction']();if(_0x58e196[_0x35b4d5(0x424)])return this[_0x35b4d5(0x1d6)]();const _0xbfe430=this[_0x35b4d5(0x369)](this[_0x35b4d5(0x1d6)](),_0x58e196);return _0xbfe430;},Game_Player[_0x344336(0x2c5)][_0x344336(0x369)]=function(_0x3b67d9,_0x1bb1dc){const _0x21daeb=_0x344336;if(!_0x1bb1dc)return _0x3b67d9;if(_0x1bb1dc[_0x21daeb(0x424)])return _0x3b67d9;if(_0x3b67d9===0x1)return 0x4;if(_0x3b67d9===0x3)return 0x6;if(_0x3b67d9===0x7)return 0x4;if(_0x3b67d9===0x9)return 0x6;return _0x3b67d9;},Game_Player['SMART_RUSH_FILTER_ANGLE_OFFSET']=VisuMZ[_0x344336(0x39f)][_0x344336(0x2a0)][_0x344336(0x220)][_0x344336(0x2c2)]||0x0,Game_Player[_0x344336(0x3b3)]=VisuMZ[_0x344336(0x39f)]['Settings'][_0x344336(0x220)][_0x344336(0x34f)]||0x1,Game_Player[_0x344336(0x1e5)]=VisuMZ[_0x344336(0x39f)][_0x344336(0x2a0)][_0x344336(0x220)][_0x344336(0x2e4)]||![],Game_Player['SMART_RUSH_SHAKE_POWER_RATE']=VisuMZ[_0x344336(0x39f)]['Settings']['SmartRush']['ShakePowerRate']||0x1,Game_Player[_0x344336(0x41f)]=VisuMZ[_0x344336(0x39f)]['Settings'][_0x344336(0x220)][_0x344336(0x308)]||0x1,Game_Player[_0x344336(0x30c)]=VisuMZ['MovementEffects'][_0x344336(0x2a0)][_0x344336(0x220)]['ShakeDuration']||0x1,Game_Player[_0x344336(0x2c5)][_0x344336(0x3ee)]=function(_0x326be5,_0x3d5b69,_0x18796b,_0x5a8937,_0x10d3a2){const _0x159378=_0x344336;if(!this[_0x159378(0x25b)]())return![];const _0x4bff0b=VisuMZ[_0x159378(0x39f)][_0x159378(0x2a0)]['SmartRush'];return this[_0x159378(0x25c)](_0x4bff0b),this[_0x159378(0x1df)]=_0x326be5,this[_0x159378(0x34a)]=_0x3d5b69||0x1,this['_smartRushSwitches']=(_0x18796b||[])[_0x159378(0x23d)](),this[_0x159378(0x1f7)]=_0x5a8937||1.5,this[_0x159378(0x3b0)]=JsonEx[_0x159378(0x388)](_0x10d3a2),this[_0x159378(0x357)](!![]),!![];},Game_Player['prototype'][_0x344336(0x25b)]=function(){const _0x241c18=_0x344336;if(!$gameMap[_0x241c18(0x2ef)]())return![];if(this[_0x241c18(0x34a)])return![];if(this[_0x241c18(0x1d0)]())return![];if(this[_0x241c18(0x418)]())return![];if(this[_0x241c18(0x319)]())return![];if(this[_0x241c18(0x30f)]())return![];const _0x11ad9c=VisuMZ['MovementEffects'][_0x241c18(0x2a0)][_0x241c18(0x220)],_0x1c84eb=this['getStraightenDiagonalDirection'](_0x11ad9c);return this[_0x241c18(0x406)](this['x'],this['y'],_0x1c84eb);},Game_Player[_0x344336(0x2c5)][_0x344336(0x27e)]=function(){const _0x23ee6e=_0x344336;return this[_0x23ee6e(0x1df)]!==undefined&&this[_0x23ee6e(0x1df)]>0x0;},VisuMZ[_0x344336(0x39f)][_0x344336(0x2dc)]=Game_Player[_0x344336(0x2c5)][_0x344336(0x270)],Game_Player[_0x344336(0x2c5)][_0x344336(0x270)]=function(){const _0x56f76d=_0x344336;if(this['isSmartRushing']())return!![];return VisuMZ[_0x56f76d(0x39f)][_0x56f76d(0x2dc)][_0x56f76d(0x2bb)](this);},VisuMZ[_0x344336(0x39f)]['Game_CharacterBase_realMoveSpeed']=Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x1d4)],Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x1d4)]=function(){const _0x410f59=_0x344336;let _0x266232=VisuMZ[_0x410f59(0x39f)][_0x410f59(0x3ad)][_0x410f59(0x2bb)](this);return _0x266232+=$gameSystem[_0x410f59(0x426)](this[_0x410f59(0x3f8)])*0x1,this===$gamePlayer&&this[_0x410f59(0x27e)]()&&(_0x266232*=this['_smartRushSpeedRate']||1.5),Math[_0x410f59(0x3ab)](0x1,_0x266232);},Game_Player['prototype'][_0x344336(0x434)]=function(){const _0x405b09=_0x344336;if(this[_0x405b09(0x283)]())return;if(this['isJumping']())return;this[_0x405b09(0x399)](this[_0x405b09(0x1d6)]()),this['isMovementSucceeded']()?(this[_0x405b09(0x1df)]=this[_0x405b09(0x1df)]||0x1,this[_0x405b09(0x1df)]--):(this[_0x405b09(0x217)]()&&($gameScreen[_0x405b09(0x420)](this['_smartRushMode']),this[_0x405b09(0x206)]()),this[_0x405b09(0x1df)]=0x0),this[_0x405b09(0x435)]()&&(this[_0x405b09(0x1df)]=0x0),this[_0x405b09(0x1df)]<=0x0&&setTimeout(this['setSmartRushSwitch']['bind'](this,![]),0x32);},Game_Player['prototype']['endSmartRush']=function(){const _0xf8586e=_0x344336;this[_0xf8586e(0x1df)]=0x0,setTimeout(this['setSmartRushSwitch'][_0xf8586e(0x20f)](this,![]),0x32);},Game_Screen[_0x344336(0x2c5)][_0x344336(0x420)]=function(_0x2b5964){const _0x39012a=_0x344336,_0x5507f9=(_0x2b5964*Game_Player[_0x39012a(0x28d)])[_0x39012a(0x29e)](0x1,0x9),_0x3b2f43=(_0x2b5964*Game_Player[_0x39012a(0x41f)])['clamp'](0x1,0x9);this[_0x39012a(0x3b7)](_0x5507f9,_0x3b2f43,Game_Player['SMART_RUSH_SHAKE_DURATION']);},Game_Player[_0x344336(0x2c5)][_0x344336(0x206)]=function(){const _0x1ec3db=_0x344336,_0x3bf428=this[_0x1ec3db(0x1d6)](),_0x1fe85e=((this[_0x1ec3db(0x1f7)]-0x1)*0x2)[_0x1ec3db(0x29e)](0.25,0.85),_0x194de5=((this[_0x1ec3db(0x1f7)]-0x1)*1.5)[_0x1ec3db(0x29e)](0.15,0.3);if([0x1,0x4,0x7]['includes'](_0x3bf428))this[_0x1ec3db(0x2dd)]-=_0x1fe85e;if([0x3,0x6,0x9][_0x1ec3db(0x318)](_0x3bf428))this[_0x1ec3db(0x2dd)]+=_0x1fe85e;if([0x7,0x8,0x9][_0x1ec3db(0x318)](_0x3bf428))this['_realY']-=_0x1fe85e;if([0x1,0x2,0x3]['includes'](_0x3bf428))this[_0x1ec3db(0x415)]+=_0x194de5;},Game_Player[_0x344336(0x2c5)]['isSmartRushCrashShake']=function(){const _0x324010=_0x344336;if(!Game_Player[_0x324010(0x1e5)])return![];const _0x3d2b92=this[_0x324010(0x1d6)](),_0x23cf1b=this['x'],_0x1c79f6=this['y'];return $gameMap[_0x324010(0x241)](_0x23cf1b,_0x1c79f6,_0x3d2b92);},Game_Player['prototype']['updateSmartRushCooldown']=function(){const _0x5d033a=_0x344336;this[_0x5d033a(0x34a)]&&this[_0x5d033a(0x34a)]--;},Game_Player[_0x344336(0x2c5)]['setSmartRushSwitch']=function(_0x4afa05){const _0x3ed25b=_0x344336;this[_0x3ed25b(0x3fe)]=this[_0x3ed25b(0x3fe)]||[];for(const _0x5ea5f2 of this[_0x3ed25b(0x3fe)]){$gameSwitches[_0x3ed25b(0x2ba)](_0x5ea5f2,_0x4afa05);}!_0x4afa05&&(this[_0x3ed25b(0x1df)]=0x0);},VisuMZ[_0x344336(0x39f)][_0x344336(0x3f6)]=Game_Player['prototype'][_0x344336(0x35c)],Game_Player[_0x344336(0x2c5)][_0x344336(0x35c)]=function(_0x5ebfc7,_0x168fb2,_0x119ebb,_0x48293d,_0x33cd76){const _0x4fd356=_0x344336;VisuMZ[_0x4fd356(0x39f)][_0x4fd356(0x3f6)]['call'](this,_0x5ebfc7,_0x168fb2,_0x119ebb,_0x48293d,_0x33cd76),this[_0x4fd356(0x416)]();},Game_Player[_0x344336(0x41e)]=VisuMZ['MovementEffects'][_0x344336(0x2a0)][_0x344336(0x333)][_0x344336(0x34f)],Game_Player['SMART_BLINK_FILTER_ANGLE_OFFSET']=VisuMZ['MovementEffects'][_0x344336(0x2a0)][_0x344336(0x333)][_0x344336(0x2c2)],Game_Player[_0x344336(0x2c5)][_0x344336(0x411)]=function(_0x21b920,_0x5bb78c,_0x15532f,_0x2d9856){const _0x5cef2d=_0x344336;_0x15532f=_0x15532f||{'NonLandableRegions':[],'NonLandableTerrainTags':[],'NonPassableRegions':[],'NonPassableTerrainTags':[]},this[_0x5cef2d(0x305)]=JsonEx[_0x5cef2d(0x388)](_0x15532f),_0x21b920=this['measureSmartBlinkDistance'](_0x21b920||0x1);if(!this[_0x5cef2d(0x27d)](_0x21b920))return![];const _0x53d0cc=VisuMZ[_0x5cef2d(0x39f)][_0x5cef2d(0x2a0)]['SmartBlink'];return this[_0x5cef2d(0x25c)](_0x53d0cc),this['_smartBlinkDistance']=_0x21b920||0x1,this[_0x5cef2d(0x286)]=_0x5bb78c||0x1,this[_0x5cef2d(0x284)]=JsonEx[_0x5cef2d(0x388)](_0x2d9856),this[_0x5cef2d(0x3d9)](_0x21b920),!![];},Game_Player[_0x344336(0x2c5)][_0x344336(0x22c)]=function(_0x12bec9){const _0x413696=_0x344336,_0x14dc04=this['_smartBlinkRestrictions'],_0x346d2b=this[_0x413696(0x1d6)](),_0x3c834e=VisuMZ[_0x413696(0x39f)][_0x413696(0x2a0)]['SmartBlink'];this['straightenFacedDirection'](_0x3c834e);const _0x44e60f=this[_0x413696(0x1d6)]();let _0x343b50=0x0,_0x37ed0e=this['x'],_0x1d85f8=this['y'],_0x3ef296=0x0,_0x1bf6af=0x0;if([0x1,0x4,0x7][_0x413696(0x318)](_0x44e60f))_0x3ef296=-0x1;if([0x3,0x6,0x9][_0x413696(0x318)](_0x44e60f))_0x3ef296=0x1;if([0x7,0x8,0x9][_0x413696(0x318)](_0x44e60f))_0x1bf6af=-0x1;if([0x1,0x2,0x3][_0x413696(0x318)](_0x44e60f))_0x1bf6af=0x1;for(let _0x3d74f9=0x1;_0x3d74f9<=_0x12bec9;_0x3d74f9++){_0x37ed0e+=_0x3ef296,_0x1d85f8+=_0x1bf6af;if(this[_0x413696(0x20c)](_0x37ed0e,_0x1d85f8))break;if(this[_0x413696(0x356)](_0x37ed0e,_0x1d85f8)){_0x343b50=_0x3d74f9;continue;}const _0x28cfd7=$gameMap[_0x413696(0x1d9)](_0x37ed0e,_0x1d85f8),_0x21a889=$gameMap[_0x413696(0x21d)](_0x37ed0e,_0x1d85f8);if(_0x14dc04[_0x413696(0x3b6)][_0x413696(0x318)](_0x28cfd7))break;if(_0x14dc04[_0x413696(0x257)][_0x413696(0x318)](_0x21a889))break;if($gameMap[_0x413696(0x2b9)](_0x37ed0e,_0x1d85f8))break;if(_0x14dc04[_0x413696(0x368)][_0x413696(0x318)](_0x28cfd7))continue;if(_0x14dc04[_0x413696(0x364)][_0x413696(0x318)](_0x21a889))continue;if($gameMap['isTileSmartBlinkNonLandable'](_0x37ed0e,_0x1d85f8))continue;if(!$gameMap[_0x413696(0x380)](_0x37ed0e,_0x1d85f8))continue;if(this[_0x413696(0x1d7)](_0x37ed0e,_0x1d85f8))continue;if(!$gameMap[_0x413696(0x3c6)](_0x37ed0e,_0x1d85f8))continue;_0x343b50=_0x3d74f9;}return this['setDirection'](_0x346d2b),_0x343b50;},Game_Player[_0x344336(0x2c5)][_0x344336(0x356)]=function(_0x5272bb,_0x157b70){return![];},Game_Player[_0x344336(0x2c5)][_0x344336(0x20c)]=function(_0xc8a5c8,_0x27cb43){return![];},Game_Player[_0x344336(0x2c5)][_0x344336(0x27d)]=function(_0x10b8c5){const _0x5065ca=_0x344336;if(!$gameMap[_0x5065ca(0x21f)]())return![];if(this[_0x5065ca(0x286)])return![];if(this['isSmartMoving']())return![];if(this[_0x5065ca(0x418)]())return![];if(this[_0x5065ca(0x319)]())return![];if(this[_0x5065ca(0x30f)]())return![];return _0x10b8c5>=0x1;},Game_Player[_0x344336(0x2c5)][_0x344336(0x3d9)]=function(){const _0x1e0bcf=_0x344336,_0x533e44=this[_0x1e0bcf(0x2f2)],_0x6e3979=this[_0x1e0bcf(0x1d6)]();let _0x93b984=this['x'],_0x2c5f27=this['y'];if([0x1,0x4,0x7][_0x1e0bcf(0x318)](_0x6e3979))_0x93b984+=-_0x533e44;if([0x3,0x6,0x9][_0x1e0bcf(0x318)](_0x6e3979))_0x93b984+=_0x533e44;if([0x7,0x8,0x9]['includes'](_0x6e3979))_0x2c5f27+=-_0x533e44;if([0x1,0x2,0x3][_0x1e0bcf(0x318)](_0x6e3979))_0x2c5f27+=_0x533e44;this['smartBlinkMotionTrailData']()['enabled']&&this['createSmartBlinkMotionTrailSprite']();Game_Character[_0x1e0bcf(0x2c5)][_0x1e0bcf(0x28a)][_0x1e0bcf(0x2bb)](this,_0x93b984,_0x2c5f27),this[_0x1e0bcf(0x222)][_0x1e0bcf(0x2a6)](_0x93b984,_0x2c5f27,this[_0x1e0bcf(0x1d6)]());if(!$gameMap[_0x1e0bcf(0x340)]())this[_0x1e0bcf(0x1cf)](_0x93b984,_0x2c5f27);this['playSmartBlinkFilterEffect'](),setTimeout(this['checkEventTriggerHere']['bind'](this,[0x1,0x2]),0x32);},Game_Player[_0x344336(0x2c5)][_0x344336(0x1ed)]=function(){const _0x1b270e=_0x344336,_0x540ee8=SceneManager['_scene'][_0x1b270e(0x403)];if(_0x540ee8){const _0x2a8d99=this[_0x1b270e(0x2fa)]()['visibleFollowers'](),_0x13ce75=[this][_0x1b270e(0x279)](_0x2a8d99);for(const _0x26c470 of _0x13ce75){const _0x1e9ab6=_0x540ee8['findTargetSprite'](_0x26c470);if(_0x1e9ab6){const _0x3bcae3=Game_Player[_0x1b270e(0x41e)],_0x62b1ce=Game_Player[_0x1b270e(0x40e)];_0x1e9ab6[_0x1b270e(0x3a2)](_0x3bcae3,_0x62b1ce);}}}},Game_Player['prototype'][_0x344336(0x22a)]=function(){const _0x25ded8=_0x344336;this[_0x25ded8(0x286)]&&this['_smartBlinkCooldown']--;},Game_Player[_0x344336(0x2c5)][_0x344336(0x343)]=function(_0x17fce5,_0x3a6e0f,_0x330f30,_0x2bed68){const _0x541c56=_0x344336;_0x330f30=_0x330f30||{'NonLandableRegions':[],'NonLandableTerrainTags':[],'NonPassableRegions':[],'NonPassableTerrainTags':[]},this[_0x541c56(0x351)]=JsonEx['makeDeepCopy'](_0x330f30);if(!this[_0x541c56(0x234)]())return![];const _0x304907=VisuMZ[_0x541c56(0x39f)][_0x541c56(0x2a0)][_0x541c56(0x3ec)];return this[_0x541c56(0x25c)](_0x304907),_0x17fce5=this[_0x541c56(0x433)](_0x17fce5),this[_0x541c56(0x3f1)]=!![],this[_0x541c56(0x38b)]=_0x3a6e0f||0x1,this[_0x541c56(0x2ae)]=JsonEx['makeDeepCopy'](_0x2bed68),this[_0x541c56(0x361)](_0x17fce5),!![];},Game_Player[_0x344336(0x2c5)][_0x344336(0x234)]=function(){const _0x5d0605=_0x344336;if(!$gameMap[_0x5d0605(0x200)]())return![];if(this[_0x5d0605(0x38b)])return![];if(this[_0x5d0605(0x1d0)]())return![];if(this[_0x5d0605(0x418)]())return![];if(this[_0x5d0605(0x319)]())return![];if(this['areFollowersGathering']())return![];return!![];},Game_Player[_0x344336(0x2c5)][_0x344336(0x1fa)]=function(){const _0x1b11a0=_0x344336;return this[_0x1b11a0(0x3f1)];},Game_Player['prototype'][_0x344336(0x433)]=function(_0x3d6dd7){const _0x3d12a9=_0x344336,_0x20bd90=this['_smartJumpRestrictions'],_0x15a91e=this['direction']();let _0x567da7=0x0,_0x807225=this['x'],_0x40a4ae=this['y'],_0x2e93a6=0x0,_0x53ea4f=0x0;if([0x1,0x4,0x7]['includes'](_0x15a91e))_0x2e93a6=-0x1;if([0x3,0x6,0x9][_0x3d12a9(0x318)](_0x15a91e))_0x2e93a6=0x1;if([0x7,0x8,0x9][_0x3d12a9(0x318)](_0x15a91e))_0x53ea4f=-0x1;if([0x1,0x2,0x3][_0x3d12a9(0x318)](_0x15a91e))_0x53ea4f=0x1;for(let _0x319949=0x1;_0x319949<=_0x3d6dd7;_0x319949++){_0x807225+=_0x2e93a6,_0x40a4ae+=_0x53ea4f;if(this[_0x3d12a9(0x323)](_0x807225,_0x40a4ae))break;if(this['isTileSmartJumpCompatible'](_0x807225,_0x40a4ae)){_0x567da7=_0x319949;continue;}if($gameMap[_0x3d12a9(0x252)](_0x807225,_0x40a4ae))break;const _0x27a7ce=$gameMap[_0x3d12a9(0x1d9)](_0x807225,_0x40a4ae),_0x5aa1da=$gameMap[_0x3d12a9(0x21d)](_0x807225,_0x40a4ae);if(_0x20bd90[_0x3d12a9(0x3b6)][_0x3d12a9(0x318)](_0x27a7ce))break;if(_0x20bd90['NonPassableTerrainTags'][_0x3d12a9(0x318)](_0x5aa1da))break;if($gameMap['isTileSmartJumpNonPassable'](_0x807225,_0x40a4ae))break;if(_0x20bd90[_0x3d12a9(0x368)][_0x3d12a9(0x318)](_0x27a7ce))continue;if(_0x20bd90[_0x3d12a9(0x364)][_0x3d12a9(0x318)](_0x5aa1da))continue;if($gameMap[_0x3d12a9(0x2b6)](_0x807225,_0x40a4ae))continue;if(!$gameMap['isValid'](_0x807225,_0x40a4ae))continue;if(this[_0x3d12a9(0x1d7)](_0x807225,_0x40a4ae))continue;if(!$gameMap['isPassableByAnyDirection'](_0x807225,_0x40a4ae))continue;if(!$gameMap[_0x3d12a9(0x29d)](_0x807225,_0x40a4ae,_0x567da7))continue;_0x567da7=_0x319949;}return _0x567da7;},Game_Player[_0x344336(0x2c5)][_0x344336(0x2a8)]=function(_0x13bf4d,_0x4ed832){return![];},Game_Player[_0x344336(0x2c5)][_0x344336(0x323)]=function(_0x20b9b7,_0x4cfb9c){return![];},Game_Player['prototype'][_0x344336(0x361)]=function(_0x4f8a81){const _0x5e941e=_0x344336,_0x53d089=this[_0x5e941e(0x1d6)]();let _0x133af4=0x0,_0x182c0f=0x0;if([0x1,0x4,0x7][_0x5e941e(0x318)](_0x53d089))_0x133af4+=-_0x4f8a81;if([0x3,0x6,0x9]['includes'](_0x53d089))_0x133af4+=_0x4f8a81;if([0x7,0x8,0x9][_0x5e941e(0x318)](_0x53d089))_0x182c0f+=-_0x4f8a81;if([0x1,0x2,0x3]['includes'](_0x53d089))_0x182c0f+=_0x4f8a81;_0x182c0f=this[_0x5e941e(0x3e4)](_0x133af4,_0x182c0f);const _0x431012=this['direction']();this['jump'](_0x133af4,_0x182c0f),this[_0x5e941e(0x32e)](_0x431012);},Game_Player[_0x344336(0x2c5)][_0x344336(0x3e4)]=function(_0x434cf2,_0x5148ab){const _0x272581=_0x344336;if(!$gameMap[_0x272581(0x2ea)](this['x'],this['y']))return _0x5148ab;if($gameMap[_0x272581(0x325)](this['x'],this['y']))return _0x5148ab;let _0x2cd655=this['x']+_0x434cf2,_0x3fa5f2=this['y']+_0x5148ab;if(!$gameMap[_0x272581(0x2ea)](_0x2cd655,_0x3fa5f2))return _0x5148ab;const _0x4e3a6d=this[_0x272581(0x1d9)]();if($gameMap[_0x272581(0x325)](_0x4e3a6d))return _0x5148ab;let _0x22b479=$gameMap['regionId'](_0x2cd655,_0x3fa5f2);if(!$gameMap[_0x272581(0x325)](_0x22b479))return _0x5148ab;const _0x22479f=this[_0x272581(0x1d6)]();if(_0x22479f===0x2)return _0x5148ab;if(_0x22479f===0x8)return _0x5148ab;_0x5148ab+=_0x4e3a6d-_0x22b479;for(;;){const _0x35c47c=_0x2cd655,_0x281e7a=this['y']+_0x5148ab,_0x1fbba7=$gameMap[_0x272581(0x1d9)](_0x35c47c,_0x281e7a);if($gameMap[_0x272581(0x2ea)](_0x35c47c,_0x281e7a)&&!$gameMap['isSmartJumpRegionLowestHeight'](_0x1fbba7)){_0x5148ab--;continue;}if($gameMap['isPassableByAnyDirection'](_0x35c47c,_0x281e7a))break;_0x5148ab--;if(_0x5148ab<=0x0)break;}return _0x5148ab;},Game_Player[_0x344336(0x2c5)][_0x344336(0x328)]=function(){const _0x587abe=_0x344336;if(this[_0x587abe(0x3de)]())return;this[_0x587abe(0x3f1)]=![];if(this[_0x587abe(0x2c8)]()){let _0x197b1c=Math['max'](Math[_0x587abe(0x320)](this[_0x587abe(0x25a)]/0x2),0x1);while(_0x197b1c--)this[_0x587abe(0x29c)]();}if(this[_0x587abe(0x1cc)]())this[_0x587abe(0x2fc)]();setTimeout(this[_0x587abe(0x3e2)][_0x587abe(0x20f)](this,[0x1,0x2]),0x32);},Game_Player[_0x344336(0x2c5)]['updateSmartJumpCooldown']=function(){const _0x12c331=_0x344336;this[_0x12c331(0x38b)]&&this[_0x12c331(0x38b)]--;},Game_Player[_0x344336(0x2c5)][_0x344336(0x3df)]=function(){const _0x338e19=_0x344336;return this[_0x338e19(0x284)]||{'enabled':![]};},Game_Player[_0x344336(0x2c5)]['smartJumpMotionTrailData']=function(){const _0x384673=_0x344336;return this[_0x384673(0x2ae)]||{'enabled':![]};},Game_Player[_0x344336(0x2c5)][_0x344336(0x31e)]=function(){const _0x27004a=_0x344336;return this[_0x27004a(0x3b0)]||{'enabled':![]};},Game_Player['prototype'][_0x344336(0x2f8)]=function(){const _0x2f05ea=_0x344336;if(this[_0x2f05ea(0x27e)]()&&this['smartRushMotionTrailData']()['enabled'])return this[_0x2f05ea(0x31e)]();else{if(this[_0x2f05ea(0x1fa)]()&&this[_0x2f05ea(0x3c4)]()['enabled'])return this[_0x2f05ea(0x3c4)]();}return Game_Character[_0x2f05ea(0x2c5)][_0x2f05ea(0x2f8)]['call'](this);},Game_Player['prototype']['createSmartBlinkMotionTrailSprite']=function(){const _0x21da19=_0x344336,_0x37c47f=SceneManager[_0x21da19(0x352)][_0x21da19(0x403)];if(!_0x37c47f)return;const _0x215354=[this]['concat'](this[_0x21da19(0x2fa)]()[_0x21da19(0x2e3)]());for(const _0x11a804 of _0x215354){if(!_0x11a804)continue;oldData=JSON[_0x21da19(0x378)](JSON['stringify'](_0x11a804['_motionTrailSettings']||{'enabled':![]})),_0x11a804['setMotionTrailSettings'](this[_0x21da19(0x3df)]());const _0x53bbed=_0x37c47f['findTargetSprite'](_0x11a804);_0x53bbed&&_0x53bbed[_0x21da19(0x2f5)](),_0x11a804[_0x21da19(0x280)](oldData);}},VisuMZ[_0x344336(0x39f)][_0x344336(0x396)]=Game_Follower[_0x344336(0x2c5)]['initialize'],Game_Follower[_0x344336(0x2c5)][_0x344336(0x253)]=function(_0x15a771){const _0x3b86d3=_0x344336;VisuMZ[_0x3b86d3(0x39f)][_0x3b86d3(0x396)][_0x3b86d3(0x2bb)](this,_0x15a771),this[_0x3b86d3(0x2f4)]();},VisuMZ[_0x344336(0x39f)][_0x344336(0x30a)]=Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x39e)],Game_CharacterBase[_0x344336(0x2c5)][_0x344336(0x39e)]=function(){const _0x19e9c9=_0x344336;VisuMZ[_0x19e9c9(0x39f)][_0x19e9c9(0x30a)]['call'](this),this[_0x19e9c9(0x2f4)]();},Game_CharacterBase[_0x344336(0x2c5)]['randomizeAnimationCount']=function(){},Game_Follower[_0x344336(0x2c5)][_0x344336(0x2f4)]=function(){const _0x5701d9=_0x344336;this[_0x5701d9(0x3ea)]=Math[_0x5701d9(0x43a)](0xd);},Game_Follower[_0x344336(0x2c5)][_0x344336(0x2fc)]=function(){const _0x246de7=_0x344336;if($gamePlayer[_0x246de7(0x3a3)])return;Game_Character[_0x246de7(0x2c5)][_0x246de7(0x2fc)][_0x246de7(0x2bb)](this);},Game_Follower[_0x344336(0x2c5)]['footstepsData']=function(){const _0x4f498b=_0x344336;return this[_0x4f498b(0x3e5)]()?this['actor']()[_0x4f498b(0x1e7)]():Game_Character[_0x4f498b(0x2c5)][_0x4f498b(0x1e7)]['call'](this);},Game_Follower[_0x344336(0x2c5)][_0x344336(0x3d7)]=function(){const _0x491042=_0x344336;return this[_0x491042(0x3e5)]()?this[_0x491042(0x3e5)]()[_0x491042(0x3d7)]():Game_Character[_0x491042(0x2c5)][_0x491042(0x3d7)][_0x491042(0x2bb)](this);},Game_Follower[_0x344336(0x2c5)][_0x344336(0x3df)]=function(){const _0x4ec9d8=_0x344336;return $gamePlayer[_0x4ec9d8(0x3df)]();},Game_Follower['prototype'][_0x344336(0x3c4)]=function(){const _0x52def0=_0x344336;return $gamePlayer[_0x52def0(0x3c4)]();},Game_Follower[_0x344336(0x2c5)][_0x344336(0x31e)]=function(){const _0x205f8c=_0x344336;return $gamePlayer[_0x205f8c(0x31e)]();},Game_Follower[_0x344336(0x2c5)][_0x344336(0x2f8)]=function(){const _0x4310f7=_0x344336;if($gamePlayer[_0x4310f7(0x27e)]()&&this['smartRushMotionTrailData']()[_0x4310f7(0x2da)])return this[_0x4310f7(0x31e)]();else{if($gamePlayer[_0x4310f7(0x1fa)]()&&this[_0x4310f7(0x3c4)]()[_0x4310f7(0x2da)])return this['smartJumpMotionTrailData']();}return Game_Character[_0x4310f7(0x2c5)]['motionTrailData'][_0x4310f7(0x2bb)](this);},VisuMZ[_0x344336(0x39f)]['Game_Event_clearPageSettings']=Game_Event[_0x344336(0x2c5)][_0x344336(0x245)],Game_Event['prototype'][_0x344336(0x245)]=function(){const _0x347189=_0x344336;VisuMZ[_0x347189(0x39f)][_0x347189(0x1fe)][_0x347189(0x2bb)](this),this[_0x347189(0x419)]();},VisuMZ[_0x344336(0x39f)]['Game_Event_setupPageSettings']=Game_Event[_0x344336(0x2c5)][_0x344336(0x1fd)],Game_Event[_0x344336(0x2c5)][_0x344336(0x1fd)]=function(){const _0x46782e=_0x344336;VisuMZ[_0x46782e(0x39f)][_0x46782e(0x2b2)][_0x46782e(0x2bb)](this),this[_0x46782e(0x26c)]();},Game_Event[_0x344336(0x2c5)]['setupMovementEffectsVariables']=function(){const _0x54cb08=_0x344336;if(!this[_0x54cb08(0x208)]())return;this[_0x54cb08(0x419)](),this['setupMovementEffectsNotetags'](),this[_0x54cb08(0x26f)]();},Game_Event[_0x344336(0x2c5)][_0x344336(0x209)]=function(){const _0x43081c=_0x344336,_0x107349=this['event']()[_0x43081c(0x414)];if(_0x107349==='')return;this[_0x43081c(0x2ed)](_0x107349);},Game_Event[_0x344336(0x2c5)][_0x344336(0x26f)]=function(){const _0x136254=_0x344336;if(!this[_0x136254(0x429)]())return;const _0x1947f5=this[_0x136254(0x3f4)]();let _0x12f02e='';for(const _0x24208f of _0x1947f5){if([0x6c,0x198][_0x136254(0x318)](_0x24208f[_0x136254(0x3a4)])){if(_0x12f02e!=='')_0x12f02e+='\x0a';_0x12f02e+=_0x24208f[_0x136254(0x1f8)][0x0];}}this[_0x136254(0x2ed)](_0x12f02e);},Game_Event[_0x344336(0x2c5)][_0x344336(0x419)]=function(){const _0x160401=_0x344336;{const _0x1a4fff=VisuMZ[_0x160401(0x39f)][_0x160401(0x2a0)][_0x160401(0x26d)];this['_footsteps']={'enabled':_0x1a4fff[_0x160401(0x386)],'volumeRate':_0x1a4fff['eventVolumeModifier'],'pitchRate':_0x1a4fff[_0x160401(0x22f)],'soundFrames':_0x1a4fff[_0x160401(0x402)][_0x160401(0x23d)]()};}{const _0x4326fe=VisuMZ[_0x160401(0x39f)][_0x160401(0x2a0)][_0x160401(0x3b2)];this[_0x160401(0x271)]={'enabled':!![],'dir1':JSON['parse'](JSON['stringify'](_0x4326fe[_0x160401(0x38e)])),'dir2':JSON['parse'](JSON['stringify'](_0x4326fe['dir2'])),'dir3':JSON[_0x160401(0x378)](JSON[_0x160401(0x35f)](_0x4326fe[_0x160401(0x322)])),'dir4':JSON['parse'](JSON[_0x160401(0x35f)](_0x4326fe[_0x160401(0x237)])),'dir6':JSON[_0x160401(0x378)](JSON[_0x160401(0x35f)](_0x4326fe[_0x160401(0x230)])),'dir7':JSON[_0x160401(0x378)](JSON[_0x160401(0x35f)](_0x4326fe[_0x160401(0x39c)])),'dir8':JSON[_0x160401(0x378)](JSON[_0x160401(0x35f)](_0x4326fe['dir8'])),'dir9':JSON[_0x160401(0x378)](JSON[_0x160401(0x35f)](_0x4326fe['dir9']))};}this[_0x160401(0x1da)]={'nonLand':![],'nonPass':![]};},Game_Event[_0x344336(0x2c5)]['checkMovementEffectsStringTags']=function(_0x3ec81b){const _0xc66f8f=_0x344336,_0x264cc0=VisuMZ[_0xc66f8f(0x39f)][_0xc66f8f(0x307)];if(!_0x3ec81b['match'](_0x264cc0[_0xc66f8f(0x2cd)]))return;if(_0x3ec81b[_0xc66f8f(0x42b)](_0x264cc0['YesFootstepsEvent']))this[_0xc66f8f(0x301)]['enabled']=!![];else _0x3ec81b[_0xc66f8f(0x42b)](_0x264cc0['NoFootstepsEvent'])&&(this[_0xc66f8f(0x301)][_0xc66f8f(0x2da)]=![]);_0x3ec81b[_0xc66f8f(0x42b)](_0x264cc0[_0xc66f8f(0x2cb)])&&(this[_0xc66f8f(0x301)][_0xc66f8f(0x2a9)]=Number(RegExp['$1'])*0.01);_0x3ec81b['match'](_0x264cc0[_0xc66f8f(0x329)])&&(this[_0xc66f8f(0x301)][_0xc66f8f(0x214)]=Number(RegExp['$1'])*0.01);_0x3ec81b[_0xc66f8f(0x42b)](_0x264cc0[_0xc66f8f(0x3c9)])&&(this[_0xc66f8f(0x301)]['soundFrames']=String(RegExp['$1'])[_0xc66f8f(0x2a2)](',')[_0xc66f8f(0x269)](_0x322a82=>Number(_0x322a82)||0x0));if(_0x3ec81b[_0xc66f8f(0x42b)](_0x264cc0[_0xc66f8f(0x1f5)]))this[_0xc66f8f(0x271)][_0xc66f8f(0x2da)]=!![];else _0x3ec81b[_0xc66f8f(0x42b)](_0x264cc0[_0xc66f8f(0x2b0)])&&(this[_0xc66f8f(0x271)]['enabled']=![]);{const _0x15f38f=_0xc66f8f(0x438),_0x5b3a66=_0x3ec81b[_0xc66f8f(0x42b)](_0x264cc0[_0x15f38f]);if(_0x5b3a66)for(const _0x517544 of _0x5b3a66){_0x517544['match'](_0x264cc0[_0x15f38f]);const _0x15949c=RegExp['$1'],_0x487f87=RegExp['$2'],_0x4b9cd5=RegExp['$3'],_0x2ac3db=_0xc66f8f(0x219)[_0xc66f8f(0x2bd)](TextManager[_0xc66f8f(0x2b7)](_0x15949c)),_0x14bdc0='pattern%1'[_0xc66f8f(0x2bd)](Number(_0x487f87)||0x0);this[_0xc66f8f(0x271)][_0x2ac3db][_0x14bdc0][_0xc66f8f(0x41b)]=String(_0x4b9cd5)[_0xc66f8f(0x3bf)]();}}{const _0x5d2226=_0xc66f8f(0x264),_0x4f3f74=_0x3ec81b[_0xc66f8f(0x42b)](_0x264cc0[_0x5d2226]);if(_0x4f3f74)for(const _0x4363d0 of _0x4f3f74){_0x4363d0[_0xc66f8f(0x42b)](_0x264cc0[_0x5d2226]);const _0x4feef2=RegExp['$1'],_0x2798c5=RegExp['$2'],_0x5074c8=RegExp['$3'],_0x336771=_0xc66f8f(0x219)[_0xc66f8f(0x2bd)](TextManager[_0xc66f8f(0x2b7)](_0x4feef2)),_0x51ecfb='pattern%1'[_0xc66f8f(0x2bd)](Number(_0x2798c5)||0x0);this[_0xc66f8f(0x271)][_0x336771][_0x51ecfb][_0xc66f8f(0x2f7)]=Number(_0x5074c8)||0x1;}}{const _0x4fcb9c=_0xc66f8f(0x2be),_0x2963dd=_0x3ec81b[_0xc66f8f(0x42b)](_0x264cc0[_0x4fcb9c]);if(_0x2963dd)for(const _0x14487f of _0x2963dd){_0x14487f[_0xc66f8f(0x42b)](_0x264cc0[_0x4fcb9c]);const _0x1ba296=RegExp['$1'],_0x3c0b48=RegExp['$2'],_0x5bbf02=RegExp['$3'],_0x3924d6=_0xc66f8f(0x219)['format'](TextManager[_0xc66f8f(0x2b7)](_0x1ba296)),_0x3b0416=_0xc66f8f(0x39b)['format'](Number(_0x3c0b48)||0x0);this['_footprintsData'][_0x3924d6][_0x3b0416][_0xc66f8f(0x3dc)]=Number(_0x5bbf02)||0x1;}}{const _0x8ff7de=_0xc66f8f(0x3e6),_0x3ab380=_0x3ec81b['match'](_0x264cc0[_0x8ff7de]);if(_0x3ab380)for(const _0x5a8d88 of _0x3ab380){_0x5a8d88[_0xc66f8f(0x42b)](_0x264cc0[_0x8ff7de]);const _0x2f5cd4=RegExp['$1'],_0x3e2d6d=RegExp['$2'],_0x194d0d=RegExp['$3'],_0x1750b2=_0xc66f8f(0x219)[_0xc66f8f(0x2bd)](TextManager['parseDirectionText'](_0x2f5cd4)),_0x29d5da='pattern%1'[_0xc66f8f(0x2bd)](Number(_0x3e2d6d)||0x0),_0x4fe211=_0x194d0d[_0xc66f8f(0x2a2)](',')[_0xc66f8f(0x269)](_0x1a6d4d=>Number(_0x1a6d4d)||0x0);this[_0xc66f8f(0x271)][_0x1750b2][_0x29d5da]['offsetX']=_0x4fe211[0x0]||0x0,this[_0xc66f8f(0x271)][_0x1750b2][_0x29d5da][_0xc66f8f(0x233)]=_0x4fe211[0x1]||0x0;}}_0x3ec81b['match'](_0x264cc0['SmartJumpNonLandEvent'])&&(this[_0xc66f8f(0x1da)][_0xc66f8f(0x256)]=!![]),_0x3ec81b[_0xc66f8f(0x42b)](_0x264cc0[_0xc66f8f(0x30e)])&&(this[_0xc66f8f(0x1da)]['nonPass']=!![]);},Game_Event['prototype']['footstepsData']=function(){const _0x4ecd80=_0x344336;return this[_0x4ecd80(0x301)]===undefined&&this[_0x4ecd80(0x26c)](),this[_0x4ecd80(0x301)];},Game_Event[_0x344336(0x2c5)][_0x344336(0x3d7)]=function(){const _0x433f78=_0x344336;return this[_0x433f78(0x271)]===undefined&&this['setupMovementEffectsVariables'](),this[_0x433f78(0x271)];},Game_Event['prototype']['notSmartJumpLandable']=function(){const _0x9b195=_0x344336;if(this['_smartJumpRestriction']===undefined)this[_0x9b195(0x26c)]();return this['_smartJumpRestriction']['nonLand'];},Game_Event[_0x344336(0x2c5)][_0x344336(0x3d1)]=function(){const _0x296b5e=_0x344336;if(this[_0x296b5e(0x1da)]===undefined)this[_0x296b5e(0x26c)]();return this['_smartJumpRestriction'][_0x296b5e(0x36a)];},VisuMZ[_0x344336(0x39f)][_0x344336(0x20a)]=Game_Interpreter['prototype'][_0x344336(0x355)],Game_Interpreter['prototype'][_0x344336(0x355)]=function(){const _0x1e2697=_0x344336;if(this[_0x1e2697(0x384)]===_0x1e2697(0x411)){if($gamePlayer[_0x1e2697(0x3f0)]())return!![];this['_waitMode']='';}else{if(this['_waitMode']===_0x1e2697(0x343)){if($gamePlayer[_0x1e2697(0x1fa)]())return!![];this['_waitMode']='';}else{if(this['_waitMode']===_0x1e2697(0x3ee)){if($gamePlayer[_0x1e2697(0x27e)]())return!![];this[_0x1e2697(0x384)]='';}}}return VisuMZ[_0x1e2697(0x39f)][_0x1e2697(0x20a)][_0x1e2697(0x2bb)](this);},VisuMZ['MovementEffects'][_0x344336(0x2d4)]=Sprite_Character[_0x344336(0x2c5)]['initialize'],Sprite_Character['prototype'][_0x344336(0x253)]=function(_0x5643a5){const _0xc51d46=_0x344336;VisuMZ[_0xc51d46(0x39f)]['Sprite_Character_initialize'][_0xc51d46(0x2bb)](this,_0x5643a5),this['createMotionBlurMovementEffectsFilter']();},VisuMZ[_0x344336(0x39f)]['Sprite_Character_update']=Sprite_Character[_0x344336(0x2c5)][_0x344336(0x2cc)],Sprite_Character[_0x344336(0x2c5)][_0x344336(0x2cc)]=function(){const _0x919c2d=_0x344336;VisuMZ[_0x919c2d(0x39f)][_0x919c2d(0x1e2)]['call'](this),this[_0x919c2d(0x1d2)](),this[_0x919c2d(0x300)]();},Sprite_Character[_0x344336(0x2c5)]['createMotionBlurMovementEffectsFilter']=function(){const _0x32583d=_0x344336;if(!PIXI[_0x32583d(0x23a)]['MotionBlurFilter'])return;if(this[_0x32583d(0x3a0)])return;this['_motionBlurMovementEffectsFilter']=new PIXI[(_0x32583d(0x23a))]['MotionBlurFilter'](),this[_0x32583d(0x1dd)]=0x0,this[_0x32583d(0x277)]=0x0,this['filters']=this[_0x32583d(0x23a)]||[],this[_0x32583d(0x23a)][_0x32583d(0x367)](this[_0x32583d(0x3a0)]);},Sprite_Character[_0x344336(0x2c5)]['startMotionBlurEffect']=function(_0x1505d6,_0x28f67b){if(!this['_motionBlurMovementEffectsFilter'])return;this['_motionBlurMovementEffectsDuration']=_0x1505d6,this['_motionBlurMovementEffectsAngleOffset']=_0x28f67b;},Sprite_Character['prototype'][_0x344336(0x3b5)]=function(){const _0x857812=_0x344336;if(!this[_0x857812(0x2e7)])return![];if(this[_0x857812(0x2e7)]!==$gamePlayer&&this[_0x857812(0x2e7)]['constructor']!==Game_Follower)return![];return $gamePlayer[_0x857812(0x27e)]();},Sprite_Character[_0x344336(0x2c5)][_0x344336(0x1d2)]=function(){const _0x300c09=_0x344336;if(!this[_0x300c09(0x3a0)])return;const _0x280e44=this[_0x300c09(0x3a0)];let _0x219888=this['_motionBlurMovementEffectsAngleOffset'];this['isPlayerSmartRushing']()&&(this['_motionBlurMovementEffectsDuration']=Game_Player[_0x300c09(0x3b3)],_0x219888=Game_Player[_0x300c09(0x310)]);if(this[_0x300c09(0x1dd)]-->0x0){let _0x5c470c=VisuMZ['MovementEffects'][_0x300c09(0x422)](this['_character']);_0x5c470c+=_0x219888;const _0x3b280f=this['_motionBlurMovementEffectsDuration'][_0x300c09(0x29e)](0x0,0x1e);_0x280e44[_0x300c09(0x425)]['x']=_0x3b280f*Math[_0x300c09(0x42c)](_0x5c470c*Math['PI']/0xb4),_0x280e44['velocity']['y']=-_0x3b280f*Math[_0x300c09(0x1f1)](_0x5c470c*Math['PI']/0xb4);}else _0x280e44[_0x300c09(0x425)]['x']=0x0,_0x280e44['velocity']['y']=0x0,this['_motionBlurMovementEffectsAngleOffset']=0x0;},VisuMZ[_0x344336(0x39f)]['GetDirAngle']=function(_0x27cb07){const _0x50d5cb=_0x344336;if(!_0x27cb07)return 0x2d;const _0x15f08e=_0x27cb07[_0x50d5cb(0x1d6)]();if(_0x15f08e===0x6)return 0x0;if(_0x15f08e===0x9)return 0x2d;if(_0x15f08e===0x8)return 0x5a;if(_0x15f08e===0x7)return 0x87;if(_0x15f08e===0x4)return 0xb4;if(_0x15f08e===0x1)return 0xe1;if(_0x15f08e===0x2)return 0x10e;if(_0x15f08e===0x3)return 0x13b;return 0x2d;},Sprite_Character[_0x344336(0x2c5)][_0x344336(0x3fd)]=function(){const _0x3efa3b=_0x344336;if(!SceneManager[_0x3efa3b(0x352)])return![];if(!SceneManager['_scene']['_spriteset'])return![];if(this[_0x3efa3b(0x24a)]!==Sprite_Character)return![];if(!this[_0x3efa3b(0x2e7)])return![];if(this[_0x3efa3b(0x2e7)]['_erased'])return![];if(!this[_0x3efa3b(0x1fc)])return![];if(this[_0x3efa3b(0x36b)]<=0x0)return![];if(!this['_frame'])return![];if(!this[_0x3efa3b(0x3c7)])return![];if(this[_0x3efa3b(0x409)][_0x3efa3b(0x2f7)]===this['bitmap'][_0x3efa3b(0x2f7)])return![];if(this['_motionTrailLastRealX']===this[_0x3efa3b(0x2e7)]['_realX']&&this[_0x3efa3b(0x2ff)]===this[_0x3efa3b(0x2e7)][_0x3efa3b(0x415)])return![];return!![];},Sprite_Character[_0x344336(0x2c5)][_0x344336(0x316)]=function(){const _0x52a583=_0x344336;if(!this[_0x52a583(0x2e7)])return![];return this[_0x52a583(0x2e7)][_0x52a583(0x2f8)]()['enabled'];},Sprite_Character['prototype'][_0x344336(0x300)]=function(){const _0x2a5641=_0x344336;if(!this['canShowMotionTrails']())return;if(!this[_0x2a5641(0x316)]())return;const _0x3e4f37=this['_character'][_0x2a5641(0x2f8)](),_0x1a8f4f=_0x3e4f37[_0x2a5641(0x1e3)]||0x1;Graphics['frameCount']%_0x1a8f4f===0x0&&this['createMotionTrailSprite']();},Sprite_Character[_0x344336(0x2c5)][_0x344336(0x2f5)]=function(){const _0x18c598=_0x344336,_0x10c9ec=new Sprite_MapMotionTrail(this,this[_0x18c598(0x2e7)]),_0x188ede=SceneManager[_0x18c598(0x352)]['_spriteset'];_0x188ede['_motionTrailSprites']['push'](_0x10c9ec),this[_0x18c598(0x1fb)]=this[_0x18c598(0x2e7)][_0x18c598(0x2dd)],this[_0x18c598(0x2ff)]=this['_character'][_0x18c598(0x415)];const _0x466751=_0x188ede[_0x18c598(0x313)];_0x466751[_0x18c598(0x32b)](_0x10c9ec);};function Sprite_Footprint(){const _0x332990=_0x344336;this[_0x332990(0x253)](...arguments);}Sprite_Footprint[_0x344336(0x2c5)]=Object[_0x344336(0x337)](Sprite['prototype']),Sprite_Footprint['prototype'][_0x344336(0x24a)]=Sprite_Footprint,Sprite_Footprint[_0x344336(0x2c5)][_0x344336(0x253)]=function(_0x320adb){const _0x380475=_0x344336;this[_0x380475(0x2e7)]=_0x320adb,Sprite[_0x380475(0x2c5)][_0x380475(0x253)]['call'](this),this[_0x380475(0x218)](),this['createBitmap'](),this[_0x380475(0x2f3)](),this[_0x380475(0x28b)](),this[_0x380475(0x33a)]();},Sprite_Footprint[_0x344336(0x2c5)][_0x344336(0x218)]=function(){const _0x118fa7=_0x344336;this[_0x118fa7(0x421)]['x']=0.5,this[_0x118fa7(0x421)]['y']=0x1,this['z']=0x0,this[_0x118fa7(0x2dd)]=this[_0x118fa7(0x2e7)]['_realX'],this[_0x118fa7(0x415)]=this[_0x118fa7(0x2e7)][_0x118fa7(0x415)],this[_0x118fa7(0x3f8)]=this[_0x118fa7(0x2e7)][_0x118fa7(0x3f8)],this[_0x118fa7(0x34c)]=this[_0x118fa7(0x2e7)][_0x118fa7(0x259)](),this[_0x118fa7(0x38a)]=this[_0x118fa7(0x2e7)][_0x118fa7(0x1d5)](),this[_0x118fa7(0x33d)]=0x0,this[_0x118fa7(0x274)]=0x0;if(this['_character'][_0x118fa7(0x24a)]===Game_Follower){const _0x368dc2=VisuMZ['MovementEffects']['Settings']['Footprints'][_0x118fa7(0x2a5)]||0x0;this['_followerOffsetX']=Math[_0x118fa7(0x43a)](_0x368dc2+0x1)+Math[_0x118fa7(0x43a)](_0x368dc2+0x1)-_0x368dc2,this['_followerOffsetY']=Math[_0x118fa7(0x43a)](_0x368dc2+0x1)+Math[_0x118fa7(0x43a)](_0x368dc2+0x1)-_0x368dc2;}},Sprite_Footprint[_0x344336(0x2c5)][_0x344336(0x3d7)]=function(){const _0x236107=_0x344336,_0xb5a60d=_0x236107(0x219)[_0x236107(0x2bd)](this['_direction']),_0x2c29c0=_0x236107(0x39b)[_0x236107(0x2bd)](this[_0x236107(0x34c)]),_0x3dd09a=this[_0x236107(0x2e7)]['footprintsData']();return _0x3dd09a[_0xb5a60d][_0x2c29c0];},Sprite_Footprint[_0x344336(0x2c5)]['createBitmap']=function(){const _0x3cdd90=_0x344336,_0x5f419c=this[_0x3cdd90(0x3d7)]();_0x5f419c[_0x3cdd90(0x41b)]!==''?(this[_0x3cdd90(0x3c7)]=ImageManager[_0x3cdd90(0x216)](_0x5f419c['filename']),this[_0x3cdd90(0x239)]=0x0):(this['bitmap']=ImageManager['generatedFootprintBitmap'](),this[_0x3cdd90(0x34d)]['x']=_0x5f419c[_0x3cdd90(0x2f7)]*0.01,this[_0x3cdd90(0x34d)]['y']=_0x5f419c['height']*0.01,this[_0x3cdd90(0x239)]=0x2);},Sprite_Footprint[_0x344336(0x2c5)]['setupOpacity']=function(){const _0x5c37f5=_0x344336,_0x5d26b6=this[_0x5c37f5(0x2e7)]['x'],_0x34617c=this[_0x5c37f5(0x2e7)]['y'];this['opacity']=$gameMap[_0x5c37f5(0x35e)](_0x5d26b6,_0x34617c);},Sprite_Footprint[_0x344336(0x2c5)][_0x344336(0x28b)]=function(){const _0x3e5672=_0x344336,_0x4ab206=this[_0x3e5672(0x2e7)]['x'],_0x5b8bfb=this[_0x3e5672(0x2e7)]['y'];this[_0x3e5672(0x346)]=$gameMap['footprintDurationAtXy'](_0x4ab206,_0x5b8bfb);},Sprite_Footprint[_0x344336(0x2c5)]['update']=function(){const _0x2b3710=_0x344336;Sprite[_0x2b3710(0x2c5)][_0x2b3710(0x2cc)][_0x2b3710(0x2bb)](this),this['updatePosition']();},Sprite_Footprint['prototype']['updatePosition']=function(){const _0x1039d5=_0x344336,_0x59f6d8=$gameMap['tileWidth'](),_0x37f19f=$gameMap[_0x1039d5(0x273)]();this['x']=Math[_0x1039d5(0x250)]($gameMap['adjustX'](this[_0x1039d5(0x2dd)])*_0x59f6d8+_0x59f6d8/0x2),this['x']+=this[_0x1039d5(0x3d7)]()[_0x1039d5(0x3e1)]+this[_0x1039d5(0x33d)],this['y']=Math['floor']($gameMap[_0x1039d5(0x37f)](this[_0x1039d5(0x415)])*_0x37f19f+_0x37f19f),this['y']+=this[_0x1039d5(0x3d7)]()[_0x1039d5(0x233)]+this[_0x1039d5(0x274)],this['y']-=this[_0x1039d5(0x38a)];};function Sprite_MapMotionTrail(){const _0x5b8163=_0x344336;this[_0x5b8163(0x253)](...arguments);}function _0x58e0(){const _0x5248d6=['Duration','Enabled','Game_Follower_initialize','registerCommand','setupRegionTerrainTagFootprints','executeMove','pan','pattern%1','dir7','ARRAYJSON','straighten','MovementEffects','_motionBlurMovementEffectsFilter','lower\x20left','startMotionBlurEffect','_footstepCooldownDuration','code','DustCloudChangeSettings','isHeightBasedRegion','eventId','lineTo','SmartBlinkDistance','ImmediateCreate','max','dir2','Game_CharacterBase_realMoveSpeed','ARRAYNUM','ApplyFootstepSfxModifiers','_smartRushMotionTrailData','parseTerrainTagBasedFootstepSounds','Footprints','SMART_RUSH_FILTER_DURATION','copyBasicProperties','isPlayerSmartRushing','NonPassableRegions','startShake','11974995czRQNk','sfxPitch','changeTileset','setSmoothCameraSpeed','Scene_Options_maxCommands','_motionTrailExpiredSprites','exit','trim','hexToRgba','duration','isTileSmartBlinkNonLandable','SoundByFrame','smartJumpMotionTrailData','createLowerLayer','isPassableByAnyDirection','bitmap','DustCloudName','FootstepsFrames','Game_CharacterBase_updatePattern','parseTerrainTagBasedFootprints','origin','parseRegionBasedFootstepSounds','STRUCT','RegionFootprintDuration','NoSmartRush','notSmartJumpPassable','updateScrollLinkedPosition','Spriteset_Map_update','TerrainTagFootprintDuration','applyData','TerrainTagFootprintOpacity','footprintsData','AddSmoothCamera','smartBlinkRelocate','Game_Map_changeTileset','adjustX','height','OnSuccessCommonEventID','isJumping','smartBlinkMotionTrailData','isPlayFootstepSoundsByFrame','offsetX','checkEventTriggerHere','1370120ldkKFB','processSmartJumpHeightFactor','actor','FootprintsOffset','makeData','_motionTrailSettings','_targetScaleX','_animationCount','MotionBlurFollower','SmartJump','_dustCloud','smartRush','Game_CharacterBase_increaseSteps','isAnimationPlaying','_smartJumpMode','fill','tileset','list','setupRegionTerrainTagSmartRush','Game_Player_reserveTransfer','DefaultRegions','_direction','SmoothCamera','_dustCloudSprites','32FMveiM','MotionTrailSettingsChangeEvent','canShowMotionTrails','_smartRushSwitches','isTrueMapScrollLinked','random','initRegionTerrainTagFootprints','Frames','_spriteset','SmartRushAntiCrashRegions','setColorTone','canPass','createFootprintBasics','scrolledY','_frame','_motionTrailSprites','SpeedRate','picture','centerY','SMART_BLINK_FILTER_ANGLE_OFFSET','AdjustRect','FootprintRegions','smartBlink','_terrainTagFootstepSounds','_baseSprite','note','_realY','endSmartRush','updateCharacterFrame','isSmartMoveNonViableState','initMovementEffectsVariables','_jumpHeight','filename','AddDustCloud','canSmoothScroll','SMART_BLINK_FILTER_DURATION','SMART_RUSH_SHAKE_SPEED_RATE','startSmartRushCrashShake','anchor','GetDirAngle','canMakeFootprints','allowDiagonal','velocity','getDirMoveSpeedMod','requestAnimation','paintOpacity','page','updateAnimationCount','match','cos','parseRegionBasedSmartRush','Spriteset_Map_updateTilemap','ARRAYEVAL','BattleManager_startBattle','_cached_GeneratedFootprint_Image','STR','measureSmartJumpDistance','moveBySmartRush','isOnLadder','MotionTrailCreateForFollower','54685chFRZh','FootprintsFilename','_baseTexture','randomInt','test','initMovementEffectsMotionTrails','_dustCloudData','_lastSmoothScrollX','_lastSmoothScrollY','canMakeFootstepSounds','isVisible','initRegionTerrainTagSmartBlink','center','isSmartMoving','status','updateMotionBlurEffectFilter','initMovementEffectsFootprintMarks','realMoveSpeed','shiftY','direction','isCollidedWithCharacters','setupRegionTerrainTagSmartJump','regionId','_smartJumpRestriction','_smartRush','createMotionTrailContainers','_motionBlurMovementEffectsDuration','description','_smartRushMode','ConfigKeys','FootprintsName','Sprite_Character_update','delay','initMovementEffectsSmoothCamera','SMART_RUSH_SHAKE_ENABLED','updateSmartRushCooldown','footstepsData','scrolledX','NonFootprintTerrainTags','setup','MotionBlurEvent','MotionTrailCreateForEvent','playSmartBlinkFilterEffect','534QwEANt','getStraightenDiagonalDirection','MotionTrailEnableFollower','sin','MotionBlurPlayer','MovementEffectsOptions','abs','YesFootprintsEvent','hasStepAnime','_smartRushSpeedRate','parameters','isInVehicle','isSmartJumping','_motionTrailLastRealX','visible','setupPageSettings','Game_Event_clearPageSettings','color','isSmartJumpEnabled','updateDustClouds','isSceneMap','enableMotionTrails','pitch','NoSmartBlink','startSmartRushCrashWalkBack','NoRegionFootstepSfx','event','setupMovementEffectsNotetags','Game_Interpreter_updateWaitMode','updateSmoothScrollingContainer','isTileSmartBlinkBreakable','updateTilemap','MotionTrailEnableEvent','bind','SmartBlinkNonLandRegions','ConfigManager_makeData','updateFootprintSprite','setSmoothCameraEnabled','pitchRate','rgba(0,0,0,0)','loadPicture','isSmartRushCrashShake','initMembers','dir%1','updateSmartMovementCooldowns','children','Game_CharacterBase_initMembers','terrainTag','_erased','isSmartBlinkEnabled','SmartRush','hue','_followers','ARRAYSTR','SmartJumpDistance','getLastPluginCommandInterpreter','playFootsteps','RegionFootstepSfx','addMovementEffectsFootstepsCommand','SmartJumpHeightBasedRegions','updateSmartBlinkCooldown','updateFootprints','measureSmartBlinkDistance','addMovementEffectsFootprintsCommand','canShowDustCloud','eventPitchModifier','dir6','75HAuEYG','beginPath','offsetY','canSmartJump','SmartJumpLedgeRegion','setupRegionTerrainTagSmartBlink','dir4','addGeneralOptions','blendMode','filters','FootprintTerrainTags','Index','clone','SmoothCameraName','animationWait','dir8','isSmartRushCrashShakeTile','volume','SmartBlinkNonLandTerrainTags','meetFootprintFrames','clearPageSettings','footprints','_smartBlink','forbidden','_regionFootstepSounds','constructor','IconSet','getSmoothCameraSpeed','_pictureContainer','setDirMoveSpeedMod','roundYWithDirection','floor','name','isLadder','initialize','FrameDashModifier','NonCrashRegions','nonLand','NonPassableTerrainTags','ForceSmooth','pattern','_jumpPeak','canSmartRush','straightenFacedDirection','save','dir9','setDustCloudData','deltaXFrom','updateMotionTrailSprites','_refresh','NonCrashTerrainTags','FootprintsWidth','tone','horz','_wasEventScrolling','NonFootprintRegions','map','MotionTrailSettingsChangeFollower','AddFootprints','setupMovementEffectsVariables','Footsteps','indexOf','setupMovementEffectsCommentTags','isDashing','_footprintsData','footsteps','tileHeight','_followerOffsetY','follower','_dustCloudBitmap','_motionBlurMovementEffectsAngleOffset','FrameWalkModifier','concat','VertWalk','substring','createDustCloudForTarget','canSmartBlink','isSmartRushing','SmartBlinkNonPassTerrainTags','setMotionTrailSettings','distanceVolumeModifier','addColorStop','isMoving','_smartBlinkMotionTrailData','footprintDurationAtXy','_smartBlinkCooldown','fullness','length','createFootprint','locate','setupDuration','setupIconSprite','SMART_RUSH_SHAKE_POWER_RATE','ARRAYFUNC','addMovementEffectsDustCloudCommand','RegionFootprintOpacity','initRegionTerrainTagSmartRush','VertDash','toLowerCase','MotionTrailEnablePlayer','isTileSmartJumpNonPassable','applyMotionTrailData','setWaitMode','FootstepsEnableDisable','Dash','SmartMoveWaitForSmartRush','tileWidth','createDustCloud','meetsSmartJumpHeightConditions','clamp','opacityStart','Settings','down','split','setFootstepSoundsEnabled','parseTerrainTagBasedSmartJump','followerVariance','synchronize','createIconSprite','isTileSmartJumpCompatible','volumeRate','parseTerrainTagBasedSmartRush','scrollDown','initMovementEffectsFootstepSounds','Spriteset_Map_createLowerLayer','_smartJumpMotionTrailData','scrollRight','NoFootprintsEvent','meetFootstepFrames','Game_Event_setupPageSettings','remove','updatePattern','SmoothCameraEnableDisable','isTileSmartJumpNonLandable','parseDirectionText','HorzDash','isTileSmartBlinkNonPassable','setValue','call','AddFootsteps','format','FootprintsHeight','parseRegionBasedSmartBlink','_dirMoveSpeedMod','normal','AngleOffset','_footprintSprites','initMovementEffectsDustCloud','prototype','Sprite_Picture_updatePosition','createFootprintForTarget','canCreateDustCloud','playOnceParallelInterpreter','dustCloudData','FootstepsVolRate','update','CatchAll','applyFootstepSoundTileChanges','AnimationID','Game_Player_updateScroll','Distance','DustCloud','mRadialArcConstant','Sprite_Character_initialize','Window_Options_addGeneralOptions','copyBitmapFrame','maxCommands','NoFootsteps','wholeDuration','enabled','regions','Game_Player_isDashing','_realX','_bushDepth','ConfigManager_applyData','startBattle','right','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','data','Enable','NoSmooth','ForceFootsteps','_character','2621284KVvTND','smoothCamera','isTileSmartHeightJumpRegion','context','_footprints','checkMovementEffectsStringTags','updateScroll','isSmartRushEnabled','FUNC','leader','_smartBlinkDistance','setupOpacity','randomizeAnimationCount','createMotionTrailSprite','attachIconSprite','width','motionTrailData','Walk','followers','sfxVolume','playFootstepSound','parseRegionBasedSmartJump','_targetScaleY','_motionTrailLastRealY','updateMovementEffectsMotionTrails','_footsteps','allowed','radius','drawCircle','_smartBlinkRestrictions','JSON','RegExp','ShakeSpeedRate','updateOpacity','Game_CharacterBase_straighten','initMovementEffectsDirMoveSpeedMod','SMART_RUSH_SHAKE_DURATION','pop','SmartJumpNonPassEvent','areFollowersGathering','SMART_RUSH_FILTER_ANGLE_OFFSET','SmartRushAntiCrashTerrainTags','isSmoothCameraEnabled','_tilemap','HeightBasedRegions','createDustCloudBitmap','areMotionTrailsEnabled','arc','includes','isTransparent','DustCloudEnableDisable','NUM','actorEnabled','soundFrames','smartRushMotionTrailData','updateScrollSmoothCamera','ceil','actorPitchModifier','dir3','isTileSmartJumpBreakable','SmartMoveWaitForSmartJump','isSmartJumpRegionLowestHeight','setupRegionTerrainTagFootstepSounds','vert','updateSmartJumpState','FootstepsPitchRate','ARRAYSTRUCT','addChild','addMovementEffectsOptionCommands','MotionTrail','setDirection','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','FootprintsEnableDisable','Game_CharacterBase_updateAnimationCount','left','SmartBlink','_ready','sfxName','MotionTrailCreateForPlayer','create','distancePitchModifier','SmartDirMoveSpeedMod','updatePosition','setFootprintsEnabled','eventsXy','_followerOffsetX','parseTerrainTagBasedSmartBlink','_opacityRate','isUsingSmoothCamera','removeChild','upper\x20left','smartJump','EVAL','#ffffff','_duration','#000000','Game_Player_moveByInput','upper\x20right','_smartRushCooldown','_eventIconSprite','_pattern','scale','moveByInput','BlurDuration','readFlag','_smartJumpRestrictions','_scene','Game_System_initialize','SmartBlinkNonPassRegions','updateWaitMode','isTileSmartBlinkCompatible','setSmartRushSwitch','initRegionTerrainTagFootstepSounds','_footprintMarksEnabled','ConvertParams','Blow2','reserveTransfer','findTargetSprite','footprintOpacityAtXy','stringify','startScale','startSmartJump','createDustCloudBasics','deltaYFrom','NonLandableTerrainTags','Cooldown','startOpacity','push','NonLandableRegions','straightenDiagonal','nonPass','opacity','_smoothCamera','sfxPan','roundXWithDirection','SmartJumpNonPassRegions','_smartJump','ApplyFollowers','EventID','initRegionTerrainTagSmartJump','SmartMoveWaitForSmartBlink','join','createRadialGradient','scrollUp','parse','updateSmartJumpCooldown','jumpHeight','version','terrainTags','playSe','parseRegionBasedFootprints','adjustY','isValid','_footstepSoundsEnabled','addMovementEffectsSmoothCameraCommand','101822djCTXn','_waitMode','Game_Map_setup','eventEnabled','dustCloud','makeDeepCopy','27676nSllal','_shiftY','_smartJumpCooldown','Options','addCommand','dir1','41110oLcKuR','toUpperCase','increaseSteps','NoSmartJump','DefaultTerrainTags'];_0x58e0=function(){return _0x5248d6;};return _0x58e0();}Sprite_MapMotionTrail[_0x344336(0x2c5)]=Object[_0x344336(0x337)](Sprite[_0x344336(0x2c5)]),Sprite_MapMotionTrail['prototype']['constructor']=Sprite_MapMotionTrail,Sprite_MapMotionTrail[_0x344336(0x2c5)][_0x344336(0x253)]=function(_0x581310,_0x4939d1){const _0x409573=_0x344336;this[_0x409573(0x413)]=_0x581310,this[_0x409573(0x2e7)]=_0x4939d1,Sprite[_0x409573(0x2c5)][_0x409573(0x253)][_0x409573(0x2bb)](this),this['copyBasicProperties'](),this[_0x409573(0x2d6)](),this[_0x409573(0x296)](),this[_0x409573(0x2f6)](),this[_0x409573(0x334)]=!![];},Sprite_MapMotionTrail[_0x344336(0x2c5)][_0x344336(0x3b4)]=function(){const _0x59915c=_0x344336,_0x6e36fb=$gameMap[_0x59915c(0x273)](),_0x469b18=(_0x6e36fb-0x1)/_0x6e36fb;this[_0x59915c(0x421)]['x']=this['_baseSprite'][_0x59915c(0x421)]['x'],this['anchor']['y']=this[_0x59915c(0x413)]['anchor']['y'],this[_0x59915c(0x36b)]=this[_0x59915c(0x413)][_0x59915c(0x36b)],this[_0x59915c(0x34d)]['x']=this[_0x59915c(0x413)][_0x59915c(0x34d)]['x'],this[_0x59915c(0x34d)]['y']=this[_0x59915c(0x413)][_0x59915c(0x34d)]['y'],this['x']=this['_baseSprite']['x'],this['y']=this[_0x59915c(0x413)]['y'],this['z']=this[_0x59915c(0x413)]['z'],this[_0x59915c(0x2dd)]=this['_character']['_realX'],this[_0x59915c(0x415)]=this['_character']['_realY'],this[_0x59915c(0x38a)]=this[_0x59915c(0x2e7)][_0x59915c(0x1d5)](),this[_0x59915c(0x41a)]=this[_0x59915c(0x2e7)][_0x59915c(0x37a)]();},Sprite_MapMotionTrail['prototype']['copyBitmapFrame']=function(){const _0x42f2ff=_0x344336;this[_0x42f2ff(0x3c7)]=this[_0x42f2ff(0x413)][_0x42f2ff(0x3c7)];const _0x1c0012=this[_0x42f2ff(0x413)][_0x42f2ff(0x2de)];this[_0x42f2ff(0x413)][_0x42f2ff(0x2de)]=0x0,this[_0x42f2ff(0x413)][_0x42f2ff(0x417)](),this[_0x42f2ff(0x409)]=JSON[_0x42f2ff(0x378)](JSON['stringify'](this[_0x42f2ff(0x413)][_0x42f2ff(0x409)])),this[_0x42f2ff(0x413)]['_bushDepth']=_0x1c0012,this[_0x42f2ff(0x413)][_0x42f2ff(0x417)](),this['_refresh']();},Sprite_MapMotionTrail['prototype'][_0x344336(0x2f8)]=function(){const _0x8afa88=_0x344336;return this[_0x8afa88(0x2e7)][_0x8afa88(0x2f8)]();},Sprite_MapMotionTrail['prototype'][_0x344336(0x296)]=function(){const _0x32bb71=_0x344336,_0x111f84=this[_0x32bb71(0x2f8)]();this['_duration']=_0x111f84[_0x32bb71(0x3c1)]||0x1,this['setHue'](_0x111f84[_0x32bb71(0x221)]),this[_0x32bb71(0x405)](_0x111f84[_0x32bb71(0x265)]),this[_0x32bb71(0x33f)]=(_0x111f84[_0x32bb71(0x29f)]/0xff)['clamp'](0x0,0x1),this[_0x32bb71(0x36b)]=(this[_0x32bb71(0x36b)]*this[_0x32bb71(0x33f)])[_0x32bb71(0x29e)](0x0,0xff);},Sprite_MapMotionTrail[_0x344336(0x2c5)]['attachIconSprite']=function(){const _0x462d3a=_0x344336;this[_0x462d3a(0x2a7)](),this[_0x462d3a(0x28c)]();},Sprite_MapMotionTrail[_0x344336(0x2c5)][_0x344336(0x2a7)]=function(){const _0x4a776e=_0x344336;this[_0x4a776e(0x34b)]=new Sprite(),this[_0x4a776e(0x34b)][_0x4a776e(0x3c7)]=ImageManager['loadSystem'](_0x4a776e(0x24b)),this[_0x4a776e(0x34b)][_0x4a776e(0x3c7)]['smooth']=![],this[_0x4a776e(0x34b)]['anchor']['x']=0.5,this[_0x4a776e(0x34b)][_0x4a776e(0x421)]['y']=0x1,this[_0x4a776e(0x32b)](this[_0x4a776e(0x34b)]);},Sprite_MapMotionTrail[_0x344336(0x2c5)]['setupIconSprite']=function(){const _0x566a3c=_0x344336,_0x222533=this[_0x566a3c(0x34b)],_0x49f195=this[_0x566a3c(0x413)]['_eventIconSprite'];_0x222533['x']=_0x49f195['x'],_0x222533['y']=_0x49f195['y'],_0x222533['_frame']=JSON[_0x566a3c(0x378)](JSON[_0x566a3c(0x35f)](_0x49f195[_0x566a3c(0x409)])),_0x222533[_0x566a3c(0x262)]();},Sprite_MapMotionTrail[_0x344336(0x2c5)][_0x344336(0x2cc)]=function(){const _0x307869=_0x344336;Sprite['prototype'][_0x307869(0x2cc)][_0x307869(0x2bb)](this),this[_0x307869(0x334)]&&(this[_0x307869(0x309)](),this[_0x307869(0x33a)]());},Sprite_MapMotionTrail[_0x344336(0x2c5)][_0x344336(0x309)]=function(){const _0x25e995=_0x344336;if(this['_duration']<=0x0)return;const _0x2d4eba=this[_0x25e995(0x346)];this[_0x25e995(0x36b)]=(this['opacity']*(_0x2d4eba-0x1)+0x0)/_0x2d4eba,this['_duration']--,this[_0x25e995(0x346)]<=0x0&&(this[_0x25e995(0x36b)]=0x0);},Sprite_MapMotionTrail[_0x344336(0x2c5)][_0x344336(0x33a)]=function(){const _0x12390f=_0x344336,_0x4888fd=$gameMap[_0x12390f(0x29b)](),_0xf418fe=$gameMap[_0x12390f(0x273)]();this['x']=Math[_0x12390f(0x250)]($gameMap[_0x12390f(0x3db)](this[_0x12390f(0x2dd)])*_0x4888fd+_0x4888fd/0x2),this['y']=Math[_0x12390f(0x250)]($gameMap[_0x12390f(0x37f)](this[_0x12390f(0x415)])*_0xf418fe+_0xf418fe),this['y']-=this[_0x12390f(0x38a)]+this[_0x12390f(0x41a)]+0.001;},VisuMZ[_0x344336(0x39f)][_0x344336(0x2ad)]=Spriteset_Map['prototype'][_0x344336(0x3c5)],Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x3c5)]=function(){const _0x40b323=_0x344336;VisuMZ[_0x40b323(0x39f)]['Spriteset_Map_createLowerLayer'][_0x40b323(0x2bb)](this),this['createDustCloudBasics'](),this[_0x40b323(0x407)](),this[_0x40b323(0x1dc)]();},VisuMZ[_0x344336(0x39f)][_0x344336(0x3d3)]=Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x2cc)],Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x2cc)]=function(){const _0x3b0022=_0x344336;VisuMZ[_0x3b0022(0x39f)]['Spriteset_Map_update'][_0x3b0022(0x2bb)](this),this[_0x3b0022(0x201)](),this[_0x3b0022(0x22b)](),this[_0x3b0022(0x261)]();},VisuMZ[_0x344336(0x39f)]['Spriteset_Map_updateTilemap']=Spriteset_Map['prototype'][_0x344336(0x20d)],Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x20d)]=function(){const _0x1934bc=_0x344336;VisuMZ[_0x1934bc(0x39f)][_0x1934bc(0x42e)][_0x1934bc(0x2bb)](this),this['_tilemap'][_0x1934bc(0x3cc)]['x']=Math['ceil'](this[_0x1934bc(0x313)][_0x1934bc(0x3cc)]['x']),this['_tilemap'][_0x1934bc(0x3cc)]['y']=Math[_0x1934bc(0x320)](this[_0x1934bc(0x313)]['origin']['y']),this[_0x1934bc(0x20b)]();},Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x20b)]=function(){const _0x1ec03b=_0x344336;if(!this[_0x1ec03b(0x24d)])return;const _0x30eba3=this['_pictureContainer'][_0x1ec03b(0x21b)];for(const _0x1eb0f2 of _0x30eba3){if(!_0x1eb0f2)continue;if(!_0x1eb0f2[_0x1ec03b(0x40c)]())continue;if(!_0x1eb0f2[_0x1ec03b(0x40c)]()[_0x1ec03b(0x3ff)]())continue;_0x1eb0f2[_0x1ec03b(0x33a)]();}},VisuMZ[_0x344336(0x39f)][_0x344336(0x2c6)]=Sprite_Picture[_0x344336(0x2c5)]['updatePosition'],Sprite_Picture[_0x344336(0x2c5)][_0x344336(0x33a)]=function(){const _0x37dccf=_0x344336;VisuMZ[_0x37dccf(0x39f)][_0x37dccf(0x2c6)][_0x37dccf(0x2bb)](this),this['picture']()[_0x37dccf(0x3ff)]()&&this[_0x37dccf(0x3d2)]();},Sprite_Picture['prototype'][_0x344336(0x3d2)]=function(){const _0x13d24e=_0x344336;if(!SceneManager['_scene'])return;if(!SceneManager[_0x13d24e(0x352)]['_spriteset'])return;const _0x70016f=SceneManager[_0x13d24e(0x352)][_0x13d24e(0x403)][_0x13d24e(0x313)];if(!_0x70016f)return;this['x']-=Math[_0x13d24e(0x250)](_0x70016f[_0x13d24e(0x3cc)]['x']),this['y']-=Math['floor'](_0x70016f[_0x13d24e(0x3cc)]['y']);},Spriteset_Map[_0x344336(0x2c5)]['createDustCloudBasics']=function(){const _0x3929c3=_0x344336;this['_dustCloudSprites']=this[_0x3929c3(0x3fa)]||[];const _0x387eff=$gameSystem[_0x3929c3(0x2ca)]();this[_0x3929c3(0x1c9)]=JSON[_0x3929c3(0x378)](JSON[_0x3929c3(0x35f)](_0x387eff)),this[_0x3929c3(0x315)]();},Spriteset_Map['prototype']['checkDustCloudChanges']=function(){const _0x9c7ceb=_0x344336;if(!this['_dustCloudData'])this[_0x9c7ceb(0x362)]();else{const _0xfb22a9=$gameSystem[_0x9c7ceb(0x2ca)]();JSON[_0x9c7ceb(0x35f)](this[_0x9c7ceb(0x1c9)])!==JSON[_0x9c7ceb(0x35f)](_0xfb22a9)&&this['createDustCloudBasics']();}},Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x315)]=function(){const _0x3f51ff=_0x344336,_0x5be32=this[_0x3f51ff(0x1c9)];if(_0x5be32[_0x3f51ff(0x41b)]!=='')this[_0x3f51ff(0x276)]=ImageManager[_0x3f51ff(0x216)](_0x5be32['filename']);else{const _0x47873c=_0x5be32[_0x3f51ff(0x303)],_0x5aec3d=_0x47873c*0x2,_0x4e7581=new Bitmap(_0x5aec3d,_0x5aec3d),_0x3de9f5=_0x5be32[_0x3f51ff(0x1ff)],_0x347823=_0x5be32['fullness'];_0x4e7581['drawDustCloud'](_0x47873c,_0x3de9f5,_0x347823),this['_dustCloudBitmap']=_0x4e7581;}},Bitmap[_0x344336(0x2c5)]['drawDustCloud']=function(_0x4ce0d9,_0x5c90aa,_0x7a4961){const _0x385264=_0x344336;_0x7a4961=_0x7a4961[_0x385264(0x29e)](0x0,0x1);const _0x39351d=this[_0x385264(0x2eb)],_0x5390e2=0x168*(Math['PI']/0xb4),_0x64f9e=_0x4ce0d9*0x2,_0x13fa66=_0x39351d[_0x385264(0x376)](_0x4ce0d9,_0x4ce0d9,0x0,_0x4ce0d9,_0x4ce0d9,_0x4ce0d9),_0xe0f25a=ColorManager['hexToRgba'](_0x5c90aa,0x1),_0xc7a657=ColorManager[_0x385264(0x3c0)](_0x5c90aa,0x0);_0x13fa66[_0x385264(0x282)](0x0,_0xe0f25a),_0x13fa66['addColorStop'](_0x7a4961,_0xe0f25a),_0x13fa66[_0x385264(0x282)](0x1,_0xc7a657),_0x39351d[_0x385264(0x25d)](),_0x39351d['fillStyle']=_0x13fa66,_0x39351d[_0x385264(0x232)](),_0x39351d['moveTo'](_0x4ce0d9,_0x4ce0d9),_0x39351d['lineTo'](_0x64f9e,_0x4ce0d9),_0x39351d[_0x385264(0x317)](_0x4ce0d9,_0x4ce0d9,_0x4ce0d9,0x0,_0x5390e2),_0x39351d[_0x385264(0x3a8)](_0x4ce0d9,_0x4ce0d9),_0x39351d[_0x385264(0x3f2)](),_0x39351d['restore'](),this[_0x385264(0x439)][_0x385264(0x2cc)]();},ColorManager[_0x344336(0x3c0)]=function(_0x198c13,_0x1cb62f){const _0x3956dc=_0x344336;let _0x909899='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x3956dc(0x43b)](_0x198c13)){_0x909899=_0x198c13[_0x3956dc(0x27b)](0x1)[_0x3956dc(0x2a2)]('');_0x909899[_0x3956dc(0x288)]===0x3&&(_0x909899=[_0x909899[0x0],_0x909899[0x0],_0x909899[0x1],_0x909899[0x1],_0x909899[0x2],_0x909899[0x2]]);while(_0x909899['length']>0x6)_0x909899[_0x3956dc(0x30d)]();return _0x909899='0x'+_0x909899[_0x3956dc(0x375)](''),'rgba('+[(_0x909899>>0x10&0xff)[_0x3956dc(0x29e)](0x0,0xff),(_0x909899>>0x8&0xff)[_0x3956dc(0x29e)](0x0,0xff),(_0x909899&0xff)[_0x3956dc(0x29e)](0x0,0xff)][_0x3956dc(0x375)](',')+','+_0x1cb62f[_0x3956dc(0x29e)](0x0,0x1)+')';}else return _0x3956dc(0x215);},Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x27c)]=function(_0x105017){const _0x41e2f9=_0x344336,_0x443a7e=this[_0x41e2f9(0x35d)](_0x105017);if(!_0x443a7e)return;this['checkDustCloudChanges']();const _0x267a14=this[_0x41e2f9(0x1c9)],_0x2def6b=_0x267a14['startScale'],_0x13335d=new Sprite();_0x13335d[_0x41e2f9(0x3c7)]=this[_0x41e2f9(0x276)],_0x13335d['opacity']=_0x267a14[_0x41e2f9(0x366)],_0x13335d[_0x41e2f9(0x346)]=_0x267a14[_0x41e2f9(0x2d9)],_0x13335d[_0x41e2f9(0x421)]['x']=0.5,_0x13335d['anchor']['y']=0x1,_0x13335d['scale']['x']=(Math[_0x41e2f9(0x400)]()*_0x2def6b)[_0x41e2f9(0x29e)](0.01,0.99),_0x13335d[_0x41e2f9(0x34d)]['y']=(Math[_0x41e2f9(0x400)]()*_0x2def6b)[_0x41e2f9(0x29e)](0.01,0.99),_0x13335d[_0x41e2f9(0x3e9)]=0x1-(Math[_0x41e2f9(0x400)]()*_0x2def6b*0x2)[_0x41e2f9(0x29e)](0x0,0.8),_0x13335d[_0x41e2f9(0x2fe)]=0x1-(Math[_0x41e2f9(0x400)]()*_0x2def6b*0x2)['clamp'](0x0,0.8);const _0x570aac=0.25,_0xce19ab=0.05;_0x13335d['_realX']=_0x105017[_0x41e2f9(0x2dd)]+Math['random']()*_0x570aac+Math[_0x41e2f9(0x400)]()*_0x570aac-_0x570aac,_0x13335d['_realY']=_0x105017['_realY']+Math[_0x41e2f9(0x400)]()*_0xce19ab+Math[_0x41e2f9(0x400)]()*_0xce19ab-_0xce19ab,_0x13335d['z']=0x3,this[_0x41e2f9(0x3fa)]['push'](_0x13335d),this[_0x41e2f9(0x313)][_0x41e2f9(0x32b)](_0x13335d);},Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x201)]=function(){const _0x169bc2=_0x344336,_0x15ef0b=[];for(const _0x423011 of this[_0x169bc2(0x3fa)]){if(!_0x423011)continue;this['updateDustCloudSprite'](_0x423011);if(_0x423011['_duration']<=0x0)_0x15ef0b[_0x169bc2(0x367)](_0x423011);}for(const _0x9c8ef9 of _0x15ef0b){this[_0x169bc2(0x313)]['removeChild'](_0x9c8ef9),this[_0x169bc2(0x3fa)][_0x169bc2(0x2b3)](_0x9c8ef9);}},Spriteset_Map['prototype']['updateDustCloudSprite']=function(_0x175db3){const _0x1ffb4d=_0x344336,_0x37ee44=_0x175db3[_0x1ffb4d(0x346)],_0x3f7e70=$gameMap[_0x1ffb4d(0x29b)](),_0x337622=$gameMap['tileHeight']();_0x175db3['x']=Math['floor']($gameMap[_0x1ffb4d(0x3db)](_0x175db3[_0x1ffb4d(0x2dd)])*_0x3f7e70+_0x3f7e70/0x2),_0x175db3['y']=Math['floor']($gameMap[_0x1ffb4d(0x37f)](_0x175db3['_realY'])*_0x337622+_0x337622),_0x175db3[_0x1ffb4d(0x34d)]['x']=(_0x175db3[_0x1ffb4d(0x34d)]['x']*(_0x37ee44-0x1)+_0x175db3[_0x1ffb4d(0x3e9)])/_0x37ee44,_0x175db3[_0x1ffb4d(0x34d)]['y']=(_0x175db3[_0x1ffb4d(0x34d)]['y']*(_0x37ee44-0x1)+_0x175db3[_0x1ffb4d(0x2fe)])/_0x37ee44,_0x175db3[_0x1ffb4d(0x36b)]=_0x175db3[_0x1ffb4d(0x36b)]*(_0x37ee44-0x1)/_0x37ee44,_0x175db3[_0x1ffb4d(0x346)]--;},Spriteset_Map[_0x344336(0x2c5)]['createFootprintBasics']=function(){const _0x4c47c4=_0x344336;this[_0x4c47c4(0x2c3)]=this['_footprintSprites']||[];},Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x2c7)]=function(_0x378ffc){const _0x4c19b0=_0x344336,_0x32e83f=this[_0x4c19b0(0x35d)](_0x378ffc);if(!_0x32e83f)return;const _0x5cf5c9=new Sprite_Footprint(_0x378ffc);this[_0x4c19b0(0x2c3)]['push'](_0x5cf5c9),this[_0x4c19b0(0x313)][_0x4c19b0(0x32b)](_0x5cf5c9);},Spriteset_Map['prototype']['updateFootprints']=function(){const _0x5aa86a=_0x344336,_0x36531a=[];for(const _0x39de52 of this[_0x5aa86a(0x2c3)]){if(!_0x39de52)continue;this[_0x5aa86a(0x212)](_0x39de52);if(_0x39de52['_duration']<=0x0)_0x36531a[_0x5aa86a(0x367)](_0x39de52);}for(const _0x39f897 of _0x36531a){this[_0x5aa86a(0x313)][_0x5aa86a(0x341)](_0x39f897),this[_0x5aa86a(0x2c3)][_0x5aa86a(0x2b3)](_0x39f897);}},Spriteset_Map[_0x344336(0x2c5)]['updateFootprintSprite']=function(_0x5a27e4){const _0xfb9c0c=_0x344336,_0x1b533a=_0x5a27e4[_0xfb9c0c(0x346)];_0x5a27e4[_0xfb9c0c(0x36b)]=_0x5a27e4['opacity']*(_0x1b533a-0x1)/_0x1b533a,_0x5a27e4[_0xfb9c0c(0x346)]--;},Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x1dc)]=function(){const _0x1a6f3d=_0x344336;this[_0x1a6f3d(0x40a)]=[],this[_0x1a6f3d(0x3bd)]=[];},Spriteset_Map[_0x344336(0x2c5)][_0x344336(0x261)]=function(){const _0x560ca1=_0x344336;if(!this[_0x560ca1(0x40a)])return;for(const _0x1f0305 of this[_0x560ca1(0x3bd)]){if(!_0x1f0305)continue;this['_motionTrailExpiredSprites'][_0x560ca1(0x2b3)](_0x1f0305),this['_tilemap'][_0x560ca1(0x341)](_0x1f0305);}for(const _0x2219bd of this[_0x560ca1(0x40a)]){if(!_0x2219bd)continue;if(_0x2219bd[_0x560ca1(0x36b)]>0x0)continue;this[_0x560ca1(0x40a)][_0x560ca1(0x2b3)](_0x2219bd),this[_0x560ca1(0x3bd)][_0x560ca1(0x367)](_0x2219bd);}};