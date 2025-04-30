import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactMarkdown from "react-markdown";
import "./aiml.css";

const Aiml = () => {
  const { name } = useParams();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const programmeInfo = {
    aiml: {
      title:
        "Computer Science & Engineering (Artificial Intelligence /Machine Learning) ",
      description: `
**Learn AI, Machine Learning, Deep Learning, and automation techniques with real-time applications in industries.**
      `,
    },
    cseds: {
      title: "Computer Science & Engineering)",
      description: `
**Master data analytics, big data processing, visualization, and predictive modeling for decision making.**
      `,
    },
    et: {
      title: "Electronics Engineering",
      description: `
**Electronics Engineering** is a core branch of engineering that focuses on the design, development, and testing of electronic circuits, devices, and systems.

**Objectives:**  
1. **Core Technical Knowledge**  
Develop a strong foundation in mathematics, physics, and the principles of electronic circuits, systems, and devices. Understand the theory and application of semiconductors, analog and digital electronics, embedded systems, and signal processing.

2. **Design and Problem Solving**  
Apply engineering principles to design and analyze electronic systems and components. Develop problem-solving skills to address real-world engineering challenges using modern tools and techniques.

3. **Hands-on Skills and Laboratory Experience**  
Gain practical experience through laboratory work and projects involving circuit design, microcontrollers, communication systems, and VLSI. Learn to use electronic design automation (EDA) tools, testing equipment, and simulation software.

4. **Communication and Teamwork**  
Communicate technical information effectively through written reports, presentations, and collaborative projects. Work efficiently in teams, understanding the importance of interdisciplinary collaboration.

5. **Ethics and Lifelong Learning**  
Understand professional and ethical responsibilities in engineering practice. Appreciate the importance of continuous learning to adapt to evolving technologies and industry needs.

6. **Innovation and Research**  
Encourage creativity and innovation in electronics design and development. Develop research skills and engage with emerging areas such as IoT, robotics, and artificial intelligence.

**Electronics in the Modern Era**  
Electronics is the backbone of today’s digital world—powering smartphones, satellites, medical devices, and smart systems. By studying electronics, you become part of the innovation that shapes our future.

**Career Opportunities**  
Electronics engineers are in high demand across multiple industries: telecom, consumer electronics, automotive, defense, IT, aerospace, and more. The skills are transferable globally and relevant to both core and tech industries. Many electronics graduates secure placements in top companies such as Intel, Qualcomm, ISRO, DRDO, TCS, Infosys, and startups working on next-gen technologies.

**Interdisciplinary:**  
The branch integrates with computer science, robotics, AI, IoT, and data science—opening doors to a wide range of specializations and research opportunities. Students can also make their career in mechatronics, industrial automation & robotics.

**Scope to Entrepreneurship:**  
With skills in embedded systems, hardware design, and automation, students can innovate, develop their own products, or launch tech startups. Tremendous opportunities exist in drone technology, IoT, healthcare instruments, and smart city services.

**Future belongs to Electronics:**  
From 5G to smart cities to electric vehicles, electronics engineers are key drivers of technological advancement. Hardware for AI, autonomous vehicles, user-friendly robots, and autonomous systems will dominate the market.

**Key Areas of Study:**  
1. Analog and Digital Electronics  
2. Microprocessors and Microcontrollers  
3. Embedded Systems  
4. Communication Systems (Wireless, Optical, Satellite)  
5. VLSI (Very Large Scale Integration) Design  
6. Signal Processing  
7. Control Systems and Instrumentation  
8. Computer Architecture and Organization  

**Department’s Efforts to Build Strong Electronics Engineers**  
We are committed to nurturing well-rounded, technically competent, and industry-ready graduates through:

- **Industry-Aligned Teaching:** Regular expert talks on recent trends in electronics, IoT, AI hardware, embedded systems, and 5G.
- **Experienced Faculty & Expert Mentorship:** Practical, project-based learning with strong academic guidance.
- **Advanced Laboratories & Facilities:** State-of-the-art labs for VLSI, embedded systems, and communication systems.
- **Industry Interaction & Internships:** Industry visits, internships, guest lectures, and workshops.
- **Skill Development Programs:** Certification courses (MATLAB, Arduino, PCB Design, VLSI), coding bootcamps, and soft skills training.
- **Research & Innovation Culture:** Research projects, paper publications, and participation in national-level competitions.
- **Placement Support & Career Guidance:** Strong placement records, mock interviews, and career counseling sessions.
      `,
    },
    it: {
      title: "Information Technology",
      description: `
**Build web, mobile, and cloud applications with exposure to cybersecurity, DevOps, and full-stack development.**
      `,
    },
  };

  const details = programmeInfo[name];

  if (!details) {
    return (
      <div className="container programme-details">
        <h2>Programme Not Found</h2>
        <Link to="/" className="btn btn-explore">
          ← Back to Programmes
        </Link>
      </div>
    );
  }

  return (
    <div className="container programme-details" data-aos="fade-up">
      <div className="programme-card">
        <h2>{details.title}</h2>
        <ReactMarkdown>{details.description}</ReactMarkdown>
        <Link to="/programs" className="btn btn-explore">
          ← Back to Programmes
        </Link>
      </div>
    </div>
  );
};

export default Aiml;
