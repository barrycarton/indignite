# Deployment Guide for Cloudflare Pages

This guide will help you deploy the Indignite website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works perfectly)
- This repository forked to your GitHub account

## Deployment Steps

### 1. Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your account
3. Navigate to **Pages** in the left sidebar
4. Click **Create a project**
5. Select **Connect to Git**

### 2. Connect Your Repository

1. Authorize Cloudflare to access your GitHub account
2. Select the `indignite` repository from the list
3. Click **Begin setup**

### 3. Configure Build Settings

Since this is a static website with no build process required, use these settings:

- **Project name**: `indignite` (or any name you prefer)
- **Production branch**: `main`
- **Framework preset**: None
- **Build command**: (leave empty)
- **Build output directory**: `/` (root directory)

### 4. Deploy

1. Click **Save and Deploy**
2. Cloudflare will deploy your site in a few seconds
3. Your site will be available at `https://<project-name>.pages.dev`

## Custom Domain (Optional)

To use a custom domain:

1. Go to your project in Cloudflare Pages
2. Click on **Custom domains**
3. Click **Set up a custom domain**
4. Follow the instructions to add your domain

## Automatic Deployments

Once connected, Cloudflare Pages will automatically:
- Deploy new commits to your `main` branch
- Create preview deployments for pull requests
- Keep your site up to date with zero configuration

## Environment Variables

This project doesn't require any environment variables. Everything works out of the box!

## Troubleshooting

### Site not loading?
- Make sure `index.html` is in the root directory
- Check that the build output directory is set to `/`

### CORS errors?
- This shouldn't happen with Cloudflare Pages as all files are served from the same domain

### Need help?
- Check [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/)
- Open an issue in this repository

## Performance Tips

The site is already optimized for Cloudflare Pages with:
- No build step required
- All assets served from the same domain
- Vanilla JavaScript (no framework overhead)
- Minimal CSS and JavaScript
- Automatic caching by Cloudflare's CDN

Enjoy your deployment! 🚀
