import React from 'react'
import CreateCompany from '../../Company/Card/CreateCompany/CreateCompany'
import CreateCompanyType from '../Card/AddCompanyType/CreateCompanyType'
import CreateJobType from '../Card/AddJobType/CreateJobType'

function AdminManager() {

    return (
        <div class=" min-h-screen text-white font-bodyFont ">

            <div class="">
                <div class="p-10 mx-20 flex justify-between ">

                    <CreateCompanyType></CreateCompanyType>
                    <CreateJobType></CreateJobType>

                </div>
            </div>
        </div>
    )
}

export default AdminManager