import React from 'react'

import { ArticleBox, Title, Author } from './styles'

interface DevArticleProps {
  title: string
  author: string
  url: string
}

const DevArticle: React.FC<DevArticleProps> = ({ title, author, url }) => {
  return (
    <ArticleBox>
      <a href={url}>
        <Title>{title}</Title>
      </a>
      <Author>by {author}</Author>
    </ArticleBox>
  )
}

export default DevArticle