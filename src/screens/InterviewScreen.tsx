import React from "react";
import { Interview } from "@/utils/types";
import Link from "next/link";
import { BASE_URL } from "@/utils/const";

// Convert YouTube URL to embedded URL format
const convertToEmbedUrl = (videoLink: string): string => {
  const videoId = videoLink.split("v=")[1]?.split("&")[0]; // Extract VIDEO_ID
  return videoId ? `https://www.youtube.com/embed/${videoId}` : videoLink;
};

const InterviewScreen = async () => {
  try {
    const data = await fetch(`${BASE_URL}/interviews`);
    const interviewData = await data.json();
    const interviews = interviewData.data;

    return (
      <>
        <h1 className="p-4 text-4xl font-bold text-gray-900">
          Latest Interviews
        </h1>
        <div className="p-4">
          <div className="space-y-4">
            {interviews.map((interview: Interview) => (
              <div className="border-2" key={interview._id}>
                <Link
                  className="block rounded border shadow-sm transition hover:bg-gray-50"
                  href={`/interviews/${interview._id}`}
                >
                  <div
                    key={interview._id}
                    className="flex flex-col items-start md:flex-row md:space-x-4"
                  >
                    {/* Video Embed */}
                    <div className="relative h-64 w-full flex-shrink-0 md:w-64">
                      {interview.videoLink ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={convertToEmbedUrl(interview.videoLink)}
                          title={interview.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div className="flex items-center justify-center text-gray-500">
                          <p>No video available</p>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex-1 text-left md:mt-0">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {interview.title}
                      </h2>
                      <p className="mb-2 text-xs italic text-gray-500">
                        Published on: {interview.date}
                      </p>
                      <p className="line-clamp-2 text-sm text-gray-600">
                        {interview.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch interviews:", error);
    return (
      <div className="p-4 text-center text-red-500">
        <p>Failed to load interviews. Please try again later.</p>
      </div>
    );
  }
};

export default InterviewScreen;
