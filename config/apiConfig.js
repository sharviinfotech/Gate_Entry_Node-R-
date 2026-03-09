module.exports = (() => {
  const server = process.env.SERVER || "dev"; // dev | qty | prod

  const configs = {
    dev: {
      BASE_URL: "http://10.150.150.154:8103",
      USERNAME: "SARVIINFO",
      PASSWORD: "S!pl@2026",
    },

    qty: {
      BASE_URL: "http://10.150.150.155:8005",
      USERNAME: "SHARVI_INFO",
      PASSWORD: "S!pl@2026",
    },

    prod: {
      BASE_URL: "http://10.150.150.120:8103",
      USERNAME: "PROD_USER",
      PASSWORD: "PROD_PASSWORD",
    },
  };

  // ✅ SAFETY FALLBACK
  const config = configs[server] || configs.dev;

  // ✅ VERY IMPORTANT FIX
  const baseUrl = config.BASE_URL;

  return {
    SERVER: server,
    BASE_URL: baseUrl,

    THIRD_PARTY_USERNAME: process.env.THIRD_PARTY_USERNAME || config.USERNAME,
    THIRD_PARTY_PASSWORD: process.env.THIRD_PARTY_PASSWORD || config.PASSWORD,

    ThirdParty_Fetch_Gate_Entry_Pdf: `${baseUrl}/gate_entry/print/pdf?sap-client=300`,
    ThirdParty_Fetch_Gate_Entry_Creation: `${baseUrl}/gate_entry/process/gates?sap-client=300`,
    ThirdParty_Fetch_Gate_Entry_Change: `${baseUrl}/gate_entry/process/gates?sap-client=300`,
    ThirdParty_Fetch_Gate_Entry_fetchChange: `${baseUrl}/gate_entry/process/gates?sap-client=300`,
    THIRD_PARTY_API_URL_POST_Report: `${baseUrl}/gate_entry/report/list?sap-client=300`,
    THIRD_PARTY_API_URL_POST_fetch_Exit_Cancel: `${baseUrl}/gate_entry/process/gates?sap-client=300`,
    THIRD_PARTY_API_URL_POST_save_Exit_Cancel: `${baseUrl}/gate_entry/process/gates?sap-client=300`,
    THIRD_PARTY_API_URL_POST_Adduser: `${baseUrl}/gate_entry/login/login?sap-client=300`,
    THIRD_PARTY_API_URL_GET_DisplayTable: `${baseUrl}/gate_entry/login/login?sap-client=300`,
    THIRD_PARTY_API_URL_POST_Edit: `${baseUrl}/gate_entry/login/login?sap-client=300`,
    THIRD_PARTY_API_URL_POST_User_Login_Authentication: `${baseUrl}/gate_entry/login/login?sap-client=300`,
    THIRD_PARTY_API_URL_PUT_User_RoleCeation: `${baseUrl}/gate_entry/login/login?sap-client=300`,
    THIRD_PARTY_API_URL_PUT_User_RoleEdit: `${baseUrl}/gate_entry/login/login?sap-client=300`,
    THIRD_PARTY_API_URL_GET_User_RoleDisplay: `${baseUrl}/gate_entry/report/list?sap-client=300`,
    THIRD_PARTY_API_URL_GET_User_plant: `${baseUrl}/gate_entry/f4/list?sap-client=300`,
    THIRD_PARTY_API_URL_PUT_User_Role: `${baseUrl}/gate_entry/f4/list?sap-client=300`,
    THIRD_PARTY_API_URL_GET_VendorList: `${baseUrl}/gate_entry/process/gates?sap-client=300`,
    THIRD_PARTY_API_URL_PUT_VendorName: `${baseUrl}/gate_entry/process/gates?sap-client=300`,
    THIRD_PARTY_API_URL_POST_DashboardReports: `${baseUrl}/gate_entry/report/list?sap-client=300`,
    THIRD_PARTY_API_URL_PUT_Inward_MaterialCode: `${baseUrl}/gate_entry/print/pdf?sap-client=300`,
      THIRD_PARTY_API_URL_GET_UOM: `${baseUrl}/gate_entry/print/pdf?sap-client=300`,
      THIRD_PARTY_API_URL_POST_UOM_FETCH: `${baseUrl}/gate_entry/f4/list?sap-client=300`,


  };
})();
