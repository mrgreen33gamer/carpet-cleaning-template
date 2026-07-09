// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'how-often-clean-carpet-texas',
    title:    'How Often Should You Clean Carpet in Central Texas?',
    excerpt:  'Dust, pollen, kids, and pets put Texas carpets through a lot. Learn how often to schedule professional cleaning in Waco-area homes — and what happens if you wait too long.',
    category: 'Care Tips',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/home/services/service-2.jpg',
    imageAlt: 'How often to clean carpet in Central Texas homes',
    featured: true,
  },
  {
    slug:     'pet-stain-removal-that-works',
    title:    'Pet Stain Removal That Actually Works',
    excerpt:  'Enzyme treatments, proper extraction, and what DIY products get wrong — a practical guide to removing pet urine odor and stains from carpet and upholstery.',
    category: 'Stains & Odors',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/home/welcome/after.jpg',
    imageAlt: 'Pet stain removal guide for carpet and upholstery',
  },
  {
    slug:     'steam-vs-dry-carpet-cleaning',
    title:    'Steam vs. Dry Carpet Cleaning: Which Is Right for Your Home?',
    excerpt:  'Hot-water extraction vs. low-moisture methods — drying times, soil types, and when each method is the better choice for Central Texas homes and businesses.',
    category: 'Methods',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
    imageAlt: 'Steam vs dry carpet cleaning comparison for Waco TX',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
