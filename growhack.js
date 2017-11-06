// prati sve ljude koje ne pratim
a = setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);
  $('.not-following .user-actions-follow-button.js-follow-btn button.follow-text').click();
}, 5000);

// favorizovanje svega redom
a = setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);
  $('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite:visible').click();
}, 5000)

// prati samo relevantne
a = setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);

  $(".ProfileCard-userFields").each( function() {
    if($(this).find('.ProfileCard-bio').text().match(new RegExp("entrepreneur|founder|tech|growthhacking|hacking|official|consultant|analytics|ecom|startup|ceo|ux|seo|ecommerce|growth"), "g") !== null )
    {
      $(this).parent().find('.not-following .user-actions-follow-button.js-follow-btn').click();
    }
  });
}, 5000);

// zaustavljanje

clearInterval(a)

// uklanja one koji te ne prate
// https://web.crowdfireapp.com/#/grow/2784561070-tw/nonFollowers?source=power_tools
