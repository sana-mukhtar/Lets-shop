class ErrorHandler extends Error {
    constructor(message, statuscode) {
        super(message);
        this.message = message;
        this.statuscode = statuscode;
        this.statuscode = statuscode;
    }
}
export default ErrorHandler;
