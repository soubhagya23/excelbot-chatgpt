import React from "react";
import VerticalMenu from "../VerticalMenu/verticalMenu";

const MainBoard = () => {
  return (
    <div>
      <VerticalMenu />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <header aria-label="Page Header">
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
              <div class="sm:flex sm:items-center sm:justify-between">
                <div class="text-center sm:text-left">
                  <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back, User!
                  </h1>

                  <p
                    class="mt-1.5 text-sm text-gray-500"
                    style={{ textAlign: "left" }}
                  >
                    Let's write your formula! 🎉
                  </p>
                </div>

                <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                  <button
                    class="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                    type="button"
                  >
                    <span class="text-sm font-medium"> Quick Start </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-1.5 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="sm:text-left mt-4">
                <h1 class="text-2xl font-bold text-gray-900 sm:text-2xl">
                  Write Your Prompt
                </h1>

                <p
                  class="mt-1.5 text-sm text-gray-500"
                  style={{ textAlign: "left" }}
                >
                  <b>Note:</b> The result may vary according to your prompt.
                  Make sure to provide enough information.
                </p>
              </div>
              <fieldset class="grid grid-cols-5 gap-4 mt-4">
                <div>
                  <input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryStandard"
                    id="DeliveryStandard"
                    class="peer hidden [&:checked_+_label_svg]:block"
                    checked
                  />

                  <label
                    for="DeliveryStandard"
                    class="block cursor-pointer rounded-lg border border-gray-100 p-2 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                  >
                    <div class="flex items-center justify-between">
                      <p class="text-gray-700">Excel/Sheets</p>

                      <svg
                        class="hidden h-5 w-5 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryStandard1"
                    id="DeliveryStandard1"
                    class="peer hidden [&:checked_+_label_svg]:block"
                  />

                  <label
                    for="DeliveryStandard1"
                    class="block cursor-pointer rounded-lg border border-gray-100 p-2 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                  >
                    <div class="flex items-center justify-between">
                      <p class="text-gray-700">Python</p>

                      <svg
                        class="hidden h-5 w-5 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryPriority"
                    id="DeliveryPriority"
                    class="peer hidden [&:checked_+_label_svg]:block"
                  />

                  <label
                    for="DeliveryPriority"
                    class="block cursor-pointer rounded-lg border border-gray-100 p-2 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                  >
                    <div class="flex items-center justify-between">
                      <p class="text-gray-700">VBA</p>

                      <svg
                        class="hidden h-5 w-5 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </label>
                </div>
              </fieldset>
              <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <input
                  style={{ height: "130px" }}
                  type="text"
                  placeholder="Formula to sum A1-A9 if column B1 has marketing and C1 has data"
                  className="px-3 py-3 mt-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
              <a
                class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 w-full"
                href=""
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                Generate
              </a>

              <article class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 transition hover:shadow-sm mt-4">
                <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                  <a href="#">
                    <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                      =SUMIFS(A1:A9,B1:B9,"Marketing",C1:C9,"Data")
                    </h3>
                  </a>

                  <div class="mt-4 flex flex-wrap gap-1">
                    <span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-purple-600">
                      Excel
                    </span>
                  </div>
                </div>
              </article>
              <div
                className="mt-4"
                style={{ display: "flex", justifyContent: "end", gap: "20px" }}
              >
                <a
                  class="inline-block rounded border border-indigo-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  style={{ textDecoration: "none" }}
                >
                  Copy
                </a>
                <a
                  class="inline-block rounded border border-indigo-600 bg-violet-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black-600 focus:outline-none focus:ring active:text-indigo-500"
                  style={{ textDecoration: "none" }}
                >
                  Reset
                </a>
                <a
                  class="inline-block rounded border border-indigo-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  style={{ textDecoration: "none" }}
                >
                  Incorrect
                </a>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
