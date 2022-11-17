import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={"flex"}>
      <div className="bottom-0 right-0 z-50 p-1 bg-white/80 dark:bg-stone-900/80 backdrop-blur-lg border-b border-white/80 dark:border-stone-900/80 fixed flex justify-between items-center w-full pl-4">
        <h1 className={"text-sm"}>
          <Link href="/" className="text-sm font-light">2021@primecollege.edu.np</Link>
        </h1>
      </div>
    </footer>
  );
};
