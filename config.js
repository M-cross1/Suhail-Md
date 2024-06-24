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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_09_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICA0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICAxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDksXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM3LFxuICAgICAgICA5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDYwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4eEhsZklSblNSZTB4OXBpZHhIaFZ0d1I0WnFSOEcrM08yOWx4Y293Q2J3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTUHRTZzlCaFFraTdGRXJnZFE2a1dnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI1OTVmNzA0LTk2YjAtNGQwMS05MTZkLTIwYmMwNzUxZjNlMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICA3OSxcbiAgICAgIDk4LFxuICAgICAgMTI3LFxuICAgICAgNTEsXG4gICAgICAxMjQsXG4gICAgICAxMzUsXG4gICAgICA2OCxcbiAgICAgIDI0OSxcbiAgICAgIDE1NCxcbiAgICAgIDEyNCxcbiAgICAgIDQ5LFxuICAgICAgMjI3LFxuICAgICAgMTI2LFxuICAgICAgMTEyLFxuICAgICAgMjM3LFxuICAgICAgMTc5LFxuICAgICAgMjMxLFxuICAgICAgNSxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMTkzLFxuICAgICAgMTk5LFxuICAgICAgMjEsXG4gICAgICAyMjksXG4gICAgICAxNjAsXG4gICAgICAxNTUsXG4gICAgICAyNDEsXG4gICAgICA2MyxcbiAgICAgIDE1OSxcbiAgICAgIDY0LFxuICAgICAgNjgsXG4gICAgICA3MixcbiAgICAgIDIxNixcbiAgICAgIDEwMyxcbiAgICAgIDE4NCxcbiAgICAgIDIwMSxcbiAgICAgIDE5MCxcbiAgICAgIDE0MCxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhMRzFZREtWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY0NTYwNDEwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUaGVyYXBpc3RcIixcbiAgICBcImxpZFwiOiBcIjg1Mzg4NDc5NzA1MTE0OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTy9Pd1FRUXNaam1zd1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDWHM3MVp6ZGowVVNUVkY0WDZBck5ia0Y0RW5kRWkzLzlSSjA4Rk1MbGlrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNGemdCelJoT05tL2pJc3RNVndISFhFbmdxQkF1ajdMWVZqdWJ0WEVyaWdMQVJOTnRabUpYWWN6Mkc4QUVUL1Uxc1pVUW9wS1BvYm0zN1RIcy93YmlnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlA1UWR4bllWZ1pobVNneC93NDdja2tkbWZCQldpZStnY1Mrdk5ieDFoL1ZmcU1ZRXhhVUY1NTZibUZKaWJRTURiditYb0c2V3V1U3pvb2poY3I5ekJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjQ1NjA0MTA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjQxNzg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUdvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBR28uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWVlJ5UGVMRTlyeUtuYW4zN09wUVg2SHQxanc4QUlWSlluZWpuSFE1NVlnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk0NjM2NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTA4MjEzODI3MlwifSIKfQ=="  // PUT your SESSION_ID 


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
