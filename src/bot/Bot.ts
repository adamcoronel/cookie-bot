import { HttpClient } from "./HttpClient.js";
import WebSocket from "ws";
import {
  GatewayOpcodes,
  GatewayVersion,
  type APIGatewayBotInfo,
  type APIGatewayInfo,
  type GatewayReceivePayload,
} from "discord-api-types/v10";

/**
 * A lightweight discord bot.
 */
export class Bot {
  private discordHttp: HttpClient;
  private gateway?: WebSocket;
  private gatewayURL?: APIGatewayInfo["url"];

  constructor() {
    this.discordHttp = new HttpClient(
      `https://discord.com/api/v${GatewayVersion}`,
      {
        "User-Agent":
          "cookie-bot (https://github.com/adamcoronel/cookie-bot, 1.0.0)",
        Authorization: `Bot ${process.env["DISCORD_TOKEN"]}`,
        "Content-Type": "application/json",
      },
    );
  }

  async start() {
    try {
      // 1. Establish a connection with the Gateway after fetching and caching a WSS URL.
      const gatewayInfo =
        await this.discordHttp.get<APIGatewayBotInfo>("/gateway/bot");

      this.gatewayURL = gatewayInfo.url;

      this.gateway = new WebSocket(
        `${this.gatewayURL}/?v=${GatewayVersion}&encoding=json`,
      );

      this.gateway.on("open", () => {
        console.log("Established connection with Gateway! :)");
      });

      // 2. Discord sends the bot a Hello event containing a heartbeat interval in milliseconds.
      this.gateway.on("message", (data) => {
        const payload = JSON.parse(data.toString()) as GatewayReceivePayload;
        const { op, d, s, t } = payload;

        if (op === GatewayOpcodes.Hello) {
          console.log("Heartbeat interval:", d.heartbeat_interval);

          // TODO: 3. Start the Heartbeat interval.

          // TODO: 4. Bot sends an Identify event to perform the initial handshake with the Gateway.

          // TODO: 5. Discord sends the bot a Ready event which indicates the handshake was successful and the connection is established.
        }
      });
    } catch (error) {
      console.error("Failed to start bot:", error);
    }
  }
}
