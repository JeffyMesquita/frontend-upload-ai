# Starting a Vite Project with Tailwind CSS

## 1. Create a new project

```bash
pnpm create vite
```

## 2. Install Tailwind CSS and other dependencies

- we using `pnpm` as our package manager, but you can use `npm` or `yarn` if you want
- we using `tailwindcss` and `autoprefixer` as our dev dependencies
- we using `radix-ui` as our UI library
- all to be used by `shadcn/ui`

- install `tailwindcss` and `autoprefixer` as dev dependencies

```bash
pnpm add -D tailwindcss postcss autoprefixer
```

- following init `tailwindcss` config file

```bash
npx tailwindcss init -p
```

- next step, edit `tsconfig.json`, add the code below to the `compilerOptions` object

```json
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
}
```

- its necessary install `@types/node`

```bash
pnpm i -D @types/node
```

- now in `vite.config.ts` add the code below to the `plugins` array

```ts
import { defineConfig } from "vite";
// add this line
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // add this line
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- now you can run the following command to start `shadcn/ui` the project

```bash
pnpm dlx shadcn-ui@latest init
```

- after this you can add any component in your project only run the following command

```bash
pnpm dlx shadcn-ui@latest add <component-name>
```

## 3. Lucide Icons

- install `lucide`

```bash
pnpm i lucide-react
```
