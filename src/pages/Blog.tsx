import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tất Cả' },
    { id: 'promotion', name: 'Khuyến Mãi' },
    { id: 'tips', name: 'Tips & Tricks' },
    { id: 'trends', name: 'Xu Hướng' },
    { id: 'news', name: 'Tin Tức' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Khuyến Mãi Lớn Tháng 12 - Giảm 30% Tất Cả Dịch Vụ',
      excerpt: 'Chào mừng tháng cuối năm, BarberStudio dành tặng khuyến mãi đặc biệt cho tất cả khách hàng...',
      category: 'promotion',
      author: 'BarberStudio',
      date: '2024-12-01',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      featured: true
    },
    {
      id: 2,
      title: '5 Kiểu Tóc Nam Trendy Nhất Năm 2024',
      excerpt: 'Cùng khám phá những kiểu tóc nam đang được yêu thích nhất trong năm 2024, từ classic đến hiện đại...',
      category: 'trends',
      author: 'Master Minh',
      date: '2024-11-28',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg'
    },
    {
      id: 3,
      title: 'Cách Chăm Sóc Râu Tại Nhà Như Chuyên Gia',
      excerpt: 'Hướng dẫn chi tiết cách chăm sóc râu đúng cách để luôn giữ được phong cách chỉn chu...',
      category: 'tips',
      author: 'Barber Nam',
      date: '2024-11-25',
      image: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg'
    },
    {
      id: 4,
      title: 'BarberStudio Khai Trương Chi Nhánh Thứ 2',
      excerpt: 'Chúng tôi vui mừng thông báo việc khai trương chi nhánh thứ 2 tại Quận 3...',
      category: 'news',
      author: 'BarberStudio',
      date: '2024-11-20',
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg'
    },
    {
      id: 5,
      title: 'Combo Cắt Tóc + Gội Massage Chỉ 180,000đ',
      excerpt: 'Ưu đãi đặc biệt cho khách hàng mới - Combo trọn gói với giá cực ưu đãi...',
      category: 'promotion',
      author: 'BarberStudio',
      date: '2024-11-15',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg'
    },
    {
      id: 6,
      title: 'Pomade vs Gel: Chọn Sản Phẩm Tạo Kiểu Nào?',
      excerpt: 'So sánh chi tiết giữa pomade và gel, giúp bạn chọn được sản phẩm phù hợp nhất...',
      category: 'tips',
      author: 'Barber Tuấn',
      date: '2024-11-10',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg'
    },
    {
      id: 7,
      title: 'Fade Cut: Từ Cơ Bản Đến Nâng Cao',
      excerpt: 'Tìm hiểu về kỹ thuật fade cut và các biến thể phổ biến hiện nay...',
      category: 'tips',
      author: 'Master Minh',
      date: '2024-11-05',
      image: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg'
    },
    {
      id: 8,
      title: 'Xu Hướng Râu Nam 2024: Minimalist Beard',
      excerpt: 'Phong cách râu tối giản đang trở thành xu hướng được nhiều đấng mày râu lựa chọn...',
      category: 'trends',
      author: 'Barber Nam',
      date: '2024-10-30',
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      promotion: 'bg-red-100 text-red-800',
      tips: 'bg-blue-100 text-blue-800',
      trends: 'bg-purple-100 text-purple-800',
      news: 'bg-green-100 text-green-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

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
            Blog & Khuyến Mãi
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cập nhật những xu hướng mới nhất, tips chăm sóc và các chương trình khuyến mãi hấp dẫn
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
                placeholder="Tìm kiếm bài viết..."
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

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && !searchTerm && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NỔI BẬT
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(featuredPost.category)}`}>
                      {categories.find(cat => cat.id === featuredPost.category)?.name}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-black/80 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-black/70">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{formatDate(featuredPost.date)}</span>
                    </div>
                  </div>
                  <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2">
                    Đọc Thêm
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gray-100 hover:bg-yellow-500 hover:text-black text-gray-700 py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                      Đọc Thêm
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Không tìm thấy bài viết nào</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Đăng Ký Nhận Tin
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nhận thông tin về các chương trình khuyến mãi và xu hướng mới nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-6 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Đăng Ký
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};