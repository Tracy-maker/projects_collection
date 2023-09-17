"use server";

import { prisma } from "./db";

export async function postEntry(formData: FormData) {
  "use server";
  const data = await prisma.Feedback.create({
    data: {
      message: formData.get('entry') as string,
      username: "ydlvns",
    },
  });
}
