import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <h2>Technology Blog</h2>
        </Link>
      </div>
    </header>
  );
}
