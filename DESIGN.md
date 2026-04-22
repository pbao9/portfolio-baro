# Design System — Baro Portfolio (Minimal Style)

## 1. Visual Theme & Atmosphere

Baro's portfolio is a refined minimal canvas — confident, clean, and designed to let work speak for itself. The experience lives on a deep dark canvas where content breathes with generous whitespace, creating a gallery-like presentation of projects and achievements. This is a site that speaks to clients and collaborators: professional without being cold, sophisticated without being intimidating.

The design language embraces minimalism: a single typeface family with varied weights creates hierarchy through size and spacing rather than color or decoration. The interface is almost entirely monochrome — blacks, whites, and cool grays — with a single accent color (green) reserved exclusively for interactive states and key highlights. This chromatic restraint means that when color DOES appear, it carries maximum visual weight.

Background images are treated as subtle atmospheric layers — low opacity, blurred, or gradient-masked — ensuring they enhance rather than compete with content. Project thumbnails are the primary visual heroes, presented in clean containers with minimal chrome.

**Key Characteristics:**
- Deep dark canvas (`#1a1a1a`) with subtle texture
- Generous whitespace — content breathes, doesn't crowd
- Single accent color (green `#30c23d`) for interactive states only
- Project-first layout — work takes center stage
- Background images as atmospheric layers, not distractions
- Clean typography hierarchy through size and weight, not color
- Minimal chrome — no unnecessary borders, shadows, or decorations
- SEO-optimized structure with semantic HTML and meta tags

## 2. Color Palette & Roles

### Primary
- **Canvas Dark** (`#1a1a1a`): Primary page background — softer than pure black, reduces eye strain.
- **Near Black** (`#111111`): Card surfaces and elevated containers.
- **Pure White** (`#ffffff`): Primary text color — maximum contrast on dark surfaces.

### Secondary & Accent
- **Accent Green** (`#30c23d`): The sole chromatic action color — appears on button hover, active states, focus indicators, and key highlights. Used sparingly for maximum impact.
- **Green Subtle** (`rgba(48, 194, 61, 0.1)`): Subtle green tint for active nav items and hover backgrounds.

### Surface & Background
- **Surface Dark** (`#222222`): Secondary surfaces, card backgrounds, and container fills.
- **Surface Lighter** (`#2a2a2a`): Tertiary surfaces, input backgrounds, and subtle elevations.
- **Border Subtle** (`rgba(255, 255, 255, 0.08)`): Minimal border treatment for card containment.
- **Border Light** (`rgba(255, 255, 255, 0.15)`): Slightly more visible borders for emphasis.

### Neutrals & Text
- **Text Primary** (`#ffffff`): Headlines, body text, and primary content.
- **Text Secondary** (`#cccccc`): Subtitles, descriptions, and secondary information.
- **Text Muted** (`#888888`): Metadata, timestamps, and de-emphasized content.
- **Text Inverse** (`#1a1a1a`): Text on light surfaces (rarely used).

### Gradient System
- **Background Gradient**: Subtle radial gradient from `#1a1a1a` to `#111111` — creates depth without distraction.
- **Hero Overlay**: Linear gradient from transparent to `rgba(0, 0, 0, 0.6)` — ensures text readability over background images.
- **Card Hover Gradient**: Subtle shift from `#222222` to `#2a2a2a` on hover — indicates interactivity.

### Background Image Treatment
- **Opacity**: 0.15–0.25 for background images — visible but not competing with content.
- **Blur**: 2–4px blur on background images — creates atmospheric depth.
- **Overlay**: Dark gradient overlay on all background images — ensures text contrast.
- **Positioning**: `background-size: cover` with `background-position: center` — consistent framing.
- **Fallback**: Solid color fallback if image fails to load — graceful degradation.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, with fallbacks: `ui-sans-serif, system-ui, -apple-system, sans-serif`
- **Display**: `Outfit`, with fallbacks: `ui-sans-serif, system-ui, sans-serif`
- **Code**: `JetBrains Mono` (or system monospace), with fallbacks: `ui-monospace, monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero / Display | Outfit | 48–64px (3–4rem) | 600 | 1.10 (tight) | -0.02em | Maximum impact, project headlines |
| Section Heading | Outfit | 32–40px (2–2.5rem) | 600 | 1.20 | -0.01em | Page sections, major divisions |
| Card Title | Inter | 20–24px (1.25–1.5rem) | 600 | 1.30 | normal | Project cards, feature titles |
| Body Large | Inter | 18px (1.13rem) | 400 | 1.60 | normal | Intro paragraphs, descriptions |
| Body | Inter | 16px (1rem) | 400 | 1.60 | normal | Standard body text |
| Caption | Inter | 14px (0.88rem) | 400 | 1.50 | normal | Metadata, labels, timestamps |
| Small | Inter | 12px (0.75rem) | 400 | 1.40 | normal | Footer links, fine print |
| Code | JetBrains Mono | 14px (0.88rem) | 400 | 1.50 | normal | Code snippets, technical labels |

### Principles
- **Size over weight**: Hierarchy is created through size differences, not weight contrast. Body text stays at 400, headings at 600.
- **Tight tracking at scale**: Display text uses slight negative letter-spacing (-0.02em) for density and impact.
- **Generous line height**: Body text uses 1.6 line-height for readability on dark backgrounds.
- **Consistent font family**: Inter handles 90% of UI — Outfit reserved for display moments only.
- **No decorative fonts**: Minimalism means no script, serif, or novelty fonts.

## 4. Component Stylings

### Buttons

**Primary (Solid)**
- Background: Accent Green (`#30c23d`)
- Text: Canvas Dark (`#1a1a1a`) — inverse for contrast
- Border: none
- Radius: 8px
- Padding: 12px 24px
- Hover: Background shifts to `#28a832` (darker green)
- Focus: 2px solid green outline with 2px offset
- The primary CTA — used for "Let's talk", "View Project", etc.

**Secondary (Ghost)**
- Background: transparent
- Text: Pure White (`#ffffff`)
- Border: 1px solid Border Light (`rgba(255, 255, 255, 0.15)`)
- Radius: 8px
- Padding: 12px 24px
- Hover: Border shifts to Accent Green, text shifts to green
- Focus: 2px solid green outline with 2px offset
- Used for secondary actions — "My work", "Learn more"

**Text Link**
- No background, no border
- Text: Pure White with underline on hover
- Hover: Text shifts to Accent Green
- Used in navigation and inline links

### Cards & Containers

**Project Card**
- Background: Surface Dark (`#222222`)
- Border: 1px solid Border Subtle (`rgba(255, 255, 255, 0.08)`)
- Radius: 12px
- Shadow: none — depth through background contrast
- Hover: Background shifts to Surface Lighter (`#2a2a2a`), border shifts to Border Light
- Thumbnail: Full-width, radius 12px 12px 0 0, aspect-ratio 16:9
- Padding: 20px internal
- Minimum height: 280px

**Profile Card**
- Background: Surface Dark (`#222222`)
- Border: 1px solid Border Subtle
- Radius: 16px
- Backdrop blur: 8px (if over background image)
- Padding: 24px
- Avatar: 120px diameter, circular, with subtle border

**Container**
- Max width: 1280px
- Padding: 24px mobile, 40px tablet, 60px desktop
- Background: Canvas Dark (`#1a1a1a`)
- No border, no shadow — clean edges

### Navigation

**Header Nav**
- Background: `rgba(0, 0, 0, 0.4)` with 8px backdrop blur
- Border: 1px solid Border Subtle
- Radius: 8px
- Padding: 8px 16px
- Active item: Green text with green subtle background
- Inactive item: White at 80% opacity
- Hover: White at 100% opacity with subtle white background
- Sticky positioning at top with z-index 9999

**Mobile Nav**
- Full-screen overlay on mobile
- Background: Canvas Dark with 95% opacity
- Items stacked vertically with 16px spacing
- Close button in top-right corner

### Inputs & Forms
- Background: Surface Lighter (`#2a2a2a`)
- Border: 1px solid Border Subtle
- Text: Pure White
- Radius: 8px
- Padding: 12px 16px
- Focus: Border shifts to Accent Green, 2px green outline
- Placeholder: Text Muted (`#888888`)

### Image Treatment
- **Project Thumbnails**: 16:9 aspect ratio, object-fit cover, radius 12px
- **Avatar**: Circular, 120px diameter, with subtle green border on hover
- **Background Images**: Full-bleed, low opacity (0.15–0.25), 2–4px blur
- **Hero Images**: Full-width, with dark gradient overlay for text readability
- **Gallery Images**: Consistent aspect ratio within project detail pages

### Distinctive Components

**Project Grid**
- 2-column grid on tablet, 3-column on desktop
- Gap: 24px between cards
- Cards have equal height within row
- Hover: subtle lift (translateY -4px) with background shift

**Stats Row**
- Horizontal flex with equal spacing
- Large number (48px) in white, label (14px) in muted gray
- Separator: subtle vertical line or generous spacing
- Animated count-up on scroll into view

**Tech Stack Tags**
- Small pill-shaped containers
- Background: Surface Lighter
- Border: 1px solid Border Subtle
- Radius: 9999px (pill)
- Padding: 4px 12px
- Icon: 16px, centered with text
- Hover: Border shifts to green

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 60px, 80px, 120px
- Section padding: 60px vertical on desktop, 40px on tablet, 24px on mobile
- Card padding: 20–24px internal
- Gap between cards: 24px
- Gap between sections: 80–120px

### Grid & Container
- Max container width: 1280px centered
- Hero: full-width with centered content
- Projects: responsive grid (1 → 2 → 3 columns)
- Profile card: sticky on desktop (left column), full-width on mobile
- Content area: 75% width on desktop, full-width on mobile

### Whitespace Philosophy
- **Content breathes**: Generous spacing between sections and elements
- **One idea per section**: Each section presents one clear proposition
- **Projects are heroes**: Maximum visual space for project thumbnails and descriptions
- **No visual clutter**: Remove anything that doesn't serve content or navigation

### Border Radius Scale
- Sharp (0px): Full-width sections, background elements
- Subtle (4px): Small tags, inline elements
- Comfortable (8px): Buttons, inputs, navigation
- Generous (12px): Project cards, containers
- Large (16px): Profile card, modal dialogs
- Pill (9999px): Tech tags, status indicators

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, text blocks |
| Subtle (Level 1) | `1px solid rgba(255,255,255,0.08)` | Standard cards, list separators |
| Elevated (Level 2) | Background contrast + border | Hover states, active elements |
| Overlay (Level 3) | Backdrop blur + dark overlay | Navigation, modals, dropdowns |

**Shadow Philosophy**: Minimal shadows. Depth is communicated through **background color contrast** (lighter surfaces on dark canvas), **border containment** (subtle white borders), and **spatial separation** (generous whitespace). When elements need elevation, they achieve it through being lighter-on-dark rather than through shadow casting.

## 7. SEO Optimization

### Meta Tags Structure
```html
<!-- Primary Meta Tags -->
<title>Baro Pham — Software Engineer & Fullstack Developer</title>
<meta name="title" content="Baro Pham — Software Engineer & Fullstack Developer">
<meta name="description" content="Portfolio of Baro Pham, a Software Engineer specializing in fullstack development with Laravel, Next.js, Vue.js, and more. 35+ projects completed for clients worldwide.">
<meta name="keywords" content="software engineer, fullstack developer, web developer, Laravel, Next.js, Vue.js, portfolio, Baro Pham, Devro Tech">
<meta name="author" content="Baro Pham">
<meta name="robots" content="index, follow">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://baro.devrotech.com/">
<meta property="og:title" content="Baro Pham — Software Engineer & Fullstack Developer">
<meta property="og:description" content="Portfolio of Baro Pham, a Software Engineer specializing in fullstack development. 35+ projects completed for clients worldwide.">
<meta property="og:image" content="https://res.cloudinary.com/dqtxna4oa/image/upload/v1776831433/Logo_latw69.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://baro.devrotech.com/">
<meta property="twitter:title" content="Baro Pham — Software Engineer & Fullstack Developer">
<meta property="twitter:description" content="Portfolio of Baro Pham, a Software Engineer specializing in fullstack development. 35+ projects completed for clients worldwide.">
<meta property="twitter:image" content="https://res.cloudinary.com/dqtxna4oa/image/upload/v1776831433/Logo_latw69.png">

<!-- Canonical URL -->
<link rel="canonical" href="https://baro.devrotech.com/">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/Logo.svg">
<link rel="apple-touch-icon" href="/Logo.svg">
```

### Semantic HTML Structure
- Use `<header>`, `<main>`, `<footer>` for page structure
- Use `<section>` for distinct content areas (Hero, Projects, Experience, TechStack)
- Use `<article>` for project cards and blog posts
- Use `<nav>` for navigation elements
- Use `<aside>` for sidebar content (profile card)
- Use proper heading hierarchy: `<h1>` for page title, `<h2>` for sections, `<h3>` for cards
- Use `<figure>` and `<figcaption>` for images with captions

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Baro Pham",
  "url": "https://baro.devrotech.com",
  "image": "https://res.cloudinary.com/dqtxna4oa/image/upload/v1776831256/avatar_gqkcfy.jpg",
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Devro Tech",
    "url": "https://devro-tech.com"
  },
  "sameAs": [
    "https://github.com/pbao9",
    "https://www.linkedin.com/in/pbao/",
    "https://gitlab.com/pbao9"
  ],
  "knowsAbout": ["Laravel", "Next.js", "Vue.js", "React", "TypeScript", "Node.js"]
}
```

### Performance & Accessibility
- Lazy load images below the fold
- Use `loading="lazy"` on project thumbnails
- Provide `alt` text for all images
- Use `aria-label` on interactive elements without visible text
- Ensure color contrast meets WCAG AA standards (4.5:1 for text)
- Keyboard navigation support for all interactive elements
- Focus indicators visible on all focusable elements

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked layout, full-width cards |
| Tablet | 640–1024px | 2-column project grid, sticky nav |
| Desktop | 1024–1280px | 3-column project grid, sticky profile card |
| Large Desktop | >1280px | Max-width container, centered layout |

### Touch Targets
- Buttons: minimum 44x44px touch area
- Navigation links: 16px horizontal padding, 12px vertical
- Card surfaces as touch targets on mobile
- Social icons: 40x40px minimum

### Collapsing Strategy
- **Navigation**: Horizontal nav on desktop, hamburger on mobile
- **Profile card**: Sticky left column on desktop, full-width top on mobile
- **Project grids**: 3 → 2 → 1 column
- **Stats row**: Horizontal on desktop, stacked on mobile
- **Hero text**: 64px → 48px → 36px progressive scaling

### Image Behavior
- Project thumbnails scale proportionally within containers
- Avatar remains circular at all sizes (120px desktop, 96px mobile)
- Background images use `background-size: cover` at all breakpoints
- Gallery images maintain aspect ratio within detail pages

## 9. Agent Prompt Guide

### Quick Color Reference
- Page Background: "Canvas Dark (#1a1a1a)"
- Card Background: "Surface Dark (#222222)"
- Primary Text: "Pure White (#ffffff)"
- Secondary Text: "Text Secondary (#cccccc)"
- Muted Text: "Text Muted (#888888)"
- Accent/Hover: "Accent Green (#30c23d)"
- Borders: "Border Subtle (rgba(255,255,255,0.08))"

### Example Component Prompts
- "Create a hero section on Canvas Dark (#1a1a1a) with Outfit at 64px weight 600, line-height 1.1, letter-spacing -0.02em. Pure White text. Subtitle in Inter at 18px weight 400, line-height 1.6, Text Secondary."
- "Design a project card with 12px border-radius, 1px solid Border Subtle on Surface Dark (#222222). Title in Inter at 20px weight 600. Description in Inter at 14px, Text Secondary. Thumbnail 16:9 aspect ratio, object-fit cover."
- "Build a primary button: Accent Green (#30c23d) background, Canvas Dark (#1a1a1a) text in Inter at 16px weight 500. 8px radius, 12px 24px padding. On hover, background shifts to #28a832."
- "Create a navigation bar with rgba(0,0,0,0.4) background, 8px backdrop blur, 1px solid Border Subtle. Active item: green text with rgba(48,194,61,0.1) background. Inactive: white at 80% opacity."
- "Design a tech stack tag: pill-shaped (9999px radius), Surface Lighter background, 1px solid Border Subtle, 4px 12px padding. 16px icon centered with 14px text."

### Iteration Guide
1. Focus on ONE component at a time
2. Always use minimal decoration — no unnecessary shadows or borders
3. Specify the typeface — Outfit for display, Inter for body
4. Interactive elements use Accent Green (#30c23d) on hover only
5. Keep surfaces dark with subtle white borders — no warm tones
6. Background images should be atmospheric, not competing with content
7. Projects are the heroes — give them maximum visual space
8. Ensure all images have alt text for accessibility and SEO

## 10. Background Image Guidelines

### Hero Background
- **Image**: Professional workspace or abstract tech pattern
- **Opacity**: 0.15–0.20
- **Blur**: 2px
- **Overlay**: Linear gradient from transparent to rgba(0,0,0,0.6)
- **Position**: Fixed, covering entire viewport
- **Fallback**: Solid Canvas Dark (#1a1a1a)

### Section Backgrounds
- **Image**: Subtle texture or pattern related to section content
- **Opacity**: 0.08–0.12
- **Blur**: 4px
- **Overlay**: Solid Canvas Dark at 85% opacity
- **Position**: Absolute, covering section
- **Fallback**: Surface Dark (#222222)

### Project Detail Background
- **Image**: Project screenshot or related imagery
- **Opacity**: 0.10
- **Blur**: 8px
- **Overlay**: Linear gradient from Canvas Dark to transparent
- **Position**: Fixed, parallax effect on scroll
- **Fallback**: Canvas Dark (#1a1a1a)

### Image Optimization
- **Format**: WebP preferred, JPEG fallback
- **Size**: Max 1920px width for backgrounds, 800px for thumbnails
- **Compression**: 80% quality for backgrounds, 90% for project images
- **CDN**: Cloudinary with automatic format negotiation
- **Lazy Loading**: All images below the fold use `loading="lazy"`
