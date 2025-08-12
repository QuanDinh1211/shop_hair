import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Tất Cả' },
    { id: 'haircuts', name: 'Cắt Tóc' },
    { id: 'beards', name: 'Râu Ria' },
    { id: 'interior', name: 'Không Gian' },
    { id: 'tools', name: 'Dụng Cụ' },
    { id: 'beforeafter', name: 'Before/After' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      alt: 'Thợ cắt tóc chuyên nghiệp đang tạo kiểu tóc cho khách',
      category: 'haircuts',
      title: 'Cắt Tóc Chuyên Nghiệp'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      alt: 'Tạo kiểu râu và tóc hiện đại',
      category: 'beards',
      title: 'Tạo Kiểu Râu Hiện Đại'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
      alt: 'Gội đầu và massage thư giãn',
      category: 'haircuts',
      title: 'Dịch Vụ Gội Massage'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
      alt: 'Không gian quán cắt tóc sang trọng',
      category: 'interior',
      title: 'Không Gian Sang Trọng'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      alt: 'Ghế cắt tóc da thật cao cấp',
      category: 'interior',
      title: 'Ghế Cắt Tóc Cao Cấp'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
      alt: 'Bộ dụng cụ cắt tóc chuyên nghiệp',
      category: 'tools',
      title: 'Dụng Cụ Chuyên Nghiệp'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      alt: 'Kiểu tóc undercut thời trang',
      category: 'haircuts',
      title: 'Undercut Thời Trang'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
      alt: 'Cạo râu truyền thống với dao thẳng',
      category: 'beards',
      title: 'Cạo Râu Truyền Thống'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      alt: 'Before và After của kiểu tóc fade',
      category: 'beforeafter',
      title: 'Before/After Fade Cut'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
      alt: 'Tông đơ chuyên nghiệp Wahl',
      category: 'tools',
      title: 'Tông Đơ Chuyên Nghiệp'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      alt: 'Kiểu râu Van Dyke được tạo kiểu',
      category: 'beards',
      title: 'Râu Van Dyke Style'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
      alt: 'Quầy reception hiện đại của tiệm',
      category: 'interior',
      title: 'Quầy Reception'
    },
    {
      id: 13,
      src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      alt: 'Pompadour cổ điển được tạo kiểu hoàn hảo',
      category: 'haircuts',
      title: 'Pompadour Cổ Điển'
    },
    {
      id: 14,
      src: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
      alt: 'Kéo cắt tóc Nhật Bản cao cấp',
      category: 'tools',
      title: 'Kéo Cắt Cao Cấp'
    },
    {
      id: 15,
      src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      alt: 'Before/After của dịch vụ cắt + tạo kiểu',
      category: 'beforeafter',
      title: 'Transformation Hoàn Toàn'
    },
    {
      id: 16,
      src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
      alt: 'Khu vực chờ thoải mái với ghế sofa',
      category: 'interior',
      title: 'Khu Vực Chờ'
    },
    {
      id: 17,
      src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      alt: 'Tạo kiểu râu goatee hiện đại',
      category: 'beards',
      title: 'Goatee Style'
    },
    {
      id: 18,
      src: 'https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg',
      alt: 'Máy sấy tóc chuyên nghiệp',
      category: 'tools',
      title: 'Máy Sấy Chuyên Nghiệp'
    },
    {
      id: 19,
      src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      alt: 'Kiểu tóc slick back thanh lịch',
      category: 'haircuts',
      title: 'Slick Back Thanh Lịch'
    },
    {
      id: 20,
      src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
      alt: 'Gương trang trí nghệ thuật trong tiệm',
      category: 'interior',
      title: 'Gương Nghệ Thuật'
    }
  ];

  const filteredImages = galleryImages.filter(image => 
    selectedCategory === 'all' || image.category === selectedCategory
  );

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

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
            Gallery
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Khám phá không gian, dụng cụ chuyên nghiệp và những tác phẩm tuyệt vời tại BarberStudio
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Bộ lọc:</span>
            </div>
            <div className="flex flex-wrap gap-2 ml-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-black shadow-lg'
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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="font-semibold mb-1">{image.title}</h3>
                        <p className="text-sm">Nhấn để xem lớn</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Không có ảnh nào trong danh mục này</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <motion.img
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="max-w-full max-h-full object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{selectedImageData.title}</h3>
                <p className="text-gray-300">{selectedImageData.alt}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};