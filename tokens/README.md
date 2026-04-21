# Now Batting — Design Tokens v1.0

Developer handoff bundle for the Now Batting walk-up-song app. Use this package as the single source of truth when you build the app, website, or any printed doc that carries the brand.

## File manifest

| File | Purpose |
| --- | --- |
| `tokens.json` | Source-of-truth JSON. Use to generate other platforms (Android, iOS, Style Dictionary, Figma). |
| `tokens.css` | Plain CSS custom properties on `:root` plus a few utility classes. Drop into any vanilla, Next.js, Vite, or plain HTML project. |
| `tailwind.config.js` | Full Tailwind v3+ config with tokens namespaced under `nb-*`. Merge into an existing config or use as-is. |
| `README.md` | This file. |

## Install

**Plain CSS.** Copy `tokens.css` into your project and import it once at the top of your global stylesheet. Fonts load automatically from Google Fonts.

```html
<link rel="stylesheet" href="/tokens.css">
```

**Tailwind.** Merge `tailwind.config.js` into your existing config (or replace it if starting fresh). Load the same Google Fonts in your HTML head:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## When to use neon vs daylight

This is the single most important rule in the whole system.

- **Daylight accent `#B8CC00`** goes on anything functional: primary CTAs, active tab in nav, selected toggle. It has to read in direct sun, so it trades a little brand energy for legibility.
- **Neon accent `#DFFF00`** is reserved for the moment: active batter row in the lineup, live waveform on Now Playing, current progress fill. If the thing is not happening right now, it is not neon.
- **Never put `#DFFF00` on `#FFFFFF` for text.** The contrast fails accessibility and fails outdoors. If you need neon text, put it on dark `#1F1F1F`.

Rule of thumb: daylight builds the UI. Neon decorates the moment.

## Component recipes

### Primary button

Plain CSS:

```html
<button class="nb-btn-primary">
  <svg ...></svg>
  Generate Walk Up Song
</button>
```

Tailwind:

```jsx
<button className="h-nb-btn rounded-nb-md bg-nb-daylight text-nb-text px-6 font-bold text-[15px] inline-flex items-center gap-2.5 min-h-nb-tap active:scale-nb-tap transition-transform duration-nb-base">
  <PlayIcon className="w-4.5 h-4.5" />
  Generate Walk Up Song
</button>
```

### Secondary button

Plain CSS:

```html
<button class="nb-btn-secondary">
  <svg ...></svg>
  Save to Lineup
</button>
```

Tailwind:

```jsx
<button className="h-nb-btn rounded-nb-md bg-nb-surface text-nb-text border border-nb-dividerStrong px-5.5 font-semibold text-[15px] inline-flex items-center gap-2.5 min-h-nb-tap">
  Save to Lineup
</button>
```

### Card

Plain CSS:

```html
<article class="nb-card">
  <p class="nb-eyebrow">01 / Now Playing</p>
  <h2 class="nb-h2">Power</h2>
  <p class="nb-body">Kanye West, 3:42</p>
</article>
```

Tailwind:

```jsx
<article className="bg-nb-surface border border-nb-divider rounded-nb-lg p-nb-6">
  <p className="font-mono text-nb-mono uppercase text-nb-text-muted">01 / Now Playing</p>
  <h2 className="font-sans text-nb-h2 font-bold text-nb-text">Power</h2>
  <p className="font-sans text-nb-body text-nb-text-secondary">Kanye West, 3:42</p>
</article>
```

### Progress bar

Plain CSS:

```html
<div class="nb-progress">
  <div class="nb-progress-fill" style="right: 42%"></div>
</div>
```

Tailwind:

```jsx
<div className="h-nb-progress bg-black/10 rounded-[3px] overflow-hidden relative">
  <div className="absolute inset-y-0 left-0 bg-nb-neon rounded-[3px]" style={{ right: '42%' }} />
</div>
```

### Active player row

Plain CSS:

```html
<div class="nb-active-row">
  <span class="nb-eyebrow">03</span>
  <strong>J. Ortiz</strong>
  <span style="color: var(--nb-text-muted); margin-left: auto">Power</span>
  <div class="nb-play-button">
    <svg ...></svg>
  </div>
</div>
```

Tailwind:

```jsx
<div className="relative bg-nb-surface border border-nb-divider rounded-nb-md py-3.5 pl-5.5 pr-4.5 flex items-center gap-3.5 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:rounded-r-[3px] before:bg-nb-neon before:shadow-nb-neon">
  <span className="font-mono text-[12px] text-nb-text-muted font-semibold w-8">03</span>
  <strong className="text-[14px] font-bold text-nb-text flex-1">J. Ortiz</strong>
  <span className="text-[12px] text-nb-text-muted">Power</span>
  <div className="w-7.5 h-7.5 rounded-full bg-nb-dark text-nb-neon flex items-center justify-center">
    <PlayIcon className="w-3.5 h-3.5" />
  </div>
</div>
```

## Iconography

Use the Lucide icon set (or any equivalent open, consistent-stroke set). Keep stroke weight at 2px and corner radius on icons at 2px. Never mix outline and filled variants in the same row.

Core icons used in the system: `sun` (sunlight principle), `zap` (moment driven), `target` (fast interaction), `layers` (cognitive load), `music` (brand), `play` / `pause` (playback), `waveform` (now playing state), `home` / `users` (navigation), `check` / `x` (outcomes).

## Typography rules

- Player names: bold (700) at 14px minimum.
- Song titles: medium (500).
- Metadata, timestamps: muted gray at 12-14px.
- Minimum body size: 16px. Do not shrink type to fit data. If it will not fit, cut the data.
- H1 is for moments only. One hero statement per flow. Step down everywhere else.
- JetBrains Mono is for labels, specs, and numbered steps. Never for body copy.

## Accessibility notes

- Maintain a 4.5:1 contrast ratio for any text under 18px.
- `#DFFF00` on `#FFFFFF` fails at any weight. Do not use this combination for text.
- `#B8CC00` on `#1F1F1F` passes at 700 weight and 15px. This is the legal outdoor CTA.
- `#1F1F1F` on `#F6F4EF` is the default high-contrast text pair. Use it by default.
- State is never communicated by color alone. The active player row gets a left bar, tinted background, and bolder weight on top of the neon cue.

## Three-screen reminder

- **Home.** Hero statement plus one primary CTA (Generate Walk Up Song) plus a recent songs list. Answer: what can I do right now?
- **Now Playing.** Album art centered, large dark play button, neon-only waveform and progress. Answer: what is happening right now?
- **Lineup.** Nine rows, one per player. Active row gets the tinted treatment. Answer: who is up and what song is queued?

## One-line direction

Build a super clean, sunlight-readable app where neon is used sparingly to highlight the moment, not the whole UI.

## License

Tokens and utility code are provided under the MIT License. Pexels photography used in the design deck is licensed under the Pexels License. Inter and JetBrains Mono are open fonts.
