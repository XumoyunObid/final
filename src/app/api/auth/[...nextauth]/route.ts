import NextAuth from "next-auth/next";
import { NextAuthOptions } from "@/config/auth-options";

const handleAuth = NextAuth(NextAuthOptions)

export {handleAuth as GET, handleAuth as POST};