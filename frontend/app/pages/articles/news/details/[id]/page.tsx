"use client";

import { NextPage } from "next";
import { useRouter } from "next/navigation";

const SecondDetailsIdPage: NextPage = (props: any) => {
  const router = useRouter();
  return (
    <>
      <div className="mx-[10vw]">
        <div className="flex flex-col justify-center align-middle items-center bg-[#f3f2f4] w-[80vw]">
          <p className="text-[#7c7167] m-8">2024년 5월 | 제 28호</p>
          <div className="bg-[#1b1a19] w-[70vw] h-[0.1vh]"></div>
          <h1 className="text-[#1b1a19] text-[6vw] font-bold">
            {props.params.id}번 뉴스입니다.
          </h1>
          <div className="bg-[#1b1a19] w-[70vw] h-[0.1vh]"></div>
          <div className="flex flex-wrap gap-[10vw] m-[5vw]">
            <div className="w-[20vw] bg-[#b2b1b0]">이슈</div>
            <img
              alt="news-image"
              className="w-[40vw]"
              src="data:image/jpeg;base64,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"
            />
            <div className="w-[20vw] h-[50vh] bg-[#b2b1b0]">리스크</div>
            <div className="w-[40vw] h-[50vh] bg-[#b2b1b0]">메인 내용</div>
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={() => router.push("/pages/second")}>
            원래 게시판으로 이동
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondDetailsIdPage;
