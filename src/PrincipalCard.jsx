

const PrincipalCard = () => {
    return ( 
        <div className="grid justify-items-stretch">
        <div className="absolute top-0 right-0 w-full h-[12vh]  p-10 mt-0 bg-rojo/80 mix-blend-darken 3xl:h-[12vh] "></div>
        
            <h1 className=" ml-7 4xl:text-7xl text-xl text-rojo font-bold bg-white pl-2 mb-1 flow-root w-fit pr-5 font-open-sans mix-blend-lighten mt-[2vh] 4xl:mt-[2vh] 3xl:mt-[1vh]">Esta semana en el</h1>
           <h2 className=" ml-7 4xl:text-6xl text-xl text-rojo font-light bg-white pl-2 w-fit font-open-sans pr-3 mix-blend-lighten">Centro Cultural</h2>
           <p className=" absolute top-5 left-1/2 transform -translate-x-1/2  4xl:text-6xl text-xl text-white font-bold font-open-sans text-center align-top mix-blend-lighten 3xl:text-4xl -mt-[2vh] 4xl:mt-[1vh] 3xl:-mt-3">Conoce la programación <br/> que tenemos para ti</p>
           <div className="absolute top-0 right-0 w-auto h-auto mt-10  font-open-sans flex flex-col justify-end items-end -translate-y-1/2 4xl:translate-y-0.5 ">
            <p className=" 4xl:text-5xl text-xl text-white font-black  font-open-sans pt-0 pr-[1vw]">Del 14 al 18</p> 
            <p className=" 4xl:text-4xl text-s text-white font-normal font-open-san left-0 pr-[1vw] tracking-wider">de mayo</p> 
            <p className=" 4xl:text-5xl text-s text-white font-normal font-open-sans pr-[1vw]">2024</p> 
           </div>
           
        </div>


    )
}

export default PrincipalCard