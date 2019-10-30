//GTW Logging

define(function (require, exports, module) {
    var maxEntries = 1000;

    var global = this;

    var logEntries = [];
    
    var jsTrace = console.trace;
    console.trace = function (msg) {
        global.log("console", msg, -1);
    };

    var jsDebug = console.debug;
    console.debug = function (msg) {
        global.log("console", msg, -2);
    };

    var jsInfo = console.log;
    console.log = function (msg) {
        global.log("console", msg, 0);
    };

    var jsWarn = console.warn;
    console.warn = function (msg) {
        global.log("console", msg, 1);
    };

    var jsError = console.error;
    console.error = function (msg) {
        global.log("console", msg, 2);
    };

    exports.printObject = true;

    exports.toConsole = function (msg, level) {
        if (level === -2) {
            jsTrace(msg);
        } else if (level === -1) {
            jsDebug(msg);
        } else if (level === 0) {
            jsInfo(msg);
        } else if (level === 1) {
            jsWarn(msg);
        } else if (level === 2) {
            jsError(msg);
        }
    };

    exports.toLogger = function (tag, msg, time, level) {
        if (logEntries.length >= maxEntries) {
            logEntries.shift();
        }
        logEntries.push({
            time: time,
            msg: msg,
            level: level
        });

        exports.showToast(logEntries.length, tag, msg, time, level);
    };

    var lastMsg = 0;
    var lastTag = 0;
    var lastLevel = 0;
    var lastTime = 0;

    exports.showToast = function (id, tag, msg, time, level) {
        if (level <= 0) {
            return;
        }

        if (lastMsg === msg && lastTag === tag && lastLevel === level && time - lastTime < 7500) {
            return;
        }

        lastTime = time;
        lastMsg = msg;
        lastTag = tag;
        lastLevel = level;

        var node = $("#gtw-toast-stack");
        var levelName = "Unknown";
        var className = "";

        if (level == -2) {
            levelName = "Trace";
        } else if (level == -1) {
            levelName = "Debug";
        } else if (level == 0) {
            levelName = "Info";
            className = " text-primary";
        } else if (level == 1) {
            levelName = "Warning";
            className = " text-warning";
        } else if (level == 2) {
            levelName = "Error";
            className = " text-danger";
        }

        var html =
            "<div class=\"toast\" role=\"alert\" log-entry-id=\"" + id + "\">" +
            "    <div class=\"toast-header\">" +
            "        <strong class=\"mr-auto" + className + "\">" + levelName + " (" + tag + ")</strong>" +
            "        <small class=\"text-muted\">" + new Date(time).toLocaleString() + "</small>" +
            "        <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>" +
            "    </div>" +
            "    <div class=\"toast-body\">" + msg +
            "    </div>" +
            "</div>"
            ;

        if (node.children().length >= 3) {
            node.children().each(function (i) {
                if (i >= 2) {
                    $(this).toast('hide');
                }
            });
        }

        node.prepend(html);
        
        var key = ".toast[log-entry-id='" + id + "']";
        $(key).on('hidden.bs.toast', function () {
            $(this).remove();
        });
        $(key).toast({
            animation: true,
            autohide: true,
            delay: 5000
        });
        $(key).toast('show');
    }

    exports.getEntries = function (){
        return logEntries;
    }

    exports.log = function (tag = "unknown", msg, level = 0) {
        var time = Date.now();

        if (typeof msg === "object") {
            if (exports.printObject) {
                exports.toConsole("[" + new Date(time).toLocaleString() + "] [" + tag + "]", level);
                exports.toConsole(msg, level);
            } else {
                var pmsg = JSON.stringify(msg);
                exports.toConsole("[" + new Date(time).toLocaleString() + "] [" + tag + "] " + pmsg, level);
            }
        } else {
            exports.toConsole("[" + new Date(time).toLocaleString() + "] [" + tag + "] " + msg, level);
        }

        exports.toLogger(tag, msg, time, level);
    };

    exports.trace = function (tag, msg) {
        exports.log(tag, msg, -2);
    };

    exports.debug = function (tag, msg) {
        exports.log(tag, msg, -1);
    };

    exports.info = function (tag, msg) {
        exports.log(tag, msg, 0);
    };

    exports.warn = function (tag, msg) {
        exports.log(tag, msg, 1);
    };

    exports.error = function (tag, msg) {
        exports.log(tag, msg, 2);
    };
});