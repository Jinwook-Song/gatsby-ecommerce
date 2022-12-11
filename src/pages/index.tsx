import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title='Welcome to DevStickers 🦄'>
      <div></div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title='Home' />;
