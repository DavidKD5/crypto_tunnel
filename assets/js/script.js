var current_date = document.querySelector("#current_date");
current_date.textContent = moment().format("MMMM Do, YYYY");
var cryptoInput = $("#cryptoSearch");
var deposit = $(".deposit");

// fetch(
//   "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
var crypto_id_list = [];
var crypto_ticker_list = [];
var crypto_dict = {};
const myMap = new Map();

let i = 0;
while (i < 20) {
  i++;
  axios({
    method: "get",
    url: "https://api.coingecko.com/api/v3/coins/markets?",
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: "250",
      page: i,
      sparkline: "false",
    },
  }).then((data) => {
    for (var i = 0; i < data.data.length; i++) {
      crypto_id_list.push(data.data[i].id);
      crypto_ticker_list.push(data.data[i].symbol);
      myMap.set(data.data[i].symbol, data.data[i].id);
    }
    console.log(myMap.get("eth"));
  });
}
// console.log(myMap);

// for (var x = 0; x < crypto_ticker_list.length; x++) {
//   // crypto_dict[crypto_ticker_list[x]] = crypto_id_list[x];
//   console.log("yes");
// }
// console.log(crypto_dict);
function searchCrypto(crypto) {
  let i = 0;
  while (i < 1) {
    i++;
    axios({
      method: "get",
      url: "https://api.coingecko.com/api/v3/coins/markets?",
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: "250",
        page: i,
        sparkline: "false",
        ids: crypto,
      },
    }).then((data) => {
      console.log(data.data.length);
    });
  }
}

function enterInput(e) {
  if (e.keyCode === 13) {
    searchCrypto(cryptoInput.val());
  }
}

cryptoInput.keyup(enterInput);
