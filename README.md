# Shift Landing Page

This project is a React + TypeScript + Vite template for the Shift landing page. It is ready to be built and served via Docker and Traefik in Docker Swarm. The project includes a minimal setup with ESLint configuration for type-checked rules and optional React-specific lint rules.

---

## Project Setup

Install project dependencies using npm:

    npm install

Start the development server:

    npm run dev

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app. The page supports hot module replacement (HMR) and will reload automatically on code changes.

Build the project for production:

    npm run build

The build output will be generated in the `dist/` folder.

---

## ESLint Configuration

The project includes ESLint configuration with type-aware rules for TypeScript. Recommended configuration:

    export default defineConfig([
      globalIgnores(['dist']),
      {
        files: ['**/*.{ts,tsx}'],
        extends: [
          tseslint.configs.recommendedTypeChecked,
          tseslint.configs.strictTypeChecked,
          tseslint.configs.stylisticTypeChecked,
        ],
        languageOptions: {
          parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
          },
        },
      },
    ])

Optional ESLint rules for React and React DOM:

    import reactX from 'eslint-plugin-react-x'
    import reactDom from 'eslint-plugin-react-dom'

    export default defineConfig([
      globalIgnores(['dist']),
      {
        files: ['**/*.{ts,tsx}'],
        extends: [
          reactX.configs['recommended-typescript'],
          reactDom.configs.recommended,
        ],
        languageOptions: {
          parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
          },
        },
      },
    ])

---

## Docker Build & Run

The project uses a multi-stage Docker build: Node 22 is used for building the project and Nginx serves the static files.

Dockerfile:

    FROM node:22-alpine AS build

    WORKDIR /app

    COPY package*.json ./
    RUN npm install

    COPY . .
    RUN npm run build

    FROM nginx:alpine

    COPY --from=build /app/dist /usr/share/nginx/html

    EXPOSE 80

    CMD ["nginx", "-g", "daemon off;"]

Build the Docker image:

    docker build -t shift-landing .

Run the Docker container locally:

    docker run -p 8080:80 shift-landing

Open [http://localhost:8080](http://localhost:8080) to view the landing page. Traefik in Swarm will handle routing to the container automatically.

---

## Notes

- The `dist/` folder is automatically generated during `npm run build` and should **not** be committed to the repository.
- This setup is ready for deployment in Docker Swarm with Traefik.
- The container listens on port 80 internally; external port mapping can be adjusted via Traefik or `docker run`.
- All source code, configuration, and Dockerfile are included in the repository for easy deployment and version control.
