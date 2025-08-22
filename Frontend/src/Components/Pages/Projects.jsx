import React, { useState } from 'react';
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
      content: '🔍 Click to view images';
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

const ProjectImageElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectImage}:hover & {
    transform: scale(1.05);
  }
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
  margin-bottom: 0;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
  text-align: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 70vh;
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
  margin-top: 10px;
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 20px;
`;

const NavButton = styled.button`
  background: rgba(0,0,0,0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 22px;
  cursor: pointer;
  transition: background 0.3s ease;
  z-index: 1001;

  &:hover {
    background: rgba(0,0,0,0.9);
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Project data with multiple images
  const projects = [
    {
      title: "P01",
      images: [
        "https://i.postimg.cc/t40rSLW2/IMG-20250806-WA0170.jpg",
        "https://i.postimg.cc/HW608F6V/IMG-20250806-WA0166.jpg",
        "https://i.postimg.cc/y8cSjGyh/IMG-20250806-WA0168.jpg"
      ]
    },
    {
      title: "P02",
      images: [
        "https://i.postimg.cc/rsNSfPkY/IMG-20250806-WA0143.jpg",
        "https://i.postimg.cc/63khTZWt/IMG-20250806-WA0171.jpg",
        "https://i.postimg.cc/8zpmFNSJ/IMG-20250816-WA0029.jpg",
        "https://i.postimg.cc/yYVZjjr2/IMG-20250816-WA0022.jpg"
      ]
    },
    {
      title: "P03",
      images: [
        "https://i.postimg.cc/qMcNXtzc/IMG-20250806-WA0103.jpg",
        "https://i.postimg.cc/FH97P9LM/IMG-20250806-WA0102.jpg",

      ]
    },
    {
      title: "P04",
      images: [
        "https://i.postimg.cc/PfYJTLzG/IMG-20250806-WA0135.jpg",
        "https://i.postimg.cc/SxTNDcq9/IMG-20250806-WA0136.jpg",
        "https://i.postimg.cc/fbVWFkTr/IMG-20250806-WA0137.jpg",
        "https://i.postimg.cc/L4t9Gc22/IMG-20250806-WA0146.jpg",
        "https://i.postimg.cc/0yBPpxdd/IMG-20250806-WA0149.jpg",
      ]
    },
    {
      title: "P05",
      images: [
        "https://i.postimg.cc/4xqRYPsW/IMG-20250806-WA0139.jpg",
        "https://i.postimg.cc/rmL6JpdW/IMG-20250806-WA0131.jpg",
        
      ]
    },
    {
      title: "P06",
      images: [
        "https://i.postimg.cc/Z591zNpp/IMG-20250806-WA0156.jpg",
        "https://i.postimg.cc/xjt7k5PL/IMG-20250806-WA0161.jpg",
        
      ]
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const showPrev = () => {
    if (selectedProject) {
      setCurrentIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const showNext = () => {
    if (selectedProject) {
      setCurrentIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <ProjectsContainer>
      <Navbar />
      <ProjectsContent>
        <ProjectsTitle>Our Projects</ProjectsTitle>
        <ProjectsSubtitle>
          Discover our premium range of projects crafted with precision and quality materials
        </ProjectsSubtitle>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage 
                hasImage={project.images.length > 0}
                onClick={() => handleProjectClick(project)}
              >
                {project.images.length > 0 ? (
                  <ProjectImageElement src={project.images[0]} alt={project.title} />
                ) : (
                  <ProjectIcon>🏠</ProjectIcon>
                )}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>

      {/* Image Modal */}
      {selectedProject && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
            
            <ModalImage
              src={selectedProject.images[currentIndex]}
              alt={selectedProject.title}
            />
            <ModalTitle>
              {selectedProject.title} ({currentIndex + 1}/{selectedProject.images.length})
            </ModalTitle>

            {selectedProject.images.length > 1 && (
              <NavButtons>
                <NavButton onClick={showPrev}>‹</NavButton>
                <NavButton onClick={showNext}>›</NavButton>
              </NavButtons>
            )}
          </ModalContent>
        </ModalOverlay>
      )}

      <Footer />
    </ProjectsContainer>
  );
};

export default Projects;
