import Introduction from "./Introduction";
import About from "./About";
import Projects from "./Projects";
import Certificates from "./Certificates";

function Main() {
    return (
        <main>
            <section className="flex justify-around items-center bg-lightmode-background-color-2 dark:bg-darkmode-background-color-2 w-full h-screen p-10">
                <Introduction />
            </section>
            <section id="sobre" className="bg-lightmode-background-default dark:bg-darkmode-background-default w-full p-10">
                <About />
            </section>
            <section id="projetos" className="w-full p-10 bg--white">
                <Projects />
            </section>
            <section id="certificados" className="bg-lightmode-background-default dark:bg-darkmode-background-default w-full p-20">
                <Certificates />
            </section>
        </main>
    )
}
export default Main;