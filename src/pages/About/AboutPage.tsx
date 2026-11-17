import React from 'react';
import { ContactPage } from '@/pages/Contact/ContactPage';

export const AboutPage: React.FC = () => {
  return <ContactPage isAboutEntry={true} />;
};

export default AboutPage;
