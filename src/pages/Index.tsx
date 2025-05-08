
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";

const featuredBuilders = [
  {
    name: "Priya Sharma",
    role: "Solidity Developer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    project: "DeFi Protocol",
    description: "Building the next generation of DeFi protocols on Ethereum"
  },
  {
    name: "Amit Kumar",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    project: "Dapp Interface",
    description: "Creating intuitive interfaces for blockchain applications"
  },
  {
    name: "Neha Patel",
    role: "Smart Contract Auditor",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    project: "Security Framework",
    description: "Developing audit frameworks for Web3 applications"
  },
  {
    name: "Raj Singh",
    role: "Blockchain Researcher",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    project: "ZK Rollups",
    description: "Researching zero-knowledge proof implementations"
  }
];

// Calculate a date 14 days from now for the hackathon deadline
const hackathonDeadline = new Date();
hackathonDeadline.setDate(hackathonDeadline.getDate() + 14);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kanpur-violet to-kanpur-charcoal -z-10"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.8)_0,transparent_70%)] -z-10"></div>
        
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight max-w-4xl mx-auto">
            Kanpur DAO – Powering Builders from the Heart of India
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            A decentralized collective of developers, creators, and dreamers from Kanpur building the future of Web3.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg py-6 px-8">Join Discord</Button>
            <Button className="btn-secondary text-lg py-6 px-8">Explore HackQuest</Button>
          </div>
          
          <div className="mt-24 relative">
            <div className="glass-card p-8 glow-effect">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-kanpur-orange/20 text-kanpur-orange rounded-full text-sm font-medium mb-4">LIVE NOW</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Kanpur Web3 Spring Hackathon</h2>
                <p className="text-gray-300">Build the next generation of decentralized applications</p>
              </div>
              
              <CountdownTimer targetDate={hackathonDeadline} className="mb-8" />
              
              <Button className="btn-primary">Join Hackathon</Button>
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute -top-10 -right-10 w-64 h-64 bg-kanpur-blue/20 rounded-full blur-3xl -z-10"></div>
            <div className="hidden md:block absolute -bottom-10 -left-10 w-64 h-64 bg-kanpur-orange/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>
      
      {/* Featured Builders Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Builders</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Meet the amazing developers and creators from Kanpur who are building the future of Web3</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBuilders.map((builder, index) => (
              <div key={index} className="glass-card p-6 glow-effect group hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-kanpur-blue/30">
                    <img src={builder.image} alt={builder.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1">{builder.name}</h3>
                  <p className="text-kanpur-blue mb-2">{builder.role}</p>
                  <div className="bg-white/5 rounded-lg px-3 py-1 mb-3">
                    <span className="text-sm">{builder.project}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{builder.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="btn-secondary">View All Builders</Button>
          </div>
        </div>
      </section>
      
      {/* Community Stats Section */}
      <section className="py-20 px-4 bg-kanpur-violet/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text">200+</h3>
              <p className="text-gray-400 mt-2">Builders</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text">15+</h3>
              <p className="text-gray-400 mt-2">Hackathons</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text">50+</h3>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text">$100K</h3>
              <p className="text-gray-400 mt-2">Total Prizes</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Community Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Connect with like-minded developers, participate in hackathons, and contribute to the growing Web3 ecosystem in Kanpur
          </p>
          
          <div className="glass-card p-8 max-w-4xl mx-auto glow-effect">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-4">
                <div className="bg-gradient-to-br from-kanpur-blue/20 to-kanpur-purple/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kanpur-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Create Profile</h3>
                <p className="text-gray-400 text-sm">Join the directory of builders and showcase your skills</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-gradient-to-br from-kanpur-blue/20 to-kanpur-purple/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kanpur-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Join Events</h3>
                <p className="text-gray-400 text-sm">Participate in hackathons, workshops, and meetups</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-gradient-to-br from-kanpur-blue/20 to-kanpur-purple/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kanpur-orange" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Build & Earn</h3>
                <p className="text-gray-400 text-sm">Win prizes and grants for your Web3 projects</p>
              </div>
            </div>
            
            <div className="mt-10">
              <Button className="btn-primary">Sign Up Now</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
