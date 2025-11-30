'use client';

import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-warm-olive text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <Link href="/" className="flex items-center mb-4">
                  <Image
                    src="/assests/logo.svg"
                    alt="Performi Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>
                <p className="text-white/80 font-thin">
                  Grow on Pinterest with clarity, control & confidence
                </p>
              </div>
          
          <div>
            <h4 className="font-heading font-normal mb-4">Product</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              {/* <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Updates</a></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-normal mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              {/* <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/term" className="hover:text-white transition-colors">Terms & Conditions</a></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-normal mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
            <div className="mt-4">
              <h4 className="font-heading font-normal mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

