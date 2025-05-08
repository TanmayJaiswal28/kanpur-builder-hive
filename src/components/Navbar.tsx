
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleWalletConnection = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-heading font-bold gradient-text">Kanpur DAO</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/hackquest" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                HackQuest
              </Link>
              <Link to="/builders" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Builders
              </Link>
              <Link to="/events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link to="/proposals" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Proposals
              </Link>
            </div>
            
            <div className="flex items-center ml-6">
              <ThemeToggle />
              <Button 
                onClick={toggleWalletConnection} 
                className="connect-wallet-btn ml-4"
              >
                {isWalletConnected ? "0x7f...3a2b" : "Connect Wallet"}
              </Button>
            </div>
          </div>
          
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-lg bg-black/40">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/hackquest" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              HackQuest
            </Link>
            <Link to="/builders" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Builders
            </Link>
            <Link to="/events" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Events
            </Link>
            <Link to="/proposals" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Proposals
            </Link>
            <Button 
              onClick={toggleWalletConnection} 
              className="connect-wallet-btn w-full mt-4"
            >
              {isWalletConnected ? "0x7f...3a2b" : "Connect Wallet"}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
