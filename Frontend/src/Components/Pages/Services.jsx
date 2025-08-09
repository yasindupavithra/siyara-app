import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #f8f9fa;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const ServicesTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  font-size: 2.5rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #007bff;
`;

const ServiceTitle = styled.h3`
  color: #333;
  margin-bottom: 15px;
  font-size: 1.5rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Services = () => {
  const services = [
    {
      icon: "🏠",
      title: "Interior Design",
      description: "Professional interior design services to transform your space into a beautiful and functional environment."
    },
    {
      icon: "🔨",
      title: "Installation",
      description: "Expert installation services for all types of furniture and home decor items."
    },
    {
      icon: "🚚",
      title: "Delivery",
      description: "Fast and reliable delivery services to bring your furniture right to your doorstep."
    },
    {
      icon: "🔧",
      title: "Maintenance",
      description: "Regular maintenance and repair services to keep your furniture in perfect condition."
    },
    {
      icon: "📋",
      title: "Consultation",
      description: "Free consultation services to help you choose the perfect furniture for your space."
    },
    {
      icon: "🎨",
      title: "Custom Design",
      description: "Custom furniture design services to create unique pieces that match your style."
    }
  ];

  return (
    <>
      <Navbar />
      <ServicesContainer>
        <ServicesContent>
          <ServicesTitle>Our Services</ServicesTitle>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </ServicesContent>
      </ServicesContainer>
      <Footer />
    </>
  );
};

export default Services; 