import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ flex: 1 }}>
          <p>&copy; 2023 Your Company</p>
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
          }}>
            <li style={{ marginRight: '15px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
            <li style={{ marginRight: '15px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
            <li style={{ marginRight: '15px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
            <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '20px' }}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                textDecoration: 'none',
                transition: 'color 0.3s',
                ':hover': { color: '#00f' }
              }}>
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                marginLeft: '10px',
                textDecoration: 'none',
                transition: 'color 0.3s',
                ':hover': { color: '#1877f2' }
              }}>
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                marginLeft: '10px',
                textDecoration: 'none',
                transition: 'color 0.3s',
                ':hover': { color: '#25d366' }
              }}>
              <FaWhatsapp size={24} />
            </a>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p>Contact Us:</p>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
