import { CollectionConfig } from 'payload/types';
import meta from '../fields/meta';
import slug from '../fields/slug';

const BlogPost: CollectionConfig = {
  slug: 'blog-posts',
  fields: [
    {
      name: 'blogTitle',
      label: 'Blog Title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      label: 'Author',
      type: 'text',
      required: true,
    },
    {
      name: 'featuredImage',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'publishedOn',
      label: 'Published On',
      type: 'date',
      defaultValue: Date.now(),
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    slug,
    meta,
  ],
};

export default BlogPost;
