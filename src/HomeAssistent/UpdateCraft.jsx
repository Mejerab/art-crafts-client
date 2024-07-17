import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
    const data = useLoaderData();
    const { _id } = data;
    const [customize, setCustomize] = useState(false);
    const handleUpdate = e => {
        e.preventDefault();
        const artistName = e.target.artistName.value;
        const artistEmail = e.target.artistEmail.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const description = e.target.description.value;
        const time = e.target.time.value;
        const subcategory = e.target.select.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const stock = e.target.stock.value;
        const customizer = JSON.stringify(customize);
        const updatedCraft = { artistName, artistEmail, name, photo, description, customizer, time, subcategory, price, stock, rating };
        fetch(`https://arts-server-site-kmpyrbqoa-meherabs-projects-19544c30.vercel.app/crafts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Press the button to continue',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                      })
                }
            })
    }
    return (
        <div className="my-8">
            <Helmet>
                <title>Craft Mania || Update Craft</title>
            </Helmet>
            <h3 className="text-center text-3xl text-[#954535cc] font-semibold my-12">Update your craft</h3>
            <div className="border mx-12 rounded-2xl">
                <h5 className="text-xl font-medium pt-4 text-center">About the artist</h5>
                <p className="text-gray-400  text-center text-xs">Fill the input boxes with the artists information</p>
                <form onSubmit={handleUpdate}>
                    <div className="flex sm:ml-12 justify-evenly my-8">
                        <div>
                            <span className="font-medium">Artist Name: </span>
                            <input type="text" className="text-sm input input-bordered" name="artistName" defaultValue={data.artistName} placeholder="Artist name" required />
                        </div>
                        <div>
                            <span className="font-medium">Artist Email: </span>
                            <input type="email" defaultValue={data.artistEmail} className="text-sm input input-bordered" name="artistEmail" placeholder="Artist email" disabled />
                        </div>
                    </div>
                    <h5 className="text-xl font-medium pt-4 text-center">About the Craft</h5>
                    <p className="text-gray-400  text-center text-xs">Fill the input boxes with the craft information</p>
                    <div className="text-center">
                        <span className="font-medium">Craft Name: </span>
                        <input type="text" defaultValue={data.name} className="text-sm my-6 w-[60%] xl:w-[30%] input input-bordered" name="name" placeholder="Craft name" required />
                    </div>
                    <div className="text-center">
                        <span className="font-medium">Craft Photo: </span>
                        <input type="text" className="text-sm w-[60%] xl:w-[30%] input input-bordered" defaultValue={data.photo} name="photo" placeholder="Craft photo" required />
                    </div>
                    <div className="text-center flex items-center mb-6 justify-center -mx-4
                     xl:mx-72">
                        <span className="font-medium pr-1">Craft description: </span>
                        <textarea cols={40} className="text-sm my-6 w-[50%] textarea textarea-bordered" defaultValue={data.description} name="description" placeholder="Craft related short description" required />
                    </div>
                    <div className="flex justify-between mx-2 lg:mx-44">
                        <div className="flex">
                            <span className="font-medium pr-1">Craft Stock Status: </span>
                            <select name="stock" className="select select-bordered w-[60%] xl:w-full max-w-xs -ml-12">
                                <option selected>In Stock</option>
                                <option>Made to Order</option>
                            </select>
                        </div>
                        <div className="flex items-center">
                            <span className="font-medium pr-1">Craft Subcategory: </span>
                            <select name="select" className="select select-bordered w-full max-w-xs">
                                <option selected>Landscape</option>
                                <option>Portrait</option>
                                <option>Watercolour</option>
                                <option>Oli</option>
                                <option>Charcoal</option>
                                <option>Cartoon</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between mx-2 xl:mx-44 items-center">
                        <div className="flex items-center">
                            <span className="font-medium">Craft Processing time: </span>
                            <input type="text" className="text-sm my-6 sm:-ml- sm:w-[40%] input input-bordered" defaultValue={data.time} name="time" placeholder="Processing time" required />
                        </div>
                        <div className="flex items-center">
                            <span className="font-medium">Craft Customization: </span>
                            <button onClick={() => setCustomize(true)}>
                                <input type="radio" name="radio" className="radio radio-sm ml-4" id="yes" defaultChecked /></button>
                            <span>Yes</span>
                            <button onClick={() => setCustomize(false)}>
                                <input type="radio" name="radio" className="radio ml-5 radio-sm" id="no" /></button>
                            <span>No</span>
                        </div>
                    </div>
                    <div className="flex justify-between mx-2 xl:mx-44 items-center">
                        <div className="flex items-center">
                            <span className="font-medium pr-1">Craft Price: </span>
                            <input type="number" className="text-sm my-6 sm:w-[80%] sm:-ml-8 input input-bordered ml-1" defaultValue={data.price} name="price" placeholder="Price" required />
                        </div>
                        <div className="flex items-center">
                            <span className="font-medium sm:ml-8">Craft Rating:  </span>
                            <input type="number" className="text-sm my-6 input input-bordered ml-1" name="rating" defaultValue={data.rating} placeholder="Rating" required />
                        </div>
                    </div>
                    <div className="mx-2 lg:mx-44 pb-5">
                        <button className="btn text-white bg-[#95453590] w-full">Update craft</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCraft;