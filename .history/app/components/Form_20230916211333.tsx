export default function Form() {
  return (
    <form className="relative flex items-center text-sm mb-5">
      <input
        type="text"
        placeholder="Your message..."
        name="entry"
        required
        className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md"
      />
    </form>
  );
}
