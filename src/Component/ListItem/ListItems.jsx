import React, { useEffect, useContext, useMemo, useState } from "react";
import Item from "./Item/Item";
import "./ListItems.scss";
import { inputContext } from "../Main";
function ListItems(props) {
    const { prevPage, nextPage, valueInput, typesSelected, arrUrl } = props;
    const { newPage, setNewPage } = useContext(inputContext);
    const [pokemonData, setPokemonData] = useState([]);
    // ! Call Data Item
    const fetchPokemonData = async () => {
        const responses = await Promise.all(arrUrl.map((url) => fetch(url)));
        const data = await Promise.all(
            responses.map((response) => response.json())
        );
        setPokemonData(data);
    };
    useEffect(() => {
        fetchPokemonData();
    }, [pokemonData]);
    //! Filter Input Items
    const items = useMemo(() => {
        return pokemonData?.filter((item) => {
            return item?.forms?.[0]?.name.includes(valueInput);
        });
    }, [pokemonData, valueInput]);
    // ! filter types
    let result = pokemonData.filter((item) => {
        return item.types.some((type) =>
            typesSelected.includes(type.type.name)
        );
    });

    const handleRenderData = () => {
        if (typesSelected.length > 0) {
            return result;
        } else if (valueInput !== "") {
            return items;
        }
        return pokemonData;
    };
    const handlePrevPage = () => {
        setNewPage(prevPage);
    };
    const handleNextPage = () => {
        setNewPage(nextPage);
    };
    return (
        <>
            <div className="list-item">
                {handleRenderData().map((item, index) => {
                    return (
                        <Item
                            number={item?.id}
                            key={item.id}
                            name={item?.forms?.[0]?.name}
                            src={
                                item?.sprites?.other?.dream_world?.front_default
                            }
                            types={item?.types}
                            hp={item?.stats?.[0]?.base_stat}
                            attack={item?.stats?.[1]?.base_stat}
                            defence={item?.stats?.[2]?.base_stat}
                        />
                    );
                })}
            </div>
            <div className="group-button">
                {prevPage === "" ? (
                    ""
                ) : (
                    <button className="prev" onClick={handlePrevPage}>
                        Prev
                    </button>
                )}
                <button className="next" onClick={handleNextPage}>
                    Next
                </button>
            </div>
        </>
    );
}

export default ListItems;
