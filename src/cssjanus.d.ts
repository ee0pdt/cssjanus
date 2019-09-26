declare module 'cssjanus' {
    const transform: (css: string, swapLtrRtlInUrl?: boolean, swapLeftRightInUrl?: boolean) => string;
    export default transform;
}
