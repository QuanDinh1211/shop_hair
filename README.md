# BarberStudio - Website Quán Cắt Tóc Chuyên Nghiệp

BarberStudio là website hiện đại cho quán cắt tóc với giao diện đẹp mắt, responsive và đầy đủ tính năng.

## 🌟 Tính Năng Chính

### 📱 Responsive Design
- Tối ưu cho mobile, tablet và desktop
- Breakpoints: 320px, 768px, 1024px+
- Touch-friendly navigation

### 🎨 Giao Diện Hiện Đại
- Màu sắc: Đen (#1a1a1a), Vàng đồng (#d4af37), Gỗ ấm (#8b7355)
- Typography: Playfair Display (headings) + Inter (body)
- Animations mượt mà với Framer Motion
- Micro-interactions và hover effects

### 🖼️ Gallery Với 20+ Hình Ảnh
- Lightbox viewer với navigation
- Filter theo thể loại (cắt tóc, râu, không gian, tools)
- Lazy loading để tối ưu performance
- Grid layout responsive

### 📅 Hệ Thống Đặt Lịch
- Date picker với 14 ngày tới
- Time slots từ 8:00-20:00
- Form validation với React Hook Form
- Mock API integration

### 🛍️ Trang Dịch Vụ
- 8+ dịch vụ với giá và mô tả
- Search và filter functionality
- Service cards với hover effects
- CTA buttons đến booking

### 👥 Giới Thiệu Đội Ngũ
- 4 barber profiles với kinh nghiệm
- Skills chart và achievements
- Working schedules
- Rating system

### 📝 Blog & Khuyến Mãi
- 8 bài viết mẫu
- Category filtering
- Search functionality
- Featured posts
- Newsletter subscription

## 🚀 Cài Đặt & Chạy

```bash
# Clone hoặc tải về source code
cd barbershop-website

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## 📁 Cấu Trúc Thư Mục

```
src/
├── components/          # Shared components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ScrollToTop.tsx # Auto scroll to top
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Services.tsx    # Services listing
│   ├── Booking.tsx     # Appointment booking
│   ├── Gallery.tsx     # Image gallery
│   ├── Team.tsx        # Team members
│   ├── Contact.tsx     # Contact form
│   └── Blog.tsx        # Blog & promotions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Trang Web Bao Gồm

### 🏠 Trang Chủ (Home)
- Hero banner với video background
- Featured services preview
- Stats section
- Gallery preview
- Customer testimonials
- Call-to-action sections

### 🛠️ Dịch Vụ (Services)
- Service grid với 8+ dịch vụ
- Search và category filter
- Pricing và descriptions
- Book now CTAs
- Service details

### 📅 Đặt Lịch (Booking)
- Personal information form
- Service selection dropdown
- Interactive calendar (14 ngày)
- Time slot selection
- Form validation
- Success confirmation

### 🖼️ Gallery
- 20+ hình ảnh chất lượng cao
- 5 categories: Tất cả, Cắt tóc, Râu, Không gian, Dụng cụ, Before/After
- Lightbox với keyboard navigation
- Responsive grid layout

### 👥 Đội Ngũ (Team)
- 4 barber profiles
- Experience và specialties
- Working schedules
- Achievements và ratings
- Skills overview chart

### 📞 Liên Hệ (Contact)
- Contact information
- Contact form với validation
- Google Maps placeholder
- Social media links
- Business hours

### 📰 Blog
- 8 bài viết mẫu
- Category filtering
- Search functionality
- Featured post
- Newsletter subscription

## 🔧 Công Nghệ Sử Dụng

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 📱 SEO & Performance

### SEO Optimizations
- Semantic HTML5 structure
- Meta tags cho tất cả pages
- Open Graph tags
- Structured data (LocalBusiness schema)
- Optimized images với alt text
- Sitemap ready

### Performance Features
- Lazy loading images
- Code splitting với React Router
- Optimized fonts loading
- Minified CSS/JS
- Image optimization ready

## 🎨 Design System

### Colors
```css
- Primary: #1a1a1a (Black)
- Secondary: #d4af37 (Gold)
- Accent: #8b7355 (Warm Brown)
- Success: #10b981
- Warning: #f59e0b
- Error: #ef4444
```

### Typography
- **Headings**: Playfair Display (400, 600, 700, 800)
- **Body**: Inter (400, 500, 600, 700, 800)
- **Line Height**: 150% (body), 120% (headings)

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px

## 📊 Features Checklist

- ✅ Responsive design (320px, 768px, 1024px+)
- ✅ Gallery với lightbox và 20+ ảnh
- ✅ Booking form với validation
- ✅ Service search và filter
- ✅ Blog với category filter
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Accessibility features
- ✅ Modern animations
- ✅ Touch-friendly mobile UI

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Hỗ Trợ

Nếu bạn cần hỗ trợ:
1. Kiểm tra console logs cho lỗi
2. Đảm bảo Node.js version >= 16
3. Clear cache và npm install lại
4. Kiểm tra network requests trong dev tools

## 🎯 Tùy Chỉnh

### Thay Đổi Hình Ảnh
1. Thêm ảnh vào `public/images/`
2. Cập nhật URLs trong components
3. Đảm bảo có alt text mô tả

### Thêm Dịch Vụ
1. Cập nhật `services` array trong `Services.tsx`
2. Thêm category mới nếu cần
3. Cập nhật dropdown trong `Booking.tsx`

### Customize Colors
1. Sửa `tailwind.config.js`
2. Cập nhật CSS variables
3. Test contrast ratios

---

Made with ❤️ for BarberStudio - "Phong cách mới, Self-confidence mới"