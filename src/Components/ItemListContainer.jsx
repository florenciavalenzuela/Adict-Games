import { Flex} from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {
  return (
    <Flex     
    
      width={"100vw"}
      height={"90vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}> 
      {greeting}
    </Flex>
  );
};
export default ItemListContainer;