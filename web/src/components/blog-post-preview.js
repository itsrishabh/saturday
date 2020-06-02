import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

function BlogPostPreview(props) {
  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <div>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3>{props.title}</h3>
      {props._rawExcerpt && (
        <div>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  )
}

export default BlogPostPreview
