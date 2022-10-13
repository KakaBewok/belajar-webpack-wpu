import _ from "lodash";

const mahasiswa = [
  {
    nama: "Rizal",
    nim: 123,
  },
  {
    nama: "Rara",
    nim: 321,
  },
];

const mhs = _.find(mahasiswa, { nama: "Rara" });

console.log(mhs);
