import React from "react";



const Header: React.FC = () => {
  return (
    <>
      <div
        className="app-container container-fluid d-flex align-items-stretch justify-content-between"
        id="kt_app_header_container"
      >
        <div
          className="d-flex align-items-center d-lg-none ms-n2 me-2"
          title="Show sidebar menu"
        >
          <div
            className="btn btn-icon btn-active-color-primary w-35px h-35px"
            id="kt_app_sidebar_mobile_toggle"
          >
            <span className="svg-icon svg-icon-1">
              <img src="/media/svg/others/svgicon1.svg" alt="" />
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <a href="/" className="d-lg-none">
            <img
              alt="Logo"
              src="assets/media/avatars/300-1.jpg"
              className="h-50px rounded"
            />
          </a>
        </div>
        <div
          className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
          id="kt_app_header_wrapper"
        >
          <div
            className="app-header-menu app-header-mobile-drawer align-items-stretch"
            data-kt-drawer="true"
            data-kt-drawer-name="app-header-menu"
            data-kt-drawer-activate="{default: true, lg: false}"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="250px"
            data-kt-drawer-direction="end"
            data-kt-drawer-toggle="#kt_app_header_menu_toggle"
            data-kt-swapper="true"
            data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
            data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
          >
            <div
              className="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
              id="kt_app_header_menu"
              data-kt-menu="true"
            ></div>
          </div>
          <div className="app-navbar flex-shrink-0">
            <div className="app-navbar-item align-items-stretch ms-1 ms-lg-3">
              <div
                id="kt_header_search"
                className="header-search d-flex align-items-stretch"
                data-kt-search-keypress="true"
                data-kt-search-min-length="2"
                data-kt-search-enter="enter"
                data-kt-search-layout="menu"
                data-kt-menu-trigger="auto"
                data-kt-menu-overflow="false"
                data-kt-menu-permanent="true"
                data-kt-menu-placement="bottom-end"
              >
                <div
                  className="d-flex align-items-center"
                  data-kt-search-element="toggle"
                  id="kt_header_search_toggle"
                >
                  <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
                    <span className="svg-icon svg-icon-1"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="app-navbar-item ms-1 ms-lg-3">
              <div
                className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative"
                id="kt_drawer_chat_toggle"
              >
                <span className="svg-icon svg-icon-1">
                  <img src="/media/svg/others/svgicon2.svg" alt="" />
                </span>
                <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
              </div>
            </div>

            <div className="app-navbar-item ms-1 ms-lg-3">
              <a
                href="#"
                className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
              >
                <span className="svg-icon theme-light-show svg-icon-2">
                  <img src="/media/svg/others/svgicon3.svg" alt="" />
                </span>
                <span className="svg-icon theme-dark-show svg-icon-2">
                  <img
                    src="/media/svg/others/svgicon4.svg"
                    alt=""
                  />
                </span>
              </a>
              <div
                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-175px"
                data-kt-menu="true"
                data-kt-element="theme-mode-menu"
              >
                <div className="menu-item px-3 my-0">
                  <a
                    href="#"
                    className="menu-link px-3 py-2"
                    data-kt-element="mode"
                    data-kt-value="light"
                  >
                    <span className="menu-icon" data-kt-element="icon">
                      <span className="svg-icon svg-icon-3">
                        <img
                          src="/media/svg/others/svgicon5.svg"
                          alt=""
                        />
                      </span>
                    </span>
                    <span className="menu-title">Light</span>
                  </a>
                </div>
                <div className="menu-item px-3 my-0">
                  <a
                    href="#"
                    className="menu-link px-3 py-2"
                    data-kt-element="mode"
                    data-kt-value="dark"
                  >
                    <span className="menu-icon" data-kt-element="icon">
                      <span className="svg-icon svg-icon-3">
                        <img
                          src="/media/svg/others/svgicon6.svg"
                          alt=""
                        />
                      </span>
                    </span>
                    <span className="menu-title">Dark</span>
                  </a>
                </div>
                <div className="menu-item px-3 my-0">
                  <a
                    href="#"
                    className="menu-link px-3 py-2"
                    data-kt-element="mode"
                    data-kt-value="system"
                  >
                    <span className="menu-icon" data-kt-element="icon">
                      <span className="svg-icon svg-icon-3">
                        <img
                          src="/media/svg/others/menuicon.svg"
                          alt=""
                        />
                      </span>
                    </span>
                    <span className="menu-title">System</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="app-navbar-item ms-1 ms-lg-3"
              id="kt_header_user_menu_toggle"
            >
              <div
                className="cursor-pointer symbol symbol-35px symbol-md-40px"
                data-kt-menu-trigger=""
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
              >
                <img src="assets/media/avatars/300-1.jpg" alt="user" />
              </div>
              <div
                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                data-kt-menu="true"
              >
                <div className="menu-item px-3">
                  <div className="menu-content d-flex align-items-center px-3">
                    <div className="symbol symbol-50px me-5">
                      <img alt="Logo" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    <div className="d-flex flex-column">
                      <div className="fw-bold d-flex align-items-center fs-5">
                        User Name
                        <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                          Role
                        </span>
                      </div>
                      <a
                        href="#"
                        className="fw-semibold text-muted text-hover-primary fs-7"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>

                <div className="menu-item px-5">
                  <a
                    href="{{ route('users.edit', auth()->user()->uid) }}"
                    className="menu-link px-5"
                  >
                    My Profile
                  </a>
                </div>

                <div className="separator my-2"></div>

                <div className="menu-item px-5">
                  <form id="" action="{{ route('logout') }}" method="post">
                    <button
                      className="menu-link px-5 px-5 w-100 border-0 app-default"
                      type="submit"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
