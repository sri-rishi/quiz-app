import { DataAction, DataState} from "./dataReducer.types";

export type Question = {
    question: string,
    correct_answer: string,
    incorrect_answers: Array<string>,
}

type Dispatch = React.Dispatch<DataAction>;

export interface DataInterface {
    state: DataState, 
    dispatch: Dispatch,
    questions: Question[], 
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
}

