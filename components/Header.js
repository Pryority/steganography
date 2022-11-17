import Link from "next/link";


export const Header = () => {
  return (
    <header className={"flex p-2"}>
      <h1 className={"uppercase font-light tracking-tighter italic text-2xl"}>
        <Link href="/">Steganography</Link>
      </h1>
    </header>
  );
};
