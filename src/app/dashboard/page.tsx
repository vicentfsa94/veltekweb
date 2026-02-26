export default function DashboardPage() {
  return (
    <div className="flex min-h-max flex-col p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-neutral-400">
          Welcome back. Here&apos;s what&apos;s happening today.
        </p>
      </header>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Placeholder cards to show the layout working */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
          >
            <h3 className="text-sm font-medium text-neutral-400">Metric {i}</h3>
            <p className="mt-2 text-3xl font-semibold">1,234</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 min-h-[400px] rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-dashed border-neutral-700 bg-neutral-900/20">
          <p className="text-neutral-500">Main Content Area 1</p>
        </div>
      </div>
      <div className="mt-8 min-h-[400px] rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-dashed border-neutral-700 bg-neutral-900/20">
          <p className="text-neutral-500">Main Content Area 2</p>
        </div>
      </div>
      <div className="mt-8 min-h-[400px] rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-dashed border-neutral-700 bg-neutral-900/20">
          <p className="text-neutral-500">Main Content Area 3</p>
        </div>
      </div>
      <div className="mt-8 min-h-[400px] rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-dashed border-neutral-700 bg-neutral-900/20">
          <p className="text-neutral-500">Main Content Area 4</p>
        </div>
      </div>
    </div>
  );
}
