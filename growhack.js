/* napusti one koji me ne prate */

profili = [...$('.ProfileCard-content')].filter(el => el.querySelector('.following') && !el.innerText.includes('Follows you'))
i = 0
a = setInterval(() => {
  if (!profili[i]) {
    window.scrollTo(0, document.body.scrollHeight)
    profili = [...$('.ProfileCard-content')].filter(el => el.querySelector('.following') && !el.innerText.includes('Follows you'))
    i = 0
    if (!profili[i]) clearInterval(a)
  }
  profili[i].querySelector('button.following-text').click()
  i++
}, Math.random() * 1000)

/* zaprati one koje ne pratim */

dugmici = [...$('.not-following .user-actions-follow-button.js-follow-btn button.follow-text')]
i = 0
a = setInterval(function () {
  if (!dugmici[i]) {
    window.scrollTo(0,document.body.scrollHeight)
    dugmici = [...$('.not-following .user-actions-follow-button.js-follow-btn button.follow-text')]
    i = 0
    if (!dugmici[i]) clearInterval(a)
  }
  dugmici[i].click()
  i++
}, Math.random() * 5000);


/* favorizuj sve redom */

dugmici = [...$('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite:visible')]
i = 0
a = setInterval(function () {
  if (!dugmici[i]) {
    window.scrollTo(0,document.body.scrollHeight);
    dugmici = [...$('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite:visible')]
    i = 0
  }
  dugmici[i].click()
  i++
}, Math.random() * 5000)


// prati samo relevantne
setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);

  $(".ProfileCard-userFields").each( function() {
    if($(this).find('.ProfileCard-bio').text().match(new RegExp("entrepreneur|founder|tech|growthhacking|hacking|official|consultant|analytics|ecom|startup|ceo|ux|seo|ecommerce|growth"), "g") !== null )
    {
      $(this).parent().find('.not-following .user-actions-follow-button.js-follow-btn').click();
    }
  });
}, Math.random() * 5000);
