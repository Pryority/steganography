import Link from "next/link";
import Head from "next/head";
import paperclip from "../images/paperclip.png";
import command from "../images/command.png";
import { Layout } from "../components";
import { Header } from "../components";
import { Footer } from "../components";


export default function Home() {
  return (
    <div className={"flex flex-col w-full justify-start items-center min-h-screen"}>
      <Head>
        <title>Steganography</title>
        <meta name="description" content="Steganography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={""}></div>
      <h2 className={"font-light text-center"}>
          Step 1: To get started click on any button below
      </h2>
        
      <Layout className={"grid grid-cols-2 w-full justify-between md:justify-center items-between relative"}>
        <div className="absolute flex w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <Link href="/encrypt">
              <div className={"w-full h-screen cursor-pointer bg-teal-600 hover:bg-teal-500 transition-all ease-in-out duration-200 relative flex flex-col overflow-clip justify-center items-center"}>
                <div className="flex flex-col items-center w-full h-full justify-center text-teal-50 hover:text-teal-900 hover:scale-105 transition-all ease-out duration-200">
                  <span className="md:text-xl font-bold uppercase">{"Encrypt"}</span>
                </div>
              </div>
            </Link>
            {/* <p>Decrypts your messages from stego images and audios.</p> */}
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <Link href="/decrypt">
              <div className={"w-full h-screen cursor-pointer bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-200 relative flex flex-col overflow-clip justify-center items-center"}>
                <div className="flex flex-col items-center w-full h-full justify-center hover:scale-105 text-red-50 hover:text-red-900  transition-all ease-out duration-200">
                  <span className="md:text-xl font-bold uppercase">{"Decrypt"}</span>
                </div>
              </div>
            </Link>
            {/* <p>Decrypts your messages from stego images and audios.</p> */}
          </div>
        </div>
      </Layout>
    </div>
  );
}
