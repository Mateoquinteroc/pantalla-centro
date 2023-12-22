import React, { useContext,} from 'react';
import logos from "../public/img/logos.png"
import { CardSelectContext } from "./Context"

const FooterCard = () => {

    const Context = useContext(CardSelectContext)
    // const abrirPanel = () => {
    //     Context.openCardBaseDetails();

    // } 


    return (
        <div className="absolute bottom-0 right-0 w-full gap-x-[500px] ">
            <button className={`absolute  h-fit w-fit 4xl:h-[100px] 4xl:w-[300px] bottom-[3vh] left-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-10 font-open-sans`} onClick={() => {Context.openCardBaseDetails()}}>Recorrido</button>
            <button className="absolute h-fit w-fit 4xl:h-[100px] 4xl:w-[300px] bottom-[3vh] left-[10vw] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-10 font-open-sans" onClick={() => {Context.openQr()}}>ChatBOT</button>
            <figure className="absolute bottom-0 right-0   4xl:mt-0  3xl:w-[35%] 3xl:bottom-0">
            <img className="bottom-0 mt-[5vh] 3xl:mt-0  4xl:mt-0" src={logos}/>

           </figure>
            <div className="w-full h-[10vh]  p-10 mt-0 bg-black/75 "></div>
        </div>
    )
}

export default FooterCard