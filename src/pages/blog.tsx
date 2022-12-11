import { graphql, HeadFC, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  return (
    <Layout title='Blog'>
      <ul>
        {data.allFile.nodes.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default Blog;

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title='Blog' />;
