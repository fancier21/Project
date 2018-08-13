export function configureFakeBackend() {
    let users = [{ id: 1, email: 'user', password: 'code' }];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);

                    let filteredUsers = users.filter(user => {
                        return user.email === params.email && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            email: user.email,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, json: () => Promise.resolve(responseJson) });
                    } else {
                        reject('Email or Password is incorrect');
                    }

                    return;
                }

                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, json: () => Promise.resolve(users) });
                    } else {
                        reject('Unauthorised');
                    }

                    return;
                }

                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}
