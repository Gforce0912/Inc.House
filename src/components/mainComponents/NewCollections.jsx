import React from "react";
import Button from "../Button";
import NewCollBack from "../../assets/png/pic_background.png"
export default function NewCollections (){
    return (
        <>
       <div className="NewCollection_app">
        <img src={NewCollBack} alt="" />
        <div className="NewCollection_wrapp">
            <div className="NewColl_head">
                <div className="NewColl_Logo">
                    <svg width="80" height="79" viewBox="0 0 80 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.6407 21.9227L58.5227 11.1781L53.685 26.4498L52.9462 28.782L55.3599 28.3827L71.1646 25.7676L58.8384 35.9995L56.956 37.5621L59.2023 38.531L73.9119 44.8758L58.0107 46.8194L55.5823 47.1162L56.9482 49.1458L65.8925 62.436L51.4647 55.4741L49.2614 54.4109L49.3132 56.8568L49.6523 72.8729L41.2788 59.2159L40 57.1303L38.7212 59.2159L30.3477 72.8729L30.6868 56.8568L30.7386 54.4109L28.5353 55.4741L14.1075 62.436L23.0518 49.1458L24.4177 47.1162L21.9893 46.8194L6.08807 44.8758L20.7977 38.531L23.044 37.5621L21.1616 35.9995L8.83541 25.7676L24.6401 28.3827L27.0538 28.782L26.315 26.4498L21.4773 11.1781L33.3593 21.9227L35.1738 23.5636L35.8132 21.2022L40 5.73935L44.1868 21.2022L44.8262 23.5636L46.6407 21.9227Z" stroke="#EEDB6D" stroke-width="3"/>
                    </svg>
                </div>
                <div className="NewColl_Title">
                    <h2>
                    Новая коллекция<br/>
                    французских авторов
                    </h2>
                </div>
            </div>
            <div className="NewColl_content">
                <p className="NewColl_p1">
                Сложно сказать, почему акционеры крупнейших компаний<br/>
                призывают нас к новым свершениям, которые, в свою очередь,<br/> 
                должны быть заблокированы в рамках своих собственных<br/> 
                рациональных ограничений. 
                </p>
                <p className="NewColl_p2">
                Принимая во внимание показатели успешности, граница<br/> 
                обучения кадров предопределяет высокую востребованность<br/>
                направлений прогрессивного развития.
                </p>
                <Button
                 btnClass="PropductBtn NewCollection_btn"
                 btnId="PropductId NewCollection_id"
                 btnContent="Ознакомиться"
                />
            </div>
        </div>
       </div>

        </>
    )

}