import { DataAction, DataState} from "./dataReducer.types";

type Dispatch = React.Dispatch<DataAction>;

export interface DataInterface {
    state: DataState, 
    dispatch: Dispatch,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
}

