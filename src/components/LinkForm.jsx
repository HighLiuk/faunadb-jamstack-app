import axios from "axios"
import { useState } from "react"

export default function LinkForm({ refresh }) {
  const initialForm = {
    name: "",
    url: "",
    description: "",
  }

  const [form, setForm] = useState(initialForm)

  async function handleSubmit(e) {
    e.preventDefault()

    await axios.post("/api/createLink", form)

    setForm(initialForm)
    refresh()
  }

  function handleChange({ target }) {
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  return (
    <div className="card">
      <div className="card-header">Add Link</div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">URL</label>

            <input
              type="text"
              name="url"
              className="form-control"
              value={form.url}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>

            <textarea
              name="description"
              className="form-control"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
