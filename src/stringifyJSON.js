// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    var outString = '[';
    for (var i = 0; i < obj.length; i++) {
      outString += stringifyJSON(obj[i]);
      outString += ',';
    }
    outString = outString.substring(0, outString.length - 1);
    outString += ']';
    return outString;
  } else if (typeof(obj) === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    var outString = '{';
    for (var key in obj) {
      if (stringifyJSON(obj[key]) === undefined) {
        continue;
      }
      outString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      outString += ',';
    }
    if (outString[outString.length - 1] === ',') {
      outString = outString.substring(0, outString.length - 1);
    }
    outString += '}';
    return outString;
  } else if (typeof(obj) === 'function' || obj === undefined) {
    return undefined;
  } else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else {
    return String(obj);
  }
};
