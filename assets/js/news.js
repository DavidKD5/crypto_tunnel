const GNews_api_key = "77f48f6bd862a8aae1cb5f4494b47559";

fetch("https://gnews.io/api/v4/search?q=cryptocurrency&token=" + GNews_api_key)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var title = data.articles[0].title;
    console.log(title);
    var image = data.articles[0].image;
    var link = data.articles[0].url;
    var content = data.articles[0].description;
    console.log(content);
  })

// fetch gnews api
fetch('https://gnews.io/api/v4/search?q=cryptocurrency&token='+GNews_api_key)
    .then(function (response) {
        return response.json();
    })

    // adds content to carousel
    .then(function (data) {   
             
        var title = (data.articles[0].title);
        console.log(title);
        var image = (data.articles[0].image);
        var link = (data.articles[0].url);
        var content = (data.articles[0].description);
        console.log(content);
    let newsImage = document.getElementById("newsImage" + 1);
    newsImage.src = image;
    let newsLink = document.getElementById("newsLink" + 1);
    newsLink.href = link;
    let newsTitle = document.getElementById("newsTitle" + 1);
    newsTitle.textContent = title;
    let newsContent = document.getElementById("newsContent" + 1);
    newsContent.textContent = content;

    var title2 = data.articles[1].title;
    var image2 = data.articles[1].image;
    var link2 = data.articles[1].url;
    var content2 = data.articles[1].description;

    let newsImage2 = document.getElementById("newsImage" + 2);
    newsImage2.src = image2;
    let newsLink2 = document.getElementById("newsLink" + 2);
    newsLink2.href = link2;
    let newsTitle2 = document.getElementById("newsTitle" + 2);
    newsTitle2.textContent = title2;
    let newsContent2 = document.getElementById("newsContent" + 2);
    newsContent2.textContent = content2;

    var title3 = data.articles[2].title;
    var image3 = data.articles[2].image;
    var link3 = data.articles[2].url;
    var content3 = data.articles[2].description;

    let newsImage3 = document.getElementById("newsImage" + 3);
    newsImage3.src = image3;
    let newsLink3 = document.getElementById("newsLink" + 3);
    newsLink3.href = link3;
    let newsTitle3 = document.getElementById("newsTitle" + 3);
    newsTitle3.textContent = title3;
    let newsContent3 = document.getElementById("newsContent" + 3);
    newsContent3.textContent = content3;

    var title4 = data.articles[3].title;
    var image4 = data.articles[3].image;
    var link4 = data.articles[3].url;
    var content4 = data.articles[3].description;

    let newsImage4 = document.getElementById("newsImage" + 4);
    newsImage4.src = image4;
    let newsLink4 = document.getElementById("newsLink" + 4);
    newsLink4.href = link4;
    let newsTitle4 = document.getElementById("newsTitle" + 4);
    newsTitle4.textContent = title4;
    let newsContent4 = document.getElementById("newsContent" + 4);
    newsContent4.textContent = content4;

    var title5 = data.articles[4].title;
    var image5 = data.articles[4].image;
    var link5 = data.articles[4].url;
    var content5 = data.articles[4].description;

    let newsImage5 = document.getElementById("newsImage" + 5);
    newsImage5.src = image5;
    let newsLink5 = document.getElementById("newsLink" + 5);
    newsLink5.href = link5;
    let newsTitle5 = document.getElementById("newsTitle" + 5);
    newsTitle5.textContent = title5;
    let newsContent5 = document.getElementById("newsContent" + 5);
    newsContent5.textContent = content5;

    var title6 = data.articles[5].title;
    var image6 = data.articles[5].image;
    var link6 = data.articles[5].url;
    var content6 = data.articles[5].description;

    let newsImage6 = document.getElementById("newsImage" + 6);
    newsImage6.src = image6;
    let newsLink6 = document.getElementById("newsLink" + 6);
    newsLink6.href = link6;
    let newsTitle6 = document.getElementById("newsTitle" + 6);
    newsTitle6.textContent = title6;
    let newsContent6 = document.getElementById("newsContent" + 6);
    newsContent6.textContent = content6;

    var title7 = data.articles[6].title;
    var image7 = data.articles[6].image;
    var link7 = data.articles[6].url;
    var content7 = data.articles[6].description;

    let newsImage7 = document.getElementById("newsImage" + 7);
    newsImage7.src = image7;
    let newsLink7 = document.getElementById("newsLink" + 7);
    newsLink7.href = link7;
    let newsTitle7 = document.getElementById("newsTitle" + 7);
    newsTitle7.textContent = title7;
    let newsContent7 = document.getElementById("newsContent" + 7);
    newsContent7.textContent = content7;

    var title8 = data.articles[7].title;
    var image8 = data.articles[7].image;
    var link8 = data.articles[7].url;
    var content8 = data.articles[7].description;

    let newsImage8 = document.getElementById("newsImage" + 8);
    newsImage8.src = image8;
    let newsLink8 = document.getElementById("newsLink" + 8);
    newsLink8.href = link8;
    let newsTitle8 = document.getElementById("newsTitle" + 8);
    newsTitle8.textContent = title8;
    let newsContent8 = document.getElementById("newsContent" + 8);
    newsContent8.textContent = content8;

    var title9 = data.articles[8].title;
    var image9 = data.articles[8].image;
    var link9 = data.articles[8].url;
    var content9 = data.articles[8].description;

    let newsImage9 = document.getElementById("newsImage" + 9);
    newsImage9.src = image9;
    let newsLink9 = document.getElementById("newsLink" + 9);
    newsLink9.href = link9;
    let newsTitle9 = document.getElementById("newsTitle" + 9);
    newsTitle9.textContent = title9;
    let newsContent9 = document.getElementById("newsContent" + 9);
    newsContent9.textContent = content9;

    var title10 = data.articles[9].title;
    var image10 = data.articles[9].image;
    var link10 = data.articles[9].url;
    var content10 = data.articles[9].description;

    let newsImage10 = document.getElementById("newsImage" + 10);
    newsImage10.src = image10;
    let newsLink10 = document.getElementById("newsLink" + 10);
    newsLink10.href = link10;
    let newsTitle10 = document.getElementById("newsTitle" + 10);
    newsTitle10.textContent = title10;
    let newsContent10 = document.getElementById("newsContent" + 10);
    newsContent10.textContent = content10;
  });
