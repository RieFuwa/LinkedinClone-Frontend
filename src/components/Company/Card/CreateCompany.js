import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function CreateCompany() {
    return (
        <div><section class="min-h-screen font-bodyFont  bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
            <div class="container flex flex-col min-h-screen px-6 py-12 mx-auto">
                <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                    <div class="text-white lg:w-1/2 lg:mx-6">
                        <h1 class="text-2xl font-semibold capitalize lg:text-5xl">HOSGELDINIZ SAYIN, USERNAME</h1>

                        <h1 class="text-2xl mt-5 font-semibold capitalize lg:text-2xl"><span class="text-sky-500">GEL</span>işim+ İle Şirketinizi Oluşturun</h1>

                        <p class="max-w-xl mt-6">*Şirketinizi başarılı bir şekilde kayıt ettikten sonra şirket paneli sayfanıza erişiminiz açılacaktır.</p>
                        <p class="max-w-xl mt-6">*Şirketinizi kayıt etme sürecinde ve sonrası için detaylı bilgi almak istiyorsanız bizimle iletişime geçiniz.</p>


                    </div>

                    <div class=" lg:w-1/2 lg:mx-8">
                        <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                            <div class="flex align-middle justify-between">
                                <h1 class="text-xl font-medium text-gray-700 dark:text-gray-200">Şirket Kayıt Ekranına Hoşgeldiniz</h1>
                                <Link to="/"> <FaWindowClose class="text-xl text-white"></FaWindowClose></Link>
                            </div>

                            <form class="mt-4">
                                <div class="flex-1">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şirket Adı</label>
                                    <input type="text" required class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div class="flex-1 mt-2">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şirket Email adresi</label>
                                    <input type="email" required placeholder="example@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div className='flex mt-2 gap-4 mb-2'>
                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şirket Türü</label>
                                        <input type="text" maxLength={30} required class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şehir</label>
                                        <input type="text" maxLength={15} required class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                </div>
                                <div class="flex-1">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şirket Hakkında</label>
                                    <textarea type="text" maxLength={300} required class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                {/* <div class="w-full mt-6">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                        </div> */}

                                <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                    Şirketinizi Kayıt Edin
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default CreateCompany