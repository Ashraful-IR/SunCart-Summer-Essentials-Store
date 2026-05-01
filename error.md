# Error Log & Feedback

## Build Failure: `next build` (Turbopack) cannot fetch Google Fonts

### What happened
Running `npm run build` fails during the Turbopack build because `next/font/google` tries to download the **Geist** and **Geist Mono** font CSS from Google Fonts at build time.

In this environment the build cannot establish a connection to `https://fonts.googleapis.com`, so Next.js reports a `next/font` fetch failure and aborts the build.

### Where it was triggered
- File: `src/app/layout.js`
- Code: `import { Geist, Geist_Mono } from "next/font/google";`

### Error output (captured)
```
Turbopack build encountered 2 warnings:
[next]/internal/font/google/geist_2ae47f08.module.css
Error while requesting resource
There was an issue establishing a connection while requesting https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap

Import trace:
  Server Component:
    [next]/internal/font/google/geist_2ae47f08.module.css
    [next]/internal/font/google/geist_2ae47f08.js
    ./src/app/layout.js

[next]/internal/font/google/geist_mono_eb58308d.module.css
Error while requesting resource
There was an issue establishing a connection while requesting https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap

> Build error occurred
Error: Turbopack build failed with 2 errors:
[next]/internal/font/google/geist_2ae47f08.module.css
next/font: error:
Failed to fetch `Geist` from Google Fonts.

[next]/internal/font/google/geist_mono_eb58308d.module.css
next/font: error:
Failed to fetch `Geist Mono` from Google Fonts.
```

### Why this is happening (root cause)
`next/font/google` is a convenience API that fetches Google Fonts as part of the build pipeline. If the build environment blocks outbound requests to Google Fonts (common in CI, corporate networks, offline builds, or restricted sandboxes), the build fails.

### Fix applied
To make builds reliable in restricted/offline environments, `src/app/layout.js` was changed to **stop using** `next/font/google` at build time.

This removes the network dependency and allows `next build` to complete without attempting to download fonts.

### Recommended longer-term options
- Self-host fonts using `next/font/local` (best for performance + determinism).
- Use system fonts (fastest, simplest; no extra assets).
- If you must use Google Fonts, ensure CI/build has access to `fonts.googleapis.com` and `fonts.gstatic.com`.

## Other observations (not fixed)

### `next.config.mjs` image host looks suspicious
`next.config.mjs` includes `hostname: 'i.ibb.co.com'`. The common ibb host is `i.ibb.co` (without `.com`).

If images fail to load at runtime, this is a likely cause. I did not change it because it may be intentional, but it’s worth double-checking.

### Dependency note
`package.json` lists `"mongobd"`, which looks like a typo of `mongodb`.

You already have `mongodb` listed, so `mongobd` may be an accidental dependency. Removing it could be considered later, but it’s unrelated to the build failure above.

