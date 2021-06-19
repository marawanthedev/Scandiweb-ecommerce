import { loadCategory } from "../../Graphql/Queries"
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

export const getCategoryProducts = (category) => {

    return (dispatch) => {
        dispatch(categoriesLoaded())
    }


}
export const categoriesLoaded = () =>
    ({
        type: "load",
        payload: null

    })