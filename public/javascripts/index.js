// const submitReview = (e) => {
//     e.preventDefault();
//     const review = document.getElementById('review').value;
//     const options = {
//       method: 'POST',
//       body: JSON.stringify({ review }),
//       headers: new Headers({ 'Content-Type': 'application/json' })
//     }
  
//     const emojiSection = document.getElementById('emojiSection');
//     const title = document.getElementById('title');
//     const outline = document.querySelector(':focus');
  
//     fetch('/api/nlp/s-analyzer', options)
//       .then(res => res.json())
//       .then (({ analysis }) => {
//         if (analysis < 0) {
//           emojiSection.innerHTML = '<img src="./images/angry-face.png" width="90" height="90">';
//           title.style.color = 'red';
//           outline.style.borderColor = 'red';
//         };
//         if (analysis === 0) {
//           emojiSection.innerHTML = '<img src="./images/neutral-emoticon.png">';
//           title.style.color = '#00367c';
//           outline.style.borderColor = '#00367c';
//         }
//         if (analysis > 0) {
//           emojiSection.innerHTML = '<img src="./images/happy.png">';
//           title.style.color = 'green';
//           outline.style.borderColor = 'green'
//         }
//       })
//       .catch(err => {
//         emojiSection.innerHTML = 'There was an error processing your request!'
//       })
//   }
  
//   document.getElementById('review').addEventListener('keyup', submitReview);
//   document.getElementById('reviewForm').addEventListener('submit', submitReview);
  


const submitReview=e=>{e.preventDefault();const t=document.getElementById("review").value,n={method:"POST",body:JSON.stringify({review:t}),headers:new Headers({"Content-Type":"application/json"})},r=document.getElementById("emojiSection"),o=document.getElementById("title"),i=document.querySelector(":focus");fetch("/api/nlp/s-analyzer",n).then(e=>e.json()).then(({analysis:e})=>{e<0&&(r.innerHTML='<img src="./images/angry-face.png" width="90" height="90">',o.style.color="red",i.style.borderColor="red"),0===e&&(r.innerHTML='<img src="./images/neutral-emoticon.png">',o.style.color="#00367c",i.style.borderColor="#00367c"),e>0&&(r.innerHTML='<img src="./images/happy.png">',o.style.color="green",i.style.borderColor="green")}).catch(e=>{r.innerHTML="There was an error processing your request!"})};document.getElementById("review").addEventListener("keyup",submitReview),document.getElementById("reviewForm").addEventListener("submit",submitReview);