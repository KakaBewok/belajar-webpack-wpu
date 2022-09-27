//SEBELUM DIJALANKAN SETTING DULU PACKAGE JSONNYA

//mini-css-extract-plugin berguna memisahkan js dan css saat dibundle
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  //dev server fungsinya mirip dengan liveserver
  devServer: {
    static: {
      //direktori yang akan diwatch
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 3000,
    // liveservernya
    liveReload: true,
  },
  // lokasi tempat webpack akan menaruh file output
  output: {
    // mensetting nama folder
    path: path.resolve(__dirname, "dist"),
    // mensetting nama filenya
    filename: "main.js",
    //(module html-loder) penyimpanan untuk asset yang terbundle
    //[name] = nama asli file sebelum dibundle, [ext] = ekstensi
    assetModuleFilename: "img/[name][ext]",
    //nilai pada key ini berguna agar ketika index.js diubah dan dibundle, pada file outputnya (main[hash].js tidak akan bertambah terus dan hanya 1 file terbaru saja
    clean: true,
  },
  plugins: [
    //jika parameternya kosong berarti nanti nama file bundlenya otomatis main.js
    new MiniCssExtractPlugin(),
  ],
  //watch berguna agar webpack selalu otomatis membuild ketika ada perubahan pada index.js(entry) mirip kaya nodemon di server
  // watch: true,
});
