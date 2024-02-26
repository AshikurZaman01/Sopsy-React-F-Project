import { FaStar } from "react-icons/fa";

const TopProdcut = ({ item }) => {


    const { id, title, description, img } = item || {};

    return (
        <div>
            <section className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-1000 group max-w-[300px]">

                <div className="h-[100px]">
                    <img className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md " src={img} alt="" />
                </div>

                <div className="p-4">
                    <div className="flex justify-center text-primary gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-center">{title}</h1>
                        <p className="text-justify p-2">{description}</p>
                    </div>

                    <div className="flex justify-center">
                        <button className="btn btn-sm  rounded-full capitalize bg-primary">Order Now</button>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default TopProdcut;