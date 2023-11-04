import { getReasonPhrase, StatusCodes } from "http-status-codes";

export type ApiResponseT = {
    status: string;
    message: string;
    data: any;
};

// export interface ApiResponse {
//     (statusCode?: number, message?: string, data?: any);
//     update(statusCode: number, message: string, data: any): ApiResponseT;
// }

class ApiResponse {
    private _response: ApiResponseT;
    private _DEFAULT_STATUS_CODE: number = StatusCodes.BAD_REQUEST;
    private _DEFAULT_MESSAGE: string = "Some parameter or query invalid";
    private _DEFAULT_DATA = [];

    constructor(statusCode?: number, message?: string, data?: any) {
        this._response = {
            status: getReasonPhrase(statusCode ?? this._DEFAULT_STATUS_CODE),
            message: message ?? this._DEFAULT_MESSAGE,
            data: data ?? this._DEFAULT_DATA,
        };
    }

    update(statusCode: number, message: string, data?: any) {
        this._response = {
            status: getReasonPhrase(statusCode),
            message: message,
            data: data ?? [],
        };
    }

    updateStatus(statusCode: number, message: string) {
        this._response = {
            status: getReasonPhrase(statusCode),
            message: this._DEFAULT_MESSAGE,
            data: this._DEFAULT_DATA,
        };
    }

    get() {
        return this._response;
    }
}

export { ApiResponse };
