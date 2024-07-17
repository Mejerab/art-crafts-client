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
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import CraftCard from '../HomeAssistent/CraftCard';
import { Tooltip } from 'react-tooltip';
import { toast, ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';
const Home = () => {
    const navigate = useNavigate();
    const craftData = useLoaderData();
    const { user } = useContext(AuthContext);
    const handleMessage = e => {
        e.preventDefault();
        const name = e.target.name;
        const email = e.target.email;
        const message = e.target.message;
        if (user) {
            toast.success('Message sent successfully');
            name.value = '';
            email.value = '';
            message.value = '';
        }
        else {
            navigate('/login');
        }
    }
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
                    <a id="not-clickable">
                        <Link to='/addcrafts' className="btn px-7 bg-[#95453590] text-white">Add your Crafts <IoIosAdd className="text-3xl p-[2px] rounded-full text-[#95453590] bg-white" /></Link></a>
                    <Tooltip anchorSelect="#not-clickable">
                        <button>Add your crafts</button>
                    </Tooltip>
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
            <div>
                <h3 className="text-3xl font-bold text-[#954535cc] text-center my-6">Our Services</h3>
                <div className='border mx-12 rounded-2xl my-4 flex'>
                    <div className='w-1/2 p-4 border-r'>
                        <Fade cascade>
                            <h5 className='font-semibold'>Welcome to Our Services Blog!</h5>
                            <p>At Craft Mania, we are committed to providing top-notch services tailored to meet your needs. Our blog is your go-to resource for insights, tips, and updates about the services we offer. Whether you are looking for industry trends, expert advice, or a deeper understanding of our service offerings, you have come to the right place.</p>
                            <h5 className='font-semibold mt-4 mb-2'>Why Choose Us?</h5>
                            <p>Learn more about what sets us apart in the industry. Our blog highlights our unique approach, the value we bring to our clients, and the continuous improvements we make to ensure top-quality service delivery.</p>
                        </Fade>
                    </div>
                    <div className='w-1/2 p-4'>
                        <h4 className='text-center font-semibold'>Send message</h4>
                        <form onSubmit={handleMessage}>
                            <div className='w-3/4 flex items-center mx-auto my-5'>
                                <span className='font-semibold pr-2'>Name:</span>
                                <input type="text" defaultValue={user?.displayName} placeholder='Your name' className='input input-bordered w-full' name='name' required />
                            </div>
                            <div className='w-3/4 flex items-center mx-auto my-5'>
                                <span className='font-semibold pr-2'>Email:</span>
                                <input type="email" defaultValue={user?.email} placeholder='Your email' className='input input-bordered w-full' name='email' required />
                            </div>
                            <div className='w-3/4 flex items-center mx-auto my-5'>
                                <span className='font-semibold pr-2'>Your Message:</span>
                                <textarea placeholder='Your Message' name='message' className='textarea textarea-bordered w-full' required />
                            </div>
                            <div className='flex justify-end mr-20'>
                                <button id='submit' className='btn text-white bg-[#95453590] rounded-full'>Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Home;