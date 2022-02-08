// window.addEventListener('load', () =>{

//     const canvas = document.querySelector('#canvas');
//     const ctx = canvas.getContext('2d');

//     const bungkus = document.querySelector('#bungkus');

//     // ====================== resizing
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     // ======================== variabel
//     let painting = false;

//     // ======================== startdraw
//     function starpost (e){
//         painting = true;
//         draw(e);
//     };
    
//     // ======================== endpost
//     function endpost (){
//         painting = false;
//         ctx.beginPath();
//     };

//     // ========================draw
//     function draw (e){
//         if(!painting) return;
//         ctx.lineWidth = 10;
//         ctx.lineCap='round';
//         ctx.strokeStyle = 'red';

//         ctx.lineTo(e.clientX, e.clientY);
//         ctx.stroke();
//         ctx.beginPath();
//         ctx.moveTo(e.clientX, e.clientY);
        
        
//     };

//     // =======================eventlistener
//     canvas.addEventListener('mousedown', starpost);
//     canvas.addEventListener('mouseup', endpost);
//     canvas.addEventListener('mousemove', draw);

// });