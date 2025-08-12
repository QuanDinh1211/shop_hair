import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from 'lucide-react';
import { format, addDays, startOfWeek, isSameDay, isAfter, startOfDay } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useLocation } from 'react-router-dom';

interface BookingForm {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: Date;
  time: string;
  notes?: string;
}

export const Booking = () => {
  const location = useLocation();
  const selectedService = location.state?.selectedService || '';
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isBooked, setIsBooked] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<BookingForm>();

  const services = [
    'Cắt Tóc Nam Cơ Bản - 150,000đ',
    'Cắt Tóc VIP - 250,000đ',
    'Tạo Kiểu Râu - 100,000đ',
    'Cạo Râu Truyền Thống - 80,000đ',
    'Gội Đầu Massage - 80,000đ',
    'Gội + Massage Cổ Vai - 120,000đ',
    'Tạo Kiểu Tóc - 60,000đ',
    'Combo Cắt + Gội + Tạo Kiểu - 200,000đ'
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30'
  ];

  // Generate next 14 days for booking
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      days.push(addDays(today, i));
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  const onSubmit = async (data: BookingForm) => {
    // Mock API call
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Booking data:', {
        ...data,
        date: selectedDate,
        time: selectedTime
      });
      
      setIsBooked(true);
      reset();
      setSelectedDate(null);
      setSelectedTime('');
    } catch (error) {
      console.error('Booking error:', error);
    }
  };

  // Set initial service if coming from services page
  React.useEffect(() => {
    if (selectedService) {
      const matchedService = services.find(s => s.includes(selectedService));
      if (matchedService) {
        setValue('service', matchedService);
      }
    }
  }, [selectedService, setValue]);

  if (isBooked) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md mx-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-black mb-4">Đặt Lịch Thành Công!</h2>
          <p className="text-gray-600 mb-6">
            Cảm ơn bạn đã đặt lịch. Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.
          </p>
          <button
            onClick={() => setIsBooked(false)}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Đặt Lịch Khác
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Đặt Lịch
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Chọn thời gian phù hợp và để chúng tôi chăm sóc phong cách của bạn
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <User className="w-6 h-6" />
                Thông Tin Cá Nhân
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ Tên *
                  </label>
                  <input
                    {...register('name', { required: 'Vui lòng nhập họ tên' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Nhập họ tên của bạn"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số Điện Thoại *
                  </label>
                  <input
                    {...register('phone', { 
                      required: 'Vui lòng nhập số điện thoại',
                      pattern: {
                        value: /^[0-9]{10,11}$/,
                        message: 'Số điện thoại không hợp lệ'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="0123 456 789"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  {...register('email', {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email không hợp lệ'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Service Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-6">
                Chọn Dịch Vụ
              </h2>
              
              <select
                {...register('service', { required: 'Vui lòng chọn dịch vụ' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                defaultValue={selectedService ? services.find(s => s.includes(selectedService)) : ''}
              >
                <option value="">Chọn dịch vụ</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
              )}
            </div>

            {/* Date Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Chọn Ngày
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {calendarDays.map((day) => {
                  const isToday = isSameDay(day, new Date());
                  const isSelected = selectedDate && isSameDay(day, selectedDate);
                  
                  return (
                    <button
                      key={day.toISOString()}
                      type="button"
                      onClick={() => setSelectedDate(day)}
                      className={`p-3 rounded-lg text-center transition-all duration-200 ${
                        isSelected
                          ? 'bg-yellow-500 text-black shadow-lg'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      } ${isToday ? 'ring-2 ring-yellow-300' : ''}`}
                    >
                      <div className="font-semibold">
                        {format(day, 'dd/MM', { locale: vi })}
                      </div>
                      <div className="text-xs mt-1">
                        {format(day, 'EEE', { locale: vi })}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Chọn Giờ
                </h2>
                
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg text-center transition-all duration-200 ${
                        selectedTime === time
                          ? 'bg-yellow-500 text-black shadow-lg'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Notes */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ghi Chú (Tùy chọn)
              </label>
              <textarea
                {...register('notes')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                placeholder="Có yêu cầu đặc biệt gì không?"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={!selectedDate || !selectedTime}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                selectedDate && selectedTime
                  ? 'bg-black hover:bg-gray-800 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              whileHover={selectedDate && selectedTime ? { scale: 1.02 } : {}}
              whileTap={selectedDate && selectedTime ? { scale: 0.98 } : {}}
            >
              {!selectedDate ? 'Chọn Ngày' : !selectedTime ? 'Chọn Giờ' : 'Xác Nhận Đặt Lịch'}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Cần Hỗ Trợ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-semibold">Hotline</div>
                <div className="text-yellow-400">0123 456 789</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-yellow-400">info@barberstudio.vn</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};