// SETTINGAN AWAL SEBELUM CONFIG DIPISAH

//import plugin html untuk mengenerate html baru ketika setiap kali membundle
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

// object konfig
module.exports = {
  // isi output akan menyesuaikan dengan mode apa yang digunakan
  //jika mode dev maka hasil bundle akan lebih mudah dibaca
  mode: "production", //production, development, none

  // entry/patokan lokasi dimana webpack akan membaca kode kita
  entry: "./src/index.js",

  // lokasi tempat webpack akan menaruh file output
  output: {
    // mensetting nama folder
    path: path.resolve(__dirname, "dist"),
    // mensetting nama filenya dan menghashing agar random
    filename: "main.[contenthash].js",
    //nilai pada key ini berguna agar ketika index.js diubah dan dibundle, pada file outputnya (main[hash].js tidak akan bertambah terus dan hanya 1 file terbaru saja
    clean: true,
  },

  //watch berguna agar webpack selalu otomatis membuild ketika ada perubahan pada index.js(entry) mirip kaya nodemon di server
  watch: true,

  //jika tidak ingin ada fungsi eval pada hasil bundle atau agat lebih terbaca lagi, maka berikan nilai false pada key devtool
  devtool: false,

  //konfigurasi modul, untuk mensetting loader
  module: {
    rules: [
      //rules untuk mensetting css
      {
        //test untuk memberitahu file apa yang akan dicek oleh webpack (dalam hal ini css), sedangkan use adalah apa yang akan kita gunakan kepada file test
        test: /\.css$/i,
        //style-loader berguna menerapkan hasil css ke dalam dom, urutannya style-loader dulu baru css-loader, karna webpack akan membaca dari kanan ke kiri
        use: ["style-loader", "css-loader"],
      },

      //rules untuk mensetting scss/sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      //rules untuk mensetting babel
      {
        // maksud dari ini /\.m?js$/ adalah testnya bisa mjs. atau .js
        test: /\.m?js$/,
        // exclude dibawah artinya abaikan node_modules atau bower comp. (jangan ikut dibundle)
        exclude: /(node_modules|bower_components)/,

        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  //plugin html untuk mengerenate html tiap kali membundle, agar referensi script pada htmlnya menyesuaikan dengan file outputnya
  plugins: [
    new HtmlWebpackPlugin({
      //nilai dari key template adalah file template yang akan digenerate setiap kali membuild (didalamnya sudah termasuk script main.js terbaru)
      template: "./src/template.html",
    }),
  ],
};
