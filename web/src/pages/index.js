import React from 'react'
import { graphql } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'

import { mapEdgesToNodes, filterOutDocsWithoutSlugs, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import ProjectPreviewGrid from '../components/project-preview-grid'
import GraphQLErrorList from '../components/graphql-error-list'
import Container from '../components/container'
import SEO from '../components/seo'

import Layout from '../containers/layout'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      image {
        asset {
          _id
        }
      }
      keywords
    }

    # projects: allSanityProject(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
    #   edges {
    #     node {
    #       id
    #       mainImage {
    #         crop {
    #           _key
    #           _type
    #           top
    #           bottom
    #           left
    #           right
    #         }
    #         hotspot {
    #           _key
    #           _type
    #           x
    #           y
    #           height
    #           width
    #         }
    #         asset {
    #           _id
    #         }
    #         alt
    #       }
    #       title
    #       _rawExcerpt
    #       slug {
    #         current
    #       }
    #     }
    #   }
    # }

    # posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
    #   edges {
    #     node {
    #       id
    #       publishedAt
    #       mainImage {
    #         crop {
    #           _key
    #           _type
    #           top
    #           bottom
    #           left
    #           right
    #         }
    #         hotspot {
    #           _key
    #           _type
    #           x
    #           y
    #           height
    #           width
    #         }
    #         asset {
    #           _id
    #         }
    #         alt
    #       }
    #       title
    #       _rawExcerpt
    #       slug {
    #         current
    #       }
    #     }
    #   }
    # }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  // const postNodes = (data || {}).posts
  //   ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
  //   : []
  // const projectNodes = (data || {}).projects
  //   ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  //   : []

  const how = [
    {
      title: 'It costs $9 per month',
      description:
        "While pricing isn't final, looking at the costs of running tech architecture, it's reasonable to charge a monthly fee instead of selling your data to the highest bidder."
    },
    {
      title: 'Half the monthly cost (so $4.50) are re-invested',
      description:
        'We take half the revenue and re-invest that into community funds across the globe. Anyone can then contribute or withdraw from the fund.'
    },
    {
      title: 'Anyone can contribute or withdraw',
      description:
        'Any member can invest in their communities and if you ever run into financial trouble you can withdraw a certain max from the platform.'
    },
    {
      title: 'The money sits in a pool',
      description:
        'Any money in the fund will be automatically invested and gaining interest, in theory this should beat inflation and hopefully can kick back some cost of living costs per year to members.'
    },
    {
      title: 'The funds _could_ be insured',
      description:
        "With the right partnerships there's a way to insure this for every member either individually or as a fund."
    }
  ]

  const faq = [
    {
      title: 'How does this make money?',
      description: "Does it need to? Can't we just keep self-sustaining communities globally?"
    },
    {
      title: 'Can this become a business?',
      description:
        "Absolutely. Message me on Twitter if you have ideas that don't gouge community members."
    },
    {
      title: 'Are there other ideas you can work on?',
      description:
        'Yep, but this is an experimental space for weird ideas that may or may not fit into traditional business models.'
    },
    {
      title: 'Why communities?',
      description:
        "Communities are an important building block for our society. Just because we have the internet doesn't mean we feel a sense of community anywhere."
    },
    {
      title: 'Why should I sign up for another social app?',
      description:
        "It's up to you, no one is forcing you to sign up, just thought there was an idea worth exploring, not many people get to see an idea being born, let's try to work on it together."
    },
    {
      title: 'Can I send you some feedback?',
      description: 'Reach out to me on Twitter (@itsrishabh).'
    }
  ]

  const HR = () => <hr className="border-t border-4 block w-6 block px-center mx-auto my-12" />

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
        image={
          site.image && site.image.asset && site.image.asset._id
            ? imageUrlFor(buildImageObj(site.image))
            : false
        }
      />
      <Container className="text-left md:text-center">
        {/* Home */}
        <div className="inline-block w-full py-24 md:py-48">
          <div className="inline-block w-full max-w-3xl">
            <h1 className="text-2xl lg:text-5xl font-semibold mb-6">Let's empower each other</h1>
            <h2 className="text-sm lg:text-xl text-gray-600">
              A space to explore ideas of empowerment and ways to connect with each other.
            </h2>
            <Parallax className="inline-block w-full max-w-xl" y={[-10, 20]}>
              <img className="inline-block w-full" src="/img/app-1-gradient.png" />
            </Parallax>
          </div>
        </div>
        {/* How */}
        <Parallax className="inline-block w-full mb-12" y={[-60, 20]}>
          <div className="inline-block w-full max-w-3xl">
            <h3 className="text-xl lg:text-3xl font-semibold mb-6">Community is important</h3>
            <p className="text-sm lg:text-baseline text-gray-600 mb-8">
              Finding ways of connecting each other especially in difficult times should be
              something we can all get behind. Perhaps we should think about "investing" in each
              other versus trying to nickle and dime one another.
            </p>
            <div className="inline-block w-full max-w-xl">
              <img className="inline-block w-full" src="/img/gradient.svg" />
            </div>
          </div>
        </Parallax>
        {/* How explained */}
        <Parallax className="inline-block w-full max-w-3xl">
          <HR />
          <h4 className="text-xl lg:text-3xl font-semibold mb-6">So how does this work...</h4>
          <div className="inline-block w-full max-w-md text-left">
            {how.map((object, index) => (
              <div
                className={`inline-block w-full py-4 ${
                  index !== how.length - 1 ? 'border-solid border-b-2 border-gray-900' : ''
                }`}
                key={`how-${index}`}
              >
                <strong className="inline-block w-full text-md font-semibold text-orange-400">
                  {object.title}
                </strong>
                <p className="inline-block w-full text-sm text-gray-600">{object.description}</p>
              </div>
            ))}
          </div>
        </Parallax>
        {/* FAQ */}
        <Parallax className="inline-block w-full max-w-3xl">
          <HR />
          <h5 className="text-xl lg:text-3xl font-semibold mb-6">FAQs</h5>
          <div className="inline-block w-full max-w-md text-left">
            {faq.map((object, index) => (
              <div
                className={`inline-block w-full py-4 ${
                  index !== faq.length - 1 ? 'border-solid border-b-2 border-gray-900' : ''
                }`}
                key={`how-${index}`}
              >
                <strong className="inline-block w-full text-md font-semibold text-gray-300">
                  {object.title}
                </strong>
                <p className="inline-block w-full text-sm text-gray-600">{object.description}</p>
              </div>
            ))}
          </div>
        </Parallax>
        {/* Reach out */}
        <Parallax className="inline-block w-full mb-12" y={[-20, 20]}>
          <HR />
          <h6 className="text-sm lg:text-lg font-semibold mb-6 text-teal-300">
            Got feedback? Wanna bounce ideas? DM me on Twitter.
          </h6>
          <a
            className="text-sm lg:text-baseline text-gray-600 mb-8 underline link"
            href="https://twitter.com/itsrishabh"
            target="_blank"
            rel="noopener noreferre"
          >
            Follow/message @itsrishabh
          </a>
        </Parallax>
        {/* {projectNodes && (
          <ProjectPreviewGrid
            title="Latest projects"
            nodes={projectNodes}
            browseMoreHref="/projects/"
          />
        )}
        {postNodes && (
          <BlogPostPreviewGrid
            title="Latest blog posts"
            nodes={postNodes}
            browseMoreHref="/blog/"
          />
        )} */}
      </Container>
    </Layout>
  )
}

export default IndexPage
