import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useLocation } from "react-router-dom";
import { useQuiz } from "../../context/quiz.context";
import { replaceHtmlSpecialChar } from "../../utils";

type OptionProps = {
    text: string,
}

export const Options = ({text}: OptionProps) => {
    const location = useLocation();
    const {state,dispatch, index} = useQuiz();
    return (
        <FormControlLabel
            className="option"
            value={text} 
            label={text} 
            onClick={() =>{ 
                
                dispatch({
                type: "Select_Values", 
                payload: {
                    selectedValues: text,
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
                    background: location.pathname !== "/result" ? "#06283D" : ""
                }
            }}
            disabled={location.pathname === "/result" ? true : false}
        />
    )
}