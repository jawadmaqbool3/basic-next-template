"use client";

import React, { useEffect, useRef, useState } from "react";

import UserBreadcrum from "@/app/components/users/UserBreadcrum";

import UserForm from "@/app/components/users/UserForm";

import UserTable from "@/app/components/users/UserTable";

import UserFormHandler from "@/app/component_interfaces/Users/UserFormHandler";

import { UserTableRefreshHandler } from "@/app/component_interfaces/Users/UserTableHandler";

import Modal, { ModalHandle, ModalProps } from "@/app/components/layout/Modal";

import UserTableProps from "@/app/component_interfaces/Users/UserTableProps";

import UserFormProps from "@/app/component_interfaces/Users/UserFormProps";

export default function Users() {
  const modalRef = useRef<ModalHandle>(null);

  const formRef = useRef<UserFormHandler>(null);

  const tableRef = useRef<UserTableRefreshHandler>(null);
  
  const submit = () => {
    if (formRef.current) {
      formRef.current.submit(() => {
        closeModal();
        refreshTable();
      });
    }
  };

  const footer = (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <button type="submit" onClick={submit} className="btn btn-primary">
        Save changes
      </button>
    </>
  );

  const addUserProps: ModalProps = {
    id: "users_modal",
    title: "Create User",
    size: "modal-lg",
    body: (
      <UserForm
        _id=""
        first_name=""
        last_name=""
        email=""
        password=""
        confirm_password=""
        formMode={1}
        ref={formRef}
      />
    ),
    footer: footer,
  };

  const [modalSettings, setModalSettings] = useState(addUserProps);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.closeModal();
    }
  };

  const refreshTable = () => {
    if (tableRef.current) {
      tableRef.current.refresh();
    }
  };

  const initiateEdit = (user: UserTableProps) => {
    const formProps = (function (user: UserTableProps): UserFormProps {
      const props: UserFormProps = user;
      props.password = "";
      props.confirm_password = "";
      return props;
    })(user);

    setupEditModal(formProps);

    openModal();
  };

  const setupEditModal = (formProps: UserFormProps) => {
    setModalSettings({
      id: "users_modal",
      title: "Edit User",
      size: "modal-lg",
      body: (
        <UserForm
          _id={formProps._id}
          first_name={formProps.first_name}
          last_name={formProps.last_name}
          email={formProps.email}
          password={formProps.password}
          confirm_password={formProps.confirm_password}
          formMode={2}
          ref={formRef}
        />
      ),
      footer,
    });
  };

  const setupAddModal = () => {
    setModalSettings(addUserProps);
    openModal();
  };

  return (
    <div className="card mb-5 mb-xl-8">
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column w-100">
          <span className="card-label fw-bold fs-3 mb-1">Users</span>
        </h3>

        <div className="row">
          <div className="col-md-12">
            <UserBreadcrum />
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
            onClick={setupAddModal}
            type="button"
            className="btn btn-sm btn-icon btn-color-dark btn-active-light-dark"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
          >
            <span className="h2 svg-icon svg-icon-2 ">+</span>
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
          <UserTable editFunction={initiateEdit} ref={tableRef} />
        </div>
      </div>

      <Modal
        id={modalSettings.id}
        ref={modalRef}
        size={modalSettings.size}
        title={modalSettings.title}
        body={modalSettings.body}
        footer={modalSettings.footer}
      />
    </div>
  );
}
