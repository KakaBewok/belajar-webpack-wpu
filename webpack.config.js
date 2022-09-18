const path = require("path");

// object konfig
module.exports = {
  // isi output akan menyesuaikan dengan mode apa yang digunakan
  //jika mode dev maka hasil bundle akan lebih mudah dibaca
  mode: "development", //production, development, none

  // entry/patokan lokasi dimana webpack akan membaca kode kita
  entry: "./src/index.js",

  // lokasi tempat webpack akan menaruh file output
  output: {
    // mensetting nama folder
    path: path.resolve(__dirname, "output"),
    // mensetting nama filenya
    filename: "bundle.js",
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
};
