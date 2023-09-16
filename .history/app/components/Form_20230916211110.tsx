export default function Form() {
  return (
    <form className="relative flex items-center text-sm mb-5">
      <input type="text" placeholder="Your message..." name="entry" require />
    </form>
  );
}
