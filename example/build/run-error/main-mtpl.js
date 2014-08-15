KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0, filepath = "example/src/run-error/main.mtpl.html";
    try {
        p += "<h1>I‘m a list</h1>";
        line = 2;
        p += "<p>";
        p += data.name;
        p += "</p>";
        p += "<p>children is not defined, will prompt error in console when runing</p>";
        line = 4;
        p += "<p>";
        p += data.children.name;
        p += "</p>";
        p += "</ul>";
    } catch (e) {
        if (window.console) {
            console.error("Source mtpl filepath: '" + filepath + "'");
            console.error("Line Number: " + line);
            console.error(e.toString());
        }
    }
    return p;
}});