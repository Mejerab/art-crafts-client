import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const CraftCard = ({ data }) => {
    const {_id, name, photo, description, price } = data;
    return (
        <div className="my-6">
            <div className="card bg-base-100 h-full w-full xl:w-96 shadow-xl border">
                <figure>
                    <img className="h-56 xl:64"
                        src={photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="text-lg font-bold">${price}</h2>
                    </div>
                    <p className="font-medium">{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/craftdetails/${_id}`} className="btn bg-[#95453590] px-7 text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

CraftCard.propTypes = {
    data: PropTypes.object
}
export default CraftCard;