
import { getSession } from "../../actions"
import { redirect } from "next/navigation"
import { changePremium } from "../../actions"

async function ProfilePage() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login")
  }


  return (
    <div className="profile">
      <h1>Profil Page</h1>
      <p>Welcome <b>{session.username}</b></p>
      <span>you are a: <b>{session.isPremium ? "Premium" : "free"}</b> member</span>
      <form action={changePremium}>
        <button>{session.isPremium ? "Cancel Premium" : "Upgrade"}</button>
      </form>
    
    </div>
  )
}

export default ProfilePage
