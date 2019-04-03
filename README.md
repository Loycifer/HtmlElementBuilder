# HtmlElementBuilder

This JavaScript object allows for creating HTML blobs using a Java-style builder pattern.  This improves the readability of code which dynamically creates HTML elements.  Methods can be chained up until .build() is called.

example:

```javascript
var flashObject = new HtmlElement("object")
        .type("application/x-shockwave-flash")
        .id("flashvideo")
        .name("FlashVideo")
        .data("flashvideo.swf")
        .align("middle")
        .width("100%")
        .height("100%")
        .zIndex("8")
        .addChild(
            new HtmlElement("param")
                .name("quality")
                .value("high")
                .build()
        ).addChild(
            new HtmlElement("param")
                .name("bgcolor")
                .value("#303030")
                .build()
        ).build();
```
