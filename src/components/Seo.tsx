import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

interface ISeoProps {
  title: string;
}

function Seo({ title }: ISeoProps) {
  // running on build time
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}

export default Seo;
