import { HeadFC } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

function Blog() {
  return (
    <Layout title='Blog'>
      <p>The most recent news from my shop</p>
    </Layout>
  );
}

export default Blog;

export const Head: HeadFC = () => <Seo title='Blog' />;
