# Jillerellas Castle — Theme Design Context

> **Purpose.** This file is the single source of truth for the Jillerellas Castle brand
> design tokens and how they map into this Shopify theme (**"Horizon: LS Mod"** by Lantern Sol).
> It exists so any future session (Claude or human) can get full design context **without**
> re-extracting everything from Figma or re-discovering the theme's theming architecture.
>
> If you change tokens in the theme, **update this file too**.

---

## 1. Brand at a glance

- **Brand:** Jillerellas Castle (script wordmark "Jillerellas" + "CASTLE" + crown motif).
- **Personality:** regal / premium / elegant. Palette is **royal purple + gold + cream**.
- **Primary color:** `#5A3884` (brand purple). **Deep text purple:** `#241635`. **Gold accent:** `#BC9D62`.
- **Typeface:** **Jost** (geometric sans, Google font) for *everything* — headings and body.

---

## 2. Figma source (how to re-pull design context)

- **File:** `Jillerellas Castle | Web Design`
- **fileKey:** `A2QgUaiVNfgoM2eEpPNyzj`
- **Dev URL:** https://www.figma.com/design/A2QgUaiVNfgoM2eEpPNyzj/Jillerellas-Castle-%7C-Web-Design?node-id=6-3
- The design lives on the **🎨 Style Guide** page. There is no full-page mock in this file (only Cover + Style Guide).

### Node ID map (for `get_variable_defs` / `get_screenshot` / `get_design_context`)

| Section | Node ID | Notes |
|---|---|---|
| Style Guide (page) | `6:3` | root of everything below |
| Colors | `6:291` | Primary / Secondary / Neutrals / Error / Warning / Success / Info |
| Typography | `5:305` | font family + type scale |
| ↳ Type Scale — Desktop (table) | `2065:573` | the readable spec table (font / weight / size / line-height / case) |
| ↳ Type Scale — Mobile (table) | `2028:4373` | |
| Logos & Favicon | `4001:7240` | |
| ↳ Logos/Primary (crown lockup) | `7048:10902` | variants below |
| ↳ ↳ Primary=Color | `7048:10901` | purple + gold (default logo) |
| ↳ ↳ Primary=Black | `7048:10900` | all-black |
| ↳ ↳ Primary=White | `7048:10899` | cream/inverse (dark backgrounds) |
| ↳ Logos/Secondary (horizontal) | `7048:11026` | |
| ↳ Logos/Tertiary (stacked) | `7048:10772` | |
| Iconography | `4001:2015` | Phosphor icon set (open-source) |

**Fast path to tokens:** `get_variable_defs` on `6:291` (colors) and `5:305` (typography) returns
exact hex + `Font(...)` values. `get_metadata` on `6:3` is huge (~260k chars) — it gets saved to a
tool-results file; grep it for node names rather than reading whole.

> ⚠️ **Known Figma quirk:** heading `Font(...)` variable-defs record `letterSpacing: 0`, while the
> written type-scale table says **2%**. We follow the written table (2%). Also `Body/M` has a stray
> `Inter` reference in one variable set — ignore it; the type-scale table is authoritative and is **all Jost**.

---

## 3. Design tokens (ground truth)

### 3.1 Colors

**Primary (purple)**
| Step | Hex |
|---|---|
| 900 | `#241635` |
| 700 | `#3C2659` |
| 500 | `#5A3884` ← brand / `Background/brand` |
| 200 | `#B1A2C3` |
| 50  | `#EEEBF2` |

**Secondary (gold / "Neutrals-Dark" in the visual)**
| Step | Hex |
|---|---|
| 900 | `#4F4229` |
| 700 | `#856F46` |
| 500 | `#BC9D62` ← gold used in "CASTLE" + crown |
| 200 | `#E0D2B7` |
| 50  | `#F8F5EF` (cream) |

**Neutrals-Light** — 900 `#686765` · 700 `#B0AEAB` · 500 `#FBF8F4` · 200 `#FCFAF9` · 50 `#FEFEFE`
**Neutrals (gray)** — 100 `#F3F4F6` · 200 `#E5E7EB` · 400 `#9CA3AF` · 600 `#4B5563` · 900 `#111827`

**Semantic**
| Role | 700 | 500 | 50 |
|---|---|---|---|
| Error   | `#A73030` | `#EB4343` | `#FDECEC` |
| Warning | `#B2672B` | `#FA913C` | `#FFF4EC` |
| Success | `#359E5B` | `#4ADE80` | `#EDFCF2` |
| Info    | `#2A5CAF` | `#3B82F6` | `#EBF3FE` |

- `Background/default`: `#FEFEFE`

### 3.2 Typography — **Jost** (everything)

Type Scale — **Desktop** (line-height **120%** on every row, **Sentence** case):

| Element | Weight | Size | Letter-spacing |
|---|---|---|---|
| Headline 1 | Medium (500) | **64px** | 2% |
| Headline 2 | Medium (500) | **56px** | 2% |
| Headline 3 | Medium (500) | **48px** | 2% |
| Headline 4 | Medium (500) | **32px** | 2% |
| Headline 5 | Medium (500) | **24px** | 2% |
| Headline 6 | Medium (500) | **20px** | 2% |
| Body        | Medium (500) | 16px | 2% |
| Body Alternative | Regular (400) | 16px | 0% |
| Caption     | Regular (400) | 14px | 0% |
| Disclaim    | Regular (400) | 12px | 0% |

- Base: `1rem = 16px`. Sizes "automatically scale for all screen sizes" (theme uses fluid `clamp()`).
- Alternative headline style = same size, **Medium Italic** (used for accent/emphasis).

### 3.3 Logos

- 3 lockups: **crown (Primary)**, horizontal (Secondary), stacked (Tertiary).
- Each in **Color** (purple `#5A3884` + gold `#BC9D62`), **Black**, and **White/inverse** (cream `#F8F5EF`).
- **Usage:** Color logo on light backgrounds; **inverse (cream)** logo on dark/brand-purple backgrounds.
- Cleaned, transparent-background, header-ready SVGs are checked into
  **`figma/logos/logo-jillerellas-castle-color.svg`** and **`…-inverse.svg`**
  (the `figma/` folder is **git-ignored + shopify-ignored** — local handoff only, never deployed).
  These are for uploading to **Shopify Files**; the theme references logos via the store, not the theme.

---

## 4. Theme theming architecture (how tokens become pixels)

This is a customized **Horizon** theme. Theming is centralized:

| File | Role |
|---|---|
| `config/settings_schema.json` | Defines all theme settings (colors, fonts, type sizes, logo, etc.) + their allowed options/defaults. |
| `config/settings_data.json` | The **active values** live in the `current` {} object (auto-generated / editable by the theme editor). |
| `snippets/color-palette.liquid` | Turns `color_palette` + `palette_*` settings into `--color-*` CSS custom properties (+ smart hover/contrast). |
| `snippets/theme-styles-variables.liquid` | Turns typography settings into `--font-*` CSS vars, computes **fluid `clamp()`** sizes, and defines the line-height / letter-spacing token tables. |
| `snippets/fonts.liquid` | Preloads the four picker fonts. |
| `layout/theme.liquid` | Renders `theme-styles-variables` + `color-palette` in `<head>`. |

### 4.1 Colors — the 5-slot palette pattern

`settings.color_palette` is a **custom setting type** with 5 slots. **Almost every other color
setting defaults to one of these** (e.g. `"default": "{{ settings.color_palette.foreground }}"`),
so setting the palette cascades brand color everywhere.

| Slot | Value (this brand) | Feeds |
|---|---|---|
| `background` | `#FEFEFE` | `--color-background`, page bg, button text |
| `foreground` | `#241635` | `--color-foreground` (body text), `--color-border`, default dark UI |
| `color1` | `#5A3884` | brand purple → **primary button** (see below) |
| `color2` | `#F8F5EF` | cream → `badge_sold_out_background_color` |
| `color3` | `#E0D2B7` | gold → `palette_input_border`, `palette_variant_border` |

Some color settings store a **liquid reference string** as their value (resolved at render), e.g.
`"palette_input_border": "{{ settings.color_palette.color3 }}"`. We use the same pattern for the
primary button so the CTA tracks the brand purple:
```
"palette_primary_button_background": "{{ settings.color_palette.color1 }}",
"palette_primary_button_text":       "{{ settings.color_palette.background }}",
"palette_primary_button_border":     "{{ settings.color_palette.color1 }}"
```

### 4.2 Fonts — native Shopify font picker (NOT self-hosted)

- Four roles: `type_body_font`, `type_subheading_font`, `type_heading_font`, `type_accent_font`.
- Values are Shopify **font_picker handles**: `<family>_n<weight>` (e.g. `jost_n4` = Jost 400, `jost_n5` = 500).
- **Jost is confirmed available in Shopify's font library** — served from Shopify's CDN, so nothing
  font-related lives in the theme (per project decision).
- `theme-styles-variables.liquid` calls `font_modify` / `font_face` on these picker fonts to emit
  `@font-face` and the `--font-*--family/weight/style` vars. **Do not self-host Jost** unless Shopify
  ever drops it from the library.

### 4.3 Typography sizing / line-height / letter-spacing

- `type_size_h1..h7`, `type_size_paragraph` are `select`s of px values. `theme-styles-variables.liquid`
  turns each into a **fluid `--font-size--hN: clamp(min, vw, max)`** (min auto-derived from the next
  smaller size; cutoff at 48px).
- **Line-height** is a token select. Values: display-tight `1`, display-normal `1.1`, **display-loose `1.2`**;
  body-tight `1.2`, **body-normal `1.4`**, body-loose `1.6`.
- **Letter-spacing** is a token select. Heading tokens: heading-tight `-0.03em`, heading-normal `0`,
  **heading-loose `0.02em`** ← *tuned from 0.03em to hit the brand's exact 2%*.
- **Case:** `none` = Sentence case; `uppercase` = forced caps.
- Font role per heading: h1–h4 use the **heading** font, h5–h6 use the **subheading** font
  (both are Jost Medium here, so all headings render identically).

---

## 5. What was implemented (this session)

### `config/settings_data.json` → `current`
```
logo_height: 48, logo_height_mobile: 32

type_body_font: jost_n4        (Jost Regular 400 — running text)
type_subheading_font: jost_n5  (Jost Medium 500)
type_heading_font: jost_n5     (Jost Medium 500)
type_accent_font: jost_n5      (Jost Medium 500)

type_size_paragraph: 16,  type_line_height_paragraph: body-normal (1.4)*
h1: size 64, line-height display-loose (1.2), letter-spacing heading-loose (2%), case none
h2: 56 / display-loose / heading-loose / none
h3: 48 / display-loose / heading-loose / none
h4: 32 / display-loose / heading-loose / none
h5: 24 / display-loose / heading-loose / none   (font: subheading)
h6: 20 / display-loose / heading-loose / none   (font: subheading)

color_palette: { background #FEFEFE, foreground #241635, color1 #5A3884, color2 #F8F5EF, color3 #E0D2B7 }
palette_primary_button_background/border → color1 (#5A3884); text → background (#FEFEFE)
```

### `config/settings_schema.json`
- Added a **`64px`** option (`{"value":"64","label":"64px"}`) to all 7 heading size selects (H1 needs 64; it wasn't in the default list which jumped 56 → 72).
- Font defaults → `jost_n4` / `jost_n5`. `color_palette` default → bg `#FEFEFE` / fg `#241635`.

### `snippets/theme-styles-variables.liquid`
- `--letter-spacing--heading-loose: 0.03em` → **`0.02em`** (brand 2%). All headings reference `heading-loose`.

---

## 6. Key decisions & deviations (read before changing)

1. **Jost is native (Shopify library), not self-hosted.** Confirmed present in the theme editor font picker.
2. **Logos & fonts do not live in the theme.** Logos → Shopify Files (uploaded by merchant, set in editor).
   Fonts → Shopify font library. Nothing brand-asset lives in `assets/`.
3. **Body line-height = 1.4, not the Figma's 1.2.** Deliberate: 1.2 is too tight for long-form body text
   / accessibility. **Headings are exactly 1.2.** To match Figma exactly, set
   `type_line_height_paragraph` → `body-tight`.
4. **2% heading tracking** is implemented by tuning the shared `heading-loose` token to `0.02em`
   (nothing else currently uses `heading-loose`). If a future heading is set to "loose" expecting 3%, note this.
5. **H5/H6 grew from 14/12 → 24/20** to match the Figma scale. If any theme component used h5/h6 as tiny
   eyebrow/overline labels, re-check those spots.

---

## 7. How to apply / change the theming

- **Via theme editor:** Theme settings → Typography / Colors / Logo. Fonts: Body → Jost **Regular**;
  Subheading / Heading / Accent → Jost **Medium**.
- **Via CLI (applies everything at once):** `shopify theme push` from this branch pushes
  `settings_data.json` + `settings_schema.json` (fonts, sizes, line-heights, 2% tracking, palette).
- ⚠️ **Sync gotcha:** the theme editor writes to `settings_data.json` on the *store*. If you edit locally
  **and** in the editor, `push`/`pull` can overwrite one side. Pick one source of truth per change.

---

## 8. Open items / next steps

- [ ] Upload `figma/logos/*.svg` (or PNG) to **Shopify Files**; set **Logo** = color, **Inverse logo** = cream in the editor.
- [ ] Confirm the four fonts show **Jost** in the editor (Body Regular, others Medium), then Save.
- [ ] Favicon: not provided in the style guide — supply/set separately.
- [ ] **Header & Footer sections** (this branch is `new/header-and-footer-section`) — the Figma has no
  header/footer layout mock, only the style guide, so that build is a separate task once designs exist.
- [ ] Optional: decide whether body line-height should be the exact Figma 1.2 (`body-tight`) vs current 1.4.

---
*Design tokens extracted from Figma `A2QgUaiVNfgoM2eEpPNyzj` (Style Guide, node 6:3). Keep this file in sync with `config/settings_data.json`.*
