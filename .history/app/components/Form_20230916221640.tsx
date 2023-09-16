"use client";
import { postEntry } from "../action";
import prisma from "../db";

async function getEntries (){
    const data = await prisma.feedback.findMany({
        take:50,
        orderBy: {
            created_at: "desc",
        }
    })
    return data
}

export default function Form() {
  return (
    <form
      action={async (formData) => {
        await postEntry(formData);
      }}
      className="relative flex items-center text-sm mb-5"
    >
      <input
        type="text"
        placeholder="Your message..."
        name="entry"
        required
        className="pl-4 pr-32 py-3 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark: bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <button
        type="submit"
        className="flex items-center justify-center absolute right-2 mt-1 font-medium h-9 bg-blue-500/30 text-neutral-900 dark:text-neutral-100 rounded w-20"
      >
        SEND
      </button>
    </form>
  );
}
