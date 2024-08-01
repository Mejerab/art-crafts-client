import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaAngleDown } from "react-icons/fa";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const AllCrafts = () => {
    const [itUp, setItUp] = useState(false);
    const loaderData = useLoaderData();
    const [allData, setAllData] = useState(loaderData);
    const location = useLocation();
    // console.log(location);

    const handleFilter = (data) => {
        if (data === 'all') {
            setAllData(loaderData);
            console.log('allData');
        }
        else if (data === 'yes') {
            const able = loaderData.filter(data => data.customizer === 'true');
            console.log('able');
            setAllData(able)
        }
        else if (data === 'no') {
            const unable = loaderData.filter(data => data.customizer === 'false');
            console.log('unable');
            setAllData(unable)
        }
    }
    return (
        <>
        <Helmet>
            <title>Craft Mania || All Crafts</title>
        </Helmet>
            <div className="my-12">
                <h3 className="text-3xl text-[#954535cc] font-bold text-center">All arts & crafts</h3>
                <div className="w-full flex justify-end">
                    <details className="dropdown dropdown-end mr-11">
                        <summary onClick={() => setItUp(!itUp)} className="btn bg-[#95453590] text-white px-7 m-1">Filter
                            {itUp ?
                                <FaAngleDown className="text-2xl rotate-180 text-white -ml-1" /> :
                                <FaAngleDown className="text-2xl text-white -ml-1" />
                            }
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><button onClick={() => handleFilter('all')}>All</button></li>
                            <li><button onClick={() => handleFilter('yes')}>Customizable</button></li>
                            <li><button onClick={() => handleFilter('no')}>Non Customizable</button></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-10 my-8 mx-12">
                {
                    allData.map(data =>
                        <div key={data._id}>
                            <div className="card bg-base-100 h-full w-full xl:w-96 shadow-xl border">
                                <figure>
                                    <img className="h-56 xl:h-64 mt-5"
                                        src={data.photo}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <div className="flex justify-between">
                                        <h2 className="card-title">{data.name}</h2>
                                        <h2 className="text-lg font-bold">${data.price}</h2>
                                    </div>
                                    <p className="font-medium pb-3">{data.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/craftdetails/${data._id}`} className="btn bg-[#95453590] px-7 text-white">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

export default AllCrafts;