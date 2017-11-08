/* napusti one koji me ne prate */

let profili = [...$('.ProfileCard-content')]
let i = 0
setInterval(() => {
  let profil = profili[i]
  if (!profil) {
    window.scrollTo(0,document.body.scrollHeight)
    profili = [...$('.ProfileCard-content')]
    i = 0
  }
  if (!profil.innerText.includes('Follows you'))
    profil.querySelector('button.following-text').click()
  i++
}, Math.random() * 5000)


/* zaprati one koje ne pratim */

let dugmici = [...$('.not-following .user-actions-follow-button.js-follow-btn button.follow-text')]
let i = 0
setInterval(function () {
  let dugme = dugmici[i]
  if (!dugme) {
    window.scrollTo(0,document.body.scrollHeight)
    dugmici = [...$('.not-following .user-actions-follow-button.js-follow-btn button.follow-text')]
    i = 0
  }
  dugme.click()
  i++
}, Math.random() * 5000);


/* favorizuj sve redom */

let dugmici = [...$('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite:visible')]
let i = 0
setInterval(function () {
  let dugme = dugmici[i]
  if (!dugme) {
    window.scrollTo(0,document.body.scrollHeight);
    dugmici = [...$('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite:visible')]
    i = 0
  }
  dugme.click()
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
