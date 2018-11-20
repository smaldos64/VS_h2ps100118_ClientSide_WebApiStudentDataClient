const WEB_API_URL_StudentData = "http://localhost:62090/api/";

//const WEB_API_URL_StudentData = "http://webapisimple.buchwaldshave34.dk/api/StudentName";

const WEB_API_URL_StudentData_Course = WEB_API_URL_StudentData + "Course";
const WEB_API_URL_StudentData_Eductaion = WEB_API_URL_StudentData + "Education";
const WEP_API_URL_USERINFO = WEB_API_URL_StudentData + "UserInfo";

const UserName = "Lars-Lærer";
const Password = "smal";

const WrongjSOnObjectParameters = -16;
const SpecifiedContentStillInUseInTablesBelow = -15;
const WrongCharacterScaleProvided = -14;
const WrongCharacterProvided = -13;
const NoCharacterProvidedButCharacterScaleProvided = -12;
const CharacterProvidedButNoCharacterScaleProvided = -11;
const InformationNotProvided = -10;
const ObjectNotSavedByCurrentUserOriginally = -9;
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
    [WrongjSOnObjectParameters, "Én eller flere af de forventede parametre i det give jSon objekt mangler !!!"],
    [SpecifiedContentStillInUseInTablesBelow, "ID i denne tabel der ønsket slettet er stadigvæk i brug i underliggende tabeller. Slet i disse tabeller først !!!"],
    [WrongCharacterScaleProvided, "Forkert ID for karakterskale angivet"],
    [WrongCharacterProvided, "Forkert karakterværdi i forhold til valgt karakterskala angivet"],
    [NoCharacterProvidedButCharacterScaleProvided, "Ingen karakterværdi angivet selvom karakterskala er angivet"],
    [CharacterProvidedButNoCharacterScaleProvided, "Ingen karakterskala angivet selvom karakterværdi er angivet"],
    [InformationNotProvided, "Information er ikke gemt"],
    [ObjectNotSavedByCurrentUserOriginally, "Objekt er ikke gemt af nuværende bruger oprindeligt !!!"], 
    [UserNameAlreadyPresent, "Brugernavn findes allerede"]
    [FeatureNotImplemented, "Feature er ikke implementeret i WebAPI"],
    [ObjectNotFound, "Object Findes ikke"],
    [ObjectAlreadyPresent, "Objekt findes allerede"],
    [SaveOperationFailed, "Noget gik galt på Serveren, da objekt skulle gemmes"],
    [UpdateOperationFailed, "Noget gik galt på Serveren, da objekt skulle opdateres"],
    [DeleteOperationFailed, "Noget gik galt på Serveren, da objekt skulle slettes"],
    [UserNotFound, "Bruger ikke fundet"],
    [OperationOkHigherValueThanHere, "Returværdier større end denne værdi er ok returværdier"],
    [UpdateOperationOk, "Opdatering af objekt er gjort"],
    [SaveOperationOk, "objekt er gemt korrekt"],
    [DeleteOperationOk, "objekt er slettet korrekt"]
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