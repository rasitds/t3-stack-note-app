import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

export const UserButton = () => {
    const { data: session } = useSession();

    if (session) {
        return(
            <>
                <Link href="/notes">
                    <a className="border border-indigo-800 border-slate-300 hover:border-slate-400 px-3 py-2 text-slate-700 hover:bg-slate-100  hover:text-slate-900">
                    Notes
                    </a>
                </Link>
                <Link href="/notes/create">
                    <a className="border border-indigo-800 border-slate-300 hover:border-slate-400 px-3 py-2 text-slate-700 hover:bg-slate-100  hover:text-slate-900">
                        Create A Note
                    </a>
                </Link>
                <button className="border border-indigo-800 border-slate-300 hover:border-slate-400 px-3 py-2 text-slate-700 hover:bg-slate-100  hover:text-slate-900" onClick={() => signOut()}>Sign out</button>
            </>
        )
    } else {
        return(
            <>
                <button className="border border-indigo-800 border-slate-300 hover:border-slate-400 px-3 py-2 text-slate-700 hover:bg-slate-100  hover:text-slate-900" onClick={() => signIn('discord')}>Sign in with Discord</button>
                <button className="border border-indigo-800 border-slate-300 hover:border-slate-400 px-3 py-2 text-slate-700 hover:bg-slate-100  hover:text-slate-900" onClick={() => signIn('github')}>Sign in with GitHub</button>
            </>
        )
    }
}