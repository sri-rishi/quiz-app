import React from "react";
import  Box  from "@mui/material/Box";
import  Container  from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const IntroBox = () => {
    return (
        <Container className="introContainer">
            <Box className="introBox">
                <Typography
                    variant="h4" 
                    component="div"
                    sx={{
                        fontFamily: "Comfortaa, cursive"
                    }}
                >
                    Welcome to QuizMe
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Comfortaa, cursive"
                    }}
                >
                    Let's learn and see how much you know while playing QuizMe, don't forget to have fun while playing
                </Typography>
            </Box>
        </Container>
    )
}