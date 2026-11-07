const $=id=>document.getElementById(id);
const prices={'AC repair':'QAR 80+','Plumbing':'QAR 50+','Laptop repair':'QAR 40+','Phone repair':'QAR 30+'};
const services=[
['AC & cooling','AC repair','ac air conditioner cooling','ac'],
['Plumbing','Plumbing','plumbing plumber pipe leak tap water','plumb'],
['Laptop repair','Laptop repair','laptop computer pc notebook','laptop'],
['Phone repair','Phone repair','phone mobile smartphone screen battery','phone'],
['Electrical','Electrical work','electrical electrician socket wiring','bolt'],
['Appliances','Appliance repair','appliance washing machine fridge oven','appl'],
['Home maintenance','Home maintenance','home maintenance handyman general repair','home'],
['Emergency visit','Emergency visit','emergency urgent technician visit','alert']];
const art={
ac:`<svg viewBox="0 0 180 170"><path d="M15 123c30-16 48-11 68 0s43 13 79-3" stroke="#56b4e0" stroke-width="2" opacity=".35" fill="none"/><path d="M24 137c27-12 46-9 65 1s42 10 75-2" stroke="#56b4e0" stroke-width="2" opacity=".22" fill="none"/><rect x="46" y="54" width="111" height="43" rx="8" fill="#ececf2" stroke="#a8a9b7" stroke-width="2"/><rect x="54" y="62" width="95" height="7" rx="3.5" fill="#c7c8d2"/><path d="M59 80h87M59 86h87" stroke="#9da1b0" stroke-width="2" stroke-linecap="round"/><circle cx="139" cy="77" r="3" fill="#52b5dd"/><path d="M72 105v8m57-8v8" stroke="#85899a" stroke-width="3" stroke-linecap="round"/><path d="M72 116c-6 8-6 13 0 18m57-18c-6 8-6 13 0 18" stroke="#6fc2e4" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M37 44c-6 7-6 14 0 21m118-21c-6 7-6 14 0 21" stroke="#7cd5f2" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/></svg>`,
phone:`<svg viewBox="0 0 180 170"><rect x="70" y="21" width="65" height="126" rx="13" fill="#09090e" stroke="#777184" stroke-width="2" transform="rotate(8 102 84)"/><rect x="76" y="29" width="53" height="108" rx="8" fill="#262130" transform="rotate(8 102 84)"/><path d="M89 45h29m-27 7h22" stroke="#a68aff" stroke-width="3" stroke-linecap="round" transform="rotate(8 102 84)"/><rect x="87" y="66" width="33" height="49" rx="5" fill="#4b2e7f" transform="rotate(8 102 84)"/><path d="m95 103 12-20 10 11" stroke="#d6c6ff" stroke-width="3" fill="none" stroke-linecap="round" transform="rotate(8 102 84)"/><circle cx="106" cy="133" r="2" fill="#b9a5ef"/></svg>`,
plumb:`<svg viewBox="0 0 180 170"><path d="M60 42v31a18 18 0 0 0 18 18h24a18 18 0 0 1 18 18v20" fill="none" stroke="#bdc9ce" stroke-width="13" stroke-linecap="round"/><path d="M60 42v31a18 18 0 0 0 18 18h24a18 18 0 0 1 18 18v20" fill="none" stroke="#65747d" stroke-width="3" stroke-linecap="round"/><path d="M45 39h30m-25-9h20m-15 0V20h10v10" stroke="#dce3e6" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M120 130c0-9 10-17 10-27 0 10 10 18 10 27a10 10 0 1 1-20 0Z" fill="#6ad3c1"/><path d="M145 53c-5 7-5 13 0 20" stroke="#72d2c3" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`,
appl:`<svg viewBox="0 0 180 170"><rect x="48" y="25" width="86" height="125" rx="9" fill="#d9d7e2" stroke="#92909f" stroke-width="2"/><rect x="56" y="34" width="70" height="22" rx="4" fill="#aaa8b8"/><circle cx="91" cy="101" r="31" fill="#34303c" stroke="#8c8999" stroke-width="5"/><circle cx="91" cy="101" r="23" fill="#6b9fb1"/><path d="M75 99c8-10 22-10 32 0m-27 10c7 7 17 7 24 0" fill="none" stroke="#c6e7eb" stroke-width="3" stroke-linecap="round"/><circle cx="115" cy="45" r="3" fill="#6fc2a5"/></svg>`};
// [title, service, tag, art, blurb, price label, amount]
const popular=[
['AC deep cleaning','AC repair','AC & cooling','ac','Bring back the cool air.','From','QAR 80'],
['Screen replacement','Phone repair','Phone repair','phone','Careful repairs, clear warranty.','Diagnostics from','QAR 30'],
['Leak detection and repair','Plumbing','Plumbing','plumb','Find the cause before it spreads.','Inspection from','QAR 50'],
['Washing machine repair','Appliance repair','Appliances','appl','Get your laundry routine back on track.','Pricing','Request a quote']];
const icon=n=>'<svg class="ic"><use href="#i-'+n+'"/></svg>';

$('catGrid').innerHTML=services.map((s,i)=>'<button class="cat enter" style="--i:'+i+'" data-search="'+s[2]+'" data-cat="'+s[1]+'"><span class="cat-tile">'+icon(s[3])+'</span><span class="label">'+s[0]+'</span></button>').join('');
$('popGrid').innerHTML=popular.map((p,i)=>'<button class="pop enter" style="--i:'+(i+8)+'" data-cat="'+p[1]+'"><span class="pop-copy"><span class="label" style="color:var(--accent-text)">'+p[2]+'</span><span class="h-lg">'+p[0]+'</span><span class="label muted">'+p[4]+'</span><span class="price-line label muted">'+p[5]+' <strong class="h-md" style="color:var(--text)">'+p[6]+'</strong></span></span><span class="pop-art" aria-hidden="true">'+art[p[3]]+'</span></button>').join('');

document.querySelectorAll('[data-cat]').forEach(b=>b.addEventListener('click',()=>openBooking(b.dataset.cat)));

function openModal(id){$(id).classList.add('show')}
function closeModal(id){$(id).classList.remove('show')}
function backdropClose(e,id){if(e.target.id===id)closeModal(id)}
function go(id){$(id).scrollIntoView({behavior:'smooth',block:'start'});document.querySelectorAll('.nav button').forEach((b,i)=>b.classList.toggle('on',(id==='home'&&i===0)||(id==='categories'&&i===1)))}
let step=0;
const desc={'AC repair':'Cleaning, gas and cooling faults','Plumbing':'Leaks, taps and drains','Laptop repair':'Diagnostics and repairs','Phone repair':'Screens, batteries and diagnostics','Electrical work':'Sockets, wiring and fittings','Appliance repair':'Washers, fridges and ovens','Home maintenance':'General fixes around the home','Emergency visit':'Urgent callout'};

const technicians = {
  'AC repair':[
    {id:'ac1',name:'CoolCare Qatar',person:'Rahul Menon',price:120,rating:'4.9',reviews:128,jobs:342,years:8,area:'Doha · Al Sadd',verified:true,work:['AC deep cleaning','Gas refill','Cooling fault diagnosis'],bio:'Specialist AC maintenance team serving homes across Doha.',reviewList:[['Mariam A.','Quick, professional and explained the issue before starting.'],['Fahad K.','Arrived on time. AC is cooling properly again.']]},
    {id:'ac2',name:'BreezeFix Services',person:'Imran K.',price:95,rating:'4.7',reviews:86,jobs:211,years:6,area:'Doha · Bin Mahmoud',verified:true,work:['Split AC repair','Filter cleaning','Thermostat checks'],bio:'Residential AC repair with clear estimates and tidy work.',reviewList:[['Sara M.','Fair price and good communication.'],['Omar R.','The technician was careful and efficient.']]}
  ],
  'Plumbing':[
    {id:'pl1',name:'AquaFlow Plumbing',person:'Nabeel S.',price:75,rating:'4.9',reviews:94,jobs:260,years:7,area:'Doha · Al Mansoura',verified:true,work:['Leak detection','Tap replacement','Drain clearing'],bio:'Everyday plumbing repairs and leak troubleshooting.',reviewList:[['Huda A.','Found the leak quickly and cleaned up after.'],['Khalid B.','Transparent quote and neat work.']]},
    {id:'pl2',name:'PipePro Qatar',person:'Joseph T.',price:60,rating:'4.6',reviews:71,jobs:183,years:5,area:'Doha · Najma',verified:true,work:['Pipe repair','Bathroom fittings','Blocked drains'],bio:'A local plumbing technician focused on practical repairs.',reviewList:[['Noora S.','Good service and reasonable price.'],['Ali M.','Fixed the problem on the same visit.']]}
  ],
  'Laptop repair':[
    {id:'lt1',name:'ByteCare Workshop',person:'Arjun P.',price:80,rating:'4.8',reviews:112,jobs:298,years:9,area:'Doha · Msheireb',verified:true,work:['Laptop diagnostics','Keyboard replacement','SSD upgrades'],bio:'Laptop troubleshooting, component replacement and maintenance.',reviewList:[['Yousef H.','Diagnosed the issue before suggesting a repair.'],['Lina F.','Helpful and professional.']]},
    {id:'lt2',name:'TechBench Doha',person:'Mohan R.',price:55,rating:'4.7',reviews:67,jobs:156,years:5,area:'Doha · Al Sadd',verified:true,work:['Windows issues','Battery replacement','Hardware checks'],bio:'Straightforward laptop repair and diagnostics.',reviewList:[['Aisha N.','Quick turnaround and clear updates.'],['Saif D.','Good value for money.']]}
  ],
  'Phone repair':[
    {id:'ph1',name:'MobileMedic',person:'Bilal A.',price:110,rating:'4.9',reviews:143,jobs:390,years:8,area:'Doha · Al Sadd',verified:true,work:['Screen replacement','Battery replacement','Charging port repair'],bio:'Mobile device repairs with parts and warranty options explained upfront.',reviewList:[['Dana R.','Screen looks perfect and repair was quick.'],['Hamad J.','Explained the part options clearly.']]},
    {id:'ph2',name:'QuickFix Mobiles',person:'Kevin D.',price:85,rating:'4.6',reviews:78,jobs:204,years:6,area:'Doha · Old Airport',verified:true,work:['Screen repair','Battery diagnostics','Speaker repair'],bio:'Phone diagnostics and common hardware repairs.',reviewList:[['Maha S.','Friendly service and fair price.'],['Rashid E.','Kept me updated throughout.']]}
  ],
  'Electrical work':[
    {id:'el1',name:'SafeSpark Electrical',person:'Sajith P.',price:90,rating:'4.8',reviews:83,jobs:240,years:7,area:'Doha · Al Hilal',verified:true,work:['Socket repair','Light fitting','Wiring checks'],bio:'Home electrical maintenance with safety-first inspections.',reviewList:[['Amal K.','Careful work and clear explanation.'],['Tariq M.','Resolved the socket issue.']]},
    {id:'el2',name:'VoltWorks',person:'Rafi M.',price:70,rating:'4.7',reviews:59,jobs:171,years:5,area:'Doha · Al Mansoura',verified:true,work:['Switch replacement','Circuit checks','Fan installation'],bio:'Small electrical jobs and home maintenance.',reviewList:[['Mariam J.','Arrived when promised.'],['Nasser A.','Good service.']]}
  ],
  'Appliance repair':[
    {id:'ap1',name:'HomeAppliance Care',person:'Deepak V.',price:95,rating:'4.9',reviews:101,jobs:276,years:8,area:'Doha · Al Sadd',verified:true,work:['Washing machine repair','Fridge repair','Oven repair'],bio:'Repairs for common household appliances with diagnosis before replacement.',reviewList:[['Reem S.','Washing machine fixed in one visit.'],['Abdullah T.','Explained what failed and why.']]},
    {id:'ap2',name:'ApplianceFix Doha',person:'Manoj K.',price:75,rating:'4.6',reviews:64,jobs:190,years:6,area:'Doha · Najma',verified:true,work:['Washer drainage faults','Fridge cooling','Appliance diagnostics'],bio:'Practical appliance troubleshooting and repair.',reviewList:[['Fatima L.','Good communication and fair quote.'],['Hassan Q.','Problem solved without unnecessary parts.']]}
  ],
  'Home maintenance':[
    {id:'hm1',name:'HandyHome Qatar',person:'Ramesh B.',price:80,rating:'4.8',reviews:92,jobs:310,years:8,area:'Doha · Al Waab',verified:true,work:['Furniture assembly','Door repairs','General fixes'],bio:'Reliable help for everyday home maintenance tasks.',reviewList:[['Noor A.','Very helpful and neat work.'],['Salem F.','Completed several small jobs in one visit.']]},
    {id:'hm2',name:'HomeTask Services',person:'Anees K.',price:65,rating:'4.7',reviews:48,jobs:145,years:4,area:'Doha · Bin Mahmoud',verified:true,work:['Mounting','Minor repairs','Silicone and sealing'],bio:'Small household repairs and installations.',reviewList:[['Layla M.','Friendly and efficient.'],['Omar N.','Good experience overall.']]}
  ],
  'Emergency visit':[
    {id:'em1',name:'RapidResponse Qatar',person:'Shafi M.',price:150,rating:'4.8',reviews:76,jobs:220,years:7,area:'Doha · Central Doha',verified:true,work:['Urgent callouts','Initial fault checks','Home repairs'],bio:'Urgent home repair callouts. Final repair cost is confirmed after inspection.',reviewList:[['Hessa R.','Responded quickly.'],['Faisal A.','Clear about the callout fee.']]}
  ]
};

// Additional SAMPLE records for the clickable demo marketplace.
// Names, prices, ratings, jobs and reviews below are fictional placeholder data.
const extraDemoTechnicians = {
  'AC repair':[
    {id:'ac3',name:'ArcticAir Maintenance',person:'Sameer P.',price:110,rating:'4.8',reviews:63,jobs:174,years:6,area:'Doha · Al Gharrafa',verified:true,work:['AC servicing','Cooling inspection','Drain line cleaning'],bio:'Demo provider specialising in residential AC servicing.',reviewList:[['Demo customer','Clear explanation and tidy work.'],['Demo customer','Good communication from start to finish.']]},
    {id:'ac4',name:'PolarCool Repairs',person:'Vishnu R.',price:140,rating:'4.9',reviews:91,jobs:238,years:10,area:'Doha · The Pearl',verified:true,work:['AC compressor checks','Deep cleaning','Thermostat faults'],bio:'Demo provider for split and central AC troubleshooting.',reviewList:[['Demo customer','Professional and punctual.'],['Demo customer','The repair options were explained clearly.']]}
  ],
  'Plumbing':[
    {id:'pl3',name:'ClearPipe Services',person:'Anwar M.',price:85,rating:'4.8',reviews:52,jobs:148,years:6,area:'Doha · Al Thumama',verified:true,work:['Water leak repairs','Mixer replacement','Drain inspection'],bio:'Demo plumbing provider for common home repairs.',reviewList:[['Demo customer','Found the source of the leak quickly.'],['Demo customer','Fair quote and clean finish.']]},
    {id:'pl4',name:'Tap & Pipe Works',person:'Rajan K.',price:55,rating:'4.5',reviews:39,jobs:119,years:4,area:'Doha · Old Airport',verified:true,work:['Tap repairs','Toilet flush systems','Pipe fittings'],bio:'Demo provider for plumbing fixtures and small repairs.',reviewList:[['Demo customer','Helpful and easy to contact.'],['Demo customer','Completed the job as expected.']]}
  ],
  'Laptop repair':[
    {id:'lt3',name:'CircuitLab Qatar',person:'Faris A.',price:95,rating:'4.9',reviews:74,jobs:202,years:7,area:'Doha · West Bay',verified:true,work:['Motherboard diagnostics','Thermal servicing','SSD replacement'],bio:'Demo laptop workshop for hardware diagnostics and upgrades.',reviewList:[['Demo customer','Explained the diagnosis before quoting.'],['Demo customer','Laptop runs well after servicing.']]},
    {id:'lt4',name:'Laptop Lounge',person:'Sanjay D.',price:45,rating:'4.6',reviews:44,jobs:131,years:5,area:'Doha · Al Wakrah',verified:true,work:['Windows troubleshooting','Keyboard repair','Battery replacement'],bio:'Demo provider for laptop maintenance and common faults.',reviewList:[['Demo customer','Quick turnaround.'],['Demo customer','Good value and updates.']]}
  ],
  'Phone repair':[
    {id:'ph3',name:'ScreenSmith Mobile',person:'Zaid H.',price:125,rating:'4.8',reviews:88,jobs:249,years:7,area:'Doha · West Bay',verified:true,work:['OLED screen replacement','Charging port repair','Camera repair'],bio:'Demo phone repair provider for common smartphone faults.',reviewList:[['Demo customer','Screen quality was explained before repair.'],['Demo customer','Fast and careful service.']]},
    {id:'ph4',name:'PocketTech Repairs',person:'Nithin J.',price:70,rating:'4.6',reviews:57,jobs:162,years:5,area:'Doha · Al Rayyan',verified:true,work:['Battery replacement','Speaker repair','Device diagnostics'],bio:'Demo provider for smartphone diagnostics and component repairs.',reviewList:[['Demo customer','Friendly service.'],['Demo customer','The final price matched the quote.']]}
  ],
  'Electrical work':[
    {id:'el3',name:'QSafe Electrics',person:'Biju C.',price:105,rating:'4.9',reviews:61,jobs:186,years:8,area:'Doha · Al Waab',verified:true,work:['Electrical fault finding','DB checks','Socket replacement'],bio:'Demo electrical provider focused on safe household repairs.',reviewList:[['Demo customer','Took time to check the issue safely.'],['Demo customer','Very clear about the work required.']]},
    {id:'el4',name:'HomeVolt Services',person:'Muneer T.',price:65,rating:'4.5',reviews:33,jobs:102,years:4,area:'Doha · Al Mansoura',verified:true,work:['Switch replacement','Fan installation','Doorbell wiring'],bio:'Demo provider for small residential electrical jobs.',reviewList:[['Demo customer','Arrived on time.'],['Demo customer','Job completed neatly.']]}
  ],
  'Appliance repair':[
    {id:'ap3',name:'WasherWorks Doha',person:'Rohit N.',price:85,rating:'4.8',reviews:69,jobs:193,years:7,area:'Doha · Al Hilal',verified:true,work:['Washer drum issues','Drain pump repair','Spin cycle faults'],bio:'Demo appliance technician specialising in washing machines.',reviewList:[['Demo customer','Washer was working again after the visit.'],['Demo customer','Explained the part and labour costs.']]},
    {id:'ap4',name:'Reliable Appliance Hub',person:'Suresh L.',price:120,rating:'4.9',reviews:82,jobs:231,years:9,area:'Doha · Madinat Khalifa',verified:true,work:['Fridge cooling','Washer repair','Oven diagnostics'],bio:'Demo provider for household appliance troubleshooting.',reviewList:[['Demo customer','Careful diagnosis and good communication.'],['Demo customer','No surprise charges.']]}
  ],
  'Home maintenance':[
    {id:'hm3',name:'FixRight Home Services',person:'Ashraf E.',price:90,rating:'4.8',reviews:57,jobs:177,years:6,area:'Doha · Al Aziziyah',verified:true,work:['Curtain and shelf mounting','Door alignment','Minor carpentry'],bio:'Demo handyman provider for everyday home maintenance.',reviewList:[['Demo customer','Neat work and polite service.'],['Demo customer','Finished all requested small jobs.']]},
    {id:'hm4',name:'Neighbourhood Handyman',person:'Prakash S.',price:55,rating:'4.6',reviews:42,jobs:126,years:5,area:'Doha · Al Sadd',verified:true,work:['Furniture assembly','Silicone sealing','Minor fixture repairs'],bio:'Demo handyman for small household jobs.',reviewList:[['Demo customer','Good price and quick work.'],['Demo customer','Would use the service again.']]}
  ],
  'Emergency visit':[
    {id:'em2',name:'Doha Rapid Repairs',person:'Yasin R.',price:180,rating:'4.9',reviews:48,jobs:156,years:6,area:'Doha · Al Dafna',verified:true,work:['Urgent callouts','Initial safety checks','Emergency leak response'],bio:'Demo urgent callout provider. Final repair costs are confirmed after inspection.',reviewList:[['Demo customer','Quick response and clear callout fee.'],['Demo customer','Kept us informed.']]},
    {id:'em3',name:'OnCall Home Assist',person:'Midhun P.',price:130,rating:'4.6',reviews:35,jobs:109,years:4,area:'Doha · Al Thumama',verified:true,work:['Urgent home repairs','Fault checks','Temporary make-safe work'],bio:'Demo provider for urgent home repair requests.',reviewList:[['Demo customer','Helpful in an urgent situation.'],['Demo customer','Explained what needed follow-up.']]}
  ]
};
Object.entries(extraDemoTechnicians).forEach(([category, list]) => {
  technicians[category] = [...(technicians[category] || []), ...list];
});

let selectedTechnician = null;
let selectedStore = null;
const priceOf=c=>prices[c]||'Quote';
const repairStores={
  'Laptop repair':[
    {id:'store-lt1',name:'ByteCare Workshop',area:'Doha · Msheireb',hours:'Open today · 8:00 AM–10:00 PM',rating:'4.8',person:'Arjun P.'},
    {id:'store-lt2',name:'TechBench Doha',area:'Doha · Al Sadd',hours:'Open today · 9:00 AM–9:00 PM',rating:'4.7',person:'Mohan R.'}
  ],
  'Phone repair':[
    {id:'store-ph1',name:'MobileMedic',area:'Doha · Al Sadd',hours:'Open today · 8:00 AM–10:00 PM',rating:'4.9',person:'Bilal A.'},
    {id:'store-ph2',name:'QuickFix Mobiles',area:'Doha · Old Airport',hours:'Open today · 9:00 AM–11:00 PM',rating:'4.6',person:'Kevin D.'}
  ]
};
function renderTechnicians(){
  const storeVisit=document.querySelector('input[name="serviceMethod"]:checked')?.value==='store';
  if(storeVisit && repairStores[$('category').value]){
    const list=repairStores[$('category').value];
    $('providerSelectionHelp').textContent='Choose the repair store you want to visit. Store details and opening hours are shown below.';
    $('availablePros').innerHTML=list.map(store=>`<article class="pro-card ${selectedStore===store.id?'selected':''}">
      <div class="pro-avatar">${esc(store.name.split(' ').map(x=>x[0]).slice(0,2).join(''))}</div>
      <div class="pro-meta"><strong>${esc(store.name)}</strong><span class="label muted">★ ${store.rating} · ${esc(store.area)}</span><span class="label muted">${esc(store.hours)}</span><span class="label muted">Technician: ${esc(store.person)}</span></div>
      <div class="pro-actions"><button type="button" class="btn btn-primary" onclick="chooseStore('${store.id}')">${selectedStore===store.id?'Selected':'Choose store'}</button></div>
    </article>`).join('');
    $('selectedProNote').textContent=selectedStore?'Selected store: '+list.find(store=>store.id===selectedStore).name+'. Continue to enter your repair details.':'Choose a store to continue.';
    return;
  }
  $('providerSelectionHelp').textContent='Compare independent technicians, their prices and track records. Open a profile to see more details.';
  const list=technicians[$('category').value]||technicians['Home maintenance'];
  $('availablePros').innerHTML=list.map(t=>`<article class="pro-card ${selectedTechnician===t.id?'selected':''}">
    <div class="pro-avatar">${esc(t.name.split(' ').map(x=>x[0]).slice(0,2).join(''))}</div>
    <div class="pro-meta"><strong>${esc(t.name)} ${t.verified?'✓':''}</strong><span class="label muted">★ ${t.rating} · ${t.reviews} reviews · ${t.jobs} jobs</span><span class="label muted">${esc(t.area)}</span><strong class="h-md">QAR ${t.price}</strong></div>
    <div class="pro-actions"><button type="button" class="btn btn-outline" onclick="showTechnician('${t.id}')">Profile</button><button type="button" class="btn btn-primary" onclick="chooseTechnician('${t.id}')">${selectedTechnician===t.id?'Selected':'Choose'}</button></div>
  </article>`).join('');
  $('selectedProNote').textContent=selectedTechnician?'Selected: '+list.find(t=>t.id===selectedTechnician).name+'. Continue to confirm your request.':'Choose a technician to continue.';
}
function showTechnician(id){
  const t=Object.values(technicians).flat().find(x=>x.id===id); if(!t)return;
  $('techProfileContent').innerHTML=`<div class="pro-meta" style="margin-bottom:16px"><div class="pro-avatar">${esc(t.name.split(' ').map(x=>x[0]).slice(0,2).join(''))}</div><h3 class="h-lg">${esc(t.name)}</h3><p class="muted">${esc(t.person)} · ${t.verified?'Identity & skills checked':'Profile'}</p><p>★ ${t.rating} / 5 · ${t.reviews} customer reviews</p></div>
  <div class="profile-stats"><div class="profile-stat"><strong class="h-lg">${t.jobs}</strong><p class="label muted">Jobs done</p></div><div class="profile-stat"><strong class="h-lg">${t.years} yrs</strong><p class="label muted">Experience</p></div><div class="profile-stat"><strong class="h-lg">QAR ${t.price}</strong><p class="label muted">Starting price</p></div></div>
  <div style="display:grid;gap:8px;margin:16px 0">
  <div class="fairness-note"><strong>Balanced reviews</strong><p>Only completed, verified jobs can affect this score. A technician may respond publicly, and flagged reviews are checked by TrustQatar before they can reduce ratings.</p></div>
  <strong>About</strong><p class="muted">${esc(t.bio)}</p><strong>Past work</strong><ul>${t.work.map(w=>'<li>'+esc(w)+'</li>').join('')}</ul>
  <strong>Customer behavior rating</strong><div class="mutual-rating"><strong>4.9 ★</strong><span class="label muted">from ${Math.max(t.reviews-12,1)} mutually rated completed jobs</span></div>
  <strong>Recent customer reviews</strong>${t.reviewList.map((r,i)=>`<div class="review"><strong>${esc(r[0])}</strong><p class="muted">${esc(r[1])}</p><div class="technician-response"><strong>${esc(t.person)}'s response</strong><p>${esc(i===0?'I understand your concern and checked the job notes. This repair was completed according to the approved quote, and any remaining warranty is available through the store.':'Thank you for the feedback. I reviewed the customer notes and delivery time, and will use this feedback to improve my service.')}</p></div></div>`).join('')}</div>
  <button type="button" class="btn btn-primary btn-full" onclick="chooseTechnician('${t.id}');closeModal('techProfileModal')">Choose this technician · QAR ${t.price}</button>`;
  openModal('techProfileModal');
}
function chooseTechnician(id){selectedTechnician=id;selectedStore=null;renderTechnicians();showToast('Technician selected.');}
function chooseStore(id){
  selectedStore=id;
  selectedTechnician=null;
  renderTechnicians();
  const store=repairStores[$('category').value].find(x=>x.id===id);
  $('area').value=store.name+' · '+store.area;
  $('area').disabled=true;
  $('mapLocationStatus').textContent='Store selected · '+store.area;
  showToast('Store selected.');
}
function previewIssuePhotos(event){
  const files=[...event.target.files].filter(f=>f.type.startsWith('image/')).slice(0,5);
  $('issuePhotoPreview').innerHTML='';
  files.forEach(file=>{const img=document.createElement('img');img.alt=file.name;img.src=URL.createObjectURL(file);$('issuePhotoPreview').appendChild(img);});
  if(event.target.files.length>5)showToast('You can add up to 5 photos.');
}

$('opts').innerHTML=services.map(s=>'<button type="button" class="opt" role="radio" aria-checked="false" data-opt="'+s[1]+'"><span class="opt-icon">'+icon(s[3])+'</span><span class="opt-text"><strong class="h-md">'+s[0]+'</strong><span class="label muted">'+desc[s[1]]+'</span></span><span class="price">'+priceOf(s[1])+'</span></button>').join('');
document.querySelectorAll('.opt').forEach(o=>o.addEventListener('click',()=>pick(o.dataset.opt)));
function pick(c){$('category').value=c;document.querySelectorAll('.opt').forEach(o=>{const on=o.dataset.opt===c;o.classList.toggle('on',on);o.setAttribute('aria-checked',on)});updateQuote()}
function updateQuote(){const c=$('category').value;$('quote').textContent=c?priceOf(c):'Choose a service'}
function isLater(){return document.querySelector('input[name=when]:checked').value==='later'}
function whenText(){return isLater()?($('date').value+' '+$('time').value).trim():'As soon as possible'}
function toggleWhen(){$('laterFields').hidden=!isLater();$('date').required=isLater()}
function getSelectedProvider(){
  const storeVisit=document.querySelector('input[name="serviceMethod"]:checked')?.value==='store';
  if(storeVisit && selectedStore)return repairStores[$('category').value].find(x=>x.id===selectedStore)||null;
  return Object.values(technicians).flat().find(x=>x.id===selectedTechnician)||null;
}
function providerName(){const provider=getSelectedProvider();return provider?provider.name:'Not selected'}
function renderSummary(){const provider=getSelectedProvider();const store=['Laptop repair','Phone repair'].includes($('category').value)&&document.querySelector('input[name="serviceMethod"]:checked')?.value==='store';$('summary').innerHTML=[['Service : ',$('category').value],['Service option : ',store?'Visit the store':'Technician visits you'],['Location / store : ',store&&provider?provider.name+' · '+provider.area:$('area').value],['When : ',whenText()],['Technician or store : ',providerName()],['Starting price : ',provider&&provider.price?'QAR '+provider.price:priceOf($('category').value)]].map(r=>'<div class="row"><span class="muted">'+r[0]+'</span><strong>'+esc(r[1])+'</strong></div>').join('')}
function setStep(n){step=n;const panes=document.querySelectorAll('.pane');panes.forEach((p,i)=>{p.hidden=i!==n});document.querySelectorAll('.progress i').forEach((b,i)=>b.classList.toggle('on',i===0?n>=0:i===1?n>=1:i===2?n>=3:n>=3));$('bkBack').style.visibility=n?'visible':'hidden';$('submitBooking').textContent=n===2?'Request repair':'Continue';if(n===1)updateServiceMethod();if(n===2)renderSummary();if(n===3)renderTechnicians();const p=panes[n];p.classList.remove('enter-pane');void p.offsetWidth;p.classList.add('enter-pane')}
function valid(){const p=document.querySelectorAll('.pane')[step];if(step===0&&!$('category').value){showToast('Choose a service to continue.');return false}if(step===3){const storeVisit=document.querySelector('input[name="serviceMethod"]:checked')?.value==='store';if(storeVisit&&!selectedStore){showToast('Choose a store to continue.');return false}if(!storeVisit&&!selectedTechnician){showToast('Choose a technician to continue.');return false}}const bad=[...p.querySelectorAll('input,textarea')].find(x=>x.required&&!x.checkValidity());if(bad){bad.reportValidity();return false}return true}
function bkNext(){if(!valid())return;if(step===0)setStep(1);else if(step===1)setStep(3);else if(step===3)setStep(2);else $('bookingForm').requestSubmit()}
function bkBack(){if(step===2)setStep(3);else if(step===3)setStep(1);else if(step===1)setStep(0)}
function openBooking(cat){selectedTechnician=null;selectedStore=null;$('bookingForm').style.display='block';$('bookingSuccess').style.display='none';$('sheetTop').hidden=false;$('bookingForm').reset();$('issuePhotoPreview').innerHTML='';pickedMapPoint=null;$('mapLocationStatus').textContent='Or pin your exact location on the map.';$('mapCoords').textContent='No pin selected yet.';if(mapMarker&&mapInstance){mapInstance.removeLayer(mapMarker);mapMarker=null;}$('date').min=new Date().toISOString().slice(0,10);toggleWhen();pick(cat||'');setStep(cat?1:0);openModal('bookingModal')}

function updateServiceMethod(){
  const mobileRepair=['Laptop repair','Phone repair'].includes($('category').value);
  $('serviceMethodWrap').hidden=!mobileRepair;
  toggleServiceMethod();
}
function toggleServiceMethod(){
  const mobileRepair=['Laptop repair','Phone repair'].includes($('category').value);
  const store=mobileRepair && document.querySelector('input[name="serviceMethod"]:checked')?.value==='store';
  $('area').disabled=store;
  $('area').required=!store;
  selectedStore=null;
  selectedTechnician=null;
  if(store){$('area').value='';$('mapLocationStatus').textContent='Choose a store on the next page.';}
  else{$('area').value='';$('mapLocationStatus').textContent='Or pin your exact location on the map.';}
}


let mapInstance = null, mapMarker = null, pickedMapPoint = null;
function openMapPicker(){
  openModal('mapPickerModal');
  if(!window.L){
    const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';document.head.appendChild(css);
    const script=document.createElement('script');script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload=initLocationMap;script.onerror=()=>showToast('Map could not load. You can type your address instead.');document.head.appendChild(script);
  }else setTimeout(initLocationMap,80);
}
function initLocationMap(){
  if(!window.L)return;
  const el=$('locationMap');if(!el)return;
  if(!mapInstance){
    mapInstance=L.map(el).setView([25.2854,51.5310],12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(mapInstance);
    mapInstance.on('click',e=>{
      pickedMapPoint=e.latlng;
      if(mapMarker)mapMarker.setLatLng(e.latlng);else mapMarker=L.marker(e.latlng).addTo(mapInstance);
      $('mapCoords').textContent='Pinned: '+e.latlng.lat.toFixed(5)+', '+e.latlng.lng.toFixed(5);
    });
  }
  setTimeout(()=>mapInstance.invalidateSize(),120);
}
function confirmMapLocation(){
  if(!pickedMapPoint){showToast('Tap the map to place your pin first.');return;}
  const lat=pickedMapPoint.lat.toFixed(5),lng=pickedMapPoint.lng.toFixed(5);
  $('area').value='Map pin: '+lat+', '+lng;
  $('mapLocationStatus').textContent='Map pin selected · '+lat+', '+lng;
  closeModal('mapPickerModal');
}

function filterServices(){const q=$('q').value.trim().toLowerCase();let n=0;document.querySelectorAll('.cat').forEach(c=>{const m=!q||c.dataset.search.includes(q);c.style.display=m?'':'none';if(m)n++});$('empty').hidden=n!==0;$('qClear').classList.toggle('show',!!q)}
function clearSearch(){$('q').value='';filterServices();$('q').focus()}
function showToast(m){const t=$('toast');t.textContent=m;t.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove('show'),2700)}
function load(){try{return JSON.parse(localStorage.getItem('trustqatar_requests')||'[]')}catch(e){return[]}}
function submitBooking(e){e.preventDefault();if(!valid())return;const b=$('submitBooking');b.disabled=true;b.classList.add('loading');b.textContent='Saving';
setTimeout(()=>{const chosen=getSelectedProvider();const method=document.querySelector('input[name="serviceMethod"]:checked')?.value==='store'?'Visit store':'Technician visit';const r={id:'TQ-'+Math.floor(100000+Math.random()*900000),category:$('category').value,issue:$('issue').value,area:$('area').value,date:whenText(),serviceMethod:['Laptop repair','Phone repair'].includes($('category').value)?method:'Technician visit',technician:providerName(),price:chosen&&chosen.price?'QAR '+chosen.price:'',photos:[...$('issuePhotos').files].map(f=>f.name)};
let ok=true;try{const all=load();all.unshift(r);localStorage.setItem('trustqatar_requests',JSON.stringify(all))}catch(err){ok=false}
if(ok){$('savedMessage').textContent='Request '+r.id+' is saved with '+(chosen?chosen.name:'your selected technician')+'. '+(r.photos.length?r.photos.length+' photo(s) attached. ':'')+'Demo only: no technician has been dispatched.';$('bookingForm').style.display='none';$('sheetTop').hidden=true;$('bookingSuccess').style.display='grid'}else{showToast('Could not save this request in your browser.')}
b.disabled=false;b.classList.remove('loading');b.textContent='Request repair'},550)}
function submitPro(e){e.preventDefault();closeModal('proModal');showToast('Application noted. Nothing was sent to a server.')}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function showRequests(){const r=load();$('requestsList').innerHTML=r.length?'<div class="panel rows">'+r.map(x=>'<div class="row"><div><strong class="h-md">'+esc(x.category)+'</strong><p class="label muted">'+esc(x.id)+', '+esc(x.area)+', '+esc(x.date)+'</p></div><span class="price">Saved</span></div>').join('')+'</div>':'<p class="empty">No requests yet. Saved requests appear here.</p>';openModal('requestsModal')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.backdrop.show').forEach(m=>m.classList.remove('show'))});
