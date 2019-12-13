const form=document.querySelector('#add-ticket');
//saving data
form.addEventListener('submit', (e) => {
	e.preventDefault();
	db.collection('ticket').add({
		firstname: form.firstname.value,
		lastname: form.lastname.value,
		email: form.email.value,
		location: form.location.value,
		deparment: form.department.value,
		message: form.message.value,
		priority:form.priority.value,
		staffid:"dis123",
		subject:form.subject.value,
		staffassigned:"pending",
		status:"pending"
	});
	form.firstname.value='';
	form.lastname.value='';
	form.email.value='';
	form.subject.value='';
	form.message.value='';



});
 



