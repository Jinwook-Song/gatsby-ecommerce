# Gatsby Ecommerce

| 프로젝트 기간 | 22.12.10 ~ |
| ------------- | ---------- |
| 프로젝트 목적 | Gatsby     |
| Github        | ‣          |
| docs          |            |

---

nove version +18

`npm i -g gatsby-cli`

check

`gatsby --version`

create project

`gatsby new`

---

### useStaticQuery

```tsx
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
```

---

Gatsby Plugin Library

Gatsby 사이트나 앱을 커스텀할 수 있는 기능을 제공하는 라이브러리들

[docs](https://www.gatsbyjs.com/plugins)

gatsby-source-filesystem

로컬 파일 시스템에서 Gatsby 애플리케이션으로 데이터를 sourcing하기 위한 Gatsby 소스 플러그인. 플러그인은 파일에서 파일 노드를 생성합니다. 다양한 "transformer" 플러그인은 파일 노드를 다양한 다른 유형의 데이터로 변환할 수 있습니다.

npm install gatsby-source-filesystem

https://www.gatsbyjs.com/plugins/gatsby-source-filesystem

```tsx
import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DevStickers 🦄`,
    siteUrl: `https://www.yourdomain.tld`,
    description: 'Buy the best stickers',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/blog-posts/`,
      },
    },
  ],
};

export default config;
```

---

### MDX (markdown + jsx)

`npm install gatsby-plugin-mdx gatsby-source-filesystem @mdx-js/react`\*\*\*\*

```bash
gatsby-plugin-mdx는 Gatsby와 함께 MDX를 사용하기 위한 공식 통합입니다.
MDX는 마크다운 안에 포함된 JSX를 작성할 수 있습니다. 사소한 일에는 마크다운의 간결한 구
(예: # heading)을 사용하고 고급 구성 요소에는 JSX를 사용할 수 있기 때문에 훌륭한 조합입니다.
```

### Dynamic page

MDX 노드의 slug 필드에서 새 페이지를 만들려면 src/pages/{mdx.frontmatter\_\_slug}.js에 새 파일을 만들어야 합니다.

src/pages/{mdx.frontmatter\_\_slug}.js는 데이터 계층의 각 MDX 노드에 대해 하나씩 여러 경로로 전환됩니다.

ex) Gatsby는 슬러그 my-first-post와 함께 MDX 노드를 사용하여 /my-first-post/ 경로에 있는 페이지를 빌드합니다.

### Blog Post

```tsx
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
```

### Static images

`npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp`

```
gatsby-plugin-image
높은 성능 점수를 유지하면서 반응형 이미지를 사이트에 추가하는 것은 수동으로 수행하기 어려울 수 있습니다.
Gatsby Image 플러그인은 다양한 크기와 형식으로 이미지를 생성하는 어려운 부분을 처리합니다!
https://www.gatsbyjs.com/plugins/gatsby-plugin-image

gatsby-plugin-sharp
아래 Sharp 이미지 처리 라이브러리에 구축된 여러 이미지 처리 함수들을 사용할 수 있습니다.
일반적인 웹 이미지 형식을 처리하기 위한 뛰어난 기본 설정을 제공하는 것을 목표로 합니다.
https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp

sharp
일반적인 형식의 큰 이미지를 더 작고 웹 친화적인 JPEG, PNG, WebP, GIF 및
다양한 크기의 AVIF 이미지로 변환하는 것입니다.
https://github.com/lovell/sharp
```
