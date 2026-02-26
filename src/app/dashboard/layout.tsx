import Sidebar from "@/components/dashboard/Sidebar";
import BottomNav from "@/components/dashboard/BottomNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pb-[60px] md:pb-0">{children}</main>
      <BottomNav />
    </div>
  );
}
