import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';

const Category: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'title',
      label: 'title',
      type: 'text',
      required: true,
    },
    slug,
  ],
  admin: {
    useAsTitle: 'title',
  },
};

export default Category;
