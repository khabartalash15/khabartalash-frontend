"use client";
import React, { useRef, useCallback } from "react";
import Link from "next/link";
import useFetchNews from "@/hooks/useFetchNews";
import { News } from "@/utils/types";
import { capitalizeFirstLetter } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CategoryNewsScreen = ({ slug }: { slug: string }) => {
  const capitalizedSlug = capitalizeFirstLetter(slug[0]);
  const { news, loading, error, loadMore, currentPage, totalPages } =
    useFetchNews(1, 10, capitalizedSlug);
  const router = useRouter(); // Initialize useRouter
  const observer = useRef<IntersectionObserver | null>(null);

  const lastNewsElementRef = useCallback(
    (node: HTMLAnchorElement | null) => {
      if (loading || currentPage >= totalPages) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, currentPage, totalPages, loadMore],
  );

  const handleLinkClick = (id: string) => {
    // Use router.replace to replace the current route with the new one
    router.replace(`/news/${id}`);
  };

  return (
    <>
      <div className="p-4">
        <h1 className="mb-6 text-2xl font-semibold capitalize">
          News for category: {slug}
        </h1>
        <div className="space-y-6">
          {news.map((item: News, index) => (
            <div
              key={item._id}
              className="rounded border shadow-sm transition hover:bg-gray-50"
            >
              <div
                onClick={() => handleLinkClick(item._id)} // Replace route on click
                className="cursor-pointer"
              >
                <div className="flex w-full md:gap-8">
                  <section className="relative h-[250px] w-[250px]">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </section>
                  <section>
                    <div className="mt-4 flex-1 text-left md:mt-0">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h2>
                      <p className="text-xs text-gray-500">{item.date}</p>
                      <p className="text-xs italic text-gray-500">
                        Category: {item.category}
                      </p>
                      <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          ))}
          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {!loading && error && (
            <p className="text-center text-red-500">{error}</p>
          )}
          {currentPage >= totalPages && (
            <p className="text-center text-gray-500">No more news available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryNewsScreen;
