
function submit(values) {
  
  let validErrors = [];
  const digit =/\d/;
  const special = /\W/;
    if (values.firstName.length<=2) validErrors.push(`Have you typed yor first name properly? It seems to be very short..`);
    if (digit.test(values.firstName)) validErrors.push(`\nAre you sure your first name contains numbers?`);
    if (special.test(values.firstName)) validErrors.push(`\nAre you sure your first name contains some special signs?`);
    if (values.lastName.length>=10) validErrors.push(`\nYour first name has more than 10 sings?`);
    if (values.lastName.length<=2) validErrors.push(`\nHave you typed yor last name properly? It seems to be very short..`);
    if (digit.test(values.lastName)) validErrors.push(`\nAre you sure your last name contains numbers?`);
    if (special.test(values.lastName)) validErrors.push(`\nAre you sure your last name contains some special signs?`);
    if (values.lastName.length>=10) validErrors.push(`\nYour last name has more than 10 sings?`);
    if (Date.parse(values.eventDate)<Date.now()) validErrors.push(`\nYou have selected a past date!`);
        
    if (validErrors.length===0){
     
        localStorage.setItem('DB', JSON.stringify(values)); 
        console.log(values);
      
    }else{
      window.alert(validErrors);
    }   
    
};

export default submit;