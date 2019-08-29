import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("ServerInfo")
export default class ServerInfo {
    @JsonProperty('nu')
    playersNumber: string;

    @JsonProperty('m')
    playersMax: number;

    @JsonProperty('i')
    ip: string;

    @JsonProperty('p')
    port: number;

    @JsonProperty('a')
    name: string;

    @JsonProperty('ssl')
    ssl: number;

    constructor(players: number, playersMax: number, ip: string, port: number, name: string) {
        this.playersNumber = players + "/" + playersMax;
        this.playersMax = playersMax;
        this.ip = ip;
        this.port = port;
        this.name = name;
        this.ssl = 1;
    }
}