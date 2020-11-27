import { useState } from 'react'
import Head from 'next/head'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import DefaultLayout from '../chakra/layouts/default'
import { useToastDispatch } from '../chakra/contexts/toast-context'

const Index = props => {
  const { setMsg, setError } = useToastDispatch()

  React.useEffect(() => {
    setError({
      title: 'Welcome.',
      description: 'This is a test and can be triggered from anywhere',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }, [])
  return (
    <>
      <Head>
        <title key="title">home</title>
        <link rel="icon" href="/favicon.ico/" />
      </Head>
      <section>
        <BlogList allBlogs={props.allBlogs} />
        <button
          class="snipcart-add-item"
          data-item-id="starry-night"
          data-item-price="79.99"
          data-item-url="/paintings/starry-night"
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          data-item-image="/assets/images/starry-night.jpg"
          data-item-name="The Starry Night"
        >
          Add to cart
        </button>
      </section>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`)
  //get posts & context from folder
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      allBlogs: posts,
      title: siteConfig.default.title,
      description: siteConfig.default.description,
    },
  }
}
