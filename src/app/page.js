import Link from "next/link";

export default function Home()
{
  return(
    <main className="w-full p-3">
      <div className="w-full flex justify-evenly">
        <div className="flex flex-col gap-y-3 w-4/12">
          <strong className="w-[147px]">Hello! I'm Nelson, a photographer</strong>
          <p>A photographer is a person who captures and creates images using a camera. Photography is both a science and an art, requiring technical skill and artistic vision. Photographers use their knowledge of light, composition, and perspective to create images that convey emotions, tell stories, or simply capture moments in time.</p>
          <Link href="/about" className="active">More About Me</Link>
        </div>
        <div></div>
      </div>
    </main>
  );
}