import PropTypes from 'prop-types';
import { MdDelete, MdEdit } from "react-icons/md";

const Book = ({ books, handleBookingDelete, handleBookingConform }) => {
    const { _id, img, service, price, phone, email, displayName, date, status } = books;
    return (

        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className='flex items-center'>
                        <img className='w-16 h-16 rounded-full' src={img} alt="" />
                        <div className='ml-5'>
                            <p className='text-[#1b1a1a] font-bold'>Title: <span className='text-[#4d4848] font-normal'>{service}</span> </p>
                            <p className='mt-2 text-[#1b1a1a] font-bold'>Email: <span className='text-[#4d4848] font-normal'>{email}</span> </p>
                            <p className='mt-2 text-[#1b1a1a] font-bold'>Date: <span className='text-[#4d4848] font-normal'>{date}</span> </p>

                        </div>
                    </div>
                </td>
                <td>
                    {displayName}
                </td>
                <td>{phone}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">{price}</button>
                </th>
                <th className='text-center'>
                    {/* <p className=' cursor-pointer p-5'> {<MdEdit className='text-[#19A067] text-xl bg-[#F60002] rounded-lg' />}</p> */}

                    { status === 'conform' ? <p  className=' cursor-pointer text-[#0509cac0] text-base'>Conformed</p> :
                        <p onClick={() => handleBookingConform(_id)} className=' cursor-pointer text-[#000000c0] text-base hover:bg-[#19A067] rounded-lg'>Please Conformed</p>
                    }

                </th>
                <th className='text-center'>
                    <p onClick={() => handleBookingDelete(_id)} className=' cursor-pointer text-[#19A067] hover:text-[#fff] text-lg hover:bg-[#F60002] rounded-lg py-1'>Delete</p>
                </th>
            </tr>

        </tbody>
    );
};
Book.propTypes = {
    books: PropTypes.object
};
export default Book;