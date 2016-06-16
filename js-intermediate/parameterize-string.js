string_parameterize = function (s) {
     return s.trim().replace(/[^a-zA-Z0-9-\s]/g, '').replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
}
console.log(string_parameterize("Robin Singh from USA"));