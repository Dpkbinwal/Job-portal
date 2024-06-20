import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
import './news.css'

const News = () => {
  return (
    <div className="news-background">
      <SearchForm />
      <Stories />
      <Buttons />
    </div>
  )
}

export default News