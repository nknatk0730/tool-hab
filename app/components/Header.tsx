import { MobileNav } from "@/components/MobileNav"

export const Header = () => {
  return (
    <header className="border-b">
      <div className="h-16 flex items-center gap-4 container">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <p className="font-bold text-lg">ToolHub</p>
      </div>
    </header>
  )
}