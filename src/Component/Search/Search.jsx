import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./Search.scss";
import { inputContext } from "../Main";

function Search(props) {
    const { input, setInput } = useContext(inputContext);
    const handleChangeInput = (e) => {
        setInput(e.target.value);
    };
    return (
        <div>
            <input
                onChange={handleChangeInput}
                className="input"
                type="text"
                placeholder="Search For A Pokemon..."
            />
        </div>
    );
}

export default Search;
