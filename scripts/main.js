var readmoreBtn = document.querySelectorAll('.ranking-table .partner-row .information .link')

readmoreBtn.forEach(function(el, i) {

  var parentRow = el.parentElement.parentElement;

  // Set variable for row height
  var rowHeight = parentRow.scrollHeight;




  el.addEventListener('click', function(){


    var preX = parentRow.querySelector('.information .name').scrollHeight
    var preY = parentRow.querySelector('.information .membercount').scrollHeight
    var preZ = parentRow.querySelector('.information .tag').scrollHeight

    var content = parentRow.querySelector('.info');

    // console.log(height);
    // console.log(content.scrollHeight);

    // Toggle '--expand' class on row element
    parentRow.classList.toggle('--expand')

    // ============================================================
    // ============================================================

    var x = parentRow.querySelector('.information .name').scrollHeight
    var y = parentRow.querySelector('.information .membercount').scrollHeight
    var z = parentRow.querySelector('.information .tag').scrollHeight

    var height = (x - preX) + (y - preY) + (z - preZ);

    // var newX = rowHeight - height;

    // console.log("name = " + x)
    // console.log("membercount = " + y)
    // console.log("tag = " + z)

    console.log("info height = " + height);
    // console.log("row height = " + rowHeight);

    // ============================================================
    // ============================================================

    if (content.style.maxHeight) {
      content.style.maxHeight = null
      parentRow.style.height = rowHeight + "px"

      el.textContent = "Read More"
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      parentRow.style.height = rowHeight + height + content.scrollHeight + "px"

      el.textContent = "Read Less"
    }

  })


})
