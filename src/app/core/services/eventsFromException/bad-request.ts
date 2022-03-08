import { DomainNotification } from "./notification";

export class BadRequest {
    exceptionType?: string;
    notifications: DomainNotification[] = [];

    clear() {
        this.exceptionType = "";
        this.notifications = [];
    }

    constructor(exceptionType?: string, notifications?: DomainNotification[]) {
        this.exceptionType = exceptionType;

        if (notifications == null) {
            this.notifications = [];
            return;
        }
        this.notifications = notifications;
    }

}