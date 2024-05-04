window.addEventListener("load", function () {
  applyLayout("twoColumns");
});

document.getElementById("selectLayout").addEventListener("click", function () {
  document.getElementById("layoutOverlay").style.display = "flex"; // Show the overlay
});

function closeOverlay() {
  document.getElementById("layoutOverlay").style.display = "none"; // Hide the overlay
}

function applyLayout(layoutType) {
  var mainContent = document.getElementById("mainContent");
  // Clear existing content
  mainContent.innerHTML = "";

  var row = document.createElement("div");
  row.className = "row g-2"; // Bootstrap row

  // Create layouts based on selection
  switch (layoutType) {
    case "oneColumn":
      row.appendChild(createBootstrapColumn(12));
      break;
    case "twoColumns":
      row.appendChild(createBootstrapColumn(6));
      row.appendChild(createBootstrapColumn(6));
      break;
    case "threeColumns":
      row.appendChild(createBootstrapColumn(4));
      row.appendChild(createBootstrapColumn(4));
      row.appendChild(createBootstrapColumn(4));
      break;
    case "twoPlusOne":
      row.appendChild(createBootstrapColumn(8));
      row.appendChild(createBootstrapColumn(4));
      break;
    case "onePlusTwo":
      row.appendChild(createBootstrapColumn(4));
      row.appendChild(createBootstrapColumn(8));
      break;
    case "twoPlusTwo":
      // Assuming you want two rows of two columns each
      row.appendChild(createBootstrapColumn(6));
      row.appendChild(createBootstrapColumn(6));
      var newRow = document.createElement("div");
      newRow.className = "row gx-2 mb-2"; // Add a top margin for spacing between rows
      newRow.appendChild(createBootstrapColumn(6));
      newRow.appendChild(createBootstrapColumn(6));
      mainContent.appendChild(newRow);
      break;
  }

  mainContent.appendChild(row);
  closeOverlay();
}

function createBootstrapColumn(size) {
  let col = document.createElement("div");
  col.className = "col-" + size; // Bootstrap column
  let content = document.createElement("div");
  content.style.height = "100px"; // Set a fixed height for demonstration
  content.style.fontSize = "1.5rem"; // Set a larger font size for demonstration
  content.style.color = "white"; // Set a color for demonstration
  content.style.backgroundColor = "black";
  content.style.borderRadius = "10px";
  content.innerHTML = "Column " + size;
  content.style.padding = "1rem"; // Use Bootstrap padding classes
  content.style.position = "relative";

  col.appendChild(content); // Use Bootstrap padding and background classes

  // Create popover element
  var popover = document.createElement("div");
  popover.className = "popover fade show bs-popover-top";
  popover.innerHTML = `
    <div class="popover-body">${getPopoverContent()}</div>
  `;
  popover.style.position = "absolute";
  popover.style.display = "none"; // Initially hidden
  popover.style.zIndex = "1000"; // Ensure it's above other elements

  // Append popover to column
  content.appendChild(popover);

  // Event listeners for showing/hiding the popover
  col.addEventListener("mouseenter", function () {
    popover.style.display = "block";
    col.style.opacity = "0.75";
  });
  col.addEventListener("mouseleave", function () {
    popover.style.display = "none";
    col.style.opacity = "1";
  });

  return col;
}

function getPopoverContent() {
  return `
      <button class="btn btn-default btn-circle">
        <i class="fa-solid fa-font"></i>
      </button>
      <button class="btn btn-default btn-circle">
        <i class="fa-solid fa-text-height"></i>
      </button>
      <button class="btn btn-default btn-circle">
        <i class="fa-solid fa-palette"></i>
      </button>
    `;
}
