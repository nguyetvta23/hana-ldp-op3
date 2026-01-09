# TEST: Landing Page Redesign

> **Feature**: landing-page-redesign | **FRD**: [FRD](./FRD-landing-page-redesign.md) | **TDD**: [TDD](./TDD-landing-page-redesign.md)

---

## Summary

| Loại | Số lượng |
|------|----------|
| Happy Path | 8 |
| Error Cases | 2 |
| Edge Cases | 4 |

---

## 1. Happy Path

### SC-001: Hero Section Displays Correctly

```gherkin
Given visitor loads landing page
When page fully renders
Then hero headline "One Extension. Complete AI Workflow." is visible
And 4 value props (Translation, Summary, Chat, Projects) are displayed
And primary CTA "Add to Chrome" is clickable
And trust badges (4.9★, 10K+ users) are visible
```

### SC-002: Features Section Shows 6-8 Cards

```gherkin
Given visitor is on landing page
When scrolling past hero section
Then features section is immediately visible (position #2)
And 6-8 feature cards are displayed in grid layout
And each card has icon, title, description, and highlights
```

### SC-003: Feature Card Hover Effect

```gherkin
Given features section is visible
When visitor hovers over a feature card
Then card lifts with translateY(-4px)
And shadow increases
And hover state is smooth (transition)
```

### SC-004: Privacy Section Has Correct Messaging

```gherkin
Given visitor scrolls to privacy section
When privacy badge renders
Then "Secure Backend" is displayed (không phải "Local Processing")
And "Data Encrypted" is displayed (không phải "Data never leaves")
And "GDPR Compliant" claim is present
And không có text "local processing" hoặc "never leaves machine"
```

### SC-005: Use Cases Section Displays Personas

```gherkin
Given visitor scrolls to use cases section
When section renders
Then 3 persona cards are visible (PM, Student, Content Manager)
And each card has avatar, name, role, quote, and highlights
```

### SC-006: CTA Buttons Link to Chrome Store

```gherkin
Given visitor clicks on "Add to Chrome" button
When click event fires
Then browser opens Chrome Web Store page for Hana
And URL contains correct extension ID
```

### SC-007: Language Switcher Works

```gherkin
Given visitor is on landing page with English content
When visitor clicks language switcher và chọn Vietnamese
Then all text content updates to Vietnamese
And layout remains consistent
```

### SC-008: Mobile Responsive Layout

```gherkin
Given visitor accesses page on mobile device (320px width)
When page renders
Then features grid stacks to 1 column
And hero text is readable (font-size adjusted)
And navigation collapses appropriately
And CTAs remain accessible
```

---

## 2. Error Cases

### SC-009: Image Load Failure

```gherkin
Given landing page loads
When hero image fails to load
Then fallback placeholder is shown
And page remains functional
And no broken image icons
```

### SC-010: Video Popup Close Behavior

```gherkin
Given video popup is open
When visitor clicks outside modal or presses ESC
Then modal closes gracefully
And page returns to normal scrolling
And no JavaScript errors
```

---

## 3. Edge Cases

### SC-011: Very Long Translation Text

```gherkin
Given Vietnamese translation has longer text than English
When page renders in Vietnamese
Then text does not overflow containers
And layout adjusts gracefully
And no horizontal scrolling
```

### SC-012: Stats Counter on Fast Scroll

```gherkin
Given visitor scrolls very quickly through page
When passing stats section
Then counter animation either completes or shows final value
And no stuck/incorrect numbers
```

### SC-013: Accessibility - Keyboard Navigation

```gherkin
Given visitor using keyboard only (no mouse)
When pressing Tab key
Then focus moves through all interactive elements
And focus states are visible
And all CTAs are reachable
```

### SC-014: Reduced Motion Preference

```gherkin
Given user has prefers-reduced-motion enabled
When page renders
Then animations are disabled or minimal
And transitions are instant or very short
And page is still functional
```

---

## 4. Visual Regression Tests (Manual)

| Test ID | Description | Expected Result |
|---------|-------------|-----------------|
| VR-001 | Hero section on Desktop (1920px) | Matches approved design |
| VR-002 | Hero section on Mobile (375px) | Responsive layout, readable text |
| VR-003 | Features grid on Desktop | 3-column grid, even spacing |
| VR-004 | Features grid on Tablet | 2-column grid |
| VR-005 | Privacy section | Correct icons, no "local processing" |
| VR-006 | Dark mode (if applicable) | Proper color contrast |

---

## 5. Content Verification (Manual)

| Test ID | Section | Check |
|---------|---------|-------|
| CV-001 | Hero | Headline = "One Extension. Complete AI Workflow." |
| CV-002 | Features | 6-8 features displayed (not 3) |
| CV-003 | Privacy | No mention of "local processing" |
| CV-004 | Privacy | Mentions "backend", "HTTPS", "JWT", or "encrypted" |
| CV-005 | CTA | Links to correct Chrome Store URL |
| CV-006 | Footer | Copyright shows 2026 |

---

## Test Execution

| Date | Tester | Pass | Fail | Notes |
|------|--------|------|------|-------|
| | | | | |
