import { Flex, Text} from "@chakra-ui/react";
import { FaCartArrowDown } from "react-icons/fa6";

const CartWidget = () => {
    return (
        <Flex alignItems={"center"} height={"100%"} justifyContent={"space-between"} width={"40px"}>
            <FaCartArrowDown size={25} color="#FF00FF"/>
            <img src="" alt="" />
            <Text fontFamily={"1.5rem"}>
                1
            </Text>
        </Flex>
    );
};

export default CartWidget;