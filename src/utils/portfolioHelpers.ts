import { BLOG_POSTS, PROFILE, PROJECTS, type BlogArticle, type ProjectItem } from '../data/portfolio';

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateNewsletterEmail(email: string): { valid: boolean; error?: string } {
  const trimmed = email.trim();
  if (!trimmed) {
    return { valid: false, error: 'Please enter an email address.' };
  }
  if (!EMAIL_PATTERN.test(trimmed)) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }
  return { valid: true };
}

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (name.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }
  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (message.length < 10) {
    errors.message = 'Please share a brief message (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildMailtoHref(input: ContactFormInput): string {
  const subject = encodeURIComponent(`Portfolio Inquiry from ${input.name.trim()}`);
  const body = encodeURIComponent(
    `Name: ${input.name.trim()}\nEmail: ${input.email.trim()}\n\nMessage:\n${input.message.trim()}`
  );
  return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
}

export function buildNewsletterMailtoHref(email: string): string {
  const subject = encodeURIComponent('LadeStack Updates Request');
  const body = encodeURIComponent(
    `Hi Girish,\n\nPlease keep me posted on new LadeStack tools and technical notes.\n\nReply email: ${email.trim()}`
  );
  return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
}

export function getProjectBySlug(slug: string | undefined): ProjectItem | undefined {
  if (!slug) return undefined;
  return PROJECTS.find((p) => p.slug === slug);
}

export function getBlogPostBySlug(slug: string | undefined): BlogArticle | undefined {
  if (!slug) return undefined;
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export type NavSection = '/' | '/projects' | '/blog' | '/about' | '/contact';

export function normalizeRouteSection(pathname: string): NavSection {
  if (pathname === '/' || pathname === '') return '/';
  if (pathname.startsWith('/projects')) return '/projects';
  if (pathname.startsWith('/blog')) return '/blog';
  if (pathname.startsWith('/about')) return '/about';
  if (pathname.startsWith('/contact')) return '/contact';
  return '/';
}

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export function getArticleWordCount(
  article: Pick<BlogArticle, 'title' | 'summary' | 'paragraphs'>
): number {
  let total = countWords(article.title) + countWords(article.summary);
  for (const section of article.paragraphs) {
    if (section.heading) {
      total += countWords(section.heading);
    }
    total += countWords(section.body);
  }
  return total;
}

export function estimateReadingTimeMinutes(
  article: Pick<BlogArticle, 'title' | 'summary' | 'paragraphs'>,
  wordsPerMinute = 200
): number {
  const words = getArticleWordCount(article);
  if (words <= 0) return 1;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

