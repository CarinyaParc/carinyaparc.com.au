import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const legalContent = defineType({
  name: 'legalContent',
  title: 'Legal Content',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Legal Content Section',
        subtitle: 'Rich text content for legal documents',
      }
    },
  },
})