import Link from "next/link";
export default function AboutUsPage() {
  //bkin component
  return (
    <>
      <h1 className="mb-16">Hello FSW-1 KM-6!!!</h1>;
      <Link href="/login">LOGIN LINK</Link>
      <a href="/login" className="bg-purple-400 border p-12">
        Login
      </a>
    </>
  );
}
