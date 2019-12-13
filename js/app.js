const ticket=document.querySelector('#ticket');

function renderTicket(doc)
{
	
	let tr=document.createElement('tr');
	let trmessage=document.createElement('tr');
	let tdmessage=document.createElement('td');
	let tdstaffid=document.createElement('td');
	let tdfirstname=document.createElement('td');
	let tdlastname=document.createElement('td');
	let tdlocation=document.createElement('td');
	let tddept=document.createElement('td');
	let tdstaffassigned=document.createElement('td');
	let tdstatus=document.createElement('td');
	let tdcross=document.createElement('td');
	tdstaffid.textContent=doc.data().staffid;
	tdfirstname.textContent=doc.data().firstname;
	tdlastname.textContent=doc.data().lastname;
	tdlocation.textContent=doc.data().location;
	tddept.textContent=doc.data().deparment;
	tdstaffassigned.textContent=doc.data().staffassigned;
	tdstatus.textContent=doc.data().status;
	tdmessage.textContent=doc.data().message;
	tdcross.textContent="X";
	tdcross.setAttribute("bgcolor","#FF0000" );
	tdcross.setAttribute("class","pointer" );
	tdmessage.setAttribute("colspan", "6");
	tr.setAttribute('data-id', doc.id);
	trmessage.setAttribute('data-name', doc.id);
	tdmessage.setAttribute('class','bg-primary text-white');
	trmessage.appendChild(tdmessage);
	tr.appendChild(tdstaffid);
	tr.appendChild(tdfirstname);
	tr.appendChild(tdlastname);
	tr.appendChild(tdlocation);
	tr.appendChild(tddept);
	tr.appendChild(tddept);
	tr.appendChild(tdstaffassigned);
	tr.appendChild(tdstatus);
	tr.appendChild(tdcross);
	ticket.appendChild(tr);
	ticket.appendChild(trmessage);
	tdcross.addEventListener('click', (e) =>{
		e.stopPropagation();
		let id=e.target.parentElement.getAttribute('data-id');
		db.collection('ticket').doc(id).delete();
	});

}

db.collection('ticket').orderBy('lastname').onSnapshot(snapshot =>
{
	let changes=snapshot.docChanges();

	changes.forEach(change =>{
		if(change.type == 'added')
		{

			renderTicket(change.doc);
			
		}else if(change.type == 'removed')
		{

			let tr=ticket.querySelector('[data-id=' + change.doc.id + ']');
			let trmessage=ticket.querySelector('[data-name=' + change.doc.id + ']');
			ticket.removeChild(tr);
			ticket.removeChild(trmessage);
			

		}
	})
});
