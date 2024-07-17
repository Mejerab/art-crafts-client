import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyCraftCard from "./MyCraftCard";

const MyCrafts = () => {
    const { user } = useContext(AuthContext);
    const loaderData = useLoaderData();
    const [itUp, setItUp] = useState(false);
    const myData = loaderData.filter(data=> data.artistEmail === user.email);
    const [allData, setAllData] = useState(myData);
    const handleFilter = (data) => {
        if (data === 'all') {
            setAllData(myData);
        }
        else if (data === 'yes') {
            const able = myData.filter(data => data.customizer === 'true');
            setAllData(able)
        }
        else if (data === 'no') {
            const unable = myData.filter(data => data.customizer === 'false');
            setAllData(unable)
        }
    }
    return (
        <div>
            <h3 className="text-center text-3xl text-[#954535cc] font-bold my-12">My Craft Items</h3>
            <div className="w-full flex justify-end">
                <details className="dropdown dropdown-end mr-12">
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
            <div className="my-16 grid gap-y-7">
                {
                    allData.map(data=><MyCraftCard key={data._id} allData={allData} setAllData={setAllData} data={data}></MyCraftCard>)
                }
            </div>
        </div>
    );
};

export default MyCrafts;