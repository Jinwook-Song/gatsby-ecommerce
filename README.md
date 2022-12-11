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
