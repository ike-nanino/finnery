import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Finnery Nutritional Centre</h2>
          <p className="text-sm">
            Personalized nutrition plans and wellness solutions to support a healthier lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/recipes" className="hover:underline">Recipes</Link></li>
            <li><Link href="/nutrition-plan" className="hover:underline">Nutrition Plan</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={16} /> 321-466-5535
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> shirleytortsen@outlook.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 5 Main St, Titusville, FL 32796
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-medium mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300"><Facebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300"><Instagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300"><Twitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-white/80 border-t border-white/10 pt-6 px-6">
        &copy; {new Date().getFullYear()} Finnery Nutritional Centre. All rights reserved.
      </div>
    </footer>
  );
}
