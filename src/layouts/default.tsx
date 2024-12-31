import { Link } from "@nextui-org/link";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      {/* Botón en la parte superior */}
      <header className="flex items-center justify-start bg-gray-100 p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded"></button>
      </header>

      {/* Estructura principal: Sidebar y contenido */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-200 p-4">
          <ul>
            <li className="py-2">Opción 1</li>
            <li className="py-2">Opción 2</li>
            <li className="py-2">Opción 3</li>
          </ul>
        </aside>

        {/* Contenido */}
        <main className="flex-grow bg-gray-50 p-6">{children}</main>
      </div>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center py-3 bg-gray-100">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </Link>
      </footer>
    </div>
  );
}
