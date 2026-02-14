import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="glass-card rounded-xl p-8">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 justify-center">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>

          <div className="font-mono text-sm space-y-2 text-left mb-8">
            <p>
              <span className="text-neon-green">$</span>{" "}
              <span className="text-text-muted">cat</span>{" "}
              <span className="text-neon-cyan">page.txt</span>
            </p>
            <p className="text-red-400">
              Error: ENOENT: no such file or directory
            </p>
            <p className="text-text-muted">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>

          <h1 className="text-6xl font-bold font-mono gradient-text mb-4">
            404
          </h1>
          <p className="text-text-secondary mb-8 font-sans">
            Looks like this page got lost in the void.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm bg-neon-green/10 text-neon-green border border-neon-green/30 rounded-lg hover:bg-neon-green/20 hover:shadow-neon-green transition-all"
          >
            <span>$</span> cd /home
          </Link>
        </div>
      </div>
    </div>
  );
}
