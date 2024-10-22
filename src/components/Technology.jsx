function Technology({ img, name }) {
    return (
        <div className="bg-lightmode-card-color dark:bg-darkmode-card-color hover:bg-default-white dark:hover:bg-default-grey hover:scale-105 hover:shadow-xl p-2 rounded-md transition duration-300">
            <img className="w-20" src={img} alt={name} />
        </div>
    )
}
export default Technology;