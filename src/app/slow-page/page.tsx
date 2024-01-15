export default async function SlowPage() {
  const TIMEOUT_SECONDS = 10;
  await new Promise((resolve) => setTimeout(resolve, TIMEOUT_SECONDS * 1000));

  return (
    <main>
      <h1>Slow page</h1>
      <p>
        {new Date().toISOString()} in {TIMEOUT_SECONDS} seconds
      </p>
    </main>
  );
}
