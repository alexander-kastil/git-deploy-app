getuser();

function getuser() {
    console.log('Checking for easy auth user');
    try {
        fetch('/.auth/me')
            .then((response) => response.json())
            .then((data) => {
                document.getElementById('noauth').style.display = 'none';
                console.log('response: ', data);
                if (data[0]) {
                    const msg = `${data[0].user_id}!<br/> This is your access token:  ${data[0].access_token}.`;
                    document.getElementById('auth').innerHTML = msg;
                }
            });
    } catch (error) {
        document.getElementById('auth').style.display = 'none';
    }
}
