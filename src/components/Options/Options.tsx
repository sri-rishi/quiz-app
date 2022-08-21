import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useLocation } from "react-router-dom";
import { useData } from "../../context/data.context";
import { replaceHtmlSpecialChar } from "../../utils";

type OptionProps = {
    id: number,
    text: string,
}

export const Options = ({id, text}: OptionProps) => {
    const location = useLocation();
    return (
        <FormControlLabel
            className="option"
            value={replaceHtmlSpecialChar(text)} 
            label={replaceHtmlSpecialChar(text)} 
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