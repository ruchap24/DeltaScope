import Deltascope from "@/components/Deltascope";
import Head from "next/head";

export default function Deltascopepage(){
    return(
        <>
        <Head>
            <title>DeltaScope</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="DeltaScope - A powerful diff tool that highlights every detail with clarity while ensuring complete privacy." />
            <meta name="keywords" content="DeltaScope, diff tool, code comparison, text comparison, privacy, secure" />
            <meta name="author" content="Ruchap24" />
            <meta property="og:title" content="DeltaScope" />
            <meta property="og:description" content="A powerful diff tool that highlights every detail with clarity while ensuring complete privacy." />
            <meta property="og:image" content="/images/og-image.png" />
            <meta property="og:url" content="https://delta-scope-rucha.vercel.app/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="DeltaScope" />
            <meta name="twitter:description" content="A powerful diff tool that highlights every detail with clarity while ensuring complete privacy." />
            <meta name="twitter:image" content="/images/og-image.png" />
            <meta name="twitter:site" content="@ruchap24" />
            <meta name="twitter:creator" content="@ruchap24" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#2b5797" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
        <main className="relative px-6">
        <div className="h-full w-full bg-[#0D0B1A]">
        {/* ...existing code... */}
        <div className="text-center mb-8">
        <div className="font-[family-name:var(--font-geist-sans)] bg-[#0D0B1A]">
            <Deltascope />
        </div>
        </div>
        </div>
        </main>
      
    </>
        
    )
}