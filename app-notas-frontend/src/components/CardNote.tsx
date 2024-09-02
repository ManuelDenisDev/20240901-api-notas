type Props = {
  title: string;
  description: string;
  onEdit: () => void;
  onRemove: () => void;
};

export default function CardNote({
  title,
  description,
  onEdit,
  onRemove,
}: Props) {
  return (
    <article className="p-4 flex gap-4 aspect-square flex-col justify-between shadow-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <main className=" flex flex-col items-start gap-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text text-gray-500 text-left">{description}</p>
      </main>
      <footer className="flex justify-center gap-4">
        <button
          onClick={(event) => {
            event.preventDefault();
            onEdit();
          }}
          type="button"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Editar
          </span>
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            onRemove();
          }}
          type="button"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Eliminar
          </span>
        </button>
      </footer>
    </article>
  );
}
