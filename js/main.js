/*
let form = document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let Id =document.getElementById('Id').value;
    let language=document.getElementById('language').value;
    let text=document.getElementById('text').value;
    
const data = [{
    Id: Id, 
    language: language,
    text: text,
    }];
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'dca8640511msh1a1b0c899c517d2p109739jsn14ea5a0101a5',
            'X-RapidAPI-Host': 'big-five-personality-insights.p.rapidapi.com'
        },
        body: JSON.stringify(data)
    };
    
    fetch('https://big-five-personality-insights.p.rapidapi.com/api/big5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
})
*/

let form = document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let Id =document.getElementById('Id').value;
    let language=document.getElementById('language').value;
    let text=document.getElementById('text').value;
    
const data = [{
    Id: Id, 
    language: language,
    text: text,
    }];
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'dca8640511msh1a1b0c899c517d2p109739jsn14ea5a0101a5',
            'X-RapidAPI-Host': 'big-five-personality-insights.p.rapidapi.com'
        },
        body: JSON.stringify(data)
    };
    
    fetch('https://big-five-personality-insights.p.rapidapi.com/api/big5', options)
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.map(item =>{
                /*
                console.log(item.extraversion)
                console.log(item.openness)
                console.log(item.conscientiousness)
                console.log(item.neuroticism)
                console.log(item.agreeableness)
                */
                output += `
<table>
  <tr class="on">
    <td>Big5</td>
    <td>Résultats</td>
  </tr>
  <tr class="badr">
    <td>extraversion</td>
    <td>${item.extraversion}</td>
  </tr>
  <tr class="badr">
  <td>openness</td>
  <td>${item.openness}</td>
</tr>
<tr class="badr">
<td>conscientiousness</td>
<td>${item.conscientiousness}</td>
</tr>
<tr class="badr">
<td>neuroticism</td>
<td>${item.neuroticism}</td>
</tr>
<tr class="badr">
<td>agreeableness</td>
<td>${item.agreeableness}</td>
</tr>
</table>


                `;
            })
            document.querySelector('.resultat').innerHTML = output;
        })
        .catch(err => console.error(err));


    })


/*
    fetch("https://big-five-personality-insights.p.rapidapi.com/api/big5",{
        method: 'POST',
        body:JSON.stringify({
            id: "1",
            language: "en",
        text: "i love my laptop"
        }),
        headers:{
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'dca8640511msh1a1b0c899c517d2p109739jsn14ea5a0101a5',
		'X-RapidAPI-Host': 'big-five-personality-insights.p.rapidapi.com'
        },
    })
       .then((response) => response.json())
       .then((json) => console.log(json));
       */