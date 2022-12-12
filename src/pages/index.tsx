import * as React from 'react';
import { graphql, HeadFC, Link, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const IndexPage = ({ data }: PageProps<Queries.StickersQuery>) => {
  return (
    <Layout title='Welcome to DevStickers 🦄'>
      <div className='grid'>
        {data.allContentfulStickerPack.nodes.map((sticker, idx) => (
          <article key={idx}>
            <GatsbyImage
              image={getImage(sticker.preview?.gatsbyImageData!)!}
              alt={sticker.name!}
            />
            <Link to={`/products/${sticker.id}`}>
              <h2>{sticker.name}</h2>
              <h4>${sticker.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 100)
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title='Home' />;
