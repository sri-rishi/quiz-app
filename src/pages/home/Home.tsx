import { NavigationBar } from "../../components/index";
import { IntroBox, CategoriesContainer } from "./components";

export const Home = () => {
    return (
        <div>
            <NavigationBar />
            <IntroBox />
            <CategoriesContainer />
        </div>
    )
}