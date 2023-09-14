import Image from "next/image";

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
            src="https://images.pexels.com/photos/18036725/pexels-photo-18036725/free-photo-of-food-nature-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />     </div>
      </div>
    </div>
  );
}
