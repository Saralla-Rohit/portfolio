export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="mb-4">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Go back home
        </a>
      </div>
    </div>
  );
}
