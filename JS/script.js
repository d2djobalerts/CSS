const websiteEnterLink = document.querySelector('.webpage-links-d2djobalerts');


setInterval(function(){
    websiteEnterLink.style.transform = 'scale(1.01)';
    // websiteEnterLink.style.boxShadow = '-2px 2px 5px 10px blue';
    websiteEnterLink.style.boxShadow = '-1px 1px 2.5px 5px white';
    console.log('down');
},1000);

setInterval(function(){
    websiteEnterLink.style.transform = 'scale(0.98)';
    console.log('down');
},2000);