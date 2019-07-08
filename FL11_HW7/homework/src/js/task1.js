const MIN_MAIL_LEN = 6;
const MIN_PASS_LEN = 5;

const accounts = {
	'user@gmail.com': 'UserPass',
	'admin@gmail.com': 'AdminPass'
}

const email = prompt('Please enter your email:', '');

if ( email === '' || email === null ) {
	alert('Canceled.');
} else if ( email.length < MIN_MAIL_LEN ) {
	alert('I don\'t know any emails having name length less than 6 symbols');
} else if ( email in accounts ) {
	const password = prompt('Please enter the password:', '');
	if ( password === '' || password === null ) {
		alert('Canceled.');
	} else if ( accounts[email] === password ) {
		if ( confirm('Do you want to change your password?') ) {
			const old_password = prompt('Please enter your current password:', '');
			if ( old_password === '' || old_password === null ) {
				alert('Canceled.');
			} else if ( accounts[email] === old_password ) {
				const new_password = prompt('Please enter new password:', '');
				if ( new_password.length < MIN_PASS_LEN ) {
					alert('It\'s too short password. Sorry.');
				} else {
					const confirm_password = prompt('Please enter new password again:', '');
					if ( new_password === confirm_password ) {
						alert('You have successfully changed your password!');
					} else {
						alert('You wrote the wrong password.');
					}
				}
			} else {
				alert('Wrong password');
			}
		} else {
			alert('You have failed the change.');
		}
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don’t know you!');
}