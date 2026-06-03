import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-4xl font-serif text-stone-400 mb-4">Not Found</h2>
      <p className="text-stone-600 mb-8">That author or page doesn&apos;t exist in this challenge.</p>
      <Link href="/" className="text-amber-500 hover:text-amber-400 underline">
        Return home
      </Link>
    </div>
  );
}
