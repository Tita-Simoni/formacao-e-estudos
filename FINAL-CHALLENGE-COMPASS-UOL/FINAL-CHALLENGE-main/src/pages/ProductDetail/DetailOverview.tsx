import './detailOverview.css';
import Headphone from '../HomePage/images/headphone.svg';
import avatar from '../HomePage/images/Avatar.svg';
import star from '../ExploreProduct/images/star.svg';
import Loading from '../Loading/Loading';

import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Product {
   id: number;   
   rating: number;
   name: string;
   description: string;
   reviews: Review[];
 }

interface Review {
   user: string;
   description: string;
   rating: number;
   date: string;
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
    <div>
      <div className="detailProductOverview">
        <img id="productOverview" src={Headphone} alt="Product Image" />
      </div>
      <section className="reviews">
        <h2 id="reviews">{`Reviews (${product.reviews.length})`}</h2>
        {product.reviews.map((review, index) => (
          <div className="review" key={index}>
            <img id="avatarIcon" src={avatar} alt="Avatar" />
            <div className="reviewDescription">
              <p id="reviewName">{review.user}</p>
              <div className="starRating">
                {Array(review.rating).fill(null).map((_, index) => (
                  <img key={index} id="starIcon" src={star} alt="Star review" />
                ))}
              </div>
              <p id="description">{review.description}</p>
            </div>
          </div>
        ))}
      </section>    
    </div>
  );
}
