import LandingPage from "@/components/LandingPage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DeltaScope</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="h-full w-full bg-[#0D0B1A]">
      <LandingPage />
    </div>
      </main>
    </>
  );
}