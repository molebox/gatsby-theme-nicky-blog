/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./Layout"
import SEO from "./SEO"
import { ITagPageData, ITagPageContext } from "../types"

interface IProps {
  data: ITagPageData
  pageContext: ITagPageContext
}

const TagPage: React.FC<IProps> = ({ data, pageContext }) => {
  const { posts, name, amount } = data
  const { basePath, slug } = pageContext
  const tagHeader = `${amount} post${
    amount === 1 ? `` : `s`
  } tagged with "${name}"`

  return (
    <React.Fragment>
      <SEO
        title={`Tagged "${name}"`}
        description={`List of posts tagged with "${name}"`}
        slug={`tag/${slug}`}
        basePath={basePath}
        keywords={[`tag`, name]}
      />
      <Layout>
        <div>
          <h1>{tagHeader}</h1>
          <p>
            <Link
              to={`${
                basePath === `/` || basePath === `` ? `` : `/`
              }${basePath}/tag`}
              sx={{
                variant: `styles.a`,
              }}
            >
              All tags
            </Link>
          </p>
          <ul>
            {posts.map(post => (
              <li key={post.slug} sx={{ margin: 1 }}>
                <Link
                  to={`${
                    basePath === `/` || basePath === `` ? `` : `/`
                  }${basePath}/${post.slug}`}
                  sx={{
                    variant: `styles.a`,
                  }}
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default TagPage
