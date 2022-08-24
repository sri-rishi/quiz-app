import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import Container  from "@mui/material/Container";
import { Options } from "../../../components/index/index";
import { replaceHtmlSpecialChar } from "../../../utils";
import { OptionsType } from "../../../types/quizReducer.types";


type ResultAnswersProps = {
    questionValue: string,
    options: OptionsType[];
    questionIndex: number
}

export const ResultAndAnswers = ({questionValue, options, questionIndex}: ResultAnswersProps) => {
    return (
        <Container 
            className="question-container result-ques-back"
            sx={{
                display: "flex"
            }}
        >
            <Box className="question">
                <Typography
                    sx={{
                        fontSize: "1.8rem",
                        fontFamily: "Comfortaa, cursive",
                    }} 
                >
                    {replaceHtmlSpecialChar(questionValue)}
                </Typography>
            </Box>
            <RadioGroup
                className="options-box"
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                row
                sx={{
                    "& .MuiFormControlLabel-root": {
                        margin: "0"
                    }
                }}
            >
            {
                options.map(({id, text, isRight}) =>  (
                    <Options key={id} text={text} isRight={isRight} questionIndex={questionIndex}/>
                ))
            }
            </RadioGroup>
        </Container>    
    )
}