import { ModeToggle } from "@/modeToggle"

export const Footer = () => {
  return (
    <footer className="border-t sticky top-full">
      <div className="container h-16 flex items-center justify-between">
        <p className="text-muted-foreground">&copy; bull</p>
        <ModeToggle />
      </div>
    </footer>
  )
}