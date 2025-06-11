import { useState } from 'react';

export default function PostStudent() {
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Server responded with error:', errorData);
        alert('Server Error: ' + errorData.message);
      } else {
        alert('Student added!');
        setFormData({ name: '', age: '', email: '' });
      }
    } catch (err) {
      console.error('Network Error:', err);
      alert('⚠️ Network error: Could not connect to backend.');
    }
  };

  return (
    <div>
      <h1>Post Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        /><br />
        <input
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        /><br />
        <input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

