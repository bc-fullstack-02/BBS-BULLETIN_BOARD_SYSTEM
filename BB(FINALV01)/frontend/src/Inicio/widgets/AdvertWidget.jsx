import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
//import  WidgetWarapper  from 'components/WidgetWarapper';


const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <>
            <FlexBetween>
                <Typography color={dark}>
                    Anuncios
                </Typography>
                <Typography color={medium}>Criar um anuncio</Typography>
            </FlexBetween>
            <img src="http://localhost:3001/assets/info4.jpeg" alt="anuncio" />
            <FlexBetween>
                <Typography color={main}>Anuncio 1</Typography>
                <Typography variant="body2" color="textSecondary">Anuncio 2</Typography>
            </FlexBetween>
            <Typography variant="body2" color="textSecondary">Anuncio 3</Typography>
        </>
    )
}
export default AdvertWidget;