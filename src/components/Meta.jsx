import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Meta() {
  const [meta, setMeta] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/meta');
        const data = await res.json();

        if (data && data.title && data.description) {
          setMeta({ title: data.title, description: data.description });
        } else {
          const defaultMeta = { title: 'My Title', description: 'My Description' };
          const postRes = await fetch('http://localhost:8000/api/meta', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(defaultMeta),
          });

          const savedData = await postRes.json();
          setMeta(savedData.meta || defaultMeta);
        }
      } catch (err) {
        console.error('Error handling metadata:', err);
      }
    };

    fetchMeta();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setMeta(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/api/meta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(meta),
      });

      const result = await res.json();
      setMeta(result?.meta || meta);

      toast.success(result.message || 'Meta data updated successfully!');
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Failed to update meta data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <ToastContainer />
      <div className="row">
        <div className="col-12">
          <h2 style={{ color: '#E1AD01', marginBottom: '20px' }}>🛠️ Admin Panel: Update Home Meta Info</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Meta Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={meta.title}
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100 d-flex justify-content-center align-items-center"
              style={{ backgroundColor: '#E1AD01', color: '#000' }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Updating...
                </>
              ) : (
                'Update Meta'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Meta;
