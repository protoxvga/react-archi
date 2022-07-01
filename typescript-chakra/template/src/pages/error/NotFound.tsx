import { Heading } from '@chakra-ui/react'

import error from "assets/error.svg"

import style from "./style/notfound.module.css";

const NotFound = () => {
    return (
        <div className={style.container}>
            <img
                src={error}
                alt={"error-logo"}
                className={style.logo}
            />
            <Heading className={style.title}>404 - Page not found</Heading>
        </div>
    );
}

export default NotFound;