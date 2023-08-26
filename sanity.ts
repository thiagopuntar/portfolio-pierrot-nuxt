import { createClient } from '@sanity/client';

export default createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-03-25',
});
