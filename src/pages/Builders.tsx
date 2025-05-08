
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Builder profiles data
const builders = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Solidity Developer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "DeFi"],
    experience: "4+ years",
    availability: "Part-time",
    github: "https://github.com/priyasharma"
  },
  {
    id: 2,
    name: "Amit Kumar",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: ["React", "Web3.js", "TypeScript", "UI/UX"],
    experience: "3+ years",
    availability: "Full-time",
    github: "https://github.com/amitkumar"
  },
  {
    id: 3,
    name: "Neha Patel",
    role: "Smart Contract Auditor",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    skills: ["Security Audits", "Solidity", "EVM", "Testing"],
    experience: "5+ years",
    availability: "Contract",
    github: "https://github.com/nehapatel"
  },
  {
    id: 4,
    name: "Raj Singh",
    role: "Blockchain Researcher",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    skills: ["Zero-Knowledge Proofs", "Cryptography", "Consensus Mechanisms"],
    experience: "3+ years",
    availability: "Part-time",
    github: "https://github.com/rajsingh"
  },
  {
    id: 5,
    name: "Sanjay Gupta",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    skills: ["Node.js", "MongoDB", "React", "Ethereum"],
    experience: "4+ years",
    availability: "Full-time",
    github: "https://github.com/sanjaygupta"
  },
  {
    id: 6,
    name: "Ananya Kapoor",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    skills: ["UI/UX", "Figma", "Web Design", "User Research"],
    experience: "2+ years",
    availability: "Full-time",
    github: "https://github.com/ananyakapoor"
  },
  {
    id: 7,
    name: "Vikram Reddy",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    skills: ["Go", "Rust", "Distributed Systems", "Consensus"],
    experience: "5+ years",
    availability: "Contract",
    github: "https://github.com/vikramreddy"
  },
  {
    id: 8,
    name: "Meera Iyer",
    role: "Community Manager",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    skills: ["Community Building", "Content Strategy", "Events", "Growth"],
    experience: "2+ years",
    availability: "Full-time",
    github: "https://github.com/meeraiyer"
  }
];

// All unique skills for filtering
const allSkills = Array.from(new Set(builders.flatMap(builder => builder.skills)));

// Experience options
const experienceOptions = ["All", "0-2 years", "2+ years", "3+ years", "4+ years", "5+ years"];

// Availability options
const availabilityOptions = ["All", "Full-time", "Part-time", "Contract"];

export default function Builders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");

  // Handle skill selection toggle
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Filter builders based on search and filters
  const filteredBuilders = builders.filter(builder => {
    // Search term filter
    const matchesSearch = 
      builder.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      builder.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Skills filter
    const matchesSkills = 
      selectedSkills.length === 0 || 
      selectedSkills.some(skill => builder.skills.includes(skill));
    
    // Experience filter
    const matchesExperience = 
      selectedExperience === "All" || 
      (selectedExperience === "0-2 years" && builder.experience.includes("1+") || builder.experience.includes("2+")) ||
      (selectedExperience === "2+ years" && parseInt(builder.experience) >= 2) ||
      (selectedExperience === "3+ years" && parseInt(builder.experience) >= 3) ||
      (selectedExperience === "4+ years" && parseInt(builder.experience) >= 4) ||
      (selectedExperience === "5+ years" && parseInt(builder.experience) >= 5);
    
    // Availability filter
    const matchesAvailability = 
      selectedAvailability === "All" || 
      builder.availability === selectedAvailability;
    
    return matchesSearch && matchesSkills && matchesExperience && matchesAvailability;
  });

  return (
    <div className="min-h-screen flex flex-col dark">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kanpur-violet to-kanpur-charcoal -z-10"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(30,174,219,0.8)_0,transparent_70%)] -z-10"></div>

        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Builders Directory</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with talented Web3 developers, designers, and creators from Kanpur and collaborate on innovative projects.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search builders by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/10 border-white/10 text-white focus:border-kanpur-blue"
            />
          </div>
        </div>
      </section>

      {/* Filters and Builders List */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Filters</h2>
                
                {/* Skills Filter */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-300 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {allSkills.slice(0, 12).map((skill) => (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedSkills.includes(skill)
                            ? "bg-kanpur-blue text-white"
                            : "bg-white/5 text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Experience Filter */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-300 mb-3">Experience</h3>
                  <div className="flex flex-wrap gap-2">
                    {experienceOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedExperience(option)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedExperience === option
                            ? "bg-kanpur-blue text-white"
                            : "bg-white/5 text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Availability Filter */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-300 mb-3">Availability</h3>
                  <div className="flex flex-wrap gap-2">
                    {availabilityOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedAvailability(option)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedAvailability === option
                            ? "bg-kanpur-blue text-white"
                            : "bg-white/5 text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Clear Filters */}
                <Button
                  variant="outline"
                  className="w-full mt-4 border-white/20 text-white hover:bg-white/10"
                  onClick={() => {
                    setSelectedSkills([]);
                    setSelectedExperience("All");
                    setSelectedAvailability("All");
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
            
            {/* Builders Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  {filteredBuilders.length} Builders Found
                </h2>
                <Button className="btn-primary">
                  Join as Builder
                </Button>
              </div>
              
              {filteredBuilders.length === 0 ? (
                <div className="glass-card p-10 text-center">
                  <h3 className="text-xl font-medium mb-2">No builders found</h3>
                  <p className="text-gray-400 mb-4">Try adjusting your filters or search term</p>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedSkills([]);
                      setSelectedExperience("All");
                      setSelectedAvailability("All");
                    }}
                  >
                    Reset All Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredBuilders.map((builder) => (
                    <div key={builder.id} className="glass-card p-6 glow-effect group hover:translate-y-[-5px] transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-kanpur-blue/30">
                          <img src={builder.image} alt={builder.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-xl">{builder.name}</h3>
                          <p className="text-kanpur-blue mb-2">{builder.role}</p>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {builder.skills.slice(0, 3).map((skill, index) => (
                              <span key={index} className="bg-white/5 px-2 py-0.5 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                            {builder.skills.length > 3 && (
                              <span className="bg-white/5 px-2 py-0.5 rounded text-xs">
                                +{builder.skills.length - 3} more
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div>
                              <span className="mr-1">🕒</span> {builder.experience}
                            </div>
                            <div>
                              <span className="mr-1">📅</span> {builder.availability}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
                        <a 
                          href={builder.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-gray-300 hover:text-white flex items-center gap-1"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </a>
                        <Button 
                          variant="ghost"
                          className="text-sm text-white hover:bg-white/10"
                        >
                          Contact
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
