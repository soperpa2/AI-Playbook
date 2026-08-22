/**
 * Essentials curriculum projection. Module content is never authored here:
 * stable IDs select complete records from the Full Version's canonical data.
 */
const essentialsModuleCourseIds=["INT 100","INT 105","INT 190","INT 200","INT 250","GOV 100","GOV 110","COM 200","COM 210"];
const modules=essentialsModuleCourseIds.map(courseId=>(window.CURRICULUM_DATA?.modules||[]).find(module=>module.course_id===courseId)).filter(Boolean);
const esc=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
const overview=module=>(module.sections||[]).find(section=>section.key==="training_overview")?.paragraphs?.[0]||module.prerequisite_summary||"Open the complete module for learning and application guidance.";

const catalog=document.querySelector("#module-catalog");
if(catalog)catalog.innerHTML=`<div class="catalog-heading"><p class="eyebrow">Nine core modules</p><h2>Required foundation for the public health workforce</h2></div><div class="module-grid">${modules.map((module,index)=>`<article><div class="module-meta"><span>${String(index+1).padStart(2,"0")}</span><b>${esc(module.course_id)}</b></div><h3><a href="module.html?id=${module.id}">${esc(module.title)}</a></h3><p>${esc(overview(module))}</p><small>${esc(module.level_label||"Learning module")}</small><a class="module-link" href="module.html?id=${module.id}">Open complete module →</a></article>`).join("")}</div>`;

const moduleMain=document.querySelector("#module-main");
if(moduleMain&&modules.length){
 const requestedId=new URLSearchParams(location.search).get("id")||"int-100",module=modules.find(item=>item.id===requestedId||item.course_id.toLowerCase().replace(/\s+/g,"-")===requestedId)||modules[0],index=modules.indexOf(module);
 const member=JSON.parse(localStorage.getItem("foundation-member-profile")||"null"),savedProgress=JSON.parse(localStorage.getItem("foundation-learning-progress")||"{}"),complete=Boolean(savedProgress[module.course_id]?.completed);
 const progress=`<section class="content-section"><p class="eyebrow">My Account progress</p><h2>Track this Essentials module</h2>${member?`<p id="foundation-course-status">${complete?"Recorded as completed in My Account.":"When you finish this module, record it in My Account."}</p><button class="button primary" id="foundation-course-complete" type="button">${complete?"Mark as not completed":"Mark module completed"}</button>`:`<p>Free membership is required to track module completion.</p><a class="button primary" href="account.html">Create Free Account</a>`}</section>`;
 document.title=`${module.title} | Public Health AI Playbook`;
 moduleMain.innerHTML=`<section class="page course-page"><p><a href="learning.html">Learning catalog</a> / ${esc(module.course_id)}</p><div class="learn-layout"><nav class="module-side-nav" aria-label="Essentials learning modules"><h2>Essentials modules</h2>${modules.map(item=>`<a href="module.html?id=${item.id}" ${item.id===module.id?'aria-current="page"':""}>${esc(item.course_id)}: ${esc(item.title)}</a>`).join("")}</nav><div>${window.PlaybookCurriculumModuleTemplate.render(module,{progress})}</div></div><nav class="pager">${index>0?`<a href="module.html?id=${modules[index-1].id}">← Previous module</a>`:"<span></span>"}<a href="learning.html">All Essentials modules</a>${index<modules.length-1?`<a href="module.html?id=${modules[index+1].id}">Next module →</a>`:"<span></span>"}</nav></section>`;
 document.querySelector("#foundation-course-complete")?.addEventListener("click",()=>{const state=JSON.parse(localStorage.getItem("foundation-learning-progress")||"{}"),nowComplete=!Boolean(state[module.course_id]?.completed);state[module.course_id]={completed:nowComplete,updatedAt:new Date().toLocaleString()};localStorage.setItem("foundation-learning-progress",JSON.stringify(state));document.querySelector("#foundation-course-status").textContent=nowComplete?"Recorded as completed in My Account.":"Module completion removed from My Account.";document.querySelector("#foundation-course-complete").textContent=nowComplete?"Mark as not completed":"Mark module completed";});
}
