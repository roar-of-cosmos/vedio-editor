// main.js — small UX helpers
document.getElementById('year').textContent = new Date().getFullYear();

// Basic form handling: show a confirmation on successful submit when using Formspree
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', async (e)=>{
    // Let the form submit normally if action is not a Formspree placeholder
    const action = form.getAttribute('action')||'';
    if(action.includes('formspree.io')){
      e.preventDefault();
      const data = new FormData(form);
      try{
        const res = await fetch(action, {method:'POST',body:data,headers:{'Accept':'application/json'}});
        if(res.ok){
          form.reset();
          alert('Thanks — your message was sent.');
        } else {
          alert('Submission failed. You can email hello@example.com instead.');
        }
      }catch(err){
        alert('Submission error — please email hello@example.com');
      }
    }
  });
}
