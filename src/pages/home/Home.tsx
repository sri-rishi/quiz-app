import React from "react";
import "./home.css"
import { NavigationBar } from "../../components";
import { IntroBox, CategoriesContainer } from "./components";

export const Home = () => {
    return (
        <div className="home">
            <NavigationBar />
            <IntroBox />
            <CategoriesContainer />
        </div>
    )
}