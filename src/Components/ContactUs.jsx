import Title from "./Title";
import { FcHome } from "react-icons/fc";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { BiMailSend } from "react-icons/bi";
import ContactForm from "./ContactForm";
const ContactUs = () => {
    return (
        <div>
            <Title title1='any queries?' title2={'contact with us'}></Title>
            <p className="text-center max-w-[35%] mx-auto text-xs text-gray-600 font-light">We always want to hear from you! Let us know how we can best help you and we'll do our very best.</p>

            <div className="container mx-auto flex flex-row px-10 py-10 divide-x-4 ">


                <div className=" flex-1 card-body items-center text-center">
                    <FcHome className=" text-5xl" />
                    <h2 className="card-title">Location</h2>
                    <p className=" text-sm text-gray-500 w-52 font-semibold">Anfra Inc, 06 Highley St, Victoria, Germany</p>

                </div>

                <div className=" flex-1">
                    <div className=" flex-1 card-body items-center text-center">
                        <PiPhoneCallDuotone className=" text-5xl" />
                        <h2 className="card-title">Call Us</h2>
                        <p className=" text-sm text-gray-500 font-semibold">Mobile: (+61) - 1990 - 6886 </p>
                        <p className=" text-sm text-gray-500 font-semibold">Hotline: 1800 - 1102</p>

                    </div>
                </div>
                <div className=" flex-1">
                <div className=" flex-1 card-body items-center text-center">
                        <BiMailSend className=" text-5xl" />
                        <h2 className="card-title">Mail Us</h2>
                        <p className=" text-sm text-gray-500 font-semibold">Info : ask@domain.com </p>
                        <p className=" text-sm text-gray-500 font-semibold">Support : wearehere@domain.com</p>

                    </div>
                </div>

            </div>

            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactUs;