import { createContext, useState, useContext, useEffect } from "react"

 export const CardSelectContext = createContext() 

export const CardSelectProvider= ({children}) => {
    // const Context = useContext(CardSelectContext)

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

    // cerrar ventanas despues de 1 minuto de inactividad 

    useEffect (() => {
        if (isQrOpen == true) {
            setTimeout(() => {
                closeQr()
            },60000)
        }else if (isCardDetailOpen == true){
            setTimeout(() => {
                closeCardDetail()
            },60000)
        } else return
    }, [isQrOpen, isCardDetailOpen])



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
