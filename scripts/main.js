var readmoreBtn = document.querySelectorAll('.ranking-table .partner-row .information .link')

readmoreBtn.forEach(function(el, i) {

  var parentRow = el.parentElement.parentElement;

  // Set variable for row height
  var rowHeight = parentRow.scrollHeight;




  el.addEventListener('click', function(){

    // Calculate height of Partner information elements before expanding
    var preX = parentRow.querySelector('.information .name').offsetHeight
    var preY = parentRow.querySelector('.information .membercount').offsetHeight
    var preZ = parentRow.querySelector('.information .tag').offsetHeight

    // Height of bullet point list
    var content = parentRow.querySelector('.info');

    // Toggle '--expand' class on row element
    parentRow.classList.toggle('--expand')

    // Calculate height of Partner information elements after expanding (there may be discrepancies with line breaking)
    var x = parentRow.querySelector('.information .name').scrollHeight
    var y = parentRow.querySelector('.information .membercount').scrollHeight
    var z = parentRow.querySelector('.information .tag').scrollHeight

    // Subtract pre height, and current height elements from each other to get true height value
    var height = (x - preX) + (y - preY) + (z - preZ);


    // var newX = rowHeight - height;

    console.log("name = " + x)
    console.log("pre name = " + preX)
    console.log("membercount = " + y)
    console.log("pre membercount = " + preY)
    console.log("pre tag = " + preZ)
    console.log("tag = " + z)

    console.log("information height = " + height);
    console.log("row height = " + rowHeight);
    console.log("content height = " + content.scrollHeight);


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
