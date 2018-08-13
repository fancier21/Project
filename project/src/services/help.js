import { APIUrlencoded } from "./instance"

import { getUser } from '../storage.js'

//
export const sendQuestionRequest = (help) => {
    console.log(help)
    const url = `/help/sendToSupport`;

    let userAccessToken = getUser()

    const data = {
		Authorization: userAccessToken.access_token,
		name: help.name,
        email: help.email,
        message: help.message
    };

    console.log(data)

    return APIUrlencoded.post(url, data).then(({data}) => data.errorMessage)
};