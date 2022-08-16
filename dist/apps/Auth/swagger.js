"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paths = {
    "/auth/": {
        post: {
            tags: ["Auth"],
            summary: "Auth",
            description: "Post for Auth",
            parameters: [
                {
                    in: "body",
                    name: "AuthPayload",
                    schema: {
                        $ref: "#/definitions/AuthPayload",
                    },
                },
            ],
            responses: {
                200: {
                    description: "OK",
                    schema: {
                        $ref: "#/definitions/Auth",
                    },
                },
                401: {
                    description: "Invalid credentials",
                    schema: {
                        $ref: "#/definitions/ErrorResponse",
                    },
                },
            },
        },
    },
};
const definitions = {
    Auth: {
        type: "object",
        properties: {
            userInfo: {
                type: "object",
                properties: {
                    _id: { type: "string" },
                    customId: { type: "string" },
                    deviceId: { type: "string" },
                    document: { type: "string" },
                    nickName: { type: "string" },
                    email: { type: "string" },
                    birthdate: { type: "string" },
                    nrMobilePhone: { type: "string" },
                    appClientId: { type: "string" },
                    clientType: { type: "string" },
                    password: { type: "string" },
                    dhCreation: { type: "string", format: "date-time" },
                    documentInfo: {
                        type: "object",
                        properties: {
                            documentName: { type: "string" },
                            documentNumber: { type: "string" },
                        },
                    },
                    address: {
                        type: "object",
                        properties: {
                            cep: { type: "string" },
                            street: { type: "string" },
                            number: { type: "string" },
                            complement: { type: "string" },
                            neighborhood: { type: "string" },
                            state: { type: "string" },
                            city: { type: "string" },
                        },
                    },
                    images: {
                        type: "object",
                        properties: {
                            selfie: { type: "string" },
                            document: { type: "string" },
                        },
                    },
                    accountStatus: { type: "string", enum: ["PENDING"] },
                    reset: { type: "boolean" },
                    step: { type: "number" },
                    createAt: { type: "string", format: "date-time" },
                    updateAt: { type: "string", format: "date-time" },
                },
            },
            whitelabelToken: {
                type: "string",
            },
        },
    },
    AuthPayload: {
        type: "object",
        properties: {
            document: {
                type: "string",
            },
            password: {
                type: "string",
            },
        },
    },
};
exports.default = {
    paths,
    definitions,
};
