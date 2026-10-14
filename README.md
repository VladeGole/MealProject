# MealProject – Recipe Finder

## About the Project

MealProject is a web application built with TypeScript that allows users to explore meals and discover recipes using data from [TheMealDB API](https://www.themealdb.com/api.php).

The application retrieves meal information from an external API and displays recipe details, including images, ingredients, measurements, cooking instructions, categories, and cuisine areas.

## Features

- **Recipe Discovery** – Display randomly selected recipes when the application loads.
- **Search by Category** – Browse meals based on their category.
- **Search by Ingredients** – Select multiple ingredients to find matching meals.
- **Search by Cuisine Area** – Explore meals associated with different countries and cuisines.
- **Recipe Details** – View ingredients, measurements, cooking instructions, tags, and meal images.
- **YouTube Integration** – Open available YouTube videos related to recipes.
- **Interactive Recipe Popups** – Open a popup with detailed recipe information.
- **Dynamic UI Rendering** – Generate recipe cards and selection options dynamically using TypeScript.

## Technologies Used

- **TypeScript** – Application logic, interfaces, and type safety.
- **HTML5** – Application structure.
- **CSS3** – Styling and layout.
- **Axios** – HTTP requests to the external API.
- **TheMealDB API** – Recipe and meal data provider.
- **Webpack** – Bundling TypeScript modules into a JavaScript bundle.
- **Node.js and npm** – Dependency management and project tooling.

## Project Structure

```text
MealProject/
├── css/
│   └── style.css
├── src/
│   ├── events/
│   │   └── selectEvents.ts
│   ├── handlers/
│   │   └── searchHandlers.ts
│   ├── helpers/
│   │   └── htmlSelectHelpers.ts
│   ├── interface/
│   │   ├── MealInterface.ts
│   │   ├── MealResponse.ts
│   │   └── ...
│   ├── service/
│   │   └── mealDbService.ts
│   └── index.ts
├── index.html
├── package.json
├── tsconfig.json
└── webpack.config.js
```

### Architecture Overview

- **Events** – Register event listeners for user interactions.
- **Handlers** – Process search requests based on selected filters.
- **Helpers** – Populate dropdowns and render meal information in the DOM.
- **Interfaces** – Define TypeScript data structures for API responses and meal information.
- **Service** – Build API URLs, send HTTP requests with Axios, and process responses.
- **Entry Point** – Initialize the application, load filter options, and display initial recipes.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd MealProject
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Build the application with Webpack:

   ```bash
   npx webpack
   ```

5. Open `index.html` in your browser using a local development server.

The application uses TheMealDB API, so an internet connection is required to retrieve recipe data.

## API Reference

This project uses [TheMealDB API](https://www.themealdb.com/api.php) to retrieve meal information.

Examples of API endpoints used by the application:

- `random.php` – Retrieve a random meal.
- `filter.php` – Filter meals by category, area, or other supported criteria.
- `lookup.php` – Retrieve detailed information about a meal.
- `list.php` – Retrieve available categories and ingredients.

## Learning Objectives

This project demonstrates practical experience with:

- Working with external REST APIs.
- Making asynchronous HTTP requests using Axios and `async/await`.
- Organizing TypeScript code into modules.
- Defining interfaces for structured API responses.
- Manipulating the DOM dynamically.
- Handling user events and search filters.
- Using Webpack to bundle a TypeScript application.

## Future Improvements

- Combine category, ingredient, and cuisine filters into a single search.
- Improve error handling and loading states for API requests.
- Add responsive design improvements for mobile devices.
- Add pagination or additional search options.
- Introduce automated tests for API services and search functionality.

## Acknowledgements

- [TheMealDB](https://www.themealdb.com/) – For providing the recipe API and meal data.
