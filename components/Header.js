import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="headerComponentContainer">
        <Link href="/" passHref>
          <h2>The Coding Wizard</h2>
        </Link>
        <span>Welcome to my blog where we talk tech and code</span>
      </div>
    </header>
  );
}
