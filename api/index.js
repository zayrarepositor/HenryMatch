//                          __    _                                   
//                     _wr""        "-q__                             
//                  _dP                 9m_     
//                _#P                     9#_                         
//               d#@                       9#m                        
//              d##                         ###                       
//             J###                         ###L                      
//             {###K                       J###K                      
//             ]####K      ___aaa___      J####F                      
//         __gmM######_  w#P""   ""9#m  _d#####Mmw__                  
//      _g##############mZ_         __g##############m_               
//    _d####M@PPPP@@M#######Mmp gm#########@@PPP9@M####m_             
//   a###""          ,Z"#####@" '######"\g          ""M##m            
//  J#@"             0L  "*##     ##@"  J#              *#K           
//  #"               `#    "_gmwgm_~    dF               `#_          
// 7F                 "#_   ]#####F   _dK                 JE          
// ]                    *m__ ##### __g@"                   F          
//                        "PJ#####LP"                                 
//  `                       0######_                      '           
//                        _0########_                                   
//      .               _d#####^#####m__              ,              
//       "*w_________am#####P"   ~9#####mw_________w*"                  
//           ""9@#####@M""           ""P@#####@M""                    

require('dotenv').config()
const mongoose = require("mongoose");
const {MONGODB_URI, PORT} = process.env;
const server = require('./src/app.js');



mongoose
    .connect(MONGODB_URI),{
        useNewUrlParser:true
    }
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error))

server.listen(PORT, () => console.log("server listening on " + PORT))