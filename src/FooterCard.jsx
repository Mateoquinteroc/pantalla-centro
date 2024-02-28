import React, { useContext,} from 'react';
import logos from "../public/img/logos.png"
import { CardSelectContext } from "./Context"

const FooterCard = () => {

    const Context = useContext(CardSelectContext)
    // const abrirPanel = () => {
    //     Context.openCardBaseDetails();

    // } 


    return (
        <div className="absolute bottom-0  w-full gap-x-[500px] ">
            <button className={`absolute  h-fit w-fit 4xl:h-[100px] 3xl:h-[80px] 4xl:w-[300px] 4xl:bottom-[3vh] 3xl:bottom-4 left-10 bg-blue-500 hover:bg-blue-700 text-white text-4xl font-bold py-2 px-4 rounded-full z-10 font-open-sans`} onClick={() => {Context.openCardBaseDetails()}}>Recorrido</button>
            <button className="absolute w-fit h-fit 4xl:h-[100px] 3xl:h-[80px] 4xl:w-[300px] left-[15vw] 4xl:bottom-[3vh] 3xl:bottom-4 bg-blue-500 hover:bg-blue-700 text-white text-4xl font-bold py-2 px-4 rounded-full z-10 font-open-sans " onClick={() => {Context.openQr()}}>ChatBOT</button>
            <figure className="absolute   4xl:mt-0 r 3xl:w-[30%] 3xl:bottom-0 3xl:right-10 4xl:right-10 ">
            <img className="bottom-0 mt-[5vh] 3xl:mt-0  4xl:mt-0 z-index-10 " src={logos}/>

           </figure>
            <div className=" h-[10vh] bg-black/75 "></div>
        </div>
    )
}

export default FooterCard