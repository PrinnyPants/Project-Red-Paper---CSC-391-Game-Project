//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.47;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.47] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * <Hide Player>
 * <Show Player>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player sprite. This is so you don't need to
 *   manually turn the setting on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - If the player sprite is hidden, so are the player's followers.
 * - If the player sprite is visible, the player's followers will still depend
 *   on their settings.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * <Hide Followers>
 * <Show Followers>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player's followers. This is so you don't
 *   need to manually turn them on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Radius: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Radius: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 *   - If '0' is used for the Map ID, reference the current map.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Custom Z: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number value to determine the event sprite's Z value
 *   relative to the tilemap.
 * - For reference from rmmz_core.js:
 *   - 0 : Lower tiles
 *   - 1 : Lower characters
 *   - 3 : Normal characters
 *   - 4 : Upper tiles
 *   - 5 : Upper characters
 *   - 6 : Airship shadow
 *   - 7 : Balloon
 *   - 8 : Animation
 *   - 9 : Destination
 * - You can use numbers below 0 and above 9.
 *   - Values under 0 go below the tilemap.
 *   - Values above 9 go above everything else on the tilemap.
 *   - These values do NOT go below or above other screen objects that are
 *     NOT attached to the tilemap layer such as parallaxes or weather or
 *     windows because that's simply not how z-axis work with sprite layers.
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * 
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Mirror Sprite>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event sprite's visual appearance is mirrored.
 * 
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Synch Distance Opacity: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity of the event based on the distance between it and its
 *   move synched target. Closer means more opaque. Further away means more
 *   transparent.
 * - Replace 'x' with a number representing the opacity change per pixel
 *   distance away. 'x' can use decimal values like 1.05 and 1.5.
 * 
 * ---
 * 
 * <Picture Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Applies a picture graphic from the /img/pictures/ folder of your project.
 * - This graphic will be on top of the character sprite but below the event
 *   icon sprite.
 *   - The picture priority will be the same as the event's priority.
 *   - If it is "below characters", the player can walk on top of it.
 *   - If it is "above characters", the player will behind it.
 *   - If it is "same as characters", the priority will be based on the
 *     current relative Y position. This also means, if the picture is big
 *     enough, it can clip into the top of tree tiles and such.
 * - Replace 'filename' with a filename from the game project's /img/pictures/
 *   folder. This is case sensitive. Do NOT include the file extension.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Max Size: x>
 * <Picture Scale: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - If the "Max Size" or "Scale" supplementary notetags are used, the picture
 *   graphic will be scaled proportionally to fit either the exact pixel size
 *   for "Max Size" or the "Scale" ratio.
 *   - Both the "Max Size" and "Scale" notetags require the "Filename" notetag.
 * - Replace 'x' with a number value representing the exact pixel size for the
 *   "Max Size" notetag.
 * - Replace 'y' with a number value representing the scale on which to shrink
 *   or enlarge the picture. 100% is normal size. 50% is half size. 200% is
 *   double size.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Picture Offset X: +x>
 * <Picture Offset X: -x>
 *
 * <Picture Offset Y: +x>
 * <Picture Offset Y: -x>
 *
 * <Picture Offset: +x, +y>
 * <Picture Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Offsets the X and Y position of the event picture relative to the event
 *   sprite's own position.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Wait Frames: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Requires VisuMZ_4_AnimatedPictures!
 * - "Wait Frames" is used with VisuMZ's Animated Pictures plugin. This
 *   determines the delay inbetween frame changes.
 * - Replace 'x' with a number representing the amount of frames to wait
 *   inbetween frame changes.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Playtest>
 * 
 * - Used for: Event Notetags.
 * - This does NOT work when it's in the Event Page Comment Tags.
 * - If this notetag is found in the event's notebox (NOT comments), then the
 *   event will only appear during a playtest session. It will not appear in a
 *   deployed game where the playtest flag is not on.
 * 
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
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
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Activation
 * - Runs the page of a different event remotely.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change
 * - Change the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Data Plugin Commands ===
 * 
 * ---
 * 
 * Self Data: Reset All
 * - Reset the Self Switch and Self Variable data of all events within the
 *   specified map.
 * 
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This refers to the original position's X/Y on the map.
 * - The event will turn and face the tile that is its original X/Y location.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Sprite Based?:
 *   - Use sprite-based labels instead of legacy-window version.
 *   - Legacy-window version will not be supported in future.
 *   - Sprite-based labels are more memory efficient and work better
 *     compatibility-wise.
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Dash on Ladder?
 *   - Allow dashing while on a ladder or rope?
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 *   Shift Y:
 *   - How many pixels should non-tile characters be shifted by?
 *   - Negative: up. Positive: down.
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 * 
 * Wall Bump
 * 
 *   Enable?:
 *   - Enable the sound effect to be played when bumping into a wall?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
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
 * Version 1.47: November 10, 2022
 * * Feature Update!
 * ** If "Follower: Set Global Chase" is set to false, followers will no longer
 *    jump towards the player location when the player jumps. This does NOT
 *    apply to gather or location changing players. Followers will still have
 *    to synchronize their positions there regardless in order to maintain
 *    consistency. Update made by Olivia.
 * 
 * Version 1.46: September 29, 2022
 * * Bug Fixes!
 * ** Altered the self switch auto-reset timing to reduce errors. Fix by Arisu.
 * * Feature Update!
 * ** Added self-movement prevention whenever scenes are deactivated. Update
 *    made by Arisu.
 * 
 * Version 1.45: August 18, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused event labels with variables from refreshing
 *    properly. Fix made by Arisu.
 * 
 * Version 1.44: July 21, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused <Exit Reset Self Data> notetag to not work.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Diagonal pathfinding is now disabled when there are too many events on a
 *    map, causing extra collission checks. This value is set to 100 for the
 *    time being until we can figure out a better way to calculate diagonal
 *    pathfinding. Update made by Irina.
 * 
 * Version 1.43: July 14, 2022
 * * Bug Fixes!
 * ** Move to Player for events should no longer cause hang ups. Fix by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added caching function for pathfinding when using touch movement for a
 *    smoother experience. When touch movement is held down, pathfinding will
 *    utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Update made by Arisu.
 * * New Features!
 * ** New notetag added by Arisu:
 * *** <Playtest>
 * **** If this notetag is found in the event's notebox (NOT comments), then
 *      the event will only appear during a playtest session. It will not
 *      appear in a deployed game where the playtest flag is not on.
 * 
 * Version 1.42: June 23, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added to <Copy Event: x, y> notetag help:
 * *** - If '0' is used for the Map ID, reference the current map.
 * * Feature Update!
 * ** Default MZ behavior would have "below characters" trigger events with
 *    only comments lock out facing "same as characters" trigger events. This
 *    is now bypassed. Update made by Arisu.
 * ** The <Copy Event: mapID, eventID> notetags now allow usage of '0' for the
 *    mapID to reference the current map. Update made by Arisu.
 * ** <Save Event Location> should now work more efficiently. Update by Arisu.
 * ** Dashing animations for followers will no longer look weird after having
 *    gathered up and then proceeding to dash. Update made by Irina.
 * * New Features!
 * ** New event notetag added by Arisu:
 * *** <Exit Reset Self Data>
 * **** When the player leaves the current map, all Self Switches and Self
 *      Variables related to this event will be reset.
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Self Data: Reset All
 * **** Reset the Self Switch and Self Variable data of all events within the
 *      specified map.
 * ** New Plugin Parameter added by Arisu and sponsored by Anon:
 * *** Plugin Params > Movement Settings > Dash > Dash on Ladder?
 * **** Allow dashing while on a ladder or rope?
 * 
 * Version 1.41: June 1, 2022
 * * Bug Fixes!
 * ** Parallel Process Common Events above 1000 should no longer crash the
 *    game. Bug fixed by Irina.
 * 
 * Version 1.40: May 19, 2022
 * * Bug Fixes!
 * ** Sprite Event Labels with distance properties will now work properly
 *    when changing from a non-met page condition to a met page condition.
 *    Fix made by Arisu.
 * 
 * Version 1.39: May 5, 2022
 * * Bug Fixes!
 * ** Save event location should now work properly with Set Event Location
 *    command. Fix made by Arisu.
 * ** Sprite Event Labels with distance properties will no longer be visible
 *    when constantly entering/exiting the Main Menu. Fix made by Arisu.
 * 
 * Version 1.38: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Movement Settings > Event Movement > Shift Y
 * **** How many pixels should non-tile characters be shifted by?
 * ** New Notetags added by Arisu and sponsored by Archeia:
 * *** <Picture Filename: filename>
 * **** applies a picture graphic from the /img/pictures/ folder of your
 *      game project.
 * **** This graphic will be on top of the character sprite but below the event
 *      icon sprite.
 * **** The picture priority will be the same as the event's priority. If it is
 *      "below characters", the player can walk on top of it. If it is "above
 *      characters", the player will behind it. If it is "same as characters",
 *      the priority will be based on the current relative Y position.
 * *** <Picture Max Size: x>
 * *** <Picture Scale: y%>
 * **** If the "Max Size" or "Scale" supplementary notetags are used, the
 *      picture graphic will be scaled proportionally to fit either the exact
 *      pixel size for "Max Size" or the "Scale" ratio.
 * *** <Picture Offset: +x, +y>
 * *** <Picture Offset: -x, -y>
 * **** Offsets the X and Y position of the event picture relative to the event
 *      sprite's own position.
 * *** <Picture Wait Frames: x>
 * **** Requires VisuMZ_4_AnimatedPictures! "Wait Frames" is used with VisuMZ's
 *      Animated Pictures plugin. This determines the delay inbetween
 *      frame changes.
 * 
 * Version 1.37: March 24, 2022
 * * Documentation Update!
 * ** Added extra clarity to "Turn to Home" Movement Command.
 * *** This refers to the original position's X/Y on the map.
 * *** The event will turn and face the tile that is its original X/Y location.
 * 
 * Version 1.36: March 17, 2022
 * * Bug Fixes!
 * ** "Turn To Home" movement command now properly faces the home position.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.35: March 3, 2022
 * * IMPORTANT! Compatibility Update!
 * ** Compatibility Update with RPG Maker MZ 1.4.4.
 * *** For some reason this update broke any saves made before 1.4.4 was
 *     updated and they cannot be loaded. The only way saves would load is if
 *     you made a safe after 1.4.4 was done. This should be fixed and saves
 *     made with 1.4.3 and before should now be working. Update made by Irina.
 * 
 * Version 1.34: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** Arisu has created new event notetag/comment tags:
 * *** <Custom Z: x>
 * **** Replace 'x' with a number value to determine the event sprite's Z value
 *      relative to the tilemap.
 * **** View the helpfile for more information.
 * *** <Mirror Sprite>
 * **** The event sprite's visual appearance is mirrored.
 * *** <Move Synch Distance Opacity: x>
 * **** Changes the opacity of the event based on the distance between it and
 *      its move synched target. Closer means more opaque. Further away means
 *      more transparent.
 * ** Irina has created a more memory efficient version of Event Labels.
 * *** Plugin Parameters > Event Label Settings > Sprite Based?
 * **** Use sprite-based labels instead of legacy-window version.
 * **** Legacy-window version will not be supported in future.
 * 
 * Version 1.33: February 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu!
 * *** <Hide Player>
 * *** <Show Player>
 * **** Map Notetag. Forcefully hides or shows the player sprite. This is so
 *      you don't need to manually turn the setting on/off each time you enter
 *      a specific map.
 * *** <Hide Followers>
 * *** <Show Followers>
 * **** Map Notetag. Forcefully hides or shows the player's followers. This is
 *      so you don't need to manually turn them on/off each time you enter a
 *      specific map.
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Self Variable changes from custom move routes should no longer cause
 *    crashes. Fix made by Arisu.
 * ** Self Switch custom move route toggles should now work properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Better shadow tracking algorithm to remove any shadow twitching.
 *    Update made by Yanfly.
 * 
 * Version 1.31: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_AutoMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CallEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Activation
 * @desc Runs the page of a different event remotely.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DashEnable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change
 * @desc Change the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLabel
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLocation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventTimer
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MorphEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerMovement
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfData
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfDataResetAll
 * @text Self Data: Reset All
 * @desc Reset the Self Switch and Self Variable data of all events
 * within the specified map.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SpawnEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
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
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
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
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param SpriteBased:eval
 * @text Sprite Based?
 * @type boolean
 * @on Sprite-Based
 * @off Legacy-Window
 * @desc Use sprite-based labels instead of legacy-window version.
 * Legacy-window version will not be supported in future.
 * @default true
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param DashOnLadder:eval
 * @text Dash On Ladder?
 * @parent Dash
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow dashing while on a ladder or rope?
 * @default false
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param ShiftY:num
 * @text Shift Y
 * @parent EventMove
 * @desc How many pixels should non-tile characters be shifted by?
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
//=============================================================================

const _0x4c5915=_0x39f0;(function(_0x1a5975,_0x1c18f9){const _0x361aaf=_0x39f0,_0x4a4181=_0x1a5975();while(!![]){try{const _0x1e27d8=parseInt(_0x361aaf(0x548))/0x1+parseInt(_0x361aaf(0x5e5))/0x2*(-parseInt(_0x361aaf(0x1ac))/0x3)+-parseInt(_0x361aaf(0x380))/0x4*(parseInt(_0x361aaf(0x236))/0x5)+parseInt(_0x361aaf(0x1a0))/0x6+-parseInt(_0x361aaf(0x1ae))/0x7*(parseInt(_0x361aaf(0x359))/0x8)+parseInt(_0x361aaf(0x178))/0x9*(parseInt(_0x361aaf(0x3e6))/0xa)+-parseInt(_0x361aaf(0x585))/0xb*(parseInt(_0x361aaf(0x48d))/0xc);if(_0x1e27d8===_0x1c18f9)break;else _0x4a4181['push'](_0x4a4181['shift']());}catch(_0x8a8913){_0x4a4181['push'](_0x4a4181['shift']());}}}(_0x54df,0xc1990));var label='EventsMoveCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x4c5915(0x600)](function(_0x39f0a6){const _0x329acc=_0x4c5915;return _0x39f0a6[_0x329acc(0x5a5)]&&_0x39f0a6[_0x329acc(0x411)][_0x329acc(0x452)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x4c5915(0x314)]=function(_0x597382,_0x5e24a1){const _0x20281e=_0x4c5915;for(const _0xbf9a0d in _0x5e24a1){if(_0x20281e(0x410)===_0x20281e(0x57b))this[_0x20281e(0x446)]['x']=0x1/_0x3f9f3e[_0x20281e(0x414)](),this[_0x20281e(0x446)]['y']=0x1/_0x13fd6b[_0x20281e(0x414)](),this['_screenZoomScale']=_0x2433c7[_0x20281e(0x414)]();else{if(_0xbf9a0d[_0x20281e(0x603)](/(.*):(.*)/i)){const _0x50affb=String(RegExp['$1']),_0x3ed02e=String(RegExp['$2'])[_0x20281e(0x4b1)]()[_0x20281e(0x344)]();let _0x50d2cc,_0x49a969,_0x3c9425;switch(_0x3ed02e){case _0x20281e(0x3ce):_0x50d2cc=_0x5e24a1[_0xbf9a0d]!==''?Number(_0x5e24a1[_0xbf9a0d]):0x0;break;case _0x20281e(0x27f):_0x49a969=_0x5e24a1[_0xbf9a0d]!==''?JSON['parse'](_0x5e24a1[_0xbf9a0d]):[],_0x50d2cc=_0x49a969[_0x20281e(0x59f)](_0x173154=>Number(_0x173154));break;case _0x20281e(0x20a):_0x50d2cc=_0x5e24a1[_0xbf9a0d]!==''?eval(_0x5e24a1[_0xbf9a0d]):null;break;case _0x20281e(0x534):_0x49a969=_0x5e24a1[_0xbf9a0d]!==''?JSON['parse'](_0x5e24a1[_0xbf9a0d]):[],_0x50d2cc=_0x49a969[_0x20281e(0x59f)](_0x9d14d5=>eval(_0x9d14d5));break;case _0x20281e(0x296):_0x50d2cc=_0x5e24a1[_0xbf9a0d]!==''?JSON[_0x20281e(0x508)](_0x5e24a1[_0xbf9a0d]):'';break;case _0x20281e(0x39c):_0x49a969=_0x5e24a1[_0xbf9a0d]!==''?JSON['parse'](_0x5e24a1[_0xbf9a0d]):[],_0x50d2cc=_0x49a969['map'](_0x5d0e81=>JSON[_0x20281e(0x508)](_0x5d0e81));break;case _0x20281e(0x61a):_0x50d2cc=_0x5e24a1[_0xbf9a0d]!==''?new Function(JSON[_0x20281e(0x508)](_0x5e24a1[_0xbf9a0d])):new Function(_0x20281e(0x31f));break;case _0x20281e(0x554):_0x49a969=_0x5e24a1[_0xbf9a0d]!==''?JSON['parse'](_0x5e24a1[_0xbf9a0d]):[],_0x50d2cc=_0x49a969['map'](_0x41cb7a=>new Function(JSON[_0x20281e(0x508)](_0x41cb7a)));break;case'STR':_0x50d2cc=_0x5e24a1[_0xbf9a0d]!==''?String(_0x5e24a1[_0xbf9a0d]):'';break;case _0x20281e(0x4de):_0x49a969=_0x5e24a1[_0xbf9a0d]!==''?JSON['parse'](_0x5e24a1[_0xbf9a0d]):[],_0x50d2cc=_0x49a969[_0x20281e(0x59f)](_0x127b3b=>String(_0x127b3b));break;case _0x20281e(0x649):_0x3c9425=_0x5e24a1[_0xbf9a0d]!==''?JSON[_0x20281e(0x508)](_0x5e24a1[_0xbf9a0d]):{},_0x597382[_0x50affb]={},VisuMZ[_0x20281e(0x314)](_0x597382[_0x50affb],_0x3c9425);continue;case _0x20281e(0x1e9):_0x49a969=_0x5e24a1[_0xbf9a0d]!==''?JSON[_0x20281e(0x508)](_0x5e24a1[_0xbf9a0d]):[],_0x50d2cc=_0x49a969['map'](_0x4b43cb=>VisuMZ[_0x20281e(0x314)]({},JSON['parse'](_0x4b43cb)));break;default:continue;}_0x597382[_0x50affb]=_0x50d2cc;}}}return _0x597382;},(_0xb43deb=>{const _0x44e7bd=_0x4c5915,_0x134808=_0xb43deb[_0x44e7bd(0x23b)];for(const _0x42cf85 of dependencies){if(_0x44e7bd(0x220)===_0x44e7bd(0x220)){if(!Imported[_0x42cf85]){if('XlGQy'===_0x44e7bd(0x1c2)){alert(_0x44e7bd(0x65d)[_0x44e7bd(0x313)](_0x134808,_0x42cf85)),SceneManager[_0x44e7bd(0x279)]();break;}else{const _0x1fb56a=this['_randomHomeX'],_0x439b75=this[_0x44e7bd(0x37b)];return this['turnAwayFromPoint'](_0x1fb56a,_0x439b75);}}}else this[_0x44e7bd(0x4be)][_0x44e7bd(0x44c)]=_0x171235(_0x130af9['$1']);}const _0x44e91e=_0xb43deb[_0x44e7bd(0x411)];if(_0x44e91e[_0x44e7bd(0x603)](/\[Version[ ](.*?)\]/i)){const _0x5b6a5b=Number(RegExp['$1']);_0x5b6a5b!==VisuMZ[label]['version']&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x44e7bd(0x313)](_0x134808,_0x5b6a5b)),SceneManager[_0x44e7bd(0x279)]());}if(_0x44e91e[_0x44e7bd(0x603)](/\[Tier[ ](\d+)\]/i)){const _0x54b021=Number(RegExp['$1']);_0x54b021<tier?(alert(_0x44e7bd(0x3e4)[_0x44e7bd(0x313)](_0x134808,_0x54b021,tier)),SceneManager[_0x44e7bd(0x279)]()):tier=Math[_0x44e7bd(0x2a4)](_0x54b021,tier);}VisuMZ[_0x44e7bd(0x314)](VisuMZ[label][_0x44e7bd(0x64c)],_0xb43deb[_0x44e7bd(0x4ac)]);})(pluginData),VisuMZ['OperateValues']=function(_0x957c62,_0x4a6333,_0x19663c){switch(_0x19663c){case'=':return _0x4a6333;break;case'+':return _0x957c62+_0x4a6333;break;case'-':return _0x957c62-_0x4a6333;break;case'*':return _0x957c62*_0x4a6333;break;case'/':return _0x957c62/_0x4a6333;break;case'%':return _0x957c62%_0x4a6333;break;}return _0x957c62;},PluginManager['registerCommand'](pluginData[_0x4c5915(0x23b)],'AutoMoveEvents',_0x4e4f11=>{const _0x3e65bf=_0x4c5915;VisuMZ[_0x3e65bf(0x314)](_0x4e4f11,_0x4e4f11);switch(_0x4e4f11[_0x3e65bf(0x3c9)]){case _0x3e65bf(0x2a3):$gameSystem[_0x3e65bf(0x320)](!![]);break;case'Stop':$gameSystem[_0x3e65bf(0x320)](![]);break;case _0x3e65bf(0x4d2):$gameSystem[_0x3e65bf(0x320)](!$gameSystem['isAllowEventAutoMovement']());break;}}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x27a),_0xb03d7=>{const _0x467a68=_0x4c5915;VisuMZ[_0x467a68(0x314)](_0xb03d7,_0xb03d7);const _0x45e9cb=$gameTemp['getLastPluginCommandInterpreter'](),_0x380da3={'mapId':_0xb03d7['MapId'],'eventId':_0xb03d7[_0x467a68(0x662)]||_0x45e9cb['eventId'](),'pageId':_0xb03d7[_0x467a68(0x283)]};if(_0x380da3[_0x467a68(0x3c8)]<=0x0)_0x380da3[_0x467a68(0x3c8)]=$gameMap?$gameMap[_0x467a68(0x3c8)]():0x1;$gameTemp[_0x467a68(0x612)]()[_0x467a68(0x1bb)](_0x380da3);}),PluginManager[_0x4c5915(0x5bc)](pluginData['name'],'DashEnableToggle',_0x11c767=>{const _0x46d0f2=_0x4c5915;VisuMZ[_0x46d0f2(0x314)](_0x11c767,_0x11c767);switch(_0x11c767[_0x46d0f2(0x3c9)]){case _0x46d0f2(0x3b2):$gameSystem[_0x46d0f2(0x1fa)](!![]);break;case _0x46d0f2(0x1f9):$gameSystem[_0x46d0f2(0x1fa)](![]);break;case _0x46d0f2(0x4d2):$gameSystem[_0x46d0f2(0x1fa)](!$gameSystem[_0x46d0f2(0x517)]());break;}}),PluginManager['registerCommand'](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x176),_0x35f8e5=>{const _0x7f19e5=_0x4c5915;VisuMZ[_0x7f19e5(0x314)](_0x35f8e5,_0x35f8e5);const _0x308d57=$gameTemp['getLastPluginCommandInterpreter']();_0x35f8e5[_0x7f19e5(0x5bd)]=_0x35f8e5[_0x7f19e5(0x5bd)]||$gameMap[_0x7f19e5(0x3c8)](),$gameSystem[_0x7f19e5(0x2d2)](_0x35f8e5['MapId'],_0x35f8e5['EventId']||_0x308d57[_0x7f19e5(0x5ad)](),_0x35f8e5[_0x7f19e5(0x39f)],_0x35f8e5[_0x7f19e5(0x3f5)],_0x35f8e5['IconBufferY'],_0x35f8e5[_0x7f19e5(0x43b)]);}),PluginManager[_0x4c5915(0x5bc)](pluginData['name'],_0x4c5915(0x33a),_0x39b4ab=>{const _0x482630=_0x4c5915;VisuMZ['ConvertParams'](_0x39b4ab,_0x39b4ab);const _0x3b2f29=$gameTemp[_0x482630(0x612)]();_0x39b4ab[_0x482630(0x5bd)]=_0x39b4ab[_0x482630(0x5bd)]||$gameMap[_0x482630(0x3c8)](),$gameSystem[_0x482630(0x50b)](_0x39b4ab[_0x482630(0x5bd)],_0x39b4ab[_0x482630(0x662)]||_0x3b2f29[_0x482630(0x5ad)]());}),PluginManager['registerCommand'](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x561),_0x5146c4=>{const _0x2acbdd=_0x4c5915;if($gameMap){if(_0x2acbdd(0x553)==='eSNVe')for(const _0x585f69 of $gameMap[_0x2acbdd(0x57c)]()){_0x585f69[_0x2acbdd(0x476)](),_0x585f69[_0x2acbdd(0x1c7)]();}else _0x2f9301['EventsMoveCore'][_0x2acbdd(0x50c)]['call'](this),this['clearPose']();}if(SceneManager['isSceneMap']()){if('WuznY'==='xGBPP'){const _0x174507=[_0x3cac46[_0x2acbdd(0x229)],_0x40c6bf[_0x2acbdd(0x3e5)],'Self\x20Variable\x20%1'[_0x2acbdd(0x313)](_0x1b4a9d)];_0x252544[_0x2acbdd(0x163)](_0x174507,_0x5ca983);}else{const _0x4f7234=SceneManager['_scene'][_0x2acbdd(0x5e7)];if(_0x4f7234)_0x4f7234[_0x2acbdd(0x496)]();}}}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x615),_0x1fbdc4=>{const _0x438f32=_0x4c5915;VisuMZ['ConvertParams'](_0x1fbdc4,_0x1fbdc4);switch(_0x1fbdc4['Visibility']){case'Visible':$gameSystem['setEventLabelsVisible'](!![]);break;case _0x438f32(0x5b7):$gameSystem[_0x438f32(0x433)](![]);break;case _0x438f32(0x4d2):$gameSystem[_0x438f32(0x433)](!$gameSystem[_0x438f32(0x412)]());break;}}),PluginManager[_0x4c5915(0x5bc)](pluginData['name'],_0x4c5915(0x4c9),_0x55fd50=>{const _0x19a477=_0x4c5915;VisuMZ[_0x19a477(0x314)](_0x55fd50,_0x55fd50);const _0x13e9b0=$gameTemp['getLastPluginCommandInterpreter']();if(!$gameMap)return;const _0x4c7259=$gameMap['event'](_0x55fd50[_0x19a477(0x662)]||_0x13e9b0[_0x19a477(0x5ad)]());if(_0x4c7259)_0x4c7259[_0x19a477(0x51d)]();}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x182),_0x42704c=>{const _0xb92d41=_0x4c5915;VisuMZ[_0xb92d41(0x314)](_0x42704c,_0x42704c);const _0x252599=$gameTemp[_0xb92d41(0x612)](),_0x14c64a=_0x42704c[_0xb92d41(0x5bd)]||$gameMap[_0xb92d41(0x3c8)](),_0x1c4715=_0x42704c[_0xb92d41(0x662)]||_0x252599[_0xb92d41(0x5ad)](),_0x134a0a=_0x42704c[_0xb92d41(0x317)]||0x0,_0x2d4909=_0x42704c[_0xb92d41(0x5f6)]||0x0,_0x54e1a7=_0x42704c[_0xb92d41(0x5a4)]||0x2,_0x57a2dc=((_0x42704c[_0xb92d41(0x283)]||0x1)-0x1)[_0xb92d41(0x1b9)](0x0,0x13),_0x237887=_0x42704c[_0xb92d41(0x566)]||0x0;$gameSystem[_0xb92d41(0x3ed)](_0x14c64a,_0x1c4715,_0x134a0a,_0x2d4909,_0x54e1a7,_0x57a2dc,_0x237887);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x2fb),_0x5540f4=>{const _0x4b3bf6=_0x4c5915;VisuMZ[_0x4b3bf6(0x314)](_0x5540f4,_0x5540f4);const _0x20ead1=$gameTemp[_0x4b3bf6(0x612)](),_0x1b880f=_0x5540f4['MapId']||$gameMap[_0x4b3bf6(0x3c8)](),_0x59107c=_0x5540f4[_0x4b3bf6(0x662)]||_0x20ead1[_0x4b3bf6(0x5ad)]();$gameSystem['deleteSavedEventLocationKey'](_0x1b880f,_0x59107c);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x17b),_0x49d49c=>{const _0x16d6ee=_0x4c5915;VisuMZ[_0x16d6ee(0x314)](_0x49d49c,_0x49d49c);const _0x1d119b=_0x49d49c[_0x16d6ee(0x2c1)];$gameTimer[_0x16d6ee(0x140)](_0x1d119b);}),PluginManager['registerCommand'](pluginData['name'],_0x4c5915(0x36d),_0x4b6cc4=>{const _0x116ab7=_0x4c5915;$gameTimer[_0x116ab7(0x140)](0x0);}),PluginManager['registerCommand'](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x5ab),_0x329fa3=>{const _0x240a85=_0x4c5915;if(!$gameTimer[_0x240a85(0x3c5)]())return;VisuMZ[_0x240a85(0x314)](_0x329fa3,_0x329fa3);let _0x57acd0=0x0;_0x57acd0+=_0x329fa3[_0x240a85(0x64f)],_0x57acd0+=_0x329fa3[_0x240a85(0x231)]*0x3c,_0x57acd0+=_0x329fa3['Minutes']*0x3c*0x3c,_0x57acd0+=_0x329fa3[_0x240a85(0x299)]*0x3c*0x3c*0x3c,$gameTimer[_0x240a85(0x376)](_0x57acd0);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x5e1),_0x462946=>{const _0x443851=_0x4c5915;if(!$gameTimer[_0x443851(0x3c5)]())return;VisuMZ[_0x443851(0x314)](_0x462946,_0x462946);let _0x225ecf=0x0;_0x225ecf+=_0x462946[_0x443851(0x64f)],_0x225ecf+=_0x462946[_0x443851(0x231)]*0x3c,_0x225ecf+=_0x462946[_0x443851(0x3be)]*0x3c*0x3c,_0x225ecf+=_0x462946[_0x443851(0x299)]*0x3c*0x3c*0x3c,$gameTimer[_0x443851(0x5eb)](_0x225ecf);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],'EventTimerPause',_0x76de1d=>{const _0x34eaf8=_0x4c5915;if(!$gameTimer[_0x34eaf8(0x3c5)]())return;$gameTimer['pause']();}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x2e4),_0x67ac6d=>{const _0x3c5ea6=_0x4c5915;if(!$gameTimer[_0x3c5ea6(0x3c5)]())return;$gameTimer[_0x3c5ea6(0x288)]();}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x3ad),_0x1c0bb0=>{const _0x348dd1=_0x4c5915;VisuMZ['ConvertParams'](_0x1c0bb0,_0x1c0bb0);const _0x40b0e4=_0x1c0bb0[_0x348dd1(0x1f4)]||0x0;$gameTimer['changeSpeed'](_0x40b0e4);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x2ee),_0xd4673c=>{const _0x35d205=_0x4c5915;VisuMZ[_0x35d205(0x314)](_0xd4673c,_0xd4673c);const _0x6b8ad4=!_0xd4673c[_0x35d205(0x44a)];$gameSystem[_0x35d205(0x18e)](_0x6b8ad4);}),PluginManager[_0x4c5915(0x5bc)](pluginData['name'],_0x4c5915(0x65a),_0x4ddd66=>{const _0x3f8057=_0x4c5915;VisuMZ['ConvertParams'](_0x4ddd66,_0x4ddd66);const _0x14b233=(_0x4ddd66[_0x3f8057(0x2f0)]||0x0)-0x1,_0xc5ad33=!_0x4ddd66[_0x3f8057(0x44a)],_0x2a42d5=$gamePlayer[_0x3f8057(0x1b4)]()['follower'](_0x14b233);if(_0x2a42d5)_0x2a42d5['setChaseOff'](_0xc5ad33);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x372),_0x1bd843=>{const _0x526eaa=_0x4c5915;VisuMZ[_0x526eaa(0x314)](_0x1bd843,_0x1bd843);const _0x546697=_0x1bd843[_0x526eaa(0x2f0)];$gameSystem[_0x526eaa(0x4e6)](_0x546697);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x164),_0x7365e6=>{const _0x276535=_0x4c5915;VisuMZ['ConvertParams'](_0x7365e6,_0x7365e6),$gameSystem['setControlledFollowerID'](0x0),$gameSystem[_0x276535(0x18e)](![]);for(const _0x5bfcb7 of $gamePlayer[_0x276535(0x1b4)]()[_0x276535(0x3d6)]){if(_0x5bfcb7)_0x5bfcb7['setChaseOff'](![]);}}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x667),_0xcbdbed=>{const _0x12e062=_0x4c5915;VisuMZ[_0x12e062(0x314)](_0xcbdbed,_0xcbdbed);const _0x1cb411=$gameTemp[_0x12e062(0x612)]();_0xcbdbed[_0x12e062(0x5bd)]=_0xcbdbed['MapId']||$gameMap[_0x12e062(0x3c8)]();const _0x5831c2=[_0xcbdbed[_0x12e062(0x5bd)],_0xcbdbed[_0x12e062(0x662)]||_0x1cb411[_0x12e062(0x5ad)](),_0xcbdbed[_0x12e062(0x2b3)]],_0x3b2256=_0xcbdbed[_0x12e062(0x15f)],_0x12d007=$gameSelfSwitches[_0x12e062(0x666)](_0x5831c2)||![];$gameSwitches[_0x12e062(0x163)](_0x3b2256,_0x12d007);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x40c),_0x15f6e3=>{const _0x258629=_0x4c5915;VisuMZ[_0x258629(0x314)](_0x15f6e3,_0x15f6e3);const _0x393e53=$gameTemp[_0x258629(0x612)]();_0x15f6e3[_0x258629(0x5bd)]=_0x15f6e3[_0x258629(0x5bd)]||$gameMap['mapId']();const _0x1c1740=[_0x15f6e3[_0x258629(0x5bd)],_0x15f6e3[_0x258629(0x662)]||_0x393e53['eventId'](),'Self\x20Switch\x20%1'[_0x258629(0x313)](_0x15f6e3[_0x258629(0x1ef)])],_0x3b217f=_0x15f6e3['TargetSwitchId'],_0x38cc3a=$gameSelfSwitches[_0x258629(0x666)](_0x1c1740)||![];$gameSwitches[_0x258629(0x163)](_0x3b217f,_0x38cc3a);}),PluginManager['registerCommand'](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x5df),_0x575de7=>{const _0x60b1c9=_0x4c5915;VisuMZ[_0x60b1c9(0x314)](_0x575de7,_0x575de7);const _0x287ab3=$gameTemp['getLastPluginCommandInterpreter']();_0x575de7['MapId']=_0x575de7[_0x60b1c9(0x5bd)]||$gameMap[_0x60b1c9(0x3c8)]();const _0x301d41=[_0x575de7[_0x60b1c9(0x5bd)],_0x575de7[_0x60b1c9(0x662)]||_0x287ab3[_0x60b1c9(0x5ad)](),'Self\x20Variable\x20%1'[_0x60b1c9(0x313)](_0x575de7['VariableId'])],_0x267e27=_0x575de7['TargetVariableId'],_0xd7753e=$gameSelfSwitches[_0x60b1c9(0x666)](_0x301d41)||![];$gameVariables[_0x60b1c9(0x163)](_0x267e27,_0xd7753e);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],'MorphEventTo',_0x80a6c1=>{const _0x5bf3ca=_0x4c5915;VisuMZ[_0x5bf3ca(0x314)](_0x80a6c1,_0x80a6c1);if(!$gameMap)return;const _0x46b1fa=$gameTemp['getLastPluginCommandInterpreter'](),_0x2ce9bd=_0x80a6c1[_0x5bf3ca(0x55a)];_0x80a6c1[_0x5bf3ca(0x5a7)]=_0x80a6c1[_0x5bf3ca(0x5a7)]||$gameMap[_0x5bf3ca(0x3c8)](),_0x80a6c1[_0x5bf3ca(0x282)]=_0x80a6c1[_0x5bf3ca(0x282)]||$gameMap[_0x5bf3ca(0x3c8)](),_0x80a6c1[_0x5bf3ca(0x572)]=_0x80a6c1[_0x5bf3ca(0x572)]['toUpperCase']()[_0x5bf3ca(0x344)]();if(!_0x2ce9bd&&_0x80a6c1['Step1MapId']!==$gameMap[_0x5bf3ca(0x3c8)]())return;if($gameMap[_0x5bf3ca(0x3c8)]()===_0x80a6c1[_0x5bf3ca(0x5a7)]){if(_0x5bf3ca(0x4e5)!==_0x5bf3ca(0x4e5))this[_0x5bf3ca(0x5ed)]();else{const _0x1fbb9a=$gameMap['event'](_0x80a6c1['Step1EventId']||_0x46b1fa['eventId']());if(!_0x1fbb9a)return;_0x80a6c1[_0x5bf3ca(0x572)]!=='UNTITLED'?_0x5bf3ca(0x5d1)!==_0x5bf3ca(0x651)?_0x1fbb9a['morphIntoTemplate'](_0x80a6c1[_0x5bf3ca(0x572)]):this[_0x5bf3ca(0x3cf)]():'qQJba'!==_0x5bf3ca(0x361)?_0x5467ce==='left'?this[_0x5bf3ca(0x34a)]():this[_0x5bf3ca(0x1c4)]():_0x1fbb9a[_0x5bf3ca(0x51f)](_0x80a6c1[_0x5bf3ca(0x282)],_0x80a6c1[_0x5bf3ca(0x4fa)]||_0x46b1fa[_0x5bf3ca(0x5ad)]());}}_0x2ce9bd&&$gameSystem[_0x5bf3ca(0x61f)](_0x80a6c1[_0x5bf3ca(0x5a7)],_0x80a6c1[_0x5bf3ca(0x30b)],_0x80a6c1[_0x5bf3ca(0x572)],_0x80a6c1['Step2MapId'],_0x80a6c1[_0x5bf3ca(0x4fa)]);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],'MorphEventRemove',_0x582190=>{const _0x575493=_0x4c5915;VisuMZ[_0x575493(0x314)](_0x582190,_0x582190);if(!$gameMap)return;const _0x20a64e=$gameTemp['getLastPluginCommandInterpreter']();_0x582190['MapId']=_0x582190[_0x575493(0x5bd)]||$gameMap[_0x575493(0x3c8)]();if($gameMap[_0x575493(0x3c8)]()===_0x582190[_0x575493(0x5bd)]){const _0x5c8206=$gameMap[_0x575493(0x4f1)](_0x582190[_0x575493(0x662)]||_0x20a64e[_0x575493(0x5ad)]());_0x5c8206[_0x575493(0x581)]();}_0x582190['RemovePreserve']&&(_0x575493(0x20b)!=='IeqLb'?_0x37ceaf=[-_0x23a2b1['TiltVert'],0x0,_0x48a464['TiltVert']][this[_0x575493(0x25f)][_0x575493(0x35d)]()]:$gameSystem['deletePreservedMorphEventDataKey'](_0x582190['MapId'],_0x582190['EventId']||_0x20a64e[_0x575493(0x5ad)]()));}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x21a),_0x500f8b=>{const _0x170cce=_0x4c5915;VisuMZ[_0x170cce(0x314)](_0x500f8b,_0x500f8b),$gameSystem[_0x170cce(0x609)]($gamePlayer,_0x500f8b[_0x170cce(0x39f)],_0x500f8b[_0x170cce(0x3f5)],_0x500f8b[_0x170cce(0x405)],_0x500f8b[_0x170cce(0x43b)]);}),PluginManager[_0x4c5915(0x5bc)](pluginData['name'],_0x4c5915(0x4ee),_0x46bb23=>{const _0x5ad1f2=_0x4c5915;VisuMZ[_0x5ad1f2(0x314)](_0x46bb23,_0x46bb23),$gameSystem[_0x5ad1f2(0x1b0)]($gamePlayer);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],'PlayerMovementChange',_0x6a091b=>{const _0x219e8d=_0x4c5915;VisuMZ['ConvertParams'](_0x6a091b,_0x6a091b),$gameSystem[_0x219e8d(0x57e)](!_0x6a091b[_0x219e8d(0x3b2)]);}),PluginManager['registerCommand'](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x375),_0x3af43a=>{const _0x3e2c55=_0x4c5915;VisuMZ['ConvertParams'](_0x3af43a,_0x3af43a),$gameSystem[_0x3e2c55(0x1d7)](_0x3af43a[_0x3e2c55(0x1f6)]);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x160),_0x4cf82d=>{const _0x14dc74=_0x4c5915;VisuMZ[_0x14dc74(0x314)](_0x4cf82d,_0x4cf82d);const _0x4e591b=_0x4cf82d[_0x14dc74(0x5bd)]||$gameMap[_0x14dc74(0x3c8)]();$gameSelfSwitches[_0x14dc74(0x3f8)](_0x4e591b);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x491),_0x30c23e=>{const _0x73ed65=_0x4c5915;VisuMZ['ConvertParams'](_0x30c23e,_0x30c23e);const _0x5dbe34=$gameTemp[_0x73ed65(0x612)]();_0x30c23e[_0x73ed65(0x5bd)]=_0x30c23e['MapId']||$gameMap['mapId']();const _0x3dd6d0=[_0x30c23e[_0x73ed65(0x5bd)],_0x30c23e['EventId']||_0x5dbe34[_0x73ed65(0x5ad)](),_0x30c23e[_0x73ed65(0x2b3)]];switch(_0x30c23e[_0x73ed65(0x3c9)]){case'ON':$gameSelfSwitches[_0x73ed65(0x163)](_0x3dd6d0,!![]);break;case'OFF':$gameSelfSwitches[_0x73ed65(0x163)](_0x3dd6d0,![]);break;case'Toggle':$gameSelfSwitches[_0x73ed65(0x163)](_0x3dd6d0,!$gameSelfSwitches[_0x73ed65(0x666)](_0x3dd6d0));break;}}),PluginManager['registerCommand'](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x382),_0x2373dc=>{const _0x5adf81=_0x4c5915;VisuMZ[_0x5adf81(0x314)](_0x2373dc,_0x2373dc);const _0x16b0cb=$gameTemp[_0x5adf81(0x612)]();_0x2373dc[_0x5adf81(0x5bd)]=_0x2373dc[_0x5adf81(0x5bd)]||$gameMap['mapId']();const _0x281243=[_0x2373dc['MapId'],_0x2373dc[_0x5adf81(0x662)]||_0x16b0cb[_0x5adf81(0x5ad)](),_0x5adf81(0x434)[_0x5adf81(0x313)](_0x2373dc[_0x5adf81(0x1ef)])];switch(_0x2373dc['Value']){case'ON':$gameSelfSwitches[_0x5adf81(0x163)](_0x281243,!![]);break;case _0x5adf81(0x1f5):$gameSelfSwitches['setValue'](_0x281243,![]);break;case _0x5adf81(0x4d2):$gameSelfSwitches[_0x5adf81(0x163)](_0x281243,!$gameSelfSwitches['value'](_0x281243));break;}}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x516),_0x18e16c=>{const _0x3629a7=_0x4c5915;VisuMZ['ConvertParams'](_0x18e16c,_0x18e16c);const _0x5c36e9=$gameTemp['getLastPluginCommandInterpreter']();_0x18e16c[_0x3629a7(0x5bd)]=_0x18e16c[_0x3629a7(0x5bd)]||$gameMap[_0x3629a7(0x3c8)]();const _0x215466=[_0x18e16c[_0x3629a7(0x5bd)],_0x18e16c[_0x3629a7(0x662)]||_0x5c36e9[_0x3629a7(0x5ad)](),_0x3629a7(0x258)[_0x3629a7(0x313)](_0x18e16c[_0x3629a7(0x5f3)])],_0x53446b=VisuMZ[_0x3629a7(0x390)]($gameSelfSwitches[_0x3629a7(0x666)](_0x215466),_0x18e16c['Value'],_0x18e16c[_0x3629a7(0x246)]);$gameSelfSwitches[_0x3629a7(0x163)](_0x215466,_0x53446b);}),PluginManager['registerCommand'](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x157),_0x497f5f=>{const _0x42eb42=_0x4c5915;VisuMZ['ConvertParams'](_0x497f5f,_0x497f5f);const _0x3fe9de=$gameTemp[_0x42eb42(0x612)](),_0x1c9968={'template':_0x497f5f[_0x42eb42(0x572)],'mapId':_0x497f5f[_0x42eb42(0x5bd)]||$gameMap[_0x42eb42(0x3c8)](),'eventId':_0x497f5f[_0x42eb42(0x662)]||_0x3fe9de[_0x42eb42(0x5ad)](),'x':_0x497f5f[_0x42eb42(0x317)],'y':_0x497f5f[_0x42eb42(0x5f6)],'spawnPreserved':_0x497f5f[_0x42eb42(0x430)],'spawnEventId':$gameMap[_0x42eb42(0x1c6)]['length']+0x3e8},_0x364cc0=_0x497f5f[_0x42eb42(0x4c5)]||0x0;if(!VisuMZ[_0x42eb42(0x248)][_0x1c9968[_0x42eb42(0x3c8)]]&&_0x1c9968[_0x42eb42(0x3c8)]!==$gameMap['mapId']()){if('ukVpE'===_0x42eb42(0x214)){_0x1322c6[_0x42eb42(0x314)](_0x14e400,_0x378190);const _0x5a2641=_0x50f23d[_0x42eb42(0x5bd)]||_0x370b68[_0x42eb42(0x3c8)]();_0x11bb45[_0x42eb42(0x3f8)](_0x5a2641);}else{let _0x59424c=_0x42eb42(0x47a)[_0x42eb42(0x313)](_0x1c9968[_0x42eb42(0x3c8)]);_0x59424c+=_0x42eb42(0x1f7),_0x59424c+=_0x42eb42(0x52e),_0x59424c+=_0x42eb42(0x56e),_0x59424c+='Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1'[_0x42eb42(0x313)](_0x1c9968['mapId']),alert(_0x59424c);return;}}const _0x40865e=$gameMap['prepareSpawnedEventAtXY'](_0x1c9968,_0x497f5f[_0x42eb42(0x24c)],_0x497f5f[_0x42eb42(0x14c)]);_0x364cc0&&(_0x42eb42(0x395)==='gcELC'?$gameSwitches[_0x42eb42(0x163)](_0x364cc0,!!_0x40865e):(_0x26e4a8[_0x42eb42(0x1fd)][_0x42eb42(0x4b0)][_0x42eb42(0x44d)](this),this[_0x42eb42(0x218)]()));}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],'SpawnEventAtRegion',_0x4cb908=>{const _0x43944e=_0x4c5915;VisuMZ[_0x43944e(0x314)](_0x4cb908,_0x4cb908);const _0x15e677=$gameTemp['getLastPluginCommandInterpreter'](),_0x24c845={'template':_0x4cb908[_0x43944e(0x572)],'mapId':_0x4cb908[_0x43944e(0x5bd)]||$gameMap[_0x43944e(0x3c8)](),'eventId':_0x4cb908[_0x43944e(0x662)]||_0x15e677[_0x43944e(0x5ad)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x4cb908[_0x43944e(0x430)],'spawnEventId':$gameMap[_0x43944e(0x1c6)][_0x43944e(0x179)]+0x3e8},_0x355b08=_0x4cb908[_0x43944e(0x4c5)]||0x0;if(!VisuMZ[_0x43944e(0x248)][_0x24c845[_0x43944e(0x3c8)]]&&_0x24c845['mapId']!==$gameMap[_0x43944e(0x3c8)]()){let _0x2b368d=_0x43944e(0x47a)[_0x43944e(0x313)](_0x24c845[_0x43944e(0x3c8)]);_0x2b368d+=_0x43944e(0x1f7),_0x2b368d+=_0x43944e(0x52e),_0x2b368d+=_0x43944e(0x56e),_0x2b368d+='Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1'[_0x43944e(0x313)](_0x24c845[_0x43944e(0x3c8)]),alert(_0x2b368d);return;}const _0xb7b3b3=$gameMap[_0x43944e(0x3d5)](_0x24c845,_0x4cb908[_0x43944e(0x5fe)],_0x4cb908[_0x43944e(0x24c)],_0x4cb908[_0x43944e(0x14c)]);_0x355b08&&$gameSwitches[_0x43944e(0x163)](_0x355b08,!!_0xb7b3b3);}),PluginManager['registerCommand'](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x2b6),_0x471867=>{const _0x2242d1=_0x4c5915;VisuMZ[_0x2242d1(0x314)](_0x471867,_0x471867);const _0x33c6b6=$gameTemp[_0x2242d1(0x612)](),_0x3ec4c6={'template':_0x471867[_0x2242d1(0x572)],'mapId':_0x471867[_0x2242d1(0x5bd)]||$gameMap[_0x2242d1(0x3c8)](),'eventId':_0x471867[_0x2242d1(0x662)]||_0x33c6b6[_0x2242d1(0x5ad)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x471867[_0x2242d1(0x430)],'spawnEventId':$gameMap[_0x2242d1(0x1c6)][_0x2242d1(0x179)]+0x3e8},_0x58e329=_0x471867[_0x2242d1(0x4c5)]||0x0;if(!VisuMZ[_0x2242d1(0x248)][_0x3ec4c6[_0x2242d1(0x3c8)]]&&_0x3ec4c6[_0x2242d1(0x3c8)]!==$gameMap['mapId']()){let _0x52d55a=_0x2242d1(0x47a)[_0x2242d1(0x313)](_0x3ec4c6[_0x2242d1(0x3c8)]);_0x52d55a+=_0x2242d1(0x1f7),_0x52d55a+=_0x2242d1(0x52e),_0x52d55a+='Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a',_0x52d55a+='Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1'['format'](_0x3ec4c6[_0x2242d1(0x3c8)]),alert(_0x52d55a);return;}const _0x3ad857=$gameMap[_0x2242d1(0x4c4)](_0x3ec4c6,_0x471867[_0x2242d1(0x3dc)],_0x471867[_0x2242d1(0x24c)],_0x471867[_0x2242d1(0x14c)]);_0x58e329&&(_0x2242d1(0x3df)===_0x2242d1(0x4d3)?_0x195267=this['findDiagonalDirectionTo'](_0x2e3fd8,_0x2c7924):$gameSwitches[_0x2242d1(0x163)](_0x58e329,!!_0x3ad857));}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x31d),_0x313aa4=>{const _0x197d6b=_0x4c5915;VisuMZ[_0x197d6b(0x314)](_0x313aa4,_0x313aa4);const _0x2d66e3=$gameTemp['getLastPluginCommandInterpreter']();$gameMap[_0x197d6b(0x326)](_0x313aa4[_0x197d6b(0x65c)]||_0x2d66e3['eventId']());}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x202),_0x3670d5=>{const _0x167d9a=_0x4c5915;VisuMZ[_0x167d9a(0x314)](_0x3670d5,_0x3670d5);const _0x2f6c58=_0x3670d5['PosX'],_0xda007b=_0x3670d5[_0x167d9a(0x5f6)];$gameMap['despawnAtXY'](_0x2f6c58,_0xda007b);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x3fb),_0x433c21=>{const _0x4058ed=_0x4c5915;VisuMZ[_0x4058ed(0x314)](_0x433c21,_0x433c21),$gameMap[_0x4058ed(0x342)](_0x433c21['Region']);}),PluginManager[_0x4c5915(0x5bc)](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x5f8),_0x1da631=>{const _0x486f38=_0x4c5915;VisuMZ[_0x486f38(0x314)](_0x1da631,_0x1da631),$gameMap[_0x486f38(0x388)](_0x1da631[_0x486f38(0x3dc)]);}),PluginManager['registerCommand'](pluginData[_0x4c5915(0x23b)],_0x4c5915(0x2dc),_0x2232a2=>{const _0x2ff020=_0x4c5915;VisuMZ[_0x2ff020(0x314)](_0x2232a2,_0x2232a2),$gameMap[_0x2ff020(0x181)]();}),VisuMZ['EventsMoveCore']['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x4c5915(0x4ba)][_0x4c5915(0x173)],Scene_Boot[_0x4c5915(0x4ba)][_0x4c5915(0x173)]=function(){const _0xe942cb=_0x4c5915;VisuMZ[_0xe942cb(0x1fd)][_0xe942cb(0x42a)][_0xe942cb(0x44d)](this),this[_0xe942cb(0x14a)](),this[_0xe942cb(0x520)]();if(VisuMZ[_0xe942cb(0x1fd)][_0xe942cb(0x49a)])VisuMZ['EventsMoveCore'][_0xe942cb(0x49a)][_0xe942cb(0x537)]();},VisuMZ[_0x4c5915(0x248)]=[],VisuMZ['EventTemplates']={},Scene_Boot['prototype']['process_VisuMZ_EventsMoveCore_LoadTemplateMaps']=function(){const _0x56bb85=_0x4c5915;if(DataManager['isBattleTest']()||DataManager[_0x56bb85(0x421)]())return;const _0xb0a485=VisuMZ[_0x56bb85(0x1fd)][_0x56bb85(0x64c)][_0x56bb85(0x5fb)],_0x4fd4a1=_0xb0a485['PreloadMaps'][_0x56bb85(0x4d6)](0x0);for(const _0x16081d of _0xb0a485[_0x56bb85(0x1cd)]){_0x16081d[_0x56bb85(0x37a)]=_0x16081d[_0x56bb85(0x37a)][_0x56bb85(0x4b1)]()[_0x56bb85(0x344)](),VisuMZ[_0x56bb85(0x5b3)][_0x16081d[_0x56bb85(0x37a)]]=_0x16081d;if(!_0x4fd4a1[_0x56bb85(0x452)](_0x16081d[_0x56bb85(0x63b)]))_0x4fd4a1[_0x56bb85(0x19f)](_0x16081d['MapID']);}for(const _0x280e24 of _0x4fd4a1){if(VisuMZ[_0x56bb85(0x248)][_0x280e24])continue;const _0x4b9d30=_0x56bb85(0x18f)[_0x56bb85(0x313)](_0x280e24[_0x56bb85(0x19d)](0x3)),_0x3401d0=_0x56bb85(0x40a)['format'](_0x280e24);DataManager[_0x56bb85(0x38a)](_0x3401d0,_0x4b9d30),setTimeout(this['VisuMZ_Setup_Preload_Map'][_0x56bb85(0x304)](this,_0x280e24,_0x3401d0),0x64);}},Scene_Boot['prototype']['VisuMZ_Setup_Preload_Map']=function(_0x11e34e,_0x2a5758){const _0x1677e2=_0x4c5915;window[_0x2a5758]?(VisuMZ['PreloadedMaps'][_0x11e34e]=window[_0x2a5758],window[_0x2a5758]=undefined):setTimeout(this[_0x1677e2(0x53e)][_0x1677e2(0x304)](this,_0x11e34e,_0x2a5758),0x64);},VisuMZ['AdvancedSwitches']=[],VisuMZ[_0x4c5915(0x4bd)]=[],VisuMZ[_0x4c5915(0x1c5)]=[],VisuMZ[_0x4c5915(0x26e)]=[],VisuMZ[_0x4c5915(0x243)]=[],VisuMZ[_0x4c5915(0x5d3)]=[],Scene_Boot[_0x4c5915(0x4ba)][_0x4c5915(0x520)]=function(){const _0x101479=_0x4c5915;for(let _0x10cba0=0x1;_0x10cba0<$dataSystem[_0x101479(0x479)][_0x101479(0x179)];_0x10cba0++){if($dataSystem[_0x101479(0x479)][_0x10cba0][_0x101479(0x603)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x101479(0x512)][_0x101479(0x19f)](_0x10cba0);if($dataSystem[_0x101479(0x479)][_0x10cba0][_0x101479(0x603)](/<SELF>/i))VisuMZ[_0x101479(0x4bd)][_0x101479(0x19f)](_0x10cba0);if($dataSystem[_0x101479(0x479)][_0x10cba0]['match'](/<MAP>/i))VisuMZ[_0x101479(0x1c5)][_0x101479(0x19f)](_0x10cba0);}for(let _0x3b3335=0x1;_0x3b3335<$dataSystem[_0x101479(0x5bf)][_0x101479(0x179)];_0x3b3335++){if(_0x101479(0x4e3)!==_0x101479(0x4e3))return this[_0x101479(0x29b)];else{if($dataSystem[_0x101479(0x5bf)][_0x3b3335][_0x101479(0x603)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ['AdvancedVariables'][_0x101479(0x19f)](_0x3b3335);if($dataSystem[_0x101479(0x5bf)][_0x3b3335][_0x101479(0x603)](/<SELF>/i))VisuMZ['SelfVariables'][_0x101479(0x19f)](_0x3b3335);if($dataSystem[_0x101479(0x5bf)][_0x3b3335][_0x101479(0x603)](/<MAP>/i))VisuMZ[_0x101479(0x5d3)][_0x101479(0x19f)](_0x3b3335);}}},VisuMZ[_0x4c5915(0x1fd)]['CustomPageConditions']={},VisuMZ['EventsMoveCore'][_0x4c5915(0x49a)][_0x4c5915(0x537)]=function(){const _0x4b7428=_0x4c5915;this[_0x4b7428(0x40d)]=new Game_CPCInterpreter(),this['determineCommonEventsWithCPC']();},VisuMZ['EventsMoveCore'][_0x4c5915(0x49a)]['determineCommonEventsWithCPC']=function(){const _0x10d49d=_0x4c5915;this[_0x10d49d(0x56c)]=[];for(const _0x4839c2 of $dataCommonEvents){if(!_0x4839c2)continue;VisuMZ[_0x10d49d(0x1fd)]['CustomPageConditions'][_0x10d49d(0x61c)](_0x4839c2);if(_0x4839c2[_0x10d49d(0x471)][_0x10d49d(0x179)]>0x0)this[_0x10d49d(0x56c)]['push'](_0x4839c2['id']);}},VisuMZ['EventsMoveCore'][_0x4c5915(0x49a)][_0x4c5915(0x1e0)]=function(_0x591101,_0x240d61,_0x6e0009){const _0x4ce900=_0x4c5915;this[_0x4ce900(0x40d)][_0x4ce900(0x5ff)](_0x591101,_0x240d61);if(_0x6e0009){if(_0x4ce900(0x15b)!==_0x4ce900(0x15b))return _0x428875[_0x4ce900(0x57c)][_0x8d355];else this[_0x4ce900(0x40d)]['executeCommonEvent'](_0x6e0009);}else{if(_0x4ce900(0x4ea)!==_0x4ce900(0x4ea))return _0x15f3db[_0x4ce900(0x20d)](0x0,0x0,0x0,0x0);else this[_0x4ce900(0x40d)]['execute']();}return this[_0x4ce900(0x40d)][_0x4ce900(0x655)];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x49a)][_0x4c5915(0x61c)]=function(_0x442dc3){const _0x24d85b=_0x4c5915;let _0x3a1002=![];_0x442dc3[_0x24d85b(0x471)]=[];for(const _0x290f38 of _0x442dc3[_0x24d85b(0x61e)]){if([0x6c,0x198][_0x24d85b(0x452)](_0x290f38[_0x24d85b(0x358)])){if(_0x24d85b(0x48e)===_0x24d85b(0x48e)){const _0x38add8=_0x290f38[_0x24d85b(0x4ac)][0x0];if(_0x38add8[_0x24d85b(0x603)](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x3a1002=!![];else{if(_0x38add8[_0x24d85b(0x603)](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)){if(_0x24d85b(0x5ea)===_0x24d85b(0x49b))return this[_0x24d85b(0x22f)];else _0x3a1002=![];}}}else{const _0x5f00ea=this[_0x24d85b(0x4f1)]();return _0x702791[_0x24d85b(0x1fd)][_0x24d85b(0x49a)]['metCPC'](this[_0x24d85b(0x4f1)]()['CPC'],this['_commonEventId'],_0x5f00ea);}}_0x3a1002&&_0x442dc3[_0x24d85b(0x471)][_0x24d85b(0x19f)](_0x290f38);}},getSelfSwitchValue=function(_0x5b06af,_0x3bef74,_0x498a16){const _0x12fa5f=_0x4c5915;let _0xcda68d=[_0x5b06af,_0x3bef74,_0x12fa5f(0x434)[_0x12fa5f(0x313)](_0x498a16)];return typeof _0x498a16===_0x12fa5f(0x425)&&('IYFAi'!==_0x12fa5f(0x27e)?(_0x21b0ff[_0x12fa5f(0x1fd)][_0x12fa5f(0x133)][_0x12fa5f(0x44d)](this),this[_0x12fa5f(0x525)]()):_0xcda68d=[_0x5b06af,_0x3bef74,_0x498a16[_0x12fa5f(0x4b1)]()[_0x12fa5f(0x344)]()]),$gameSelfSwitches[_0x12fa5f(0x666)](_0xcda68d);},getMapSwitchValue=function(_0x365609,_0x3f6565){const _0x3705ec=_0x4c5915;let _0x971be3=[0x0,0x0,_0x3705ec(0x417)[_0x3705ec(0x313)](_0x365609,_0x3f6565)];return $gameSelfSwitches[_0x3705ec(0x666)](_0x971be3);},getMapVariableValue=function(_0x28d9b5,_0x480c84){const _0x57c0b1=_0x4c5915;let _0x5b6004=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'[_0x57c0b1(0x313)](_0x28d9b5,_0x480c84)];return $gameSelfSwitches[_0x57c0b1(0x666)](_0x5b6004);},getSelfVariableValue=function(_0x194356,_0x5e4a90,_0x6da59e){const _0x3a7e38=_0x4c5915,_0x272597=[_0x194356,_0x5e4a90,'Self\x20Variable\x20%1'[_0x3a7e38(0x313)](_0x6da59e)];return $gameSelfSwitches['value'](_0x272597);},setSelfSwitchValue=function(_0xaccc2,_0x57a122,_0x1819ee,_0x59a100){const _0x172576=_0x4c5915;let _0x1360bb=[_0xaccc2,_0x57a122,'Self\x20Switch\x20%1'[_0x172576(0x313)](_0x1819ee)];typeof _0x1819ee===_0x172576(0x425)&&(_0x1360bb=[_0xaccc2,_0x57a122,_0x1819ee['toUpperCase']()['trim']()]),$gameSelfSwitches['setValue'](_0x1360bb,_0x59a100);},setSelfVariableValue=function(_0x15d96d,_0x352f96,_0x317f0b,_0x235512){const _0x198dd7=_0x4c5915,_0x508a29=[_0x15d96d,_0x352f96,_0x198dd7(0x258)['format'](_0x317f0b)];$gameSelfSwitches[_0x198dd7(0x163)](_0x508a29,_0x235512);},setMapSwitchValue=function(_0x569890,_0x10e850,_0x4e2cb0){const _0x287c14=_0x4c5915;let _0xd891f4=[0x0,0x0,_0x287c14(0x417)[_0x287c14(0x313)](_0x569890,_0x10e850)];$gameSelfSwitches['setValue'](_0xd891f4,_0x4e2cb0);},setMapVariableValue=function(_0x3e3714,_0x4b2475,_0x41934f){const _0x51e84e=_0x4c5915;let _0x5ee811=[0x0,0x0,_0x51e84e(0x5b9)[_0x51e84e(0x313)](_0x3e3714,_0x4b2475)];$gameSelfSwitches[_0x51e84e(0x163)](_0x5ee811,_0x41934f);},DataManager[_0x4c5915(0x539)]=function(_0x3acff7){const _0x4472d0=_0x4c5915;if(SceneManager[_0x4472d0(0x339)][_0x4472d0(0x3c2)]===Scene_Debug)return![];return VisuMZ[_0x4472d0(0x512)][_0x4472d0(0x452)](_0x3acff7);},DataManager['isAdvancedVariable']=function(_0x51ed43){const _0x2eb1d8=_0x4c5915;if(SceneManager['_scene'][_0x2eb1d8(0x3c2)]===Scene_Debug)return![];return VisuMZ[_0x2eb1d8(0x26e)]['includes'](_0x51ed43);},DataManager[_0x4c5915(0x578)]=function(_0x2e70c7){const _0x42c53=_0x4c5915;if(SceneManager[_0x42c53(0x339)][_0x42c53(0x3c2)]===Scene_Debug)return![];return VisuMZ[_0x42c53(0x4bd)][_0x42c53(0x452)](_0x2e70c7);},DataManager[_0x4c5915(0x2d9)]=function(_0x455698){const _0x50f478=_0x4c5915;if(SceneManager[_0x50f478(0x339)][_0x50f478(0x3c2)]===Scene_Debug)return![];return VisuMZ[_0x50f478(0x243)][_0x50f478(0x452)](_0x455698);},DataManager[_0x4c5915(0x5ce)]=function(_0x579777){const _0x33f292=_0x4c5915;if(BattleManager[_0x33f292(0x36f)]())return![];return VisuMZ[_0x33f292(0x1c5)][_0x33f292(0x452)](_0x579777);},DataManager['isMapVariable']=function(_0x55e0c7){const _0x400d5c=_0x4c5915;if(BattleManager[_0x400d5c(0x36f)]())return![];return VisuMZ['MapVariables'][_0x400d5c(0x452)](_0x55e0c7);},SceneManager['isSceneMap']=function(){const _0x1d50e7=_0x4c5915;return this['_scene']&&this[_0x1d50e7(0x339)][_0x1d50e7(0x3c2)]===Scene_Map;},VisuMZ['EventsMoveCore'][_0x4c5915(0x38c)]=Game_Temp[_0x4c5915(0x4ba)][_0x4c5915(0x51a)],Game_Temp[_0x4c5915(0x4ba)][_0x4c5915(0x51a)]=function(_0x3819c1,_0x55afba){const _0x235952=_0x4c5915;if(this[_0x235952(0x189)](_0x3819c1,_0x55afba))return;VisuMZ[_0x235952(0x1fd)][_0x235952(0x38c)][_0x235952(0x44d)](this,_0x3819c1,_0x55afba);},Game_Temp[_0x4c5915(0x4ba)][_0x4c5915(0x189)]=function(_0x9322b9,_0x4a3c2c){const _0x443753=_0x4c5915,_0x804b90=$gameMap[_0x443753(0x2f8)](_0x9322b9,_0x4a3c2c);for(const _0x3f0887 of _0x804b90){if(_0x443753(0x629)!==_0x443753(0x58c)){if(_0x3f0887&&_0x3f0887[_0x443753(0x35f)]())return _0x443753(0x26f)!==_0x443753(0x26f)?_0x39eae3[_0x443753(0x1fd)][_0x443753(0x3d9)][_0x443753(0x44d)](this):(_0x3f0887[_0x443753(0x5cf)](),!![]);}else{const _0x158af5=_0x3d95a0[_0x443753(0x134)](this[_0x443753(0x49f)]());if(_0x158af5){const _0x16743c=_0x4910fa[_0x443753(0x3cc)](this['_realX'],this['_realY'],_0x158af5[_0x443753(0x324)],_0x158af5['_realY'])-0x1,_0x5018aa=_0x4a1292[_0x443753(0x3a2)](_0x4e4115[_0x443753(0x54c)](),_0x1903d5['tileHeight']()),_0x4d2c14=this[_0x443753(0x4be)][_0x443753(0x4c6)]||0x0;_0x1f3db1-=_0x4a558f[_0x443753(0x2a4)](0x0,_0x16743c)*_0x5018aa*_0x4d2c14;}}}return TouchInput[_0x443753(0x369)]()&&_0x804b90[_0x443753(0x179)]>0x0&&TouchInput[_0x443753(0x297)](),![];},Game_Temp[_0x4c5915(0x4ba)][_0x4c5915(0x2aa)]=function(_0x42dc0e){const _0x3094dd=_0x4c5915;this[_0x3094dd(0x41c)]=_0x42dc0e;},Game_Temp[_0x4c5915(0x4ba)][_0x4c5915(0x612)]=function(){const _0x7c51ac=_0x4c5915;return this[_0x7c51ac(0x41c)];},Game_Temp[_0x4c5915(0x4ba)][_0x4c5915(0x3e3)]=function(_0x1c931d){const _0x5354e9=_0x4c5915;this[_0x5354e9(0x29b)]=_0x1c931d;},Game_Temp['prototype']['clearSelfTarget']=function(){const _0x9c9583=_0x4c5915;this[_0x9c9583(0x29b)]=undefined;},Game_Temp['prototype'][_0x4c5915(0x255)]=function(){const _0x2c181e=_0x4c5915;return this[_0x2c181e(0x29b)];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x22e)]=Game_System['prototype'][_0x4c5915(0x537)],Game_System['prototype']['initialize']=function(){const _0x51e278=_0x4c5915;VisuMZ[_0x51e278(0x1fd)][_0x51e278(0x22e)]['call'](this),this[_0x51e278(0x183)](),this[_0x51e278(0x1e7)]();},Game_System['prototype']['initEventsMoveCore']=function(){const _0x13cef1=_0x4c5915;this[_0x13cef1(0x48a)]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this[_0x13cef1(0x34f)]={},this[_0x13cef1(0x4eb)]=[],this[_0x13cef1(0x506)]={},this[_0x13cef1(0x38e)]={},this[_0x13cef1(0x455)]=![],this[_0x13cef1(0x523)]=_0x13cef1(0x51b);},Game_System[_0x4c5915(0x4ba)]['isDashingEnabled']=function(){const _0x32e1e2=_0x4c5915;if(this[_0x32e1e2(0x48a)]===undefined)this['initEventsMoveCore']();if(this[_0x32e1e2(0x48a)][_0x32e1e2(0x14e)]===undefined)this[_0x32e1e2(0x183)]();return this[_0x32e1e2(0x48a)][_0x32e1e2(0x14e)];},Game_System['prototype'][_0x4c5915(0x1fa)]=function(_0x2b4662){const _0x3c3363=_0x4c5915;if(this[_0x3c3363(0x48a)]===undefined)this[_0x3c3363(0x183)]();if(this[_0x3c3363(0x48a)][_0x3c3363(0x14e)]===undefined)this[_0x3c3363(0x183)]();this['_EventsMoveCoreSettings'][_0x3c3363(0x14e)]=_0x2b4662;},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x23f)]=function(){const _0xb523c0=_0x4c5915;if(this[_0xb523c0(0x48a)]===undefined)this[_0xb523c0(0x183)]();if(this[_0xb523c0(0x48a)]['EventAutoMovement']===undefined)this[_0xb523c0(0x183)]();return this['_EventsMoveCoreSettings'][_0xb523c0(0x501)];},Game_System[_0x4c5915(0x4ba)]['setAllowEventAutoMovement']=function(_0x466a5d){const _0x2d1624=_0x4c5915;if(this[_0x2d1624(0x48a)]===undefined)this[_0x2d1624(0x183)]();if(this['_EventsMoveCoreSettings'][_0x2d1624(0x501)]===undefined)this['initEventsMoveCore']();this[_0x2d1624(0x48a)][_0x2d1624(0x501)]=_0x466a5d;},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x412)]=function(){const _0x495c36=_0x4c5915;if(this[_0x495c36(0x48a)]===undefined)this[_0x495c36(0x183)]();if(this[_0x495c36(0x48a)]['VisibleEventLabels']===undefined)this[_0x495c36(0x183)]();return this[_0x495c36(0x48a)][_0x495c36(0x325)];},Game_System[_0x4c5915(0x4ba)]['setEventLabelsVisible']=function(_0x4e40ce){const _0x166b81=_0x4c5915;if(this['_EventsMoveCoreSettings']===undefined)this['initEventsMoveCore']();if(this[_0x166b81(0x48a)]['VisibleEventLabels']===undefined)this[_0x166b81(0x183)]();this[_0x166b81(0x48a)][_0x166b81(0x325)]=_0x4e40ce;},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x1a4)]=function(){const _0x47f66d=_0x4c5915;if(this['_DisablePlayerControl']===undefined){if('oBszP'!=='oBszP'){this[_0x47f66d(0x1a9)](_0x462e63),_0x1d0efa[_0x47f66d(0x3e3)](this);const _0x26afce=_0x514a20['EventsMoveCore'][_0x47f66d(0x53a)][_0x47f66d(0x44d)](this,_0x21ee6d);return _0x279925['clearSelfTarget'](),_0x26afce;}else this[_0x47f66d(0x455)]=![];}return this[_0x47f66d(0x455)];},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x57e)]=function(_0x732755){this['_DisablePlayerControl']=_0x732755;},Game_System[_0x4c5915(0x4ba)]['getPlayerDiagonalSetting']=function(){const _0x4e69c5=_0x4c5915;return this[_0x4e69c5(0x523)];},Game_System['prototype']['setPlayerDiagonalSetting']=function(_0x1bcb7d){this['_PlayerDiagonalSetting']=String(_0x1bcb7d)['toLowerCase']()['trim']();},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x3f0)]=function(_0x401aec){const _0x27db33=_0x4c5915;if(this[_0x27db33(0x34f)]===undefined)this[_0x27db33(0x183)]();if(!_0x401aec)return null;if(_0x401aec===$gamePlayer)return this[_0x27db33(0x34f)][_0x27db33(0x29f)];else{const _0x517b6f=VisuMZ[_0x27db33(0x1fd)][_0x27db33(0x64c)],_0x5704db=_0x27db33(0x444)[_0x27db33(0x313)](_0x401aec[_0x27db33(0x229)],_0x401aec['_eventId']);return this[_0x27db33(0x34f)][_0x5704db]=this[_0x27db33(0x34f)][_0x5704db]||{'iconIndex':0x0,'bufferX':_0x517b6f['Icon']['BufferX'],'bufferY':_0x517b6f[_0x27db33(0x63a)][_0x27db33(0x2d6)],'blendMode':_0x517b6f[_0x27db33(0x63a)]['BlendMode']},this['_EventIcons'][_0x5704db];}},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x609)]=function(_0x46d8f3,_0x1412bd,_0x3a98be,_0x19f238,_0x4c4e49){const _0x29505b=_0x4c5915;if(this['_EventIcons']===undefined)this[_0x29505b(0x183)]();const _0x4dc324=_0x46d8f3===$gamePlayer?_0x29505b(0x29f):_0x29505b(0x444)[_0x29505b(0x313)](_0x46d8f3[_0x29505b(0x229)],_0x46d8f3[_0x29505b(0x3e5)]);this[_0x29505b(0x34f)][_0x4dc324]={'iconIndex':_0x1412bd,'bufferX':_0x3a98be,'bufferY':_0x19f238,'blendMode':_0x4c4e49};},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x2d2)]=function(_0x5f2310,_0x40e95d,_0x150cc4,_0x112d2f,_0x247073,_0x3240e1){const _0x329459=_0x4c5915;if(this[_0x329459(0x34f)]===undefined)this[_0x329459(0x183)]();const _0x579b8a=_0x329459(0x444)[_0x329459(0x313)](_0x5f2310,_0x40e95d);this[_0x329459(0x34f)][_0x579b8a]={'iconIndex':_0x150cc4,'bufferX':_0x112d2f,'bufferY':_0x247073,'blendMode':_0x3240e1};},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x1b0)]=function(_0x22976c){const _0x1cf617=_0x4c5915;if(this[_0x1cf617(0x34f)]===undefined)this[_0x1cf617(0x183)]();if(!_0x22976c)return null;if(_0x22976c===$gamePlayer)delete this[_0x1cf617(0x34f)]['Player'];else{if('Foszn'===_0x1cf617(0x3f7))this[_0x1cf617(0x50b)](_0x22976c[_0x1cf617(0x229)],_0x22976c[_0x1cf617(0x3e5)]);else{const _0xbce404=_0x3d1085[_0x1cf617(0x21c)](_0x1df474,_0x198d7e)[_0x1cf617(0x600)](_0x5bb704=>_0x5bb704!==this&&_0x5bb704['isNormalPriority']());return _0xbce404[_0x1cf617(0x179)]>0x0;}}},Game_System['prototype'][_0x4c5915(0x50b)]=function(_0x33beed,_0x402f07){const _0x26cec4=_0x4c5915;if(this['_EventIcons']===undefined)this[_0x26cec4(0x183)]();const _0x515347='Map%1-Event%2'[_0x26cec4(0x313)](_0x33beed,_0x402f07);delete this[_0x26cec4(0x34f)][_0x515347];},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x5fd)]=function(_0x276e2c){const _0x338bbe=_0x4c5915;if(this[_0x338bbe(0x38e)]===undefined)this['initEventsMoveCore']();if(!_0x276e2c)return null;const _0x20423e=_0x338bbe(0x444)[_0x338bbe(0x313)](_0x276e2c[_0x338bbe(0x229)],_0x276e2c['_eventId']);return this['_SavedEventLocations'][_0x20423e];},Game_System[_0x4c5915(0x4ba)]['saveEventLocation']=function(_0x60a73){const _0x4a08c4=_0x4c5915;if(this[_0x4a08c4(0x38e)]===undefined)this[_0x4a08c4(0x183)]();if(!_0x60a73)return;const _0x3388ec='Map%1-Event%2'[_0x4a08c4(0x313)](_0x60a73['_mapId'],_0x60a73[_0x4a08c4(0x3e5)]);this[_0x4a08c4(0x38e)][_0x3388ec]={'direction':_0x60a73['direction'](),'x':Math[_0x4a08c4(0x227)](_0x60a73['x']),'y':Math[_0x4a08c4(0x227)](_0x60a73['y']),'pageIndex':_0x60a73[_0x4a08c4(0x3ff)],'moveRouteIndex':_0x60a73[_0x4a08c4(0x3eb)]};},Game_System[_0x4c5915(0x4ba)]['deleteSavedEventLocation']=function(_0x438994){const _0x29333a=_0x4c5915;if(this['_SavedEventLocations']===undefined)this['initEventsMoveCore']();if(!_0x438994)return;this['deleteSavedEventLocationKey'](_0x438994[_0x29333a(0x229)],_0x438994[_0x29333a(0x3e5)]);},Game_System['prototype'][_0x4c5915(0x384)]=function(_0x55f35b,_0x25f114){const _0x599def=_0x4c5915;if(this['_SavedEventLocations']===undefined)this['initEventsMoveCore']();const _0xcf983a=_0x599def(0x444)[_0x599def(0x313)](_0x55f35b,_0x25f114);delete this[_0x599def(0x38e)][_0xcf983a];},Game_System[_0x4c5915(0x4ba)]['createSaveEventLocationData']=function(_0x492b1c,_0x1701d0,_0x13d0f6,_0x4df3fb,_0x1f10eb,_0x119495,_0x47fd12){const _0x593843=_0x4c5915;if(this['_SavedEventLocations']===undefined)this[_0x593843(0x183)]();const _0x41fb75=_0x593843(0x444)[_0x593843(0x313)](_0x492b1c,_0x1701d0);this['_SavedEventLocations'][_0x41fb75]={'direction':_0x1f10eb,'x':Math[_0x593843(0x227)](_0x13d0f6),'y':Math[_0x593843(0x227)](_0x4df3fb),'pageIndex':_0x119495,'moveRouteIndex':_0x47fd12};},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x370)]=function(_0x3fcb1f){const _0x1009eb=_0x4c5915;if(this['_PreservedEventMorphData']===undefined)this[_0x1009eb(0x183)]();if(!_0x3fcb1f)return;const _0x3d3162='Map%1-Event%2'[_0x1009eb(0x313)](_0x3fcb1f[_0x1009eb(0x229)],_0x3fcb1f['_eventId']);return this[_0x1009eb(0x506)][_0x3d3162];},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x61f)]=function(_0x200c6e,_0x182f55,_0x9d702f,_0x515bcf,_0x40c25d){const _0x1b856d=_0x4c5915;if(this[_0x1b856d(0x506)]===undefined)this[_0x1b856d(0x183)]();const _0x15d7e6=_0x1b856d(0x444)[_0x1b856d(0x313)](_0x200c6e,_0x182f55);this['_PreservedEventMorphData'][_0x15d7e6]={'template':_0x9d702f,'mapId':_0x515bcf,'eventId':_0x40c25d};},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x39d)]=function(_0x4850eb,_0x2ebc86){const _0x3bd0a8=_0x4c5915;if(this['_PreservedEventMorphData']===undefined)this[_0x3bd0a8(0x183)]();const _0x4bebf0=_0x3bd0a8(0x444)[_0x3bd0a8(0x313)](_0x4850eb,_0x2ebc86);delete this[_0x3bd0a8(0x506)][_0x4bebf0];},Game_System['prototype'][_0x4c5915(0x139)]=function(_0x3bfcc1){const _0x4a7f1a=_0x4c5915;if(this[_0x4a7f1a(0x4eb)]===undefined)this['initEventsMoveCore']();return this[_0x4a7f1a(0x4eb)][_0x3bfcc1]=this['_MapSpawnedEventData'][_0x3bfcc1]||[],this[_0x4a7f1a(0x4eb)][_0x3bfcc1];},Game_System[_0x4c5915(0x4ba)]['removeTemporaryMapSpawnedEvents']=function(_0x4d55aa){const _0x2e712c=_0x4c5915,_0x31728=this[_0x2e712c(0x139)](_0x4d55aa);for(const _0xfed134 of _0x31728){if(!_0xfed134)continue;if(_0xfed134[_0x2e712c(0x52d)])continue;const _0x4ab26c=_0x31728['indexOf'](_0xfed134);_0x31728[_0x4ab26c]=null;}},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x1e7)]=function(){const _0xdf7bc3=_0x4c5915;this[_0xdf7bc3(0x463)]=0x0,this['_followerChaseOff']=![];},Game_System[_0x4c5915(0x4ba)]['getControlledFollowerID']=function(){const _0x3b12f3=_0x4c5915;if(this[_0x3b12f3(0x463)]===undefined)this[_0x3b12f3(0x1e7)]();return this['_followerControlID'];},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x4e6)]=function(_0x22a9f4){const _0x21930e=_0x4c5915;if(this[_0x21930e(0x463)]===undefined)this[_0x21930e(0x1e7)]();this['_followerControlID']=_0x22a9f4;;},VisuMZ['EventsMoveCore'][_0x4c5915(0x3e9)]=Game_Interpreter[_0x4c5915(0x4ba)]['character'],Game_Interpreter[_0x4c5915(0x4ba)]['character']=function(_0x2ebd05){const _0x1c094b=_0x4c5915;if(!$gameParty['inBattle']()&&_0x2ebd05<0x0){if(_0x1c094b(0x654)==='EhCZD'){let _0x410679=$gameSystem[_0x1c094b(0x138)]();if(_0x410679>0x0)return $gamePlayer[_0x1c094b(0x1b4)]()[_0x1c094b(0x53f)](_0x410679-0x1);}else{if(this[_0x1c094b(0x3e0)]===_0x534754)this[_0x1c094b(0x171)]();return this['_saveEventLocations'];}}return VisuMZ[_0x1c094b(0x1fd)][_0x1c094b(0x3e9)][_0x1c094b(0x44d)](this,_0x2ebd05);},Game_System['prototype'][_0x4c5915(0x4a8)]=function(){const _0x2cb58d=_0x4c5915;if(this[_0x2cb58d(0x2c0)]===undefined)this['initFollowerController']();return this[_0x2cb58d(0x2c0)];},Game_System[_0x4c5915(0x4ba)][_0x4c5915(0x18e)]=function(_0x430c32){const _0x350533=_0x4c5915;if(this['_followerChaseOff']===undefined)this[_0x350533(0x1e7)]();this[_0x350533(0x2c0)]=_0x430c32;;},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x230)]=Game_Followers[_0x4c5915(0x4ba)][_0x4c5915(0x1a2)],Game_Followers[_0x4c5915(0x4ba)][_0x4c5915(0x1a2)]=function(){const _0x37f03a=_0x4c5915;if($gameSystem['isStopFollowerChasing']())return;VisuMZ[_0x37f03a(0x1fd)][_0x37f03a(0x230)][_0x37f03a(0x44d)](this);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x25b)]=Game_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x537)],Game_Timer['prototype'][_0x4c5915(0x537)]=function(){const _0x1e0e18=_0x4c5915;VisuMZ[_0x1e0e18(0x1fd)]['Game_Timer_initialize'][_0x1e0e18(0x44d)](this),this[_0x1e0e18(0x183)]();},Game_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x183)]=function(){const _0x4cf1fb=_0x4c5915;this[_0x4cf1fb(0x24b)]=![],this[_0x4cf1fb(0x458)]=-0x1,this['_expireCommonEvent']=0x0;},Game_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x2de)]=function(_0xa81eaf){const _0x4d0e94=_0x4c5915;if(!_0xa81eaf)return;if(!this[_0x4d0e94(0x343)])return;if(this[_0x4d0e94(0x24b)])return;if(this['_frames']<=0x0)return;if(this[_0x4d0e94(0x458)]===undefined)this[_0x4d0e94(0x183)]();this['_frames']+=this[_0x4d0e94(0x458)];if(this[_0x4d0e94(0x19c)]<=0x0){if(_0x4d0e94(0x533)===_0x4d0e94(0x135))return!![];else this[_0x4d0e94(0x571)]();}},VisuMZ[_0x4c5915(0x1fd)]['Game_Timer_start']=Game_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x568)],Game_Timer[_0x4c5915(0x4ba)]['start']=function(_0x3a3eea){const _0x196d97=_0x4c5915;VisuMZ['EventsMoveCore'][_0x196d97(0x23a)][_0x196d97(0x44d)](this,_0x3a3eea);if(this[_0x196d97(0x24b)]===undefined)this[_0x196d97(0x183)]();this[_0x196d97(0x24b)]=![];},VisuMZ['EventsMoveCore'][_0x4c5915(0x49c)]=Game_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x25c)],Game_Timer['prototype'][_0x4c5915(0x25c)]=function(){const _0x592119=_0x4c5915;VisuMZ[_0x592119(0x1fd)]['Game_Timer_stop'][_0x592119(0x44d)](this);if(this[_0x592119(0x24b)]===undefined)this[_0x592119(0x183)]();this[_0x592119(0x24b)]=![];},Game_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x4af)]=function(){const _0x207ac7=_0x4c5915;if(this[_0x207ac7(0x19c)]<=0x0)return;this[_0x207ac7(0x24b)]=!![],this[_0x207ac7(0x343)]=!![];},Game_Timer[_0x4c5915(0x4ba)]['resume']=function(){const _0x414935=_0x4c5915;if(this[_0x414935(0x19c)]<=0x0)return;this[_0x414935(0x24b)]=![],this[_0x414935(0x343)]=!![];},Game_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x376)]=function(_0x1153e0){const _0x3a512b=_0x4c5915;this[_0x3a512b(0x19c)]=this['_frames']||0x0,this[_0x3a512b(0x19c)]+=_0x1153e0,this[_0x3a512b(0x343)]=!![],this[_0x3a512b(0x19c)]=Math[_0x3a512b(0x2a4)](0x1,this[_0x3a512b(0x19c)]);},Game_Timer['prototype'][_0x4c5915(0x5eb)]=function(_0x3fc015){const _0x2fb3cb=_0x4c5915;this['_frames']=this[_0x2fb3cb(0x19c)]||0x0,this[_0x2fb3cb(0x19c)]=_0x3fc015,this[_0x2fb3cb(0x343)]=!![],this['_frames']=Math[_0x2fb3cb(0x2a4)](0x1,this[_0x2fb3cb(0x19c)]);},Game_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x2c7)]=function(_0x54c5ba){const _0x4425e9=_0x4c5915;this[_0x4425e9(0x458)]=_0x54c5ba,this[_0x4425e9(0x343)]=!![],_0x54c5ba>0x0&&(this[_0x4425e9(0x19c)]=Math[_0x4425e9(0x2a4)](this['_frames'],0x1));},Game_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x140)]=function(_0x24afdb){const _0x1591c0=_0x4c5915;if(this['_expireCommonEvent']===undefined)this['initEventsMoveCore']();this[_0x1591c0(0x352)]=_0x24afdb;},VisuMZ[_0x4c5915(0x1fd)]['Game_Timer_onExpire']=Game_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x571)],Game_Timer[_0x4c5915(0x4ba)]['onExpire']=function(){const _0xfbe7a9=_0x4c5915;if(this[_0xfbe7a9(0x352)]===undefined)this['initEventsMoveCore']();if(this['_expireCommonEvent'])$gameTemp['reserveCommonEvent'](this[_0xfbe7a9(0x352)]);else{if(_0xfbe7a9(0x2d4)!==_0xfbe7a9(0x507))VisuMZ[_0xfbe7a9(0x1fd)][_0xfbe7a9(0x563)][_0xfbe7a9(0x44d)](this);else{if(_0x3d2673)this[_0xfbe7a9(0x1d8)](_0x5ddf63['x'],_0x39d53b['y']);}}},VisuMZ['EventsMoveCore']['Game_Message_add']=Game_Message['prototype'][_0x4c5915(0x48f)],Game_Message['prototype']['add']=function(_0xa1f037){const _0x2de819=_0x4c5915;VisuMZ[_0x2de819(0x1fd)]['Game_Message_add'][_0x2de819(0x44d)](this,_0xa1f037),this['_selfEvent']=$gameTemp[_0x2de819(0x255)]();},Game_Message[_0x4c5915(0x4ba)][_0x4c5915(0x2c2)]=function(){$gameTemp['registerSelfTarget'](this['_selfEvent']);},VisuMZ['EventsMoveCore'][_0x4c5915(0x37d)]=Game_Switches[_0x4c5915(0x4ba)][_0x4c5915(0x666)],Game_Switches[_0x4c5915(0x4ba)][_0x4c5915(0x666)]=function(_0x529d2d){const _0x4d7618=_0x4c5915;if(DataManager[_0x4d7618(0x539)](_0x529d2d))return!!this[_0x4d7618(0x37f)](_0x529d2d);else{if(DataManager[_0x4d7618(0x578)](_0x529d2d))return!!this[_0x4d7618(0x42e)](_0x529d2d);else return DataManager[_0x4d7618(0x5ce)](_0x529d2d)?'lByxZ'===_0x4d7618(0x35e)?!!this[_0x4d7618(0x573)](_0x529d2d):this[_0x4d7618(0x36c)]():_0x4d7618(0x27b)===_0x4d7618(0x27b)?VisuMZ['EventsMoveCore'][_0x4d7618(0x37d)]['call'](this,_0x529d2d):_0x42d96d[_0x4d7618(0x1fd)][_0x4d7618(0x28b)][_0x4d7618(0x44d)](this);}},Game_Switches['advancedFunc']={},Game_Switches['prototype'][_0x4c5915(0x37f)]=function(_0x349c08){const _0x301e08=_0x4c5915;if(!Game_Switches['advancedFunc'][_0x349c08]){$dataSystem['switches'][_0x349c08]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x339f16=_0x301e08(0x5fc)[_0x301e08(0x313)](String(RegExp['$1']));Game_Switches[_0x301e08(0x36a)][_0x349c08]=new Function(_0x301e08(0x2eb),_0x339f16);}const _0x25da40=$gameTemp[_0x301e08(0x255)]()||this;return Game_Switches[_0x301e08(0x36a)][_0x349c08][_0x301e08(0x44d)](_0x25da40,_0x349c08);},Game_Switches[_0x4c5915(0x4ba)][_0x4c5915(0x42e)]=function(_0x41e62f){const _0x4e307d=_0x4c5915,_0x3ff024=$gameTemp[_0x4e307d(0x255)]()||this;if(_0x3ff024[_0x4e307d(0x3c2)]!==Game_Event){if(_0x4e307d(0x4c7)!==_0x4e307d(0x53c))return VisuMZ[_0x4e307d(0x1fd)][_0x4e307d(0x37d)][_0x4e307d(0x44d)](this,_0x41e62f);else{if(this[_0x4e307d(0x65e)])return;if(_0x2452c5[_0x4e307d(0x4a8)]())return;_0x588b19[_0x4e307d(0x1fd)][_0x4e307d(0x2d7)][_0x4e307d(0x44d)](this,_0x71cac0),this[_0x4e307d(0x315)]=!![];}}else{const _0x1146ee=[_0x3ff024[_0x4e307d(0x229)],_0x3ff024[_0x4e307d(0x3e5)],'Self\x20Switch\x20%1'['format'](_0x41e62f)];return $gameSelfSwitches['value'](_0x1146ee);}},Game_Switches[_0x4c5915(0x4ba)][_0x4c5915(0x573)]=function(_0x5ca6dc){const _0x61cd78=_0x4c5915,_0x175d37=$gameMap?$gameMap[_0x61cd78(0x3c8)]():0x0,_0x48a090=[0x0,0x0,_0x61cd78(0x417)[_0x61cd78(0x313)](_0x175d37,_0x5ca6dc)];return $gameSelfSwitches[_0x61cd78(0x666)](_0x48a090);},VisuMZ[_0x4c5915(0x1fd)]['Game_Switches_setValue']=Game_Switches[_0x4c5915(0x4ba)][_0x4c5915(0x163)],Game_Switches[_0x4c5915(0x4ba)][_0x4c5915(0x163)]=function(_0x47b87b,_0x2ea0ba){const _0x298443=_0x4c5915;if(DataManager[_0x298443(0x578)](_0x47b87b))_0x298443(0x5c2)===_0x298443(0x286)?(_0x3b714e['ConvertParams'](_0x2b8072,_0xa4a4),_0x3fbb8d[_0x298443(0x181)]()):this['setSelfValue'](_0x47b87b,_0x2ea0ba);else DataManager[_0x298443(0x5ce)](_0x47b87b)?this[_0x298443(0x153)](_0x47b87b,_0x2ea0ba):VisuMZ[_0x298443(0x1fd)][_0x298443(0x5c4)][_0x298443(0x44d)](this,_0x47b87b,_0x2ea0ba);},Game_Switches[_0x4c5915(0x4ba)]['setSelfValue']=function(_0x1039e0,_0x2c64c2){const _0x386db0=_0x4c5915,_0x2d432c=$gameTemp[_0x386db0(0x255)]()||this;if(_0x2d432c[_0x386db0(0x3c2)]!==Game_Event)VisuMZ['EventsMoveCore'][_0x386db0(0x5c4)]['call'](this,_0x1039e0,_0x2c64c2);else{const _0x952976=[_0x2d432c['_mapId'],_0x2d432c[_0x386db0(0x3e5)],'Self\x20Switch\x20%1'[_0x386db0(0x313)](_0x1039e0)];$gameSelfSwitches[_0x386db0(0x163)](_0x952976,_0x2c64c2);}},Game_Switches['prototype']['setMapValue']=function(_0x40d22f,_0x5c6d2c){const _0x49d0e6=_0x4c5915,_0xcc1222=$gameMap?$gameMap[_0x49d0e6(0x3c8)]():0x0,_0x3171fb=[0x0,0x0,_0x49d0e6(0x417)[_0x49d0e6(0x313)](_0xcc1222,_0x40d22f)];return $gameSelfSwitches['setValue'](_0x3171fb,_0x5c6d2c);},VisuMZ[_0x4c5915(0x1fd)]['Game_Variables_value']=Game_Variables[_0x4c5915(0x4ba)][_0x4c5915(0x666)],Game_Variables[_0x4c5915(0x4ba)][_0x4c5915(0x666)]=function(_0x491f3b){const _0x6b593c=_0x4c5915;if(DataManager[_0x6b593c(0x144)](_0x491f3b))return this[_0x6b593c(0x37f)](_0x491f3b);else{if(DataManager[_0x6b593c(0x2d9)](_0x491f3b)){if('HbrJl'!==_0x6b593c(0x2b2)){const _0x37871f=_0x6570af(_0x43cf43['$1']);if(_0x37871f['match'](/PLAYER/i))this[_0x6b593c(0x4be)][_0x6b593c(0x44c)]=0x0;else _0x37871f[_0x6b593c(0x603)](/EVENT[ ](\d+)/i)&&(this[_0x6b593c(0x4be)][_0x6b593c(0x44c)]=_0x472120(_0x4e0239['$1']));}else return this[_0x6b593c(0x42e)](_0x491f3b);}else{if(DataManager['isMapVariable'](_0x491f3b)){if(_0x6b593c(0x448)!==_0x6b593c(0x448)){const _0x1d80bd=_0x2d4846[_0x6b593c(0x1fd)][_0x6b593c(0x64c)][_0x6b593c(0x28d)],_0x4aeecd=this[_0x6b593c(0x25f)][_0x6b593c(0x1b6)]();let _0xaf9201=0x0;if([0x1,0x4,0x7][_0x6b593c(0x452)](_0x4aeecd))_0xaf9201=_0x1d80bd[_0x6b593c(0x4b9)];if([0x3,0x6,0x9][_0x6b593c(0x452)](_0x4aeecd))_0xaf9201=_0x1d80bd[_0x6b593c(0x406)];[0x2,0x8][_0x6b593c(0x452)](_0x4aeecd)&&(_0xaf9201=[-_0x1d80bd[_0x6b593c(0x217)],0x0,_0x1d80bd[_0x6b593c(0x217)]][this[_0x6b593c(0x25f)]['pattern']()]);if(this[_0x6b593c(0x260)])_0xaf9201*=-0x1;this[_0x6b593c(0x5c3)]=_0xaf9201;}else return this[_0x6b593c(0x573)](_0x491f3b);}else return'Dvsya'!=='oEqZv'?VisuMZ[_0x6b593c(0x1fd)][_0x6b593c(0x268)][_0x6b593c(0x44d)](this,_0x491f3b):this[_0x6b593c(0x462)]()['characterName']()[_0x6b593c(0x603)](/\[VS8\]/i);}}},Game_Variables[_0x4c5915(0x36a)]={},Game_Variables[_0x4c5915(0x4ba)][_0x4c5915(0x37f)]=function(_0xfdd54c){const _0x4a5894=_0x4c5915;if(!Game_Variables[_0x4a5894(0x36a)][_0xfdd54c]){if(_0x4a5894(0x355)!==_0x4a5894(0x579)){$dataSystem[_0x4a5894(0x5bf)][_0xfdd54c]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x4e50b1=_0x4a5894(0x5fc)[_0x4a5894(0x313)](String(RegExp['$1']));Game_Variables[_0x4a5894(0x36a)][_0xfdd54c]=new Function(_0x4a5894(0x2b7),_0x4e50b1);}else _0x582f9c['EventsMoveCore']['Game_Event_initialize']['call'](this,_0x2813cd,_0x1f7187),this[_0x4a5894(0x528)](),this[_0x4a5894(0x485)](),this[_0x4a5894(0x267)]();}const _0x2498f9=$gameTemp[_0x4a5894(0x255)]()||this;return Game_Variables[_0x4a5894(0x36a)][_0xfdd54c][_0x4a5894(0x44d)](_0x2498f9,_0xfdd54c);},Game_Variables[_0x4c5915(0x4ba)]['selfValue']=function(_0x276cfa){const _0x4de6f7=_0x4c5915,_0x9f7656=$gameTemp[_0x4de6f7(0x255)]()||this;if(_0x9f7656['constructor']!==Game_Event)return VisuMZ[_0x4de6f7(0x1fd)][_0x4de6f7(0x268)]['call'](this,_0x276cfa);else{if(_0x4de6f7(0x37e)===_0x4de6f7(0x37e)){const _0x2dd43a=[_0x9f7656['_mapId'],_0x9f7656[_0x4de6f7(0x3e5)],'Self\x20Variable\x20%1'['format'](_0x276cfa)];return $gameSelfSwitches[_0x4de6f7(0x666)](_0x2dd43a);}else{if(_0x236284)_0x403f93[_0x4de6f7(0x156)](_0x4fead4);}}},Game_Variables[_0x4c5915(0x4ba)][_0x4c5915(0x573)]=function(_0x3df487){const _0x5a619a=_0x4c5915,_0x286021=$gameMap?$gameMap[_0x5a619a(0x3c8)]():0x0,_0x5e81dd=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'[_0x5a619a(0x313)](_0x286021,_0x3df487)];return $gameSelfSwitches['value'](_0x5e81dd)||0x0;},VisuMZ['EventsMoveCore'][_0x4c5915(0x562)]=Game_Variables[_0x4c5915(0x4ba)][_0x4c5915(0x163)],Game_Variables[_0x4c5915(0x4ba)][_0x4c5915(0x163)]=function(_0x21f497,_0x4f4533){const _0x59c838=_0x4c5915;if(DataManager[_0x59c838(0x2d9)](_0x21f497)){if('MqDii'!=='MqDii')return this[_0x59c838(0x462)]()[_0x59c838(0x56f)](_0x140043,_0xa2b257,_0x4513bf);else this[_0x59c838(0x327)](_0x21f497,_0x4f4533);}else DataManager['isMapVariable'](_0x21f497)?this[_0x59c838(0x153)](_0x21f497,_0x4f4533):VisuMZ['EventsMoveCore'][_0x59c838(0x562)][_0x59c838(0x44d)](this,_0x21f497,_0x4f4533);},Game_Variables['prototype'][_0x4c5915(0x327)]=function(_0x51f8a1,_0xebc2ab){const _0x5b9fb5=_0x4c5915,_0x35e52b=$gameTemp[_0x5b9fb5(0x255)]()||this;if(_0x35e52b[_0x5b9fb5(0x3c2)]!==Game_Event)VisuMZ[_0x5b9fb5(0x1fd)]['Game_Variables_setValue'][_0x5b9fb5(0x44d)](this,_0x51f8a1,_0xebc2ab);else{const _0x474d4e=[_0x35e52b[_0x5b9fb5(0x229)],_0x35e52b[_0x5b9fb5(0x3e5)],_0x5b9fb5(0x258)['format'](_0x51f8a1)];$gameSelfSwitches[_0x5b9fb5(0x163)](_0x474d4e,_0xebc2ab);}},Game_Variables[_0x4c5915(0x4ba)][_0x4c5915(0x153)]=function(_0x392d46,_0xc470cd){const _0x42a56f=_0x4c5915,_0x4d4032=$gameMap?$gameMap[_0x42a56f(0x3c8)]():0x0,_0x1c523a=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'['format'](_0x4d4032,_0x392d46)];$gameSelfSwitches[_0x42a56f(0x163)](_0x1c523a,_0xc470cd);},VisuMZ['EventsMoveCore']['Game_SelfSwitches_value']=Game_SelfSwitches[_0x4c5915(0x4ba)][_0x4c5915(0x666)],Game_SelfSwitches['prototype'][_0x4c5915(0x666)]=function(_0x1fd5a9){const _0x4f3dd2=_0x4c5915;if(_0x1fd5a9[0x2][_0x4f3dd2(0x603)](/(?:SELF|MAP)/i))return this['selfValue'](_0x1fd5a9);else{return VisuMZ[_0x4f3dd2(0x1fd)]['Game_SelfSwitches_value']['call'](this,_0x1fd5a9);;}},Game_SelfSwitches['prototype']['selfValue']=function(_0x586356){const _0x3e65d3=_0x4c5915;return _0x586356[0x2][_0x3e65d3(0x603)](/VAR/i)?this[_0x3e65d3(0x3d6)][_0x586356]||0x0:!!this['_data'][_0x586356];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x504)]=Game_SelfSwitches[_0x4c5915(0x4ba)]['setValue'],Game_SelfSwitches[_0x4c5915(0x4ba)][_0x4c5915(0x163)]=function(_0x129981,_0x34a5cc){const _0x41bfdf=_0x4c5915;if(_0x129981[0x2][_0x41bfdf(0x603)](/(?:SELF|MAP)/i))this[_0x41bfdf(0x327)](_0x129981,_0x34a5cc);else{if('OXfOV'!=='OXfOV'){if(_0x3777dc[_0x41bfdf(0x479)][_0x39d84c][_0x41bfdf(0x603)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))_0x3d6dda['AdvancedSwitches']['push'](_0x44c656);if(_0x183703[_0x41bfdf(0x479)][_0x5556cd]['match'](/<SELF>/i))_0x1e8aff[_0x41bfdf(0x4bd)][_0x41bfdf(0x19f)](_0xb5379c);if(_0x3250a8[_0x41bfdf(0x479)][_0xd5f7f7][_0x41bfdf(0x603)](/<MAP>/i))_0x43035a['MapSwitches'][_0x41bfdf(0x19f)](_0x50fb8d);}else VisuMZ[_0x41bfdf(0x1fd)][_0x41bfdf(0x504)]['call'](this,_0x129981,_0x34a5cc);}},Game_SelfSwitches[_0x4c5915(0x4ba)]['setSelfValue']=function(_0x1634cd,_0x150544){const _0x521b86=_0x4c5915;this[_0x521b86(0x3d6)][_0x1634cd]=_0x1634cd[0x2]['match'](/VAR/i)?_0x150544:!!_0x150544,this['onChange']();},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x31a)]=Scene_Map[_0x4c5915(0x4ba)][_0x4c5915(0x309)],Scene_Map[_0x4c5915(0x4ba)][_0x4c5915(0x309)]=function(){const _0x4d39de=_0x4c5915;$gameMap[_0x4d39de(0x1e4)](),VisuMZ[_0x4d39de(0x1fd)][_0x4d39de(0x31a)][_0x4d39de(0x44d)](this);},Game_Map[_0x4c5915(0x4ba)]['resetExitSelfSwitches']=function(){const _0x44c82e=_0x4c5915;this[_0x44c82e(0x1cb)]=this['mapId'](),this[_0x44c82e(0x24f)]=undefined;const _0x5cfb88=this[_0x44c82e(0x57c)]();for(const _0x55848c of _0x5cfb88){if(_0x55848c)$gameSelfSwitches[_0x44c82e(0x156)](_0x55848c);}},Game_SelfSwitches['prototype'][_0x4c5915(0x156)]=function(_0xfa4584){const _0x3793e4=_0x4c5915;if(!_0xfa4584)return;if(!_0xfa4584[_0x3793e4(0x4f1)]())return;const _0x3bc7e9=_0xfa4584['event']()['note']||'';if(_0x3bc7e9[_0x3793e4(0x603)](/<(?:EXIT RESET|EXIT|TEMP|TEMPORARY) (?:SELF|SELF SWITCH|SELF SWITCHES|SELF DATA)>/i)){const _0x1e1438=_0x3793e4(0x46b)[_0x3793e4(0x313)]($gameMap['_mapId'],_0xfa4584[_0x3793e4(0x3e5)]),_0x5d3981=Object[_0x3793e4(0x42c)](this[_0x3793e4(0x3d6)])[_0x3793e4(0x600)](_0x1282d2=>_0x1282d2[_0x3793e4(0x429)](_0x1e1438));while(_0x5d3981['length']>0x0){if(_0x3793e4(0x245)!=='NZsDU'){const _0x31ddd0=_0x5d3981[_0x3793e4(0x542)]();delete this[_0x3793e4(0x3d6)][_0x31ddd0];}else this[_0x3793e4(0x19a)](_0x3df84d,_0xad51f8['x']+0x2,_0x4a1fc1['y']);}}},Game_SelfSwitches[_0x4c5915(0x4ba)][_0x4c5915(0x3f8)]=function(_0x326755){const _0x14321f=_0x4c5915,_0x34d104=_0x14321f(0x4c0)['format']($gameMap['_mapId']),_0x30dbb8=Object[_0x14321f(0x42c)](this[_0x14321f(0x3d6)])[_0x14321f(0x600)](_0xe39d4c=>_0xe39d4c[_0x14321f(0x429)](_0x34d104));while(_0x30dbb8[_0x14321f(0x179)]>0x0){const _0x139619=_0x30dbb8['shift']();delete this[_0x14321f(0x3d6)][_0x139619];}_0x326755===$gameMap['mapId']()&&$gameMap[_0x14321f(0x648)]();},VisuMZ['EventsMoveCore'][_0x4c5915(0x60f)]=Game_Enemy[_0x4c5915(0x4ba)][_0x4c5915(0x330)],Game_Enemy[_0x4c5915(0x4ba)]['meetsSwitchCondition']=function(_0x315373){const _0x40f1be=_0x4c5915;$gameTemp['registerSelfTarget'](this);const _0x55f30b=VisuMZ[_0x40f1be(0x1fd)][_0x40f1be(0x60f)][_0x40f1be(0x44d)](this,_0x315373);return $gameTemp[_0x40f1be(0x614)](),_0x55f30b;},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x51c)]=Game_Troop['prototype'][_0x4c5915(0x632)],Game_Troop[_0x4c5915(0x4ba)]['meetsConditions']=function(_0x14ee56){const _0x1690ac=_0x4c5915;$gameTemp[_0x1690ac(0x3e3)](this);const _0x1ec5bb=VisuMZ[_0x1690ac(0x1fd)]['Game_Troop_meetsConditions'][_0x1690ac(0x44d)](this,_0x14ee56);return $gameTemp['clearSelfTarget'](),_0x1ec5bb;},VisuMZ['EventsMoveCore']['Game_Map_setup']=Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x5ff)],Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x5ff)]=function(_0xa963d1){const _0x492563=_0x4c5915;this['removeTemporaryMapSpawnedEvents'](_0xa963d1),this[_0x492563(0x221)](),VisuMZ['EventsMoveCore']['Game_Map_setup'][_0x492563(0x44d)](this,_0xa963d1),this[_0x492563(0x221)](),this[_0x492563(0x3fe)](),this['setupRegionRestrictions'](),this[_0x492563(0x171)](),this[_0x492563(0x228)](),this[_0x492563(0x242)](),this[_0x492563(0x1fe)](),this['clearEventCache']();},VisuMZ[_0x4c5915(0x1fd)]['Game_Map_setupEvents']=Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x175)],Game_Map[_0x4c5915(0x4ba)]['setupEvents']=function(){const _0x3fe7d6=_0x4c5915;VisuMZ[_0x3fe7d6(0x1fd)][_0x3fe7d6(0x558)][_0x3fe7d6(0x44d)](this),this[_0x3fe7d6(0x32f)]();},Game_Map[_0x4c5915(0x3b1)]=0xc8,Game_Map['prototype'][_0x4c5915(0x180)]=function(){const _0x5e61b8=_0x4c5915,_0xab4208=Game_Map[_0x5e61b8(0x3b1)];this[_0x5e61b8(0x238)]=this['events']()[_0x5e61b8(0x179)]>_0xab4208;if(this[_0x5e61b8(0x238)]&&$gameTemp['isPlaytest']()){}},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x1c1)]=function(){const _0x25ccae=_0x4c5915;return this[_0x25ccae(0x238)];},Game_Map[_0x4c5915(0x4ba)]['clearEventCache']=function(){this['_eventCache']=undefined;},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x3fe)]=function(){const _0x13a9dd=_0x4c5915;this['_diagonalSupport']=VisuMZ[_0x13a9dd(0x1fd)]['Settings'][_0x13a9dd(0x28d)][_0x13a9dd(0x169)];const _0x55951c=$dataMap[_0x13a9dd(0x31c)]||'';if(_0x55951c[_0x13a9dd(0x603)](/<DIAGONAL MOVEMENT: ON>/i))this[_0x13a9dd(0x2a8)]=!![];else _0x55951c[_0x13a9dd(0x603)](/<DIAGONAL MOVEMENT: OFF>/i)&&(this[_0x13a9dd(0x2a8)]=![]);},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x188)]=function(){const _0x7ed7d5=_0x4c5915,_0x2708c5=$gameSystem[_0x7ed7d5(0x5f7)]();if(_0x2708c5===_0x7ed7d5(0x497))return!![];if(_0x2708c5===_0x7ed7d5(0x48c))return![];if(this[_0x7ed7d5(0x2a8)]===undefined)this[_0x7ed7d5(0x3fe)]();return this[_0x7ed7d5(0x2a8)];},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x454)]=function(_0x185dad,_0x33245c){const _0x1a2517=_0x4c5915;if([0x1,0x4,0x7][_0x1a2517(0x452)](_0x33245c))_0x185dad-=0x1;if([0x3,0x6,0x9][_0x1a2517(0x452)](_0x33245c))_0x185dad+=0x1;return this[_0x1a2517(0x457)](_0x185dad);},Game_Map['prototype'][_0x4c5915(0x2bc)]=function(_0x2fad2a,_0x3efefe){const _0x4b66d7=_0x4c5915;if([0x1,0x2,0x3][_0x4b66d7(0x452)](_0x3efefe))_0x2fad2a+=0x1;if([0x7,0x8,0x9][_0x4b66d7(0x452)](_0x3efefe))_0x2fad2a-=0x1;return this[_0x4b66d7(0x316)](_0x2fad2a);},Game_Map[_0x4c5915(0x4ba)]['absDistance']=function(_0x5014e4,_0x3a031a,_0x4e998c,_0x4edd2d){const _0x49ed2a=_0x4c5915;return Math[_0x49ed2a(0x2a4)](Math[_0x49ed2a(0x357)](this[_0x49ed2a(0x168)](_0x5014e4,_0x4e998c)),Math[_0x49ed2a(0x357)](this['deltaY'](_0x3a031a,_0x4edd2d)));},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x33d)]=function(){const _0x26531c=_0x4c5915,_0x5c58b2=VisuMZ[_0x26531c(0x1fd)]['Settings']['Region'],_0x131c91={},_0x1ad7c7=[_0x26531c(0x2a3),_0x26531c(0x481),_0x26531c(0x4e4)],_0x44504d=[_0x26531c(0x2c8),_0x26531c(0x356),_0x26531c(0x29f),'Event',_0x26531c(0x555),'Boat',_0x26531c(0x633),'Airship'];for(const _0x33a04a of _0x1ad7c7){for(const _0x5eaecb of _0x44504d){const _0x531ae6='%1%2'['format'](_0x5eaecb,_0x33a04a);_0x5c58b2[_0x531ae6]&&(_0x131c91[_0x531ae6]=_0x5c58b2[_0x531ae6][_0x26531c(0x4d6)](0x0));}}const _0x2c9782=$dataMap[_0x26531c(0x31c)]||'',_0x42f101=_0x2c9782[_0x26531c(0x603)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x42f101){if(_0x26531c(0x3cd)==='JwJRD')return this[_0x26531c(0x523)];else for(const _0x2b0b4d of _0x42f101){if(_0x26531c(0x142)==='uOLZy'){_0x6f1aa4=this[_0x26531c(0x3e1)]-_0x428ac0,this[_0x26531c(0x2bf)](_0x4d4723[_0x26531c(0x1b9)](0x0,0xff));if(this[_0x26531c(0x3e1)]>0x0)this[_0x26531c(0x3eb)]--;}else{_0x2b0b4d['match'](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0xca82f=String(RegExp['$1'])[_0x26531c(0x650)]()[_0x26531c(0x344)](),_0x3e4c71=String(RegExp['$2'])[_0x26531c(0x650)]()[_0x26531c(0x344)]();const _0x17bd30=JSON[_0x26531c(0x508)]('['+RegExp['$3']['match'](/\d+/g)+']');_0xca82f=_0xca82f[_0x26531c(0x65f)](0x0)[_0x26531c(0x4b1)]()+_0xca82f['slice'](0x1),_0x3e4c71=_0x3e4c71[_0x26531c(0x65f)](0x0)[_0x26531c(0x4b1)]()+_0x3e4c71['slice'](0x1);const _0x563a52=_0x26531c(0x4ab)[_0x26531c(0x313)](_0xca82f,_0x3e4c71);if(_0x131c91[_0x563a52])_0x131c91[_0x563a52]=_0x131c91[_0x563a52][_0x26531c(0x1c3)](_0x17bd30);}}}this[_0x26531c(0x239)]=_0x131c91;},Game_Map[_0x4c5915(0x4ba)]['isRegionAllowPass']=function(_0x414365,_0xbf850b,_0x9aa49a,_0xd677d4){const _0x610fc0=_0x4c5915,_0x418c98=this[_0x610fc0(0x454)](_0x414365,_0x9aa49a),_0x41f39f=this[_0x610fc0(0x2bc)](_0xbf850b,_0x9aa49a),_0x16681e=this['regionId'](_0x418c98,_0x41f39f),_0x37340a=this['_regionRules'];if(_0x37340a[_0x610fc0(0x608)][_0x610fc0(0x452)](_0x16681e)){if('eoQUe'!==_0x610fc0(0x459)){if([0x1,0x4,0x7][_0x610fc0(0x452)](_0x28ab93))_0x28dc92-=0x1;if([0x3,0x6,0x9][_0x610fc0(0x452)](_0x1ee65c))_0x42016d+=0x1;return this['roundX'](_0x378c90);}else return!![];}else{if(_0xd677d4===_0x610fc0(0x4e2))return _0x37340a['PlayerAllow']['includes'](_0x16681e)||_0x37340a[_0x610fc0(0x521)][_0x610fc0(0x452)](_0x16681e);else{if(_0xd677d4==='event'){if('VmHmJ'!==_0x610fc0(0x3bc))return _0x37340a[_0x610fc0(0x34b)][_0x610fc0(0x452)](_0x16681e)||_0x37340a[_0x610fc0(0x521)][_0x610fc0(0x452)](_0x16681e);else this['_diagonalSupport']=![];}else{if(_0x37340a['VehicleAllow'][_0x610fc0(0x452)](_0x16681e)){if('MaDsj'===_0x610fc0(0x1a3))this[_0x610fc0(0x537)]['apply'](this,arguments);else return!![];}else{if(_0x610fc0(0x518)!==_0x610fc0(0x2a2)){const _0x5cf974=_0x610fc0(0x46d)[_0x610fc0(0x313)](_0xd677d4['charAt'](0x0)[_0x610fc0(0x4b1)]()+_0xd677d4[_0x610fc0(0x4d6)](0x1));if(_0x37340a[_0x5cf974])return _0x37340a[_0x5cf974][_0x610fc0(0x452)](_0x16681e);}else return _0x2f145d[_0x610fc0(0x4ba)][_0x610fc0(0x3f0)]['call'](this);}}}}return![];},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x451)]=function(_0x53565a,_0x16d7ca,_0x51cc2c,_0x3a86f5){const _0x2d760f=_0x4c5915,_0x26e03c=this[_0x2d760f(0x454)](_0x53565a,_0x51cc2c),_0x2bb7fb=this[_0x2d760f(0x2bc)](_0x16d7ca,_0x51cc2c),_0xaf3490=this[_0x2d760f(0x3d8)](_0x26e03c,_0x2bb7fb),_0x71d8eb=this['_regionRules'];if(_0x71d8eb['AllForbid'][_0x2d760f(0x452)](_0xaf3490))return!![];else{if(_0x3a86f5==='player')return _0x71d8eb[_0x2d760f(0x350)][_0x2d760f(0x452)](_0xaf3490)||_0x71d8eb[_0x2d760f(0x5cb)][_0x2d760f(0x452)](_0xaf3490);else{if(_0x3a86f5===_0x2d760f(0x4f1)){if(_0x2d760f(0x565)!==_0x2d760f(0x513))return _0x71d8eb['EventForbid'][_0x2d760f(0x452)](_0xaf3490)||_0x71d8eb[_0x2d760f(0x5cb)][_0x2d760f(0x452)](_0xaf3490);else _0x130369&&(_0x7b214d['_visiblePlayerX']=_0x8d02cd,_0x172960[_0x2d760f(0x476)]());}else{if(_0x71d8eb[_0x2d760f(0x624)]['includes'](_0xaf3490)){if(_0x2d760f(0x1ea)===_0x2d760f(0x1ea))return!![];else{if(_0x592244['_scene'][_0x2d760f(0x3c2)]===_0x52e51c)return![];return _0x44286c['SelfSwitches']['includes'](_0x2eed27);}}else{const _0x31dd11=_0x2d760f(0x368)[_0x2d760f(0x313)](_0x3a86f5[_0x2d760f(0x65f)](0x0)[_0x2d760f(0x4b1)]()+_0x3a86f5[_0x2d760f(0x4d6)](0x1));if(_0x71d8eb[_0x31dd11])return _0x71d8eb[_0x31dd11][_0x2d760f(0x452)](_0xaf3490);}}}}return![];},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x399)]=function(_0x34e591,_0x5edbb7,_0x310b91,_0x9a8584){const _0x1424a1=_0x4c5915;_0x310b91=_0x9a8584===_0x1424a1(0x402)?0x5:_0x310b91;const _0x3cb180=this[_0x1424a1(0x454)](_0x34e591,_0x310b91),_0x8d2304=this[_0x1424a1(0x2bc)](_0x5edbb7,_0x310b91),_0x1c8aa4=this[_0x1424a1(0x3d8)](_0x3cb180,_0x8d2304),_0x2ddb73=this['_regionRules'];if(_0x2ddb73[_0x1424a1(0x55d)][_0x1424a1(0x452)](_0x1c8aa4)){if(_0x1424a1(0x4d5)===_0x1424a1(0x4d5))return!![];else{const _0x4d80d4=_0x1424a1(0x4c0)[_0x1424a1(0x313)](_0x18eaf8['_mapId']),_0x342225=_0x1ba8a7[_0x1424a1(0x42c)](this[_0x1424a1(0x3d6)])[_0x1424a1(0x600)](_0x732959=>_0x732959[_0x1424a1(0x429)](_0x4d80d4));while(_0x342225[_0x1424a1(0x179)]>0x0){const _0x489229=_0x342225[_0x1424a1(0x542)]();delete this[_0x1424a1(0x3d6)][_0x489229];}_0x1ff34e===_0x5aec08[_0x1424a1(0x3c8)]()&&_0x528dca[_0x1424a1(0x648)]();}}else{const _0xa89c9b=_0x1424a1(0x47d)[_0x1424a1(0x313)](_0x9a8584['charAt'](0x0)['toUpperCase']()+_0x9a8584[_0x1424a1(0x4d6)](0x1));if(_0x2ddb73[_0xa89c9b])return _0x2ddb73[_0xa89c9b][_0x1424a1(0x452)](_0x1c8aa4);}return![];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x40f)]=Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x476)],Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x476)]=function(){const _0x8c7857=_0x4c5915;VisuMZ[_0x8c7857(0x1fd)][_0x8c7857(0x40f)]['call'](this),this[_0x8c7857(0x4a2)]();},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x4a2)]=function(){const _0x628e4f=_0x4c5915;this[_0x628e4f(0x4a7)]=![];if(this[_0x628e4f(0x57c)]()[_0x628e4f(0x3fd)](_0x38890b=>_0x38890b[_0x628e4f(0x2f3)]())){this[_0x628e4f(0x4a7)]=!![];return;}if(this[_0x628e4f(0x57c)]()[_0x628e4f(0x3fd)](_0x40392d=>_0x40392d[_0x628e4f(0x4a5)]())){if(_0x628e4f(0x530)===_0x628e4f(0x3e8)){_0x1e8124[_0x628e4f(0x3e3)](this);const _0x39efc7=_0x11e4da[_0x628e4f(0x1fd)][_0x628e4f(0x60f)][_0x628e4f(0x44d)](this,_0x3d56c2);return _0xba4daf['clearSelfTarget'](),_0x39efc7;}else{this[_0x628e4f(0x4a7)]=!![];return;}}if(this['_commonEvents']['some'](_0x1b50e5=>_0x1b50e5[_0x628e4f(0x2f3)]())){this['_needsPeriodicRefresh']=!![];return;}if(this[_0x628e4f(0x56c)][_0x628e4f(0x3fd)](_0x22e07d=>_0x22e07d[_0x628e4f(0x4a5)]())){if('WAKHT'===_0x628e4f(0x3d2)){const _0x3040ce=this[_0x628e4f(0x4f1)]()[_0x628e4f(0x31c)];if(_0x3040ce==='')return;this[_0x628e4f(0x415)](_0x3040ce);}else{this[_0x628e4f(0x4a7)]=!![];return;}}},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x408)]=Game_Map[_0x4c5915(0x4ba)]['update'],Game_Map[_0x4c5915(0x4ba)]['update']=function(_0x5d97f2){const _0x4b5c18=_0x4c5915;this[_0x4b5c18(0x46e)](),VisuMZ[_0x4b5c18(0x1fd)][_0x4b5c18(0x408)][_0x4b5c18(0x44d)](this,_0x5d97f2);},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x46e)]=function(){const _0xbcbaee=_0x4c5915;if(!this[_0xbcbaee(0x4a7)])return;this[_0xbcbaee(0x505)]=this[_0xbcbaee(0x505)]||0x3c,this[_0xbcbaee(0x505)]--,this[_0xbcbaee(0x505)]<=0x0&&(_0xbcbaee(0x1df)===_0xbcbaee(0x4f2)?this[_0xbcbaee(0x4be)][_0xbcbaee(0x5c0)]=_0x1db870(_0x14a7d0['$1'])[_0xbcbaee(0x650)]()[_0xbcbaee(0x344)]():(this[_0xbcbaee(0x648)](),this['_periodicRefreshTimer']=0x3c));},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x29c)]=Game_Map[_0x4c5915(0x4ba)]['isDashDisabled'],Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x2a7)]=function(){const _0x1fd82d=_0x4c5915;if(!$gameSystem[_0x1fd82d(0x517)]())return!![];return VisuMZ['EventsMoveCore'][_0x1fd82d(0x29c)][_0x1fd82d(0x44d)](this);},Game_Map[_0x4c5915(0x4ba)]['setupSaveEventLocations']=function(){const _0x1a157c=_0x4c5915;this[_0x1a157c(0x3e0)]=![];const _0x45f9fe=$dataMap['note']||'';_0x45f9fe[_0x1a157c(0x603)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(_0x1a157c(0x48b)===_0x1a157c(0x48b)?this[_0x1a157c(0x3e0)]=!![]:this[_0x1a157c(0x5e6)]['labelWindowText']()!==this[_0x1a157c(0x17e)]&&(this['_text']=this[_0x1a157c(0x5e6)]['labelWindowText'](),this['refresh']()));},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x1e2)]=function(){const _0x3d0de5=_0x4c5915;if(this['_saveEventLocations']===undefined)this[_0x3d0de5(0x171)]();return this[_0x3d0de5(0x3e0)];},Game_Map[_0x4c5915(0x4ba)]['removeTemporaryMapSpawnedEvents']=function(_0x30ffc8){const _0x2dd8ce=_0x4c5915;_0x30ffc8!==this['mapId']()&&$gamePlayer&&$gameSystem[_0x2dd8ce(0x264)](this[_0x2dd8ce(0x3c8)]());},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x228)]=function(){const _0x25b661=_0x4c5915;this['_spawnedEvents']=$gameSystem['getMapSpawnedEventData'](this[_0x25b661(0x3c8)]()),this['_needsRefresh']=!![];},VisuMZ['EventsMoveCore']['Game_Map_events']=Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x57c)],Game_Map[_0x4c5915(0x4ba)]['events']=function(){const _0x3daacd=_0x4c5915;if(this[_0x3daacd(0x24f)])return this[_0x3daacd(0x24f)];const _0xe989cf=VisuMZ[_0x3daacd(0x1fd)]['Game_Map_events'][_0x3daacd(0x44d)](this),_0x362fd2=_0xe989cf['concat'](this[_0x3daacd(0x1c6)]||[]);return this[_0x3daacd(0x24f)]=_0x362fd2[_0x3daacd(0x600)](_0x17f905=>!!_0x17f905),this[_0x3daacd(0x24f)];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x2b8)]=Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x4f1)],Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x4f1)]=function(_0x2c9b5f){const _0x2389a7=_0x4c5915;if(_0x2c9b5f>=0x3e8){if(_0x2389a7(0x389)===_0x2389a7(0x389))return _0x2c9b5f-=0x3e8,this['_spawnedEvents'][_0x2c9b5f];else{if(!_0x4a7f2f[_0x2389a7(0x36a)][_0x3be839]){_0x2d3d4b[_0x2389a7(0x479)][_0x2ab381][_0x2389a7(0x603)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x2c540c='return\x20%1'['format'](_0x555d65(_0x42a46f['$1']));_0x56b31e['advancedFunc'][_0x20ceb5]=new _0x13d847('switchId',_0x2c540c);}const _0x38de4a=_0x19bc33[_0x2389a7(0x255)]()||this;return _0x529522['advancedFunc'][_0x14fd2d][_0x2389a7(0x44d)](_0x38de4a,_0x2c7e3c);}}else return VisuMZ[_0x2389a7(0x1fd)][_0x2389a7(0x2b8)][_0x2389a7(0x44d)](this,_0x2c9b5f);},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x661)]=function(_0x2eca27){const _0x330dc9=this['event'](_0x2eca27);if(_0x330dc9)_0x330dc9['erase']();},Game_Map[_0x4c5915(0x4ba)]['setupSpawnTest']=function(){const _0x1433a2=_0x4c5915,_0x3643cd={'template':_0x1433a2(0x639),'mapId':0x1,'eventId':0xc,'x':$gamePlayer['x']+0x1,'y':$gamePlayer['y']+0x1,'spawnPreserved':!![],'spawnEventId':this[_0x1433a2(0x1c6)][_0x1433a2(0x179)]+0x3e8};this[_0x1433a2(0x3b8)](_0x3643cd);},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x2ca)]=function(_0xbc3863,_0x42c8e2){const _0x35bd00=_0x4c5915;if(this[_0x35bd00(0x2f8)](_0xbc3863,_0x42c8e2)[_0x35bd00(0x179)]>0x0)return!![];if($gamePlayer['x']===_0xbc3863&&$gamePlayer['y']===_0x42c8e2)return!![];if(this[_0x35bd00(0x580)]()[_0x35bd00(0x36e)](_0xbc3863,_0x42c8e2))return!![];if(this[_0x35bd00(0x2ec)]()[_0x35bd00(0x36e)](_0xbc3863,_0x42c8e2))return!![];return![];},Game_Map['prototype'][_0x4c5915(0x3d1)]=function(_0x562952,_0x3e6498,_0x37c46c){const _0x2f3c1e=_0x4c5915;$gameTemp[_0x2f3c1e(0x5c6)]=_0x562952;const _0xe80af6=new Game_Event(_0x562952['mapId'],_0x562952[_0x2f3c1e(0x5ad)]);$gameTemp[_0x2f3c1e(0x5c6)]=undefined,_0xe80af6[_0x2f3c1e(0x476)]();let _0x51669a=_0x3e6498-_0xe80af6['_addedHitbox'][_0x2f3c1e(0x4d7)],_0x40f776=_0x3e6498+_0xe80af6[_0x2f3c1e(0x2f6)]['right'],_0x271274=_0x37c46c-_0xe80af6[_0x2f3c1e(0x2f6)]['up'],_0x1eb3b7=_0x37c46c+_0xe80af6[_0x2f3c1e(0x2f6)][_0x2f3c1e(0x15c)];for(let _0x3716b6=_0x51669a;_0x3716b6<=_0x40f776;_0x3716b6++){for(let _0x42f8b2=_0x271274;_0x42f8b2<=_0x1eb3b7;_0x42f8b2++){if(_0x2f3c1e(0x32c)!=='qxCkL'){if(this[_0x2f3c1e(0x2ca)](_0x3716b6,_0x42f8b2))return![];}else return this[_0x2f3c1e(0x4be)]['target'];}}return!![];},Game_Map[_0x4c5915(0x4ba)]['createSpawnedEventWithData']=function(_0x23da3d){const _0x48185f=_0x4c5915;$gameTemp[_0x48185f(0x5c6)]=_0x23da3d;const _0x2b0ed1=new Game_Event(_0x23da3d[_0x48185f(0x3c8)],_0x23da3d[_0x48185f(0x5ad)]);$gameTemp['_spawnData']=undefined,this[_0x48185f(0x1c6)][_0x48185f(0x19f)](_0x2b0ed1),_0x2b0ed1[_0x48185f(0x329)](_0x23da3d),this[_0x48185f(0x221)]();},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x3de)]=function(_0x1ce3fa,_0x305eb5,_0x309951){const _0x31d37c=_0x4c5915,_0x541a81=_0x1ce3fa[_0x31d37c(0x19e)]['toUpperCase']()['trim']();if(_0x541a81!==_0x31d37c(0x196)){if(_0x31d37c(0x3ab)!==_0x31d37c(0x2bb)){const _0x265e42=VisuMZ[_0x31d37c(0x5b3)][_0x541a81];if(_0x265e42){if(_0x31d37c(0x44f)!==_0x31d37c(0x44f))return this['processMoveRouteBalloon'](_0x437bec(_0x1fbb8e['$1']));else _0x1ce3fa['mapId']=_0x265e42[_0x31d37c(0x63b)],_0x1ce3fa['eventId']=_0x265e42[_0x31d37c(0x65c)];}}else _0x3e6977['prototype'][_0x31d37c(0x297)][_0x31d37c(0x44d)](this),this[_0x31d37c(0x655)]=![];}const _0x12cd43=_0x1ce3fa['x'],_0x4ef767=_0x1ce3fa['y'];if(!this[_0x31d37c(0x1fb)](_0x12cd43,_0x4ef767))return![];if(_0x305eb5){if(this[_0x31d37c(0x2ca)](_0x12cd43,_0x4ef767))return![];if(!this[_0x31d37c(0x3d1)](_0x1ce3fa,_0x12cd43,_0x4ef767))return![];}if(_0x309951){if(_0x31d37c(0x4dd)==='CqPBZ'){if(!this[_0x31d37c(0x4a6)](_0x12cd43,_0x4ef767))return![];}else return this[_0x31d37c(0x63e)]()&&this[_0x31d37c(0x50d)]===0x0;}return this['createSpawnedEventWithData'](_0x1ce3fa),!![];},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x3d5)]=function(_0x2c204b,_0x53f799,_0x4b1c22,_0x20dd29){const _0x1b4fbe=_0x4c5915,_0x3823e9=_0x2c204b[_0x1b4fbe(0x19e)][_0x1b4fbe(0x4b1)]()[_0x1b4fbe(0x344)]();if(_0x3823e9!=='UNTITLED'){if(_0x1b4fbe(0x26a)!==_0x1b4fbe(0x26a))this[_0x1b4fbe(0x4a9)]=!![];else{const _0x48ec62=VisuMZ[_0x1b4fbe(0x5b3)][_0x3823e9];_0x48ec62&&(_0x2c204b[_0x1b4fbe(0x3c8)]=_0x48ec62[_0x1b4fbe(0x63b)],_0x2c204b[_0x1b4fbe(0x5ad)]=_0x48ec62[_0x1b4fbe(0x65c)]);}}const _0x394880=[],_0x427a3b=this[_0x1b4fbe(0x2cf)](),_0x134c29=this['height']();for(let _0x1cbfc5=0x0;_0x1cbfc5<_0x427a3b;_0x1cbfc5++){for(let _0x2a5ba7=0x0;_0x2a5ba7<_0x134c29;_0x2a5ba7++){if(!_0x53f799[_0x1b4fbe(0x452)](this['regionId'](_0x1cbfc5,_0x2a5ba7)))continue;if(!this[_0x1b4fbe(0x1fb)](_0x1cbfc5,_0x2a5ba7))continue;if(_0x4b1c22){if(this[_0x1b4fbe(0x2ca)](_0x1cbfc5,_0x2a5ba7))continue;if(!this[_0x1b4fbe(0x3d1)](_0x2c204b,_0x1cbfc5,_0x2a5ba7))continue;}if(_0x20dd29){if('VBFdX'!==_0x1b4fbe(0x366)){if(!this[_0x1b4fbe(0x4a6)](_0x1cbfc5,_0x2a5ba7))continue;}else return this[_0x1b4fbe(0x2f4)](_0x23ec12);}_0x394880[_0x1b4fbe(0x19f)]([_0x1cbfc5,_0x2a5ba7]);}}if(_0x394880[_0x1b4fbe(0x179)]>0x0){const _0x5b47c6=_0x394880[Math[_0x1b4fbe(0x2e1)](_0x394880[_0x1b4fbe(0x179)])];return _0x2c204b['x']=_0x5b47c6[0x0],_0x2c204b['y']=_0x5b47c6[0x1],this['createSpawnedEventWithData'](_0x2c204b),!![];}return![];},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x4c4)]=function(_0x4937ab,_0x234676,_0x458069,_0x4c80f3){const _0xd28c5d=_0x4c5915,_0x2f94ab=_0x4937ab[_0xd28c5d(0x19e)][_0xd28c5d(0x4b1)]()[_0xd28c5d(0x344)]();if(_0x2f94ab!==_0xd28c5d(0x196)){const _0x56303f=VisuMZ['EventTemplates'][_0x2f94ab];_0x56303f&&(_0xd28c5d(0x307)==='wEaYd'?(_0x4937ab[_0xd28c5d(0x3c8)]=_0x56303f[_0xd28c5d(0x63b)],_0x4937ab[_0xd28c5d(0x5ad)]=_0x56303f[_0xd28c5d(0x65c)]):(_0x2d388a['registerSelfTarget'](_0x220a4d['_selfTargetNumberInput']),_0x524315[_0xd28c5d(0x1fd)][_0xd28c5d(0x49d)][_0xd28c5d(0x44d)](this),_0x4ab7c8[_0xd28c5d(0x614)]()));}const _0x9084e1=[],_0x52f36b=this[_0xd28c5d(0x2cf)](),_0x6ebf35=this[_0xd28c5d(0x664)]();for(let _0x122d8f=0x0;_0x122d8f<_0x52f36b;_0x122d8f++){if('zkSro'==='lnBlI')return this[_0xd28c5d(0x5f2)](0x7,_0x36b037(_0x28051b['$1']));else for(let _0x4c20ac=0x0;_0x4c20ac<_0x6ebf35;_0x4c20ac++){if(_0xd28c5d(0x3e2)==='EJRvq')return this['clearCarrying']();else{if(!_0x234676['includes'](this['terrainTag'](_0x122d8f,_0x4c20ac)))continue;if(!this['isValid'](_0x122d8f,_0x4c20ac))continue;if(_0x458069){if(this['checkExistingEntitiesAt'](_0x122d8f,_0x4c20ac))continue;if(!this[_0xd28c5d(0x3d1)](_0x4937ab,_0x122d8f,_0x4c20ac))continue;}if(_0x4c80f3){if(_0xd28c5d(0x514)!==_0xd28c5d(0x514))return this['processMoveRoutePatternLock'](_0x9e0b6a(_0x16b64e['$1']));else{if(!this[_0xd28c5d(0x4a6)](_0x122d8f,_0x4c20ac))continue;}}_0x9084e1[_0xd28c5d(0x19f)]([_0x122d8f,_0x4c20ac]);}}}if(_0x9084e1[_0xd28c5d(0x179)]>0x0){if(_0xd28c5d(0x428)!=='AjolU'){_0x17b295[_0xd28c5d(0x1fd)][_0xd28c5d(0x5e2)]['call'](this,_0x4eedca);if(_0x3c9dfe>=0x3e8){const _0x3071df=this[_0xd28c5d(0x4f1)](_0x408e68);if(_0x3071df)_0x3071df[_0xd28c5d(0x278)]();}}else{const _0x5cea4b=_0x9084e1[Math[_0xd28c5d(0x2e1)](_0x9084e1[_0xd28c5d(0x179)])];return _0x4937ab['x']=_0x5cea4b[0x0],_0x4937ab['y']=_0x5cea4b[0x1],this[_0xd28c5d(0x3b8)](_0x4937ab),!![];}}return![];},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x4a6)]=function(_0x2ac193,_0x2f9d0b){const _0x237f9b=_0x4c5915;if(this['isPassable'](_0x2ac193,_0x2f9d0b,0x2))return!![];if(this['isPassable'](_0x2ac193,_0x2f9d0b,0x4))return!![];if(this[_0x237f9b(0x2ea)](_0x2ac193,_0x2f9d0b,0x6))return!![];if(this[_0x237f9b(0x2ea)](_0x2ac193,_0x2f9d0b,0x8))return!![];return![];},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x326)]=function(_0x2ffca4){const _0x5f527a=_0x4c5915;if(_0x2ffca4<0x3e8)return;if(!this[_0x5f527a(0x1c6)])return;const _0x4ecec8=this['event'](_0x2ffca4);_0x4ecec8[_0x5f527a(0x151)](-0x1,-0x1),_0x4ecec8[_0x5f527a(0x154)](),this[_0x5f527a(0x1c6)][_0x2ffca4-0x3e8]=null,this[_0x5f527a(0x221)]();},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x27d)]=function(){const _0x51380f=_0x4c5915;for(const _0xa4b616 of this[_0x51380f(0x1c6)]){if(_0x51380f(0x38d)===_0x51380f(0x145))this[_0x51380f(0x16d)]=new _0x44904e(),this[_0x51380f(0x16d)][_0x51380f(0x2b1)]['x']=0.5,this[_0x51380f(0x16d)][_0x51380f(0x2b1)]['y']=0x1,this[_0x51380f(0x5e3)](this[_0x51380f(0x16d)]),this[_0x51380f(0x291)]();else{if(_0xa4b616)return _0xa4b616;}}return null;},Game_Map['prototype']['firstSpawnedEventID']=function(){const _0x5de5fc=_0x4c5915,_0x2a781e=this[_0x5de5fc(0x27d)]();return _0x2a781e?_0x2a781e['_eventId']:0x0;},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x1c0)]=function(){const _0x432e8d=_0x4c5915,_0x14f1ae=this['_spawnedEvents']['slice'](0x0)[_0x432e8d(0x193)]();for(const _0x83eb4e of _0x14f1ae){if(_0x83eb4e)return _0x83eb4e;}return null;},Game_Map[_0x4c5915(0x4ba)]['lastSpawnedEventID']=function(){const _0x578af0=_0x4c5915,_0x3a2852=this[_0x578af0(0x1c0)]();return _0x3a2852?_0x3a2852['_eventId']:0x0;},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x4b7)]=function(_0x57aca1,_0xb5c0b8){const _0x3c11b0=_0x4c5915,_0x10a50e=this[_0x3c11b0(0x2f8)](_0x57aca1,_0xb5c0b8);for(const _0x44dd62 of _0x10a50e){if(_0x3c11b0(0x52a)===_0x3c11b0(0x5b8)){const _0x488869=_0x588149;_0x203104[_0x3c11b0(0x3e3)](_0x488869);const _0x538429=_0x1114d1['EventsMoveCore']['Game_Interpreter_executeCommand'][_0x3c11b0(0x44d)](this);return _0x408ef5[_0x3c11b0(0x614)](),_0x538429;}else{if(!_0x44dd62)continue;if(_0x44dd62[_0x3c11b0(0x319)]())this[_0x3c11b0(0x326)](_0x44dd62[_0x3c11b0(0x3e5)]);}}},Game_Map['prototype'][_0x4c5915(0x342)]=function(_0x4efd71){const _0x2de23=_0x4c5915;for(const _0xd06f53 of this[_0x2de23(0x1c6)]){if(_0x2de23(0x14b)===_0x2de23(0x5ec)){if(!this[_0x2de23(0x4f1)]())return;this[_0x2de23(0x341)](),this[_0x2de23(0x550)](),this['setupEventsMoveCoreCommentTags'](),this[_0x2de23(0x510)]();}else{if(!_0xd06f53)continue;if(_0x4efd71[_0x2de23(0x452)](_0xd06f53[_0x2de23(0x3d8)]())){if(_0x2de23(0x482)!==_0x2de23(0x482))return this[_0x2de23(0x3a0)]();else this[_0x2de23(0x326)](_0xd06f53[_0x2de23(0x3e5)]);}}}},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x388)]=function(_0x5d0d4b){const _0x15a13a=_0x4c5915;for(const _0x2c1f25 of this[_0x15a13a(0x1c6)]){if(!_0x2c1f25)continue;if(_0x5d0d4b[_0x15a13a(0x452)](_0x2c1f25[_0x15a13a(0x1aa)]())){if('HPpEu'===_0x15a13a(0x630))this[_0x15a13a(0x326)](_0x2c1f25['_eventId']);else{if(!this['_character'])return 0x0;if(this[_0x15a13a(0x25f)][_0x15a13a(0x634)])return 0x0;const _0x3f349e=this[_0x15a13a(0x25f)]['getEventIconData']();return _0x3f349e?_0x3f349e[_0x15a13a(0x403)]||0x0:0x0;}}}},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x181)]=function(){const _0x58a261=_0x4c5915;for(const _0x1327b7 of this['_spawnedEvents']){if(_0x58a261(0x60a)===_0x58a261(0x60a)){if(!_0x1327b7)continue;this[_0x58a261(0x326)](_0x1327b7['_eventId']);}else{this[_0x58a261(0x4a7)]=!![];return;}}},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x5e2)]=Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x52c)],Game_Map[_0x4c5915(0x4ba)]['unlockEvent']=function(_0x43a779){const _0x3bc1b2=_0x4c5915;VisuMZ[_0x3bc1b2(0x1fd)]['Game_Map_unlockEvent'][_0x3bc1b2(0x44d)](this,_0x43a779);if(_0x43a779>=0x3e8){if(_0x3bc1b2(0x362)==='DjzKc'){const _0x52d9eb=this[_0x3bc1b2(0x4f1)](_0x43a779);if(_0x52d9eb)_0x52d9eb['unlock']();}else{if(this[_0x3bc1b2(0x3a5)](this['x'],this['y'],_0x318d9d))_0x2d3da3['push'](_0x19290d);}}},Game_Map['prototype']['setupPlayerVisibilityOverrides']=function(){const _0x3595b4=_0x4c5915;this[_0x3595b4(0x642)]=![],this['_forceHidePlayer']=![];if(!$dataMap)return;const _0x2f4e2e=$dataMap[_0x3595b4(0x31c)]||'';if(_0x2f4e2e[_0x3595b4(0x603)](/<HIDE PLAYER>/i))'bCyKg'==='eitES'?this['_labelWindow'][_0x3595b4(0x4b2)]=_0x59d507(_0xa38d87['$1']):(this['_forceShowPlayer']=![],this[_0x3595b4(0x15a)]=!![]);else _0x2f4e2e['match'](/<SHOW PLAYER>/i)&&(this[_0x3595b4(0x642)]=!![],this[_0x3595b4(0x15a)]=![]);},Game_Map['prototype'][_0x4c5915(0x1bd)]=function(){const _0x5dfc45=_0x4c5915;return this[_0x5dfc45(0x642)]===undefined&&this[_0x5dfc45(0x242)](),this[_0x5dfc45(0x642)];},Game_Map[_0x4c5915(0x4ba)]['isPlayerForceHidden']=function(){const _0x4a5b3e=_0x4c5915;return this[_0x4a5b3e(0x15a)]===undefined&&this[_0x4a5b3e(0x242)](),this['_forceHidePlayer'];},VisuMZ['EventsMoveCore']['Game_CharacterBase_isTransparent']=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x544)],Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x544)]=function(){const _0x42c6a7=_0x4c5915;if(this===$gamePlayer){if($gameMap[_0x42c6a7(0x1bd)]())return![];if($gameMap[_0x42c6a7(0x5af)]())return!![];}return VisuMZ[_0x42c6a7(0x1fd)]['Game_CharacterBase_isTransparent'][_0x42c6a7(0x44d)](this);},Game_Map['prototype']['setupFollowerVisibilityOverrides']=function(){const _0x351905=_0x4c5915;this[_0x351905(0x206)]=![],this[_0x351905(0x14d)]=![];if(!$dataMap)return;const _0x58b723=$dataMap['note']||'';if(_0x58b723['match'](/<HIDE FOLLOWERS>/i))_0x351905(0x527)===_0x351905(0x527)?(this[_0x351905(0x206)]=![],this[_0x351905(0x14d)]=!![]):this['setDirection'](_0x57973);else _0x58b723['match'](/<SHOW FOLLOWERS>/i)&&(_0x351905(0x596)===_0x351905(0x170)?_0x6bb276=![]:(this[_0x351905(0x206)]=!![],this[_0x351905(0x14d)]=![]));},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x3d3)]=function(){return this['_forceShowFollower']===undefined&&this['setupFollowerVisibilityOverrides'](),this['_forceShowFollower'];},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x586)]=function(){const _0x14c34c=_0x4c5915;return this[_0x14c34c(0x14d)]===undefined&&(_0x14c34c(0x302)==='JCfsv'?_0x42f5c5[0x2]=_0x14c34c(0x434)[_0x14c34c(0x313)](_0x5218b1):this[_0x14c34c(0x1fe)]()),this[_0x14c34c(0x14d)];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x531)]=Game_Followers['prototype'][_0x4c5915(0x2c5)],Game_Followers[_0x4c5915(0x4ba)][_0x4c5915(0x2c5)]=function(){const _0x57475c=_0x4c5915;if($gameMap['areFollowersForceShown']())return!![];if($gameMap[_0x57475c(0x586)]())return![];return VisuMZ[_0x57475c(0x1fd)][_0x57475c(0x531)][_0x57475c(0x44d)](this);},Game_CommonEvent['prototype'][_0x4c5915(0x2f3)]=function(){const _0x19b5d5=_0x4c5915,_0xeaa9b2=this[_0x19b5d5(0x4f1)]();return this['isActive']()&&_0xeaa9b2['trigger']>=0x1&&DataManager[_0x19b5d5(0x539)](_0xeaa9b2[_0x19b5d5(0x2eb)]);},Game_CommonEvent[_0x4c5915(0x4ba)][_0x4c5915(0x4a5)]=function(){const _0x349d8e=_0x4c5915;return VisuMZ[_0x349d8e(0x1fd)][_0x349d8e(0x49a)][_0x349d8e(0x56c)][_0x349d8e(0x452)](this['_commonEventId']);},VisuMZ['EventsMoveCore'][_0x4c5915(0x199)]=Game_CommonEvent['prototype']['isActive'],Game_CommonEvent['prototype']['isActive']=function(){const _0x943365=_0x4c5915;if(VisuMZ[_0x943365(0x1fd)][_0x943365(0x199)]['call'](this))return'vGJkp'===_0x943365(0x3f4)?!![]:_0x1baa08[_0x943365(0x1fd)]['CustomPageConditions']['metCPC'](_0x13f908[_0x943365(0x471)],0x0);else{if(_0x943365(0x500)!==_0x943365(0x1d3)){const _0x48bb18=this[_0x943365(0x4f1)]();return VisuMZ[_0x943365(0x1fd)][_0x943365(0x49a)]['metCPC'](this['event']()[_0x943365(0x471)],this[_0x943365(0x165)],_0x48bb18);}else{if(!this[_0x943365(0x25f)])return;let _0x22a62d=!!this[_0x943365(0x25f)]['_mirrorSprite'];this[_0x943365(0x446)]['x']=_0x3181bb[_0x943365(0x357)](this[_0x943365(0x446)]['x'])*(_0x22a62d?-0x1:0x1);}}},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x587)]=Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x5d2)],Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x5d2)]=function(){const _0x27e7a6=_0x4c5915,_0x34bc72=VisuMZ[_0x27e7a6(0x1fd)][_0x27e7a6(0x587)]['call'](this),_0x29086a=VisuMZ[_0x27e7a6(0x1fd)][_0x27e7a6(0x49a)][_0x27e7a6(0x56c)][_0x27e7a6(0x59f)](_0xbc9a0a=>$dataCommonEvents[_0xbc9a0a]);return _0x34bc72[_0x27e7a6(0x1c3)](_0x29086a)['filter']((_0x5c65a2,_0x417516,_0x2e0160)=>_0x2e0160[_0x27e7a6(0x184)](_0x5c65a2)===_0x417516);},Game_CharacterBase[_0x4c5915(0x3c6)]=VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x64c)]['Movement'][_0x4c5915(0x439)]??![],VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x2ab)]=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x2cb)],Game_CharacterBase[_0x4c5915(0x4ba)]['initMembers']=function(){const _0x31c5c0=_0x4c5915;VisuMZ[_0x31c5c0(0x1fd)][_0x31c5c0(0x2ab)][_0x31c5c0(0x44d)](this),this['initEventsMoveCoreSettings']();},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x5d4)]=function(){const _0x362601=_0x4c5915;this[_0x362601(0x30e)]=![],this[_0x362601(0x2fc)](),this[_0x362601(0x5ae)](),this[_0x362601(0x387)](),this[_0x362601(0x5b5)]();},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x552)]=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x2a0)],Game_CharacterBase['prototype'][_0x4c5915(0x2a0)]=function(){const _0x1de63f=_0x4c5915;let _0xa1a93b=VisuMZ['EventsMoveCore']['Game_CharacterBase_opacity'][_0x1de63f(0x44d)](this);return _0xa1a93b=this[_0x1de63f(0x24e)](_0xa1a93b),_0xa1a93b;},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x24e)]=function(_0x42873a){return _0x42873a;},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x470)]=function(){const _0x34bcbd=_0x4c5915;if(this[_0x34bcbd(0x3c2)]===Game_Player&&this[_0x34bcbd(0x378)]())return this[_0x34bcbd(0x462)]()[_0x34bcbd(0x58b)]()[_0x34bcbd(0x603)](/\[VS8\]/i);else{if(Imported['VisuMZ_2_DragonbonesUnion']&&this[_0x34bcbd(0x5a8)]()){if(_0x34bcbd(0x3ca)!=='sadBx')return!![];else{if(!this['list']())return;const _0x59a277=this[_0x34bcbd(0x61e)]()[_0x34bcbd(0x600)](_0x48e2c0=>_0x48e2c0[_0x34bcbd(0x358)]!==0x6c&&_0x48e2c0[_0x34bcbd(0x358)]!==0x198);_0x59a277[_0x34bcbd(0x179)]>0x1&&(this['_starting']=!![],this[_0x34bcbd(0x146)]([0x0,0x1,0x2])&&this[_0x34bcbd(0x306)]());}}else return _0x34bcbd(0x1e8)===_0x34bcbd(0x1e8)?this[_0x34bcbd(0x58b)]()['match'](/\[VS8\]/i):this[_0x34bcbd(0x21d)]||0x0;}},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x431)]=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x1b6)],Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x1b6)]=function(){const _0x2e65cc=_0x4c5915;if(!$dataMap)return this[_0x2e65cc(0x185)]||0x2;if(this[_0x2e65cc(0x478)]()&&!this[_0x2e65cc(0x4ad)]()&&this[_0x2e65cc(0x470)]())return _0x2e65cc(0x58d)===_0x2e65cc(0x4f8)?this['isSpriteVS8dir']()?this['characterPatternYVS8']():this['characterPatternYBasic']():this[_0x2e65cc(0x338)]();else{if(this[_0x2e65cc(0x478)]()&&!this[_0x2e65cc(0x4ad)]())return 0x8;else{if(this[_0x2e65cc(0x3c1)]()&&this['isSpriteVS8dir']())return this[_0x2e65cc(0x605)]();else{if(_0x2e65cc(0x486)===_0x2e65cc(0x15d)){const _0x2349fa=this[_0x2e65cc(0x16d)];_0x2349fa['x']=this['_character'][_0x2e65cc(0x155)](),_0x2349fa['y']=this[_0x2e65cc(0x25f)][_0x2e65cc(0x223)](),_0x2349fa[_0x2e65cc(0x2e5)]=this[_0x2e65cc(0x25f)][_0x2e65cc(0x4f9)]();}else return VisuMZ['EventsMoveCore']['Game_CharacterBase_direction']['call'](this);}}}},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x22a)]=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x197)],Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x197)]=function(_0x593c9e){const _0x288ff8=_0x4c5915;if(!this[_0x288ff8(0x470)]())_0x593c9e=this['correctFacingDirection'](_0x593c9e);VisuMZ[_0x288ff8(0x1fd)][_0x288ff8(0x22a)][_0x288ff8(0x44d)](this,_0x593c9e);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x62b)]=function(_0x3414d3){const _0xa977e8=_0x4c5915;if(_0x3414d3===0x1)return this[_0xa977e8(0x3a5)](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x3414d3===0x3)return this[_0xa977e8(0x3a5)](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x3414d3===0x7)return this[_0xa977e8(0x3a5)](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x3414d3===0x9)return this[_0xa977e8(0x3a5)](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x3414d3;},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x4d1)]=function(_0x3bef4f){const _0x4b2ce6=_0x4c5915;return[0x1,0x3,0x5,0x7,0x9][_0x4b2ce6(0x452)](_0x3bef4f);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x162)]=function(){return this['_lastMovedDirection']||0x0;},VisuMZ['EventsMoveCore'][_0x4c5915(0x60c)]=Game_CharacterBase['prototype'][_0x4c5915(0x4f7)],Game_CharacterBase['prototype']['moveStraight']=function(_0x57ae0d){const _0x4ecefe=_0x4c5915;this[_0x4ecefe(0x21d)]=_0x57ae0d,VisuMZ['EventsMoveCore'][_0x4ecefe(0x60c)][_0x4ecefe(0x44d)](this,_0x57ae0d);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x65b)]=function(_0x543686){const _0x396f04=_0x4c5915;if(!this['isDiagonalDirection'](_0x543686))return this[_0x396f04(0x4f7)](_0x543686);let _0x46a220=0x0,_0x58cda2=0x0;switch(_0x543686){case 0x1:_0x46a220=0x4,_0x58cda2=0x2;break;case 0x3:_0x46a220=0x6,_0x58cda2=0x2;break;case 0x7:_0x46a220=0x4,_0x58cda2=0x8;break;case 0x9:_0x46a220=0x6,_0x58cda2=0x8;break;}if(VisuMZ[_0x396f04(0x1fd)]['Settings']['Movement']['StrictCollision']){if(!this[_0x396f04(0x3a5)](this['_x'],this['_y'],_0x46a220)){if(_0x396f04(0x5a2)!==_0x396f04(0x3ec))return this[_0x396f04(0x4f7)](_0x58cda2);else{if(this['moveSynchTarget']()>=0x0){const _0x3eec46=_0x479899[_0x396f04(0x134)](this[_0x396f04(0x49f)]());if(_0x3eec46){const _0x53fee2=_0x33a86f[_0x396f04(0x3cc)](this[_0x396f04(0x324)],this[_0x396f04(0x4dc)],_0x3eec46[_0x396f04(0x324)],_0x3eec46[_0x396f04(0x4dc)])-0x1,_0x3e42f2=_0x4be6bb[_0x396f04(0x3a2)](_0x3e1f86[_0x396f04(0x54c)](),_0x19619f[_0x396f04(0x23d)]()),_0x3f66f5=this[_0x396f04(0x4be)][_0x396f04(0x4c6)]||0x0;_0x2425e9-=_0xf9a28a[_0x396f04(0x2a4)](0x0,_0x53fee2)*_0x3e42f2*_0x3f66f5;}}return _0xfe3544;}}if(!this['canPass'](this['_x'],this['_y'],_0x58cda2))return this[_0x396f04(0x4f7)](_0x46a220);if(!this['canPassDiagonally'](this['_x'],this['_y'],_0x46a220,_0x58cda2)){let _0x43fcb4=VisuMZ[_0x396f04(0x1fd)]['Settings']['Movement'][_0x396f04(0x2d3)]?_0x46a220:_0x58cda2;return this[_0x396f04(0x4f7)](_0x43fcb4);}}this[_0x396f04(0x21d)]=_0x543686,this['moveDiagonally'](_0x46a220,_0x58cda2);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x5e0)]=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x659)],Game_CharacterBase[_0x4c5915(0x4ba)]['realMoveSpeed']=function(){const _0x1811d0=_0x4c5915;let _0x3f41a9=this['_moveSpeed'];return this[_0x1811d0(0x63e)]()&&(_0x3f41a9+=this[_0x1811d0(0x643)]()),this[_0x1811d0(0x42b)](_0x3f41a9);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x643)]=function(){const _0x4484f3=_0x4c5915,_0x30a7a5=VisuMZ['EventsMoveCore'][_0x4484f3(0x64c)][_0x4484f3(0x28d)];return _0x30a7a5[_0x4484f3(0x1e6)]!==undefined?_0x30a7a5[_0x4484f3(0x1e6)]:VisuMZ[_0x4484f3(0x1fd)][_0x4484f3(0x5e0)][_0x4484f3(0x44d)](this)-this[_0x4484f3(0x4f4)];},Game_CharacterBase['prototype'][_0x4c5915(0x42b)]=function(_0x367d31){const _0x3cdb1f=_0x4c5915,_0x180a80=VisuMZ[_0x3cdb1f(0x1fd)]['Settings'][_0x3cdb1f(0x28d)];if(!_0x180a80[_0x3cdb1f(0x4aa)])return _0x367d31;return[0x1,0x3,0x7,0x9][_0x3cdb1f(0x452)](this[_0x3cdb1f(0x21d)])&&(_0x367d31*=_0x180a80[_0x3cdb1f(0x4e9)]||0.01),_0x367d31;},VisuMZ['EventsMoveCore'][_0x4c5915(0x472)]=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x63e)],Game_CharacterBase['prototype']['isDashing']=function(){const _0x662e8c=_0x4c5915;if(!Game_CharacterBase['ALLOW_LADDER_DASH']&&this['isOnLadder']())return![];if(this[_0x662e8c(0x1fc)])return!![];return VisuMZ[_0x662e8c(0x1fd)][_0x662e8c(0x472)]['call'](this);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x44e)]=function(){const _0x3a646c=_0x4c5915;return this['isDashing']()&&this[_0x3a646c(0x50d)]===0x0;},VisuMZ['EventsMoveCore']['Game_CharacterBase_pattern']=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x35d)],Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x35d)]=function(){const _0x38fb09=_0x4c5915;return this['isPosing']()?_0x38fb09(0x62e)!==_0x38fb09(0x3bb)?this[_0x38fb09(0x3a0)]():_0x428cb6[_0x38fb09(0x1fd)][_0x38fb09(0x268)][_0x38fb09(0x44d)](this,_0x426704):VisuMZ[_0x38fb09(0x1fd)][_0x38fb09(0x2e0)][_0x38fb09(0x44d)](this);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x50c)]=Game_CharacterBase['prototype'][_0x4c5915(0x187)],Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x187)]=function(){const _0x394548=_0x4c5915;VisuMZ[_0x394548(0x1fd)][_0x394548(0x50c)][_0x394548(0x44d)](this),this[_0x394548(0x2fc)]();},VisuMZ[_0x4c5915(0x1fd)]['Game_CharacterBase_characterIndex']=Game_CharacterBase['prototype'][_0x4c5915(0x575)],Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x575)]=function(){const _0x14da0b=_0x4c5915;if(this[_0x14da0b(0x470)]())return this[_0x14da0b(0x22b)]();return VisuMZ[_0x14da0b(0x1fd)]['Game_CharacterBase_characterIndex']['call'](this);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x22b)]=function(){const _0x12999e=_0x4c5915,_0x4b09fb=this[_0x12999e(0x1b6)]();if(this[_0x12999e(0x4ad)]()){if([0x2,0x4,0x6,0x8]['includes'](_0x4b09fb))return 0x4;if([0x1,0x3,0x7,0x9][_0x12999e(0x452)](_0x4b09fb))return 0x5;}else{if(this['isOnLadder']())return'MsdRN'!==_0x12999e(0x601)?0x6:_0x1d7f84['getEventIconData'](this);else{if(this[_0x12999e(0x3c1)]()){if('yNUGt'!==_0x12999e(0x1d0)){if(_0xde5578<0x3e8)return;if(!this[_0x12999e(0x1c6)])return;const _0x18daee=this['event'](_0x58f6bb);_0x18daee[_0x12999e(0x151)](-0x1,-0x1),_0x18daee[_0x12999e(0x154)](),this[_0x12999e(0x1c6)][_0x5afc18-0x3e8]=null,this[_0x12999e(0x221)]();}else return this[_0x12999e(0x636)]();}else{if(this[_0x12999e(0x2ad)]){if([0x2,0x4,0x6,0x8][_0x12999e(0x452)](_0x4b09fb))return 0x4;if([0x1,0x3,0x7,0x9][_0x12999e(0x452)](_0x4b09fb))return 0x5;}else{if(this['hasEventIcon']()&&this['useCarryPoseForIcons']()){if([0x2,0x4,0x6,0x8][_0x12999e(0x452)](_0x4b09fb))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x4b09fb))return 0x5;}else{if(this[_0x12999e(0x44e)]()){if([0x2,0x4,0x6,0x8][_0x12999e(0x452)](_0x4b09fb))return 0x2;if([0x1,0x3,0x7,0x9][_0x12999e(0x452)](_0x4b09fb))return 0x3;}else{if([0x2,0x4,0x6,0x8][_0x12999e(0x452)](_0x4b09fb))return 0x0;if([0x1,0x3,0x7,0x9]['includes'](_0x4b09fb))return 0x1;}}}}}}},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x50e)]=function(){const _0x5027a7=_0x4c5915;return VisuMZ[_0x5027a7(0x1fd)][_0x5027a7(0x64c)][_0x5027a7(0x30f)]['CarryPose'];},Game_CharacterBase['prototype'][_0x4c5915(0x502)]=function(){const _0xcf08b=_0x4c5915;return this[_0xcf08b(0x478)]()&&this['terrainTag']()===VisuMZ[_0xcf08b(0x1fd)][_0xcf08b(0x64c)][_0xcf08b(0x192)][_0xcf08b(0x210)];},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x338)]=function(){const _0xfbd80e=_0x4c5915;return this[_0xfbd80e(0x502)]()?0x4:0x2;},VisuMZ['EventsMoveCore']['Game_CharacterBase_update']=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x2de)],Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x2de)]=function(){const _0x439071=_0x4c5915;VisuMZ['EventsMoveCore'][_0x439071(0x133)][_0x439071(0x44d)](this),this[_0x439071(0x525)]();},Game_CharacterBase['prototype']['updatePose']=function(){const _0x15e55e=_0x4c5915;this['_poseDuration']=this[_0x15e55e(0x266)]||0x0;if(this['_poseDuration']>0x0){if('YSdyn'!==_0x15e55e(0x394)){this['_poseDuration']--;if(this[_0x15e55e(0x266)]<=0x0&&this['_pose']!=='ZZZ')this[_0x15e55e(0x2fc)]();}else{if(!this['isSpriteVS8dir']())_0x1c8456=this[_0x15e55e(0x62b)](_0x111ea1);_0x4e3fb3[_0x15e55e(0x1fd)]['Game_CharacterBase_setDirection'][_0x15e55e(0x44d)](this,_0x33376d);}}},VisuMZ[_0x4c5915(0x1fd)]['Game_CharacterBase_moveDiagonally']=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x2c3)],Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x2c3)]=function(_0x37c29e,_0x4c2ebb){const _0xd2abe4=_0x4c5915;VisuMZ[_0xd2abe4(0x1fd)]['Game_CharacterBase_moveDiagonally'][_0xd2abe4(0x44d)](this,_0x37c29e,_0x4c2ebb);if(this[_0xd2abe4(0x470)]())this[_0xd2abe4(0x13d)](_0x37c29e,_0x4c2ebb);},Game_CharacterBase[_0x4c5915(0x4ba)]['setDiagonalDirection']=function(_0x180ba5,_0x30c357){const _0xce9436=_0x4c5915;if(_0x180ba5===0x4&&_0x30c357===0x2)this[_0xce9436(0x197)](0x1);if(_0x180ba5===0x6&&_0x30c357===0x2)this[_0xce9436(0x197)](0x3);if(_0x180ba5===0x4&&_0x30c357===0x8)this['setDirection'](0x7);if(_0x180ba5===0x6&&_0x30c357===0x8)this[_0xce9436(0x197)](0x9);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x3a1)]=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x549)],Game_CharacterBase['prototype']['hasStepAnime']=function(){const _0x384cbb=_0x4c5915;if(this[_0x384cbb(0x3c1)]()&&this['getPose']()==='ZZZ')return!![];return VisuMZ[_0x384cbb(0x1fd)][_0x384cbb(0x3a1)][_0x384cbb(0x44d)](this);},Game_CharacterBase[_0x4c5915(0x4ba)]['setPose']=function(_0x3a6588,_0xe7eee7){const _0x2c512d=_0x4c5915;if(_0x3a6588['match'](/Z/i))_0x3a6588=_0x2c512d(0x477);if(_0x3a6588['match'](/SLEEP/i))_0x3a6588='ZZZ';this[_0x2c512d(0x470)]()&&(this[_0x2c512d(0x1ca)]=_0x3a6588[_0x2c512d(0x4b1)]()[_0x2c512d(0x344)](),this[_0x2c512d(0x266)]=_0xe7eee7||Infinity);},Game_CharacterBase[_0x4c5915(0x4ba)]['getPose']=function(){const _0x8e6c74=_0x4c5915;if(this['isSpriteVS8dir']())return(this[_0x8e6c74(0x1ca)]||'')[_0x8e6c74(0x4b1)]()[_0x8e6c74(0x344)]();else{if(_0x8e6c74(0x588)!==_0x8e6c74(0x588))this[_0x8e6c74(0x523)]=_0x2498a5(_0x56f3a7)[_0x8e6c74(0x650)]()[_0x8e6c74(0x344)]();else return''[_0x8e6c74(0x4b1)]()[_0x8e6c74(0x344)]();}},Game_CharacterBase['prototype'][_0x4c5915(0x583)]=function(_0x3ed12e,_0x541df8){const _0x488e5e=_0x4c5915;if(this[_0x488e5e(0x470)]()){const _0x32a722=['',_0x488e5e(0x63c),'QUESTION',_0x488e5e(0x592),_0x488e5e(0x226),'ANGER','SWEAT',_0x488e5e(0x5e4),_0x488e5e(0x35a),_0x488e5e(0x413),_0x488e5e(0x477),'','','','',''][_0x3ed12e];this[_0x488e5e(0x347)](_0x32a722,_0x541df8);}},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x2fc)]=function(){const _0x466f50=_0x4c5915;this['_pose']='',this[_0x466f50(0x266)]=0x0;},Game_CharacterBase[_0x4c5915(0x4ba)]['isPosing']=function(){const _0x40146f=_0x4c5915;return this[_0x40146f(0x470)]()&&!!this['_pose'];},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x636)]=function(){const _0x207728=_0x4c5915,_0xaa9b30=this[_0x207728(0x1ca)]['toUpperCase']();switch(this[_0x207728(0x1ca)][_0x207728(0x4b1)]()[_0x207728(0x344)]()){case'ITEM':case'HMPH':case _0x207728(0x2db):case _0x207728(0x637):case _0x207728(0x3b0):case _0x207728(0x5ef):return 0x6;break;default:return 0x7;break;}},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x605)]=function(){const _0x1856df=_0x4c5915;switch(this[_0x1856df(0x1ca)][_0x1856df(0x4b1)]()){case _0x1856df(0x63c):case _0x1856df(0x5de):case'MUSIC\x20NOTE':case'!':case'?':return 0x2;break;case _0x1856df(0x226):case _0x1856df(0x427):case _0x1856df(0x5d6):return 0x4;break;case _0x1856df(0x29a):case'HMPH':case _0x1856df(0x2db):case _0x1856df(0x5e4):case _0x1856df(0x35a):case'LIGHT\x20BULB':return 0x6;break;case _0x1856df(0x637):case _0x1856df(0x3b0):case'COLLAPSE':case _0x1856df(0x477):case _0x1856df(0x551):return 0x8;break;default:return VisuMZ['EventsMoveCore'][_0x1856df(0x22a)][_0x1856df(0x44d)](this);break;}},Game_CharacterBase['prototype'][_0x4c5915(0x3a0)]=function(){const _0x4daebf=_0x4c5915;switch(this['_pose']['toUpperCase']()){case'ITEM':case _0x4daebf(0x637):case _0x4daebf(0x63c):case'!':case _0x4daebf(0x226):case'COBWEB':return 0x0;break;case _0x4daebf(0x321):case _0x4daebf(0x3b0):case _0x4daebf(0x5de):case'?':case _0x4daebf(0x427):case _0x4daebf(0x35a):return 0x1;break;case _0x4daebf(0x2db):case'COLLAPSE':case _0x4daebf(0x592):case _0x4daebf(0x5d6):case'LIGHT\x20BULB':return 0x2;break;default:return VisuMZ[_0x4daebf(0x1fd)][_0x4daebf(0x2e0)][_0x4daebf(0x44d)](this);break;}},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x16f)]=function(){const _0x5563c5=_0x4c5915;this[_0x5563c5(0x2ad)]=!![];},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x4cb)]=function(){const _0x17ece1=_0x4c5915;this[_0x17ece1(0x2ad)]=![];},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x1b1)]=function(){this['_forceDashing']=!![];},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x5ae)]=function(){const _0x193ce8=_0x4c5915;this[_0x193ce8(0x1fc)]=![];},Game_CharacterBase[_0x4c5915(0x4ba)]['isShadowVisible']=function(){const _0x182434=_0x4c5915;if(this[_0x182434(0x27c)]())return![];if(this[_0x182434(0x29d)])return![];if(this['_characterName']==='')return![];if(this[_0x182434(0x3c2)]===Game_Vehicle)return![];if(this[_0x182434(0x544)]())return![];return!![];},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x34d)]=function(){const _0x28427b=_0x4c5915;if(this[_0x28427b(0x478)]())return!![];if(this['constructor']===Game_Player&&this[_0x28427b(0x378)]())return!![];return![];},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x58e)]=function(){const _0x523929=_0x4c5915;return VisuMZ[_0x523929(0x1fd)][_0x523929(0x64c)][_0x523929(0x28d)]['DefaultShadow'];},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x270)]=function(){return this['screenX']();},Game_CharacterBase['prototype'][_0x4c5915(0x4da)]=function(){const _0x13e42b=_0x4c5915,_0x5a044a=$gameMap[_0x13e42b(0x23d)]();return Math['floor'](this[_0x13e42b(0x252)]()*_0x5a044a+_0x5a044a);},Game_CharacterBase[_0x4c5915(0x42f)]=0x64,Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x322)]=function(_0x48710f,_0x455bfe){const _0x584691=_0x4c5915;if(TouchInput[_0x584691(0x208)]())return![];if(!$gameMap[_0x584691(0x188)]())return![];if($gameMap[_0x584691(0x21c)](_0x48710f,_0x455bfe)[_0x584691(0x179)]>0x0)return![];if(!$gameMap[_0x584691(0x4a6)](_0x48710f,_0x455bfe))return![];const _0x49a9ac=$gameMap[_0x584691(0x628)][_0x584691(0x179)];if(_0x49a9ac>=Game_CharacterBase['DIAGONAL_PATHFINDING_EVENT_LIMIT'])return![];return!![];},Game_Character['prototype']['findDiagonalDirectionTo']=function(_0x2b725f,_0x394a42){const _0x447a63=_0x4c5915;let _0x348245=this[_0x447a63(0x385)](_0x2b725f,_0x394a42);if(!this[_0x447a63(0x322)](_0x2b725f,_0x394a42))return _0x348245;if(this['isCollidedWithEvents'](_0x2b725f,_0x394a42))return _0x348245;const _0x5fc63c=_0x348245;if(_0x348245===0x2){if(_0x2b725f>this['x']&&this[_0x447a63(0x3a5)](this['x'],this['y'],0x6))_0x348245=0x3;if(_0x2b725f<this['x']&&this['canPass'](this['x'],this['y'],0x4))_0x348245=0x1;}else{if(_0x348245===0x4){if(_0x394a42>this['y']&&this['canPass'](this['x'],this['y'],0x4))_0x348245=0x1;if(_0x394a42<this['y']&&this[_0x447a63(0x3a5)](this['x'],this['y'],0x6))_0x348245=0x7;}else{if(_0x348245===0x6){if(_0x394a42>this['y']&&this['canPass'](this['x'],this['y'],0x4))_0x348245=0x3;if(_0x394a42<this['y']&&this['canPass'](this['x'],this['y'],0x6))_0x348245=0x9;}else{if(_0x348245===0x8){if(_0x2b725f>this['x']&&this[_0x447a63(0x3a5)](this['x'],this['y'],0x6))_0x348245=0x9;if(_0x2b725f<this['x']&&this[_0x447a63(0x3a5)](this['x'],this['y'],0x4))_0x348245=0x7;}}}}const _0xee4e4f=$gameMap[_0x447a63(0x454)](this['x'],_0x348245),_0x8dcc87=$gameMap['roundYWithDirection'](this['y'],_0x348245);if(this[_0x447a63(0x4b8)](_0xee4e4f,_0x8dcc87))_0x348245=_0x5fc63c;return _0x348245;},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x469)]=Game_CharacterBase['prototype']['canPass'],Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x3a5)]=function(_0x50a294,_0x512285,_0x16edee){const _0x182db9=_0x4c5915;return this[_0x182db9(0x22c)]===_0x182db9(0x402)?this[_0x182db9(0x462)]()['isAirshipPassable'](_0x50a294,_0x512285,_0x16edee):_0x182db9(0x598)===_0x182db9(0x598)?VisuMZ[_0x182db9(0x1fd)][_0x182db9(0x469)][_0x182db9(0x44d)](this,_0x50a294,_0x512285,_0x16edee):(this[_0x182db9(0x40d)][_0x182db9(0x5ff)](_0x57b0ed,_0x2d5a4b),_0x3175c3?this[_0x182db9(0x40d)][_0x182db9(0x432)](_0x1d1ba3):this[_0x182db9(0x40d)][_0x182db9(0x191)](),this['_interpreter'][_0x182db9(0x655)]);},Game_CharacterBase['prototype'][_0x4c5915(0x387)]=function(){const _0x1a4ae2=_0x4c5915;this[_0x1a4ae2(0x396)]=0x0,this['_spriteOffsetY']=0x0;},VisuMZ[_0x4c5915(0x1fd)]['Game_CharacterBase_screenX']=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x36c)],Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x36c)]=function(){const _0x52010e=_0x4c5915;return VisuMZ[_0x52010e(0x1fd)][_0x52010e(0x205)][_0x52010e(0x44d)](this)+(this[_0x52010e(0x396)]||0x0);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x474)]=Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x400)],Game_CharacterBase['prototype'][_0x4c5915(0x400)]=function(){const _0x3c4259=_0x4c5915;return VisuMZ['EventsMoveCore']['Game_CharacterBase_screenY']['call'](this)+(this[_0x3c4259(0x426)]||0x0);},Game_CharacterBase[_0x4c5915(0x1da)]=VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x64c)][_0x4c5915(0x28d)][_0x4c5915(0x26c)]??-0x6,Game_CharacterBase['prototype'][_0x4c5915(0x438)]=function(){const _0x586331=_0x4c5915;return this['isObjectCharacter']()?0x0:-Game_CharacterBase[_0x586331(0x1da)];},Game_CharacterBase[_0x4c5915(0x4ba)]['clearStepPattern']=function(){const _0x1ec67a=_0x4c5915;this[_0x1ec67a(0x32a)]='';},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x298)]=Game_CharacterBase['prototype'][_0x4c5915(0x13c)],Game_CharacterBase['prototype'][_0x4c5915(0x13c)]=function(){const _0x55ee0b=_0x4c5915;if(this[_0x55ee0b(0x30e)])return;if(this[_0x55ee0b(0x265)]())return;VisuMZ[_0x55ee0b(0x1fd)][_0x55ee0b(0x298)][_0x55ee0b(0x44d)](this);},Game_CharacterBase['prototype'][_0x4c5915(0x265)]=function(){const _0x42b834=_0x4c5915;if(!this[_0x42b834(0x549)]()&&this[_0x42b834(0x50d)]>0x0)return![];switch(String(this[_0x42b834(0x32a)])[_0x42b834(0x4b1)]()[_0x42b834(0x344)]()){case'LEFT\x20TO\x20RIGHT':this[_0x42b834(0x641)]+=0x1;if(this[_0x42b834(0x641)]>0x2)this['setPattern'](0x0);break;case _0x42b834(0x2da):this[_0x42b834(0x641)]-=0x1;if(this[_0x42b834(0x641)]<0x0)this[_0x42b834(0x194)](0x2);break;case _0x42b834(0x407):case _0x42b834(0x190):this[_0x42b834(0x34a)]();break;case _0x42b834(0x665):case _0x42b834(0x511):case _0x42b834(0x54f):case'SPIN\x20ACW':this[_0x42b834(0x1c4)]();break;default:return![];}return!![];},Game_CharacterBase['prototype'][_0x4c5915(0x3f0)]=function(){return $gameSystem['getEventIconData'](this);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x2f2)]=function(){const _0x1701f4=_0x4c5915,_0x47eb9c=this[_0x1701f4(0x3f0)]();if(!_0x47eb9c)return![];return _0x47eb9c['iconIndex']>0x0;},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x276)]=function(){const _0x163934=_0x4c5915,_0x368131=this['direction']();return $gameMap[_0x163934(0x454)](this['x'],_0x368131);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x59e)]=function(){const _0x3c27ec=_0x4c5915,_0x1bcdf7=this['direction']();return $gameMap[_0x3c27ec(0x2bc)](this['y'],_0x1bcdf7);},Game_CharacterBase['prototype'][_0x4c5915(0x44b)]=function(){const _0x2dbca8=_0x4c5915,_0x1f0d22=this['reverseDir'](this[_0x2dbca8(0x1b6)]());return $gameMap['roundXWithDirection'](this['x'],_0x1f0d22);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x626)]=function(){const _0x953c07=_0x4c5915,_0x49899c=this[_0x953c07(0x240)](this[_0x953c07(0x1b6)]());return $gameMap[_0x953c07(0x2bc)](this['y'],_0x49899c);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x4ef)]=function(){const _0x33c69d=_0x4c5915,_0x2aea8f=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x33c69d(0x1b6)]()];return $gameMap[_0x33c69d(0x454)](this['x'],_0x2aea8f);},Game_CharacterBase['prototype'][_0x4c5915(0x2b4)]=function(){const _0x2b8175=_0x4c5915,_0x5a9b0d=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x2b8175(0x1b6)]()];return $gameMap[_0x2b8175(0x2bc)](this['y'],_0x5a9b0d);},Game_CharacterBase['prototype'][_0x4c5915(0x4ff)]=function(){const _0x3c408b=_0x4c5915,_0x43665b=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x3c408b(0x1b6)]()];return $gameMap['roundXWithDirection'](this['x'],_0x43665b);},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x453)]=function(){const _0x3f0ce6=_0x4c5915,_0x32f0bf=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x3f0ce6(0x1b6)]()];return $gameMap['roundYWithDirection'](this['y'],_0x32f0bf);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x3c4)]=Game_Character[_0x4c5915(0x4ba)]['setMoveRoute'],Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x53b)]=function(_0x499bf2){const _0x1cb8cb=_0x4c5915;route=JsonEx[_0x1cb8cb(0x31e)](_0x499bf2),VisuMZ[_0x1cb8cb(0x1fd)][_0x1cb8cb(0x3c4)][_0x1cb8cb(0x44d)](this,route);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x1b7)]=Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x13f)],Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x13f)]=function(_0x174aec){const _0x57c644=_0x4c5915;route=JsonEx[_0x57c644(0x31e)](_0x174aec),VisuMZ[_0x57c644(0x1fd)]['Game_Character_forceMoveRoute'][_0x57c644(0x44d)](this,route);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x328)]=Game_Character['prototype'][_0x4c5915(0x1ff)],Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x1ff)]=function(_0x1aa7bb){const _0x15ac6c=_0x4c5915,_0x339afc=Game_Character,_0x3569c5=_0x1aa7bb[_0x15ac6c(0x4ac)];if(_0x1aa7bb[_0x15ac6c(0x358)]===_0x339afc[_0x15ac6c(0x295)]){let _0x596ed7=_0x1aa7bb[_0x15ac6c(0x4ac)][0x0];_0x596ed7=this[_0x15ac6c(0x4b5)](_0x596ed7),_0x596ed7=this[_0x15ac6c(0x351)](_0x596ed7),this['processMoveCommandEventsMoveCore'](_0x1aa7bb,_0x596ed7);}else _0x15ac6c(0x61b)==='TtSjJ'?VisuMZ['EventsMoveCore'][_0x15ac6c(0x328)][_0x15ac6c(0x44d)](this,_0x1aa7bb):_0x315f65[_0x15ac6c(0x47b)]('ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.'[_0x15ac6c(0x313)](_0x1814c9));},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x4b5)]=function(_0x334334){const _0x2b2c2a=_0x4c5915,_0x159288=/\$gameVariables\.value\((\d+)\)/gi,_0x2d5435=/\\V\[(\d+)\]/gi;while(_0x334334[_0x2b2c2a(0x603)](_0x159288)){_0x2b2c2a(0x638)!==_0x2b2c2a(0x638)?(_0x720c1f[_0x2b2c2a(0x1fd)][_0x2b2c2a(0x335)][_0x2b2c2a(0x44d)](this),this['initEventsMoveCoreEffects'](),this[_0x2b2c2a(0x148)]()):_0x334334=_0x334334[_0x2b2c2a(0x323)](_0x159288,(_0x449108,_0x315b78)=>$gameVariables[_0x2b2c2a(0x666)](parseInt(_0x315b78)));}while(_0x334334[_0x2b2c2a(0x603)](_0x2d5435)){_0x334334=_0x334334[_0x2b2c2a(0x323)](_0x2d5435,(_0x4d867c,_0x27bcd4)=>$gameVariables['value'](parseInt(_0x27bcd4)));}return _0x334334;},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x351)]=function(_0x5ec9d6){const _0x51d8a4=_0x4c5915,_0x19fb6f=/\\SELFVAR\[(\d+)\]/gi;while(_0x5ec9d6[_0x51d8a4(0x603)](_0x19fb6f)){_0x5ec9d6=_0x5ec9d6['replace'](_0x19fb6f,(_0x2b9f24,_0x11e488)=>getSelfVariableValue(this[_0x51d8a4(0x229)],this[_0x51d8a4(0x3e5)],parseInt(_0x11e488)));}return _0x5ec9d6;},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x646)]=function(_0x137c9d,_0x713863){const _0x53cfbc=_0x4c5915;if(_0x713863[_0x53cfbc(0x603)](/ANIMATION:[ ](\d+)/i))return this[_0x53cfbc(0x300)](Number(RegExp['$1']));if(_0x713863[_0x53cfbc(0x603)](/BALLOON:[ ](.*)/i)){if('RckVa'!=='IRCbX')return this[_0x53cfbc(0x262)](String(RegExp['$1']));else _0x184ee8['EventsMoveCore'][_0x53cfbc(0x328)][_0x53cfbc(0x44d)](this,_0x206657);}if(_0x713863[_0x53cfbc(0x603)](/FADE IN:[ ](\d+)/i)){if(_0x53cfbc(0x3f2)!==_0x53cfbc(0x24d))return this['processMoveRouteFadeIn'](Number(RegExp['$1']));else{if(_0x120413['isBigCharacter'](this[_0x53cfbc(0x610)]))return;_0x3e4860=_0x400bd4[_0x53cfbc(0x1b9)](0x0,0x7),this[_0x53cfbc(0x4fe)](this[_0x53cfbc(0x610)],_0x4f213b);}}if(_0x713863[_0x53cfbc(0x603)](/FADE OUT:[ ](\d+)/i)){if(_0x53cfbc(0x567)!==_0x53cfbc(0x567)){const _0x49f7cb=this[_0x53cfbc(0x4f1)]();return this[_0x53cfbc(0x5aa)]()&&_0x49f7cb[_0x53cfbc(0x224)]>=0x1&&_0x170c94[_0x53cfbc(0x539)](_0x49f7cb['switchId']);}else return this[_0x53cfbc(0x39e)](Number(RegExp['$1']));}if(_0x713863[_0x53cfbc(0x603)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i))return this[_0x53cfbc(0x16f)]();if(_0x713863[_0x53cfbc(0x603)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i))return this['clearCarrying']();if(_0x713863['match'](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this[_0x53cfbc(0x1b1)]();if(_0x713863['match'](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i)){if(_0x53cfbc(0x490)===_0x53cfbc(0x3fa))this[_0x53cfbc(0x4ae)][_0x53cfbc(0x446)]['x']=_0x23b78e[_0x53cfbc(0x3a2)](0x1,this[_0x53cfbc(0x4ae)][_0x53cfbc(0x446)]['x']+0.1),this['_shadowSprite'][_0x53cfbc(0x446)]['y']=_0x3acef4[_0x53cfbc(0x3a2)](0x1,this[_0x53cfbc(0x4ae)][_0x53cfbc(0x446)]['y']+0.1);else return this[_0x53cfbc(0x5ae)]();}if(_0x713863[_0x53cfbc(0x603)](/HUG:[ ]LEFT/i))return this[_0x53cfbc(0x32b)](_0x53cfbc(0x4d7));if(_0x713863['match'](/HUG:[ ]RIGHT/i))return this[_0x53cfbc(0x32b)]('right');if(_0x713863[_0x53cfbc(0x603)](/INDEX:[ ](\d+)/i))return this[_0x53cfbc(0x50f)](Number(RegExp['$1']));if(_0x713863['match'](/INDEX:[ ]([\+\-]\d+)/i)){if('kDhBU'===_0x53cfbc(0x58a)){_0x16c0ee[_0x53cfbc(0x314)](_0x19a982,_0x282d0f);const _0x1a96a9=_0xb35c5a['getLastPluginCommandInterpreter']();_0xae8e5a[_0x53cfbc(0x5bd)]=_0x48bae3['MapId']||_0x182b6a[_0x53cfbc(0x3c8)](),_0x493708['deleteIconsOnEventsDataKey'](_0x3d85ea[_0x53cfbc(0x5bd)],_0x3ccba2[_0x53cfbc(0x662)]||_0x1a96a9[_0x53cfbc(0x5ad)]());}else{const _0xf47070=this[_0x53cfbc(0x353)]+Number(RegExp['$1']);return this[_0x53cfbc(0x50f)](_0xf47070);}}if(_0x713863[_0x53cfbc(0x603)](/JUMP FORWARD:[ ](\d+)/i)){if(_0x53cfbc(0x4b4)==='kopic')return this[_0x53cfbc(0x3ee)](Number(RegExp['$1']));else{if(this[_0x53cfbc(0x470)]())return this[_0x53cfbc(0x22b)]();return _0x462ad4[_0x53cfbc(0x1fd)]['Game_CharacterBase_characterIndex']['call'](this);}}if(_0x713863['match'](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['processMoveRouteJumpTo'](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x713863[_0x53cfbc(0x603)](/JUMP TO EVENT:[ ](\d+)/i)){const _0xc265a3=$gameMap[_0x53cfbc(0x4f1)](Number(RegExp['$1']));return this[_0x53cfbc(0x24a)](_0xc265a3);}if(_0x713863[_0x53cfbc(0x603)](/JUMP TO PLAYER/i)){if(_0x53cfbc(0x152)!==_0x53cfbc(0x41b))return this[_0x53cfbc(0x24a)]($gamePlayer);else _0x26c4be=_0x333298(_0x5db5a2['$1'])[_0x53cfbc(0x650)]()['trim'](),this[_0x53cfbc(0x5d0)][_0x53cfbc(0x5c0)]=_0x42acf7,this[_0x53cfbc(0x5d0)]['distance']=_0x5ed00b(_0x585220['$2']);}if(_0x713863[_0x53cfbc(0x603)](/JUMP TO HOME/i)&&this[_0x53cfbc(0x5ad)]){const _0x5a1539=this[_0x53cfbc(0x215)],_0x2b58fe=this[_0x53cfbc(0x37b)];return this['processMoveRouteJumpTo'](_0x5a1539,_0x2b58fe);}if(_0x713863['match'](/MOVE[ ](.*)[ ]UNTIL STOP/i)){if(_0x53cfbc(0x595)===_0x53cfbc(0x595)){const _0x302968=String(RegExp['$1']),_0x418681=this['checkCollisionKeywords'](_0x713863);return this[_0x53cfbc(0x668)](_0x302968,_0x418681);}else return this['_activationProximity'][_0x53cfbc(0x3cc)]||0x0;}if(_0x713863[_0x53cfbc(0x603)](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x3e3787=Number(RegExp['$1']),_0x51befa=Number(RegExp['$2']),_0x371421=this[_0x53cfbc(0x541)](_0x713863);return this[_0x53cfbc(0x12f)](_0x3e3787,_0x51befa,_0x371421);}if(_0x713863['match'](/MOVE TO EVENT:[ ](\d+)/i)){if(_0x53cfbc(0x213)!=='sETEK'){const _0x5da5dc=_0x1cf510(_0x15435b['$1'])[_0x53cfbc(0x4b1)]()['trim']();_0x66e361=_0x56d128[_0x53cfbc(0x5b3)][_0x5da5dc];if(!_0x51cc67)return;_0x48eddf=_0x181bf6['MapID'],_0x294d42=_0x17370d[_0x53cfbc(0x65c)];}else{const _0x24f8d2=$gameMap[_0x53cfbc(0x4f1)](Number(RegExp['$1'])),_0x48cd38=this['checkCollisionKeywords'](_0x713863);return this[_0x53cfbc(0x657)](_0x24f8d2,_0x48cd38);}}if(_0x713863[_0x53cfbc(0x603)](/MOVE TO PLAYER/i)){const _0x5667b9=this[_0x53cfbc(0x541)](_0x713863);return this[_0x53cfbc(0x657)]($gamePlayer,_0x5667b9);}if(_0x713863['match'](/MOVE TO HOME/i)&&this[_0x53cfbc(0x5ad)]){if(_0x53cfbc(0x3a6)==='mrGeo')this[_0x53cfbc(0x1d2)][_0x53cfbc(0x3a8)]=_0x410811(_0x4e1b8c['$1']);else{const _0xaa2dbc=this[_0x53cfbc(0x215)],_0x280160=this[_0x53cfbc(0x37b)],_0x2181ac=this[_0x53cfbc(0x541)](_0x713863);return this['processMoveRouteMoveTo'](_0xaa2dbc,_0x280160,_0x2181ac);}}if(_0x713863[_0x53cfbc(0x603)](/MOVE LOWER LEFT:[ ](\d+)/i))return this[_0x53cfbc(0x5f2)](0x1,Number(RegExp['$1']));if(_0x713863[_0x53cfbc(0x603)](/MOVE DOWN:[ ](\d+)/i))return this[_0x53cfbc(0x5f2)](0x2,Number(RegExp['$1']));if(_0x713863[_0x53cfbc(0x603)](/MOVE LOWER RIGHT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x3,Number(RegExp['$1']));if(_0x713863[_0x53cfbc(0x603)](/MOVE LEFT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x4,Number(RegExp['$1']));if(_0x713863['match'](/MOVE RIGHT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x6,Number(RegExp['$1']));if(_0x713863[_0x53cfbc(0x603)](/MOVE UPPER LEFT:[ ](\d+)/i))return this[_0x53cfbc(0x5f2)](0x7,Number(RegExp['$1']));if(_0x713863[_0x53cfbc(0x603)](/MOVE UP:[ ](\d+)/i)){if(_0x53cfbc(0x374)!=='eBnHI')return this['processMoveRouteMoveRepeat'](0x8,Number(RegExp['$1']));else{if(_0x306ac4[_0x53cfbc(0x2d1)](_0x287bda,_0x183a42,_0x3c0483,this['_type']))return!![];if(_0x799b7a[_0x53cfbc(0x451)](_0x50d9dd,_0x2f3db7,_0x2a29d0,this[_0x53cfbc(0x340)]))return![];return _0xfa0c56[_0x53cfbc(0x1fd)][_0x53cfbc(0x469)][_0x53cfbc(0x44d)](_0x3d6168,_0x3a1ae5,_0x5e1d4f,_0x26345b);}}if(_0x713863[_0x53cfbc(0x603)](/MOVE UPPER RIGHT:[ ](\d+)/i)){if(_0x53cfbc(0x35b)===_0x53cfbc(0x4d9)){const _0x5dc3c2=_0x2b4b6b['getSelfTarget']()||this;if(_0x5dc3c2[_0x53cfbc(0x3c2)]!==_0x594709)return _0x3145c0['EventsMoveCore']['Game_Switches_value']['call'](this,_0x20bebc);else{const _0x109cd5=[_0x5dc3c2[_0x53cfbc(0x229)],_0x5dc3c2[_0x53cfbc(0x3e5)],_0x53cfbc(0x434)[_0x53cfbc(0x313)](_0x364bb3)];return _0x16f75e[_0x53cfbc(0x666)](_0x109cd5);}}else return this['processMoveRouteMoveRepeat'](0x9,Number(RegExp['$1']));}if(_0x713863[_0x53cfbc(0x603)](/OPACITY:[ ](\d+)([%％])/i)){if('rMXlC'!==_0x53cfbc(0x200)){const _0x525069=Math[_0x53cfbc(0x227)](Number(RegExp['$1'])/0x64*0xff);return this['setOpacity'](_0x525069[_0x53cfbc(0x1b9)](0x0,0xff));}else _0x49e72c['isSupportDiagonalMovement']()?this[_0x53cfbc(0x65b)](_0x373a8a):_0x1f22b0[_0x53cfbc(0x1fd)][_0x53cfbc(0x55b)][_0x53cfbc(0x44d)](this,_0x5dd7b7);}if(_0x713863[_0x53cfbc(0x603)](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0x528f8a=this[_0x53cfbc(0x3e1)]+Math[_0x53cfbc(0x227)](Number(RegExp['$1'])/0x64*0xff);return this[_0x53cfbc(0x2bf)](_0x528f8a['clamp'](0x0,0xff));}if(_0x713863['match'](/OPACITY:[ ]([\+\-]\d+)/i)){const _0xfea92b=this[_0x53cfbc(0x3e1)]+Number(RegExp['$1']);return this[_0x53cfbc(0x2bf)](_0xfea92b[_0x53cfbc(0x1b9)](0x0,0xff));}if(_0x713863[_0x53cfbc(0x603)](/PATTERN LOCK:[ ](\d+)/i))return _0x53cfbc(0x247)!==_0x53cfbc(0x647)?this[_0x53cfbc(0x1a1)](Number(RegExp['$1'])):this['processMoveRouteHugWall'](_0x53cfbc(0x2af));if(_0x713863[_0x53cfbc(0x603)](/PATTERN UNLOCK/i))return this[_0x53cfbc(0x30e)]=![];if(_0x713863[_0x53cfbc(0x603)](/POSE:[ ](.*)/i)){const _0x5dd788=String(RegExp['$1'])['toUpperCase']()[_0x53cfbc(0x344)]();return this[_0x53cfbc(0x347)](_0x5dd788);}if(_0x713863[_0x53cfbc(0x603)](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x33b926=Number(RegExp['$1']),_0x4c7472=Number(RegExp['$2']);return this[_0x53cfbc(0x1d8)](_0x33b926,_0x4c7472);}if(_0x713863['match'](/STEP TOWARD EVENT:[ ](\d+)/i)){const _0x4bf893=$gameMap[_0x53cfbc(0x4f1)](Number(RegExp['$1']));return this[_0x53cfbc(0x1db)](_0x4bf893);}if(_0x713863[_0x53cfbc(0x603)](/STEP TOWARD PLAYER/i)){if(_0x53cfbc(0x150)!==_0x53cfbc(0x150)){_0xa671ce['prototype'][_0x53cfbc(0x187)]['call'](this);if([_0x53cfbc(0x4d8),_0x53cfbc(0x55c)][_0x53cfbc(0x452)](this[_0x53cfbc(0x1b5)]()))return;_0x1f6cdc[_0x53cfbc(0x269)]([0x2]);}else return this[_0x53cfbc(0x1db)]($gamePlayer);}if(_0x713863[_0x53cfbc(0x603)](/STEP TOWARD HOME/i)&&this[_0x53cfbc(0x5ad)]){if(_0x53cfbc(0x216)===_0x53cfbc(0x3f9))_0x386510[_0x53cfbc(0x648)]();else{const _0x4555bc=this[_0x53cfbc(0x215)],_0x28a838=this[_0x53cfbc(0x37b)];return this[_0x53cfbc(0x1d8)](_0x4555bc,_0x28a838);}}if(_0x713863[_0x53cfbc(0x603)](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i)){if(_0x53cfbc(0x2f9)!==_0x53cfbc(0x515))return this[_0x53cfbc(0x584)](Number(RegExp['$1']),Number(RegExp['$2']));else this['_attachPicture'][_0x53cfbc(0x3ac)]=_0x3990be(_0x5f43a2['$1']);}if(_0x713863[_0x53cfbc(0x603)](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x4882aa=$gameMap[_0x53cfbc(0x4f1)](Number(RegExp['$1']));return this['moveAwayFromCharacter'](_0x4882aa);}if(_0x713863[_0x53cfbc(0x603)](/STEP AWAY FROM PLAYER/i))return'CZTzr'===_0x53cfbc(0x2fa)?this[_0x53cfbc(0x339)]&&this['_scene']['constructor']===_0x13e9b8:this[_0x53cfbc(0x2f4)]($gamePlayer);if(_0x713863[_0x53cfbc(0x603)](/STEP AWAY FROM HOME/i)&&this[_0x53cfbc(0x5ad)]){if(_0x53cfbc(0x594)!==_0x53cfbc(0x4ca)){const _0xfd7db8=this[_0x53cfbc(0x215)],_0x1d1d1c=this['_randomHomeY'];return this[_0x53cfbc(0x584)](_0xfd7db8,_0x1d1d1c);}else return this[_0x53cfbc(0x590)]()[_0x53cfbc(0x3ac)]??'';}if(_0x713863[_0x53cfbc(0x603)](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x53cfbc(0x652)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x713863[_0x53cfbc(0x603)](/TURN TO EVENT:[ ](\d+)/i)){const _0x39d6d9=$gameMap[_0x53cfbc(0x4f1)](Number(RegExp['$1']));return this[_0x53cfbc(0x35c)](_0x39d6d9);}if(_0x713863[_0x53cfbc(0x603)](/TURN TO PLAYER/i))return this['turnTowardCharacter']($gamePlayer);if(_0x713863[_0x53cfbc(0x603)](/TURN TO HOME/i)&&this[_0x53cfbc(0x5ad)]){const _0x24bc6c=this[_0x53cfbc(0x215)],_0x382dc8=this['_randomHomeY'];return this[_0x53cfbc(0x4d4)](_0x24bc6c,_0x382dc8);}if(_0x713863[_0x53cfbc(0x603)](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x53cfbc(0x487)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x713863[_0x53cfbc(0x603)](/TURN AWAY FROM EVENT:[ ](\d+)/i)){const _0x4e147f=$gameMap[_0x53cfbc(0x4f1)](Number(RegExp['$1']));return this[_0x53cfbc(0x59a)](_0x4e147f);}if(_0x713863['match'](/TURN AWAY FROM PLAYER/i))return this['turnAwayFromCharacter']($gamePlayer);if(_0x713863['match'](/TURN AWAY FROM HOME/i)&&this[_0x53cfbc(0x5ad)]){if(_0x53cfbc(0x3c0)!==_0x53cfbc(0x45c)){const _0x1bed17=this['_randomHomeX'],_0x2853c6=this[_0x53cfbc(0x37b)];return this[_0x53cfbc(0x487)](_0x1bed17,_0x2853c6);}else this[_0x53cfbc(0x151)](_0x39de41,_0x49f525);}if(_0x713863['match'](/TURN LOWER LEFT/i)){if(_0x53cfbc(0x17f)===_0x53cfbc(0x409)){if(!_0x481583[_0x53cfbc(0x36a)][_0x2b08a8]){_0xce41e1[_0x53cfbc(0x5bf)][_0x504177][_0x53cfbc(0x603)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x427fd7=_0x53cfbc(0x5fc)[_0x53cfbc(0x313)](_0x4bee69(_0x36c7d9['$1']));_0x104cfb[_0x53cfbc(0x36a)][_0x260ad0]=new _0x319045(_0x53cfbc(0x2b7),_0x427fd7);}const _0x39f75d=_0x20f0da[_0x53cfbc(0x255)]()||this;return _0x8b2481[_0x53cfbc(0x36a)][_0x3392b5][_0x53cfbc(0x44d)](_0x39f75d,_0x495825);}else return this[_0x53cfbc(0x197)](0x1);}if(_0x713863[_0x53cfbc(0x603)](/TURN LOWER RIGHT/i))return this[_0x53cfbc(0x197)](0x3);if(_0x713863[_0x53cfbc(0x603)](/TURN UPPER LEFT/i))return this[_0x53cfbc(0x197)](0x7);if(_0x713863[_0x53cfbc(0x603)](/TURN UPPER RIGHT/i)){if('dykVq'===_0x53cfbc(0x1a6))return this[_0x53cfbc(0x197)](0x9);else{_0x87e925[_0x53cfbc(0x5bf)][_0x4c41b9][_0x53cfbc(0x603)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0xc83c8b='return\x20%1'[_0x53cfbc(0x313)](_0x458361(_0x4539cd['$1']));_0x52663e[_0x53cfbc(0x36a)][_0xe924f8]=new _0x253d9c(_0x53cfbc(0x2b7),_0xc83c8b);}}if(_0x713863['match'](/Self Switch[ ](.*):[ ](.*)/i))return this[_0x53cfbc(0x331)](RegExp['$1'],RegExp['$2']);if(_0x713863[_0x53cfbc(0x603)](/Self Variable[ ](.*):[ ](.*)/i))return this[_0x53cfbc(0x437)](RegExp['$1'],RegExp['$2']);if(_0x713863[_0x53cfbc(0x603)](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x53cfbc(0x20c)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x713863[_0x53cfbc(0x603)](/TELEPORT TO EVENT:[ ](\d+)/i)){if('FFggH'==='nPsrA')return this['processMoveRouteFadeOut'](_0xbffb14(_0x91bd44['$1']));else{const _0x362ca8=$gameMap['event'](Number(RegExp['$1']));return this[_0x53cfbc(0x277)](_0x362ca8);}}if(_0x713863[_0x53cfbc(0x603)](/TELEPORT TO PLAYER/i))return this[_0x53cfbc(0x277)]($gamePlayer);if(_0x713863[_0x53cfbc(0x603)](/TELEPORT TO HOME/i)&&this[_0x53cfbc(0x5ad)]){const _0x5bef35=this['_randomHomeX'],_0x5ba4f5=this[_0x53cfbc(0x37b)];return this[_0x53cfbc(0x20c)](_0x5bef35,_0x5ba4f5);}try{VisuMZ['EventsMoveCore'][_0x53cfbc(0x328)][_0x53cfbc(0x44d)](this,_0x137c9d);}catch(_0x3a84c0){if($gameTemp[_0x53cfbc(0x2d8)]())console['log'](_0x3a84c0);}},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x300)]=function(_0xa5b4cb){const _0x4a3864=_0x4c5915;$gameTemp[_0x4a3864(0x5f0)]([this],_0xa5b4cb);},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x262)]=function(_0x37da67){const _0xcfb9bd=_0x4c5915;let _0x5ccb50=0x0;switch(_0x37da67[_0xcfb9bd(0x4b1)]()['trim']()){case'!':case _0xcfb9bd(0x63c):_0x5ccb50=0x1;break;case'?':case _0xcfb9bd(0x5de):_0x5ccb50=0x2;break;case _0xcfb9bd(0x28f):case _0xcfb9bd(0x20f):case'MUSIC\x20NOTE':case'MUSIC-NOTE':case _0xcfb9bd(0x4fd):_0x5ccb50=0x3;break;case _0xcfb9bd(0x226):case'LOVE':_0x5ccb50=0x4;break;case _0xcfb9bd(0x427):_0x5ccb50=0x5;break;case _0xcfb9bd(0x5d6):_0x5ccb50=0x6;break;case'COBWEB':case _0xcfb9bd(0x488):case _0xcfb9bd(0x30a):_0x5ccb50=0x7;break;case _0xcfb9bd(0x35a):case _0xcfb9bd(0x597):_0x5ccb50=0x8;break;case _0xcfb9bd(0x3ea):case'BULB':case _0xcfb9bd(0x413):case _0xcfb9bd(0x4a3):case _0xcfb9bd(0x60d):_0x5ccb50=0x9;break;case'Z':case'ZZ':case _0xcfb9bd(0x477):case _0xcfb9bd(0x551):_0x5ccb50=0xa;break;case _0xcfb9bd(0x4cf):_0x5ccb50=0xb;break;case'USER-DEFINED\x202':_0x5ccb50=0xc;break;case _0xcfb9bd(0x55f):_0x5ccb50=0xd;break;case _0xcfb9bd(0x447):_0x5ccb50=0xe;break;case _0xcfb9bd(0x32e):_0x5ccb50=0xf;break;}$gameTemp[_0xcfb9bd(0x59d)](this,_0x5ccb50);},Game_Character['prototype'][_0x4c5915(0x36b)]=function(_0x175be8){const _0x3e0256=_0x4c5915;_0x175be8+=this[_0x3e0256(0x3e1)],this[_0x3e0256(0x2bf)](_0x175be8['clamp'](0x0,0xff));if(this[_0x3e0256(0x3e1)]<0xff)this[_0x3e0256(0x3eb)]--;},Game_Character[_0x4c5915(0x4ba)]['processMoveRouteFadeOut']=function(_0x148728){const _0x1239a4=_0x4c5915;_0x148728=this[_0x1239a4(0x3e1)]-_0x148728,this[_0x1239a4(0x2bf)](_0x148728[_0x1239a4(0x1b9)](0x0,0xff));if(this[_0x1239a4(0x3e1)]>0x0)this[_0x1239a4(0x3eb)]--;},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x32b)]=function(_0x407b99){const _0x4eb444=_0x4c5915,_0x17b56c=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0xffe978=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x3e068b=this[_0x4eb444(0x1b6)](),_0x150eb6=(_0x407b99===_0x4eb444(0x4d7)?_0x17b56c:_0xffe978)[_0x3e068b],_0x5d50b0=(_0x407b99===_0x4eb444(0x4d7)?_0xffe978:_0x17b56c)[_0x3e068b];if(this[_0x4eb444(0x3a5)](this['x'],this['y'],_0x150eb6)){if('NhZgP'==='NhZgP'){if(_0x407b99===_0x4eb444(0x4d7))this[_0x4eb444(0x1c4)]();else{if(_0x4eb444(0x393)!==_0x4eb444(0x393)){if(this[_0x4eb444(0x470)]()){const _0x48650b=['','EXCLAMATION','QUESTION',_0x4eb444(0x592),_0x4eb444(0x226),'ANGER',_0x4eb444(0x5d6),_0x4eb444(0x5e4),_0x4eb444(0x35a),_0x4eb444(0x413),_0x4eb444(0x477),'','','','',''][_0x3ec1a6];this[_0x4eb444(0x347)](_0x48650b,_0x35170c);}}else this[_0x4eb444(0x34a)]();}}else{if(_0x4f0301[_0x4eb444(0x4a8)]())return;_0x398e3e['EventsMoveCore']['Game_Followers_jumpAll'][_0x4eb444(0x44d)](this);}}else!this[_0x4eb444(0x3a5)](this['x'],this['y'],this[_0x4eb444(0x1b6)]())&&(_0x4eb444(0x261)==='vaDkp'?this[_0x4eb444(0x3a5)](this['x'],this['y'],_0x5d50b0)?_0x407b99===_0x4eb444(0x4d7)?this['turnRight90']():this[_0x4eb444(0x1c4)]():_0x4eb444(0x271)===_0x4eb444(0x271)?this[_0x4eb444(0x2cc)]():this[_0x4eb444(0x467)](_0x35d5d8):(_0x3da797[_0x4eb444(0x314)](_0x1c3b59,_0x575c25),_0x92492a[_0x4eb444(0x1b0)](_0x5227ba)));this[_0x4eb444(0x3a5)](this['x'],this['y'],this['direction']())&&this['moveForward']();},Game_Character['prototype'][_0x4c5915(0x50f)]=function(_0x2c8014){const _0x18b902=_0x4c5915;if(ImageManager[_0x18b902(0x47e)](this[_0x18b902(0x610)]))return;_0x2c8014=_0x2c8014['clamp'](0x0,0x7),this[_0x18b902(0x4fe)](this[_0x18b902(0x610)],_0x2c8014);},Game_Character['prototype'][_0x4c5915(0x3ee)]=function(_0x1afdf5){const _0x535c90=_0x4c5915;switch(this[_0x535c90(0x1b6)]()){case 0x1:this[_0x535c90(0x292)](-_0x1afdf5,_0x1afdf5);break;case 0x2:this['jump'](0x0,_0x1afdf5);break;case 0x3:this[_0x535c90(0x292)](_0x1afdf5,_0x1afdf5);break;case 0x4:this['jump'](-_0x1afdf5,0x0);break;case 0x6:this['jump'](_0x1afdf5,0x0);break;case 0x7:this[_0x535c90(0x292)](-_0x1afdf5,-_0x1afdf5);break;case 0x8:this[_0x535c90(0x292)](0x0,-_0x1afdf5);break;case 0x9:this[_0x535c90(0x292)](_0x1afdf5,-_0x1afdf5);break;}},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x3e7)]=function(_0x2e2a6c,_0x15adc5){const _0x1d1b77=_0x4c5915,_0x5dcf1a=Math[_0x1d1b77(0x227)](_0x2e2a6c-this['x']),_0x3ea5c2=Math[_0x1d1b77(0x227)](_0x15adc5-this['y']);this[_0x1d1b77(0x292)](_0x5dcf1a,_0x3ea5c2);},Game_Character['prototype'][_0x4c5915(0x24a)]=function(_0x33084d){const _0x574cd4=_0x4c5915;if(_0x33084d)this[_0x574cd4(0x3e7)](_0x33084d['x'],_0x33084d['y']);},Game_Character['prototype'][_0x4c5915(0x1d8)]=function(_0x16098f,_0x5b91ee,_0xd8c639){const _0x2ca529=_0x4c5915;let _0x41460c=0x0;if(_0xd8c639)$gameTemp[_0x2ca529(0x2b0)]=!![];$gameMap[_0x2ca529(0x188)]()?_0x41460c=this['findDiagonalDirectionTo'](_0x16098f,_0x5b91ee):_0x41460c=this[_0x2ca529(0x385)](_0x16098f,_0x5b91ee);if(_0xd8c639)$gameTemp['_moveAllowPlayerCollision']=![];this[_0x2ca529(0x65b)](_0x41460c),this[_0x2ca529(0x33b)](!![]);},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x1db)]=function(_0x22286b){const _0x3f3d27=_0x4c5915;if(_0x22286b)this[_0x3f3d27(0x1d8)](_0x22286b['x'],_0x22286b['y']);},Game_Character['prototype'][_0x4c5915(0x1eb)]=function(_0x35875e,_0x2d1317){const _0x492b64=_0x4c5915,_0x4f11d6=this[_0x492b64(0x137)](_0x35875e),_0x3063e3=this['deltaYFrom'](_0x2d1317);},Game_Character[_0x4c5915(0x4ba)]['checkCollisionKeywords']=function(_0x2c7996){const _0x606854=_0x4c5915;if(_0x2c7996[_0x606854(0x603)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i)){if(_0x606854(0x5a0)===_0x606854(0x5a0))return!![];else{if(_0x300c5b[_0x606854(0x1bd)]())return![];if(_0xc0b44c['isPlayerForceHidden']())return!![];}}else{if(_0x2c7996['match'](/(?:AVOID|EVADE|DODGE)/i))return![];else{if(_0x606854(0x43c)!=='BkOgf')this[_0x606854(0x34a)]();else return![];}}},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x1ce)]=Game_Event['prototype']['isCollidedWithPlayerCharacters'],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x5c8)]=function(_0x5211a8,_0x4b6bee){const _0x26ae75=_0x4c5915;if($gameTemp['_moveAllowPlayerCollision'])return![];return VisuMZ['EventsMoveCore'][_0x26ae75(0x1ce)]['call'](this,_0x5211a8,_0x4b6bee);},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x668)]=function(_0x218fdf,_0x10b85f){const _0x264b66=_0x4c5915,_0x3b2881=['',_0x264b66(0x1f2),_0x264b66(0x177),_0x264b66(0x4cc),_0x264b66(0x34c),'',_0x264b66(0x3aa),_0x264b66(0x1ed),'UP',_0x264b66(0x3fc)],_0x181522=_0x3b2881['indexOf'](_0x218fdf[_0x264b66(0x4b1)]()['trim']());if(_0x181522<=0x0)return;if(_0x10b85f)$gameTemp[_0x264b66(0x2b0)]=!![];if(this[_0x264b66(0x3a5)](this['x'],this['y'],_0x181522)){if(_0x10b85f)$gameTemp[_0x264b66(0x2b0)]=![];this['executeMoveDir8'](_0x181522),this[_0x264b66(0x3eb)]-=0x1;}if(_0x10b85f)$gameTemp[_0x264b66(0x2b0)]=![];},Game_Character[_0x4c5915(0x4ba)]['processMoveRouteMoveTo']=function(_0x259c5d,_0x11be2a,_0x49cf6d){const _0x34a8e6=_0x4c5915;this['processMoveRouteStepTo'](_0x259c5d,_0x11be2a,_0x49cf6d);if(this['x']!==_0x259c5d||this['y']!==_0x11be2a)this[_0x34a8e6(0x3eb)]--;},Game_Character[_0x4c5915(0x4ba)]['processMoveRouteMoveToCharacter']=function(_0x468031,_0x52347d){const _0x14eb05=_0x4c5915;if(_0x468031&&!_0x468031['_erased']){this[_0x14eb05(0x12f)](_0x468031['x'],_0x468031['y'],_0x52347d);if(_0x468031['isNormalPriority']()&&this[_0x14eb05(0x336)]()){const _0x381a6b=$gameMap['distance'](this['x'],this['y'],_0x468031['x'],_0x468031['y']);if(_0x381a6b<=0x1)this[_0x14eb05(0x3eb)]++;}}},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x5f2)]=function(_0x4f57bf,_0x32985e){const _0x46a1b3=_0x4c5915;_0x32985e=_0x32985e||0x0;const _0x3fc286={'code':0x1,'indent':null,'parameters':[]};_0x3fc286[_0x46a1b3(0x358)]=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x4f57bf],this[_0x46a1b3(0x1e1)][_0x46a1b3(0x61e)][this[_0x46a1b3(0x3eb)]][_0x46a1b3(0x4ac)][0x0]='';while(_0x32985e--){this['_moveRoute'][_0x46a1b3(0x61e)][_0x46a1b3(0x1a5)](this[_0x46a1b3(0x3eb)]+0x1,0x0,_0x3fc286);}},Game_Character['prototype'][_0x4c5915(0x1a1)]=function(_0x3f358d){const _0x56522d=_0x4c5915;this[_0x56522d(0x30e)]=!![],this[_0x56522d(0x194)](_0x3f358d);},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x331)]=function(_0x2c8e92,_0x553477){const _0x2aa247=_0x4c5915;if(this===$gamePlayer)return;const _0x5e1aeb=[this[_0x2aa247(0x229)],this[_0x2aa247(0x3e5)],'A'];_0x2c8e92[_0x2aa247(0x603)](/\b[ABCD]\b/i)?_0x5e1aeb[0x2]=String(_0x2c8e92)[_0x2aa247(0x65f)](0x0)[_0x2aa247(0x4b1)]()[_0x2aa247(0x344)]():_0x5e1aeb[0x2]=_0x2aa247(0x434)['format'](_0x2c8e92);switch(_0x553477[_0x2aa247(0x4b1)]()['trim']()){case'ON':case'TRUE':$gameSelfSwitches[_0x2aa247(0x163)](_0x5e1aeb,!![]);break;case _0x2aa247(0x1f5):case _0x2aa247(0x45d):$gameSelfSwitches[_0x2aa247(0x163)](_0x5e1aeb,![]);break;case'TOGGLE':$gameSelfSwitches['setValue'](_0x5e1aeb,!$gameSelfSwitches[_0x2aa247(0x666)](_0x5e1aeb));break;}},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x437)]=function(_0x29176a,_0x5b3853){const _0x12f5ba=_0x4c5915;if(this===$gamePlayer)return;const _0x46d3df=[this[_0x12f5ba(0x229)],this[_0x12f5ba(0x3e5)],_0x12f5ba(0x258)['format'](_0x29176a)];$gameSelfSwitches['setValue'](_0x46d3df,Number(_0x5b3853));},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x20c)]=function(_0x5b03e9,_0x4045fb){this['locate'](_0x5b03e9,_0x4045fb);},Game_Character['prototype'][_0x4c5915(0x277)]=function(_0x2a7fe7){const _0x3fb2f2=_0x4c5915;if(_0x2a7fe7)this[_0x3fb2f2(0x20c)](_0x2a7fe7['x'],_0x2a7fe7['y']);},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x34a)]=function(){const _0x124535=_0x4c5915;switch(this[_0x124535(0x1b6)]()){case 0x1:this['setDirection'](0x7);break;case 0x2:this[_0x124535(0x197)](0x4);break;case 0x3:this[_0x124535(0x197)](0x1);break;case 0x4:this[_0x124535(0x197)](0x8);break;case 0x6:this[_0x124535(0x197)](0x2);break;case 0x7:this['setDirection'](0x9);break;case 0x8:this['setDirection'](0x6);break;case 0x9:this[_0x124535(0x197)](0x3);break;}},Game_Character['prototype']['turnLeft90']=function(){const _0x2944e5=_0x4c5915;switch(this[_0x2944e5(0x1b6)]()){case 0x1:this[_0x2944e5(0x197)](0x3);break;case 0x2:this[_0x2944e5(0x197)](0x6);break;case 0x3:this[_0x2944e5(0x197)](0x9);break;case 0x4:this[_0x2944e5(0x197)](0x2);break;case 0x6:this[_0x2944e5(0x197)](0x8);break;case 0x7:this[_0x2944e5(0x197)](0x1);break;case 0x8:this[_0x2944e5(0x197)](0x4);break;case 0x9:this[_0x2944e5(0x197)](0x7);break;}},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x392)]=function(_0x3a8537,_0x3bff4a,_0x386f03){const _0x2f4e6e=_0x4c5915,_0x483c24=this[_0x2f4e6e(0x137)](_0x3a8537),_0x58f823=this['deltaYFrom'](_0x3bff4a);if($gameMap[_0x2f4e6e(0x188)]()){if(_0x2f4e6e(0x3dd)!=='wEwTT'){if(_0x386f03||this[_0x2f4e6e(0x470)]()){if(_0x483c24>0x0&&_0x58f823<0x0)return 0x1;if(_0x483c24<0x0&&_0x58f823<0x0)return 0x3;if(_0x483c24>0x0&&_0x58f823>0x0)return 0x7;if(_0x483c24<0x0&&_0x58f823>0x0)return 0x9;}}else _0x195d2c[_0x2f4e6e(0x3c8)]=_0x35fe05[_0x2f4e6e(0x63b)],_0x2a14cb['eventId']=_0xe9fedf[_0x2f4e6e(0x65c)];}if(Math['abs'](_0x483c24)>Math['abs'](_0x58f823))return _0x483c24>0x0?0x4:0x6;else{if(_0x58f823!==0x0)return _0x58f823>0x0?0x8:0x2;}return 0x0;},Game_Character['prototype'][_0x4c5915(0x54a)]=function(_0x296e76,_0x1929e3,_0xb4e402){const _0x3c2151=_0x4c5915,_0x46b31e=this['deltaXFrom'](_0x296e76),_0x1beeb2=this['deltaYFrom'](_0x1929e3);if($gameMap[_0x3c2151(0x188)]()){if(_0xb4e402||this['isSpriteVS8dir']()){if(_0x46b31e>0x0&&_0x1beeb2<0x0)return 0x9;if(_0x46b31e<0x0&&_0x1beeb2<0x0)return 0x7;if(_0x46b31e>0x0&&_0x1beeb2>0x0)return 0x3;if(_0x46b31e<0x0&&_0x1beeb2>0x0)return 0x1;}}if(Math[_0x3c2151(0x357)](_0x46b31e)>Math['abs'](_0x1beeb2))return _0x46b31e>0x0?0x6:0x4;else{if(_0x1beeb2!==0x0){if('hwoMq'!==_0x3c2151(0x440)){if(_0x36d5dd[_0x3c2151(0x232)]&&this['isSmartEventCollisionOn']())return this['checkSmartEventCollision'](_0xa76000,_0xa456fd);else{const _0x14bcb3=_0x122432[_0x3c2151(0x21c)](_0x34f643,_0x105fad)[_0x3c2151(0x600)](_0x2cd0c0=>_0x2cd0c0!==this);return _0x14bcb3[_0x3c2151(0x179)]>0x0;}}else return _0x1beeb2>0x0?0x2:0x8;}}return 0x0;},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x652)]=function(_0xf51740,_0x278ad6){const _0x42a5ab=_0x4c5915,_0x380937=this['getDirectionToPoint'](_0xf51740,_0x278ad6,!![]);if(_0x380937)this[_0x42a5ab(0x65b)](_0x380937);},Game_Character[_0x4c5915(0x4ba)]['moveAwayFromPoint']=function(_0x3db8a3,_0x582762){const _0x4a619f=_0x4c5915,_0x115994=this[_0x4a619f(0x54a)](_0x3db8a3,_0x582762,!![]);if(_0x115994)this[_0x4a619f(0x65b)](_0x115994);},Game_Character[_0x4c5915(0x4ba)]['turnTowardPoint']=function(_0x278083,_0x306e90){const _0x19bbde=_0x4c5915,_0x13de31=this[_0x19bbde(0x392)](_0x278083,_0x306e90,![]);if(_0x13de31)this[_0x19bbde(0x197)](_0x13de31);},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x487)]=function(_0x4ff1a8,_0x2149c0){const _0x59453a=_0x4c5915,_0x11e6d0=this[_0x59453a(0x54a)](_0x4ff1a8,_0x2149c0,![]);if(_0x11e6d0)this[_0x59453a(0x197)](_0x11e6d0);},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x367)]=function(_0x4425b9){if(_0x4425b9)this['moveTowardPoint'](_0x4425b9['x'],_0x4425b9['y']);},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x2f4)]=function(_0x272dba){const _0x1c4d0a=_0x4c5915;if(_0x272dba)this[_0x1c4d0a(0x584)](_0x272dba['x'],_0x272dba['y']);},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x35c)]=function(_0x12d4c3){const _0x326bc8=_0x4c5915;if(_0x12d4c3)this[_0x326bc8(0x4d4)](_0x12d4c3['x'],_0x12d4c3['y']);},Game_Character[_0x4c5915(0x4ba)][_0x4c5915(0x59a)]=function(_0x4701ee){const _0x2d2124=_0x4c5915;if(_0x4701ee)this[_0x2d2124(0x487)](_0x4701ee['x'],_0x4701ee['y']);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x645)]=Game_Player[_0x4c5915(0x4ba)]['isDashing'],Game_Player['prototype'][_0x4c5915(0x63e)]=function(){const _0x2fb778=_0x4c5915;if(!Game_CharacterBase[_0x2fb778(0x3c6)]&&this['isOnLadder']())return![];if(this['_forceDashing'])return!![];return VisuMZ['EventsMoveCore'][_0x2fb778(0x645)]['call'](this);},VisuMZ['EventsMoveCore'][_0x4c5915(0x3d9)]=Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x599)],Game_Player['prototype'][_0x4c5915(0x599)]=function(){const _0x133efa=_0x4c5915;if($gameMap[_0x133efa(0x188)]())return this['getInputDir8']();else{if(_0x133efa(0x2e8)!=='ZnYSc')return VisuMZ[_0x133efa(0x1fd)][_0x133efa(0x3d9)][_0x133efa(0x44d)](this);else{const _0x45b435=this[_0x133efa(0x3e1)]+_0x84a560(_0x168e6f['$1']);return this[_0x133efa(0x2bf)](_0x45b435[_0x133efa(0x1b9)](0x0,0xff));}}},Game_Player[_0x4c5915(0x4ba)]['getInputDir8']=function(){return Input['dir8'];},Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x1ec)]=function(){const _0xb9e9ef=_0x4c5915;if($gameSystem[_0xb9e9ef(0x1a4)]())return 0x0;if(!this['isMoving']()&&this[_0xb9e9ef(0x398)]()){if(_0xb9e9ef(0x52b)==='DLFiY'){let _0x2729de=this[_0xb9e9ef(0x599)]();if(_0x2729de>0x0)$gameTemp[_0xb9e9ef(0x334)]();else{if($gameTemp[_0xb9e9ef(0x379)]()){const _0x48c9af=$gameTemp['destinationX'](),_0x5f07c8=$gameTemp[_0xb9e9ef(0x1af)]();this['getDiagonalDestination'](_0x48c9af,_0x5f07c8)?_0x2729de=this[_0xb9e9ef(0x2e9)](_0x48c9af,_0x5f07c8):_0x2729de=this[_0xb9e9ef(0x385)](_0x48c9af,_0x5f07c8);}}if(_0x2729de>0x0){if('vElnT'!==_0xb9e9ef(0x498)){if(!_0x500207[_0xb9e9ef(0x1fd)][_0xb9e9ef(0x64c)]['Movement'][_0xb9e9ef(0x1d4)])return;for(const _0x3a58ca of this[_0xb9e9ef(0x3b7)]){this[_0xb9e9ef(0x64d)][_0xb9e9ef(0x23c)](_0x3a58ca[_0xb9e9ef(0x4ae)]);}}else this[_0xb9e9ef(0x1dd)]=this[_0xb9e9ef(0x1dd)]||0x0,this[_0xb9e9ef(0x5ba)]()?this[_0xb9e9ef(0x197)](_0x2729de):this[_0xb9e9ef(0x467)](_0x2729de),this[_0xb9e9ef(0x1dd)]++;}else this['_inputTime']=0x0;}else _0x50444d[_0xb9e9ef(0x241)](this[_0xb9e9ef(0x352)]);}},Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x5ba)]=function(){const _0x4e82b1=_0x4c5915,_0x1f5be3=VisuMZ[_0x4e82b1(0x1fd)][_0x4e82b1(0x64c)][_0x4e82b1(0x28d)];if(!_0x1f5be3[_0x4e82b1(0x2be)])return![];if($gameTemp[_0x4e82b1(0x379)]())return![];if(this[_0x4e82b1(0x63e)]()||this[_0x4e82b1(0x201)]()||this[_0x4e82b1(0x478)]())return![];return this['_inputTime']<_0x1f5be3[_0x4e82b1(0x1ab)];},VisuMZ[_0x4c5915(0x1fd)]['Game_Player_executeMove']=Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x467)],Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x467)]=function(_0x5be6a6){const _0x22af76=_0x4c5915;if($gameMap['isSupportDiagonalMovement']())this[_0x22af76(0x65b)](_0x5be6a6);else{if(_0x22af76(0x308)!=='aFdaD'){if(!this[_0x22af76(0x4ec)](_0xf4bd1c,_0x5eea33))return;const _0x57bce2=_0x199ee6['EventsMoveCore'][_0x22af76(0x64c)]['Template'];if(!_0x1f4594)_0x57bce2[_0x22af76(0x18c)][_0x22af76(0x44d)](this,_0x127213,_0x3f5d30,this);this['_eventMorphData']={'mapId':_0x3877a8,'eventId':_0x24d926},this['_pageIndex']=-0x2,this['refresh']();if(!_0x37d27f)_0x57bce2['PostMorphJS']['call'](this,_0xcbb367,_0x453c37,this);_0x5aaeb9['clearEventCache']();}else VisuMZ[_0x22af76(0x1fd)][_0x22af76(0x55b)][_0x22af76(0x44d)](this,_0x5be6a6);}},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x602)]=Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x18a)],Game_Player['prototype'][_0x4c5915(0x18a)]=function(_0x16d476,_0x3a87b3,_0x3092bb){const _0x15d326=_0x4c5915;if($gameMap[_0x15d326(0x2d1)](_0x16d476,_0x3a87b3,_0x3092bb,_0x15d326(0x4e2))){if(this[_0x15d326(0x378)]()&&this[_0x15d326(0x462)]()){if(_0x15d326(0x281)==='efaUE')for(let _0x262828=_0xf053e2;_0x262828<=_0x412652;_0x262828++){if(this[_0x15d326(0x2ca)](_0x30c7d9,_0x262828))return![];}else return this[_0x15d326(0x462)]()[_0x15d326(0x18a)](_0x16d476,_0x3a87b3,_0x3092bb);}else{if('wMOUX'===_0x15d326(0x31b))return!![];else this[_0x15d326(0x5db)]=!![];}}if($gameMap[_0x15d326(0x451)](_0x16d476,_0x3a87b3,_0x3092bb,'player'))return![];return VisuMZ['EventsMoveCore'][_0x15d326(0x602)][_0x15d326(0x44d)](this,_0x16d476,_0x3a87b3,_0x3092bb);},VisuMZ[_0x4c5915(0x1fd)]['Game_Player_checkEventTriggerHere']=Game_Player['prototype'][_0x4c5915(0x635)],Game_Player[_0x4c5915(0x4ba)]['checkEventTriggerHere']=function(_0x2e1f69){const _0xca972e=_0x4c5915;VisuMZ[_0xca972e(0x1fd)][_0xca972e(0x2ae)][_0xca972e(0x44d)](this,_0x2e1f69);if(this['canStartLocalEvents']()){this[_0xca972e(0x269)](_0x2e1f69);if(_0x2e1f69[_0xca972e(0x452)](0x0)&&this[_0xca972e(0x5b4)]()===_0xca972e(0x493))this[_0xca972e(0x345)](this['x'],this['y']);else(_0x2e1f69[_0xca972e(0x452)](0x1)||_0x2e1f69[_0xca972e(0x452)](0x2))&&this['startMapCommonEventOnTouch']();}},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x30c)]=Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x631)],Game_Player['prototype'][_0x4c5915(0x631)]=function(_0x4eea0e){const _0x598e77=_0x4c5915;VisuMZ['EventsMoveCore'][_0x598e77(0x30c)][_0x598e77(0x44d)](this,_0x4eea0e);if(this['canStartLocalEvents']()&&_0x4eea0e[_0x598e77(0x452)](0x0)&&this[_0x598e77(0x5b4)]()===_0x598e77(0x40e)){if(_0x598e77(0x4db)!==_0x598e77(0x5b0)){const _0x42ee65=this['direction'](),_0x76cc33=$gameMap[_0x598e77(0x454)](this['x'],_0x42ee65),_0x11b99c=$gameMap[_0x598e77(0x2bc)](this['y'],_0x42ee65);this[_0x598e77(0x345)](_0x76cc33,_0x11b99c);}else{if(this[_0x598e77(0x30e)])return;if(this['updatePatternEventsMoveCore']())return;_0x46c5f5[_0x598e77(0x1fd)][_0x598e77(0x298)][_0x598e77(0x44d)](this);}}},Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x269)]=function(_0x15df4e){const _0x58f4de=_0x4c5915;if($gameMap[_0x58f4de(0x5c1)]())return;if($gameMap[_0x58f4de(0x1e5)]())return;const _0x1b9def=$gameMap[_0x58f4de(0x57c)]();for(const _0x3645b0 of _0x1b9def){if(!_0x3645b0)continue;if(!_0x3645b0[_0x58f4de(0x146)](_0x15df4e))continue;if(this[_0x58f4de(0x38f)](_0x3645b0))return _0x3645b0[_0x58f4de(0x568)]();if(this[_0x58f4de(0x233)](_0x3645b0))return _0x3645b0[_0x58f4de(0x568)]();}},Game_Player[_0x4c5915(0x4ba)]['meetActivationRegionConditions']=function(_0xb1de2c){const _0x3054f5=_0x4c5915;if($gameMap[_0x3054f5(0x5c1)]())return![];if($gameMap[_0x3054f5(0x1e5)]())return![];return _0xb1de2c['activationRegionList']()['includes'](this[_0x3054f5(0x3d8)]());},Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x233)]=function(_0x3ad03f){const _0xf6e836=_0x4c5915;if($gameMap['isEventRunning']())return![];if($gameMap[_0xf6e836(0x1e5)]())return![];if(['none',_0xf6e836(0x55c)][_0xf6e836(0x452)](_0x3ad03f['activationProximityType']()))return![];const _0x4835bd=_0x3ad03f['activationProximityType'](),_0x20eb12=_0x3ad03f[_0xf6e836(0x41f)]();switch(_0x4835bd){case _0xf6e836(0x37c):const _0x36fc6b=$gameMap[_0xf6e836(0x3cc)](this['x'],this['y'],_0x3ad03f['x'],_0x3ad03f['y']);return _0x3ad03f[_0xf6e836(0x41f)]()>=_0x36fc6b;break;case'square':return _0x20eb12>=Math[_0xf6e836(0x357)](_0x3ad03f[_0xf6e836(0x137)](this['x']))&&_0x20eb12>=Math['abs'](_0x3ad03f[_0xf6e836(0x589)](this['y']));break;case _0xf6e836(0x420):return _0x20eb12>=Math['abs'](_0x3ad03f[_0xf6e836(0x589)](this['y']));break;case'column':return _0x20eb12>=Math['abs'](_0x3ad03f[_0xf6e836(0x137)](this['x']));break;case'default':return![];break;}},Game_Player['prototype'][_0x4c5915(0x345)]=function(_0x50b7ec,_0x1ac784){const _0x2cb198=_0x4c5915;if($gameMap[_0x2cb198(0x5c1)]())return;if($gameMap[_0x2cb198(0x1e5)]())return;let _0x2b9cda=VisuMZ[_0x2cb198(0x1fd)][_0x2cb198(0x64c)][_0x2cb198(0x256)],_0x16ae9b=$gameMap[_0x2cb198(0x3d8)](_0x50b7ec,_0x1ac784);const _0xb928e8=_0x2cb198(0x381)[_0x2cb198(0x313)](_0x16ae9b);_0x2b9cda[_0xb928e8]&&$gameTemp[_0x2cb198(0x241)](_0x2b9cda[_0xb928e8]);},Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x5b4)]=function(){const _0x5c6b94=_0x4c5915;return VisuMZ[_0x5c6b94(0x1fd)]['Settings'][_0x5c6b94(0x16c)];},Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x644)]=function(){const _0x249826=_0x4c5915;if($gameMap[_0x249826(0x5c1)]())return;if($gameMap[_0x249826(0x1e5)]())return;let _0x304581=VisuMZ[_0x249826(0x1fd)][_0x249826(0x64c)]['RegionTouch'];const _0x5ca842=_0x249826(0x381)[_0x249826(0x313)](this[_0x249826(0x3d8)]());_0x304581[_0x5ca842]&&$gameTemp['reserveCommonEvent'](_0x304581[_0x5ca842]);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x3f3)]=Game_Player[_0x4c5915(0x4ba)]['increaseSteps'],Game_Player[_0x4c5915(0x4ba)][_0x4c5915(0x187)]=function(){const _0x4903d9=_0x4c5915;VisuMZ['EventsMoveCore'][_0x4903d9(0x3f3)][_0x4903d9(0x44d)](this),VisuMZ['MoveAllSynchTargets'](0x0);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x53d)]=Game_Follower['prototype'][_0x4c5915(0x537)],Game_Follower['prototype'][_0x4c5915(0x537)]=function(_0x50070a){const _0x3e88dc=_0x4c5915;VisuMZ[_0x3e88dc(0x1fd)]['Game_Follower_initialize']['call'](this,_0x50070a),this[_0x3e88dc(0x65e)]=![];},Game_Follower[_0x4c5915(0x4ba)][_0x4c5915(0x63e)]=function(){const _0xf0dae4=_0x4c5915;if(this['_chaseOff'])return Game_Character[_0xf0dae4(0x4ba)][_0xf0dae4(0x63e)][_0xf0dae4(0x44d)](this);return $gamePlayer[_0xf0dae4(0x63e)]();},Game_Follower['prototype'][_0x4c5915(0x44e)]=function(){const _0xd0dd13=_0x4c5915;if(this[_0xd0dd13(0x65e)])return Game_Character[_0xd0dd13(0x4ba)][_0xd0dd13(0x44e)][_0xd0dd13(0x44d)](this);return $gamePlayer[_0xd0dd13(0x44e)]()&&this['_actuallyMoving'];},Game_Follower['prototype'][_0x4c5915(0x659)]=function(){const _0x210d05=_0x4c5915;return $gamePlayer[_0x210d05(0x659)]();},Game_Follower[_0x4c5915(0x4ba)][_0x4c5915(0x244)]=function(){const _0x279393=_0x4c5915;Game_Character[_0x279393(0x4ba)][_0x279393(0x244)][_0x279393(0x44d)](this),this['_stopCount']>0x0&&(this['_actuallyMoving']=![]);},Game_Follower['prototype'][_0x4c5915(0x20e)]=function(_0x69a3ed){const _0x482c34=_0x4c5915;this[_0x482c34(0x65e)]=_0x69a3ed;},VisuMZ[_0x4c5915(0x1fd)]['Game_Follower_chaseCharacter']=Game_Follower[_0x4c5915(0x4ba)]['chaseCharacter'],Game_Follower[_0x4c5915(0x4ba)][_0x4c5915(0x253)]=function(_0xd5b4a3){const _0x36dd88=_0x4c5915;if(this[_0x36dd88(0x65e)])return;if($gameSystem[_0x36dd88(0x4a8)]())return;VisuMZ[_0x36dd88(0x1fd)]['Game_Follower_chaseCharacter']['call'](this,_0xd5b4a3),this[_0x36dd88(0x315)]=!![];},VisuMZ['EventsMoveCore'][_0x4c5915(0x3b9)]=Game_Vehicle['prototype'][_0x4c5915(0x18a)],Game_Vehicle[_0x4c5915(0x4ba)][_0x4c5915(0x18a)]=function(_0x233eda,_0x5ef9b1,_0x2631f6){const _0x6f5720=_0x4c5915;if($gameMap[_0x6f5720(0x2d1)](_0x233eda,_0x5ef9b1,_0x2631f6,this[_0x6f5720(0x340)]))return!![];if($gameMap[_0x6f5720(0x451)](_0x233eda,_0x5ef9b1,_0x2631f6,this[_0x6f5720(0x340)]))return![];return VisuMZ[_0x6f5720(0x1fd)]['Game_Vehicle_isMapPassable']['call'](this,_0x233eda,_0x5ef9b1,_0x2631f6);},Game_Vehicle['prototype'][_0x4c5915(0x56f)]=function(_0x2cf4e,_0x2335fe,_0x101cf2){const _0x26498f=_0x4c5915;if($gameMap[_0x26498f(0x2d1)](_0x2cf4e,_0x2335fe,_0x101cf2,this[_0x26498f(0x340)]))return!![];if($gameMap[_0x26498f(0x451)](_0x2cf4e,_0x2335fe,_0x101cf2,this[_0x26498f(0x340)]))return![];return VisuMZ[_0x26498f(0x1fd)][_0x26498f(0x469)][_0x26498f(0x44d)]($gamePlayer,_0x2cf4e,_0x2335fe,_0x101cf2);},VisuMZ['EventsMoveCore'][_0x4c5915(0x1b8)]=Game_Vehicle[_0x4c5915(0x4ba)]['isLandOk'],Game_Vehicle[_0x4c5915(0x4ba)]['isLandOk']=function(_0x366008,_0x24c0fc,_0x15bd91){const _0x47d56c=_0x4c5915;if($gameMap['isRegionDockable'](_0x366008,_0x24c0fc,_0x15bd91,this[_0x47d56c(0x340)]))return!![];const _0x21ba92=this[_0x47d56c(0x340)]['charAt'](0x0)['toUpperCase']()+this[_0x47d56c(0x340)]['slice'](0x1),_0x53806f=_0x47d56c(0x54d)[_0x47d56c(0x313)](_0x21ba92);if(VisuMZ[_0x47d56c(0x1fd)]['Settings'][_0x47d56c(0x5fe)][_0x53806f]){if('kDOSu'!==_0x47d56c(0x509))return![];else{const _0x1d8e8a=new _0x108421(0x0,0x0,0x1,0x1);this[_0x47d56c(0x198)]=new _0x28cc0f(_0x1d8e8a),this[_0x47d56c(0x198)]['padding']=0x0,this[_0x47d56c(0x2a0)]=this[_0x47d56c(0x2f7)]()?0xff:0x0;}}else return VisuMZ[_0x47d56c(0x1fd)][_0x47d56c(0x1b8)][_0x47d56c(0x44d)](this,_0x366008,_0x24c0fc,_0x15bd91);},VisuMZ[_0x4c5915(0x1fd)]['Game_Vehicle_initMoveSpeed']=Game_Vehicle[_0x4c5915(0x4ba)][_0x4c5915(0x280)],Game_Vehicle[_0x4c5915(0x4ba)][_0x4c5915(0x280)]=function(){const _0x3fe8c5=_0x4c5915;VisuMZ[_0x3fe8c5(0x1fd)]['Game_Vehicle_initMoveSpeed'][_0x3fe8c5(0x44d)](this);const _0xec2f59=VisuMZ['EventsMoveCore'][_0x3fe8c5(0x64c)]['Movement'];if(this[_0x3fe8c5(0x45a)]()){if(_0x3fe8c5(0x443)===_0x3fe8c5(0x443)){if(_0xec2f59[_0x3fe8c5(0x207)])this[_0x3fe8c5(0x174)](_0xec2f59[_0x3fe8c5(0x207)]);}else{if([0x2,0x4,0x6,0x8][_0x3fe8c5(0x452)](_0xc47925))return 0x4;if([0x1,0x3,0x7,0x9][_0x3fe8c5(0x452)](_0x6716b6))return 0x5;}}else{if(this[_0x3fe8c5(0x5c9)]()){if(_0xec2f59[_0x3fe8c5(0x556)])this[_0x3fe8c5(0x174)](_0xec2f59[_0x3fe8c5(0x556)]);}else{if(this[_0x3fe8c5(0x363)]()){if(_0xec2f59[_0x3fe8c5(0x545)])this[_0x3fe8c5(0x174)](_0xec2f59[_0x3fe8c5(0x545)]);}}}},VisuMZ['EventsMoveCore'][_0x4c5915(0x3db)]=Game_Event[_0x4c5915(0x4ba)]['initialize'],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x537)]=function(_0x18ba34,_0x3062c6){const _0x537cb7=_0x4c5915;VisuMZ[_0x537cb7(0x1fd)][_0x537cb7(0x3db)][_0x537cb7(0x44d)](this,_0x18ba34,_0x3062c6),this['setupCopyEvent'](),this[_0x537cb7(0x485)](),this[_0x537cb7(0x267)]();},Game_Map[_0x4c5915(0x4ba)][_0x4c5915(0x494)]=function(_0x47e366,_0x271be0){const _0x163c3b=_0x4c5915;if(_0x47e366===$gameMap[_0x163c3b(0x3c8)]()){if(_0x163c3b(0x5da)==='ZzoWy'){const _0x10a454=_0x3aeb14,_0x3f761d=_0x157596[_0x163c3b(0x4ac)];if(_0x4343aa[_0x163c3b(0x358)]===_0x10a454[_0x163c3b(0x295)]){let _0xc7fa2d=_0x50c01b['parameters'][0x0];_0xc7fa2d=this[_0x163c3b(0x4b5)](_0xc7fa2d),_0xc7fa2d=this[_0x163c3b(0x351)](_0xc7fa2d),this[_0x163c3b(0x646)](_0x604ddf,_0xc7fa2d);}else _0x1cd1af[_0x163c3b(0x1fd)][_0x163c3b(0x328)]['call'](this,_0x40e204);}else return $dataMap['events'][_0x271be0];}else return VisuMZ['PreloadedMaps'][_0x47e366]['events'][_0x271be0];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x473)]=Game_Event['prototype'][_0x4c5915(0x4f1)],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x4f1)]=function(){const _0x39f51a=_0x4c5915;if(this[_0x39f51a(0x2c9)]!==undefined){if('JkiKo'===_0x39f51a(0x2c4)){const _0x28b469=this['_eventMorphData'][_0x39f51a(0x3c8)],_0x45fa54=this[_0x39f51a(0x2c9)][_0x39f51a(0x5ad)];return $gameMap[_0x39f51a(0x494)](_0x28b469,_0x45fa54);}else this[_0x39f51a(0x326)](_0x10f94e[_0x39f51a(0x3e5)]);}if(this['_eventCopyData']!==undefined){const _0x53c405=this[_0x39f51a(0x2ed)][_0x39f51a(0x3c8)],_0x40ab9b=this[_0x39f51a(0x2ed)][_0x39f51a(0x5ad)];return $gameMap[_0x39f51a(0x494)](_0x53c405,_0x40ab9b);}if(this[_0x39f51a(0x4e0)]!==undefined){if('tEMZm'===_0x39f51a(0x29e)){if(this[_0x39f51a(0x38e)]===_0x4581a7)this[_0x39f51a(0x183)]();if(!_0x84cd69)return;this[_0x39f51a(0x384)](_0x3fed4f[_0x39f51a(0x229)],_0x3a2fd7['_eventId']);}else{const _0x32ee19=this['_eventSpawnData']['mapId'],_0x1bca74=this[_0x39f51a(0x4e0)][_0x39f51a(0x5ad)];return $gameMap[_0x39f51a(0x494)](_0x32ee19,_0x1bca74);}}if($gameTemp['_spawnData']!==undefined){const _0x2d07ec=$gameTemp[_0x39f51a(0x5c6)][_0x39f51a(0x3c8)],_0x8dfaf6=$gameTemp[_0x39f51a(0x5c6)][_0x39f51a(0x5ad)];return $gameMap[_0x39f51a(0x494)](_0x2d07ec,_0x8dfaf6);}return VisuMZ['EventsMoveCore'][_0x39f51a(0x473)][_0x39f51a(0x44d)](this);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x4ec)]=function(_0x1b643e,_0x36e60e){const _0x481079=_0x4c5915;if(_0x1b643e===0x0||_0x36e60e===0x0)return![];if(_0x1b643e===$gameMap[_0x481079(0x3c8)]())return!![];if(!VisuMZ['PreloadedMaps'][_0x1b643e]&&_0x1b643e!==$gameMap[_0x481079(0x3c8)]()){if($gameTemp[_0x481079(0x2d8)]()){if('TPcmE'!=='vfUNS')console[_0x481079(0x47b)]('ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.'[_0x481079(0x313)](_0x1b643e));else return!!this['mapValue'](_0x23a0ed);}return![];}return!![];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x3d7)]=Game_Event[_0x4c5915(0x4ba)]['start'],Game_Event['prototype'][_0x4c5915(0x568)]=function(){const _0x5a4769=_0x4c5915;VisuMZ[_0x5a4769(0x1fd)][_0x5a4769(0x3d7)]['call'](this);if(Imported[_0x5a4769(0x1b2)]&&Input[_0x5a4769(0x208)](VisuMZ['MessageCore'][_0x5a4769(0x64c)][_0x5a4769(0x656)][_0x5a4769(0x2b9)])){if(_0x5a4769(0x5d5)==='ruUeL')return _0x41f5bf[_0x5a4769(0x1fd)][_0x5a4769(0x2e0)]['call'](this);else Input[_0x5a4769(0x297)]();}},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x528)]=function(){const _0x4310f4=_0x4c5915,_0x38bb3e=this[_0x4310f4(0x4f1)]()[_0x4310f4(0x31c)];if(_0x38bb3e==='')return;if(DataManager[_0x4310f4(0x36f)]()||DataManager['isEventTest']())return;const _0x3b0648=VisuMZ[_0x4310f4(0x1fd)][_0x4310f4(0x64c)][_0x4310f4(0x5fb)];let _0x5b7675=null,_0x4d7ca7=0x0,_0x57736d=0x0;if(_0x38bb3e[_0x4310f4(0x603)](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)){_0x4d7ca7=Number(RegExp['$1']),_0x57736d=Number(RegExp['$2']);if(_0x4d7ca7===0x0)_0x4d7ca7=$gameMap[_0x4310f4(0x3c8)]();}else{if(_0x38bb3e[_0x4310f4(0x603)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)){if(_0x4310f4(0x627)===_0x4310f4(0x1de)){if(this['_PreservedEventMorphData']===_0x41efbd)this[_0x4310f4(0x183)]();const _0x34af9b=_0x4310f4(0x444)['format'](_0x51d7cc,_0x25f407);delete this[_0x4310f4(0x506)][_0x34af9b];}else{_0x4d7ca7=Number(RegExp['$1']),_0x57736d=Number(RegExp['$2']);if(_0x4d7ca7===0x0)_0x4d7ca7=$gameMap[_0x4310f4(0x3c8)]();}}else{if(_0x38bb3e['match'](/<COPY EVENT:[ ](.*?)>/i)){const _0x4704cc=String(RegExp['$1'])[_0x4310f4(0x4b1)]()[_0x4310f4(0x344)]();_0x5b7675=VisuMZ[_0x4310f4(0x5b3)][_0x4704cc];if(!_0x5b7675)return;_0x4d7ca7=_0x5b7675['MapID'],_0x57736d=_0x5b7675['EventID'];}}}if(!this['checkValidEventerMap'](_0x4d7ca7,_0x57736d))return;_0x3b0648['PreCopyJS']['call'](this,_0x4d7ca7,_0x57736d,this);if(_0x5b7675)_0x5b7675[_0x4310f4(0x2df)]['call'](this,_0x4d7ca7,_0x57736d,this);this['_eventCopyData']={'mapId':_0x4d7ca7,'eventId':_0x57736d},this[_0x4310f4(0x3ff)]=-0x2,this[_0x4310f4(0x476)](),_0x3b0648[_0x4310f4(0x354)][_0x4310f4(0x44d)](this,_0x4d7ca7,_0x57736d,this);if(_0x5b7675)_0x5b7675[_0x4310f4(0x354)][_0x4310f4(0x44d)](this,_0x4d7ca7,_0x57736d,this);$gameMap[_0x4310f4(0x221)]();},Game_Event[_0x4c5915(0x4ba)]['setupMorphEvent']=function(){const _0xa0159d=_0x4c5915,_0x5860fa=$gameSystem['getPreservedMorphEventData'](this);if(!_0x5860fa)return;const _0x53ccc8=_0x5860fa[_0xa0159d(0x19e)][_0xa0159d(0x4b1)]()['trim']();_0x53ccc8!=='UNTITLED'?this[_0xa0159d(0x273)](_0x53ccc8,!![]):this[_0xa0159d(0x51f)](_0x5860fa[_0xa0159d(0x3c8)],_0x5860fa[_0xa0159d(0x5ad)],!![]);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x51f)]=function(_0x5a8767,_0x569738,_0x40b28e){const _0x5aeeba=_0x4c5915;if(!this[_0x5aeeba(0x4ec)](_0x5a8767,_0x569738))return;const _0x29fc58=VisuMZ[_0x5aeeba(0x1fd)][_0x5aeeba(0x64c)][_0x5aeeba(0x5fb)];if(!_0x40b28e)_0x29fc58[_0x5aeeba(0x18c)][_0x5aeeba(0x44d)](this,_0x5a8767,_0x569738,this);this[_0x5aeeba(0x2c9)]={'mapId':_0x5a8767,'eventId':_0x569738},this['_pageIndex']=-0x2,this[_0x5aeeba(0x476)]();if(!_0x40b28e)_0x29fc58['PostMorphJS'][_0x5aeeba(0x44d)](this,_0x5a8767,_0x569738,this);$gameMap[_0x5aeeba(0x221)]();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x273)]=function(_0x58b3fe,_0x4daa00){const _0x381d89=_0x4c5915;_0x58b3fe=_0x58b3fe[_0x381d89(0x4b1)]()[_0x381d89(0x344)]();const _0x833c0f=VisuMZ[_0x381d89(0x5b3)][_0x58b3fe];if(!_0x833c0f)return;const _0x5f4152=_0x833c0f[_0x381d89(0x63b)],_0x8e8570=_0x833c0f[_0x381d89(0x65c)];if(!this[_0x381d89(0x4ec)](_0x5f4152,_0x8e8570))return;if(!_0x4daa00)_0x833c0f['PreMorphJS'][_0x381d89(0x44d)](this,_0x5f4152,_0x8e8570,this);this[_0x381d89(0x51f)](_0x5f4152,_0x8e8570,_0x4daa00);if(!_0x4daa00)_0x833c0f[_0x381d89(0x2e6)][_0x381d89(0x44d)](this,_0x5f4152,_0x8e8570,this);if($gameMap)$gameMap[_0x381d89(0x221)]();},Game_Event['prototype'][_0x4c5915(0x581)]=function(){const _0x2be97a=_0x4c5915;this[_0x2be97a(0x2c9)]=undefined,this[_0x2be97a(0x3ff)]=-0x2,this[_0x2be97a(0x476)]();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x329)]=function(_0xa656fd){const _0x105215=_0x4c5915,_0x2d0b10=VisuMZ[_0x105215(0x1fd)][_0x105215(0x64c)]['Template'],_0x479ae3=_0xa656fd[_0x105215(0x19e)][_0x105215(0x4b1)]()[_0x105215(0x344)](),_0x56b846=!['',_0x105215(0x196)]['includes'](_0x479ae3);let _0x9d017f=0x0,_0x510dea=0x0;if(_0x56b846){const _0x2c2da3=VisuMZ[_0x105215(0x5b3)][_0x479ae3];if(!_0x2c2da3)return;_0x9d017f=_0x2c2da3[_0x105215(0x63b)],_0x510dea=_0x2c2da3[_0x105215(0x65c)];}else _0x9d017f=_0xa656fd[_0x105215(0x3c8)],_0x510dea=_0xa656fd[_0x105215(0x5ad)];if(!this[_0x105215(0x4ec)](_0x9d017f,_0x510dea))return;if(_0x56b846){const _0x200fc9=VisuMZ['EventTemplates'][_0x479ae3];_0x200fc9['PreSpawnJS'][_0x105215(0x44d)](this,_0x9d017f,_0x510dea,this);}_0x2d0b10['PreSpawnJS'][_0x105215(0x44d)](this,_0x9d017f,_0x510dea,this),this[_0x105215(0x4e0)]=_0xa656fd,this[_0x105215(0x3ff)]=-0x2,this[_0x105215(0x229)]=$gameMap['mapId'](),this[_0x105215(0x3e5)]=_0xa656fd[_0x105215(0x25e)],this[_0x105215(0x52d)]=_0xa656fd[_0x105215(0x211)],this[_0x105215(0x151)](_0xa656fd['x'],_0xa656fd['y']),this['setDirection'](_0xa656fd[_0x105215(0x1b6)]),this['refresh']();if(_0x56b846){const _0x224375=VisuMZ['EventTemplates'][_0x479ae3];if(!_0x224375)return;_0x224375[_0x105215(0x404)]['call'](this,_0x9d017f,_0x510dea,this);}_0x2d0b10[_0x105215(0x404)][_0x105215(0x44d)](this,_0x9d017f,_0x510dea,this);const _0x53a422=SceneManager['_scene'];if(_0x53a422&&_0x53a422['_spriteset'])_0x53a422[_0x105215(0x5e7)][_0x105215(0x640)](this);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x319)]=function(){const _0x3331ac=_0x4c5915;return!!this[_0x3331ac(0x4e0)];},Game_Event['prototype'][_0x4c5915(0x568)]=function(){const _0xdb677=_0x4c5915;if(!this[_0xdb677(0x61e)]())return;const _0x3840fe=this['list']()[_0xdb677(0x600)](_0xde4e7d=>_0xde4e7d[_0xdb677(0x358)]!==0x6c&&_0xde4e7d[_0xdb677(0x358)]!==0x198);_0x3840fe[_0xdb677(0x179)]>0x1&&('QTlxc'===_0xdb677(0x2a6)?(this[_0xdb677(0x2f5)]=!![],this[_0xdb677(0x146)]([0x0,0x1,0x2])&&this[_0xdb677(0x306)]()):_0x35531c=this[_0xdb677(0x385)](_0x7d691d,_0x5c6140));},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x335)]=Game_Event['prototype'][_0x4c5915(0x617)],Game_Event[_0x4c5915(0x4ba)]['clearPageSettings']=function(){const _0x189df0=_0x4c5915;VisuMZ[_0x189df0(0x1fd)][_0x189df0(0x335)][_0x189df0(0x44d)](this),this[_0x189df0(0x341)](),this[_0x189df0(0x148)]();},VisuMZ[_0x4c5915(0x1fd)]['Game_Event_setupPageSettings']=Game_Event[_0x4c5915(0x4ba)]['setupPageSettings'],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x1be)]=function(){const _0x2e1034=_0x4c5915;this[_0x2e1034(0x349)]=!![],VisuMZ['EventsMoveCore']['Game_Event_setupPageSettings']['call'](this),this['setupEventsMoveCoreEffects'](),this[_0x2e1034(0x148)](),this[_0x2e1034(0x349)]=![];},Game_Event['prototype'][_0x4c5915(0x18d)]=function(){const _0x58c797=_0x4c5915;if(!this[_0x58c797(0x4f1)]())return;this[_0x58c797(0x341)](),this[_0x58c797(0x550)](),this[_0x58c797(0x621)](),this['updateEventsMoveCoreTagChanges']();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x550)]=function(){const _0x40d8d3=_0x4c5915,_0x1f3890=this[_0x40d8d3(0x4f1)]()[_0x40d8d3(0x31c)];if(_0x1f3890==='')return;this[_0x40d8d3(0x415)](_0x1f3890);},Game_Event['prototype']['setupEventsMoveCoreCommentTags']=function(){const _0x18dfd0=_0x4c5915;if(!this[_0x18dfd0(0x3d4)]())return;const _0x53065d=this['list']();let _0x2214bf='';for(const _0x39aadf of _0x53065d){if([0x6c,0x198][_0x18dfd0(0x452)](_0x39aadf[_0x18dfd0(0x358)])){if(_0x2214bf!=='')_0x2214bf+='\x0a';_0x2214bf+=_0x39aadf[_0x18dfd0(0x4ac)][0x0];}}this[_0x18dfd0(0x415)](_0x2214bf);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x341)]=function(){const _0x1b5f5a=_0x4c5915,_0x169f32=VisuMZ[_0x1b5f5a(0x1fd)][_0x1b5f5a(0x64c)];this['_activationProximity']={'type':_0x1b5f5a(0x4d8),'distance':0x0,'regionList':[]},this[_0x1b5f5a(0x219)]=![],this[_0x1b5f5a(0x559)](),this[_0x1b5f5a(0x4a9)]=![],this['_customZ']=![],this[_0x1b5f5a(0x2f6)]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this[_0x1b5f5a(0x1d2)]=$gameSystem[_0x1b5f5a(0x3f0)](this),this['_labelWindow']={'originalText':'','text':'','visibleRange':_0x169f32[_0x1b5f5a(0x274)][_0x1b5f5a(0x212)],'offsetX':_0x169f32[_0x1b5f5a(0x274)][_0x1b5f5a(0x54e)],'offsetY':_0x169f32[_0x1b5f5a(0x274)]['OffsetY']},this[_0x1b5f5a(0x564)]=![],this['_moveOnlyRegions']=[],this[_0x1b5f5a(0x4be)]={'target':-0x1,'type':_0x1b5f5a(0x613),'delay':0x1,'opacityDelta':0x0},this['_randomMoveWeight']=_0x169f32[_0x1b5f5a(0x28d)][_0x1b5f5a(0x285)]??0x0,this[_0x1b5f5a(0x4c1)]=![],this[_0x1b5f5a(0x2ff)]={'visible':!![],'filename':_0x169f32[_0x1b5f5a(0x28d)]['DefaultShadow']},this[_0x1b5f5a(0x387)](),this[_0x1b5f5a(0x5b5)]();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x415)]=function(_0x3a25d3){const _0x2155ad=_0x4c5915;if(_0x3a25d3[_0x2155ad(0x603)](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x2155ad(0x611)!=='ZFcPA'){if(this[_0x2155ad(0x38e)]===_0x1ce0e7)this[_0x2155ad(0x183)]();if(!_0x1add5f)return null;const _0x2bd5e9='Map%1-Event%2'[_0x2155ad(0x313)](_0x451cd5['_mapId'],_0x3f7555[_0x2155ad(0x3e5)]);return this[_0x2155ad(0x38e)][_0x2bd5e9];}else this['_activationProximity'][_0x2155ad(0x535)]=JSON[_0x2155ad(0x508)]('['+RegExp['$1'][_0x2155ad(0x603)](/\d+/g)+']'),this['_activationProximity'][_0x2155ad(0x5c0)]=_0x2155ad(0x55c);}else{if(_0x3a25d3[_0x2155ad(0x603)](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)){if(_0x2155ad(0x147)===_0x2155ad(0x28a)){let _0x361cd8=_0x10d97f[_0x2155ad(0x1fd)][_0x2155ad(0x64c)][_0x2155ad(0x28d)][_0x2155ad(0x2d3)]?_0x4d3310:_0x310af3;return this['moveStraight'](_0x361cd8);}else type=String(RegExp['$1'])['toLowerCase']()[_0x2155ad(0x344)](),this[_0x2155ad(0x5d0)][_0x2155ad(0x5c0)]=type,this['_activationProximity'][_0x2155ad(0x3cc)]=Number(RegExp['$2']);}}_0x3a25d3['match'](/<(?:ATTACH PICTURE|PICTURE) FILENAME:[ ](.*?)>/i)&&(_0x2155ad(0x464)!==_0x2155ad(0x526)?this[_0x2155ad(0x591)][_0x2155ad(0x3ac)]=String(RegExp['$1']):this[_0x2155ad(0x57d)]=0x0);if(_0x3a25d3[_0x2155ad(0x603)](/<(?:ATTACH PICTURE|PICTURE) BLEND MODE:[ ](.*?)>/i)){const _0x174da4=String(RegExp['$1'])[_0x2155ad(0x4b1)]()[_0x2155ad(0x344)](),_0x4f514b=[_0x2155ad(0x17a),_0x2155ad(0x3b5),'MULTIPLY','SCREEN'];this[_0x2155ad(0x591)][_0x2155ad(0x2e5)]=_0x4f514b[_0x2155ad(0x184)](_0x174da4)[_0x2155ad(0x1b9)](0x0,0x3);}_0x3a25d3[_0x2155ad(0x603)](/<(?:ATTACH PICTURE|PICTURE) (?:SIZE|MAX SIZE|MAX):[ ](\d+)>/i)&&(this[_0x2155ad(0x591)][_0x2155ad(0x5b6)]=Number(RegExp['$1']));_0x3a25d3[_0x2155ad(0x603)](/<(?:ATTACH PICTURE|PICTURE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x2155ad(0x591)][_0x2155ad(0x4b2)]=Number(RegExp['$1']));_0x3a25d3['match'](/<(?:ATTACH PICTURE|PICTURE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x2155ad(0x4f3)===_0x2155ad(0x4f3)?this[_0x2155ad(0x591)][_0x2155ad(0x332)]=Number(RegExp['$1']):(_0xdbc08['EventsMoveCore'][_0x2155ad(0x558)][_0x2155ad(0x44d)](this),this[_0x2155ad(0x32f)]()));_0x3a25d3[_0x2155ad(0x603)](/<(?:ATTACH PICTURE|PICTURE) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x2155ad(0x2fd)!==_0x2155ad(0x2fd)?this['_frames']=_0x21c362[_0x2155ad(0x2a4)](this['_frames'],0x1):(this[_0x2155ad(0x591)][_0x2155ad(0x4b2)]=Number(RegExp['$1']),this[_0x2155ad(0x591)][_0x2155ad(0x332)]=Number(RegExp['$2'])));_0x3a25d3[_0x2155ad(0x603)](/<(?:ATTACH PICTURE|PICTURE) SCALE:[ ](\d+)([%％])>/i)&&(this['_attachPicture'][_0x2155ad(0x446)]=Number(RegExp['$1'])*0.01);_0x3a25d3['match'](/<ALWAYS UPDATE MOVEMENT>/i)&&(this[_0x2155ad(0x219)]=!![]);_0x3a25d3[_0x2155ad(0x603)](/<CLICK TRIGGER>/i)&&(this[_0x2155ad(0x4a9)]=!![]);if(_0x3a25d3[_0x2155ad(0x603)](/<CUSTOM Z:[ ](.*?)>/i)){if(_0x2155ad(0x4bf)==='YNABB')this[_0x2155ad(0x1ad)]=Number(RegExp['$1'])||0x0;else return this[_0x2155ad(0x470)]()&&_0x15a378[_0x2155ad(0x1fd)]['Settings'][_0x2155ad(0x30f)][_0x2155ad(0x574)];}const _0x2f5cad=_0x3a25d3[_0x2155ad(0x603)](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x2f5cad)for(const _0x304db5 of _0x2f5cad){if(_0x304db5[_0x2155ad(0x603)](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x20b94f=String(RegExp['$1'])[_0x2155ad(0x650)]()['trim'](),_0x2e3c26=Number(RegExp['$2']);this[_0x2155ad(0x2f6)][_0x20b94f]=_0x2e3c26;}}if(_0x3a25d3[_0x2155ad(0x603)](/<ICON:[ ](\d+)>/i)){if(_0x2155ad(0x522)!==_0x2155ad(0x522)){if(this[_0x2155ad(0x65e)])return _0x3c2039[_0x2155ad(0x4ba)][_0x2155ad(0x63e)][_0x2155ad(0x44d)](this);return _0x99e19[_0x2155ad(0x63e)]();}else this[_0x2155ad(0x1d2)][_0x2155ad(0x403)]=Number(RegExp['$1']);}if(_0x3a25d3[_0x2155ad(0x603)](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)){if('qPndc'!==_0x2155ad(0x445)){if(_0x202987)this[_0x2155ad(0x3e7)](_0x45687f['x'],_0x450efd['y']);}else this[_0x2155ad(0x1d2)][_0x2155ad(0x3a8)]=Number(RegExp['$1']);}_0x3a25d3[_0x2155ad(0x603)](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this['_eventIcon'][_0x2155ad(0x250)]=Number(RegExp['$1']));_0x3a25d3['match'](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x2155ad(0x1d2)][_0x2155ad(0x3a8)]=Number(RegExp['$1']),this[_0x2155ad(0x1d2)][_0x2155ad(0x250)]=Number(RegExp['$2']));if(_0x3a25d3['match'](/<ICON BLEND MODE:[ ](.*?)>/i)){const _0x175320=String(RegExp['$1'])[_0x2155ad(0x4b1)]()[_0x2155ad(0x344)](),_0x344a30=['NORMAL','ADDITIVE','MULTIPLY','SCREEN'];this[_0x2155ad(0x1d2)][_0x2155ad(0x2e5)]=_0x344a30['indexOf'](_0x175320)[_0x2155ad(0x1b9)](0x0,0x3);}if(_0x3a25d3[_0x2155ad(0x603)](/<LABEL:[ ](.*?)>/i)){let _0xf85348=String(RegExp['$1'])[_0x2155ad(0x344)]();this['_labelWindow']['text']=_0xf85348,this[_0x2155ad(0x3c7)][_0x2155ad(0x3bd)]=_0xf85348;}if(_0x3a25d3[_0x2155ad(0x603)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){if('JYiaK'!==_0x2155ad(0x333)){let _0x4efa7c=_0x2053a4[_0x2155ad(0x138)]();if(_0x4efa7c>0x0)return _0x266bcd[_0x2155ad(0x1b4)]()[_0x2155ad(0x53f)](_0x4efa7c-0x1);}else{let _0x1da6d8=String(RegExp['$1'])[_0x2155ad(0x344)]();this['_labelWindow'][_0x2155ad(0x337)]=_0x1da6d8,this[_0x2155ad(0x3c7)][_0x2155ad(0x3bd)]=_0x1da6d8;}}if(_0x3a25d3[_0x2155ad(0x603)](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)){if('VxHoU'!==_0x2155ad(0x1d6))this[_0x2155ad(0x3c7)][_0x2155ad(0x4b2)]=Number(RegExp['$1']);else return _0x102568[_0x2155ad(0x1fd)]['Game_Switches_value'][_0x2155ad(0x44d)](this,_0x94ebd9);}_0x3a25d3[_0x2155ad(0x603)](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x2155ad(0x3c7)][_0x2155ad(0x332)]=Number(RegExp['$1']));_0x3a25d3[_0x2155ad(0x603)](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_labelWindow'][_0x2155ad(0x4b2)]=Number(RegExp['$1']),this[_0x2155ad(0x3c7)][_0x2155ad(0x332)]=Number(RegExp['$2']));this[_0x2155ad(0x1c7)]();if(_0x3a25d3[_0x2155ad(0x603)](/<LABEL RANGE:[ ](\d+)>/i)){if(_0x2155ad(0x5f9)===_0x2155ad(0x5f9))this['_labelWindow'][_0x2155ad(0x2e2)]=Number(RegExp['$1']);else return _0x1126e0[_0x2155ad(0x1fd)][_0x2155ad(0x431)]['call'](this);}_0x3a25d3['match'](/<MIRROR SPRITE>/i)&&(this['_mirrorSprite']=!![]);if(_0x3a25d3[_0x2155ad(0x603)](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){const _0x156884=JSON[_0x2155ad(0x508)]('['+RegExp['$1'][_0x2155ad(0x603)](/\d+/g)+']');this['_moveOnlyRegions']=this[_0x2155ad(0x5dd)][_0x2155ad(0x1c3)](_0x156884),this['_moveOnlyRegions']['remove'](0x0);}if(_0x3a25d3['match'](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0x39a21b=String(RegExp['$1']);if(_0x39a21b['match'](/PLAYER/i)){if('GOyUo'!==_0x2155ad(0x235)){if(_0x36766a[_0x2155ad(0x339)][_0x2155ad(0x3c2)]===_0x14212b)return![];return _0x59c4df[_0x2155ad(0x512)]['includes'](_0x159fd4);}else this[_0x2155ad(0x4be)][_0x2155ad(0x44c)]=0x0;}else _0x39a21b[_0x2155ad(0x603)](/EVENT[ ](\d+)/i)&&(_0x2155ad(0x43e)===_0x2155ad(0x43e)?this[_0x2155ad(0x4be)]['target']=Number(RegExp['$1']):this[_0x2155ad(0x5a3)]=0x0);}_0x3a25d3[_0x2155ad(0x603)](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&('gsQLD'!=='gsQLD'?(_0xa61bba['EventsMoveCore']['Sprite_Character_setTileBitmap'][_0x2155ad(0x44d)](this),this[_0x2155ad(0x577)][_0x2155ad(0x64a)](this[_0x2155ad(0x59c)][_0x2155ad(0x304)](this))):this[_0x2155ad(0x4be)]['type']=String(RegExp['$1'])[_0x2155ad(0x650)]()[_0x2155ad(0x344)]());_0x3a25d3[_0x2155ad(0x603)](/<MOVE SYNCH DELAY:[ ](\d+)>/i)&&(this[_0x2155ad(0x4be)][_0x2155ad(0x136)]=Number(RegExp['$1']));_0x3a25d3[_0x2155ad(0x603)](/<MOVE SYNCH DISTANCE OPACITY:[ ](.*?)>/i)&&(this[_0x2155ad(0x4be)][_0x2155ad(0x4c6)]=Number(RegExp['$1']));if(_0x3a25d3[_0x2155ad(0x603)](/<TRUE RANDOM MOVE>/i)){if('YxGvX'===_0x2155ad(0x4cd)){if(!_0x3f51ba[_0x2155ad(0x1fd)][_0x2155ad(0x64c)][_0x2155ad(0x28d)][_0x2155ad(0x305)])return;this[_0x2155ad(0x5c3)]=0x0;if(this[_0x2155ad(0x2c6)]()){const _0x28dfdb=_0x129b33[_0x2155ad(0x1fd)]['Settings']['Movement'],_0x25bc23=this['_character'][_0x2155ad(0x1b6)]();let _0xb8f8ec=0x0;if([0x1,0x4,0x7][_0x2155ad(0x452)](_0x25bc23))_0xb8f8ec=_0x28dfdb[_0x2155ad(0x4b9)];if([0x3,0x6,0x9]['includes'](_0x25bc23))_0xb8f8ec=_0x28dfdb[_0x2155ad(0x406)];[0x2,0x8][_0x2155ad(0x452)](_0x25bc23)&&(_0xb8f8ec=[-_0x28dfdb[_0x2155ad(0x217)],0x0,_0x28dfdb[_0x2155ad(0x217)]][this[_0x2155ad(0x25f)][_0x2155ad(0x35d)]()]);if(this[_0x2155ad(0x260)])_0xb8f8ec*=-0x1;this[_0x2155ad(0x5c3)]=_0xb8f8ec;}}else this[_0x2155ad(0x57d)]=0x0;}else{if(_0x3a25d3[_0x2155ad(0x603)](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)){if(_0x2155ad(0x64e)!==_0x2155ad(0x64e)){this[_0x2155ad(0x4a7)]=!![];return;}else this[_0x2155ad(0x57d)]=Number(RegExp['$1'])||0x0;}}_0x3a25d3['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x2155ad(0x4c1)]=!![]);_0x3a25d3['match'](/<HIDE SHADOW>/i)&&(this[_0x2155ad(0x2ff)][_0x2155ad(0x1c9)]=![]);_0x3a25d3[_0x2155ad(0x603)](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0x2155ad(0x2ff)][_0x2155ad(0x3ac)]=String(RegExp['$1']));_0x3a25d3[_0x2155ad(0x603)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this['_spriteOffsetX']=Number(RegExp['$1']));if(_0x3a25d3[_0x2155ad(0x603)](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)){if(_0x2155ad(0x172)!==_0x2155ad(0x172)){if(!_0x183898[_0x2155ad(0x3c6)]&&this['isOnLadder']())return![];if(this['_forceDashing'])return!![];return _0x56de02['EventsMoveCore'][_0x2155ad(0x645)][_0x2155ad(0x44d)](this);}else this['_spriteOffsetY']=Number(RegExp['$1']);}_0x3a25d3['match'](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x2155ad(0x396)]=Number(RegExp['$1']),this['_spriteOffsetY']=Number(RegExp['$2'])),_0x3a25d3['match'](/<STEP PATTERN:[ ](.*)>/i)&&(this[_0x2155ad(0x32a)]=String(RegExp['$1'])[_0x2155ad(0x4b1)]()[_0x2155ad(0x344)]());},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x1c7)]=function(){const _0x2face0=_0x4c5915;$gameTemp[_0x2face0(0x3e3)](this),this[_0x2face0(0x3c7)][_0x2face0(0x337)]=this['_labelWindow'][_0x2face0(0x3bd)];for(;;){if(this['_labelWindow'][_0x2face0(0x337)][_0x2face0(0x603)](/\\V\[(\d+)\]/gi)){if(_0x2face0(0x360)!==_0x2face0(0x23e))this[_0x2face0(0x3c7)][_0x2face0(0x337)]=this[_0x2face0(0x3c7)][_0x2face0(0x3bd)][_0x2face0(0x323)](/\\V\[(\d+)\]/gi,(_0x59ed6e,_0x3da019)=>$gameVariables[_0x2face0(0x666)](parseInt(_0x3da019)));else{if(_0x342701||this['isSpriteVS8dir']()){if(_0x3e1aef>0x0&&_0x5365f9<0x0)return 0x9;if(_0x3feada<0x0&&_0x4520f5<0x0)return 0x7;if(_0x5195fc>0x0&&_0x147b7b>0x0)return 0x3;if(_0x3020ea<0x0&&_0x5e20c3>0x0)return 0x1;}}}else break;}$gameTemp[_0x2face0(0x614)]();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x510)]=function(){this['updateShadowChanges']();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x3ae)]=function(){const _0x566fe5=_0x4c5915;if(this[_0x566fe5(0x219)])return!![];return Game_Character[_0x566fe5(0x4ba)]['isNearTheScreen'][_0x566fe5(0x44d)](this);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x62a)]=Game_Event[_0x4c5915(0x4ba)]['updateSelfMovement'],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x14f)]=function(){const _0x31571a=_0x4c5915;if(this['isPreventSelfMovement']())return;VisuMZ[_0x31571a(0x1fd)]['Game_Event_updateSelfMovement'][_0x31571a(0x44d)](this),this['isMoving']()&&VisuMZ['MoveAllSynchTargets'](this['_eventId']);},Game_Event[_0x4c5915(0x4ba)]['isPreventSelfMovement']=function(){const _0x46901e=_0x4c5915,_0x3c4214=VisuMZ[_0x46901e(0x1fd)]['Settings'][_0x46901e(0x28d)];if($gameMap[_0x46901e(0x5c1)]()&&_0x3c4214['StopAutoMoveEvents'])return!![];if($gameMessage['isBusy']()&&_0x3c4214[_0x46901e(0x5b1)])return!![];if(!$gameSystem[_0x46901e(0x23f)]())return!![];if(this[_0x46901e(0x49f)]()>=0x0)return!![];if(!SceneManager['_scene']['_active'])return!![];return![];},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x161)]=function(){const _0x12b177=_0x4c5915,_0x40fa4c=SceneManager['_scene'][_0x12b177(0x5e7)];if(_0x40fa4c){if('lpalw'==='lpalw'){const _0x246f5f=_0x40fa4c[_0x12b177(0x1cc)](this);_0x246f5f&&_0x246f5f['_shadowSprite']&&_0x246f5f[_0x12b177(0x4ae)][_0x12b177(0x294)]!==this[_0x12b177(0x58e)]()&&(_0x246f5f['_shadowSprite']['_filename']=this[_0x12b177(0x58e)](),_0x246f5f[_0x12b177(0x4ae)][_0x12b177(0x577)]=ImageManager[_0x12b177(0x3b3)](_0x246f5f[_0x12b177(0x4ae)]['_filename']));}else{if(_0x45ffd3[_0x12b177(0x5bf)][_0x34bd13]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i))_0x213918[_0x12b177(0x26e)][_0x12b177(0x19f)](_0x32c035);if(_0x23e858[_0x12b177(0x5bf)][_0xe8ea4b]['match'](/<SELF>/i))_0x1f64d1[_0x12b177(0x243)][_0x12b177(0x19f)](_0xd34eaf);if(_0x2bc6c3[_0x12b177(0x5bf)][_0x3fce78][_0x12b177(0x603)](/<MAP>/i))_0x313227[_0x12b177(0x5d3)]['push'](_0x2aba4e);}}},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x58e)]=function(){return this['_shadowGraphic']['filename'];},Game_Event[_0x4c5915(0x4ba)]['isShadowVisible']=function(){const _0x6a4ec=_0x4c5915;if(!this[_0x6a4ec(0x2ff)][_0x6a4ec(0x1c9)])return![];return Game_CharacterBase['prototype'][_0x6a4ec(0x62c)][_0x6a4ec(0x44d)](this);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x529)]=function(){const _0x5da1e8=_0x4c5915;return this[_0x5da1e8(0x3c7)][_0x5da1e8(0x337)];},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x499)]=function(){const _0x37b96d=_0x4c5915;return this['_labelWindow'][_0x37b96d(0x2e2)];},Game_Event[_0x4c5915(0x4ba)]['isMapPassable']=function(_0x2f5be0,_0x444822,_0x2d2959){const _0x35bcd3=_0x4c5915;if(this[_0x35bcd3(0x310)]())return this[_0x35bcd3(0x397)](_0x2f5be0,_0x444822,_0x2d2959);if($gameMap[_0x35bcd3(0x2d1)](_0x2f5be0,_0x444822,_0x2d2959,'event'))return!![];if($gameMap['isRegionForbidPass'](_0x2f5be0,_0x444822,_0x2d2959,_0x35bcd3(0x4f1)))return![];return Game_Character[_0x35bcd3(0x4ba)][_0x35bcd3(0x18a)][_0x35bcd3(0x44d)](this,_0x2f5be0,_0x444822,_0x2d2959);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x310)]=function(){const _0x564497=_0x4c5915;if(this[_0x564497(0x5dd)]===undefined)this[_0x564497(0x341)]();return this[_0x564497(0x5dd)][_0x564497(0x179)]>0x0;},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x397)]=function(_0x33fa9b,_0x1e9ea2,_0x59909f){const _0x4d570d=_0x4c5915,_0x1462bf=$gameMap[_0x4d570d(0x454)](_0x33fa9b,_0x59909f),_0x44be11=$gameMap[_0x4d570d(0x2bc)](_0x1e9ea2,_0x59909f),_0xd061fb=$gameMap[_0x4d570d(0x3d8)](_0x1462bf,_0x44be11);return this[_0x4d570d(0x5dd)]['includes'](_0xd061fb);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x557)]=Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x622)],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x622)]=function(){const _0x51a0bd=_0x4c5915;if(this['event']()&&!$gameTemp[_0x51a0bd(0x2d8)]()){if(_0x51a0bd(0x3a3)!==_0x51a0bd(0x4f0)){if(this[_0x51a0bd(0x4f1)]()[_0x51a0bd(0x31c)]['match'](/<(?:PLAYTEST|PLAY TEST)>/i))return-0x1;}else this[_0x51a0bd(0x1fe)]();}return this[_0x51a0bd(0x5db)]=![],this[_0x51a0bd(0x33e)]=![],this[_0x51a0bd(0x4f1)]()?VisuMZ[_0x51a0bd(0x1fd)][_0x51a0bd(0x557)][_0x51a0bd(0x44d)](this):-0x1;},VisuMZ['EventsMoveCore'][_0x4c5915(0x53a)]=Game_Event[_0x4c5915(0x4ba)]['meetsConditions'],Game_Event[_0x4c5915(0x4ba)]['meetsConditions']=function(_0x1545e5){const _0x1e116b=_0x4c5915;this[_0x1e116b(0x1a9)](_0x1545e5),$gameTemp[_0x1e116b(0x3e3)](this);const _0x35e02d=VisuMZ[_0x1e116b(0x1fd)][_0x1e116b(0x53a)]['call'](this,_0x1545e5);return $gameTemp[_0x1e116b(0x614)](),_0x35e02d;},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x2f3)]=function(){const _0x23a88a=_0x4c5915;return this[_0x23a88a(0x5db)];},Game_Event['prototype'][_0x4c5915(0x1a9)]=function(_0x43cdd7){const _0xc669f4=_0x4c5915,_0x4ca276=_0x43cdd7[_0xc669f4(0x5c5)];if(_0x4ca276['switch1Valid']&&DataManager[_0xc669f4(0x539)](_0x4ca276[_0xc669f4(0x4df)]))_0xc669f4(0x2dd)==='AHQvt'?this[_0xc669f4(0x5db)]=!![]:this['_alwaysUpdateMove']=!![];else{if(_0x4ca276[_0xc669f4(0x4f6)]&&DataManager[_0xc669f4(0x539)](_0x4ca276[_0xc669f4(0x3cb)]))this[_0xc669f4(0x5db)]=!![];else{if(_0x4ca276['variableValid']&&DataManager['isAdvancedVariable'](_0x4ca276['variableId'])){if(_0xc669f4(0x204)===_0xc669f4(0x204))this['_advancedSwitchVariable']=!![];else{if(_0x579222['isPlaytest']())_0x152bd1[_0xc669f4(0x47b)](_0x5d1b00);}}}}},Game_Event['prototype']['hasClickTrigger']=function(){const _0x214205=_0x4c5915;if(this[_0x214205(0x634)])return![];return this[_0x214205(0x4a9)];},Game_Event['prototype'][_0x4c5915(0x5cf)]=function(){const _0x316945=_0x4c5915;$gameTemp['clearDestination'](),this[_0x316945(0x568)]();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x4a0)]=function(_0x176297,_0x5d6206){const _0x520212=_0x4c5915;return this['_addedHitbox']?this['posEventsMoveCore'](_0x176297,_0x5d6206):Game_Character['prototype'][_0x520212(0x4a0)][_0x520212(0x44d)](this,_0x176297,_0x5d6206);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x1cf)]=function(_0x5cd5f2,_0x84920d){const _0x3087ab=_0x4c5915;var _0x5922c8=this['x']-this[_0x3087ab(0x2f6)][_0x3087ab(0x4d7)],_0x490f6a=this['x']+this['_addedHitbox']['right'],_0x315519=this['y']-this[_0x3087ab(0x2f6)]['up'],_0x1456e2=this['y']+this[_0x3087ab(0x2f6)][_0x3087ab(0x15c)];return _0x5922c8<=_0x5cd5f2&&_0x5cd5f2<=_0x490f6a&&_0x315519<=_0x84920d&&_0x84920d<=_0x1456e2;},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x3a5)]=function(_0x587eff,_0x529b39,_0xfe3970){const _0x58c6ae=_0x4c5915;for(let _0x235526=-this[_0x58c6ae(0x2f6)][_0x58c6ae(0x4d7)];_0x235526<=this[_0x58c6ae(0x2f6)]['right'];_0x235526++){if(_0x58c6ae(0x3c3)===_0x58c6ae(0x3c3))for(let _0x10f83f=-this[_0x58c6ae(0x2f6)]['up'];_0x10f83f<=this[_0x58c6ae(0x2f6)][_0x58c6ae(0x15c)];_0x10f83f++){if(!Game_Character[_0x58c6ae(0x4ba)][_0x58c6ae(0x3a5)][_0x58c6ae(0x44d)](this,_0x587eff+_0x235526,_0x529b39+_0x10f83f,_0xfe3970))return![];}else _0x5d2e37[_0x58c6ae(0x1fd)][_0x58c6ae(0x5c4)][_0x58c6ae(0x44d)](this,_0x44ff7f,_0x2eeda5);}return!![];},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x4b8)]=function(_0x7d82c9,_0x3ef990){const _0x4b5719=_0x4c5915;if(Imported['VisuMZ_0_CoreEngine']&&this['isSmartEventCollisionOn']()){if(_0x4b5719(0x3da)===_0x4b5719(0x1d1)){const _0x3457d2=_0x406dd8(_0x9262ac['$1'])[_0x4b5719(0x4b1)]()['trim']();return this[_0x4b5719(0x347)](_0x3457d2);}else return this[_0x4b5719(0x58f)](_0x7d82c9,_0x3ef990);}else{if(_0x4b5719(0x2fe)!==_0x4b5719(0x2fe))this[_0x4b5719(0x16d)]['bitmap'][_0x4b5719(0x365)]=!![];else{const _0x333498=$gameMap['eventsXyNt'](_0x7d82c9,_0x3ef990)[_0x4b5719(0x600)](_0xfdbca1=>_0xfdbca1!==this);return _0x333498['length']>0x0;}}},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x58f)]=function(_0x413122,_0x4278f7){const _0x2b03a3=_0x4c5915;if(!this['isNormalPriority']())return![];else{if(_0x2b03a3(0x1d5)!==_0x2b03a3(0x1d5)){if([0x2,0x4,0x6,0x8][_0x2b03a3(0x452)](_0x2a5708))return 0x2;if([0x1,0x3,0x7,0x9][_0x2b03a3(0x452)](_0x1bc4de))return 0x3;}else{const _0x14534e=$gameMap['eventsXyNt'](_0x413122,_0x4278f7)[_0x2b03a3(0x600)](_0x3b885b=>_0x3b885b!==this&&_0x3b885b[_0x2b03a3(0x336)]());return _0x14534e[_0x2b03a3(0x179)]>0x0;}}},Game_Event['prototype']['activationProximityType']=function(){const _0x3649b2=_0x4c5915;return this[_0x3649b2(0x5d0)][_0x3649b2(0x5c0)]||_0x3649b2(0x4d8);},Game_Event['prototype'][_0x4c5915(0x41f)]=function(){const _0x37ecac=_0x4c5915;return this[_0x37ecac(0x5d0)][_0x37ecac(0x3cc)]||0x0;},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x43a)]=function(){return this['_activationProximity']['regionList']||[];},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x187)]=function(){const _0x5ab71e=_0x4c5915;Game_Character['prototype'][_0x5ab71e(0x187)][_0x5ab71e(0x44d)](this);if([_0x5ab71e(0x4d8),_0x5ab71e(0x55c)][_0x5ab71e(0x452)](this[_0x5ab71e(0x1b5)]()))return;$gamePlayer[_0x5ab71e(0x269)]([0x2]);},VisuMZ[_0x4c5915(0x1fd)]['Game_Event_checkEventTriggerAuto']=Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x41d)],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x41d)]=function(){const _0x318e34=_0x4c5915;if(this['_trigger']!==0x3)return;if(this['_activationProximityAutoTriggerBypass'])return;if(!this[_0x318e34(0x43f)](![]))return;if(!this['checkActivationProximity'](![]))return;VisuMZ[_0x318e34(0x1fd)][_0x318e34(0x42d)][_0x318e34(0x44d)](this);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x466)]=Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x284)],Game_Event[_0x4c5915(0x4ba)]['updateParallel']=function(){const _0x39b45e=_0x4c5915;if(!this[_0x39b45e(0x40d)])return;if(!this[_0x39b45e(0x43f)](!![]))return;if(!this[_0x39b45e(0x2a9)](!![]))return;VisuMZ[_0x39b45e(0x1fd)][_0x39b45e(0x466)][_0x39b45e(0x44d)](this);},Game_Event[_0x4c5915(0x4ba)]['checkRegionEventTrigger']=function(_0x4820dc){const _0x4510a6=_0x4c5915;if(!_0x4820dc&&$gameMap['isEventRunning']())return![];if(!_0x4820dc&&$gameMap[_0x4510a6(0x1e5)]())return![];if(this[_0x4510a6(0x43a)]()<=0x0)return!![];return $gamePlayer[_0x4510a6(0x38f)](this);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x2a9)]=function(_0x5cd899){const _0x3798f2=_0x4c5915;if(!_0x5cd899&&$gameMap[_0x3798f2(0x5c1)]())return![];if(!_0x5cd899&&$gameMap['isAnyEventStarting']())return![];if(['none',_0x3798f2(0x55c)][_0x3798f2(0x452)](this[_0x3798f2(0x1b5)]()))return!![];return $gamePlayer[_0x3798f2(0x233)](this);},VisuMZ[_0x4c5915(0x222)]=function(_0x33d227){const _0x27e55c=_0x4c5915;for(const _0x27a2ae of $gameMap[_0x27e55c(0x57c)]()){if(!_0x27a2ae)continue;_0x27a2ae[_0x27e55c(0x49f)]()===_0x33d227&&_0x27a2ae[_0x27e55c(0x33c)]();}},VisuMZ[_0x4c5915(0x134)]=function(_0x1c7798){const _0x49201f=_0x4c5915;if(_0x1c7798===0x0)return $gamePlayer;return $gameMap[_0x49201f(0x4f1)](_0x1c7798);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x49f)]=function(){const _0xb08900=_0x4c5915;return this[_0xb08900(0x4be)][_0xb08900(0x44c)];},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x616)]=function(){const _0x3cda0c=_0x4c5915;return this['_moveSynch'][_0x3cda0c(0x5c0)];},Game_Event['prototype'][_0x4c5915(0x659)]=function(){const _0x516423=_0x4c5915;if(this[_0x516423(0x49f)]()>=0x0){if('dDPog'===_0x516423(0x149))return _0xefe599[_0x516423(0x248)][_0x1abe4c][_0x516423(0x57c)][_0x4f6f5e];else{const _0x522b05=VisuMZ[_0x516423(0x134)](this[_0x516423(0x49f)]());if(_0x522b05)return _0x522b05[_0x516423(0x659)]();}}return Game_Character['prototype'][_0x516423(0x659)][_0x516423(0x44d)](this);},Game_Event[_0x4c5915(0x4ba)]['updateMoveSynch']=function(){const _0x4336ac=_0x4c5915;this[_0x4336ac(0x4be)][_0x4336ac(0x4c8)]=this[_0x4336ac(0x4be)]['timer']||0x0,this[_0x4336ac(0x4be)][_0x4336ac(0x4c8)]--;if(this['_moveSynch'][_0x4336ac(0x4c8)]>0x0)return;this[_0x4336ac(0x4be)][_0x4336ac(0x4c8)]=this[_0x4336ac(0x4be)][_0x4336ac(0x136)],this[_0x4336ac(0x348)]();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x24e)]=function(_0x2b6cbd){const _0x138648=_0x4c5915;if(this[_0x138648(0x49f)]()>=0x0){const _0x4872aa=VisuMZ[_0x138648(0x134)](this['moveSynchTarget']());if(_0x4872aa){if('LKOWK'===_0x138648(0x4fb))this[_0x138648(0x455)]=![];else{const _0x2c52bd=$gameMap[_0x138648(0x3cc)](this[_0x138648(0x324)],this[_0x138648(0x4dc)],_0x4872aa[_0x138648(0x324)],_0x4872aa[_0x138648(0x4dc)])-0x1,_0x5ba9d7=Math[_0x138648(0x3a2)]($gameMap[_0x138648(0x54c)](),$gameMap['tileHeight']()),_0x312fc5=this[_0x138648(0x4be)][_0x138648(0x4c6)]||0x0;_0x2b6cbd-=Math[_0x138648(0x2a4)](0x0,_0x2c52bd)*_0x5ba9d7*_0x312fc5;}}}return _0x2b6cbd;},Game_Event['prototype'][_0x4c5915(0x348)]=function(){const _0x154934=_0x4c5915;switch(this[_0x154934(0x616)]()){case _0x154934(0x613):this[_0x154934(0x620)]();break;case _0x154934(0x56a):this[_0x154934(0x547)]();break;case _0x154934(0x257):this[_0x154934(0x1c8)]();break;case _0x154934(0x489):this[_0x154934(0x371)]();break;case'mimic':case _0x154934(0x254):this[_0x154934(0x373)]();break;case _0x154934(0x15e):case _0x154934(0x289):this[_0x154934(0x64b)]();break;case _0x154934(0x5e8):case _0x154934(0x391):case'mirror\x20horz':case _0x154934(0x55e):this[_0x154934(0x386)]();break;case _0x154934(0x4e7):case _0x154934(0x5c7):case _0x154934(0x3ba):case'vert\x20mirror':this['processMoveSynchMirrorVert']();break;default:this[_0x154934(0x620)]();break;}this['update']();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x620)]=function(){const _0xd606e9=_0x4c5915,_0x3771b3=[0x2,0x4,0x6,0x8];$gameMap[_0xd606e9(0x188)]()&&_0x3771b3['push'](0x1,0x3,0x7,0x9);const _0x1f37f5=[];for(const _0x599f29 of _0x3771b3){if(this['canPass'](this['x'],this['y'],_0x599f29))_0x1f37f5['push'](_0x599f29);}if(_0x1f37f5['length']>0x0){const _0x5296d4=_0x1f37f5[Math[_0xd606e9(0x2e1)](_0x1f37f5['length'])];this[_0xd606e9(0x65b)](_0x5296d4);}},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x547)]=function(){const _0xe683a6=_0x4c5915,_0x482cfa=VisuMZ['GetMoveSynchTarget'](this[_0xe683a6(0x49f)]());this[_0xe683a6(0x367)](_0x482cfa);},Game_Event['prototype'][_0x4c5915(0x1c8)]=function(){const _0x22a7b6=_0x4c5915,_0x399975=VisuMZ[_0x22a7b6(0x134)](this[_0x22a7b6(0x49f)]());this[_0x22a7b6(0x2f4)](_0x399975);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x371)]=function(){this['updateRoutineMove']();},Game_Event['prototype'][_0x4c5915(0x373)]=function(){const _0x5a3e27=_0x4c5915,_0x21e8ad=VisuMZ['GetMoveSynchTarget'](this[_0x5a3e27(0x49f)]());this[_0x5a3e27(0x65b)](_0x21e8ad[_0x5a3e27(0x162)]());},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x64b)]=function(){const _0x50c647=_0x4c5915,_0x544b8c=VisuMZ[_0x50c647(0x134)](this['moveSynchTarget']());this[_0x50c647(0x65b)](this[_0x50c647(0x240)](_0x544b8c[_0x50c647(0x162)]()));},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x386)]=function(){const _0x500c9d=_0x4c5915,_0x11211e=VisuMZ[_0x500c9d(0x134)](this[_0x500c9d(0x49f)]()),_0x288147=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x11211e[_0x500c9d(0x162)]()];this['executeMoveDir8'](_0x288147);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x21f)]=function(){const _0x55b9fa=_0x4c5915,_0x42f0be=VisuMZ['GetMoveSynchTarget'](this['moveSynchTarget']()),_0x2f1eb9=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x42f0be[_0x55b9fa(0x162)]()];this[_0x55b9fa(0x65b)](_0x2f1eb9);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x267)]=function(){const _0x29f98f=_0x4c5915,_0xad4cd9=$gameSystem['getSavedEventLocation'](this);if(!_0xad4cd9)return;this[_0x29f98f(0x25a)](_0xad4cd9['x'],_0xad4cd9['y']),this['refreshBushDepth'](),this[_0x29f98f(0x197)](_0xad4cd9[_0x29f98f(0x1b6)]),this['_pageIndex']===_0xad4cd9[_0x29f98f(0x45b)]&&(this['_moveRouteIndex']=_0xad4cd9[_0x29f98f(0x249)]);},VisuMZ['EventsMoveCore'][_0x4c5915(0x4b0)]=Game_Event['prototype'][_0x4c5915(0x2de)],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x2de)]=function(){const _0x5c6a89=_0x4c5915;VisuMZ['EventsMoveCore'][_0x5c6a89(0x4b0)][_0x5c6a89(0x44d)](this),this[_0x5c6a89(0x218)]();},Game_Event['prototype'][_0x4c5915(0x33f)]=function(){const _0x224453=_0x4c5915;Game_Character[_0x224453(0x4ba)][_0x224453(0x33f)]['call'](this),this['autosaveEventLocation']();},Game_Event['prototype'][_0x4c5915(0x1f0)]=function(){const _0x34fa5f=_0x4c5915;if($gameMap['isSaveEventLocations']())return!![];return this[_0x34fa5f(0x4c1)];},Game_Event[_0x4c5915(0x4ba)]['autosaveEventLocation']=function(){const _0x46a0ed=_0x4c5915;if(!this['isSaveEventLocation']())return;this[_0x46a0ed(0x51d)]();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x51d)]=function(){const _0x459e80=_0x4c5915;this[_0x459e80(0x2cd)]=!![];},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x218)]=function(){this['_requestSaveEventLocation']&&this['processSaveEventLocation']();},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x38b)]=function(){const _0x138674=_0x4c5915;this[_0x138674(0x2cd)]=![],$gameSystem[_0x138674(0x51d)](this);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x2bd)]=function(){$gameSystem['deleteSavedEventLocation'](this);},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x3f0)]=function(){const _0x59c6a2=_0x4c5915;if($gameSystem[_0x59c6a2(0x3f0)](this)){if(_0x59c6a2(0x5d8)===_0x59c6a2(0x131))_0x2a0e1d[_0x59c6a2(0x1fd)]['Game_Switches_setValue'][_0x59c6a2(0x44d)](this,_0x2555f7,_0x107edc);else return Game_Character[_0x59c6a2(0x4ba)][_0x59c6a2(0x3f0)][_0x59c6a2(0x44d)](this);}else return{'iconIndex':0x0,'bufferX':settings[_0x59c6a2(0x63a)][_0x59c6a2(0x57f)],'bufferY':settings[_0x59c6a2(0x63a)][_0x59c6a2(0x2d6)],'blendMode':settings[_0x59c6a2(0x63a)]['BlendMode']};},Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x4a5)]=function(){const _0x2eb262=_0x4c5915;return this[_0x2eb262(0x33e)];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x17c)]=Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x632)],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x632)]=function(_0x42c3b7){const _0x18a010=_0x4c5915,_0x4709de=VisuMZ['EventsMoveCore'][_0x18a010(0x17c)][_0x18a010(0x44d)](this,_0x42c3b7);if(!_0x4709de)return![];return this[_0x18a010(0x2f1)](_0x42c3b7);},Game_Event['prototype'][_0x4c5915(0x2f1)]=function(_0x30b271){const _0x5c0003=_0x4c5915;VisuMZ[_0x5c0003(0x1fd)][_0x5c0003(0x49a)]['loadCPC'](_0x30b271),this[_0x5c0003(0x33e)]=_0x30b271[_0x5c0003(0x471)][_0x5c0003(0x179)]>0x0;if(_0x30b271[_0x5c0003(0x471)]===undefined){if(_0x5c0003(0x2ba)===_0x5c0003(0x39b))return _0x1263b5[_0x5c0003(0x1fd)][_0x5c0003(0x64c)]['VS8'][_0x5c0003(0x4fc)];else VisuMZ[_0x5c0003(0x1fd)]['CustomPageConditions'][_0x5c0003(0x61c)](_0x30b271);}if(_0x30b271[_0x5c0003(0x471)]['length']>0x0){if(_0x5c0003(0x13e)!==_0x5c0003(0x13e)){const _0x2d7e31=_0x5159e8['_scene'][_0x5c0003(0x5e7)];if(_0x2d7e31){const _0x16659c=_0x2d7e31[_0x5c0003(0x1cc)](this);_0x16659c&&_0x16659c['_shadowSprite']&&_0x16659c[_0x5c0003(0x4ae)][_0x5c0003(0x294)]!==this[_0x5c0003(0x58e)]()&&(_0x16659c[_0x5c0003(0x4ae)][_0x5c0003(0x294)]=this[_0x5c0003(0x58e)](),_0x16659c[_0x5c0003(0x4ae)]['bitmap']=_0x3547b0[_0x5c0003(0x3b3)](_0x16659c[_0x5c0003(0x4ae)][_0x5c0003(0x294)]));}}else return $gameMap[_0x5c0003(0x4f1)](this[_0x5c0003(0x3e5)])&&VisuMZ['EventsMoveCore'][_0x5c0003(0x49a)][_0x5c0003(0x1e0)](_0x30b271[_0x5c0003(0x471)],this[_0x5c0003(0x3e5)]);}return!![];},VisuMZ['EventsMoveCore'][_0x4c5915(0x623)]=Game_Troop[_0x4c5915(0x4ba)][_0x4c5915(0x632)],Game_Troop[_0x4c5915(0x4ba)][_0x4c5915(0x632)]=function(_0x159495){const _0x3b4744=_0x4c5915;var _0x32bffe=VisuMZ[_0x3b4744(0x1fd)]['Game_Troop_meetsConditionsCPC']['call'](this,_0x159495);return _0x32bffe&&this[_0x3b4744(0x143)](_0x159495);},Game_Troop[_0x4c5915(0x4ba)][_0x4c5915(0x143)]=function(_0x3fde81){const _0x444035=_0x4c5915;_0x3fde81[_0x444035(0x471)]===undefined&&VisuMZ[_0x444035(0x1fd)][_0x444035(0x49a)][_0x444035(0x61c)](_0x3fde81);if(_0x3fde81[_0x444035(0x471)][_0x444035(0x179)]>0x0){if('bUsRJ'===_0x444035(0x4c2))this[_0x444035(0x4be)]['opacityDelta']=_0x19c72f(_0x4e0e16['$1']);else return VisuMZ[_0x444035(0x1fd)][_0x444035(0x49a)][_0x444035(0x1e0)](_0x3fde81[_0x444035(0x471)],0x0);}return!![];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x63d)]=Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x151)],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x151)]=function(_0x4027c5,_0x42a78f){const _0x6dfd4f=_0x4c5915;VisuMZ['EventsMoveCore']['Game_Event_locate'][_0x6dfd4f(0x44d)](this,_0x4027c5,_0x42a78f),this['_randomHomeX']=_0x4027c5,this[_0x6dfd4f(0x37b)]=_0x42a78f,this[_0x6dfd4f(0x148)]();},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x570)]=Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x484)],Game_Event[_0x4c5915(0x4ba)][_0x4c5915(0x484)]=function(){const _0x5cdf0d=_0x4c5915,_0x1ab3f7=$gameMap[_0x5cdf0d(0x3cc)](this['x'],this['y'],this[_0x5cdf0d(0x215)],this[_0x5cdf0d(0x37b)]),_0x4ee65b=_0x1ab3f7*(this[_0x5cdf0d(0x57d)]||0x0);if(Math[_0x5cdf0d(0x613)]()>=_0x4ee65b){if(_0x5cdf0d(0x1b3)!==_0x5cdf0d(0x41e))VisuMZ[_0x5cdf0d(0x1fd)][_0x5cdf0d(0x570)][_0x5cdf0d(0x44d)](this);else{const _0x25819e=_0xe59207[_0x5cdf0d(0x1fd)]['Settings'][_0x5cdf0d(0x28d)];if(!_0x25819e[_0x5cdf0d(0x4aa)])return _0x4c80d8;return[0x1,0x3,0x7,0x9][_0x5cdf0d(0x452)](this[_0x5cdf0d(0x21d)])&&(_0x379bf3*=_0x25819e['DiagonalSpeedMultiplier']||0.01),_0x145d64;}}else this[_0x5cdf0d(0x26d)]();},Game_Event['prototype'][_0x4c5915(0x26d)]=function(){const _0x4fdb1c=_0x4c5915,_0x1839a6=this[_0x4fdb1c(0x137)](this[_0x4fdb1c(0x215)]),_0x27bbbb=this[_0x4fdb1c(0x589)](this[_0x4fdb1c(0x37b)]);if(Math[_0x4fdb1c(0x357)](_0x1839a6)>Math[_0x4fdb1c(0x357)](_0x27bbbb))this['moveStraight'](_0x1839a6>0x0?0x4:0x6),!this[_0x4fdb1c(0x465)]()&&_0x27bbbb!==0x0&&this[_0x4fdb1c(0x4f7)](_0x27bbbb>0x0?0x8:0x2);else{if(_0x27bbbb!==0x0){if(_0x4fdb1c(0x524)!=='SVAxh'){if(_0x1df915===0x0||_0x583f4a===0x0)return![];if(_0xa865bd===_0x1cec08[_0x4fdb1c(0x3c8)]())return!![];if(!_0x5cc9d1[_0x4fdb1c(0x248)][_0x3aaf6c]&&_0xba836e!==_0x5d5152[_0x4fdb1c(0x3c8)]())return _0x231001[_0x4fdb1c(0x2d8)]()&&_0x390823[_0x4fdb1c(0x47b)](_0x4fdb1c(0x4d0)['format'](_0x3bab01)),![];return!![];}else{this[_0x4fdb1c(0x4f7)](_0x27bbbb>0x0?0x8:0x2);if(!this[_0x4fdb1c(0x465)]()&&_0x1839a6!==0x0){if('nnhqd'!==_0x4fdb1c(0x419)){const _0x495670=_0x1fd5b7[_0x4fdb1c(0x3b1)];this[_0x4fdb1c(0x238)]=this[_0x4fdb1c(0x57c)]()[_0x4fdb1c(0x179)]>_0x495670;if(this[_0x4fdb1c(0x238)]&&_0x67c81a[_0x4fdb1c(0x2d8)]()){}}else this[_0x4fdb1c(0x4f7)](_0x1839a6>0x0?0x4:0x6);}}}}},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x559)]=function(){this['_attachPicture']={'filename':'','blendMode':0x0,'maxSize':0x0,'offsetX':0x0,'offsetY':0x0,'scale':0x1};},Game_CharacterBase[_0x4c5915(0x4ba)]['attachPictureSettings']=function(){const _0x1dd6dc=_0x4c5915;if(this['_attachPicture']===undefined)this[_0x1dd6dc(0x559)]();return this[_0x1dd6dc(0x591)];},Game_CharacterBase['prototype']['attachPictureFilename']=function(){const _0xbd110a=_0x4c5915;return this['attachPictureSettings']()[_0xbd110a(0x3ac)]??'';},Game_CharacterBase[_0x4c5915(0x4ba)]['attachPictureBlendMode']=function(){const _0x56f5a1=_0x4c5915;return this[_0x56f5a1(0x590)]()['blendMode']??0x0;},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x653)]=function(){const _0x4c2c7f=_0x4c5915;return this[_0x4c2c7f(0x590)]()[_0x4c2c7f(0x5b6)]??0x0;},Game_CharacterBase[_0x4c5915(0x4ba)][_0x4c5915(0x155)]=function(){const _0x490f1b=_0x4c5915;return this[_0x490f1b(0x590)]()['offsetX']??0x0;},Game_CharacterBase['prototype'][_0x4c5915(0x223)]=function(){const _0x20766c=_0x4c5915;return this[_0x20766c(0x590)]()[_0x20766c(0x332)]??0x0;},Game_CharacterBase['prototype']['attachPictureScale']=function(){const _0x36e9cf=_0x4c5915;return this['attachPictureSettings']()[_0x36e9cf(0x446)]??0x1;},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x28b)]=Game_Interpreter['prototype'][_0x4c5915(0x346)],Game_Interpreter[_0x4c5915(0x4ba)][_0x4c5915(0x346)]=function(){const _0x11799a=_0x4c5915;if(this[_0x11799a(0x569)]==='CallEvent'){if(window[this[_0x11799a(0x141)]])_0x11799a(0x30d)!==_0x11799a(0x30d)?(this[_0x11799a(0x40d)]=new _0x3f0256(),this[_0x11799a(0x290)]()):(this[_0x11799a(0x569)]='',this['startCallEvent']());else return!![];}else{if(_0x11799a(0x663)!==_0x11799a(0x56d))return VisuMZ['EventsMoveCore']['Game_Interpreter_updateWaitMode'][_0x11799a(0x44d)](this);else{if(_0x5a6bcf[_0x11799a(0x2d1)](_0x2f2e1b,_0x2aba91,_0x44815c,this[_0x11799a(0x340)]))return!![];if(_0x2d6589[_0x11799a(0x451)](_0x462297,_0x4e923b,_0x16a5e7,this[_0x11799a(0x340)]))return![];return _0x53be9a[_0x11799a(0x1fd)]['Game_Vehicle_isMapPassable'][_0x11799a(0x44d)](this,_0x371258,_0x2b639f,_0x3f9068);}}},VisuMZ[_0x4c5915(0x1fd)]['Game_Interpreter_executeCommand']=Game_Interpreter[_0x4c5915(0x4ba)][_0x4c5915(0x3cf)],Game_Interpreter[_0x4c5915(0x4ba)][_0x4c5915(0x3cf)]=function(){const _0x3e8842=_0x4c5915,_0x1856fc=$gameMap&&this[_0x3e8842(0x3e5)]?$gameMap['event'](this['_eventId']):null;$gameTemp[_0x3e8842(0x3e3)](_0x1856fc);const _0x40d7bf=VisuMZ[_0x3e8842(0x1fd)][_0x3e8842(0x604)][_0x3e8842(0x44d)](this);return $gameTemp[_0x3e8842(0x614)](),_0x40d7bf;},VisuMZ['EventsMoveCore'][_0x4c5915(0x47c)]=Game_Interpreter['prototype']['command357'],Game_Interpreter[_0x4c5915(0x4ba)][_0x4c5915(0x49e)]=function(_0x4e6740){const _0x2e8f45=_0x4c5915;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ['EventsMoveCore'][_0x2e8f45(0x47c)][_0x2e8f45(0x44d)](this,_0x4e6740);},Game_Interpreter['prototype']['pluginCommandCallEvent']=function(_0x3fcaab){const _0x12bf49=_0x4c5915;this[_0x12bf49(0x62f)]=_0x3fcaab;const _0x41d374=_0x12bf49(0x18f)['format'](_0x3fcaab['mapId']['padZero'](0x3));this[_0x12bf49(0x141)]=_0x12bf49(0x5f1)+Graphics[_0x12bf49(0x56b)]+'_'+this[_0x12bf49(0x5ad)](),DataManager[_0x12bf49(0x38a)](this[_0x12bf49(0x141)],_0x41d374);if(window[this['_callEventMap']])'PNNIK'!==_0x12bf49(0x21e)?this[_0x12bf49(0x593)]():_0x1631e2['setValue'](_0x1c6f0e,!!_0x4fcfb7);else{if(_0x12bf49(0x383)!==_0x12bf49(0x450))this[_0x12bf49(0x40b)](_0x12bf49(0x27a));else return _0x2e737c['setLastPluginCommandInterpreter'](this),_0x4d490c[_0x12bf49(0x1fd)][_0x12bf49(0x47c)][_0x12bf49(0x44d)](this,_0x45adba);}},Game_Interpreter['prototype'][_0x4c5915(0x593)]=function(){const _0x5738e4=_0x4c5915,_0xb31836=this[_0x5738e4(0x62f)],_0x90c038=window[this['_callEventMap']],_0x18c6ed=_0x90c038[_0x5738e4(0x57c)][_0xb31836[_0x5738e4(0x5ad)]];if(_0x18c6ed&&_0x18c6ed[_0x5738e4(0x318)][_0xb31836['pageId']-0x1]){const _0x141532=_0x18c6ed['pages'][_0xb31836[_0x5738e4(0x51e)]-0x1]['list'];this['setupChild'](_0x141532,this[_0x5738e4(0x5ad)]());}window[this[_0x5738e4(0x141)]]=undefined,this[_0x5738e4(0x141)]=undefined,this[_0x5738e4(0x62f)]=undefined;};function Game_CPCInterpreter(){const _0x33cc53=_0x4c5915;this[_0x33cc53(0x537)][_0x33cc53(0x60b)](this,arguments);}function _0x39f0(_0x3a4776,_0x1aad66){const _0x54df2e=_0x54df();return _0x39f0=function(_0x39f0ed,_0x599ded){_0x39f0ed=_0x39f0ed-0x12f;let _0x40dd3a=_0x54df2e[_0x39f0ed];return _0x40dd3a;},_0x39f0(_0x3a4776,_0x1aad66);};Game_CPCInterpreter[_0x4c5915(0x4ba)]=Object[_0x4c5915(0x1e3)](Game_Interpreter[_0x4c5915(0x4ba)]),Game_CPCInterpreter[_0x4c5915(0x4ba)][_0x4c5915(0x3c2)]=Game_CPCInterpreter,Game_CPCInterpreter['prototype'][_0x4c5915(0x297)]=function(){const _0x15456b=_0x4c5915;Game_Interpreter[_0x15456b(0x4ba)]['clear'][_0x15456b(0x44d)](this),this[_0x15456b(0x655)]=![];},Game_CPCInterpreter['prototype'][_0x4c5915(0x191)]=function(){const _0x1f5bfc=_0x4c5915;while(this['isRunning']()){if(_0x1f5bfc(0x130)===_0x1f5bfc(0x130))this[_0x1f5bfc(0x3cf)]();else{const _0x5e8017=this[_0x1f5bfc(0x215)],_0x2ffbf5=this['_randomHomeY'];return this[_0x1f5bfc(0x3e7)](_0x5e8017,_0x2ffbf5);}}},Game_CPCInterpreter['prototype'][_0x4c5915(0x432)]=function(_0x13ef84){const _0x511848=_0x4c5915;while(this[_0x511848(0x25d)]()){this['executeCommandCommonEvent'](_0x13ef84);}},Game_CPCInterpreter[_0x4c5915(0x4ba)][_0x4c5915(0x2b5)]=function(_0x1a32fe){const _0x2f6e05=_0x4c5915,_0x23c1fb=_0x1a32fe;$gameTemp[_0x2f6e05(0x3e3)](_0x23c1fb);const _0x50a0fb=VisuMZ[_0x2f6e05(0x1fd)][_0x2f6e05(0x604)][_0x2f6e05(0x44d)](this);return $gameTemp[_0x2f6e05(0x614)](),_0x50a0fb;},Game_CPCInterpreter['prototype'][_0x4c5915(0x5ac)]=function(_0x5b92fe){const _0x8e0416=_0x4c5915;return Game_Interpreter['prototype'][_0x8e0416(0x5ac)]['call'](this,_0x5b92fe),this[_0x8e0416(0x3b4)]['some'](_0x3abd35=>_0x3abd35['match'](/<(?:CONDITION|CONDITIONS) MET>/i))&&('tSinx'!==_0x8e0416(0x1f1)?(_0x302efc[_0x8e0416(0x314)](_0xcfae38,_0x54f2e7),_0xe2c247[_0x8e0416(0x609)](_0x24fee1,_0x5e31f8[_0x8e0416(0x39f)],_0x160a95['IconBufferX'],_0xdca570[_0x8e0416(0x405)],_0x4f9e98['IconBlendMode'])):this[_0x8e0416(0x655)]=!![]),!![];},VisuMZ['EventsMoveCore'][_0x4c5915(0x422)]=Scene_Map[_0x4c5915(0x4ba)][_0x4c5915(0x492)],Scene_Map[_0x4c5915(0x4ba)][_0x4c5915(0x492)]=function(){const _0x3cea9c=_0x4c5915;VisuMZ[_0x3cea9c(0x1fd)][_0x3cea9c(0x422)][_0x3cea9c(0x44d)](this),this[_0x3cea9c(0x5e7)][_0x3cea9c(0x237)]();},VisuMZ[_0x4c5915(0x1fd)]['Scene_Load_onLoadSuccess']=Scene_Load[_0x4c5915(0x4ba)][_0x4c5915(0x669)],Scene_Load[_0x4c5915(0x4ba)][_0x4c5915(0x669)]=function(){const _0x10362b=_0x4c5915;if($gameMap)$gameMap[_0x10362b(0x221)]();VisuMZ[_0x10362b(0x1fd)]['Scene_Load_onLoadSuccess'][_0x10362b(0x44d)](this);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x606)]=Sprite_Character[_0x4c5915(0x4ba)]['initMembers'],Sprite_Character[_0x4c5915(0x4ba)]['initMembers']=function(){const _0x575f26=_0x4c5915;VisuMZ[_0x575f26(0x1fd)]['Sprite_Character_initMembers'][_0x575f26(0x44d)](this),this['initMembersEventsMoveCore'](),this['createAttachPictureSprite'](),this[_0x575f26(0x423)]();},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x5be)]=function(){const _0x1e3841=_0x4c5915;this[_0x1e3841(0x3a9)]=0xff;},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x460)]=function(){const _0x1569ca=_0x4c5915;this[_0x1569ca(0x16d)]=new Sprite(),this[_0x1569ca(0x16d)][_0x1569ca(0x2b1)]['x']=0.5,this[_0x1569ca(0x16d)][_0x1569ca(0x2b1)]['y']=0x1,this[_0x1569ca(0x5e3)](this[_0x1569ca(0x16d)]),this[_0x1569ca(0x291)]();},Sprite_Character[_0x4c5915(0x4ba)]['createIconSprite']=function(){const _0x3047f2=_0x4c5915;this[_0x3047f2(0x449)]=new Sprite(),this[_0x3047f2(0x449)]['bitmap']=ImageManager[_0x3047f2(0x3b3)](_0x3047f2(0x3d0)),this[_0x3047f2(0x449)]['bitmap'][_0x3047f2(0x365)]=![],this[_0x3047f2(0x449)][_0x3047f2(0x20d)](0x0,0x0,0x0,0x0),this[_0x3047f2(0x449)][_0x3047f2(0x2b1)]['x']=0.5,this['_eventIconSprite']['anchor']['y']=0x1,this['addChild'](this[_0x3047f2(0x449)]);},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x470)]=function(){const _0x54c6c7=_0x4c5915;return this['_characterName']&&this[_0x54c6c7(0x610)][_0x54c6c7(0x603)](/\[VS8\]/i);},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x312)]=function(){const _0x130d55=_0x4c5915;return this[_0x130d55(0x470)]()&&VisuMZ[_0x130d55(0x1fd)][_0x130d55(0x64c)]['VS8'][_0x130d55(0x574)];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x5a1)]=Sprite_Character['prototype'][_0x4c5915(0x2de)],Sprite_Character['prototype'][_0x4c5915(0x2de)]=function(){const _0x4a6214=_0x4c5915;VisuMZ['EventsMoveCore'][_0x4a6214(0x5a1)][_0x4a6214(0x44d)](this),this[_0x4a6214(0x5a6)]();},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x2e7)]=function(){const _0x1a5c78=_0x4c5915;Sprite[_0x1a5c78(0x4ba)]['updateVisibility'][_0x1a5c78(0x44d)](this),this[_0x1a5c78(0x4e1)]()&&(this[_0x1a5c78(0x1c9)]=![]);},Sprite_Character['prototype'][_0x4c5915(0x4e1)]=function(){const _0x3bbf63=_0x4c5915;if(this['getEventIconIndex']()>0x0)return![];if(this[_0x3bbf63(0x25f)]){if(this[_0x3bbf63(0x25f)][_0x3bbf63(0x5b2)]()!=='')return![];}return this[_0x3bbf63(0x2a5)]()||this[_0x3bbf63(0x25f)]&&this[_0x3bbf63(0x25f)]['isTransparent']();},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x5a6)]=function(){const _0x27310c=_0x4c5915;this['updateTilt'](),this['updateShadow'](),this[_0x27310c(0x303)](),this[_0x27310c(0x45e)](),this[_0x27310c(0x28c)](),this[_0x27310c(0x291)]();},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x1a8)]=Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x1dc)],Sprite_Character[_0x4c5915(0x4ba)]['setTileBitmap']=function(){const _0x179357=_0x4c5915;VisuMZ[_0x179357(0x1fd)][_0x179357(0x1a8)]['call'](this),this[_0x179357(0x577)]['addLoadListener'](this['updateBitmapSmoothing'][_0x179357(0x304)](this));},VisuMZ[_0x4c5915(0x1fd)]['Sprite_Character_setCharacterBitmap']=Sprite_Character[_0x4c5915(0x4ba)]['setCharacterBitmap'],Sprite_Character['prototype'][_0x4c5915(0x5f4)]=function(){const _0x51b47c=_0x4c5915;VisuMZ[_0x51b47c(0x1fd)][_0x51b47c(0x5fa)]['call'](this),this[_0x51b47c(0x577)][_0x51b47c(0x64a)](this[_0x51b47c(0x59c)][_0x51b47c(0x304)](this));},Sprite_Character['prototype'][_0x4c5915(0x59c)]=function(){const _0x5053d9=_0x4c5915;if(!this['bitmap'])return;this[_0x5053d9(0x577)][_0x5053d9(0x365)]=!!VisuMZ['EventsMoveCore']['Settings']['Movement'][_0x5053d9(0x17d)];},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x3f1)]=Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x195)],Sprite_Character['prototype'][_0x4c5915(0x195)]=function(){const _0x1536e3=_0x4c5915;if(this[_0x1536e3(0x470)]()){if('EaYEf'===_0x1536e3(0x660))_0x4e68d5[_0x1536e3(0x1fd)][_0x1536e3(0x53d)][_0x1536e3(0x44d)](this,_0x14aca8),this['_chaseOff']=![];else return this[_0x1536e3(0x22d)]();}else{if(_0x1536e3(0x43d)==='KToxa'){if(_0x56a629['isBattleTest']())return![];return _0x210e4b[_0x1536e3(0x1c5)][_0x1536e3(0x452)](_0x54f509);}else return this['characterPatternYBasic']();}},Sprite_Character['prototype'][_0x4c5915(0x22d)]=function(){const _0x4a8ae8=_0x4c5915,_0x42721b=this['_character'][_0x4a8ae8(0x1b6)]();let _0x5148f0=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return this[_0x4a8ae8(0x25f)]['_mirrorSprite']&&(_0x5148f0=[0x2,0x4,0x2,0x2,0x6,0x2,0x4,0x8,0x8,0x6]),(_0x5148f0[_0x42721b]-0x2)/0x2;},Sprite_Character['prototype']['characterPatternYBasic']=function(){const _0x327e08=_0x4c5915;let _0xd44527=this[_0x327e08(0x25f)][_0x327e08(0x1b6)]();if(this['_character']['_mirrorSprite']){if(_0x327e08(0x61d)==='DXiUL'){if(_0xd44527===0x4)_0x327e08(0x4bc)!==_0x327e08(0x4bc)?(this[_0x327e08(0x435)]=![],this[_0x327e08(0x52f)]=_0x141cd2['zoomScale'](),this['_eventScreenX']=this[_0x327e08(0x5e6)][_0x327e08(0x36c)](),this[_0x327e08(0x503)]=this[_0x327e08(0x5e6)]['screenY'](),this[_0x327e08(0x5d7)]=this[_0x327e08(0x5e6)][_0x327e08(0x3c7)][_0x327e08(0x4b2)],this['_eventLabelOffsetY']=this[_0x327e08(0x5e6)][_0x327e08(0x3c7)][_0x327e08(0x332)],this[_0x327e08(0x234)]=this[_0x327e08(0x5e6)][_0x327e08(0x3ff)],this['_cacheVisibility']=this[_0x327e08(0x2f7)](),this[_0x327e08(0x4ed)]=_0x54fc1e[_0x327e08(0x412)](),this[_0x327e08(0x293)]=_0x4c1e59['x'],this[_0x327e08(0x582)]=_0x175dc9['y'],this['_visibleEventX']=this[_0x327e08(0x5e6)]['x'],this[_0x327e08(0x13a)]=this[_0x327e08(0x5e6)]['y']):_0xd44527=0x6;else _0xd44527===0x6&&(_0xd44527=0x4);}else{if(_0x18ba4e)this['processMoveRouteTeleportTo'](_0x9415fe['x'],_0x1940be['y']);}}return(_0xd44527-0x2)/0x2;},Sprite_Character[_0x4c5915(0x4ba)]['updateTilt']=function(){const _0x4f5fd3=_0x4c5915;if(!VisuMZ[_0x4f5fd3(0x1fd)][_0x4f5fd3(0x64c)][_0x4f5fd3(0x28d)][_0x4f5fd3(0x305)])return;this[_0x4f5fd3(0x5c3)]=0x0;if(this[_0x4f5fd3(0x2c6)]()){if(_0x4f5fd3(0x532)!=='FnUFP')_0x4c6bda[_0x4f5fd3(0x273)](_0xfcb7dd['TemplateName']);else{const _0x1e0f5e=VisuMZ['EventsMoveCore'][_0x4f5fd3(0x64c)][_0x4f5fd3(0x28d)],_0x6a08e3=this[_0x4f5fd3(0x25f)][_0x4f5fd3(0x1b6)]();let _0x335ebf=0x0;if([0x1,0x4,0x7][_0x4f5fd3(0x452)](_0x6a08e3))_0x335ebf=_0x1e0f5e['TiltLeft'];if([0x3,0x6,0x9][_0x4f5fd3(0x452)](_0x6a08e3))_0x335ebf=_0x1e0f5e['TiltRight'];[0x2,0x8][_0x4f5fd3(0x452)](_0x6a08e3)&&(_0x335ebf=[-_0x1e0f5e[_0x4f5fd3(0x217)],0x0,_0x1e0f5e[_0x4f5fd3(0x217)]][this['_character'][_0x4f5fd3(0x35d)]()]);if(this[_0x4f5fd3(0x260)])_0x335ebf*=-0x1;this[_0x4f5fd3(0x5c3)]=_0x335ebf;}}},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x2c6)]=function(){const _0x326277=_0x4c5915;if(this[_0x326277(0x1f3)])return![];return this[_0x326277(0x25f)][_0x326277(0x44e)]()&&!this[_0x326277(0x25f)][_0x326277(0x478)]()&&!this[_0x326277(0x25f)]['isPosing']()&&this['getEventIconIndex']()===0x0;},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x1bf)]=function(){const _0x249343=_0x4c5915;if(!this[_0x249343(0x4ae)])return;this['_shadowSprite']['x']=this[_0x249343(0x25f)][_0x249343(0x270)](),this[_0x249343(0x4ae)]['y']=this['_character'][_0x249343(0x4da)](),this['_shadowSprite'][_0x249343(0x2a0)]=this[_0x249343(0x2a0)],this[_0x249343(0x4ae)][_0x249343(0x1c9)]=this['_character'][_0x249343(0x62c)](),this['_shadowSprite'][_0x249343(0x1f8)]=this[_0x249343(0x1f8)],!this[_0x249343(0x25f)][_0x249343(0x34d)]()?_0x249343(0x364)===_0x249343(0x364)?(this[_0x249343(0x4ae)][_0x249343(0x446)]['x']=Math[_0x249343(0x3a2)](0x1,this['_shadowSprite']['scale']['x']+0.1),this[_0x249343(0x4ae)][_0x249343(0x446)]['y']=Math[_0x249343(0x3a2)](0x1,this['_shadowSprite'][_0x249343(0x446)]['y']+0.1)):(_0x46e930=_0xa884bf[_0x249343(0x3c8)],_0x41f79a=_0x1cabc2[_0x249343(0x5ad)]):(this['_shadowSprite']['scale']['x']=Math[_0x249343(0x2a4)](0x0,this[_0x249343(0x4ae)][_0x249343(0x446)]['x']-0.1),this['_shadowSprite'][_0x249343(0x446)]['y']=Math[_0x249343(0x2a4)](0x0,this[_0x249343(0x4ae)][_0x249343(0x446)]['y']-0.1));},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x303)]=function(){const _0x339423=_0x4c5915;if(!this[_0x339423(0x449)])return;const _0x3d5eaf=this[_0x339423(0x449)],_0x207d9d=this[_0x339423(0x19b)]();if(_0x207d9d<=0x0)return _0x3d5eaf[_0x339423(0x20d)](0x0,0x0,0x0,0x0);else{if(_0x339423(0x483)!==_0x339423(0x483))_0x8e33a2[_0x339423(0x1fd)]['Game_Map_refresh'][_0x339423(0x44d)](this),this[_0x339423(0x4a2)]();else{const _0x20a87f=ImageManager[_0x339423(0x13b)],_0x31cd3f=ImageManager['iconHeight'],_0x2397b0=_0x207d9d%0x10*_0x20a87f,_0xbf5e6f=Math[_0x339423(0x3f6)](_0x207d9d/0x10)*_0x31cd3f;_0x3d5eaf[_0x339423(0x20d)](_0x2397b0,_0xbf5e6f,_0x20a87f,_0x31cd3f),this[_0x339423(0x1c9)]=!![];}}const _0x10a290=this[_0x339423(0x25f)][_0x339423(0x3f0)]();this[_0x339423(0x312)]()?this[_0x339423(0x46a)](_0x3d5eaf):(_0x3d5eaf['x']=_0x10a290?_0x10a290[_0x339423(0x3a8)]:0x0,_0x3d5eaf['y']=_0x10a290?-this[_0x339423(0x664)]+_0x10a290['bufferY']:0x0),_0x3d5eaf[_0x339423(0x2e5)]=_0x10a290?_0x10a290['blendMode']:0x0,this[_0x339423(0x23c)](_0x3d5eaf),this['addChild'](_0x3d5eaf),_0x3d5eaf[_0x339423(0x5c3)]=-this[_0x339423(0x5c3)];},Sprite_Character['prototype'][_0x4c5915(0x45e)]=function(){const _0x230811=_0x4c5915;if(!this[_0x230811(0x25f)])return;if(this[_0x230811(0x25f)][_0x230811(0x1ad)]===undefined)return;if(this[_0x230811(0x25f)][_0x230811(0x1ad)]===![])return;this['z']=this[_0x230811(0x25f)][_0x230811(0x1ad)];if(this['z']<0x0)this[_0x230811(0x4ae)]['z']=this['z']-0x1;else{if('osNkV'===_0x230811(0x538))this['_shadowSprite']['z']=0x0;else{const _0x2bf733=this[_0x230811(0x16d)];_0x2bf733['bitmap']=_0x51e7fc;const _0x517f42=this[_0x230811(0x25f)][_0x230811(0x590)](),_0x187937=_0x517f42[_0x230811(0x5b6)],_0x5ddbb4=_0x517f42['scale'];let _0x151cb6=0x1;if(_0x187937>0x0){let _0x173214=this[_0x230811(0x4a4)]()||0x1,_0x4945fa=this['getAttachPictureBitmapHeight']()||0x1;const _0x18f70f=_0x1c5a17[_0x230811(0x2a4)](0x1,_0x173214,_0x4945fa);_0x151cb6=_0x187937/_0x18f70f;}_0x151cb6*=_0x5ddbb4,_0x151cb6!==0x1&&(this[_0x230811(0x16d)][_0x230811(0x577)]['smooth']=!![]),_0x2bf733[_0x230811(0x446)]['x']=_0x151cb6,_0x2bf733['scale']['y']=_0x151cb6,this[_0x230811(0x1c9)]=!![],this[_0x230811(0x28e)]();}}},Sprite_Character['prototype'][_0x4c5915(0x28c)]=function(){const _0x3c54a5=_0x4c5915;if(!this[_0x3c54a5(0x25f)])return;let _0x493a0c=!!this[_0x3c54a5(0x25f)][_0x3c54a5(0x564)];this[_0x3c54a5(0x446)]['x']=Math['abs'](this['scale']['x'])*(_0x493a0c?-0x1:0x1);},Sprite_Character['prototype'][_0x4c5915(0x46a)]=function(_0x5b93a3){const _0x4492e8=_0x4c5915;_0x5b93a3['x']=0x0,_0x5b93a3['y']=-this[_0x4492e8(0x664)]+this[_0x4492e8(0x664)]*0x2/0x5,this[_0x4492e8(0x25f)][_0x4492e8(0x35d)]()!==0x1&&(_0x5b93a3['y']+=0x1);},Sprite_Character['prototype'][_0x4c5915(0x19b)]=function(){const _0x15d4d5=_0x4c5915;if(!this[_0x15d4d5(0x25f)])return 0x0;if(this[_0x15d4d5(0x25f)][_0x15d4d5(0x634)])return 0x0;const _0xd40ab0=this['_character']['getEventIconData']();return _0xd40ab0?_0xd40ab0['iconIndex']||0x0:0x0;},Sprite_Character['prototype']['updateAttachPictureSprite']=function(){const _0x1b7c94=_0x4c5915;if(!this['_attachPictureSprite'])return;if(!this[_0x1b7c94(0x25f)])return;this['setupAttachPictureBitmap'](),this[_0x1b7c94(0x28e)]();},Sprite_Character['prototype'][_0x4c5915(0x272)]=function(){const _0x3fab8f=_0x4c5915;if(!this[_0x3fab8f(0x424)]())return;const _0x5882c8=this[_0x3fab8f(0x25f)][_0x3fab8f(0x590)]();this[_0x3fab8f(0x263)]=_0x5882c8['filename'],this['_lastAttachPictureMaxSize']=_0x5882c8[_0x3fab8f(0x5b6)],this['_lastAttachPictureScale']=_0x5882c8[_0x3fab8f(0x446)];if(_0x5882c8[_0x3fab8f(0x3ac)]!==''){if(_0x3fab8f(0x4ce)!==_0x3fab8f(0x4c3)){const _0x15ce5d=ImageManager[_0x3fab8f(0x5f5)](_0x5882c8['filename']);_0x15ce5d[_0x3fab8f(0x64a)](this[_0x3fab8f(0x5ca)][_0x3fab8f(0x304)](this,_0x15ce5d));}else _0x4d25d4['registerSelfEvent'](),_0x40edad[_0x3fab8f(0x1fd)]['Window_ScrollText_startMessage'][_0x3fab8f(0x44d)](this),_0x5d8489[_0x3fab8f(0x614)]();}else{if('ZPnrQ'!==_0x3fab8f(0x66a))this['_attachPictureSprite'][_0x3fab8f(0x577)]=new Bitmap(0x1,0x1);else{const _0x4fc107=this['reverseDir'](this['direction']());return _0x32ec27['roundYWithDirection'](this['y'],_0x4fc107);}}},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x28e)]=function(){const _0x427752=_0x4c5915,_0x460943=this[_0x427752(0x16d)];_0x460943['x']=this[_0x427752(0x25f)][_0x427752(0x155)](),_0x460943['y']=this[_0x427752(0x25f)]['attachPictureOffsetY'](),_0x460943[_0x427752(0x2e5)]=this[_0x427752(0x25f)][_0x427752(0x4f9)]();},Sprite_Character['prototype'][_0x4c5915(0x424)]=function(){const _0x54e4d8=_0x4c5915,_0x74ef7=this[_0x54e4d8(0x25f)][_0x54e4d8(0x590)]();if(_0x74ef7){if(this[_0x54e4d8(0x263)]!==_0x74ef7[_0x54e4d8(0x3ac)])return!![];if(this[_0x54e4d8(0x209)]!==_0x74ef7[_0x54e4d8(0x5b6)])return!![];if(this[_0x54e4d8(0x5ee)]!==_0x74ef7[_0x54e4d8(0x446)])return!![];}return![];},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x5ca)]=function(_0x3caee0){const _0x2ad565=_0x4c5915,_0x301d1c=this['_attachPictureSprite'];_0x301d1c[_0x2ad565(0x577)]=_0x3caee0;const _0x3ada74=this[_0x2ad565(0x25f)][_0x2ad565(0x590)](),_0x4bd3fd=_0x3ada74[_0x2ad565(0x5b6)],_0x248237=_0x3ada74[_0x2ad565(0x446)];let _0x5212c4=0x1;if(_0x4bd3fd>0x0){if(_0x2ad565(0x519)!==_0x2ad565(0x495)){let _0x53fc13=this[_0x2ad565(0x4a4)]()||0x1,_0x533288=this['getAttachPictureBitmapHeight']()||0x1;const _0x39a559=Math[_0x2ad565(0x2a4)](0x1,_0x53fc13,_0x533288);_0x5212c4=_0x4bd3fd/_0x39a559;}else{_0x36a7c5[_0x2ad565(0x1fd)]['CustomPageConditions'][_0x2ad565(0x61c)](_0x58b8d0),this['_CPCs']=_0x4209b0[_0x2ad565(0x471)][_0x2ad565(0x179)]>0x0;_0x4f7bf1['CPC']===_0x47ba6c&&_0x29b582[_0x2ad565(0x1fd)][_0x2ad565(0x49a)][_0x2ad565(0x61c)](_0x4f3410);if(_0x27dfed['CPC'][_0x2ad565(0x179)]>0x0)return _0x5ddc16[_0x2ad565(0x4f1)](this[_0x2ad565(0x3e5)])&&_0xe25c1b[_0x2ad565(0x1fd)][_0x2ad565(0x49a)][_0x2ad565(0x1e0)](_0x10cf77['CPC'],this['_eventId']);return!![];}}_0x5212c4*=_0x248237,_0x5212c4!==0x1&&(this['_attachPictureSprite']['bitmap'][_0x2ad565(0x365)]=!![]),_0x301d1c[_0x2ad565(0x446)]['x']=_0x5212c4,_0x301d1c[_0x2ad565(0x446)]['y']=_0x5212c4,this[_0x2ad565(0x1c9)]=!![],this[_0x2ad565(0x28e)]();},Sprite_Character['prototype'][_0x4c5915(0x4a4)]=function(){const _0x554f93=_0x4c5915,_0x45c560=this[_0x554f93(0x16d)];if(!_0x45c560)return 0x0;return _0x45c560[_0x554f93(0x577)]['width'];},Sprite_Character[_0x4c5915(0x4ba)][_0x4c5915(0x3ef)]=function(){const _0x4d780d=_0x4c5915,_0x152eb4=this[_0x4d780d(0x16d)];if(!_0x152eb4)return 0x0;return _0x152eb4[_0x4d780d(0x577)]['height'];},VisuMZ['EventsMoveCore']['Sprite_Balloon_setup']=Sprite_Balloon[_0x4c5915(0x4ba)]['setup'],Sprite_Balloon['prototype'][_0x4c5915(0x5ff)]=function(_0x55cc9d,_0x569aae){const _0x3cf671=_0x4c5915;VisuMZ[_0x3cf671(0x1fd)][_0x3cf671(0x225)][_0x3cf671(0x44d)](this,_0x55cc9d,_0x569aae),VisuMZ[_0x3cf671(0x1fd)]['Settings'][_0x3cf671(0x30f)]['AutoBalloon']&&this[_0x3cf671(0x167)][_0x3cf671(0x25f)][_0x3cf671(0x583)](_0x569aae,this['_duration']);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x3a7)]=Sprite_Balloon[_0x4c5915(0x4ba)][_0x4c5915(0x16a)],Sprite_Balloon[_0x4c5915(0x4ba)][_0x4c5915(0x16a)]=function(){const _0x4ab389=_0x4c5915;VisuMZ[_0x4ab389(0x1fd)][_0x4ab389(0x3a7)][_0x4ab389(0x44d)](this),this['updateVS8BalloonOffsets']();},Sprite_Balloon['prototype'][_0x4c5915(0x60e)]=function(){const _0x110a18=_0x4c5915;this[_0x110a18(0x167)][_0x110a18(0x25f)][_0x110a18(0x470)]()&&(this['x']+=VisuMZ[_0x110a18(0x1fd)][_0x110a18(0x64c)][_0x110a18(0x30f)][_0x110a18(0x46f)],this['y']+=VisuMZ[_0x110a18(0x1fd)]['Settings'][_0x110a18(0x30f)][_0x110a18(0x59b)]);},Sprite_Timer['prototype'][_0x4c5915(0x468)]=function(){const _0x144eaa=_0x4c5915;this[_0x144eaa(0x577)]=new Bitmap(Math[_0x144eaa(0x227)](Graphics[_0x144eaa(0x3bf)]/0x2),0x30),this['bitmap'][_0x144eaa(0x5a9)]=this[_0x144eaa(0x5a9)](),this[_0x144eaa(0x577)][_0x144eaa(0x2d5)]=this[_0x144eaa(0x2d5)](),this['bitmap'][_0x144eaa(0x546)]=ColorManager[_0x144eaa(0x546)]();},Sprite_Timer[_0x4c5915(0x4ba)][_0x4c5915(0x158)]=function(){const _0x5572e0=_0x4c5915,_0x2ac29e=Math[_0x5572e0(0x3f6)](this[_0x5572e0(0x4bb)]/0x3c/0x3c),_0x51244e=Math['floor'](this[_0x5572e0(0x4bb)]/0x3c)%0x3c,_0x3ed126=this['_seconds']%0x3c;let _0x5cf87f=_0x51244e['padZero'](0x2)+':'+_0x3ed126['padZero'](0x2);if(_0x2ac29e>0x0)_0x5cf87f=_0x5572e0(0x159)[_0x5572e0(0x313)](_0x2ac29e,_0x5cf87f);return _0x5cf87f;};function Sprite_EventLabel(){this['initialize'](...arguments);}Sprite_EventLabel['prototype']=Object['create'](Sprite['prototype']),Sprite_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x3c2)]=Sprite_EventLabel,Sprite_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x537)]=function(_0x3acdbb){const _0x29bc7d=_0x4c5915;this[_0x29bc7d(0x5e6)]=_0x3acdbb,Sprite[_0x29bc7d(0x4ba)][_0x29bc7d(0x537)][_0x29bc7d(0x44d)](this),this[_0x29bc7d(0x2cb)](),this[_0x29bc7d(0x416)]();},Sprite_EventLabel['prototype']['initMembers']=function(){const _0x17fe03=_0x4c5915;this[_0x17fe03(0x2b1)]['x']=0.5,this['anchor']['y']=0x1;},Sprite_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x416)]=function(){const _0x392ddc=_0x4c5915,_0x4d6829=new Rectangle(0x0,0x0,0x1,0x1);this[_0x392ddc(0x198)]=new Window_Base(_0x4d6829),this['_proxyWindow']['padding']=0x0,this[_0x392ddc(0x2a0)]=this['isLabelVisible']()?0xff:0x0;},Sprite_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x2de)]=function(){const _0x425bca=_0x4c5915;Sprite[_0x425bca(0x4ba)][_0x425bca(0x2de)][_0x425bca(0x44d)](this),this[_0x425bca(0x536)](),this[_0x425bca(0x2ac)](),this[_0x425bca(0x16a)](),this[_0x425bca(0x2d0)]();},Sprite_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x536)]=function(){const _0x20a27f=_0x4c5915;if(this[_0x20a27f(0x5e6)][_0x20a27f(0x529)]()!==this[_0x20a27f(0x17e)]){if('SHind'!=='SHind')return _0x1c9ca5[_0x20a27f(0x1fd)][_0x20a27f(0x2b8)][_0x20a27f(0x44d)](this,_0x64d722);else this['_text']=this[_0x20a27f(0x5e6)][_0x20a27f(0x529)](),this['refresh']();}},Sprite_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x476)]=function(){const _0x561eaa=_0x4c5915;if(!this[_0x561eaa(0x198)])return;this[_0x561eaa(0x1d9)](),this['drawText']();},Sprite_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x1d9)]=function(){const _0x102a01=_0x4c5915,_0x2985e5=this[_0x102a01(0x198)][_0x102a01(0x132)](this[_0x102a01(0x17e)]),_0x369bbb=this[_0x102a01(0x198)][_0x102a01(0x16e)](),_0x31b27d=_0x2985e5[_0x102a01(0x2cf)]+_0x369bbb*0x2,_0x2d057f=_0x2985e5[_0x102a01(0x664)];this[_0x102a01(0x198)][_0x102a01(0x1ba)](0x0,0x0,_0x31b27d,_0x2d057f),this[_0x102a01(0x198)]['createContents'](),this[_0x102a01(0x577)]=this[_0x102a01(0x198)][_0x102a01(0x45f)];},Sprite_EventLabel[_0x4c5915(0x4ba)]['drawText']=function(){const _0x53664e=_0x4c5915,_0x453573=this[_0x53664e(0x198)][_0x53664e(0x16e)]();this[_0x53664e(0x198)]['drawTextEx'](this['_text'],_0x453573,0x0);},Sprite_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x2ac)]=function(){const _0x2842c7=_0x4c5915,_0x3def41=VisuMZ['EventsMoveCore'][_0x2842c7(0x64c)][_0x2842c7(0x274)]['FontSize'],_0x12e0a9=$gameSystem['mainFontSize']()||0x1;this[_0x2842c7(0x446)]['x']=this['scale']['y']=_0x3def41/_0x12e0a9;},Sprite_EventLabel['prototype'][_0x4c5915(0x16a)]=function(){const _0x25ef1a=_0x4c5915;if(!SceneManager[_0x25ef1a(0x339)])return;if(!SceneManager['_scene'][_0x25ef1a(0x5e7)])return;const _0x4834ec=SceneManager[_0x25ef1a(0x339)][_0x25ef1a(0x5e7)]['findTargetSprite'](this[_0x25ef1a(0x5e6)]);if(!_0x4834ec)return;this['x']=this['_event'][_0x25ef1a(0x36c)](),this['x']+=this['_event']['_labelWindow'][_0x25ef1a(0x4b2)],this['y']=this[_0x25ef1a(0x5e6)][_0x25ef1a(0x400)]()-_0x4834ec[_0x25ef1a(0x664)],this['y']+=$gameSystem[_0x25ef1a(0x41a)]()*-0.5,this['y']+=this[_0x25ef1a(0x5e6)][_0x25ef1a(0x3c7)][_0x25ef1a(0x332)];},Sprite_EventLabel['prototype'][_0x4c5915(0x2d0)]=function(){const _0x204652=_0x4c5915;if(this[_0x204652(0x2f7)]())_0x204652(0x4b3)===_0x204652(0x4b3)?this['opacity']+=this[_0x204652(0x66b)]():this['_inputTime']=0x0;else SceneManager[_0x204652(0x339)]['_encounterEffectDuration']>0x0?this[_0x204652(0x2a0)]=0x0:this['opacity']-=this['opacitySpeed']();},Sprite_EventLabel['prototype'][_0x4c5915(0x2f7)]=function(){const _0x4a210b=_0x4c5915;if(!$gameSystem[_0x4a210b(0x412)]())return![];if(this[_0x4a210b(0x5e6)]?.[_0x4a210b(0x634)])return![];if(this['_event']&&this[_0x4a210b(0x5e6)][_0x4a210b(0x3ff)]<0x0)return![];if(SceneManager[_0x4a210b(0x339)]['_encounterEffectDuration']>0x0)return![];const _0x53d902=$gamePlayer['x'],_0x2e07ef=$gamePlayer['y'],_0x3767d6=this[_0x4a210b(0x5e6)]['x'],_0x49b05f=this[_0x4a210b(0x5e6)]['y'];if(this[_0x4a210b(0x293)]===_0x53d902&&this[_0x4a210b(0x582)]===_0x2e07ef&&this[_0x4a210b(0x26b)]===_0x3767d6&&this[_0x4a210b(0x13a)]===_0x49b05f){if('CNhSb'!=='vYrJJ')return this['_cacheVisibility'];else _0x31b381=0x4;}this[_0x4a210b(0x293)]=$gamePlayer['x'],this[_0x4a210b(0x582)]=$gamePlayer['y'],this[_0x4a210b(0x26b)]=this[_0x4a210b(0x5e6)]['x'],this[_0x4a210b(0x13a)]=this[_0x4a210b(0x5e6)]['y'];if($gameMap[_0x4a210b(0x186)](_0x53d902,_0x2e07ef,_0x3767d6,_0x49b05f)>this[_0x4a210b(0x5e6)]['labelWindowRange']()){if(_0x4a210b(0x1a7)===_0x4a210b(0x1a7))return this[_0x4a210b(0x22f)]=![],![];else{const _0x176fd2=_0x1e552e[_0x4a210b(0x134)](this[_0x4a210b(0x49f)]()),_0x561e85=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x176fd2[_0x4a210b(0x162)]()];this['executeMoveDir8'](_0x561e85);}}return this['_cacheVisibility']=!![],!![];},Sprite_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x66b)]=function(){const _0x5cc059=_0x4c5915;return VisuMZ[_0x5cc059(0x1fd)][_0x5cc059(0x64c)][_0x5cc059(0x274)]['OpacitySpeed'];},VisuMZ[_0x4c5915(0x1fd)]['Spriteset_Map_createLowerLayer']=Spriteset_Map[_0x4c5915(0x4ba)]['createLowerLayer'],Spriteset_Map[_0x4c5915(0x4ba)][_0x4c5915(0x32d)]=function(){const _0x456833=_0x4c5915;VisuMZ[_0x456833(0x1fd)]['Spriteset_Map_createLowerLayer'][_0x456833(0x44d)](this),this[_0x456833(0x47f)]();},VisuMZ[_0x4c5915(0x1fd)]['Spriteset_Map_createShadow']=Spriteset_Map['prototype'][_0x4c5915(0x456)],Spriteset_Map['prototype'][_0x4c5915(0x456)]=function(){const _0xa6f947=_0x4c5915;VisuMZ[_0xa6f947(0x1fd)][_0xa6f947(0x251)][_0xa6f947(0x44d)](this),this[_0xa6f947(0x34e)]();},Spriteset_Map[_0x4c5915(0x4ba)][_0x4c5915(0x34e)]=function(){const _0x4706c9=_0x4c5915;if(!VisuMZ[_0x4706c9(0x1fd)][_0x4706c9(0x64c)]['Movement'][_0x4706c9(0x1d4)])return;for(const _0x166f78 of this[_0x4706c9(0x3b7)]){_0x4706c9(0x63f)===_0x4706c9(0x607)?(this[_0x4706c9(0x591)][_0x4706c9(0x4b2)]=_0x633a44(_0x761b35['$1']),this[_0x4706c9(0x591)][_0x4706c9(0x332)]=_0x388935(_0x2bdf17['$2'])):this[_0x4706c9(0x658)](_0x166f78);}},Spriteset_Map[_0x4c5915(0x4ba)][_0x4c5915(0x658)]=function(_0x4e4b3d){const _0x559cde=_0x4c5915;_0x4e4b3d['_shadowSprite']=new Sprite(),_0x4e4b3d['_shadowSprite'][_0x559cde(0x294)]=_0x4e4b3d[_0x559cde(0x25f)]['shadowFilename'](),_0x4e4b3d[_0x559cde(0x4ae)]['bitmap']=ImageManager['loadSystem'](_0x4e4b3d[_0x559cde(0x4ae)][_0x559cde(0x294)]),_0x4e4b3d[_0x559cde(0x4ae)]['anchor']['x']=0.5,_0x4e4b3d[_0x559cde(0x4ae)][_0x559cde(0x2b1)]['y']=0x1,_0x4e4b3d[_0x559cde(0x4ae)]['z']=0x0,this[_0x559cde(0x64d)][_0x559cde(0x5e3)](_0x4e4b3d['_shadowSprite']);},Spriteset_Map[_0x4c5915(0x4ba)][_0x4c5915(0x237)]=function(){const _0xa36c34=_0x4c5915;if(!VisuMZ['EventsMoveCore']['Settings'][_0xa36c34(0x28d)][_0xa36c34(0x1d4)])return;for(const _0x5b895b of this[_0xa36c34(0x3b7)]){this[_0xa36c34(0x64d)][_0xa36c34(0x23c)](_0x5b895b[_0xa36c34(0x4ae)]);}},Spriteset_Map[_0x4c5915(0x4ba)][_0x4c5915(0x47f)]=function(){const _0x919455=_0x4c5915;this[_0x919455(0x16b)]=[];for(const _0x3a92f4 of $gameMap[_0x919455(0x57c)]()){if('RfQkE'!==_0x919455(0x203))this[_0x919455(0x418)](_0x3a92f4);else return this[_0x919455(0x642)]===_0x501eda&&this[_0x919455(0x242)](),this[_0x919455(0x642)];}},Spriteset_Map[_0x4c5915(0x4ba)][_0x4c5915(0x418)]=function(_0x3b928a){const _0x4e78b1=_0x4c5915;if(!this[_0x4e78b1(0x311)](_0x3b928a))return;let _0x303d91;const _0x432f2c=VisuMZ[_0x4e78b1(0x1fd)][_0x4e78b1(0x64c)][_0x4e78b1(0x274)][_0x4e78b1(0x441)]??!![];_0x303d91=_0x432f2c?new Sprite_EventLabel(_0x3b928a):new Window_EventLabel(_0x3b928a),_0x303d91['z']=0x8,_0x303d91['spriteId']=Sprite[_0x4e78b1(0x576)]++,this[_0x4e78b1(0x64d)][_0x4e78b1(0x5e3)](_0x303d91),this[_0x4e78b1(0x16b)][_0x4e78b1(0x19f)](_0x303d91);},Spriteset_Map['prototype']['isTargetEventValidForLabelWindow']=function(_0x3fee81){const _0x4f373d=_0x4c5915,_0x4478c0=_0x3fee81[_0x4f373d(0x4f1)]();if(_0x4478c0['note']['match'](/<LABEL:[ ](.*?)>/i))return!![];if(_0x4478c0[_0x4f373d(0x31c)][_0x4f373d(0x603)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x135447 of _0x4478c0[_0x4f373d(0x318)]){if('bxgGE'!==_0x4f373d(0x543))return this[_0x4f373d(0x5f2)](0x8,_0x3aacb5(_0x620a4c['$1']));else{let _0x420e66='';for(const _0x5dc3a0 of _0x135447[_0x4f373d(0x61e)]){if(_0x4f373d(0x5cc)===_0x4f373d(0x5cc))[0x6c,0x198][_0x4f373d(0x452)](_0x5dc3a0[_0x4f373d(0x358)])&&(_0x420e66+=_0x5dc3a0[_0x4f373d(0x4ac)][0x0]);else{_0x1893bb['EventsMoveCore'][_0x4f373d(0x30c)][_0x4f373d(0x44d)](this,_0x1049a7);if(this['canStartLocalEvents']()&&_0x3817fd[_0x4f373d(0x452)](0x0)&&this['startMapCommonEventOnOKTarget']()===_0x4f373d(0x40e)){const _0x373f35=this[_0x4f373d(0x1b6)](),_0x226700=_0x470dcc[_0x4f373d(0x454)](this['x'],_0x373f35),_0x5de0ef=_0x17b37e[_0x4f373d(0x2bc)](this['y'],_0x373f35);this[_0x4f373d(0x345)](_0x226700,_0x5de0ef);}}}if(_0x420e66[_0x4f373d(0x603)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x420e66[_0x4f373d(0x603)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){if(_0x4f373d(0x4b6)===_0x4f373d(0x4b6))return!![];else this[_0x4f373d(0x273)](_0x16325c,!![]);}}}return![];},Spriteset_Map['prototype'][_0x4c5915(0x640)]=function(_0x1ee47d){const _0x2c9ef1=_0x4c5915;this[_0x2c9ef1(0x3b7)]=this[_0x2c9ef1(0x3b7)]||[];const _0x37ffec=new Sprite_Character(_0x1ee47d);this['_characterSprites'][_0x2c9ef1(0x19f)](_0x37ffec),this[_0x2c9ef1(0x64d)][_0x2c9ef1(0x5e3)](_0x37ffec),this[_0x2c9ef1(0x658)](_0x37ffec),this['createLabelWindowForTarget'](_0x1ee47d),_0x37ffec['update']();},Spriteset_Map['prototype'][_0x4c5915(0x496)]=function(){const _0x145f3a=_0x4c5915;if(!this[_0x145f3a(0x16b)])return;for(const _0x2e9542 of this[_0x145f3a(0x16b)]){if(_0x2e9542){if(_0x145f3a(0x461)===_0x145f3a(0x62d)){const _0x5cbde7=this[_0x145f3a(0x25f)][_0x145f3a(0x1b6)]();let _0x876220=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return this['_character'][_0x145f3a(0x564)]&&(_0x876220=[0x2,0x4,0x2,0x2,0x6,0x2,0x4,0x8,0x8,0x6]),(_0x876220[_0x5cbde7]-0x2)/0x2;}else _0x2e9542[_0x145f3a(0x293)]=undefined,_0x2e9542['refresh']();}}},VisuMZ['EventsMoveCore']['Game_Message_setNumberInput']=Game_Message[_0x4c5915(0x4ba)][_0x4c5915(0x4f5)],Game_Message[_0x4c5915(0x4ba)][_0x4c5915(0x4f5)]=function(_0x473606,_0x2d2e5b){const _0x1cba0b=_0x4c5915;this[_0x1cba0b(0x1bc)]=$gameTemp[_0x1cba0b(0x255)](),VisuMZ[_0x1cba0b(0x1fd)][_0x1cba0b(0x618)]['call'](this,_0x473606,_0x2d2e5b);},VisuMZ[_0x4c5915(0x1fd)]['Window_NumberInput_start']=Window_NumberInput[_0x4c5915(0x4ba)][_0x4c5915(0x568)],Window_NumberInput['prototype'][_0x4c5915(0x568)]=function(){const _0xbd93dd=_0x4c5915;$gameTemp[_0xbd93dd(0x3e3)]($gameMessage['_selfTargetNumberInput']),VisuMZ['EventsMoveCore'][_0xbd93dd(0x49d)]['call'](this),$gameTemp[_0xbd93dd(0x614)]();},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x5dc)]=Window_NumberInput[_0x4c5915(0x4ba)][_0x4c5915(0x287)],Window_NumberInput[_0x4c5915(0x4ba)][_0x4c5915(0x287)]=function(){const _0x3d48f5=_0x4c5915;$gameTemp[_0x3d48f5(0x3e3)]($gameMessage[_0x3d48f5(0x1bc)]),VisuMZ[_0x3d48f5(0x1fd)]['Window_NumberInput_processOk']['call'](this),$gameTemp[_0x3d48f5(0x614)](),$gameMessage['_selfTargetNumberInput']=undefined;},VisuMZ[_0x4c5915(0x1fd)]['Game_Message_setItemChoice']=Game_Message['prototype'][_0x4c5915(0x275)],Game_Message['prototype'][_0x4c5915(0x275)]=function(_0x40de4e,_0x5eccd2){const _0x5c5dee=_0x4c5915;this[_0x5c5dee(0x475)]=$gameTemp[_0x5c5dee(0x255)](),VisuMZ[_0x5c5dee(0x1fd)][_0x5c5dee(0x5d9)]['call'](this,_0x40de4e,_0x5eccd2);},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x436)]=Window_EventItem[_0x4c5915(0x4ba)][_0x4c5915(0x442)],Window_EventItem[_0x4c5915(0x4ba)][_0x4c5915(0x442)]=function(){const _0x5900fc=_0x4c5915;$gameTemp['registerSelfTarget']($gameMessage[_0x5900fc(0x475)]),VisuMZ[_0x5900fc(0x1fd)][_0x5900fc(0x436)]['call'](this),$gameTemp['clearSelfTarget'](),$gameMessage[_0x5900fc(0x475)]=undefined;},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x50a)]=Window_EventItem['prototype'][_0x4c5915(0x301)],Window_EventItem[_0x4c5915(0x4ba)][_0x4c5915(0x301)]=function(){const _0xed802=_0x4c5915;$gameTemp['registerSelfTarget']($gameMessage[_0xed802(0x475)]),VisuMZ['EventsMoveCore']['Window_EventItem_onCancel'][_0xed802(0x44d)](this),$gameTemp[_0xed802(0x614)](),$gameMessage[_0xed802(0x475)]=undefined;},VisuMZ[_0x4c5915(0x1fd)][_0x4c5915(0x2ce)]=Window_Message[_0x4c5915(0x4ba)][_0x4c5915(0x4e8)],Window_Message[_0x4c5915(0x4ba)][_0x4c5915(0x4e8)]=function(){const _0x1de6ad=_0x4c5915;$gameMessage[_0x1de6ad(0x2c2)](),VisuMZ[_0x1de6ad(0x1fd)][_0x1de6ad(0x2ce)][_0x1de6ad(0x44d)](this),$gameTemp[_0x1de6ad(0x614)]();},VisuMZ[_0x4c5915(0x1fd)]['Window_ScrollText_startMessage']=Window_ScrollText['prototype'][_0x4c5915(0x4e8)],Window_ScrollText['prototype'][_0x4c5915(0x4e8)]=function(){const _0x150f43=_0x4c5915;$gameMessage[_0x150f43(0x2c2)](),VisuMZ[_0x150f43(0x1fd)][_0x150f43(0x5e9)][_0x150f43(0x44d)](this),$gameTemp[_0x150f43(0x614)]();};function _0x54df(){const _0x3c33df=['VehicleDock','horz\x20mirror','USER-DEFINED\x203','iconSize','EventLabelRefresh','Game_Variables_setValue','Game_Timer_onExpire','_mirrorSprite','oobXg','MoveRouteIndex','mIQYn','start','_waitMode','approach','frameCount','_commonEvents','Cohnc','Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a','isAirshipPassable','Game_Event_moveTypeRandom','onExpire','TemplateName','mapValue','AutoBuffer','characterIndex','_counter','bitmap','isSelfSwitch','XwTAJ','lineHeight','NhyUY','events','_randomMoveWeight','setPlayerControlDisable','BufferX','boat','removeMorph','_visiblePlayerY','setBalloonPose','moveAwayFromPoint','5247wkQGfS','areFollowersForceHidden','Game_Map_parallelCommonEvents','mgHnM','deltaYFrom','oyFcm','characterName','lQYyh','iXclF','shadowFilename','checkSmartEventCollision','attachPictureSettings','_attachPicture','MUSIC\x20NOTE','startCallEvent','sopLr','UMGbn','BbbXD','...','GpfKe','getInputDirection','turnAwayFromCharacter','BalloonOffsetY','updateBitmapSmoothing','requestBalloon','frontY','map','FBxlM','Sprite_Character_update','pMZux','contentsOpacity','Direction','status','updateEventsAndMovementCore','Step1MapId','hasDragonbones','fontFace','isActive','EventTimerFramesGain','command108','eventId','clearDashing','isPlayerForceHidden','TdlFB','StopAutoMoveMessages','attachPictureFilename','EventTemplates','startMapCommonEventOnOKTarget','clearStepPattern','maxSize','Hidden','ZwANA','Map\x20%1\x20Variable\x20%2','isTurnInPlace','_eventScreenX','registerCommand','MapId','initMembersEventsMoveCore','variables','type','isEventRunning','tAccI','rotation','Game_Switches_setValue','conditions','_spawnData','vertical\x20mirror','isCollidedWithPlayerCharacters','isShip','onLoadAttachPicture','WalkForbid','wGKNS','LineHeight','isMapSwitch','onClickTrigger','_activationProximity','ZHNNb','parallelCommonEvents','MapVariables','initEventsMoveCoreSettings','Joztk','SWEAT','_eventLabelOffsetX','TdVAh','Game_Message_setItemChoice','Ikfor','_advancedSwitchVariable','Window_NumberInput_processOk','_moveOnlyRegions','QUESTION','VariableGetSelfVariableID','Game_CharacterBase_realMoveSpeed','EventTimerFramesSet','Game_Map_unlockEvent','addChild','COBWEB','4CcwRJD','_event','_spriteset','mirror\x20horizontal','Window_ScrollText_startMessage','oBsJV','setFrames','TSacv','updateRoutineMove','_lastAttachPictureScale','COLLAPSE','requestAnimation','$callEventMap','processMoveRouteMoveRepeat','VariableId','setCharacterBitmap','loadPicture','PosY','getPlayerDiagonalSetting','SpawnEventDespawnTerrainTags','qaceN','Sprite_Character_setCharacterBitmap','Template','return\x20%1','getSavedEventLocation','Region','setup','filter','zFDUn','Game_Player_isMapPassable','match','Game_Interpreter_executeCommand','getPosingCharacterDirection','Sprite_Character_initMembers','naEML','AllAllow','setEventIconData','KwKWF','apply','Game_CharacterBase_moveStraight','LIGHTBULB','updateVS8BalloonOffsets','Game_Enemy_meetsSwitchCondition','_characterName','ZFcPA','getLastPluginCommandInterpreter','random','clearSelfTarget','EventLabelVisible','moveSynchType','clearPageSettings','Game_Message_setNumberInput','GmIeK','FUNC','TtSjJ','loadCPC','DXiUL','list','savePreservedMorphEventDataKey','processMoveSynchRandom','setupEventsMoveCoreCommentTags','findProperPageIndex','Game_Troop_meetsConditionsCPC','VehicleForbid','AxPgE','backY','nDhRB','_events','xCtjF','Game_Event_updateSelfMovement','correctFacingDirection','isShadowVisible','OEOhQ','EaLig','_callEventData','HPpEu','checkEventTriggerThere','meetsConditions','Ship','_erased','checkEventTriggerHere','getPosingCharacterIndex','HURT','HwmFU','Button','Icon','MapID','EXCLAMATION','Game_Event_locate','isDashing','qfiOD','createSpawnedEvent','_pattern','_forceShowPlayer','dashSpeedModifier','startMapCommonEventOnTouch','Game_Player_isDashing','processMoveCommandEventsMoveCore','QWmYw','requestRefresh','STRUCT','addLoadListener','processMoveSynchReverseMimic','Settings','_tilemap','gaXFI','Frames','toLowerCase','CdzMV','moveTowardPoint','attachPictureMaxSize','EhCZD','_cpc','General','processMoveRouteMoveToCharacter','createCharacterShadow','realMoveSpeed','FollowerSetTargetChase','executeMoveDir8','EventID','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_chaseOff','charAt','mvAkS','eraseEvent','EventId','TpjDp','height','SPIN\x20COUNTERCLOCKWISE','value','SwitchGetSelfSwitchABCD','processMoveRouteMoveUntilStop','onLoadSuccess','fdcnJ','opacitySpeed','setBackgroundType','processMoveRouteMoveTo','XktMJ','ygRmw','textSizeEx','Game_CharacterBase_update','GetMoveSynchTarget','BIWAs','delay','deltaXFrom','getControlledFollowerID','getMapSpawnedEventData','_visibleEventY','iconWidth','updatePattern','setDiagonalDirection','WIwhM','forceMoveRoute','setCommonEvent','_callEventMap','fWlia','CPCsMet','isAdvancedVariable','tNOtF','isTriggerIn','OaQjl','autosaveEventLocation','MfHTA','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','QhnGb','Passability','_forceHideFollower','DashingEnable','updateSelfMovement','WQXCs','locate','wATNd','setMapValue','erase','attachPictureOffsetX','resetSelfSwitchesForEvent','SpawnEventAtXY','timerText','%1:%2','_forceHidePlayer','dCtjH','down','EWrUt','reverse\x20mimic','TargetSwitchId','SelfDataResetAll','updateShadowChanges','lastMovedDirection','setValue','FollowerReset','_commonEventId','needsUpdate','_target','deltaX','EnableDir8','updatePosition','_labelWindows','RegionOkTarget','_attachPictureSprite','itemPadding','forceCarrying','mIBxT','setupSaveEventLocations','hkwCj','onDatabaseLoaded','setMoveSpeed','setupEvents','EventIconChange','DOWN','3123pVlDHE','length','NORMAL','EventTimerExpireEvent','Game_Event_meetsConditionsCPC','BitmapSmoothing','_text','qitDw','determineEventOverload','despawnEverything','EventLocationCreate','initEventsMoveCore','indexOf','_direction','absDistance','increaseSteps','isSupportDiagonalMovement','isEventClickTriggered','isMapPassable','XjQmb','PreMorphJS','setupEventsMoveCoreEffects','setStopFollowerChasing','Map%1.json','SPIN\x20CW','execute','TerrainTag','reverse','setPattern','characterPatternY','UNTITLED','setDirection','_proxyWindow','Game_CommonEvent_isActive','drawIcon','getEventIconIndex','_frames','padZero','template','push','6176706IqmLGL','processMoveRoutePatternLock','jumpAll','COyiu','isPlayerControlDisabled','splice','dykVq','uRnfX','Sprite_Character_setTileBitmap','checkAdvancedSwitchVariablePresent','terrainTag','TurnInPlaceDelay','355503InKlKi','_customZ','3801287syacso','destinationY','deleteIconsOnEventsData','forceDashing','VisuMZ_1_MessageCore','XqLIf','followers','activationProximityType','direction','Game_Character_forceMoveRoute','Game_Vehicle_isLandOk','clamp','move','pluginCommandCallEvent','_selfTargetNumberInput','isPlayerForceShown','setupPageSettings','updateShadow','lastSpawnedEvent','isEventOverloaded','XlGQy','concat','turnLeft90','MapSwitches','_spawnedEvents','updateEventLabelText','processMoveSynchAway','visible','_pose','_lastMapId','findTargetSprite','List','Game_Event_isCollidedWithPlayerCharacters','posEventsMoveCore','yNUGt','tqnTc','_eventIcon','mDRma','ShowShadows','aDeKx','NkPfV','setPlayerDiagonalSetting','processMoveRouteStepTo','resizeWindow','DEFAULT_SHIFT_Y','processMoveRouteStepToCharacter','setTileBitmap','_inputTime','jgyoN','KaZsN','metCPC','_moveRoute','isSaveEventLocations','create','resetExitSelfSwitches','isAnyEventStarting','DashModifier','initFollowerController','NOSJO','ARRAYSTRUCT','iSlRg','processMoveRouteStepFrom','moveByInput','UPPER\x20LEFT','innerWidth','SwitchId','isSaveEventLocation','tSinx','LOWER\x20LEFT','_dragonbones','Speed','OFF','Setting','of\x20Preloaded\x20Maps.\x0a\x0a','_hidden','Disable','setDashingEnabled','isValid','_forceDashing','EventsMoveCore','setupFollowerVisibilityOverrides','processMoveCommand','TZFks','isMoving','SpawnEventDespawnAtXY','prjoP','ANcXA','Game_CharacterBase_screenX','_forceShowFollower','BoatSpeed','isPressed','_lastAttachPictureMaxSize','EVAL','IeqLb','processMoveRouteTeleportTo','setFrame','setChaseOff','NOTE','Rope','spawnPreserved','VisibleRange','sETEK','qUZoI','_randomHomeX','HCDSa','TiltVert','updateSaveEventLocation','_alwaysUpdateMove','PlayerIconChange','_encounterEffectDuration','eventsXyNt','_lastMovedDirection','LEsnY','processMoveSynchMirrorVert','zKftW','clearEventCache','MoveAllSynchTargets','attachPictureOffsetY','trigger','Sprite_Balloon_setup','HEART','round','setupSpawnedEvents','_mapId','Game_CharacterBase_setDirection','characterIndexVS8','_vehicleType','characterPatternYVS8','Game_System_initialize','_cacheVisibility','Game_Followers_jumpAll','Seconds','VisuMZ_0_CoreEngine','meetActivationProximityConditions','_eventPageIndex','GOyUo','5406495VXqOYt','hideShadows','_eventOverload','_regionRules','Game_Timer_start','name','removeChild','tileHeight','Fwfma','isAllowEventAutoMovement','reverseDir','reserveCommonEvent','setupPlayerVisibilityOverrides','SelfVariables','updateStop','TRMpS','Operation','fnfnb','PreloadedMaps','moveRouteIndex','processMoveRouteJumpToCharacter','_paused','Collision','FHODS','adjustMoveSynchOpacityDelta','_eventCache','bufferY','Spriteset_Map_createShadow','scrolledY','chaseCharacter','copy','getSelfTarget','RegionOk','away','Self\x20Variable\x20%1','PUTrt','setPosition','Game_Timer_initialize','stop','isRunning','spawnEventId','_character','_reflection','vaDkp','processMoveRouteBalloon','_lastAttachPictureFilename','removeTemporaryMapSpawnedEvents','updatePatternEventsMoveCore','_poseDuration','restoreSavedEventPosition','Game_Variables_value','checkEventTriggerEventsMoveCore','gezIv','_visibleEventX','ShiftY','moveBackToRandomHome','AdvancedVariables','hhFyk','shadowX','DCRuq','setupAttachPictureBitmap','morphIntoTemplate','Label','setItemChoice','frontX','processMoveRouteTeleportToCharacter','unlock','exit','CallEvent','CPlJa','isTile','firstSpawnedEvent','IYFAi','ARRAYNUM','initMoveSpeed','ovDKt','Step2MapId','PageId','updateParallel','RandomMoveWeight','xtkoj','processOk','resume','reverse\x20copy','oYtVQ','Game_Interpreter_updateWaitMode','updateEventMirrorSprite','Movement','updateAttachPictureBitmap','MUSIC','determineCommonEventsWithCPC','updateAttachPictureSprite','jump','_visiblePlayerX','_filename','ROUTE_SCRIPT','JSON','clear','Game_CharacterBase_updatePattern','Hours','ITEM','_selfTarget','Game_Map_isDashDisabled','_isObjectCharacter','oRkle','Player','opacity','blt','aprWs','Allow','max','isEmptyCharacter','QTlxc','isDashDisabled','_diagonalSupport','checkActivationProximity','setLastPluginCommandInterpreter','Game_CharacterBase_initMembers','updateScale','_forceCarrying','Game_Player_checkEventTriggerHere','right','_moveAllowPlayerCollision','anchor','HbrJl','Letter','ccwY','executeCommandCommonEvent','SpawnEventAtTerrainTag','variableId','Game_Map_event','FastForwardKey','hsTNS','MKmbt','roundYWithDirection','deleteEventLocation','EnableTurnInPlace','setOpacity','_followerChaseOff','CommonEventID','registerSelfEvent','moveDiagonally','JkiKo','isVisible','isAllowCharacterTilt','changeSpeed','All','_eventMorphData','checkExistingEntitiesAt','initMembers','turn180','_requestSaveEventLocation','Window_Message_startMessage','width','updateOpacity','isRegionAllowPass','setEventIconDataKey','FavorHorz','YxLJl','fontSize','BufferY','Game_Follower_chaseCharacter','isPlaytest','isSelfVariable','RIGHT\x20TO\x20LEFT','VICTORY','SpawnEventDespawnEverything','AHQvt','update','PreCopyJS','Game_CharacterBase_pattern','randomInt','visibleRange','drawing','EventTimerResume','blendMode','PostMorphJS','updateVisibility','QGpwz','findDiagonalDirectionTo','isPassable','switchId','ship','_eventCopyData','FollowerSetGlobalChase','resetFontSettings','FollowerID','meetsCPC','hasEventIcon','hasAdvancedSwitchVariable','moveAwayFromCharacter','_starting','_addedHitbox','isLabelVisible','eventsXy','wTUeB','BizOl','EventLocationDelete','clearPose','oTmfa','HjvqF','_shadowGraphic','processMoveRouteAnimation','onCancel','gdltb','updateEventIconSprite','bind','EnableDashTilt','lock','wEaYd','aFdaD','createDisplayObjects','FRUSTRATION','Step1EventId','Game_Player_checkEventTriggerThere','aEaqV','_patternLocked','VS8','hasMoveOnlyRegions','isTargetEventValidForLabelWindow','isAutoBufferIcon','format','ConvertParams','_actuallyMoving','roundY','PosX','pages','isSpawnedEvent','Scene_Map_createDisplayObjects','wMOUX','note','SpawnEventDespawnEventID','makeDeepCopy','return\x200','setAllowEventAutoMovement','HMPH','getDiagonalDestination','replace','_realX','VisibleEventLabels','despawnEventId','setSelfValue','Game_Character_processMoveCommand','setupSpawn','_stepPattern','processMoveRouteHugWall','zYidI','createLowerLayer','USER-DEFINED\x205','refreshIfNeeded','meetsSwitchCondition','processMoveRouteSelfSwitch','offsetY','JYiaK','clearDestination','Game_Event_clearPageSettings','isNormalPriority','text','directionOnLadderSpriteVS8dir','_scene','EventIconDelete','setMovementSuccess','updateMoveSynch','setupRegionRestrictions','_CPCs','updateMove','_type','initEventsMoveCoreEffects','despawnRegions','_working','trim','startMapCommonEventOnOK','updateWaitMode','setPose','processMoveSynch','_activationProximityAutoTriggerBypass','turnRight90','EventAllow','LEFT','isShadowShrink','createShadows','_EventIcons','PlayerForbid','convertSelfVariableValuesInScriptCall','_expireCommonEvent','_characterIndex','PostCopyJS','jhYYx','Walk','abs','code','8witOtO','SILENCE','STjEW','turnTowardCharacter','pattern','lByxZ','hasClickTrigger','NQjsC','qQJba','DjzKc','isAirship','UQmZS','smooth','cNqfX','moveTowardCharacter','%1Forbid','isLongPressed','advancedFunc','processMoveRouteFadeIn','screenX','EventTimerExpireClear','posNt','isBattleTest','getPreservedMorphEventData','processMoveSynchCustom','FollowerSetControl','processMoveSynchMimic','haHsW','PlayerMovementDiagonal','gainFrames','OpacitySpeed','isInVehicle','isDestinationValid','Name','_randomHomeY','radius','Game_Switches_value','cwdtU','advancedValue','4JPpGMT','Region%1','SelfSwitchID','ooVMF','deleteSavedEventLocationKey','findDirectionTo','processMoveSynchMirrorHorz','clearSpriteOffsets','despawnTerrainTags','DSMrs','loadDataFile','processSaveEventLocation','Game_Temp_setDestination','qjDxj','_SavedEventLocations','meetActivationRegionConditions','OperateValues','horizontal\x20mirror','getDirectionToPoint','zemJg','nxZSG','gcELC','_spriteOffsetX','isMoveOnlyRegionPassable','canMove','isRegionDockable','processDrawIcon','iZojB','ARRAYJSON','deletePreservedMorphEventDataKey','processMoveRouteFadeOut','IconIndex','getPosingCharacterPattern','Game_CharacterBase_hasStepAnime','min','uvUSy','FontSize','canPass','GFuUt','Sprite_Balloon_updatePosition','bufferX','_shadowOpacity','RIGHT','XlOpE','filename','EventTimerSpeed','isNearTheScreen','defaultFontSize','KNEEL','_eventOverloadThreshold','Enable','loadSystem','_comments','ADDITIVE','WSYNR','_characterSprites','createSpawnedEventWithData','Game_Vehicle_isMapPassable','mirror\x20vert','euiFJ','Imgqi','originalText','Minutes','boxWidth','eZMkH','isPosing','constructor','DgGCe','Game_Character_setMoveRoute','isWorking','ALLOW_LADDER_DASH','_labelWindow','mapId','Value','QzZwV','switch2Id','distance','EEJBX','NUM','executeCommand','IconSet','isSpawnHitboxCollisionOk','SHdPT','areFollowersForceShown','page','prepareSpawnedEventAtRegion','_data','Game_Event_start','regionId','Game_Player_getInputDirection','xUmKC','Game_Event_initialize','TerrainTags','grgyN','prepareSpawnedEventAtXY','gPzND','_saveEventLocations','_opacity','skOmC','registerSelfTarget','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_eventId','29930CMRrHi','processMoveRouteJumpTo','vMGGJ','Game_Interpreter_character','LIGHT','_moveRouteIndex','lmWOO','createSaveEventLocationData','processMoveRouteJumpForward','getAttachPictureBitmapHeight','getEventIconData','Sprite_Character_characterPatternY','wpflr','Game_Player_increaseSteps','vGJkp','IconBufferX','floor','Foszn','resetSelfSwitchesForMap','zFoZJ','zOdWI','SpawnEventDespawnRegions','UPPER\x20RIGHT','some','setupDiagonalSupport','_pageIndex','screenY','fittingHeight','airship','iconIndex','PostSpawnJS','IconBufferY','TiltRight','SPIN\x20CLOCKWISE','Game_Map_update','bcFHV','$preloadedMap_%1','setWaitMode','SwitchGetSelfSwitchID','_interpreter','front','Game_Map_refresh','jlqrH','description','eventLabelsVisible','LIGHT\x20BULB','zoomScale','checkEventsMoveCoreStringTags','createProxyWindow','Map\x20%1\x20Switch\x20%2','createLabelWindowForTarget','nnhqd','windowPadding','HjFAa','_lastPluginCommandInterpreter','checkEventTriggerAuto','NDUmL','activationProximityDistance','row','isEventTest','Scene_Map_startEncounterEffect','createIconSprite','needsAttachPictureUpdate','string','_spriteOffsetY','ANGER','AjolU','startsWith','Scene_Boot_onDatabaseLoaded','adjustDir8MovementSpeed','keys','Game_Event_checkEventTriggerAuto','selfValue','DIAGONAL_PATHFINDING_EVENT_LIMIT','Preserve','Game_CharacterBase_direction','executeCommonEvent','setEventLabelsVisible','Self\x20Switch\x20%1','_eventErased','Window_EventItem_onOk','processMoveRouteSelfVariable','shiftY','DashOnLadder','activationRegionList','IconBlendMode','BkOgf','AJmMl','ZUxVQ','checkRegionEventTrigger','hwoMq','SpriteBased','onOk','AEkwT','Map%1-Event%2','qPndc','scale','USER-DEFINED\x204','FpPgi','_eventIconSprite','Chase','backX','target','call','isDashingAndMoving','Fqnjc','DFAbE','isRegionForbidPass','includes','cwY','roundXWithDirection','_DisablePlayerControl','createShadow','roundX','_speed','eoQUe','isBoat','pageIndex','ZLbOh','FALSE','updateEventCustomZ','contents','createAttachPictureSprite','FHVcw','vehicle','_followerControlID','NxXDv','isMovementSucceeded','Game_Event_updateParallel','executeMove','createBitmap','Game_CharacterBase_canPass','autoEventIconBuffer','%1,%2,','IconSize','%1Allow','updatePeriodicRefresh','BalloonOffsetX','isSpriteVS8dir','CPC','Game_CharacterBase_isDashing','Game_Event_event','Game_CharacterBase_screenY','_selfTargetItemChoice','refresh','ZZZ','isOnLadder','switches','You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a','log','Game_Interpreter_PluginCommand','%1Dock','isBigCharacter','createLabelWindows','_eventLabelOffsetY','Forbid','Jpchy','JyWza','moveTypeRandom','setupMorphEvent','hEeum','turnAwayFromPoint','ANNOYED','custom','_EventsMoveCoreSettings','IxtGS','disable','132YzuQrr','egUZB','add','VvgpS','SelfSwitchABCD','startEncounterEffect','standing','referEvent','XBMCu','refreshEventLabels','enable','vElnT','labelWindowRange','CustomPageConditions','lrAdR','Game_Timer_stop','Window_NumberInput_start','command357','moveSynchTarget','pos','split','checkNeedForPeriodicRefresh','LIGHT-BULB','getAttachPictureBitmapWidth','hasCPCs','isPassableByAnyDirection','_needsPeriodicRefresh','isStopFollowerChasing','_clickTrigger','SlowerSpeed','%1%2','parameters','isJumping','_shadowSprite','pause','Game_Event_update','toUpperCase','offsetX','YsPdC','kopic','convertVariableValuesInScriptCall','QGkEe','despawnAtXY','isCollidedWithEvents','TiltLeft','prototype','_seconds','aWFIL','SelfSwitches','_moveSynch','YNABB','%1,','_saveEventLocation','wbHAR','gYeQZ','prepareSpawnedEventAtTerrainTag','SuccessSwitchId','opacityDelta','dNmkL','timer','EventLocationSave','VFmSb','clearCarrying','LOWER\x20RIGHT','aUGcn','HZYEZ','USER-DEFINED\x201','ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.','isDiagonalDirection','Toggle','qupoM','turnTowardPoint','VoAso','slice','left','none','SNFSn','shadowY','yhtxM','_realY','CqPBZ','ARRAYSTR','switch1Id','_eventSpawnData','isEventsMoveCoreInvisible','player','WAfmE','Dock','bwOab','setControlledFollowerID','mirror\x20vertical','startMessage','DiagonalSpeedMultiplier','uaogS','_MapSpawnedEventData','checkValidEventerMap','_cacheSystemVisible','PlayerIconDelete','ccwX','MgMsa','event','unyts','cImaB','_moveSpeed','setNumberInput','switch2Valid','moveStraight','QiygQ','attachPictureBlendMode','Step2EventId','pMQnz','CarryPose','MUSICNOTE','setImage','cwX','hQyzW','EventAutoMovement','isOnRope','_eventScreenY','Game_SelfSwitches_setValue','_periodicRefreshTimer','_PreservedEventMorphData','RfWuk','parse','bPafs','Window_EventItem_onCancel','deleteIconsOnEventsDataKey','Game_CharacterBase_increaseSteps','_stopCount','useCarryPoseForIcons','processMoveRouteSetIndex','updateEventsMoveCoreTagChanges','SPIN\x20CCW','AdvancedSwitches','vBreF','zSVTc','qnAHe','SelfVariableID','isDashingEnabled','QGCov','awjHU','setDestination','default','Game_Troop_meetsConditions','saveEventLocation','pageId','morphInto','process_VisuMZ_EventsMoveCore_Switches_Variables','WalkAllow','otder','_PlayerDiagonalSetting','SVAxh','updatePose','IevmW','JWqbN','setupCopyEvent','labelWindowText','gRbOS','DLFiY','unlockEvent','_spawnPreserved','Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a','_screenZoomScale','rSaou','Game_Followers_isVisible','FnUFP','PSzTG','ARRAYEVAL','regionList','updateText','initialize','osNkV','isAdvancedSwitch','Game_Event_meetsConditions','setMoveRoute','ALxfJ','Game_Follower_initialize','VisuMZ_Setup_Preload_Map','follower','iconHeight','checkCollisionKeywords','shift','bxgGE','isTransparent','AirshipSpeed','outlineColor','processMoveSynchApproach','591543DzZzgJ','hasStepAnime','getDirectionFromPoint','drawTextEx','tileWidth','%1DockRegionOnly','OffsetX','SPIN\x20ANTICLOCKWISE','setupEventsMoveCoreNotetags','SLEEP','Game_CharacterBase_opacity','eSNVe','ARRAYFUNC','Vehicle','ShipSpeed','Game_Event_findProperPageIndex','Game_Map_setupEvents','clearAttachPictureSettings','Step2Preserve','Game_Player_executeMove','region'];_0x54df=function(){return _0x3c33df;};return _0x54df();}function Window_EventLabel(){this['initialize'](...arguments);}Window_EventLabel[_0x4c5915(0x4ba)]=Object[_0x4c5915(0x1e3)](Window_Base['prototype']),Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x3c2)]=Window_EventLabel,Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x537)]=function(_0x4e3e41){const _0x10f254=_0x4c5915;this['_event']=_0x4e3e41;const _0x2630c6=new Rectangle(0x0,0x0,Graphics['boxWidth']/0x4,this[_0x10f254(0x401)](0x1));this['initMembers'](),Window_Base[_0x10f254(0x4ba)][_0x10f254(0x537)]['call'](this,_0x2630c6),this[_0x10f254(0x5a3)]=0x0,this[_0x10f254(0x66c)](0x2),this[_0x10f254(0x17e)]='';},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x2cb)]=function(){const _0x40cf22=_0x4c5915;this['_eventErased']=![],this[_0x40cf22(0x52f)]=$gameScreen[_0x40cf22(0x414)](),this[_0x40cf22(0x5bb)]=this['_event']['screenX'](),this[_0x40cf22(0x503)]=this[_0x40cf22(0x5e6)][_0x40cf22(0x400)](),this[_0x40cf22(0x5d7)]=this['_event'][_0x40cf22(0x3c7)]['offsetX'],this[_0x40cf22(0x480)]=this[_0x40cf22(0x5e6)][_0x40cf22(0x3c7)][_0x40cf22(0x332)],this['_eventPageIndex']=this[_0x40cf22(0x5e6)][_0x40cf22(0x3ff)],this['_cacheVisibility']=this[_0x40cf22(0x2f7)](),this[_0x40cf22(0x4ed)]=$gameSystem[_0x40cf22(0x412)](),this[_0x40cf22(0x293)]=$gamePlayer['x'],this[_0x40cf22(0x582)]=$gamePlayer['y'],this['_visibleEventX']=this[_0x40cf22(0x5e6)]['x'],this[_0x40cf22(0x13a)]=this['_event']['y'];},Window_EventLabel['prototype'][_0x4c5915(0x2de)]=function(){const _0x2c5ca8=_0x4c5915;Window_Base[_0x2c5ca8(0x4ba)][_0x2c5ca8(0x2de)][_0x2c5ca8(0x44d)](this);if(!this['needsUpdate']())return;this[_0x2c5ca8(0x536)](),this['updateScale'](),this[_0x2c5ca8(0x16a)](),this[_0x2c5ca8(0x2d0)]();},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x166)]=function(){const _0x261413=_0x4c5915;if(!this[_0x261413(0x5e6)])return![];if(!this[_0x261413(0x5e6)][_0x261413(0x3c7)])return![];if(this[_0x261413(0x234)]!==this[_0x261413(0x5e6)]['_pageIndex'])return!![];if(this[_0x261413(0x5e6)][_0x261413(0x634)]&&!this['_eventErased'])return!![];if(this[_0x261413(0x5e6)][_0x261413(0x3c7)][_0x261413(0x337)]==='')return![];if(this[_0x261413(0x52f)]!==$gameScreen[_0x261413(0x414)]())return!![];if(this[_0x261413(0x5bb)]!==this[_0x261413(0x5e6)]['screenX']())return!![];if(this['_eventScreenY']!==this['_event'][_0x261413(0x400)]())return!![];if(this[_0x261413(0x5d7)]!==this[_0x261413(0x5e6)]['_labelWindow'][_0x261413(0x4b2)])return!![];if(this[_0x261413(0x480)]!==this[_0x261413(0x5e6)][_0x261413(0x3c7)][_0x261413(0x332)])return!![];if(this[_0x261413(0x293)]!==$gamePlayer['x'])return!![];if(this[_0x261413(0x582)]!==$gamePlayer['y'])return!![];if(this[_0x261413(0x26b)]!==this[_0x261413(0x5e6)]['x'])return!![];if(this['_visibleEventY']!==this[_0x261413(0x5e6)]['y'])return!![];if(this[_0x261413(0x4ed)]!==$gameSystem[_0x261413(0x412)]())return!![];if(this['_cacheVisibility']&&this[_0x261413(0x5a3)]<0xff)return!![];if(!this[_0x261413(0x22f)]&&this['contentsOpacity']>0x0)return!![];if(SceneManager[_0x261413(0x339)][_0x261413(0x21b)]>0x0)return!![];return![];},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x536)]=function(){const _0x5486d7=_0x4c5915;this['_event']['labelWindowText']()!==this['_text']&&(this[_0x5486d7(0x17e)]=this['_event']['labelWindowText'](),this[_0x5486d7(0x476)]());},Window_EventLabel[_0x4c5915(0x4ba)]['updateScale']=function(){const _0x2d53e6=_0x4c5915;this[_0x2d53e6(0x446)]['x']=0x1/$gameScreen[_0x2d53e6(0x414)](),this['scale']['y']=0x1/$gameScreen[_0x2d53e6(0x414)](),this['_screenZoomScale']=$gameScreen[_0x2d53e6(0x414)]();},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x16a)]=function(){const _0x201e60=_0x4c5915;if(!SceneManager[_0x201e60(0x339)])return;if(!SceneManager['_scene']['_spriteset'])return;const _0x278e75=SceneManager[_0x201e60(0x339)][_0x201e60(0x5e7)][_0x201e60(0x1cc)](this[_0x201e60(0x5e6)]);if(!_0x278e75)return;this['x']=Math['round'](this['_event'][_0x201e60(0x36c)]()-Math[_0x201e60(0x3f6)](this[_0x201e60(0x2cf)]*this[_0x201e60(0x446)]['x']/0x2)),this['x']+=this[_0x201e60(0x5e6)][_0x201e60(0x3c7)][_0x201e60(0x4b2)],this['y']=this[_0x201e60(0x5e6)][_0x201e60(0x400)]()-_0x278e75[_0x201e60(0x664)],this['y']+=Math['round']($gameSystem[_0x201e60(0x41a)]()*0.5),this['y']-=Math['round'](this[_0x201e60(0x664)]*this[_0x201e60(0x446)]['y']),this['y']+=this['_event'][_0x201e60(0x3c7)]['offsetY'],this[_0x201e60(0x435)]=this[_0x201e60(0x5e6)][_0x201e60(0x634)],this[_0x201e60(0x5bb)]=this[_0x201e60(0x5e6)][_0x201e60(0x36c)](),this[_0x201e60(0x503)]=this['_event'][_0x201e60(0x400)](),this[_0x201e60(0x5d7)]=this[_0x201e60(0x5e6)][_0x201e60(0x3c7)]['offsetX'],this[_0x201e60(0x480)]=this[_0x201e60(0x5e6)][_0x201e60(0x3c7)][_0x201e60(0x332)],this[_0x201e60(0x234)]=this[_0x201e60(0x5e6)][_0x201e60(0x3ff)],this[_0x201e60(0x435)]&&('XjQmb'===_0x201e60(0x18b)?this['contentsOpacity']=0x0:(this['_pose']='',this[_0x201e60(0x266)]=0x0));},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x2d0)]=function(){const _0x30ee08=_0x4c5915;if(this[_0x30ee08(0x2f7)]())_0x30ee08(0x259)==='zLgdZ'?(_0x51f765[_0x30ee08(0x1fd)]['Game_Timer_initialize'][_0x30ee08(0x44d)](this),this[_0x30ee08(0x183)]()):this['contentsOpacity']+=this[_0x30ee08(0x66b)]();else{if(SceneManager[_0x30ee08(0x339)]['_encounterEffectDuration']>0x0){if(_0x30ee08(0x3b6)!==_0x30ee08(0x3b6))return this[_0x30ee08(0x470)]()&&!!this[_0x30ee08(0x1ca)];else this[_0x30ee08(0x5a3)]=0x0;}else this[_0x30ee08(0x5a3)]-=this['opacitySpeed']();}},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x2f7)]=function(){const _0x3dc2a3=_0x4c5915;if(!$gameSystem[_0x3dc2a3(0x412)]())return![];if(this[_0x3dc2a3(0x5e6)]?.['_erased'])return![];if(SceneManager[_0x3dc2a3(0x339)][_0x3dc2a3(0x21b)]>0x0)return![];const _0x4813e9=$gamePlayer['x'],_0x192dca=$gamePlayer['y'],_0x3cb7a8=this[_0x3dc2a3(0x5e6)]['x'],_0x57793c=this['_event']['y'];if(this[_0x3dc2a3(0x293)]===_0x4813e9&&this[_0x3dc2a3(0x582)]===_0x192dca&&this[_0x3dc2a3(0x26b)]===_0x3cb7a8&&this['_visibleEventY']===_0x57793c)return this[_0x3dc2a3(0x22f)];this[_0x3dc2a3(0x293)]=$gamePlayer['x'],this[_0x3dc2a3(0x582)]=$gamePlayer['y'],this[_0x3dc2a3(0x26b)]=this[_0x3dc2a3(0x5e6)]['x'],this[_0x3dc2a3(0x13a)]=this[_0x3dc2a3(0x5e6)]['y'];if($gameMap['absDistance'](_0x4813e9,_0x192dca,_0x3cb7a8,_0x57793c)>this[_0x3dc2a3(0x5e6)]['labelWindowRange']())return this[_0x3dc2a3(0x22f)]=![],![];return this['_cacheVisibility']=!![],!![];},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x66b)]=function(){const _0x2b8f98=_0x4c5915;return VisuMZ['EventsMoveCore'][_0x2b8f98(0x64c)][_0x2b8f98(0x274)][_0x2b8f98(0x377)];},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x1d9)]=function(){const _0x2a09de=_0x4c5915,_0x301fdf=this['textSizeEx'](this[_0x2a09de(0x17e)]);this['width']=_0x301fdf[_0x2a09de(0x2cf)]+($gameSystem['windowPadding']()+this['itemPadding']())*0x2,this[_0x2a09de(0x664)]=Math[_0x2a09de(0x2a4)](this[_0x2a09de(0x57a)](),_0x301fdf[_0x2a09de(0x664)])+$gameSystem[_0x2a09de(0x41a)]()*0x2,this['createContents']();},Window_EventLabel[_0x4c5915(0x4ba)]['lineHeight']=function(){const _0x49790b=_0x4c5915;return VisuMZ['EventsMoveCore']['Settings'][_0x49790b(0x274)][_0x49790b(0x5cd)];},Window_EventLabel['prototype'][_0x4c5915(0x2ef)]=function(){const _0x30fcb2=_0x4c5915;Window_Base[_0x30fcb2(0x4ba)]['resetFontSettings'][_0x30fcb2(0x44d)](this),this[_0x30fcb2(0x45f)][_0x30fcb2(0x2d5)]=this[_0x30fcb2(0x3af)]();},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x3af)]=function(){const _0xb37ff9=_0x4c5915;return VisuMZ[_0xb37ff9(0x1fd)][_0xb37ff9(0x64c)]['Label'][_0xb37ff9(0x3a4)];},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x476)]=function(){const _0x5faa2e=_0x4c5915;this[_0x5faa2e(0x1d9)](),this['contents'][_0x5faa2e(0x297)]();const _0x2129f8=this[_0x5faa2e(0x17e)][_0x5faa2e(0x4a1)](/[\r\n]+/);let _0x5254eb=0x0;for(const _0x1209a6 of _0x2129f8){if(_0x5faa2e(0x619)!==_0x5faa2e(0x625)){const _0x4ab0f5=this[_0x5faa2e(0x132)](_0x1209a6),_0x496094=Math[_0x5faa2e(0x3f6)]((this[_0x5faa2e(0x1ee)]-_0x4ab0f5[_0x5faa2e(0x2cf)])/0x2);this[_0x5faa2e(0x54b)](_0x1209a6,_0x496094,_0x5254eb),_0x5254eb+=_0x4ab0f5['height'];}else{let _0x325185=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'[_0x5faa2e(0x313)](_0x499404,_0x42b407)];return _0xe12e7c[_0x5faa2e(0x666)](_0x325185);}}},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x39a)]=function(_0x4d108f,_0x2380f3){const _0x482d15=_0x4c5915;_0x2380f3[_0x482d15(0x2e3)]&&this[_0x482d15(0x19a)](_0x4d108f,_0x2380f3['x']+0x2,_0x2380f3['y']),_0x2380f3['x']+=Math[_0x482d15(0x3a2)](this['iconSize'](),ImageManager[_0x482d15(0x13b)])+0x4;},Window_EventLabel['prototype'][_0x4c5915(0x19a)]=function(_0x26cbda,_0x48410f,_0x251ece){const _0x3f44c0=_0x4c5915,_0x3a869d=ImageManager[_0x3f44c0(0x3b3)](_0x3f44c0(0x3d0)),_0x5b926c=ImageManager[_0x3f44c0(0x13b)],_0x4ca1e0=ImageManager[_0x3f44c0(0x540)],_0x200980=_0x26cbda%0x10*_0x5b926c,_0x56dc99=Math[_0x3f44c0(0x3f6)](_0x26cbda/0x10)*_0x4ca1e0,_0x4ebeab=Math[_0x3f44c0(0x3a2)](this['iconSize']()),_0xe74040=Math[_0x3f44c0(0x3a2)](this[_0x3f44c0(0x560)]());this[_0x3f44c0(0x45f)][_0x3f44c0(0x2a1)](_0x3a869d,_0x200980,_0x56dc99,_0x5b926c,_0x4ca1e0,_0x48410f,_0x251ece,_0x4ebeab,_0xe74040);},Window_EventLabel[_0x4c5915(0x4ba)][_0x4c5915(0x560)]=function(){const _0x17886e=_0x4c5915;return VisuMZ[_0x17886e(0x1fd)][_0x17886e(0x64c)][_0x17886e(0x274)][_0x17886e(0x46c)];};