import Title from "../../Components/Title";



const EditProfile = () => {
    return (
        <div className="">
            <div className="bg-gray-200 py-2 mt-5">
                <Title title1={''} title2={'Edit Your Profile'}></Title>
            </div>
            <div className="bg-gray-200 mt-5  py-10">
                <form className="w-[50%] mx-auto flex flex-col justify-center  gap-2">
                    <div className="flex flex-row gap-2 items-center">
                        <h1 className="text-xl">Your Name: </h1>
                        <input type="text" placeholder="Type here" className="input w-full max-w-sm" />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <h1 className="text-xl">Your Email: </h1>
                        <input type="email" placeholder="Type here" className="input w-full max-w-sm" />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <h1 className="text-xl">Phone Number: </h1>
                        <input type="number" placeholder="Type here" className="input w-full max-w-sm" />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <h1 className="text-xl">Your Address: </h1>
                        <textarea className="textarea w-full max-w-sm" placeholder="address"></textarea>
                    </div>

                    <div className="flex justify-center mt-5 items-center">
                        <button className="btn btn-primary max-w-fit text-xl px-10">Update Profile</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default EditProfile;