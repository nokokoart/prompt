import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  text: {
    fontFamily: 'monospace',
    color: '#fff',
  },
});

export const formErrorTheme = defineStyleConfig({ baseStyle });
