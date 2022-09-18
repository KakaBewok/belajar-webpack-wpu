//import semua file js yang ada di bootstrap
import * as bootstrap from "bootstrap";

//import modul untuk styling .css
import css from "./style.scss"; //setelah dipanggil install npm loadersnya

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

// ketika js berubah (misal memunculkan alert saat pertama dibuka)
// alert("Hlo sdfhjdshfj");
