import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { DataInterface} from "../types/quizContext.types";
import { dataReducer , initialState} from "../reducers/quizReducer";

const DataContext = createContext<DataInterface>({} as DataInterface);

const DataProvider = ({children}:{children: React.ReactNode}) => {
    const [index, setIndex] = useState(0);
    const [state, dispatch] = useReducer(dataReducer, initialState);
    const url = `https://opentdb.com/api.php?amount=5&category=${state.categoryNo}&type=multiple`

    useEffect(() => {
        (async ()=> {
            try {
                const response = await axios.get(url);
                dispatch({type: "Set_Data", payload: response.data.results})
            }catch (error) {
                console.error(error);
            }
        })()
    }, [state.categoryNo]);

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
    );
};

const useQuiz = () => useContext(DataContext);

export {useQuiz, DataProvider};