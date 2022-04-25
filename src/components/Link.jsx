import axios from "axios"

export default function Link({ link, refresh }) {
  async function archive() {
    await axios.put("/api/updateLink", {
      id: link._id,
      name: link.name,
      url: link.url,
      description: link.description,
      archived: true,
    })
    refresh()
  }

  async function destroy() {
    await axios.delete("/api/deleteLink", {
      data: { id: link._id },
    })
    refresh()
  }

  return (
    <>
      <div className="card my-4">
        <div className="card-header">{link.name}</div>

        <div className="card-body">
          <a href={link.url}>{link.url}</a>

          <p>{link.description}</p>
        </div>

        <div className="card-footer">
          <button className="btn btn-warning mx-2" onClick={archive}>
            Archive
          </button>

          <button className="btn btn-danger mx-2" onClick={destroy}>
            Delete
          </button>
        </div>
      </div>
    </>
  )
}
