import NavBar from '../components/nav-bar';

import Link from 'next/link';

export default function Layout({children, home}) 
{
        const siteTitle = "Omar Jaff";

    return (
     <>
        <script src="https://cdn.tailwindcss.com" ></script>
        <div className="mx-auto max-w-6xl container">
        <NavBar>
        </NavBar>
        <main>
        {children}
        </main>
        {
            !home && (
                <div >
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            )
        }
    </div>
    </>
    )
}