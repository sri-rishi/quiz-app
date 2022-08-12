import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

type OptionProps = {
    id : number,
    text: string,
}

export const Options = ({id, text}: OptionProps) => {
    return (
        <FormControlLabel
            className="option"
            value={text} 
            control={<Radio 
                    sx={{
                        '& .MuiSvgIcon-root': {
                            display: "none"
                        },
                    }}
                />
            } 
            label={text} 
            sx={{
                "& .MuiTypography-root" : {
                    fontSize: "1.5rem",
                    fontFamily: "Comfortaa, cursive",
                }
            }}
        />
    )
}