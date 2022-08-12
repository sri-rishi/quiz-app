import React from "react";
import "./questionTemplate.css"
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import Container  from "@mui/material/Container";
import Button from "@mui/material/Button"
import { NavigationBar, Options } from "../../components";


const quiz = {
    question: "Who wrote the book New Dimensions of India's Foreign Policy?",
    options: [
        {
            id: 1,
            text: "Atal Bihari Vajpayee"
        },
        {
            id: 2,
            text: "Abdul Kalam Azad"
        },
        {
            id: 3,
            text: "Amit Chaudhuri"
        },
        {
            id: 4,
            text: "Raghuram Rajan"
        }
    ]
}

export const QuestionTemplate = () => {
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
                        {quiz.question}
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
                    quiz.options.map((item) =>  (
                        <Options key={item.id} id={item.id} text={item.text}/>
                    ))
                }
                </RadioGroup>
                <div className="next-btn-div">
                    <Button 
                        variant="contained" 
                        size="large"
                        sx={{
                            background: "#1A4D2E",
                            "&:hover": {
                                background: "#243D25"
                            }
                        }}
                    >
                        Next
                    </Button>
                </div>
            </Container>    
        </div>
    )
}