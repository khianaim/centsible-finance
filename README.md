# Centsible Finance: Where your money makes sense(cents)! 

An AI-powered finance platform aimed to provide users with a comprehensive set of tools to manage their finances smarter, track expenses, and receive personalized insights.

# Tech Stack:
Frontend: Next.js (React), Tailwind CSS

Backend: Supabase, Prisma, Inngest, ArcJet

AI: Gemini AI for budget analysis and finance insights

Authentication: Clerk for secure login and session management

Database: Supabase (PostgreSQL)


# Features:

Expense Tracking: Monitor spending habits and categorize transactions.

AI Receipt Scanner (desktop & mobile friendly): Log transactions in seconds with a receipt scanner powered by Gemini AI.

Budgeting Updates: Real-time budgeting suggestions and recommendations based on user input.

Personalized Financial Advice: AI-driven career and financial insights based on habits

Secure Authentication: User login and sign-up via Clerk for secure authentication.

Responsive UI: Fully responsive design using Tailwind CSS.

### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```
