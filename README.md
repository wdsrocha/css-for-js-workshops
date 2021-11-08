# 🎨 CSS for JS - Workshops

[![Netlify Status](https://api.netlify.com/api/v1/badges/423b7749-06f9-4ec8-950d-a8611a55ff67/deploy-status)](https://app.netlify.com/sites/wdsrocha-css-for-js/deploys)

My solutions to all the workshops from [CSS for JavaScript Developers
course](https://css-for-js.dev/).

Workshops are real-world-inspired problems presented in each module. The project
and its goals are described in depth in the project's README.md file.

1. [Rendering Logic I](01-rendering-logic-i/)
2. [Rendering Logic II](02-rendering-logic-ii/)
3. [Modern Component Architecture](03-modern-component-architecture)
4. Flexbox
5. Responsive and Behavioural CSS
6. Typography and Images
7. CSS Grid
8. Animations

Obs.: A workshop without a link means that I haven't solved it yet 👀

## Develop

1. Download this repository
2. Run `yarn install` on **this directory**
3. Follow the development instructions in each module's README (or just the ones that you are interested)

### Adding a new module

1. Update this README list
2. Update the list on [index.html](index.html)
3. Create a directory in the `${moduleIndex}-${moduleSlugName}` format
4. Create a README inside this module directory, based on previous modules

## Deploy

1. Follow the instructions in each module's README to build them individually
2. Run `netlify deploy` in **this directory** to check preview a draft
3. If everything is OK, run `netlify deploy --prod` **in this directory**
