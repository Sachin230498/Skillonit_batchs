import React, { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCourses, setTotalCourses] = useState(0);
  const limit = 5; // courses per page

  useEffect(() => {
    fetchCourses(page);
  }, [page]);

  const fetchCourses = async (pageNumber) => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/course?page=${pageNumber}&limit=${limit}`
      );
      const data = await res.json();
      setCourses(data.data);
      setTotalCourses(data.count);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const totalPages = Math.ceil(totalCourses / limit);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Courses</h1>

      {courses.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {courses.map((course) => (
            <li
              key={course._id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              {/* Course Image */}
              {course.image && (
                <img
                  src={course.image}
                  alt={course.courseName}
                  style={{
                    width: "120px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginRight: "15px",
                  }}
                />
              )}

              {/* Course Details */}
              <div>
                <h3 style={{ margin: 0 }}>{course.courseName}</h3>
                <p style={{ margin: "5px 0" }}>
                  {course.duration} | {course.language}
                </p>
                <p style={{ margin: 0 }}>
                  Total Enrolled: {course.totalEnrollment}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          style={{ padding: "5px 10px", marginRight: "10px" }}
        >
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          style={{ padding: "5px 10px", marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
