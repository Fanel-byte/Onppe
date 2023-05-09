import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import '../Style/details.css';


export default function Details() {
    const [signalement,Setsignalement] = useState([])
    
    //getting signalement informations
    useEffect(() => {
        Axios.get("http://localhost:4000/signalement/getSignalementById/2").then((response) => { //once the dashboard is ready instead of 2 in the link it will be changed with a signalement id from the row clicked in the previous page
           Setsignalement(response.data);
        // console.log(response.data);
        
        }); });
    //getting the child and the wilaya info 
    const enfantid = signalement.enfantid;
    const [enfant,Setenfant] = useState([])
        useEffect(() => {
            Axios.get('http://localhost:4000/enfants/getEnfantById'+enfantid).then((response) => {
               Setenfant(response.data);
            // console.log(response.data);
            
            }); });
     //getting the picture info
     const [img,Setimg] = useState([])
     const signalementid = signalement.id;
     useEffect(() => {
        Axios.get('http://localhost:4000/images/getImgBySignalementId/2').then((response) => {
           Setimg(response.data);
        // console.log(response.data);
        
        }); });
    return (
        
        <>
                   <html dir="rtl" lang="ar" className="font-mons mr-10"  >
            <div className=" my-10  text-right">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">معلومات التبليغ</h1>
                <div className="flex items-center space-x-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-7  rounded-full ml-5">
                معالجة
                </button>
                <button className="border-2 border-gray-100 hover:bg-gray-200/60 hover:text-black font-bold py-2 px-4 rounded-lg ml-2">
                طلب معلومات
                </button>

                </div>
              </div>
              <hr class="rounded mt-5 ml-4 border-gray-200/50"/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 p-4">
                    
                    <div className="md:basis-5/12 basis-full ">
                        <h1 className="font-medium text-2xl"> معلومات عامة</h1>
                        <div class="bg-gradient-to-t from-gray-100/60 to-white rounded-lg p-10 mt-3 shadow-lg">
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>التاريخ: </strong> {new Date(signalement.date).toLocaleDateString()}</p>
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>نوع الإخطار: </strong>   {signalement.designationar}</p>
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>مبلغ الاخطار : </strong> {signalement.descriptif_signaleur} </p>
                        </div>
                    </div>
                    <div className="md:basis-5/12 basis-full  ">
                        <h1 className="font-medium text-2xl"> معلومات خاصة بالطفل تحت الخطر</h1>
                        <div className="bg-gradient-to-t from-gray-100/60 to-white rounded-lg p-10 mt-3 shadow-lg flex flex-row">
                        <div className="w-1/2">
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>الاسم : </strong> {signalement.prenom_ar} </p>
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>الجنس: </strong> {signalement.sexe} </p>
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>الولاية: </strong> {enfant.wilaya}</p>
                        </div>
                        <div className="w-1/2 px-2">
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>اللقب: </strong> {signalement.nom_ar} </p>
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>العمر:  </strong> {signalement.age} </p>
                            <p className="mb-4 text-lg flex-auto font-medium "><strong>العنوان: {signalement.adresse}</strong> </p>
                        </div>
                        </div>

                    </div>
                   
                    <div className="md:basis-5/12 basis-full ">
                        <h1 className="font-medium text-2xl"> معلومات عن الإخطار</h1>
                        <div className="bg-gradient-to-t from-gray-100/60 to-white rounded-lg p-10 mt-3 shadow-lg">
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>التاريخ  : </strong> {new Date(signalement.dateincident).toLocaleDateString()}</p>
                            <p className="mb-4 text-2xl flex-auto font-extrabold">أسباب الخطر </p>
                            <div className="mb-4">
                                <input type="checkbox" className="float-righ font-medium mx-2 mb-1" id="reason1" checked />
                                <label for="reason1">{signalement.designationar}</label>
                            </div>
                        </div>

                    </div>
                    <div className="md:basis-5/12 basis-full ">
                        <h1 className="font-medium text-2xl"> وصف الإخطار</h1>
                        <div className="bg-gradient-to-t from-gray-100/60 to-white rounded-lg p-10 mt-3 shadow-lg">
                            <p className="mb-4 text-lg font-medium text-justify leading-loose">

                            {signalement.descriptif}
                            </p>
                        </div>
                    </div>
                    
                </div>
                <h1 className="font-medium text-2xl mt-5 mb-3"> أدلة الاخطار</h1>

                <div class="mb-4 border-b border-orange-400 dark:border-orange-400">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li class="mr-2" role="presentation">
                <button class="inline-block p-4 border-b-2 border-green-400 text-green-700 rounded-t-lg hover:text-green-600 hover:border-green-300 dark:hover:text-green-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">الصور</button>
                </li>
                <li class="mr-2" role="presentation">
                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-green-600 hover:border-green-300 dark:hover:text-green-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">الفيديوات</button>
                </li>
                <li class="mr-2" role="presentation">
                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-green-600 hover:border-green-300 dark:hover:text-green-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">التسجيلات صوتية</button>
                </li>
            </ul>
            </div>
            <div class="flex justify-center space-x-4">
            <div class="relative group ml-3">
  <img class="w-full h-full object-cover rounded-lg shadow-md transition-all duration-500 group-hover:brightness-50 group-hover:contrast-125" src={img.path} alt={img.description} />
  <div class="absolute inset-0 bg-black transition-opacity duration-500 opacity-0 group-hover:opacity-70"></div>
  <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center text-white transition-all duration-500 opacity-0 group-hover:opacity-100">
    <h1 class="font-dmserif text-3xl font-bold">{img.id}</h1>
    <p class="mb-3 text-lg italic">{img.description}</p>
  </div>
</div>

<div class="relative group">
  <img class="w-full h-full object-cover rounded-lg shadow-md transition-all duration-500 group-hover:brightness-50 group-hover:contrast-125" src={img.path} alt={img.description} />
  <div class="absolute inset-0 bg-black transition-opacity duration-500 opacity-0 group-hover:opacity-70"></div>
  <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center text-white transition-all duration-500 opacity-0 group-hover:opacity-100">
    <h1 class="font-dmserif text-3xl font-bold">{img.id}</h1>
    <p class="mb-3 text-lg italic">{img.description}</p>
  </div>
</div>
<div class="relative group">
  <img class="w-full h-full object-cover rounded-lg shadow-md transition-all duration-500 group-hover:brightness-50 group-hover:contrast-125" src={img.path} alt={img.description} />
  <div class="absolute inset-0 bg-black transition-opacity duration-500 opacity-0 group-hover:opacity-70"></div>
  <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center text-white transition-all duration-500 opacity-0 group-hover:opacity-100">
    <h1 class="font-dmserif text-3xl font-bold">{img.id}</h1>
    <p class="mb-3 text-lg italic">{img.description}</p>
  </div>
</div>
<div class="relative group">
  <img class="w-full h-full object-cover rounded-lg shadow-md transition-all duration-500 group-hover:brightness-50 group-hover:contrast-125" src={img.path} alt={img.description} />
  <div class="absolute inset-0 bg-black transition-opacity duration-500 opacity-0 group-hover:opacity-70"></div>
  <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center text-white transition-all duration-500 opacity-0 group-hover:opacity-100">
    <h1 class="font-dmserif text-3xl font-bold">{img.id}</h1>
    <p class="mb-3 text-lg italic">{img.description}</p>
  </div>
</div>
            </div>







            {/* <div id="myTabContent">
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab" aria-hidden="false">
                <p class="text-sm text-gray-500 dark:text-gray-400">content 1 </p>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab" aria-hidden="false">
                <p class="text-sm text-gray-500 dark:text-gray-400">content 2</p>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab" aria-hidden="false">
                <p class="text-sm text-gray-500 dark:text-gray-400">content 3</p>
            </div>
            </div> */}
                            {/* <script>
                const tabs = document.querySelectorAll('[data-tabs-target]');

                tabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                    const target = document.querySelector(tab.dataset.tabsTarget);
                    const tabContents = document.querySelectorAll('#myTabContent > div');

                    tabContents.forEach(content => {
                        if (content === target) {
                        content.classList.remove('hidden');
                        content.setAttribute('aria-hidden', 'false');
                        } else {
                        content.classList.add('hidden');
                        content.setAttribute('aria-hidden', 'true');
                        }
                    });

                    tabs.forEach(t => {
                        if (t === tab) {
                        t.setAttribute('aria-selected', 'true');
                        } else {
                        t.setAttribute('aria-selected', 'false');
                        }
                    });
                    })
                });
                </script> */}

            </div>
            </html>
        </>
    )
}

