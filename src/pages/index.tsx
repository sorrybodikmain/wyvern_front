import Head from 'next/head'
import Sidebar from "@/components/sidebar/Sidebar";
import Chat from "@/components/chat/Chat";
export default function Home() {
  return (
    <>
      <Head>
        <title>Wyvern</title>
        <meta name="description" content="Wyvern - Home"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
        <>
            <div className="h-screen w-full flex antialiasing text-gray-200 bg-gray-900 overflow-hidden">
                <div className="flex-1 flex flex-col">
                    <main className="flex-grow flex flex-row min-h-0">
                        <Sidebar/>
                        <Chat/>
                    </main>
                </div>
            </div>
        </>

    </>
  )
}
