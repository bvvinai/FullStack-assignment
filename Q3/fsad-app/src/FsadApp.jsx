import React from 'react';

const syllabus = [
  'Introduction to Full Stack Development',
  'Frontend Fundamentals: HTML, CSS, JavaScript',
  'React and component-driven UI design',
  'REST APIs and backend integration',
  'Database basics and persistence',
  'Deployment, CI/CD, and project architecture',
];

export default function FsadApp() {
  return (
    <section style={{ padding: '1.5rem', background: '#f3f4f6', borderRadius: '12px' }}>
      <h2>FSAD Syllabus</h2>
      <ul>
        {syllabus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
