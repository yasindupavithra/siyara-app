import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background:rgb(210, 210, 210);
`;

const AboutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const AboutTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  font-size: 2.5rem;
`;

const AboutSection = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.8rem;
`;

const SectionText = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
  font-size: 1.1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 20px;
  background: #007bff;
  color: white;
  border-radius: 10px;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
`;

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContainer>
        <AboutContent>
          <AboutTitle>About Us</AboutTitle>
          
          <AboutSection>
            <SectionTitle>Our Story</SectionTitle>
            <SectionText>
              Founded in 2007, we have been passionate about creating beautiful and functional spaces for our customers. 
              Our journey began with a simple mission: to provide high-quality furniture and exceptional service to make 
              every home a haven of comfort and style.
            </SectionText>
            <SectionText>
              Over the years, we have grown from a small local shop to a trusted name in furniture and interior design, 
              serving thousands of satisfied customers across the country.
            </SectionText>
          </AboutSection>

          <AboutSection>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionText>
              We are committed to transforming living spaces by offering innovative furniture solutions that combine 
              aesthetics, functionality, and affordability. Our goal is to help our customers create homes that reflect 
              their unique personality and lifestyle.
            </SectionText>
          </AboutSection>

          <AboutSection>
            <SectionTitle>Our Values</SectionTitle>
            <SectionText>
              <strong>Quality:</strong> We never compromise on the quality of our products and services.
            </SectionText>
            <SectionText>
              <strong>Innovation:</strong> We continuously explore new designs and technologies to bring you the latest trends.
            </SectionText>
            <SectionText>
              <strong>Customer Satisfaction:</strong> Your satisfaction is our top priority, and we go above and beyond to exceed your expectations.
            </SectionText>
            <SectionText>
              <strong>Sustainability:</strong> We are committed to environmentally responsible practices and sustainable materials.
            </SectionText>
          </AboutSection>

          <AboutSection>
            <SectionTitle>Our Achievements</SectionTitle>
            <StatsGrid>
              <StatCard>
                <StatNumber>1000+</StatNumber>
                <StatLabel>Happy Customers</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>500+</StatNumber>
                <StatLabel>Projects Completed</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>14+</StatNumber>
                <StatLabel>Team Members</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>18+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatCard>
            </StatsGrid>
          </AboutSection>
        </AboutContent>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About; 