(function() {
  var strlen = prompt("Enter length of string", "10");
  if (strlen !== null) {
    var len = parseInt(strlen);
    if (isNaN(len)) len = 10;
    var insert = randomStr(len);
    visitNode(document.body, 0);
  }

  function visitNode(node, level) {
    if (
      node.nodeName === "#text" &&
      !(node.nodeValue !== "" && node.nodeValue.charAt(0) === "\n")
    ) {
      node.nodeValue = insert;
    } else if (node.nodeName === "INPUT" || node.nodeName === "SELECT") {
      node.value = insert;
    }
    node.childNodes.forEach(child => {
      if (child.nodeName !== "SCRIPT") visitNode(child, level + 1);
    });
  }

  function randomStr(len) {
    return new Array(len)
      .fill(0)
      .map(function() {
        return Math.random().toString(36).substr(2, 1);
      })
      .join("");
  }
})();
