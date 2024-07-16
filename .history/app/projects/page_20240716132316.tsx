import Image from "next/image";
import { client } from "../lib/sanity";

interface Data {
  title: string;
  overview: string;
  description: string;
  link: string;
  githubLink: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] {
    title,
      overview,
      description,
      link,
      githubLink,
      _id,
      "imageUrl": image.asset->url
    }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Projects() {
  const data: Data[] = await getProjects();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Projects
        </h1>
      </div>

      <div className="grid gap-8 sm:gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 pt-8">
        {data.map((project) => (
          <article
            key={project._id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="relative h-56 w-full">
              <Image
                fill
                src={project.imageUrl}
                alt={`Image of ${project.title}`}
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {project.overview}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  Visit Website
                </a>
                <a
                  href={project.githubLink}
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
