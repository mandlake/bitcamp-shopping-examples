"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div className="flex flex-col gap-[0.5vh]">
          <div className="text-[var(--color-Harbor-firth)] bg-[var(--color-Harbor-first)] flex flex-col justify-center items-center align-middle w-[41.53vw] h-[18.85vh]">
            <h1 className="font-normal text-[6.948vw] m-[4.539vh]">Lawmate</h1>
          </div>
          <div className=" justify-start flex flex-col gap-[0.5vh]">
            <div className="bg-[var(--color-Harbor-firth)] w-[41.53vw] hover:bg-gradient-to-r from-[var(--color-Harbor-first)] to-[var(--color-Harbor-firth)] transition duration-500 ease-in-out px-[2vw]">
              <button
                onClick={() => router.push(`/pages/users/join`)}
                className="text-[var(--color-Harbor-second)] hover:text-[var(--color-Harbor-firth)] transition duration-500 ease-in-out"
              >
                회원가입 -&gt;
              </button>
            </div>
            <div className="bg-[var(--color-Harbor-firth)] w-[41.53vw] hover:bg-gradient-to-r from-[var(--color-Harbor-first)] to-[var(--color-Harbor-firth)] transition duration-500 ease-in-out px-[2vw]">
              <button
                onClick={() => router.push(`/pages/users/login`)}
                className="text-[var(--color-Harbor-second)] hover:text-[var(--color-Harbor-firth)] transition duration-500 ease-in-out"
              >
                로그인 -&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
