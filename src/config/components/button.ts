import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  fontFamily: 'Kanit',
  textTransform: 'uppercase',
});

export const buttonTheme = defineStyleConfig({ baseStyle });
