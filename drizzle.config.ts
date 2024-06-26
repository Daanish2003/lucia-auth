import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 schema: "./src/lib/db/schema.ts",
  dialect: 'postgresql',
  out: './src/lib/db/migrations',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
  verbose: true,
  strict: true,
})