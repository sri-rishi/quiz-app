import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { categoriesData } from "./categoriesData";

export const CategoriesContainer = () => {
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
            <Container className="categories" sx={{
                display: "flex"
            }}>
                {
                    categoriesData.map(({id, categoryName, coverImgSrc}) =>(
                        <Box key={id} className="category-box">
                            <img src={coverImgSrc} className="cover-img" />
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
        </Container>
    )
}