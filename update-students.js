import { useState } from 'react';
import Link from 'next/link';

export default function UpdateStudent() {
  const [id, setId] = useState('');
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/student/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      alert('Student updated!');
      setId('');
      setFormData({ name: '', age: '', email: '' });
    } catch (err) {
      console.error('Update failed:', err);
      alert('⚠️ Update failed. Is the student ID correct?');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✏️ Update Student</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={styles.input}
        />
        <input
          placeholder="New Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="New Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="New Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Update</button>
      </form>
      <Link href="/"><button style={styles.back}>← Back to Home</button></Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  back: {
    marginTop: '20px',
    fontSize: '0.9rem',
    backgroundColor: '#f0f0f0',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};


