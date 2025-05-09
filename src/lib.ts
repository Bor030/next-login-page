import { SessionOptions } from "iron-session";

export interface SessionData {
   userId?: string;
   username?: string;
   img?: string;
   isPremium?: boolean;
   isLoggedIn: boolean;
   
   
}
export const defaultSession: SessionData = {

    isLoggedIn: false

};
export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "next-session",
    cookieOptions:{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 1, 
    }
}