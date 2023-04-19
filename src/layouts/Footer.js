function Footer() {
    return (
        <div className="text-white font-bodyFont">
            <footer class="bg-gray-900 dark:bg-gray-900">
                <div class="container px-6 py-12 mx-auto">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
                        <div class="sm:col-span-2">
                            <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white"> <span class="text-sky-500">GEL</span>işim+
                            </h1>

                            <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Adresiniz" />

                                <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                    Bize Ulaş
                                </button>

                            </div>
                            <div className="mt-4 text-lg">
                                <a href="#">
                                </a>
                            </div>

                        </div>

                        <div>
                            <p class="font-semibold text-gray-800 dark:text-white"><span class="text-sky-500">GEL</span>işim+ </p>

                            <div class="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" class="text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-sky-500 hover:underline hover:text-sky-500">Ana Sayfa</a>
                                <a href="#" class="text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-sky-500 hover:underline hover:text-sky-500">İş İlanları</a>
                            </div>
                        </div>

                        <div>
                            <p class="font-semibold text-gray-800 dark:text-white"><span class="text-sky-500">GEL</span>işim+ Ticaret</p>

                            <div class="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" class="text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-sky-500 hover:underline hover:text-sky-500">Şirketinizi Oluşturun+</a>
                                <a href="#" class="text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-sky-500 hover:underline hover:text-sky-500">Gizlilik Politikası</a>
                            </div>
                        </div>
                        <div>
                            <p class="font-semibold text-gray-800 dark:text-white">İletişim</p>

                            <div class="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" class="text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-sky-500 hover:underline hover:text-sky-500">0555 555 55 55</a>
                                <a href="#" class="text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-sky-500 hover:underline hover:text-sky-500">İstanbul-Türkiye</a>
                            </div>
                        </div>
                    </div>

                    <hr class=" border-gray-200 md:my-4 dark:border-gray-700" />


                </div>
            </footer>
        </div>
    );
}

export default Footer;