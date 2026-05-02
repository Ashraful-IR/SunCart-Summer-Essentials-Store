# SunCart | Summer Essentials Store

SunCart is a responsive summer shopping experience built with Next.js. It combines a branded landing page, animated intro modal, product discovery screens, authentication flows, user profile management, and product detail views into one storefront-style app.

## What The App Does

### Landing and Home Experience

- Shows an opening modal with a dotLottie animation and a close button in the top-left corner.
- Introduces the store with a seasonal headline and supporting marketing copy.
- Displays a hero slider with multiple lifestyle banners that auto-play and can be navigated manually.
- Loads the product catalog on the home page and renders popular product cards with ratings, prices, and detail links.
- Ends the page with an extra content section that highlights summer care tips and featured brands.

### Product Browsing

- Fetches product data from the app data layer and renders it in reusable card components.
- Shows product image, name, category, description, rating, and price.
- Gives each card a direct link to the dedicated product details page.
- Uses responsive layouts and hover transitions so browsing works well on mobile and desktop.

### Product Details

- Opens a full product detail page for each item by ID.
- Protects the detail route with authentication and redirects unauthenticated users to login with a callback URL.
- Displays a large product image, category, brand, description, price, rating, and stock information.
- Provides a back link to return to the product list.

### Authentication

- Supports email and password login.
- Supports email and password registration.
- Includes social sign-in hooks for Google.
- Uses toast notifications to confirm successful login, registration, and social auth actions.
- Preserves the intended destination after login through callback URLs.

### Profile Management

- Shows a signed-in user profile page with avatar, name, email, and account status.
- Provides a signed-out state that prompts the user to log in or create an account.
- Lets users edit their display name and profile image URL.
- Uses the auth client to update the current user record.

### Shared UI and Navigation

- Provides a responsive top navigation bar with home, products, and profile links.
- Shows the current user avatar in the navbar when logged in.
- Includes desktop and mobile navigation behavior.
- Provides a branded footer with informational links and social icons.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- DaisyUI
- Swiper
- @lottiefiles/dotlottie-web
- Better Auth
- MongoDB
- react-icons
- react-toastify

## Project Structure

- `src/app/(main)` contains the storefront pages.
- `src/app/(auth)` contains login and registration pages.
- `src/components` contains shared and reusable UI.
- `src/lib` contains auth and data helpers.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - start the production server
- `npm run lint` - run ESLint