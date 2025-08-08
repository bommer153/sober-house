# Formspree Setup Guide - FREE Email API (No Limits!)

Formspree is completely FREE with unlimited emails and no setup required!

## Step 1: Create Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create a New Form

1. In your Formspree dashboard, click "New Form"
2. Give it a name like "Sunshine Sober Living Contact Form"
3. Copy the **Form ID** (it will look like `xrgjabab`)

## Step 3: Update the Code

1. Open `src/components/ContactForm.jsx`
2. Find this line:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/xrgjabab', {
   ```

## Step 4: Test the Form

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email to see if the message was received

## That's It! 🎉

- ✅ **Completely FREE** - No monthly limits
- ✅ **No setup required** - Just create account and get Form ID
- ✅ **Professional emails** - Beautiful formatting
- ✅ **Spam protection** - Built-in spam filtering
- ✅ **Email notifications** - Instant delivery
- ✅ **Mobile friendly** - Works on all devices

## What You'll Receive

When someone submits the form, you'll get an email with:
- Customer's name and email
- Phone number (if provided)
- Preferred contact method
- Urgency level
- Their message
- Newsletter subscription preference

## Free Plan Features

- **Unlimited form submissions**
- **Unlimited emails**
- **Spam protection**
- **Email notifications**
- **Basic analytics**
- **No credit card required**

## Alternative Free Options

If you want to explore other free options:

### 1. **Resend** (3,000 emails/month free)
- More professional setup
- Better email templates
- Requires API key

### 2. **EmailJS** (200 emails/month free)
- More customization
- Requires setup
- Limited free tier

### 3. **Netlify Forms** (100 submissions/month free)
- Built into Netlify hosting
- Simple setup
- Limited free tier

## Why Formspree is Best for You

- **Zero setup complexity**
- **No monthly limits**
- **Professional email formatting**
- **Instant setup**
- **Reliable delivery**
- **Spam protection included**

Perfect for your contact form needs! 🚀 