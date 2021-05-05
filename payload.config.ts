import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import FormSubmission from './collections/FormSubmissions';
import Project from './collections/Projects';
import BlogPost from './collections/BlogPosts';
import Category from './collections/Categories';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Page, Media, FormSubmission, Project, BlogPost, Category],
});
