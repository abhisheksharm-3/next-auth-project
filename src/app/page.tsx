import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-10 w-full h-full object-cover"
      >
        <source src="/bg-vid.mp4" />
      </video>
      <Link
        href="/login"
        className="bg-gray-300 z-30 p-2 hover:bg-gray-400 rounded-lg text-gray-700 capitalize font-sans ease-in-out duration-500"
      >
        Visit Login Page
      </Link>
    </main>
  );
}
