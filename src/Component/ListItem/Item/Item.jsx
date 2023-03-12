import React, { useCallback, useState } from "react";
import useCallApi from "../../../Hook/useCallApi";
import "./Item.scss";
function Item(props) {
    const { number, src, types, name, hp, attack, defence } = props;

    return (
        <div className="item">
            <p className="item-key">{number}</p>
            <div className="container-img">
                <img src={src} alt="" className="img-poke" />
            </div>
            <div className="group-prop">
                {types?.map((item, index) => (
                    <p className="prop-item" key={index}>
                        {item?.type?.name}
                    </p>
                ))}
            </div>
            <div className="container-info">
                <h4 className="name-poke">{name}</h4>
                <p className="hp-poke"> HP : {hp}</p>
                <p className="attack-poke">Attack : {attack}</p>
                <p className="defence-poke">Defence : {defence}</p>
            </div>
        </div>
    );
}

export default Item;
