import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const ContactContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  font-family: 'Manrope', sans-serif;
`;

const ContactSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const ContactForm = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const MapContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-top: 40px;
`;

const MapTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Manrope', sans-serif;
  text-align: center;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
`;

const InfoItem = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #C2AB8E;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 1.9rem;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;
  font-family: 'Manrope', sans-serif;
`;

const InfoText = styled.p`
  color: #777;
  font-size: 1.75rem;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-family: 'Manrope', sans-serif;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Manrope', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #C2AB8E;
    box-shadow: 0 0 0 2px rgba(194, 171, 142, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Manrope', sans-serif;
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #C2AB8E;
    box-shadow: 0 0 0 2px rgba(194, 171, 142, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: #C2AB8E;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  transition: background-color 0.3s ease;
  
  &:hover {
    background:rgb(88, 148, 67);
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <ContactContainer>
      <Navbar />
      <ContactContent>
        <ContactHeader>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactSubtitle>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </ContactSubtitle>
        </ContactHeader>

        <ContactGrid>
          <ContactInfo>
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoContent>
                <InfoTitle>Our Location</InfoTitle>
                <InfoText>No. 509/5, Hokandara North, Arangala.</InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>📞</InfoIcon>
              <InfoContent>
                <InfoTitle>Phone Numbers</InfoTitle>
                <InfoText>0772543319<br />0112156694</InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>✉️</InfoIcon>
              <InfoContent>
                <InfoTitle>Email Address</InfoTitle>
                <InfoText>siyarasoliwoodpvtltd@gmail.com</InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>

          <ContactForm>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Full Name</FormLabel>
                <FormInput type="text" placeholder="Enter your full name" required />
              </FormGroup>

              <FormGroup>
                <FormLabel>Email Address</FormLabel>
                <FormInput type="email" placeholder="Enter your email address" required />
              </FormGroup>

              <FormGroup>
                <FormLabel>Phone Number</FormLabel>
                <FormInput type="tel" placeholder="Enter your phone number" />
              </FormGroup>

              <FormGroup>
                <FormLabel>Subject</FormLabel>
                <FormInput type="text" placeholder="What is this about?" required />
              </FormGroup>

              <FormGroup>
                <FormLabel>Message</FormLabel>
                <FormTextarea placeholder="Tell us more about your inquiry..." required />
              </FormGroup>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </form>
          </ContactForm>
        </ContactGrid>

        <MapContainer>
          <MapTitle>Find Us on Google Maps</MapTitle>
          <MapFrame 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63162209474!2d79.7861643!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sMalabe%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1640995200000!5m2!1sen!2s"
            title="Siyara Solid Wood (Pvt) Ltd Location"
            allowFullScreen=""
            loading="lazy"
          />
        </MapContainer>
      </ContactContent>
      <Footer />
    </ContactContainer>
  );
};

export default Contact; 