module.exports = (() => {
  const express = require("express");
  const router = express.Router();
  const externalApiHandler = require("../handlers/externalApiHandler");


  router.get('/Iot_Fetch_Data/MotorsLogs', externalApiHandler.getMotorsLogsData);


  router.post('/Smart_Factory/SaveMachineSensor', externalApiHandler.machineSensor);
  router.post('/Smart_Factory/MachineSensorUpdate', externalApiHandler.machineSensorupdate);
  router.get('/Smart_Factory/MachineSensList', externalApiHandler.machinesensorlist);
  router.post('/Smart_Factory/Global_Delete', externalApiHandler.globalDelete);

  // sap api integration api 
  router.post('/SAP_API/COOIS_Operation', externalApiHandler.cooisOperation);

  router.post('/Smart_Factory/SaveProductionPlanning', externalApiHandler.ppSave);
  router.get('/Smart_Factory/GetProductionPlaning', externalApiHandler.ppGet);

  router.post('/Smart_Factory/userNewCreation', externalApiHandler.userCreationNew);
  router.put('/Smart_Factory/updateExitUser/:UniqueId', externalApiHandler.updateUserCreation);
  router.get('/Smart_Factory/getAllUserList', externalApiHandler.getAllUser);
  router.post('/Smart_Factory/authenticationLogin', externalApiHandler.submitLogin);
  router.post('/Smart_Factory/resetPassword', externalApiHandler.reset);
  router.post('/Smart_Factory/forgotPassword', externalApiHandler.forgot);

  router.post('/Gate_Entry/fetchPdfGateEntry', externalApiHandler.fetchGateEntryPdf);
  router.post('/Gate_Entry/GateEntryCreation', externalApiHandler.GateEntryCreation);

  router.post('/Gate_Entry/fetchGateEntryChange', externalApiHandler.fetchGateEntryChange);
  router.post('/Gate_Entry/GateEntryChange', externalApiHandler.GateEntryChange);

  router.post('/Gate_Entry/ReportanlaysisDataTable', externalApiHandler.ReportanlaysisDataTable);


  router.post('/Gate_Entry/Adduser', externalApiHandler.AddUser);
  router.get('/Gate_Entry/DisplayTable', externalApiHandler.DisplayTable);
  router.post('/Gate_Entry/fetch_Exit_Cancel', externalApiHandler.fetch_Exit_Cancel);
  router.post('/Gate_Entry/save_Exit_Cancel', externalApiHandler.save_Exit_Cancel);
  router.post('/Gate_Entry/EditUser', externalApiHandler.UserEdit);
  router.post('/Gate_Entry/Login_Submit_Authentication', externalApiHandler.submit_Login);
  router.put('/Gate_Entry/UserRoleCreation', externalApiHandler.UserRoleCreation);
  router.put('/Gate_Entry/UserRoleEdit', externalApiHandler.UserRoleEdit);
  router.get('/Gate_Entry/UserRoleDisplay', externalApiHandler.UserRoleDisplay);
  router.get('/Gate_Entry/UserPlant', externalApiHandler.UserPlant);
  router.put('/Gate_Entry/UserRole', externalApiHandler.UserRole);

  router.get('/Gate_Entry/VendorList', externalApiHandler.vendorListGet);

    router.put('/Gate_Entry/FetchVendorName', externalApiHandler.f4Vendorname);

      router.post('/Gate_Entry/DashboardReports', externalApiHandler.DashboardReports);
  router.put('/Gate_Entry/Inward/Materialcode', externalApiHandler.InwardMaterialCode);
  router.get('/Gate_Entry/UOMGet', externalApiHandler.UOMGet);

  
  return router;
})();
