import { CollectionConfig } from 'payload/types';
import meta from '../fields/meta';
import slug from '../fields/slug';

const Project: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      type: 'text',
      name: 'projectName',
      label: 'Project Name',
      required: true,
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Description',
      required: true,
    },
    {
      type: 'text',
      name: 'technologiesUsed',
      label: 'Technologies Used',
      required: true,
    },
    slug,
    meta,
  ],
  admin: {
    useAsTitle: 'projectName',
  },
};

export default Project;
