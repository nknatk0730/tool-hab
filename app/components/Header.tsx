import { MobileNav } from "@/components/MobileNav"
import { Search } from "./Search"
import { AppConfig } from "@/app.config"

export const Header = () => {
  return (
    <header className="border-b">
      <div className="h-16 flex items-center gap-4 container">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <p className="font-bold text-lg">{AppConfig.title}</p>
        <Search />
      </div>
    </header>
  )
}