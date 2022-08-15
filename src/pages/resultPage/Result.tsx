import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavigationBar } from "../../components/index";
import { ResultAndAnswers } from "./components/ResultAndAnswers";

export const ResultPage = () => {
    return (
        <div>
            <NavigationBar />
            <Container className="result-container">
                <Typography 
                    variant="h4"
                    sx={{
                        fontFamily: "Comfortaa, cursive"
                    }}
                >
                    Quiz Result
                </Typography>
                <Typography 
                    variant="subtitle1" 
                    sx={{
                        fontSize: "1.7rem"
                    }}
                >
                    😔 Oops! Better luck next time
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: "1.4rem"
                    }}
                >
                    Your score
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: "1.4rem"
                    }}
                >
                    10/50
                </Typography>
            </Container>
            <Container>
                <ResultAndAnswers />
            </Container>
        </div>
    )
}