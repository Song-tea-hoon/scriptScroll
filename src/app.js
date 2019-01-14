/**
 * Jquery용 함수
 */

// let container = $('.scrollbody');
// let sidebar = $('.sidebar');
// let text1 = '';
// let text2 = '';

// for( let i = 0; i<2000; i++){
//     text1 += 'test ';
//     text2 += `<p class='margin20'>${i} : test test test test test</p>`
// }
// container.append(`<p>${text1}</p>`);
// sidebar.append(text2);

// ScriptScroll(sidebar);

// function ScriptScroll(target){
//     let isPrevent = false;
//     let startPos = 0;
//     let startScroll = 0;

//     target.on('touchstart', e=>{
//         if(e.cancelable){
//             e.preventDefault();
//             startPos = e.originalEvent.touches[0].clientY;
//             startScroll = e.currentTarget.scrollTop;
//         }
//     })

//     target.on('touchmove', e=>{
//         if(e.cancelable){
//             e.preventDefault();
//             e.currentTarget.scrollTo(0 ,startScroll + startPos -  e.originalEvent.touches[0].clientY)
//         }
//     })
// }

/** 
 * vanilla JS용 함수
*/

let container = document.querySelector('.scrollbody');
let sidebar = document.querySelector('.sidebar');
let text1 = '';
let text2 = '';

for( let i = 0; i<2000; i++){
    text1 += 'test ';
    text2 += `<p class='margin20'>${i} : test test test test test</p>`;
}

container.innerHTML = text1;
sidebar.innerHTML = text2;

ScriptScroll(sidebar);

function ScriptScroll(el) {

    let startPosY = 0;
    let startScroll = 0;
    el.addEventListener('touchstart', e=>{
        if(e.cancelable){
            e.preventDefault();
            startPos = e.touches[0].clientY;
            startScroll = e.currentTarget.scrollTop;
        }
    })

    el.addEventListener('touchmove', e=>{
        if(e.cancelable){
            e.preventDefault();
            e.currentTarget.scrollTo(0 ,startScroll + startPos -  e.touches[0].clientY)
        }
    })
}