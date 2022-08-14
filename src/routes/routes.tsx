import React from "react";
import { Home, QuestionTemplate } from "../pages";
import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/questions" element={<QuestionTemplate />} />
        </Routes>
    )
}