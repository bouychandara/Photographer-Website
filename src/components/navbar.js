'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function navbar()
{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let pathname = usePathname();
    pathname = pathname.replace(/^\//, '');

    function handleActiveLink()
    {
        pathname = window.location.pathname;
        pathname = pathname.replace(/^\//, '');
        document.title = pathname.toUpperCase();
    }

    return(
        <nav className="flex items-center justify-between w-full h-[60px] shadow sticky top-0 z-10 bg-white">
            <div className="flex justify-center w-1/3">
                <strong className="text-lg">Brand Name</strong>
            </div>
            <div className="flex items-center justify-center w-2/4">
                <ul className="flex gap-x-4 text-md">
                    <li>
                        <Link href="/" className={ pathname === '' ? 'active' : '' } onClick={handleActiveLink}>Home</Link>
                    </li>
                    <li>
                        <Link href="/project" className={ pathname === 'project' ? 'active' : 'hover:active' } onClick={handleActiveLink}>Project</Link>
                    </li>
                    <li>
                        <Link href="/work" className={ pathname === 'work' ? 'active' : 'hover:active' } onClick={handleActiveLink}>Work</Link>
                    </li>
                    <li>
                        <Link href="/about" className={ pathname === 'about' ? 'active' : 'hover:active' } onClick={handleActiveLink}>About Me</Link>
                    </li>
                    <li>
                        <Link href="/blog" className={ pathname === 'blog' ? 'active' : 'hover:active' } onClick={handleActiveLink}>Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={ pathname === 'contact' ? 'active' : 'hover:active' } onClick={handleActiveLink}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}