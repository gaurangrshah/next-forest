import chakraTheme from '@chakra-ui/theme';
import foundations from './foundations';
import layerStyles from './structure/layer-styles';
import styles from './styles';

const theme = {
  ...chakraTheme,
  ...foundations,
  layerStyles,
  styles,
};

export default theme;
