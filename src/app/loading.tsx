export default function Loading() {
  return (
    <div className="min-h-screen bg-void flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-neon-green/20 border-t-neon-green rounded-full animate-spin mx-auto mb-4" />
        <p className="text-text-muted text-sm font-mono">Loading...</p>
      </div>
    </div>
  );
}
