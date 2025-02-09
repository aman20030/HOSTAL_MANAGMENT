import { Link } from "react-router-dom";

const events = [
  {
    title: "Cultural Night",
    date: "October 12, 2024",
    description: "A night full of music, dance, and cultural performances.",
    img: "https://source.unsplash.com/300x200/?concert",
  },
  {
    title: "Tech Fest",
    date: "November 5, 2024",
    description: "Showcase your tech skills in hackathons, robotics, and AI workshops.",
    img: "https://source.unsplash.com/300x200/?technology",
  },
];

const sports = [
  { name: "Football", img: "https://images.unsplash.com/photo-1508087625439-de3978963553?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb3RiYWxsJTIwY29sbGVnZSUyMGluZGlhbnMlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Basketball", img: "https://plus.unsplash.com/premium_photo-1684902597942-d6593a476d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Cricket", img: "" },
  { name: "Badminton", img: "" },
];

export default function HostelFestSports() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-center">🎭 Hostel Fest & Sports</h1>

      {/* Fest Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">🎉 Upcoming Fests</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <img src={event.img} alt={event.title} className="w-full rounded-md" />
              <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-700 mt-1">{event.description}</p>
              <Link to="/register" className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                Register Now
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">🏆 Sports Activities</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-4">
          {sports.map((sport, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <img src={sport.img} alt={sport.name} className="w-full rounded-md" />
              <h3 className="text-xl font-semibold mt-2">{sport.name}</h3>
              <Link to="/sports-register" className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded">
                Join Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
