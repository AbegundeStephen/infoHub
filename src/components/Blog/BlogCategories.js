import React from 'react'
import { slug } from 'github-slugger'
import BlogCategory from './BlogCategory'

const BlogCategories = ({categories, currentSlug}) => {
  return (
    <div className='px-0 md:px-10 sxl:px-20 mt-10 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10 border-t-2 text-dark dark:text-light border-b-2 '>
      {categories.map((cat) => (
        <BlogCategory
        key={cat}
        Link={`/categories/${cat}`}
        name={cat}
        active={currentSlug === slug(cat)}/>
      ))}
    </div>
  )
}

export default BlogCategories