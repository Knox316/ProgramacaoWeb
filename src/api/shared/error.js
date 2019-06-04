const errorStatusBadRequest = "Bad Request";
const errorStatusUnauthorized = "Unauthorized";
const errorStatusPaymentRequired = "Payment Required";
const errorStatusForbidden = "Forbidden";
const errorStatusNotFound = "Not Found";
const RESPONSE_CODE_OK = 200;
const RESPONSE_CODE_BAD_REQUEST = 400;
const HTTP_CONTENT_TYPE_HEADER = 'Content-Type';
const HTTP_CONTENT_TYPE_JSON = 'application/json';


//mudar isto depois porque a ideia não é nossa.
exports.getErrors = (error) => {
    if (error.response) {
        switch (error.response.status) {
            case 400:
                return errorStatusBadRequest;
            case 401:
                return errorStatusUnauthorized;
            case 402:
                return errorStatusPaymentRequired;
            case 403:
                return errorStatusForbidden;
            case 404:
                return errorStatusNotFound;
                break;
            default:
                return errorStatusBadRequest;
        }
    } else if (error.request) {
        return `Error in request ${errorStatusBadRequest}`;
    } else {
        return `Error ${errorStatusBadRequest} - ${error.message}`;
    }
}