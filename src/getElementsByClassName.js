// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var arr = [];

  var getElementsHelper = function(className, node) {
  
    if (node.classList.contains(className)) {
      arr.push(node);
    }

    var c = node.children;
    for (var i = 0; i < c.length; i++) {
      getElementsHelper(className, c[i]);
    }
  };

  getElementsHelper(className, document.body);

  return arr;

};


