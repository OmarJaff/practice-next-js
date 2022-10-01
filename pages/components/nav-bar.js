import Link from 'next/link';
import {useRouter} from 'next/router';

export default function NavBar({home}) 
{
    const router = useRouter();

    return (
<div>
  <div className="sm:hidden">
    <label for="tabs" className="sr-only">Select a tab</label>
     <select id="tabs" name="tabs" className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
      <option>My Account</option>

      <option>Company</option>

      <option selected>Team Members</option>

      <option>Billing</option>
    </select>
  </div>
  <div className="hidden sm:block">
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex" aria-label="Tabs">
          <Link href='/'>
         <a href="#"  
          
         
       className={`${router.pathname === '/' ? 'border-indigo-400' : ''} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}>Home</a>
            </Link>

            <Link href="/posts/pre-rendering">
        <a href="#"       className={`${router.pathname === '/posts/pre-rendering'  ? 'border-indigo-400' : ''} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}>First Page</a>
            </Link>
       </nav>
    </div>
  </div>
</div>
    )
}

