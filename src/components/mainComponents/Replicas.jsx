import React from "react";
import ReplicasBack from "../../assets/png/Replicas-back.png";
import Button from "../Button";


export const Replicas = () => {
    return(
        <div className="Replicas_wrapp">
            <div className="Replicas_back">
                <img src={ReplicasBack} alt="" />
            </div>
            <div className="Replicas_content">
                <h1 className="Replicas_title">
                    Реплики картин<br/> 
                    от <span>Ink. House</span>
                </h1>
                <p className="Replicas_paragraph">
                    Высокое качество отрисовки на плотной бумаге или льняном<br/>
                    холсте. Редкие произведения, доступные цены.
                </p>
                <Button 
                 btnClass="PropductBtn Replicas_btn"
                 btnId="PropductId Replicas_btn"
                 btnContent="Продукция"
                />
            </div>
        </div>
    )
}