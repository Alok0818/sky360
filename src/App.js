import React from 'react';
import {
  ChakraProvider,
  // Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from "./Components/Navbar/Navbar";
import HomepageVideo from "./Components/Homepage/HomapageVideo"
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import { AspectRatio } from '@chakra-ui/react'
// import Video from './Components/Video/Video';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      {/* <Video/> */}
      {/* <HomepageVideo/> */}
      
<AspectRatio border='5px' borderColor='gray.200' margin={'auto'} maxW='100%' ratio={2}>
<iframe
  title='naruto'
  src='https://www.youtube.com/embed/QhBnZ6NPOY0'
  allowFullScreen
/>
</AspectRatio>
      <Homepage/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
