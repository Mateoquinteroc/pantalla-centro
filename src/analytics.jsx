import ReactGA from "react-ga4";

// Función para inicializar Google Analytics
export const initGA = () => {
    ReactGA.initialize("G-97CC1YXHMS"); 
};

// Función para registrar eventos personalizados
export const logEvent = (category, action) => {
    ReactGA.event({
        category: category,
        action: action,
    });
};
