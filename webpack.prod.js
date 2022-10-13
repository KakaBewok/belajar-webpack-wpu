//SEBELUM DIJALANKAN SETTING DULU PACKAGE JSONNYA

//mini-css-extract-plugin berguna memisahkan js dan css saat dibundle
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//mengimport tool npm untuk me merge 2 file konfigurasi
const { merge } = require("webpack-merge");
//mengimport file config umum (keseluruhan)
const config = require("./webpack.config");
const path = require("path");

// method merge berguna untuk menggabungkan 2 file config, dalam hal ini pada parameter pertama file config umum dan parameter ke dua adalah object konfig webpack-prod
module.exports = merge(config, {
  // isi output akan menyesuaikan dengan mode apa yang digunakan
  //jika mode dev maka hasil bundle akan lebih mudah dibaca
  mode: "production", //production, development, none

  // lokasi tempat webpack akan menaruh file output
  output: {
    // mensetting nama folder
    path: path.resolve(__dirname, "dist"),
    // mensetting nama filenya dan menghashing agar random
    //[name] mengacu ke nama key dari entry pointnya (main/vendor)
    filename: "[name].[contenthash].js",
    //(module html-loder) penyimpanan untuk asset yang terbundle
    //[name] = nama asli file sebelum dibundle, [ext] = ekstensi
    assetModuleFilename: "img/[name]-[hash][ext]",
    //nilai pada key ini berguna agar ketika index.js diubah dan dibundle, pada file outputnya (main[hash].js tidak akan bertambah terus dan hanya 1 file terbaru saja
    clean: true,
  },
  plugins: [
    //setting filename akan menentukan nama file bundle css nya
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    }),
  ],
});
