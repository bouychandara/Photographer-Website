import Link from "next/link";
import Image from "next/image";

export default function Home()
{
  return(
    <main className="w-full p-3 flex flex-col gap-y-4">
      <div className="w-full flex justify-evenly">
        <div className="flex flex-col gap-y-3 w-4/12">
          <strong className="w-[221px] text-justify text-2xl">Hello! I'm Nelson, a photographer</strong>
          <p className="text-justify text-lg">A photographer is a person who captures and creates images using a camera. Photography is both a science and an art, requiring technical skill and artistic vision. Photographers use their knowledge of light, composition, and perspective to create images that convey emotions, tell stories, or simply capture moments in time.</p>
          <span>
            <Link href="/about" className="active capitalize">More About Me</Link>
          </span>
        </div>
        <div className="w-auto h-[350px] flex justify-end relative rounded-lg">
          <Image className="w-auto h-auto rounded-b-full object-scale-down" src="/images/image_2.png" alt="self photo" width={300} height={300} priority/>
          <Image className="top-1/2 -left-[40px] absolute object-scale-down" src="/images/image_1.png" alt="image logo" width={80} height={80} loading="lazy"/>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col items-center gap-y-3">
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
        <button className="p-2 border-2 border-solid border-[#ff003d] rounded-lg bg-transparent text-[#ff003d] hover:bg-[#ff003d] hover:text-[#fff] capitalize">Browse all projects</button>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-11/12 flex flex-col gap-y-3">
          <p className="capitalize text-2xl font-semibold">My skills</p>
          <div className="flex w-full justify-around">
            <div className="grid grid-cols-3 gap-y-5 w-11/12">
              <p className="border-b-2 border-solid border-[#bfbfbf] w-11/12 capitalize">Photography</p>
              <p className="border-b-2 border-solid border-[#bfbfbf] w-11/12 capitalize">Graphics design</p>
              <p className="border-b-2 border-solid border-[#bfbfbf] w-11/12 capitalize">Creativity</p>
              <p className="border-b-2 border-solid border-[#bfbfbf] w-11/12 capitalize">Brand identity</p>
              <p className="border-b-2 border-solid border-[#bfbfbf] w-11/12 capitalize">Copy writing</p>
              <p className="border-b-2 border-solid border-[#bfbfbf] w-11/12 capitalize">Team working</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-11/12 flex rounded-lg bg-[#edffd8]">
          <div className="w-1/2 flex justify-center items-end">
            <Image src="/images/image_8.png" alt="self photo" width={125} height={125} loading="lazy" className="w-auto rounded-lg object-scale-down"/>
          </div>
          <div className="flex flex-col w-1/2 py-3 gap-y-3 items-start">
            <strong className="text-[#ff003d] font-semibold">Testimonials</strong>
            <q className="w-10/12 text-justify">Sit veniam qui tempor ex ipsum voluptate deserunt cillum cillum excepteur elit mollit commodo fugiat enim veniam qui tempor ex ipsum voluptate</q>
            <p className="capitalize text-[#000000cd]">Name client - company</p>
            <button className="bg-transparent capitalize px-2 py-1 border border-solid border-[#ff003d] rounded-lg font-semibold text-[#ff003d] hover:bg-[#ff003d] hover:text-[#fff]">Next</button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-11/12 flex flex-col gap-y-3">
          <div className="flex justify-between items-center px-3">
            <p className="font-semibold text-2xl">Blogs</p>
            <small>
              <Link href="/blog" className="active">Explore</Link>
            </small>
          </div>
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-3 gap-x-10">
              <div className="w-[250px] shadow-md rounded-lg overflow-hidden cursor-pointer">
                <div className="h-[70%] overflow-hidden">
                  <Image src="/images/image_9.png" alt="blog photo" width={150} height={150} loading="lazy" className="w-auto object-scale-down"/>
                </div>
                <div className="h-[30%] px-2">
                  <p>Minim anim pariatur magna duis sit et dolor incididunt</p>
                  <small>16-Oct-2024</small>
                </div>
              </div>
              <div className="w-[250px] shadow-md rounded-lg overflow-hidden cursor-pointer">
                <div className="h-[70%] overflow-hidden">
                  <Image src="/images/image_10.png" alt="blog photo" width={150} height={150} loading="lazy" className="w-auto object-scale-down"/>
                </div>
                <div className="h-[30%] px-2">
                  <p>Minim anim pariatur magna duis sit et dolor incididunt</p>
                  <small>16-Oct-2024</small>
                </div>
              </div>
              <div className="w-[250px] shadow-md rounded-lg overflow-hidden cursor-pointer">
                <div className="h-[70%] overflow-hidden">
                  <Image src="/images/image_11.png" alt="blog photo" width={150} height={150} loading="lazy" className="w-auto object-scale-down"/>
                </div>
                <div className="h-[30%] px-2">
                  <p>Minim anim pariatur magna duis sit et dolor incididunt</p>
                  <small>16-Oct-2024</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}