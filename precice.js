  const $ = s => document.querySelectorAll(s).length > 1 ? document.querySelectorAll(s) : document.querySelector(s)
  
  EventTarget.prototype.on = EventTarget.prototype.addEventListener
  
