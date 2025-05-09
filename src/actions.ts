"use server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData, defaultSession } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import type { LoginFormState } from "./lib";


const username = "Alex";

let isPremium = true;

export const getSession = async () => {
  
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
 
if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn
  }
 
  return session;
}; 


  export const login = async (
    prevState: LoginFormState,
    formData: FormData
  ): Promise<LoginFormState> => {



   const session = await getSession();
   const formUsername = formData.get("username");
  


// Check if the username and password are correct in DB
// const user = await db.getUser({username, password});


   if (formUsername !== username) {

    return {
        error: "Invalid username",
      };
   }
    session.userId="1";
    session.username = formUsername;
    session.isPremium = isPremium;
    session.isLoggedIn = true;
   
    await session.save();
    redirect("/profile");

   }


export const logout = async () => {

    const session = await getSession();
    session.destroy();
    redirect("/login");
};

export const changePremium = async () => {
  const session = await getSession();

  isPremium = !session.isPremium;

  session.isPremium = isPremium;
  await session.save();
  revalidatePath("/profile");
};

