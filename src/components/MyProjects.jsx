function MyProjects() {
    return (
        <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-56 rounded-xl hover:bg-opacity-70 transition ease duration-500 max-lg:hidden">
            <div className="flex flex-col items-center justify-center group/card visible group-hover/card:visible h-full font-Poppins gap-y-7">
                <div className="flex flex-col items-center text-lightmode-font-color dark:text-darkmode-background-color-2">
                    <h3 className="group/card invisible group-hover/card:visible text-lg">Nome do Projeto</h3>
                    <p className="text-justify group/card invisible group-hover/card:visible">Descrição</p>
                </div>
                <a className="group/card invisible group-hover/card:visible bg-lightmode-background-default dark:bg-darkmode-background-color-2 text-lightmode-font-color dark:text-darkmode-font-color p-3 rounded-2xl" href="#" target="_blank">Acessar</a>
            </div>
        </div>
    )
}
export default MyProjects