# Design System

## Overview

The Stratego Platform follows a clean, minimalist design approach inspired by Linear.app. The design system prioritizes clarity, efficiency, and focus to help users manage complex strategic planning tasks.

## Design Principles

1. **Clarity**: Information is presented clearly without unnecessary decoration
2. **Efficiency**: Common tasks require minimal steps
3. **Focus**: Interface elements guide attention to important information
4. **Consistency**: Patterns and components are used consistently throughout
5. **Accessibility**: Design meets WCAG 2.1 AA standards

## Color Palette

### Primary Colors
- Primary Blue: `#007AFF` - Main actions and branding
- Primary Dark: `#0062CC` - Hover states for primary buttons
- Primary Light: `#3395FF` - Active states and highlights

### Neutral Colors
- White: `#FFFFFF` - Main background
- Gray 50: `#F9F9FB` - Subtle backgrounds
- Gray 100: `#F2F2F7` - Card backgrounds
- Gray 200: `#E5E5EA` - Borders and dividers
- Gray 300: `#D1D1D6` - Disabled states
- Gray 400: `#C7C7CC` - Muted text
- Gray 500: `#AEAEB2` - Placeholder text
- Gray 600: `#8E8E93` - Secondary text
- Gray 700: `#636366` - Primary text
- Gray 800: `#48484A` - Heading text
- Gray 900: `#2C2C2E` - Contrast text
- Black: `#000000` - High contrast text

### Semantic Colors
- Success: `#34C759` - Positive actions and status
- Warning: `#FF9500` - Caution states and warnings
- Danger: `#FF3B30` - Destructive actions and errors
- Info: `#007AFF` - Informational messages

## Typography

### Font Family
- System UI stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

### Font Scale
- Heading 1: 32px, Semi Bold
- Heading 2: 24px, Semi Bold
- Heading 3: 20px, Semi Bold
- Heading 4: 16px, Semi Bold
- Body Large: 16px, Regular
- Body Medium: 14px, Regular
- Body Small: 12px, Regular
- Caption: 11px, Regular

### Line Heights
- Compact: 1.2
- Default: 1.4
- Relaxed: 1.6

## Spacing System

Using an 4px base unit:
- 4xs: 2px
- 3xs: 4px
- 2xs: 8px
- xs: 12px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px

## Components

### Buttons
Three button styles:
1. **Primary**: Filled with primary color
2. **Secondary**: Outlined with primary color
3. **Tertiary**: Text only with hover effect

States:
- Default
- Hover
- Active
- Focus
- Disabled

### Cards
- Clean white background
- Subtle shadows for depth
- Rounded corners (8px)
- Consistent padding

### Forms
- Clear labels above inputs
- Proper error messaging
- Logical grouping of fields
- Inline validation where possible

### Navigation
- Minimal top navigation bar
- Contextual sidebar navigation
- Breadcrumb navigation for deep pages
- Clear active states

### Data Visualization
- Clean charts with minimal grid lines
- Consistent color coding
- Interactive tooltips
- Export functionality

## Layout

### Grid System
- 12-column flexible grid
- Max width of 1200px for content
- Responsive breakpoints:
  - Small: 0-768px
  - Medium: 769-1024px
  - Large: 1025-1440px
  - Extra Large: 1441px+

### Page Structure
1. **Header**: Logo, navigation, user menu
2. **Sidebar**: Contextual navigation (collapsible)
3. **Main Content**: Primary content area
4. **Footer**: Secondary information and links

## Interactions

### Motion
- Subtle transitions (150ms)
- Purposeful animations
- Consistent easing curves

### Feedback
- Immediate response to user actions
- Loading states for async operations
- Clear success/error messaging

## Accessibility

### Contrast
- Minimum 4.5:1 contrast ratio for text
- Focus indicators for keyboard navigation
- Proper ARIA labels for interactive elements

### Screen Readers
- Semantic HTML structure
- Proper heading hierarchy
- Descriptive alt text for images