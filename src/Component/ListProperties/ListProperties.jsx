import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";
import "./ListProperties.scss";
import useCallApi from "../../Hook/useCallApi";
import { inputContext } from "../Main";
ListProperties.propTypes = {};

function ListProperties(props) {
    const { typesSelected, setTypesSelected } = useContext(inputContext);
    const listProp = useCallApi("https://pokeapi.co/api/v2/type/");
    const handleSelectType = useCallback(
        (name) => {
            setTypesSelected((typesSelected) => {
                const arrClone = [...typesSelected];
                const index = arrClone.indexOf(name);
                if (index !== -1) {
                    arrClone.splice(index, 1);
                } else {
                    arrClone.push(name);
                }
                return arrClone;
            });
        },
        [setTypesSelected]
    );
    return (
        <div className="list-properties">
            {listProp?.data?.results?.map((item) => {
                return (
                    <button
                        onClick={() => handleSelectType(item?.name)}
                        key={item?.url}
                        className={`button ${
                            typesSelected.includes(item?.name) && "active"
                        }`}
                    >
                        {item?.name}
                    </button>
                );
            })}
        </div>
    );
}

export default ListProperties;
