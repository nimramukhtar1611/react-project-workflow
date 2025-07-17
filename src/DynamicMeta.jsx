import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DynamicMeta = () => {
  const location = useLocation();
  const [meta, setMeta] = useState({ title: "", description: "" });

  useEffect(() => {
    const fetchMeta = async () => {
      const routePath = location.pathname.slice(1); // remove initial "/"
      try {
        const res = await axios.get(`/api/meta/${routePath}`);
        setMeta(res.data);
      } catch (err) {
        console.error("Meta fetch failed");
      }
    };

    fetchMeta();
  }, [location.pathname]);

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Helmet>
  );
};

export default DynamicMeta;
