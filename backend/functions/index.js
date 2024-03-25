const functions = require("firebase-functions/v1")
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin")
admin.initializeApp()

exports.setCustomClaim = functions.auth.user().onCreate(async (user) => {
    const email = user.email
    const userId = user.uid

    const emails = ["aqibnawaz@gmail.com", "huraira@gmail.com"]
    const verifyEmail = emails.find(e => e === email)
    if (!verifyEmail) {
        logger.log("Email not verified...")
        return
    } else {
        await admin.auth()
            .setCustomUserClaims(userId, { admin: true })
            .then(() => {
                admin.auth().revokeRefreshTokens(userId)
                logger.log(`Admin role assigned to ${email}, with userId ${userId}`)
            })
    }
})
