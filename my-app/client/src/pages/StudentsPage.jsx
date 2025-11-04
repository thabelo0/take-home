// src/pages/StudentsPage.jsx
import React, { useState, useEffect } from "react";
import StudentForm from "../components/StudentForm";
import StudentsTable from "../components/StudentsTable";
import { getStudents, addStudent, updateStudent, deleteStudent } from "../services/studentService";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all students
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const data = await getStudents();
      setStudents(data);
      setError("");
    } catch (err) {
      console.error("Error fetching students:", err);
      setError("Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle add or update
  const handleFormSubmit = async (studentData) => {
    try {
      setLoading(true);
      if (editingStudent) {
        await updateStudent(editingStudent.id, studentData);
        setEditingStudent(null);
      } else {
        await addStudent(studentData);
      }
      await fetchStudents(); // refresh list
    } catch (err) {
      console.error("Error saving student:", err);
      setError("Failed to save student");
    } finally {
      setLoading(false);
    }
  };

  // Handle edit button click
  const handleEdit = (student) => setEditingStudent(student);

  // Handle delete button click
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      setLoading(true);
      await deleteStudent(id);
      await fetchStudents();
    } catch (err) {
      console.error("Error deleting student:", err);
      setError("Failed to delete student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="students-page">
      {error && <div className="error">{error}</div>}
      <StudentForm
        onSubmit={handleFormSubmit}
        editingStudent={editingStudent}
        loading={loading}
      />
      <StudentsTable
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
