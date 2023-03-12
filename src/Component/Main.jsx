import React, { createContext, useState, useEffect } from "react";
import ListItems from "./ListItem/ListItems";
import ListProperties from "./ListProperties/ListProperties";
import "./Main.scss";
import Search from "./Search/Search";
import useCallApi from "../Hook/useCallApi";
import { render } from "@testing-library/react";
export const inputContext = createContext();
Main.propTypes = {};

function Main(props) {
    const [input, setInput] = useState("");
    const [typesSelected, setTypesSelected] = useState([]);
    const [newPage, setNewPage] = useState("");
    const listItems = useCallApi(
        newPage !== "" ? newPage : "https://pokeapi.co/api/v2/pokemon/"
    );
    console.log(listItems);
    const arrUrl = [];
    listItems?.data?.results?.map((item) => arrUrl.push(item?.url));
    const urlNextPage = listItems?.data?.next;
    const urlPrevPage = listItems?.data?.previous;

    // ! Arr of Item Types
    return (
        <inputContext.Provider
            value={{
                input,
                setInput,
                typesSelected,
                setTypesSelected,
                newPage,
                setNewPage,
            }}
        >
            <div className="container">
                <img
                    src="https://fontmeme.com/permalink/211122/1a54d4d9a724da8b765b2299e0643073.png"
                    alt=""
                    className="img-header"
                />
                <Search></Search>
                <ListProperties></ListProperties>
                <ListItems
                    prevPage={urlPrevPage || ""}
                    nextPage={urlNextPage || ""}
                    listItem={listItems}
                    valueInput={input}
                    typesSelected={typesSelected}
                    arrUrl={arrUrl}
                ></ListItems>
            </div>
        </inputContext.Provider>
    );
}

export default Main;
