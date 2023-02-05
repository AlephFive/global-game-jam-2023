
export enum TilemapLayer {
    Root = 'root',
    Resources = 'resources',
    Dirt = 'dirt'
}

export interface TilemapObject {
    tilemapIndex: number,
    tilemapLayer: TilemapLayer
}

export interface ResourceTile extends TilemapObject {
    id: number,
    type: ResourceTileType,
    resourceQuantity: number,
    ratePerSec: number
}

export const Dirt: TilemapObject = {
    tilemapIndex: 17,
    tilemapLayer: TilemapLayer.Dirt
};

export const Root: TilemapObject = {
    tilemapIndex: 2,
    tilemapLayer: TilemapLayer.Root
};

export enum ResourceTileType {
    Water = "water",
    Potassium = "potassium"
}

// 2 = red

export const Water = (id: number, quantity: number, tileIndex : number): ResourceTile => {
    return {
        id: id,
        type: ResourceTileType.Water,
        tilemapIndex: tileIndex,
        resourceQuantity: quantity,
        ratePerSec: 1,
        tilemapLayer: TilemapLayer.Resources
    }
}

export const Potassium = (id: number, quantity: number): ResourceTile => {
    return {
        id: id,
        type: ResourceTileType.Potassium,
        tilemapIndex: 5,
        ratePerSec: 1,
        resourceQuantity: quantity,
        tilemapLayer: TilemapLayer.Resources
    }
}

// export const Sunlight = (quantity: number): Resource => {
//     return {
//         tilemapIndex: 4,
//         resourceQuantity: quantity,
//         tilemapLayer: TilemapLayer.Resources
//     }
// }
export const WaterConfigurations : number[][][] =
[
    // basic 4x4
    [[0, 3],
    [12, 15]]
];