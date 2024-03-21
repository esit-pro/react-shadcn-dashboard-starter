import DashboardNav from '@/components/shared/dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/constants/data';
import { MenuIcon } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

type TMobileSidebarProps = {
  className?: string;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarOpen: boolean;
};
export default function MobileSidebar({
  className,
  setSidebarOpen,
  sidebarOpen
}: TMobileSidebarProps) {
  return (
    <>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        {/* <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger> */}
        <SheetContent side="left" className="bg-primary !px-0">
          <div className="space-y-4 py-4">
            <div className="space-y-4 px-3 py-2">
              <Link to="/" className="py-2 text-2xl font-bold text-white ">
                Logo
              </Link>
              <div className="space-y-1 px-2">
                <DashboardNav items={navItems} setOpen={setSidebarOpen} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
