import { getSession } from "../../actions"
import { redirect } from "next/navigation"
import Link from "next/link"

const PremiumPage = async () => {

   const session = await getSession();

   if (!session.isLoggedIn) {
    redirect("/")
   }

   if (!session.isPremium) {
    return(
        <div className="notpremium">
        <h1>Only premium members</h1>
        <Link href="/profile">
        go to profile to upgrade</Link> 
        </div>
        )
   }
    return (
      <div className="premium">
        <h1>Premium Page</h1>
        <p>welcome to Premium Page</p>
      </div>
    )
  }
  
  export default PremiumPage