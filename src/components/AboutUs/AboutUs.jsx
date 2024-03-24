import aboutImg1 from '../../../src/assets/images/about_us/person.jpg'
import aboutImg2 from '../../../src/assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero mt-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={aboutImg1} className="max-w-sm rounded-lg shadow-2xl w-full h-[350px]" />
                    <img src={aboutImg2} className="max-w-sm rounded-lg shadow-2xl w-2/4 h-[250px] absolute right-10 top-2/4 border-[#fff] border-8" />
                </div>

                <div className='w-1/2 space-y-5 mt-20'>
                    <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-[#fff]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
