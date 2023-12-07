import { ReactNode } from 'react'

export default function ContainerFormAuth({ children }: { children: ReactNode }) {

  return (
    <div className='bg-bgLight dark:bg-bgDark h-full w-full flex flex-col justify-center items-center'>
      <div className='border-4 border-bgSecondaryDark w-full max-w-md gap-4 rounded-md'>
        {children}
      </div>
    </div>
  )
}
