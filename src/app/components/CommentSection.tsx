"use client";
import React, { useEffect, useState } from "react";

const Comment = () => {
  const [comment, Setcomment] = useState("");
  const [commments, Setcomments] = useState<string[]>([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);
        Setcomments(parsedComments);
      } catch (error) {
        console.error("Error parsing comments from local storage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(commments));
  }, [commments]);

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      Setcomments([comment, ...commments]);
      Setcomment("");
    }
  };

  const handleDelete = (index: number) => {
    const updatedComments = commments.filter((_, i) => i !== index);
    Setcomments(updatedComments);
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Comments Section</h1>
      <form onSubmit={handlesubmit} className="mb-6">
        <textarea
          value={comment}
          onChange={(e) => Setcomment(e.target.value)}
          placeholder="Write a comment here..."
          className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea1b48]"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="mt-4 bg-[#ea1b48] border-[#ea1b48] border-[2px] text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:border-[#ea1b48] hover:border-[2px] transition duration-200"
        >
          Submit
        </button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Comments</h3>
        <div className="space-y-4">
          {commments.length > 0 ? (
            commments.map((comment, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-md shadow-sm border flex justify-between items-center"
              >
                <p className="text-gray-800">{comment}</p>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No Comments Yet. Be the First to Comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;