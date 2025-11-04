import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const loadStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.error("Failed to load students:", err);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div>
      <button onClick={() => navigate("/add")} className="btn">Add Student</button>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>
                <button onClick={() => navigate(`/edit/${s.id}`)} className="btn-edit">Edit</button>
                <button onClick={() => handleDelete(s.id)} className="btn-del">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
