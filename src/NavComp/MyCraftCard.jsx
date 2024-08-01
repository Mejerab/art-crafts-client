import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyCraftCard = ({ data, allData, setAllData }) => {
    const { _id, name, photo, subcategory, description, price, rating, stock, time } = data;
    const handleDelete = (_id) => {
        const card = allData.filter(data => data._id !== _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://arts-server-site.vercel.app/crafts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                setAllData(card);
            }
        });
    }
    return (
        <div className="border grid grid-cols-4 items-center py-5 mx-12 rounded-2xl">
            <div className="col-span-1">
                <img className="xl:w-3/4 w-5/6 mx-auto" src={photo} alt="" />
            </div>
            <div className="col-span-3">
                <h4 className="text-2xl font-semibold">{name}</h4>
                <p className="font-medium my-2">{description}</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    <h4><span className="font-semibold">Category:</span>{subcategory}</h4>
                    <h4><span className="font-semibold">Process Time:</span>{time}</h4>
                    <h4 className='text-sm'><span className="text-base font-semibold">Price:</span>${price}</h4>
                    <h4 className='flex items-center text-sm'><span className="font-semibold text-base -mt-1">Rating:</span><FaStar className="text-[#95453590] mr-0.5" />{rating}</h4>
                    <h4><span className="font-semibold">Stock:</span>{stock}</h4>
                </div>
                <div className="flex justify-end items-end mr-5 mt-5">
                    <Link to={`/craftdetails/${_id}`} className="btn border-2 bg-white border-[#95453590] hover:text-gray-400 text-gray-800 mr-2">View Details</Link>
                    <Link to={`/updateCraft/${_id}`} className="btn bg-[#95453590] text-white mr-2">Update Details</Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-600 text-white ml-2">Delete</button>
                </div>
            </div>
        </div>
    );
};

MyCraftCard.propTypes = {
    data: PropTypes.object,
    allData: PropTypes.array,
    setAllData: PropTypes.func
}
export default MyCraftCard;