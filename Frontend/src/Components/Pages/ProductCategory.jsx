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
  cursor: pointer;

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

/* ===== Modal Styles ===== */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
`;

const ProductCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const productData = {
    "doors-door-frames": {
      title: "Doors & Door Frames",
      subtitle: "High-quality wooden doors and door frames crafted with precision and durability",
      photos: {
        "Entrance Doors": [
          { url: "https://i.postimg.cc/FFW0qHrK/IMG-20250806-WA0163.jpg", title: "Modern Double Door" },
          { url: "https://i.postimg.cc/gjQX0rjq/IMG-20250806-WA0157.jpg", title: "Classic Wooden Door" }
        ],
        "Interior Doors": [
          { url: "https://i.postimg.cc/SRMc0HfK/IMG-20250806-WA0173.jpg", title: "Bedroom Door" },
          { url: "https://i.postimg.cc/prX3qYfk/IMG-20250806-WA0174.jpg", title: "Bathroom Door" }
        ],
        "Door Frames": [
          { url: "https://i.postimg.cc/RCDgkB4v/IMG-20250806-WA0109.jpg", title: "Custom Door Frame" },
          { url: "https://i.postimg.cc/TYyJ0Jr8/Whats-App-Image-2025-08-17-at-22-15-51-12ab92fc.jpg", title: "Custom Door Frame" }
        ]
      }
    },
    "window-frame-sashes": {
      title: "Window Frame & Sashes",
      subtitle: "Custom wooden window frames and sashes designed for both functionality and aesthetic appeal",
      photos: {
        "Window Frames": [
          { url: "https://i.postimg.cc/FsWWTKfq/IMG-20250823-WA0013.jpg", title: "Modern Window Frame" },
          { url: "https://i.postimg.cc/HxgBrcKJ/IMG-20250823-WA0018.jpg", title: "Modern Window Frame" },
          { url: "https://i.postimg.cc/tgHhk0zw/IMG-20250823-WA0020.jpg", title: "Modern Window Frame" },
          { url: "https://i.postimg.cc/SsgCmnpb/IMG-20250823-WA0014.jpg", title: "Modern Window Frame" }
        ]
      }
    },
    "hand-rail": {
      title: "Hand Rail",
      subtitle: "Durable and stylish wooden hand rails for staircases and balconies",
      photos: {
        "Hand Rail Designs": [
          { url: "https://i.postimg.cc/xyz123/handrail1.jpg", title: "Classic Hand Rail" },
          { url: "https://i.postimg.cc/xyz123/handrail2.jpg", title: "Modern Hand Rail" }
        ]
      }
    },
    "pantry-cupboards": {
      title: "Pantry Cupboards",
      subtitle: "Custom-designed pantry cupboards combining functionality and elegance",
      photos: {
        "Cupboard Designs": [
          { url: "https://i.postimg.cc/x8TrbF7b/IMG-20250806-WA0164.jpg", title: "Modern Pantry" },
          { url: "https://i.postimg.cc/RhNBDDRx/IMG-20250806-WA0193.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/QN9NSFn9/IMG-20250806-WA0198.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/0Q6vt4ZR/IMG-20250806-WA0201.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/MK0SrV0T/IMG-20250816-WA0025.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/VNvP6hxr/IMG-20250816-WA0029.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/0Q6vt4ZR/IMG-20250806-WA0201.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/NMRJf7j2/IMG-20250806-WA0145.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/sg8wY0BZ/IMG-20250806-WA0122.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/ncSkxwGw/IMG-20250806-WA0110.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/VN8bPjpV/IMG-20250806-WA0113.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/yxkDyn3k/IMG-20250806-WA0112.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/3NVdSp29/IMG-20250806-WA0119.jpg", title: "Classic Pantry" },
          { url: "https://i.postimg.cc/gJ0jG4DN/IMG-20250816-WA0023.jpg", title: "Classic Pantry" },

        ]
      }
    },
    "ceiling-roof": {
      title: "Ceiling & Roof",
      subtitle: "Stylish and strong wooden ceilings and roofing solutions",
      photos: {
        "Ceiling Designs": [
          { url: "https://i.postimg.cc/4xC1nHjz/IMG-20250806-WA0105.jpg", title: "Wooden Ceiling" },
          { url: "https://i.postimg.cc/B6wT3jxP/IMG-20250823-WA0035.jpg", title: "Roofing Design" }
        ]
      }
    },
    "wooden-flooring": {
      title: "Wooden Flooring",
      subtitle: "Premium quality wooden flooring for homes and offices",
      photos: {
        "Flooring Designs": [
          { url: "https://i.postimg.cc/xyz123/floor1.jpg", title: "Classic Flooring" },
          { url: "https://i.postimg.cc/xyz123/floor2.jpg", title: "Modern Flooring" }
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

        <PhotoGrid>
          {Object.entries(currentProduct.photos).map(([sectionTitle, photos]) => (
            <PhotoSection key={sectionTitle}>
              <SectionTitle>{sectionTitle}</SectionTitle>
              <PhotoRow>
                {photos.map((photo, index) => (
                  <PhotoItem key={index} onClick={() => setSelectedPhoto(photo.url)}>
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

      {selectedPhoto && (
        <ModalOverlay onClick={() => setSelectedPhoto(null)}>
          <ModalImage src={selectedPhoto} alt="Full View" />
        </ModalOverlay>
      )}
    </CategoryContainer>
  );
};

export default ProductCategory;
