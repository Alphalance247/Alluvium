import { wrap } from "./shared";

export default function Footer() {
  return (
    <footer className="bg-[#D0D5DD] text-center py-6 text-[#667085] text-[0.85rem]">
      <div>
        &copy; <span>{new Date().getFullYear()}</span> Alluvium. Compound
        Intelligence is a book series by Taiwo Ojo.
      </div>
    </footer>
  );
}
