import * as ActionTypes from "./types";
import * as API from "../../services/settings";

export const changeSettings = (settings) => (dispatch) => {
    API.changeSettingsRequest(settings).then(settings => {
        // console.log(settings);
        dispatch(changeSettingsRequest(settings))
    })
    .catch(error => (
        dispatch({
            error: error.response.data,
            type: ActionTypes.CHANGE_SETTINGS_FAILURE
        })
    ))
};


export const changeSettingsRequest = (settings) => ({
	type: ActionTypes.CHANGE_SETTINGS_SUCCESS,
	settings
})