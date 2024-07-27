
const btn_submit = document.querySelector('.submit');
const responsibilities_Next_Button1 = document.querySelector('.responsibilitiesNextButton1');
const skills_Eligibility_Button1 = document.querySelector('.skillsAndEligibilityNextButton1');



let res_value =1;

responsibilities_Next_Button1.addEventListener( 'click',function(){
    res_value++;
    const html = 
        `<label for="responsibilities${res_value}">responsibilities${res_value}</label>
        <input type="text" class="responsibilities${res_value}"><br>
    `
    document.querySelector('.response').insertAdjacentHTML('beforeend',html);
});




let skills_value =1;

skills_Eligibility_Button1.addEventListener( 'click',function(){
    skills_value++;
    const html = 
        `<label for="skillsAndEligibility${skills_value}">skillsAndEligibility${skills_value}</label>
        <input type="text" name="title" class="skillsAndEligibility${skills_value}"><br>
    `
    document.querySelector('.skillsEligibility').insertAdjacentHTML('beforeend',html);
    
});









btn_submit.addEventListener('click', function(){
    const company_name = document.querySelector('.companyName').value;
    const job_title = document.querySelector('.jobTitle').value;
    const image_src = document.querySelector('.imageSrc').value;
    const image_src_telegram = document.querySelector('.imageSrcTelegram').value;
    const image_src_whatsapp = document.querySelector('.imageSrcWhatsapp').value;
    const description = document.querySelector('.description').value;
    // const companyName = document.querySelector('.companyName').value;
    const role = document.querySelector('.role').value;
    const location = document.querySelector('.location').value;
    const experience = document.querySelector('.experience').value;
    const qualification = document.querySelector('.qualification').value;
    

    const obj = `{
        ${company_name} : {
            jobTitle : ${job_title} ,
            imgSrc : '${image_src}',
            imgSrcTelegram : ${image_src_telegram},
            imgSrcWhatsapp : ${image_src_whatsapp},
            description : ${description} ,
            companyName : ${company_name} ,
            role : ${role} ,
            location : ${location} ,
            experience : ${experience} ,
            qualification : ${qualification} ,

            responsibilities : 
                ${keyGenerate(res_value)}
            

        }
    }`
    console.log(obj);
});

function keyGenerate(res_value){
    // console.log('res_value=',res_value)
    let responsibilityStep ='';
    let kvRes = '';
    for(let i=1; i<=res_value; i++){
        let value = document.querySelector(".responsibilities"+`${i}`).value;
        let tag = i + ':' + value +',';
        responsibilityStep = responsibilityStep+tag;
    }
    // let a = ".responsibilities"+`${res_value}`
    // console.log("'"+".responsibilities"+`${res_value}`+"'")
    // console.log(document.querySelector(".responsibilities"+`${res_value}`).value)
        // return   responsibilityStep
        return '{'+responsibilityStep+'}';
}

// function keyValueGen(i){
//     let value = document.querySelector(".responsibilities"+`${res_value}`).value;
//     let tag = i + ':' + value +',';
//     return tag
// }


// let responsibilityStep ='';
//     for(let i=1; i<=len; i++){
//         let tag = '<li>'+ o.responsibilities[i] + '</li>';
//         responsibilityStep = responsibilityStep + tag;
//     }
//         console.log(responsibilityStep)
//         return   `<h2>Responsibilities</h2>
//                     <p class="Responsibilities">
//                     <ul>${responsibilityStep}</ul></p>`




                    // function keyGenerate(res_value){
    
                    //     let responsibilityStep ='';
                    //     for(let i=1; i<=res_value; i++){
                    //         let tag = i + ':' +',';
                    //         responsibilityStep = responsibilityStep + tag;
                    //     }
                    //     let a = ".responsibilities"+`${res_value}`
                    //     console.log("'"+".responsibilities"+`${res_value}`+"'")
                    //     console.log(document.querySelector(".responsibilities"+`${res_value}`).value)
                    //         // return   responsibilityStep
                    // }