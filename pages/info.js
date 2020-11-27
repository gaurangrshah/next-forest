import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { Box, Text } from '@chakra-ui/core'

export default function Info({ frontmatter, markdownBody, title }) {
  return (
    <Box
      as="section"
      maxW="4xl"
      p={[null, null, 8, 12]}
      px={[5, null]}
      py={[[5, null]]}
    >
      <Text as={ReactMarkdown} source={markdownBody} />
    </Box>
  )
}

export async function getStaticProps() {
  const content = await import(`../data/info.md`)
  const config = await import(`../data/config.json`)
  const data = matter(content.default)

  return {
    props: {
      title: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}
