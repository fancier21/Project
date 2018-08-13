import * as ActionTypes from "./types";
import * as API from "../../services/help";

export const sendQuestion = (help) => (dispatch) => {
    API.sendQuestionRequest(help).then(help => {
        // console.log(help);
        dispatch(sendQuestionRequest(help))
    })
    .catch(error => (
            dispatch({
                error: error.response.data.errorMessage || error.response.data.result,
                type: ActionTypes.SENT_QUESTION_FAILURE
            })
        ))
};

export const sendQuestionRequest = (help) => ({
	type: ActionTypes.SENT_QUESTION_SUCCESS,
	help
})

