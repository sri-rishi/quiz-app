import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavigationBar } from "../../components/index";
import { ResultAndAnswers } from "./components/ResultAndAnswers";
import { useQuiz } from "../../context/quiz.context";
import { useEffect, useRef } from "react";

export const ResultPage = () => {
    const {state} = useQuiz();
    const {questions} = state;
    const totalScore = useRef(0)

    if(questions.length !== 0) {
        let total = 0;
        questions.forEach((ques, index) => {
            for (const opt of questions[index].options) {
                if(questions[index].selectedValue === opt.text && opt.isRight) {
                    total += 10;
                }
            }
        })

        totalScore.current = total;
    }


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
                    {
                        (totalScore.current / 50) * 100 > 75   
                        ?
                        "🏆 Yey! you have cleareed the quiz"
                        :
                        "😔 Oops! better luck next time"
                    }
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
                    {totalScore.current}/50
                </Typography>
            </Container>
            <Container className="resultAns">
                {
                    questions.map((item, index) => (
                        <ResultAndAnswers
                            key={item.id} 
                            questionIndex={index}
                            questionValue={item.question} 
                            options={item.options}
                        />
                    ))
                }
            </Container>
        </div>
    )
}