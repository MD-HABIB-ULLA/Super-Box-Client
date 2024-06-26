import Title from "../../../Components/Title";
import facebookIcon from '../../../assets/facebook_2111398.png';
import instagramIcon from '../../../assets/instagram_2111463.png';
import linkedinIcon from '../../../assets/linkedin_3992606.png';
import twitterIcon from '../../../assets/twitter_3256013.png';
import youTubeIcon from '../../../assets/youtube_5968852.png';
const FollowUs2 = () => {
    return (
        <div className="my-20">
            <Title title1={'you can also'} title2={'follow us'}></Title>
            <div className=" flex flex-row items-center justify-center gap-10 mt-10">
                <img className=" w-12" src={facebookIcon} alt="" />
                <img className=" w-12" src={instagramIcon} alt="" />
                <img className=" w-12" src={linkedinIcon} alt="" />
                <img className=" w-12" src={twitterIcon} alt="" />
                <img className=" w-12" src={youTubeIcon} alt="" />
            </div>
        </div>
    );
};

export default FollowUs2;