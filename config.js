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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_58_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICA0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDU5LFxuICAgICAgICA4MixcbiAgICAgICAgMTEzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgODksXG4gICAgICAgIDY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkU1eWdYeStuVlhqUnBUZ3l2OUQ3NTY0QVYvOFdYbUJhT1phZGRvZHFUbVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImc5QVRWeUlxUTNxNFk4RVNlSjNzLUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQ5N2IyYzUtNzUyNy00OTM5LWI0MWQtOWNmYTY2YmFiZDg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDE3NyxcbiAgICAgIDIxNixcbiAgICAgIDUzLFxuICAgICAgMTY3LFxuICAgICAgMjI2LFxuICAgICAgMTQ0LFxuICAgICAgMTgsXG4gICAgICA0OSxcbiAgICAgIDcsXG4gICAgICAyMDAsXG4gICAgICAxMDgsXG4gICAgICAxMzgsXG4gICAgICAxMjksXG4gICAgICAxNzUsXG4gICAgICAxMDksXG4gICAgICAxNzksXG4gICAgICAzOSxcbiAgICAgIDE4MCxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE1OCxcbiAgICAgIDIyLFxuICAgICAgMTM2LFxuICAgICAgMTM1LFxuICAgICAgMTg1LFxuICAgICAgMjU0LFxuICAgICAgMTY0LFxuICAgICAgMjI3LFxuICAgICAgMTAyLFxuICAgICAgNjcsXG4gICAgICAxMjksXG4gICAgICAzMCxcbiAgICAgIDIzOCxcbiAgICAgIDI0NSxcbiAgICAgIDE0LFxuICAgICAgNzQsXG4gICAgICAyNTQsXG4gICAgICAxNDEsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTNaWFhQNkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDI1NjY0NzM6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTI4MTE3ODAyNzU6NzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTExrbzdNREVOQ2I0TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxU1NpbnBYd1pVRnA2ZnhzWmVUWlhiMG5tQlVIRTNOdnZoak9RLzhiUUhnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBmM2RiTVFqU0RMM2UrbVdNUHlPWDBSaWNpbXpNUnJ2ZXMwTmpQWWlZT1NkWmNLRmZMU2lsMWZXWlJ1Rnd0VkU2Q1VGNU83ZEt2bk9Md09WTHR6cUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkV4RzdKS3FrcmprS2Rta3MzUHdEbjQxQjhueXRtdTR6ajhiSzFVL0VaV3FGakRuU011M2JZdVhocE5UaUZJOWJTVDhuanhPNXdncFJVYUthQWJGTWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDI1NjY0NzM6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxNDM4OTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "⚡",
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
