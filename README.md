# `vite-node` issue

The `--watch` option in [vite-node](https://github.com/vitest-dev/vitest/tree/main/packages/vite-node)
has an issue when using it to develop backend services.

This is a small PoC.

## Reproduction

- Clone this repository and install dependencies using the package manager of your choice.
- Run the `dev` script from `package.json` using your package manager (ex: `npm run dev` or `yarn dev`)
- While the program is running, make a change to cause a restart in `vite-node`, for example
  change the `Hello World` text in `src/main.ts` and save.

## Expectation

The server restarts and reports `Listening...` again.

## Reality

The server restarts and crashes, reporting that the port `8080` is already in use.
