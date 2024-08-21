"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  return (
    <div className="card mb-5 mb-xl-8">
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column w-100">
          <span className="card-label fw-bold fs-3 mb-1">Users</span>
        </h3>

        <div className="row">
          <div className="col-md-12">
            {/* <x-breadcrums :links="[
                        'Home' => route('dashboard'),
                        'Users' => false,
                    ]" /> */}
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center position-relative my-1 mb-2 mb-md-0">
              <span className="svg-icon svg-icon-1 position-absolute ms-6"></span>
              <input
                type="text"
                data-table-filter="search"
                className="form-control form-control-solid w-250px ps-15"
                placeholder="Search"
              />
              <span className="svg-icon svg-icon-1 position-absolute ms-6">
                <img src="/media/svg/others/searchicon.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="card-toolbar">

          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
          >
            <span className="svg-icon svg-icon-2 ">
              +
            </span>
          </button>
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
          >
            <span className="svg-icon svg-icon-2">
              <img src="/media/svg/others/drawerbutton.svg" alt="" />
            </span>
          </button>
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
            data-kt-menu="true"
          >
            <div className="menu-item px-3">
              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                Quick Actions
              </div>
            </div>
            <div className="separator mb-3 opacity-75"></div>
          </div>
        </div>
      </div>
      <div className="card-body pt-3">
        <div className="table-responsive">
          <table
            className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
            id="category_table"
          >
            <thead>
              <tr className="border-0">
                <th className="fw-bold p-0">SR#</th>
                <th className="fw-bold p-0">Avatar</th>
                <th className="fw-bold p-0 min-w-150px text-start">Name</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
