import Form from "../components/Form";

export default function feedback() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tighter text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Feedback
        </h1>
      </div>
      <div className="w-full">
        <div className="max-w-[500px] mx-auto mt-8">
          <Form />
        </div>
      </div>
    </div>
  );
}
