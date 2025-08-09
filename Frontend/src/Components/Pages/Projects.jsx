import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #f8f9fa;
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const ProjectsTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-family: 'Manrope', sans-serif;
`;

const ProjectsSubtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 50px;
  font-size: 1.1rem;
  font-family: 'Manrope', sans-serif;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
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

const ProjectImageElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectIcon = styled.div`
  position: relative;
  z-index: 2;
`;

const ProjectContent = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
`;

const ProjectTitleSinhala = styled.h4`
  color: #666;
  margin-bottom: 15px;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Manrope', sans-serif;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
`;

const ProjectFeatures = styled.div`
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: #555;
  margin-bottom: 6px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;

  &::before {
    content: '✓';
    color: #C2AB8E;
    font-weight: bold;
    margin-right: 8px;
  }
`;

const ProjectCategory = styled.span`
  background: #C2AB8E;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ContactButton = styled.button`
  background: #C2AB8E;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
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

const Projects = () => {
  const projects = [
    {
      icon: "🚪",
      title: "Doors & Door Frames",
      titleSinhala: "දොරවල් සහ දොර රාමු",
      description: "High-quality wooden  frames crafted with precision and durability. Available in various designs and finishes to match your interior style.",
      features: [
        "Solid wood construction - ඝන ලී ඉදිකිරීම",
        "Multiple design options - විවිධ නිර්මාණ විකල්ප",
        "Custom sizing available - අභිරුචි ප්‍රමාණ",
        "Premium finishes - උසස් අවසන් කිරීම්",
        "Durable and long-lasting - කාලෝචිත සහ දිගු කාලයක් පවතින"
      ],
      category: "Wooden Doors",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: "🪟",
      title: "Window Frame & Sashes",
      titleSinhala: "කවුළු රාමු සහ කවුළු පුවරු",
      description: "Custom wooden window frames and sashes designed for both functionality and aesthetic appeal. Perfect for traditional and modern homes.",
      features: [
        "Weather-resistant design - කාලගුණ ප්‍රතිරෝධී නිර්මාණය",
        "Smooth operation - සුමට ක්‍රියාකාරිත්වය",
        "Custom measurements - අභිරුචි මිනුම්",
        "Multiple wood types - විවිධ ලී වර්ග",
        "Professional installation - වෘත්තීය ස්ථාපනය"
      ],
      category: "Window Frames",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
    },
    {
      icon: "🛤️",
      title: "Hand Rail",
      titleSinhala: "අත පොරොව",
      description: "Elegant wooden hand rails for staircases and balconies. Combining safety with sophisticated design for your home or commercial space.",
      features: [
        "Safety-compliant design - ආරක්ෂාවට අනුකූල නිර්මාණය",
        "Smooth finish - සුමට අවසන් කිරීම",
        "Custom designs - අභිරුචි නිර්මාණ",
        "Durable construction - කාලෝචිත ඉදිකිරීම",
        "Easy maintenance - පහසු නඩත්තුව"
      ],
      category: "Safety & Design",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: "🥘",
      title: "Pantry Cupboards",
      titleSinhala: "පාන්ත්‍රි රාක්ක",
      description: "Custom pantry cupboards designed to maximize storage space while maintaining a beautiful appearance. Perfect for kitchens and storage areas.",
      features: [
        "Optimized storage space - ප්‍රශස්ත ගබඩා අවකාශ",
        "Adjustable shelves - සකස් කළ හැකි රාක්ක",
        "Quality hardware - උසස් උපාංග",
        "Custom dimensions - අභිරුචි මාන",
        "Professional finish - වෘත්තීය අවසන් කිරීම"
      ],
      category: "Storage Solutions",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: "🏠",
      title: "Ceiling & Roof",
      titleSinhala: "සිවිලිම සහ වහල",
      description: "Wooden ceiling and roof solutions that add warmth and character to any space. Available in various patterns and finishes.",
      features: [
        "Acoustic benefits - ශබ්ද විද්‍යාත්මක ප්‍රතිලාභ",
        "Thermal insulation - තාප පරිවාරණය",
        "Custom patterns - අභිරුචි රටා",
        "Natural wood finish - ස්වාභාවික ලී අවසන් කිරීම",
        "Professional installation - වෘත්තීය ස්ථාපනය"
      ],
      category: "Ceiling & Roofing",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: "🪵",
      title: "Wooden Flooring",
      titleSinhala: "ලී තට්ටු",
      description: "Premium wooden flooring solutions for homes and commercial spaces. Available in various wood types, patterns, and finishes.",
      features: [
        "High-quality wood - උසස් තත්වයේ ලී",
        "Multiple patterns - විවිධ රටා",
        "Easy maintenance - පහසු නඩත්තුව",
        "Long-lasting finish - දිගු කාලයක් පවතින අවසන් කිරීම",
        "Professional installation - වෘත්තීය ස්ථාපනය"
      ],
      category: "Flooring",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const handleContact = (projectName) => {
    alert(`Thank you for your interest in ${projectName}! We'll contact you soon with more details.`);
  };

  return (
    <ProjectsContainer>
      <Navbar />
      <ProjectsContent>
        <ProjectsTitle>Our Wood Projects</ProjectsTitle>
        <ProjectsSubtitle>
          Discover our premium range of wooden products and projects crafted with precision and quality materials
        </ProjectsSubtitle>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage hasImage={project.image}>
                {project.image ? (
                  <ProjectImageElement src={project.image} alt={project.title} />
                ) : (
                  <ProjectIcon>{project.icon}</ProjectIcon>
                )}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectTitleSinhala>{project.titleSinhala}</ProjectTitleSinhala>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectFeatures>
                  <FeatureList>
                    {project.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                    ))}
                  </FeatureList>
                </ProjectFeatures>

                <ProjectCategory>{project.category}</ProjectCategory>
                
                <ContactButton onClick={() => handleContact(project.title)}>
                  Get Quote for {project.title}
                </ContactButton>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
      <Footer />
    </ProjectsContainer>
  );
};

export default Projects; 