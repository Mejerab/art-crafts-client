import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'animate.css';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import CraftCategories from '../HomeAssistent/CraftCategories';
import { IoIosAdd } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router-dom';
import CraftCard from '../HomeAssistent/CraftCard';
const Home = () => {
    const craftData = useLoaderData();
    return (
        <>
            <div className='h-fit mb-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper h-[450px]"
                >
                    <SwiperSlide className='relative'><img className='' src="https://images.unsplash.com/photo-1688588428105-c9cadcc670ab?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='animate__animated animate__fadeInLeft bg-[#000000CC] z-30 absolute bottom-9 right-9 text-white p-5 rounded-md'>
                            <h4 className='text-lg mb-2 font-semibold'>Craft Mania</h4>
                            <p className='text-sm font-sans'>We provide the best art related crafts</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src="https://images.unsplash.com/photo-1695844706923-1bbe910153db?q=80&w=1505&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='animate__animated animate__fadeInLeft bg-[#000000CC] z-30 absolute bottom-9 right-9 text-white p-5 rounded-md'>
                            <h4 className='text-lg mb-2 font-semibold'>Craft Mania</h4>
                            <p className='text-sm font-sans'>We provide the best art related crafts</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img className='h-[450px] w-full' src="https://images.unsplash.com/photo-1688590987000-1f7989029ee7?q=80&w=1560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='animate__animated animate__fadeInLeft bg-[#000000CC] z-30 absolute bottom-9 right-9 text-white p-5 rounded-md'>
                            <h4 className='text-lg mb-2 font-semibold'>Craft Mania</h4>
                            <p className='text-sm font-sans'>We provide the best art related crafts</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="my-12">
                <h3 className="text-3xl font-bold text-[#954535cc] text-center mb-4">Art & Crafts</h3>
                <div className="flex justify-end mr-10">
                    <Link to='/addcrafts' className="btn px-7 bg-[#95453590] text-white">Add your Crafts <IoIosAdd className="text-3xl p-[2px] rounded-full text-[#95453590] bg-white" /></Link>
                </div>
                <div className=' grid grid-cols-2 xl:grid-cols-3 mx-10 my-4 gap-x-14'>
                    {
                        craftData.slice(0, 6).map(data => <CraftCard key={data._id} data={data}></CraftCard>)
                    }
                </div>
                {
                    craftData.length > 6 &&
                    <div className='flex justify-center my-4'>
                        <Link to='/allcrafts' className='btn bg-[#95453590] px-7 text-white'>Show more</Link>
                    </div>
                }
            </div>
            <CraftCategories craftData={craftData}></CraftCategories>
        </>
    );
};

export default Home;