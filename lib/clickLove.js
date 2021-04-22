!(function (e, t, a) {
    let codeorangeStr = [
        '富强', '民主', '文明', '和谐',
        '自由', '平等', '公正', '法治',
        '爱国', '敬业', '诚信', '友善'
    ];
    let count = 0;
    function n() {
        // c(
        //     `.heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}
        // .heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}
        // .heart:after{top: -5px;}
        // .heart:before{left: -5px;}`
        // );
        c(
            `
            .heart{
                font-size: 12px;
                width: 50px;
                height: 30px;
                position: fixed;
                color: #000;
            }
            `
        );
        o();
        r();
    }

    function r() {
        for (var e = 0; e < d.length; e++)
            d[e].alpha <= 0 ?
                (t.body.removeChild(d[e].el), d.splice(e, 1)) :
                (d[e].y--,
                    (d[e].scale += 0.004),
                    (d[e].alpha -= 0.013),
                    (d[e].el.style.cssText =
                        "left:" +
                        d[e].x +
                        "px;top:" +
                        d[e].y +
                        "px;opacity:" +
                        d[e].alpha +
                        ";transform:scale(" +
                        d[e].scale +
                        "," +
                        d[e].scale +
                        ");color:" +  // 字体是color，div是background
                        d[e].color +
                        ";z-index:99999;" +
                        "-webkit-user-select:none;" +
                        "-moz-user-select:none;" +
                        "-ms-user-select:none;" +
                        "user-select:none;"
                    ));
        requestAnimationFrame(r);
    }

    function o() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function (e) {
            t && t(), i(e);
        };
    }

    function i(e) {
        if (count == codeorangeStr.length) count = 0;
        var a = t.createElement("div");
        a.innerHTML = codeorangeStr[count++];
        (a.className = "heart"),
            d.push({
                el: a,
                x: e.clientX - 5,
                y: e.clientY - 5,
                scale: 1,
                alpha: 1,
                color: s()
            }),
            t.body.appendChild(a);
    }

    function c(e) {

        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e));
        } catch (t) {
            a.styleSheet.cssText = e;
        }
        t.getElementsByTagName("head")[0].appendChild(a);
    }

    function s() {
        return (
            "rgb(" +
            ~~(255 * Math.random()) +
            "," +
            ~~(255 * Math.random()) +
            "," +
            ~~(255 * Math.random()) +
            ")"
        );
    }
    var d = [];
    (e.requestAnimationFrame = (function () {
        return (
            e.requestAnimationFrame ||
            e.webkitRequestAnimationFrame ||
            e.mozRequestAnimationFrame ||
            e.oRequestAnimationFrame ||
            e.msRequestAnimationFrame ||
            function (e) {
                setTimeout(e, 1e3 / 60);
            }
        );
    })()),
        n();
})(window, document);
