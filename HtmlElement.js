var HtmlElement = function (tag) {
    this.element = document.createElement(tag);
    return this;
};

HtmlElement.prototype.id = function (value) {
    this.element.id = value;
    return this;
};

HtmlElement.prototype.class = function (value) {
    this.element.className = value;
    return this;
};

HtmlElement.prototype.tabIndex = function (value) {
    this.element.tabIndex = value;
    return this;
};

HtmlElement.prototype.href = function (uri) {
    this.element.href = uri;
    return this;
};

HtmlElement.prototype.addChild = function (blob) {
    this.element.appendChild(blob);
    return this;
};

HtmlElement.prototype.text = function (text) {
    this.element.appendChild(document.createTextNode(text));
    return this;
};

HtmlElement.prototype.name = function (value) {
    this.element.name = value;
    return this;
}

HtmlElement.prototype.value = function (value) {
    this.element.value = value;
    return this;
}

HtmlElement.prototype.type = function (value) {
    this.element.type = value;
    return this;
}

HtmlElement.prototype.align = function (value) {
    this.element.align = value;
    return this;
}

HtmlElement.prototype.data = function (value) {
    this.element.data = value;
    return this;
}

HtmlElement.prototype.width = function (value) {
    this.element.width = value;
    return this;
}

HtmlElement.prototype.height = function (value) {
    this.element.height = value;
    return this;
}

HtmlElement.prototype.zIndex = function (value) {
    this.element.zIndex = value;
    return this;
}

HtmlElement.prototype.setAttribute = function(attribute, value) {
    this.element.setAttribute(attribute, value);
    return this;
}

HtmlElement.prototype.build = function () {
    return this.element;
};