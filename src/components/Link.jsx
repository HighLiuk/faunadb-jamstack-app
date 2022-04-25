import axios from "axios"

export default function Link({ link, refresh }) {
  async function archive() {
    await axios.put("/api/updateLink", {
      ...link,
      archived: true,
    })
    refresh()
  }

  async function restore() {
    await axios.put("/api/updateLink", {
      ...link,
      archived: false,
    })
    refresh()
  }

  async function destroy() {
    await axios.delete("/api/deleteLink", {
      data: { id: link.id },
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
          <button
            className={
              link.archived ? "btn btn-success mx-2" : "btn btn-warning mx-2"
            }
            onClick={link.archived ? restore : archive}
          >
            {link.archived ? "Restore" : "Archive"}
          </button>

          <button className="btn btn-danger mx-2" onClick={destroy}>
            Delete
          </button>
        </div>
      </div>
    </>
  )
}
