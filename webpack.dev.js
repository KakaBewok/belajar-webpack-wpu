//SEBELUM DIJALANKAN SETTING DULU PACKAGE JSONNYA

//mengimport tool npm untuk me merge 2 file konfigurasi
const { merge } = require("webpack-merge");
//mengimport file config umum (keseluruhan)
const config = require("./webpack.config");
const path = require("path");

// method merge berguna untuk menggabungkan 2 file config, dalam hal ini pada parameter pertama file config umum dan parameter ke dua adalah object konfig webpack-dev
module.exports = merge(config, {
  // isi output akan menyesuaikan dengan mode apa yang digunakan
  //jika mode dev maka hasil bundle akan lebih mudah dibaca
  mode: "development", //production, development, none

  // lokasi tempat webpack akan menaruh file output
  output: {
    // mensetting nama folder
    path: path.resolve(__dirname, "dist"),
    // mensetting nama filenya
    filename: "main.js",
    //nilai pada key ini berguna agar ketika index.js diubah dan dibundle, pada file outputnya (main[hash].js tidak akan bertambah terus dan hanya 1 file terbaru saja
    clean: true,
  },

  //watch berguna agar webpack selalu otomatis membuild ketika ada perubahan pada index.js(entry) mirip kaya nodemon di server
  watch: true,
});
