

const PrincipalCard = () => {
    return ( 
        <div>
        <div className="absolute top-0 right-0 w-full h-[15vh]  p-10 mt-0 bg-rojo/80 mix-blend-darken 3xl:h-[12vh] "></div>
        
            <h1 className=" ml-7 4xl:text-7xl text-2xl text-rojo font-bold bg-white pl-2 mb-3 flow-root w-fit pr-5 font-open-sans mix-blend-lighten 4xl:mt-[2vh]">Esta semana en el</h1>
           <h2 className=" ml-7 4xl:text-6xl text-xl text-rojo font-light bg-white pl-2 w-fit font-open-sans pr-3 mix-blend-lighten">Centro Cultural</h2>
           <p className=" absolute top-5 left-1/2 transform -translate-x-1/2   4xl:text-6xl text-xl text-white font-bold font-open-sans text-center align-top mix-blend-lighten 3xl:text-4xl 4xl:mt-[1vh]">Conoce la programación <br/> que tenemos para ti</p>
           <div className="absolute top-0 right-0 w-auto h-auto mt-10 font-open-sans 3xl:mt-2">
            <p className=" 4xl:text-5xl text-xl text-white font-black  font-open-sans  m-5 pr-2 3xl:m-1 3xl:w-fit 4xl:m-5 ">Del 19 al 23</p> 
            <p className=" m-5 pr-2 4xl:text-5xl text-xl text-white font-normal font-open-sans 3xl:m-0 4xl:absolute 4xl:right-5">de febrero </p> 
            <p className=" m-5 4xl:text-5xl text-xl text-white font-normal font-open-sans 4xl:-m-[1vh] 4xl:mt-[4vh] 4xl:pl-[60%] ">2024</p> 
           </div>
           
        </div>


    )
}

export default PrincipalCard