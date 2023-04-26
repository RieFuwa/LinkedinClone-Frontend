import React from 'react'
import { Link } from "react-router-dom";

function ResponseCard() {
    return (
        <div class=" mt-2 px-2 py-4">

            <div class="bg-white dark:bg-gray-900 w-96 shadow shadow-gray-500 mx-auto rounded-xl p-4">
                <p class="row text-gray-600 text-base overflow-hidden  dark:text-white">
                
                    Cevap içerigi  Cevap içerigi  Cevap içerigi  Cevap içerigi  Cevap içerigi  Cevap içerigi  Cevap içerigi  Cevap içerigi
                </p>
                <div class="flex items-center mt-4">

                    <button className="hidden  sm:grid sm:h-12 sm:w-12 border-2 border-white sm:shrink-0 sm:place-content-center sm:rounded-full ">
                        AS
                    </button>

                    <div class="flex flex-col justify-between ml-2">
                        <span class="text-sm flex items-center align-middle font-semibold  ">

                            <button>yazan adi</button>

                            &emsp;
                        </span>
                        <span class="flex items-center text-xs dark:text-gray-400">
                            create date
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResponseCard