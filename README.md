# Refined Detailing Newcastle

A responsive, multi-page static website for Refined Detailing Newcastle, built with plain HTML, CSS and JavaScript. It includes service pricing, an Our Work gallery, before/after comparison, customer information and a booking enquiry form.

## Pages

- `index.html` — home
- `services.html` — service options and guide prices
- `work.html` — Our Work gallery (the three identified before-photo tiles have been removed)
- `about.html` — service area and process
- `booking.html` — booking enquiry form
- `privacy.html` — privacy notice
- `thank-you.html` — enquiry follow-up

## Run locally

No dependencies are required. Run `npm run build`, then serve `dist/`, for example with `python3 -m http.server 8000 --directory dist`.

## Deploy to Vercel

The existing Vercel project connected to this GitHub repository uses `npm run build` and publishes `dist/`. Pushes to `main` trigger its connected deployment. There are no environment variables or backend services to configure.

## Booking behaviour

The booking form opens the visitor's own text-message or email app with the enquiry details prefilled. The visitor must send the message; this is an enquiry, not a confirmed appointment. A copy-details fallback is provided.

## Site details

The mobile menu, vehicle-size price selector, before/after slider, video gallery and booking form use vanilla JavaScript. Responsive styles adapt the layout for desktop, tablet and narrow mobile screens. The business information and media were supplied in the project ZIP; verify prices and service details with the business before launch.
