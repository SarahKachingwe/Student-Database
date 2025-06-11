import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎓 Student Registry</h1>
      <p style={styles.subtitle}>Manage students easily</p>

      <div style={styles.nav}>
        <Link href="/post-student"><button style={styles.button}>➕ Add Student</button></Link>
        <Link href="/get-students"><button style={styles.button}>📋 View Students</button></Link>
        <Link href="/update-students"><button style={styles.button}>✏️ Update Student</button></Link>
        <Link href="/delete-students"><button style={styles.button}>🗑️ Delete Student</button></Link>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#666',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '300px',
    margin: '0 auto',
  },
  button: {
    padding: '12px 20px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#0070f3',
    color: 'white',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

