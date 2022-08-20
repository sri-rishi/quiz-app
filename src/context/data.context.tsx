import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { DataInterface , Question} from "../types/dataContext.types";
import { dataReducer , initialState} from "../reducers/dataReducer";


const DataContext = createContext<DataInterface>({} as DataInterface);

const DataProvider = ({children}:{children: React.ReactNode}) => {
    const [questions, setQuestions] = useState<Question[] | []>([]);
    const [index, setIndex] = useState(0);


    const [state, dispatch] = useReducer(dataReducer, initialState);

    useEffect(() => {
        (async ()=> {
            try {
                const response = await axios.get(`https://opentdb.com/api.php?amount=5&category=${state.categoryNo}&type=multiple`);
                console.log(response);
                setQuestions(response.data.results);
            }catch (error) {
                console.log(error)
            }
        })()
    }, [state.categoryNo])

    console.log(questions)
    return (
        <DataContext.Provider  
            value={{
                questions, 
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