import React from 'react';
import { FaCode, FaLaptop, FaMobileAlt, FaCloud } from 'react-icons/fa'; // Icons from react-icons

const OurServices = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'We build responsive and high-performance websites tailored to your business needs.',
    },
    {
      icon: <FaLaptop />,
      title: 'UI/UX Design',
      description: 'Our team creates intuitive and visually appealing designs for a seamless user experience.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'We develop mobile applications for both iOS and Android platforms with modern features.',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Leverage the power of the cloud for scalable and secure business solutions.',
    },
  ];

  return (
    <section className="our-services-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4" key={index}>
              <div className="card h-100 shadow-sm service-card p-4">
                <div className="service-icon mb-3" style={{ fontSize: '3rem', color: '#007bff' }}>
                  {service.icon}
                </div>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
