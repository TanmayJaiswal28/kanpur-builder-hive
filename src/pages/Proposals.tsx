import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

// Proposals data
const proposalsData = [
  {
    id: 1,
    title: "Fund a Developer Bootcamp in Kanpur",
    description: "Allocate 5,000 KDAO tokens to organize a month-long bootcamp for 20 developers to learn blockchain development.",
    author: "0x7f...3a2b",
    authorName: "Priya Sharma",
    createdAt: "2025-04-28",
    status: "active",
    votes: {
      for: 42,
      against: 12,
      total: 54
    },
    category: "Treasury"
  },
  {
    id: 2,
    title: "Partner with Polygon for Developer Grants",
    description: "Establish a partnership with Polygon to create a joint grant program for Kanpur-based developers building on Polygon.",
    author: "0x3d...8c7f",
    authorName: "Amit Kumar",
    createdAt: "2025-04-25",
    status: "active",
    votes: {
      for: 38,
      against: 5,
      total: 43
    },
    category: "Partnership"
  },
  {
    id: 3,
    title: "Create a Community-owned Hackathon Platform",
    description: "Build a community-owned platform for organizing and managing hackathons with transparent prize distribution and judging.",
    author: "0x9a...2e4b",
    authorName: "Raj Singh",
    createdAt: "2025-04-20",
    status: "active",
    votes: {
      for: 56,
      against: 14,
      total: 70
    },
    category: "Development"
  },
  {
    id: 4,
    title: "Host Web3 Summit in Kanpur",
    description: "Organize a two-day Web3 summit in Kanpur bringing together developers, investors, and project leaders from across India.",
    author: "0x1b...5d3c",
    authorName: "Neha Patel",
    createdAt: "2025-04-15",
    status: "closed",
    votes: {
      for: 67,
      against: 23,
      total: 90
    },
    category: "Event"
  },
  {
    id: 5,
    title: "Establish a Developer DAO Council",
    description: "Create a 7-member council to make decisions about development priorities and resource allocation.",
    author: "0x6c...7a9d",
    authorName: "Vikram Reddy",
    createdAt: "2025-04-10",
    status: "closed",
    votes: {
      for: 49,
      against: 42,
      total: 91
    },
    category: "Governance"
  }
];

// Categories for filtering
const categories = ["All", "Treasury", "Partnership", "Development", "Event", "Governance"];

// Statuses for filtering
const statuses = ["All", "Active", "Closed"];

export default function Proposals() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [userVotes, setUserVotes] = useState<{ [key: number]: "for" | "against" | null }>({});
  const [newProposal, setNewProposal] = useState({
    title: "",
    description: "",
    category: "Development"
  });
  
  const toggleWalletConnection = () => {
    setIsWalletConnected(!isWalletConnected);
    
    if (!isWalletConnected) {
      toast({
        title: "Wallet connected",
        description: "Your wallet is now connected. You can vote on proposals.",
      });
    } else {
      toast({
        title: "Wallet disconnected",
        description: "Your wallet has been disconnected.",
        variant: "destructive"
      });
    }
  };

  const handleVote = (proposalId: number, voteType: "for" | "against") => {
    if (!isWalletConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to vote on proposals.",
        variant: "destructive"
      });
      return;
    }
    
    // Check if user is changing their vote
    const currentVote = userVotes[proposalId];
    
    if (currentVote === voteType) {
      // User is canceling their vote
      setUserVotes(prev => ({
        ...prev,
        [proposalId]: null
      }));
      toast({
        title: "Vote removed",
        description: "Your vote has been removed from this proposal."
      });
    } else {
      // User is voting or changing their vote
      setUserVotes(prev => ({
        ...prev,
        [proposalId]: voteType
      }));
      toast({
        title: "Vote recorded",
        description: `You voted ${voteType === "for" ? "for" : "against"} this proposal.`
      });
    }
  };

  const handleCreateProposal = () => {
    if (!newProposal.title || !newProposal.description) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields for your proposal.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Proposal created",
      description: "Your proposal has been submitted successfully and is now under review.",
    });
    
    // Reset form
    setNewProposal({
      title: "",
      description: "",
      category: "Development"
    });
  };

  // Filter proposals based on category and status
  const filteredProposals = proposalsData.filter(proposal => {
    const categoryMatch = selectedCategory === "All" || proposal.category === selectedCategory;
    const statusMatch = selectedStatus === "All" || proposal.status === selectedStatus.toLowerCase();
    return categoryMatch && statusMatch;
  });

  return (
    <div className="min-h-screen flex flex-col dark">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kanpur-violet to-kanpur-charcoal -z-10"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.6)_0,transparent_70%)] -z-10"></div>

        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Governance Proposals</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Shape the future of Kanpur DAO by voting on community proposals and initiatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!isWalletConnected ? (
              <Button onClick={toggleWalletConnection} className="btn-primary text-lg py-6 px-8">
                Connect Wallet to Vote
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-secondary text-lg py-6 px-8">
                    Create New Proposal
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-kanpur-violet border-white/10">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-heading gradient-text">Create Proposal</DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Submit a new proposal for the community to vote on. Be clear and concise with your proposal details.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-6 py-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                        Proposal Title
                      </label>
                      <Input
                        id="title"
                        placeholder="Enter a clear, concise title"
                        value={newProposal.title}
                        onChange={(e) => setNewProposal(prev => ({ ...prev, title: e.target.value }))}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                        Category
                      </label>
                      <select
                        id="category"
                        value={newProposal.category}
                        onChange={(e) => setNewProposal(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-kanpur-blue"
                      >
                        {categories.filter(cat => cat !== "All").map((category) => (
                          <option key={category} value={category} className="bg-kanpur-violet">
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                        Proposal Description
                      </label>
                      <Textarea
                        id="description"
                        placeholder="Provide detailed information about your proposal, its goals, and implementation plan"
                        rows={6}
                        value={newProposal.description}
                        onChange={(e) => setNewProposal(prev => ({ ...prev, description: e.target.value }))}
                        className="bg-white/5 border-white/10 text-white min-h-[150px]"
                      />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button onClick={handleCreateProposal} className="btn-primary">
                      Submit Proposal
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </section>

      {/* Proposals Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/5 border border-white/10 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-kanpur-blue"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-kanpur-violet">
                    {category}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-white/5 border border-white/10 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-kanpur-blue"
              >
                {statuses.map((status) => (
                  <option key={status} value={status} className="bg-kanpur-violet">
                    {status}
                  </option>
                ))}
              </select>
            </div>
            
            {isWalletConnected && (
              <div className="flex items-center">
                <span className="text-white mr-2">Connected:</span>
                <span className="text-gray-300">0x7f...3a2b</span>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {filteredProposals.length === 0 ? (
              <div className="glass-card p-10 text-center">
                <h3 className="text-xl font-medium mb-2">No proposals found</h3>
                <p className="text-gray-400 mb-4">There are no proposals that match your current filters.</p>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedStatus("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              filteredProposals.map((proposal) => {
                // Calculate adjusted votes including user's vote
                const userVote = userVotes[proposal.id];
                const votesFor = proposal.votes.for + (userVote === "for" ? 1 : 0);
                const votesAgainst = proposal.votes.against + (userVote === "against" ? 1 : 0);
                const totalVotes = votesFor + votesAgainst;
                const approvalPercentage = totalVotes > 0 ? (votesFor / totalVotes) * 100 : 0;
                
                return (
                  <div key={proposal.id} className="glass-card p-6 glow-effect">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            proposal.category === "Treasury" ? "bg-green-700/40 text-green-300" : 
                            proposal.category === "Partnership" ? "bg-purple-700/40 text-purple-300" :
                            proposal.category === "Development" ? "bg-blue-700/40 text-blue-300" :
                            proposal.category === "Event" ? "bg-orange-700/40 text-orange-300" :
                            "bg-gray-700/40 text-gray-300"
                          }`}>
                            {proposal.category}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            proposal.status === "active" 
                              ? "bg-kanpur-blue/20 text-kanpur-blue" 
                              : "bg-gray-700/40 text-gray-300"
                          }`}>
                            {proposal.status === "active" ? "Active" : "Closed"}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold">{proposal.title}</h3>
                      </div>
                      <div className="text-right text-sm text-gray-400">
                        <div>By {proposal.authorName}</div>
                        <div className="text-xs">{proposal.createdAt}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{proposal.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{votesFor} For</span>
                        <span>{approvalPercentage.toFixed(1)}%</span>
                        <span>{votesAgainst} Against</span>
                      </div>
                      <Progress value={approvalPercentage} className="h-2 bg-white/10" />
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-400">
                        {totalVotes} total votes
                      </div>
                      
                      {proposal.status === "active" && (
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className={`border-green-700/30 hover:bg-green-700/20 ${userVote === "for" ? "bg-green-700/30 text-green-100" : "text-green-300"}`}
                            onClick={() => handleVote(proposal.id, "for")}
                            disabled={!isWalletConnected}
                          >
                            <ThumbsUp className="h-4 w-4 mr-1" /> For
                          </Button>
                          <Button
                            variant="outline"
                            className={`border-red-700/30 hover:bg-red-700/20 ${userVote === "against" ? "bg-red-700/30 text-red-100" : "text-red-300"}`}
                            onClick={() => handleVote(proposal.id, "against")}
                            disabled={!isWalletConnected}
                          >
                            <ThumbsDown className="h-4 w-4 mr-1" /> Against
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
      
      {/* Governance Info Section */}
      <section className="py-16 px-4 bg-kanpur-violet/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">How Governance Works</h2>
              <p className="text-gray-300 mb-4">
                Kanpur DAO uses a token-based governance system where KDAO token holders can create proposals and vote on initiatives that shape the future of the community.
              </p>
              
              <div className="glass-card p-6 mb-6">
                <h3 className="text-lg font-semibold mb-2">Proposal Process</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Create a proposal with clear goals and implementation plans</li>
                  <li>Community discussion period of 3 days</li>
                  <li>Voting period of 5 days</li>
                  <li>Proposal passes with {'>'}60% approval and quorum of 10% total tokens</li>
                  <li>Implementation by the Kanpur DAO team or community members</li>
                </ol>
              </div>
              
              <Button className="btn-primary">
                Read Governance Docs
              </Button>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Governance Stats</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">24</div>
                  <div className="text-gray-400">Proposals Created</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">18</div>
                  <div className="text-gray-400">Proposals Passed</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">68%</div>
                  <div className="text-gray-400">Average Approval</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">142</div>
                  <div className="text-gray-400">Unique Voters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
