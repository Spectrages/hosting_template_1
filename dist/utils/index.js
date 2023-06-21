export const handleSectionNavigation = (id) => {
    var _a;
    const element = document.getElementById(id);
    const offset = 45;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = (_a = element === null || element === void 0 ? void 0 : element.getBoundingClientRect().top) !== null && _a !== void 0 ? _a : 0;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
};
//# sourceMappingURL=index.js.map