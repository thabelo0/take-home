import React from "react";

export default function StudentsTable({ students, onEdit, onDelete }) {
  return (
    <table className="students-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="4" className="no-students">
              No students found.
            </td>
          </tr>
        ) : (
          students.map(({ id, name, email, course }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{course}</td>
              <td>
                <button onClick={() => onEdit(id)} className="btn-edit">
                  Edit
                </button>
                <button onClick={() => onDelete(id)} className="btn-delete">
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
