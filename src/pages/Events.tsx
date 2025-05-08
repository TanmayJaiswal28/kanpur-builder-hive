
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Home, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Events data
const events = [
  {
    id: 1,
    title: "Web3 Developer Workshop",
    description: "Learn how to build decentralized applications with Solidity and React.",
    date: "2025-06-15T14:00:00",
    location: "Kanpur Tech Hub, Civil Lines",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "IRL",
    host: "Amit Kumar",
    capacity: 30,
    attendees: 18
  },
  {
    id: 2,
    title: "Zero-Knowledge Proofs Webinar",
    description: "Deep dive into the world of zero-knowledge cryptography and its applications in Web3.",
    date: "2025-05-28T17:00:00",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "Virtual",
    host: "Dr. Neha Patel",
    capacity: 100,
    attendees: 42
  },
  {
    id: 3,
    title: "Kanpur DAO Community Meetup",
    description: "Monthly gathering of Web3 builders and enthusiasts in Kanpur. Network, share ideas, and collaborate.",
    date: "2025-05-22T18:30:00",
    location: "Startup Incubator, IIT Kanpur",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "IRL",
    host: "Kanpur DAO Team",
    capacity: 50,
    attendees: 38
  },
  {
    id: 4,
    title: "DeFi Smart Contract Security",
    description: "Learn about common vulnerabilities in DeFi protocols and how to secure your smart contracts.",
    date: "2025-07-05T15:00:00",
    location: "Online (Discord)",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "Virtual",
    host: "Vikram Reddy",
    capacity: 75,
    attendees: 25
  },
  {
    id: 5,
    title: "NFT Art & Creation Workshop",
    description: "Hands-on workshop on creating, minting, and selling NFT art on various marketplaces.",
    date: "2025-06-20T11:00:00",
    location: "Creative Arts Center, Mall Road",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "IRL",
    host: "Ananya Kapoor",
    capacity: 25,
    attendees: 12
  },
  {
    id: 6,
    title: "Blockchain for Business Leaders",
    description: "How blockchain technology is reshaping industries and creating new business opportunities.",
    date: "2025-06-10T14:00:00",
    location: "Online (Google Meet)",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "Virtual",
    host: "Meera Iyer",
    capacity: 50,
    attendees: 28
  }
];

// Helper function to format date
function formatEventDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(date);
}

export default function Events() {
  const [rsvpStatus, setRsvpStatus] = useState<{ [key: number]: boolean }>({});
  const [activeTab, setActiveTab] = useState("all");

  const filteredEvents = events.filter(event => {
    if (activeTab === "all") return true;
    return event.type.toLowerCase() === activeTab.toLowerCase();
  });

  const toggleRSVP = (eventId: number) => {
    setRsvpStatus(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col dark">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kanpur-violet to-kanpur-charcoal -z-10"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.8)_0,transparent_70%)] -z-10"></div>

        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Events</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join workshops, meetups, and hackathons to connect with the Kanpur Web3 community.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
              <TabsList className="glass-card bg-white/5">
                <TabsTrigger value="all">All Events</TabsTrigger>
                <TabsTrigger value="IRL">In-Person</TabsTrigger>
                <TabsTrigger value="Virtual">Virtual</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button className="btn-primary w-full md:w-auto">
              <Calendar className="mr-2 h-4 w-4" /> Create Event
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => {
              const eventDate = new Date(event.date);
              const isPastEvent = eventDate < new Date();
              const isRSVPed = rsvpStatus[event.id] || false;
              
              return (
                <div key={event.id} className="glass-card overflow-hidden glow-effect group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === "IRL" 
                          ? "bg-kanpur-blue/80 text-white" 
                          : "bg-kanpur-orange/80 text-white"
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{formatEventDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Home className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{event.attendees} / {event.capacity} attending</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Hosted by {event.host}</span>
                      <Button 
                        className={`
                          ${isPastEvent 
                            ? "bg-gray-700 text-gray-300 cursor-not-allowed" 
                            : isRSVPed 
                              ? "bg-kanpur-orange text-white" 
                              : "btn-primary"
                          }
                        `}
                        onClick={() => !isPastEvent && toggleRSVP(event.id)}
                        disabled={isPastEvent}
                      >
                        {isPastEvent 
                          ? "Event Ended" 
                          : isRSVPed 
                            ? "Cancel RSVP" 
                            : "RSVP Now"
                        }
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="glass-card p-10 text-center">
              <h3 className="text-xl font-medium mb-2">No events found</h3>
              <p className="text-gray-400 mb-4">
                There are no {activeTab !== "all" ? activeTab.toLowerCase() : ""} events scheduled at the moment.
              </p>
              <Button className="btn-primary" onClick={() => setActiveTab("all")}>
                View All Events
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Community Calendar Section */}
      <section className="py-16 px-4 bg-kanpur-violet/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Community Calendar</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Stay up-to-date with all the upcoming events and activities in the Kanpur Web3 community.
          </p>
          
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <iframe 
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Asia%2FKolkata&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0" 
              style={{ border: 0, width: '100%', height: '400px' }} 
              frameBorder="0" 
              scrolling="no"
              title="Community Calendar"
              className="rounded-lg"
            ></iframe>
            
            <div className="mt-6">
              <Button className="btn-primary">
                Add to My Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
