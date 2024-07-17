import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CraftCategories = ({ craftData }) => {
    console.log(craftData);
    const landData = craftData.filter(data => data.subcategory === 'Landscape');
    const portraitData = craftData.filter(data => data.subcategory === 'Portrait');
    const watercolourData = craftData.filter(data => data.subcategory === 'Watercolour');
    const oilData = craftData.filter(data => data.subcategory === 'Oli');
    const charcoalData = craftData.filter(data => data.subcategory === 'Charcoal');
    const cartoonData = craftData.filter(data => data.subcategory === 'Cartoon');
    return (
        <div>
            <h3 className='font-bold text-3xl text-center mt-16 mb-8'>Craft Categories</h3>
            <div className="my-6 mx-10">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" defaultChecked name="my_tabs_2" role="tab" className="tab" aria-label="Landscape Painting" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 py-16">
                        <ul className="w-full mb-4 steps steps-vertical lg:steps-horizontal">
                            <li className="step ">Mountain Canvana</li>
                            <li className="step ">Forest related</li>
                        </ul>
                        <div className="grid grid-cols-2 xl:grid-cols-3 mt-4">
                            {
                               landData.length>0 ? landData.map(info => <div key={info._id} className="card bg-base-100 h-full w-full xl:w-96 shadow-xl border">
                                    <figure>
                                        <img className="h-56 xl:64"
                                            src={info.photo}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">{info.name}</h2>
                                            <h2 className="text-lg font-bold">${info.price}</h2>
                                        </div>
                                        <p className="font-medium">{info.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/craftdetails/${info._id}`} className="btn bg-[#95453590] px-7 text-white">View Details</Link>
                                        </div>
                                    </div>
                                </div>) :
                                <p className="flex text-xl text-red-500 justify-center col-span-3">No related items added</p>
                            }
                        </div>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Portrait Drawing" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  py-16">
                    <ul className="w-full mb-4 steps steps-vertical lg:steps-horizontal">
                            <li className="step ">Pencil Sketch Portrait</li>
                            <li className="step ">Ink Outline Portrait</li>
                            <li className="step ">Acrylic Portrait Canvas</li>
                        </ul>
                        <div className="grid grid-cols-2 xl:grid-cols-3 mt-4">
                            {
                                portraitData.length > 0 ? portraitData.map(info => <div key={info._id} className="card bg-base-100 h-full w-full xl:w-96 shadow-xl border">
                                    <figure>
                                        <img className="h-56 xl:64"
                                            src={info.photo}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">{info.name}</h2>
                                            <h2 className="text-lg font-bold">${info.price}</h2>
                                        </div>
                                        <p className="font-medium">{info.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/craftdetails/${info._id}`} className="btn bg-[#95453590] px-7 text-white">View Details</Link>
                                        </div>
                                    </div>
                                </div>) :
                                <p className="flex text-xl text-red-500 justify-center col-span-3">No related items added</p>
                            }
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Watercolour Painting" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  py-16">
                    <ul className="w-full mb-4 steps steps-vertical lg:steps-horizontal">
                            <li className="step ">Floral Watercolor Art</li>
                            <li className="step ">Animal Watercolor Portrait</li>
                        </ul>
                        <div className="grid grid-cols-2 xl:grid-cols-3 mt-4">
                            {
                               watercolourData.length>0 ? watercolourData.map(info => <div key={info._id} className="card bg-base-100 h-full w-full xl:w-96 shadow-xl border">
                                    <figure>
                                        <img className="h-56 xl:64"
                                            src={info.photo}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">{info.name}</h2>
                                            <h2 className="text-lg font-bold">${info.price}</h2>
                                        </div>
                                        <p className="font-medium">{info.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/craftdetails/${info._id}`} className="btn bg-[#95453590] px-7 text-white">View Details</Link>
                                        </div>
                                    </div>
                                </div>) :
                                <p className="flex text-xl text-red-500 justify-center col-span-3">No related items added</p>
                            }
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Oil Painting" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  py-16">
                    <ul className="w-full mb-4 steps steps-vertical lg:steps-horizontal">
                            <li className="step ">Realistic Oil Portrait</li>
                            <li className="step ">Abstract Oil Painting</li>
                        </ul>
                        <div className="grid grid-cols-2 xl:grid-cols-3 mt-4">
                            {
                               oilData.length>0 ? oilData.map(info => <div key={info._id} className="card bg-base-100 h-full w-full xl:w-96 shadow-xl border">
                                    <figure>
                                        <img className="h-56 xl:64"
                                            src={info.photo}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">{info.name}</h2>
                                            <h2 className="text-lg font-bold">${info.price}</h2>
                                        </div>
                                        <p className="font-medium">{info.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/craftdetails/${info._id}`} className="btn bg-[#95453590] px-7 text-white">View Details</Link>
                                        </div>
                                    </div>
                                </div>) :
                                <p className="flex text-xl text-red-500 justify-center col-span-3">No related items added</p>
                            }
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Charcoal Sketching" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  py-16">
                    <ul className="w-full mb-4 steps steps-vertical lg:steps-horizontal">
                            <li className="step ">Figure Charcoal Sketch</li>
                            <li className="step ">Architectural Charcoal Drawing</li>
                        </ul>
                        <div className="grid grid-cols-2 xl:grid-cols-3 mt-4">
                            {
                               charcoalData.length>0 ? charcoalData.map(info => <div key={info._id} className="card bg-base-100 h-full w-full xl:w-96 shadow-xl border">
                                    <figure>
                                        <img className="h-56 xl:64"
                                            src={info.photo}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">{info.name}</h2>
                                            <h2 className="text-lg font-bold">${info.price}</h2>
                                        </div>
                                        <p className="font-medium">{info.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/craftdetails/${info._id}`} className="btn bg-[#95453590] px-7 text-white">View Details</Link>
                                        </div>
                                    </div>
                                </div>) :
                                <p className="flex text-xl text-red-500 justify-center col-span-3">No related items added</p>
                            }
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Cartoon Drawing" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  py-16">
                    <ul className="w-full mb-4 steps steps-vertical lg:steps-horizontal">
                            <li className="step ">Comic Strip Drawing</li>
                            <li className="step ">Superhero Cartoon Design</li>
                            <li className="step ">Batman Cartoon Design</li>
                        </ul>
                        <div className="grid grid-cols-2 xl:grid-cols-3 mt-4">
                            {
                               cartoonData.length>0 ? cartoonData.map(info => <div key={info._id} className="card bg-base-100 h-full w-full xl:w-96 shadow-xl border">
                                    <figure>
                                        <img className="h-56 xl:64"
                                            src={info.photo}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">{info.name}</h2>
                                            <h2 className="text-lg font-bold">${info.price}</h2>
                                        </div>
                                        <p className="font-medium">{info.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/craftdetails/${info._id}`} className="btn bg-[#95453590] px-7 text-white">View Details</Link>
                                        </div>
                                    </div>
                                </div>) :
                                <p className="flex text-xl text-red-500 justify-center col-span-3">No related items added</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CraftCategories.propTypes = {
    craftData: PropTypes.array
}
export default CraftCategories;