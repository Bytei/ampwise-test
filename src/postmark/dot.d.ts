import dot from 'dot';

declare module 'dot' {
    interface ProcessOptions {
        path: string
    }

    function process(options: ProcessOptions): Record<string, dot.RenderFunction>
}