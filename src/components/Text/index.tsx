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
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
