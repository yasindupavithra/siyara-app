import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #f8f9fa;
`;

const ProductsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const ProductsHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const ProductsTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  font-family: 'Manrope', sans-serif;
`;

const ProductsSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  height: 250px;
  background: ${props => props.hasImage ? 'none' : 'linear-gradient(135deg, #C2AB8E, #B19A7D)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  position: relative;
  overflow: hidden;
  cursor: ${props => props.hasImage ? 'pointer' : 'default'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.hasImage ? 'none' : 'linear-gradient(45deg, rgba(194, 171, 142, 0.8), rgba(177, 154, 125, 0.8))'};
    opacity: 0.9;
  }

  &:hover {
    &::after {
      content: '🔍 Click to view full image';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 0.9rem;
      z-index: 10;
    }
  }
`;

const ProductImageElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProductImage}:hover & {
    transform: scale(1.05);
  }
`;

const ProductIcon = styled.div`
  position: relative;
  z-index: 2;
`;

const ProductContent = styled.div`
  padding: 25px;
`;

const ProductTitle = styled.h3`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
  text-align: center;
`;

const ViewDetailsButton = styled.button`
  background: #C2AB8E;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: #B19A7D;
    transform: translateY(-2px);
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 15px;
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
  overflow: hidden;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const ModalTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
`;

const Products = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      icon: "🚪",
      title: "Doors & Door Frames",
      image: "https://i.postimg.cc/RCDgkB4v/IMG-20250806-WA0109.jpg",
      route: "doors-door-frames"
    },
    {
      icon: "🪟",
      title: "Window Frame & Sashes",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      route: "window-frame-sashes"
    },
    {
      icon: "🛤️",
      title: "Hand Rail",
      image: "https://i.postimg.cc/4NxZKmkF/IMG-20250806-WA0159.jpg",
      route: "hand-rail"
    },
    {
      icon: "🥘",
      title: "Pantry Cupboards",
      image: "https://i.postimg.cc/x8TrbF7b/IMG-20250806-WA0164.jpg",
      route: "pantry-cupboards"
    },
    {
      icon: "🏠",
      title: "Ceiling & Roof",
      image: "https://i.postimg.cc/XY0wnSyL/IMG-20250823-WA0034.jpg",
      route: "ceiling-roof"
    },
    {
      icon: "🪵",
      title: "Wooden Flooring",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      route: "wooden-flooring"
    }
  ];

  const handleProductClick = (product) => {
    navigate(`/products/${product.route}`);
  };

  const handleImageClick = (image, title, e) => {
    e.stopPropagation(); // Prevent card click when clicking image
    setSelectedImage({ image, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <ProductsContainer>
      <Navbar />
      <ProductsContent>
        <ProductsHeader>
          <ProductsTitle>Our Wood Products</ProductsTitle>
          <ProductsSubtitle>
            Discover our premium range of wooden products crafted with precision and quality materials
          </ProductsSubtitle>
        </ProductsHeader>

        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard key={index} onClick={() => handleProductClick(product)}>
              <ProductImage 
                hasImage={product.image}
                onClick={(e) => product.image && handleImageClick(product.image, product.title, e)}
              >
                {product.image ? (
                  <ProductImageElement src={product.image} alt={product.title} />
                ) : (
                  <ProductIcon>{product.icon}</ProductIcon>
                )}
              </ProductImage>
              <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                
                <ViewDetailsButton onClick={(e) => {
                  e.stopPropagation();
                  handleProductClick(product);
                }}>
                  View Details & Photos
                </ViewDetailsButton>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductsGrid>
      </ProductsContent>

      {/* Image Modal */}
      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
            <ModalImage src={selectedImage.image} alt={selectedImage.title} />
            <ModalTitle>{selectedImage.title}</ModalTitle>
          </ModalContent>
        </ModalOverlay>
      )}

      <Footer />
    </ProductsContainer>
  );
};

export default Products; 