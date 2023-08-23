import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Logo from '@/pictures/Logo.png'
import { Input } from '@/components/ui/input'

import { useRouter } from 'next/router';
import { Cart, Search } from './icons';



const Navbar = () => {

    
  return (

    <>
    <header className='w-full px-32 py-10 font-medium flex items-center justify-between'>

        <nav>

            <Image src={Logo} width={150} height={150} alt='logo'/>
        </nav>

        <nav className='mr-[10%]'>
            <Link href="/" title="Home" className='mr-6 text-lg'>
                Female
            </Link>
            <Link href="/about" title="About" className='mx-6 text-lg'>Male</Link>
            <Link href="/projects" title="Projects" className='mx-6 text-lg'>Kids</Link>
            <Link href="/articles" title="Articles" className='ml-6 text-lg'>All Products</Link>
            
        </nav>

        <nav className='flex relative -left-20'>
            <div className='text-lg pt-1'><Search/></div>
            <Input type='text' placeholder='What are you looking for' className=' border-0 pl-0 ml-1 active:border-2 hover:border-2 text-sm rounded-2xl'/>

        </nav>

        <nav>
            <div className='text-2xl'>
            <Cart/>
            </div>

        </nav>

        

       

       


    </header>
    
    </>
  )
}

export default Navbar;