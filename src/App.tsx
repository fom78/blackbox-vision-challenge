import React from 'react';
import logo from './assets/logo.png'
import { Box, Center, Image } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      {/* <img src={logo} alt="logo!!!" /> */}
      <Center>
        <Box boxSize='xl'>
          <Image src={logo} alt='logo' />
        </Box>
      </Center>
    </div>
  );
}

export default App;
