import { useState } from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from "@mui/material";
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Close

} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state"
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const noMobile = useMediaQuery(("min-width: 960px"));
    const theme = useTheme();
    const neutraLight = theme.palette.neutral.light;
    const bat = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primary = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const fullName = `${user.firstName} ${user.lastName}`;

    return (
        <FlexBetween padding="1.5rem 6% " backgroundColor={alt}>
            <FlexBetween gap="1.8rem">
                <Typography
                    fontWeight="bold"
                    fontSize="1.5rem"
                    onClick={() => navigate("/home")}
                    sx={{ cursor: "pointer" }}
                >
                    BBS Bulletin Board System
                </Typography>
                {noMobile && (
                    <FlexBetween backgroundColor={neutraLight} borderRadius="5px" gap="2rem">
                        <InputBase placeholder="Search" />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                )}
            </FlexBetween>
            {noMobile ?(
                <FlexBetween>
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </FlexBetween>
            ) :(
                <IconButton onClick={() => setIsMobile(true)}><Search /></IconButton>
            )
        }
        </FlexBetween>
    )
}
export default Navbar;