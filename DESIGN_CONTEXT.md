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
  - **Fix (fix/fluid-heading-clamp):** the "next-smaller size" lookup was rewritten to a numeric inner
    loop. The original built a zero-padded string array but looked it up unpadded via single-arg
    `find_index` (which Shopify only supports in the two-arg object form) → `find_index` returned nil →
    every heading ≥48px collapsed to one size (with 64/56/48 that means H1=H2=H3=64px; it also hit the
    theme defaults, where h2 rendered at 72 instead of 48). The numeric loop is exact and dialect-safe.
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

## 5b. Component styling — Figma design-system pass (`feat/figma-ui-components`)

Five Figma component specs (Buttons `2275:2081`, Inputs `2275:2092`, Form Controls
`2275:2103`, Selectors `7335:7001`, Badges `2275:2125`) were applied by **modifying the
existing theme components** — no new components. Split between theme settings and one
contained CSS layer.

**Settings (`config/settings_data.json`):**
- Buttons: `button_border_radius_primary/secondary` → **50** (pill); secondary button =
  gold fill (`palette_secondary_button_background/border` = `#BC9D62`, text = background);
  `secondary_button_border_width` → 0.
- Inputs: `inputs_border_radius` → **8**. (Border already gold `#E0D2B7` via `color3`.)
- Variant selectors: default variant = white/dark/gold-border; **selected variant = purple**
  (`palette_selected_variant_background`=background, `_text`/`_border`=`color1`); swatch
  selected ring inherits the same purple. `variant_button_radius` → 8.
- Badges: sale = `#EEEBF2`/`#5A3884` (Save-XX%), sold-out = `#FDECEC`/`#A73030` (Out of Stock);
  `badge_corner_radius` stays 100 (pill).

**CSS layer (`assets/brand-components.css`, loaded after base.css via `snippets/stylesheets.liquid`):**
- Buttons: Jost **Medium (500)** weight (the `primary_button_font_weight` setting only offers
  400/700); a single `angle-right` **chevron AFTER the label** (`::after` mask + `currentColor`),
  scoped to text-only CTAs (`:not(:has(svg))` so icon/payment buttons are untouched). The arrow
  is controlled at two levels: the **`button_show_arrow`** theme setting (Buttons group, default
  on) is the store-wide default (drives `--button-arrow-display` on `:root`); the **button block**
  adds a per-button **`button_arrow`** select (Theme default / Show / Hide) that writes an inline
  `--button-arrow-display` on that one `<a>` (see `snippets/button.liquid`), so individual
  placed buttons can opt in/out. Primary→gold / secondary→purple **hover swap**.
- Inputs: focus = purple box-shadow ring; error (`[aria-invalid="true"]`/`.field--error`) =
  red ring + `#FDECEC` fill + `#A73030` text. (The input "border" is a box-shadow on
  `--color-input-border`.)
- Form controls: `input[type=radio|checkbox]` gold border unchecked → **purple checked**;
  checkbox corners softened (4px); gold hover.
- Selectors: `.product-tabs__tab[aria-selected]` → purple text + purple underline;
  `.quantity-selector` → pill.

Verified in an offline harness (real base.css + brand-components.css + brand CSS vars) — see
the screenshot flow in the branch. **Note:** chevrons apply to every text `.button` /
`.button-secondary`; if any specific CTA shouldn't have them, scope it out in
`brand-components.css`. Badge *custom* variants (Vegan / New Formula, etc.) need
metafield-driven markup and were not added.

## 5c. Header bar — Figma pass (`feature/new-navigation-bar`)

Header now matches the Figma header (desktop node `7116:14012`, mobile `7116:14572`,
`7063:11510`). The theme's header was **already** logo-left / menu-left / search-right /
actions-right, so this was a visual + search pass, not a re-layout. No new sections/blocks.

**Settings (`sections/header-group.json` → `header_section`):**
- `background_color_top` → **`#FCFAF9`** (Neutrals-Light/200, brand-subtle); was palette bg (#FEFEFE).
- `border_width` → **1** + `bottom_border_color` → **`#F8F5EF`** (Secondary/50) — the header's
  hairline bottom border (desktop + mobile).
- `type_font_primary_size` (header-menu block) → **`1rem`** (16px, Figma body); was 0.875rem.
- `show_country` → **false** — the Figma omits the currency/region selector. **Reversible:**
  flip back to `true` (or set in the theme editor → Header → Localization) to restore it.

**Markup / CSS (co-located with the theme's own header files):**
- **Expanded search bar:** `snippets/search.liquid` gained an `expanded` param; `sections/header.liquid`
  passes `expanded: true` to the *main* top-row search only (not `drawer_search`). On desktop it
  renders as a pill "input" — cream `#F8F5EF` fill, gold `#E0D2B7` border, 32px radius, 48px tall,
  `clamp(220px,22vw,300px)` wide, left placeholder + right search icon. It is **still a button that
  opens the existing search modal** (`#search-modal/showDialog`) — predictive search UX is preserved,
  it is not a raw `<form>`. On mobile it collapses to the plain 40px icon (expanded styles are
  `min-width:750px`; placeholder is `mobile:hidden`). Placeholder string = new locale key
  `content.search_bar_placeholder` ("What are you looking for?") in `locales/en.default.json`.
  Override colors via `--color-search-bar-background` / `--color-search-bar-border` / `-border-hover`.
- **Pill nav hover:** `blocks/_header-menu.liquid` adds `border-radius:20px` + a subtle
  `rgb(foreground / .06)` fill on hover/focus/active to top-level links (desktop menu mode, non-overflow
  only). At rest the nav is plain text + caret on items with children — which already matched the Figma.

**Not changed:** the caret on Shop/Collections is the theme's existing `icon-chevron-down` for links
with submenus (Figma shows the same).

### 5c-ii. Icons + font follow-up (same branch)

**Font (two real bugs, now fixed):**
- `snippets/menu-font-styles.liquid` hardcoded `--menu-top-level-font-weight: 700` → nav rendered
  **Bold**. Changed to `var(--font-{{ settings.type_font_primary_link }}--weight)` so it follows the
  selected role (body = Jost **Regular 400**), matching the Figma nav. (Affects all menu top-level
  links, incl. mega-menu — intended.)
- Header text was the brand purple `#241635`; the Figma header text/icons are **`#2B2B2B`**
  (Text/default). Set `text_color_top` → **`#2B2B2B`** in `header-group.json`; this drives nav text,
  the search placeholder, and every `currentColor` icon in the top row.

**Icons — defaults now match Figma (Phosphor-ish set), sanitized to `currentColor` + `aria-hidden`,
`viewBox` tightened to the glyph so they fill the icon box:**
- Replaced in place (safe — header-scoped or same-concept): `assets/icon-search.svg`,
  `assets/icon-cart.svg` (header-only), `assets/icon-menu.svg` (header-only), `assets/icon-account.svg`
  (was unused; header account was an inline SVG, now uses this asset). `icon-search.svg` is also used
  by the search modal/input — same magnifier, so consistent.
- **Did NOT touch `assets/icon-close.svg`** — it's shared by 12 files (cart drawer, galleries, modals…).
  Added a header-only `assets/icon-header-close.svg` (Figma thin X) used **only** for the mobile
  drawer's hamburger→close toggle.

**Merchant icon uploads:** new `snippets/header-icon.liquid` renders an uploaded image when set,
else the default SVG (`{% render 'header-icon', icon: <image>, name: 'search|account|cart|menu' %}`).
Four `image_picker` settings live in the **Header section** schema (`sections/header.liquid`):
`header_icon_search`, `header_icon_account`, `header_icon_cart`, `header_icon_menu`. Wired through
`section.settings.*` at each render site (search via a `search_icon` param on `search.liquid`;
cart + account in `header-actions.liquid`; hamburger in `header-drawer.liquid`). Uploaded icons render
as `<img class="header-icon-custom">` sized to `--icon-size-md`. **Note:** `image_picker` is for
raster images (PNG/JPG); SVG upload isn't supported by that setting — the *defaults* are SVG.

**Hardening (post multi-agent review):** the custom-upload path was made a true drop-in replacement:
the cart count-bubble donut `mask` now targets `:is(svg, img.header-icon-custom)`; uploaded account
and mobile-hamburger images get the same per-context padding/size as their default SVGs; the mobile
drawer's signed-out account glyph now routes through `header-icon` too (so `header_icon_account`
works on mobile and matches the desktop Figma glyph). The expanded search bar's `aria-label` now
mirrors the visible placeholder (WCAG 2.5.3), the placeholder is suppressed in `Text` display mode to
avoid a doubled label, and its margin-reset is scoped to both left and right columns.

## 5d. Mega menu — Figma pass (`feature/new-navigation-bar`)

Desktop node `7116:15914`, mobile node `7116:14581`. Verified live in Chrome DevTools MCP
against `http://127.0.0.1:9292` (theme dev). The Figma is a **text-column** mega menu, so the
header-menu block was switched from `featured_collections` → **`menu_style: text`** and its
`background_color` → **`#FCFAF9`** (panel matches the header). `drawer_dividers` → **false**.

**Desktop (`snippets/mega-menu-list.liquid` text branch + `blocks/_header-menu.liquid` CSS):**
- The theme's text mode grouped childless links into one column; replaced it with a dedicated
  branch that renders **each top-level child as its own equal flex column** (heading + links +
  "View all"). Purple 18px Jost-Medium heading (`.mega-menu__link--heading`), 16px `#2B2B2B`
  links, panel insets 24/40/52/24, 24px column gap.
- Active/open parent nav item → **filled purple pill** (`#5A3884`/`#FEFEFE`).

**Mobile (`snippets/header-drawer.liquid` markup + CSS):** the top-level drawer items were converted
from the theme's **slide-in** submenu to a true **inline accordion** — removed
`on:click="header-drawer/open/submenu"` from the top-level `<summary>` so native `<details>` toggles
it in place; CSS makes `.menu-drawer__menu-container > .menu-drawer__submenu` flow inline
(static, no `translateX`), hides the slide-only back/close row, lays categories out in a 2-column
`columns:2` block, 18px pill items (active = purple), purple headings, 16px links. The menu scrolls
inside `.menu-drawer__navigation` so the **Account bar stays pinned** at the bottom (label changed
`Login` → `content.account_title` = "Account"). Verified: real clicks toggle the accordion; the
whole-drawer open/close still works.

**"View all" (both):** the merchant's menu already contains a **"View all" child link** in each
category — the theme was injecting a second one (the reported duplicate). Fix: detect a child/grandchild
whose title is `view all` (case-insensitive) and render it via the shared `snippets/menu-view-all.liquid`
(text + `assets/icon-angle-right.svg`); render nothing extra. **Caveat:** the arrow treatment is keyed
on the literal title "View all", so a renamed/localized link degrades to a plain link.

**Known deviations from the mock:** the mobile 2-column category order is column-major
(`columns:2` balances height, short categories stack) rather than the Figma's hand-grouped row-major
placement — a content-aware layout that can't be reproduced generically. Reversible via
`sections/header-group.json` (`menu_style` back to `featured_collections`).

**Follow-up fixes (user-reported, browser-verified):**
- **Hover = brand pill:** all top-level nav links (with or without children) now hover/focus/
  active/open to the filled `#5A3884` pill with `#FEFEFE` text (was a light-gray tint).
- **Desktop caret animates:** `.icon-chevron-down` rotates 180° (up) when its item is hovered or
  `[aria-expanded='true']`, with the standard transition.
- **Mobile pill caret:** the legacy `.svg-wrapper.icon-caret--forward` caret collapsed to 0 width in
  the pill's flex context (unresolvable legacy-CSS interaction — inline width and identical injected
  rules also lost). Replaced with a dedicated `.menu-drawer__caret` element rendering the shared
  `icon-chevron-down` snippet: visible, down at rest, up+white when the pill is open.
- **Hamburger size:** drawer toggle icon bumped `--icon-size-xs` (13.6px) → `--icon-size-sm` (20px)
  to match the search/cart icons (equal boxes in the Figma).
- **Compact pill + 24px nav gaps:** the theme's top-level links were full-header-height with inner
  title padding and a zero-gap list — the purple hover fill painted a giant "fatty" pill and links
  looked glued together. Now the `<li>` keeps the full height (hover target / mega-panel hover
  bridge preserved), while the visible link is the Figma's **35px capsule** (`padding: 8px 12px`,
  radius 20, centered) and the list gets `gap: 24px` (negative end-margins removed, title padding
  zeroed). Scoped to desktop menu mode, top-level, non-overflow items.
- **Submenu link hover = underline:** category links in the text mega menu now underline on hover
  (`text-underline-offset: .2em`) with the color pinned to `#2B2B2B` (was a purple color-swap).
  Headings/View-all hover behavior unchanged.
- **Account icon size:** removed the legacy `.account-button svg { padding: 2px }` inset (tuned for
  the old stroked glyph) — it shrank the Figma person to ~18px vs the 22px cart. Now both render
  22px; the matching inset for uploaded custom account images was removed too, keeping default and
  custom drop-in consistent.

## 5e. Collections card submenu (`feature/new-navigation-bar`)

Figma desktop `7116:15915`, mobile `7116:14653` — the "Collections" nav item opens a dropdown of
**gradient promo cards** (desktop: equal-width row in the mega panel; mobile: 2-column grid inline
in the drawer accordion). Fully **merchant-editable**, browser-verified at both breakpoints.

**Architecture:**
- **`blocks/_menu-collection-card.liquid`** (new, name ≠ existing `_collection-card` which belongs to
  collection lists): one card = one theme block. Settings: `title`, `subtitle`, `button_label`,
  `link` (url), **`card_background` (`color_background` — solid or CSS gradient)**, `text_color`.
  Card markup: `<a class="menu-collection-card">` with `--card-background`/`--card-text` inline vars;
  radius 16, bottom-left content, title 20→24px SemiBold, subtitle 14→16px, CTA 14px Medium +
  `icon-angle-right`; mobile `padding-top: 60px`, desktop `min-height: 168px`.
- **`blocks/_header-menu.liquid`**: schema gained `"blocks": [{"type": "_menu-collection-card"}]` +
  a `cards_menu_item` text setting (default **"Collections"**). The block file captures
  `{% content_for 'blocks' %}` once and (a) desktop: in the children loop, the top-level link whose
  title matches `cards_menu_item` (case-insensitive) renders as a has-children item whose
  `.menu-list__submenu` contains `.collection-cards` (flex row, 16px gap, panel insets 24/40, page
  margins via the `.section` grid wrapper — do NOT `display:block` it, that kills the margins);
  (b) mobile: passes the captured HTML + key into `header-drawer` as `collection_cards`/`cards_item_key`.
- **`snippets/header-drawer.liquid`**: matching top-level item renders an inline-accordion
  `<details>` (same pill/caret as other items) whose panel is `.menu-drawer__collection-cards`
  (grid, 2 columns, 16px gap). Also added a **desktop-drawer fallback** (`[data-menu-style='drawer']`
  ≥750px): since the top-level slide-in JS binding was removed, submenus/card panels open inline
  there too (the theme auto-switches to drawer mode when the desktop menu overflows).
- **`sections/header-group.json`**: seeded 4 default cards matching the Figma — Women
  `#EC4B9B→#A90255`, Men `#297EC6→#005094`, Kids `#F9A826→#BE7500`, Gifts `#16C0A8→#0D7365`
  (117deg, white text, links → `shopify://collections/all`). The stale duplicate `"blocks": {}` key
  on the header-menu entry was removed (duplicate JSON keys: last one wins → would wipe the cards).

**Merchant flow:** Theme editor → Header → **Menu** block → add **Collection card** blocks
(add/remove/reorder); each card's link/colors/text are block settings; which nav item hosts the
dropdown is the Menu block's "Menu item title" setting. If no cards are added, the item falls back
to a plain link (no empty dropdown).

**Gotcha (fixed):** the desktop submenu is a descendant of `.menu-list__list-item`, which sets
`white-space: nowrap` for the nav pills — card text inherited it and clipped at narrow widths.
`.menu-collection-card` resets `white-space: normal` + `overflow-wrap: break-word`; cards use
`min-height` (not fixed height) so they grow as text wraps. Verified at 860/1200/1440px.

## 5f. Footer — Figma pass (`sections/footer.liquid`)

Desktop node `7134:17312`, mobile node `7134:17433`. Verified live in Chrome DevTools MCP against
`http://127.0.0.1:9292` at 1440 and 390. The Figma footer is one cohesive purple block whose layout
is **asymmetric** (410px newsletter + three equal menu columns + logo) and whose bottom bar carries
**payment icons + a "Designed by" credit**. Neither is reachable with the stock footer grid
(`repeat(N, 1fr)`) or with `footer-utilities` (which only accepts copyright / policy-list /
social-links blocks), so `sections/footer.liquid` was rewritten as a **pure custom section** —
option 2 in CLAUDE.md's "two ways to build a section".

**Structure** — `.footer-custom` inside the theme's existing `.section section--page-width` wrapper
(kept, so the footer's content column lines up with the header and every other section). At 1440 that
column is **exactly 1340px**, which is the Figma divider width — the design and the theme's
`page-width-narrow` (90rem, 50px margin) agree.

- Top row: newsletter (`flex: 0 0 min(410px, 32%)`) + three `link_list` menu columns + inverse logo
  (right-aligned, `settings.logo_inverse` → falls back to `settings.logo` → shop name).
- Bottom bar: 1px divider (30% tint of the text color), copyright + credit left, payment icons right.
- Breakpoints: `<750px` mobile (everything stacks; input above button; **menu links in `columns: 2`**,
  which reproduces the Figma's column-major split exactly for all three menus; logo centered at 192px),
  `750–989px` newsletter stacks above the menu row, `≥990px` the full Figma desktop row.

**Type / color are px-exact to the Figma** (px, not rem — gotcha #4's fluid rem scaling would inflate
mobile): heading 32/600, menu headings 18/500, links 16/400, captions 14/400, all `#FEFEFE`; input
`#FCFAF9` fill / `#E0D2B7` border / 32px radius / `#676767` placeholder; Subscribe pill `#BC9D62`,
50px radius, 16/500. Jost 600 is real (not synthetic) — `theme-styles-variables.liquid` emits
`@font-face` for weights 100–900.

**Two specificity traps (both fixed, don't undo them):**
1. `base.css:1517` `input:not([type='checkbox'], [type='radio'])` is **(0,1,1)** and forces
   `--color-input-background`/`--color-input-border` onto the email field, beating a single class.
   The rule is scoped `.footer-custom .footer-custom__input` to win. (Its border color matching
   `#E0D2B7` was a coincidence — `palette_input_border` is already color3.)
2. The local `.footer-custom a { text-decoration: none }` reset is also (0,1,1) and killed the
   underline on "Lantern Sol"; that rule is scoped `.footer-custom .footer-custom__credit-link`.

**Deliberate deviations:** page margin is the theme's 50px desktop / 12px mobile rather than the
Figma's 40/16, so the footer stays aligned with the rest of the site — this makes each menu column
182.5px instead of 187.5px. The Subscribe button uses its own class, **not** `.button` /
`.button-secondary`, so `brand-components.css` does not inject a chevron into it (see §5b).

**Payment icons** come from `shop.enabled_payment_types` (same source as the theme's `payment-icons`
block) and therefore render nothing on a dev store with no payment provider configured — the Figma's
six icons will appear once payments are enabled. `sections/footer-group.json` was reduced to the single
`footer` section; the old `utilities` (`footer-utilities`) section was removed because the design drops
the policy list and social links — recover it from git history if it is ever wanted back.

Also added locale key `content.all_rights_reserved` ("All rights reserved.") in `locales/en.default.json`.

## 5g. Product page — Figma pass (`templates/product.json`)

Desktop node `7206:10321`, mobile node `7206:10603`. Verified live in Chrome DevTools MCP
against `http://127.0.0.1:9292` at 1440 and 390 with computed styles, not just screenshots.

Built by composing the theme's own `product-information` section — no replacement section.
Four new theme blocks cover what stock blocks could not reach; everything else is settings
plus one page stylesheet.

**New blocks**
- **`blocks/brand-heading.liquid`** — the centred purple heading over a 68×4 gold rule that
  the Figma repeats three times (Pairs well with / Customer reviews / You may also like). A
  stock `text` block can render the heading but has nowhere to hang the rule.
- **`blocks/product-badge.liquid`** — the SALE / NEW IN / SOLD OUT pill above the title. Same
  look as the card badge in `_product-card-gallery`, but in normal flow instead of absolutely
  positioned over media, and driven by the same `new-in` product tag. Renders nothing when no
  state applies, so it never contributes a stray gap.
- **`blocks/product-highlights.liquid`** + **`blocks/product-highlight.liquid`** — the 2×2
  reassurance grid (coloured icon tile + 14px headline + 12px sub-line). The tracks are
  `minmax(0, max-content)`, not `1fr`: the Figma's second column starts at a fixed offset
  rather than drifting with the container. Column gap 80 desktop / 16 mobile.

**Extensions to existing blocks** (all opt-in; every other placement is unchanged)
- `blocks/price.liquid` + `snippets/price.liquid`: `show_savings` (none / amount / percent)
  renders "Save $19" beside a sale price, plus a `savings_color`. Computed before the money
  formatting, since `price`/`compare_at_price` are reassigned to strings further down.
- `blocks/review.liquid`: `count_format: summary` renders the Figma's `5.0 (142 reviews)` on
  one line, and a `star_color` that recolours the stars without dragging the count with them
  (`.rating-count` now reads `--color` instead of `--star-fill-color`; identical output when
  only `text_color` is set).
- `blocks/variant-picker.liquid` + `snippets/variant-main-picker.liquid`: `show_selected_value`
  puts the chosen value after the option name for button options (swatches always did), and a
  size-guide link (`size_guide_option` / `_label` / `_link`) that renders on the right of the
  matching option's legend. The option name is wrapped in `.variant-option__label-name` so the
  colon can be drawn in CSS rather than typed into the merchant's option name.
- `blocks/text.liquid`: a `custom_class` setting, passed to the `class` param
  `snippets/text.liquid` already accepted. This is the hook page CSS needs for px type that
  must not scale with the theme's fluid rem (gotcha #4) — a stock text block otherwise offers
  nothing to select on.
- `sections/` + `blocks/product-recommendations.liquid`: a `show_dots` setting. **Two bugs
  fixed while wiring it up:** `slide_count` was `recommendations.products.size`, which is 0 on
  the first render (recommendations are fetched client-side) so the dots never met the
  `slide_count > 1` gate — now `slides.size`, matching the fix already made in
  `product-list.liquid`. And `resource-list-carousel` reads the *render param* `show_dots`, not
  `settings.show_dots`, so it has to be passed explicitly (see `snippets/resource-list.liquid`).

**Shared product card.** "Pairs well with" and "You may also like" draw the same card as the
collection grid, so `assets/collection-page.css`'s card rules were rescoped from
`.collection-results` to **`.product-card-grid`**, and that class was added to
`sections/main-collection.liquid`, `sections/product-recommendations.liquid` and
`blocks/product-recommendations.liquid`. One source of truth, no duplication.

**`assets/product-page.css`** (loaded from `snippets/stylesheets.liquid`) carries the rest:
column split, gallery mobile dots, details typography, price row, variant pills, buy row, tabs,
upsell panel, reviews and breadcrumbs. px, not rem, throughout — same reasoning as the footer
and collection page.

**Gotchas that cost time here (don't undo these):**
1. `.price__hidden` is (0,1,0). The price snippet always renders both the regular and the sale
   row and hides the irrelevant one, so the flex rule for the price row is written
   `:not(.price__hidden)` — otherwise the price shows twice.
2. `_product-details` wraps every block in an outer `.group-block`. The rule that hides the
   upsell panel when it has no recommendations uses child combinators
   (`:has(> .group-block-content > .product-recommendations-wrapper …)`); a descendant-only
   `:has()` also matches that wrapper and blanks the **entire details column**.
3. The theme's `variant_button_width` setting lays the fieldset out as a grid of `1fr` tracks,
   which stretches the size pills full width and drops the legend into a cell. The product page
   returns it to a wrapping flex row rather than changing the store-wide setting (dropdowns and
   quick-add still want the grid).
4. Below 990px the document scrolls; **at ≥990px `.page-wrapper` is the scroller**
   (`base.css:36`). `window.scrollTo` does nothing on desktop — scroll `.page-wrapper`, or
   recommendations never enter the viewport and never fetch.
5. The Judge.me widget is an app block with no width setting inside a flex column, so it
   collapsed to zero width. `[id$='__reviews'] .shopify-app-block { width: 100% }` — keyed on
   the section id because a `_blocks` section takes its class from the section file and cannot
   be given a per-instance one.
6. **`base.css:5209` draws `border: 1px solid var(--color-border)` on every direct child of
   `.product-recommendations`** — a dark rectangle around the section wrapper, its background
   layer and the card row, in both recommendation areas. Reset in `product-page.css`; the Figma
   has no such frame. (It gets more obvious once a section background sets `--color-border`.)
7. **`slideshow-slide` clips its content**, which shears the card drop shadow off on all four
   sides inside a carousel — the cards read flat. Slides that hold cards are set to
   `overflow: visible`, and the scroll track gets `padding-inline: 6px` so the first and last
   card's shadow is not cut by the track edge. Three companions are required, or the fix
   creates worse problems: `margin-inline: -6px` to put the row back where it was,
   `width: calc(100% + 12px)` because the track is `box-sizing: border-box` with a resolved
   width (padding alone shrinks the content box, and slide widths are a share of it, so every
   card comes out narrow), and `scroll-padding-inline: 6px` because snapping aligns a slide's
   start to the *padding box* — without it the track rests 6px scrolled and the row sits left
   of its column on mobile.
7b. **`--peek-next-slide-size` (3rem) is subtracted from the track before the slide width is
   divided out**, so the next slide can peek past the last column. With pagination dots on
   there is no peek, and leaving the reserve in place makes every slide ~12px narrower than its
   column — the row ends short and the remainder is stranded on one side (which reads as "the
   cards aren't centred"). `snippets/resource-list.liquid` already zeroed it plus
   `--mobile-card-size`; `snippets/resource-list-carousel.liquid` did not, and it is the
   snippet the recommendation section and block render directly. Now handled in both.
8. **Icons in custom blocks need `fill: currentColor`.** Most paths in `snippets/icon.liquid`
   carry no `fill` of their own and render black; the stock icon block gets it from
   `.icon-default` in `base.css`. `blocks/product-highlight.liquid` sets it on
   `.product-highlight__icon`.

**Deliberate deviations:**
- Page margins stay the theme's 50px rather than the Figma's 80px, so the product page lines up
  with the header, collection page and footer. The column split is tuned to `1.163fr 1fr` so
  the *content* widths still land on the Figma's 668:572 ratio inside a 40px gutter.
- **Sticky details column is off.** The Figma annotates the column as sticky, but with the
  highlights, tabs and upsell panel added it is ~1500px tall — `position: sticky` would pin it
  and make its bottom unreachable. The floating sticky add-to-cart bar covers the same need.
- **"Buy it now"** (dynamic checkout) is not in the Figma. Rather than dropping a real
  storefront feature it is pushed onto its own full-width row under the quantity + Add to cart
  row (`flex: 1 0 100%`).
- The short summary above the divider and the Product details tab are **both** bound to
  `product.description`; a dynamic source in a JSON template accepts **no filters at all**
  (`| strip_html` is rejected as an unsupported filter, and two filters are rejected outright),
  so the summary is clamped to three lines in CSS instead of truncated in Liquid. A merchant
  who wants a bespoke teaser types over the block's text in the editor.
- **"Pairs well with" uses `complementary` recommendations**, which are curated per product in
  Shopify's Search & Discovery app. Until a product has them the panel hides itself entirely
  (see gotcha 2) rather than painting an empty cream card. Switch the block to `related` if a
  populated panel matters more than the curation.
- Product option order (Size before Colour on the sample product) comes from the product admin,
  not the theme; the Figma shows Colour first.

Also added locale keys `content.price_savings`, `content.rating_summary_html`,
`content.review_singular` and `content.size_guide` to `locales/en.default.json`.

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
- [x] **Header** — matched to Figma (`7116:14012` desktop, `7116:14572`/`7063:11510` mobile) on
  `feature/new-navigation-bar`. See **§5c**. Localization is hidden to match the design (reversible).
- [x] **Footer section** — matched to Figma (`7134:17312` desktop, `7134:17433` mobile). See **§5f**.
  Payment icons stay hidden until a payment provider is enabled on the store.
- [x] **Product page** — matched to Figma (`7206:10321` desktop, `7206:10603` mobile). See **§5g**.
- [ ] Product page follow-ups: set the **Size guide** link on the variant-picker block, and add
  **complementary products** in Search & Discovery so the "Pairs well with" panel appears.
- [ ] Optional: decide whether body line-height should be the exact Figma 1.2 (`body-tight`) vs current 1.4.

---
*Design tokens extracted from Figma `A2QgUaiVNfgoM2eEpPNyzj` (Style Guide, node 6:3). Keep this file in sync with `config/settings_data.json`.*
