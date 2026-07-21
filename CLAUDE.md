# Jillerella's Castle — Shopify Horizon theme

Shopify Horizon-based theme. Homepage template: `templates/index.json`. Local dev server runs at `http://127.0.0.1:9292` (`shopify theme dev`); test visually with the chrome-devtools MCP (resize to 1440 for desktop, 390 for mobile). Figma designs come from the local Figma MCP (`get_design_context` + `get_screenshot` per node; small SVG assets can be curl'd from `http://localhost:3845/assets/...` and inlined).

## Brand tokens

- Purple (primary / color1): `#5A3884` · Cream (color2): `#F8F5EF` · Beige border (color3): `#E0D2B7`
- Gold accent: `#BC9D62` · Text: `#2B2B2B` · Subtle text: `#676767` · Background: `#FEFEFE` · Subtle bg: `#FCFAF9`
- Fonts: Jost everywhere. Use `var(--font-body--family)` / `var(--font-heading--family)` (also `--font-subheading--family`, `--font-accent--family`). Buttons: primary is already a purple pill (radius 50, white text) via theme settings.

## Two ways to build a section (both used on this repo)

1. **Stock composition in `templates/index.json`** — a `"type": "section"` entry (generic `sections/section.liquid`) with nested `group` / `text` / `icon` / `button` / `image` / `spacer` blocks. Fully editable in the theme editor. Examples: `hero_jVaWmY` (hero), `custom_trust_badges` (trust bar).
2. **Pure custom section file** in `sections/*.liquid` with `{% stylesheet %}` + schema. Use when stock blocks can't reach the design (masking, overlays, hover effects, inline SVGs). Example: `sections/custom-hero.liquid` was replaced by stock; `sections/custom-categories.liquid` is the live pure-custom example (BEM classes, schema blocks with presets, `placeholder_svg_tag: 'detailed-apparel-1'` fallback for empty image pickers, Figma SVGs inlined in the liquid).

Do NOT host stock-block compositions inside `sections/hero.liquid` — it always renders a placeholder SVG background when no media is picked and there is no desktop "hide media" option. Use the generic `section` type instead.

## Stock block cheat sheet (setting IDs verified against schemas)

- **group**: `content_direction` (row|column), `vertical_on_mobile` (row→column on mobile), row alignment: `horizontal_alignment` (justify) + `vertical_alignment` (align); column alignment: `horizontal_alignment_flex_direction_column` + `vertical_alignment_flex_direction_column`; mobile overrides behind `use_mobile_alignment` (`mobile_*` variants); `gap` (max 100) + `use_mobile_gap`/`mobile_gap`; `width`/`width_mobile` = fit-content|fill|custom (+`custom_width{_mobile}` %); `height` = fit|fill|custom; `background_media`/`background_color`; `border_radius`; paddings (`padding-block-start` etc.) + `use_mobile_padding` + `*-mobile`; `link`. A fit-content group with padding 8 around a 24px icon makes a 40px tile.
- **text**: `text` (HTML string), `type_preset` rte|paragraph|h1..h7|custom. With custom: `font` (CSS var), `enable_custom_font_weight`+`weight` ("600"), `font_size` (rem select: 1rem=16px, 1.125rem=18, 1.5rem=24, 2rem=32, 3rem=48, 3.5rem=56), `line_height` "custom"+`custom_line_height`; mobile: `type_preset_mobile` "custom"+`mobile_font_size`+`mobile_custom_line_height`; `text_color`, `width` (fit-content|100%), `max_width`, `alignment` (no mobile variant — center via parent group).
- **icon**: `icon` (built-ins incl. star, box, stopwatch, lock, heart, truck, leaf…), `image_upload` (image_picker — this is the merchant "upload logo" slot; no SVG uploads), `width`/`width-mobile` (px, note the hyphen), `icon_color`.
- **button**: `label`, `link`, `style_class` button|button-secondary|button-unstyled|button-custom, `button_arrow` default|show|hide, `width`/`width_mobile` fit-content|custom (+`custom_width{_mobile}`). No padding settings — pair with a **spacer** block (`size`: "pixel", `pixel_size`).
- **image**: `image` (image_picker), `image_ratio` adapt|portrait|square|landscape|custom, `custom_ratio` "4 / 3" (spaces required), `image_fit`, `width`/`width_mobile`, `border_radius`. Shows a placeholder until the merchant picks an image.

## Gotchas that cost real debugging time

1. **Mobile alignment quirk** ([assets/base.css](assets/base.css) ~2878): for groups with `row` + `vertical_on_mobile`, mobile `align-items` uses the **desktop** `--horizontal-alignment` — the mobile alignment override is ignored on the cross axis. Workaround: set the desktop `horizontal_alignment` to the alignment you want on mobile; on a fit-content group this has no desktop visual effect.
2. **Flex behavior follows the DESKTOP width class**: `.group-block--width-fit` → `flex: 0`, `fill` → `flex: 1`, `custom` → flex-basis. Mobile width only sets `--size-style-width-mobile`. So `fit-content` desktop + `fill` mobile = 100%-wide wrapping children. For a 2-up mobile grid use `width_mobile: "custom"`, `custom_width_mobile: 47`.
3. **image_picker values cannot be committed for files that aren't in the store yet** — no theme-asset references. Leave pickers empty; the merchant picks in the editor. The dev theme syncs editor picks back into `templates/*.json` ("Update from Shopify" commits) — pull before you edit templates.
4. **Fluid typography**: the theme scales root font-size on mobile (~20.45px at 390w), so rem text renders ~1.28× larger than the Figma px value. This is global and consistent — do not fight it with px.
5. **Section-level schema ≠ group schema**: `section.liquid` has no `use_mobile_alignment`/`mobile_*` alignment settings. Don't put invalid keys in section settings.
6. **Never blind-download into `assets/`** — the theme ships its own `icon-*.svg` files; a Figma export once silently overwrote `icon-angle-right.svg` (restored from git). Check for name collisions, or inline SVGs in the section file instead.
7. `gap` ranges max out at 100px. Figma gaps larger than that (e.g. 140) must be approximated (centered strip with gap 100 reads fine).
8. Settings omitted from JSON fall back to schema defaults; the theme editor will later write the full normalized set back into the template.
9. JSON templates start with an auto-generated comment block — that's valid; keep the JSON itself strict (no trailing commas).
10. Two-tone headings: use two stacked text blocks with different `text_color` inside a gap-0 group (rich text `<span style>` would be stripped by the editor).

## Workflow that worked

1. `get_design_context` + `get_screenshot` for desktop AND mobile nodes; note exact colors/sizes/gaps.
2. Read the relevant block schemas before writing settings JSON (`blocks/group.liquid`, `blocks/text.liquid`, …) — only verified IDs.
3. Compose in `index.json`, add the section id to `"order"`.
4. Verify on the dev server with chrome-devtools MCP at 1440 and 390; use `evaluate_script` to scroll to the section and check computed styles (font-size, align-items) — screenshots alone can hide misalignment.
5. Commit only `templates/index.json` / new section files; end commit messages with the Claude co-author line; push to `feature/*` branch; PRs go to `main`.
