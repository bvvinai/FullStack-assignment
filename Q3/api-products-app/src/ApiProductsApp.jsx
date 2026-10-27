import React from 'react';

const syllabus = [
  'REST API design and HTTP fundamentals',
  'Authentication and authorization',
  'API versioning and documentation',
  'Product inventory and catalog APIs',
  'Testing and monitoring microservices',
  'API security and deployment strategies',
];

export default function ApiProductsApp() {
  return (
    <section style={{ padding: '1.5rem', background: '#eef2ff', borderRadius: '12px' }}>
      <h2>ApiProducts Syllabus</h2>
      <ul>
        {syllabus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
