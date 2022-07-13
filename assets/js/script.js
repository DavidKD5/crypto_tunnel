var current_date = document.querySelector("#current_date");
current_date.textContent = moment().format("MMMM Do, YYYY");
var cryptoInput = $("#cryptoInput");
var amountInput = $("#amountInput");
var depositMenu = $(".depositMenu");
var amountMenu = $(".amountMenu");
var confirmMenu = $(".confirmMenu");
var incorrectCrypto = $(".incorrectTicker");
var depositBtn = $("#deposit_button");
var withdrawBtn = $("#withdraw_button");
var totalAmountUSD = $(".totalAmountUSD");
var backBtn = $(".backBtn");
var cancelBtn = $(".cancelBtn");
var nextBtn = $(".nextBtn");
var yesBtn = $(".yesBtn");
var noBtn = $(".noBtn");
// Jorge's section start
var crypto_id_list = [];
var crypto_ticker_list = [];
var myMap = new Map();
var depositOrWithdraw = $(".depositOrWithdraw");
var cryptoPrice = null;
var ticker = $(".ticker");

// let i = 0;
// while (i < 1) {
// i++;

depositMenu.hide();
amountMenu.hide();
confirmMenu.hide();
nextBtn.hide();

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
    // console.log(data);
    var cryptoPrice = data.data[0].current_price;
  });
}

function enterInput(e) {
  if (e.keyCode === 13) {
    amountMenu.show();
    incorrectCrypto.text("");
    var crypto_name_input = myMap.get(cryptoInput.val());
    ticker.text(
      crypto_name_input.substring(0, 1).toUpperCase() +
        crypto_name_input.substring(1)
    );
    if (myMap.get(cryptoInput.val())) {
      searchCrypto(crypto_name_input);
      depositMenu.hide();
    } else {
      incorrectCrypto.text(
        "No crypto ticker found. Please enter correct ticker information."
      );
    }
  }
}

function amountEnterInput(e) {
  if (e.keyCode === 13) {
    var amountInputVal = amountInput.val();
    var crypto_name_input = myMap.get(cryptoInput.val());
    nextBtn.show();
    axios({
      method: "get",
      url: "https://api.coingecko.com/api/v3/coins/markets?",
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: "250",
        sparkline: "false",
        ids: crypto_name_input,
      },
    }).then((data) => {
      var cryptoPrice = data.data[0].current_price;
      totalAmountUSD.text("$" + cryptoPrice * amountInputVal);
    });
  }
}

depositBtn.click(() => {
  depositMenu.show();
  depositOrWithdraw.text("Deposit");
});

cryptoInput.keyup(() => {
  enterInput(event);
});

amountInput.keyup(() => {
  amountEnterInput(event);
});

nextBtn.click(() => {
  amountMenu.hide();
  confirmMenu.show();
});

yesBtn.click(() => {
  $("#tab").append(
    $("<tr>")
      .append($("<td>").append("text1"))
      .append($("<td>").append(crypto_name_input))
      .append($("<td>").append("text3"))
      .append($("<td>").append("text4"))
  );
});
