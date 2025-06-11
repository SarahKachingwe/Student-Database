import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DeleteStudent() {
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/student').then((res) => setStudents(res.data));
  }, []);

  const handleDelete = async () => {
    if (!selectedId) return;
    try {
      await axios.delete(`http://localhost:3000/student/${selectedId}`);
      alert('Student deleted!');
      setStudents(students.filter((s) => s.id !== selectedId));
      setSelectedId('');
    } catch (error) {
      alert('Error deleting student: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Delete Student</h1>
      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Select a student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.first_name} {student.last_name}
          </option>
        ))}
      </select>
      <button onClick={handleDelete} disabled={!selectedId}>
        Delete
      </button>
    </div>
  );
}