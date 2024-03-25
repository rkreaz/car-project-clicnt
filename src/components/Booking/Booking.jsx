import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
// import NavBar from "../Shared/NavBar/NavBar";
import CheckOutImg from '../../../src/assets/images/checkout/checkout.png'
import Book from "../Book/Book";

const Booking = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
  
    const url = `http://localhost:5000/booking?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setBooking(result);
            })
    }, [url])

    return (
        <div>
            {/* <NavBar></NavBar> */}
            <div className="hero place-items-start items-center h-[300px] mt-20" style={{ backgroundImage: `url(${CheckOutImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="ml-24 text-4xl font-bold text-[#fff]">Booking Details</h1>
                    </div>
                </div>
            </div>


            <div className="overflow-x-auto mt-20">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-xl font-bold text-[#000]">Image</th>
                            <th className="text-xl font-bold text-[#000]">Name</th>
                            <th className="text-xl font-bold text-[#000]">Phone</th>
                            <th className="text-xl font-bold text-[#000]">Price</th>
                            <th className="text-xl font-bold text-[#000]">Details</th>
                            <th className="text-xl font-bold text-[#000]">Delete</th>
                          
                        </tr>
                    </thead>
                    {
                        booking.map(books => <Book key={books._id} books={books}></Book>)
                    }
                </table>
            </div>












        </div>
    );
};

export default Booking;