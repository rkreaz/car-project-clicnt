import banner1 from '../../../../src/assets/images/banner/1.jpg'
import banner2 from '../../../../src/assets/images/banner/2.jpg'
import banner3 from '../../../../src/assets/images/banner/3.jpg'
import banner4 from '../../../../src/assets/images/banner/4.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[600px] mt-10">

            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full " />
                <div className="max-sm:pt-10 md:pt-32  absolute flex lg:items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <div className='max-sm:pl-8 max-sm:w-4/5 text-white max-sm:space-y-2 lg:space-y-7 pl-24 md:w-9/12 lg:w-1/2 '>
                        <h1 className="max-sm:text-xl md:text-4xl lg:text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
                        <p className="max-sm:text-sm max-sm:mt-2 max-sm:mb-2  mt-7 mb-7 text-[#fff] text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] mr-5 border-0 text-[#fff] hover:text-[#FF3811]">Discover More</button>
                            <button className="btn btn-outline text-[#fff]  hover:bg-[#FF3811]">Appointment</button>
                        </div>

                    </div>
                </div>

                <div className="absolute flex justify-end items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className=" px-4 py-4 rounded-full mr-5 border-none text-[#fff] bg-[#150505] hover:bg-[#FF3811]"><FaArrowLeft /></a>
                    <a href="#slide2" className=" px-4 py-4 rounded-full mr-5 border-none text-[#fff] bg-[#150505] hover:bg-[#FF3811]"><FaArrowRight /></a>
                </div>
            </div>



            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                <div className="max-sm:pt-10 md:pt-32 rounded-lg absolute flex lg:items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <div className='max-sm:pl-8 max-sm:w-4/5 text-white max-sm:space-y-2 lg:space-y-7 pl-24 md:w-9/12 lg:w-1/2'>
                        <h1 className="max-sm:text-xl md:text-4xl lg:text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
                        <p className="max-sm:text-sm max-sm:mt-2 max-sm:mb-2  mt-7 mb-7 text-[#fff] text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] mr-5 border-0 text-[#fff] hover:text-[#FF3811]">Discover More</button>
                            <button className="btn btn-outline text-[#fff]  hover:bg-[#FF3811]">Appointment</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className=" px-4 py-4 rounded-full mr-5 border-none text-[#fff] bg-[#150505] hover:bg-[#FF3811]"><FaArrowLeft /></a>
                    <a href="#slide3" className=" px-4 py-4 rounded-full mr-5 border-none text-[#fff] bg-[#150505] hover:bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>


            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-lg" />
                <div className="max-sm:pt-10 md:pt-32 rounded-lg absolute flex lg:items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <div className='max-sm:pl-8 max-sm:w-4/5 text-white max-sm:space-y-2 lg:space-y-7 pl-24 md:w-9/12 lg:w-1/2'>
                        <h1 className="max-sm:text-xl md:text-4xl lg:text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
                        <p className="max-sm:text-sm max-sm:mt-2 max-sm:mb-2  mt-7 mb-7 text-[#fff] text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] mr-5 border-0 text-[#fff] hover:text-[#FF3811]">Discover More</button>
                            <button className="btn btn-outline text-[#fff]  hover:bg-[#FF3811]">Appointment</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className=" px-4 py-4 rounded-full mr-5 border-none text-[#fff] bg-[#150505] hover:bg-[#FF3811]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide4" className=" px-4 py-4 rounded-full mr-5 border-none text-[#fff] bg-[#150505] hover:bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>


            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                <div className="max-sm:pt-10 md:pt-32 rounded-lg absolute flex lg:items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <div className='max-sm:pl-8 max-sm:w-4/5 text-white max-sm:space-y-2 lg:space-y-7 pl-24 md:w-9/12 lg:w-1/2'>
                        <h1 className="max-sm:text-xl md:text-4xl lg:text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
                        <p className="max-sm:text-sm max-sm:mt-2 max-sm:mb-2  mt-7 mb-7 text-[#fff] text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] mr-5 border-0 text-[#fff] hover:text-[#FF3811]">Discover More</button>
                            <button className="btn btn-outline text-[#fff]  hover:bg-[#FF3811]">Appointment</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-5">
                    <a href="#slide3" className=" px-4 py-4 rounded-full mr-5 border-none text-[#fff] bg-[#150505] hover:bg-[#FF3811]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide1" className=" px-4 py-4 rounded-full mr-5 border-none text-[#fff] bg-[#150505] hover:bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
        </div>

    );
};

export default Banner;