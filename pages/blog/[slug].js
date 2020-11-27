import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
const glob = require('glob')
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/core'

export default function BlogTemplate({ frontmatter, markdownBody, siteTitle }) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  /*
   ** Odd fix to get build to run
   ** It seems like on first go the props
   ** are undefined — could be a Next bug?
   */

  if (!frontmatter) return <></>

  return (
    <Box as="article" className="blog">
      <Box
        display={['block', null, 'flex']}
        flexDirection={[null, null, 'column']}
        as="figure"
        minH={['2xl', null, 'xl']}
        height={['5xl', null, '75vh', '70vh']}
        width="full"
        m={0}
        overflow="hidden"
        className="blog__hero"
      >
        <Image
          mb="0"
          minH="full"
          minW="full"
          objectFit="cover"
          objectPosition="center"
          src={frontmatter.hero_image}
          alt={`blog_hero_${frontmatter.title}`}
        />
      </Box>
      <Box
        px={[5, null, null, 12]}
        py={[6, null, 8]}
        mx="auto"
        textAlign={[null, null, 'center']}
        className="blog__info"
      >
        <Heading
          as="h1"
          mb={3}
          mx={[null, null, 'auto']}
          maxW={[null, null, 'lg']}
        >
          {frontmatter.title}
        </Heading>
        <Heading as="h3" mb={0}>
          {reformatDate(frontmatter.date)}
        </Heading>
      </Box>
      <Flex
        w={['full', null, '3xl']}
        px={[5, null, 8]}
        flexDirection="column"
        justifyContent="center"
        className="blog__body"
      >
        <ReactMarkdown source={markdownBody} />
      </Flex>
      <Flex
        as="h2"
        w="full"
        maxW="3xl"
        justifyContent="space-between"
        alignItems="center"
        px={[5]}
        py={[6]}
        p={[null, null, 9, 8]}
        mb={0}
        mx="auto"
        className="blog__footer"
      >
        Written By: {frontmatter.author}
      </Flex>
    </Box>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../posts/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync('posts/**/*.md')

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = blogSlugs.map(slug => `/blog/${slug}`)
  return {
    paths,
    fallback: false,
  }
}
