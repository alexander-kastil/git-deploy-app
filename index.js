(function () {
    console.log('Checking for easy auth user');
    fetch('/.auth/me')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('noauth').style.display = 'none';
            console.log('response: ', data);
            if (data[0]) {
                const msg = `<p>You are logged in as: ${data[0].user_id}</p><p>Open F12 Dev Tools to see your tokens.</p>`;
                console.log('ID token: ', data[0].id_token);
                console.log('Access token: ', data[0].access_token);
                document.getElementById('auth').innerHTML = msg;
            }
        })
        .catch(() => {
            const div = document.getElementById('auth');
            if (div) {
                div.style.display = 'none';
            }
        });
})();
