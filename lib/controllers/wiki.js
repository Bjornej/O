'use strict';

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}


function getPagePath(partial){
    var path=partial;
    if (path.lastIndexOf("/") === (path.length - 1)) {
        path += "index";
    }

    if (endsWith(path, ".html")) {
        path = path.replace(".html", ".md");
    }else{
        path+=".md"
    }

    return __dirname + "/Pages" + path;
}

exports.page = function (req, res) {
    var path;
    path = req.query.path;
    var fs = require('fs');
    var filename = getPagePath(path);
    fs.exists(filename, function (exists) {
        if (!exists) {
            res.json({ existing: false, text: "" });
        } else {
            fs.readFile(filename, 'utf8', function (err, text) {
                res.json({ existing: true, text: "" });
            })
        }
    });
};

exports.create = function (req, res) {
    var fs = require('fs');
    var filename = getPagePath(req.body.path);

    fs.exists(filename, function (exists) {
        if (!exists) {
            fs.open(filename, "a", function (error) {
                if (error) {
                    return res.json({success: true});
                } else {
                    return res.json({success: false});
                }
            });
        }
    });

};

exports.delete = function(req,res){
    var filename = getPagePath(req.query.path);

    require('fs').unlink(filename,function(error){
        return res.json({success:error});
    });
}

exports.update = function(req,res){
    var filename = getPagePath(req.query.path);
    var data = req.body.text;
    require('fs').writeFile(filename,data,function(error){
        return res.json({success:error});
    });
}