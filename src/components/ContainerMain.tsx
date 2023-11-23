import { ReactNode } from 'react'

interface ContainerMainProps {
  children: ReactNode
}

export default function ContainerMain({ children }: ContainerMainProps) {
  return (
    <main className="bg-bgLight dark:bg-bgDark h-full w-full p-8">
      <div className="h-full mx-auto flex gap-8">{children}</div>
    </main>
  )
}
