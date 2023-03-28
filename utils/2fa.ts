const speakeasy = require('speakeasy');
const QRCode = require('qrcode')
const express = require('express')

const app = express();

//Generating a Secret
import { generateSecret } from 'speakeasy'

interface TwoFactorEntity {

    userId: number
    secret: string
    enabled: boolean 
}


const generateUserSecret = 
(userRepo: Repository, twoFactor: TwoFactorEntity) => {

    const secret = generateSecret({ otpauth_url: true })
        twoFactor.secret = secret.base32
        userRepo.save(twoFactor)
        return secret
}

interface Repository {
save: (d: TwoFactorEntity) => any; 
}


//Displaying QR Code 

import { toDataURL } from 'qrcode'

interface SecretData {
    otpauth_url: String
}

const generateQRCode = async (secret: SecretData) => {
    return await toDataURL(secret.otpauth_url)
    
}

//Verifiying the Token

import { totp } from 'speakeasy'

const verifyToken = (userToken: string, serverSecret: string) : boolean => {
    const verified = totp.verify({
        secret: serverSecret,
        encoding: 'base32',
        token: userToken
    })
    return verified
}

const enableTwoFactor = (
    verified: boolean,
    twoFactor: TwoFactorEntity) => {
        if (!twoFactor.enabled) {
            twoFactor.enabled = verified
        }
        repo.save(twoFactor)
    }


    const secret = generateSecret({ otpauth_url: true })
    twoFactor.secret = secret.base32
    userRepo.save(twoFactor)
    return secret

return await toDataURL(secret.otpauth_url)


    const verified = totp.verify({
        secret: serverSecret,
        encoding: 'base32',
        token: userToken
    })
    return verified