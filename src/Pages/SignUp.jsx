import { Link, useNavigate } from "react-router-dom";
import facebookIcon from '../assets/facebook_2111398.png';
import instagramIcon from '../assets/instagram_2111463.png';
import linkedinIcon from '../assets/linkedin_3992606.png';
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const SignUp = () => {
    const { register, handleSubmit} = useForm();

    const { signUpWithEmailAndPassword, userUpdate} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/.test(data.password)) {
            return toast.error('Invalid password. The password must consists with at least one capital letter , one special character and 6 characters ')
            // return (Swal.fire({
            //     icon: 'error',
            //     title: 'Invalid password!',
            //     text: " The password must be consists with at least one capital letter , one special character and 6 characters",

            // }))
        }


        console.log(data);
        const imageFiles = { image: data.image[0] };
        //img upload to imgbb and get an url
        const res = await axiosPublic.post(image_hosting_api, imageFiles, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        });


       
        let res2 = null;
        //img upload to imgbb and get an url
        if(data?.tradeLicense[0]){
            const imageFiles2 = { image: data?.tradeLicense[0] };
            res2 = await axiosPublic.post(image_hosting_api, imageFiles2, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            })
        }



        if (res.data?.success) {
            const image = res?.data?.data?.display_url;
            signUpWithEmailAndPassword(data.email, data.password)
                // eslint-disable-next-line no-unused-vars
               
                // eslint-disable-next-line no-unused-vars
                .then(res => {
                    userUpdate(data.name, image)
                        .then(() => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 1000);

                            // create user entry in the database
                            const sellerInfo = {
                                name: data.name,
                                email: data.email,
                                seller_country: data.sellerCountry,
                                seller_address: data.sellerAddress,
                                image: image,
                                trade_license: [res2?.data?.data?.display_url],
                                whatsapp_number: data.whatsappNumber,
                                nid_number: data.nidNumber,
                                intro_vdo: data.introVdo,
                            }
                            toast.success("Profile Created!")
                            navigate('/dashboard/welcome-page');
                            console.log(sellerInfo);

                            // axiosPublic.post('/users', sellerInfo)
                            //     .then(res => {
                            //         if (res.data?.insertedId) {
                            //             console.log('user added to the database');

                            //             toast.success('Profile successfully created!')

                            //             // Swal.fire(
                            //             //     'Profile successfully created!',
                            //             //     '',
                            //             //     'success'
                            //             // );
                            //             navigate('/dashboard/welcome-page');

                            //         }
                            //     })
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
    }

    return (
        <div className="min-h-screen  w-full flex flex-row">
            <div className="flex-auto w-[40%]  bg-blue-100">
                <img className=" w-full " src="https://i.ibb.co/BN1gwPM/loginn.png" alt="" />
            </div>
            <div className="py-5 px-20 flex-auto w-[60%] bg-blue-100  ">
                <h1 className=" text-3xl font-mono italic text-center font-extrabold mb-10 ">Super Box</h1>
                <p className="text-2xl font-semibold">Let’s get started!</p>
                <p className="text-gray-600 font-light max-w-[70%]">Inter your name, valid email address and password to register your account</p>

                <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5 py-8">

                    <div className="flex flex-row gap-4">
                        {/* Name */}
                        <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text text-lg">Your Name</span>

                            </label>
                            <input type="text" placeholder="enter your name"
                                {...register('name', { required: true })}
                                className="input input-bordered " />

                        </div>
                        {/* Email */}
                        <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text text-lg">Your Email</span>

                            </label>
                            <input type="text" placeholder="enter your email"
                                {...register('email', { required: true })}
                                className="input input-bordered " />

                        </div>

                    </div>
                    <div className="flex flex-row gap-4">
                        {/* your image */}
                        <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text text-lg">Choose a passport size picture</span>

                            </label>

                            <input {...register('image', { required: true })} type="file" className="file-input  input-bordered file-input-info" />

                        </div>
                        {/*Whatsapp number */}
                        <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text text-lg">Whatsapp Number</span>

                            </label>
                            <input type="tel" placeholder="Enter a whatsapp number"
                                {...register('whatsappNumber', { required: true })}
                                className="input input-bordered  " />

                        </div>
                    </div>

                    <div className="flex flex-row gap-4">
                        {/* Country */}
                        <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text text-lg">Country</span>

                            </label>
                            <input type="text" placeholder="Type your country name"
                                {...register('sellerCountry', { required: true })}
                                className="input input-bordered " />

                        </div>
                        {/* Address */}
                        <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text text-lg">Address</span>

                            </label>
                            <input type="text" placeholder="please enter your full address"
                                {...register('sellerAddress', { required: true })}
                                className="input input-bordered " />

                        </div>

                    </div>

                    {/*NID Number */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-lg">NID Number</span>

                        </label>
                        <input type="text" placeholder="Enter your NID number"
                            {...register('nidNumber', { required: true })}
                            className="input input-bordered  " />

                    </div>

                    <div className="flex flex-row gap-4">

                        {/*trade license*/}
                        <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text text-lg">Trade License</span>

                            </label>

                            <input {...register('tradeLicense')} type="file" className="file-input  input-bordered file-input-info" />

                        </div>
                        {/*introduction video*/}
                        <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text text-lg">Introduction video</span>

                            </label>

                            <input {...register('introVdo')} type="file" className="file-input  input-bordered file-input-info" />

                        </div>

                    </div>

                    <label className="input input-bordered flex items-center gap-2">
                        <input {...register('password', { required: true })} type="password"
                            placeholder="Enter your password" className="grow" />

                    </label>
                    <p className="text-sm -mt-4 text-gray-400 font-semibold">Minimum 8 characters long and containing at least one numeric, uppercase, lowercase, and special character.</p>

                    <div className="form-control flex flex-row gap-2">
                        <input type="checkbox" className="checkbox checkbox-info"
                            required />
                        <p className=" text-sm  font-medium">I accept the <span><Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">Terms & Conditions</Link></span></p>
                    </div>


                    {/* Submit Button */}
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
                        <Link to={'/login'} >Login Now!</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;