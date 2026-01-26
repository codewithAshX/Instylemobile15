"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="mb-8 text-sm text-gray-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const label =
            segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={href} className="flex items-center gap-2">
              <span>/</span>
              {index === segments.length - 1 ? (
                <span className="font-medium text-gray-900">
                  {label}
                </span>
              ) : (
                <Link href={href} className="hover:text-emerald-600">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
