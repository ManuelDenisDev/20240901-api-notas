type Props = {
  children: React.ReactNode;
};

export default function CardNoteGrid({ children }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {children}
    </section>
  );
}
