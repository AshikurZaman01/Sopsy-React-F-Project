import banner from "../../../assets/website/orange-pattern.jpg";

const Subscribe = () => {

    const bannerImage = {
        backgroundImage: `url(${banner})`,
        backposition: "center",
        backgrounrepeat: "no-repeat",
        backsize: "cover",
        height: "100%",
        width: "100%"
    }

    return (
        <div>
            <div
                data-aos="zoom-in"
                style={bannerImage}
                className="bg-gray-100  dark:bg-gray-800 text-white mb-20">

                <div className="container backdrop-blur-sm py-10">
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h1
                            className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">Get Notified About New Products</h1>
                        <input
                            className="w-full p-3 text-black font-semibold"
                            type="text" name="" id="" placeholder="Enter Your Email" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Subscribe;