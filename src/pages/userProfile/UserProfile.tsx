import Typography from "@mui/material/Typography";
import Box  from "@mui/material/Box";
import "./userProfile.css"
import Container from "@mui/material/Container";
import { NavigationBar } from "../../components/index";
import Button from "@mui/material/Button";
import { logout } from "../../services/authService";
import { useAuth } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
    const {dispatch, userDetails, setUserDetails} = useAuth();
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({type: "Logout"});
        setUserDetails((details) => ({...details, name: "", email: ""}))
        logout();
        navigate("/");
    }
    return (
        <div>
            <NavigationBar />
            <Container 
                className="userProfile-container"
                sx={{
                    display: "flex"
                }}
            >
                <Typography variant="h4"
                    sx={{
                        fontFamily: "Comfortaa, cursive"
                    }}
                >
                    Account
                </Typography>
                <Box className="account-service">
                    <Box className="user-details">
                        <Box className="flex-box align-end">
                            <Typography
                                sx={{
                                    fontSize: "1.2rem",
                                    fontWeight: "900",
                                    fontFamily: "Comfortaa, cursive"
                                }}
                            >
                                Name
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.2rem",
                                    fontWeight: "900",
                                    fontFamily: "Comfortaa, cursive"
                                }}
                            >
                                Email
                            </Typography>
                        </Box>
                        <Box className="flex-box align-start">
                            <Typography
                                sx={{
                                    fontSize: "1.2rem",
                                    fontFamily: "Comfortaa, cursive"
                                }}
                            >
                                {userDetails.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.2rem",
                                    fontFamily: "Comfortaa, cursive"
                                }}
                            >
                                {userDetails.email}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="logout-btn-box">
                        <Button 
                            className="logout-btn"
                            sx={{
                                background: "#FF4A4A",
                                color: "#fff",
                                padding: "5px 10px",
                                "&:hover": {
                                    background: "#C21010"
                                }
                            }}
                            onClick={() => logoutHandler()}
                        >
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}