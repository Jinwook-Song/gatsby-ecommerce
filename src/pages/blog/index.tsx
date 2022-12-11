import { graphql, HeadFC, Link, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

function Blog({ data: { allMdx } }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title='Blog'>
      <section>
        {allMdx.nodes.map((file) => (
          <article key={file.frontmatter?.title}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <hr />
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export default Blog;

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        excerpt(pruneLength: 50)
        frontmatter {
          category
          title
          slug
          date(formatString: "YYYY.MM.DD")
          author
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title='Blog' />;
