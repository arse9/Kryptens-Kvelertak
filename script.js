document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    // Disable text selection for the entire page
    document.addEventListener('selectstart', function(e) {
      e.preventDefault();
    });
    
    // Disable right-click on the entire document
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  });
    
    // Redirect to '404.html' when developer tools are opened
    function checkDevTools() {
      if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
       window.location.href = '404.html';
      }
    }
  
    // Check for developer tools periodically
    setInterval(checkDevTools, 1000);