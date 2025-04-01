import './filter.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useState } from 'react';


export default function Filter () {    
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSortBy, setselectedSortBy] = useState<string | null>(null);
    
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    const handleSortByClick = (sortBy: string) => {
        setselectedSortBy(sortBy === selectedSortBy ? null : sortBy);
    };

    return (
        <div>
            <h2 className="filterTitle">Filter</h2>
            <section className="categorySection">
                <h3 className="category">Category</h3>
                <Splide 
                options={{
                    type: 'slide',
                    perPage: 1,
                    perMove: 1,
                    autoplay: false,
                    pagination: false,
                    arrows: false,              
                }}
                >
                <SplideSlide>
                    <div className="categoryBar">
                    <button 
                        className={`filterButton ${
                        selectedCategory === 'Headphones' ? 'btnSelected' : ''
                        }`}
                        onClick={() => handleCategoryClick("Headphones")}
                    >Headphone</button>
                    <button
                        className={`filterButton ${
                        selectedCategory === 'Headsets' ? 'btnSelected' : ''
                        }`}
                        onClick={() => handleCategoryClick('Headsets')}
                    >Headset</button>
                    <button 
                        className={`filterButton ${
                        selectedCategory === "Headband" ? "btnSelected" : " "
                        }`}
                        onClick={() => handleCategoryClick("Headband")}
                    >Headband</button>
                    <button 
                        className={`filterButton ${
                        selectedCategory === "Earpads" ? "btnSelected" : " "
                        }`}
                        onClick={() => handleCategoryClick("Earpads")}
                    >Earpads</button>
                    <button 
                        className={`filterButton ${
                        selectedCategory === "Cable" ? "btnSelected" : " "
                        }`}
                        onClick={() => handleCategoryClick("Cable")}
                    >Cable</button>
                    </div>
                </SplideSlide>
                </Splide>
            </section>
            <section className="sortBySection">
                <h3 className="category">Sort By</h3>
                <div className="sortByNav">
                    <button 
                        className={`sortButton ${
                        selectedSortBy === 'Popularity' ? 'btnSortSelected' : ''
                        }`}
                        onClick={() => handleSortByClick("Popularity")}
                    >Popularity</button>
                    <button
                        className={`sortButton ${
                        selectedSortBy === 'Newest' ? 'btnSortSelected' : ''
                        }`}
                        onClick={() => handleSortByClick('Newest')}
                    >Newest</button>
                    <button 
                        className={`sortButton ${
                        selectedSortBy === "Oldest" ? "btnSortSelected" : " "
                        }`}
                        onClick={() => handleSortByClick("Oldest")}
                    >Oldest</button>
                </div>
                <div className="sortByNav">
                    <button 
                        className={`sortButton ${
                        selectedSortBy === "High Price" ? "btnSortSelected" : " "
                        }`}
                        onClick={() => handleSortByClick("High Price")}
                    >High Price</button>
                    <button 
                        className={`sortButton ${
                        selectedSortBy === "Low Price" ? "btnSortSelected" : " "
                        }`}
                        onClick={() => handleSortByClick("Low Price")}
                    >Low Price</button>
                    <button 
                        className={`sortButton ${
                        selectedSortBy === "Review" ? "btnSortSelected" : " "
                        }`}
                        onClick={() => handleSortByClick("Review")}
                    >Review</button>
                </div>               
            </section>
            <div className="applyBtn">
                <button className="defaultBtn">Apply Filter</button>
            </div>
        </div>
  );
}
