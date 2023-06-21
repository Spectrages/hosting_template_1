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
const sizeClasses = {
    txtRobotoRomanBold35: "font-bold font-roboto",
    txtRobotoRomanBold50Black900: "font-bold font-roboto",
    txtRobotoRomanBold50: "font-bold font-roboto",
    txtRobotoRomanBold60: "font-bold font-roboto",
    txtDidactGothicRegular30Gray40001: "font-didactgothic font-normal",
    txtRobotoRomanSemiBold40: "font-roboto font-semibold",
    txtDidactGothicRegular28: "font-didactgothic font-normal",
    txtRobotoRomanSemiBold35Black900: "font-roboto font-semibold",
    txtDidactGothicRegular30Black900: "font-didactgothic font-normal",
    txtRobotoRomanSemiBold35: "font-roboto font-semibold",
    txtDidactGothicRegular30: "font-didactgothic font-normal",
    txtDidactGothicRegular25: "font-didactgothic font-normal",
    txtDidactGothicRegular35: "font-didactgothic font-normal",
    txtRobotoRomanRegular35: "font-normal font-roboto",
};
const Text = (_a) => {
    var { children, className = "", size, as } = _a, restProps = __rest(_a, ["children", "className", "size", "as"]);
    const Component = as || "p";
    return (React.createElement(Component, Object.assign({ className: `text-left ${className} ${size && sizeClasses[size]}` }, restProps), children));
};
export { Text };
//# sourceMappingURL=index.js.map