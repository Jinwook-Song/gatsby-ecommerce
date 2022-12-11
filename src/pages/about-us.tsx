import { HeadFC } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

function AboutUs() {
  return (
    <Layout title='About Us'>
      <p>We are the sticker store.</p>
    </Layout>
  );
}

export default AboutUs;

export const Head: HeadFC = () => <Seo title='About Us' />;
