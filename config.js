const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/M-cross1/Suhail-Md";
global.gurl  =process.env.GURL  || "https://Wa.me/2349042566473?text=Boss%20ＫＩＮＧ🍀Ｍ-ＣＲＯＳＳ%20my%20name%20is___%20and%20I've%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅";
global.website=process.env.GURL || "https://Wa.me/2349042566473?text=Boss%20ＫＩＮＧ🍀Ｍ-ＣＲＯＳＳ%20my%20name%20is___%20and%20I've%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ffdf8c03757ecbf76f9f9.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Ｍ-ＣＲＯＳＳ🌹" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "23490425664773";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349042566473";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/ffdf8c03757ecbf76f9f9.jpg,https://telegra.ph/file/7a6cec822e09877a63a22.jpg,https://telegra.ph/file/9fb693e25d2312f73fa8a.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_58_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicXJ1UlF3bHBzQmhMVndWUDlScTV3ankvTzB0ZUJUZHlYUlFlN0Fsb2VKST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic3o5c3JfZUhUN2ltcF95Z25NMmJIZ1wiLFxuICBcInBob25lSWRcIjogXCJjOGI2M2QzNS04ZmQwLTQ4ODUtOGE4NS00ZjFkMjA1Yzc0MzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAyMTIsXG4gICAgICAxOCxcbiAgICAgIDEyOSxcbiAgICAgIDg3LFxuICAgICAgMjE2LFxuICAgICAgMTksXG4gICAgICA5NyxcbiAgICAgIDI1NSxcbiAgICAgIDIzOCxcbiAgICAgIDkzLFxuICAgICAgMTA2LFxuICAgICAgNTksXG4gICAgICAyOSxcbiAgICAgIDY5LFxuICAgICAgMjM1LFxuICAgICAgMTYsXG4gICAgICAxMTYsXG4gICAgICAyNDgsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICA3OSxcbiAgICAgIDE0NCxcbiAgICAgIDIzMCxcbiAgICAgIDc5LFxuICAgICAgOTQsXG4gICAgICAxNzksXG4gICAgICA3MCxcbiAgICAgIDE1NSxcbiAgICAgIDg3LFxuICAgICAgOTgsXG4gICAgICAxMTcsXG4gICAgICA0MyxcbiAgICAgIDIwNCxcbiAgICAgIDEwLFxuICAgICAgMjIwLFxuICAgICAgMjQ2LFxuICAgICAgNjYsXG4gICAgICAzNyxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFQ0tWODNTRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MDUxOTM0OTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDg2MzMwNDQwNDE5MDM6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZll5dEVGRU1pMHhiTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkU2U0srdk5PbFErRXZXY0ZuMHNOT29Da1pOV3NJVnlEa0VMdjJuNFVLVDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSXMxdmRIdk5abHJjczZIc0lIVHRTdnpVK0ZCQTBqeUVuSkxQK2htcHByZ1VUZ1U2T1ZYSEtyZ3JFYy9JWThDYmEyQTBOZXpJclgzYnJLSWUrN1hGQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibE5TZkZaYm9nWDk0WE4xc1BRR1kzQ1JNVmlPYldzclZ4TW1qL0dYNVMvU3dka01UbU1lUHFZRktFTlR4bmVkSFU3VnBhbGZYelJVRHNxcWIybU5UZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MDUxOTM0OTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODcwNDcxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg3bVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDdtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2lQeG5YbWNtb2FsYThZVUVVVDFObjI4OXVwbDJZdWNpZ3ZNekU4eW5QWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTEzMjcwMzkwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE3MTYwODg3NjU4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "Ｍ-ＣＲＯＳＳ🌹" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "mcross", 
  packname: process.env.PACK_NAME || "mcross",
  botname : process.env.BOT_NAME  || "Ｍ-ＣＲＯＳＳ🕷️",
  ownername:process.env.OWNER_NAME|| "Ｍ-ＣＲＯＳＳ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-28110cf6-6691-4aab-a947-32768be65671",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "NEZUKO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
