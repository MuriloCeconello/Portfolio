function HardSkills({ img, name }) {
    return (
        <div className="bg-lightmode-card-color dark:bg-darkmode-card-color hover:bg-white dark:hover:bg-gray-500 hover:scale-105 hover:shadow-xl 
        p-2 rounded-md transition duration-300">
            <img className="w-20" src={img} alt={name} />
        </div>
    )
}
export default HardSkills;