import axios from "axios"
import { useEffect, useState } from "react"
import Link from "./components/Link"

export default function App() {
  const [links, setLinks] = useState([])

  async function loadLinks() {
    const { data } = await axios("/api/allLinks")
    setLinks(data)
  }

  useEffect(() => {
    loadLinks()
  }, [])

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-5">List O' Link</h1>

        <div>
          <h2 className="my-4">Links</h2>

          {links && links.map((link) => <Link key={link._id} link={link} />)}
        </div>
      </div>
    </>
  )
}
