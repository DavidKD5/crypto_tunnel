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
var deposit = $(".deposit");
var incorrectCrypto = $(".incorrectTicker");
var amountOfCrypto = $(".amountOfCrypto");
var deleteBtn = $(".deleteBtn");
var crypto_id_list = [];
var crypto_ticker_list = [];
var myMap = new Map();
var depositOrWithdraw = $(".depositOrWithdraw");
var cryptoPrice = null;
var ticker = $(".ticker");
var accountBalance = $(".account_balance");
var tableBody = $(".tableBody");
var portfolioBalance = 0;
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
    },
  }).then((data) => {
    for (var i = 0; i < data.data.length; i++) {
      crypto_id_list.push(data.data[i].id);
      crypto_ticker_list.push(data.data[i].symbol);
      myMap.set(data.data[i].symbol, data.data[i].id);
    }
  });
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
    localStorage.setItem("cryptoLogo", data.data[0].image);
  });
}

function withdrawFunction(e) {
  if (
    e.keyCode === 13 &&
    depositOrWithdraw.text() == "WithdrawWithdrawWithdraw"
  ) {
    $("#tableBody tr").filter(function () {
      cryptoInput.val();
    });
  }
}
cryptoInput.keyup(withdrawFunction);

function enterInput(e) {
  if (e.keyCode === 13 && depositOrWithdraw.text() == "DepositDepositDeposit") {
    incorrectCrypto.text("");
    var crypto_name_input = myMap.get(cryptoInput.val());
    if (myMap.get(cryptoInput.val())) {
      searchCrypto(crypto_name_input);
      depositMenu.hide();
      amountMenu.show();
      ticker.text(
        crypto_name_input.substring(0, 1).toUpperCase() +
          crypto_name_input.substring(1)
      );
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
      localStorage.setItem("cryptoPrice", data.data[0].current_price);
      var cryptoPrice = localStorage.getItem("cryptoPrice");
      totalAmountUSD.text("$" + cryptoPrice * amountInputVal);
      localStorage.setItem(
        "priceChange",
        data.data[0].price_change_percentage_24h
      );
    });
  }
}
depositBtn.click(() => {
  depositMenu.show();
  depositOrWithdraw.text("Deposit");
});
withdrawBtn.click(() => {
  var portfolioTicker = $(".portfolioTicker");
  depositMenu.show();
  depositOrWithdraw.text("Withdraw");
});
cryptoInput.keyup((e) => {
  enterInput(e);
});
amountInput.keyup((e) => {
  amountEnterInput(e);
});
nextBtn.click(() => {
  var amountInputVal = amountInput.val();
  amountMenu.hide();
  amountOfCrypto.text(" " + amountInputVal);
  confirmMenu.show();
});

var counter = 0;

yesBtn.click(() => {
  var crypto_name_input = myMap.get(cryptoInput.val());
  var cryptoPrice = localStorage.getItem("cryptoPrice");
  var amountInputVal = amountInput.val();
  portfolioBalance = portfolioBalance + cryptoPrice * amountInputVal;
  var USDValue = "$" + (cryptoPrice * amountInputVal).toFixed(2);
  var cryptoLogo = localStorage.getItem("cryptoLogo");
  console.log(cryptoLogo);
  counter = counter + 1;
  accountBalance.text("$" + portfolioBalance.toFixed(2));
  $("#tab").append(
    $("<tr class=fw-normal>")
      .append('<img src="' + cryptoLogo + '" class="cryptoImage"></img>')
      .append(
        $('<td class="portfolioTicker">').append(
          cryptoInput.val().toUpperCase()
        )
      )
      .append(
        $("<td>").append(
          crypto_name_input.substring(0, 1).toUpperCase() +
            crypto_name_input.substring(1)
        )
      )
      .append($("<td>").append("$" + cryptoPrice))
      .append(
        $("<td>").append(
          parseFloat(localStorage.getItem("priceChange")).toFixed(2) + "%"
        )
      )
      .append($("<td>").append(amountInputVal))
      .append($('<td class="portfolioAmountUSD">').append(USDValue))
      .append(
        $(
          '<td class="deleteBtn' +
            counter +
            '"><img src="assets/images/delete.png" class="deleteIcon" onclick="deleteItem' +
            counter +
            '();">)'
        )
      )
  );
  confirmMenu.hide();
  cryptoInput.val("");
  amountInput.val("");
  totalAmountUSD.text("");
});
cryptoInput.keyup(enterInput);

function deleteItem1() {
  var red = $(".deleteBtn1").parent().children("td.portfolioAmountUSD").text();
  withdrawAmount = parseFloat(red.substring(1));
  portfolioBalance = portfolioBalance - withdrawAmount;
  accountBalance.text("$" + portfolioBalance.toFixed(2));
  $(".deleteBtn1").parent().remove();
}
function deleteItem2() {
  var red = $(".deleteBtn2").parent().children("td.portfolioAmountUSD").text();
  withdrawAmount = parseFloat(red.substring(1));
  portfolioBalance = portfolioBalance - withdrawAmount;
  accountBalance.text("$" + portfolioBalance.toFixed(2));
  $(".deleteBtn2").parent().remove();
}
function deleteItem3() {
  var red = $(".deleteBtn3").parent().children("td.portfolioAmountUSD").text();
  withdrawAmount = parseFloat(red.substring(1));
  portfolioBalance = portfolioBalance - withdrawAmount;
  accountBalance.text("$" + portfolioBalance.toFixed(2));
  $(".deleteBtn3").parent().remove();
}
function deleteItem4() {
  var red = $(".deleteBtn4").parent().children("td.portfolioAmountUSD").text();
  withdrawAmount = parseFloat(red.substring(1));
  portfolioBalance = portfolioBalance - withdrawAmount;
  accountBalance.text("$" + portfolioBalance.toFixed(2));
  $(".deleteBtn4").parent().remove();
}
function deleteItem5() {
  var red = $(".deleteBtn5").parent().children("td.portfolioAmountUSD").text();
  withdrawAmount = parseFloat(red.substring(1));
  portfolioBalance = portfolioBalance - withdrawAmount;
  accountBalance.text("$" + portfolioBalance.toFixed(2));
  $(".deleteBtn5").parent().remove();
}
function deleteItem6() {
  var red = $(".deleteBtn6").parent().children("td.portfolioAmountUSD").text();
  withdrawAmount = parseFloat(red.substring(1));
  portfolioBalance = portfolioBalance - withdrawAmount;
  accountBalance.text("$" + portfolioBalance.toFixed(2));
  $(".deleteBtn6").parent().remove();
}
function deleteItem7() {
  var red = $(".deleteBtn7").parent().children("td.portfolioAmountUSD").text();
  withdrawAmount = parseFloat(red.substring(1));
  portfolioBalance = portfolioBalance - withdrawAmount;
  accountBalance.text("$" + portfolioBalance.toFixed(2));
  $(".deleteBtn7").parent().remove();
}
function deleteItem8() {
  var red = $(".deleteBtn8").parent().children("td.portfolioAmountUSD").text();
  withdrawAmount = parseFloat(red.substring(1));
  portfolioBalance = portfolioBalance - withdrawAmount;
  accountBalance.text("$" + portfolioBalance.toFixed(2));
  $(".deleteBtn8").parent().remove();
}
function deleteItem9() {
  var red = $(".deleteBtn9").parent().children("td.portfolioAmountUSD").text();
  withdrawAmount = parseFloat(red.substring(1));
  portfolioBalance = portfolioBalance - withdrawAmount;
  accountBalance.text("$" + portfolioBalance.toFixed(2));
  $(".deleteBtn9").parent().remove();
}
