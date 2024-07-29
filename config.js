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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_40_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDU0LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0LFxuICAgICAgICA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDczLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA2LFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5bWx3dndhdm1VR1VHUFZGaU1uSm1aYWNFS0ZaaE04LzRFbC9pY3Bnak9jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNzc5OTgwOTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM5MkU3M0E0NDY0MzMxOUJFRjU2RkJBRDc3MjY4OTdCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI5NjQ1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoOTlwcmpFaVR2bWRMOHViQVdidUNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBlYzVhYzU1LTAxZGUtNDE3MS1hMWQ4LWZkZjNkMmU5YjE4OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICA2NixcbiAgICAgIDE5NCxcbiAgICAgIDI0NyxcbiAgICAgIDE4MCxcbiAgICAgIDExNixcbiAgICAgIDE3OCxcbiAgICAgIDQxLFxuICAgICAgMzAsXG4gICAgICAxMjQsXG4gICAgICA4MCxcbiAgICAgIDI0MixcbiAgICAgIDEyMixcbiAgICAgIDIyMixcbiAgICAgIDIxLFxuICAgICAgMTk0LFxuICAgICAgMTUyLFxuICAgICAgNzAsXG4gICAgICAxNzIsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAxOCxcbiAgICAgIDk4LFxuICAgICAgMSxcbiAgICAgIDEwNyxcbiAgICAgIDIyNyxcbiAgICAgIDE4NixcbiAgICAgIDEyMyxcbiAgICAgIDk5LFxuICAgICAgMTMsXG4gICAgICA0NyxcbiAgICAgIDIyNixcbiAgICAgIDE4OCxcbiAgICAgIDIwNSxcbiAgICAgIDIzNCxcbiAgICAgIDEwNCxcbiAgICAgIDc0LFxuICAgICAgMTQzLFxuICAgICAgMTc4LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNldNRFE4UlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzc5OTgwOTQ6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwOTI3NzE4ODQ2NDY3MDoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdWV4dG9ERVBiUW9MVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNvWkhzOGpHb0N3K056RlFjdzBoNzFxNzkrMG51MGt0R2d1ZDcwNTF4bE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic1NWWXFrV25iU2pjREhRc1pDdk54dXRQcEZrOU84RjVNNlppM053VTYrZmUyYng4bTR1RHIxU2hsMzVZSkVnVXZGZzBSQWlCaC82UU9PR0ZNc2h1REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZlk2dTEyKzFrWE9aVGliVHRUczQySWlFYnpxTjhpU0lnQXZrTFI5dlZrc3pxcUNFYVh3dzBZYVRucFlDTzBPbHNFaFFBMXBDVWVyRWxLRndYc3FkQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3Nzk5ODA5NDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjk2NDQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFVaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWZkFPSTh5Q3RqcHE4YTN2eFp2aEhPdzNFenpjTVY4WUR1Y3V6SzZyYlFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk5NTIwMDgxMCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTkzMTE0MDI3OVwifSIKfQ=="  // PUT your SESSION_ID 


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
