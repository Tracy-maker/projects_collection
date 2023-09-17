// Import Prisma
import { prisma } from "./db";

// Define the async function
export async function postEntry(formData: FormData) {
  try {
    const data = await prisma.feedback.create({
      data: {
        message: formData.get('entry') as string,
        username: "ydlvns",
      },
    });

    // Return or handle the result as needed
    return data;
  } catch (error) {
    // Handle any errors
    console.error("Error creating feedback:", error);
    throw error; // Rethrow the error or handle it appropriately
  }
}
