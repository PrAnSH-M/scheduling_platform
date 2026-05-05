/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset }, 
  typegen: {
    // glob pattern to find all Typescript/Javascript files with GROQ queries
    path: "./**/*.{ts, tsx, js, jsx}",
    // path to extracted schema files
    schema: "./schema.json",
    // Output path for generated types
    generates: "./sanity/types.ts",
    // Enable automatic type inference when using client.fetch()
    overloadClientMethods: true,
  },
});
