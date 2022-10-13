//mengimport semua modul/library yang ada di file js vendor
require("./vendor");

//import modul untuk styling .css
import css from "./style.scss"; //setelah dipanggil install npm loadersnya
//dalam contoh ini lodash menggunakan fungsi toupper
import _ from "lodash";

// import modul js
import { run } from "./app/app.js";
import { AlertService } from "./app/alert.service.js";
import { CalculatorService } from "./app/calculator.service.js";
import { JokesService } from "./app/jokes.service.js";

// melakukan instance dari modul diatas
const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);

//menerapkan fungsi toupper()
console.log(_.toUpper("index.js"));

// ketika js berubah (misal memunculkan alert saat pertama dibuka)
// alert("Hello Rizalnokakakakakkakv");
