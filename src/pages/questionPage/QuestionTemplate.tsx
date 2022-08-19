import React from "react";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import Container  from "@mui/material/Container";
import Button from "@mui/material/Button"
import { NavigationBar, Options } from "../../components/index";
import { Link } from "react-router-dom";
import { useData } from "../../context/data.context";
import { shuffleArray } from "../../utils/shuffleArray";

export const QuestionTemplate = () => {
    const {questions, index, setIndex} = useData();
    const options = () => {
        const mergedArr = [...questions[index].incorrect_answers, questions[index].correct_answer];
        const optionsArr = shuffleArray(mergedArr);
        return optionsArr;
    };

    return (
        <div className="question-page">
            <NavigationBar />
            <Container 
                className="question-container"
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
                        {questions[index].question.replace(/&quot;/g, "'")}
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
                    options().map((item, i) =>  (
                        <Options key={i} text={item} id={i}/>
                    ))
                }
                </RadioGroup>
                <div className="next-btn-div">
                    {/* <Link to="/result"> */}
                        <Button 
                            variant="contained" 
                            size="large"
                            sx={{
                                background: "#1A4D2E",
                                "&:hover": {
                                    background: "#243D25"
                                }
                            }}
                            onClick={() => setIndex((prev: number) => prev + 1)}
                        >
                            Next
                        </Button>
                    {/* </Link> */}
                </div>
            </Container>    
        </div>
    )
}