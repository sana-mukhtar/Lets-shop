

class ErrorHandler extends Error{
    constructor(public message : string , public statuscode : number){
        super(message)
        this.statuscode = statuscode
    }
}

export default ErrorHandler;