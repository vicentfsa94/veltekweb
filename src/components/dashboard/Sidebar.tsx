"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Custom Home Icon
const HomeIcon = ({ isActive, ...props }: React.SVGProps<SVGSVGElement> & { isActive?: boolean }) => (
  <svg 
    aria-label="Inicio" 
    role="img" 
    viewBox="0 0 24 24" 
    {...props}
  >
    <path d="M9.0327 1.77305C10.7675 0.385221 13.2325 0.38522 14.9673 1.77305L21.2796 6.82293C22.525 7.81923 23.25 9.32762 23.25 10.9225V18C23.25 20.8995 20.8995 23.25 18 23.25H6C3.1005 23.25 0.75 20.8995 0.75 18V10.9225C0.75 9.32763 1.47497 7.81923 2.72035 6.82293L9.0327 1.77305Z" fill="currentColor"></path>
  </svg>
);

// Custom Search Icon
const SearchIcon = ({ isActive, ...props }: React.SVGProps<SVGSVGElement> & { isActive?: boolean }) => (
  <svg 
    aria-label="Buscar" 
    role="img" 
    viewBox="0 0 24 24" 
    {...props}
  >
    <path clipRule="evenodd" d="M11.2607 1.01074C5.59982 1.01074 1.01074 5.59982 1.01074 11.2607C1.01074 16.9217 5.59982 21.5107 11.2607 21.5107C13.6407 21.5107 15.8312 20.6996 17.5709 19.3387L20.8554 22.6231C21.3435 23.1113 22.135 23.1113 22.6231 22.6231C23.1113 22.135 23.1113 21.3435 22.6231 20.8554L19.3387 17.5709C20.6996 15.8312 21.5107 13.6407 21.5107 11.2607C21.5107 5.59982 16.9217 1.01074 11.2607 1.01074ZM3.51074 11.2607C3.51074 6.98053 6.98054 3.51074 11.2607 3.51074C15.5409 3.51074 19.0107 6.98053 19.0107 11.2607C19.0107 15.541 15.5409 19.0107 11.2607 19.0107C6.98054 19.0107 3.51074 15.541 3.51074 11.2607Z" fill="currentColor" fillRule="evenodd"></path>
  </svg>
);

// Custom Heart (Notifications) Icon
const HeartIcon = ({ isActive, ...props }: React.SVGProps<SVGSVGElement> & { isActive?: boolean }) => (
  <svg 
    aria-label="Notificaciones" 
    role="img" 
    viewBox="0 0 24 24" 
    {...props}
  >
    {isActive ? (
      <path d="M16.4045 1.50879C14.785 1.50879 13.2185 2.16259 12 3.30764C10.7815 2.16259 9.215 1.50879 7.5955 1.50879C3.41766 1.50879 0.5 4.62796 0.5 9.09411C0.5 13.7857 4.70617 18.9703 11.2153 22.3022C11.4605 22.428 11.7298 22.4912 11.9995 22.4912C12.2692 22.4912 12.5395 22.428 12.7847 22.3022C19.2938 18.9703 23.5 13.7857 23.5 9.09411C23.5 4.62796 20.5823 1.50879 16.4045 1.50879Z" fill="currentColor"></path>
    ) : (
      <path d="M16.4045 1.50879C14.785 1.50879 13.2185 2.16259 12 3.30764C10.7815 2.16259 9.215 1.50879 7.5955 1.50879C3.41766 1.50879 0.5 4.62796 0.5 9.09411C0.5 13.7857 4.70617 18.9703 11.2153 22.3022C11.4605 22.428 11.7298 22.4912 11.9995 22.4912C11.9993 22.4912 11.9997 22.4912 11.9995 22.4912C12.2692 22.4912 12.5395 22.428 12.7847 22.3022C19.2938 18.9703 23.5 13.7857 23.5 9.09411C23.5 4.62796 20.5823 1.50879 16.4045 1.50879ZM12 19.9518C6.65166 17.1137 2.94684 12.6864 2.94684 9.09411C2.94684 5.97251 4.77133 3.95556 7.5955 3.95556C9.825 3.95556 11.0773 5.80961 12 7.26504C12.9227 5.80961 14.175 3.95556 16.4045 3.95556C19.2287 3.95556 21.0532 5.97251 21.0532 9.09411C21.0532 12.6864 17.3483 17.1137 12 19.9518Z" fill="currentColor"></path>
    )}
  </svg>
);

// Custom Profile Icon
const ProfileIcon = ({ isActive, ...props }: React.SVGProps<SVGSVGElement> & { isActive?: boolean }) => (
  <svg 
    aria-label="Perfil" 
    role="img" 
    viewBox="0 0 24 24" 
    {...props}
  >
    {isActive ? (
      <>
        <path d="M12 0.75C8.82431 0.75 6.25 3.32437 6.25 6.5C6.25 9.67563 8.82431 12.25 12 12.25C15.1757 12.25 17.75 9.67563 17.75 6.5C17.75 3.32437 15.1757 0.75 12 0.75Z" fill="currentColor"></path>
        <path d="M12 13.75C7.51601 13.75 3.65758 16.4063 1.86595 20.1981C1.12621 21.7637 2.41318 23.25 3.86237 23.25H20.1377C21.5869 23.25 22.8738 21.7637 22.1341 20.1981C20.3425 16.4063 16.484 13.75 12 13.75Z" fill="currentColor"></path>
      </>
    ) : (
      <>
        <path d="M12 0.75C8.82431 0.75 6.25 3.32437 6.25 6.5C6.25 9.67563 8.82431 12.25 12 12.25C15.1757 12.25 17.75 9.67563 17.75 6.5C17.75 3.32437 15.1757 0.75 12 0.75ZM8.75 6.5C8.75 4.70507 10.205 3.25 12 3.25C13.795 3.25 15.25 4.70507 15.25 6.5C15.25 8.29493 13.795 9.75 12 9.75C10.205 9.75 8.75 8.29493 8.75 6.5Z" fill="currentColor" clipRule="evenodd" fillRule="evenodd"></path>
        <path d="M12.0003 13.75C6.97423 13.75 2.73384 17.086 1.30779 21.6254C1.10089 22.284 1.46707 22.9856 2.1257 23.1925C2.78432 23.3994 3.48596 23.0333 3.69287 22.3746C4.80482 18.835 8.10976 16.25 12.0003 16.25C15.8909 16.25 19.1958 18.835 20.3078 22.3746C20.5147 23.0333 21.2163 23.3994 21.8749 23.1925C22.5336 22.9856 22.8997 22.284 22.6928 21.6254C21.2668 17.086 17.0264 13.75 12.0003 13.75Z" fill="currentColor"></path>
      </>
    )}
  </svg>
);

// Custom Menu (More) Icon
const MenuIcon = ({ isActive, ...props }: React.SVGProps<SVGSVGElement> & { isActive?: boolean }) => (
  <svg 
    aria-label="Más" 
    role="img" 
    viewBox="0 0 24 24" 
    {...props}
  >
    <rect rx="1.25" x="3" y="7" width="18" height="2.5" fill="currentColor"></rect>
    <rect rx="1.25" x="3" y="15" width="18" height="2.5" fill="currentColor"></rect>
  </svg>
);

// Custom Plus (Create) Icon
const PlusIcon = ({ isActive, ...props }: React.SVGProps<SVGSVGElement> & { isActive?: boolean }) => (
  <svg aria-label="Crear" role="img" viewBox="0 0 24 24" {...props}>
    <path d="M13.25 3.00001C13.25 2.30965 12.6904 1.75001 12 1.75001C11.3096 1.75001 10.75 2.30965 10.75 3.00001V10.75H3C2.30964 10.75 1.75 11.3097 1.75 12C1.75 12.6904 2.30964 13.25 3 13.25H10.75V21C10.75 21.6904 11.3096 22.25 12 22.25C12.6904 22.25 13.25 21.6904 13.25 21V13.25H21C21.6904 13.25 22.25 12.6904 22.25 12C22.25 11.3097 21.6904 10.75 21 10.75H13.25V3.00001Z" fill="currentColor" strokeWidth="1.5"></path>
  </svg>
);

const navItems = [
  { icon: HomeIcon, href: "/dashboard", label: "Home" },
  { icon: SearchIcon, href: "/dashboard/search", label: "Search" },
  { icon: PlusIcon, href: "/dashboard/create", label: "Create" },
  { icon: HeartIcon, href: "/dashboard/notifications", label: "Notifications" },
  { icon: ProfileIcon, href: "/dashboard/profile", label: "Profile" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-[72px] hidden md:flex flex-col items-center bg-transparent py-4 z-50">
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
        <div className="flex h-8 w-8 items-center justify-center">
          <svg aria-label="Threads" className="text-white h-full w-full" fill="currentColor" role="img" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
            <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.011 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path>
          </svg>
        </div>
      </div>

      <nav className="flex flex-1 flex-col items-center justify-center gap-4 w-full px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isCreate = item.label === "Create";
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex h-12 w-full items-center justify-center rounded-xl transition-all duration-200 ${
                isCreate 
                  ? "bg-[#1a1a1a] text-[#4d4d4d] hover:text-white active:scale-95"
                  : "text-[#4d4d4d] hover:bg-[#1a1a1a] active:scale-95"
              } ${isActive && !isCreate ? "text-white" : ""}`}
              title={item.label}
            >
              <Icon 
                // @ts-ignore - Some icons perfectly match the type and some don't, but all use it or ignore it safely.
                isActive={isActive}
                className={`h-6 w-6 transition-transform duration-200 ${
                  isActive && !isCreate ? "fill-white" : ""
                }`} 
              />
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex w-full flex-col items-center gap-2 px-2">
        <button 
          className="group flex h-12 w-full items-center justify-center rounded-xl text-[#4d4d4d] transition-all hover:text-white"
          title="More"
        >
          <MenuIcon 
            className="h-6 w-6 transition-transform duration-200 active:scale-90" 
          />
        </button>
      </div>
    </aside>
  );
}
