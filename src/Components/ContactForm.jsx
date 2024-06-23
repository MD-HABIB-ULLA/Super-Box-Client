import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2';


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x9lp7bv', 'template_opoyvwp', form.current, 'vr9YnvxBBgXK5seq9')
            .then((result) => {
                console.log(result);
                if (result.status === 200) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Massage send successfully"
                    });
                    e.target.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (

        <div className=' max-w-5xl mx-auto px-10 py-10'>
           
            <form ref={form} onSubmit={sendEmail} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
                <div className='flex flex-row mb-6 gap-5'>
                    <div className=" flex-1">
                        {/* <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label> */}
                        <input type="text" name="from_name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" />
                    </div>
                    <div className=" flex-1">
                        {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                        <input type="email" name="from_email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                    </div>
                </div>
                <div className="mb-6">
                    {/* <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}
                    <textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" value="Send" className="text-white bg-gray-700 hover:bg-gray-800 w-full focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 block">Send message</button>
            </form>

        </div>



    );
};

export default ContactForm;