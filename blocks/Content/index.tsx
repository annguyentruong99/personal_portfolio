import React from 'react';
import { Block } from 'payload/types';
import RichText from '../../components/RichText';
import classes from './index.module.css';

export type Type = {
  blockType: 'content';
  blockName?: string;
  content: unknown;
};

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'column',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'width',
          label: 'Column Width',
          type: 'select',
          options: [
            {
              label: 'One Third',
              value: 'one third',
            },
            {
              label: 'Half',
              value: 'half',
            },
            {
              label: 'Two Third',
              value: 'two third',
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText content={content} className={classes.content} />
    </div>
  );
};

export default Content;
