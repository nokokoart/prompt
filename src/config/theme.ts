import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { buttonTheme } from './components/button';
import { formErrorTheme } from './components/formError';
import { inputTheme } from './components/input';
import { selectTheme } from './components/select';
import { textareaTheme } from './components/textarea';

const config: ThemeConfig = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        fontFamily: 'Roboto',
        backgroundColor: '#ff2e95',
        height: '100%',
      },
    },
  },
  fonts: {
    body: `'Akira Expanded', sans-serif`,
    heading: `'Akira Expanded', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 700,
      },
      sizes: {
        xl: {
          lineHeight: '1em',
        },
      },
    },
    Input: inputTheme,
    Select: selectTheme,
    Textarea: textareaTheme,
    Button: buttonTheme,
    FormError: formErrorTheme,
  },
});

export const theme = extendTheme(config);
