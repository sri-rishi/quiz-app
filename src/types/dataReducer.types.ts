export type Question = {
    question: string,
    selectedValue: string,
    correct_answer: string,
    incorrect_answers: Array<string>,
}

export type DataState = {
    categoryNo: string,
    questions: Question[]
}


export type DataAction = 
    {
        type: "Set_Data",
        payload: Question[]       
    }
    |
    {
        type: "Books"
    }
    |
    {
        type: "Sports"
    }
    |
    {
        type: "Films"
    }
    |
    {
        type: "Mythology"
    }
    |
    {
        type: "Animals"
    }
    |
    {
        type: "Comics"
    }