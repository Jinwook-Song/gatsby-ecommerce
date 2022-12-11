import * as React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const IndexPage = ({ data }: PageProps<Queries.StickersQuery>) => {
  console.log(data);
  return (
    <Layout title='Welcome to DevStickers 🦄'>
      {data.allContentfulStikerPack.nodes.map((sticker, idx) => (
        <article key={idx}>
          <GatsbyImage
            image={getImage(sticker.preview?.gatsbyImageData!)!}
            alt={sticker.name!}
          />
          <h2>{sticker.name}</h2>
          <h4>${sticker.price}</h4>
        </article>
      ))}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query Stickers {
    allContentfulStikerPack {
      nodes {
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 40)
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title='Home' />;
