import Form from "../components/Form";
import prisma from "../db";

async function getEntries() {
  const data = await prisma.feedback.findMany({
    take: 50,
    orderBy: {
      created_at: "desc",
    },
  });
  return data;
}

export default async function feedback() {
  const data = await getEntries();
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tighter text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Feedback
        </h1>
      </div>
      <div className="w-full">
        <div className="max-w-[800px] mx-auto mt-8">
          <Form />
        </div>
      </div>
    </div>
  );
}
