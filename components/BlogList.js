import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import {
  Box,
  Flex,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/core'
import { reformatDate, truncateSummary } from '../utils'

const transform = {
  transform: 'translateX(0px)',
  transition: 'transform 0.5s ease-out',
}

const BlogList = ({ allBlogs }) => {
  return (
    <>
      <UnorderedList styleType="none">
        {allBlogs.length > 1 &&
          allBlogs.map(post => (
            <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
              <a>
                <ListItem layerStyle="postLayer" {...transform}>
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
                  <Box color="green.300" px={6}>
                    <Heading as="h2" mb={2} lineHeight={1.25} {...transform}>
                      {post.frontmatter.title}
                    </Heading>
                    <Heading as="h3" mb={[8, null, null, 12]} {...transform}>
                      {reformatDate(post.frontmatter.date)}
                    </Heading>
                    <Text
                      maxW="lg"
                      lineHeight={1.65}
                      {...transform}
                      as={ReactMarkdown}
                      source={truncateSummary(post.markdownBody)}
                    />
                  </Box>
                </ListItem>
              </a>
            </Link>
          ))}
      </UnorderedList>
    </>
  )
}

export default BlogList
