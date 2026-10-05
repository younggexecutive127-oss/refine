# Refined Detailing Newcastle

A responsive six-page static website with cinematic video, a vehicle-size price selector, a filterable video gallery, service-area map and booking enquiries by SMS or email.

## Run locally

`npm run build` generates the HTML. `npm run dev` serves `dist/` at http://localhost:8000. No dependencies are required.

## Deploy to Vercel

Import this repository in Vercel. The included configuration builds the pages and deploys `dist/`. There are no environment variables or payment services to configure.

## Booking behaviour

The form opens the visitor's own messages or email app with details prefilled. Visitors must send the message; the appointment is not confirmed until Refined replies. A copy-details fallback is provided. Nothing is submitted to a server.

## Content and media

Services, guide prices, phone, email and service-area information were extracted from https://refineddetailing.net.au/ on 5 October 2026. Verify with the business before replacing its live site. Vehicle size examples are explanatory suggestions; the business confirms classification and the final price.

Gallery videos are the five unique supplied Refined Detailing clips, compressed for delivery. Duplicate uploads were excluded. Gallery stills were extracted from those videos. The logo was cropped from the supplied brand screenshot.

The Detail Establishment (https://thedetailestablishment.com/) informed the cinematic direction. Its footage and photographs are not included in this site.

The header film is stock footage: "A Person Wiping a Car", Pexels video 6872093, https://www.pexels.com/video/a-person-wiping-a-car-6872093/. Original source: https://videos.pexels.com/video-files/6872093/6872093-hd_1920_1080_25fps.mp4. Licensed under the Pexels License: https://www.pexels.com/license/. Stock footage is illustrative and is not presented as a Refined gallery project.

No unverified reviews, ratings, credentials, ceramic-coating or PPF offerings were added.

## Editing

Edit `build-pages.mjs` for page copy and HTML, `dist/styles.css` for styling, and `dist/app.js` for interactions. Run `npm run build` after changing templates. Routes: `/`, `/services/`, `/our-work/`, `/about/`, `/book/`, `/privacy/`.

Google Maps and Google Fonts require an internet connection. The map shows local areas, not a customer-facing shopfront.
