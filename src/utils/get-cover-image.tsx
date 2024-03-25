"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GiWhiteBook } from "react-icons/gi";

async function getCoverImage(filename: string) {
  try {
    const response = await fetch(
      "https://assign-api.piton.com.tr/api/rest/cover_image",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fileName: filename }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch cover image");
    }

    const data = await response.json();
    const coverImageUrl = data.action_product_image.url;

    return coverImageUrl;
  } catch (error) {
    console.error("Error fetching cover image:", error);
    throw error;
  }
}

export default function GetCoverImage({ filename }: { filename: string }) {
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);
  useEffect(() => {
    async function fetchCoverImage() {
      try {
        const url = await getCoverImage(filename);
        setCoverImageUrl(url);
      } catch (error) {
        // Handle error
      }
    }

    fetchCoverImage();
  }, [filename]);
  if (!coverImageUrl) {
    return (
      <div className="book-image-loading">
        <GiWhiteBook className="text-7xl" />
      </div>
    );
  }
  return (
    <Image
      src={coverImageUrl}
      alt={filename}
      width={500}
      height={500}
      className="w-full h-full object-cover"
    />
  );
}
