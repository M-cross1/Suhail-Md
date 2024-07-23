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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Afirca/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://Wa.me/2349042566473?text=Boss%20ＫＩＮＧ🍀Ｍ-ＣＲＯＳＳ%20my%20name%20is___%20and%20I've%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅";
global.website=process.env.GURL || "https://Wa.me/2349042566473?text=Boss%20ＫＩＮＧ🍀Ｍ-ＣＲＯＳＳ%20my%20name%20is___%20and%20I've%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "😈𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒😈" 


global.devs = "2349042566473" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349042566473";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349045743299";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/7a70f6c3dd2878bf26a48.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_48_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NixcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDQyLFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgODcsXG4gICAgICAgIDkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOFVlNHBHNkpOOHRuamtlenozaGdkQ0pYL2VmU3FOcmxDeXQrSzZPMEJrZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ2E2XzRtNUVSd2l3Q25Qb1hncWRRZ1wiLFxuICBcInBob25lSWRcIjogXCI1ZGE1MjhhNC05ZDM2LTQyZGMtYjRiYi04MzFlYWZkMWFmM2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICA0MSxcbiAgICAgIDEwOCxcbiAgICAgIDU1LFxuICAgICAgNzEsXG4gICAgICAxNDcsXG4gICAgICAxMzgsXG4gICAgICAyMzcsXG4gICAgICAxNDUsXG4gICAgICA0NSxcbiAgICAgIDQ2LFxuICAgICAgNDksXG4gICAgICA4OCxcbiAgICAgIDM2LFxuICAgICAgMjgsXG4gICAgICA5OCxcbiAgICAgIDk1LFxuICAgICAgMjM2LFxuICAgICAgNTYsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICAxMyxcbiAgICAgIDQ3LFxuICAgICAgMTMxLFxuICAgICAgNDEsXG4gICAgICAyNDQsXG4gICAgICAxNDAsXG4gICAgICAxOTIsXG4gICAgICAxNDAsXG4gICAgICAxMjEsXG4gICAgICAxNTEsXG4gICAgICAxMjksXG4gICAgICAxMjgsXG4gICAgICA5NCxcbiAgICAgIDI1MixcbiAgICAgIDcxLFxuICAgICAgMjAzLFxuICAgICAgMjI2LFxuICAgICAgMTU0LFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFHTEJGVlhYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ1NzQzMjk5OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjY0ODYxNTI5MDA3MDY6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGpBd3NzR0VOaVUvclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUMTZ0YnhvQUZHWWtBdk9oZUlXbHJPc3hjZzFKaUpBTmplMnhHdlcxcVE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkswS0UwL0VnTU5KL040U2FHc0t2VDdEdXpGeXN5ellDTENEaGU3WmNnU09xb3MxRDJZUmQ5UVh1bTlxMGlWRGpvS1NoR1RmZW91Zno2UkpCVit1YkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxMSVkwZCtFWmlEUlRqeW1ReW5ucSt2YzNRZWRVTDFvMXBidjRWdjJHSGFHRUQ0dGt6WmdBRnZ0aDZibXY1TUpaSHBvWEhPRUQzM1pVZHhCSjlpUml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDU3NDMyOTk6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MzE2NzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKa3ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUprdi5qc29uIjogIntcImtleURhdGFcIjpcIkdjTU52NnJJaGJrYjR1dFJtTTk5d0RqVlRCVGNaS1FyQkZxQm5EM2tKNUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2ODk4ODcyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNzMxNjc3NzczXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝐌-𝐂𝐑𝐎𝐒𝐒",
  ownername:process.env.OWNER_NAME|| "DozzyJosh",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
