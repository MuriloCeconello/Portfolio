function Introduction() {
    return (
        <>
            <div className="text-justify w-4/12 max-lg:w-screen max-xl:w-7/12">
                <div className="flex flex-col items-center xl:w-full">
                    <h1 className="text-center font-Chakra font-bold text-5xl text-lightmode-font-color dark:text-darkmode-font-color max-sm:text-4xl">Olá! Me chamo Murilo </h1>
                    <h2 className="font-Poppins text-lightmode-font-color dark:text-darkmode-font-color text-xl max-md:w-full max-lg:w-9/12 xl:w-11/12">Tenho 18 anos e iniciei minha trajetória no desenvolvimento aos 16. Atualmente, atuo como desenvolvedor front-end, mas pretendo me tornar um desenvolvedor full-stack.</h2>
                </div>
                <div className="pl-5 pt-5 flex justify-center">
                    <a href="#contato"><button className="border-2 border-lightmode-font-color dark:border-darkmode-font-color text-lightmode-font-color dark:text-darkmode-font-color p-2 font-Poppins rounded-lg hover:bg-lightmode-font-color hover:dark:bg-darkmode-font-color hover:text-lightmode-background-color-2 hover:dark:text-darkmode-background-color-2 trasintion duration-500">Contate-Me</button></a>
                </div>
            </div>
        </>
    )
}
export default Introduction;