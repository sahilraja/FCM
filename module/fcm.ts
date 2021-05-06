import * as firebaseAdmin from "firebase-admin";
const firebaseCredentials = require("./firebase-creds.json");


firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseCredentials)
})
const messagingAPI = firebaseAdmin.messaging();


export async function sendFireBaseNotification(deviceTokens: Array<string>, title: string = "Hello", body: string = "Sample Notigication") {
    const payload = { title, body }
    const messageObj = {
        notification: payload,
        data: payload
    }
    await messagingAPI.sendToDevice(deviceTokens, messageObj).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
