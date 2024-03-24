import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";
const Service = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div>
            <div className="card w-96 border">
                <figure className="px-5 pt-5">
                    <img src={img} className="rounded-xl w-full h-44" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="flex items-center justify-center">
                        <p className='text-[#FF3811]'>Price: ${price}</p>
                        <span> <FaArrowRight className='text-[#FF3811]' /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
};
export default Service;