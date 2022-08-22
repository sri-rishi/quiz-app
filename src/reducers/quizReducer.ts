import { QuizAction, QuizState } from "../types/quizReducer.types";
import { shuffleArray } from '../utils';

const initialState: QuizState = {
    categoryNo: "",
    questions: [], 
    questionBackImage: "",
}

const dataReducer = (state = initialState, action: QuizAction): QuizState => {
    switch(action.type) {
        case "Books": 
            return {
                ...state, 
                categoryNo: "10",
                questionBackImage: "https://images2.alphacoders.com/261/thumb-1920-26102.jpg"
            };
        
        case "Sports": 
            return {
                ...state, 
                categoryNo: "21",
                questionBackImage: "https://images5.alphacoders.com/109/1093585.jpg"
            };

        case "Films":
            return {
                ...state,
                categoryNo: "11",
                questionBackImage: "https://wallpaper.dog/large/20493433.jpg"
            };

        case "Mythology":
            return {
                ...state,
                categoryNo: "20",
                questionBackImage: "https://images.hdqwalls.com/wallpapers/immortals-fenyx-rising-myths-of-the-eastern-realm-2o.jpg"
            };

        case "Animals": 
            return {
                ...state,
                categoryNo: "27",
                questionBackImage: "https://cdn.wallpapersafari.com/6/7/aHftYq.jpg"
            }

        case "Comics":
            return {
                ...state,
                categoryNo: "29",
                questionBackImage: "https://wallpaperaccess.com/full/832477.jpg"
            }

        case "Set_Data":
            return {
                ...state,
                questions: action.payload.map(ques => ({
                    ...ques,
                    options: shuffleArray([...ques.incorrect_answers, ques.correct_answer])
                }))
            }
            
        case "Select_Values":
            return {
                ...state,
                questions: state.questions.map(ques => 
                    state.questions.indexOf(ques) === action.payload.currIndex
                    ?
                    {
                        ...ques,
                        selectedValue: action.payload.selectedValue,
                    }
                    : 
                    {
                        ...ques
                    }
                )
            }

        
    }
}


export {dataReducer, initialState};