import axios from "@/core/axios";
import * as Api from "@/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const checkAuth = async () => {
  try {
    // Retrieve the token from cookies
    const cookieStore = cookies();
    const token = cookieStore.get("_token")?.value;

    if (!token) {
      throw new Error("No token found");
    }
    // const apiBase =
    //   typeof window === "undefined"
    //     ? process.env.API_URL_INTERNAL
    //     : process.env.NEXT_PUBLIC_API_URL;
    // axios.defaults.baseURL = apiBase;
    // TODO
    axios.defaults.withCredentials = true;
    axios.defaults.headers.Authorization = "Bearer " + token;
    await Api.auth.getMe();
    return true;
  } catch (err) {
    redirect("/auth");
  }
};
