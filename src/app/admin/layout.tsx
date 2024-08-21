import type { Metadata } from "next";

import Header from "@/app/components/layout/Header";
import Sidebar from "@/app/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Login",
  description: "Provide Credentials to Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        id="kt_app_body"
        data-kt-app-layout="dark-sidebar"
        data-kt-app-header-fixed="false"
        data-kt-app-sidebar-enabled="true"
        data-kt-app-sidebar-fixed="true"
        data-kt-app-sidebar-hoverable="true"
        data-kt-app-sidebar-push-header="true"
        data-kt-app-sidebar-push-toolbar="true"
        data-kt-app-sidebar-push-footer="true"
        data-kt-app-toolbar-enabled="true"
        className="app-default"
      >
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
          <div
            className="app-page flex-column flex-column-fluid"
            id="kt_app_page"
          >
            <div id="kt_app_header" className="app-header">
              <Header />
            </div>
            <div
              className="app-wrapper flex-column flex-row-fluid"
              id="kt_app_wrapper"
            >
              <Sidebar />
              <div
                className="app-main flex-column flex-row-fluid"
                id="kt_app_main"
              >
                <div
                  id="kt_app_content_container"
                  className="app-container p-0 pt-4"
                >
                  {children}
                </div>
                <div id="kt_app_footer" className="app-footer mt-auto">
                  <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                    <div className="text-dark order-2 order-md-1 w-100">
                      <span className="text-muted fw-semibold me-1">
                        &copy;
                      </span>
                      <a
                        href=""
                        target="_blank"
                        className="text-gray-800 text-hover-primary"
                      >
                        AdorableKids
                      </a>
                      <a className="text-gray-800 float-end">
                        {/* <x-trail-balance /> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
