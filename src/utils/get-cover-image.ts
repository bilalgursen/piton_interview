export default async function getCoverImage(filename: string) {
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
