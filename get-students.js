import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function GetStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/student')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📋 Student List</h1>
      <ul style={styles.list}>
        {students.map((s) => (
          <li key={s.id} style={styles.item}>
            <strong>{s.name}</strong> - {s.age} years old - {s.email}
          </li>
        ))}
      </ul>
      <Link href="/"><button style={styles.back}>← Back to Home</button></Link>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '40px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'left',
  },
  item: {
    background: '#fff',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  back: {
    marginTop: '20px',
    padding: '10px 16px',
    fontSize: '0.9rem',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

