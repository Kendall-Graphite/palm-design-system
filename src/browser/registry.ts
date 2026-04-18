import type { ReactNode } from 'react';

export type Category =
  | 'Foundation'
  | 'Typography'
  | 'Layout & Navigation'
  | 'Content & Display'
  | 'Feedback & Overlay'
  | 'Forms & Contact';

export type Status = 'ready' | 'planned';

export interface ComponentEntry {
  id: string;
  name: string;
  category: Category;
  description: string;
  status: Status;
  render?: () => ReactNode;
}

export const registry: ComponentEntry[] = [
  // Foundation
  {
    id: 'avatar',
    name: 'Avatar',
    category: 'Foundation',
    description: 'Profile image with graceful fallback to initials. Sizes S, M, L.',
    status: 'planned',
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'Foundation',
    description: 'Compact status label for counts, availability, and categorical indicators.',
    status: 'planned',
  },
  {
    id: 'button',
    name: 'Button',
    category: 'Foundation',
    description: 'Primary action element. Variants: primary, secondary, ghost, danger. Sizes S, M, L.',
    status: 'planned',
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'Foundation',
    description: 'Binary selection control with support for indeterminate state.',
    status: 'planned',
  },
  {
    id: 'chip',
    name: 'Chip',
    category: 'Foundation',
    description: 'Inline tag for skills, categories, and keyword labels. Optionally dismissible.',
    status: 'planned',
  },
  {
    id: 'divider',
    name: 'Divider',
    category: 'Foundation',
    description: 'Visual separator, horizontal or vertical, with an optional centred label.',
    status: 'planned',
  },
  {
    id: 'icon',
    name: 'Icon',
    category: 'Foundation',
    description: 'SVG icon wrapper with size and colour token bindings. Bring your own icon set.',
    status: 'planned',
  },
  {
    id: 'input',
    name: 'Input',
    category: 'Foundation',
    description: 'Text and email input with label, helper text, and error state.',
    status: 'planned',
  },
  {
    id: 'link',
    name: 'Link',
    category: 'Foundation',
    description: 'Inline and standalone link with an automatic external indicator.',
    status: 'planned',
  },
  {
    id: 'radio',
    name: 'Radio',
    category: 'Foundation',
    description: 'Single-select control. Use Radio.Group for exclusive option sets.',
    status: 'planned',
  },
  {
    id: 'select',
    name: 'Select',
    category: 'Foundation',
    description: 'Dropdown selector, styled to match the design system, with a native fallback.',
    status: 'planned',
  },
  {
    id: 'spinner',
    name: 'Spinner',
    category: 'Foundation',
    description: 'Loading indicator for inline and full-area states. Respects reduced-motion.',
    status: 'planned',
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'Foundation',
    description: 'Toggle for binary settings. Distinct from Checkbox — use for immediate-effect preferences.',
    status: 'planned',
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'Foundation',
    description: 'Contextual label on hover or focus. Directional, max-width constrained.',
    status: 'planned',
  },

  // Typography
  {
    id: 'body',
    name: 'Body',
    category: 'Typography',
    description: 'Default reading text. Regular and large sizes with calibrated line-height.',
    status: 'planned',
  },
  {
    id: 'caption',
    name: 'Caption',
    category: 'Typography',
    description: 'Supporting text beneath images, inside tables, and in footnotes.',
    status: 'planned',
  },
  {
    id: 'code',
    name: 'Code',
    category: 'Typography',
    description: 'Monospaced text for inline snippets and block code in process documentation.',
    status: 'planned',
  },
  {
    id: 'display',
    name: 'Display',
    category: 'Typography',
    description: 'Hero-scale headings D1 and D2. Tight tracking, high optical weight.',
    status: 'planned',
  },
  {
    id: 'eyebrow',
    name: 'Eyebrow',
    category: 'Typography',
    description: 'Small-caps label positioned above a heading to frame the section topic.',
    status: 'planned',
  },
  {
    id: 'heading',
    name: 'Heading',
    category: 'Typography',
    description: 'H1–H4 with semantic and presentational variants. The typographic backbone.',
    status: 'planned',
  },

  // Layout & Navigation
  {
    id: 'footer',
    name: 'Footer',
    category: 'Layout & Navigation',
    description: 'Page footer with contact links, social links, and copyright. Minimal chrome.',
    status: 'planned',
  },
  {
    id: 'grid',
    name: 'Grid',
    category: 'Layout & Navigation',
    description: 'Responsive column grid with gap tokens. 4, 8, and 12 column variants.',
    status: 'planned',
  },
  {
    id: 'nav',
    name: 'Nav',
    category: 'Layout & Navigation',
    description: 'Top navigation. Desktop horizontal, mobile drawer. Active link state.',
    status: 'planned',
  },
  {
    id: 'section',
    name: 'Section',
    category: 'Layout & Navigation',
    description: 'Full-width page section wrapper with vertical padding controlled by tokens.',
    status: 'planned',
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    category: 'Layout & Navigation',
    description: 'Fixed or scrollable side panel, used for case study in-page navigation.',
    status: 'planned',
  },
  {
    id: 'stack',
    name: 'Stack',
    category: 'Layout & Navigation',
    description: 'Spacing primitive for vertical or horizontal arrangements. Replaces ad-hoc margin.',
    status: 'planned',
  },

  // Content & Display
  {
    id: 'accordion',
    name: 'Accordion',
    category: 'Content & Display',
    description: 'Collapsible sections for Q&A, process steps, and detailed specifications.',
    status: 'planned',
  },
  {
    id: 'card',
    name: 'Card',
    category: 'Content & Display',
    description: 'Generic surface for grouped content. Fully composable with any child.',
    status: 'planned',
  },
  {
    id: 'case-study-card',
    name: 'Case Study Card',
    category: 'Content & Display',
    description: 'Project thumbnail, title, outcome, and tags. The primary portfolio unit.',
    status: 'planned',
  },
  {
    id: 'device-mockup',
    name: 'Device Mockup',
    category: 'Content & Display',
    description: 'Browser, mobile, or tablet frame for showing UI work in realistic context.',
    status: 'planned',
  },
  {
    id: 'gallery',
    name: 'Gallery',
    category: 'Content & Display',
    description: 'Responsive image grid — uniform or masonry — with lazy loading built in.',
    status: 'planned',
  },
  {
    id: 'image',
    name: 'Image',
    category: 'Content & Display',
    description: 'Managed image with aspect-ratio lock, lazy load, caption slot, and enforced alt.',
    status: 'planned',
  },
  {
    id: 'lightbox',
    name: 'Lightbox',
    category: 'Content & Display',
    description: 'Full-screen image viewer. Triggered from Gallery or Image. Keyboard navigable.',
    status: 'planned',
  },
  {
    id: 'metric',
    name: 'Metric',
    category: 'Content & Display',
    description: 'Large number with a label. For impact statements like "↑ 42% task completion".',
    status: 'planned',
  },
  {
    id: 'process-step',
    name: 'Process Step',
    category: 'Content & Display',
    description: 'Numbered step in a design process flow: icon, title, and description.',
    status: 'planned',
  },
  {
    id: 'quote',
    name: 'Quote',
    category: 'Content & Display',
    description: 'Pull quote with attribution. For client feedback and user research insights.',
    status: 'planned',
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    category: 'Content & Display',
    description: 'Loading placeholder shaped to match real content. Prevents layout shift.',
    status: 'planned',
  },
  {
    id: 'tab-panel',
    name: 'Tab Panel',
    category: 'Content & Display',
    description: 'Tabbed content switching. Used for Before/After and process stage views.',
    status: 'planned',
  },
  {
    id: 'timeline',
    name: 'Timeline',
    category: 'Content & Display',
    description: 'Chronological work history or project phases. Vertical layout.',
    status: 'planned',
  },
  {
    id: 'video-embed',
    name: 'Video Embed',
    category: 'Content & Display',
    description: 'Responsive iframe for Vimeo and YouTube. No layout shift on load.',
    status: 'planned',
  },

  // Feedback & Overlay
  {
    id: 'modal',
    name: 'Modal',
    category: 'Feedback & Overlay',
    description: 'Dialog overlay with focus trap, scroll lock, and accessible close behaviour.',
    status: 'planned',
  },
  {
    id: 'toast',
    name: 'Toast',
    category: 'Feedback & Overlay',
    description: 'Ephemeral feedback message. Appears top-right, auto-dismisses after 4s.',
    status: 'planned',
  },

  // Forms & Contact
  {
    id: 'contact-form',
    name: 'Contact Form',
    category: 'Forms & Contact',
    description: 'Composite form with name, email, message, and submit. Full validation states.',
    status: 'planned',
  },
  {
    id: 'field-group',
    name: 'Field Group',
    category: 'Forms & Contact',
    description: 'The atomic form unit: label + input + helper text + error message.',
    status: 'planned',
  },
  {
    id: 'form',
    name: 'Form',
    category: 'Forms & Contact',
    description: 'Layout wrapper managing spacing between Field Groups. Handles submit state.',
    status: 'planned',
  },
];

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function getFirstLetter(name: string): string {
  return name[0].toUpperCase();
}

export function getLettersWithComponents(): Set<string> {
  return new Set(registry.map(c => getFirstLetter(c.name)));
}

export function groupByLetter(entries: ComponentEntry[]): Map<string, ComponentEntry[]> {
  const map = new Map<string, ComponentEntry[]>();
  for (const entry of entries) {
    const letter = getFirstLetter(entry.name);
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter)!.push(entry);
  }
  return map;
}

export function filterRegistry(query: string): ComponentEntry[] {
  if (!query.trim()) return registry;
  const q = query.toLowerCase();
  return registry.filter(
    c =>
      c.name.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q),
  );
}
