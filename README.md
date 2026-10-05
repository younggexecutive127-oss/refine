# Refined Detailing Newcastle

A responsive six-page static website with cinematic video, a vehicle-size price selector, a video gallery, service-area map and booking enquiries by SMS or email.

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

The three review excerpts and service-area map (including the pink dashed boundary) are reused from Refined’s original website. No additional reviews, credentials, ceramic-coating or PPF offerings were invented.

## Editing

Edit `build-pages.mjs` for page copy and HTML, `dist/styles.css` for styling, and `dist/app.js` for interactions. Run `npm run build` after changing templates. Routes: `/`, `/services/`, `/our-work/`, `/about/`, `/book/`, `/privacy/`.

Google Fonts and the external Google Maps link require an internet connection. The map is the original service-area image and approximate dashed boundary, not a customer-facing shopfront.

## Search and deployment

Each page includes a unique description, canonical URL and social-sharing metadata. The build generates robots.txt and sitemap.xml and adds local business/service structured data. Set optional `SITE_URL` to the final public origin when using a custom domain. On Vercel, the production project URL is used automatically when available; otherwise the existing business domain is used. The map boundary is approximate and reused from the old site.

Vercel builds `dist/` with `npm run build`; media files are served locally with cache headers. Videos are compressed, muted on the homepage, and loaded on demand in the gallery. No backend, API key or paid booking provider is required. The public demo is not a replacement for the business’s current live domain until its owner chooses to switch.

Inner-page background photographs are licensed Pexels images, distinct from the homepage film: services https://www.pexels.com/photo/a-black-car-covered-with-soap-6873121/; work https://www.pexels.com/photo/close-up-on-car-at-car-wash-9966016/; about https://www.pexels.com/photo/person-cleaning-a-black-car-4870700/; booking https://www.pexels.com/photo/luxurious-black-car-interior-with-sunlit-detailing-36806220/; privacy https://www.pexels.com/photo/a-person-washing-a-car-4870721/. These are illustrative header backgrounds; gallery videos remain Refined’s supplied work. The gallery uses inline native video controls and pauses other gallery videos when a new one is played.
