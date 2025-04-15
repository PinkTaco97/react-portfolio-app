// Components.
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <div className="flex items-center text-current">
          <span className="text-default-600"> &copy; 2025 &nbsp;</span>
          <p className="text-primary">Nathan Robertson</p>
          <span className="text-default-600">, All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
