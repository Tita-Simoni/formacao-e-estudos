import './detailOverview.css';
import Loading from '../Loading/Loading';

import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Product {
   id: number;   
   rating: number;
   name: string;
   description: string;
 }

export default function DetailsOverview () {
  const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          if (id) { 
            const response = await api.get(`/${id}`);
            const data: Product[] = response.data as Product[];
            const foundProduct = data.find((product) => product.id === Number(id));
            setProduct(foundProduct || null);
          }
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        }
    };
        
        fetchData().catch((error) => {
            console.error('Erro ao buscar os dados:', error);
        });
    }, [id]);

    if (!product) {
        return <Loading />;
    }
  
  return (
    <div className="reviews" id="featuresPage">
      <h2 className="productNameFeatures">{product.name}</h2>
      <p id="description">{product.description}</p>
    </div>
  );
}
