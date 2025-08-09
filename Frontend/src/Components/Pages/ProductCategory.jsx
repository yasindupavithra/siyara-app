import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #f8f9fa;
`;

const CategoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  font-family: 'Manrope', sans-serif;
`;

const CategorySubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;
`;

const BackButton = styled.button`
  background: #C2AB8E;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  transition: all 0.3s ease;
  margin-bottom: 30px;

  &:hover {
    background: #B19A7D;
    transform: translateY(-2px);
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;
`;

const PhotoSection = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-family: 'Manrope', sans-serif;
  border-bottom: 2px solid #C2AB8E;
  padding-bottom: 10px;
`;

const PhotoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const PhotoItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PhotoCaption = styled.div`
  padding: 15px;
`;

const PhotoTitle = styled.h3`
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-family: 'Manrope', sans-serif;
`;

const PhotoDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ProductInfo = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-family: 'Manrope', sans-serif;
`;

const InfoDescription = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 25px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: #555;
  margin-bottom: 12px;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &::before {
    content: '✓';
    color: #C2AB8E;
    font-weight: bold;
    margin-right: 12px;
    font-size: 1.2rem;
  }
`;

const ContactSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-family: 'Manrope', sans-serif;
`;

const ContactButton = styled.button`
  background: #C2AB8E;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    background: #B19A7D;
    transform: translateY(-2px);
  }
`;

const ProductCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Product data with detailed information for each category
  const productData = {
    "doors-door-frames": {
      title: "Doors & Door Frames",
      subtitle: "High-quality wooden doors and door frames crafted with precision and durability",
      description: "Our doors and door frames are crafted from premium wood materials, ensuring both beauty and durability. We offer a wide range of designs from traditional to modern, all custom-made to fit your specific requirements.",
      features: [
        "Solid wood construction for maximum durability",
        "Multiple design options to match your style",
        "Custom sizing available for perfect fit",
        "Premium finishes and treatments",
        "Professional installation service",
        "Weather-resistant for exterior doors",
        "Sound insulation for interior doors"
      ],
      photos: {
        "Entrance Doors": [
          { 
            url: "https://i.postimg.cc/FFW0qHrK/IMG-20250806-WA0163.jpg", 
            title: "Modern Double Door",
            description: "Elegant double door with brass hardware"
          },
          { 
            url: "https://i.postimg.cc/gjQX0rjq/IMG-20250806-WA0157.jpg", 
            title: "Classic Wooden Door",
            description: "Traditional design with rich wood finish"
          }
        ],
        "Interior Doors": [
          { 
            url: "https://i.postimg.cc/SRMc0HfK/IMG-20250806-WA0173.jpg", 
            title: "Bedroom Door",
            description: "Privacy door with elegant design"
          },
          { 
            url: "https://i.postimg.cc/prX3qYfk/IMG-20250806-WA0174.jpg", 
            title: "Bathroom Door",
            description: "Moisture-resistant interior door"
          }
        ],
        "Door Frames": [
          { 
            
            url: "https://i.postimg.cc/RCDgkB4v/IMG-20250806-WA0109.jpg", 
            title: "Custom Door Frame",
            description: "Precisely crafted door frames"
          }
        ]
      }
    },
    "window-frame-sashes": {
      title: "Window Frame & Sashes",
      subtitle: "Custom wooden window frames and sashes designed for both functionality and aesthetic appeal",
      description: "Our window frames and sashes combine traditional craftsmanship with modern functionality. Each window is designed to provide excellent ventilation while maintaining energy efficiency and visual appeal.",
      features: [
        "Weather-resistant design for all climates",
        "Smooth operation with quality hardware",
        "Custom measurements for perfect fit",
        "Multiple wood types available",
        "Professional installation included",
        "Energy-efficient design",
        "Easy maintenance and cleaning"
      ],
      photos: {
        "Window Frames": [
          { 
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
            title: "Modern Window Frame",
            description: "Contemporary design with clean lines"
          }
        ]
      }
    },
    "hand-rail": {
      title: "Hand Rail",
      subtitle: "Elegant wooden hand rails for staircases and balconies",
      description: "Our hand rails combine safety with sophisticated design. Perfect for staircases, balconies, and any area requiring support, our hand rails are crafted to provide both functionality and aesthetic appeal.",
      features: [
        "Safety-compliant design standards",
        "Smooth finish for comfortable grip",
        "Custom designs to match your style",
        "Durable construction for long life",
        "Easy maintenance and cleaning",
        "Professional installation service",
        "Multiple wood types available"
      ],
      photos: {
        "Staircase Hand Rails": [
          { 
            url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
            title: "Elegant Staircase Rail",
            description: "Classic design with smooth finish"
          }
        ]
      }
    },
    "pantry-cupboards": {
      title: "Pantry Cupboards",
      subtitle: "Custom pantry cupboards designed to maximize storage space",
      description: "Our pantry cupboards are designed to maximize storage efficiency while maintaining beautiful aesthetics. Perfect for kitchens and storage areas, they help organize your space effectively.",
      features: [
        "Optimized storage space design",
        "Adjustable shelves for flexibility",
        "Quality hardware for smooth operation",
        "Custom dimensions to fit your space",
        "Professional finish and installation",
        "Durable construction for long life",
        "Easy cleaning and maintenance"
      ],
      photos: {
        "Kitchen Cupboards": [
          { 
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
            title: "Modern Kitchen Cupboard",
            description: "Efficient storage with modern design"
          }
        ]
      }
    },
    "ceiling-roof": {
      title: "Ceiling & Roof",
      subtitle: "Wooden ceiling and roof solutions that add warmth and character",
      description: "Our wooden ceiling and roof solutions add natural warmth and character to any space. Available in various patterns and finishes, they provide both aesthetic appeal and functional benefits.",
      features: [
        "Acoustic benefits for sound control",
        "Thermal insulation properties",
        "Custom patterns and designs",
        "Natural wood finish options",
        "Professional installation service",
        "Durable and long-lasting",
        "Easy maintenance and cleaning"
      ],
      photos: {
        "Wooden Ceilings": [
          { 
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
            title: "Elegant Wooden Ceiling",
            description: "Beautiful wooden ceiling design"
          }
        ]
      }
    },
    "wooden-flooring": {
      title: "Wooden Flooring",
      subtitle: "Premium wooden flooring solutions for homes and commercial spaces",
      description: "Our wooden flooring solutions offer the perfect combination of beauty, durability, and functionality. Available in various wood types, patterns, and finishes to suit any space and style.",
      features: [
        "High-quality wood materials",
        "Multiple patterns and designs",
        "Easy maintenance and cleaning",
        "Long-lasting finish and durability",
        "Professional installation service",
        "Custom sizing and fitting",
        "Warranty on all products"
      ],
      photos: {
        "Wooden Floors": [
          { 
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
            title: "Premium Wooden Flooring",
            description: "High-quality wooden flooring installation"
          }
        ]
      }
    }
  };

  const currentProduct = productData[category];

  if (!currentProduct) {
    return (
      <CategoryContainer>
        <Navbar />
        <CategoryContent>
          <BackButton onClick={() => navigate('/products')}>← Back to Products</BackButton>
          <CategoryHeader>
            <CategoryTitle>Product Not Found</CategoryTitle>
            <CategorySubtitle>The requested product category does not exist.</CategorySubtitle>
          </CategoryHeader>
        </CategoryContent>
        <Footer />
      </CategoryContainer>
    );
  }

  const handleContact = () => {
    alert(`Thank you for your interest in ${currentProduct.title}! We'll contact you soon with more details.`);
  };

  return (
    <CategoryContainer>
      <Navbar />
      <CategoryContent>
        <BackButton onClick={() => navigate('/products')}>← Back to Products</BackButton>
        
        <CategoryHeader>
          <CategoryTitle>{currentProduct.title}</CategoryTitle>
          <CategorySubtitle>{currentProduct.subtitle}</CategorySubtitle>
        </CategoryHeader>

        <ProductInfo>
          <InfoTitle>About Our {currentProduct.title}</InfoTitle>
          <InfoDescription>{currentProduct.description}</InfoDescription>
          <FeatureList>
            {currentProduct.features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeatureList>
        </ProductInfo>

        <PhotoGrid>
          {Object.entries(currentProduct.photos).map(([sectionTitle, photos]) => (
            <PhotoSection key={sectionTitle}>
              <SectionTitle>{sectionTitle}</SectionTitle>
              <PhotoRow>
                {photos.map((photo, index) => (
                  <PhotoItem key={index}>
                    <PhotoImage src={photo.url} alt={photo.title} />
                    <PhotoCaption>
                      <PhotoTitle>{photo.title}</PhotoTitle>
                      <PhotoDescription>{photo.description}</PhotoDescription>
                    </PhotoCaption>
                  </PhotoItem>
                ))}
              </PhotoRow>
            </PhotoSection>
          ))}
        </PhotoGrid>

        <ContactSection>
          <ContactTitle>Interested in Our {currentProduct.title}?</ContactTitle>
          <ContactButton onClick={handleContact}>
            Get Quote for {currentProduct.title}
          </ContactButton>
        </ContactSection>
      </CategoryContent>
      <Footer />
    </CategoryContainer>
  );
};

export default ProductCategory; 