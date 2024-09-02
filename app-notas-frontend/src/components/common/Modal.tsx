type Props = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onAccept: () => void;
  onClose: () => void;
};

export default function Modal({
  title,
  children,
  isOpen,
  onAccept,
  onClose,
}: Props) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
      ></div>
      <aside className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-8 flex w-96 flex-col gap-7 z-50 bg-white rounded-lg shadow dark:bg-gray-700 ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 md:p-5 space-y-4">{children}</div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={onAccept}
              type="button"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Aceptar
              </span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Cancelar
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
