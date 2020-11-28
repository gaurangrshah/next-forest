import { constants } from './constants'

export const footer = {
  w: constants.maxWidth,
  h: constants.barHeight,
  p: constants.minPadding,
  position: 'fixed',
  justify: 'space-between',
  bottom: '0px',
  my: 'auto',
}

footer.body = {
  w: constants.maxWidth,
  maxW: constants.bodyMax,
}
