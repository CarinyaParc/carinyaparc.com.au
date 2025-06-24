import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import { presentationTool } from 'sanity/presentation'


export default defineConfig({
  name: 'default',
  title: 'Carinya Parc',
  projectId: '60us1lzn',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        previewMode: { 
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
