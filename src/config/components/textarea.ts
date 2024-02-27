import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  fontFamily: 'Roboto',
  borderRadius: 0,
});

const variantFilledStyle = defineStyle({
  background: '#FEFF02',
  color: '#ff2e95',
  fontWeight: 700,
  textTransform: 'uppercase',
  _placeholder: {
    color: '#ff2e95',
  },
  _hover: {
    background: '#FEFF02',
  },
  _focusVisible: {
    background: '#FEFF02',
  },
});

const variants = {
  filled: variantFilledStyle,
};

export const textareaTheme = defineStyleConfig({ baseStyle, variants });
