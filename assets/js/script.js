var current_date = document.querySelector("#current_date");
current_date.textContent = moment().format("MMMM Do, YYYY");
var cryptoInput = $("#cryptoInput");
var deposit = $(".deposit");
var incorrectCrypto = $(".incorrectTicker");

// Jorge's section start
var crypto_id_list = [];
var crypto_ticker_list = [];
var myMap = new Map();

// let i = 0;
// while (i < 1) {
// i++;

function all_crypto_data() {
  axios({
    method: "get",
    url: "https://api.coingecko.com/api/v3/coins/markets?",
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: "250",
      // page: i,
      // sparkline: "false",
    },
  }).then((data) => {
    for (var i = 0; i < data.data.length; i++) {
      crypto_id_list.push(data.data[i].id);
      crypto_ticker_list.push(data.data[i].symbol);
      myMap.set(data.data[i].symbol, data.data[i].id);
    }
  });
  // }
}
all_crypto_data();

function searchCrypto(crypto) {
  axios({
    method: "get",
    url: "https://api.coingecko.com/api/v3/coins/markets?",
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: "250",
      sparkline: "false",
      ids: crypto,
    },
  }).then((data) => {
    console.log(data);
  });
}

function enterInput(e) {
  if (e.keyCode === 13) {
    incorrectCrypto.text("");
    var crypto_name_input = myMap.get(cryptoInput.val());
    if (myMap.get(cryptoInput.val())) {
      searchCrypto(crypto_name_input);
    } else {
      incorrectCrypto.text(
        "No crypto ticker found. Please enter correct ticker information."
      );
    }
  }
}

cryptoInput.keyup(enterInput);
// Jorge's section end
