import { DefaultSeo } from 'next-seo'
import { Box, Flex } from '@chakra-ui/core'
import useColor from '../hooks/use-color'
import { ModeToggle } from '../components'
import { Header } from '../components/header'
import AuthButton from '../../components/auth/auth-buttons'
import CustomLink from '../../components/custom-link'
import { NavProvider } from '../contexts/nav-context'
import { useToastState } from '../contexts/toast-context'

// pages will be added to navContext
const PAGES = ['home', 'about', 'services', 'contact']

function DefaultLayout({ title, SEO, config, children }) {
  const { color } = useColor()
  const { msg, toast } = useToastState()

  React.useEffect(() => {
    if (!msg) return
    toast(msg)
  }, [msg])

  return (
    <>
      <DefaultSeo {...SEO} />
      <ModeToggle />
      <Flex className="wrapper" layerStyle="wrapper">
        <NavProvider>
          <Header
            title="Proto UI"
            pages={PAGES}
            controls={[AuthButton, CustomLink]}
            headerShow={config?.headerShow}
          />
        </NavProvider>
        <Box as="section" layerStyle="main" py={24}>
          {children}
        </Box>
        <Flex
          as="footer"
          bg={color('bg')}
          layerStyle="footer"
          display={config?.footerShow ? 'flex' : 'none'}
        >
          footer
        </Flex>
      </Flex>
    </>
  )
}

export default DefaultLayout
