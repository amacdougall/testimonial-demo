var quotes = [
  "Brad is a really nice guy.",
  "Brad has a good haircut.",
  "I would give Brad a lot of money, because he deserves it.",
  "Brad is pretty good with Ryu."
];

var showNextQuote = function() {
  var quote = quotes.shift(); // take first quote
  quotes.push(quote); // put that quote at the end

  $(".testimonials p").fadeOut(function() {
    $(".testimonials p").text(quote);
    $(".testimonials p").fadeIn();
  });
};

$(document).ready(function() {
  setInterval(showNextQuote, 5000);
});
