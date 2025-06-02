import React, { useState } from 'react';

function AIDialog({ open, onClose }) {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  if (!open) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(40, 30, 80, 0.7)', // subtle purple overlay
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    transition: 'background 0.4s cubic-bezier(.4,0,.2,1)'
  };

  const boxStyle = {
    background: '#fff',
    padding: '32px',
    borderRadius: '24px',
    width: '480px',
    maxWidth: '90vw',
    maxHeight: '75vh',
    overflowY: 'auto',
    boxShadow: '0 8px 32px rgba(40,30,80,0.18)',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    transition: 'box-shadow 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1)',
    transform: open ? 'scale(1)' : 'scale(0.95)',
    opacity: open ? 1 : 0
  };

  async function handleSubmit() {
    try {
      const res = await fetch('http://localhost:3001/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      // Extract only the text from candidates -> content -> parts -> text
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response available';
      setResponse(text);
    } catch (error) {
      setResponse(error.toString());
    }
  }

  function handleClose() {
    // Clear content on close
    setPrompt('');
    setResponse('');
    onClose();
  }

  return (
    <div style={overlayStyle}>
      <div style={boxStyle}>
        <h2 style={{
          color: '#b0b3c6',
          fontWeight: 600,
          fontSize: '22px',
          margin: 0,
          marginBottom: '8px',
          letterSpacing: '0.5px',
          transition: 'color 0.3s'
        }}>AI Assistant</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          style={{
            width: '100%',
            padding: '16px',
            fontSize: '16px',
            marginBottom: '0',
            borderRadius: '12px',
            border: '1.5px solid #e3e8ee',
            background: '#f6f8fa',
            color: '#22223b',
            resize: 'vertical',
            transition: 'border 0.2s, box-shadow 0.2s'
          }}
          placeholder="Ask about your business..."
        />
        <div style={{ display: 'flex', gap: '14px', marginBottom: '0' }}>
          <button 
            onClick={handleSubmit}
            style={{
              padding: '10px 28px',
              background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '16px',
              boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
              transition: 'background 0.2s, box-shadow 0.2s'
            }}
          >
            Ask 
          </button>
          <button 
            onClick={handleClose}
            style={{
              padding: '10px 28px',
              backgroundColor: '#f3f4f6',
              color: '#374151',
              border: '1.5px solid #e5e7eb',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '16px',
              transition: 'background 0.2s, border 0.2s'
            }}
          >
            Close
          </button>
        </div>
        {response && (
          <div 
            style={{
              marginTop: '8px',
              background: 'linear-gradient(90deg, #f1f5f9 0%, #e0e7ef 100%)',
              padding: '16px',
              borderRadius: '10px',
              border: '1.5px solid #e5e7eb',
              color: '#22223b',
              fontSize: '15px',
              maxHeight: '180px',
              overflowY: 'auto',
              whiteSpace: 'pre-wrap',
              boxShadow: '0 1px 4px rgba(40,30,80,0.06)',
              transition: 'background 0.3s'
            }}
          >
            {response}
          </div>
        )}
      </div>
    </div>
  );
}

export default AIDialog;
