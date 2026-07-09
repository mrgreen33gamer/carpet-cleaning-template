# Carpet Cleaning Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `carpet-cleaning-template` into `carpet-cleaning-template`, sibling-cloned patterns from `carpet-cleaning-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | PureSoft Carpet Care |
| **Tagline** | Deep Carpet · Upholstery · Tile Cleaning |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2011 |
| **Owner** | Mia Chen |
| **License** | IICRC-Certified · Bonded & Insured |
| **Guarantee** | Spot-Free Satisfaction Guarantee |
| **Social proof** | 4.9★, 1,400+ reviews, 11,000+ cleans |
| **Accent hex** | `#db2777` (pink/magenta) — `$orange` token |
| **Phone** | (254) 830-3030 / `tel:+12548303030` |
| **Email** | hello@puresoftcarpet.com |
| **Domain** | puresoftcarpet.com |
| **Address** | 2800 W Waco Dr, Waco, TX 76707 |

## Services (6)

| Old HVAC | New Slug | Title |
|----------|----------|--------|
| `ac-repair` | `carpet-cleaning` | Carpet Cleaning |
| `heating` | `upholstery-cleaning` | Upholstery Cleaning |
| `installation` | `tile-grout` | Tile & Grout Cleaning |
| `duct-cleaning` | `area-rugs` | Area Rug Cleaning |
| `indoor-air-quality` | `pet-odor-treatment` | Pet Odor Treatment |
| `maintenance` | `commercial-carpet` | Commercial Carpet Care |

## Industries (3)

| Old HVAC | New Slug | Title |
|----------|----------|--------|
| `automotive` | `property-management` | Property Management |
| `manufacturing` | `hospitality` | Hospitality |
| `oil-gas` | `offices` | Offices & Medical |

## Blogs (3)

1. `how-often-clean-carpet-texas`
2. `pet-stain-removal-that-works`
3. `steam-vs-dry-carpet-cleaning`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #db2777`, `$lightorange: #f472b6`, `$darkorange: #9d174d`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#db2777`

## Done criteria

- `npm run typecheck` passes
- Grep clean of HVAC/Arctic Air/old phone/Mapbox pk tokens
- Identity consistent: PureSoft Carpet Care throughout
