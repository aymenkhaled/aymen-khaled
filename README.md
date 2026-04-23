# Aymen Khaled - Company Portfolio

Recruiter-focused portfolio for long-term roles in full-stack AI/SaaS development.

## Local setup

```bash
npm install
npm run dev
npm run build
```

## CV download

The navbar CV button uses:

```text
public/Aymen_Khaled_CV.pdf
```

Replace this file with the latest official CV when the resume changes.

## EmailJS contact form

This app uses EmailJS from the browser, not Nodemailer. Create `Main_Portfolio-main/.env.local` with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Use the same keys in Vercel Project Settings -> Environment Variables. The EmailJS template must include `from_name`, `from_email`, and `message`.

## Calendly

The contact section links to:

```text
https://calendly.com/khaledaymen850
```

If you want a direct 30-minute event URL, create and publish that event in Calendly first, then replace the link with the exact share URL from Calendly.

## Vercel Analytics

The app includes `@vercel/analytics/react`. Enable Web Analytics in the Vercel dashboard for this project, then redeploy.
