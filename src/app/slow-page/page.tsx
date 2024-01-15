import { cache } from "react";

const TIMEOUT_SECONDS = 5;

export const dynamic = "force-dynamic";

const getTime = cache(async (): Promise<number> => {
  await new Promise((resolve) => setTimeout(() => resolve(1), 5 * 1000));
  return new Date().getTime();
});

export default async function SlowPage() {
  const timestamp = await getTime();

  return (
    <main>
      <h1>Slow page</h1>
      <p>
        {timestamp} in {TIMEOUT_SECONDS} seconds
      </p>
    </main>
  );
}
