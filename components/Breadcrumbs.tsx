import Link from "next/link";
import JsonLd, { breadcrumbList } from "@/components/JsonLd";

export type Crumb = { name: string; url: string };

/** Sichtbare Breadcrumb-Navigation inkl. BreadcrumbList-Schema. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav className="crumbs" aria-label="Brotkrumen">
        {items.map((c, i) => (
          <span key={c.url} style={{ display: "inline-flex", gap: "0.4rem", alignItems: "center" }}>
            {i > 0 && <span className="crumbs__sep" aria-hidden>/</span>}
            {i < items.length - 1 ? (
              <Link href={c.url}>{c.name}</Link>
            ) : (
              <span aria-current="page">{c.name}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd data={breadcrumbList(items)} />
    </>
  );
}
