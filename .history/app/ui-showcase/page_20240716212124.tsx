import Image from "next/image";
import { client } from "../lib/sanity";

type Showcase = {
  title: string;
  overview: string;
  description: string;
  link: string;
  githubLink: string;
  _id: string;
  imageUrl: string;
};

async function getUIShowcases() {
  const query = `*[_type == "uiShowcase"] {
    title,
    overview,
    description,
    link,
    githubLink,
    _id,
    "imageUrl": image.asset->url,
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function UIShowcasePage() {
  const data = await getUIShowcases();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          UI Showcase
        </h1>
      </div>
      <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 pt-8">
        {data.map((showcase) => (
          <article
            key={showcase._id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="relative h-56 w-full">
              <Image
                fill
                src={showcase.imageUrl}
                alt={`Image of ${showcase.title}`}
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {showcase.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {showcase.overview}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {showcase.description}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={showcase.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  Visit Website
                </a>
                <a
                  href={showcase.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
