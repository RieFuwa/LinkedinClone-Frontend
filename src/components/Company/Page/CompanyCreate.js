import React from 'react'
import CreateCompany from '../Card/CreateCompany/CreateCompany'

function CompanyCreate(props) {
    return (
        <div><section class="min-h-screen font-bodyFont  bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
            <div class="container flex flex-col min-h-screen px-6 py-12 mx-auto">
                <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                    <div class="text-white lg:w-1/2 lg:mx-6 mb-4">
                        <h1 class="text-2xl font-semibold capitalize lg:text-5xl">Hoşgeldiniz Sayın {localStorage.getItem("signedUserName")}</h1>
                        <h1 class="text-2xl mt-5 font-semibold capitalize lg:text-2xl"><span class="text-sky-500">GEL</span>işim+ İle Şirketinizi Oluşturun</h1>
                        <p class="max-w-xl mt-6">*Şirketinizi başarılı bir şekilde kayıt ettikten sonra şirket paneli sayfanıza erişiminiz açılacaktır.</p>
                        <p class="max-w-xl mt-6">*Şirketinizi kayıt etme sürecinde ve sonrası için detaylı bilgi almak istiyorsanız bizimle iletişime geçiniz.</p>
                    </div>

                    <CreateCompany></CreateCompany>
                </div>
            </div>
        </section></div>
    )
}

export default CompanyCreate