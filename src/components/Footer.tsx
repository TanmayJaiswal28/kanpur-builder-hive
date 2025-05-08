
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-kanpur-violet/50 backdrop-blur-md mt-20 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-heading font-bold gradient-text mb-4">Kanpur DAO</h3>
            <p className="text-gray-400 mb-4">A decentralized collective of developers, creators, and dreamers from Kanpur.</p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.608 1.2495-1.8447-.2762-3.6677-.2762-5.4878 0-.1634-.3933-.4074-.8742-.6195-1.2495a.077.077 0 00-.0785-.037A19.7363 19.7363 0 004.2602 4.372c-.0127.0127-.025.0212-.0342.0341-3.1167 4.6584-3.9344 9.2054-3.5187 13.6912.0127.0939.0432.1807.098.254 2.4307 1.7834 4.7903 2.8665 7.1028 3.5814.072.0254.1432-.0127.1816-.0684a14.0156 14.0156 0 001.1903-1.9379c.0254-.0513.0127-.1152-.0431-.1364-1.262-.4793-2.4604-1.0741-3.6025-1.7494-.0633-.0342-.0798-.1257-.0341-.1785.1276-.0959.2553-.1917.3766-.2932a.0712.0712 0 01.0744-.0105c3.9731 1.8144 8.2788 1.8144 12.2081 0a.0712.0712 0 01.0785.0105c.1214.1015.2491.1973.3767.2932.0456.0528.0334.1443-.0334.1785-1.1421.6753-2.3405 1.2701-3.6025 1.7494-.0559.0212-.0815.0851-.0431.1364.3555.6797.7592 1.3273 1.1903 1.9379.0383.0557.1094.0938.1816.0684a23.078 23.078 0 007.1153-3.5814c.0584-.0733.0891-.1601.098-.254.4997-5.1807-1.0567-9.6837-3.5565-13.6912-.0064-.0129-.0192-.0256-.0319-.0383zm-9.9168 10.946c-1.4008 0-2.5645-1.2903-2.5645-2.8665S8.9995 9.583 10.4003 9.583c1.4136 0 2.5773 1.2903 2.5645 2.8665-.0128 1.5763-1.1509 2.8665-2.5645 2.8665zm9.4889 0c-1.4008 0-2.5645-1.2903-2.5645-2.8665s1.1637-2.8665 2.5645-2.8665c1.4136 0 2.5773 1.2903 2.5645 2.8665-.0128 1.5763-1.1509 2.8665-2.5645 2.8665z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/hackquest" className="text-gray-400 hover:text-white">HackQuest</Link></li>
              <li><Link to="/builders" className="text-gray-400 hover:text-white">Builders</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              <li><Link to="/proposals" className="text-gray-400 hover:text-white">Proposals</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Governance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Token</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Join the community</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest from Kanpur DAO</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-kanpur-blue"
              />
              <button className="bg-kanpur-blue px-4 py-2 rounded-r-lg text-white font-medium hover:bg-blue-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kanpur DAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
