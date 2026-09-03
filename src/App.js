import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div style={{ backgroundColor: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', fontFamily: 'sans-serif', padding: '20px' }}>
      {/* Header */}
      <header style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #1F2937' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60A5FA' }}>Shahnawaz Khan</h1>
        <nav>
          <button onClick={() => setActiveTab('about')} style={{ background: 'none', border: 'none', color: activeTab === 'about' ? '#60A5FA' : '#9CA3AF', marginRight: '15px', cursor: 'pointer', fontWeight: 'bold' }}>About</button>
          <button onClick={() => setActiveTab('skills')} style={{ background: 'none', border: 'none', color: activeTab === 'skills' ? '#60A5FA' : '#9CA3AF', marginRight: '15px', cursor: 'pointer', fontWeight: 'bold' }}>Skills</button>
          <button onClick={() => setActiveTab('contact')} style={{ background: 'none', border: 'none', color: activeTab === 'contact' ? '#60A5FA' : '#9CA3AF', cursor: 'pointer', fontWeight: 'bold' }}>Contact</button>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '900px', margin: '40px auto', textAlign: 'left' }}>
        {/* Hero Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Digital Marketing & SEO Professional</h2>
          <p style={{ fontSize: '1.2rem', color: '#9CA3AF' }}>Helping brands grow through data-driven SEO strategies, social media optimization, and creative web design.</p>
        </section>

        {/* Dynamic Sections */}
        {activeTab === 'about' && (
          <section style={{ backgroundColor: '#111827', padding: '25px', borderRadius: '10px', border: '1px solid #1F2937' }}>
            <h3 style={{ color: '#60A5FA', fontSize: '1.5rem', marginBottom: '15px' }}>About Me</h3>
            <p style={{ lineHeight: '1.6', color: '#D1D5DB' }}>
              I am a results-oriented Digital Marketer and SEO specialist. I specialize in driving organic traffic, setting up high-converting ad campaigns, and designing modern, user-friendly responsive web pages.
            </p>
          </section>
        )}

        {activeTab === 'skills' && (
          <section style={{ backgroundColor: '#111827', padding: '25px', borderRadius: '10px', border: '1px solid #1F2937' }}>
            <h3 style={{ color: '#60A5FA', fontSize: '1.5rem', marginBottom: '15px' }}>Key Skills</h3>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', listStyle: 'none', padding: 0 }}>
              <li style={{ background: '#1F2937', padding: '10px', borderRadius: '5px' }}>⚡ Search Engine Optimization (SEO)</li>
              <li style={{ background: '#1F2937', padding: '10px', borderRadius: '5px' }}>⚡ Social Media Marketing</li>
              <li style={{ background: '#1F2937', padding: '10px', borderRadius: '5px' }}>⚡ Pay-Per-Click Ads (PPC)</li>
              <li style={{ background: '#1F2937', padding: '10px', borderRadius: '5px' }}>⚡ Content Marketing & Strategy</li>
              <li style={{ background: '#1F2937', padding: '10px', borderRadius: '5px' }}>⚡ Responsive Web Design (React)</li>
            </ul>
          </section>
        )}

        {activeTab === 'contact' && (
          <section style={{ backgroundColor: '#111827', padding: '25px', borderRadius: '10px', border: '1px solid #1F2937' }}>
            <h3 style={{ color: '#60A5FA', fontSize: '1.5rem', marginBottom: '15px' }}>Get In Touch</h3>
            <p style={{ color: '#D1D5DB', marginBottom: '10px' }}>Interested in collaborating or hiring me for digital growth? Reach out!</p>
            <p style={{ fontWeight: 'bold', color: '#10B981' }}>📧 Contact: shahnawazk726@gmail.com</p>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer style={{ maxWidth: '900px', margin: '40px auto 0', borderTop: '1px solid #1F2937', paddingTop: '20px', color: '#6B7280', textAlign: 'center', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Shahnawaz Khan. All rights reserved.
      </footer>
    </div>
  );
}
