define('app',['require','exports','module'],function (require, exports, module) {"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var App = (function () {
    function App() {
        this.answered = false;
        this.error = false;
        this.videoNum = 0;
        this.errorFade = false;
    }
    App.prototype.attached = function () {
        this.errorVideo1 = document.getElementById("errorVideo1");
        this.errorVideo2 = document.getElementById("errorVideo2");
        this.errorVideo3 = document.getElementById("errorVideo3");
        this.errorVideo4 = document.getElementById("errorVideo4");
        this.errorVideo5 = document.getElementById("errorVideo5");
        this.errorVideo6 = document.getElementById("errorVideo6");
        this.successVideo = document.getElementById("successVideo");
    };
    App.prototype.yes = function () {
        this.answered = true;
        this.successVideo.play();
    };
    App.prototype.no = function () {
        var _this = this;
        this.error = true;
        this.errorFade = true;
        ++this.videoNum;
        if (this.videoNum > 6) {
            this.videoNum = 1;
        }
        var length = 0;
        switch (this.videoNum) {
            case 1:
                this.errorVideo1.play();
                length = 1;
                break;
            case 2:
                this.errorVideo2.play();
                length = 1;
                break;
            case 3:
                this.errorVideo3.play();
                length = 1;
                break;
            case 4:
                this.errorVideo4.play();
                length = 3;
                break;
            case 5:
                this.errorVideo5.play();
                length = 3;
                break;
            case 6:
                this.errorVideo6.play();
                length = 4;
                break;
            default:
                break;
        }
        setTimeout(function () {
            _this.errorFade = false;
        }, length * 1000);
    };
    App.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return App;
}());
exports.App = App;

});
;
define('text!app.css',[],function(){return "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;font-family:inherit;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}html{font-size:62.5%}body,button,input,textarea{color:#fa9a9c;font-family:Titan One,sans-serif;font-size:1.4rem;font:normal 400 1.4rem Titan One,sans-serif;font-style:normal;font-weight:400}.main-container{background-color:#fde8e7;background:linear-gradient(0deg,#fde8e7,#d6797a);display:grid;grid-template-rows:100vh;position:relative}.main-container .error-container{align-items:center;align-self:center;display:flex;justify-content:center;opacity:0;position:absolute;transition:opacity .7s;width:100%;z-index:0}.main-container .error-container.show-error{opacity:1;z-index:10}.main-container .error-container video{max-width:100%}.main-container .success-container{align-items:center;align-self:center;display:flex;justify-content:center;opacity:1;position:absolute;width:100%;z-index:100}.main-container .success-container img{height:100vh;position:absolute;z-index:101}.main-container .success-container video{max-width:100%}.main-container .question-container{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;position:relative;z-index:1}.main-container .question-container .heading{font-size:4rem;margin-bottom:2rem;text-align:center;-webkit-text-stroke:.2rem #faf6f3;text-shadow:0 .4rem #d6797a}.main-container .question-container .buttons{display:flex;gap:2rem}.main-container .question-container .buttons button{background-color:#fa9a9c;border:.5rem solid #faf6f3;border-radius:100%;box-shadow:0 .6rem #d6797a;color:#faf6f3;cursor:pointer;font-size:2.4rem;height:8rem;position:relative;top:0;transition:all .2s;width:8rem}.main-container .question-container .buttons button:hover{box-shadow:0 .3rem #d6797a;top:.2rem}.main-container .question-container .buttons button:active{box-shadow:0 0 #d6797a;top:.2rem}";});;
define('text!app.html',[],function(){return "<template>\n\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n\t<link href=\"https://fonts.googleapis.com/css2?family=Titan+One&display=swap\" rel=\"stylesheet\">\n\t<link href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\" rel=\"stylesheet\" />\n\n\t<require from=\"./app.css\"></require>\n\n\t<div class=\"main-container\">\n\t\t<div class=\"error-container ${errorFade ? 'show-error' : ''}\">\n\t\t\t<video show.bind=\"videoNum == 1\" id=\"errorVideo1\">\n\t\t\t\t<source src=\"videos/side-eye.mp4\" type=\"video/mp4\">\n\t\t\t</video>\n\t\t\t<video show.bind=\"videoNum == 2\" id=\"errorVideo2\">\n\t\t\t\t<source src=\"videos/huh.mp4\" type=\"video/mp4\">\n\t\t\t</video>\n\t\t\t<video show.bind=\"videoNum == 3\" id=\"errorVideo3\">\n\t\t\t\t<source src=\"videos/sad-cat.mp4\" type=\"video/mp4\">\n\t\t\t</video>\n\t\t\t<video show.bind=\"videoNum == 4\" id=\"errorVideo4\">\n\t\t\t\t<source src=\"videos/banana-cat.mp4\" type=\"video/mp4\">\n\t\t\t</video>\n\t\t\t<video show.bind=\"videoNum == 5\" id=\"errorVideo5\">\n\t\t\t\t<source src=\"videos/mreow.mp4\" type=\"video/mp4\">\n\t\t\t</video>\n\t\t\t<video show.bind=\"videoNum == 6\" id=\"errorVideo6\">\n\t\t\t\t<source src=\"videos/black-cat.mp4\" type=\"video/mp4\">\n\t\t\t</video>\n\t\t</div>\n\t\t<div if.bind=\"!answered\" class=\"question-container\">\n\t\t\t<!-- <img src=\"images/cute.jpg\" /> -->\n\t\t\t<div class=\"heading\">\n\t\t\t\tWill you be my valentine?\n\t\t\t</div>\n\t\t\t<div class=\"buttons\">\n\t\t\t\t<button click.delegate=\"no()\">\n\t\t\t\t\tNo\n\t\t\t\t</button>\n\t\t\t\t<button click.delegate=\"yes()\">\n\t\t\t\t\tYes\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div show.bind=\"answered\" class=\"success-container\">\n\t\t\t<img src=\"images/hearts.gif\" />\n\t\t\t<video id=\"successVideo\" loop>\n\t\t\t\t<source src=\"videos/happy.mp4\" type=\"video/mp4\">\n\t\t\t</video>\n\t\t</div>\n\t</div>\n</template>";});;
define('environment',['require','exports','module'],function (require, exports, module) {"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    debug: true,
    testing: true
};

});
;
define('main',['require','exports','module','tslib','./environment'],function (require, exports, module) {"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
var tslib_1 = require("tslib");
var environment_1 = tslib_1.__importDefault(require("./environment"));
function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources');
    aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
    if (environment_1.default.testing) {
        aurelia.use.plugin('aurelia-testing');
    }
    aurelia.start().then(function () { return aurelia.setRoot(); });
}
exports.configure = configure;

});
;
define('text!reset.css',[],function(){return "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;font-family:inherit;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}";});;
define('resources/index',['require','exports','module'],function (require, exports, module) {"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
function configure(config) {
}
exports.configure = configure;

});
;
define('resources',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map