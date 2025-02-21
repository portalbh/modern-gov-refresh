# Modern Gov Refresh

## Project info

**URL**: https://lovable.dev/projects/5b85d4ad-2a7e-433c-aa26-268872331e55

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5b85d4ad-2a7e-433c-aa26-268872331e55) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Fixing Icon Size and Styles

If the icons are too large or the styles are not correct, you can adjust the CSS settings. Follow these steps:

1. Open the `styles.css` file located in the `src` directory.
2. Locate the CSS rules for the icons and adjust the `width`, `height`, and other style properties as needed.

Example:
```css
/* filepath: /c:/CodeBase/Projects/www/mohbahrain/modern-gov-refresh/src/styles.css */
.icon {
    width: 24px; /* Adjust the size as needed */
    height: 24px; /* Adjust the size as needed */
    /* Add or modify other styles as needed */
}
```

3. Save the changes and restart the development server to see the updates.

## What technologies are used for this project?

This project is built with HTML, CSS, and JavaScript.

- Vite
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5b85d4ad-2a7e-433c-aa26-268872331e55) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
