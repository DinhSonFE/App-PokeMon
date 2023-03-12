import { useState, useEffect, useCallback } from "react";
import axios from "axios";
function useCallApi(url) {
    const [listItem, setListItem] = useState([]);
    const fetchApi = useCallback(async () => {
        try {
            const res = await axios.get(url);
            setListItem(res);
        } catch (error) {
            console.log(error);
        }
    }, [url]);
    useEffect(() => {
        fetchApi();
    }, [fetchApi]);
    return listItem;
}
export default useCallApi;
