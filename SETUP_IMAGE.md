# Hướng dẫn thêm ảnh đại diện

## 📸 Thêm ảnh profile

1. **Đặt ảnh vào thư mục:**
   ```
   public/images/profile.jpg
   ```

2. **Yêu cầu ảnh:**
   - Tên file: `profile.jpg` hoặc `profile.png`
   - Kích thước: 512x512px trở lên (tỷ lệ 1:1 - hình vuông)
   - Format: JPG hoặc PNG
   - File size: Tối ưu dưới 500KB

3. **Nếu không có ảnh:**
   - Website sẽ tự động hiển thị avatar với chữ cái đầu của tên bạn
   - Gradient background đẹp mắt

## 🎨 Tính năng đã thêm

### ✅ Ảnh đại diện
- Hiển thị ở đầu section "About Me"
- Dạng tròn (circular) với ring border
- Animation khi scroll vào view
- Tự động fallback nếu không có ảnh

### ✅ Smooth Scroll với GSAP
- Smooth scroll mượt mà khi click navigation
- Kết hợp với CSS smooth scroll
- Animation duration: 1.5s với easing `power2.inOut`
- Offset 80px để tránh bị che bởi fixed navigation

### ✅ Hiệu ứng
- Fade in animation khi scroll
- Scale animation cho ảnh profile
- Smooth transitions

## 🔧 Cách hoạt động

1. **Smooth Scroll:**
   - Click vào bất kỳ link navigation nào
   - GSAP sẽ animate scroll đến section tương ứng
   - Smooth và mượt mà

2. **Profile Image:**
   - Tự động load từ `/public/images/profile.jpg`
   - Nếu không tìm thấy, hiển thị avatar với initials
   - Next.js tự động optimize ảnh

## 📝 Lưu ý

- Đảm bảo ảnh có chất lượng tốt
- Nên dùng ảnh chân dung rõ nét
- Background nên đơn giản để nổi bật
- Ảnh sẽ được crop thành hình tròn
