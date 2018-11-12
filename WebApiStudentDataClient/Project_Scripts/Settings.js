const WEB_API_URL_StudentData = "http://localhost:62090/api/";

//const WEB_API_URL_StudentData = "http://webapisimple.buchwaldshave34.dk/api/StudentName";

const WEB_API_URL_StudentData_Course = WEB_API_URL_StudentData + "Course";
const WEB_API_URL_StudentData_Eductaion = WEB_API_URL_StudentData + "Education";

const UserName = "Lars-Lærer";
const Password = "smal";

const UserNameAlreadyPresent = -8;
const FeatureNotImplemented = -7; 
const ObjectNotFound = -6;
const ObjectAlreadyPresent = -5;
const SaveOperationFailed = -4;
const UpdateOperationFailed = -3;
const DeleteOperationFailed = -2;
const UserNotFound = -1;
const OperationOkHigherValueThanHere = 0;
const UpdateOperationOk = 1;
const SaveOperationOk = 2;
const DeleteOperationOk = 3;

const ErrorArray = [
    [UserNameAlreadyPresent, "Brugernavn findes allerede"]
    [FeatureNotImplemented, "Feature er ikke implementeret i WebAPI"],
    [ObjectNotFound, "Object Findes ikke"],
    [ObjectAlreadyPresent, "Objekt findes allerede"],
    [SaveOperationFailed, "Noget gik galt på Serveren, da objekt skulle gemmes"],
    [UpdateOperationFailed, "Noget gik galt på Serveren, da objekt skulle opdateres"],
    [DeleteOperationFailed, "Noget gik galt på Serveren, da objekt skulle slettes"],
    [UserNotFound, "Bruger ikke fundet"],
    [OperationOkHigherValueThanHere, ""],
    [UpdateOperationOk, "Opdatering af objekt er gjort"],
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