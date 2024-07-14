import Image from "next/image";
import myImage from "./utils/1.png";

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
            src="https://i.ibb.co/MRHHtS5/Wechat-IMG7.jpg" 
            width={700}
            height={500}
            className="h-52 w-44  rounded-lg object-cover object-top"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Yingxin Zhang
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            Hey I am a Front-end developer
          </p>
          <div className="flex space-x-5 pt-6">
            <a href="https://github.com/Tracy-maker" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-blue-500"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yingxin-zhang-ba1028212/"
              target="_blank"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-blue-500"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>

            <a href="mailto:ydlvns@gmail.com" target="_blank">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-8 h-8 text-blue-500"
              >
                <path d="M4 4a3 3 0 00-3 3v6h6V7a3 3 0 00-3-3zm0-1h8a4 4 0 014 4v6a1 1 0 01-1 1H1a1 1 0 01-1-1V7a4 4 0 014-4zm2.646 1A3.99 3.99 0 018 7v6h7V7a3 3 0 00-3-3H6.646z" />
                <path d="M11.793 8.5H9v-1h5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 012 0z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="prose max-w-none prose-lg pt-8 pb-7 leading-loose dark:prose-invert xl:col-span-2">
        <p>🌟 Junior Frontend Enthusiast Eager to Contribute! 🪄</p>
<p>
  I&apos;m a budding magician in the world of web development, and I&apos;m
  passionate about crafting web experiences that are not only functional but also visually appealing. I&apos;m currently honing my skills in JavaScript, React.JS, Tailwind, CSS, Firebase... and I&apos;m excited about the journey ahead. 🌐✨
</p>
<p>
  What sets me apart is my enthusiasm for collaboration and growth.
  I thrive in team settings, and I&apos;m always eager to absorb
  knowledge from experienced developers. I may be new to the field,
  but I&apos;m a quick learner and a diligent worker, ready to
  contribute to projects with a fresh perspective. 🧙‍♂️🚀
</p>
<p>
  Motivated and detail-oriented Full Stack Developer with extensive experience in front-end and back-end web application development. Proficient in TypeScript (React), AWS, and Node.js. Highly skilled in building secure, scalable, and reliable code across various platforms. Passionate about software development with significant expertise in JavaScript frameworks, CI/CD, TDD, and Cloud technologies. Demonstrated success in agile development environments, consistently delivering projects on time. Additionally, I have a strong background in UI design and design skills using Figma.
</p>
<p>
  If you&apos;re in search of a junior teammate for your web
  development adventures, someone who&apos;s eager to add a touch of
  magic to your projects while growing alongside you,
  I&apos;m here and ready to embark on this exciting journey of web
  development together. Let&apos;s create some enchanting digital
  experiences! 🌌✨
</p>


        </div>
      </div>
    </div>
  );
}
