import React from 'react';
import img1 from '../assets/images/img1.png'; 
export default function Details() {
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
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>التاريخ: </strong> 09-10-2023</p>
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>اسم الإخطار: </strong>   الإخطار رقم اثنان </p>
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>مبلغ الاخطار : </strong> المبلغ الاول</p>
                        </div>
                    </div>
                    <div className="md:basis-5/12 basis-full  ">
                        <h1 className="font-medium text-2xl"> معلومات خاصة بالطفل تحت الخطر</h1>
                        <div className="bg-gradient-to-t from-gray-100/60 to-white rounded-lg p-10 mt-3 shadow-lg flex flex-row">
                        <div className="w-1/2">
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>الاسم : </strong> هبة</p>
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>الجنس: </strong> أنثى</p>
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>الولاية: </strong> الجزائر</p>
                        </div>
                        <div className="w-1/2 px-2">
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>اللقب: </strong> لوزاني</p>
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>العمر: </strong> 13</p>
                            <p className="mb-4 text-lg flex-auto font-medium "><strong>العنوان: </strong> 44 شارع بلدية برج الكيفان</p>
                        </div>
                        </div>

                    </div>
                   
                    <div className="md:basis-5/12 basis-full ">
                        <h1 className="font-medium text-2xl"> معلومات عن الخطر</h1>
                        <div className="bg-gradient-to-t from-gray-100/60 to-white rounded-lg p-10 mt-3 shadow-lg">
                            <p className="mb-4 text-lg flex-auto font-medium"><strong>التاريخ  : </strong> 09-10-2023</p>
                            <p className="mb-4 text-2xl flex-auto font-extrabold">أسباب الخطر </p>
                            <div className="mb-4">
                                <input type="checkbox" className="float-righ font-medium mx-2 mb-1" id="reason1" />
                                <label for="reason1">  المساس بحقه في التعليم </label>
                            </div>
                            <div className="mb-4">
                                <input checked type="checkbox" className="float-right mx-2 mb-1  " id="reason2" />
                                <label for="reason2">  عجز من يقوم برعاية الطفل عن التحكم في تصرفاته  </label>
                            </div>
                            <div className="mb-4">
                                <input type="checkbox" className="float-right mx-2 mb-1" id="reason3" />
                                <label for="reason3">  تعريض الطفل للإهمال أو التشرد  </label>
                            </div>
                            <div className="mb-4">
                                <input type="checkbox" className="float-right mx-2 mb-1" id="reason4" />
                                <label for="reason4">  التسول بالطفل أو تعريضه للتسول </label>
                            </div>
                        </div>

                    </div>
                    <div className="md:basis-5/12 basis-full ">
                        <h1 className="font-medium text-2xl"> وصف الخطر</h1>
                        <div className="bg-gradient-to-t from-gray-100/60 to-white rounded-lg p-10 mt-3 shadow-lg">
                            <p className="mb-4 text-lg font-medium text-justify leading-loose">أشرف الوزير الأول السيد أيمن بن عبد الرحمان الاثنين 19 ديسمبر 2022 بقصر الأمم بنادي الصنوبر بالجزائر العاصمة، على افتتاح اشغال اليوم الأول أشرف الوزير الأول السيد أيمن بن عبد الرحمان الاثنين 19 ديسمبر 2022 بقصر الأمم بنادي الصنوبر بالجزائر العاصمة، على افتتاح اشغال اليوم الأول

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
            <div class="p-2 bg-white rounded-lg shadow-md">
                <img src={img1} alt="img1" />
                
            </div>
            <div class="p-2 bg-white rounded-lg shadow-md">
                <img src={img1} alt="img1" />
            </div>
            <div class="p-2 bg-white rounded-lg shadow-md">
                <img src={img1} alt="img1" />
            </div>
            <div class="p-2 bg-white rounded-lg shadow-md">
                <img src={img1} alt="img1" />
            </div>
            </div>

             <div class="flex justify-center space-x-4">
            <div class="p-2 bg-white rounded-lg shadow-md">
                <img src={img1} alt="img1" />
            </div>
            <div class="p-2 bg-white rounded-lg shadow-md">
                <img src={img1} alt="img1" />
            </div>
            <div class="p-2 bg-white rounded-lg shadow-md">
                <img src={img1} alt="img1" />
            </div>
            <div class="p-2 bg-white rounded-lg shadow-md">
                <img src={img1} alt="img1" />
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
