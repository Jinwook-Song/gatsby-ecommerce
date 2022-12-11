import { graphql, HeadFC, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

function BlogPost({ data, children }: IBlogPostProps) {
  console.log(data, children);
  return (
    <Layout title='Blog Post'>
      <div>{children}</div>
    </Layout>
  );
}

export default BlogPost;

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        date
        slug
        title
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={`${data.mdx?.frontmatter?.title ?? 'Blog'}`} />
);
