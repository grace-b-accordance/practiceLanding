import Image from "next/image";

function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

export default function HOME() {
return (
  <div
  className="relative h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/background.png')" }}>
    <div className="flex-1 flex flex-col justify-center max-w-lg px-8 pt-8">
          <h1 className="text-4xl font-semibold leading-tight">
            Frontier<br /> Intelligence for<br /> Accounting
          </h1>
          <p className="mt-6 text-gray-200">
            The AI platform for world-class tax, audit, and CPA teams. Multi-agent AI support, summarization,
            and research for Tax, Audit, and CPA Teams.
          </p>

          <div className="mt-8">
            <button className="bg-white text-black px-6 py-3 rounded font-medium flex items-center gap-2 hover:bg-gray-200">
              Book a Demo <span className="text-lg">→</span>
            </button>

            <p className="mt-4 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Announcing our $50 million series B
            </p>
          </div>
        </div>
        {/* Marquee at the bottom left */}
        <div className="absolute bottom-4 right-4 w-72 overflow-hidden">
          <div className="marquee whitespace-nowrap flex">
            {/* Duplicate the items for seamless looping */}
            <div className="flex">
              <span className="text-white mx-2"><p>hello</p></span>
              <span className="text-white mx-2"><p>eye</p></span>
              <span className="text-white mx-2"><p>am</p></span>
              <span className="text-white mx-2"><p>max emanuel</p></span>
            </div>
            <div className="flex">
              <span className="text-white mx-2"><p>hello</p></span>
              <span className="text-white mx-2"><p>eye</p></span>
              <span className="text-white mx-2"><p>am</p></span>
              <span className="text-white mx-2"><p>max emanuel</p></span>
            </div>
          </div>
        </div>
  </div>
);
}