export default function Form() {
  return (
    <form className="relative flex items-center text-sm mb-5">
      <input type="text" placeholder="Your message..." name="entry" required className="pl-4 pr-32"/>
    </form>
  );
}
