import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold mb-4 text-[var(--code-blue-light)]">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-[var(--text-muted)] mb-6">The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="btn-primary">
        Return Home
      </Link>
    </div>
  );
}