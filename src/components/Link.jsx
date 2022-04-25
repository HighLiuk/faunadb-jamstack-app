export default function Link({ link }) {
  return (
    <>
      <div className="card my-4">
        <div className="card-header">{link.name}</div>

        <div className="card-body">
          <a href={link.url}>{link.url}</a>

          <p>{link.description}</p>
        </div>

        <div className="card-footer">
          <button className="btn btn-warning mx-2">Archive</button>

          <button className="btn btn-danger mx-2">Delete</button>
        </div>
      </div>
    </>
  )
}
