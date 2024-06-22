'use client';
import Validation from "../helper/validation";
import Instagram from "../icons/instagram";
import Dribbble from "../icons/dribbble";
import Linkedin from "../icons/linkedin";
import Email from "../icons/email";

export default function Footer()
{
    function handleSubmit(e)
    {
        let p = {};
        e.preventDefault();
        const formData = new FormData(e.target);
        for(const pair of formData.entries())
        {
            p[pair[0]] = pair[1];
        }
        console.log(p);
    }

    return(
        <footer className="w-full flex px-6 bg-[#1d2128] py-3 border-0">
            <div className="w-1/2 flex justify-center items-center">
                <div className="flex flex-col justify-between h-5/6">
                    <p className="text-3xl font-semibold max-w-[16.75rem] text-white">Say hello and let's work together!</p>
                    <div className="flex flex-col gap-y-3">
                        <div className="flex gap-x-3">
                            <Instagram></Instagram>
                            <Dribbble></Dribbble>
                            <Linkedin></Linkedin>
                            <Email></Email>
                        </div>
                        <div className="flex gap-x-3 text-white">
                            <p>&copy; 2022 Brand, Inc.</p>
                            <ul className="flex list-disc gap-x-7 pl-3">
                                <li className="cursor-pointer">Privacy</li>
                                <li className="cursor-pointer">Terms</li>
                                <li className="cursor-pointer">Sitemap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <form encType="multipart/form-data" className="flex flex-col gap-y-3 w-10/12 justify-start" method="POST" onSubmit={handleSubmit} name="contact">
                    <fieldset className="border border-solid border-white rounded-md w-full">
                        <legend className="text-white font-semibold">Email</legend>
                        <input type="email" name="email" className="border-0 bg-transparent focus:border-0 focus:outline-none text-white p-2 pt-0 w-full" placeholder="your email address" onInput={Validation} required/>
                    </fieldset>
                    <fieldset className="border border-solid border-white rounded-md w-full">
                        <legend className="text-white font-semibold">Input your message</legend>
                        <textarea name="description" className="text-white border-0 bg-transparent focus:border-0 focus:outline-none p-2 pt-0 w-full h-full" placeholder="describe your project" onInput={Validation} required></textarea>
                    </fieldset>
                    <div>
                        <button type="submit" className="bg-[#e34d73] text-white p-2 rounded-md">Submit</button>
                    </div>
                </form>
            </div>
        </footer>
    );
}