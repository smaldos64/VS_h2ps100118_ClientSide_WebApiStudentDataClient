﻿//const WEB_API_URL_StudentData = "http://localhost:62090/api/";

const WEB_API_URL_StudentData = "http://webapistudentdata.buchwaldshave34.dk/api/";

const WEB_API_URL_StudentData_Course = WEB_API_URL_StudentData + "Course";
const WEB_API_URL_StudentData_Eductaion = WEB_API_URL_StudentData + "Education";
const WEP_API_URL_USERINFO = WEB_API_URL_StudentData + "UserInfo";
const WEB_API_URL_RETURN_CODES_AND_RETURN_STRINGS = WEB_API_URL_StudentData + "ReturnCodesAndStrings";

const WEB_API_URL_StudentData_EducationLine = WEB_API_URL_StudentData + "EducationLine";
const WEB_API_URL_StudentData_ContactForm = WEB_API_URL_StudentData + "ContactForm";

const UserName = "Lars-Lærer";
const Password = "smal";

const jSonDecodingError = -100;
const jSonDecodingOk = 0;
const OperationOkHigherValueThanHere = 0;

var ReturnCodeAndReturnStringFromWEBApiList = [];

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

function Deserialize_jSOnData(data) {
    try {
        jSonDataDeserialized = JSON.parse(data);
    }
    catch (Exception) {
        try {
            jSonDataDeserialized = JSON.parse(JSON.stringify(data));
        }
        catch (Exception) {
            try {
                jSonDataDeserialized = data;
            }
            catch (Exception) {
                alert(Exception);
                jSonDataDeserialized = jSonDecodingError;
            }
        }
    }
    return (jSonDataDeserialized);
}

function GetReturnNumbersAndReturnStringFromWebAPI() {
    var ReturnCode = jSonDecodingError;

    $.ajaxSetup({ async: false });
    // VI vil ikke returnere fra funktionen før vores Ajax kald er blevet processeret !!!

    $.ajax({
        url: WEB_API_URL_RETURN_CODES_AND_RETURN_STRINGS,
        type: 'GET',
        dataType: "json",
        headers: {
            accept: "application/json",
        },
        success: function (data) {
            //On ajax success do this
            jSonDataDeserialized = Deserialize_jSOnData(data);
            if (jSonDecodingError != jSonDataDeserialized) {
                DecodejSONReturnCodesAndReturnStrings(jSonDataDeserialized);
                //PrintTypeScriptReturnCodesAndReturnStringsObjectsInArray();
                ReturnCode = jSonDecodingOk;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            //On ajax error do this
            alert(xhr.status);
            alert(ajaxOptions);
            alert(thrownError);
        }
    });

    $.ajaxSetup({ async: true });
    return (ReturnCode);
}

function DecodejSONReturnCodesAndReturnStrings(jSonDataDeserialized) {
    ReturnCodeAndReturnStringFromWEBApiList.splice(0, ReturnCodeAndReturnStringFromWEBApiList.length);
    $.each(jSonDataDeserialized, function (key, item) {
        ReturnCodeAndReturnStringFromWEBApiList.push(new ReturnCodeAndReturnStringFromWEBApi(item.ReturnCode, item.ReturnString));
    });
}