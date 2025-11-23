import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-100 bg-white/30 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <p className="text-slate-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-indigo-600">SoftMind Lab</span>. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-xs text-slate-400">
          <Link href="/policy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}



