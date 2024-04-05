import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import CheckOutImg from '../../../src/assets/images/checkout/checkout.png'
import Book from "../Book/Book";
import Swal from "sweetalert2";

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

    const handleBookingDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/booking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = booking.filter(book => book._id !== id)
                            setBooking(remaining)

                        }
                    })
            }
        });
    }

    const handleBookingConform = (id) => {
        console.log('handle Booking Conform', id);
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'conform' })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount > 0) {
                    const remaining = booking.filter(book => book._id !== id);
                    const updated = booking.find(book => book._id === id);
                    updated.status = 'conform';
                    const newBooking = [updated, ...remaining];
                    setBooking(newBooking);
                }
            })
    }

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
                        <tr className="bg-[#FF3811]">
                            <th className="text-xl font-bold text-[#fff]">Image</th>
                            <th className="text-xl font-bold text-[#fff]">Name</th>
                            <th className="text-xl font-bold text-[#fff]">Phone</th>
                            <th className="text-xl font-bold text-[#fff]">Price</th>
                            <th className="text-xl font-bold text-[#fff]">Update</th>
                            <th className="text-xl font-bold text-[#fff]">Delete</th>

                        </tr>
                    </thead>
                    {
                        booking.map(books =>
                            <Book
                                key={books._id}
                                books={books}
                                handleBookingDelete={handleBookingDelete}
                                handleBookingConform={handleBookingConform}
                            ></Book>)
                    }
                </table>
            </div>












        </div>
    );
};

export default Booking;