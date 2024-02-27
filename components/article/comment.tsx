import { AuthContext } from "@/context/auth.context";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useContext } from "react";

export default function CommentList(slug: string) {
  const { user } = useContext(AuthContext);
}
