export default function ProfilePage() {
  return (
    <div className="flex min-h-max flex-col p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Perfil</h1>
        <p className="mt-2 text-neutral-400">
          Tu información de perfil.
        </p>
      </header>

      <div className="mt-4 min-h-[400px] rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-dashed border-neutral-700 bg-neutral-900/20">
          <p className="text-neutral-500">Profile Content Area</p>
        </div>
      </div>
    </div>
  );
}
