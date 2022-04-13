/// <reference types="react" />
declare module "smoothScroll" {
    export const bounceOut: (t: number) => number;
    export const smoothScroll: (opt: {
        h: number;
        ele: React.MutableRefObject<any> | any;
    }) => void;
}
declare module "x-virtual" {
    import React, { FC } from "react";
    interface IVirtualListProps {
        itemHeight: number;
        windowHeight: number;
        data: any[];
        overscan?: number;
        ref?: React.ForwardedRef<HTMLDivElement>;
    }
    export const XVirtual: FC<IVirtualListProps>;
}
