import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    fontFamily: 'Roboto',
    borderRadius: 0,
  },
});

const variantFilledStyle = definePartsStyle({
  field: {
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
    _options: {
      fontFamily: 'Roboto',
    },
  },
  icon: {
    color: '#feff02',
  },
});

const variants = {
  filled: variantFilledStyle,
};

export const selectTheme = defineMultiStyleConfig({ baseStyle, variants });
