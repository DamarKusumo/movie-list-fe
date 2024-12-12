'use client';
import Image from "next/image";
import { useState } from "react";
import { login } from "@/services/login";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // call login API
    const data = await login(email, password);
    if (data.toString().includes("Error:")) {
      alert("Login failed, please try again!");
    } else {
      router.push("/movies");
    }
  };

  const disabledButton = !(email && password);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-sm sm:text-base">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            className="bg-transparent border border-solid border-black/[.08] dark:border-white/[.145] rounded px-4 py-2 w-full"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="text-sm sm:text-base">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            className="bg-transparent border border-solid border-black/[.08] dark:border-white/[.145] rounded px-4 py-2 w-full"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={handleLogin}
            disabled={disabledButton}
            className={`
              rounded-full
              border
              border-solid
              border-transparent
              transition-colors
              flex
              items-center
              justify-center
              bg-foreground
              text-background
              gap-2
              ${disabledButton ? "bg-[#454545]" : "hover:bg-[#383838] dark:hover:bg-[#ccc]"}
              text-sm
              sm:text-base
              h-10
              sm:h-12
              px-4
              sm:px-5
            `}
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
}

