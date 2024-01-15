import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default async function SlowPage() {
  const TIMEOUT_SECONDS = 120;
  await new Promise((resolve) => setTimeout(resolve, TIMEOUT_SECONDS * 1000));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="relative flex place-items-center">
        <p>{new Date().toISOString()} in {TIMEOUT_SECONDS} seconds</p>
      </div>
      <div className="relative flex place-items-center">
        <p>{uuidv4()}</p>
      </div>
    </main>
  );
}
