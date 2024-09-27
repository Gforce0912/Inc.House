import React from "react";
import Button from '../Button'
export function ReproductionCards (props) {
    

    return(
        <div className="ReproductionCards_wrapp">
            <div className="ReproductionCards_content">
                <img src={props.ReproductionImg} alt=""  className={props.ReproductionCardsClassImg}/>
                <h4 className={props.ReproductionAuthorClass}>{props.author}</h4>
                <h2 className={props.ReproductionCardNameClass}>{props.cardName}</h2>
                <p className={props.ReproductionMaterialClass}>{props.material}</p>
                <p className={props.ReproductionPriceClass}>{props.price}</p>
                <Button 
                 btnClass="PropductBtn Reproduction_btn"
                 btnId="PropductId Reproduction_btn"
                 btnContent="В корзину"
                />
            </div>
        </div>
    )
}