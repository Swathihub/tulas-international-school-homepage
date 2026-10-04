import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-royal-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="font-bold text-lg text-white">
              Tula&apos;s International
            </span>
          </div>
          <p className="text-sm text-slate-400">
            A premier co-educational boarding school in Dehradun, blending traditional values with modern learning paradigms.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Facebook">FB</a>
            <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Twitter">TW</a>
            <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Instagram">IG</a>
            <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Youtube">YT</a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#academics" className="hover:text-white transition-colors">Academics</Link></li>
            <li><Link href="#admissions" className="hover:text-white transition-colors">Admissions</Link></li>
            <li><Link href="#campus" className="hover:text-white transition-colors">Campus Facilities</Link></li>
            <li><Link href="#careers" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Academics</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">CBSE Curriculum</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Competitive Coaching</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">International Placements</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Sports Education</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Arts & Culture</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
              <span>Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun, Uttarakhand 248011</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-gold-500 shrink-0" />
              <span>+91 9458312000</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-gold-500 shrink-0" />
              <span>info@tis.edu.in</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Tula&apos;s International School. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};


