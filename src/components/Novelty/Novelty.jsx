import React from 'react';
import { novelty } from '../../DataBase';

const Novelty = () => {
  return (
    <div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "20px"
        }}
      >
        <h2>Նորույթ</h2>
        <h2>Պահանջված</h2>
        
      </div>
    
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(180px,1fr))",
          gap: "16px",
          padding: "0 20px"
        }}
      >
        {novelty.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center"
            }}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.description}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />
            )}
            {item.description && (
              <p style={{ fontSize: "14px", margin: "10px 0 5px" }}>
                {item.description}
              </p>
            )}
            {item.text && (
              <p style={{ fontSize: "12px", color: "#666", margin: "5px 0" }}>
                {item.text}
              </p>
            )}
            {item.priz && (
              <p style={{ fontWeight: "bold", fontSize: "14px", margin: "5px 0" }}>
                {item.priz}
              </p>
            )}
            {item.button && (
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#7776E5",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                {item.button}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novelty;
