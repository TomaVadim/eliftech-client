import { Header } from "@/components/header/header";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <section className="pt-28 pb-20">{children}</section>
    </>
  );
}
