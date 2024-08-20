import { ChakraProvider, Flex } from '@chakra-ui/react'
import Navbar from "./Components/Navbar";
import ItemListContainer from './Components/ItemListContainer';

function App() {
  
  return (
    <ChakraProvider>
      <Navbar />
     <Flex>
        <ItemListContainer greeting="Bienvenidos a Adict-Games"/>
     </Flex>
    </ChakraProvider>
  )
}

export default App;
