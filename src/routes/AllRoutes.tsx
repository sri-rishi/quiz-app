import React from "react";
import { Home, QuestionTemplate, ResultPage } from "../pages/index/index";
import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/questions" element={<QuestionTemplate />} />
            <Route path="/result" element={<ResultPage />} />
        </Routes>
    )
}