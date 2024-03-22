'use strict';

// INITIALIZATION POINT OF THE PROGRAM.

/*
██████╗ ███████╗██╗   ██╗ ██████╗██╗  ██╗ █████╗ ██╗███╗   ██╗       █████╗ ██████╗ ██╗
██╔══██╗██╔════╝██║   ██║██╔════╝██║  ██║██╔══██╗██║████╗  ██║      ██╔══██╗██╔══██╗██║
██║  ██║█████╗  ██║   ██║██║     ███████║███████║██║██╔██╗ ██║█████╗███████║██████╔╝██║
██║  ██║██╔══╝  ╚██╗ ██╔╝██║     ██╔══██║██╔══██║██║██║╚██╗██║╚════╝██╔══██║██╔═══╝ ██║
██████╔╝███████╗ ╚████╔╝ ╚██████╗██║  ██║██║  ██║██║██║ ╚████║      ██║  ██║██║     ██║
╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝      ╚═╝  ╚═╝╚═╝     ╚═╝
 * 


              ,.  _~-.,               .
           ~'`_ \/,_. \_
          / ,"_>@`,__`~.)             |           .
          | |  @@@@'  ",! .           .          '
          |/   ^^@     .!  \          |         /
          `' .^^^     ,'    '         |        .             .
           .^^^   .          \                /          .
          .^^^       '  .     \       |      /       . '
.,.,.     ^^^             ` .   .,+~'`^`'~+,.     , '
&&&&&&,  ,^^^^.  . ._ ..__ _  .'             '. '_ __ ____ __ _ .. .  .
%%%%%%%%%^^^^^^%%&&;_,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,
&&&&&%%%%%%%%%%%%%%%%%%&&;,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=
%%%%%&&&&&&&&&&&%%%%&&&_,.;^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,
%%%%%%%%%&&&&&&&&&-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-==--^'~=-.,__,.-=~'
##mjy#####*"'
_,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,.-=~'`^`'~=-.,__,.-=~'

~`'^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^
*/

// MODULES
import axios from 'axios';

// INTERFACES
import { FastifyInstance } from 'fastify';

// CONFIG
import config from './config';

// LOADERS
import load_server from './loaders';

async function init(): Promise<void> {
  // load_server returns a fastify instance with configured routes as well as mongodb database
  const server: FastifyInstance = await load_server();

  await server.listen({ port: Number(config.env.PORT), host: config.env.HOST });

  console.info(`🛡️  Server listening on port: ${config.env.PORT} 🛡️`);
}

init();
