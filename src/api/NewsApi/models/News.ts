export interface News {
    name: string;
    code: string;
    previewText: string;
    type: {
        value: string;
        xmlId: string;
    };
    date: Date;
    image: string;
}

export function newsFromApi(map: Record<string, any>): News {
    return {
        name: map.name,
        code: map.code,
        previewText: map.previewText,
        type: {
            value: map.type.value,
            xmlId: map.type.xmlId,
        },
        // Умножаем timestamp на 1000, потому что ожидает в милисекундах
        date: new Date(map.date * 1000),
        image: map.image,
    };
}

