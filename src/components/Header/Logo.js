import Image from "next/image";
import Link from "next/link";
import profileImage from '@/public/profile/profile-img.png'

import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
    <div className= "w-12 md:w-16 rounded-full overflow-hidden border border-solid border-orange-500 dark:border-gray  mr-2 md:mr-4">
        <Image src={profileImage} alt="logo" className="w-full h-auto rounded-full" sizes="20vw" priority/>
    </div>
    <span className="font-bold dark:font-semibold text-lg md:text-xl">eduPro</span>
    </Link>
    
  )
}

export default Logo