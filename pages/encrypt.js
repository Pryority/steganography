import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Header, Layout, Footer, LoadingBar } from "../components";


export default function Encrypt() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  function renderForm() {
    if (currentStep === 0) {
      return (
        <div className="flex flex-col min-h-screen w-full items-center justify-start">
          <div className="flex flex-col w-full space-y-4 p-4">
            <label htmlFor="file" className="text-2xl font-bold tracking-wider">ENCRYPT</label>
            <div className={"flex flex-col border p-2 space-y-2"}>
              <h2 className={""}>
            Step 2.1: Drop your image below to start encrypting messages into it
              </h2>
              <input
                type="file"
                className={""}
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (!file) {
                    return;
                  }

                  setCurrentStep(currentStep + 1);

                  setFormData({
                    ...formData,
                    file,
                  });
                }}
              />
            </div>
          </div>
        </div>
      );
    }
    if (currentStep === 1) {
      return (
        <div className="flex flex-col min-h-screen w-full items-center justify-start">
          <div className="flex flex-col w-full space-y-4 p-4">
            <h2 className={""}>
            Step 2.2: Make sure it is the right image.
            </h2>
            <div className={""}>
              {
                <img
                  className={""}
                  src={URL.createObjectURL(formData.file)}
                  width={"250px"}
                />
              }
            </div>
            <div className=" flex flex-col space-y-4 justify-start items-start w-full">
              <div className="flex w-full justify-start">
                <button
                  className={"flex w-[144px] justify-center bg-yellow-500 text-yellow-900 hover:text-yellow-50 hover:border-yellow-400 hover:bg-yellow-600 transition-all ease-in-out duration-200 border-2 border-yellow-300 font-medium py-1 px-4 rounded-lg"}
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                Re-Upload
                </button>
              </div>
              <div className="flex w-full justify-start">
                <button
                  className={"flex w-[144px] justify-center bg-green-500 text-green-900 hover:text-green-50 hover:border-green-400 hover:bg-green-600 transition-all ease-in-out duration-200 border-2 border-green-300 font-medium py-1 px-4 rounded-lg"}
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (currentStep === 2) {
      return (
        <div className="flex flex-col min-h-screen w-full items-center justify-start relative">
          <div className="flex flex-col w-full h-full space-y-4 p-4 absolute">
            <h2 className={""}>Step 3: Insert your message</h2>
            <form onSubmit={() => setCurrentStep(currentStep + 1)}>
              <div className={"flex flex-col"}>
                <textarea
                  className={`${formData.message ? "outline-lime-500 " : "outline-gray-400 "} transition-all ease-in-out duration-100 border-2 outline-lime-500 rounded p-3 h-[60vh] flex w-full`}
                  placeholder="Enter the text that you want to embed in the image"
                  value={formData.message}
                  onChange={(e) => {
                    const newValue = e.target.value;

                    setFormData({
                      ...formData,
                      message: newValue,
                    });
                  }}
                />
              </div>
              <div className="mt-8 flex flex-col space-y-4 justify-start items-start w-full">
                <button
                  className={"flex w-[144px] justify-center bg-yellow-500 text-yellow-900 hover:text-yellow-50 hover:border-yellow-400 hover:bg-yellow-600 transition-all ease-in-out duration-200 border-2 border-yellow-300 font-medium py-1 px-4 rounded-lg"}
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
              Go Back
                </button>
                <button
                  className={"flex w-[144px] justify-center bg-green-500 text-green-900 hover:text-green-50 hover:border-green-400 hover:bg-green-600 transition-all ease-in-out duration-200 border-2 border-green-300 font-medium py-1 px-4 rounded-lg"}
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!formData.message}
                >
              Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div className="flex flex-col min-h-screen w-full items-center justify-start relative">
          <div className="flex flex-col w-full h-full space-y-4 p-4 absolute">
            <h2 className={""}>Step 3: Set Password</h2>
            <div className={""}>
              <input
                type="password"
                className={`${formData.password ? "outline-lime-500 " : "outline-gray-400 "} transition-all ease-in-out duration-100 border-2 outline-lime-500 rounded p-3 w-[300px]`}
                value={formData.password}
                onChange={(e) => {
                  const newValue = e.target.value;

                  setFormData({
                    ...formData,
                    password: newValue,
                  });
                }}
              />
            </div>
            <div className="mt-8 flex flex-col space-y-4 justify-start items-start w-full">
              <button
                className={"flex w-[144px] justify-center bg-yellow-500 text-yellow-900 hover:text-yellow-50 hover:border-yellow-400 hover:bg-yellow-600 transition-all ease-in-out duration-200 border-2 border-yellow-300 font-medium py-1 px-4 rounded-lg"}
                onClick={() => setCurrentStep(currentStep - 1)}
              >
            Go Back
              </button>
              <button
                className={"flex w-[144px] justify-center bg-green-500 text-green-900 hover:text-green-50 hover:border-green-400 hover:bg-green-600 transition-all ease-in-out duration-200 border-2 border-green-300 font-medium py-1 px-4 rounded-lg"}
                onClick={() => setCurrentStep(currentStep + 1)}
              >
            Finish
              </button>
            </div>
          </div>
        </div>
      );
    }

    const loadingTimer = () => {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 2000);
    };

    if (currentStep === 4) {
      const Bgcolor = "white";
      const Completed = 60;

      return (
        <div>
          <div
            className={""}
            style={{ paddingTop: "200px" }}
          ></div>
          {loadingTimer()}
          <div className={""}>
            <h2 className={""}>Encrypting...</h2>
            {/* <LoadingBar /> */}
          </div>
        </div>
      );
    }

    if (currentStep === 5) {
      return (
        <div className="flex flex-col min-h-screen w-full items-center justify-start relative">
          <div className="flex flex-col w-full h-full space-y-4 p-4 absolute">
            <h2 className={""}>
            🎉 Congratulation! Here is your output image 🎉
            </h2>
            <div className={""}>
              <div className={"flex flex-col md:flex-row space-x-8"}>
                <div className={"flex flex-col items-center space-y-4 justify-center"}>
                  <img
                    src={URL.createObjectURL(formData.file)}
                    className={""}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div className={""}>Before</div>
                </div>
                <div className={"flex flex-col items-center space-y-4 justify-center"}>
                  <img
                    src={URL.createObjectURL(formData.file)}
                    className={""}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div className={""}>After</div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col space-y-4 justify-start items-start w-full">
              <button
                className={"flex w-[144px] justify-center bg-yellow-500 text-yellow-900 hover:text-yellow-50 hover:border-yellow-400 hover:bg-yellow-600 transition-all ease-in-out duration-200 border-2 border-yellow-300 font-medium py-1 px-4 rounded-lg"}
                onClick={() => setCurrentStep(0)}
              >
            Restart
              </button>
              <Link href="/">
                <a 
                  className={"flex w-[144px] justify-center bg-teal-500 text-teal-900 hover:text-teal-50 hover:border-teal-400 hover:bg-teal-600 transition-all ease-in-out duration-200 border-2 border-teal-300 font-medium py-1 px-4 rounded-lg"}
                >Homepage</a>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Layout className={""}>
        {/* <button type="button" onClick={() => router.back()}>
          Click here to go back to Home
        </button> */}
        <div>{renderForm()}</div>
      </Layout>

      <Footer />
    </div>
  );
}
