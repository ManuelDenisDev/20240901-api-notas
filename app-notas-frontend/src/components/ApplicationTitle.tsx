export default function ApplicationTitle() {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Madedev
        </span>{" "}
        APP Notas
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Frontend realizado con Vite, React, TailwindCSS y TypeScript.
      </p>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Backend realizado con NodeJS, Express, MongoDB y TypeScript.
      </p>
    </div>
  );
}
