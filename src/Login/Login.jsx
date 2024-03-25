import { FaGoogle } from "react-icons/fa";
import wash from '../../src/assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {

    const {loginUser, loginWithGoogle} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
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
            <div className="hero min-h-screen theme">
                <div className="hero-content flex-col lg:flex-row gap-16">

                    <div className="text-center lg:text-left w-1/2">
                        <img className=' max-w-sm max-h-sm' src={wash} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-lg border rounded-lg p-5">
                        <div className="card-body mt-12">
                            <h1 className="text-4xl font-semibold theme_text text-center">Login now!</h1>

                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your email" name='email' className="input input-bordered bg-white" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Password</span>
                                    </label>
                                    <input type="Password" placeholder="Your Password" name='password' className="input input-bordered bg-white" required />
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn bg-[#FF3811] text-[#fff] hover:bg-[#c94646] text-xl font-semibold" type="submit" value="Login" />

                                </div>
                            </form>
                        </div>

                        <div className='text-center'>
                            <p>Or Login Up with</p>
                            <div className='flex gap-5 justify-center items-center mb-11 mt-8'>

                                <a onClick={handleLoginWithGoogle} className="btn btn-slide-left text-white bg-[#FF3811] hover:bg-[#c94646]"> <FaGoogle className='text-[#34A853] text-2xl'></FaGoogle>Sign With Google</a>

                            </div>
                            <p>Have an account? <Link to={'/register'} className='text-[#FF3811]'>Register</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;