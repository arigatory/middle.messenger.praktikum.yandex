import { EventBus } from './EventBus';
declare class Block<P extends Record<string, any> = any> {
    static EVENTS: {
        readonly INIT: "init";
        readonly FLOW_CDM: "flow:component-did-mount";
        readonly FLOW_CDU: "flow:component-did-update";
        readonly FLOW_RENDER: "flow:render";
    };
    id: string;
    protected props: P;
    children: Record<string, Block | Block[]>;
    private eventBus;
    private _element;
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(propsWithChildren: P);
    _getChildrenAndProps(childrenAndProps: P): {
        props: P;
        children: Record<string, Block | Block[]>;
    };
    _addEvents(): void;
    _registerEvents(eventBus: EventBus): void;
    _createResources(): void;
    private _init;
    protected init(): void;
    _componentDidMount(): void;
    componentDidMount(): void;
    dispatchComponentDidMount(): void;
    private _componentDidUpdate;
    protected componentDidUpdate(oldProps: P, newProps: P): boolean;
    setProps: (nextProps: P) => void;
    get element(): HTMLElement | null;
    private _render;
    protected compile(template: (context: any) => string, context: any): DocumentFragment;
    protected render(): DocumentFragment;
    getContent(): HTMLElement | null;
    _makePropsProxy(props: P): P;
    _createDocumentElement(tagName: string): HTMLElement;
    show(): void;
    hide(): void;
}
export default Block;
