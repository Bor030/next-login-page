import Link from "next/link"
import LogoutForm from "./logoutForm"
import { getSession } from "../actions"

const Navbar = async () => {
    const session = await getSession();

    console.log(session)
    return (
        <nav>

        <Link href="/">About</Link>
        { session.isLoggedIn && <Link href="/profile">Profile</Link>}
        <Link href="/premium">Premium</Link>
        { !session.isLoggedIn && <Link href="/login">Login</Link>}
        {session.isLoggedIn && <LogoutForm/>}

        </nav>
    )
}

export default Navbar