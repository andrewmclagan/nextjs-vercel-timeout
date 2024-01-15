import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div>
        <h1>Vercel fallback timeout</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/fallback-to-slow">fallback-to-slow-page</Link>
          </li>
          <li>
            <Link href="/slow-page">slow-page</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
