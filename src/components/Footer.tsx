export default function Footer() {
  return (
    <footer className="border-t border-green-900/10 bg-green-950 text-green-100 dark:border-green-100/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-white">AgroVision</p>
          <p className="mt-1 max-w-md text-green-200">
            Supporting farmers with sustainable solutions, modern technology, and market
            access to improve food security in South Sudan.
          </p>
        </div>
        <div className="text-green-300">
          <p>African Leadership University &mdash; Innovation and Business Track (IBT) | E-Lab</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} AgroVision Think Tank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
