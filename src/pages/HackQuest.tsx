
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const currentHackathons = [
  {
    id: 1,
    title: "Kanpur Web3 Spring Hackathon",
    description: "Build the next generation of decentralized applications focusing on DeFi, NFTs, or DAOs.",
    prize: "$10,000",
    deadline: new Date(new Date().setDate(new Date().getDate() + 14)),
    image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    sponsor: "Ethereum Foundation"
  },
  {
    id: 2,
    title: "Zero-Knowledge Innovation Challenge",
    description: "Create privacy-preserving applications using zero-knowledge proofs and other cryptographic techniques.",
    prize: "$5,000",
    deadline: new Date(new Date().setDate(new Date().getDate() + 21)),
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    sponsor: "Polygon"
  }
];

const pastHackathons = [
  {
    id: 101,
    title: "Decentralized Identity Hackathon",
    description: "Building the future of self-sovereign identity.",
    winners: ["Team AuthChain", "IdentityDAO", "SelfKey"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 102,
    title: "Smart City Blockchain Challenge",
    description: "Leveraging blockchain for smarter, more efficient cities.",
    winners: ["CityNodes", "BlockInfra", "ChainCity"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 103,
    title: "DeFi Winter Hackathon",
    description: "Building the next generation of financial applications.",
    winners: ["YieldMax", "DecentraLend", "StableFi"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function HackQuest() {
  const [selectedHackathon, setSelectedHackathon] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    projectName: "",
    githubUrl: "",
    description: "",
    walletAddress: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submission data:", formData);
    // In a real app, this would send data to a backend
    alert("Project submitted successfully! You would receive confirmation via email in a real application.");
    setFormData({
      projectName: "",
      githubUrl: "",
      description: "",
      walletAddress: ""
    });
    setSelectedHackathon(null);
  };

  return (
    <div className="min-h-screen flex flex-col dark">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kanpur-violet to-kanpur-charcoal -z-10"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.8)_0,transparent_70%)] -z-10"></div>

        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">HackQuest</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join exciting hackathons, build innovative projects, and win amazing prizes.
          </p>
        </div>
      </section>

      {/* Current Hackathons */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Current Hackathons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentHackathons.map((hackathon) => (
              <div key={hackathon.id} className="glass-card overflow-hidden glow-effect">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={hackathon.image} 
                    alt={hackathon.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{hackathon.title}</h3>
                    <span className="bg-kanpur-orange/20 text-kanpur-orange px-3 py-1 rounded-full text-sm">
                      {hackathon.prize}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{hackathon.description}</p>
                  <div className="flex items-center mb-6">
                    <span className="text-gray-400 text-sm mr-2">Sponsored by:</span>
                    <span className="font-medium text-white">{hackathon.sponsor}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Time Remaining:</h4>
                    <CountdownTimer targetDate={hackathon.deadline} />
                  </div>
                  
                  <Button 
                    className="btn-primary w-full"
                    onClick={() => setSelectedHackathon(hackathon.id)}
                  >
                    Submit Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Submission Form */}
      {selectedHackathon && (
        <section className="py-16 px-4 bg-kanpur-violet/30">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Submit Your Project
            </h2>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">
                {currentHackathons.find(h => h.id === selectedHackathon)?.title} Submission
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Name
                  </label>
                  <Input 
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="Enter your project name"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    GitHub Repository URL
                  </label>
                  <Input 
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="https://github.com/yourusername/repo"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white min-h-[150px]"
                    placeholder="Describe your project, the problem it solves, and the technologies used"
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Wallet Address (for prize distribution)
                  </label>
                  <Input 
                    name="walletAddress"
                    value={formData.walletAddress}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="0x..."
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button type="submit" className="btn-primary flex-1">
                    Submit Project
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => setSelectedHackathon(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Past Hackathons */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Past Hackathons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastHackathons.map((hackathon) => (
              <div key={hackathon.id} className="glass-card overflow-hidden hover:translate-y-[-5px] transition-all duration-300">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={hackathon.image} 
                    alt={hackathon.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{hackathon.title}</h3>
                  <p className="text-gray-300 mb-4">{hackathon.description}</p>
                  
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Winners:</h4>
                  <ul className="space-y-1">
                    {hackathon.winners.map((winner, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-kanpur-orange mr-2">{i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'}</span>
                        <span>{winner}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="mt-4 w-full border-white/20 text-white hover:bg-white/10">
                    View Projects
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
