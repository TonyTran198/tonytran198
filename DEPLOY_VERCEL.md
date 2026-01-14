# 🚀 Hướng dẫn Deploy lên Vercel

## ✅ Build thành công!

Dự án đã được build thành công và sẵn sàng deploy lên Vercel.

## 📋 Các bước deploy

### Cách 1: Deploy qua GitHub (Khuyến nghị)

#### Bước 1: Push code lên GitHub

```bash
# Khởi tạo git (nếu chưa có)
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Thêm remote (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

#### Bước 2: Deploy trên Vercel

1. **Truy cập:** https://vercel.com
2. **Đăng nhập** bằng GitHub account
3. **Click "Add New Project"**
4. **Import Repository:**
   - Chọn repository vừa push
   - Vercel sẽ tự động detect Next.js
5. **Configure Project:**
   - Framework Preset: **Next.js** (tự động)
   - Root Directory: `./` (mặc định)
   - Build Command: `npm run build` (tự động)
   - Output Directory: `.next` (tự động)
   - Install Command: `npm install` (tự động)
6. **Click "Deploy"**
7. **Chờ build** (2-3 phút)
8. **Xong!** Website sẽ có URL: `https://your-project.vercel.app`

---

### Cách 2: Deploy bằng Vercel CLI

#### Bước 1: Cài đặt Vercel CLI

```bash
npm i -g vercel
```

#### Bước 2: Login

```bash
vercel login
```

#### Bước 3: Deploy

```bash
# Deploy lần đầu (sẽ hỏi một số câu hỏi)
vercel

# Deploy production
vercel --prod
```

**Các câu hỏi khi deploy lần đầu:**
- Set up and deploy? → **Y**
- Which scope? → Chọn account của bạn
- Link to existing project? → **N** (lần đầu)
- Project name? → Nhấn Enter (dùng tên mặc định)
- Directory? → Nhấn Enter (dùng `.`)
- Override settings? → **N**

---

### Cách 3: Deploy trực tiếp từ Vercel Dashboard

1. Truy cập https://vercel.com/new
2. Chọn "Import Git Repository"
3. Chọn repository từ GitHub/GitLab/Bitbucket
4. Click "Deploy"

---

## ⚙️ Cấu hình đã sẵn sàng

### File `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["sin1"]
}
```

- ✅ Framework: Next.js (auto-detect)
- ✅ Build command: `npm run build`
- ✅ Region: Singapore (sin1) - tốt cho Việt Nam

### Environment Variables

Hiện tại **không cần** environment variables. Nếu sau này cần thêm:
- Vào Vercel Dashboard → Project Settings → Environment Variables
- Thêm các biến cần thiết

---

## 🔍 Kiểm tra sau khi deploy

### 1. Kiểm tra Build Logs

- Vào Vercel Dashboard → Project → Deployments
- Click vào deployment mới nhất
- Xem "Build Logs" để đảm bảo không có lỗi

### 2. Kiểm tra Website

- Truy cập URL được cung cấp
- Test các chức năng:
  - ✅ Navigation smooth scroll
  - ✅ Ảnh profile hiển thị
  - ✅ Tất cả sections load đúng
  - ✅ Responsive trên mobile

### 3. Custom Domain (Tùy chọn)

1. Vào Vercel Dashboard → Project → Settings → Domains
2. Thêm domain của bạn
3. Cập nhật DNS records theo hướng dẫn

---

## 🐛 Troubleshooting

### Build failed?

1. **Kiểm tra build logs** trong Vercel Dashboard
2. **Test build local:**
   ```bash
   npm run build
   ```
3. **Kiểm tra lỗi:**
   - ESLint errors → Sửa trong code
   - TypeScript errors → Sửa types
   - Missing dependencies → Thêm vào `package.json`

### Website không load?

1. **Kiểm tra console** trong browser
2. **Kiểm tra Network tab** để xem file nào fail
3. **Kiểm tra Vercel logs:**
   - Dashboard → Project → Functions → Logs

### Ảnh không hiển thị?

1. **Đảm bảo ảnh trong `public/images/`**
2. **Kiểm tra đường dẫn:** `/images/profile.jpg`
3. **Nếu không có ảnh:** Sẽ tự động hiển thị avatar với initials

---

## 📝 Lưu ý quan trọng

### 1. Ảnh Profile

- Đặt ảnh vào: `public/images/profile.jpg`
- Hoặc sửa đường dẫn trong `components/Hero.tsx`
- Nếu không có ảnh, sẽ hiển thị avatar với chữ cái đầu

### 2. Git Repository

- **Nên** push code lên GitHub/GitLab để:
  - Dễ quản lý
  - Auto-deploy khi push code mới
  - Có version control

### 3. Auto Deploy

- Khi push code mới lên GitHub
- Vercel sẽ tự động deploy lại
- Có thể tắt trong Settings nếu không muốn

### 4. Environment

- **Production:** Tự động khi deploy
- **Preview:** Tự động khi push PR
- **Development:** Chạy local với `npm run dev`

---

## 🎉 Sau khi deploy thành công

1. ✅ Website live tại: `https://your-project.vercel.app`
2. ✅ Có thể share link với mọi người
3. ✅ Tự động có HTTPS
4. ✅ CDN global (nhanh toàn cầu)
5. ✅ Auto-scaling (tự động scale khi có traffic)

---

## 📞 Cần giúp đỡ?

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/support

---

**Chúc bạn deploy thành công! 🚀**
