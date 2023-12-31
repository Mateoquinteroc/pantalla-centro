import { createContext, useState, useContext } from "react"

 export const CardSelectContext = createContext() 

export const CardSelectProvider= ({children}) => {
    const Context = useContext(CardSelectContext)

    // Abrir / Cerrar
    const [isCardDetailOpen, setIsCardDetailOpen] = useState(false)
    const openCardDetail = () => setIsCardDetailOpen(true)
    const closeCardDetail = () => setIsCardDetailOpen(false)

    const [isCardBaseDetailsOpen, setIsCardBaseDetailsOpen] = useState(false)
    const openCardBaseDetails = () => 
    {setIsCardBaseDetailsOpen(true)
    setIsCardDetailOpen(false)
    setIsQrOpen(false)}
    const closeCardBaseDetails = () => setIsCardBaseDetailsOpen(false)

    const [isQrOpen, setIsQrOpen] = useState(false)
    const openQr = () => 
    {setIsQrOpen(true)
    setIsCardDetailOpen(false)
    setIsCardBaseDetailsOpen(false)}

    const closeQr = () => setIsQrOpen(false)
    
    // Ver detalle de seleccion 
    const [eventSelect, setEventSelect] = useState({})

    // ver Evento Seleccionado 

    const [eventoSeleccionado, setEventoSeleccionado] = useState({})
    const [currentIndex, setCurrentIndex] = useState(null)


    return (
        <CardSelectContext.Provider value={{
            isCardDetailOpen,
            setIsCardDetailOpen,
            openCardDetail,
            closeCardDetail,
            eventSelect,
            setEventSelect,
            eventoSeleccionado,
            setEventoSeleccionado,
            currentIndex,
            setCurrentIndex,
            isCardBaseDetailsOpen,
            openCardBaseDetails,
            closeCardBaseDetails,
            isQrOpen,
            openQr,
            closeQr
        }}>
        {children}
        </CardSelectContext.Provider>
    )
}
