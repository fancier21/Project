import { APIUrlencoded } from "./instance"

import { getUser } from '../storage.js'


export const changeSettingsRequest = (settings) => {
    // console.log(settings)
    let user = JSON.parse(localStorage.getItem('__selko_user__'));
    
    let userAccessToken = getUser();

    const url = `/api/user/edit/${user.localUserId}`; /*${id}*/

    const data = {
    	id: user.localUserId,
    	Authorization: userAccessToken.access_token,
  		name: settings.name,
      email: settings.email,
      password: settings.password
    };

    console.log(data)

    return APIUrlencoded.post(url, data).then(({data}) => data)
};