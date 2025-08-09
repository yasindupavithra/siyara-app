import React from 'react';
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
`;

const ProductImageElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  margin-bottom: 15px;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
`;

const ProductDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const ProductFeatures = styled.div`
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: #555;
  margin-bottom: 8px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;

  &::before {
    content: '✓';
    color: #C2AB8E;
    font-weight: bold;
    margin-right: 8px;
  }
`;

const ProductCategory = styled.span`
  background: #C2AB8E;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
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
  margin-top: 15px;
  width: 100%;

  &:hover {
    background: #B19A7D;
    transform: translateY(-2px);
  }
`;

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      icon: "🚪",
      title: "Doors & Door Frames",
      description: "High-quality wooden ames crafted with precision and durability. Available in various designs and finishes to match your interior style.",
      features: [
        "Solid wood construction",
        "Multiple design options",
        "Custom sizing available",
        "Premium finishes",
        "Durable and long-lasting"
      ],
      category: "Wooden Doors",
      image: "https://i.postimg.cc/RCDgkB4v/IMG-20250806-WA0109.jpg",
      route: "doors-door-frames"
    },
    {
      icon: "🪟",
      title: "Window Frame & Sashes",
      description: "Custom wooden window frames and sashes designed for both functionality and aesthetic appeal. Perfect for traditional and modern homes.",
      features: [
        "Weather-resistant design",
        "Smooth operation",
        "Custom measurements",
        "Multiple wood types",
        "Professional installation"
      ],
      category: "Window Frames",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      route: "window-frame-sashes"
    },
    {
      icon: "🛤️",
      title: "Hand Rail",
      description: "Elegant wooden hand rails for staircases and balconies. Combining safety with sophisticated design for your home or commercial space.",
      features: [
        "Safety-compliant design",
        "Smooth finish",
        "Custom designs",
        "Durable construction",
        "Easy maintenance"
      ],
      category: "Safety & Design",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      route: "hand-rail"
    },
    {
      icon: "🥘",
      title: "Pantry Cupboards",
      description: "Custom pantry cupboards designed to maximize storage space while maintaining a beautiful appearance. Perfect for kitchens and storage areas.",
      features: [
        "Optimized storage space",
        "Adjustable shelves",
        "Quality hardware",
        "Custom dimensions",
        "Professional finish"
      ],
      category: "Storage Solutions",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      route: "pantry-cupboards"
    },
    {
      icon: "🏠",
      title: "Ceiling & Roof",
      description: "Wooden ceiling and roof solutions that add warmth and character to any space. Available in various patterns and finishes.",
      features: [
        "Acoustic benefits",
        "Thermal insulation",
        "Custom patterns",
        "Natural wood finish",
        "Professional installation"
      ],
      category: "Ceiling & Roofing",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      route: "ceiling-roof"
    },
    {
      icon: "🪵",
      title: "Wooden Flooring",
      description: "Premium wooden flooring solutions for homes and commercial spaces. Available in various wood types, patterns, and finishes.",
      features: [
        "High-quality wood",
        "Multiple patterns",
        "Easy maintenance",
        "Long-lasting finish",
        "Professional installation"
      ],
      category: "Flooring",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      route: "wooden-flooring"
    }
  ];

  const handleProductClick = (product) => {
    navigate(`/products/${product.route}`);
  };

  const handleContact = (productName) => {
    alert(`Thank you for your interest in ${productName}! We'll contact you soon with more details.`);
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
              <ProductImage hasImage={product.image}>
                {product.image ? (
                  <ProductImageElement src={product.image} alt={product.title} />
                ) : (
                  <ProductIcon>{product.icon}</ProductIcon>
                )}
              </ProductImage>
              <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                
                <ProductFeatures>
                  <FeatureList>
                    {product.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                    ))}
                  </FeatureList>
                </ProductFeatures>

                <ProductCategory>{product.category}</ProductCategory>
                
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
      <Footer />
    </ProductsContainer>
  );
};

export default Products; 