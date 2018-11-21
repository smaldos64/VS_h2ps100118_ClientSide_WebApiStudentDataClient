//const WEB_API_URL_StudentData = "http://localhost:62090/api/";

const WEB_API_URL_StudentData = "http://webapistudentdata.buchwaldshave34.dk/api/";

const WEB_API_URL_StudentData_Course = WEB_API_URL_StudentData + "Course";
const WEB_API_URL_StudentData_Eductaion = WEB_API_URL_StudentData + "Education";
const WEP_API_URL_USERINFO = WEB_API_URL_StudentData + "UserInfo";
const WEB_API_URL_RETURN_CODES_AND_RETURN_STRINGS = WEB_API_URL_StudentData + "ReturnCodesAndStrings";

const UserName = "Lars-Lærer";
const Password = "smal";

const OperationOkHigherValueThanHere = 0;

function FindReturnNumberString(ReturnList, ReturnNumber) {
    ReturnNumberCounter = 0;

    do {
        if (ReturnList[ReturnNumberCounter].ReturnCode == ReturnNumber) {
            return (ReturnList[ReturnNumberCounter].ReturnCodeString);
        }
        else {
            ReturnNumberCounter++;
        }
    } while (ReturnNumberCounter < ReturnList.length);
    return ("Fejl nummer ikke fundet !!!");
}