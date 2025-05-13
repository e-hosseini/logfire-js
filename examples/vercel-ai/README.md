# Vercel AI Example with Node.js TypeScript Native Support

**Goal:** This example demonstrates how to send OpenTelemetry (OTEL) traces and spans from Vercel AI to Logfire, enabling a detailed and presentable panel for each AI action. By integrating Logfire with Vercel AI, you can gain deep insights and visualizations into every AI-driven operation, making it easy to analyze, debug, and present the behavior of your AI workflows.

This example also shows how to use the new native TypeScript support in Node.js (v22.6.0 and above) to run TypeScript code directly, without a build step, using the `--experimental-strip-types` flag. It showcases a weather analysis system using the [@ai-sdk/openai](https://www.npmjs.com/package/@ai-sdk/openai) and [@vercel/otel](https://www.npmjs.com/package/@vercel/otel) packages, with OpenTelemetry tracing and Logfire span processing.

## Features
- **Native TypeScript execution**: No transpilation needed, thanks to Node.js v22.6.0+.
- **Weather analysis**: Uses AI tools to analyze and report weather for given locations.
- **OpenTelemetry integration**: Traces are exported using Vercel's OTEL SDK and Logfire span processor.

## Requirements
- **Node.js >= 22.6.0**
  - This version introduces the `--experimental-strip-types` flag, allowing you to run `.ts` files directly.
  - [Download Node.js 22.6.0+](https://nodejs.org/en/download/current)
- **npm** (comes with Node.js)

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the example**

   ```bash
   npm start
   ```
   
   This runs:
   ```bash
   node --experimental-strip-types --disable-warning=ExperimentalWarning --import ./instrumentation.ts app.ts
   ```
   - `--experimental-strip-types` enables native TypeScript support (see [Node.js docs](https://nodejs.org/api/typescript.html)).
   - `--import ./instrumentation.ts` sets up OpenTelemetry and Logfire tracing before your app starts.

3. **What it does**
   - The script will analyze weather conditions for London and New York using AI tools and print the results to the console.
   - Tracing and telemetry are enabled and sent to Logfire (see `instrumentation.ts`).

## Project Structure

- `app.ts` — Main example script (weather analysis logic)
- `instrumentation.ts` — Sets up OpenTelemetry and Logfire tracing
