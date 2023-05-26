import React from 'react'

const BlogDetail: React.FC<{ params: {slug : string} }> = ({ params}) => {
  return (
    <div>{params.slug}</div>
  )
}

export default BlogDetail;