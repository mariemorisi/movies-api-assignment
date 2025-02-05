# movies-api

This application is a Vue 3 project built with Vite, showcasing a movie list fetched from a custom API. It implements features such as pagination, poster fetching from an external service (since the provided API only returned placeholder images), and a clean, responsive UI with design tokens.

## Features

- **Movie List** with paginated results
- **Poster Fetching** from a third-party service
- **Responsive Grid Layout** using pure CSS
- **Design Tokens** generated with [Layoutit Tokens](https://tokens.layoutit.com/)
- **Loading Spinner** from [CSS Loaders](https://css-loaders.com/spinner/)
- **Unit Tests** using [Vitest](https://vitest.dev/)

## Getting Started

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/movies-api.git
cd movies-api
```

### 2. Install the dependencies

```bash
npm install
```

### 3. Run the app in development mode

```bash
npm run dev
```

### 4. Run the unit tests

```bash
npm run test:unit
```

## Additional details

### Fetching Posters

The provided API only returned placeholder images. Therefore, I integrated a third-party API to fetch real posters.

### Folder Structure

src/components holds reusable components (MoviesList.vue, PaginationControls.vue, MovieCard.vue, etc.)
src/views holds page-level components (HomeView.vue)
src/services holds API calls and data-fetching logic (movies-service.js)
src/design-tokens/tokens.css stores the generated CSS variables for design consistency

Thank you for reviewing my project !
