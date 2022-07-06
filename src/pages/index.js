import React from 'react'
import Layout from '../components/layout'
import HeroPost from '../components/hero-post'
import MoreStories from '../components/more-stories'

import { graphql } from 'gatsby'
import TopSection from '../components/top-section'
import SecondSection from '../components/second-section'
import ThirdSection from '../components/third-section'
import VideoSection from '../components/video-section'
import ExpertiseSection from '../components/expertise-section'
import ApplySection from '../components/apply-section'

export default function Index ({ data: { allPosts, site, blog } }) {
  const heroPost = allPosts.nodes[0]
  const morePosts = allPosts.nodes.slice(1)

  return (
    <Layout seo={{}} site={site}>
      <TopSection />
      <SecondSection />
      <ThirdSection />
      <VideoSection />
      <ExpertiseSection />
      <ApplySection />
    </Layout>
  )
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`
