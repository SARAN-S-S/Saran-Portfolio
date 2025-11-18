// Education Section Logo's
import sslcLogo from './assets/education_logo/sslc.png';
import bitLogo from './assets/education_logo/bit.png';
import hscLogo from './assets/education_logo/hsc.jpeg';

// Projects Section Logo's
import accident from './assets/projects_logo/accident1.jpg';
import atm from './assets/projects_logo/atm2.webp';
import career from './assets/projects_logo/career1.jpg';
import portfolio from './assets/projects_logo/portfolio1.jpg';
import studentachievement from './assets/projects_logo/studentachievement1.jpg';
import supermarket from './assets/projects_logo/supermarket2.jpg';
import weather from './assets/projects_logo/weather1.jpg';

// Profile Image
import profileImage from './assets/profile.png';

export const education = [
  {
    id: 1,
    degree: "B.E Electronics and Communication Engineering",
    school: "Bannari Amman Institute of Technology",
    date: "2021 - 2025",
    grade: "CGPA: 8.14",
    desc: "Pursuing engineering with focus on electronics, communication systems, and software development. Actively participating in technical projects and coding competitions.",
    img: bitLogo
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    school: "Sree Venkateswara Higher Secondary School",
    date: "2020 - 2021",
    grade: "Percentage: 90.95%",
    desc: "Completed higher secondary education with focus on mathematics and science. Developed strong analytical and problem-solving skills.",
    img: hscLogo
  },
  {
    id: 3,
    degree: "Secondary School Leaving Certificate (SSLC)",
    school: "Vishveshvaraiah Matric Hr Sec School",
    date: "2019 - 2020",
    grade: "Percentage: 89.8%",
    desc: "Completed secondary education with excellent academic performance. Built foundation for higher studies in science and technology.",
    img: sslcLogo
  }
];

// Export all images
export {
  accident,
  atm,
  career,
  portfolio,
  studentachievement,
  supermarket,
  weather,
  profileImage
};