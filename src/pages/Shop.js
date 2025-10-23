import React from 'react';
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

// Import images here
import feed2 from '../assets/feed_2.jpg';
import biscuit from '../assets/biscuit.jpg';
import feed3 from '../assets/feed_3.jpg';
import treat2 from '../assets/treat_2.jpg';
import grooming from '../assets/grooming.jpg';
import brush from '../assets/brush.jpg';
import toys from '../assets/toys.jpg';
import bowl2 from '../assets/bowl_2.jpg';
import clothes from '../assets/clothes.jpg';

// Define categories array here:
const categories = [
  {
    title: 'Dry Feed',
    images: [feed2, biscuit, feed3],
    route: '/shop/feed',
  },
  {
    title: 'Grooming Stuff',
    images: [grooming, brush],
    route: '/shop/grooming',
  },
  {
    title: 'Treats',
    images: [treat2],
    route: '/shop/treats',
  },
  {
    title: 'Toys',
    images: [toys, bowl2],
    route: '/shop/toys',
  },
  {
    title: 'Clothing/Beds',
    images: [clothes],
    route: '/shop/cloth',
  },
];

const Shop = () => {
  // const navigate = useNavigate();

  return (
    <div
      style={{
        padding: '40px 40px',
        // backgroundColor: '#fefefe',
      }}
    >
      <h1 style={{ marginBottom: '40px', textAlign: 'center' }}>
        Welcome to the Pet Shoppee!
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          width: '100%',
        }}
      >
        {categories.map(({ title, images, route }) => (
          <div
            key={title}
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2 style={{ marginBottom: '15px' }}>{title}</h2>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {images.slice(0, 2).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${title} ${idx + 1}`}
                  style={{
                    width: '180px',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              ))}
            </div>

            {/* Changed to Link */}
            <Link to={route}>
              <button
                style={{
                  backgroundColor: '#ff7f50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                }}
              >
                Explore &gt;
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
