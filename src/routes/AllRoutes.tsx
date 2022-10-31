import React from "react";
import { Home, QuestionTemplate, ResultPage, SignIn, SignUp, UserProfile } from "../pages/index/index";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PrivateRoute } from "./PrivateRoute";

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
            <Route path="/user" element={<PrivateRoute />}>
                <Route path="/user/user-profile" element={<UserProfile />} />
            </Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/singup" element={<SignUp />} />
        </Routes>
    )
}