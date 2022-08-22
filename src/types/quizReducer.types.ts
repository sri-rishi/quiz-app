export type Question = {
    question: string,
    options: Array<string>
    selectedValue: string,
    correct_answer: string,
    incorrect_answers: Array<string>,
}

export type QuizState = {
    categoryNo: string,
    questions: Question[], 
    questionBackImage: string
}


export type QuizAction = 
    {
        type: "Select_Values",
        payload: {
            selectedValues: string,
            currIndex: number
        }
    }
    |
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