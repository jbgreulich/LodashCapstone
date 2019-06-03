const _ = {
  chunk: (arr, size) => {
    let length = arr == null ? 0 : arr.length;
    let index = 0;
    let resIndex = 0;
    let result = [];

    while (index < length) {
      result[resIndex++] = arr.slice(index, index += size);
    }

    return result;
  },

  clamp: (num, lower, upper) => {
    if (num !== undefined) {
      if (lower !== undefined) {
        num = num >= lower ? num : lower;
      }
      if (upper !== undefined) {
        num = num <= upper ? num : upper;
      }
    }

    return num;
  },

  dropWhile: (arr, predicate) => {
    let length = arr == null ? 0 : arr.length;
    let index = -1;

    while ((index++ < length) && predicate(arr[index], index)) {}

    return index > arr[index] ? arr.slice(index, index += length) : [];
  },

  drop: (arr, num) => {
    return num ? arr.slice(num) : arr.slice(1);
  },

  findKey: (object, predicate) => {
    for (let key in object) {
      if (predicate(object[key])) {
        return key;
      }
    }
  },

  has: (object, path) => {
    return object[path] !== undefined;
  },

  inRange: (num, start, end) => {
    if (!end) {
      end = start;
      start = 0;
    } else {
      end = end;
    }

    return num >= Math.min(start, end) && num < Math.max(start, end);
  },

  invert: (object) => {
    let ent = Object.entries(object);
    let rev = {};

    ent.forEach((arr) => {
      rev[arr[1]] = arr[0];
    });

    return rev;
  },

  pad: (string, length, chars) => {
    chars = chars ? chars :  ' ';
    let mid = (length - string.length) / 2;

    return (!length || string.length >= length) ? string : (chars.repeat(Math.floor(mid)) + string + chars.repeat(Math.ceil(mid)));
  },

  words: (string, pattern) => {
    return string.split(pattern || ' ') || [];
    },

};

// Do not write or modify code below this line.
module.exports = _;
