function fetchdata(){
 fetch('https://reqres.in/api/users/').then(response =>{
    return response.json();
  
    console.log(response);
  if(response.ok){
      throw Error('ERROR');
  }

    })  .then(data=>{
        console.log(data.data);
        const html = data.data.map(user=>{
            return `
            <div class="user">
            <ul>
            <li><h1>${user.first_name}</h1></li>
            <li><p>Email: ${user.email}</p></li>
            <li><p><img src="${user.avatar}" alt="${user.first_name}"></p></li>
            </ul>

            </div>
        
            
            `;
        }).join("");
        console.log(html);
        document.querySelector('#app').insertAdjacentHTML("afterbegin",html);

 }).catch(error=>{
    console.log(error);
 });
}

fetchdata();