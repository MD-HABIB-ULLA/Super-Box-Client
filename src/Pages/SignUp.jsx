import { Link } from "react-router-dom";
import facebookIcon from '../assets/facebook_2111398.png';
import instagramIcon from '../assets/instagram_2111463.png';
import linkedinIcon from '../assets/linkedin_3992606.png';

const SignUp = () => {
    return (
        <div className="min-h-screen  w-full flex flex-row">
            <div className="flex-auto w-1/2 p-5 bg-gray-200">
                <img className="w-full h-full" src="https://i.ibb.co/BN1gwPM/loginn.png" alt="" />
            </div>
            <div className="py-5 px-20 flex-auto w-1/2 bg-blue-100  ">
                <h1 className=" text-3xl font-mono italic text-center font-extrabold mb-10 ">Super Box</h1>
                <p className="text-2xl font-semibold">Let’s get started!</p>
                <p className="text-gray-600 font-light max-w-[70%]">Inter your name, valid email address and password to register your account</p>

                <form action=""
                    className="flex flex-col gap-5 py-8">

                    <label className="input input-bordered flex items-center gap-2">

                        <input type="text" className="grow" placeholder="Enter Your Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">

                        <input type="text" className="grow" placeholder="Enter your Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">

                        <input type="password" className="grow"
                            placeholder="Enter yoy password" />

                    </label>
                    <p className="text-sm -mt-4 text-gray-400 font-semibold">Minimum 8 characters long and containing at least one numeric, uppercase, lowercase, and special character.</p>

                    <div className="form-control flex flex-row gap-2">
                        <input type="checkbox" className="checkbox checkbox-info" />
                        <p className=" text-sm  font-medium">I accept the <span><Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">Terms & Conditions</Link></span></p>
                    </div>




                    <button className="btn btn-info text-white text-xl">Sign Up</button>
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
                        <Link>Login Now!</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;