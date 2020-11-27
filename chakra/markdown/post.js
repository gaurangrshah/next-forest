export const post = {
  '.blog__info': {
    minW: [null, null, '70%'],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    p: [null, null, null, 12],
    px: 5,
    py: 6,
    mb: 0,
    transform: 'translateX(0px)',
    transition: 'transform 0.3s ease-in',
    borderBottom: ' 1px solid #ebebeb',
    borderColor: 'blue.400',
    li: {
      opacity: 'inherit',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: ['38vh', '250px'],
      height: [null, '33.333vh'],
      mb: 0,
    },
    'h2, h3, p': {
      color: 'red.500',
      transform: 'translateX(0px)',
      transition: 'transform 0.5s ease-out',
    },
    h2: {
      mb: 2,
    },
    h3: {
      mb: [4, null, null, 12],
    },
    p: {
      maxWidth: 'lg',
    },
  },
}
