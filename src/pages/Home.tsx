import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Scissors, Clock, Shield, Award } from 'lucide-react';

export const Home = () => {
  const featuredServices = [
    {
      title: 'Cắt Tóc Nam Cơ Bản',
      price: '150,000đ',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      description: 'Cắt tóc nam thời trang, tạo phong cách cá nhân'
    },
    {
      title: 'Tạo Kiểu Râu',
      price: '100,000đ',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      description: 'Tạo kiểu râu chuyên nghiệp, phù hợp với khuôn mặt'
    },
    {
      title: 'Gội Đầu Massage',
      price: '80,000đ',
      image: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
      description: 'Dịch vụ gội đầu thư giãn với massage da đầu'
    }
  ];

  const testimonials = [
    {
      name: 'Anh Minh',
      rating: 5,
      comment: 'Dịch vụ tuyệt vời, thợ tay nghề cao và thái độ rất thân thiện. Sẽ quay lại!'
    },
    {
      name: 'Anh Tuấn',
      rating: 5,
      comment: 'Không gian sang trọng, sạch sẽ. Kiểu tóc cắt ra rất ưng ý.'
    },
    {
      name: 'Anh Nam',
      rating: 5,
      comment: 'Giá cả hợp lý, chất lượng dịch vụ xuất sắc. Highly recommend!'
    }
  ];

  const stats = [
    { icon: <Award className="w-8 h-8" />, number: '5+', label: 'Năm Kinh Nghiệm' },
    { icon: <Scissors className="w-8 h-8" />, number: '1000+', label: 'Khách Hài Lòng' },
    { icon: <Clock className="w-8 h-8" />, number: '12', label: 'Giờ Mỗi Ngày' },
    { icon: <Shield className="w-8 h-8" />, number: '100%', label: 'An Toàn Vệ Sinh' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg"
            alt="Quán cắt tóc BarberStudio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Phong Cách Mới
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Self-confidence mới
          </motion.p>
          <motion.p
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Khám phá phong cách cá nhân của bạn tại BarberStudio - nơi kết hợp nghệ thuật 
            cắt tóc truyền thống và xu hướng hiện đại
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/booking"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Đặt Lịch Ngay
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/gallery"
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Xem Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-yellow-400 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Dịch Vụ Nổi Bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp đa dạng dịch vụ chăm sóc tóc và râu chuyên nghiệp
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-500 font-semibold transition-colors duration-200"
                  >
                    Đặt Ngay
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Xem Tất Cả Dịch Vụ
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá không gian và những tác phẩm tuyệt vời của chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
              'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
              'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
              'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
              'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
              'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
              'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
              'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
            ].map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Xem Thêm Ảnh
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Khách Hàng Nói Gì
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Những phản hồi chân thực từ khách hàng đã trải nghiệm dịch vụ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.comment}"</p>
                <div className="text-white font-semibold">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Sẵn Sàng Thay Đổi Phong Cách?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Đặt lịch hẹn ngay hôm nay và trải nghiệm dịch vụ cắt tóc chuyên nghiệp 
              tại BarberStudio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/booking"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                Đặt Lịch Ngay
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Liên Hệ Tư Vấn
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};