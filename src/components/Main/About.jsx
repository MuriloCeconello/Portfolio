import HardSkills from "./HardSkills";

function About() {
    return (
        <>
            <h1 className="text-center text-4xl font-Chakra font-bold text-lightmode-font-color dark:text-darkmode-font-color pt-10 max-lg:pt-1">Sobre</h1>
            
            <div className="flex justify-around mt-14 max-lg:flex-col max-lg:items-center gap-16">
                <div className="text-justify max-lg:w-2/4 lg:w-4/12 max-md:w-full">
                    <h2 className="text-base font-Poppins text-lightmode-font-color dark:text-darkmode-font-color text-justify">
                        <p className="indent-5">Meu primeiro contato com o desenvolvimento web ocorreu em um curso de Análise e Desenvolvimento de Sistemas, realizado na escola SENAI “Álvares Romi”, no ano de 2022, com término em julho de 2023. Para o futuro, pretendo me tornar desenvolvedor full-stack com foco em front-end. Tenho a intenção de aprimorar meus conhecimentos em React.js e Tailwind CSS, além de aprender e me especializar em Angular, Vue, Python, PHP, entre outras tecnologias.</p></h2>
                </div>
                <div>
                    <h1 className="text-2xl text-center font-Chakra font-semibold text-lightmode-font-color dark:text-darkmode-font-color mb-5">Hard Skills:</h1>
                    <div className="flex flex-col justify-around gap-10 max-lg:items-center max-lg:flex-wrap">
                        <div className="flex gap-x-10">
                            <HardSkills img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"} name="HTML5" />
                            <HardSkills img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"} name="CSS3" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;