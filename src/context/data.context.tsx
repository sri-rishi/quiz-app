import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { DataInterface} from "../types/dataContext.types";
import { dataReducer , initialState} from "../reducers/dataReducer";

const DataContext = createContext<DataInterface>({} as DataInterface);

const DataProvider = ({children}:{children: React.ReactNode}) => {
    const [index, setIndex] = useState(0);
    
    const [state, dispatch] = useReducer(dataReducer, initialState);
    const url = `https://opentdb.com/api.php?amount=5&category=${state.categoryNo}&type=multiple`

    useEffect(() => {
        (async ()=> {
            try {
                const response = await axios.get(url);
                console.log(response);
                dispatch({type: "Set_Data", payload: response.data.results})
            }catch (error) {
                console.log(error)
            }
        })()
    }, [state.categoryNo])

    return (
        <DataContext.Provider  
            value={{
                index, 
                setIndex,
                state,
                dispatch
            }}
        >
            {children}
        </DataContext.Provider>
    )
}


const useData = () => useContext(DataContext);

export {useData, DataProvider};