import { useState } from 'react';
import Link from 'next/link';

export default function DeleteStudent() {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/student/${id}`, {
        method: 'DELETE',
      });
      alert('Student deleted!');
      setId('');
    } catch (err) {
      console.error('Delete failed:', err);
      alert('⚠️ Delete failed. Check the student ID.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🗑️ Delete Student</h1>
      <div style={styles.form}>
        <input
          placeholder="Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleDelete} style={styles.button}>Delete</button>
      </div>
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
    backgroundColor: '#d90429',
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
