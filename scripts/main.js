var readmoreBtn = document.querySelectorAll('.ranking-table .partner-row .information .link')

readmoreBtn.forEach(function(el, i) {
  console.log(true);

  var parentRow = el.parentElement.parentElement;
  var height = parentRow.scrollHeight;

  var information = parentRow.querySelector('.information')

  el.addEventListener('click', function(){


    var content = parentRow.querySelector('.info');

    parentRow.classList.toggle('--expand')

    if (content.style.maxHeight) {
      content.style.maxHeight = null
      parentRow.style.height = height + "px"
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      parentRow.style.height = height + content.scrollHeight + "px"
    }

  })


})
