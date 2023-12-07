import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-bgSecondaryDark flex-col">
      <Image src={logo} alt="Logo" width={undefined} height={undefined} className='w-1/3 h-1/3'/>
      <div className='bg-bgSecondaryDark w-1/3 h-2'>
        <div className='loadingBar'></div>
      </div>
    </div>
  )
}