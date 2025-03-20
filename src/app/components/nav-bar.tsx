import Link from "next/link"

export const NavBar = () => {

  return (
    <div className="flex justify-end py-10">
      <nav className="flex justify-end bg-white">
        <Link className="p-4 border-1" href={''}>insta</Link>
      </nav>
    </div>)
}