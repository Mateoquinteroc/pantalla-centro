import logos from "../public/img/logos.png"

const FooterCard = () => {
    return (
        <div className="absolute bottom-0 right-0 w-full gap-x-[500px] ">
            <button className="absolute h-[100px] w-[300px] bottom-[3vh] left-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-10">boton </button>
            <button className="absolute h-[100px] w-[300px] bottom-[3vh] left-[10vw] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-10">boton 1</button>
            <figure className="absolute bottom-0 right-0 4xl:h-[15vh] h-[10vh] ">
            <img className="bottom-0 mt-[5vh] " src={logos}/>

           </figure>
            <div className="w-full h-[10vh]  p-10 mt-0 bg-black/80 mix-blend-color"></div>
        </div>
    )
}

export default FooterCard