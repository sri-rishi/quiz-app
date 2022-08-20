import { DataAction, DataState } from "../types/dataReducer.types"

const initialState: DataState = {
    categoryNo: ""
}

const dataReducer = (state = initialState, action: DataAction) => {
    switch(action.type) {
        case "Books": 
            return {
                ...state, 
                categoryNo: "10"
            };
        
        case "Sports": 
            return {
                ...state, 
                categoryNo: "21"
            };

        case "Films":
            return {
                ...state,
                categoryNo: "11"
            };

        case "Mythology":
            return {
                ...state,
                categoryNo: "20"
            };

        case "Animals": 
            return {
                ...state,
                categoryNo: "27"
            }

        case "Comics":
            return {
                ...state,
                categoryNo: "29"
            }
    }
}


export {dataReducer, initialState};