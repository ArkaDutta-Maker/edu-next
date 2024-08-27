export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto max-w-7xl px-6 pb-6 flex-grow ">
      {children}
    </main>
  );
}
