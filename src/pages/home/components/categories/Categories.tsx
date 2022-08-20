import React, {useState} from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RulesModal } from "../../../../components/index";
import { categoriesData } from "./categoriesData";
import { useData } from "../../../../context/data.context";

type ActionTypeAssertion = "Books" | "Sports" | "Films" | "Mythology" | "Animals" | "Comics"

export const CategoriesContainer = () => {
    const [openRulesModal, setOpenRulesModal] = useState(false);
    const {dispatch} = useData();
    return (
        <Container className="categories-container" sx={{
            display: 'flex'
        }}>
            <Typography 
                variant="h3"
                sx={{ 
                    fontFamily: "Comfortaa, cursive",
                }}
            >
                Categories
            </Typography>
            <Container 
                className="categories" 
                sx={{
                    display: "flex"
                }}
                onClick={() => setOpenRulesModal(true)}
            >
                {
                    categoriesData.map(({id, categoryName, coverImgSrc}) =>(
                        <Box 
                            key={id} 
                            className="category-box"
                            onClick={() => dispatch({type: categoryName as ActionTypeAssertion})}
                        >
                            <img src={coverImgSrc} alt={categoryName} className="cover-img" />
                            <Typography 
                                sx={{
                                    fontSize: "2rem", 
                                    fontFamily: "Comfortaa, cursive"
                                }} 
                                className="category-cover-text"
                            >
                                {categoryName}
                            </Typography>
                        </Box>
                    ))
                }
            </Container>
            <RulesModal setOpen={setOpenRulesModal} open={openRulesModal}/>
        </Container>
    )
}