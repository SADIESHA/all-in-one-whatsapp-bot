const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "postgres://koyeb-adm:kR0OM6mVATGX@ep-young-hall-a2rojz4x.eu-central-1.pg.koyeb.app/koyebdb"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/SADIESHA/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴀɴsʜ-ᴍᴅ 405" 


global.devs = "923423399613" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923411489978";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_33_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDksXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA1MixcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOFE1M3NOaDdnUU5EMzlWRkU4WktQRm5oanVkTU1HUkRWbzU2cVN3eC9Jcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMzA3MTk0MDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQyMjQ2RTI5QkYwN0IxQzg2NTA2NzU5QUE4RkU0NDlCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzMzNTk5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEzMDcxOTQwNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0M2MjMyQUYxRjJFQThFNDM3NzIwNDI3QTE0RDU3QzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3MzM1OTk0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTMwNzE5NDA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4REUzQUNEOUFDMTQzNzI2Q0VDMDM1M0E2NDk0QTdFQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjczMzU5OTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMFQ5elFnRHZTRjJoazlhd2ZWa01yZ1wiLFxuICBcInBob25lSWRcIjogXCJmZWY1MTNkMS1iYzAzLTRmYTItOTVjNy0yMjMwZjk4ZjE3OTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICA2MixcbiAgICAgIDIxOCxcbiAgICAgIDU1LFxuICAgICAgODAsXG4gICAgICAyMzcsXG4gICAgICA2MyxcbiAgICAgIDQxLFxuICAgICAgMjA4LFxuICAgICAgMTYyLFxuICAgICAgODMsXG4gICAgICAyNTUsXG4gICAgICA4NyxcbiAgICAgIDEzMSxcbiAgICAgIDE2MSxcbiAgICAgIDMyLFxuICAgICAgODgsXG4gICAgICAyOSxcbiAgICAgIDIyMyxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMjE4LFxuICAgICAgNTYsXG4gICAgICA5NSxcbiAgICAgIDEyMyxcbiAgICAgIDYsXG4gICAgICAxMTUsXG4gICAgICAyMTgsXG4gICAgICA0OCxcbiAgICAgIDk4LFxuICAgICAgOTEsXG4gICAgICAxNDEsXG4gICAgICAyMTksXG4gICAgICAxNzQsXG4gICAgICA2NCxcbiAgICAgIDEwMCxcbiAgICAgIDk3LFxuICAgICAgNTEsXG4gICAgICAyNDEsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFRDTFdBTllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzMDcxOTQwNToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIHwnZCi8J2QpfCdkJrwnZClICBHXCIsXG4gICAgXCJsaWRcIjogXCIxMjYyNzM1NDg3MzkwMzoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYi82RUFRdEp6VXR3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjI1T3d0U2tiaHY4ZXdqU0lWYU9DUjJWZXlCeDVDZ1BmRHFLdlpWbDhOaXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWDJpMzFHYzlwQ2FIYkJaRHJ4Z0lBdmZUdXpHbFB5S1dNUUhVRG5QbFZXRGhYT0VRQXVpbVNLaEhLMmNqaGNEWWRHMVB0c0JweDk1YVFBK3N2M1FTQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYnZxMTB2S1NWWlRycDhoaTNmYms0TGwzRWNQaFczNVZ4VWZYQjhxSXFpVWQ2REpIQ3UvOStLUERkb1BXTUVWNW54RVFLVjFBT2tNR0NybXRaMGM1RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTMwNzE5NDA1OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MzM1OTkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSEh3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiLzlkYUdKdjZ4UlRIUTRDcmZmU0xvdWRLMDBmTEY1VVYwdVJ0TS9EblFFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNTkzODAwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3MjcwMTIyNzg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡Ansh彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "𝗔𝗡𝗦𝗛-𝗫𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "★彡Ansj彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
