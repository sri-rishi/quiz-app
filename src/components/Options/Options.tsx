import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useLocation } from "react-router-dom";
import { useQuiz } from "../../context/quiz.context";
import { replaceHtmlSpecialChar } from "../../utils";

type OptionProps = {
    text: string,
    isRight: boolean,
    questionIndex: number
}

export const Options = ({text, isRight, questionIndex}: OptionProps) => {
    const location = useLocation();
    const {state,dispatch, index} = useQuiz();
    const resultPath = location.pathname === "/result";

    return (
        <FormControlLabel
            className={
                `option 
                ${
                    !resultPath &&
                    state.questions[questionIndex].selectedValue === text &&
                    "selectedValue"
                }
                ${
                    resultPath && 
                    isRight && 
                    "rightAns"
                } 
                ${
                    resultPath && 
                    state.questions[questionIndex].selectedValue === text && 
                    !isRight && 
                    "wrongAns"
                } `
            }
            value={replaceHtmlSpecialChar(text)} 
            label={replaceHtmlSpecialChar(text)} 
            onClick={() =>{ 
                dispatch({
                type: "Select_Values", 
                payload: {
                    selectedValue: text,
                    currIndex: index
                }
            });
        }}
            control={<Radio 
                    sx={{
                        "& .MuiSvgIcon-root": {
                            display: "none"
                        }
                    }}
                />
            } 
            sx={{
                "& .MuiTypography-root" : {
                    fontSize: "1.5rem",
                    fontFamily: "Comfortaa, cursive",
                },
                "&:hover": {
                    background: !resultPath ? "#06283D" : ""
                },
                "& .MuiFormControlLabel-label.Mui-disabled": {
                    color: "#fff"
                },
            }}
            disabled= {resultPath}
        />
    )
}