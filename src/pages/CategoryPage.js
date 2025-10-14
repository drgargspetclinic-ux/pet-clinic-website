import React from 'react';
import { useParams } from 'react-router-dom';

// Example product data
const categoryData = {
  feed: [
    {
      name: "PEDIGREE® Balanced and Vegetarian Dog Food for Adult and Puppy",
      image:
        "https://www.pedigree.in/files/styles/webp/public/2024-02/7570486-1_Pedigree%20Puppy%20%26%20Adult%20Sachet-Pouch_1kg_FOP%20%281%29.png.webp?VersionId=SrLTDdzP_P4PCdfwHb9RtS7wpvNrj3qE&itok=5x8vJiNB",
      weights: ["1kg", "2.8kg", "10kg"],
    },
    {
        name: "PEDIGREE® Puppy Chicken and Milk for New Born Dog",
        image: "https://www.pedigree.in/files/styles/webp/public/2024-02/Puppy%20Chicken%20%26%20Milk%20Sachet-Pouch_1kg_FOP%20-%20without%20sticker.png.webp?VersionId=bRWHsbkhW3ByGmz5XeW2_6CjEVMEacKF&itok=yoL35jW9",
        weights: ["1.2kg" , "3kg"],
    },
    // add more feed products here
  ],
  // treats: [
  //   // Add treats products here
  // ],
  // grooming: [
  //   // Add grooming products here
  // ],
  // toys: [
  //   // Add toys products here
  // ],
  // cloth: [
  //   // Add clothes/beds products here
  // ],
};

const CategoryPage = () => {
  const { category } = useParams();
  const products = categoryData[category] || [];
  console.log('cagtegory: ', products)


  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", textTransform: "capitalize" }}>
        {category}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              border: "1px solid #ddd",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>{product.name}</h2>
            
            {/* Display weights */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
              {product.weights.map((weight, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "#ff7f50",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                  }}
                >
                  {weight}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
