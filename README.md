# Web design site (Next.js)

## Run locally
1. Install Node.js 20+ and VS Code.
2. In a terminal inside this folder: `npm install`
3. Copy `.env.example` to `.env.local` and fill it in (see "Contact form" below).
4. `npm run dev` then open http://localhost:3000

## Where to edit
- `data/site.js`   business name, tagline, email, logo path
- `data/works.js`  your portfolio: title, type, description, live link, optional image
- `data/services.js` your services (Services page and home summary)
- `app/about/page.js` the About page text (story and the five-step process)
- `public/banner.jpg` the home page banner photo (wide image, about 1920x900; a dark overlay is added for you)
- `public/logo.svg` replace with your logo (keep the name, or update `logo` in `data/site.js`)
- `public/works/`  put project screenshots here, then set `image: "/works/name.png"`
- `app/globals.css` colours and styling (variables at the top)

## Contact form
Submissions go to `app/api/contact/route.js`, which emails you through Resend (free tier).
1. Create an account at resend.com and make an API key.
2. Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` (where enquiries should arrive).
3. Until your domain is verified in Resend, leave `CONTACT_FROM_EMAIL` as the default test sender.
   After you add your domain, verify it in Resend and change it to e.g. `Your Studio <hello@yourdomain.com>`.

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com choose Add New > Project, import the repo, keep the defaults, and add the environment variables from `.env.example`.
3. Deploy. Every push to GitHub redeploys automatically.

## Adding your domain later
Vercel > Project > Settings > Domains > Add, then set the DNS records Vercel shows at your domain registrar.
Afterwards set `NEXT_PUBLIC_SITE_URL` to `https://yourdomain.com` and redeploy.
