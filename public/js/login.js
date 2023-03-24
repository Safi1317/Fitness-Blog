const loginScreen = async (event) => {
    event.preventDefault();

    const userEmail = document.querySelector('#').value.trim();
    const userPassword = document.querySelector('#').value.trim();

    if (userEmail && userPassword) {

        const userResponse = await fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify({userEmail, userPassword }),
            headers: {'Content-Type': 'application/json' },
        });

        if (userResponse.ok) {
            document.location.replace('/');
        } else {
            alert('failed to login');
        }
    }
};

document.querySelector('').addEventListener('', loginScreen);

