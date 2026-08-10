# Janadi Wickramasinghe — Portfolio

Premium responsive portfolio built with React, TypeScript, Framer Motion, and a reusable component/data architecture.

## Run locally

```bash
pnpm install
pnpm dev
```

Create a production build with `pnpm build`.

## Editing guide

- Personal/social links and every project: `src/data/siteData.ts`
- Homepage sections and copy: `src/pages/Home.tsx`
- Work archive: `src/pages/Work.tsx`
- Reusable case-study template: `src/pages/CaseStudy.tsx`
- Theme and responsive styles: `src/styles.css`
- Project artwork: `public/images/`

## Profile photograph

The supplied portrait is stored at `public/images/profile.jpeg` and displayed in the hero editorial frame. Replace that file with another image of the same name to update it without changing the component.

## Placeholders to complete

- CV, LinkedIn, Behance, GitHub, and email links in `siteData.ts`
- EmailJS form integration and keys
- Project role, duration, year, outcomes, and process details
- Portfolio domain, social preview image, and favicon
- Verified education start year and experience

Conceptual and group-project disclosures are intentionally retained in the data and case-study pages.
