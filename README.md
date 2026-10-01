# WoubGet Holdings — group website

The central website for **WoubGet Holdings** and the gateway to every member company: Tradepath International, Flowerport Transport, Honest Logistics, Crystal Automotive, BMW Ethiopia, Logix Express, GCC Sport Surfaces Ethiopia, Dealmode Importer, Dun Soft & Alcohol Drinks Distributor and EcoGuard Manufacturing.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com) as a fully static site, using the same stack, typography and component patterns as the [Flowerport site](https://github.com/eyob6117/flowerport). Deployed to GitHub Pages.

**Live (after merge):** https://eyob6117.github.io/WoubGet-Holdings/

## What's on the site

- **Home** (`/`): hero with the group "constellation" linking to each company · company directory with sector filters · about the group and key figures · four sectors · airlines and brands represented · group contact form · footer with every company.
- **A page per company** (`/companies/<slug>/`): overview, highlights, services, key facts, sister companies, and a contact form pre-set to that company.
- **"Our companies" switcher** in the header, on every page, to jump to any company.

Where a company has its own website, its card, page and footer show **Visit website** and link straight to it. Today that is Flowerport (https://eyob6117.github.io/flowerport/); the others show "Website coming soon" and are served by their page here.

## Adding or linking a company website

All content lives in [`src/data/site.ts`](src/data/site.ts). When a company's own site goes live, set its `website`:

```ts
{ slug: 'tradepath', name: 'Tradepath International', /* … */ website: 'https://tradepath.example' },
```

To add a company, append an entry to `companies`; its page, directory card, header menu entry and footer link are generated automatically.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321/WoubGet-Holdings/
npm run build     # type-checks and builds to dist/
npm run preview
```

## Content notes

Copy comes from the WoubGet Holdings company profile. Before launch, please confirm:

- **Logos.** Companies are shown as coloured monograms (Flowerport uses its own mark). Replace them in `src/components/CompanyBadge.astro` with official logo files when available; the group mark is `src/components/Mark.astro`.
- **Logix Express.** The profile page describes Aramex; the site presents Logix Express as bringing the Aramex network to Ethiopia. Confirm the wording of that relationship.
- **Brand spellings** taken from the profile: Armor All (written "ArmoredAll" in the profile), Bedele, Modjo.

## Contact form

Without configuration, the form opens a pre-filled email to info@woubget.com, with the chosen company in the subject. To post enquiries to a form service or CRM webhook, pass an endpoint to the build:

```yaml
# .github/workflows/deploy.yml, build step
- run: npm run build
  env:
    PUBLIC_CONTACT_ENDPOINT: ${{ vars.CONTACT_ENDPOINT }}
```

## Deploying

`.github/workflows/deploy.yml` builds every push and pull request, and deploys `main` to GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions**. For a custom domain such as www.woubget.com, set `SITE_URL=https://www.woubget.com` and `BASE_PATH=/` in the build step.
