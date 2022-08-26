import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import Container  from "@mui/material/Container";
import Button from "@mui/material/Button";
import { NavigationBar, Options, Timer } from "../../components/index";
import { Link} from "react-router-dom";
import { useQuiz } from "../../context/quiz.context";
import { replaceHtmlSpecialChar } from "../../utils";
import { useState } from "react";

export const QuestionTemplate = () => {
    const {state, index, setIndex} = useQuiz();
    const {questions, questionBackImage} = state;
    const [timer , setTimer] = useState(30);
    
    const nextBtnHandler = () => {
        setTimer(30)
        setIndex((prev: number) => prev + 1)
    }

    return (
        <div 
            className="question-page"
            style={{backgroundImage: `url(${questionBackImage})`}}
        >
            <NavigationBar />
            <Container 
                className="question-container"
                sx={{
                    display: "flex"
                }}
            >   
                <Box className="question-service">
                    <Typography 
                        sx={{
                            fontSize: "1.2rem",
                            fontFamily: "Comfortaa, cursive",
                        }} 
                    >
                        Question: {`${index + 1} / ${questions.length}`}
                    </Typography>
                    <Timer timer={timer} setTimer={setTimer} nextBtnHandler={nextBtnHandler}/>
                </Box>
                <Box className="question">
                    <Typography
                        sx={{
                            fontSize: "1.8rem",
                            fontFamily: "Comfortaa, cursive",
                        }} 
                    >
                        {replaceHtmlSpecialChar(questions[index].question)}
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
                    questions[index].options.map(({id, text, isRight}) =>  (
                        <Options key={id} text={text} isRight={isRight} questionIndex={index}/>
                    ))
                }
                </RadioGroup>
                <div className="next-btn-div">
                    {
                        index === questions.length - 1 
                        ?
                        <Link to="/result">
                            <Button 
                                variant="contained" 
                                size="large"
                                sx={{
                                    background: "#0096FF",
                                    "&:hover": {
                                        background: "#003865"
                                    }
                                }}
                                onClick={() => setIndex(0)}
                            >
                                Submit
                            </Button>
                        </Link>
                        : 
                        <Button 
                            variant="contained" 
                            size="large"
                            sx={{
                                background: "#1A4D2E",
                                "&:hover": {
                                    background: "#243D25"
                                }
                            }}
                            onClick={() => nextBtnHandler()}
                        >
                            Next
                        </Button>
                    }
                </div>
            </Container>    
        </div>
    )
}