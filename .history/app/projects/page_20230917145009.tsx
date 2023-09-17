import { client } from "../lib/sanity";

interface Data {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] {
    title,
      overview,
      link,
      _id,
      "imageUrl": image.asset->url
    }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Projects() {
  const data = await getProjects();
  console.log(data);
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Projects
        </h1>
      </div>
    </div>
  );
}
