// frontend/src/components/Form.js

import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    recipient: "",
    occasion: "",
    age: "",
    interests: "",
    personality: "",
    needs: "",
    avoid: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("http://127.0.0.1:8000/generate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.response) {
        setResult(data.response);
      } else {
        setResult("Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Gift Recommendation Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Who is the gift for?", name: "recipient", placeholder: "My best friend" },
          { label: "What is the occasion?", name: "occasion", placeholder: "Birthday" },
          { label: "How old is the recipient?", name: "age", placeholder: "25 years old" },
          { label: "What are their interests or hobbies?", name: "interests", placeholder: "Fitness, gaming, books" },
          { label: "How would you describe their personality?", name: "personality", placeholder: "Outgoing and creative" },
          { label: "Is there anything they need or have mentioned wanting?", name: "needs", placeholder: "A new backpack" },
          { label: "Any preferences or things to avoid?", name: "avoid", placeholder: "Avoid scented items" },
        ].map(({ label, name, placeholder }) => (
          <div key={name}>
            <label htmlFor={name} className="block font-medium">{label}</label>
            <input
              required
              type="text"
              id={name}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Get Recommendations"}
        </button>
      </form>
      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">Gift Recommendations:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
