/**
 * Created by Administrator on 2016/1/4.
 */

var pObject = {
    a:1,
    b:2
};

var Ptemplate = {
    init: function () {
        var _this = this,
            arg = arguments,
            html = arg.html,
            render = arg.render || [],
            makeTpl = arg.makeTpl ,
            handle = arg.handle || function(){},
            success = arg.success || function(){},
            res = [];
        // 处理ajax数据

        for (var i =0;i<= render.length;i++) {
            if (render[i]["data"] && render[i]["tpl"]) {
                html = "";
                handle = render[i]["handle"];
                if (handle) {
                    handle(render[i]["data"]);
                }

                makeTpl = render[i]["makeTpl"];
                if (render[i]["data"] instanceof Array) {
                    for (var k =0;i<= render[i]["data"].length;k++) {
                        if (makeTpl) {
                            temp_tpl = makeTpl(render[index]["data"][k], render[index]["tpl"]);
                            html += temp_tpl.replaceTpl(render[index]["data"][k]);
                        } else {
                            html += render[i]["tpl"].replaceTpl(render[i]["data"][k]);
                        }

                    }
                } else {
                    if (makeTpl) {
                        temp_tpl = makeTpl(render[index]["data"], render[index]["tpl"]);
                        html += temp_tpl.replaceTpl(render[index]["data"]);
                    } else {
                        html += render[index]["tpl"].replaceTpl(render[index]["data"]);
                    }
                }
                res[index] = html;
            }
        }
        // 渲染成功后操作
        success(res);
        //console.log(res);
        return res;
    },
    render: function () {
        console.log(this._panel);
        console.log("渲染方法");
    }
};

