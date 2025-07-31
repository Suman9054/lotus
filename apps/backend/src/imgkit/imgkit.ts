import ImageKit from "imagekit";

const imageKit = new ImageKit({
  publicKey: process.env.Public_key as string,
  privateKey: process.env.Private_key as string,
  urlEndpoint: process.env.Url_endpoint as string,
});

export async function uploadImage(file: Buffer, user_name: string) {
  try {
    const response = await imageKit.upload({
      file: file, // Buffer or base64 encoded string
      fileName: `${user_name}-${Date.now()}.jpg`, // Unique file name
      folder: "/avatars", // Optional folder path
    });

    return response;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}
