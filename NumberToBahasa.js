var satuan = [
  "",
  "satu",
  "dua",
  "tiga",
  "empat",
  "lima",
  "enam",
  "tujuh",
  "delapan",
  "sembilan",
];
var puluhan = [
  "",
  "",
  "dua puluh",
  "tiga puluh",
  "empat puluh",
  "lima puluh",
  "enam puluh",
  "tujuh puluh",
  "delapan puluh",
  "sembilan puluh",
];
var belasan = [
  "sepuluh",
  "sebelas",
  "dua belas",
  "tiga belas",
  "empat belas",
  "lima belas",
  "enam belas",
  "tujuh belas",
  "delapan belas",
  "sembilan belas",
];

function convert(num) {
  if (num == 0) return "nol";
  function convert_tens(num) {
    if (num < 10) return satuan[num];
    else if (num >= 10 && num < 20) return belasan[num - 10];
    else {
      return puluhan[Math.floor(num / 10)] + " " + satuan[num % 10];
    }
  }
  function convert_hundreds(num) {
    if (num > 99 && num < 200) {
      return "seratus " + convert_tens(num % 100);
    }
    if (num > 199) {
      return (
        satuan[Math.floor(num / 100)] + " ratus " + convert_tens(num % 100)
      );
    } else {
      return convert_tens(num);
    }
  }
  function convert_thousands(num) {
    if (num > 999 && num < 2000) {
      return "seribu " + convert_hundreds(num % 1000);
    }
    if (num > 1099) {
      return (
        convert_hundreds(Math.floor(num / 1000)) +
        " ribu " +
        convert_hundreds(num % 1000)
      );
    } else {
      return convert_hundreds(num);
    }
  }

  let cases = [];
  for (let i = 0; i < num.length; i++) {
    let word = convert_thousands(num[i]);
    cases.push(word);
  }
  return cases;
}


console.log(convert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,101,1001,2000,99999,800000]));
