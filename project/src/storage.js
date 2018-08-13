// File for local storage methods (will be used for user token storage)

const USER_STORAGE_ID = '__selko_user__';

export const setUser = user =>
    localStorage.setItem(USER_STORAGE_ID, JSON.stringify(user));

export const getUser = () =>
//  JSON.parse(localStorage.getItem(USER_STORAGE_ID))
({
    access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTZXNzaW9uIHRva2VuIiwiY29tcGFueUlkIjoxLCJpc3MiOiJTZWxrbyIsImdsb2JhbFVzZXJJZCI6MSwiZXhwIjoxOTMyNTQwMTYyLCJsb2NhbFVzZXJJZCI6MSwiaWF0IjoxNTMyNTM4MzYyfQ.TmR5kQX5dIBTNYGszYhfWQEayYymLmPc8IuXiSXn9V8'
});

export const removeUser = () =>
    localStorage.removeItem(USER_STORAGE_ID);

