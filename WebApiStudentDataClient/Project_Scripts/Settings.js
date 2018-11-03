﻿const WEB_API_URL_StudentData = "http://localhost:62090/api/";

//const WEB_API_URL_Student = "http://webapisimple.buchwaldshave34.dk/api/StudentName";

const WEB_API_URL_StudentData_Course = WEB_API_URL_StudentData + "Course";

const UserName = "Lars-Lærer";
const Password = "smal";

const ObjectNotFound = -7;
const CourseAlreadyPresent = -6;
const SaveOperationFailed = -5;
const UpdateOperationFailed = -4;
const DeleteOperationFailed = -3;
const UserNotFound = -2;
const CourseNotFound = -1;
const OperationOkHigherValueThanHere = 0;
const UpdateOperationOk = 1;
const SaveOperationOk = 2;
const DeleteOperationOk = 3;

const ErrorArray = [
    [ObjectNotFound, "Object Not Found"],
    [CourseAlreadyPresent, "Kursus/Fag findes allerede"],
    [SaveOperationFailed, "Noget gik galt på Serveren, da objekt skulle gemmes"],
    [UpdateOperationFailed, "Noget gik galt på Serveren, da objekt skulle opdateres"],
    [DeleteOperationFailed, "Noget gik galt på Serveren, da objekt skulle slettes"],
    [UserNotFound, "Bruger ikke fundet"],
    [CourseNotFound, "Kursus/Fag ikke fundet"],
    [OperationOkHigherValueThanHere, ""],
    [UpdateOperationOk, "Opdatereing af objekt er gjort"],
    [SaveOperationOk, "objekt er gemt"],
    [DeleteOperationOk, "objekt er slettet"]
];

function FindErrorNumberString(ErrorNumber) {
    ErrorNumberCounter = 0;
    
    do {
        if (ErrorArray[ErrorNumberCounter][0] == ErrorNumber) {
            return (ErrorArray[ErrorNumberCounter][1]);
        }
        else {
            ErrorNumberCounter++;
        }
    } while (ErrorNumberCounter < ErrorArray.length);
    return ("Fejl nummer ikke fundet !!!");
}