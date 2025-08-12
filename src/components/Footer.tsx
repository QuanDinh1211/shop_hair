import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-2xl">B</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">BarberStudio</h3>
                <p className="text-yellow-400 text-sm">Phong cách mới — Self-confidence mới</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Quán cắt tóc chuyên nghiệp với đội ngũ thợ tay nghề cao. Chúng tôi mang tới trải nghiệm 
              thoải mái và phong cách cá nhân hoá cho từng khách hàng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              {[
                { name: 'Trang Chủ', href: '/' },
                { name: 'Dịch Vụ', href: '/services' },
                { name: 'Đặt Lịch', href: '/booking' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Đội Ngũ', href: '/team' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Thông Tin Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Đường ABC, Quận 1, TP.HCM
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">0123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">info@barberstudio.vn</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>T2-T6: 8:00 - 20:00</div>
                  <div>T7-CN: 8:00 - 22:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 BarberStudio. All rights reserved. Made with ❤️ in Vietnam.
          </p>
        </div>
      </div>
    </footer>
  );
};