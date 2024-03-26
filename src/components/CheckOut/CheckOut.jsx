import { useLoaderData } from "react-router-dom";
import CheckOutImg from '../../../src/assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const services = useLoaderData();
    const { _id, img, title, price } = services;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = user?.email;
        const date = from.date.value;
        const price = from.price.value;
        const phone = from.phone.value;

        const booking = {
            displayName: name,
            email,
            img,
            service: title,
            service_id: _id,
            date,
            price,
            phone
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Order Confirm!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch('http://localhost:5000/booking', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(booking)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (result.insertedId) {
                            Swal.fire({
                                title: "Success!",
                                text: "Order Confirm SuccessFully",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div>
                <div className="hero place-items-start items-center h-[300px] mt-20" style={{ backgroundImage: `url(${CheckOutImg})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="ml-24 text-5xl font-bold text-[#fff]">Check Out</h1>
                            <h5 className="text-xl font-bold text-[#fff] mt-5">{title}</h5>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mt-10 bg-[#F4F3F0] text-center p-16 rounded-lg">
                    <div className="">
                        <form onSubmit={handleUpdateProduct}>
                            <div className="flex gap-10">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Date</span>
                                    </label>
                                    <input type="date" name="date" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Price</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={price} className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Phone</span>
                                </label>
                                <input type="text" name="phone" className="input input-bordered" required />
                            </div>

                            <button className="bg-[#FF3811] text-lg font-semibold w-full rounded-lg mt-5 text-[#fff] py-3">Order Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;

