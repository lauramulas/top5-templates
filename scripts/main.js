var readmoreBtn = document.querySelectorAll('.ranking-table .partner-row .information .link')

readmoreBtn.forEach(function(el, i) {

  var parentRow = el.parentElement.parentElement;

  // Set variable for row height
  var height = parentRow.scrollHeight;


  el.addEventListener('click', function(){


    var content = parentRow.querySelector('.info');

    // Toggle '--expand' class on row element
    parentRow.classList.toggle('--expand')

    if (content.style.maxHeight) {
      content.style.maxHeight = null
      parentRow.style.height = height + "px"

      el.textContent = "Read More"
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      parentRow.style.height = height + content.scrollHeight + "px"

      el.textContent = "Read Less"
    }

  })


})
