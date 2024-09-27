import React from "react";
import { Replicas } from "./mainComponents/Replicas";
import Reproduction from "./mainComponents/Reproduction";
import NewCollections from "./mainComponents/NewCollections";

const Main = () => {
    return(
        <div className="Main_wrapp">
            <div className="Main_content">
                <Replicas/>
                <Reproduction/>
                <NewCollections/>
            </div>
        </div>
    )
} 

export default Main;