import { useState } from "react";

type Props = {
  onSearch: (value: string) => void;
};

export default function SearchInput({ onSearch }: Props) {
  const [term, setTerm] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setTerm(value);
    onSearch(value);
  }

  return (
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Buscador de notas"
      required
      value={term}
      onChange={handleChange}
    />
  );
}
