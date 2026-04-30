"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const EditProfileRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/MyProfile/Edit");
  }, [router]);

  return null;
};

export default EditProfileRedirect;