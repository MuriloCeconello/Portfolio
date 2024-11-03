import MyProjects from "./MyProjects";

function Projects() {
    return (
        <>
            <h1 className="font-Chakra text-center font-bold text-4xl text-lightmode-font-color dark:text-black pt-10
                mb-10">Projetos</h1>
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-around gap-y-10 xl:w-10/12 2xl:w-8/12 min-[1230px]:w-10/12 max-[1400px]:w-10/12 min-[1463px]:w-8/12 min-[1809px]:w-7/12">
                    <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-56 rounded-xl hover:bg-opacity-70 transition ease duration-500">
                        <div className="flex flex-col items-center justify-center group/card visible group-hover/card:visible h-full font-Poppins gap-y-7">
                            <div className="flex flex-col items-center text-lightmode-font-color dark:text-darkmode-background-color-2">
                                <h3 className="invisible group-hover/card:visible text-lg">Nome do Projeto</h3>
                                <p className="text-justify invisible group-hover/card:visible">Descrição</p>
                            </div>
                            <a className="invisible group-hover/card:visible bg-lightmode-background-default dark:bg-darkmode-background-color-2 text-lightmode-font-color dark:text-darkmode-font-color p-3 rounded-2xl" href="#" target="_blank">Acessar</a>
                        </div>
                    </div>
                    <MyProjects />
                    <MyProjects />
                    <MyProjects />
                    <MyProjects />
                    <MyProjects />
                </div>
            </div>
        </>
    )
}
export default Projects;