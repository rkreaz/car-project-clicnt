
import wash from '../../src/assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-16">

                    <div className="text-center lg:text-left w-1/2">
                        <img className=' max-w-sm max-h-sm' src={wash} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-lg border rounded-lg p-5 theme_text">

                        <div className="card-body">
                            <h1 className="text-4xl font-semibold text-[#444] text-center">Register now!</h1>

                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" name='name' className="input input-bordered bg-white" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your email" name='email' className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Photo</span>
                                    </label>
                                    <input type="photo" placeholder="Your photo" name='photo' className="input input-bordered bg-white" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="Your password" name='password' className="input input-bordered bg-white" required />

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF3811] text-[#fff] hover:bg-[#c94646] text-xl font-semibold">Register </button>

                                </div>
                            </form>
                        </div>
                        <div className='text-center'>
                           

                            <p>Already have an account? <Link to={'/login'} className='text-[#FF3811]'>Login</Link> </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;