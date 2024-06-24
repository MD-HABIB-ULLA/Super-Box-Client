import { Link, useNavigate } from "react-router-dom";
import facebookIcon from '../assets/facebook_2111398.png';
import instagramIcon from '../assets/instagram_2111463.png';
import linkedinIcon from '../assets/linkedin_3992606.png';
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SignUp = () => {

    const { signUpWithEmailAndPassword, userUpdate } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleSignUpWithEmailAndPassword = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const image = e.target.image.value;
        console.log(email, password, name);

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/.test(password)) {
            //    return toast.error('Invalid password. The password must consists with at least one capital letter , one special character and 6 characters ')
            return (Swal.fire({
                icon: 'error',
                title: 'Invalid password!',
                text: " The password must be consists with at least one capital letter , one special character and 6 characters",

            }))
        }

        signUpWithEmailAndPassword(email, password)
            .then(res => {
                userUpdate(name, image)
                    .then(() => {
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);

                        // create user entry in the database
                        const userInfo = {
                            name,
                            email,
                            image
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');

                                    toast.success('Profile successfully created!')

                                    // Swal.fire(
                                    //     'Profile successfully created!',
                                    //     '',
                                    //     'success'
                                    // );
                                    navigate('/dashboard');

                                }
                            })



                    })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry!',
                    text: err.message,

                })
            })

    }

    return (
        <div className="min-h-screen  w-full flex flex-row">
            <div className="flex-auto w-1/2 p-5 bg-gray-200">
                <img className="w-full h-full" src="https://i.ibb.co/BN1gwPM/loginn.png" alt="" />
            </div>
            <div className="py-5 px-20 flex-auto w-1/2 bg-blue-100  ">
                <h1 className=" text-3xl font-mono italic text-center font-extrabold mb-10 ">Super Box</h1>
                <p className="text-2xl font-semibold">Let’s get started!</p>
                <p className="text-gray-600 font-light max-w-[70%]">Inter your name, valid email address and password to register your account</p>

                <form onSubmit={handleSignUpWithEmailAndPassword}
                    className="flex flex-col gap-5 py-8">

                    <label className="input input-bordered flex items-center gap-2">

                        <input type="text" className="grow"
                            name="name" required
                            placeholder="Enter Your Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">

                        <input type="text" className="grow"
                            name="email" required
                            placeholder="Enter your Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" placeholder="Image URL" name="image" className="grow" />

                    </label>



                    <label className="input input-bordered flex items-center gap-2">

                        <input type="password" className="grow"
                            name="password" required
                            placeholder="Enter your password" />

                    </label>
                    <p className="text-sm -mt-4 text-gray-400 font-semibold">Minimum 8 characters long and containing at least one numeric, uppercase, lowercase, and special character.</p>

                    <div className="form-control flex flex-row gap-2">
                        <input type="checkbox" className="checkbox checkbox-info"
                            required />
                        <p className=" text-sm  font-medium">I accept the <span><Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">Terms & Conditions</Link></span></p>
                    </div>




                    <button type="submit" className="btn btn-info text-white text-xl">Sign Up</button>
                </form>

                <div>
                    <p className=" text-sm font-semibold">Or login with</p>
                    <div className="flex flex-row gap-2 py-2 ">
                        <img className=" w-8" src="https://i.ibb.co/74JTkrp/google-13170545.png" alt="" />
                        <img className=" w-8" src={facebookIcon} alt="" />
                        <img className=" w-8" src={instagramIcon} alt="" />
                        <img className=" w-8" src={linkedinIcon} alt="" />
                    </div>

                    <p className=" mt-4 font-semibold">Already have an account? <span className="text-blue-700 hover:text-blue-900">
                        <Link to={'/login'} >Login Now!</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;