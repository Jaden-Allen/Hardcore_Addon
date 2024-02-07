import { world, system, ItemTypes, ItemStack, BlockType, BlockPermutation, Player } from "@minecraft/server";

world.afterEvents.entityDie.subscribe((event) => {
    let player = event.deadEntity;
    let players = world.getAllPlayers();

    players.forEach(_player => {
        if (_player == player) {
            player.runCommandAsync("gamemode spectator @s");
        }
    });
})

system.runInterval((event) => {
    let players = world.getAllPlayers();
    let host = players[0];

    host.runCommandAsync("difficulty hard");
}, 20)