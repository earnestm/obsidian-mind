import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="border-t-4 border-b border-paper-950 py-10 max-w-sm w-full">
        <h2 className="font-display font-black text-5xl uppercase text-paper-950 mb-4">404</h2>
        <p className="font-serif italic text-paper-700 mb-8">
          That author or page doesn&apos;t exist in this challenge.
        </p>
        <Link
          href="/"
          className="font-display font-bold uppercase tracking-widest text-xs px-6 py-3 border-2 border-paper-950 hover:bg-paper-950 hover:text-paper-100 transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
