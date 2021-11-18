export default function validateForm({  nameUser,
      nameClient,
      numero,
      address,
      tarif,
      dateD,
      dateF,
      caution,
      message,
      numberJ}) {
	if (!nameUser.trim()) {
		return 'Username required';
	}
	if (!nameClient.trim()) {
		return 'Username required';
	}
	if (!address.trim()) {
		return 'address required';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	
	if (!numero) {
		return 'numro is required';
	} else if (numero.length < 8) {
		return 'numero needs to be 8 characters or more';
	}

	return null;
}
