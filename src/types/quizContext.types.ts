import { QuizAction, QuizState} from "./quizReducer.types";

type Dispatch = React.Dispatch<QuizAction>;

export interface DataInterface {
    state: QuizState, 
    dispatch: Dispatch,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
}

