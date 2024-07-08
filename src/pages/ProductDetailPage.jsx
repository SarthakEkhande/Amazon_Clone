import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      async function fetchProduct() {
        try {
          const response = await axios.get(`https://fakestoreapiserver.vercel.app/amazonproducts/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      }
      fetchProduct();
    }, [id]);
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='product-detail'>
        <img src={product.image} alt={product.title} className='w-64 h-64 object-contain' />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>{product.category}</p>
        <div>{product.rating.rate} / 5</div>
      </div>
    );
  };

export default ProductDetailPage
