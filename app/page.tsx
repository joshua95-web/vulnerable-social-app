import SignUpForm from "./components/SignUpForm";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="bg-black flex flex-col">
      <div className="flex text-center justify-center">
        <h1 className="font-sans font-bold text-5xl p-10">
          Welcome to Vulnsocial
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center gap-50">
        <div className="flex flex-cols items-center">
          <Image src="/logo.ico" alt="logo" width={400} height={400} />
          <h1 className="font-mono font-extralight text-2xl">
            Start the whispers...
          </h1>
        </div>
        <SignUpForm />
      </div>
    </main>
  );
}
