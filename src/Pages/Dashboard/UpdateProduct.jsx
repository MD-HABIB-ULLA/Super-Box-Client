import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Firebase/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../../Components/Title";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        if (user) {
            console.log(data);
            const imageFile = { image: data.productImage[0] };
            //img upload to imgbb and get an url
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            });

            console.log(res.data);
            if (res.data?.success) {

                const newProduct = {
                    product_name: data.productName,
                    product_image: [res.data.data.display_url],
                    product_type: data.productType,
                    product_price: data.productPrice,
                    product_description: data.productDescription
                }
                
                console.log(newProduct);
                reset();
            }
        } else {
            navigate('/login', { state: location.pathname });
        }
    }
    return (
        <div className="my-10 space-y-2">
            <Title title1={''} title2={'Update product'}></Title>
            <Title title1={'show your product to the world'} title2={''}></Title>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 p-5">

                <div className="grid grid-cols-2 gap-5">
                    {/*Product Name */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg">Product Name </span>

                        </label>
                        <input type="text" placeholder="Enter Product Name "
                            {...register('productName', { required: true })}
                            className="input input-bordered" />

                    </div>
                    {/*Product Type */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg">Your Product Type</span>

                        </label>
                        <input type="text" placeholder="enter tour type"
                            {...register('productType', { required: true })}
                            className="input input-bordered" />

                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {/*Product Image */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg">Product image</span>

                        </label>

                        <input {...register('productImage', { required: true })} type="file" className="file-input input-bordered " />
                    </div>

                    {/* Price */}
                    <div className="form-control w-full my-6">
                        <label className="label ">
                            <span className="label-text text-lg">Price</span>

                        </label>
                        <input type="number"
                            {...register('productPrice', { required: true })}
                            className="input input-bordered  " />

                    </div>
                </div>

                {/*Product information */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text text-lg">Product Description</span>

                    </label>
                    <textarea {...register('productDescription', { required: true })} className="textarea textarea-bordered" placeholder="Write product description"></textarea>
                </div>

                <div className="flex items-center justify-center">
                    <button className="btn btn-outline w-full text-lg ">
                        Add Product
                    </button>
                </div>

            </form>
        </div>
    );
};

export default UpdateProduct;