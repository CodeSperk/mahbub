// pages/404.tsx
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-page-bg min-h-screen flex items-center justify-center py-10 md:py-16">
      <div className="text-center space-y-2">
        <h1 className="text-6xl md:text-8xl font-bold ">Sorry!</h1>
        <h2 className="text-3xl md:text-4xl">
          This Page is Not Found.
        </h2>

        <div className="text-[120px] md:text-[200px] font-bold leading-none relative">
          <h1 className="relative z-10">404</h1>
        </div>

        <p className="max-w-lg text-2xl mx-auto pb-6">
          This page is lost in space. Head back home to start your journey
          again.
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-highlight"
        >
          <span className="mr-2">←</span>
          Back To Home
        </Link>
      </div>

      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="fixed w-2 h-2 bg-primary rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default NotFound;
