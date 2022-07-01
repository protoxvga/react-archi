import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'

interface Props {
    children: JSX.Element | JSX.Element[];
}

const PackagesProviders: React.FC<Props> = ({children}) => {
    return (
        <BrowserRouter>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default PackagesProviders;