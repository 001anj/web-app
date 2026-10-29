# Anjo's QA Playground

Welcome to Anjo's QA Playground! This app is specifically designed as a testbed for learning and mastering Playwright automation.

## Overview
It contains **30 real-world automation exercises** spread across 7 modules, including:
- Basic UI Interactions & Locators
- Complex E-commerce Flows (Add to cart, Checkout)
- Advanced Components (Drag & Drop, Modals, Iframes, Upload/Download)
- API Automation & Interception
- Full End-to-End Scenarios

## Getting Started
To run the application locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running E2E Tests

The Playwright test suite lives under `e2e-tests/`. With the dev server running (`npm run dev`):

```bash
npm run e2e       # headless run
npm run e2e-ui    # run with the Playwright UI mode
```

### Using the Playwright CLI for AI testing

This project also includes `@playwright/cli`, which exposes browser automation as tools an AI agent (e.g. via MCP) can drive directly — navigating pages, clicking, filling forms, and inspecting the DOM. It's useful for AI-assisted exploration and authoring of new tests without writing Playwright code by hand first.

Happy testing!
