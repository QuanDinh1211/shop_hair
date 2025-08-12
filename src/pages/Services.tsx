import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất Cả' },
    { id: 'haircut', name: 'Cắt Tóc' },
    { id: 'beard', name: 'Râu Ria' },
    { id: 'wash', name: 'Gội Massage' },
    { id: 'style', name: 'Tạo Kiểu' },
  ];

  const services = [
    {
      id: 1,
      name: 'Cắt Tóc Nam Cơ Bản',
      category: 'haircut',
      price: '150,000đ',
      duration: '30 phút',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      description: 'Cắt tóc nam thời trang với nhiều kiểu dáng phù hợp với từng khuôn mặt.',
      features: ['Tư vấn kiểu tóc', 'Cắt theo yêu cầu', 'Sấy tạo kiểu']
    },
    {
      id: 2,
      name: 'Cắt Tóc VIP',
      category: 'haircut',
      price: '250,000đ',
      duration: '45 phút',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      description: 'Dịch vụ cắt tóc cao cấp với thợ giàu kinh nghiệm và tư vấn chuyên sâu.',
      features: ['Thợ cắt Master', 'Tư vấn chuyên sâu', 'Massage da đầu', 'Sấy tạo kiểu']
    },
    {
      id: 3,
      name: 'Tạo Kiểu Râu',
      category: 'beard',
      price: '100,000đ',
      duration: '25 phút',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
      description: 'Tạo kiểu râu chuyên nghiệp, phù hợp với khuôn mặt và phong cách cá nhân.',
      features: ['Tạo kiểu râu', 'Cạo viền', 'Dưỡng râu']
    },
    {
      id: 4,
      name: 'Cạo Râu Truyền Thống',
      category: 'beard',
      price: '80,000đ',
      duration: '20 phút',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
      description: 'Dịch vụ cạo râu truyền thống với dao cạo thẳng và khăn nóng.',
      features: ['Khăn nóng', 'Dao cạo thẳng', 'Dưỡng da mặt']
    },
    {
      id: 5,
      name: 'Gội Đầu Massage',
      category: 'wash',
      price: '80,000đ',
      duration: '30 phút',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
      description: 'Dịch vụ gội đầu thư giãn với massage da đầu chuyên nghiệp.',
      features: ['Gội đầu sạch sẽ', 'Massage da đầu', 'Thư giãn']
    },
    {
      id: 6,
      name: 'Gội + Massage Cổ Vai',
      category: 'wash',
      price: '120,000đ',
      duration: '40 phút',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      description: 'Combo gội đầu và massage cổ vai giúp thư giãn hoàn toàn.',
      features: ['Gội đầu', 'Massage da đầu', 'Massage cổ vai', 'Thư giãn hoàn toàn']
    },
    {
      id: 7,
      name: 'Tạo Kiểu Tóc',
      category: 'style',
      price: '60,000đ',
      duration: '15 phút',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      description: 'Sấy và tạo kiểu tóc theo yêu cầu với các sản phẩm tạo kiểu cao cấp.',
      features: ['Sấy tạo kiểu', 'Sử dụng sản phẩm cao cấp', 'Tư vấn kiểu tóc']
    },
    {
      id: 8,
      name: 'Combo Cắt + Gội + Tạo Kiểu',
      category: 'haircut',
      price: '200,000đ',
      duration: '60 phút',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
      description: 'Combo trọn gói bao gồm cắt tóc, gội đầu massage và tạo kiểu.',
      features: ['Cắt tóc', 'Gội đầu massage', 'Tạo kiểu', 'Tư vấn chuyên nghiệp']
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Dịch Vụ
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Khám phá đa dạng dịch vụ chăm sóc tóc và râu chuyên nghiệp tại BarberStudio
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm dịch vụ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full lg:w-96 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                      {service.price}
                    </div>
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-black">{service.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{service.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-black mb-2">Bao gồm:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/booking"
                      state={{ selectedService: service.name }}
                      className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
                    >
                      Đặt Lịch Ngay
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Không tìm thấy dịch vụ phù hợp</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cần Tư Vấn Thêm?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Liên hệ với chúng tôi để được tư vấn dịch vụ phù hợp nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Liên Hệ Tư Vấn
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/team"
                className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Gặp Đội Ngũ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};