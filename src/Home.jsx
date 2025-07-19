import React, { useState, useEffect } from 'react';
import Story from './components/Story';
import Menu from './components/Menu';
import Chef from './components/Chef';
import SpecialMenu from './components/SpeacialMenu';
import Dine from './components/Dine';
import Guests from './components/Guests';
import Moment from './components/Moment';
import Offer from './components/Offer';
import Visit from './components/Visit';
import Reservation from './components/Reservation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

const Home = ({ setLoading })  => {
  const [meta, setMeta] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/meta');
        const data = await res.json();
        if (data && data.title && data.description) {
          setMeta({ title: data.title, description: data.description });
        }
      } catch (error) {
        console.error('Error fetching meta:', error)
        toast.error("Failed to fetch");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchMeta();
  }, [setLoading]);

  useEffect(() => {
    if (meta.title) {
      document.title = meta.title;
      const existingMeta = document.querySelector("meta[name='description']");
      if (existingMeta) {
        existingMeta.setAttribute('content', meta.description);
      } else {
        const desc = document.createElement('meta');
        desc.name = 'description';
        desc.content = meta.description;
        document.head.appendChild(desc);
      }
    }
  }, [meta]);


  return (
    <div style={{ overflowX: 'hidden', width: '100%', backgroundColor: '#f6f7fa' }}>
      <div className="container-fluid p-0 m-0">
        <div><Story /></div>
        <Menu />
        <Chef />
        <Moment />
        <Dine />
        <Visit />
        <SpecialMenu />
        <Offer />
        <Guests />
        <Reservation />
      </div>
    </div>
  );
};

export default Home;
