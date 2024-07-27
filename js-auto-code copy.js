
const obj = {
    serviceNow : {
        jobTitle : 'Apply Now | ServiceNow is hiring for Software Quality Engineer  !',
        imgSrc : 'https://d2djobalerts.github.io/images/serviceNow-logo.png',
        imgSrcTelegram : 'https://d2djobalerts.github.io/images/Telegram-join-image.png',
        imgSrcWhatsapp : 'https://d2djobalerts.github.io/images/Whatsapp-join-image.png',
        description : 'ServiceNow is looking for Software Quality Engineer with bachelors degree as qualification. The complete information like qualification, skills, etc are provided below.',
        companyName : 'ServiceNow',
        role : '',
        location : '',
        experience : '',
        qualification : '',
        
        responsibilities : {
            1 : 'Design, develop, and execute test plans, test cases, and test scripts to thoroughly test software applications for functionality, performance, reliability, and scalability.',
            2  : 'Drive QA processes, standards, and methodologies to ensure consistent and high-quality deliverables.',
            3  : 'Collaborate closely with cross-functional teams, including software developers, product managers, and project managers, to identify and resolve quality issues in a timely manner.',
            4  : 'Monitor and analyze test results, identify trends, and provide recommendations for continuous improvement.',
            5  : 'Stay updated on industry trends, emerging technologies, and best practices in QA/testing methodologies to drive innovation and improvement.',
        },
    
        skillsEligibility : {
            1 : "Bachelor's degree in Computer Science, Engineering, or related field.",
            2 : 'Effective communication and interpersonal skills, with the ability to collaborate with cross-functional teams.',
            3 : 'Ability to work independently and manage multiple priorities in a fast-paced environment.',
            4 : 'Excellent analytical and problem-solving skills, with a keen attention to detail.',
            5 : 'Proven leadership abilities, with a track record of successfully leading and mentoring QA teams.',
            6 : 'Strong knowledge of software testing methodologies, tools, and techniques.',
        },
    
        howToApply : {
            1 : 'Read Job Description',
            2 : 'Click on below APPLY LINK',
            3 : 'Redirects to official page',
            4 : 'Fill formand APPLY'
        },
    
        jobApplyURL : 'https://careers.servicenow.com/en/jobs/744000000634596/software-quality-engineer/?trid=2d92f286-613b-4daf-9dfa-6340ffbecf73',
        telegramChannelURL : '',
        whatsAppChannelURL : '',
        imstagramChannelURL : '',
    }
}


const value = document.querySelector('#companyNameHtml').textContent;
console.log(value);
const objname = Object.keys(obj);
console.log(objname.toString());

function htmlCodeExecute(value, o){
    console.log('...0');    console.log(o);
    const html = `
    <div class="content">
            <p class="job-title">
                '${o.jobTitle}'
            </p>
            <div class="details">
                <span class="ti">Updated by : @JobUpdatesPortal,</span>
                <span>an hours ago</span>
            </div> 
            
            <img src="${o.imgSrc}" alt="" srcset="">
        
            <div class="Telegram-whatsapp">
                <img src="${o.imgSrcTelegram}" alt="telegram" srcset="">
                <img src="${o.imgSrcWhatsapp}" alt="" srcset="">
            </div> 
            <p class="description">
                ${o.description}
            </p>
            <h2>Job Description</h2>
            <table>
                <tr>
                    <td class="heading">Company Name</td>
                    <td >${o.companyName}</td>
                </tr>
                <tr>
                    <td>Role</td>
                    <td>${o.role}</td>
                </tr>
                <tr>
                    <td>Location</td>
                    <td>${o.location}</td>
                </tr>
                <tr>
                    <td>Experience</td>
                    <td>${o.experience}</td>
                </tr>
                <tr>
                    <td>Qualification</td>
                    <td>${o.qualification}</td>
                </tr>
            </table>
    
            
            <h2>Responsibilities</h2>
            <p class="Responsibilities">
                <ul>
                    <li>${o.responsibilities[1]}</li>
                    <li>${o.responsibilities[2]}</li>
                    <li>${o.responsibilities[3]}</li>
                    <li>${o.responsibilities[4]}</li>
                    <li>${o.responsibilities[5]}</li>
                </ul>
            </p>
    
    
            
            <h2>Skills & Eligibility Criteria</h2>
            <p class="Responsibilities">
                <ul><li>${o.skillsEligibility[1]}</li>
                    <li>${o.skillsEligibility[2]}</li>
                    <li>${o.skillsEligibility[3]}</li>
                    <li>${o.skillsEligibility[4]}</li>
                    <li>${o.skillsEligibility[5]}</li>
                    <li>${o.skillsEligibility[6]}</li>
                </ul>
            </p>
    
    
    
            <h2>How to Apply?</h2>
            <p class="Responsibilities">
                <ul><li>${o.howToApply[1]}</li>
                    <li>${o.howToApply[2]}</li>
                    <li>${o.howToApply[3]}</li>
                    <li>${o.howToApply[4]}</li>
                </ul>
            </p>
    
    
    
            <h2 >Application Link : <a href="${o.jobApplyURL}">Read More </a></h2>
            <h2 >Join Telegram community: <a href="${o.telegramChannelURL}">Read More </a></h2>
            <h2 >Join WhatsApp community : <a href="${o.whatsAppChannelURL}">Read More </a></h2>
            <h2 >Follow Instagram : <a href="${o.imstagramChannelURL}">Read More </a></h2>
            
    
    
    </div>
    `;
    
    document.querySelector('#main-content').insertAdjacentHTML('afterbegin',html);
}





if(value===objname.toString()){
    htmlCodeExecute(value,obj+`.${value}`);
}



















































































// const obj = {
//     jobTitle : 'Apply Now | ServiceNow is hiring for Software Quality Engineer  !',
//     imgSrc : 'https://d2djobalerts.github.io/images/serviceNow-logo.png',
//     imgSrcTelegram : 'https://d2djobalerts.github.io/images/Telegram-join-image.png',
//     imgSrcWhatsapp : 'https://d2djobalerts.github.io/images/Whatsapp-join-image.png',
//     description : 'ServiceNow is looking for Software Quality Engineer with bachelors degree as qualification. The complete information like qualification, skills, etc are provided below.',
//     companyName : 'ServiceNow',
//     role : '',
//     location : '',
//     experience : '',
//     qualification : '',
    
//     responsibilities : {
//         1 : 'Design, develop, and execute test plans, test cases, and test scripts to thoroughly test software applications for functionality, performance, reliability, and scalability.',
//         2  : 'Drive QA processes, standards, and methodologies to ensure consistent and high-quality deliverables.',
//         3  : 'Collaborate closely with cross-functional teams, including software developers, product managers, and project managers, to identify and resolve quality issues in a timely manner.',
//         4  : 'Monitor and analyze test results, identify trends, and provide recommendations for continuous improvement.',
//         5  : 'Stay updated on industry trends, emerging technologies, and best practices in QA/testing methodologies to drive innovation and improvement.',
//     },

//     skillsEligibility : {
//         1 : "Bachelor's degree in Computer Science, Engineering, or related field.",
//         2 : 'Effective communication and interpersonal skills, with the ability to collaborate with cross-functional teams.',
//         3 : 'Ability to work independently and manage multiple priorities in a fast-paced environment.',
//         4 : 'Excellent analytical and problem-solving skills, with a keen attention to detail.',
//         5 : 'Proven leadership abilities, with a track record of successfully leading and mentoring QA teams.',
//         6 : 'Strong knowledge of software testing methodologies, tools, and techniques.',
//     },

//     howToApply : {
//         1 : 'Read Job Description',
//         2 : 'Click on below APPLY LINK',
//         3 : 'Redirects to official page',
//         4 : 'Fill formand APPLY'
//     },

//     jobApplyURL : 'https://careers.servicenow.com/en/jobs/744000000634596/software-quality-engineer/?trid=2d92f286-613b-4daf-9dfa-6340ffbecf73',
//     telegramChannelURL : '',
//     whatsAppChannelURL : '',
//     imstagramChannelURL : '',
// }





// const html = `
// <div class="content">
//         <p class="job-title">
//             ${obj.serviceNow.jobTitle}
//         </p>
//         <div class="details">
//             <span class="ti">Updated by : @JobUpdatesPortal,</span>
//             <span>an hours ago</span>
//         </div> 
        
//         <img src="${obj.serviceNow.imgSrc}" alt="" srcset="">
    
//         <div class="Telegram-whatsapp">
//             <img src="${obj.serviceNow.imgSrcTelegram}" alt="telegram" srcset="">
//             <img src="${obj.serviceNow.imgSrcWhatsapp}" alt="" srcset="">
//         </div> 
//         <p class="description">
//             ${obj.serviceNow.description}
//         </p>
//         <h2>Job Description</h2>
//         <table>
//             <tr>
//                 <td class="heading">Company Name</td>
//                 <td >${obj.serviceNow.companyName}</td>
//             </tr>
//             <tr>
//                 <td>Role</td>
//                 <td>${obj.serviceNow.role}</td>
//             </tr>
//             <tr>
//                 <td>Location</td>
//                 <td>${obj.serviceNow.location}</td>
//             </tr>
//             <tr>
//                 <td>Experience</td>
//                 <td>${obj.serviceNow.experience}</td>
//             </tr>
//             <tr>
//                 <td>Qualification</td>
//                 <td>${obj.serviceNow.qualification}</td>
//             </tr>
//         </table>

        
//         <h2>Responsibilities</h2>
//         <p class="Responsibilities">
//             <ul>
//                 <li>${obj.serviceNow.responsibilities[1]}</li>
//                 <li>${obj.serviceNow.responsibilities[2]}</li>
//                 <li>${obj.serviceNow.responsibilities[3]}</li>
//                 <li>${obj.serviceNow.responsibilities[4]}</li>
//                 <li>${obj.serviceNow.responsibilities[5]}</li>
//             </ul>
//         </p>


        
//         <h2>Skills & Eligibility Criteria</h2>
//         <p class="Responsibilities">
//             <ul><li>${obj.serviceNow.skillsEligibility[1]}</li>
//                 <li>${obj.serviceNow.skillsEligibility[2]}</li>
//                 <li>${obj.serviceNow.skillsEligibility[3]}</li>
//                 <li>${obj.serviceNow.skillsEligibility[4]}</li>
//                 <li>${obj.serviceNow.skillsEligibility[5]}</li>
//                 <li>${obj.serviceNow.skillsEligibility[6]}</li>
//             </ul>
//         </p>



//         <h2>How to Apply?</h2>
//         <p class="Responsibilities">
//             <ul><li>${obj.serviceNow.howToApply[1]}</li>
//                 <li>${obj.serviceNow.howToApply[2]}</li>
//                 <li>${obj.serviceNow.howToApply[3]}</li>
//                 <li>${obj.serviceNow.howToApply[4]}</li>
//             </ul>
//         </p>



//         <h2 >Application Link : <a href="${obj.serviceNow.jobApplyURL}">Read More </a></h2>
//         <h2 >Join Telegram community: <a href="${obj.serviceNow.telegramChannelURL}">Read More </a></h2>
//         <h2 >Join WhatsApp community : <a href="${obj.serviceNow.whatsAppChannelURL}">Read More </a></h2>
//         <h2 >Follow Instagram : <a href="${obj.serviceNow.imstagramChannelURL}">Read More </a></h2>
        


// </div>
// `;

// document.querySelector('#main-content').insertAdjacentHTML('afterbegin',html);

































/////////////////////////////////////////////////////////////////////

// worked this code


const obj = {
    serviceNow : {
        jobTitle : 'Apply Now | ServiceNow is hiring for Software Quality Engineer  !',
        imgSrc : 'https://d2djobalerts.github.io/images/serviceNow-logo.png',
        imgSrcTelegram : 'https://d2djobalerts.github.io/images/Telegram-join-image.png',
        imgSrcWhatsapp : 'https://d2djobalerts.github.io/images/Whatsapp-join-image.png',
        description : 'ServiceNow is looking for Software Quality Engineer with bachelors degree as qualification. The complete information like qualification, skills, etc are provided below.',
        companyName : 'ServiceNow',
        role : '',
        location : '',
        experience : '',
        qualification : '',
        
        responsibilities : {
            1 : 'Design, develop, and execute test plans, test cases, and test scripts to thoroughly test software applications for functionality, performance, reliability, and scalability.',
            2  : 'Drive QA processes, standards, and methodologies to ensure consistent and high-quality deliverables.',
            3  : 'Collaborate closely with cross-functional teams, including software developers, product managers, and project managers, to identify and resolve quality issues in a timely manner.',
            4  : 'Monitor and analyze test results, identify trends, and provide recommendations for continuous improvement.',
            5  : 'Stay updated on industry trends, emerging technologies, and best practices in QA/testing methodologies to drive innovation and improvement.',
        },
    
        skillsEligibility : {
            1 : "Bachelor's degree in Computer Science, Engineering, or related field.",
            2 : 'Effective communication and interpersonal skills, with the ability to collaborate with cross-functional teams.',
            3 : 'Ability to work independently and manage multiple priorities in a fast-paced environment.',
            4 : 'Excellent analytical and problem-solving skills, with a keen attention to detail.',
            5 : 'Proven leadership abilities, with a track record of successfully leading and mentoring QA teams.',
            6 : 'Strong knowledge of software testing methodologies, tools, and techniques.',
        },
    
        howToApply : {
            1 : 'Read Job Description',
            2 : 'Click on below APPLY LINK',
            3 : 'Redirects to official page',
            4 : 'Fill formand APPLY'
        },
    
        jobApplyURL : 'https://careers.servicenow.com/en/jobs/744000000634596/software-quality-engineer/?trid=2d92f286-613b-4daf-9dfa-6340ffbecf73',
        telegramChannelURL : '',
        whatsAppChannelURL : '',
        imstagramChannelURL : '',
    }
}


const value = document.querySelector('#companyNameHtml').textContent;
console.log(value);
const objname = Object.keys(obj);
console.log(objname.toString());

function htmlCodeExecute(value, o){
    console.log('...0');    console.log(o);
    const html = `
    <div class="content">
            <p class="job-title">
                '${o.jobTitle}'
            </p>
            <div class="details">
                <span class="ti">Updated by : @JobUpdatesPortal,</span>
                <span>an hours ago</span>
            </div> 
            
            <img src="${o.imgSrc}" alt="" srcset="">
        
            <div class="Telegram-whatsapp">
                <img src="${o.imgSrcTelegram}" alt="telegram" srcset="">
                <img src="${o.imgSrcWhatsapp}" alt="" srcset="">
            </div> 
            <p class="description">
                ${o.description}
            </p>
            <h2>Job Description</h2>
            <table>
                <tr>
                    <td class="heading">Company Name</td>
                    <td >${o.companyName}</td>
                </tr>
                <tr>
                    <td>Role</td>
                    <td>${o.role}</td>
                </tr>
                <tr>
                    <td>Location</td>
                    <td>${o.location}</td>
                </tr>
                <tr>
                    <td>Experience</td>
                    <td>${o.experience}</td>
                </tr>
                <tr>
                    <td>Qualification</td>
                    <td>${o.qualification}</td>
                </tr>
            </table>
    
            
            <h2>Responsibilities</h2>
            <p class="Responsibilities">
                <ul>
                    <li>${o.responsibilities[1]}</li>
                    <li>${o.responsibilities[2]}</li>
                    <li>${o.responsibilities[3]}</li>
                    <li>${o.responsibilities[4]}</li>
                    <li>${o.responsibilities[5]}</li>
                </ul>
            </p>
    
    
            
            <h2>Skills & Eligibility Criteria</h2>
            <p class="Responsibilities">
                <ul><li>${o.skillsEligibility[1]}</li>
                    <li>${o.skillsEligibility[2]}</li>
                    <li>${o.skillsEligibility[3]}</li>
                    <li>${o.skillsEligibility[4]}</li>
                    <li>${o.skillsEligibility[5]}</li>
                    <li>${o.skillsEligibility[6]}</li>
                </ul>
            </p>
    
    
    
            <h2>How to Apply?</h2>
            <p class="Responsibilities">
                <ul><li>${o.howToApply[1]}</li>
                    <li>${o.howToApply[2]}</li>
                    <li>${o.howToApply[3]}</li>
                    <li>${o.howToApply[4]}</li>
                </ul>
            </p>
    
    
    
            <h2 >Application Link : <a href="${o.jobApplyURL}">Read More </a></h2>
            <h2 >Join Telegram community: <a href="${o.telegramChannelURL}">Read More </a></h2>
            <h2 >Join WhatsApp community : <a href="${o.whatsAppChannelURL}">Read More </a></h2>
            <h2 >Follow Instagram : <a href="${o.imstagramChannelURL}">Read More </a></h2>
            
    
    
    </div>
    `;
    
    document.querySelector('#main-content').insertAdjacentHTML('afterbegin',html);
}





if(value===objname.toString()){
    htmlCodeExecute(value,obj[value]);
}


////////////////////////////////////////
// worked this code end-------------












