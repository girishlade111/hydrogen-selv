import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildMailtoHref,
  countWords,
  estimateReadingTimeMinutes,
  formatReadingTime,
  getArticleWordCount,
  getBlogPostBySlug,
  getBlogPostUrl,
  getProjectBySlug,
  normalizeRouteSection,
  validateContactForm,
  validateNewsletterEmail,
} from './portfolioHelpers';
import { PROJECTS, BLOG_POSTS } from '../data/portfolio';

test('validateContactForm rejects empty and invalid inputs', () => {
  const emptyResult = validateContactForm({ name: '', email: '', message: '' });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.message);

  const badEmailResult = validateContactForm({
    name: 'Aarav',
    email: 'not-an-email',
    message: 'Hello Girish, interested in collaborating on a web project.',
  });
  assert.equal(badEmailResult.valid, false);
  assert.ok(badEmailResult.errors.email);
  assert.equal(badEmailResult.errors.name, undefined);
});

test('validateContactForm accepts valid contact payload', () => {
  const result = validateContactForm({
    name: 'Ananya',
    email: 'ananya@example.com',
    message: 'Would love to discuss developer tooling and browser utilities.',
  });
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});

test('validateNewsletterEmail checks email format strictly', () => {
  assert.equal(validateNewsletterEmail('').valid, false);
  assert.equal(validateNewsletterEmail('invalid@').valid, false);
  assert.equal(validateNewsletterEmail('dev@example.com').valid, true);
});

test('buildMailtoHref encodes recipient and fields cleanly', () => {
  const href = buildMailtoHref({
    name: 'Rohan',
    email: 'rohan@example.com',
    message: 'Interested in GB Coder!',
  });
  assert.ok(href.startsWith('mailto:admin@ladestack.in?subject='));
  assert.ok(href.includes(encodeURIComponent('Interested in GB Coder!')));
});

test('project and blog slug lookups return expected records and undefined on missing', () => {
  assert.equal(PROJECTS.length, 9);
  const gbCoder = getProjectBySlug('gb-coder');
  assert.equal(gbCoder?.title, 'GB Coder');
  assert.equal(getProjectBySlug('non-existent'), undefined);

  const drive = getProjectBySlug('ladestack-drive');
  assert.equal(drive?.status, 'experimental');
  assert.equal(drive?.statusNote, 'Experimental / Verification Pending');

  assert.ok(BLOG_POSTS.length >= 4);
  const firstPost = getBlogPostBySlug('designing-local-first-web-applications');
  assert.equal(firstPost?.title, 'Designing Local-First Web Applications');
  assert.equal(getBlogPostBySlug('unknown-slug'), undefined);
});

test('normalizeRouteSection maps nested detail paths to top-level nav sections', () => {
  assert.equal(normalizeRouteSection('/'), '/');
  assert.equal(normalizeRouteSection('/projects'), '/projects');
  assert.equal(normalizeRouteSection('/projects/gb-coder'), '/projects');
  assert.equal(normalizeRouteSection('/blog/designing-local-first-web-applications'), '/blog');
  assert.equal(normalizeRouteSection('/about'), '/about');
  assert.equal(normalizeRouteSection('/contact'), '/contact');
});

test('countWords and reading time estimation compute accurate minimum 1 min read', () => {
  assert.equal(countWords(''), 0);
  assert.equal(countWords('   hello   world  '), 2);

  const shortArticle = {
    title: 'Short Note',
    summary: 'Ten words in a concise summary sentence for testing.',
    paragraphs: [{ heading: 'Section', body: 'Five short words right here.' }],
  };
  assert.equal(getArticleWordCount(shortArticle), 17);
  assert.equal(estimateReadingTimeMinutes(shortArticle), 1);
  assert.equal(formatReadingTime(estimateReadingTimeMinutes(shortArticle)), '1 min read');

  const longBody = Array.from({ length: 410 }, () => 'word').join(' ');
  const longArticle = {
    title: 'Long Note',
    summary: 'Summary text.',
    paragraphs: [{ body: longBody }],
  };
  assert.equal(estimateReadingTimeMinutes(longArticle), 3);

  for (const post of BLOG_POSTS) {
    assert.ok(getArticleWordCount(post) > 50);
    assert.ok(estimateReadingTimeMinutes(post) >= 1);
  }
});

test('getBlogPostUrl builds normalized canonical post URL', () => {
  assert.equal(
    getBlogPostUrl('https://girishlade.dev/', 'designing-local-first-web-applications'),
    'https://girishlade.dev/blog/designing-local-first-web-applications'
  );
  assert.equal(
    getBlogPostUrl('http://localhost:3000', '/building-development-workflows-in-the-browser'),
    'http://localhost:3000/blog/building-development-workflows-in-the-browser'
  );
});
