
let header = document.getElementById('header-inner');

document.addEventListener('scroll', function() {
  
  // Get the scroll position
  let scrollPos = window.pageYOffset;
  
  if ( scrollPos > 100 ) {
    header.style.backgroundColor = "#2ca46d";  
  } else {
    header.style.backgroundColor = "#232a34";
  }
    
});


