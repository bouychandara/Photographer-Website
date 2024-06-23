import Image from "next/image";
import Link from "next/link";

export default function Project()
{
    return(
        <main className="w-full py-3">
            <div className="flex w-full justify-center p-3">
                <div className="flex w-10/12">
                    <div className="flex flex-col gap-y-3 w-1/2">
                        <p className="text-2xl font-semibold">Project</p>
                        <p className="text-justify">A project is a planned undertaking with a defined beginning and end, conducted by people to meet specific goals and objectives within certain constraints like time, budget, and quality. It is a temporary endeavor designed to produce a unique product, service, or result.</p>
                    </div>
                    <div className="w-1/2 flex justify-end pr-9">
                        <Image src="/images/image_1.png" alt="logo" width={150} height={150} loading="lazy" className=""/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-3 items-center">
                <div className="flex w-11/12 bg-[#dfead2] rounded-lg py-3 px-5">
                    <div className="w-1/2 flex flex-col gap-y-2">
                        <small className="text-[#248900] text-sm">Product Photography</small>
                        <p className="text-xl">Paris Secret</p>
                        <p className="text-justify">A photographer is a person who captures and creates images using a camera. Photography is both a science and an art, requiring technical skill and artistic vision. Photographers use their knowledge of light, composition, and perspective to create images that convey emotions, tell stories, or simply capture moments in time.</p>
                        <small>
                            <Link href="/project" className="capitalize text-[#ff9900]">View project</Link>
                        </small>
                    </div>
                    <div className="flex w-1/2 justify-center">
                        <div className="flex gap-x-4 h-full">
                            <div className="flex items-end h-full">
                                <Image src="/images/image_3.png" alt="self photo" width={120} height={120} loading="lazy" className="w-auto rounded-lg object-scale-down"/>
                            </div>
                            <div className="flex items-start h-full">
                                <Image src="/images/image_4.png" alt="self photo" width={120} height={120} loading="lazy" className="w-auto rounded-lg object-scale-down"/>
                            </div>
                            <div className="flex items-end h-full">
                                <Image src="/images/image_5.png" alt="self photo" width={120} height={120} loading="lazy" className="w-auto rounded-lg object-scale-down"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 bg-[#eedfb8] rounded-lg p-3 flex">
                    <div className="w-1/2 flex flex-col gap-y-2">
                        <small className="text-sm text-[#fd0098]">Portrait</small>
                        <p className="text-xl">Oceanic Feeling</p>
                        <p className="text-justify">A photographer is a person who captures and creates images using a camera. Photography is both a science and an art, requiring technical skill and artistic vision. Photographers use their knowledge of light, composition, and perspective to create images that convey emotions, tell stories, or simply capture moments in time.</p>
                        <small>
                            <Link href="/project" className="capitalize text-[#ff9900]">View project</Link>
                        </small>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <div className="flex gap-x-4 h-full">
                            <div className="flex items-end h-full">
                                <Image src="/images/image_6.png" alt="self photo" width={125} height={125} loading="lazy" className="w-auto rounded-lg object-scale-down"/>
                            </div>
                            <div className="flex items-start h-full">
                                <Image src="/images/image_7.png" alt="self photo" width={125} height={125} loading="lazy" className="w-auto rounded-lg object-scale-down"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-end h-[50px]">
                <button className="bg-transparent px-5 py-1 rounded-md border border-solid border-[#ff003d] text-[#ff003d] hover:bg-[#ff003d] hover:text-white">View more</button>
            </div>
        </main>
    );
}