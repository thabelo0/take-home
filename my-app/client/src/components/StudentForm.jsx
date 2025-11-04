import React, { useState, useEffect } from "react";

export default function StudentForm({ onSubmit, editingStudent, loading }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData({ name: "", email: "", course: "" });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // actual API call is done in parent
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {editingStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}
