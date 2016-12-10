// JavaScript Document

// 前台调用
var $ = function(args) {
    return new Base(args);
};

// 基础库
function Base(args) {
    // 创建一个数组，来保存获取的节点和节点数组
    this.elements = [];
    
    if (typeof args == 'string') {
        // CSS选择器模拟
        if (args.indexOf(' ') != -1) {
            // 把节点拆开分别保存到数组里
            var elements = args.split(' ');
            // 存放临时节点对象的数组，解决覆盖问题
            var childElements = [];
            // 用来存放父节点
            var node = [];
            
            for (var i = 0; i < elements.length; i++) {
                if (node.length == 0) {
                    // 如果默认没有父节点，放入document
                    node.push(document);
                }
                
                switch (elements[i].charAt(0)) {
                    case '#' :
                        // 清理临时节点，使父节点失效，子节点有效
                        childElements = [];
                        childElements.push(this.getId(elements[i].substring(1)));
                        // 保存到父节点，childElements在轮询中被清理
                        node = childElements;
                        break;
                    case '.' :
                        childElements = [];
                        for (var j = 0; j < node.length; j++) {
                            var temps = this.getClass(elements[i].substring(1), node[j]);
                            for (var k = 0; k < temps.length; k++) {
                                childElements.push(temps[k]);
                            }
                        }
                        node = childElements;
                        break;
                    default :
                        childElements = [];
                        for (var j = 0; j < node.length; j++) {
                            var temps = this.getTagName(elements[i], node[j]);
                            for (var k = 0; k < temps.length; k++) {
                                childElements.push(temps[k]);
                            }
                        }
                        node = childElements;
                }
            } /* End for (var i = 0; i < elements.length; i++) */
            this.elements = childElements;
        } /* End if (args.indexOf(' ') != -1) */
        else {
            // find模拟
            switch (args.charAt(0)) {
                case '#' :
                    this.elements.push(this.getId(args.substring(1)));
                    break;
                case '.' :
                    this.elements = this.getClass(args.substring(1));
                    break;
                default :
                    this.elements = this.getTagName(args);
            }
        } /* End if (args.indexOf(' ') != -1) */
    } /* End if (typeof args == 'string') */
    else if (typeof args == 'object') {
        if (args != undefined) {
            this.elements[0] = args;
        }
    }
    else if (typeof args == 'function') {
        this.ready(args);
    }
}

// addDomLoaded 
Base.prototype.ready = function (fn) {
    addDomLoaded(fn);
};


// 获取ID节点
Base.prototype.getId = function (id) {
    return document.getElementById(id);
};

// 获取元素节点数组
Base.prototype.getTagName = function (tag, parentNode) {
    var node = null;
    var temps = [];
    
    if (parentNode != undefined) {
        node = parentNode;
    } else {
        node = document;
    }
    
    var tags = node.getElementsByTagName(tag);
    
    for (var i = 0; i < tags.length; i++) {
        temps.push(tags[i]);
    }
    return temps;
};

// 获取class节点数组
Base.prototype.getClass = function (className, parentNode) {
    var node = null;
    var temps = [];
    
    if (parentNode != undefined) {
        node = parentNode;
    } else {
        node = document;
    }
    
    var all = node.getElementsByTagName('*');
    
    for (var i = 0; i < all.length; i++) {
        if ((new RegExp('(\\s|^)' + className + '(\\s|$)')).test(all[i].className)) {
            temps.push(all[i]);
        }
    }
    return temps;
};

// 设置CSS选择器子节点
Base.prototype.find = function (str) {
    var childElements = [];
    for (var i = 0; i < this.elements.length; i++) {
        switch (str.charAt(0)) {
            case '#' :
                childElements.push(this.getId(str.substring(1)));
                break;
            case '.' :
                var temps = this.getClass(str.substring(1), this.elements[i]);
                for (var j = 0; j < temps.length; j++) {
                    childElements.push(temps[j]);
                }
                break;
            default :
                var temps = this.getTagName(str, this.elements[i]);
                for (var j = 0; j < temps.length; j++) {
                    childElements.push(temps[j]);
                }
        }
    }
    this.elements = childElements;
    return this;
};

// 获取第一个指定类型父节点
Base.prototype.parent = function (str) {
    if (arguments.length == 0) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = this.elements[i].parentNode;
            if (this.elements[i] == null) {
                throw new Error('找不到父元素节点！');
            }
            if (this.elements[i].nodeType == 3) {
                this.parent();
            }
        }
    } else if (arguments.length == 1) {
        var parentNode = [];
        for (var i = 0; i < this.elements.length; i++) {
            var temp = str.substring(1);
            switch (str.charAt(0)) {
                case '#' :
                    parentNode.push(this.getId(temp));
                    break;
                case '.' :
                    var temps = this.getClass(str.substring(1), this.elements[i]);
                    for (var j = 0; j < temps.length; j++) {
                        parentNode.push(temps[j]);
                    }
                    break;
                default :
                    var temps = this.getTagName(str, this.elements[i]);
                    for (var j = 0; j < temps.length; j++) {
                        parentNode.push(temps[j]);
                    }
            }
        }
        this.elements = parentNode;
    }
    return this;
};

// 通过name属性获取表单from
Base.prototype.name = function (str) {
    var childElements = [];
    for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i]['name'] == str) {
            childElements.push(this.elements[i]);
        }
    }
    this.elements = childElements;
    return this;
};

// 获取某一个节点，并返回这个节点
Base.prototype.ge = function (num) {
    return this.elements[num];
};

// 获取某一个节点，并返回这个节点对象，注意与ge()区分
Base.prototype.obj = function (num) {
    var childElements = [];
    childElements.push(this.elements[num]);
    this.elements = childElements;
    return this;
};

// 获取首个节点，并返回这个节点对象
Base.prototype.first = function () {
    return this.elements[0];
};

// 获取末个节点，并返回这个节点对象
Base.prototype.last = function () {
    return this.elements[this.elements.length - 1];
};

// 获取某组节点的数量
Base.prototype.length = function () {
    return this.elements.length;
};

// 获取某一个节点的属性
Base.prototype.attr = function (attr, value) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 1) {
            return this.elements[i].getAttribute(attr);
        } else if (arguments.length == 2) {
            this.elements[i].setAttribute(attr, value);
        }
    }
    return this;
};

// 获取某一个节点在整个节点组中的索引
Base.prototype.index = function () {
    var children = this.elements[0].parentNode.children;
    for (var i = 0; i < children.length; i++) {
        if (this.elements[0] == children[i]) {
            return i;
        }
    }
};

// 设置某一个节点的透明度
Base.prototype.opacity = function (num) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.opacity = num / 100;
        this.elements[i].style.filter = 'alpha(opacity=' + num + ')';
    }
    return this;
};

// 获取某一个节点
Base.prototype.eq = function (num) {
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;
};

// 获取当前节点的下一个元素节点
Base.prototype.next = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i] = this.elements[i].nextSibling;
        if (this.elements[i] == null) {
            throw new Error('找不到下一个同级元素节点！');
        }
        if (this.elements[i].nodeType == 3) {
            this.next();
        }
    }
    return this;
};

// 获取当前节点的上一个元素节点
Base.prototype.prev = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i] = this.elements[i].previousSibling;
        if (this.elements[i] == null) {
            throw new Error('找不到上一个同级元素节点！');
        }
        if (this.elements[i].nodeType == 3) {
            this.prev();
        }
    }
    return this;
};

// 设置CSS
Base.prototype.css = function (attr, value) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 1) {
            return getStyle(this.elements[i], attr);
        }
        this.elements[i].style[attr] = value;
    }
    return this;
};

// 自定义设置css样式为none
Base.prototype.ncss = function (attr) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style[attr] = 'none';
    }
    return this;
};

// 添加class
Base.prototype.addClass = function (className) {
    for (var i = 0; i < this.elements.length; i++) {
        if (!hasClass(this.elements[i], className)) {
            this.elements[i].className += ' ' + className;
        }
    }
    return this;
};

// 移除class
Base.prototype.removeClass = function (className) {
    for (var i = 0; i < this.elements.length; i++) {
        if (hasClass(this.elements[i], className)) {
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
        }
    }
    return this;
};

// 添加link或style的css规则
Base.prototype.addRule = function (num, selectorText, cssText, position) {
    var sheet = document.styleSheet[num];
    insertRule(sheet, selectorText, cssText, position);
    return this;
};

// 移除link或style的css规则
Base.prototype.removeRule = function (num, index) {
    var sheet = document.styleSheets[num];
    deleteRule(sheet, index);
    return this;
};

// 设置表单字段元素
Base.prototype.form = function (name) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i] = this.elements[i][name];
    }
    return this;
};

// 设置表单字段内容获取
Base.prototype.value = function (str) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 0) {
            return this.elements[i].value;
        }
        this.elements[i].value = str;
    }
    return this;
};

// 设置innerHTML
Base.prototype.html = function (str) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments == 0) {
            return this.elements[i].innerHTML;
        }
        this.elements[i].innerHTML = str;
    }
    return this;
};

// 设置innerText
Base.prototype.text = function (str) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 0) {
            return getInnerText(this.elements[i]);
        }
        setInnerText(this.elements[i], str);
    }
    return this;
};

// 设置事件发生器
Base.prototype.bind = function (event, fn) {
    for (var i = 0; i < this.elements.length; i++) {
        addEvent(this.elements[i], event, fn);
    }
    return this;
};

// 设置鼠标移入移出的方法
Base.prototype.hover = function (over, out) {
    for (var i = 0; i < this.elements.length; i++) {
        addEvent(this.elements[i], 'mouseover', over);
        addEvent(this.elements[i], 'mouseout', out);
    }
    return this;
};

// 设置鼠标移动的方法
Base.prototype.move = function () {
    for (var i = 0; i < this.elements.length; i++) {
        addEvent(this.elements[i], 'mousemove', function (event) {
            var e = event || window.event;
            var scrollX = getScroll().left;
            var scrollY = getScroll().top;
            var x = e.pageX || e.clientX + scrollX;
            var y = e.pageY || e.clientY + scrollY;
            this.x = x;
            this.y = y;
            return this;
        });
    }
    return this;
};

// 设置点击切换的方法
Base.prototype.toggle = function () {
	for (var i = 0; i < this.elements.length; i ++) {
		(function (element, args) {
			var count = 0;
			addEvent(element, 'click', function () {
				args[count++ % args.length].call(this);
			});
		})(this.elements[i], arguments);
	}
	return this;
};

// 设置显示block
Base.prototype.show = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'block';
    }
    return this;
};

// 设置显示inline-block
Base.prototype.inshow = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'inline-block';
    }
    return this;
};

// 设置隐藏block
Base.prototype.hide = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'none';
    }
    return this;
};

// 设置物体居中
Base.prototype.center = function (width, height) {
    var top = (getInner().height - height) / 2 + getScroll().top;
    var left = (getInner().width - width) / 2 + getScroll().left;
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.top = top + 'px';
        this.elements[i].style.left = left + 'px';
    }
    return this;
};

// 锁屏功能
Base.prototype.lock = function () {
    for (var i = 0; i < this.elements.length; i++) {
        fixedScroll.top = getScroll().top;
        fixedScroll.left = getScroll().left;
        this.elements[i].style.width = getInner().width + getScroll().left + 'px';
        this.elements[i].style.height = getInner().height + getScroll().top + 'px';
        parseFloat(sys.firefox) < 4 ? document.body.style.overflow = 'hidden' : document.documentElement.style.overflow = 'hidden';
        addEvent(this.elements[i], 'mousedown', predef);
        addEvent(this.elements[i], 'mouseup', predef);
        addEvent(this.elements[i], 'selectstart', predef);
        addEvent(window, 'scroll', fixedScroll);
    }
    return this;
};

// 解锁功能
Base.prototype.unlock = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'none';
        parseFloat(sys.firefox) < 4 ? document.body.style.overflow = 'auto' : document.documentElement.style.overflow = 'auto';
        removeEvent(this.elements[i], 'mousedown', predef);
        removeEvent(this.elements[i], 'mouseup', predef);
        removeEvent(this.elements[i], 'selectstart', predef);
        removeEvent(window, 'scroll', fixedScroll);
    }
    return this;
};

// 触发点击事件
Base.prototype.click = function (fn) {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].onclick = fn;
	}
	return this;
};

// 触发浏览器窗口事件
Base.prototype.resize = function (fn) {
    for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        addEvent(window, 'resize', function () {
            fn();
            if (element.offsetLeft > getInner().width + getScroll().left - element.offsetWidth) {
                element.style.left = getInner().width + getScroll().left - element.offsetWidth + 'px';
            } else if (element.offsetLeft <= 0 + getScroll().left) {
                element.style.left = 0 + getScroll().left + 'px';
            }
            if (element.offsetTop > getInner().height + getScroll().top - element.offsetHeight) {
                element.style.top = getInner().height + getScroll().top - element.offsetHeight + 'px';
            } else if (element.offsetTop <= 0 + getScroll().top) {
                element.style.top = 0 + getScroll().top + 'px';
            }
        });
    }
    return this;
};

// 设置动画
Base.prototype.animate = function (obj) {
    for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        var attr = obj['attr'] == 'x' ? 'left' :
                   obj['attr'] == 'y' ? 'top' :
                   obj['attr'] == 'w' ? 'width' :
                   obj['attr'] == 'h' ? 'height' :
                   obj['attr'] == 'o' ? 'opacity' :
                   obj['attr'] != undefined ? obj['attr'] : 'left';
        var start = obj['start'] != undefined ? obj['start'] :
                    attr == 'opacity' ? parseFloat(getStyle(element, attr)) * 100 : parseInt(getStyle(element, attr)); // 如果obj['start']有值，则使用该值，如果没有设定该值，则使用当时的状态值，因为opacity的值在0-1之间，所以如果attr为opacity则要把状态值改为整数值
        var t = obj['t'] != undefined ? obj['t'] : 10;
        var step = obj['step'] != undefined ? obj['step'] : 20;
        var alter = obj['alter'];
        var target = obj['target'];
        var mul = obj['mul'];
        var speed = obj['speed'] != undefined ? obj['speed'] : 6;
        var type = obj['type'] == 0 ? 'constant' :
                   obj['type'] == 1 ? 'buffer' : 'buffer';
                   
        if (alter != undefined && target == undefined) {
            target = alter + start;
        } else if (alter == undefined && target == undefined && mul == undefined) {
            throw new Error('alter增量或target目标量必须传一个！');
        }
        if (start > target) {
            step = -step;
        }
        if (attr == 'opacity') {
            element.style.opacity = parseInt(start) / 100;
            element.style.filter = 'alpha(opacity=' + parseInt(start) + ')';
        }
        if (mul == undefined) {
            mul = {};
            mul[attr] = target;
        }
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            var flag = true;
            for (var i in mul) {
                attr = i == 'x' ? 'left' : 
                       i == 'y' ? 'top' :
                       i == 'w' ? 'width' :
                       i == 'h' ? 'height' :
                       i == 'o' ? 'opacity' : 'left';
                traget = mul[i];
                if (type == 'buffer') {
                    step = attr == 'opacity' ? (target - parseFloat(getStyle(element, attr)) * 100) / speed : (target - parseInt(getStyle(element, attr))) / speed;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                }
                if (attr == 'opacity') {
                    if (step == 0) {
                        setOpacity();
                    } else if (step > 0 && Math.abs(parseFloat(getStyle(element, attr)) * 100 - target) <= step) {
                        setOpacity();
                    } else if (step < 0 && (parseFloat(getStyle(element, attr)) * 100 - target) <= Math.abs(step)) {
                        setOpacity();
                    } else {
                        var temp = parseFloat(getStyle(element, attr)) * 100;
                        element.style.opacity = parseInt(temp + step) / 100;
                        element.style.filter = 'alpha(opacity=' + parseInt(temp + step) + ')';
                    }
                    if (parseInt(target) != parseInt(parseFloat(getStyle(element, attr)) * 100)) {
                        flag = false;
                    }
                } /* End if (attr == 'opacity')*/
                else {
                    if (step == 0) {
                        setTarget();
                    } else if (step > 0 && Math.abs(parseInt(getStyle(element, attr)) - target) <= step) {
                        setTarget();
                    } else if (step < 0 && (parseInt(getStyle(element, attr)) - target) <= Math.abs(step)) {
                        setTarget();
                    } else {
                        element.style[attr] = parseInt(getStyle(element, attr)) + step + 'px';
                    }
                    if (parseInt(target) != parseInt(getStyle(element, attr))) {
                        flag = false;
                    }
                }
            }
            if (flag) {
                clearInterval(element.timer);
                if (obj.fn != undefined) {
                    obj.fn();
                }
            }
        }, t);
        function setTarget() {
            element.style[attr] = target + 'px';
        }
        function setOpacity() {
            element.style.opacity = parseInt(target) / 100;
            element.style.filter = 'alpha(opacity=' + parseInt(terget) + ')';
        }
    }
    return this;
};

// 插件入口
Base.prototype.extend = function (name, fn) {
    Base.prototype[name] = fn;
};

