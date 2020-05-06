const dashToCamelCase = string =>
  string.replace(/-([a-z])/g, matched => matched[1].toUpperCase());

export default dashToCamelCase;
