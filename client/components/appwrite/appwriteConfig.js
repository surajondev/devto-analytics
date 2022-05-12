import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('627ca768cf0dc3582d2b') // Your project ID
;

export const account = sdk.account
export const db = sdk.database