import Link from "next/link";
import { useRouter } from "next/router";
import { NAV_ITEMS } from "../lib/constants";

type NavItem = typeof NAV_ITEMS[0];

export default function Container({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function navItem(item: NavItem, index: number) {
    return (
      <li key={index}>
        <Link href={item.href}>
          <a
            className={`hover:text-black ${
              router.asPath === item.href
                ? "font-semibold text-primary-500 hover:text-primary-500"
                : "text-gray-600"
            }`}
          >
            {item.name}
          </a>
        </Link>
      </li>
    );
  }
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex max-w-4xl h-screen flex-col">
        <div className="w-full flex justify-center">
          <nav className="w-full py-4 px-8">
            <div className="flex justify-between">
              <ul className="flex text-sm space-x-2">
                {NAV_ITEMS.map(navItem)}
              </ul>
              <Link href="/login">
                <a className="bg-primary-500 rounded text-white py-1 px-4 text-sm border border-primary-500 hover:bg-white hover:text-pink-500">
                  Sign in
                </a>
              </Link>
            </div>
          </nav>
        </div>
        <main className="mb-auto px-8">{children}</main>
        <footer>
          <div className="px-8 py-2 flex flex-col space-y-2">
            <hr />
            <Link href="/">
              <a className="text-gray-800 text-sm">Justin Solo</a>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
