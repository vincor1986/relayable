## Relayable.dev - [visit site](https://www.relayable.dev)

**Relayable is an online developer tool aiming to streamline the process of requesting developer access from clients.**

Often, clients aren't tech-minded or web-savvy, but at the same time, they don't feel comfortable handing over their login credentials for web service platforms such as Google Analytics or Azure.

In these cases, developers need to provide detailed guidance on how to add developer access to these resources, platforms or projects. On large projects, this can include multiple platforms and services.

**Relayable** makes this a breeze by offering developers interactive how-to guides that cover developer access and revocation processes for 100+ platforms. Developers just find the relevant platform(s) and task(s), fill in the variables relating to their usage instance, and copy the step-by-step instructions. They can then paste this in an email to the client, saving time, ensuring accuracy and giving the client the best experience.

## Tech stack

For this project I used the following stack:

- **Next.js / React**
- **Node.js** for backend functionality (no Edge in this project)
- **Tailwind CSS / CSS** for styling
- **MongoDB Atlas / MongoDB Node Driver**
- Additional critical NPM packages include: **slugify**, **xss** and **bcryptjs**

## Security

Security is a foremost consideration for this service. A number of security considerations have been taken into account:

- **XSS** - Cross-site scripting and script injection protection is applied to ensure safety in user-generated content.
- **Client-side processing** - No sensitive data is sent to the server, ensuring that users never jeapordise security of their applications or projects. Any sensitive data entered by users (developers) is lost when the user navigates away from the page or closes their browser.
- **reCAPTCHA (v3)** - The site utilises Google's reCAPTCHA user validation to ensure that user guides and AI-generated content is only submitted by real people.
- **Submission approval** - Submitted guides go through a manual approval process to ensure that only legitimate content goes public.

## Next.js Optimisations

**Relayable** uses a wide-variety of Next.js optimisations. These include:

- The use of React performance hooks such as `useMemo` and `useCallback`.
- Meeting accessibility standards (handling focus and keyboard navigation, WCAG-standard contrast, use of semantic HTML and ARIA properties).
- Maximal use of server components to ensure server-side rendering (SSR) for critical pages, and using streaming to client components where possible with the use of React `<Suspense>` boundaries.
- Image optimisations with the Next.js `<Image>` component, (using `priority` for critical images, applying dimensions with the `height` and `width` props, lazy-loading with `loading="lazy"`, etc).
- Using Incremental Static Regeneration (ISR) for server-side pages where appropriate.
- Applying crucial metadata information and using the /app router to manage icons and favicons.
- Importing fonts with the use of `next/font` and applying `display: "swap"` for cross-browser support.
- Use of React refs and `useLayoutEffect` to control post-render DOM manipulations.
- Use of `next lint` to test code before commits.

## CI/CD

For my Next.js project, I set up a branch-based CI/CD workflow in GitHub Actions. All pushes to the dev branch trigger two automated test jobs — one for database-modifying E2E tests in a service container, and one for read-only tests. Once changes pass in dev, I merge to main, which triggers the same tests and then automatically deploys the app to Vercel using the Vercel CLI. This ensures that every production release is tested and deployed automatically, with no manual steps after the merge/push step.

In terms of the planning stage, I made efforts to follow Scrum/Agile principles in terms of focusing on user stories (i.e. "As a developer, I'd like to be able to copy and paste instructions quickly to clients in order to save time) and aiming to deliver features quickly, prioritised by value.

##

_This project is proprietary. All rights reserved. Unauthorized use, copying, or modification is prohibited._
