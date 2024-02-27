import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  fontFamily: 'Akira Expanded',
  textTransform: 'uppercase',
});

export const buttonTheme = defineStyleConfig({ baseStyle });
