import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UpdateStudent() {
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
  });

  useEffect(() => {
    axios.get('http://localhost:3000/student').then((res) => setStudents(res.data));
  }, []);

  const handleStudentSelect = (id) => {
    const student = students.find((s) => s.id === id);
    setSelectedId(id);
    setFormData({
      first_name: student.first_name,
      last_name: student.last_name,
      email: student.email,
      age: student.age,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/student/${selectedId}`, formData);
      alert('Student updated!');
    } catch (error) {
      alert('Error updating student: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Update Student</h1>
      <select onChange={(e) => handleStudentSelect(Number(e.target.value))}>
        <option value="">Select a student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.first_name} {student.last_name}
          </option>
        ))}
      </select>
      {selectedId && (
        <form onSubmit={handleSubmit}>
          {/* Same form fields as post-student.js */}
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}