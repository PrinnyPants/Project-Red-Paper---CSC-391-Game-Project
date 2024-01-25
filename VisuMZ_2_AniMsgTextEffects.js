//=============================================================================
// VisuStella MZ - Animated Message Text Effects
// VisuMZ_2_AniMsgTextEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_AniMsgTextEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.AniMsgTextEffects = VisuMZ.AniMsgTextEffects || {};
VisuMZ.AniMsgTextEffects.version = 0.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 0.01] [AniMsgTextEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Main_Page
 * @base VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_MessageCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Ever wanted to animate the text that appears in your Message Window in order
 * to add just a bit more character to their lines? Perhaps a stagger effect or
 * a shivering effect? Maybe a swinging effect like a pendulum or a glowing
 * effect for a specific color? This plugin comes with a plethora of text
 * effects to pick and use from in addition to letting you create your very own
 * custom text effects through the Plugin Parameters and just by adjusting the
 * various effect properties.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Animate text shown in the Message Window with more than 40+ number of
 *   custom text effects with many having three different variations each.
 * * Add in your own custom text effects or modify existing text effects. There
 *   is an endless number of custom text effects you can add.
 * * Options command for players to turn on/off Message Text Effects in case
 *   the text effects may interfere with their ability to read.
 * * Angle-type text effects will sway back and forth by the angle or
 *   constantly spin in a certain direction.
 * * Color-type text effects will allow for hue shifts or color tone patterns
 *   to be applied to your message text.
 * * Opacity-type text effects can cause the opacity of a letter to fade in/out
 *   and/or use custom opacity patterns that can also be used to determine
 *   fade level.
 * * Positioning-type text effects can shake randomly in specified directions
 *   or move back and forth for specified directions in a wave.
 * * Scaling-type text effects can flip to its front and back sides or grow
 *   and shrink in size by a certain amount like a pulse.
 * * You can combine text effects with one another as long as they are of
 *   different types.
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
 * * VisuMZ_1_MessageCore
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
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin.
 * 
 * While the \Effect<name> part of the text code is hardcoded, the actual
 * settings for each of the text effect types can be modified through the
 * Plugin Parameters.
 * 
 * These Text Effects can ONLY be used for the Message Window and nothing else.
 * Everything else will have the text be displayed normally.
 * 
 * ---
 *
 * === General Text Effect-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Animated Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<name>          Changes the text effect to "name" where "name" is
 *                        based on the Plugin Parameter "Name" setting. The
 *                        text effect will then be applied to regular text
 *                        characters and icons. Other visual text code graphics
 *                        won't have custom text effects applied to them.
 * 
 * \Effect<Normal>        Returns the text effect type to "normal". No shaking,
 *                        angle changing, etc. effects will be seen. Just plain
 *                        old normal text.
 * 
 * <Clear Effect>         Same as \Effect<Normal> as it will return the text
 *                        effect type to "normal". There are no differences
 *                        between usage as it is up to personal preference on
 *                        which you want to use.
 * 
 * ---
 *
 * === Angle-Type Text Effect-Related Text Codes ===
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Pendulum-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Swing>         Angle of letters swing uniformly back and forth.
 * \Effect<SlowSwing>     Slower version of "Swing" text effect.
 * \Effect<FastSwing>     Faster version of "Swing" text effect.
 * 
 * \Effect<Wag>           Angle of letters swing in a sequence back and forth.
 * \Effect<SlowWag>       Slower version of "Wag" text effect.
 * \Effect<FastWag>       Faster version of "Wag" text effect.
 * 
 * \Effect<Jelly>         Angle and position move back and forth in a sequence.
 * \Effect<SlowJelly>     Slower version of "Jelly" text effect.
 * \Effect<FastJelly>     Faster version of "Jelly" text effect.
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Rotation-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<SpinCW>        Letters rotate clockwise uniformly.
 * \Effect<SlowSpinCW>    Slower version of "SpinCW" text effect.
 * \Effect<FastSpinCW>    Faster version of "SpinCW" text effect.
 * 
 * \Effect<SpinCCW>       Letters rotate counter-clockwise uniformly.
 * \Effect<SlowSpinCCW>   Slower version of "SpinCCW" text effect.
 * \Effect<FastSpinCCW>   Faster version of "SpinCCW" text effect.
 * 
 * \Effect<RollCW>        Letters rotate clockwise in a sequence.
 * \Effect<SlowRollCW>    Slower version of "RollCW" text effect.
 * \Effect<FastRollCW>    Faster version of "RollCW" text effect.
 * 
 * \Effect<RollCCW>       Letters rotate counter-clockwise in a sequence.
 * \Effect<SlowRollCCW>   Slower version of "RollCCW" text effect.
 * \Effect<FastRollCCW>   Faster version of "RollCCW" text effect.
 * 
 * ---
 *
 * === Color-Type Text Effect-Related Text Codes ===
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Hue-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Prism>         Letters will hue shift uniformly.
 * \Effect<SlowPrism>     Slower version of "Prism" text effect.
 * \Effect<FastPrism>     Faster version of "Prism" text effect.
 * 
 * \Effect<Rainbow>       Letters will hue shift in a sequence.
 * \Effect<SlowRainbow>   Slower version of "Rainbow" text effect.
 * \Effect<FastRainbow>   Faster version of "Rainbow" text effect.
 * 
 * \Effect<Gamer>         Letters will hue shift in a stagger.
 * \Effect<SlowGamer>     Slower version of "Gamer" text effect.
 * \Effect<FastGamer>     Faster version of "Gamer" text effect.
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Tone-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Red>           A static red tone on the text.
 * \Effect<SoftRed>       Smoothly transition red tone on the text.
 * \Effect<HardRed>       Instant transition red tone on the text.
 * 
 * \Effect<Green>         A static green tone on the text.
 * \Effect<SoftGreen>     Smoothly transition green tone on the text.
 * \Effect<HardGreen>     Instant transition green tone on the text.
 * 
 * \Effect<Blue>          A static blue tone on the text.
 * \Effect<SoftBlue>      Smoothly transition blue tone on the text.
 * \Effect<HardBlue>      Instant transition blue tone on the text.
 * 
 * \Effect<Yellow>        A static yellow tone on the text.
 * \Effect<SoftYellow>    Smoothly transition yellow tone on the text.
 * \Effect<HardYellow>    Instant transition yellow tone on the text.
 * 
 * \Effect<Cyan>          A static cyan tone on the text.
 * \Effect<SoftCyan>      Smoothly transition cyan tone on the text.
 * \Effect<HardCyan>      Instant transition cyan tone on the text.
 * 
 * \Effect<Magenta>       A static magenta tone on the text.
 * \Effect<SoftMagenta>   Smoothly transition magenta tone on the text.
 * \Effect<HardMagenta>   Instant transition magenta tone on the text.
 * 
 * \Effect<RGB>           Smooth shifting RGB tones in a sequence.
 * \Effect<SlowRGB>       Slower version of "RGB" text effect.
 * \Effect<FastRGB>       Faster version of "RGB" text effect.
 * 
 * \Effect<Fes>           Instant shifting Red/Green tones in a sequence.
 * \Effect<SlowFes>       Slower version of "Fes" text effect.
 * \Effect<FastFes>       Faster version of "Fes" text effect.
 * 
 * \Effect<Gig>           Smooth shifting base tones in a sequence.
 * \Effect<SlowGig>       Slower version of "Gig" text effect.
 * \Effect<FastGig>       Faster version of "Gig" text effect.
 * 
 * ---
 *
 * === Opacity-Type Text Effect-Related Text Codes ===
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Glow-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Glow>          Letters fade in and out uniformly.
 * \Effect<SlowGlow>      Slower version of "Glow" text effect.
 * \Effect<FastGlow>      Faster version of "Glow" text effect.
 * 
 * \Effect<Flow>          Letters fade in and out in a sequence.
 * \Effect<SlowFlow>      Slower version of "Flow" text effect.
 * \Effect<FastFlow>      Faster version of "Flow" text effect.
 * 
 * \Effect<Blink>         Letters blink in and out in a stagger.
 * \Effect<SlowBlink>     Slower version of "Blink" text effect.
 * \Effect<FastBlink>     Faster version of "Blink" text effect.
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Pattern-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Campfire>      A specified blinking light pattern for letters.
 * \Effect<Candle>        A specified blinking light pattern for letters.
 * \Effect<Fade>          A specified blinking light pattern for letters.
 * \Effect<Flicker>       A specified blinking light pattern for letters.
 * \Effect<Fluorescent>   A specified blinking light pattern for letters.
 * \Effect<Halogen>       A specified blinking light pattern for letters.
 * \Effect<Strobe>        A specified blinking light pattern for letters.
 * \Effect<Torch>         A specified blinking light pattern for letters.
 * \Effect<Underwater>    A specified blinking light pattern for letters.
 * 
 * ---
 *
 * === Position-Type Text Effect-Related Text Codes ===
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Frantic-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Shake>         Shakes frantically and randomly in any direction.
 * \Effect<SoftShake>     Less frantic version of "Shake" text effect.
 * \Effect<HardShake>     More frantic version of "Shake" text effect.
 * 
 * \Effect<Shiver>        Shivers frantically in the left/right direction.
 * \Effect<SoftShiver>    Less frantic version of "Shiver" text effect.
 * \Effect<HardShiver>    More frantic version of "Shiver" text effect.
 * 
 * \Effect<Vibe>          Vibrates frantically in the up/down direction.
 * \Effect<SoftVibe>      Less frantic version of "Vibe" text effect.
 * \Effect<HardVibe>      More frantic version of "Vibe" text effect.
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Wave-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Stagger>       Moves with letters staggered up and down.
 * \Effect<SlowStagger>   Slower version of "Stagger" text effect.
 * \Effect<FastStagger>   Faster version of "Stagger" text effect.
 * 
 * \Effect<Saw>           Moves uniformly left and right.
 * \Effect<SlowSaw>       Slower version of "Saw" text effect.
 * \Effect<FastSaw>       Faster version of "Saw" text effect.
 * 
 * \Effect<Bounce>        Moves uniformly up and down.
 * \Effect<SlowBounce>    Slower version of "Bounce" text effect.
 * \Effect<FastBounce>    Faster version of "Bounce" text effect.
 * 
 * \Effect<Wave>          Waves by letter in all directions.
 * \Effect<SlowWave>      Slower version of "Wave" text effect.
 * \Effect<FastWave>      Faster version of "Wave" text effect.
 * 
 * \Effect<HorzWave>      Waves by letter in horizontal direction.
 * \Effect<SlowHorzWave>  Slower version of "HorzWave" text effect.
 * \Effect<FastHorzWave>  Faster version of "HorzWave" text effect.
 * 
 * \Effect<VertWave>      Waves by letter in vertical direction.
 * \Effect<SlowVertWave>  Slower version of "VertWave" text effect.
 * \Effect<FastVertWave>  Faster version of "VertWave" text effect.
 * 
 * ---
 *
 * === Scaling-Type Text Effect-Related Text Codes ===
 * 
 * ---
 * 
 * ----------------------   ---------------------------------------------------
 * Text Code                Flip-Subtype Text Effect (Message Window Only)
 * ----------------------   ---------------------------------------------------
 * 
 * \Effect<HorzCard>        Horizontally uniform flipping effect.
 * \Effect<SlowHorzCard>    Slower version of "HorzCard" text effect.
 * \Effect<FastHorzCard>    Faster version of "HorzCard" text effect.
 * 
 * \Effect<VertCard>        Vertically uniform flipping effect.
 * \Effect<SlowVertCard>    Slower version of "VertCard" text effect.
 * \Effect<FastVertCard>    Faster version of "VertCard" text effect.
 * 
 * \Effect<HorzRibbon>      Horizontally folding flipping effect.
 * \Effect<SlowHorzRibbon>  Slower version of "HorzRibbon" text effect.
 * \Effect<FastHorzRibbon>  Faster version of "HorzRibbon" text effect.
 * 
 * \Effect<VertRibbon>      Vertically folding flipping effect.
 * \Effect<SlowVertRibbon>  Slower version of "VertRibbon" text effect.
 * \Effect<FastVertRibbon>  Faster version of "VertRibbon" text effect.
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Pulse-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Pulse>         Letters grow bigger and smaller uniformly.
 * \Effect<SmallPulse>    Smaller version of "Pulse" text effect.
 * \Effect<BigPulse>      Larger version of "Pulse" text effect.
 * 
 * \Effect<Jiggle>        Letters grow bigger and smaller in a sequence.
 * \Effect<SmallJiggle>   Smaller version of "Jiggle" text effect.
 * \Effect<BigJiggle>     Larger version of "Jiggle" text effect.
 * 
 * \Effect<Gooey>         Letters grow bigger and smaller in a stretched form.
 * \Effect<SmallGooey>    Smaller version of "Gooey" text effect.
 * \Effect<BigGooey>      Larger version of "Gooey" text effect.
 * 
 * ---
 * 
 * === Combining Text Effects ===
 * 
 * ---
 * 
 * \Effect<type, type>
 * \Effect<type, type, type>
 * \Effect<type, type, type, type>
 * \Effect<type, type, type, type, type>
 * 
 * You can combine text effects with one another provided that they are of
 * different types (NOT subtypes). What this means is you can pick an
 * angle-type text effect, combine it with a color-type text effect along with
 * something like a positioning-type text effect and produce results.
 * 
 * You cannot combine same types together such as a positioning-type with
 * another positioning type.
 * 
 * Examples:
 * 
 * \Effect<Swing, Rainbow>
 * \Effect<Wag, Flow, HorzWave>
 * \Effect<Jelly, Shiver, HorzCard>
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Angle Effects Settings
 * ============================================================================
 *
 * Setup the various settings for angle-type Text Effects here.
 *
 * ---
 *
 * General
 * 
 *   Name:
 *   - UNIQUE name of this message text effect type.
 *   - Used in place of 'name' in \Effect<name> for text codes.
 *
 * ---
 * 
 * Angles > Pendulum Effect
 * 
 *   Arc Size:
 *   - What is the pendulum arc size?
 * 
 *   Speed Modifier:
 *   - Arc speed rate for pendulum effect.
 * 
 *   Offset Modifier:
 *   - Arc offset modifier for pendulum effect.
 * 
 * ---
 * 
 * Angles > Rotation Effect
 * 
 *   Speed Modifier:
 *   - Speed to determine many angles will rotate per frame.
 * 
 *   Offset Modifier:
 *   - Initial angle offset modifier for rotation effect.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Effects Settings
 * ============================================================================
 *
 * Setup the various settings for color-type Text Effects here.
 *
 * ---
 *
 * General
 * 
 *   Name:
 *   - UNIQUE name of this message text effect type.
 *   - Used in place of 'name' in \Effect<name> for text codes.
 *
 * ---
 *
 * Color
 * 
 *   Forced Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *   - Leave empty to not use.
 * 
 * ---
 * 
 * Color > Hue Change Effect
 * 
 *   Hue Shift:
 *   - Shift hue by how much each frame?
 * 
 *   Offset Modifier:
 *   - Initial hue offset modifier for hue shift.
 * 
 * ---
 * 
 * Color > Tone Effect
 * 
 *   Color Tone(s):
 *   - What tone(s) do you want for the letters?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Frame Delay:
 *   - What is the frame delay between tone changes?
 * 
 *   Offset Modifier:
 *   - Initial tone offset modifier for tone change.
 * 
 *   Smooth Transition?:
 *   - Make a smooth transition for tone changes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Opacity Effects Settings
 * ============================================================================
 *
 * Setup the various settings for opacity-type Text Effects here.
 *
 * ---
 *
 * General
 * 
 *   Name:
 *   - UNIQUE name of this message text effect type.
 *   - Used in place of 'name' in \Effect<name> for text codes.
 *
 * ---
 * 
 * Opacity
 * 
 *   Base Opacity:
 *   - What is the starting opacity value?
 * 
 * ---
 * 
 * Opacity > Glow Effect
 * 
 *   Glow Rate:
 *   - What is the glow change for this effect?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Glow Speed:
 *   - What is the speed at which glow oscillates at?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Offset Modifier:
 *   - Initial opacity offset modifier for glow effect.
 * 
 * ---
 * 
 * Opacity > Intensity Pattern
 * 
 *   Custom Pattern:
 *   - Create a custom pattern with letters from a to z.
 *   - Where 'a' is transparent and 'z' is opaque.
 * 
 *   Frame Delay:
 *   - What is the frame delay between pattern updates?
 * 
 *   Offset Modifier:
 *   - Initial opacity offset modifier for pattern effect.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Positioning Effects Settings
 * ============================================================================
 *
 * Setup the various settings for positioning-type Text Effects here.
 *
 * ---
 *
 * General
 * 
 *   Name:
 *   - UNIQUE name of this message text effect type.
 *   - Used in place of 'name' in \Effect<name> for text codes.
 *
 * ---
 *
 * Positioning > Wave (Horz) Effect
 * 
 *   Distance:
 *   - Horizontal distance for wave effect.
 * 
 *   Speed Modifier:
 *   - Horizontal speed rate for wave effect.
 * 
 *   Offset Modifier:
 *   - Horizontal offset modifier for wave effect.
 * 
 * ---
 * 
 * Positioning > Wave (Vert) Effect
 * 
 *   Distance:
 *   - Vertical distance for wave effect.
 * 
 *   Speed Modifier:
 *   - Vertical speed rate for wave effect.
 * 
 *   Offset Modifier:
 *   - Vertical offset modifier for wave effect.
 * 
 * ---
 *
 * Positioning > Frantic Effect
 * 
 *   Horz Strength:
 *   - Horizontal frantic randomization strength.
 *   - Determines random horizontal position for frantic effect.
 * 
 *   Vert Strength:
 *   - Vertical frantic randomization strength.
 *   - Determines random vertical position for frantic effect.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Scaling Effects Settings
 * ============================================================================
 *
 * Setup the various settings for scaling-type Text Effects here.
 *
 * ---
 *
 * General
 * 
 *   Name:
 *   - UNIQUE name of this message text effect type.
 *   - Used in place of 'name' in \Effect<name> for text codes.
 *
 * ---
 * 
 * Scaling > Flip (Horz) Effect
 * 
 *   Speed Modifier:
 *   - Horizontal speed rate for flip effect.
 * 
 *   Offset Modifier:
 *   - Horizontal offset modifier for flip effect.
 * 
 * ---
 * 
 * Scaling > Flip (Vert) Effect
 * 
 *   Speed Modifier:
 *   - Vertical speed rate for flip effect.
 * 
 *   Offset Modifier:
 *   - Vertical offset modifier for flip effect.
 * 
 * ---
 * 
 * Scaling > Pulse (Horz) Effect
 * 
 *   Growth:
 *   - Horizontal growth pulse effect.
 * 
 *   Speed Modifier:
 *   - Horizontal speed rate for pulse effect.
 * 
 *   Offset Modifier:
 *   - Horizontal offset modifier for pulse effect.
 * 
 * ---
 * 
 * Scaling > Pulse (Vert) Effect
 * 
 *   Growth:
 *   - Vertical growth pulse effect.
 * 
 *   Speed Modifier:
 *   - Vertical speed rate for pulse effect.
 * 
 *   Offset Modifier:
 *   - Vertical offset modifier for pulse effect.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * Options settings for Animated Message Text Effects.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Animated Text Effects' option to the Options menu?
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
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.00 Official Release Date: XXXX, 2022
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
 * @param AniMsgTextEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param TextEffects
 * @text Text Effect Settings
 *
 * @param AngleEffects:arraystruct
 * @text Angle Effects
 * @parent TextEffects
 * @type struct<AngleEffect>[]
 * @desc Setup the various settings for angle-type Text Effects here.
 * @default ["{\"Name:str\":\"Swing\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.25\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SlowSwing\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.10\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"FastSwing\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.40\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"Wag\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.25\",\"PendulumOffset:num\":\"8\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SlowWag\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.10\",\"PendulumOffset:num\":\"8\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"FastWag\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.40\",\"PendulumOffset:num\":\"8\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"Jelly\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.25\",\"PendulumOffset:num\":\"15\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SlowJelly\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.10\",\"PendulumOffset:num\":\"15\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"FastJelly\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.40\",\"PendulumOffset:num\":\"12\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SpinCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-2.4\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SlowSpinCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-1.8\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"FastSpinCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-3.6\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SpinCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+2.4\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SlowSpinCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+1.8\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"FastSpinCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+3.6\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"RollCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-2.4\",\"RotationOffset:num\":\"-12\"}","{\"Name:str\":\"SlowRollCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-1.8\",\"RotationOffset:num\":\"-9\"}","{\"Name:str\":\"FastRollCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-3.6\",\"RotationOffset:num\":\"-15\"}","{\"Name:str\":\"RollCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+2.4\",\"RotationOffset:num\":\"12\"}","{\"Name:str\":\"SlowRollCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+1.8\",\"RotationOffset:num\":\"9\"}","{\"Name:str\":\"FastRollCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+3.6\",\"RotationOffset:num\":\"15\"}"]
 *
 * @param ColorEffects:arraystruct
 * @text Color Effects
 * @parent TextEffects
 * @type struct<ColorEffect>[]
 * @desc Setup the various settings for color-type Text Effects here.
 * @default ["{\"Name:str\":\"Prism\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-6\",\"InitialHueOffset:num\":\"0\"}","{\"Name:str\":\"SlowPrism\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-3\",\"InitialHueOffset:num\":\"0\"}","{\"Name:str\":\"FastPrism\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-9\",\"InitialHueOffset:num\":\"0\"}","{\"Name:str\":\"Rainbow\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-6\",\"InitialHueOffset:num\":\"36\"}","{\"Name:str\":\"SlowRainbow\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-3\",\"InitialHueOffset:num\":\"36\"}","{\"Name:str\":\"FastRainbow\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-9\",\"InitialHueOffset:num\":\"36\"}","{\"Name:str\":\"Gamer\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-6\",\"InitialHueOffset:num\":\"-216\"}","{\"Name:str\":\"SlowGamer\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-3\",\"InitialHueOffset:num\":\"-216\"}","{\"Name:str\":\"FastGamer\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-9\",\"InitialHueOffset:num\":\"-216\"}","{\"Name:str\":\"Red\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftRed\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardRed\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Green\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftGreen\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardGreen\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Blue\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftBlue\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 0, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardBlue\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 0, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Yellow\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 255, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftYellow\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 255, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardYellow\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 255, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Cyan\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 255, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftCyan\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardCyan\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Magenta\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftMagenta\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardMagenta\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"RGB\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[255, 255, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 255, 255, 0]\\\",\\\"[0, 0, 255, 0]\\\",\\\"[255, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"20\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"SlowRGB\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[255, 255, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 255, 255, 0]\\\",\\\"[0, 0, 255, 0]\\\",\\\"[255, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"FastRGB\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[255, 255, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 255, 255, 0]\\\",\\\"[0, 0, 255, 0]\\\",\\\"[255, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"10\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"Fes\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\"]\",\"toneDelay:num\":\"20\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SlowFes\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"FastFes\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\"]\",\"toneDelay:num\":\"10\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Gig\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"20\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"SlowGig\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"FastGig\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"10\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}"]
 *
 * @param OpacityEffects:arraystruct
 * @text Opacity Effects
 * @parent TextEffects
 * @type struct<OpacityEffect>[]
 * @desc Setup the various settings for opacity-type Text Effects here.
 * @default ["{\"Name:str\":\"Glow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.25\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"SlowGlow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.10\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"FastGlow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.40\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Flow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.25\",\"glowOffset:num\":\"2\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"SlowFlow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.10\",\"glowOffset:num\":\"2\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"FastFlow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.40\",\"glowOffset:num\":\"2\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Blink\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.25\",\"glowOffset:num\":\"15\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"SlowBlink\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.10\",\"glowOffset:num\":\"30\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"FastBlink\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.40\",\"glowOffset:num\":\"8\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Campfire\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmmaaammmaaammmabcdefaaaammmmabcdefmmmaaaa\",\"patternDelay:num\":\"2\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Candle\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmmmmaaaaammmmmaaaaaabcdefgabcdefg\",\"patternDelay:num\":\"2\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Fade\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"abcdefghijklmnopqrrqponmlkjihgfedcba\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Flicker\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"nmonqnmomnmomomno\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Fluorescent\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmamammmmammamamaaamammma\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Halogen\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmnmmommommnonmmonqnmmo\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Strobe\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mamamamamama\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Torch\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmmaaaabcdefgmmmmaaaammmaamm\",\"patternDelay:num\":\"2\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Underwater\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmnnmmnnnmmnn\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}"]
 *
 * @param PositionEffects:arraystruct
 * @text Positioning Effects
 * @parent TextEffects
 * @type struct<PositionEffect>[]
 * @desc Setup the various settings for color-type Text Effects here.
 * @default ["{\"Name:str\":\"Shake\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"2\",\"ShakeStrengthVert:num\":\"2\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SoftShake\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"1\",\"ShakeStrengthVert:num\":\"1\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"HardShake\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"3\",\"ShakeStrengthVert:num\":\"3\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"Shiver\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"2\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SoftShiver\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"1\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"HardShiver\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"3\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"Vibe\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"2\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SoftVibe\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"1\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"HardVibe\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"3\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"Stagger\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"4\",\"WaveSpeedY:num\":\"0.25\",\"WaveOffsetY:num\":\"15\"}","{\"Name:str\":\"SlowStagger\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"4\",\"WaveSpeedY:num\":\"0.10\",\"WaveOffsetY:num\":\"30\"}","{\"Name:str\":\"FastStagger\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"4\",\"WaveSpeedY:num\":\"0.50\",\"WaveOffsetY:num\":\"30\"}","{\"Name:str\":\"Saw\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.25\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowSaw\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.10\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"FastSaw\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.40\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"Bounce\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.25\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowBounce\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.10\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"FastBounce\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.40\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"Wave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.25\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.25\",\"WaveOffsetY:num\":\"2\"}","{\"Name:str\":\"SlowWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.10\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.10\",\"WaveOffsetY:num\":\"2\"}","{\"Name:str\":\"FastWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.40\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.40\",\"WaveOffsetY:num\":\"2\"}","{\"Name:str\":\"HorzWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.25\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowHorzWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.10\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"FastHorzWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.40\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"VertWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.25\",\"WaveOffsetY:num\":\"2\"}","{\"Name:str\":\"SlowVertWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.10\",\"WaveOffsetY:num\":\"2\"}","{\"Name:str\":\"FastVertWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.40\",\"WaveOffsetY:num\":\"2\"}"]
 *
 * @param ScaleEffects:arraystruct
 * @text Scaling Effects
 * @parent TextEffects
 * @type struct<ScaleEffects>[]
 * @desc Setup the various settings for color-type Text Effects here.
 * @default ["{\"Name:str\":\"HorzCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.10\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowHorzCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.08\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"FastHorzCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.15\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"VertCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.10\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowVertCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.08\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"FastVertCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.15\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"HorzRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.10\",\"FlipOffsetX:num\":\"2\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowHorzRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.08\",\"FlipOffsetX:num\":\"2\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"FastHorzRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.15\",\"FlipOffsetX:num\":\"2\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"VertRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.10\",\"FlipOffsetY:num\":\"2\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowVertRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.08\",\"FlipOffsetY:num\":\"2\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"FastVertRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.15\",\"FlipOffsetY:num\":\"2\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"Pulse\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.30\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.30\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"SmallPulse\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.10\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.10\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"BigPulse\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.40\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.40\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"Jiggle\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.30\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"2\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.30\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"2\"}","{\"Name:str\":\"SmallJiggle\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.10\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"2\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.10\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"2\"}","{\"Name:str\":\"BigJiggle\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.40\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"2\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.40\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"2\"}","{\"Name:str\":\"Gooey\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.30\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"33\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"-0.30\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"33\"}","{\"Name:str\":\"SmallGooey\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.10\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"33\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"-0.10\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"33\"}","{\"Name:str\":\"BigGooey\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.40\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"33\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"-0.40\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"33\"}"]
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options settings for Animated Message Text Effects.
 * @default {"Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Effects"}
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
 * Angle Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AngleEffect:
 *
 * @param Name:str
 * @text Name
 * @desc UNIQUE name of this message text effect type.
 * Used in place of 'name' in \Effect<name> for text codes.
 * @default Untitled
 * 
 * @param Angles
 * 
 * @param Pendulum
 * @text Pendulum Effect
 * @parent Angles
 *
 * @param PendulumArc:num
 * @text Arc Size
 * @parent Pendulum
 * @type number
 * @desc What is the pendulum arc size?
 * @default 0
 *
 * @param PendulumSpeed:num
 * @text Speed Modifier
 * @parent Pendulum
 * @desc Arc speed rate for pendulum effect.
 * @default 0
 *
 * @param PendulumOffset:num
 * @text Offset Modifier
 * @parent Pendulum
 * @desc Arc offset modifier for pendulum effect.
 * @default 0
 * 
 * @param Rotation
 * @text Rotation Effect
 * @parent Angles
 *
 * @param RotationSpeed:num
 * @text Speed Modifier
 * @parent Rotation
 * @desc Speed to determine many angles will rotate per frame.
 * @default 0
 *
 * @param RotationOffset:num
 * @text Offset Modifier
 * @parent Rotation
 * @desc Initial angle offset modifier for rotation effect.
 * @default 0
 * 
 */
/* ----------------------------------------------------------------------------
 * Color Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ColorEffect:
 *
 * @param Name:str
 * @text Name
 * @desc UNIQUE name of this message text effect type.
 * Used in place of 'name' in \Effect<name> for text codes.
 * @default Untitled
 * 
 * @param Color
 *
 * @param ForcedColor:str
 * @text Forced Color
 * @parent Color
 * @desc Use #rrggbb for custom colors or regular numbers for text
 * colors from the Window Skin. Leave empty to not use.
 * @default 
 * 
 * @param Hue
 * @text Hue Change Effect
 * @parent Color
 *
 * @param HueShift:num
 * @text Hue Shift
 * @parent Hue
 * @desc Shift hue by how much each frame?
 * @default 0
 *
 * @param InitialHueOffset:num
 * @text Offset Modifier
 * @parent Hue
 * @desc Initial hue offset modifier for hue shift.
 * @default 0
 * 
 * @param Tone
 * @text Tone Effect
 * @parent Color
 *
 * @param colorTones:arrayeval
 * @text Color Tone(s)
 * @parent Tone
 * @type string[]
 * @desc What tone(s) do you want for the letters?
 * Format: [Red, Green, Blue, Gray]
 * @default []
 *
 * @param toneDelay:num
 * @text Frame Delay
 * @parent Tone
 * @type number
 * @desc What is the frame delay between tone changes?
 * @default 0
 *
 * @param InitialToneOffset:num
 * @text Offset Modifier
 * @parent Tone
 * @desc Initial tone offset modifier for tone change.
 * @default 0
 *
 * @param SmoothToneChange:eval
 * @text Smooth Transition?
 * @parent Tone
 * @type boolean
 * @on Smooth
 * @off Instant
 * @desc Make a smooth transition for tone changes?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Opacity Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OpacityEffect:
 *
 * @param Name:str
 * @text Name
 * @desc UNIQUE name of this message text effect type.
 * Used in place of 'name' in \Effect<name> for text codes.
 * @default Untitled
 * 
 * @param Opacity
 *
 * @param InitialOpacity:num
 * @text Base Opacity
 * @parent Opacity
 * @desc What is the starting opacity value?
 * @default 255
 * 
 * @param Glow
 * @text Glow Effect
 * @parent Opacity
 *
 * @param glowRate:num
 * @text Glow Rate
 * @parent Glow
 * @desc What is the glow change for this effect?
 * Use a decimal number between 0 and 1.
 * @default 0
 *
 * @param glowSpeed:num
 * @text Glow Speed
 * @parent Glow
 * @desc What is the speed at which glow oscillates at?
 * Use a decimal number between 0 and 1.
 * @default 0
 *
 * @param glowOffset:num
 * @text Offset Modifier
 * @parent Glow
 * @desc Initial opacity offset modifier for glow effect.
 * @default 0
 * 
 * @param Pattern
 * @text Intensity Pattern
 * @parent Opacity
 *
 * @param pattern:str
 * @text Custom Pattern
 * @parent Pattern
 * @desc Create a custom pattern with letters from a to z.
 * Where 'a' is transparent and 'z' is opaque.
 * @default 
 *
 * @param patternDelay:num
 * @text Frame Delay
 * @parent Pattern
 * @type number
 * @desc What is the frame delay between pattern updates?
 * @default 0
 *
 * @param patternOffset:num
 * @text Offset Modifier
 * @parent Pattern
 * @desc Initial opacity offset modifier for pattern effect.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Position Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PositionEffect:
 *
 * @param Name:str
 * @text Name
 * @desc UNIQUE name of this message text effect type.
 * Used in place of 'name' in \Effect<name> for text codes.
 * @default Untitled
 * 
 * @param Positioning
 * 
 * @param Shake
 * @text Frantic Effect
 * @parent Positioning
 *
 * @param ShakeStrengthHorz:num
 * @text Horz Strength
 * @parent Shake
 * @type number
 * @desc Horizontal frantic randomization strength.
 * Determines random horizontal position for frantic effect.
 * @default 0
 *
 * @param ShakeStrengthVert:num
 * @text Vert Strength
 * @parent Shake
 * @type number
 * @desc 
 * @default 0
 * 
 * @param WaveX
 * @text Wave (Horz) Effect
 * @parent Positioning
 *
 * @param WaveDistanceX:num
 * @text Distance
 * @parent WaveX
 * @type number
 * @desc Horizontal distance for wave effect.
 * @default 0
 *
 * @param WaveSpeedX:num
 * @text Speed Modifier
 * @parent WaveX
 * @desc Horizontal speed rate for wave effect.
 * @default 0
 *
 * @param WaveOffsetX:num
 * @text Offset Modifier
 * @parent WaveX
 * @desc Horizontal offset modifier for wave effect.
 * @default 0
 * 
 * @param WaveY
 * @text Wave (Vert) Effect
 * @parent Positioning
 *
 * @param WaveDistanceY:num
 * @text Distance
 * @parent WaveY
 * @type number
 * @desc Vertical distance for wave effect.
 * @default 0
 *
 * @param WaveSpeedY:num
 * @text Speed Modifier
 * @parent WaveY
 * @desc Vertical speed rate for wave effect.
 * @default 0
 *
 * @param WaveOffsetY:num
 * @text Offset Modifier
 * @parent WaveY
 * @desc Vertical offset modifier for wave effect.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Scaling Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScaleEffects:
 *
 * @param Name:str
 * @text Name
 * @desc UNIQUE name of this message text effect type.
 * Used in place of 'name' in \Effect<name> for text codes.
 * @default Untitled
 * 
 * @param Scaling
 * 
 * @param FlipX
 * @text Flip (Horz) Effect
 * @parent Scaling
 *
 * @param FlipSpeedX:num
 * @text Speed Modifier
 * @parent FlipX
 * @desc Horizontal speed rate for flip effect.
 * @default 0
 *
 * @param FlipOffsetX:num
 * @text Offset Modifier
 * @parent FlipX
 * @desc Horizontal offset modifier for flip effect.
 * @default 0
 * 
 * @param FlipY
 * @text Flip (Vert) Effect
 * @parent Scaling
 *
 * @param FlipSpeedY:num
 * @text Speed Modifier
 * @parent FlipY
 * @desc Vertical speed rate for flip effect.
 * @default 0
 *
 * @param FlipOffsetY:num
 * @text Offset Modifier
 * @parent FlipY
 * @desc Vertical offset modifier for flip effect.
 * @default 0
 * 
 * @param PulseX
 * @text Pulse (Horz) Effect
 * @parent Scaling
 *
 * @param PulseGrowthX:num
 * @text Growth
 * @parent PulseX
 * @desc Horizontal growth pulse effect.
 * @default 0
 *
 * @param PulseSpeedX:num
 * @text Speed Modifier
 * @parent PulseX
 * @desc Horizontal speed rate for pulse effect.
 * @default 0
 *
 * @param PulseOffsetX:num
 * @text Offset Modifier
 * @parent PulseX
 * @desc Horizontal offset modifier for pulse effect.
 * @default 0
 * 
 * @param PulseY
 * @text Pulse (Vert) Effect
 * @parent Scaling
 *
 * @param PulseGrowthY:num
 * @text Growth
 * @parent PulseY
 * @desc Vertical growth pulse effect.
 * @default 0
 *
 * @param PulseSpeedY:num
 * @text Speed Modifier
 * @parent PulseY
 * @desc Vertical speed rate for pulse effect.
 * @default 0
 *
 * @param PulseOffsetY:num
 * @text Offset Modifier
 * @parent PulseY
 * @desc Vertical offset modifier for pulse effect.
 * @default 0
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
 * @desc Add the 'Text Effects' option to the Options menu?
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
 * @default Text Effects
 *
 */
//=============================================================================

const _0x29b228=_0x232c;(function(_0x2ceaed,_0x2f3898){const _0x20576d=_0x232c,_0x443bda=_0x2ceaed();while(!![]){try{const _0x22f08c=parseInt(_0x20576d(0x29e))/0x1*(-parseInt(_0x20576d(0x1cd))/0x2)+parseInt(_0x20576d(0x257))/0x3*(-parseInt(_0x20576d(0x274))/0x4)+parseInt(_0x20576d(0x271))/0x5+-parseInt(_0x20576d(0x1c4))/0x6*(-parseInt(_0x20576d(0x202))/0x7)+-parseInt(_0x20576d(0x2a7))/0x8*(parseInt(_0x20576d(0x1f8))/0x9)+parseInt(_0x20576d(0x216))/0xa*(-parseInt(_0x20576d(0x2aa))/0xb)+parseInt(_0x20576d(0x232))/0xc;if(_0x22f08c===_0x2f3898)break;else _0x443bda['push'](_0x443bda['shift']());}catch(_0x221f63){_0x443bda['push'](_0x443bda['shift']());}}}(_0x2a12,0x4661b));var label='AniMsgTextEffects',tier=tier||0x0,dependencies=[_0x29b228(0x25f)],pluginData=$plugins[_0x29b228(0x276)](function(_0x5118ce){const _0x581d65=_0x29b228;return _0x5118ce[_0x581d65(0x211)]&&_0x5118ce[_0x581d65(0x273)][_0x581d65(0x23a)]('['+label+']');})[0x0];function _0x2a12(){const _0x256f3e=['trim','_baseScale','367650WRjUJo','parameters','description','831004yVUwXe','_messageWindow','filter','floor','buffer','KkUlQ','Scene_Boot_onDatabaseLoaded','_flipScaleX','open','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Window_Message_preFlushTextState','createBitmap','toLowerCase','setHue','applyColorModifiers','pattern','ARRAYFUNC','map','cos','updateOpacityPatternEffect','addCommand','updateHueShift','WaveDistanceX','updatePulseX','OpBIZ','xurgY','PendulumSpeed','KhDqy','setupLocation','toneDelay','_msgWindow','_targetOpacity','obtainEscapeString','_toneIndex','Options','WaveSpeedX','format','Effects','angle','fontBold','addTemplatetextEffectsCommand','feNRz','223609YsqxXB','ForcedColor','JSON','updateRandomShake','eNGdF','cpbml','applyScaleModifiers','ConvertParams','replace','6544vKoSoe','processEscapeCharacter','updateScaleEffects','20966kxxdNo','height','updateFlipX','JMLXl','EFFECT','updateGlowEffect','_hueValue','ConfigManager_applyData','clamp','setupColorModifiers','_textState','RotationOffset','updatePulseY','vHbJA','VzbUp','name','iconWidth','postFlushTextState','_textEffect','frameCount','2929194kfFhNC','textEffects','preFlushTextState','convertTextEffectEscapeCodes','patternDelay','_pulseScaleY','children','EVAL','length','2qXHqRI','ARRAYSTR','Window_Message_initMembers','stringify','createAllWindows','vngey','processDrawIcon','PulseSpeedX','setColorTone','_pulseScaleX','ARRAYEVAL','AXlEv','updatePositionEffects','ozmWT','parse','IQovO','PulseOffsetX','charCodeAt','diEej','_flipScaleY','opacity','log','updateAngleEffects','constructor','WxCCF','ShakeStrengthVert','DQVFL','create','processDrawIconTextEffect','fontItalic','iconHeight','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ARRAYJSON','GPZvR','_textWidth','bitmap','RotationSpeed','FUNC','show','updateColorEffects','glowRate','Window_Base_processDrawIcon','newPage','5661cORalS','hMMMJ','applyOpacityModifiers','onDatabaseLoaded','exit','PulseSpeedY','AniMsgTextEffects','patternOffset','ConfigManager_makeData','readFlag','7omleNS','Window_Message','updateFlipY','untitled','Window_Message_open','ColorEffects','_textEffectData','FlipSpeedX','setTextEffectContainer','_textEffectReturnState','WaveDistanceY','hide','updateOpacityEffects','kalAb','textWidth','status','setupOpacityModifiers','AddOption','Window_Base_preConvertEscapeCharacters','addChild','740wPETkY','createAniMsgTextEffectsContainer','Window_Message_newPage','Window_Message_close','_offset','addTextEffectsCommands','XRyZr','updateToneShift','createEffectData','outlineWidth','obtainEscapeParam','initMembers','FlipOffsetY','round','PulseOffsetY','clearTextEffects','WaveSpeedY','initialize','playMessageSound','effectData','addGeneralOptions','ARRAYNUM','_AniMsgTextEffectsContainer','setupScaleModifiers','setFrame','split','updateRotationAngle','PendulumArc','12254772hQCAaL','preConvertEscapeCharacters','_pendulumAngle','eXOdT','_patternIndex','createIconBitmap','STR','removeChild','includes','HueShift','randomInt','Window_Message_processEscapeCharacter','gFcsI','applyData','loadSystem','CrJpY','padding','glowOffset','max','updateOriginPosition','Window_Message_postFlushTextState','PositionEffects','createTextBitmap','drawText','updateWaveY','clone','updatePendulumnAngle','Name','applyAngleModifiers','makeData','_baseAngle','drawing','_currentTone','update','call','setupAngleModifiers','prototype','6JtNRET','Scene_Message_createAllWindows','#%1','iconIndex','close','random','Settings','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','VisuMZ_1_MessageCore','_rotationAngle','toUpperCase','ShakeStrengthHorz','updateWaveX','match','ujJRc','anchor','textColor','_textHeight','scale','paintOpacity','Window_Options_addGeneralOptions','NFQyI','InitialHueOffset','FlipSpeedY'];_0x2a12=function(){return _0x256f3e;};return _0x2a12();}function _0x232c(_0x1f7ea2,_0x375a06){const _0x2a12a6=_0x2a12();return _0x232c=function(_0x232c98,_0x15ab5b){_0x232c98=_0x232c98-0x1bd;let _0x47e79c=_0x2a12a6[_0x232c98];return _0x47e79c;},_0x232c(_0x1f7ea2,_0x375a06);}VisuMZ[label][_0x29b228(0x25d)]=VisuMZ[label][_0x29b228(0x25d)]||{},VisuMZ[_0x29b228(0x2a5)]=function(_0x1d709e,_0xe68ab8){const _0x4d540d=_0x29b228;for(const _0x36c2ea in _0xe68ab8){if(_0x36c2ea[_0x4d540d(0x264)](/(.*):(.*)/i)){if('ozmWT'!==_0x4d540d(0x1da))this[_0x4d540d(0x248)]();else{const _0x55721d=String(RegExp['$1']),_0x341384=String(RegExp['$2'])[_0x4d540d(0x261)]()[_0x4d540d(0x26f)]();let _0x415d20,_0x3d525d,_0x5d0283;switch(_0x341384){case'NUM':_0x415d20=_0xe68ab8[_0x36c2ea]!==''?Number(_0xe68ab8[_0x36c2ea]):0x0;break;case _0x4d540d(0x22b):_0x3d525d=_0xe68ab8[_0x36c2ea]!==''?JSON['parse'](_0xe68ab8[_0x36c2ea]):[],_0x415d20=_0x3d525d[_0x4d540d(0x285)](_0x23b2cf=>Number(_0x23b2cf));break;case _0x4d540d(0x1cb):_0x415d20=_0xe68ab8[_0x36c2ea]!==''?eval(_0xe68ab8[_0x36c2ea]):null;break;case _0x4d540d(0x1d7):_0x3d525d=_0xe68ab8[_0x36c2ea]!==''?JSON[_0x4d540d(0x1db)](_0xe68ab8[_0x36c2ea]):[],_0x415d20=_0x3d525d[_0x4d540d(0x285)](_0x2fff29=>eval(_0x2fff29));break;case _0x4d540d(0x2a0):_0x415d20=_0xe68ab8[_0x36c2ea]!==''?JSON[_0x4d540d(0x1db)](_0xe68ab8[_0x36c2ea]):'';break;case _0x4d540d(0x1ed):_0x3d525d=_0xe68ab8[_0x36c2ea]!==''?JSON[_0x4d540d(0x1db)](_0xe68ab8[_0x36c2ea]):[],_0x415d20=_0x3d525d['map'](_0x354929=>JSON[_0x4d540d(0x1db)](_0x354929));break;case _0x4d540d(0x1f2):_0x415d20=_0xe68ab8[_0x36c2ea]!==''?new Function(JSON[_0x4d540d(0x1db)](_0xe68ab8[_0x36c2ea])):new Function('return\x200');break;case _0x4d540d(0x284):_0x3d525d=_0xe68ab8[_0x36c2ea]!==''?JSON['parse'](_0xe68ab8[_0x36c2ea]):[],_0x415d20=_0x3d525d[_0x4d540d(0x285)](_0x4adb2a=>new Function(JSON[_0x4d540d(0x1db)](_0x4adb2a)));break;case _0x4d540d(0x238):_0x415d20=_0xe68ab8[_0x36c2ea]!==''?String(_0xe68ab8[_0x36c2ea]):'';break;case _0x4d540d(0x1ce):_0x3d525d=_0xe68ab8[_0x36c2ea]!==''?JSON['parse'](_0xe68ab8[_0x36c2ea]):[],_0x415d20=_0x3d525d[_0x4d540d(0x285)](_0x4f861c=>String(_0x4f861c));break;case'STRUCT':_0x5d0283=_0xe68ab8[_0x36c2ea]!==''?JSON['parse'](_0xe68ab8[_0x36c2ea]):{},_0x415d20=VisuMZ['ConvertParams']({},_0x5d0283);break;case'ARRAYSTRUCT':_0x3d525d=_0xe68ab8[_0x36c2ea]!==''?JSON[_0x4d540d(0x1db)](_0xe68ab8[_0x36c2ea]):[],_0x415d20=_0x3d525d[_0x4d540d(0x285)](_0x197fb4=>VisuMZ[_0x4d540d(0x2a5)]({},JSON['parse'](_0x197fb4)));break;default:continue;}_0x1d709e[_0x55721d]=_0x415d20;}}}return _0x1d709e;},(_0x10209a=>{const _0x2a03c8=_0x29b228,_0x26e7fd=_0x10209a['name'];for(const _0x2bac72 of dependencies){if(_0x2a03c8(0x1d8)===_0x2a03c8(0x1d8)){if(!Imported[_0x2bac72]){if(_0x2a03c8(0x2ad)==='JMLXl'){alert(_0x2a03c8(0x27d)[_0x2a03c8(0x298)](_0x26e7fd,_0x2bac72)),SceneManager[_0x2a03c8(0x1fc)]();break;}else{const _0x1c28e3=this[_0x2a03c8(0x22c)][_0x2a03c8(0x1ca)][0x0];this[_0x2a03c8(0x22c)]['removeChild'](_0x1c28e3);}}}else this['x']=this['_textState']['x'],this['x']+=this[_0x2a03c8(0x292)]['x']+this['_msgWindow'][_0x2a03c8(0x242)],this['x']+=this[_0x2a03c8(0x1ef)]/0x2,this['y']=this[_0x2a03c8(0x2b4)]['y'],this['y']+=this[_0x2a03c8(0x292)]['y']+this[_0x2a03c8(0x292)][_0x2a03c8(0x242)],this['y']+=this[_0x2a03c8(0x268)]/0x2;}const _0x4ff500=_0x10209a['description'];if(_0x4ff500[_0x2a03c8(0x264)](/\[Version[ ](.*?)\]/i)){const _0x8b91ba=Number(RegExp['$1']);if(_0x8b91ba!==VisuMZ[label]['version']){if(_0x2a03c8(0x23e)!==_0x2a03c8(0x23e)){if(this['_textState']['iconIndex']!==_0x342da0)this[_0x2a03c8(0x1ef)]=_0x55a81c[_0x2a03c8(0x1c0)]+0x4,this[_0x2a03c8(0x268)]=_0x518800[_0x2a03c8(0x1eb)]+0x4;else{const _0x590b96=this[_0x2a03c8(0x2b4)][_0x2a03c8(0x278)];this['_textWidth']=this[_0x2a03c8(0x292)][_0x2a03c8(0x210)](_0x590b96),this['_textHeight']=this[_0x2a03c8(0x2b4)][_0x2a03c8(0x2ab)];}this[_0x2a03c8(0x266)]['x']=0.5,this[_0x2a03c8(0x266)]['y']=0.5;}else alert(_0x2a03c8(0x25e)[_0x2a03c8(0x298)](_0x26e7fd,_0x8b91ba)),SceneManager['exit']();}}if(_0x4ff500[_0x2a03c8(0x264)](/\[Tier[ ](\d+)\]/i)){if(_0x2a03c8(0x26c)===_0x2a03c8(0x26c)){const _0xc31343=Number(RegExp['$1']);_0xc31343<tier?_0x2a03c8(0x28d)===_0x2a03c8(0x28d)?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x2a03c8(0x298)](_0x26e7fd,_0xc31343,tier)),SceneManager[_0x2a03c8(0x1fc)]()):(_0x1df1a3[_0x2a03c8(0x1fe)][_0x2a03c8(0x218)]['call'](this,_0x282278),this[_0x2a03c8(0x1c2)]='',this[_0x2a03c8(0x225)]()):tier=Math[_0x2a03c8(0x244)](_0xc31343,tier);}else{const _0x420d69=_0x5230f7(_0x2fc7fa['$1']);_0x420d69<_0xb7b988?(_0x462f7e(_0x2a03c8(0x1ec)[_0x2a03c8(0x298)](_0x265f78,_0x420d69,_0x59a38f)),_0x5f5071[_0x2a03c8(0x1fc)]()):_0x465a56=_0x4b804d[_0x2a03c8(0x244)](_0x420d69,_0x269231);}}VisuMZ[_0x2a03c8(0x2a5)](VisuMZ[label][_0x2a03c8(0x25d)],_0x10209a[_0x2a03c8(0x272)]);})(pluginData),VisuMZ['AniMsgTextEffects'][_0x29b228(0x27a)]=Scene_Boot[_0x29b228(0x256)]['onDatabaseLoaded'],Scene_Boot[_0x29b228(0x256)][_0x29b228(0x1fb)]=function(){const _0x56ccdb=_0x29b228;VisuMZ['AniMsgTextEffects']['Scene_Boot_onDatabaseLoaded'][_0x56ccdb(0x254)](this),this['process_VisuMZ_AniMsgTextEffects']();},VisuMZ['AniMsgTextEffects'][_0x29b228(0x299)]={},Scene_Boot[_0x29b228(0x256)]['process_VisuMZ_AniMsgTextEffects']=function(){const _0x1e004c=_0x29b228,_0x2e8b5e=['AngleEffects',_0x1e004c(0x207),'OpacityEffects',_0x1e004c(0x247),'ScaleEffects'];for(const _0x135782 of _0x2e8b5e){for(const _0x41d72c of VisuMZ[_0x1e004c(0x1fe)]['Settings'][_0x135782]){if(!_0x41d72c)continue;const _0x49ca96=_0x41d72c[_0x1e004c(0x24d)][_0x1e004c(0x280)]()['trim']();if(_0x49ca96==='')continue;if(_0x49ca96===_0x1e004c(0x205))continue;VisuMZ['AniMsgTextEffects'][_0x1e004c(0x299)][_0x49ca96]=VisuMZ['AniMsgTextEffects'][_0x1e004c(0x299)][_0x49ca96]||{};const _0x5b3ee3=VisuMZ[_0x1e004c(0x1fe)][_0x1e004c(0x299)][_0x49ca96];for(const _0xed1fa5 in _0x41d72c){if(_0x1e004c(0x1e5)!==_0x1e004c(0x1e5))return _0x3344b2=_0x52835c(_0x12be3c),_0x1df20b['match'](/#(.*)/i)?_0x1e004c(0x259)[_0x1e004c(0x298)](_0x59e48d(_0x2019af['$1'])):this[_0x1e004c(0x267)](_0x356a6b(_0x418ae6));else _0x5b3ee3[_0xed1fa5]=_0x41d72c[_0xed1fa5];}if(_0x49ca96===_0x1e004c(0x1f3))console[_0x1e004c(0x1e2)](_0x5b3ee3);}}},ConfigManager[_0x29b228(0x1c5)]=!![],VisuMZ[_0x29b228(0x1fe)]['ConfigManager_makeData']=ConfigManager[_0x29b228(0x24f)],ConfigManager['makeData']=function(){const _0x55f24e=_0x29b228,_0x61e130=VisuMZ['AniMsgTextEffects'][_0x55f24e(0x200)][_0x55f24e(0x254)](this);return _0x61e130[_0x55f24e(0x1c5)]=this[_0x55f24e(0x1c5)],_0x61e130;},VisuMZ[_0x29b228(0x1fe)][_0x29b228(0x2b1)]=ConfigManager[_0x29b228(0x23f)],ConfigManager[_0x29b228(0x23f)]=function(_0x479efd){const _0x1be6d7=_0x29b228;VisuMZ['AniMsgTextEffects']['ConfigManager_applyData'][_0x1be6d7(0x254)](this,_0x479efd),this[_0x1be6d7(0x201)](_0x479efd,_0x1be6d7(0x1c5),!![]);if('textEffects'in _0x479efd){if(_0x1be6d7(0x1d2)===_0x1be6d7(0x265)){let _0x5a8e5f=this['_baseScale'];_0x5a8e5f*=this[_0x1be6d7(0x27b)],_0x5a8e5f*=this[_0x1be6d7(0x1d6)];let _0x19cd3a=this[_0x1be6d7(0x270)];_0x19cd3a*=this[_0x1be6d7(0x1e0)],_0x19cd3a*=this[_0x1be6d7(0x1c9)];if(this[_0x1be6d7(0x269)]['x']!==_0x5a8e5f)this['scale']['x']=_0x5a8e5f;if(this[_0x1be6d7(0x269)]['y']!==_0x19cd3a)this[_0x1be6d7(0x269)]['y']=_0x19cd3a;}else this[_0x1be6d7(0x1c5)]=_0x479efd['textEffects'];}else{if(_0x1be6d7(0x2a3)===_0x1be6d7(0x1f9)){this[_0x1be6d7(0x1f0)]=_0x268881['loadSystem']('IconSet');const _0x4085b7=_0x196326[_0x1be6d7(0x1c0)],_0x49a9f4=_0x53afed['iconHeight'],_0x48482c=this[_0x1be6d7(0x2b4)][_0x1be6d7(0x25a)]%0x10*_0x4085b7,_0x1c979f=_0x539d75[_0x1be6d7(0x277)](this[_0x1be6d7(0x2b4)]['iconIndex']/0x10)*_0x49a9f4;this[_0x1be6d7(0x22e)](_0x48482c,_0x1c979f,_0x4085b7,_0x49a9f4);}else this['textEffects']=!![];}},ColorManager['getColor']=function(_0x14ceb9){const _0x3881da=_0x29b228;_0x14ceb9=String(_0x14ceb9);if(_0x14ceb9[_0x3881da(0x264)](/#(.*)/i)){if(_0x3881da(0x20f)!==_0x3881da(0x28f))return _0x3881da(0x259)[_0x3881da(0x298)](String(RegExp['$1']));else{const _0x2f102d=this[_0x3881da(0x229)](),_0x23d7fc=(_0x2f102d[_0x3881da(0x283)]??'')[_0x3881da(0x280)]()[_0x3881da(0x26f)]();if(_0x23d7fc==='')return;if(_0x23d7fc===_0x4a74ac)return;const _0xee4dbe=_0x26bb3e[_0x3881da(0x244)](_0x2f102d[_0x3881da(0x1c8)]??0x1,0x1),_0x1a3ba6=_0x2f102d[_0x3881da(0x1ff)]??0x0,_0x29b788=_0x121841[_0x3881da(0x1c3)];this[_0x3881da(0x236)]=this[_0x3881da(0x236)]??_0x1a3ba6*this[_0x3881da(0x21a)];while(this[_0x3881da(0x236)]>=_0x23d7fc[_0x3881da(0x1cc)])this[_0x3881da(0x236)]-=_0x23d7fc[_0x3881da(0x1cc)];while(this['_patternIndex']<0x0)this[_0x3881da(0x236)]+=_0x23d7fc[_0x3881da(0x1cc)];const _0x3efa6c=(_0x23d7fc[_0x3881da(0x1de)](this[_0x3881da(0x236)])-0x61)[_0x3881da(0x2b2)](0x0,0x19),_0x56c557=_0x3efa6c/0x19;this['_targetOpacity']*=_0x56c557;if(_0x29b788%_0xee4dbe===0x0){this[_0x3881da(0x236)]++;while(this[_0x3881da(0x236)]>=_0x23d7fc[_0x3881da(0x1cc)])this[_0x3881da(0x236)]-=_0x23d7fc['length'];}}}else return this[_0x3881da(0x267)](Number(_0x14ceb9));},TextManager[_0x29b228(0x1c5)]=VisuMZ[_0x29b228(0x1fe)][_0x29b228(0x25d)][_0x29b228(0x296)]['Name']||'',VisuMZ['AniMsgTextEffects'][_0x29b228(0x258)]=Scene_Message['prototype'][_0x29b228(0x1d1)],Scene_Message['prototype'][_0x29b228(0x1d1)]=function(){const _0x483232=_0x29b228;VisuMZ[_0x483232(0x1fe)][_0x483232(0x258)][_0x483232(0x254)](this),this[_0x483232(0x217)]();},Scene_Message[_0x29b228(0x256)]['createAniMsgTextEffectsContainer']=function(){const _0x1faf03=_0x29b228;this[_0x1faf03(0x22c)]=new Sprite(),this['addWindow'](this[_0x1faf03(0x22c)]),this[_0x1faf03(0x275)]['setTextEffectContainer'](this[_0x1faf03(0x22c)]);};function Sprite_TextEffect(){const _0x1e89c2=_0x29b228;this[_0x1e89c2(0x227)](...arguments);}Sprite_TextEffect[_0x29b228(0x256)]=Object[_0x29b228(0x1e8)](Sprite['prototype']),Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x1e4)]=Sprite_TextEffect,Sprite_TextEffect['prototype']['initialize']=function(_0x5b6c80,_0x49c63b,_0x51c19e){const _0x81ec4c=_0x29b228;this['_msgWindow']=_0x5b6c80,this[_0x81ec4c(0x1c2)]=_0x5b6c80[_0x81ec4c(0x1c2)],this['_textState']=JSON['parse'](JSON[_0x81ec4c(0x1d0)](_0x49c63b)),this['_offset']=_0x51c19e,Sprite[_0x81ec4c(0x256)][_0x81ec4c(0x227)]['call'](this),this[_0x81ec4c(0x290)](),this[_0x81ec4c(0x27f)](),this[_0x81ec4c(0x21e)](),this[_0x81ec4c(0x253)]();},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x290)]=function(){const _0x3a2ded=_0x29b228;if(this[_0x3a2ded(0x2b4)][_0x3a2ded(0x25a)]!==undefined){if('aUbNH'===_0x3a2ded(0x2a2)){this['_toneIndex']++;while(this['_toneIndex']>=_0x56eb08[_0x3a2ded(0x1cc)])this[_0x3a2ded(0x295)]-=_0x5f4b64[_0x3a2ded(0x1cc)];this[_0x3a2ded(0x252)]=_0x2ddfac[this['_toneIndex']][_0x3a2ded(0x24b)]();}else this[_0x3a2ded(0x1ef)]=ImageManager[_0x3a2ded(0x1c0)]+0x4,this['_textHeight']=ImageManager[_0x3a2ded(0x1eb)]+0x4;}else{if(_0x3a2ded(0x1dc)!==_0x3a2ded(0x1dc))_0x60f84[_0x3a2ded(0x1fe)][_0x3a2ded(0x25d)][_0x3a2ded(0x296)][_0x3a2ded(0x213)]&&this[_0x3a2ded(0x29c)]();else{const _0x489fa5=this[_0x3a2ded(0x2b4)][_0x3a2ded(0x278)];this['_textWidth']=this[_0x3a2ded(0x292)][_0x3a2ded(0x210)](_0x489fa5),this[_0x3a2ded(0x268)]=this['_textState'][_0x3a2ded(0x2ab)];}}this['anchor']['x']=0.5,this[_0x3a2ded(0x266)]['y']=0.5;},Sprite_TextEffect['prototype'][_0x29b228(0x27f)]=function(){const _0x2f7545=_0x29b228;this[_0x2f7545(0x2b4)][_0x2f7545(0x25a)]!==undefined?_0x2f7545(0x235)!==_0x2f7545(0x29d)?this[_0x2f7545(0x237)]():this['textEffects']=_0x1bdaf6['textEffects']:'diEej'!==_0x2f7545(0x1df)?(_0x59a6a8[_0x2f7545(0x1fe)]['Scene_Boot_onDatabaseLoaded'][_0x2f7545(0x254)](this),this['process_VisuMZ_AniMsgTextEffects']()):this[_0x2f7545(0x248)]();},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x237)]=function(){const _0x469aae=_0x29b228;this[_0x469aae(0x1f0)]=ImageManager[_0x469aae(0x240)]('IconSet');const _0x17052d=ImageManager['iconWidth'],_0x3f1640=ImageManager[_0x469aae(0x1eb)],_0x5cef9c=this[_0x469aae(0x2b4)]['iconIndex']%0x10*_0x17052d,_0x47ccd5=Math['floor'](this[_0x469aae(0x2b4)]['iconIndex']/0x10)*_0x3f1640;this[_0x469aae(0x22e)](_0x5cef9c,_0x47ccd5,_0x17052d,_0x3f1640);},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x248)]=function(){const _0x376db7=_0x29b228,_0x3be491=this['_textState'][_0x376db7(0x278)],_0x56e229=this['_msgWindow'][_0x376db7(0x210)](_0x3be491),_0x3736df=this[_0x376db7(0x2b4)][_0x376db7(0x2ab)];this['bitmap']=new Bitmap(_0x56e229,_0x3736df);const _0x2b31c9=this['_msgWindow']['contents'],_0x59e247=['fontFace','fontSize',_0x376db7(0x29b),_0x376db7(0x1ea),_0x376db7(0x267),'outLineColor',_0x376db7(0x21f),_0x376db7(0x26a)];for(const _0x1b0e5d of _0x59e247){this[_0x376db7(0x1f0)][_0x1b0e5d]=_0x2b31c9[_0x1b0e5d];}const _0x36022d=this[_0x376db7(0x229)]();if(_0x36022d[_0x376db7(0x29f)]!==undefined&&_0x36022d[_0x376db7(0x29f)]!==''){if(_0x376db7(0x1be)==='GqzjY'){const _0x3fbeca=this['effectData'](),_0x5db911=_0x3fbeca['RotationSpeed']??0x0;if(_0x5db911===0x0)return;const _0xc8d854=(_0x3fbeca[_0x376db7(0x2b5)]??0x0)*this['_offset'];this[_0x376db7(0x260)]=this[_0x376db7(0x260)]??_0xc8d854,this[_0x376db7(0x260)]-=_0x5db911;while(this[_0x376db7(0x260)]>0x168)this[_0x376db7(0x260)]-=0x168;while(this['_rotationAngle']<0x0)this[_0x376db7(0x260)]+=0x168;}else this['bitmap']['textColor']=ColorManager['getColor'](_0x36022d[_0x376db7(0x29f)]);}this[_0x376db7(0x1f0)][_0x376db7(0x249)](_0x3be491,0x0,0x0,_0x56e229,_0x3736df);},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x21e)]=function(){const _0xc18531=_0x29b228;this[_0xc18531(0x208)]={};const _0x13dc0c=this[_0xc18531(0x1c2)][_0xc18531(0x22f)](',')[_0xc18531(0x285)](_0x1128d7=>_0x1128d7[_0xc18531(0x280)]()['trim']());for(const _0x7b66b of _0x13dc0c){const _0x4167b5=VisuMZ[_0xc18531(0x1fe)][_0xc18531(0x299)][_0x7b66b];if(!_0x4167b5)continue;for(const _0x34a8ab in _0x4167b5){this[_0xc18531(0x208)][_0x34a8ab]=_0x4167b5[_0x34a8ab];}}},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x229)]=function(){const _0x502894=_0x29b228;if(this['_textEffectData']===undefined)this['createEffectData']();return this[_0x502894(0x208)]||{};},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x253)]=function(){const _0x145128=_0x29b228;Sprite[_0x145128(0x256)][_0x145128(0x253)]['call'](this),this[_0x145128(0x1d9)](),this[_0x145128(0x1e3)](),this['updateScaleEffects'](),this[_0x145128(0x20e)](),this[_0x145128(0x1f4)]();},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x1d9)]=function(){const _0x1010a0=_0x29b228;this[_0x1010a0(0x245)](),this[_0x1010a0(0x2a1)](),this[_0x1010a0(0x263)](),this['updateWaveY']();},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x245)]=function(){const _0x5d8fb6=_0x29b228;this['x']=this['_textState']['x'],this['x']+=this[_0x5d8fb6(0x292)]['x']+this[_0x5d8fb6(0x292)]['padding'],this['x']+=this[_0x5d8fb6(0x1ef)]/0x2,this['y']=this['_textState']['y'],this['y']+=this[_0x5d8fb6(0x292)]['y']+this['_msgWindow'][_0x5d8fb6(0x242)],this['y']+=this['_textHeight']/0x2;},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x2a1)]=function(){const _0x55ab38=_0x29b228,_0x39f1ff=this[_0x55ab38(0x229)](),_0x2eda61=_0x39f1ff[_0x55ab38(0x262)]??0x0,_0x4eeee4=_0x39f1ff[_0x55ab38(0x1e6)]??0x0;if(_0x2eda61===0x0&&_0x4eeee4===0x0)return;this['x']+=Math[_0x55ab38(0x23c)](_0x2eda61+0x1)*(Math[_0x55ab38(0x25c)]()<0.5?-0x1:0x1),this['y']+=Math[_0x55ab38(0x23c)](_0x4eeee4+0x1)*(Math[_0x55ab38(0x25c)]()<0.5?-0x1:0x1);},Sprite_TextEffect['prototype']['updateWaveX']=function(){const _0x2c7a48=_0x29b228,_0x1d4c25=this[_0x2c7a48(0x229)](),_0x1084a4=_0x1d4c25[_0x2c7a48(0x28a)]??0x0;if(_0x1084a4===0x0)return;const _0x104c8f=_0x1d4c25[_0x2c7a48(0x297)]??0x0;if(_0x104c8f===0x0)return;const _0x2f1287=_0x1d4c25['WaveOffsetX']??0x0,_0x3ffe2e=Graphics[_0x2c7a48(0x1c3)]+_0x2f1287*this[_0x2c7a48(0x21a)];this['x']+=Math[_0x2c7a48(0x223)](Math[_0x2c7a48(0x286)](_0x3ffe2e*_0x104c8f)*_0x1084a4);},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x24a)]=function(){const _0x264ea7=_0x29b228,_0x156094=this[_0x264ea7(0x229)](),_0x1f2ba4=_0x156094[_0x264ea7(0x20c)]??0x0;if(_0x1f2ba4===0x0)return;const _0x381064=_0x156094[_0x264ea7(0x226)]??0x0;if(_0x381064===0x0)return;const _0x2e4589=_0x156094['WaveOffsetY']??0x0,_0x484e62=Graphics[_0x264ea7(0x1c3)]+_0x2e4589*this[_0x264ea7(0x21a)];this['y']+=Math['round'](Math[_0x264ea7(0x286)](_0x484e62*_0x381064)*_0x1f2ba4);},Sprite_TextEffect[_0x29b228(0x256)]['updateAngleEffects']=function(){const _0x69c2c7=_0x29b228;this[_0x69c2c7(0x255)](),this[_0x69c2c7(0x24c)](),this['updateRotationAngle'](),this[_0x69c2c7(0x24e)]();},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x255)]=function(){const _0x48f0ff=_0x29b228;this['_baseAngle']=0x0,this[_0x48f0ff(0x234)]=0x0;},Sprite_TextEffect['prototype'][_0x29b228(0x24c)]=function(){const _0x39acdf=_0x29b228,_0xd49fe9=this[_0x39acdf(0x229)](),_0x49bd45=_0xd49fe9[_0x39acdf(0x231)]??0x0;if(_0x49bd45===0x0)return;const _0x40e2ed=_0xd49fe9[_0x39acdf(0x28e)]??0x0;if(_0x40e2ed===0x0)return;const _0x1559e7=_0xd49fe9['PendulumOffset']??0x0,_0x3baa61=Graphics[_0x39acdf(0x1c3)]+_0x1559e7*this[_0x39acdf(0x21a)];this[_0x39acdf(0x234)]=Math['round'](Math['cos'](_0x3baa61*_0x40e2ed)*_0x49bd45);},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x230)]=function(){const _0x4ebb6e=_0x29b228,_0x19a8a5=this['effectData'](),_0x1af11d=_0x19a8a5[_0x4ebb6e(0x1f1)]??0x0;if(_0x1af11d===0x0)return;const _0x449dce=(_0x19a8a5[_0x4ebb6e(0x2b5)]??0x0)*this[_0x4ebb6e(0x21a)];this[_0x4ebb6e(0x260)]=this[_0x4ebb6e(0x260)]??_0x449dce,this[_0x4ebb6e(0x260)]-=_0x1af11d;while(this[_0x4ebb6e(0x260)]>0x168)this[_0x4ebb6e(0x260)]-=0x168;while(this[_0x4ebb6e(0x260)]<0x0)this[_0x4ebb6e(0x260)]+=0x168;},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x24e)]=function(){const _0x2a3f7a=_0x29b228;let _0x3a0b0a=this[_0x2a3f7a(0x250)];_0x3a0b0a+=this[_0x2a3f7a(0x234)];this[_0x2a3f7a(0x260)]!==undefined&&(_0x3a0b0a+=this[_0x2a3f7a(0x260)]);if(this[_0x2a3f7a(0x29a)]!==_0x3a0b0a)this[_0x2a3f7a(0x29a)]=_0x3a0b0a;},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x2a9)]=function(){const _0x9fad41=_0x29b228;this[_0x9fad41(0x22d)](),this[_0x9fad41(0x2ac)](),this[_0x9fad41(0x204)](),this['updatePulseX'](),this['updatePulseY'](),this[_0x9fad41(0x2a4)]();},Sprite_TextEffect['prototype'][_0x29b228(0x22d)]=function(){const _0x50fbf7=_0x29b228;this['_baseScale']=0x1,this[_0x50fbf7(0x292)]&&(this['_baseScale']*=Math['max'](this['_msgWindow'][_0x50fbf7(0x269)]['x'],this['_msgWindow'][_0x50fbf7(0x269)]['y'])),this[_0x50fbf7(0x27b)]=0x1,this[_0x50fbf7(0x1e0)]=0x1,this[_0x50fbf7(0x1d6)]=0x1,this[_0x50fbf7(0x1c9)]=0x1;},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x2ac)]=function(){const _0x2e4b62=_0x29b228,_0x32ab0f=this[_0x2e4b62(0x229)](),_0x287b7a=_0x32ab0f[_0x2e4b62(0x209)]??0x0;if(_0x287b7a===0x0)return;const _0x3a9213=_0x32ab0f['FlipOffsetX']??0x0,_0x497a0e=Graphics['frameCount']+_0x3a9213*this['_offset'];this['_flipScaleX']=Math['cos'](_0x497a0e*_0x287b7a);},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x204)]=function(){const _0xc7c61=_0x29b228,_0x33c5a2=this[_0xc7c61(0x229)](),_0x2d3585=_0x33c5a2[_0xc7c61(0x26e)]??0x0;if(_0x2d3585===0x0)return;const _0x942e88=_0x33c5a2[_0xc7c61(0x222)]??0x0,_0x4d26c0=Graphics[_0xc7c61(0x1c3)]+_0x942e88*this[_0xc7c61(0x21a)];this[_0xc7c61(0x1e0)]=Math[_0xc7c61(0x286)](_0x4d26c0*_0x2d3585);},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x28b)]=function(){const _0x32b734=_0x29b228,_0x35f14b=this['effectData'](),_0x2c35fb=(_0x35f14b['PulseGrowthX']??0x0)/0x2;if(_0x2c35fb===0x0)return;const _0x3185d0=_0x35f14b[_0x32b734(0x1d4)]??0x0;if(_0x3185d0===0x0)return;const _0x19ce49=_0x35f14b[_0x32b734(0x1dd)]??0x0,_0x1d1214=Graphics[_0x32b734(0x1c3)]+_0x19ce49*this['_offset'];this[_0x32b734(0x1d6)]+=Math[_0x32b734(0x286)](_0x1d1214*_0x3185d0)*_0x2c35fb;},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x2b6)]=function(){const _0x6d434a=_0x29b228,_0x818e35=this[_0x6d434a(0x229)](),_0x2738d1=(_0x818e35['PulseGrowthY']??0x0)/0x2;if(_0x2738d1===0x0)return;const _0x60c7a5=_0x818e35[_0x6d434a(0x1fd)]??0x0;if(_0x60c7a5===0x0)return;const _0x46991c=_0x818e35[_0x6d434a(0x224)]??0x0,_0x4af59f=Graphics[_0x6d434a(0x1c3)]+_0x46991c*this[_0x6d434a(0x21a)];this['_pulseScaleY']+=Math[_0x6d434a(0x286)](_0x4af59f*_0x60c7a5)*_0x2738d1;},Sprite_TextEffect[_0x29b228(0x256)]['applyScaleModifiers']=function(){const _0x3b2d2d=_0x29b228;let _0x380f18=this[_0x3b2d2d(0x270)];_0x380f18*=this['_flipScaleX'],_0x380f18*=this[_0x3b2d2d(0x1d6)];let _0x36b0f6=this['_baseScale'];_0x36b0f6*=this['_flipScaleY'],_0x36b0f6*=this[_0x3b2d2d(0x1c9)];if(this[_0x3b2d2d(0x269)]['x']!==_0x380f18)this['scale']['x']=_0x380f18;if(this[_0x3b2d2d(0x269)]['y']!==_0x36b0f6)this[_0x3b2d2d(0x269)]['y']=_0x36b0f6;},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x20e)]=function(){const _0x40c541=_0x29b228;this[_0x40c541(0x212)](),this['updateOpacityPatternEffect'](),this[_0x40c541(0x2af)](),this[_0x40c541(0x1fa)]();},Sprite_TextEffect[_0x29b228(0x256)]['setupOpacityModifiers']=function(){const _0x1390eb=_0x29b228,_0x498160=this[_0x1390eb(0x229)]();this[_0x1390eb(0x293)]=_0x498160['InitialOpacity']??0xff;},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x287)]=function(){const _0xe7ba1f=_0x29b228,_0x354d9d=this[_0xe7ba1f(0x229)](),_0x4efa51=(_0x354d9d[_0xe7ba1f(0x283)]??'')[_0xe7ba1f(0x280)]()[_0xe7ba1f(0x26f)]();if(_0x4efa51==='')return;if(_0x4efa51===undefined)return;const _0x1c4aef=Math['max'](_0x354d9d[_0xe7ba1f(0x1c8)]??0x1,0x1),_0x4d5e0a=_0x354d9d['patternOffset']??0x0,_0x5d7354=Graphics[_0xe7ba1f(0x1c3)];this[_0xe7ba1f(0x236)]=this[_0xe7ba1f(0x236)]??_0x4d5e0a*this['_offset'];while(this['_patternIndex']>=_0x4efa51[_0xe7ba1f(0x1cc)])this[_0xe7ba1f(0x236)]-=_0x4efa51[_0xe7ba1f(0x1cc)];while(this[_0xe7ba1f(0x236)]<0x0)this[_0xe7ba1f(0x236)]+=_0x4efa51[_0xe7ba1f(0x1cc)];const _0x274d98=(_0x4efa51[_0xe7ba1f(0x1de)](this[_0xe7ba1f(0x236)])-0x61)['clamp'](0x0,0x19),_0x4fa58c=_0x274d98/0x19;this[_0xe7ba1f(0x293)]*=_0x4fa58c;if(_0x5d7354%_0x1c4aef===0x0){if(_0xe7ba1f(0x21c)!==_0xe7ba1f(0x21c))this['updateOriginPosition'](),this[_0xe7ba1f(0x2a1)](),this[_0xe7ba1f(0x263)](),this[_0xe7ba1f(0x24a)]();else{this['_patternIndex']++;while(this[_0xe7ba1f(0x236)]>=_0x4efa51[_0xe7ba1f(0x1cc)])this[_0xe7ba1f(0x236)]-=_0x4efa51['length'];}}},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x2af)]=function(){const _0x120b77=_0x29b228,_0x418734=this[_0x120b77(0x229)](),_0x4e6cf4=(_0x418734[_0x120b77(0x1f5)]??0x0)/0x2*0xff;if(_0x4e6cf4===0x0)return;const _0x155f1e=_0x418734['glowSpeed']??0x0;if(_0x155f1e===0x0)return;const _0x2f8c99=_0x418734[_0x120b77(0x243)]??0x0,_0x2994a4=Graphics[_0x120b77(0x1c3)]+_0x2f8c99*this[_0x120b77(0x21a)];this[_0x120b77(0x293)]+=Math[_0x120b77(0x223)](Math[_0x120b77(0x286)](_0x2994a4*_0x155f1e)*_0x4e6cf4-_0x4e6cf4);},Sprite_TextEffect['prototype'][_0x29b228(0x1fa)]=function(){const _0x2f60f8=_0x29b228;this[_0x2f60f8(0x1e1)]=this['_targetOpacity'];},Sprite_TextEffect['prototype']['updateColorEffects']=function(){const _0x8db898=_0x29b228;this[_0x8db898(0x2b3)](),this[_0x8db898(0x289)](),this['updateToneShift'](),this[_0x8db898(0x282)]();},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x2b3)]=function(){},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x289)]=function(){const _0x8677aa=_0x29b228,_0xc7f999=this[_0x8677aa(0x229)](),_0x590e2f=_0xc7f999[_0x8677aa(0x23b)]??0x0;if(_0x590e2f===0x0)return;if(this[_0x8677aa(0x2b0)]===undefined){const _0x5c25a9=_0xc7f999[_0x8677aa(0x26d)]??0x0,_0x3d281b=_0x5c25a9*this['_offset'];this[_0x8677aa(0x2b0)]=_0x3d281b;}this[_0x8677aa(0x2b0)]+=_0x590e2f;while(this[_0x8677aa(0x2b0)]>0x168)this[_0x8677aa(0x2b0)]-=0x168;while(this[_0x8677aa(0x2b0)]<0x168)this[_0x8677aa(0x2b0)]+=0x168;},Sprite_TextEffect['prototype'][_0x29b228(0x21d)]=function(){const _0x1a3cb8=_0x29b228,_0x59ae47=this[_0x1a3cb8(0x229)](),_0x1809e4=_0x59ae47['colorTones']??[];if(_0x1809e4['length']<=0x0)return;if(this[_0x1a3cb8(0x252)]===undefined){if('DQVFL'!==_0x1a3cb8(0x1e7)){this[_0x1a3cb8(0x1e9)](_0x788a96,_0x3dc29f);return;}else{const _0x30f0ee=_0x59ae47['InitialToneOffset']??0x0;this['_toneIndex']=_0x30f0ee*this[_0x1a3cb8(0x21a)];while(this[_0x1a3cb8(0x295)]>=_0x1809e4['length'])this[_0x1a3cb8(0x295)]-=_0x1809e4[_0x1a3cb8(0x1cc)];while(this['_toneIndex']<0x0)this[_0x1a3cb8(0x295)]+=_0x1809e4['length'];this[_0x1a3cb8(0x252)]=_0x1809e4[this['_toneIndex']][_0x1a3cb8(0x24b)]();}}if(_0x1809e4['length']<=0x1)return;const _0x55419a=Math[_0x1a3cb8(0x244)](_0x59ae47[_0x1a3cb8(0x291)]??0x1,0x1),_0x54691c=Graphics['frameCount'];if(_0x54691c%_0x55419a===0x0){this[_0x1a3cb8(0x295)]++;while(this['_toneIndex']>=_0x1809e4['length'])this[_0x1a3cb8(0x295)]-=_0x1809e4[_0x1a3cb8(0x1cc)];this[_0x1a3cb8(0x252)]=_0x1809e4[this[_0x1a3cb8(0x295)]][_0x1a3cb8(0x24b)]();}else{if(_0x59ae47['SmoothToneChange']){const _0x4d55c4=_0x55419a-_0x54691c%_0x55419a,_0x48812c=(this[_0x1a3cb8(0x295)]+0x1)%_0x1809e4[_0x1a3cb8(0x1cc)],_0x2ee919=_0x1809e4[_0x48812c];if(!_0x2ee919)return;for(let _0x32beda=0x0;_0x32beda<0x4;_0x32beda++){this['_currentTone'][_0x32beda]=(this[_0x1a3cb8(0x252)][_0x32beda]*(_0x4d55c4-0x1)+_0x2ee919[_0x32beda])/_0x4d55c4;}}}},Sprite_TextEffect[_0x29b228(0x256)][_0x29b228(0x282)]=function(){const _0x1b0afd=_0x29b228;if(this[_0x1b0afd(0x2b0)]!==undefined)this[_0x1b0afd(0x281)](this[_0x1b0afd(0x2b0)]);if(this[_0x1b0afd(0x252)]!==undefined)this[_0x1b0afd(0x1d5)](this[_0x1b0afd(0x252)]);},VisuMZ['AniMsgTextEffects'][_0x29b228(0x214)]=Window_Base[_0x29b228(0x256)][_0x29b228(0x233)],Window_Base[_0x29b228(0x256)][_0x29b228(0x233)]=function(_0x36d7a6){const _0x5a6cc2=_0x29b228;return _0x36d7a6=this[_0x5a6cc2(0x1c7)](_0x36d7a6),VisuMZ['AniMsgTextEffects']['Window_Base_preConvertEscapeCharacters'][_0x5a6cc2(0x254)](this,_0x36d7a6);},Window_Base[_0x29b228(0x256)][_0x29b228(0x1c7)]=function(_0x3f0a4f){const _0x3f1bbd=_0x29b228;return _0x3f0a4f=_0x3f0a4f[_0x3f1bbd(0x2a6)](/\x1bEFFECT<(.*?)>/gi,''),_0x3f0a4f=_0x3f0a4f['replace'](/<CLEAR EFFECT(?:|S)>/gi,''),_0x3f0a4f;},VisuMZ[_0x29b228(0x1fe)][_0x29b228(0x1f6)]=Window_Base[_0x29b228(0x256)][_0x29b228(0x1d3)],Window_Base['prototype'][_0x29b228(0x1d3)]=function(_0x8a4c95,_0x1e961f){const _0x574ab1=_0x29b228;if(this['constructor'][_0x574ab1(0x1bf)]===_0x574ab1(0x203)&&this[_0x574ab1(0x1c2)]&&_0x1e961f[_0x574ab1(0x251)]){if('ivzhb'==='ivzhb'){this['processDrawIconTextEffect'](_0x8a4c95,_0x1e961f);return;}else{if(this[_0x574ab1(0x1e4)][_0x574ab1(0x1bf)]===_0x574ab1(0x203)&&this[_0x574ab1(0x1c2)]&&_0x22c449[_0x574ab1(0x251)]){this['processDrawIconTextEffect'](_0x10dcfb,_0x94ef8b);return;}_0x2d38f2['AniMsgTextEffects'][_0x574ab1(0x1f6)]['call'](this,_0x239ed5,_0x22315c);}}VisuMZ[_0x574ab1(0x1fe)][_0x574ab1(0x1f6)]['call'](this,_0x8a4c95,_0x1e961f);},VisuMZ[_0x29b228(0x1fe)][_0x29b228(0x1cf)]=Window_Message[_0x29b228(0x256)][_0x29b228(0x221)],Window_Message[_0x29b228(0x256)][_0x29b228(0x221)]=function(){const _0x1d642c=_0x29b228;VisuMZ[_0x1d642c(0x1fe)][_0x1d642c(0x1cf)][_0x1d642c(0x254)](this),this['_textEffect']='';},Window_Message[_0x29b228(0x256)][_0x29b228(0x20a)]=function(_0x4ecbef){const _0xc20696=_0x29b228;this[_0xc20696(0x22c)]=_0x4ecbef;},Window_Message[_0x29b228(0x256)]['convertTextEffectEscapeCodes']=function(_0x20a0eb){return _0x20a0eb=_0x20a0eb['replace'](/<CLEAREFFECT(?:|S)>/gi,'\x1bCLEAREFFECT[0]'),_0x20a0eb;},VisuMZ[_0x29b228(0x1fe)]['Window_Message_processEscapeCharacter']=Window_Message[_0x29b228(0x256)]['processEscapeCharacter'],Window_Message[_0x29b228(0x256)][_0x29b228(0x2a8)]=function(_0x47334e,_0x4f7eb9){const _0x42d8bf=_0x29b228;if(_0x47334e===_0x42d8bf(0x2ae)){let _0x263587=this[_0x42d8bf(0x294)](_0x4f7eb9);if(_0x4f7eb9[_0x42d8bf(0x251)]&&ConfigManager['textEffects']){if('IGTBD'!==_0x42d8bf(0x241)){_0x263587=_0x263587[_0x42d8bf(0x2a6)](/\x1bC\[(.*?)\]/gi,''),_0x263587=_0x263587[_0x42d8bf(0x2a6)](/\x1bPREVCOLOR\[(.*?)\]/gi,''),this[_0x42d8bf(0x1c2)]=_0x263587[_0x42d8bf(0x280)]()[_0x42d8bf(0x26f)]();if(this[_0x42d8bf(0x1c2)]==='normal')this[_0x42d8bf(0x1c2)]='';}else this[_0x42d8bf(0x22d)](),this[_0x42d8bf(0x2ac)](),this[_0x42d8bf(0x204)](),this['updatePulseX'](),this[_0x42d8bf(0x2b6)](),this['applyScaleModifiers']();}}else{if(_0x47334e==='CLEAREFFECT'){if(_0x42d8bf(0x279)!==_0x42d8bf(0x279)){const _0x4da982=_0x1a85d0-_0x4b51b1%_0x3b056c,_0x2fa793=(this[_0x42d8bf(0x295)]+0x1)%_0x4f4ee4[_0x42d8bf(0x1cc)],_0x387dc1=_0x310492[_0x2fa793];if(!_0x387dc1)return;for(let _0xbe7ba0=0x0;_0xbe7ba0<0x4;_0xbe7ba0++){this[_0x42d8bf(0x252)][_0xbe7ba0]=(this[_0x42d8bf(0x252)][_0xbe7ba0]*(_0x4da982-0x1)+_0x387dc1[_0xbe7ba0])/_0x4da982;}}else this[_0x42d8bf(0x220)](_0x4f7eb9),this[_0x42d8bf(0x1c2)]='';}else VisuMZ[_0x42d8bf(0x1fe)][_0x42d8bf(0x23d)]['call'](this,_0x47334e,_0x4f7eb9);}},VisuMZ[_0x29b228(0x1fe)][_0x29b228(0x27e)]=Window_Message[_0x29b228(0x256)][_0x29b228(0x1c6)],Window_Message[_0x29b228(0x256)][_0x29b228(0x1c6)]=function(_0x183f01){const _0x56d60d=_0x29b228;VisuMZ['AniMsgTextEffects'][_0x56d60d(0x27e)][_0x56d60d(0x254)](this,_0x183f01),this[_0x56d60d(0x1c2)]!==''&&_0x183f01['drawing']&&(_0x56d60d(0x28c)===_0x56d60d(0x28c)?(this['processTextEffectCharacter'](_0x183f01),this[_0x56d60d(0x20b)]=!![],Imported['VisuMZ_3_MessageSounds']&&this[_0x56d60d(0x228)](_0x183f01),_0x183f01[_0x56d60d(0x251)]=![]):(_0x98bd7f['AniMsgTextEffects'][_0x56d60d(0x1cf)][_0x56d60d(0x254)](this),this['_textEffect']=''));},VisuMZ[_0x29b228(0x1fe)]['Window_Message_postFlushTextState']=Window_Message[_0x29b228(0x256)][_0x29b228(0x1c1)],Window_Message[_0x29b228(0x256)][_0x29b228(0x1c1)]=function(_0x4bcd32){const _0x4bdf4a=_0x29b228;VisuMZ[_0x4bdf4a(0x1fe)][_0x4bdf4a(0x246)][_0x4bdf4a(0x254)](this,_0x4bcd32);if(this[_0x4bdf4a(0x20b)]!==undefined){_0x4bcd32[_0x4bdf4a(0x251)]=!![],this[_0x4bdf4a(0x20b)]=undefined;if(Imported['VisuMZ_2_ExtMessageFunc']){if('vHbJA'===_0x4bdf4a(0x1bd))this['moveCustomMessageCursorPauseSign'](_0x4bcd32);else{if(!this[_0x4bdf4a(0x22c)])return;const _0x4d788e=_0x3e1e40[_0x4bdf4a(0x278)]['split'](''),_0x15262c=_0xbf5344['parse'](_0x460ef0[_0x4bdf4a(0x1d0)](_0x1ab569));for(const _0x4a5fd6 of _0x4d788e){_0x15262c['buffer']=_0x4a5fd6;if(_0x4a5fd6['trim']()!==''){const _0x24aa5a=this['_AniMsgTextEffectsContainer'][_0x4bdf4a(0x1ca)][_0x4bdf4a(0x1cc)],_0x297dea=new _0x128e25(this,_0x15262c,_0x24aa5a);this['_AniMsgTextEffectsContainer'][_0x4bdf4a(0x215)](_0x297dea);}const _0xe1e085=this[_0x4bdf4a(0x210)](_0x4a5fd6);_0x15262c['x']+=_0xe1e085;}}}}},Window_Message[_0x29b228(0x256)]['processTextEffectCharacter']=function(_0x586bfe){const _0xdb731d=_0x29b228;if(!this[_0xdb731d(0x22c)])return;const _0x478d3d=_0x586bfe[_0xdb731d(0x278)][_0xdb731d(0x22f)](''),_0x366008=JSON['parse'](JSON[_0xdb731d(0x1d0)](_0x586bfe));for(const _0x2cb6f4 of _0x478d3d){_0x366008[_0xdb731d(0x278)]=_0x2cb6f4;if(_0x2cb6f4[_0xdb731d(0x26f)]()!==''){const _0x3540a6=this[_0xdb731d(0x22c)]['children'][_0xdb731d(0x1cc)],_0xc89f38=new Sprite_TextEffect(this,_0x366008,_0x3540a6);this[_0xdb731d(0x22c)][_0xdb731d(0x215)](_0xc89f38);}const _0xbde37e=this[_0xdb731d(0x210)](_0x2cb6f4);_0x366008['x']+=_0xbde37e;}},Window_Base[_0x29b228(0x256)]['processDrawIconTextEffect']=function(_0x5cba6a,_0x4cebbe){const _0x2abd99=_0x29b228,_0x2717a1=JSON[_0x2abd99(0x1db)](JSON['stringify'](_0x4cebbe));_0x2717a1[_0x2abd99(0x25a)]=_0x5cba6a;const _0x360ad0=this[_0x2abd99(0x22c)][_0x2abd99(0x1ca)][_0x2abd99(0x1cc)],_0x195893=new Sprite_TextEffect(this,_0x2717a1,_0x360ad0);this[_0x2abd99(0x22c)][_0x2abd99(0x215)](_0x195893),_0x4cebbe['x']+=ImageManager[_0x2abd99(0x1c0)]+0x4;},VisuMZ[_0x29b228(0x1fe)]['Window_Message_newPage']=Window_Message['prototype'][_0x29b228(0x1f7)],Window_Message[_0x29b228(0x256)][_0x29b228(0x1f7)]=function(_0xb53ab4){const _0x886ac2=_0x29b228;VisuMZ[_0x886ac2(0x1fe)]['Window_Message_newPage']['call'](this,_0xb53ab4),this[_0x886ac2(0x1c2)]='',this['clearTextEffects']();},Window_Message[_0x29b228(0x256)]['clearTextEffects']=function(){const _0x1d52e4=_0x29b228;if(!this[_0x1d52e4(0x22c)])return;while(this[_0x1d52e4(0x22c)][_0x1d52e4(0x1ca)]['length']>0x0){const _0x350b79=this[_0x1d52e4(0x22c)][_0x1d52e4(0x1ca)][0x0];this[_0x1d52e4(0x22c)][_0x1d52e4(0x239)](_0x350b79);}},VisuMZ['AniMsgTextEffects'][_0x29b228(0x206)]=Window_Message['prototype'][_0x29b228(0x27c)],Window_Message['prototype'][_0x29b228(0x27c)]=function(){const _0xeac1d2=_0x29b228;VisuMZ[_0xeac1d2(0x1fe)][_0xeac1d2(0x206)][_0xeac1d2(0x254)](this),this[_0xeac1d2(0x22c)]&&this[_0xeac1d2(0x22c)][_0xeac1d2(0x1f3)]();},VisuMZ[_0x29b228(0x1fe)][_0x29b228(0x219)]=Window_Message[_0x29b228(0x256)][_0x29b228(0x25b)],Window_Message[_0x29b228(0x256)]['close']=function(){const _0x433f4f=_0x29b228;VisuMZ['AniMsgTextEffects']['Window_Message_close'][_0x433f4f(0x254)](this),this[_0x433f4f(0x22c)]&&this['_AniMsgTextEffectsContainer'][_0x433f4f(0x20d)]();},VisuMZ[_0x29b228(0x1fe)][_0x29b228(0x26b)]=Window_Options['prototype'][_0x29b228(0x22a)],Window_Options[_0x29b228(0x256)][_0x29b228(0x22a)]=function(){const _0x423859=_0x29b228;VisuMZ[_0x423859(0x1fe)][_0x423859(0x26b)]['call'](this),this[_0x423859(0x21b)]();},Window_Options['prototype'][_0x29b228(0x21b)]=function(){const _0x47e6a2=_0x29b228;VisuMZ['AniMsgTextEffects'][_0x47e6a2(0x25d)]['Options'][_0x47e6a2(0x213)]&&(_0x47e6a2(0x1ee)!=='GPZvR'?_0x3b239e=_0x3b9a15['max'](_0x299074,_0x4377e6):this[_0x47e6a2(0x29c)]());},Window_Options[_0x29b228(0x256)]['addTemplatetextEffectsCommand']=function(){const _0x5b3775=_0x29b228,_0x5a60f5=TextManager[_0x5b3775(0x1c5)],_0x11d449=_0x5b3775(0x1c5);this[_0x5b3775(0x288)](_0x5a60f5,_0x11d449);};