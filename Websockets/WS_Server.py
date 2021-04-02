import websockets
import asyncio
import logging
from websockets import WebSocketServerProtocol

logging.basicConfig(level=logging.INFO)
class Server:

    clients = set()

    async def register(self, ws: WebSocketServerProtocol ) -> None:
        self.clients.add(ws.)
        logging.info(f'{ws.remote_address} connected.')


    async def unregister(self, ws: WebSocketServerProtocol ) -> None:
        self.clients.remove(ws)
        logging.info(f'{ws.remote_address} disconnected.')


    async def send_to_all(self, message: str) -> None:
        if self.clients:
            await asyncio.wait([client.send(message) for client in self.clients])

    async def send_to_client(self, message: str, client: WebSocketServerProtocol) -> None:
        await client.send(message)
