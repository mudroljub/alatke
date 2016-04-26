export function isValidEmail(email) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

export function loadData(url, calback) {
  let http = new XMLHttpRequest();
  http.open('GET', url, true);
  http.addEventListener('load', () => {
    calback(http);
  });
  http.send(null);
}
