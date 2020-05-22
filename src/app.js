const stringToSnakeCase = data => {
  return data
    .replace(/\.?[a-z]([A-Z])/g, (matches, str, offset) => {
      return matches[0] + "_" + str.toLowerCase();
    })
    .replace(/\_+/g, "_")
    .toLowerCase();
};

const stringToCamelCase = data => {
  return data.indexOf("_") > -1
    ? data.toLowerCase().replace(/\.?(\_\w)/g, matches => {
        return matches[1].toUpperCase();
      })
    : /^[A-Z0-9]+$/.test(data)
    ? data.toLowerCase()
    : data
        .split("")
        .reduce((acc, cur) => (!acc ? cur.toLowerCase() : acc + cur), "");
};

module.exports = {
  jsConvert: {
    stringToSnakeCase,
    stringToCamelCase
  }
};
