import CardProducts from '../HomePage/CardProducts';
import DetailFeatures from './DetailsFeatures';
import DetailsOverview from './DetailOverview';
import { api } from '../../services/api';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../ShoppingCart/useCart';
import shoppingCart from '../Search/images/shopping-cart.svg';
import chevron from '../Search/images/chevron-left.svg';
import Loading from '../Loading/Loading';
import './detailsPage.css';

interface Product {
    id: number;   
    price: string | number;
    name: string;  
}

export default function DetailPage () {    
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedSection, setSelectedSection] = 
        useState<'overview' | 'features'>('overview');        
    const navigate = useNavigate();

    const { addToCart } = useCart();

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

    const handleOverviewClick = () => {
        setSelectedSection('overview');
    };
    
    const handleFeaturesClick = () => {
        setSelectedSection('features');
    };       

    const handleAddToCart = () => {
        if (addToCart) {
            addToCart(product);      
            navigate('/cartPage');      
        }
    };

    return (
        <div>
            <section className="menu">
                <Link to="/home">
                    <img src={chevron} alt="Chevron Icon" />
                </Link>
                <Link to="/cartPage">
                    <img src={shoppingCart} alt="Shopping Cart" />
                </Link>
            </section>
            <section className="productDetail">
                <p className="detailPrice">{product.price}</p>
                <p className="detailProductName">{product.name}</p>
                <div className="detailNavegator">
                    <button
                        className={`btnDetailPage ${selectedSection === 'overview' ? 'active' : ''}`}
                        onClick={handleOverviewClick}
                    >Overview</button>
                    <button
                        className={`btnDetailPage ${selectedSection === 'features' ? 'active' : ''}`}
                        onClick={handleFeaturesClick}
                    >Features</button>
                </div>
                {selectedSection === 'overview' ? <DetailsOverview /> : <DetailFeatures />}
                <CardProducts />
                <div className="btnSection">
                    <button 
                        className="defaultBtn" 
                        id="btnDetails"
                        onClick={handleAddToCart}
                    >Add To Cart</button>                   
                </div>
            </section>
        </div>
    );
}
