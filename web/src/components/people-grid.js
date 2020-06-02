import React from 'react'
import BlockText from './block-text'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

function ProfileCard({ image, name, _rawBio }) {
  return (
    <div>
      <div>
        {image && image.asset && (
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(600)
              .height(600)
              .fit('crop')
              .url()}
          />
        )}
      </div>
      <h2>{name}</h2>
      {_rawBio && (
        <div>
          <BlockText blocks={_rawBio} />
        </div>
      )}
    </div>
  )
}

function PeopleGrid({ items, title }) {
  return (
    <div>
      {<h2>{title}</h2>}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <ProfileCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PeopleGrid
