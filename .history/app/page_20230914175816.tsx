import Image from "next/image";
import myImage from "../utils/1.JPG";

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          HOME
        </h1>
      </div>
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            alt="picture of my"
            src={myImage}
            width={1260}
            height={750}
            className="h-48 w-48 rounded-full object-cover object-top"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Yingxin Zhang
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
           Hey I an a frontend developer
          </p>
          <div className="flex space-x-5 pt-6">
<a href="" target="_blank" ></a>
          </div>
        </div>
      </div>
    </div>
  );
}