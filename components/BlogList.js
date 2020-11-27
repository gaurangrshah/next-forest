import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Box, Image } from '@chakra-ui/core'

const BlogList = ({ allBlogs }) => {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd()
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  return (
    <>
      <ul className="list">
        {allBlogs.length > 1 &&
          allBlogs.map(post => (
            <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
              <a>
                <li>
                  <Box
                    className="hero_image"
                    w="full"
                    h="33vh"
                    overflow="hidden"
                    bg="#000"
                  >
                    <Image
                      objectFit="cover"
                      objectPosition="50% 50%"
                      opacity="1"
                      transition="opacity 0.3s ease"
                      minHeight="100%"
                      minWidth={[null, null, '100%']}
                      height={[null, null, '100%']}
                      width={[null, null, 'auto']}
                      min-height={[null, null, 0]}
                      src={post.frontmatter.hero_image}
                      alt={post.frontmatter.hero_image}
                    />
                  </Box>
                  <div className="blog__info">
                    <h2>{post.frontmatter.title}</h2>
                    <h3> {reformatDate(post.frontmatter.date)}</h3>
                    <Box
                      as={ReactMarkdown}
                      source={truncateSummary(post.markdownBody)}
                    />
                  </div>
                </li>
              </a>
            </Link>
          ))}
      </ul>
    </>
  )
}

export default BlogList
