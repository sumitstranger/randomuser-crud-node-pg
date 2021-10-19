//@ts-check

function succesResponse(data) {
    return { success: true, data };
}

function errorResponse(msg) {
    return { success: false, message: msg };
}

module.exports = {
    succesResponse,
    errorResponse
};