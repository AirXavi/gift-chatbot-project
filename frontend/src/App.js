import React from "react";
import Form from "./components/Form";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          🎁 AI Gift Recommendation Assistant
        </h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
