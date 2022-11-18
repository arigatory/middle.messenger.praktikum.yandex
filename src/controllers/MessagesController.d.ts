export interface Message {
    chat_id: number;
    time: string;
    type: string;
    user_id: number;
    content: string;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    };
}
declare class MessagesController {
    private sockets;
    connect(chatId: number, token: string): Promise<void>;
    sendMessage(chatId: number, message: string): void;
    fetchOldMessages(chatId: number): void;
    private onMessage;
    private onClose;
    private subscribe;
}
declare const controller: MessagesController;
export default controller;
