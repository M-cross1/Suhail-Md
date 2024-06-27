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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_36_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MyxcbiAgICAgICAgNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDczLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MSxcbiAgICAgICAgNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgODcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkI4N2EyRU80c25EQWpCUHArN0JQV2w5SjNRQkRzQmpPbm8wRHBKaUZVa3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhmWjJDZ1dHVFZlY2h2ZmdrZGVEZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTEyZDcxOTAtZDhmYi00MWFjLTgxZmEtM2M2ZWVlNmRhMDBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDI1MCxcbiAgICAgIDI0MyxcbiAgICAgIDI0OCxcbiAgICAgIDExMSxcbiAgICAgIDEyMSxcbiAgICAgIDIwMCxcbiAgICAgIDEyOSxcbiAgICAgIDE3NyxcbiAgICAgIDc4LFxuICAgICAgMSxcbiAgICAgIDI4LFxuICAgICAgMTQ3LFxuICAgICAgMTY4LFxuICAgICAgMTUzLFxuICAgICAgNSxcbiAgICAgIDE5NixcbiAgICAgIDE2NixcbiAgICAgIDc4LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDIxLFxuICAgICAgNjEsXG4gICAgICA3NixcbiAgICAgIDgsXG4gICAgICAyMDksXG4gICAgICAxMjksXG4gICAgICA2MCxcbiAgICAgIDE5MCxcbiAgICAgIDE0MSxcbiAgICAgIDIzLFxuICAgICAgMTYwLFxuICAgICAgODQsXG4gICAgICAyMjcsXG4gICAgICAxMzEsXG4gICAgICAxMDgsXG4gICAgICA2LFxuICAgICAgMTczLFxuICAgICAgMTA0LFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZMN0syUEhZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU3MDM2MDc4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiKOKAneKAv+KAnSlkZSBqYSB2dVwiLFxuICAgIFwibGlkXCI6IFwiMTM2ODg0OTY5ODEyMDY0OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01uR2lQZ0tFSXZpOXJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZnUzeVpwbXBuc284Wk1FcWVUdUxaM01FTDBLRVU0UXY3WUkvcVYzSTdBaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKM280M01KQlVmSnlZdlRybzdFQ1Y4aDhmZW9rZkpSYVNxNEFoVHZCTVdWRDZiKzdEM1RrZzFLNG5JK3o3WktVMDVtUzZqWk9KZUpiTlRqNHptNU9EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJidjcyUmNQMGhtZWl6eDhVd21NdXJ1WGRYYlhHOGl6cmFMc3ZWanRGK1VGRytWV2s0T1ZkYVVYNmErOE1xVUh1SHZYK1RCT3NMQ2RpV1RlUmJqNk1Bdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU3MDM2MDc4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk1MTMzNTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLc2dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtzZy5qc29uIjogIntcImtleURhdGFcIjpcIndBMWhFb2JtQVk2NFVoUzBlYzNCUXVLUnJVSDh3b0dFOUxBMHVhV1NBOFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjkzNjE1MjkwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE5NTEzMzU5ODk2XCJ9Igp9"  // PUT your SESSION_ID 


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
