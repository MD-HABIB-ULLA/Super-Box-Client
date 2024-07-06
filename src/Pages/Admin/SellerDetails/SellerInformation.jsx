import { useRef, useState } from "react";
import Title from "../../../Components/Title";
import vdo from "../../../assets/example-Vdo.mp4";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { MdPauseCircleFilled } from "react-icons/md";


const SellerInformation = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <div className="mt-10">
            <Title title1={''} title2={'Seller Information'}></Title>


            <div className="flex justify-between items-end mt-20">
                <div className="flex items-end gap-4">
                    <div className="avatar ">
                        <div className="w-24 rounded">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="text-lg font-mono">
                        <h1>Name: Xyz Example</h1>
                        <p>Email: xyz@example.com</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="btn  btn-error  text-base text-white font-bold uppercase  w-32 ">Ban</button>
                    <button className="btn  btn-warning text-base text-white font-bold uppercase  w-32 " >Suspend</button>
                </div>
            </div>

            <div className="bg-slate-200 p-10 flex justify-between mt-5">
                <div className="text-xl space-y-2 font-semibold flex-1">
                    <h1>Country: XYZ</h1>
                    <h1>Address: XYZ, Cloud Moon,212 XYZ, Cloud Moon,212 XYZ, Cloud Moon,212</h1>
                    <h1>Whatsapp:01XXXXXXXX</h1>
                    <p>NID: 20137578399 <span className="btn btn-link text-xl">View</span></p>
                    <p>Trade License: 20137578399 <span className="btn btn-link text-xl">View</span></p>
                </div>

                <div className="flex-1">
                    <div className="relative"
                        onMouseEnter={() => setShowButton(true)}
                        onMouseLeave={() => setShowButton(false)} >
                        <video className=" p-4"
                            ref={videoRef}
                            onClick={handlePlayPause}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}>
                            <source src={vdo} type='video/mp4' />
                        </video>

                        {showButton && (
                            <button className="control-button" onClick={handlePlayPause}>
                                {isPlaying ? (
                                    <button onClick={handlePlayPause}>
                                        <MdPauseCircleFilled className=" absolute top-[30%] fill-white right-[40%] text-6xl" />
                                    </button>
                                ) : (
                                    <button onClick={handlePlayPause}>
                                        <MdOutlinePlayCircleFilled className=" absolute top-[30%] fill-white right-[40%] text-6xl"></MdOutlinePlayCircleFilled>
                                    </button>
                                )}
                            </button>
                        )}
                    </div>
                    <div>
                        <h1 className="text-2xl mt-1 font-semibold text-center">Introduction Video</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SellerInformation;