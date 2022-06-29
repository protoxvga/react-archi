import { Routes, Route } from "react-router-dom";

import HomePage from "pages/home";
import NotFound from "pages/error"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;