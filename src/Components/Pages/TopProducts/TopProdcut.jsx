
const TopProdcut = ({ item }) => {


    const { id, title, description, img } = item || {};

    return (
        <div>
            <section className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-1000 group max-w-[300px]">

                <div>
                    <img className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" src={img} alt="" />
                </div>

                <div>

                </div>

            </section>
        </div>
    );
};

export default TopProdcut;