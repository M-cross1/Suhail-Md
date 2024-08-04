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
global.github=process.env.GITHUB|| "https://github.com/M-cross1/Suhail-Md";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_53_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDY2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgMTE0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1EampmM25tVVRCUU9rRUYxT3JobUcxazFxNDJQeWViellQMlE2NTlMTGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA0MjU2NjQ3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjYxQzlFRUQ1NjkyMzdBQTgzRTI5NzNDMEVCMjAyNkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODA4Mzk3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVDRG55ZEJZUlhHSUJBMGZyVUtzQ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGNmNWRjZGQtNmUwMy00MDliLTgyZGYtMzFlNjY4ODA0YjM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMjUwLFxuICAgICAgMTE4LFxuICAgICAgMTk2LFxuICAgICAgOTAsXG4gICAgICA1NixcbiAgICAgIDk1LFxuICAgICAgMTcxLFxuICAgICAgMjM3LFxuICAgICAgMTk4LFxuICAgICAgMjM4LFxuICAgICAgMTk5LFxuICAgICAgMTI2LFxuICAgICAgMTQzLFxuICAgICAgNTEsXG4gICAgICA0LFxuICAgICAgMTQ5LFxuICAgICAgMTg3LFxuICAgICAgMCxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDUzLFxuICAgICAgMTM0LFxuICAgICAgMTkwLFxuICAgICAgNzQsXG4gICAgICA1OSxcbiAgICAgIDE5NixcbiAgICAgIDMwLFxuICAgICAgMTQwLFxuICAgICAgMjEwLFxuICAgICAgMTgxLFxuICAgICAgMTk3LFxuICAgICAgMCxcbiAgICAgIDQxLFxuICAgICAgMTU0LFxuICAgICAgMTY5LFxuICAgICAgMzQsXG4gICAgICAxOTEsXG4gICAgICAxNDUsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1hFNk4xTDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDI1NjY0NzM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTI4MTE3ODAyNzU6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTks0aHNJRkVNTHd2N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxZW1uMkVQZEhOS0l4VmRZdlJkZFp6WGQrL20wemdDcjZLM3NSbEx4WWljPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpEUzgwOXJUMHRGbkh4MGF2YzJzNnNPVkYrOFdseENiN0MxZ0lGZDNpK2xoZkYzalNrME1TOFE4MW1EVlBvOExwa0FnQ3lDemdOckdkcUJYc2w2SEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVCcVZndmlDT1RGZS9pK1czaXZoMWEwSWVrbkUrVFl3VUlsdzE4dURQeFY4eTlibUxNQmZzWnRhanN3R2FTbDFKdEZwTnFxY3AyZnhyZEhPeWJGZmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDI1NjY0NzM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjgwODM5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUwwdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDB2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVStHVW5xQnJKeDY1aTZPWlVhR3VlZnlUS2FscnZ1WFBJQXRQUVhuZmNVTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDgwNjk0ODY2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI4MDgzOTQ4NDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "⚡",
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
