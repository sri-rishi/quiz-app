import React from "react";
import { Home, QuestionTemplate, ResultPage } from "../pages/index/index";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const AllRoutes = () => {
    const location = useLocation()
     useEffect(() => {
        document.title = location.pathname === "/" ? "Quizee" : location.pathname.slice(1);
    }, [location.pathname])
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/questions" element={<QuestionTemplate />} />
            <Route path="/result" element={<ResultPage />} />
        </Routes>
    )
}