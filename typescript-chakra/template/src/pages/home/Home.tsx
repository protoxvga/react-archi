import style from "./style/home.module.css";

import logo from "assets/logo.svg";

import { Heading, Text } from '@chakra-ui/react'

const HomePage = () => {
    return(
        <div className={style.container}>
            <img
                src={logo}
                alt={"react-logo"}
                className={style.logo}
            />
            <Heading>Welcome to react-archi</Heading>
            <Text fontSize='4xl'>A Typescript + ChakraUI template</Text>
            <a
                href="https://github.com/protoxvga/react-clean-architecture"
                target="_blank"
                rel="noreferrer"
                className={style.link}
            >
                Documentation
            </a>
        </div>
    );
}

export default HomePage;