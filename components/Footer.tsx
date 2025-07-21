import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-emerald-500 w-8 h-8 rounded-full mr-3"></div>
              <span className="text-2xl font-bold">NutriVital</span>
            </div>
            <p className="text-gray-400 mb-6">
              Personalized nutrition for optimal health and performance.
            </p>
            <div className="flex space-x-4">
              {[/* Social icons */].map((_, i) => (
                <div key={i} className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
                  {/* Social icon placeholder */}
                </div>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} NutriVital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
      { href: "/blog", label: "Blog" },
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/nutrition", label: "Nutrition Guides" },
      { href: "/recipes", label: "Recipes" },
      { href: "/webinars", label: "Webinars" },
      { href: "/research", label: "Research" },
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
    ]
  }
];