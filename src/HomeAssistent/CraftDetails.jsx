import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CraftDetails = () => {
    const data = useLoaderData();
    const handleBuy = () => {
        Swal.fire({
            title: `You bought ${name}`,
            text: 'Press the button to continue',
            icon: 'success',
            confirmButtonText: 'Continue'
        })
    }
    const { artistName, artistEmail, name, photo, customizer, description, price, rating, subcategory, time, stock } = data;
    return (
        <div className="border my-6 mx-10 flex items-center py-12 rounded-2xl">
            <Helmet>
                <title>Craft Mania || Craft Details</title>
            </Helmet>
            <div className="w-1/2">
                <img className=" xl:w-3/4 xl:h-3/4 sm:h-[200px] sm:w-3/4 mx-auto" src={photo} alt="" />
            </div>
            <div className="ml-5 w-1/2">
                <h4 className="font-semibold mb-2 text-lg text-[#95453590] underline">Craft</h4>
                <h4 className="font-semibold text-lg">{name}</h4>
                <p className="my-4 font-medium">{description}</p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                    <h4 className=""><span className="font-semibold">Category: </span>{subcategory} Painting</h4>
                    <h4 className=""><span className="font-semibold">Process time: </span>{time}</h4>
                    <h4><span className="font-semibold">Price: </span>${price}</h4>
                    <h4 className="flex items-center"><span
                        className="font-semibold">Rating:</span> <FaStar className="text-[#95453590] mx-1" />{rating}
                    </h4>
                    <h4><span className="font-semibold">Stock Status:</span>{stock}</h4>
                </div>
                <p className="font-medium my-4"><span className="underline font-semibold text-[#95453590] pr-1">Note:</span>
                    {
                        customizer === 'true' ? <span>This craft is customizeable.</span> : <span>This craft is not custoziable.</span>
                    }
                </p>
                <div className="border-t text-sm">
                    <h4 className="underline text-base font-semibold text-[#95453590] mt-4">Artist</h4>
                    <h4 className=" my-4"><span className="font-semibold">Artist Name: </span> {artistName}</h4>
                    <h4><span className="font-semibold">Artist Email: </span> {artistEmail}</h4>
                </div>
                <div className="flex justify-end mr-5 mt-6">
                    <button onClick={handleBuy} className="btn bg-[#95453590] text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CraftDetails;