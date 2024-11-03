import MyCertificates from "./MyCertificates";

function Certificates() {
    return (
        <>
            <h1 className="text-center text-lightmode-font-color dark:text-darkmode-font-color font-Chakra text-4xl font-bold">Certificados</h1>
            <div className="flex justify-around mt-10 max-lg:flex-col max-lg:gap-y-10 max-lg:items-center lg:gap-x-5">
                <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-48 rounded-xl"></div>
                <MyCertificates />
                <MyCertificates />
                <MyCertificates />
                <MyCertificates />
            </div>
        </>
    )
}
export default Certificates;