"use server";

import { API_URL } from "@/app/constants/api";
import { getErrorMessage } from "@/app/utils/errors";
import { post } from "@/app/utils/fetch";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
