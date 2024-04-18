import React, { useContext,} from 'react';
import logos from "../public/img/logos.png"
import { CardSelectContext } from "./Context"
import { ChatBubbleLeftRightIcon, MapPinIcon } from '@heroicons/react/24/solid'

const FooterCard = () => {

    const Context = useContext(CardSelectContext)
    // const abrirPanel = () => {
    //     Context.openCardBaseDetails();

    // } 


    return (
        <div className="absolute bottom-0  w-full  ">
            <button className={`absolute  h-[100px] w-[100px] translate-y-1/3 left-[5%] bg-blue-700 hover:bg-blue-500 text-white text-[100%] 4xl:text-5xl font-bold px-5 rounded-full z-10 font-open-sans `} onClick={() => {Context.openCardBaseDetails()}}>
                <MapPinIcon className='h-[50%] translate-x-[8px]'/>
                </button>
            <button className="absolute  h-[100px] w-[100px] translate-y-1/3 left-[10%] bg-blue-700 hover:bg-blue-500 text-white text-[1.5vw] font-bold  px-5 rounded-full z-10 font-open-sans " onClick={() => {Context.openQr()}}> 
                <ChatBubbleLeftRightIcon className='h-[50%] translate-x-[10px]' />
                </button>
            <figure className="absolute w-[40%] 4xl:w-[50vh] right-[1vh] mt-[1vh] 4xl:-right-0">
            <img className="z-index-10 " src={logos}/>

           </figure>
            <div className=" h-[10vh] 4xl:h-[8vh] bg-black/75 "></div>
        </div>
    )
}

export default FooterCard