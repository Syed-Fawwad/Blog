import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>

<main className=" bg-gray-100 min-h-screen  px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        title: "Deploying generative AI with Amazon SageMaker",
        description:
          "The features and use cases for Amazon SageMaker, as well as how to utilize its advanced machine learning tools for building and deploying AI models....",
      },
      {
        title: "Programming fundamentals: What does ++ mean in coding?",
        description:
          "PS author and software engineer Josh Cummings explains what the operator means in programming, how to use it, and when to use alternative methods....",
      },
      {
        title: "2025 tech forecast: Top tech trends and skills  need to know",
        description:
          "Uncover the top tech trends for 2025 across AI, cybersecurity, and cloud. Plus, get upskilling tips to help your teams build tech skills that stick....",
      },
      {
        title: "The top soft skills IT professionals need to have in 2025",
        description:
          "Soft skills are actually more important for IT professionals. Here's the ones you should work on to ensure job stability and that next promotion....",
      },
      {
        title: "Breaking into top tech jobs: How to become a data scientist",
        description:
          "Want to be a data scientist? Here's the key data science skills, tools and resume strategies you need to build a portfolio and get hired....",
      },
      {
        title: "Generative AI code generation tools: Top 11 options",
        description:
          "Discover the best generative AI code generation tools, how they work to make your team more efficient, and potential risks....",
      },
    ].map((article, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
      >
        <h3 className="text-sm font-semibold text-gray-500 mb-2">
          Blog Articles
        </h3>
        <h2 className="text-[1.2rem] font-bold text-gray-800 mb-4">{article.title}</h2>
        <p className="text-gray-600">{article.description}</p>
        <hr className="mt-4 border-gray-200" />
      </div>
    ))}
  </div>
</main>
        
      {/* Footer Section */}
      <footer className="mt-36 bg-gray-800 text-white py-8">
        <div className="text-center">
          <p className="text-lg font-semibold">© 2024 Syed Farooq Ali</p>
          <p className="text-sm mt-2">All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default Footer