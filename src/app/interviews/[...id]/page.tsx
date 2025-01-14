import React from "react";
import { BASE_URL } from "@/utils/const";
// import Image from "next/image";
import { Interview } from "@/utils/types";

const page = async ({ params }: { params: Promise<{ id: string[] }> }) => {
  const { id } = await params;

  const data = await fetch(`${BASE_URL}/interviews/${id}`);
  const interviewsData = await data.json();
  const interview: Interview = interviewsData.interview;

  const convertToEmbedUrl = (videoLink: string): string => {
    const videoId = videoLink.split("v=")[1]?.split("&")[0]; // Extract VIDEO_ID
    return videoId ? `https://www.youtube.com/embed/${videoId}` : videoLink;
  };

  const embeddedLink = convertToEmbedUrl(interview.videoLink);
  return (
    <>
      <div className="mx-auto max-w-4xl p-4">
        {/* Interview Title */}
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          {interview.title}
        </h1>

        <div className="mb-6" style={{ maxWidth: "100%" }}>
          <iframe
            src={embeddedLink}
            style={{
              width: "100%",
              height: "200px", // Default height
            }}
            className="md:!h-[350px] md:!w-[600px] lg:!h-[400px] lg:!w-[840px]"
            title="Example Website"
          ></iframe>
        </div>

        {/* Interview Date */}
        <p className="mb-4 text-sm italic text-gray-500">
          Published on:{" "}
          <span className="font-semibold text-gray-800"> {interview.date}</span>
        </p>

        {/* Video Link */}
        <a
          href={interview.videoLink}
          className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600"
        >
          {interview.videoLink}
        </a>

        {/* Interview Description */}
        <p className="mb-4 mt-6 text-lg text-gray-700">
          {interview.description}
        </p>
      </div>
    </>
  );
};

export default page;
