import { Box, Flex } from '@chakra-ui/react';

import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <Box
      width={{ sm: '100%', lg: '75%' }}
      sx={{ mx: 'auto', height: '100%', py: 4 }}
      pos='relative'
    >
      <Flex
        minHeight='100%'
        direction='column'
        justifyContent={'center'}
        sx={{ px: 4 }}
      >
        <Outlet />
      </Flex>
    </Box>
  );
};
