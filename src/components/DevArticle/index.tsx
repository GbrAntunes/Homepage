import React from 'react'

import { ArticleBox, Title, Author } from './styles'

interface DevArticleProps {
  title: string
  author: string
}

const DevArticle: React.FC<DevArticleProps> = ({ title, author }) => {
  return (
    <ArticleBox>
      <Title>{title}</Title>
      <Author>by {author}</Author>
    </ArticleBox>
  )
}

export default DevArticle