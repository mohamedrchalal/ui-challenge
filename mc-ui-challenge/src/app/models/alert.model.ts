export class AlertModel {
    constructor (
        public AlertId: number,
        public AlertTime: string,
        public Severity: string,
        public ClientIP: string,
        public ServerIP: string,
        public Protocol: string,
        public ClientCountry: string
    ) {}
}