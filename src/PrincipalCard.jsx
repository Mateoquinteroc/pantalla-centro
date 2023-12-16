import logos from "../public/img/logos.png"

const PrincipalCard = () => {
    /**cualquier cambio pendejo */
    return ( 
        <div className="top-0 right-0 w-full h-[15vh]  p-10 mt-0 bg-red-500/60">
           <h1 className="top-0  4xl:text-7xl text-2xl text-red-600 font-bold bg-white pl-2 mb-3 flow-root w-fit pr-5 font-sans">Esta semana en el</h1>
           <h2 className="4xl:text-6xl text-xl text-red-600 font-light bg-white pl-2 w-fit font-sans pr-3">Centro Cultural</h2>
           <p className=" absolute top-5 left-1/2 transform -translate-x-1/2   4xl:text-8xl text-xl text-white font-medium text-center align-top">Conoce la programación <br/> que tenemos para ti</p>
           <p className="absolute top-0 right-0 pr-3  m-5 4xl:text-6xl text-xl text-white font-black ">Del 27 al 1</p> 
           <p className="absolute right-0 top-[4%] m-5 pr-3 4xl:text-5xl text-xl text-white font-normal ">de diciembre </p> 
           <p className=" absolute right-0 top-[8%] m-5 pr-3 4xl:text-5xl text-xl text-white font-normal">2023</p> 
           <figure className="relative w-auto 4xl:h-[20vh] h-[15vh] right-0 top-0">
            <img className="relative inset-x-0 bottom-0 mt-[5vh] " src={logos}/>

           </figure>
        </div>
    )
}

export default PrincipalCard