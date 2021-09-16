import { Navbar } from "../navbar/Navbar";

export default function LayoutContained({ children }) {
  return (
    <>
        <Navbar />
        <main>
          <div className="container mx-auto">
            {children}
          </div>
        </main>
    </>
  )
}