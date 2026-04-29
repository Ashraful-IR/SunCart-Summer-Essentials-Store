import Link from "next/link";
import React from "react";

const LogPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Log In Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        Please enter your credentials to log in. If you dont have an account, you can <Link href="/Registration" className="text-blue-500 hover:underline">
          register for one
        </Link>.
      </p>
    </div>
  );
};

export default LogPage;
