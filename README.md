# Christopher Foundation website

Next.js 16 + React 19 + Tailwind CSS 4 + framer-motion.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pages

| Route           | Page                                            |
| --------------- | ----------------------------------------------- |
| `/`             | Home                                            |
| `/about`        | Mission, values, team                           |
| `/programs`     | Awareness camps, medical camps + PHC, bionics   |
| `/stories`      | Christopher's story                             |
| `/get-involved` | Donate / volunteer / partner + contact form     |

## Adding your photos

Put the photos in `public/images/` with these names (`.jpg`). Until a photo exists, a styled placeholder is shown.

| File                 | Used for                                   |
| -------------------- | ------------------------------------------ |
| `hero.jpg`           | Big home page banner (landscape works best) |
| `awareness-camp.jpg` | Awareness camps program                    |
| `medical-camp.jpg`   | Free medical camps program                 |
| `bionics.jpg`        | Engineered solutions / bionics program     |
| `christopher.jpg`    | Christopher's portrait                     |
| `ryan.jpg`           | Ryan's portrait                            |
| `salome.jpg`         | Salome's portrait                          |
| `story.jpg`          | Banner on the story page                   |
| `community.jpg`      | Banner on About / Get Involved             |

To use a different file name or a `.png`, change the paths in `src/lib/site.ts`.

## Editing content

- Contact email, motto, team bios: `src/lib/site.ts`. **The email is a placeholder, so replace it.**
- Program text: `src/lib/programs.ts`
- The contact form opens the visitor's email app with the message filled in. To receive submissions directly, connect a form service (e.g. Formspree) in `src/components/ContactForm.tsx`.
