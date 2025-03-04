import CategotryNewsScreen from "@/screens/CategotryNewsScreen";
import React from "react";

const Page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;

  return (
    <>
      <CategotryNewsScreen slug={slug} />
    </>
  );
};

export default Page;
