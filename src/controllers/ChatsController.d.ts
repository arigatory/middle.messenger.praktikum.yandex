declare class ChatsController {
    private readonly api;
    constructor();
    create(title: string): Promise<void>;
    fetchChats(): Promise<void>;
    addUserToChat(id: number, userId: number): void;
    delete(id: number): Promise<void>;
    getToken(id: number): Promise<string>;
    selectChat(id: number): void;
}
declare const controller: ChatsController;
export default controller;
