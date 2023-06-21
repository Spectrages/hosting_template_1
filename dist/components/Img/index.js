var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
const Img = (_a) => {
    var { className, src = "defaultNoData.png", alt = "testImg" } = _a, restProps = __rest(_a, ["className", "src", "alt"]);
    return (React.createElement("img", Object.assign({ className: className, src: src, alt: alt }, restProps, { loading: "lazy" })));
};
export { Img };
//# sourceMappingURL=index.js.map