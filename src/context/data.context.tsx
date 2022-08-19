import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

type Question = {
    question: string,
    correct_answer: string,
    incorrect_answers: Array<string>,
}

interface DataInterface {
    questions: Question[], 
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

const initialState = {
    questions: [
        {
            question: "Who is President of india",
            correct_answer: "Droupadi Murmu",
            incorrect_answers: [
                "Ram Nath Kovind",
                "Pranab Mukherjee",
                "Pratibha Patil"
            ]
        }
    ],
    index: 0,
    setIndex: () => 0
}

const DataContext = createContext<DataInterface>(initialState);

const DataProvider = ({children}:{children: React.ReactNode}) => {
    const [questions, setQuestions] = useState<Question[] | []>([]);
    const [index, setIndex] = useState(0) 

    useEffect(() => {
        (async ()=> {
            try {
                const response = await axios.get("https://opentdb.com/api.php?amount=5&category=10&type=multiple");
                console.log(response);
                setQuestions(response.data.results);
            }catch (error) {
                console.log(error)
            }
        })()
    }, [])

    console.log(questions)
    return (
        <DataContext.Provider value={{questions, index, setIndex}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export {useData, DataProvider};