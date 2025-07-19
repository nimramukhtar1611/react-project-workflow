import {useState} from 'react'

const CategoryMeta = () => {
     const [meta, setMeta] = useState({ title: '', description: '' });

  return (
    <div className="container py-4">
       <form >
            <div className="mb-3">
              <label className="form-label">Meta Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={meta.title}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Meta Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="4"
                value={meta.description}
                required
              />
            </div>
          
          </form>
    </div>
  )
}

export default CategoryMeta
