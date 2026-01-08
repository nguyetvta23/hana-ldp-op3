# Plan: Hana Landing Page - Option 3 (Zen Focus)

> **Status**: 📋 DRAFT  
> **Created**: 2026-01-08 15:22  
> **Theme**: Option C - Zen Focus (Teal/Emerald)

---

## 1. Tổng Quan Thiết Kế

### Concept
**"Calm browser experience free from clutter"** - Lấy ý nghĩa của "Hana" (Hoa) hướng đến thiên nhiên và sự yên bình. Sử dụng Teal/Emerald để gợi lên sự tĩnh lặng và tập trung. Thiết kế minimalist với nhiều whitespace.

### So Sánh 3 Options

| Đặc điểm | Option 1 (Hana Bloom) | Option 2 (Tech Professional) | Option 3 (Zen Focus) |
|----------|----------------------|------------------------------|----------------------|
| Mode | Dark mode | Light mode | **Light mode (Warm)** |
| Primary | Indigo (#6366f1) | Blue (#3b82f6) | **Teal (#0d9488)** |
| Accent | Pink (#ec4899) | Slate | **Amber (#f59e0b)** |
| Background | Slate 900 | White | **Warm White (#fafafa)** |
| Style | Glassmorphism | Clean shadows | **Minimal, flat** |
| Font | Outfit | Inter | **DM Sans** |
| Mood | Innovative | Professional | **Calm, Focused** |
| Target | Creative, Gen-Z | Enterprise, B2B | **Focus lovers, Writers** |

---

## 2. Color Palette

| Type | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Primary | `#0d9488` | `teal-600` | CTAs, Links, Highlights |
| Primary Light | `#14b8a6` | `teal-500` | Hover states |
| Primary Dark | `#0f766e` | `teal-700` | Active states |
| Primary Soft | `#ccfbf1` | `teal-100` | Badges, Backgrounds |
| Accent | `#f59e0b` | `amber-500` | Warm highlights |
| Background | `#fafafa` | `zinc-50` | Main background (warm white) |
| Surface | `#ffffff` | `white` | Cards |
| Border | `#e4e4e7` | `zinc-200` | Subtle dividers |
| Text Primary | `#18181b` | `zinc-900` | Headings (softer than black) |
| Text Secondary | `#52525b` | `zinc-600` | Body text |
| Text Muted | `#a1a1aa` | `zinc-400` | Captions |

---

## 3. Typography

| Element | Font | Weight | Size | Tracking |
|---------|------|--------|------|----------|
| H1 | DM Sans | Bold (700) | 4xl-6xl | Tight (-0.02em) |
| H2 | DM Sans | SemiBold (600) | 3xl-4xl | Tight |
| H3 | DM Sans | Medium (500) | xl-2xl | Normal |
| Body | Inter | Regular (400) | base-lg | Relaxed |
| Small | Inter | Medium (500) | sm | Normal |

**Font Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
```

---

## 4. Design Tokens

```css
/* Option 3: Zen Focus - Minimalist Teal/Emerald */
:root {
  /* Colors */
  --color-primary: 13 148 136;       /* teal-600 */
  --color-primary-light: 20 184 166; /* teal-500 */
  --color-accent: 245 158 11;        /* amber-500 */
  
  /* Backgrounds */
  --bg-primary: 250 250 250;         /* zinc-50 (warm white) */
  --bg-surface: 255 255 255;         /* white */
  
  /* Text */
  --text-primary: 24 24 27;          /* zinc-900 */
  --text-secondary: 82 82 91;        /* zinc-600 */
  --text-muted: 161 161 170;         /* zinc-400 */
  
  /* Borders */
  --border-color: 228 228 231;       /* zinc-200 */
  
  /* Shadows - Very subtle */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.03);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.04);
  
  /* Radius - More rounded for approachable feel */
  --radius-md: 0.75rem;   /* 12px */
  --radius-lg: 1rem;      /* 16px */
  --radius-xl: 1.5rem;    /* 24px */
}
```

---

## 5. Component Styles

### 5.1 Navigation
```
Background: bg-zinc-50
Border: border-b border-zinc-100 (very subtle)
Shadow: none
Logo: text-zinc-900
Links: text-zinc-600 hover:text-teal-600
CTA Button: bg-teal-600 text-white rounded-xl hover:bg-teal-700
```

### 5.2 Hero Section
```
Background: bg-zinc-50 (paper-like)
Headline: text-zinc-900 (DM Sans)
Highlight: text-teal-600
Description: text-zinc-600
Primary CTA: bg-teal-600 text-white rounded-xl shadow-sm
Secondary CTA: text-zinc-700 border border-zinc-200 hover:border-teal-300
Stats: bg-white border border-zinc-100
```

### 5.3 Feature Cards
```
Background: bg-white
Border: border border-zinc-100
Shadow: shadow-sm (very subtle)
Icon: text-teal-600 (line icons, not filled)
Title: text-zinc-900 DM Sans
Description: text-zinc-600
Hover: border-teal-200
```

### 5.4 How It Works
```
Step Number: text-teal-600 font-bold (không có background)
Connector: border-l border-zinc-200 (dashed)
Card: bg-white border-zinc-100
```

### 5.5 Dashboard Preview
```
Container: bg-zinc-50 rounded-3xl p-10
Screenshot: shadow-md rounded-2xl border border-zinc-200
```

### 5.6 CTA Section
```
Background: bg-teal-600 (solid color, không gradient)
Headline: text-white
Button: bg-white text-teal-700 rounded-xl
Badge: text-teal-100
```

### 5.7 Footer
```
Background: bg-zinc-900
Text: text-zinc-400
Links: text-zinc-300 hover:text-white
```

---

## 6. Visual Style Đặc Biệt

### Minimalism
- **Generous whitespace**: Padding lớn (py-32 thay vì py-24)
- **Less is more**: Bỏ decorative elements
- **Flat design**: Tối thiểu shadows
- **Line icons**: Dùng stroke icons thay vì filled

### Nature/Organic Feel
- **Warm tones**: zinc thay vì slate (ấm hơn)
- **Soft curves**: rounded-2xl, rounded-3xl
- **Subtle textures**: Có thể thêm grain texture nhẹ

### Focus on Content
- **Large typography**: Headlines to rõ ràng
- **High contrast**: Text dễ đọc
- **Clear hierarchy**: Sections rõ ràng

---

## 7. Animations

**Philosophy**: Subtle, gentle, không gây distraction

```tsx
// Fade in from bottom - slower, gentler
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}

// No scale animations
// No parallax effects
// No floating elements
```

---

## 8. Implementation

### tailwind.config.js
```js
colors: {
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
  },
  amber: {
    500: '#f59e0b',
  },
  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    400: '#a1a1aa',
    600: '#52525b',
    900: '#18181b',
  }
}
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  heading: ['DM Sans', 'sans-serif'],
}
```

### index.css
```css
body {
  @apply bg-zinc-50 text-zinc-900 font-sans antialiased;
}

/* Paper texture (optional) */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* grain */
  opacity: 0.02;
  pointer-events: none;
}
```

---

## 9. Files Cần Tạo

| File | Action | Description |
|------|--------|-------------|
| `/hana-landing-page-option-3/` | CREATE | New folder |
| `tailwind.config.js` | MODIFY | Teal/Emerald theme |
| `src/index.css` | MODIFY | Warm white base, DM Sans |
| `src/App.tsx` | MODIFY | Update all class names |
| `src/components/*.tsx` | MODIFY | Light theme styles |

---

## 10. Mockup Preview

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │ ← bg-zinc-50 (warm)
│  🌸 Hana    Features  How it works           [Add to Chrome]│ ← Teal CTA
│                                                             │
│                                                             │
│              Browse Smarter                                 │ ← DM Sans, zinc-900
│              With AI Power                                  │ ← teal-600 highlight
│                                                             │
│              Tóm tắt tự động, quản lý tabs thông minh...   │
│                                                             │
│        [Add to Chrome]        Watch Video                   │ ← Teal solid, no shadow
│                                                             │
│         ⭐ 4.9/5        👥 10K+        ⏱️ 2h/day           │ ← white cards
│                                                             │
│   ┌─────────────────────────────────────────┐              │
│   │                                         │              │
│   │       [Clean Screenshot]                │              │ ← subtle shadow
│   │                                         │              │
│   └─────────────────────────────────────────┘              │
│                                                             │
│                                                             │
│   ═══════════════════════════════════════════════════      │
│                                                             │
│             How Does Hana Work?                             │
│                                                             │
│        1 ─────── 2 ─────── 3                               │ ← line icons
│      Install   Browse   Insights                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ▓▓▓▓▓▓▓▓▓▓▓▓ Teal CTA Section ▓▓▓▓▓▓▓▓▓▓▓▓               │ ← bg-teal-600
│                                                             │
│          Ready to Focus Better?                             │
│                                                             │
│              [Add to Chrome]                                │ ← white button
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  © 2026 JV-IT Techs              Privacy | Terms        │ ← dark footer
└─────────────────────────────────────────────────────────────┘
```

---

## 11. Khi Nào Chọn Option 3?

✅ **Chọn Option 3 (Zen Focus)** khi:
- Target là **knowledge workers, writers, researchers**
- Muốn truyền tải thông điệp **"tập trung, giảm nhiễu"**
- Ưu tiên **readability** và **accessibility** cao
- Muốn design **khác biệt** nhưng **không overwhelm**
- Thích phong cách **Apple, Notion, Linear**

❌ **Không chọn Option 3** khi:
- Muốn design **bold, eye-catching**
- Target là **teenagers, gamers**
- Cần nhiều **animations, effects**
