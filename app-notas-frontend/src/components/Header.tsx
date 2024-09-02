import HeaderActionButton from "./HeaderActionButton";
import HeaderTitle from "./HeaderTitle";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <HeaderTitle />
      <HeaderActionButton />
    </header>
  );
}
