import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title='Welcome to DevStickers 🦄'>
      <div></div>
      <StaticImage
        src='https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80'
        alt='Stickers on the wall'
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title='Home' />;
