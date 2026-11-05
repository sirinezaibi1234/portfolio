# Sirine Zaibi · AI Engineer Portfolio

Personal portfolio of **Sirine Zaibi**, computer science engineering student at ENSIT (specialization:
Artificial Intelligence), looking for a 5–6 month PFE internship starting January 2027.

Built on a Next.js 16 / React 19 / TypeScript / Tailwind CSS v4 3D portfolio template: React Three Fiber
astronaut hero, a GPU shader globe that follows the scroll, a pinned horizontal project showcase, an
experience timeline and a skills marquee. Respects `prefers-reduced-motion`; the heavy 3D layers are
deferred and never mount on phones.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node 20.9+. No environment variables are needed to build or run.

## Make it yours: finish these placeholders

All content lives in `constants/` (one typed file per domain). Open
[`constants/social-constants.ts`](constants/social-constants.ts) first:

| What | Where | Until you set it |
| --- | --- | --- |

| Project repos | `repo` per project in `constants/projects-constants.ts` | "GitHub · soon" disabled button |
| Project screenshots | `image` per project (put WebP in `public/projects/`) | an architecture diagram is shown |
| Domain | `NEXT_PUBLIC_SITE_URL` | canonical, sitemap and Open Graph use a placeholder domain |

### Contact form

Without configuration the form opens the visitor's email client with the message prefilled (it needs
no backend). For real submissions, create a free form at [formspree.io](https://formspree.io) and set

```
NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

See [`.env.example`](.env.example).

## Where things are

| Content | File |
| --- | --- |
| Hero text, stats, availability | `constants/hero-constants.ts` |
| Projects | `constants/projects-constants.ts` |
| Experience | `constants/experience-constants.ts` |
| Skills (groups + marquee) | `constants/skills-constants.ts` |
| Education, achievements, leadership | `constants/background-constants.ts` |
| SEO and metadata | `constants/seo-constants.ts` |
| Colours | `@theme` block in `app/globals.css` |
| Globe path per section | `SECTION_KEYS` in `constants/globe-constants.ts` |
| 3D model | `public/models/astronaut.glb`, `components/portfolio/astronaut.tsx` |

Colour tokens: `glow` is the cyan accent (`#38bdf8`), `violet` (`#8b5cf6`) and `royal` (`#5c33cc`) are the
purples.

When adding or removing a section, update `NAV_ITEMS` and add a matching keyframe to `SECTION_KEYS`, or the
globe will slide past it without stopping.

## Licensing and credits

Code is MIT ([LICENSE](LICENSE)). Content and third-party assets are described in [NOTICE](NOTICE).
3D helpers by [pmndrs](https://github.com/pmndrs), animation by [Motion](https://motion.dev).
