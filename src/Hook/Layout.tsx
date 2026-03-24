import Navbar from "@/pages/Navbar"


function Layout({ children }: any) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  )
}

export default Layout

