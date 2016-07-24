/**
 * Created by srini on 24-07-2016.
 */
var currentURL = document.URL;
var currentTitle = document.title;
var timeInterval;

$(document).ready(function(){
  timeInterval = setInterval(switchQuote,5000);
});

var count=0; //Object Count

//New Quote Click Event
$('#newquoteId').on('click',function(){
  clearInterval(timeInterval);
  setTimeout(switchQuote,1000);
  timeInterval = setInterval(switchQuote, 10000);
});
   

//Switching the Quote
function switchQuote(){
  $('#quoteContentId > #blockQuoteId').empty();  
  
  if(count >= quotesArray.length)
    count = 0;
  var quote = quotesArray[count]; 
  
  if(quote !== null){
    $('#quoteContentId > blockquote').append('<p>'+quote.quote+'</p>');
    $('#quoteContentId > blockquote').append('<footer>'+quote.author+'</footer>');  
    
    //applying color
    $('#quoteContentId > blockquote p').css({
      'color':quote.color
    });
    
    $('#quoteContentId > blockquote footer').css({
      'color':quote.color
    });
    
    $('body').css({
      'background-color':quote.color
    });
    
    $("#newquoteId").css({
      'background-color':quote.color
    });    
   
    //$('blockquote').attr('color-content', quote.color);
    
    $("#twitterId").css({
      'background-color':quote.color
    });
    
    $("#linkedInId").css({
      'background-color':quote.color
    });
    
    $("#googlePlusId").css({
      'background-color':quote.color
    });
    
  }  
  count++;
}

//Tweet Click Event
$('#twitterId').on('click',function(){
    var quote=$("#quoteContentId").text();  
    var text = document.getElementById('quoteContentId').textContent;
   console.log(text);
  //$(this).attr('href',"http://twitter.com/home/?status=" + quote+"&hashtags=kksrini89"); ;
   $(this).attr('href','https://twitter.com/intent/tweet?hashtags=kksrini89,randomquotes&text='+"\""+quote+"\"");
});

//LinkedIn Sharing
$("#linkedInId").on('click',function(){
  var quote = $("#quoteContentId").text();  
  //http://www.linkedin.com/shareArticle?mini=true&url=[URL]&title=[TITLE]&source=[SOURCE/DOMAIN]  
  $(this).attr('href','http://www.linkedin.com/shareArticle?mini=true&url=' + currentURL + '&title='+ currentTitle +'&source=srinivasankk');
});

//Google Plus Sharing
$("#googlePlusId").on('click',function(){
  var quote=$("#quoteContentId").text();
  $(this).attr('href','https://plus.google.com/share?url=' + quote);
});























//Values
var quotesArray=[{
  "color":"#55ACEE",
  "quote":"All you need in this life is ignorance and confidence, and then success is sure.",
  "author":"Mark Twain"
},{
  "color":"#E01B4C",
  "quote":"Always be yourself and have faith in yourself. Do not go out and look for a successful personality and try to duplicate it.",
  "author":"Bruce Lee"
},{
  "color":"#FFF176",
  "quote":"Do what you can, with what you have, where you are.",
  "author":"Theodore Roosevelt"
},{
  "color":"orange",
  "quote":"No one can make you feel inferior without your consent.",
  "author":"Eleanor Roosevelt"
},{
  "color":"#4cb0d9",
  "quote":"When I started counting my blessings, my whole life turned around.",
  "author":"Willie Nelson"
},{
  "color":"#E8E6B3",
  "quote":"Do what you love and the necessary resources will follow.",
  "author":"Peter McWilliams"           
  },{
  "color":"#FBFF8F",
  "quote":"Logic will get you from A to Z; imagination will get you everywhere.",
  "author":"Albert Einstein"           
    },{
  "color":"#BFCB9B",
  "quote":"Do not fear mistakes. You will know failure. Continue to reach out.",
  "author":"Benjamin Franklin"           
      },{
  "color":"#E57013",
  "quote":"It always seems impossible until its done.",
  "author":"Nelson Mandela"           
      }];
