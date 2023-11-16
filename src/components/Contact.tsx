import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";

export default async function Contact() {

  return (
    <address className="flex absolute bottom-2 justify-center w-full">
      <Link href="https://github.com/diegogreiner" className="flex items-center gap-4" target="_blank">
        <p className="text-light dark:text-dark">Acesse o perfil do criador</p>
        <Avatar>
          <AvatarImage src="https://github.com/diegogreiner.png" />
          <Skeleton>
            <AvatarFallback className="w-10 h-10 bg-slate-600 rounded-full text-center">DG</AvatarFallback>
          </Skeleton>
        </Avatar>
      </Link>
    </address>
  )
}
