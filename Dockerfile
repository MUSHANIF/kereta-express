# Gunakan base image Node.js versi terbaru LTS
FROM node:18

# Set direktori kerja di dalam container
WORKDIR /app

# Copy file package.json dan package-lock.json untuk menginstall dependensi
COPY package*.json ./

# Install dependensi
RUN npm install

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Jalankan aplikasi pada port 3000
EXPOSE 4000

# Jalankan aplikasi
CMD ["node", "src/index.js"]
