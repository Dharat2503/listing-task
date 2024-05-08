
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetail = ({ products }) => {
//   const { productId } = useParams();
//   const product = products.find((p) => p.id === parseInt(productId));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   // CSS styles
//   const styles = `
//     .view {
//       width: 100px;
//       height: 100px;
//       margin-right: 10px;
//       border: 3px solid #1d1f20;
//       padding: 2px;
//       overflow: hidden;
//     }

//     .view img {
//       width: 100%;
//       height: 100%;
//       -webkit-filter: hue-rotate(180deg);
//       -moz-filter: hue-rotate(180deg);
//       -o-filter: hue-rotate(180deg);
//       filter: hue-rotate(180deg);
//       -webkit-transition: all 0.5s ease-in-out;
//       -moz-transition: all 0.5s ease-in-out;
//       -o-transition: all 0.5s ease-in-out;
//       transition: all 0.5s ease-in-out;
//     }

//     .view:hover img {
//       -webkit-transform: scale(1.5) rotate(25deg);
//       -moz-transform: scale(1.5) rotate(25deg);
//       -o-transform: scale(1.5) rotate(25deg);
//       transform: scale(1.5) rotate(25deg);
//       -webkit-filter: hue-rotate(0);
//       -moz-filter: hue-rotate(0);
//       -o-filter: hue-rotate(0);
//       filter: hue-rotate(0);
//     }
//   `;

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <h2>{product.title}</h2>
//       <div>
//         <img src={product.thumbnail} alt={product.title} style={{ width:'300px' }} />
//       </div>
//       <div style={{ textAlign: 'center' }}>
//         <p>Price: {product.price} $ -  Rating:{product.rating}</p>
//         {/* <p>Rating:{product.rating}</p> */}
//         <p>Description: {product.description}</p>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         {product.images.map((image, index) => (
//           <div key={index} className="view" style={{ width: '150px', height: '150px', marginRight: '10px' }}>
//             <img
//               src={image}
//               alt={`${product.title} - ${index + 1}`}
//               style={{ width: '100%', height: '100%' }}
//             />
//           </div>
//         ))}
//       </div>
    
//       <style>{styles}</style>
//     </div>
//   );
// };

// export default ProductDetail;



import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  // CSS styles
  const styles = `
    .view {
      width: 100px;
      height: 100px;
      margin-right: 10px;
      border: 3px solid #1d1f20;
      padding: 2px;
      overflow: hidden;
    }

    .view img {
      width: 100%;
      height: 100%;
      -webkit-filter: hue-rotate(180deg);
      -moz-filter: hue-rotate(180deg);
      -o-filter: hue-rotate(180deg);
      filter: hue-rotate(180deg);
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }

    .view:hover img {
      -webkit-transform: scale(1.5) rotate(25deg);
      -moz-transform: scale(1.5) rotate(25deg);
      -o-transform: scale(1.5) rotate(25deg);
      transform: scale(1.5) rotate(25deg);
      -webkit-filter: hue-rotate(0);
      -moz-filter: hue-rotate(0);
      -o-filter: hue-rotate(0);
      filter: hue-rotate(0);
    }
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>{product.title}</h2>
      <div>
        <img src={product.thumbnail} alt={product.title} style={{ width:'300px', borderRadius: '10px' }} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p>Price: {product.price} $ -  Rating:{product.rating}</p>
        {/* <p>Rating:{product.rating}</p> */}
        <p>Description: {product.description}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {product.images.map((image, index) => (
          <div key={index} className="view" style={{ width: '150px', height: '150px', marginRight: '10px' }}>
            <img
              src={image}
              alt={`${product.title} - ${index + 1}`}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </div>
    
      <style>{styles}</style>
    </div>
  );
};

export default ProductDetail;
