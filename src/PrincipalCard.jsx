

const PrincipalCard = () => {
    return ( 
        <div>
        
            <h1 className="mt-10 ml-7 4xl:text-7xl text-2xl text-red-600 font-bold bg-white pl-2 mb-3 flow-root w-fit pr-5 font-sans">Esta semana en el</h1>
           <h2 className=" ml-7 4xl:text-6xl text-xl text-red-600 font-light bg-white pl-2 w-fit font-sans pr-3">Centro Cultural</h2>
           <p className=" absolute top-5 left-1/2 transform -translate-x-1/2   4xl:text-8xl text-xl text-white font-medium text-center align-top">Conoce la programación <br/> que tenemos para ti</p>
           <div className="absolute top-0 right-0 w-auto h-auto mt-10">
            <p className="pr-3  m-5 4xl:text-6xl text-xl text-white font-black ">Del 27 al 1</p> 
            <p className=" m-5 pr-3 4xl:text-5xl text-xl text-white font-normal ">de diciembre </p> 
            <p className="pl-[50%] m-5 4xl:text-5xl text-xl text-white font-normal ">2023</p> 
           </div>
           
           <div className="absolute top-0 right-0 w-full h-[15vh]  p-10 mt-0 bg-red-500/60 mix-blend-color"></div>
        </div>


    )
}

export default PrincipalCard