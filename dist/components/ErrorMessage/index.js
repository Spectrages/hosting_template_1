import React from "react";
export const ErrorMessage = ({ errors = [], className = "", }) => {
    return (errors === null || errors === void 0 ? void 0 : errors.length) > 0 ? (React.createElement("div", { className: `text-red-500 text-left text-xs w-full mt-1 ${className}` }, errors.join(", "))) : (React.createElement(React.Fragment, null));
};
//# sourceMappingURL=index.js.map