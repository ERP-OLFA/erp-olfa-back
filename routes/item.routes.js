const router = require('express').Router();
const itemController = require("../controllers/item.controller");
//For Sinistre
router.post("/addTeacher", itemController.addTeacher);
router.post("/addClasses", itemController.addClasses);
router.get("/getTeacher",itemController.getTeachers)
router.get("/ClassesAllList",itemController.ClassesAllList)
router.get("/getTeachersinfo/:id",itemController.getTeachersinfo)
router.get("/getTeacherAttendance/:teacher_id/:class_id",itemController.getTeacherAttendance)
router.get("/getClasses",itemController.getClasses)
router.get("/classeinformation/:id",itemController.classeinformation)
router.get("/ClassesList/:teacher_id/:groupnumber", itemController.ClassesList);
///////////////////////////////////////////////////////////
router.post("/addStudent", itemController.addStudent);
router.put("/updateStudent/:id", itemController.updateStudent);
router.post("/addClasseStd", itemController.addClasseStd);
router.post("/PresenceStd", itemController.PresenceStd);
router.post("/recordTeacherAttendance", itemController.recordTeacherAttendance);
router.post("/addPreviousClass", itemController.addPreviousClass);
router.post("/PaymentStudent", itemController.PaymentStudent);
router.get('/getNumberSeance/:student_id/:class_id', itemController.getNumberSeance);
router.get("/getStudent", itemController.getStudent);
router.get("/getStudentbyId/:id", itemController.getStudentbyId);
router.put("/UpdatePaymentAmount/:id", itemController.UpdatePaymentAmount);
router.get("/archivedpresence/:student_id", itemController.archivedpresence);
router.get("/getPaymentsstudent/:student_id", itemController.getPaymentsstudent);
router.delete("/deleteClasseStd/:id", itemController.deleteClasseStd);
router.get("/getPayments", itemController.getPayments);
router.put("/updateClassMonth/:id", itemController.updateClassMonth);
router.get("/studentDetailsByTeacher/:teacher_id", itemController.getStudentDetailsByTeacher);


module.exports = router;
