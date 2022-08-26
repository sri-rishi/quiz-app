
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz.context";
import { useEffect } from 'react';

type TimerProps = {
    timer: number,
    setTimer: (value: number) => void,
    nextBtnHandler: () => void
}

export const Timer = ({timer, setTimer, nextBtnHandler}: TimerProps) => {
    const {state, index} = useQuiz();
    const navigate = useNavigate();

    useEffect(() => {
        let intervalId = setInterval(() => {
          if (timer > 0) {
            setTimer(timer - 1);
          }
          if (timer === 1) {
            nextBtnHandler();
            if (index === state.questions.length - 1) {
              navigate("/result");
            }
          }
        }, 1000);
        return () => {
          clearInterval(intervalId);
        };
      }, [timer]);

    return (
        <div className={`timer ${timer <= 10 && "redBg"}`}>
            <span>
                <AlarmOnIcon />
            </span>
            <Typography
                sx={{
                    fontSize: "1.2rem",
                    fontFamily: "Comfortaa, cursive",
                }} 
            >
                {timer} sec
            </Typography>
        </div>
    )
}