import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Award, Scissors } from 'lucide-react';

export const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Nguyễn Văn Minh',
      title: 'Master Barber - Chủ Tiệm',
      experience: '15 năm',
      specialty: 'Classic & Modern Cuts',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      rating: 4.9,
      description: 'Với hơn 15 năm kinh nghiệm, Master Minh là người sáng lập BarberStudio. Anh chuyên về các kiểu cắt cổ điển và hiện đại, luôn tạo ra những tác phẩm hoàn hảo.',
      schedule: ['Thứ 2-6: 8:00-18:00', 'Thứ 7: 8:00-20:00'],
      achievements: ['Giải nhất Barber Championship 2020', 'Chứng chỉ Master Barber Quốc tế']
    },
    {
      id: 2,
      name: 'Trần Đức Nam',
      title: 'Senior Barber',
      experience: '8 năm',
      specialty: 'Fade & Beard Styling',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      rating: 4.8,
      description: 'Chuyên gia về các kiểu fade và tạo kiểu râu. Nam có tay nghề điêu luyện và khả năng tư vấn phong cách xuất sắc cho khách hàng.',
      schedule: ['Thứ 3-7: 9:00-19:00', 'Chủ nhật: 9:00-17:00'],
      achievements: ['Top 3 Vietnam Barber Contest 2021', 'Chứng chỉ Beard Specialist']
    },
    {
      id: 3,
      name: 'Lê Hoàng Tuấn',
      title: 'Professional Barber',
      experience: '5 năm',
      specialty: 'Trendy Styles & Hair Washing',
      image: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
      rating: 4.7,
      description: 'Tuấn là chuyên gia về các kiểu tóc trendy và massage gội đầu. Anh luôn cập nhật xu hướng mới nhất để mang đến cho khách hàng những trải nghiệm tuyệt vời.',
      schedule: ['Thứ 2-6: 10:00-20:00', 'Cuối tuần: 8:00-18:00'],
      achievements: ['Chứng chỉ Hair Styling Professional', 'Best Customer Service Award 2022']
    },
    {
      id: 4,
      name: 'Phạm Quang Huy',
      title: 'Junior Barber',
      experience: '3 năm',
      specialty: 'Basic Cuts & Student Styles',
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
      rating: 4.6,
      description: 'Huy là thành viên trẻ nhất trong team với nhiệt huyết và khả năng học hỏi nhanh chóng. Anh chuyên về các kiểu cắt cơ bản và phong cách trẻ trung.',
      schedule: ['Thứ 2,4,6: 14:00-22:00', 'Cuối tuần: 10:00-18:00'],
      achievements: ['Học viên xuất sắc Barber Academy 2021', 'Rising Star Award 2023']
    }
  ];

  const skills = [
    { name: 'Classic Cuts', level: 95 },
    { name: 'Modern Styling', level: 90 },
    { name: 'Beard Grooming', level: 88 },
    { name: 'Hair Washing', level: 92 },
    { name: 'Customer Service', level: 98 }
  ];

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
            Đội Ngũ
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gặp gỡ những nghệ nhân tài năng, những người sẽ biến ước mơ về phong cách của bạn thành hiện thực
          </motion.p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Scissors className="w-8 h-8" />, number: '4', label: 'Thợ Chuyên Nghiệp' },
              { icon: <Award className="w-8 h-8" />, number: '31+', label: 'Năm Kinh Nghiệm' },
              { icon: <Star className="w-8 h-8" />, number: '4.8', label: 'Rating Trung Bình' },
              { icon: <Clock className="w-8 h-8" />, number: '12', label: 'Giờ Phục Vụ/Ngày' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-yellow-500 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-1">{member.name}</h3>
                        <p className="text-yellow-600 font-semibold">{member.title}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{member.rating}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-600">Kinh Nghiệm</span>
                        <p className="font-semibold">{member.experience}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Chuyên Môn</span>
                        <p className="font-semibold text-sm">{member.specialty}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{member.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-black mb-2">Lịch Làm Việc:</h4>
                      {member.schedule.map((time, idx) => (
                        <p key={idx} className="text-sm text-gray-600">{time}</p>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-2">Thành Tựu:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Skills */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Kỹ Năng Đội Ngũ</h2>
            <p className="text-xl text-gray-300">
              Đánh giá tổng thể về chất lượng dịch vụ của đội ngũ BarberStudio
            </p>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-yellow-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Tham Gia Đội Ngũ
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Bạn có đam mê với nghệ thuật cắt tóc? Hãy gia nhập đội ngũ BarberStudio 
              và phát triển sự nghiệp cùng chúng tôi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:career@barberstudio.vn"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Gửi Hồ Sơ
              </a>
              <a
                href="tel:0123456789"
                className="border-2 border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Liên Hệ HR
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};