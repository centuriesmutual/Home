# Supabase Authentication Setup Guide

## Overview

This guide explains how to set up Supabase authentication for the Centuries Mutual website.

## Prerequisites

- Supabase account and project
- Supabase publishable key: `sb_publishable_fqTSftIhXgzJmtu3bCMlXg_etlc8rrC`

## Step 1: Get Your Supabase Project URL

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **API**
4. Copy your **Project URL** (format: `https://xxxxx.supabase.co`)

## Step 2: Configure Environment Variables in Vercel

In your Vercel dashboard, go to **Settings** → **Environment Variables** and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_fqTSftIhXgzJmtu3bCMlXg_etlc8rrC
```

**Important:** 
- Replace `https://your-project-id.supabase.co` with your actual Supabase project URL
- The `NEXT_PUBLIC_` prefix is required for Next.js to expose these variables to the client

## Step 3: Configure Supabase Authentication

1. In your Supabase Dashboard, go to **Authentication** → **URL Configuration**
2. Add your site URLs:
   - **Site URL**: `https://centuriesmutual.com`
   - **Redirect URLs**: 
     ```
     https://centuriesmutual.com
     https://centuriesmutual.com/login
     https://block.centuriesmutual.com
     http://localhost:3030
     http://localhost:3030/login
     ```

## Step 4: Enable Email Authentication

1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Ensure **Email** provider is enabled
3. Configure email templates if needed
4. Set up email confirmation (optional but recommended)

## Step 5: Test Authentication

1. Deploy your changes to Vercel
2. Visit your login page
3. Try signing up with a new account
4. Try logging in with existing credentials
5. Verify logout functionality

## Features Implemented

✅ **Login** - Users can sign in with email and password  
✅ **Signup** - Users can create new accounts  
✅ **Logout** - Users can sign out from the navbar  
✅ **Session Management** - Automatic session persistence and refresh  
✅ **Protected Routes** - Navbar shows login/logout based on session  
✅ **Error Handling** - User-friendly error messages  

## Redirect Behavior

- **After Login**: Users are redirected to `https://block.centuriesmutual.com`
- **After Signup**: Users are redirected to `https://block.centuriesmutual.com`
- **After Logout**: Users are redirected to the homepage

## Troubleshooting

### "NEXT_PUBLIC_SUPABASE_URL is not set" Warning
- Make sure you've added `NEXT_PUBLIC_SUPABASE_URL` to your Vercel environment variables
- Redeploy your application after adding environment variables

### Authentication Not Working
- Verify your Supabase project URL is correct
- Check that the anon key matches your Supabase project
- Ensure redirect URLs are configured in Supabase dashboard
- Check browser console for error messages

### Session Not Persisting
- Verify `persistSession: true` is set in the Supabase client config
- Check that cookies are enabled in the browser
- Ensure HTTPS is used in production

## Next Steps

1. Add the environment variables to Vercel
2. Configure Supabase redirect URLs
3. Test the authentication flow
4. Set up email templates (optional)
5. Configure password reset functionality (optional)

