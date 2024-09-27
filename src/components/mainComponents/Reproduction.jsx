import React from "react";
import Franch from "./Countries/Franch";



const Reproduction = () => {
    return(
        <div className="Reproduction_app">
            <div className="Reproduction_wrapp">
                <h2 className="Reproduction_title">Репродукции</h2>
                <div className="Reproduction_lables">
                    <label className="Reproduction_lable" id="Reproduction_lable1">
                        <input type="radio" name="Reproduction" id="Reproduction_1" className="Reproduction_radio" />
                        <span className="Reproduction_span">Франция</span>
                    </label>
                    <label className="Reproduction_lable" id="Reproduction_lable2">
                        <input type="radio" name="Reproduction" id="Reproduction_2" className="Reproduction_radio" />
                        <span className="Reproduction_span">Германия</span>
                    </label>
                    <label className="Reproduction_lable" id="Reproduction_lable2">
                        <input type="radio" name="Reproduction" id="Reproduction_3" className="Reproduction_radio" />
                        <span className="Reproduction_span">Англия</span>
                    </label>
                </div>
            </div>
            <div className="country">
                <Franch/>
            </div>
        </div>
    )
}

export default Reproduction;