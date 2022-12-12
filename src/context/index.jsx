import React from "react";
import PropertiesProvider from "./properties"


const RootContext = ({children})=>{
    return (
        <React.Fragment>
            <PropertiesProvider>{children}</PropertiesProvider>
        </React.Fragment>
    )
}

export default RootContext;