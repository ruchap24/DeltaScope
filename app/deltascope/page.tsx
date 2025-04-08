import Deltascope from "@/components/Deltascope";
import Head from "next/head";

export default function Deltascopepage(){
    return(
        <>
      <Head>
        <title>DeltaScope</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* ...existing code... */}
        <div className="font-[family-name:var(--font-geist-sans)] bg-[#0D0B1A]">
            <Deltascope />
        </div>
      </main>
    </>
        
    )
}