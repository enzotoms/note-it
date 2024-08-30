

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    company: "Tech Corp",
    testimony: "This app has completely transformed the way I manage my tasks. The user interface is intuitive, and the features are exactly what I need. I Highly recommend it!"
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Innovate Ltd",
    testimony: "A game-changer for productivity. I love how easily I can organize my notes and access them across all my devices. The team has done a fantastic job!"
  },
  {
    name: "Sam Wilson",
    role: "Freelancer",
    company: "Self-Employed",
    testimony: "As a freelancer, I need tools that help me stay organized. This app is just what I needed! It's simple, effective, and has made my life so much easier."
  }
];

const Testimonies = () => {
  return (
    <div className="container mx-auto mb-7 p-6 bg-gray-100 border rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        {testimonials.map((testimonies, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-md text-center">
            <p className="text-lg italic mb-4">{testimonies.testimony}</p>
            <h4 className="text-xl font-semibold">{testimonies.name}</h4>
            <p className="text-gray-500">{testimonies.role}, {testimonies.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
