import React from "react";

import PackagesProviders from "config/PackagesProviders";

import Router from "./router/Router";

import { root } from "config/ReactConstants";

root.render(
    <React.StrictMode>
        <PackagesProviders>
            <Router />
        </PackagesProviders>
    </React.StrictMode>
);